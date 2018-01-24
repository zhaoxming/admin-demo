<template>
  <div class="">
	   <div class="">
      <ui class="step-nav">
        <li>
          <span :class="{spanActive:index==6}" v-for="(item,index) in titList" href="">{{item.value}}</span>
        </li>
      </ui>
      <div class="list" style="marginTop:20px">
        <span>房源SKU：</span>
        <Input  readonly  placeholder="S00679820" style="width: 100px;marginRight:40px"></Input>
        <span>标题：</span>
        <Input  readonly  placeholder="标题" style="width: 260px;marginRight:40px"></Input>
        <span>状态：</span>
        <Input  readonly  placeholder="申请上架" style="width: 100px"></Input>
      </div>
      <h2>系统</h2>
      <div class="list" v-for="item in spanList1">
        <span class="spanBox"><el-checkbox :label="item.name1"></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name2" ></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name3" ></el-checkbox></span>
      </div>
      <h2>设施</h2>
      <div class="list" v-for="item in spanList2">
        <span class="spanBox"><el-checkbox :label="item.name1"></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name2" ></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name3" ></el-checkbox></span>
      </div>
      <div class="list">
        <span class="spanBox"><el-checkbox label="免费清洁" ></el-checkbox></span>
      </div>
      <h2>增值服务</h2>
      <div class="list" v-for="item in spanList3">
        <span class="spanBox"><el-checkbox :label="item.name1"></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name2" ></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name3" ></el-checkbox></span>
      </div>
      <h2>其他</h2>
      <div class="list" v-for="item in spanList4">
        <span class="spanBox"><el-checkbox :label="item.name1"></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name2" ></el-checkbox></span>
        <span class="spanBox"><el-checkbox :label="item.name3" ></el-checkbox></span>
      </div>
      <div class="list">
        <span class="spanBox"><el-checkbox label="全网最低"></el-checkbox></span>
        <span class="spanBox"><el-checkbox label="可短租" ></el-checkbox></span>
      </div>
      <h2>活动</h2>
      <div class="list" v-for="item in spanList5">
        <span class="spanBox"><el-checkbox :label="item.name"></el-checkbox></span>
      </div>
      <div class="list">
        <div @click="next" class="nextButton">保存下一步</div>
      </div>
     </div>

  </div>
</template>

