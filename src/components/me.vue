<template>
  <div class="rightMain">
	   <div class="content">
      <h2>帐号设置</h2> 
      <div class="list">
        <span>
          <span class="one">姓名/昵称：</span> <Input class="two" readonly v-model="name" placeholder="" style="width: 260px"></Input>
          <span class="one">帐号：</span> <Input readonly v-model="number" placeholder="" style="width: 260px"></Input>
        </span>
      </div>
      <div class="list">
        <span>
          <span class="one">部门：</span> <Input class="two" readonly v-model="department" placeholder="" style="width: 260px"></Input>
          
        </span>
      </div>
      <div class="list">
        <span>
          <span class="one">邮箱：</span> <Input class="two" readonly v-model="mail" placeholder="" style="width: 260px"></Input>
          <span class="one">手机：</span> <Input readonly v-model="tel" placeholder="" style="width: 260px"></Input>
        </span>
      </div>
      <div class="list">
        <span>
          <span class="one">上次登录时间：</span> <Input class="two" readonly v-model="lastTime" placeholder="" style="width: 260px"></Input>
          <span class="one">上次登录地点：</span> <Input readonly v-model="lastPosi" placeholder="" style="width: 260px"></Input>
        </span>
      </div>
      <h3>权限分配</h3>
      <div class="list">
        <span>
          <span class="one">国家：</span>英国
        </span>
      </div>
      <div class="list">
        <span>
          <span class="one">业务：</span>Homestay,留学公寓,定制服务,租房,新房,二手房,转租 
        </span>
      </div>
      <div class="list">
        <span>
          <span class="one">权限：</span>经纪人 
        </span>
      </div>
      <h3>设置</h3>
      <div class="list">
        <span>
          <span class="one">国家：<span style="color:red">*</span></span>
          <Select v-model="name" style="width:200px">
            <Option  value="1" key="1">中文简体</Option>
            <Option  value="2" key="2">English</Option>
        </Select>
        </span>
      </div>

      <div class="sure">
        保存
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '张志鹏',
      number: 'zhipeng.zhang',
      department: '经纪人',
      mail: 'n******@uhouzz.com',
      tel: '',
      lastTime: '2017-12-20 17:16:09',
      lastPosi: '223.223.198.229(北京市)',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.list{
  height: 33px;
  line-height: 33px;
  margin-bottom: 16px;
  .one{
    display: inline-block;
    width:100px
  }
  .two{
    margin-right: 50px;
  }
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
