<template>
  <div class="rightMain">
	   <div class="content">
      <div class="step-nav">
        <li>
          <span :class="{spanActive:index==3}" v-for="(item,index) in titList" href="">{{item.value}}</span>
        </li>
      </div>
      <div class="list" style="marginTop:20px">
        <span>房源SKU：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="" style="width: 100px;marginRight:40px" v-model="sku"></Input>
        <span>标题：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="" style="width: 260px;marginRight:40px" v-model="titleCn"></Input>
        <span>状态：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="编辑中" style="width: 100px"></Input>
      </div>
      <h2>公寓方信息</h2>
      <div class="list">
        <span>公寓方：<span class="imp">*</span></span>
        <Input v-model="owner.name" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:20px"></Input>
      </div>
      <h2>预览</h2>
      <div class="list">
        <span style="marginRight:200px;marginLeft:30px;">海外电话：</span>
        <span style="marginRight:200px">国内电话：</span>
        <span>qq：</span>
        <br>
        <Input v-model="owner.phoneout" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;marginLeft:30px;"></Input>
        <Input v-model="owner.phonein" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;"></Input>
        <Input v-model="owner.qq" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:20px;"></Input>
      </div>
      <div class="list" style="marginTop:40px">
        <span style="marginRight:200px;marginLeft:30px;">微信：</span>
        <span style="marginRight:200px">email：</span>
        <span>facebook：</span>
        <br>
        <Input v-model="owner.wechat" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;marginLeft:30px;"></Input>
        <Input v-model="owner.email" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;"></Input>
        <Input v-model="owner.facebook" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:20px;"></Input>
      </div>
      <div class="list" style="marginTop:40px">
        <span style="marginRight:200px;marginLeft:30px;">擅长语言：</span>
        <span style="marginRight:200px">证书编号：</span>
        <br>
        <Input v-model="owner.language" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;marginLeft:30px;"></Input>
        <Input v-model="owner.certnumber" :disabled="$route.params.status==0" placeholder="" style="width: 260px;marginRight:35px;"></Input>
      </div>
      <div class="list" style="height:110px;marginTop:40px;">
        <span style="marginRight:400px">描述：<span class="imp">*</span></span>
        <span>描述(EN)：<span class="imp">*</span></span>

          <br>
          <Input :disabled="$route.params.status==0"type="textarea" :rows="4" style="width:400px;marginRight:100px" placeholder="" v-model.trim="owner.descriptioncn"></Input>
          <Input :disabled="$route.params.status==0"type="textarea" :rows="4" style="width:400px" placeholder="" v-model.trim="owner.descriptionen"></Input>
      </div>
      </div>
      <!--<div class="list" style="paddingLeft:30px;">-->
        <!--<span>头像：</span>-->
        <!--<img src="" alt="">-->
      <!--</div>-->
      <div class="list">
        <div @click="addHouseOwner" class="nextButton">保存下一步</div>
      </div>
     </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        houseid:sessionStorage.getItem("houseId"),//房源id
        sku:'S'+sessionStorage.getItem("houseId"),
        titleCn : sessionStorage.getItem("titlecn"),//标题
        owner:{
//            id:'',
            name:'',
            phoneout:'',
            phonein:'',
            qq:'',
            wechat:'',
            email:'',
            facebook:'',
            language:'',
            certnumber:'',
            descriptioncn:'',
            descriptionen:'',
        houseid:sessionStorage.getItem("houseId")//房源id
//        titleCn : sessionStorage.getItem("titlecn"),//标题
        },
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
          value:'4.公寓方信息',
          link:'/four'
        },
        /*{
          value:'5.便利设施',
          link:'/five'
        },*/
        {
          value:'5.图片视频',
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
      addHouseOwner () {
          let  data = this.owner;
          let getUrl = SERVER_ROOT_URL+'/house/admin/add_owner'+'?houseid='+sessionStorage.getItem("houseId")+'&phoneout='+data.phoneout+
              '&phonein='+data.phonein+'&qq='+data.qq+'&wechat='+data.wechat+'&email='+data.email
              +'&facebook='+data.facebook+'&language='+data.language+'&certnumber='+data.certnumber
              +'&descriptioncn='+data.descriptioncn+'&descriptionen='+data.descriptionen+'&name='+data.name;
          this.$http.post(getUrl)
          .then(function (res) {
              console.log(res)
              if(res.body.status === 200){
                  this.$router.push('/six/'+this.$route.params.status+'');
//            alert(res.body.message)
//                  this.$Message.success(res.body.message);
              }else{
                  alert("新增失败，请检查相关参数！错误码："+res.body.status)
              }

          })
              .catch(function (err) {
                  console.log(err)
                  console.log('错误')
                  alert(JSON.stringify(err))
              })
      },
    next(){
      // this.$router.push('/five/'+this.$route.params.status+'');

      let self  = this;
//      this.$ajax({
//          method: 'post',
//          url: 'https://api.innwowo.com/house/admin/update_house_owner',
//          data: this.data
//        }) .then(function(res){
//            console.log(res);
//
//            if(res.data.status == 200){
//
//            //  self.$root.$router.push('/six/'+this.$route.params.status+'');
//            }else{
//              alert("保存失败！"+res.data.message)
//            }
//        })
//        .catch(function(err){
//            console.log(err);
//        })
    }

  }


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
