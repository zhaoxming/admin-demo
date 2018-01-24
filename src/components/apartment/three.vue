<template>
  <div class="rightMain">
	   <div class="content">
      <div class="step-nav">
        <li>
          <span :class="{spanActive:index==2}" v-for="(item,index) in titList" href="">{{item.value}}</span>
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
        <Input :disabled="$route.params.status==0" readonly  placeholder="是" style="width: 100px;marginRight:40px"></Input>
        <span>原图上传</span>
       <Select :disabled="$route.params.status==0" style="width:100px">
          <Option  value="是" key="是"></Option>
          <Option  value="否" key="否"></Option>
       </Select>
        <span style="width:auto;marginLeft:40px;background: #f1c40f;padding:0 10px;color:#fff">
          选择“原图上传”，图片将不会裁切、水印、压缩！
        </span>
      </div>-->
      <div class="list">
        <span class="tit">
          房型列表
        </span>
        <div style="float:right">
          <!--<span> 共有<span style="color:#ff5a5f">1</span>条数据</span>-->
          <span @click="isHouse = true" class="nextButton" style="padding:5px;background:#46A3FF">添加房型</span>
         <!-- <span class="nextButton" style="padding:5px;background:#aaa">批量编辑</span>
          <span class="nextButton" style="padding:5px;background:#aaa">批量删除</span>-->
        </div>
      </div>
      <div class="list" style="height:auto">
          <Table border ref="selection" :columns="roomCols" :data="roomList" @on-select="selectItem"
                 @on-select-cancel="cancelItem"
                 @on-select-all="selectItemAll"
                 @on-selection-change="selectChange"></Table>



      </div>
      <div class="list">
        <div @click="next" class="nextButton">保存下一步</div>
      </div>
      <div v-show="isHouse" class="house">
        <h2>添加房型</h2>
        <div class="list">
          <span>标题：<span class="imp">*</span></span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 260px;marginRight:20px" v-model.trim="roomForm.titlecn"></Input>
          <span>标题(EN)：<span class="imp">*</span></span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 260px;marginRight:20px" v-model.trim="roomForm.titlecn"></Input>
         <!-- <Button size="small" style="marginRight:20px" type="info">中>英</Button>
          <Button size="small" style="marginRight:40px" type="info">英>中</Button>-->
          <span>支持短租：</span>
          <Checkbox  v-model.trim="roomForm.supportshort"></Checkbox>
        </div>
        <div class="list">
          <span>状态：<span class="imp">*</span></span>
          <Select :disabled="$route.params.status==0" style="width:100px;marginRight:20px"  v-model.trim="roomForm.status">
            <Option value="尚有空房" key="">尚有空房</Option>
            <Option value="即将住满" key="">即将住满</Option>
            <Option value="已住满" key="">已住满</Option>
          </Select>
            <!--<select2 :options="options" v-model="roomForm.status">-->
            <!--<option disabled value="0">Select one</option>-->
                <!--&lt;!&ndash;<option value="0" key="">尚有空房</option>&ndash;&gt;-->
                <!--&lt;!&ndash;<option value="1" key="">即将住满</option>&ndash;&gt;-->
                <!--&lt;!&ndash;<option value="2" key="">已住满</option>&ndash;&gt;-->
            <!--</select2>-->
          <span>租期：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 50px;marginRight:10px"  v-model.trim="roomForm.rentdate"></Input>
          <Select :disabled="$route.params.status==0" style="width:50px;marginRight:20px"  v-model.trim="roomForm.rentdateType">
            <Option value="周" key="1"></Option>
            <Option value="月" key="2"></Option>
          </Select>
          <span>起租日期：</span>
          <DatePicker type="date" placeholder="Select date" style="width: 120px" v-model.trim="roomForm.rentstart"></DatePicker>
        </div>
        <div class="list">
          <span>租金：<span class="imp">*</span></span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.rentmoney"></Input>
          <!--<span>原租金：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.titlecn"></Input>-->
          <span>定金：<span class="imp">*</span></span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.depositmoney"></Input>
          <span>押金：<span class="imp">*</span></span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.securitymoney"></Input>
        </div>
        <div class="list">
          <span>房间类型：<span class="imp">*</span></span>
           <Select :disabled="$route.params.status==0" style="width:100px;marginRight:20px" v-model.trim="roomForm.type">
            <Option value="公共卫浴的单人间" key="">公共卫浴的单人间</Option>
            <Option value="独立卫浴的单人间" key="">独立卫浴的单人间</Option>
               <Option value="带有独立卫浴的套间" key="">带有独立卫浴的套间</Option>
               <Option value="公寓apartment" key="">公寓apartment</Option>
               <Option value="公寓flat" key="">公寓flat</Option>
               <Option value="联排别素" key="">联排别素
               </Option>
          </Select>
          <span>卫浴：<span class="imp">*</span></span>
           <Select :disabled="$route.params.status==0" style="width:100px;marginRight:20px" v-model.trim="roomForm.bathroom">
            <Option value="共用" key="">共用</Option>
            <Option value="独立" key="">独立</Option>
               <Option value="浴室套间" key="">浴室套间 </Option>
               <Option value="其他" key="">其他</Option>
          </Select>
          <span>床：<span class="imp">*</span></span>
           <Select :disabled="$route.params.status==0" style="width:100px;marginRight:20px" v-model.trim="roomForm.bedroom">
            <Option value="单人" key="">单人</Option>
            <Option value="双人" key="">双人</Option>
            <Option value="其他" key="">其他</Option>
          </Select>
        </div>
        <div class="list">
          <span>最小面积(㎡)：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.areamin"></Input>
          <span>最大面积(㎡)：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.aremmax"></Input>
          <span>最小面积(sq.ft)：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.areamin"></Input>
          <span>最大面积(sq.ft)：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.aremmaxft"></Input>
        </div>
        <div class="list">
          <span>床位大小：</span>
           <Select :disabled="$route.params.status==0" style="width:100px;marginRight:20px" v-model.trim="roomForm.bedroomsize">
            <Option value="90*190(cm)" key="1"></Option>
            <Option value="122*190(cm)" key="2"></Option>
          </Select>
          <span>最小套间数量：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.flatminnumber"></Input>
          <span>最大套间数量：</span>
          <Input :disabled="$route.params.status==0"placeholder="" style="width: 100px;marginRight:20px" v-model.trim="roomForm.flatmaxnumber"></Input>
        </div>
        <div class="list" style="height:110px;">
          <span style="marginRight:400px">描述：<span class="imp">*</span></span>
          <span>描述(EN)：<span class="imp">*</span></span>
          <br>
          <Input :disabled="$route.params.status==0"type="textarea" :rows="4" style="width:400px;marginRight:100px" placeholder="" v-model.trim="roomForm.descriptioncn"></Input>
          <Input :disabled="$route.params.status==0"type="textarea" :rows="4" style="width:400px" placeholder="" v-model.trim="roomForm.descriptionen"></Input>
        </div>
        <div class="list"  v-model.trim="roomForm.thumbnails">
          <span>缩略图：<span class="imp">*</span></span>
          <a href="javascript:;" class="file" >上传图片
            <!--<input type="file" &lt;!&ndash;:accept="typeArr"&ndash;&gt; @change="upload($event)">-->
            <input type="file"  @change="upload($event)">
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
        <div class="list" style="margin-top: 150px;">
          <div @click="saveRoomInfo" class="nextButton">
            保存房型
          </div>
        </div>
      </div>
     </div>

  </div>
