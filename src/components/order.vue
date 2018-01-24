<template>
    <div class="">
        <div class="">
            <h2>订单列表</h2>
            <div class="list">
                <span>状态：</span>
                <Select v-model="status" style="width: 100px;marginRight:40px;" >
                    <Option  value="0" key="">请选择</Option>
                    <Option  value="1" key="">已下架</Option>
                    <Option  value="2" key="">已上架</Option>
                    <Option  value="3" key="">编辑中</Option>
                    <Option  value="4" key="">上架失败</Option>
                </Select>
                <span>国家：</span>
                <Select v-model="Country" style="width: 100px;marginRight:40px;" >
                    <Option  value="0" key="">英国</Option>
                </Select>
                <span>城市：</span>
                <Select v-model="cityValue" style="width: 100px;marginRight:40px;" >
                    <Option v-for="item in city"   :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
                <!--<span>租买类型：</span>-->
                <!--<Select v-model="rentBuyValue" style="width: 100px;marginRight:40px;" >-->
                <!--<Option v-for="item in rentBuy"   :value="item.value" :key="item.value">{{item.label}}</Option>-->
                <!--</Select>-->
                <span v-show="this.rentBuyValue==1">租房房态：</span>
                <Select v-show="this.rentBuyValue==1" style="width: 100px;marginRight:40px;" >
                    <Option value="0" >请选择</Option>
                    <Option value="1" >已租</Option>
                    <Option value="2" >未租</Option>
                </Select>
                <span v-show="this.rentBuyValue==2">公寓房态：</span>
                <Select v-show="this.rentBuyValue==2" style="width: 100px;marginRight:40px;" >
                    <Option value="0" >请选择</Option>
                    <Option value="1" >尚有空房</Option>
                    <Option value="2" >即将住满</Option>
                    <Option value="3" >已住满</Option>
                </Select>
                <span v-show="this.rentBuyValue==3||this.rentBuyValue==4">卖房房态：</span>
                <Select v-show="this.rentBuyValue==3||this.rentBuyValue==4" style="width: 100px;marginRight:40px;" >
                    <Option value="0" >请选择</Option>
                    <Option value="1" >在售中</Option>
                    <Option value="2" >已售罄</Option>
                </Select>
            </div>
            <div class="list" v-show="this.rentBuyValue==1">
                <span>租房类型：</span>
                <Select style="width: 100px;marginRight:40px;" >
                    <Option  value="0" key="">请选择</Option>
                    <Option  value="1" key="">整租</Option>
                    <Option  value="2" key="">合租</Option>
                </Select>
                <span>租期类型：</span>
                <Select style="width: 100px;marginRight:40px;" >
                    <Option  value="0" key="">请选择</Option>
                    <Option  value="1" key="">不限</Option>
                    <Option  value="2" key="">短租</Option>
                    <Option  value="3" key="">长租</Option>
                </Select>
                <span>入住时间：</span>
                <DatePicker type="date" placeholder="起始" style="width: 130px"></DatePicker>
                <DatePicker type="date" placeholder="" style="width: 130px;marginRight:40px"></DatePicker>
                <Checkbox style="marginRight:40px">家具</Checkbox>
                <Checkbox >水电</Checkbox>
            </div>
            <div class="list">
                <span>排序：</span>
                <Select style="width: 100px;marginRight:40px;" >
                    <Option  value="0" key="0">修改时间</Option>
                    <Option  value="1" key="1">创建时间</Option>
                </Select>
                <Button type="info" @click="Reset">重置</Button>
            </div>
            <div class="list">
                <span>搜索：</span>
                <Select v-model="searchValue" @on-change='searchChange' style="width: 130px;marginRight:10px;" >
                    <Option  value="0" key="0">房源</Option>
                    <Option  value="1" key="1">经纪人/中介/公寓方</Option>
                    <Option  value="2" key="2">开发商</Option>
                    <Option  value="3" key="3">城市</Option>
                    <Option  value="4" key="4">学校</Option>
                    <Option  value="5" key="5">录入来源</Option>
                </Select>
                <Input :placeholder="searchPleach" style="width: 300px;marginRight:40px"></Input>
                <!--<Checkbox style="marginRight:40px">快速搜索</Checkbox>-->
                <!--<Checkbox style="marginRight:40px">精确搜索 </Checkbox>-->
                <!--<Checkbox style="marginRight:40px">显示爬虫数据</Checkbox>-->
                <Button type="info" @click="searchChange">搜索</Button>
            </div>
            <div class="list">
                <!--<div style="float:right">-->
                    <!--<span> 共有<span style="color:#ff5a5f">{{orderListSize}}</span>条数据</span>-->
                    <!--<span class="nextButton" style="padding:5px;" v-on:click="setHot">设为热门</span>-->
                    <!--<span class="nextButton" style="padding:5px;background:#aaa" v-on:click="cancelHot">取消热门</span>-->
                    <!--<span class="nextButton" style="padding:5px;background:#aaa">批量删除</span>-->
                <!--</div>-->
            </div>

            <div class="list" style="marginTop:-20px;height:100px;">
                <Table :loading="loading" border ref="selection" :columns="orderCols" :data="orderList" @on-select="selectItem"
                       @on-select-cancel="cancelItem"
                       @on-select-all="selectItemAll"
                       @on-selection-change="selectChange"></Table>
            </div>
            <div style="height:300px;"> </div>

        </div>
    </div>
