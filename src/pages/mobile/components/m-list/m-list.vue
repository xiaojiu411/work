<template>
  <div class="m-list">
    <ul>
      <li v-if="item.id !== 'zs' || (typeof vipEWM === 'string')" :class="{active:idx === currentIdx}"
          v-for="(item,idx) in list">
        <div class="tit" @click="selectItem(item,idx)">
          <p>
            <i v-if="item.icon" class="icon-badge-shit" :class="getIcon(item)"></i>
            <span>{{item.text}}</span>
          </p>
          <i class="iconfont icon-arrow"></i>
        </div>

        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    props: {
      currentIdx: {
        type: Number,
        default: -1
      },
      list: {
        type: Array,
        default: []
      }
    },
    computed: {},
    created() {
    },
    methods: {
      getIcon(item) {
        return `iconfont icon-${item.icon}`
      },
      selectItem(item, idx) {
        this.$emit('selectItem', item, idx)
      },
    },
    watch: {},
    components: {}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .m-list
    background $color-light
    li
      &.active
        .icon-arrow
          transform rotate(90deg)
      .tit
        display flex
        justify-content space-between
        align-items center
        line-height 40px
        m-wrapper()
        border-bottom 1px solid $color-border-gray
        .icon-badge-shit
          display inline-block
          width 25px
          margin-right 5px
          font-size 20px
          vertical-align middle
          color $color-blue-mobile
        .icon-arrow
          transition all .3s ease-in
      .sub
        padding 20px
        background $color-dark-gray
        line-height 21px
        img
          max-width 100%
          margin-bottom 10px

</style>