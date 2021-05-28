export default {
  install(app: Record<string, any>) {
    app.directive('imgLazy', {
      mounted(el: HTMLImageElement, bind: Record<string, any>) {
        const io = new IntersectionObserver(callback, { threshold: 0 });

        // 开始观察
        io.observe(el);

        function callback(entries: Record<string, any>) {
          if (entries[0].isIntersecting) {
            // 当图片url无效加载失败的时候使用默认图片替代
            el.onerror = function () {
              el.src = '';
            }
            el.src = bind.value
            // 停止观察
            io.unobserve(el);
            // 关闭观察器
            io.disconnect();
          }
        }
      }
    })
  }
}
