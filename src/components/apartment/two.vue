<template>
    <div class="rightMain">
        <div class="content">
            <div class="step-nav">
                <li>
                    <span :class="{spanActive:index==1}" v-for="(item,index) in titList" href="">{{item.value}}</span>
                </li>
            </div>
            <div class="list" style="marginTop:20px">
                <span>房源SKU：</span>
                <Input :disabled="$route.params.status==0" readonly placeholder=""
                       style="width: 100px;marginRight:40px" v-model.trim="sku"></Input>
                <span>标题：</span>
                <Input :disabled="$route.params.status==0" readonly placeholder="标题"
                       style="width: 260px;marginRight:40px" v-model.trim="titleCn"></Input>
                <span>状态：</span>
                <Input :disabled="$route.params.status==0" readonly placeholder="编辑中" style="width: 100px"></Input>
            </div>
            <div class="list">
        <span class="tit">
          周边学校
        </span>
                <div style="float:right">
                    <!--<span style="color:#ff5a5f">（提示：交通信息如单条不填任何内容，后台会定时自动计算结果，也可手动输入数据保存）</span>-->
                    <!--<span> 共有<span style="color:#ff5a5f">1</span>条数据</span>-->
                    <!-- <span class="nextButton" style="padding:5px;" @click="removeFromItems()">手动添加学校</span>-->
                    <span class="nextButton" style="padding:5px;background:#46A3FF"
                          @click="getSchoolItems">抓取周边学校</span>
                    <!--<span class="nextButton" style="padding:5px;background:#aaa" @click="removeFromItems()">批量删除</span>-->
                </div>
            </div>
            <div class="list" style="height:auto">
                <Table border ref="selection" :columns="schoolCols" :data="schoolItems" @on-select="selectItem"
                       @on-select-cancel="cancelItem"
                       @on-select-all="selectItemAll"
                       @on-selection-change="selectChange"></Table>
            </div>
            <div class="list">
                <div @click="saveSchoolInfo" class="nextButton">保存下一步</div>
            </div>
        </div>

    </div>
</template>