</template>

<script>
    import * as dateUtil from "iview";

    export default {
        name: 'two',
        data () {
            return {
                Country:'0',
                cityValue:'0',
                status:'0',
                selectDataStore:[],
                searchValue:'0',
                searchPleach:'房源标题,房源地址,sku',
                orderList:[],
                orderListSize:0,

//                orderNo:'',
//                rentmoney:'0',
//                depositmoney:'0',
//                securitymoney:[],
//                status:'0',
//                email:'房源标题,房源地址,sku',
//                wechat:[],
//                tenantName:0,
//                tenantPhoneNum
//                createTime
                orderCols: [
//                    {
//                        type: 'selection',
//                        width: 60,
//                        align: 'center'
//                    },
                    {
                        title: '订单号',
                        key: 'orderNo',
                        width: 250,
                        align: 'center'
//                        render: (h, params) => {
//                            return h('div', [
//                                h('strong', params.row.orderNo)
//                            ]);
//                        }
                    },
                    {
                        title: '租金',
                        key: 'rentmoney',
                        align: 'center'
                    },

                    {
                        title: '订单状态',
                        key: 'status',
                        align: 'center',
//                        0 下单 1 付定金 2 已支付租金 3 已取消 ,
                        render: (h, params) => {

                            const houseStatus = params.row.status == '0' ? '待付款'
                                : params.row.status == '1' ? '已付定金'
                                    : params.row.status == '2' ? '已支付租金'
                                        :'已取消'
                            return h('div', [
                                h('strong', houseStatus)
                            ]);
                        }
                    },

                    {
                        title: '客户姓名',
                        key: 'tenantName',
                        align: 'center'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        align: 'center'
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
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.update(params.index)
                                        }
                                    }
                                }, '更新')
                            ]);
                        }
                    }
                ],
                city:[
                    {
                        value:'0',
                        label:'请选择'
                    },
                    {
                        value:'1',
                        label:'城市a'
                    },
                    {
                        value:'2',
                        label:'城市b'
                    }
                ],
                rentBuyValue:'0',
            }
        },
        computed: {
        },

        mounted() {

        },
        created: function () {
            this.getorderList();
        },

        methods: {
            getorderList:function () {
                let getUrl = SERVER_ROOT_URL+'/order/house/all?'+'page=0&pageSize=0';
                this.$http.get(getUrl
                ).then(function (res) {
                    console.log(res);
                    if(res.body.status === 200){
                        this.orderList= res.data.data;
                        this.orderListSize = this.orderList.length;
                        console.log(this.orderList.length);
                        console.log(JSON.stringify(this.orderList));
//                        alert(JSON.stringify(this.orderList));

                    }else{
                        alert("查询失败"+res.body.status)
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })

            },

            delete:function (index) {
//                let getUrl = SERVER_ROOT_URL+'/house/admin/delete_house?id='+this.orderList[index].id;
//                this.$http.get(getUrl
//                ).then(function (res) {
//                    console.log(res);
//                    if(res.body.status === 200){
//                        this.orderList.splice(index, 1);
//                    }else{
//                        alert("删除失败"+res.body.status)
//                    }
//                })
//                    .catch(function (err) {
//                        console.log(err)
//                        console.log('错误')
//                        alert(JSON.stringify(err.message))
//                    })

            },

            setHot:function () {
//          if (!selectDataStore.length) {
//              let arr1 = this.selectDataStore
//              let arr2 = this.data
//              for (let i = 0; i < arr1.length; i++) {
//                  for (let j = 0; j < arr2.length; j++) {
//                      if (arr1[i].regNo === arr2[j].regNo) {
//                          this.selectDataStore.splice(i, 1)
//                      }
//                  }
//              }
                alert(this.selectDataStore[0].id);
//          }else {
//              alert("请选择");
//          }
                let getUrl = SERVER_ROOT_URL+'/house/admin/set_hot_house?houseId='+this.selectDataStore[0].id;
                this.$http.get(getUrl
                ).then(function (res) {
                    console.log(res);
                    if(res.body.status === 200){
//                    this.selectDataStore[0].isHot='1';
                        alert("设置成功")
                        this.orderList.forEach((item, index) => {
                            if (item.id == this.selectDataStore[0].id) {      //这里我数据中regNo是唯一的，所以拿来做判断条件
//                            this.selectDataStore.splice(index, 1)
                                item.isHot= '1';
                            }
                        })
                    }else{
                        alert("设置失败"+res.body.status)
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })

            },
            cancelHot:function () {
//          if (!selectDataStore.length) {
//              let arr1 = this.selectDataStore
//              let arr2 = this.data
//              for (let i = 0; i < arr1.length; i++) {
//                  for (let j = 0; j < arr2.length; j++) {
//                      if (arr1[i].regNo === arr2[j].regNo) {
//                          this.selectDataStore.splice(i, 1)
//                      }
//                  }
//              }
//            alert(this.selectDataStore[0].id);
//          }else {
//              alert("请选择");
//          }
                let getUrl = SERVER_ROOT_URL+'/house/admin/cancel_hot_house?houseId='+this.selectDataStore[0].id;
                this.$http.get(getUrl
                ).then(function (res) {
                    console.log(res);
                    if(res.body.status === 200){
//                    this.selectDataStore[0].isHot='1';
                        alert("设置成功")
                        this.orderList.forEach((item, index) => {
                            if (item.id == this.selectDataStore[0].id) {      //这里我数据中regNo是唯一的，所以拿来做判断条件
//                            this.selectDataStore.splice(index, 1)
                                item.isHot= '0';
                            }
                        })
                    }else{
                        alert("设置失败"+res.body.status)
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })

            },
            Reset(){
                this.Country = '0';
                this.cityValue = '0';
                this.rentBuyValue = '0';
                this.status = '0';
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

            searchChange(a){

                switch (a) {
                    case '0':
                        this.searchPleach="房源标题,房源地址,sku"
                        break;
                    case '1':
                        this.searchPleach="经纪人/中介名称"
                        break;
                    case '2':
                        this.searchPleach="开发商名称"
                        break;
                    case '3':
                        this.searchPleach="城市中文名,城市英文名"
                        break;
                    case '4':
                        this.searchPleach="学校中文名,学校英文名"
                        break;
                    case '5':
                        this.searchPleach="房源录入来源"
                        break;

                }


            }

        },


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
    .tit{
        font-weight: 700
    }
    .tableTit{
        font-weight: 700;
        text-align: center;
        border: 1px solid #ccc;
        border-right: none;
        position: relative;
        span{
            position: absolute;
            top:50%;
            margin-top: -15px;
            display:inline-block;
            width:100%;
            left:0%;
        }
    }
    .tablemain{
        text-align: center;
        border: 1px solid #ccc;
        border-right: none;
        border-top: none;
        position: relative;
        span{
            position: absolute;
            top:50%;
            margin-top: -15px;
            display:inline-block;
            width:100%;
            left:0%;
        }
    }
</style>
