<template>
  <div class="tab-border">
    <span @click="select(idx,item)" :class="{active:idx === currentIdx,primary}" v-for="(item,idx) in list">{{item.text}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props:{
      list:{
        type:Array,
        default:[]
      },
      currentIdx:{
        type:Number,
        default:0
      },
      primary:{
        type:String,
        default:''
      }
    },
    computed: {},
    created() {
    },
    methods: {
      select(idx,item){
        this.$emit('selectTabItem',idx,item)
      }
    },
    watch: {},
    components: {}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .tab-border
    height 56px
    line-height 56px
    display flex
    //box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.24)
    span
      flex 1
      text-align center
      font-size 16px
      transition all .3s ease-in
      border none
      cursor pointer
      &.active
        position relative
        color #6ba0f9
        border none
      &.active:after
        position absolute
        content:" "
        width 28%
        height 2px
        bottom 8px
        left 36%
        background #6ba0f9
      &.active.primary:after,&.primary:hover
        font-weight 600
        color #6ba0f9

</style>