<template>
  <div id="myChart" style="width: 100%; height: 400px"></div>
</template>

<script>
/* eslint-disable */
import { defineComponent, onMounted } from 'vue';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';

export default defineComponent({
  setup() {
    onMounted(() => {
      // 初始化实例
      var chartContainer = document.getElementById('myChart');
      var myChart = echarts.init(chartContainer);

      // 组装echarts折线图所需要的数据
      var xAxisData = [];
      var seriesData = [];
      for (var i = 0; i < 3; i++) {
        xAxisData.push(new Date().getTime());
        seriesData.push(i++);
      }

      // 配置项
      var options = {
        title: {
          text: '统计',
          left: 'center'
        },
        // 坐标轴指示器
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['数量'],
          top: '7%'
        },
        // grid 组件离容器的距离
        grid: {
          left: 100,
          bottom: 100
          // containLabel:true 防止标签溢出
        },
        xAxis: {
          type: 'category',
          // splitLine:{show:true},
          data: xAxisData,
          axisLabel: {
            // 显示所有横坐标刻度
            interval: 0,
            //坐标倾斜
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '数量',
            // 图表类型
            type: 'line',
            // 显示数值
            itemStyle: { normal: { label: { show: true } } },
            data: seriesData
          }
        ]
      };

      //载入配置
      myChart.setOption(options);

      // 图表自适应窗口大小
      window.addEventListener('resize', function() {
        myChart.resize();
      });
    });
  }
});
</script>
