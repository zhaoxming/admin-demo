<template>
  <div class="login-wrap">
    <div class="ms-title">英窝窝管理系统</div>
    <link rel="shortcut icon" type="image/x-icon" href="static/img/icon.jpg" />
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;"></p>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('ms_username', self.ruleForm.username);
            let getUrl = 'http://api.innwowo.com/user/house_admin/login' + '?usr=' + self.ruleForm.username + '&psw=' + self.ruleForm.password;
            this.$http.get(getUrl
            ).then(function (res) {
              console.log(res)
              if (res.body.status === 200) {
                sessionStorage.setItem('userId',res.body.data.id);
                sessionStorage.setItem('nick',res.body.data.nick);
                  sessionStorage.setItem('userName',res.body.data.name);
                sessionStorage.setItem('roleName',res.body.data.rolename);
                sessionStorage.setItem('role',res.body.data.role);
                self.$router.push('/home');
              } else {
                alert("登录失败！" + res.body.status)
              }

            })
              .catch(function (err) {
                console.log(err)
                console.log('错误')
                alert(err.message)
              })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;

  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 380px;
    height: 240px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
  }
</style>
