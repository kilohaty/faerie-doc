import Vue from 'vue';
import Faerie from 'faerie';
import '../../assets/css/example.styl';
import 'faerie/dist/index.css';

Vue.use(Faerie);

new Vue({
  el: '#app',

  data() {
    return {
      catMap: [
        '家居日用',
        '进口零食',
        '基础护肤',
        '心机彩妆',
        '个人护理',
        '穿衣搭配',
        '美颜保健',
      ],
      activeAnchor: '',
      timestamp: 0,
      floorItemNum: 12,
    }
  },

  methods: {
    async change() {
      const num = Math.round(Math.random() * 30);
      this.floorItemNum = num < 5 ? 5 : num;
    },

    recalc() {
      this.timestamp = Date.now();
      this.$toast({message: '已计算', duration: 500});
    },

    goto() {
      this.activeAnchor = 'anchor3';
    }
  }
});