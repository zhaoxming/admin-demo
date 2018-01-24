<template>
  <div class="Map" :style="{
    height: '500px',
    width:'500px'
    }">
    <div>
      <span    style="width: 260px">：</span>
      <Input  placeholder="请输入需要查询的省份"  v-model.trim="province"
              style="width: 60px"></Input>
      <Input  placeholder="请输入需要查询的城市"  v-model.trim="city"
              style="width: 60px"></Input>
      <Input  placeholder="请输入需要查询的具体地址"  v-model.trim="name"
              style="width: 160px"></Input>
      <button v-on:click="addressSearch">查询</button>
    </div>
    <div id="allmap"></div>
  </div>
</template>

<script>
  /* eslint-disable quotes,camelcase */

  import {MP} from "../../static/js/map"
  import Input from "../../node_modules/iview/src/components/input/input";
  //  import {MP} from "./js/BMap"
  //  import {Change} from './js/changeJingwei'
  export default {
    components: {Input},
    name: 'Map',
    data () {
      return {
        ak: 'wQuORVwGwSzoqb4WsLm62gxy8HsjlNeW'
        /*province:'',
        name:'' ,
        city:''*/

      }
    },
    mounted() {
      this.$nextTick(function () {
        MP("wQuORVwGwSzoqb4WsLm62gxy8HsjlNeW").then( BMap => {
          let th = this
          let map = new BMap.Map("allmap");            // 创建Map实例
          let point = new BMap.Point(-0.130821,51.522938); // 创建点坐标
          map.centerAndZoom(point,15);
          map.enableScrollWheelZoom();
          map.addEventListener("click", showInfo);
          let myValue
          myValue = this.province+  this.city+ '' +  '' + this.name;  //传入相应参数 省、市、区、街道、名称 （内容可以为空）
          console.log("英国"+myValue)
          if("NaNundefined" != myValue){
            setPlace();
          }

          function setPlace(){
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
              console.log("==========")
                console.log(local.getResults().getPoi(0))
              th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
              map.centerAndZoom(th.userlocation, 16);
              map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
            }
            let local = new BMap.LocalSearch(map, { //智能搜索
              onSearchComplete: myFun
            });
            local.search(myValue);
          };
          function showInfo(e){
            th.point = e.point.lng + ", " + e.point.lat;
          /*  alert(e.point.lng + ", " + e.point.lat,function () {

              th.point = e.point.lng + ", " + e.point.lat
            });*/

          }
        })
      })
    },
    props: {
      province: {
        type: String
      },
      name: {
        type: String
      },
      city: {
        type:String
      },
      height: {
        type: Number
      },
      width: {
        type: Number
      },
      point:{
          type:String
      }
    },
    methods: {
      handleParentClick(e) {
        console.info("map=========")
        console.info(e)
        this.province =e.country;
        this.city = e.city.name;
        this.name = e.address;
        console.info(this)
        this.$emit('child-say',this.point);
      },
     /* sad(){
        let map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 10);
        map.enableScrollWheelZoom(true);
        map.clearOverlays();
        console.log(data.result.location.lng);
        console.log(data.result.location.lat);
        let new_point = new BMap.Point(data.result.location.lng, data.result.location.lat);
        let marker = new BMap.Marker(new_point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
        map.setCurrentCity(this.province);          // 设置地图显示的城市 此项是必须设置的
      }
*/
      addressSearch:function () {
          console.log("cahx")
        this.$nextTick(function () {
          MP("wQuORVwGwSzoqb4WsLm62gxy8HsjlNeW").then( BMap => {
            let th = this
            let map = new BMap.Map("allmap");            // 创建Map实例
            let point = new BMap.Point(-0.130821,51.522938); // 创建点坐标
            map.centerAndZoom(point,15);
            map.enableScrollWheelZoom();
            map.addEventListener("click", showInfo);
            let myValue
            myValue = this.province+  this.city+ '' +  '' + this.name;  //传入相应参数 省、市、区、街道、名称 （内容可以为空）
            //  console.log("英国"+myValue)
            setPlace();
            function setPlace(){
              map.clearOverlays();    //清除地图上所有覆盖物
              function myFun(){
                th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                map.centerAndZoom(th.userlocation, 16);
                map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
              }
              let local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
              });
              local.search(myValue);
            };
            function showInfo(e){
              th.point = e.point.lng + ", " + e.point.lat;

              /*  alert(e.point.lng + ", " + e.point.lat,function () {

               th.point = e.point.lng + ", " + e.point.lat
               });*/

            }
          })
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #allmap {
    height: 100%;
    width: 100%;
  }
</style>
