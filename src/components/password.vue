<template>
  <div class="">
	   <div class="">
      <h2>修改密码</h2>
      <div class="formlist">
        <span>账号：</span>
         <Input  v-model="name" disabled placeholder=""  style="width: 260px"></Input>
      </div>
      <div class="formlist">
        <span>姓名：</span>
         <Input   v-model="nick" disabled placeholder="" style="width: 260px"></Input>
      </div>
      <div class="tishi">
        提示：密码请尽量包含数字、小写字母、大写字母！
      </div>
      <div class="formlist">
        <span>旧密码：<p>*</p></span>
         <Input v-model="oldPsw" placeholder="密码长度6-20位" style="width: 260px"></Input>
         <span class="imp">必填项</span>
         <span class="imp">最少6字符</span>
      </div>
      <div class="formlist">
        <span>密码：<p>*</p></span>
         <Input v-model="psw" placeholder="密码长度6-20位" style="width: 260px"></Input>
         <span class="imp">必填项</span>
         <span class="imp">最少6字符</span>
      </div>
      <div class="formlist">
        <span>确认密码：<p>*</p></span>
         <Input v-model="repsw" placeholder="密码长度6-20位" style="width: 260px"></Input>
      </div>
      <div class="sure" v-on:click="modifyPsw">保存</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'password',
  data () {
    return {
      id: 10025,
      name: sessionStorage.getItem("userName"),
      nick: sessionStorage.getItem("nick"),
      oldPsw: '',
      psw: '',
      repsw: ''
    }
  },
  methods: {
    modifyPsw: function () {
      let id = sessionStorage.getItem('userId');
      let psw = this.psw;
      let oldPsw = this.oldPsw;
      let getUrl = 'https://api.innwowo.com/user/house_admin/reset_psw?id='+id+'&psw='+psw+'&oldPsw='+oldPsw;
      console.log(getUrl)
      this.$http.get(getUrl).then(function (res) {
        console.log(res)
        this.$alert(res.body.message,'修改密码');
      })
        .catch(function (err) {
          console.log(err)
          console.log('错误')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .formlist{
      padding-left: 35px;
      margin-bottom: 10px;
      span{
        display: inline-block;
        width:100px;
        p{
          display:inline-block;
          color:red
        }
      }
    }
    .tishi{
        background: #f1c40f;
        padding: 10px;
        color: #fff;
        width:296px;
        margin-left: 35px;
        margin-bottom: 10px;
    }
    .imp{
        background: #e74c3c;
        padding: 4px 5px;
        width: auto !important;
        color:#fff;
        font-size: 14px;
    }
    .sure{
      width: 100px;
      height: 32px;
      font-size: 12px;
      line-height: 32px;
      background: #ff5a5f;
      color:#fff;
      margin-left: 35px;
      text-align: center;
      font-size: 14px;
      margin-top: 25px;
      border-radius: 5px;
      cursor: pointer;
    }

</style>