<script>
export default {
  name: 'two',
  data () {
    return {
      titList:[
        {
          value:'1.基础信息',
          link:'/one'
        },
        {
          value:'2.学校信息',
          link:'/two'
        },
        {
          value:'3.房型信息',
          link:'/three'
        },
        {
          value:'4.公寓房信息',
          link:'/four'
        },
        {
          value:'5.便利设施',
          link:'/five'
        },
        {
          value:'6.图片视频',
          link:'/six'
        },
        {
          value:'7.房源标签',
          link:'/seven'
        },
        {
          value:'8.收费说明',
          link:'/eight'
        },
        {
          value:'9.商圈',
          link:'/nine'
        },
      ],
      spanList1:[
        {
          name1:'免费健身会员',
          name2:'订房优惠3%',
          name3:'免费预订'
        },
        {
          name1:'四月入住',
          name2:'付费预定',
          name3:'火爆抢房'
        },
        {
          name1:'一月入住',
          name2:'男生限定',
          name3:'减免押金'
        },
        {
          name1:'18/19学年开放预定',
          name2:'性价比高',
          name3:'火爆预定中'
        },
        {
          name1:'热门公寓！',
          name2:'只限女生',
          name3:'Uhouzz独家优惠'
        },
        {
          name1:'水电全包',
          name2:'预定返现￥500',
          name3:'卡迪夫好运来独家房源'
        },
        {
          name1:'随时入住',
          name2:'小居看房记',
          name3:'实地勘察房源'
        },
        {
          name1:'VIP服务',
          name2:'特别推荐',
          name3:'送￥300机票券'
        },
        {
          name1:'优质学区房',
          name2:'学校公寓',
          name3:'新装修'
        },
        {
          name1:'火爆预订',
          name2:'全新公寓',
          name3:'小居推荐'
        },
      ],
      spanList2:[
        {
          name1:'游戏室',
          name2:'屋顶花园',
          name3:'靠近考文垂大学'
        },
        {
          name1:'电影院',
          name2:'无限制的网络',
          name3:'带滑梯'
        },
        {
          name1:'户型多样',
          name2:'免设施费',
          name3:'步行至地铁'
        },
        {
          name1:'河景',
          name2:'步行至大学',
          name3:'室内洗衣机/烘干机'
        },
        {
          name1:'网络免费',
          name2:'包水电',
          name3:'花园式公寓'
        },
        {
          name1:'高速网络',
          name2:'健身房',
          name3:'酒店配套'
        },
        {
          name1:'靠近购物中心',
          name2:'停车位',
          name3:'四星酒店配套'
        },
        {
          name1:'独立卫浴',
          name2:'出门即为预科语言学校',
          name3:'交通便捷'
        },
        {
          name1:'娱乐中心',
          name2:'毗邻公园享美好生活',
          name3:'允许养宠物'
        },
        {
          name1:'学习室',
          name2:'含免费早餐',
          name3:'免费班车'
        },
        {
          name1:'土库',
          name2:'带家具',
          name3:'游泳池'
        },
      ],
      spanList3:[
        {
          name1:'早鸟优惠：免费送WIFI',
          name2:'团订统一返现200RMB',
          name3:'团订大于4人返现500RMB'
        },
        {
          name1:'团订2-4人返现300RMB',
          name2:'团订1-2人返现200RMB',
          name3:'享政府补贴'
        },
        {
          name1:'合作公寓',
          name2:'免费打扫',
          name3:'没有免费打扫'
        },
        {
          name1:'每两周免费打扫',
          name2:'送$50 gift card',
          name3:'限时优惠'
        },
        {
          name1:'提供家具',
          name2:'家具服务',
          name3:'免费接机'
        }
      ],
      spanList4:[
        {
          name1:'2%优惠',
          name2:'公寓管家',
          name3:'免费手机卡'
        },
        {
          name1:'抽奖返现',
          name2:'可接受18年秋季预订',
          name3:'免服务费'
        },
        {
          name1:'价格随时波动',
          name2:'步行到VU',
          name3:'UCD学生最佳选择'
        },
        {
          name1:'靠近UQ',
          name2:'满减',
          name3:'团订特惠'
        },
        {
          name1:'靠近QUT',
          name2:'靠近USYD&UTS',
          name3:'秒进USYD'
        },
        {
          name1:'靠近MQ',
          name2:'靠近USYD',
          name3:'位于市中心'
        },
        {
          name1:'USYD校园内',
          name2:'近市中心',
          name3:'靠近UTS'
        },
        {
          name1:'近迪肯大学',
          name2:'步行到迪肯大学',
          name3:'紧邻墨大'
        },
        {
          name1:'迪肯大学对面',
          name2:'Coming Soon即将开放',
          name3:'付全款3%折扣'
        },
        {
          name1:'独家优惠，免3周房费',
          name2:'独家优惠，免2周房费',
          name3:'独家预定'
        },
        {
          name1:'价格详询顾问',
          name2:'火爆预售中',
          name3:'靠近GU'
        },
        {
          name1:'IES学生首选',
          name2:'12月起预定$1200/月',
          name3:'11月1日-11月30日定$1000/月'
        },
        {
          name1:'立即预定享受$950/月',
          name2:'10月底之前预定立省3000美金',
          name3:'超低价格'
        },
        {
          name1:'可整租',
          name2:'早鸟优惠',
          name3:'非阿德莱德大学学生申请'
        },
        {
          name1:'无需一次性付一年房租！',
          name2:'可以半年起租',
          name3:'可以月付！'
        },
        {
          name1:'豪华新公寓，Bills全包',
          name2:'预订返现£1000',
          name3:'高级套间可住双人'
        },
        {
          name1:'11月份火爆预定',
          name2:'2018年火爆预订',
          name3:'单人公寓'
        },
        {
          name1:'订房返现500英镑',
          name2:'特价优惠',
          name3:'2018年1月开业'
        },
        {
          name1:'送£600 Love2Shop抵用券',
          name2:'劲爆特价',
          name3:'特价房'
        },
        {
          name1:'新公寓',
          name2:'18年2月火爆预定',
          name3:'限时短租优惠'
        },
        {
          name1:'已住满',
          name2:'付全款返现£100',
          name3:'预订返现£250'
        },
        {
          name1:'推荐好友送£150',
          name2:'入住返现£150',
          name3:'£1订房'
        },
        {
          name1:'送£150入住大礼包',
          name2:'预订送£50亚马逊购物券',
          name3:'推荐好友入住返现£300'
        },
        {
          name1:'预订返现140英镑',
          name2:'先到先得，减免/返现200英镑',
          name3:'预定返现£200'
        },
        {
          name1:'送50英镑优惠券',
          name2:'获得£200 love2shop 抵用券',
          name3:'部分房型返现£500'
        },
        {
          name1:'推荐好友入住返现50英镑',
          name2:'预定返现£100',
          name3:'现在预定减£300'
        },
        {
          name1:'推荐好友入住送Splendour入场券',
          name2:'QUT/QU学生优惠',
          name3:'无中介费'
        },

        {
          name1:'推荐好友预定返现£100',
          name2:'预订减£200或送公交卡',
          name3:'预订送£100购物券'
        },
        {
          name1:'预订免押金',
          name2:'部分房型折扣价',
          name3:'免费床上用品/厨房用品'
        },
        {
          name1:'可选室友',
          name2:'租期最短可3个月',
          name3:'团购预订￥300'
        },
        {
          name1:'超级棒地理位置',
          name2:'Large Studio有优惠',
          name3:'学习氛围好'
        },
        {
          name1:'独栋别墅',
          name2:'拎包入住',
          name3:'地理位置优越'
        },

        {
          name1:'酒店式服务',
          name2:'Kaplan学生有折扣',
          name3:'可提供餐食'
        },
        {
          name1:'接受18岁以下学生',
          name2:'租期一年减￥500',
          name3:'全网独家'
        },
        {
          name1:'团购减免¥100',
          name2:'成团预订减￥200',
          name3:'Large Studio 可返¥300'
        },
        {
          name1:'Studio 房型可返¥300',
          name2:'入住返现￥550',
          name3:'成团预订减￥500'
        },
        {
          name1:'全网独家优惠',
          name2:'赠送床上礼包',
          name3:'可租半年'
        },
        {
          name1:'接受Couple',
          name2:'限时抢购',
          name3:'UTS / MQ学生优惠'
        },
        {
          name1:'UTS学生优惠',
          name2:'赠送床上用品',
          name3:'早鸟预订'
        },
        {
          name1:'首赴美短租过渡最优选',
          name2:'IIT学生最爱',
          name3:'全网最低价'
        },
        {
          name1:'现在预订优惠5%',
          name2:'独家优惠',
          name3:'接受UNSW U18'
        },
      ],
      spanList5:[
        {
          name:'个人折扣3%。团体5%： 现在订房个人3%折扣，团体折扣5%'
        },
        {
          name:'推荐入住返现100英镑： 推荐好友入住返现100英镑'
        },
        {
          name:'订房享折扣： 现在订房个人折扣1%，团体折扣1.5%'
        },
        {
          name:'送手机卡加一个月话费： 现在订房送手机卡加一个月话费'
        },
        {
          name:'低定金： 预订仅需£100'
        },
        {
          name:'订房优惠： 个人5%折扣 团体6%-10%优惠'
        },
        {
          name:'预定房间返现200英镑： 前100名预定返现200英镑'
        },
        {
          name:'预定立减300英镑： 前30名预定且是第一次预定的立减300英镑'
        },
        {
          name:'即可预订，租期满一年减免一个月房租： 即可预订，租期满一年减免一个月房租a'
        },
        {
          name:'预定优惠： 部分房型预定5个月或者以上减免3周，11个月减6周！！'
        },
        {
          name:'预定立减£100： 预定房间前35名且是第一次预定租金立减100英镑'
        },
        {
          name:'分期付款： 现在订房可以分两期付款'
        },
        {
          name:'早鸟优惠3%： 现在订房有早鸟优惠3%'
        },
        {
          name:'预定最高优惠500英镑： 现在预定房间最高优惠500英镑'
        },
        {
          name:'首次预定返现250英镑： 现在订房立减250英镑'
        },
        {
          name:'现在入住，在2018年1月1日前房租免费： 现在入住，2018年1月1日前房租免费'
        },
        {
          name:'预定立减250英镑： 前50名预定且是第一次租金立减250英镑'
        },
        {
          name:'家具大礼包： 家具大礼包'
        },
        {
          name:'前十名免$400押金： 前十名免$400押金'
        },
        {
          name:'圣诞优惠： 现在预订，即享圣诞优惠'
        },
        {
          name:'比官网优惠$800： 现在预订，比官网优惠$800'
        },
        {
          name:'赠送$35折扣券： 现在预订，赠送$35折扣券'
        },
        {
          name:'18-19秋季随机减免： 现在预订，18-19秋季随机减免'
        },
        {
          name:'免$400押金： 现在预订，免$400押金'
        },
        {
          name:'减免申请费管理费： 现在预订，减免申请费管理费'
        },
        {
          name:'订房赠送厨具： 现在订房立送厨具'
        },
        {
          name:'订房赠送床品： 现在订房赠送床上用品'
        },
        {
          name:'赠送保险： 现在订房立送Endsleigh保险'
        },
        {
          name:'限时预定返现： 2017.12.31前预定获得cashback 200镑'
        },
        {
          name:'预定送250英镑： 前20名预定且第一次预定立送250英镑'
        },
        {
          name:'付全款5%折扣： 一次性付款享租金5%优惠'
        },
        {
          name:'预定送£100优惠券： 1月31号前预定入住时获亚马逊优惠券£100'
        },
        {
          name:'推荐入住送50英镑购物券： 推荐好友入住送50英镑亚马逊购物券'
        },
        {
          name:'现在预定减免两个月租金： 现在预定减免两个月租金'
        },
        {
          name:'1月入住减免一个月租金： 1月入住减免一个月租金'
        },
        {
          name:'推荐立送200英镑： 推荐入住 Shared Bathroom /En-suite room送100英镑或者入住Studio送200英镑'
        },
        {
          name:'推荐入住送最高送200英镑： 推荐预定En-suite room送100英镑或者预定Studio/Shared Apartment送200英镑'
        },
        {
          name:'推荐送100英镑： 推荐入住Shared bathroom / En-suite room，Liberty Living 账户送100英镑。'
        },
        {
          name:'推荐好友入住送100英镑： 推荐好友入住 En-suite room送100英镑'
        },
        {
          name:'推荐好友入住送200英镑： 推荐好友入住Studio room送200英镑或者住 En-suite room 送100英镑'
        },
        {
          name:'推荐入住送200英镑： 推荐好友入住，Liberty Account最高送200英镑'
        },
        {
          name:'推荐入住送100英镑： 推荐朋友预定En-suite room，Liberty Account立送100英镑'
        },
        {
          name:'团购送购物券： 4人以上成团送购物券100英镑'
        },
        {
          name:'独家担保： 优惠价格保证/零服务费'
        },
        {
          name:'返现100英镑： 预定返现100英镑'
        },
        {
          name:'预定立减£150： 预定房间前2名且是第一次预定租金立减150英镑'
        },
        {
          name:'预定立减150英镑： 预定房间前6名且是第一次预定租金立减150英镑'
        },
        {
          name:'预定立减£200： 预定房间前50名且是第一次预定租金立减200英镑'
        },
      ]

    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {
    next(){
      this.$router.push('/eight')
    }
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list{
  height: 25px;
  line-height: 25px;
  margin-bottom: 20px;
  >span{
    display: inline-block;
    width: 100px
  }
  .spanBox{
    width:300px;
  }
  .ss1{
    float: left;
    width:450px;
    height:150px;
    border: 1px solid #ccc;
    margin-right: 120px;
  }
  .ss2{
    float: left;
    width:450px;
    height:150px;
    border: 1px solid #ccc;
  }
  .nextButton{
    width: 100px;
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    background: #ff5a5f none repeat scroll 0 0;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
  }
}
.bor{
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

</style>
