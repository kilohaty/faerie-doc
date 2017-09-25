import Vue from 'vue';
import Faerie from 'faerie';
import Layout from '../../components/layout.vue';
import '../../assets/css/example.styl';
import 'faerie/dist/index.css';

Vue.use(Faerie);

new Vue({
  el: '#app',
  data() {
    return {
      elSelector: '',
    }
  },
  methods: {
    centerEle(i) {
      this.elSelector = `.scroll-item-${i}`;
      this.$nextTick(() => this.elSelector = '');
    }
  },
  components: {
    Layout,
  }
});
