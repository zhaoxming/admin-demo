<template>
  <div class="rightMain">
    <div class="content">
      <div class="step-nav">
        <li>
          <span :class="{spanActive:index==4}" v-for="(item,index) in titList" href="">{{item.value}}</span>
        </li>
      </div>
        <div class="list" style="marginTop:20px">
            <span>房源SKU：</span>
            <Input :disabled="$route.params.status==0" readonly  placeholder="" style="width: 100px;marginRight:40px" v-model.trim="sku"></Input>
            <span>标题：</span>
            <Input :disabled="$route.params.status==0" readonly  placeholder="标题" style="width: 260px;marginRight:40px" v-model.trim="titleCn"></Input>
            <span>状态：</span>
            <Input :disabled="$route.params.status==0" readonly  placeholder="编辑中" style="width: 100px"></Input>
        </div>
      <!--<div class="list" style="marginTop:20px">
        <span>使用水印：</span>
        <Input :disabled="$route.params.status==0"  readonly  placeholder="是" style="width: 100px;marginRight:40px"></Input>
        <span>原图上传</span>
       <Select :disabled="$route.params.status==0"style="width:100px">
          <Option  value="是" key="是"></Option>
          <Option  value="否" key="否"></Option>
       </Select>
        <span style="width:auto;marginLeft:40px;background: #f1c40f;padding:0 10px;color:#fff">
          选择“原图上传”，图片将不会裁切、水印、压缩！
        </span>
      </div>-->
      <div class="list" v-model.trim="thumbnails">
        <span>缩略图：<span class="imp">*</span></span>
        <a href="javascript:;" class="file">上传图片
          <!--<input type="file" &lt;!&ndash;:accept="typeArr"&ndash;&gt; @change="upload($event)">-->
          <input type="file" @change="upload($event,1)">
        </a>

      </div>
      <div class="list">
           <span v-for="(item, index) in imgList" :key="item.id" style="width: auto;padding-right: 20px;">
            <img width="150px" height="150px" :src="item" alt="" @click="dialogVisible = true;dialogImageUrl=item">
             <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          </span>

      </div>
      <!-- <div class="list" style="height:160px;">
         <span>缩略图：<span class="imp">*</span></span>
         <el-upload
           action="https://jsonplaceholder.typicode.com/posts/"
           list-type="picture-card"
           :on-preview="handlePictureCardPreview"
           :on-remove="handleRemove">
           <i class="el-icon-plus"></i>
         </el-upload>
         <el-dialog :visible.sync="dialogVisible" size="tiny">
           <img width="100%" :src="dialogImageUrl" alt="">
         </el-dialog>
       </div>-->
      <!-- <div class="list" style="height:160px;">
         <span>图册：<span class="imp">*</span></span>
         <el-upload
           action="https://jsonplaceholder.typicode.com/posts/"
           list-type="picture-card"
           :on-preview="handlePictureCardPreview"
           :on-remove="handleRemove">
           <i class="el-icon-plus"></i>
         </el-upload>
         <el-dialog :visible.sync="dialogVisible" size="tiny">
           <img width="100%" :src="dialogImageUrl" alt="">
         </el-dialog>
       </div>-->

      <div class="list" v-model.trim="picCol">
        <span>图册：<span class="imp">*</span></span>
        <a href="javascript:;" class="file">上传图片
          <!--<input type="file" &lt;!&ndash;:accept="typeArr"&ndash;&gt; @change="upload($event)">-->
          <input type="file" @change="upload($event,2)">
        </a>

      </div>
      <div class="list">
           <span v-for="(item, index) in picColimgList" :key="item.id" style="width: auto;padding-right: 20px;">
            <img width="150px" height="150px" :src="item" alt="" @click="dialogVisible = true;dialogImageUrl=item">
             <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          </span>

      </div>
      <!--<div class="list">
        <div class="tit">
          房源视频
        </div>
      </div>
      <div class="list" style="height:auto">
        <Row>
            <Col class="tableTit" span="1">序</Col>
            <Col class="tableTit" span="3">图</Col>
            <Col class="tableTit" span="14">视频</Col>
            <Col class="tableTit" span="2">时长(秒)</Col>
            <Col class="tableTit" span="2">排序</Col>
            <Col class="tableTit" style="borderRight:1px solid #ccc" span="2">操作</Col>
        </Row>
        <Row>
            <Col class="tablemain" span="1">1</Col>
            <Col class="tablemain" span="3" style="lineHeight:0px;paddingTop:3px;">
              <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </Col>
            <Col class="tablemain" span="14">
              <Input :disabled="$route.params.status==0" placeholder="" style="width: 100%;"></Input>
            </Col>
            <Col class="tablemain" span="2">
              <Input :disabled="$route.params.status==0" placeholder="" style="width: 95%;marginLeft:2.5%"></Input>
            </Col>
            <Col class="tablemain" span="2">
              <Input :disabled="$route.params.status==0" placeholder="" style="width: 95%;marginLeft:2.5%"></Input>
            </Col>
            <Col class="tablemain" style="borderRight:1px solid #ccc" span="2">
              <span style="color:#ff5a5f;marginRight:10px;cursor:pointer"><i class="icon iconfont icon-shanchu"></i>删除</span>
            </Col>
        </Row>
      </div>
      <div class="list">
        <div class="tit">
          视频上传组件
        </div>
      </div>
      <div class="list">
        <span>上传后地址：</span>
        <Input :disabled="$route.params.status==0" placeholder="" style="width: 460px;"></Input>
         <span class="nextButton" style="padding:5px;background:#46A3FF;marginTop:0px;lineHeight:20px;">选择视频</span>
          <span class="nextButton" style="padding:5px;background:#46A3FF;marginTop:0px;lineHeight:20px;">上传视频</span>
      </div>
      <div class="list">
        <span>待上传视频：</span>
      </div>-->
      <div class="list" style="textAlign:center">
        <div v-show="$route.params.status==1" @click="addImage" class="nextButton">保存下一步</div>
        <Button @click="next(1)" v-show="$route.params.status==0" style="marginRight:40px" type="info">同意</Button>
        <Button @click="next(2)" v-show="$route.params.status==0" type="error">拒绝</Button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'two',
    typeArr:[
      'jpg','png','jpeg'
    ],
    data () {
      return {
        titList: [
          {
            value: '1.基础信息',
            link: '/one'
          },
          {
            value: '2.学校信息',
            link: '/two'
          },
          {
            value: '3.房型信息',
            link: '/three'
          },
          {
            value: '4.公寓房信息',
            link: '/four'
          },
          /* {
           value:'5.便利设施',
           link:'/five'
           },*/
          {
            value: '5.房源图片',
            link: '/six'
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
        thumbnails:'',
        picCol: '',
        imgList: [],
        picColimgList: [],
        dialogImageUrl: '',
        dialogVisible: false,
        houseid:sessionStorage.getItem("houseId"),//房源id
        titleCn : sessionStorage.getItem("titlecn"),//标题
          sku:'S'+sessionStorage.getItem("houseId"),
    }
    },
    computed: {},
    mounted() {

    },
    created(){
      let OSS = require('ali-oss');
      if (this.size) {
        this.fileSize = this.size;
      }
      this.client = new OSS.Wrapper({
        region:'oss-cn-shanghai',
        secure: true,
        accessKeyId: 'LTAI76UxrOqxY8Vo',/*这两者到阿里云控制台获得*/

        accessKeySecret: 'DEg75QHfBykP70xKX4DcyXDJ2yvvfw',
        bucket: 'innwowohouse' /*装图片的桶名*/
      });
    },
    methods: {
        addImage: function (){
            let vm = this
            this.picColimgList.forEach(function (item) {
                let getUrl = SERVER_ROOT_URL+'/house/admin/add_media?medieurl='+item+'&type=1&houseid='+vm.houseid;
                vm.$http.post(getUrl).then(function (res) {
                    console.log(res)
                    if(res.body.status === 200){
//                        alert("新增成功")
                    }else{
                        alert("新增失败，请检查相关参数！错误码："+res.body.status)
                    }

                }).catch(function (err) {
                    console.log(err)
                    console.log('错误')
                    alert('错误')
                })
            })


            vm.$options.methods.addThumbnail(vm)
            vm.$router.push('/source' )

    },

        addThumbnail(vm){
//            house/admin/update_house_thumbnail?houseId=1&thumbnailUrl=1
            let getUrl = SERVER_ROOT_URL+'/house/admin/update_house_thumbnail?thumbnailUrl='+vm.dialogImageUrl+'&houseId='+vm.houseid;
//            alert(getUrl)
            vm.$http.get(getUrl).then(function (res) {
                console.log(res)
                if(res.body.status === 200){
//                    alert("新增成功")
                }else{
//                    alert("新增失败，请检查相关参数！错误码："+res.body.status)
                }

            }).catch(function (err) {
                console.log(err)
                console.log('错误')
                alert('错误')
            })
        },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      next(a){
        switch (a) {
          case 0:

            this.$router.push('/source')
            break;
          case 1:
            alert('同意')
            break;
          case 2:
            alert('拒绝')
            break;


        }

      },
      /**上传图片**/

      upload(event,index){
          console.log(index)
        var self = this;
        var file = event.target.files[0];

        var type = file.name.split('.')[1];
        var storeAs = this.getUuid() + '.' + type;
        var boolean = true;
        if (file.size > this.fileSize) {
          alert('亲,图片不能超过!' + this.fileSize / 1000 + 'kb');
          return false;
        }
        /*  if (this.typeArr && this.typeArr.indexOf(type) > 0) {
         boolean = false;
         }*/
        /* if (boolean) {
         alert('上传图片格式不支持!请选择' + this.typeArr);
         return false;
         }*/
        this.client.multipartUpload(storeAs, file).then(function (result) {
          console.log(result)
          if(index == 1){
//              alert(1)
            let requestUrl = result.res.requestUrls[0];
            let requestUrlArr = requestUrl.split('?')
            console.log(requestUrlArr);
            self.dialogImageUrl = requestUrlArr[0];
            self.thumbnails = JSON.stringify(requestUrlArr[0]);
            self.imgList.push(self.dialogImageUrl);
            console.log(result.res.requestUrls[0]);
            console.log(self.thumbnails);
          }else{
//              alert(2)
            let requestUrl = result.res.requestUrls[0];
            let requestUrlArr = requestUrl.split('?')
            console.log(requestUrlArr);
            self.dialogImageUrl = requestUrlArr[0];
            self.thumbnails = JSON.stringify(requestUrlArr[0]);
//            self.dialogImageUrl = result.res.requestUrls[0];
//            self.thumbnails = JSON.stringify(result.res.requestUrls);
            self.picColimgList.push(self.dialogImageUrl);
            console.log(result.res.requestUrls[0]);
            console.log(self.picCol);
          }


        }).catch(function (err) {

          console.log(err);
        });

      },
      getUuid() {
        var len = 32; //32长度
        var radix = 16; //16进制
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [],
          i;
        radix = radix || chars.length;
        if (len) {
          for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
          var r;
          uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
          uuid[14] = '4';
          for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
              r = 0 | Math.random() * 16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
          }
        }
        return uuid.join('');

      }
    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .list {
 /*   height: 33px;
    line-height: 33px;*/
    margin-bottom: 20px;
    > span {
      display: inline-block;
      width: 100px
    }
    .ss1 {
      float: left;
      width: 450px;
      height: 150px;
      border: 1px solid #ccc;
      margin-right: 120px;
    }
    .ss2 {
      float: left;
      width: 450px;
      height: 150px;
      border: 1px solid #ccc;
    }
    .nextButton {
      width: 100px;
      // padding:0 20px;
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

  .bor {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }

  .tit {
    font-weight: 700
  }

  .tableTit {
    font-weight: 700;
    text-align: center;
    border: 1px solid #ccc;
    border-right: none;
  }

  .tablemain {
    text-align: center;
    border: 1px solid #ccc;
    border-right: none;
    border-top: none;
    height: 150px;
    line-height: 150px
  }
</style>
