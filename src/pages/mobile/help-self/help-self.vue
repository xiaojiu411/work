<template>
  <div class="help-self">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <m-list :list="list" @selectItem="selectItem"></m-list>
  </div>
</template>

<script>
  const rootLink = '/mobile/help-self/'
  import MList from 'MComponents/m-list/m-list'

  export default {
    data() {
      return {
        headData: {
          title: '自助安全中心',
          leftIcon: 'arrowr',
          rightIcon: 'kefu2',
        },
        list: [
          {
            text: '忘记密码',
            id: 'forgetPwd',
            path: rootLink + 'forget-pwd'
          },
          {
            text: '忘记账号',
            id: 'forgetAccount',
            path: rootLink + 'forget-account'
          },
          {
            text: '解冻账号',
            id: 'unBindAccount',
            path: rootLink + 'unbind-account'
          },
          {
            text: '解绑银行卡',
            id: 'unBindCard',
            path: rootLink + 'unbind-card'
          },
        ]
      }
    },
    computed: {},
    created() {
    },
    methods: {
      back() {
        this.$router.back()
      },
        openService() {
          window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
      },
      selectItem(item) {
        this.$router.push({
          path: item.path
        })
      }
    },
    watch: {

    },
    components: {MList}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  .help-self
    mobile-wrapper()

</style>