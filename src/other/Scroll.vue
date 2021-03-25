<template>
  <div
    class="scroll-container"
    :class="{ transition: isTransition }"
    ref="scrollContainer"
    @touchstart.stop="handlerTouchStart"
    @touchmove.stop="handlerTouchMove"
    @touchend.stop="handlerTouchEnd"
  >
    <!-- 根据isDisplay.refresh 动态隐藏显示 -->
    <div :class="['refresh', { display: isDisplay.refresh }]">
      <!-- 添加isShrnked 加载 和 箭头相互转换 -->
      <!-- 添加rotate类 反转箭头 下箭头和上箭头互相转换 -->
      <img
        :src="isShrinked ? loadImg : refreshImg"
        :class="{ rotate: isRotate }"
      />
    </div>
    <slot></slot>
    <!-- 根据isDisplay.load 动态隐藏显示 -->
    <div :class="['load', { display: isDisplay.load }]">
      <img :src="loadImg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

interface IsDisplay {
  refresh: boolean;
  load: boolean;
}

export default defineComponent({
  props: {
    // 能够拖拽的最大距离
    maxDistance: {
      style: Number,
      default: 300
    },
    // 定义触发加载刷新事件的拉伸长度
    triggerDistance: {
      style: Number,
      default: 100
    }
  },
  setup(props, ctx) {
    // ref
    const scrollContainer = ref<any>(null);

    // 拖拽状态 true：下拉  false：上拉
    const SCROLLSTATUS = ref<boolean>(false);

    // 添加emit缓存数组，并以undefined填充
    const emitEvents = new Array(2).fill(undefined);

    // 记录鼠标点击的位置
    let startLocation = 0;
    // 记录移动的位置
    let moveDistance = 0;
    // 延迟恢复拖拽
    const isTransition = ref<boolean>(false);
    // 根据状态显示刷新还是加载
    const isDisplay = reactive<IsDisplay>({
      refresh: true,
      load: true
    });
    // 把图片地址抽离出来 方便动态切换
    const loadImg = ref<string>(
      'https://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif'
    );
    const refreshImg = ref<string>(
      'https://www.easyicon.net/api/resizeApi.php?id=1190769&size=48'
    );
    // 是否选择箭头
    const isRotate = ref<boolean>(false);
    // 是否收缩完成
    const isShrinked = ref<boolean>(false);

    // 获取手指触屏时的屏幕Y轴位置
    function handlerTouchStart(e: any) {
      // 取消延迟拖拽
      isTransition.value = false;
      startLocation = e.touches[0].pageY;
      // 重置箭头反转
      isRotate.value = false;
      // 重置箭头
      isShrinked.value = false;
    }

    // 获取手指移动的距离
    function handlerTouchMove(e: any) {
      if (moveDistance > props.maxDistance + 1) {
        isRotate.value = true;
        return false;
      }
      moveDistance = Math.floor(e.touches[0].pageY - startLocation);
      scrollContainer.value.style.transform = `translateY(${moveDistance}px)`;
      // 显示加载 刷新图片
      if (moveDistance > props.triggerDistance && isDisplay.refresh) {
        isDisplay.refresh = false;
      } else if (moveDistance < -props.triggerDistance && isDisplay.load) {
        isDisplay.load = false;
      }
      // 缓存刷新的emit
      if (moveDistance > props.triggerDistance && !emitEvents[0]) {
        emitEvents[0] = function () {
          ctx.emit('refresh', displayDiv);
        };
      }
      // 缓存加载的emit
      if (moveDistance < -props.triggerDistance && !emitEvents[1]) {
        emitEvents[1] = function () {
          ctx.emit('load', displayDiv);
        };
      }
    }

    // 获取手指松开的Y轴位置
    function handlerTouchEnd() {
      // 记录拖拽状态是为上拉还是下拉
      SCROLLSTATUS.value = moveDistance > 0;
      // 延迟恢复拖拽
      isTransition.value = true;
      // 恢复原位
      scrollContainer.value.style.transform = 'translateY(0px)';
      if (Math.abs(moveDistance) < props.triggerDistance) {
        return (moveDistance = 0);
      }
      // 清除已移动的距离
      moveDistance = 0;
      // 拖拽距离是否大于指定的触发长度
      // 容器位置恢复后触发
      setTimeout(() => {
        shrinked();
      }, 700);
      // 遍历emit并执行
      emitEvents.forEach((fn, index) => {
        if (!fn) return;
        emitEvents[index] = undefined;
        fn();
      });
    }

    // 容器恢复后的操作
    function shrinked() {
      if (SCROLLSTATUS.value) {
        // 下拉刷新业务逻辑
        // 已经恢复完，箭头转为加载
        isShrinked.value = true;
        console.log('这是下拉操作');
      } else {
        // 上拉加载业务逻辑
        console.log('这是上拉操作');
      }
      // 隐藏刷新、加载
      isDisplay.refresh = true;
      isDisplay.load = true;
    }

    // 该方法通过ctx.emit()传给外部组件调用 然后隐藏刷新、加载的gif图片
    function displayDiv() {
      isDisplay.refresh = true;
      isDisplay.load = true;
    }

    return {
      isTransition,
      isDisplay,
      loadImg,
      refreshImg,
      isRotate,
      isShrinked,
      scrollContainer,
      handlerTouchStart,
      handlerTouchMove,
      handlerTouchEnd
    };
  }
});
</script>

<style lang="less" scoped>
.scroll-container {
  background-color: yellow;
  // 上拉/下拉样式
  .load,
  .refresh {
    text-align: center;
  }
  .load img,
  .refresh img {
    width: 20px;
  }
  .display {
    display: none;
  }
}
// 拖拽延迟样式
.transition {
  transition: all 0.7s;
}
// 翻转样式
.rotate {
  transition: transform 0.3s;
  transform: rotate(180deg);
}
</style>
