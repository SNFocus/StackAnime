export const debounce = function (func, gap) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, gap)
  }
}

export const throttle = function (func, gap) {
  let last = 0
  return function () {
    const now = new Date().getTime()
    if (now - last > gap) {
      func.apply(this, arguments)
      last = new Date().getTime()
    }
  }
}
