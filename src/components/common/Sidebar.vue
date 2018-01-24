<template>
  <div class="sidebar">

    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>

</template>

<script>
  export default {
    data() {
        if(sessionStorage.getItem("role") == '0'){
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/home',
                        title: '首页'

                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '基本',
                        subs: [
                            {
                                index: 'password',
                                title: '修改密码'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '房源',
                        subs: [
                            {
                                title: '公寓新增',
                                index: '/one/1'
                            },
                            {
                                title: '房源维护',
                                index: '/source'
                            },
                            {
                                title: '申请列表',
                                index: '/apply'
                            },
                            {
                                title: '订单列表',
                                index: '/order'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '用户管理',
                        subs: [
                            {
                                index: '/userAdd',
                                title: '用户新增'
                            },
                            {
                                index: '/userQuery',
                                title: '用户查询'
                            }
                        ]
                    }
                ]

            }
        }else {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/home',
                        title: '首页'

                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '基本',
                        subs: [
                            {
                                index: 'password',
                                title: '修改密码'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '房源',
                        subs: [
                            {
                                title: '公寓新增',
                                index: '/one/1'
                            },
                            {
                                title: '房源维护',
                                index: '/source'
                            },
                            {
                                title: '申请列表',
                                index: '/apply'
                            },
                            {
                                title: '订单列表',
                                index: '/order'
                            }
                        ]
                    }

                ]

            }
        }

    },

    mounted() {
      this.menu = this.indexMenu
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
<style lang="less">
  // 初始化
  body, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select {
    margin: 0;
    padding: 0
  }

  body {
    font: 12px "Microsoft Yahei", "Arial Narrow", HELVETICA;
    background: #fff;
    -webkit-text-size-adjust: 100%;
    background: #FAFAFA
  }

  a {
    color: #2d374b;
    text-decoration: none
  }

  a:hover {
    color: #cd0200;
    text-decoration: underline
  }

  em {
    font-style: normal
  }

  li {
    list-style: none
  }

  img {
    border: 0;
    vertical-align: middle
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  p {
    word-wrap: break-word
  }

  h2 {
    font-size: 16px;
    width: 220px;
    border-bottom: 1px solid #e8e8e8;
    line-height: 40px;
    margin: -10px 0 10px !important;
    text-align: center;
  }

  .rightMain {
    padding: 20px 20px 20px 180px;
    text-align: left;
    .content {
      padding: 20px;
      border: 1px solid #000;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
    }
  }

  // header
  /*.header{
    background-size: 140px 32px;
    font-size: 14px;
    line-height: 42px;
    height: 42px;
    padding: 0px 20px;
    padding-left: 10px;
    border-bottom: 1px solid #e8e8e8;
    text-indent: 160px;
    background: #FF5A5F;
    font-family: "Microsoft YaHei";
    color: #EEE;
    img{
      position: absolute;
      top: 4px;
      left: 16px;
    }
    span{
      float: left;
    }
    .nav{
      float: left;
      text-indent: 54px;
    }
    .nav a{
      text-decoration:blink;
      color:#fff;
      padding: 12px 14px 12px;
      font-weight: normal;
      background:#FF5A5F;
    }
    .nav a:hover{
      background:#fff;
      color:#FF5A5F;
    }
    .nav .navActive{
      background:#fff;
      color:#FF5A5F;
    }
    .out{
      float: right;
      color: #ff5a5f;
      font-size: 14px;
      border-radius: 3px;
      background-color: #FFFFFF;
      line-height: 28px;
      padding: 5px 12px;
      font-weight: normal;
      text-indent: 0px;
      margin-top: 2px;
      cursor: pointer;
    }
  }*/
  .menu {
    width: 160px;
    height: 600px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 43px;
    border: 1px solid #e8e8e8;
    border-top: none;
    div {
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
    }
    .menuOne {
      padding: 0px 20px;
      text-align: left;
      font-weight: 700;
      cursor: pointer;
    }
    .menuicon {
      float: right;
      height: 40px;
      line-height: 40px;
      position: absolute;
      right: 20px;
      top: 0;
    }
    .menuTwo {
      margin-left: 30px;
      font-weight: 500;
      color: #313131;

    }
    .menuTwo:hover {
      color: #ff5a5f
    }
    .menuTwoActive {
      color: #ff5a5f
    }
  }

  //九个tit
  .step-nav {
    overflow: hidden;
    width: 100%;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    height: 35px;
    display: inline-block;
    li {
      float: left;
      margin: 0 .5em 0 1em;
      box-sizing: border-box;
      display: list-item;
      text-align: -webkit-match-parent;
      span {
        background: #ddd;
        font-weight: bold;
        padding: .8em 1em;
        float: left;
        text-decoration: none;
        color: #444;
        text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
        position: relative;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        cursor: pointer;
        margin-right: 25px;
      }
      span::before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1.5em;
        border-width: 1.5em 0 1.42em 1em;
        border-style: solid;
        border-color: #ddd #ddd #ddd transparent;
        left: -1em;
      }
      span::after {
        border-left-color: #ddd;
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1.5em;
        border-top: 1.5em solid transparent;
        border-bottom: 1.5em solid transparent;
        border-left: 1em solid #ddd;
        right: -1em;
      }
      span:hover {
        background: #99db76;
        span::before {
          border-color: #99db76 #99db76 #99db76 transparent;
        }
      }
      span:hover::before {
        border-color: #99db76 #99db76 #99db76 transparent;
      }
      span:hover::after {
        border-left: 1em solid #99db76;
      }
    }
    .spanActive {
      background: #99db76;
    }
    .spanActive::after {
      border-left: 1em solid #99db76;
    }
    .spanActive::before {
      border-color: #99db76 #99db76 #99db76 transparent;
    }
  }

  .imp {
    color: red
  }


</style>
