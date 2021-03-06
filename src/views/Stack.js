export class AnimeLoader {
  static duration = 1000
  constructor () {
    this.animations = []
    this.animeTask = []
  }

  addTask (action) {
    const func = this[action]
    if (!func) return
    const arg = Array.from(arguments).slice(1)
    this.animeTask.push(func.bind(this, ...arg))
    if (this.animeTask.length === 1) {
      this.animeTask[0]()
    }
  }

  clearTask () {
    this.animeTask.length = 0
  }

  /**
   * 将偏移量字符串转为数组
   * @param {*} target - 需要进行动画的元素
   * @param {*} pos - 动画帧坐标偏移量 例如 '0 0, -30 50'  0 0 代表初始坐标
   */
  genFrames (target, pos) {
    const res = []; const frameStr = pos.split(/\s*,\s*/)
    for (let i = 0; i < frameStr.length; i++) {
      const [x, y] = frameStr[i].trim().split(/\s+/).map(Number)
      res.push({ x: target.x + x, y: target.y + y })
    }
    return res
  }

  doNextTask () {
    this.animeTask.shift()
    const func = this.animeTask[0]
    func && func()
  }

  startAnime (id, pos, cb, gap) {
    const target = this.getItem(id).target
    const frames = this.genFrames(target, pos)
    const setAttr = conf => {
      target.x = conf.x
      target.y = conf.y
      target.animate = true
    }
    setAttr(frames[0])
    // frames.length + 1 是为了增加一次延迟 等动画完全结束后再执行cb
    for (let i = 1; i < frames.length + 1; i++) {
      setTimeout(() => {
        if (i === frames.length) {
          this.doNextTask()
          cb && cb()
        } else {
          setAttr(frames[i])
        }
      }, i * (gap || AnimeLoader.duration))
    }
  }

  refreshItem (id, x, y, val) {
    const { target } = this.getItem(id)
    if (!target) return
    target.val = val
    target.x = x
    target.y = y
  }

  addItem (id, x, y, val) {
    const item = { _id: id, x, y, val, animate: false }
    this.animations.push(item)
  }

  delItem (id) {
    const index = this.getItem(id).index
    if (index > -1) {
      this.animations.splice(index, 1)
    }
  }

  clearItem () {
    this.animations.length = 0
  }

  clearAnimeFlag (immediate = false) {
    const func = () => this.animations.forEach(t => {
      t.animate = false
    })
    if (immediate) {
      func()
      return
    }
    setTimeout(func, AnimeLoader.duration)
    this.doNextTask()
  }

  getItem (id) {
    let target = null; let index = null
    this.animations.some((t, i) => {
      if (t._id === id) {
        target = t
        index = i
        return true
      }
      return false
    })
    return { target, index }
  }
}
const actionTask = []

const diffH = (from, to, fh, th) => {
  return (from.length() - 1) * fh - to.length() * th
}
// 用于覆盖
const diffH2 = (from, to, fh, th) => {
  return (from.length() - 1) * fh - (to.length() - 1) * th
}

export class Stack {
  static id = 0
  static animeLoader = null
  static maintainState = false
  combinationActions = ['merge'] // 组合动作 - 该动作涵盖了复数单一动作
  /**
   * @constructor
   * @param {Number} sx - 栈容器横坐标
   * @param {Number} sy - 栈容器竖坐标
   * @param {Number} cw - 栈元素宽度
   * @param {Number} ch - 栈元素高度
   */
  constructor (sx = 0, sy = 0, cw = 0, ch = 0, isLandscape = false, data = []) {
    this.setProp(sx, sy, cw, ch, isLandscape)
    this.children = data.map((t, i) => this.createItem(t, i))
  }

  setProp (sx, sy, cw, ch, isLandscape) {
    this.sx = sx
    this.sy = sy
    this.cw = cw
    this.ch = ch
    this.isLandscape = isLandscape
  }

  isEmpty () {
    return this.children.length === 0
  }

  length () {
    return this.children.length
  }

  getHead () {
    return this.isEmpty() ? null : this.children[this.length() - 1]
  }

  static idIncrease () {
    return ++this.id
  }

  isCombination (action) {
    return this.combinationActions.includes(action)
  }

  addAction (action) {
    if (!this[action]) return
    const arg = Array.from(arguments).slice(1)
    if (this.isCombination(action)) {
      this[action](...arg)
      return
    }
    const actionFunc = this[action].bind(this, ...arg)
    actionTask.push(actionFunc)

    if (actionTask.length === 1) {
      this.loopAction()
    }
  }

  loopAction () {
    if (actionTask[0]) {
      Stack.maintainState && Stack.animeLoader.clearAnimeFlag(true)
      actionTask[0]()
    }
  }

  afterAction (cb) {
    return () => {
      cb && cb()
      actionTask.shift()
      !Stack.maintainState && Stack.animeLoader.clearAnimeFlag(true)
      this.loopAction()
    }
  }

  getPosByIndex (index) {
    let x, y
    if (this.isLandscape) {
      y = this.sy
      x = this.sx + this.cw * index
    } else {
      x = this.sx
      y = this.sy - this.ch * index
    }
    return { x, y }
  }

