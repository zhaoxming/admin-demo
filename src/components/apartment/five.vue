<template>
  <div class="">
	   <div class="">
      <ui class="step-nav">
        <li>
          <span :class="{spanActive:index==4}" v-for="(item,index) in titList" href="">{{item.value}}</span>
        </li>
      </ui>
      <div class="list" style="marginTop:20px">
        <span>房源SKU：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="S00679820" style="width: 100px;marginRight:40px"></Input>
        <span>标题：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="标题" style="width: 260px;marginRight:40px"></Input>
        <span>状态：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="编辑中" style="width: 100px"></Input>
      </div>
      <h2>室内设施</h2>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="洗衣机" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="厨房" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="餐厅" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="暖气" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="家具" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="地下室" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="Wi-Fi" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="空调" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="衣帽间" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="有线网络" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="露台/阳台" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="电视" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="电脑" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="炉具" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="洗碗机" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="搅拌机" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="微波炉" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="冰箱" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="烘干机" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="烤箱" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="床" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="书桌" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="阳台" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="露台" border></el-checkbox>
      </div>
      <h2>社区设施</h2>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="停车位" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="健身房" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="允许养宠物" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="游泳池" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="门禁系统" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="娱乐中心" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="学习室" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="花园" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="自行车库" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="垃圾处理" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="水处理" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="公共交通" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="购物" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="网球场" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="公园" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="高尔夫球场" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="医疗设施" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="洗衣房" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="自行车道" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="教堂" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="私立学校" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="公立学校" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="大学" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="烧烤区" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="瑜伽室" border></el-checkbox>
      </div>
      <div class="list">
        <el-checkbox :disabled="$route.params.status==0" label="篮球馆" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="免费班车" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="学校" border></el-checkbox>
        <el-checkbox :disabled="$route.params.status==0" label="自动售货机" border></el-checkbox>
      </div>
      <h2>附加设施</h2>
      <div class="list">
        <span style="width:100px;">附加设施：</span>
        <Button size="small" style="marginRight:20px" type="info">中>英</Button>
        <Button size="small" style="marginRight:40px" type="info">英>中</Button>
      </div>
      <div class="list" style="height:300px">
        <div style="float:left;marginRight:120px">
          <quill-editor :disabled="$route.params.status==0" style="fontSize:14px;height:200px;width:450px;"></quill-editor>
        </div>
        <div style="float:left">
          <quill-editor :disabled="$route.params.status==0"  style="fontSize:14px;height:200px;width:450px;"></quill-editor>
        </div>
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
      /*  {
          value:'5.便利设施',
          link:'/five'
        },*/
        {
          value:'5.房源图片',
          link:'/six'
        },
        // {
        //   value:'7.房源标签',
        //   link:'/seven'
        // },
        // {
        //   value:'8.收费说明',
        //   link:'/eight'
        // },
        // {
        //   value:'9.商圈',
        //   link:'/nine'
        // },
      ],
    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {
    next(){
      this.$router.push('/six/'+this.$route.params.status+'')
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
</style>
