<template>
  <div class="">
	   <div class="">
      <ui class="step-nav">
        <li>
          <span :class="{spanActive:index==8}" v-for="(item,index) in titList" href="">{{item.value}}</span>
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
      <h2 style="color:#FF004F">国家/城市下无可用商圈信息</h2>
      <div class="list">
        <div class="nextButton">保存下一步</div>
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
    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {

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
</style>