<script>
    /* eslint-disable semi */
    import axios from 'axios'
    /* import Input from "../../../node_modules/iview/src/components/input/input";*/
    export default {
        /* components: {Input},*/
        name: 'two',
        data() {
            return {
                schoolCols: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '学校',
                        align: 'center',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.schoolname)
                            ]);
                        }
                    },
                    {
                        title: '直线距离',
                        align: 'center',
                        width: 100,
                        render: (h, params) => {
                            return h('div', [
                                h('p', params.row.direct + '公里')
                            ]);
                        }
                    },
                    {
                        title: '交通信息',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('p', '驾车:' + params.row.taxitime + ' 分钟 '+ params.row.taxidistance + ' 公里， ' + '步行:' + params.row.walktime + ' 分钟 '+ params.row.walkdistance + ' 公里， ' /* + '步行:' +
                  '公交:' + params.row.bustime + ' 分钟，'*/ + '骑车:' + params.row.biketime + ' 分钟 '+ params.row.bikedistance + ' 公里'),

                            ]);
                        }
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
                                            this.reCalculation(params.index)
                                        }
                                    }
                                }, '重算'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.schoolItems.splice(params.index, 1);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
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
                    /*{
                     value: '5.便利设施',
                     link: '/five'
                     },*/
                    {
                        value: '5.图片视频',
                        link: '/six'
                    }
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
                schoolItems: [],
                baseLocation: {
                    lon: sessionStorage.getItem("lon"),
                    lat: sessionStorage.getItem("lat")
                },
                titleCn: sessionStorage.getItem("titlecn"),
                sku: "S" + sessionStorage.getItem("houseId"),
                houseId: sessionStorage.getItem("houseId"),

                schoolType: '大学',
                deleteItems: [],
                checked: false,
                selectDataStore: [],
                calcInfoTemp: {
                    cycledistance: '',
                    cycleduration: '',
                    dirvedistance: '',
                    driveduration: '',
                    walkdistance: '',
                    walkduration: ''
                }
            }
        },
        computed: {},
        mounted() {

        },
        methods: {
            next() {
                this.$router.push('/three/' + this.$route.params.status + '')
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
            reCalculation: function (indexOfItem) {
                let that = this;
                console.log("reCalculation")
                console.log(indexOfItem)
                let schoolItem = this.schoolItems[indexOfItem];
                console.log(schoolItem);
                let baseLngLat = sessionStorage.getItem("lon") + ',' + sessionStorage.getItem("lat");
                console.log(baseLngLat)
                console.log(this.calcInfoTemp);
                let schoolLngLat = schoolItem.lng + ',' + schoolItem.lat;
                this.getDrivingInfo(schoolLngLat, baseLngLat,schoolItem);
                this.getWalkingInfo(schoolLngLat, baseLngLat,schoolItem);
                this.getCyclingInfo(schoolLngLat, baseLngLat,schoolItem);
                console.log("计算信息==")

                console.log(schoolItem)
                this.schoolItems.slice(indexOfItem,1,schoolItem);

            },
            getSchoolItems: function () {
                let vm = this;
                let cityId = sessionStorage.getItem("cityId");
                let getUrl = SERVER_ROOT_URL + '/house/location/get_school_list' + '?param=' + cityId;
                console.log(getUrl)
                vm.schoolItems = []

                this.$http.get(getUrl).then(function (res) {
                    console.log(res)
                    if (res.body.status === 200) {

                        let resarr = res.body.data;
                        console.log(resarr)
                        resarr.forEach(function (item) {
                            let schoolInfo = {};
                            let direct = vm.$options.methods.getdistance(vm.baseLocation.lat, vm.baseLocation.lon, item.schoolLat, item.schoolLong);
                            console.log("direct" + direct);
                            console.log("pre item " + item.direct);
                            schoolInfo.schoolid = item.schoolId;
                            schoolInfo.schoolname = item.schoolNameCn;
                            schoolInfo.houseid = vm.houseId;
                            schoolInfo.taxitime = '';
                            schoolInfo.taxidistance = '';
                            schoolInfo.walktime = '';
                            schoolInfo.walkdistance = ''
                            schoolInfo.bustime = '';
                            schoolInfo.biketime = '';
                            schoolInfo.bikedistance = ''
                            schoolInfo.direct = direct.toFixed(2);
                            //schoolInfo.direct = '35';
                            schoolInfo.kind = '0';//性质 0大学 1 高中 2小学
                            schoolInfo.lat = item.schoolLat;
                            schoolInfo.lng = item.schoolLong;
                            console.log("after item " + item.direct);

                            vm.schoolItems.push(schoolInfo)
                            console.log("after item " + JSON.stringify(vm.schoolItems));
                        })

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
            getDrivingInfo: function (schoolLngLat, baselngLat,schoolItem) {
                let _this = this;
                let dirveUrl = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + schoolLngLat + ';' + baselngLat +
                    '?roundtrip=true&access_token=pk.eyJ1Ijoiemhhb3htaW5nIiwiYSI6ImNqY29tcHlldzI1NDYyeW4zbmdneGRpd28ifQ.D9I4Rr992BOEOkuyvFQWhw';

                axios.get(dirveUrl).then((response) => {
                    let vm = this;
                    console.log("驾车信息")
                    // console.log(response.data.trips[0]);
                    _this.calcInfoTemp.driveduration = response.data.trips[0].duration;
                    _this.calcInfoTemp.dirvedistance = response.data.trips[0].distance;
                    schoolItem.taxitime = (response.data.trips[0].duration / 60).toFixed(2);
                    schoolItem.taxidistance = (response.data.trips[0].distance/1000).toFixed(2)
                    console.log(_this.calcInfoTemp);
                })
            },
            getWalkingInfo: function (schoolLngLat, baselngLat,schoolItem) {

                let _this = this;
                let walkUrl = 'https://api.mapbox.com/optimized-trips/v1/mapbox/walking/' + schoolLngLat + ';' + baselngLat + '?roundtrip=true&access_token=pk.eyJ1Ijoiemhhb3htaW5nIiwiYSI6ImNqY29tcHlldzI1NDYyeW4zbmdneGRpd28ifQ.D9I4Rr992BOEOkuyvFQWhw';

                return new Promise((setResponse, reject) => {
                    axios.get(walkUrl).then((response) => {

                        console.log("步行信息")
                        _this.calcInfoTemp.walkduration = response.data.trips[0].duration;
                        _this.calcInfoTemp.walkdistance = response.data.trips[0].distance;
                        schoolItem.walktime = (response.data.trips[0].duration / 60).toFixed(2);
                        schoolItem.walkdistance = (response.data.trips[0].distance/1000).toFixed(2)

                    })

                })

            },
            getCyclingInfo: function (schoolLngLat, baselngLat,schoolItem) {
                let _this = this;
                let cycleUrl = 'https://api.mapbox.com/optimized-trips/v1/mapbox/cycling/' + schoolLngLat + ';' + baselngLat + '?roundtrip=true&access_token=pk.eyJ1Ijoiemhhb3htaW5nIiwiYSI6ImNqY29tcHlldzI1NDYyeW4zbmdneGRpd28ifQ.D9I4Rr992BOEOkuyvFQWhw';
                axios.get(cycleUrl).then((response) => {
                    console.log("骑车信息")

                        _this.calcInfoTemp.cycleduration = response.data.trips[0].duration;
                        _this.calcInfoTemp.cycledistance = response.data.trips[0].distance;

                    schoolItem.biketime = (response.data.trips[0].duration / 60).toFixed(2)
                    schoolItem.bikedistance = (response.data.trips[0].distance/1000).toFixed(2)

                })

            },
            getdistance: function (lat1, lng1, lat2, lng2) {
                console.log("计算距离")
                let vm = this;
                console.log(vm)
                let radLat1 = vm.rad(lat1);
                let radLat2 = vm.rad(lat2);
                let a = radLat1 - radLat2;
                let b = vm.rad(lng1) - vm.rad(lng2);
                let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
                    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
                s = s * 6378.137;// EARTH_RADIUS;
                s = Math.round(s * 10000) / 10000; //输出为公里
                //s=s.toFixed(4);
                console.log("s" + s)
                return s;
            },
            rad: function (d) {
                return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
            },
            saveSchoolInfo: function () {
                let self = this;
                self.selectDataStore.forEach(function (item) {

                    self.$options.methods.save(item)

                })


                self.$router.push('/three/' + this.$route.params.status + '')
            },
            save: function (item) {
                let that = this;
                let url = SERVER_ROOT_URL + '/house/admin/add_school?biketime=' + item.biketime + "&bustime=" + item.biketime +
                    "&bustime=" + item.bustime + "&direct=" + item.direct + "&houseid=" + item.houseid + "&kind=" + item.kind + "&schoolid=" +
                    item.schoolid + "&schoolname=" + item.schoolname + "&taxitime=" + item.taxitime + "&walktime=" + item.walktime;
                axios.post(url).then((response) => {
                    console.log("学校信息")

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
        height: 80px;
        line-height: 80px;
    }

</style>
