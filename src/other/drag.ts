// @ts-nocheck
// 自定义指令 - 弹框拖拽
export const drag = {
  beforeMount: (el, binding, vnode) => {
    vnode = vnode.el;
    el.onmousedown = (event => {
      if (event.target.className !== "my_dialog_title") {
        return
      }
      // (clientX, clientY)点击位置距离当前可视区域的坐标(x，y)
      // offsetLeft, offsetTop 距离上层或父级的左边距和上边距

      // 获取鼠标在弹窗中的位置
      let mouseX = event.clientX - vnode.offsetLeft
      let mouseY = event.clientY - vnode.offsetTop

      // 绑定移动和停止函数
      document.onmousemove = ((event) => {
        let left, top

        // 获取新的鼠标位置(event.clientX, event.clientY)
        // 弹窗应该在的位置(left, top)
        left = event.clientX - mouseX
        top = event.clientY - mouseY

        // offsetWidth、offsetHeight 当前元素的宽度
        // innerWidth、innerHeight 浏览器可视区的宽度和高度

        // 获取弹窗在页面中距X轴的最小、最大 位置
        let minX = -vnode.offsetWidth / 2 + 100
        let maxX = window.innerWidth + vnode.offsetWidth / 2 - 100
        if (left <= minX) {
          left = minX
        } else if (left >= maxX) {
          left = maxX
        }

        // 获取弹窗在页面中距Y轴的最小、最大 位置
        let minY = vnode.offsetHeight / 2
        let maxY = window.innerHeight + vnode.offsetHeight / 2 - 100
        if (top <= minY) {
          top = minY
        } else if (top >= maxY) {
          top = maxY
        }
        // 赋值移动
        vnode.style.left = left + 'px'
        vnode.style.top = top + 'px'
      })
      document.onmouseup = (() => {
        document.onmousemove = document.onmouseup = null
      })
    })
    window.onresize = (() => {
      vnode.style.left = "50%"
      vnode.style.top = "50%"
    })
  }
}