</template>

<script>
    import axios from 'axios'
    import * as dateUtil from "iview";
export default {
  name: 'two',
 // props     : ['data', 'typeArr', 'size'],
  typeArr:[
    'jpg','png','jpeg'
  ],
  data () {
    return {
        titleCn: sessionStorage.getItem("titlecn"),
        houseId: sessionStorage.getItem("houseId"),
        sku: "S"+sessionStorage.getItem("houseId"),
        roomCols: [
            {
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title: '标题',
                align: 'center',
                key: 'titlecn',
                width: 100,

            },
            {
//                房间状态 0尚有空房 1即将住满 2已住满
                title: '房间类型',
                align: 'center',
                key: 'type',

//                  render: (h, params) => {
                      //                房间状态 0尚有空房 1即将住满 2已住满
//                      0 公共卫浴的单人间 1 独立卫浴的单人间 2 带有独立卫浴的套间含厨房 3 公寓apartment 4 公寓flat 5 联排别素
//                      const roomType = params.row.type == '0' ? '公共卫浴的单人间'
//                          : params.row.status == '1' ? '独立卫浴的单人间'
//                              : params.row.status == '2' ? '带有独立卫浴的套间'
//                                  : params.row.status == '3' ? '公寓apartment'
//                                      : params.row.status == '4' ? '公寓flat'
//                              :  '已住满';
//                      return h('div', [
//                          h('p', roomType)
//                      ]);
//                  }
            },
            {
                title: '租期',
                key: 'rentdate',
                align: 'center',
            },
            {
                title: '起租时间',
                align: 'center',
                render: (h, params) => {
                    let dateval = dateUtil.format(params.row.rentstart, 'yyyy-MM-dd');
                    return h('div', [
                        h('p', dateval)
                    ]);
                }
            },
            {
                title: '租金',
                key: 'rentmoney',
                align: 'center',
            },
            {
                title: '定金',
                key: 'depositmoney',
                align: 'center',
            },
            {
                title: '押金',
                key: 'securitymoney',
                align: 'center',
            },
            {
                title: '状态',
                align: 'center',
                key: 'status',
//                render: (h, params) => {
//                    //                房间状态 0尚有空房 1即将住满 2已住满
//                    const roomStatus = params.row.status == '0' ? '尚有空房'
//                        : params.row.status == '1' ? '即将住满'
//                            :  '已住满';
//                    return h('div', [
//                        h('p', roomStatus)
//                    ]);
//                }
            },


            {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {

                                }
                            }
                        }, '编辑'),
                        h('Button', {
                            props: {
                                type: 'error',
                                size: 'small'
                            },
                            on: {
                                click: () => {

                                }
                            }
                        }, '删除')
                    ]);
                }
            }
        ],

        client  : '',
      fileSize: 5000000,
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
       /* {
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
        roomList:[],
        imgList:[],
        selectDataStore:[],
      isHouse:false,
      dialogImageUrl: '',
      dialogVisible: false,
        houseid:sessionStorage.getItem("houseid"),//房源id
        titleCn : sessionStorage.getItem("titlecn"),//标题
      roomForm:{
        thumbnails:'',//缩略图url
        titlecn:'',//中文标题
        titleen:'',//英文标题
        supportshort:'',//支持短租
        status:'',//房间状态 0尚有空房 1即将住满 2已住满
        rentdate:'',//租期
        rentdateType:'',
        rentstart:'',//起租日期
        rentmoney:'',//租金
        depositmoney:'',//定金
        securitymoney:'',//押金
        type:'',//房间类型 0 公共卫浴的单人间 1 独立卫浴的单人间 2 带有独立卫浴的套间含厨房 3 公寓apartment 4 公寓flat 5 联排别素
        descriptioncn:'',//描述中文
        descriptionen:'',//描述英文
        bathroom:'',//卫浴 0 共用 1 独立 2 浴室套间 3 其他
        bedroom:'',//床 0 单人 1 双人 2 其他
        areamin:'',//最小面积m＊m
        aremmax:'',//最大面积m＊m
        areaminft:'',//最小面积ft
        aremmaxft:'',//最大面积ft
        bedroomsize:'',//	床位大小
        flatminnumber:'',//最小套间数量
        flatmaxnumber:''//最大套间数量
      },

        roomFormCp:{
            thumbnails:'',//缩略图url
            titlecn:'',//中文标题
            titleen:'',//英文标题
            supportshort:'',//支持短租
            status:'',//房间状态 0尚有空房 1即将住满 2已住满
            rentdate:'',//租期
            rentdateType:'',
            rentstart:'',//起租日期
            rentmoney:'',//租金
            depositmoney:'',//定金
            securitymoney:'',//押金
            type:'',//房间类型 0 公共卫浴的单人间 1 独立卫浴的单人间 2 带有独立卫浴的套间含厨房 3 公寓apartment 4 公寓flat 5 联排别素
            descriptioncn:'',//描述中文
            descriptionen:'',//描述英文
            bathroom:'',//卫浴 0 共用 1 独立 2 浴室套间 3 其他
            bedroom:'',//床 0 单人 1 双人 2 其他
            areamin:'',//最小面积m＊m
            aremmax:'',//最大面积m＊m
            areaminft:'',//最小面积ft
            aremmaxft:'',//最大面积ft
            bedroomsize:'',//	床位大小
            flatminnumber:'',//最小套间数量
            flatmaxnumber:''//最大套间数量
        },

    }
  },
  computed: {
  },
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
      selectItem(selection, row) {
          this.selectDataStore.push(row)
      },
      cancelItem(selection, row) {
          this.selectDataStore.forEach((item, index) => {
              if (item.id === row.id) {      //这里我数据中regNo是唯一的，所以拿来做判断条件
                  this.selectDataStore.splice(index, 1)
              }
          })
      },
      selectItemAll(selection) {
          this.selectDataStore = this.selectDataStore.concat(selection)
      },
      selectChange(selection) {
          if (!selection.length) {
              let arr1 = this.selectDataStore
              let arr2 = this.data
              for (let i = 0; i < arr1.length; i++) {
                  for (let j = 0; j < arr2.length; j++) {
                      if (arr1[i].regNo === arr2[j].regNo) {
                          this.selectDataStore.splice(i, 1)
                      }
                  }
              }
          }
      },

    next(){
        let vm = this;
       this.selectDataStore.forEach(function (item) {
           vm.$options.methods. addRoom(item, vm)
       })
    },
      addRoom: function (item, vm) {
          let getUrl = SERVER_ROOT_URL + '/house/admin/add_room?thumbnails=' + item.thumbnails
              + "&titlecn=" + item.titlecn + '&houseid=' + sessionStorage.getItem("houseId")
              + "&titleen=" + item.titleen + '&supportshort=' + item.supportshort
              + "&status=" + item.status + '&rentdate=' + item.rentdate
              + "&rentstart=" + item.rentstart + '&rentmoney=' + item.rentmoney
              + "&depositmoney=" + item.depositmoney + '&securitymoney=' + item.securitymoney
              + "&type=" + item.type + '&descriptioncn=' + item.descriptioncn
              + "&descriptionen=" + item.descriptionen + '&bathroom=' + item.bathroom
              + "&bedroom=" + item.bedroom + '&areamin=' + item.areamin
              + "&aremmax=" + item.aremmax + '&areaminft=' + item.areaminft
              + "&aremmaxft=" + item.aremmaxft + '&bedroomsize=' + item.bedroomsize
              + "&flatminnumber=" + item.flatminnumber + '&flatmaxnumber=' + item.flatmaxnumber;

          vm.$http.post(getUrl).then(function (res) {
              console.log(res)
              if (res.body.status === 200) {
                  this.$router.push('/four/' + vm.$route.params.status + '')
              } else {
                  alert("保存，请检查相关参数！错误码：" + res.body.status)
              }

          })
              .catch(function (err) {
                  console.log(err)
                  console.log('错误')
                  alert("保存出错")
              })
      },


    saveRoomInfo(){
      let vm = this;
      let data =JSON.parse(JSON.stringify(this.roomForm));

      vm.roomList.push(data);
        this.roomForm = Object.assign({},this.roomFormCp);
      vm.isHouse = false

    },
    /**上传图片**/

    upload(event){
      var self = this;
      var file = event.target.files[0];

      var type    = file.name.split('.')[1];
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

        let requestUrl = result.res.requestUrls[0];
        let requestUrlArr = requestUrl.split('?')
        console.log(requestUrlArr);
        self.dialogImageUrl = requestUrlArr[0];

      // self.dialogImageUrl = result.res.requestUrls[0];
        self.roomForm.thumbnails = self.dialogImageUrl;
        self.imgList.push(self.dialogImageUrl);
        console.log(result.res.requestUrls[0]);
        console.log(self.roomForm.thumbnails);

      }).catch(function (err) {

        console.log(err);
      });

    },
    getUuid() {
      var len   = 32; //32长度
      var radix = 16; //16进制
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      var uuid  = [],
        i;
      radix     = radix || chars.length;
      if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
      } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r       = 0 | Math.random() * 16;
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
        }
      }
      return uuid.join('');

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
    width: 110px
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
.file {
  position: relative;
  left: .26rem;
  top: .2rem;
  display: inline-block;
  background: #32d582;
  border: 1px solid #99D3F5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: white;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}

.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.bor{
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.tit{
  font-weight: 700
}
.tableTit{
  font-weight: 700;
  text-align: center;
  border: 1px solid #ccc;
  border-right: none;
}
.tablemain{
  text-align: center;
  border: 1px solid #ccc;
  border-right: none;
  border-top: none;
}
</style>
