<template>
  <div class="">
	   <div class="">
      <ui class="step-nav">
        <li>
          <span :class="{spanActive:index==7}" v-for="(item,index) in titList" href="">{{item.value}}</span>
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
      <h2>收费说明</h2>
      <div class="list" style="height:auto">
        <Row>
            <Col class="tableTit" span="2">中文名</Col>
            <Col class="tableTit" span="2">英文名</Col>
            <Col class="tableTit" span="2">价格</Col>
            <Col class="tableTit" span="16">描述</Col>
            <Col class="tableTit" style="borderRight:1px solid #ccc" span="2">操作</Col>
        </Row>
      </div>
      <div class="list">
        <span class="tit">收费说明模版</span>
        <span style="float:right">共有<span style="color:#ff5a5f">1</span>条数据</span>
      </div>
      <div class="list" style="height:auto">
        <Row>
            <Col class="tableTit" span="1">模板ID</Col>
            <Col class="tableTit" span="2">中文名</Col>
            <Col class="tableTit" span="3">英文名</Col>
            <Col class="tableTit" span="1">价格</Col>
            <Col class="tableTit" span="15">描述</Col>
            <Col class="tableTit" style="borderRight:1px solid #ccc" span="2">操作</Col>
        </Row>
        <Row type="flex" v-for="(item,index) in tableList">
            <Col class="tablemain" span="1"><span>{{index+1}}</span></Col>
            <Col class="tablemain" span="2"><span>{{item.cnName}}</span></Col>
            <Col class="tablemain" span="3"><span>{{item.enName}}</span></Col>
            <Col class="tablemain" span="1"><span>{{item.price}}</span></Col>
            <Col class="tablemain" span="15" style="textAlign:left;paddingLeft:10px;">
              <p>{{item.descripition[0]}}</p>
              <p>{{item.descripition[1]}}</p>
            </Col>
            <Col class="tablemain" style="borderRight:1px solid #ccc" span="2">
              <span style="color:#ff5a5f;marginRight:10px;cursor:pointer"><i class="icon iconfont icon-edit"></i>启用</span>
            </Col>
        </Row>
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
      tableList:[
        {
          cnName:'申请费',
          enName:'Application fee',
          price:'0',
          descripition:['申请公寓必须缴纳的费用','fees must pay when applying for accommodation']
        },
        {
          cnName:'押金',
          enName:'Security deposit  ',
          price:'0',
          descripition:['一般为一个月租金，退房时退还','an amount paid when you agree to rent a house, apartment, etc., which its owner can keep if you leave before the end of the agreement or damage the property']
        },
        {
          cnName:'背景调查费用',
          enName:'Credit Check',
          price:'0',
          descripition:['对申请者进行信用背景调查','an examination of applicant credit history, for example, a financial organization that is considering lending them money or a possible employer']
        },
        {
          cnName:'物业管理费',
          enName:'Admin fee',
          price:'0',
          descripition:['为物业使用人或所有人提供物业管理服务','It is a cost to provide adminstrative serive to the residents or tenants.']
        },
        {
          cnName:'宠物押金',
          enName:'Pet deposit',
          price:'0',
          descripition:['宠物造成伤害的赔偿押金',"It is a deposit for potiential damage caused by tenants' pet(s)."]
        },
        {
          cnName:'搬入费',
          enName:'Move-in fee ',
          price:'0',
          descripition:['多数公寓收取搬入费多用于更换邮箱、重设门铃、更换门牌号等','Many condo associations use this as a way of recovering the cost of administering the change of updating mailboxes, reprogramming buzzers, changing directories etc.']
        },
        {
          cnName:'订房费',
          enName:'Holding deposit ',
          price:'0',
          descripition:['公寓为申请者保留房子的费用','A kind of fee required to help applicants hold rooms they like']
        },
        {
          cnName:'租赁保险',
          enName:'leasehold insurance',
          price:'0',
          descripition:['正规公寓入住必须j交纳保险','security insurance required by legal property is necessarily important in case of all possible risks']
        },
        {
          cnName:'会客厅和烧烤区',
          enName:'parlor&BBQ area',
          price:'0',
          descripition:['包场预订需要费用，平时用免费','free to use in common cases, but extra charges are expected for specific purposes like reserving the whole area']
        },
        {
          cnName:'健身房使用费',
          enName:'gym fee',
          price:'0',
          descripition:['有的另收，有的包含在amenity fee当中','Some included in the amenity fee,some have additional charges']
        },
        {
          cnName:'宠物租金',
          enName:'Pet fee',
          price:'0',
          descripition:['根据租客的租期长短，动物租客交纳一定的费用，相当于动物租客的租金','According to the tenancy period, tenants who owned pets will be charged for the accommodation of pets']
        },
        {
          cnName:'配套设施使用费',
          enName:'Amenity fee',
          price:'0',
          descripition:['配套设施使用费用，主要是公共设施的使用费用','Charge of facilities,mainly for the use of public facilities']
        },
        {
          cnName:'公共设施费',
          enName:'Utitlity fee',
          price:'0',
          descripition:['水电煤气网等，包含的类项会有不同','Utility bills of electricity, water, gas and Internet connection, and the details varies on different conditions']
        }

      ]
    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {
    next(){
      this.$router.push('/nine')
    }
    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list{
  height: 33px;
  line-height: 33px;
  margin-bottom: 20px;
  >span{
    display: inline-block;
    width: 100px
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
.tit{
  font-weight: 700
}
.tableTit{
  font-weight: 700;
  text-align: center;
  border: 1px solid #ccc;
  border-right: none;
}
.tablemain{
  text-align: center;
  border: 1px solid #ccc;
  border-right: none;
  border-top: none;
  position: relative;
  span{
    position: absolute;
    top:50%;
    margin-top: -15px;
    display:inline-block;
    width:100%;
    left:0%;
  }
}
</style>