  createItem (val, index, addToLoader = true) {
    const item = { _id: Stack.idIncrease(), val }
    if (addToLoader) {
      const { x, y } = this.getPosByIndex(index)
      Stack.animeLoader.addItem(item._id, x, y, val)
    }
    return item
  }

  refresh (sx, sy, cw, ch, isLandscape, children) {
    this.setProp(sx, sy, cw, ch, isLandscape)
    if (children) {
      this.children = children.map((t, i) => this.createItem(t, i))
    } else {
      this.children.forEach((child, idx) => {
        const { x, y } = this.getPosByIndex(idx)
        Stack.animeLoader.refreshItem(child._id, x, y, child.val)
      })
    }
  }

  // [单一方法]
  // 入栈
  push (val, startPos) {
    const item = this.createItem(val, this.length())
    const offset = this.isLandscape ? `${this.cw} 0` : `0 -${this.ch}`
    Stack.animeLoader.addTask('startAnime', item._id, `${startPos || offset} , 0 0`,
      this.afterAction(() => this.children.push(item)))
  }

  // [单一方法]
  // 出栈
  pop () {
    const headItem = this.getHead()
    if (!headItem) return
    const offset = this.isLandscape ? `${this.cw} 0` : `0 -${this.ch}`
    const pos = `0 0, ${offset}`
    Stack.animeLoader.addTask(
      'startAnime',
      headItem._id,
      pos,
      this.afterAction(() => {
        const item = this.children.pop()
        Stack.animeLoader.delItem(item._id)
      }))
  }

  // [单一方法]
  // 交换栈顶数据
  // overlay == true 覆盖最上面的元素 否则追加
  popTo (to, cb, overlay = false) {
    const from = this
    const topVal = from.getHead()
    if (!topVal) return
    const dh = overlay ? diffH2 : diffH
    const offset = this.isLandscape
      ? [-dh(from, to, from.cw, to.cw), to.sy - from.sy]
      : [to.sx - from.sx, dh(from, to, from.ch, to.ch)]
    const pos = '0 0,' + offset.join(' ')
    const callback = cb || (() => { to._push(from._pop()) })
    Stack.animeLoader.addTask(
      'startAnime',
      topVal._id,
      pos,
      this.afterAction(callback),
      overlay ? 1 : undefined
    )
  }

  moveStack ({ offset = 1, lastCB, gap = 1 } = {}) {
    this.children.forEach((child, idx) => {
      const x = this.isLandscape ? offset * this.cw : 0
      const y = this.isLandscape ? 0 : -offset * this.ch
      const pos = `0 0,${x} ${y}`
      const cb = idx === this.length() - 1 ? lastCB : null
      Stack.animeLoader.addTask('startAnime', child._id, pos, cb, gap)
    })
  }

  unshift (val) {
    const func = () => {
      const item = this.createItem(val, -1)
      const offset = this.isLandscape ? `${this.cw} 0` : `0 -${this.ch}`
      const cb = () => this.children.unshift(item)
      Stack.animeLoader.addTask('startAnime', item._id, `0 0, ${offset}`, cb, 200)
      const lastCB = this.afterAction()
      this.moveStack({ lastCB })
    }
    setTimeout(func, AnimeLoader.duration) // 为了让其他元素移动结束再执行
  }

  overlay (to, cb) {
    this.popTo(to, cb, true)
  }

  exchange (to) {
    const from = this
    this.overlay(to, () => {})
    to.overlay(from, () => {
      const t = to._pop()
      const f = from._pop()
      to._push(f)
      from._push(t)
    })
  }

  // [单一方法]
  // 合并元素
  mergeItem (len, gap = 100) {
    const ids = []
    const fromLen = this.length()
    const delData = id => {
      Stack.animeLoader.delItem(id)
      this._pop()
    }
    const afterFunc = () => ids.forEach(delData)
    for (let i = 0; i < len; i++) {
      const id = this.getItemByIdx(fromLen - i - 1)._id
      ids.push(id)
      const isLast = i === len - 1
      const cb = isLast ? this.afterAction(afterFunc) : undefined
      const offset = this.isLandscape ? `${this.cw * i} 0` : `0 -${this.ch * i}`
      Stack.animeLoader.addTask('startAnime', id, `0 0, ${offset}`, cb, isLast ? undefined : gap)
    }
  }

  // [组合方法]
  // 合并元素并生成合并值
  merge (len, mergeVal) {
    const count = this.length() < len ? this.length() : len
    const startPos = this.isLandscape ? `${this.cw * (count - 1)} 0` : `0 -${this.ch * (count - 1)}`
    this.addAction('mergeItem', count)
    this.addAction('push', mergeVal, startPos)
  }

  /** ****  下划线开头的方法不执行动画  ******/
  _push (item) {
    return this.children.push(item)
  }

  _pop () { return this.children.pop() }

  getItemByIdx (idx) {
    if (this.isEmpty()) return null
    if (idx > this.length() - 1) return null
    return this.children[idx]
  }
}
