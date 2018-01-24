<template>
  <div class="">
    <div class="">
      <h2>用户新增</h2>
      <form @submit.prevent="submit">


      </form>
      <div class="formlist">
        <span>账号：</span>
        <Input v-model="name" placeholder="" style="width: 260px" v-model.trim="addUserFrom.name"></Input>
      </div>
      <div class="formlist">
        <span>姓名：</span>
        <Input v-model="nick" placeholder="" style="width: 260px" v-model.trim="addUserFrom.nick"></Input>
      </div>
      <div class="formlist">
        <span>类别：</span>
        <Select :disabled="$route.params.status==0" style="width: 260px;marginRight:40px;"
                v-model.trim="addUserFrom.role">
          <Option value="2" key="manager">经纪人</Option>
          <Option value="3" key="male">顾问</Option>
        </Select>
        <!--<Input v-model="role" placeholder="" style="width: 260px" v-model.trim="addUserFrom.role"></Input>-->
      </div>
      <div class="formlist">
        <span>性别：</span>
        <Select :disabled="$route.params.status==0" style="width: 260px;marginRight:40px;"
                v-model.trim="addUserFrom.sex">
          <Option value="0" key="female">女</Option>
          <Option value="1" key="male">男</Option>
        </Select>
        <!--<Input v-model="sex" placeholder="" style="width: 260px" v-model.trim="addUserFrom.sex"></Input>-->
      </div>
      <div class="formlist">
        <span>邮箱：</span>
        <Input v-model="email" placeholder="" style="width: 260px" v-model.trim="addUserFrom.email"></Input>
      </div>
      <div class="formlist">
        <span>手机号码：</span>
        <Input v-model="phone" placeholder="" style="width: 260px" v-model.trim="addUserFrom.phone"></Input>
      </div>
      <div class="formlist">
        <span>出生日期：</span>
        <DatePicker v-model="born" v-model.trim="addUserFrom.born" format="yyyy-MM-dd"
                    type="date" placeholder="请选择" style="width: 260px"></DatePicker>
        <!--<Input v-model="born" placeholder="" style="width: 260px" v-model.trim="addUserFrom.born"></Input>-->
      </div>
      <div class="formlist">
        <span>国家：</span>
        <Input v-model="country" placeholder="" style="width: 260px"
               v-model.trim="addUserFrom.country"></Input>
      </div>
      <!--<div class="tishi">-->
      <!--提示：密码请尽量包含数字、小写字母、大写字母！-->
      <!--</div>-->
      <!--<div class="formlist">-->
      <!--<span>旧密码：<p>*</p></span>-->
      <!--<Input v-model="old" placeholder="密码长度6-20位" style="width: 260px"></Input>-->
      <!--<span class="imp">必填项</span>-->
      <!--<span class="imp">最少6字符</span>-->
      <!--</div>-->
      <!--<div class="formlist">-->
      <!--<span>密码：<p>*</p></span>-->
      <!--<Input v-model="newword" placeholder="密码长度6-20位" style="width: 260px"></Input>-->
      <!--<span class="imp">必填项</span>-->
      <!--<span class="imp">最少6字符</span>-->
      <!--</div>-->
      <!--<div class="formlist">-->
      <!--<span>确认密码：<p>*</p></span>-->
      <!--<Input v-model="sure" placeholder="密码长度6-20位" style="width: 260px"></Input>-->
      <!--</div>-->
      <div class="sure" v-on:click="userAdd()">保存</div>
    </div>
  </div>
</template>

<script>

  import * as dateUtil from "iview/src/utils/date";

  export default {
    data(){
      return {
        addUserFrom: {
          name: '',
          nick: '',
          sex: '',
          email: '',
          phone: '',
          born: '',
          country: ''
        }
      };

    },
    methods: {
      userAdd: function () {
        let data = this.addUserFrom;
        console.log(JSON.stringify(data));
        let dateval = dateUtil.format(data.born, 'yyyy-MM-dd');
        let getUrl = 'https://api.innwowo.com/user/house_admin/add'+'?name='+data.name+'&nick='+data.nick+
          '&sex='+data.sex+'&email='+data.email+'&phone='+data.phone+'&born='+dateval+'&country='+data.country
            +'&role='+data.role;
//          let getUrl = 'http://localhost:8080/user/house_admin/add'+'?name='+data.name+'&nick='+data.nick+
//              '&sex='+data.sex+'&email='+data.email+'&phone='+data.phone+'&born='+data.born+'&country='+data.country
//              +'&role='+data.role;
        this.$http.get(getUrl
        ).then(function (res) {
          console.log(res)
          if(res.body.status === 200){
//            alert(res.body.message)
              this.$Message.success(res.body.message);
          }else{
            alert("新增失败，请检查相关参数！错误码："+res.body.status)
          }

        })
          .catch(function (err) {
            console.log(err)
            console.log('错误')
            alert(err.message)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .formlist {
    padding-left: 35px;
    margin-bottom: 10px;
    span {
      display: inline-block;
      width: 100px;
      p {
        display: inline-block;
        color: red
      }
    }
  }

  .tishi {
    background: #f1c40f;
    padding: 10px;
    color: #fff;
    width: 296px;
    margin-left: 35px;
    margin-bottom: 10px;
  }

  .imp {
    background: #e74c3c;
    padding: 4px 5px;
    width: auto !important;
    color: #fff;
    font-size: 14px;
  }

  .sure {
    width: 100px;
    height: 32px;
    font-size: 12px;
    line-height: 32px;
    background: #ff5a5f;
    color: #fff;
    margin-left: 35px;
    text-align: center;
    font-size: 14px;
    margin-top: 25px;
    border-radius: 5px;
    cursor: pointer;
  }

</style>
