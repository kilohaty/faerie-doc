<template>
  <main>
    <div class="side-nav">
      <ul>
        <li v-for="item in pages">
          <a :href="`../${item.page}/index.html`">{{item.nameZh}}</a>
        </li>
      </ul>
    </div>
    <section class="content">
      <slot></slot>
    </section>
  </main>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  main
    display flex

  .side-nav
    width 120px
    padding 0 20px 0 0
    ul
      padding 0
      list-style none
      li
        > a
          display block
          line-height 40px
          font-size 16px
          color #005ff0
          text-decoration none
        > a:hover
          color darken(#005ff0, 20%)

  .content
    width calc(100% - 200px)

</style>

<script type="text/babel">
  export default {
    data() {
      return {
        pages: [
          {page: 'start', nameZh: '开始使用'},
          {page: 'button', nameZh: '按钮'},
          {page: 'toast', nameZh: 'Toast'},
          {page: 'scroll', nameZh: '滚动容器'},
          {page: 'anchor-nav', nameZh: '锚点导航'},
        ],
      }
    }
  };
</script>