<template>
    <div class="rightMain">
        <div class="content">
            <div class="step-nav">
                <li>
                    <span :class="{spanActive:index==0}" v-for="(item,index) in titList" href="">{{item.value}}</span>
                </li>
            </div>
            <div class="list" style="marginTop:20px;">
                <span>录入来源：</span>
                <Input :disabled="$route.params.status==0" placeholder="" v-model.trim="baseFrom.source"
                       style="width: 260px"></Input>
            </div>
            <div class="list">
                <span>标题：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" placeholder="" v-model.trim="baseFrom.titlecn"
                       style="width: 260px;marginRight:40px;"></Input>
                <span>标题(EN)：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" placeholder="" v-model.trim="baseFrom.titleen"
                       style="width: 260px"></Input>
            </div>
            <div class="list">
                <span>国家：<span class="imp">*</span></span>
                <Select :disabled="$route.params.status==0" ref="province" style="width: 260px;marginRight:40px;"
                        v-model.trim="baseFrom.country" v-on:change="getCityList">
                    <Option value="英国" key="英国 United Kingdom">英国 United Kingdom</Option>
                </Select>

                <span>城市：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.city.cityId" placeholder=""
                       style="width: 260px" v-on:input="getCityList" v-if="false">
                </Input>
                <Select
                        v-model="baseFrom.city.cityId" style="width: 260px;"
                        filterable
                        remote
                        :remote-method="getCityList"
                        :loading="loading1">
                    <Option v-for="(option, index) in cityList" :value="option.cityId" :key="index">{{ option.nameEn
                        }} {{ option.nameCn }}
                    </Option>
                </Select>
            </div>
            <div class="list">
                <span>邮编：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.zip" placeholder=""
                       style="width: 260px"></Input>
            </div>
            <div class="list">
                <span>地址：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.address" placeholder=""
                       style="width: 648px" v-on:blur="setLocationValue"></Input>
            </div>
            <div class="list">
                <span>定位：<span class="imp">*</span></span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.location" placeholder=""
                       style="width: 260px"></Input>
                <span @click="setLocationValue">
          <Icon style="color:#FF5A5F;fontSize:22px;cursor:pointer" type="ios-location"></Icon>
        </span>

                <!-- <Button type="primary" @click="modal1 = true">Display dialog box</Button>-->
                <Modal
                        v-model="modal1" width="630px"
                        title="地图定位"
                        @on-ok="ok"
                        @on-cancel="cancel">

                    <mapbox @getlnglat="getlnglat"></mapbox>

                </Modal>
            </div>
            <div class="list">
                <span>属性：</span>
            </div>
            <div class="bor"></div>
            <div class="list">
                <span>床位数：</span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.bedrommsize" placeholder=""
                       style="width: 100px;marginRight:40px"></Input>
                <span>公寓状态：</span>
                <Select :disabled="$route.params.status==0" style="width: 100px;marginRight:40px;"
                        v-model.trim="baseFrom.rentstatus">
                    <Option value="尚有空房" key="">尚有空房</Option>
                    <Option value="即将住满" key="">即将住满</Option>
                    <Option value="已住满" key="">已住满</Option>
                </Select>

                <span>最小房源价格：</span>
                <Input :disabled="$route.params.status==0" v-model.trim="baseFrom.pricemin" placeholder=""
                       style="width: 100px;marginRight:40px"></Input>
            </div>
            <div class="list">
                <span>起租房时间：</span>

                <DatePicker v-model="renttime" v-model.trim="baseFrom.renttime" format="yyyy-MM-dd"
                            type="date" placeholder="请选择" style="width: 260px"></DatePicker>
            </div>
            <div class="list">
                <span style="width:120px;">概况（中文）：</span>
                <span size="small" style="marginRight:400px" type="info" hidden></span>
                <span>概况(EN)：</span>
            </div>
            <div class="list" style="height:150px;">
                <div style="float:left;marginRight:120px;width: 40%;">
          <textarea class="ss1" v-model.trim="baseFrom.tipcn">

        </textarea>
                </div>
                <div style="float:left;width: 40%;">
          <textarea class="ss2" v-model.trim="baseFrom.tipen">

        </textarea></div>
            </div>
            <div class="list">
                <span style="width:120px;">内部设施（中文）：</span>
                <span size="small" style="marginRight:400px" type="info" hidden></span>
                <span>内部设施(EN)：</span>
            </div>
            <div class="list" style="height:150px;">
                <div style="float:left;marginRight:120px;width: 40%;">
          <textarea class="ss1" v-model.trim="baseFrom.facilitiesincn">

        </textarea>
                </div>
                <div style="float:left;width: 40%;">
          <textarea class="ss2" v-model.trim="baseFrom.facilitiesinen">

        </textarea></div>
            </div>
            <div class="list">
                <span style="width:120px;">周边设施（中文）：</span>
                <span size="small" style="marginRight:400px" type="info" hidden></span>
                <span>周边设施(EN)：</span>
            </div>
            <div class="list" style="height:150px;">
                <div style="float:left;marginRight:120px;width: 40%;">
          <textarea class="ss1" v-model.trim="baseFrom.facilitiesoutcn">

        </textarea>
                </div>
                <div style="float:left;width: 40%;">
          <textarea class="ss2" v-model.trim="baseFrom.facilitiesouten">

        </textarea></div>
            </div>
            <div class="list">
                <div @click="addDescription" class="nextButton">保存下一步</div>
            </div>

        </div>

    </div>
