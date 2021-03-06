function getTarget(ev) {
  const e = ev || window.event
  return e.target || e.srcElement
}
function getEventType(ev) {
  const e = ev || window.event
  return e.type
}

// 替代setInterval
class Interval {
  _timer = -1
  set(cb, wait, ...args) {
    let startTime = new Date().getTime()
    var interv = () => {
      let endTime = new Date().getTime()

      // console.log('endTime-startTime:', endTime - startTime)
      // console.log('-----------:')
      if (endTime - startTime > wait) {
        cb.call(null, ...args)
        startTime = endTime
      }
      this._timer = window.requestAnimationFrame(interv)
    }
    this._timer = window.requestAnimationFrame(interv)
  }
  clear() {
    window.cancelAnimationFrame(this._timer)
  }
}

function throttle(fn, duration) {
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, duration)
    } else {
      return
    }
  }
}

function debounce(func, delay) {
  let timer = null

  return function (...args) {
    clearTimeout(t)
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}

function trimSpace(str) {
  return str.replace(/\s+/g, '')
}

function tplReplace(template, replaceObj) {
  return template.replace(/{{(.*?)}}/g, (Obj, key) => {
    return replaceObj[key]
  })
}

function filterData(data, id) {
  console.log('id:', id)
  id = Number(id)
  if (id === 0) {
    return data
  }

  return data.filter((item, index) => {
    return item.field === id
  })
}

export { getTarget, getEventType, Interval, throttle, debounce, trimSpace, tplReplace, filterData }
