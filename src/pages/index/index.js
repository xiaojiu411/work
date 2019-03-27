// 游戏
import VJackpot from '@/components/v-jackpot/v-jackpot.vue'
import GameList from '@/components/game-list/game-list'
import Banner from '@/components/banner/banner'
import mainBlock from './main-block/main-block.vue'
import advantage from './advantage/advantage.vue'
import {queryList, checkConfigSystem, getBannerData} from '@/api/index'
import config from '@/common/js/config'
import {mapGetters} from 'vuex'
import {ajaxRequst} from '@/common/js/util'

export default {
  mixins: [],
  data() {
    return {
      config,
      //banner
      slides: [],
      //奖池
      options: {
        startNum: 301518148,//开始数
        endNum: 30151814800000,//结束数
        stepNum: 0.01,//每次增加
        step: 50,//变频
        styleObj: {
          display: 'block',
          fontSize: '80px',
          color: '#fffce8',
          margin: '20px 0 0 430px',
        },
      },
      // 推荐游戏
      filterList: [
        {
          "id": 25660,
          "gameId": "trpmnk",
          "gameCode": "trpmnk",
          "gameCName": "三倍猴子",
          "gameEName": "Triple Monkey",
          "gameLine": "5-10",
          "imageUrl": "https://tg.shdunjiusy.com/yl/game/PT/trpmnk.jpg",
          "gameStatus": "3",
          "gameCategory": "PTASIA",
          "gameTerminal": "PC",
          "gameType": "SLO",
          "gameStyle": null,
          "gameTag": "HOT,SM",
          "gameLanguage": "zh_CN",
          "gameSort": 26,
          "recommendIndex": 5,
          "popularityIndex": 99999,
          "jackpotFlag": "N",
          "recommendFlag": "N",
          "popularFlag": "N",
          "trdFlag": "N",
          "collectFlag": "N"
        },
        {
          "id": 16110,
          "gameId": "summon-conquer",
          "gameCode": "summon-conquer",
          "gameCName": "国王的召唤",
          "gameEName": "summon conquer",
          "gameLine": "05-10",
          "imageUrl": "https://tg.shdunjiusy.com/yl/game/PG/summon-conquer.jpg",
          "gameStatus": "3",
          "gameCategory": "PG",
          "gameTerminal": "PC",
          "gameType": "SLO",
          "gameStyle": null,
          "gameTag": "NEW",
          "gameLanguage": "zh_CN",
          "gameSort": 8,
          "recommendIndex": 5,
          "popularityIndex": 99999,
          "jackpotFlag": "N",
          "recommendFlag": "N",
          "popularFlag": "N",
          "trdFlag": "N",
          "collectFlag": "N"
        },
        {
          "id": 25538,
          "gameId": "ashtmd",
          "gameCode": "ashtmd",
          "gameCName": "成交时刻",
          "gameEName": "Time for a Deal",
          "gameLine": "25-30",
          "imageUrl": "https://tg.shdunjiusy.com/yl/game/PT/ashtmd.jpg",
          "gameStatus": "3",
          "gameCategory": "PTASIA",
          "gameTerminal": "PC",
          "gameType": "SLO",
          "gameStyle": null,
          "gameTag": "SM",
          "gameLanguage": "zh_CN",
          "gameSort": 87,
          "recommendIndex": 5,
          "popularityIndex": 99999,
          "jackpotFlag": "N",
          "recommendFlag": "N",
          "popularFlag": "N",
          "trdFlag": "N",
          "collectFlag": "N"
        },
        {
          "id": 36992,
          "gameId": "casinomagnates",
          "gameCode": "casinomagnates",
          "gameCName": "赌场大亨",
          "gameEName": "Casino Tycoon",
          "gameLine": "25-30",
          "imageUrl": "https://tg.shdunjiusy.com/zb/game/DT/a19dd216-fa47-4b39-877d-705540a9934a.png",
          "gameStatus": "3",
          "gameCategory": "DT",
          "gameTerminal": "PC",
          "gameType": "SLO",
          "gameStyle": "",
          "gameTag": "NEW",
          "gameLanguage": "zh_CN",
          "gameSort": 0,
          "recommendIndex": 5,
          "popularityIndex": 20000,
          "jackpotFlag": "Y",
          "recommendFlag": "N",
          "popularFlag": "N",
          "trdFlag": "N",
          "collectFlag": "N"
        }
      ],
      //弹框数据
      indexAlertData: {
        list: '',
        tips: ''
      },
      isShowIndexAlertDialog: true,
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  created() {
    this._getBannerData()
    this._checkConfigSystem()
    // this._getRecommendGameList()
  },
  methods: {
    //首页弹框信息
    _checkConfigSystem() {
      checkConfigSystem({
        typeNo: 'type003',
        itemNo: '001'
      }).then((res) => {
        if (this.ERR_OK === res.code) {
          // res.data = "首页公告#1. 使用久安定制存款加赠1.5%,【快速买卖】进行交易再送10万币送完为止！\u003cbr/\u003e2.【9月17号限时存送优惠】『存30送21』『存100送50』『存500送160』3选1\u003cbr/\u003e3. 填写智能客服问卷调查 , 如您的建议采纳 , 即可获得惊喜彩金!\u003cbr/\u003e4. MG真人隆重登场，高质感游戏体验火热上线 !\u003cbr/\u003e温馨提示：\u003cbr/\u003e 1.禁止多账号套限时，首存，等其他优惠，一经发现将扣除盈利\u003cbr/\u003e2.请务必在每次充值前都要在官网获取收款账户在进行充值！如果没有确认账号充值到停用账户，皆不受理#\t"
          let flag = res.data.split('#')[1]
          this.indexAlertData.list = flag.split('温馨提示：')[0]
          this.indexAlertData.tips = '温馨提示：' + flag.split('温馨提示：')[1]
        }
      })
    },
    //获取banner数据
    _getBannerData() {
      let baseUrl = 'http://220.241.124.160:15002'
      if (process.env.NODE_ENV === 'production') {
        baseUrl = ''
      }
      let url = baseUrl + '/api/personal/carouselMapConfig/list'
      ajaxRequst(url, 'POST', {position: "1", displaySide: "1"}).then((res) => {
        if (res.code === this.ERR_OK || this.ERR_OK_OTHER === res.code) {
          if (res.data.length) {
            this.slides = res.data.map((item) => {
              item.src = item.imageUrl
              item.href = item.jumpLink
              return item
            })
          }
        } else {
          this.$message({
            type: 'warning',
            message: res.message
          })
        }
      })

    },
    // 获取热门游戏
    _getRecommendGameList() {
      queryList({recommendFlag: "Y"}).then((res) => {
        if (this.ERR_OK_OTHER === res.code) {
          this.filterList = res.data.dataList.slice(0, 4)
        }
      })
    }
  },
  components: {
    VJackpot,
    GameList,
    Banner,
    mainBlock,
    advantage
  }
}