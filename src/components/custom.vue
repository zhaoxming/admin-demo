<template>
  <div class="rightMain">
	   <div class="content">
      <h2>自定义菜单</h2> 
      <div class="tishi">
        自定义菜单后，可在首页“自定义菜单”中使用快捷菜单功能！
      </div>
      <div class="tit">
        <i class="icon iconfont icon-caidan"></i> 房源
      </div>
      <div class="sel">
        <span>
          <Checkbox v-model="single1"><i class="icon iconfont icon-shu"></i> 留学公寓</Checkbox>
        </span>
        <span>
          <Checkbox v-model="single2"><i class="icon iconfont icon-shu"></i> 二手房</Checkbox>
        </span>
        <span>
          <Checkbox v-model="single3"><i class="icon iconfont icon-shu"></i> 新房</Checkbox>
        </span>
        <span>
          <Checkbox v-model="single4"><i class="icon iconfont icon-shu"></i> 租房</Checkbox>
        </span>
      </div>
      <div class="sel">
        <span>
          <Checkbox v-model="single5"><i class="icon iconfont icon-shu"></i> 租房</Checkbox>
        </span>
      </div>
      <div class="tit">
        <i class="icon iconfont icon-caidan"></i> CRM
      </div>
      <div class="sure">保存</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'custom',
  data () {
    return {
      single1: '',
      single2: '',
      single3: '',
      single4: '',
      single5: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.tishi{
    background: #3498db;
    line-height: 32px;
    color: #fff;
    font-size: 14px;
    width: auto;
    display: inline-block;
    padding: 0 10px;
    margin-left: 20px;
  }
  .tit{
    margin-left: 20px;
    color: #616161;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
    i{
      font-size: 18px !important;
    }
  }
  .sel{
    span{
      margin-left: 35px;
      margin-top: 20px;
      display:inline-block;
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
