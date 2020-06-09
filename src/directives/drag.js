import { throttle } from '@/assets/utils.js'
function onLabelMouseDown (event) {
  const { offsetX, offsetY } = event
  const label = event.currentTarget
  label.classList.add('dragging')

  const move = throttle((ev) => {
    label.style.left = (ev.pageX - offsetX) + 'px'
    label.style.top = (ev.pageY - offsetY) + 'px'
  }, 50)

  document.body.addEventListener('mousemove', move)

  const remove = () => {
    label.classList.remove('dragging')
    document.body.removeEventListener('mousemove', move)
    document.body.removeEventListener('mouseup', remove)
  }

  document.body.addEventListener('mouseup', remove)
}

export default {
  bind: function (el, binding, vnode) {
    el.classList.add('drag-label')
    el.onmousedown = onLabelMouseDown
  },
  inserted: function () {},
  update: function () { },
  unbind () { }
}
