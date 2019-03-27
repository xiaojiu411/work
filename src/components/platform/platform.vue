<template>
  <div class="game-type wrapper">
    <router-link v-if="item.path" v-for="item in platformList" :to="{path:item.path}">{{item.text}}</router-link>
    <a v-if="!item.path" v-for="item in platformList" @click="playGame(bbinLogin,{gameKind:'game',gameCode:'',mode:'pc'})" href="javascript:;">
      BBIN 老虎机
    </a>
  </div>
</template>

<script>
  import {bbinLogin} from '@/api/index'
  import {playGame} from '@/common/js/mixin'

  export default {
    mixins: [playGame],
    data() {
      return {
        bbinLogin
      }
    },
    props:{
      platformList:{
        type:Array,
        default:[]
      }
    },
    computed: {},
    created() {
    },
    methods: {},
    watch: {},
    components: {}
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .game-type
    background $color-light
    border-bottom 1px solid $color-border-gray
    display flex
    a
      position relative
      flex 1
      line-height 60px
      text-align center
      transition all .3s ease-in
      border-bottom 2px solid transparent
      &.active,&:hover
        font-weight 600
        color $color-primary
        border-bottom 2px solid $color-primary
      &:nth-child(1):before,&:nth-child(3):before
        content ''
        position absolute
        left 1px
        top 15px
        width 20px
        height 24px
        background url("./img/hot.gif") no-repeat


</style>