</template>

<script>
    /*  import {MP} from "../../../static/js/map";
     import baiduMap from '@/components/map';*/
    import * as dateUtil from "iview/src/utils/date";
    import mapbox from '@/components/mapbox';

    export default {
        name: 'one',
        data() {
            return {
                ak: 'wQuORVwGwSzoqb4WsLm62gxy8HsjlNeW',
                point: '',
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

                    {
                        value: '5.图片视频',
                        link: '/six'
                    }

                ],
                baseFrom: {
                    source: '',
                    titlecn: '',
                    titleen: '',
                    zip: '',
                    managerid: sessionStorage.getItem("userId"),
                    managername: sessionStorage.getItem("userName"),
                    rolename: sessionStorage.getItem("roleName"),
                    country: '',
                    city: {
                        name: '',
                        cityId: ''
                    },
                    address: '',
                    location: '',
                    type: [],
                    facilitiesoutcn: '',
                    facilitiesouten: '',
                    tipcn: '',
                    tipen: '',
                    rentstatus: '',
                    bedrommsize: '',
                    renttime: '',
                    pricemin: '',
                    thumbnails: '',
                    facilitiesincn: '',
                    facilitiesinen: ''
                },
                cityList: [],
                cityInput: true,
                showCitySelect: false,
                modal1: false,
                loading1: false,
                inputValue: ''
            }
        },
        mounted() {

        },

        events: {},
        computed: {},
        components: {
            mapbox: mapbox
        },

        methods: {

            next() {
                this.$router.push('/two/' + this.$route.params.status + '')
            },

            setLocationValue: function () {
                // console.log("获取定位信息")
                let vm = this;
                console.log(vm.baseFrom)
                vm.modal1 = true;
                vm.province = vm.baseFrom.country;
                vm.city = vm.baseFrom.city.nameCn;
                vm.name = vm.baseFrom.address;

            },
            addressSearch: function () {

            },
            addDescription: function () {
                let data = this.baseFrom;
                let type = data.type.toString();
                let dateval = dateUtil.format(data.renttime, 'yyyyMMdd');
                console.log(JSON.stringify(data));
                console.log(JSON.stringify(type));
                sessionStorage.setItem("cityId", data.city.cityId);
                sessionStorage.setItem("cityCn", data.city.name);
                let locationarr = data.location.split(',');
                sessionStorage.setItem("lon", locationarr[0]);
                sessionStorage.setItem("lat", locationarr[1]);
                sessionStorage.setItem("titlecn", data.titlecn);
                let getUrl = SERVER_ROOT_URL + '/house/admin/add_description' + '?source=' + data.source + '&titlecn=' + data.titlecn +
                    '&titleen=' + data.titleen + '&zip=' + data.zip + '&managerid=' + data.managerid + '&managername=' + data.managername + '&rolename=' + data.rolename + '&location=' + data.location +
                    '&country=' + data.country + '&city=' + data.city.cityId + '&address=' + data.address + '&location=' + data.location +
                    '&type=' + type + '&facilitiesoutcn=' + data.facilitiesoutcn + '&facilitiesouten=' + data.facilitiesouten + '&tipcn=' + data.tipcn + '&tipen=' + data.tipen +
                    '&rentstatus=' + data.rentstatus + '&bedrommsize=' + data.bedrommsize + '&renttime=' + dateval + '&pricemin=' + data.pricemin + '&thumbnails=' + data.thumbnails +
                    '&facilitiesincn=' + data.facilitiesincn + '&facilitiesinen=' + data.facilitiesinen;
                this.$router.push('/two/' + this.$route.params.status + '')
                this.$http.post(getUrl).then(function (res) {
                    console.log(res)
                    if (res.body.status === 200) {
                        sessionStorage.setItem("houseId", res.body.data);
                        this.$router.push('/two/' + this.$route.params.status + '')
                    } else {
                        alert("保存，请检查相关参数！错误码：" + res.body.status)
                    }

                })
                    .catch(function (err) {
                        console.log(err)
                        console.log('错误')
                        alert(err.message)
                    })
            },
            addMap: function () {
                console.log("打开地图")
                this.$router.push('/map')
            },
            getlnglat: function (lnglat) {
                console.log("getlnglat");
                console.log(lnglat);

                var lng = lnglat.lng.toFixed(6);
                console.log(lng);
                var lat = lnglat.lat.toFixed(6);
                console.log(lat);
                let location = lng + ',' + lat;
                console.log(location);
                console.log();
                this.baseFrom.location = location;

            },
            ok() {
                /*this.$Message.info('Clicked ok');*/
            },
            cancel() {
                /*this.$Message.info('Clicked cancel');*/
            },

            /* showAllCity*/
            getCityList: function (query) {
                console.log("获取城市先" + query)
                let vm = this;
                let inputParam = vm.baseFrom.city.name;
                let getUrl = SERVER_ROOT_URL + '/house/location/get_all_city';

                this.$http.get(getUrl).then(function (res) {
                    console.log(res)
                    if (res.body.status === 200) {
                        let allCityList = res.body.data;

                        if (query !== '') {
                            this.loading1 = true;
                            setTimeout(() => {
                                this.loading1 = false;
                                const list = allCityList.map(item => {
                                    return {
                                        cityId: item.cityId,
                                        nameCn: item.nameCn,
                                        nameEn: item.nameEn
                                    };
                                });
                                console.log(list)
                                this.cityList = list.filter(item => item.nameEn.toLowerCase().indexOf(query.toLowerCase()) > -1
                                    || item.nameCn.toLowerCase().indexOf(query.toLowerCase()) > -1);
                            }, 200);
                        } else {
                            this.cityList = [];
                        }

                    } else {
                        alert("获取城市列表错误！错误码：" + res.body.status)
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


    .list {
        height: 33px;
        line-height: 33px;
        margin-bottom: 20px;
        > span {
            display: inline-block;
            width: 100px
        }
        .ss1 {
            float: left;
            width: 100%;
            height: 150px;
            border: 1px solid #ccc;
            margin-right: 120px;
        }
        .ss2 {
            float: left;
            width: 100%;
            height: 150px;
            border: 1px solid #ccc;
        }
        .nextButton {
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

    .bor {
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
    }

    .search {
        height: 38px;
    }

    .controls {
        margin-top: 4px;
        border: 1px solid transparent;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: 30px;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    #pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 400px;
    }

    #pac-input:focus {
        border-color: #4d90fe;
    }

    .pac-container {
        font-family: Roboto;
    }


</style>
