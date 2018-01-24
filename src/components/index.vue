<template>
  <div class="main">
	   <p class="weltext">
      英窝窝，留学生海外的家
     </p>
     <div class="bar"></div>
     <h2>特色</h2>
     <p>留学生公寓、经纪人房源、个人房源应有尽有</p>
     <p>我们打破海外房源信息不对称的现状，将简单的海外租房买房体验带给你。一切以安全真实为出发点，只为带给你一个温暖的家</p>
     <p>为中小学生家长打造的学区房买卖平台，海外优质学区一览无余</p>
     <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main{
    text-align: center;
	}
  p{
    line-height: 36px;
    font-size: 14px;
  }
  .weltext{
    font-size: 18px;
    color: #626262;
    line-height: 1;
    margin: 235px 0 30px;
  }
  .bar{
        width: 500px;
        height: 2px;
        margin: 40px auto 0;
        background-color: #e8e8e8;
  }
  h2{
      color: #ff5a5f !important;
      font-size: 18px !important;
      line-height: 98px !important;
      border-bottom: none !important;
      width: 100%;
  }
</style>
