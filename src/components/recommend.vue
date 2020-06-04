<template>
  <div class="recommend">
    <!-- 轮播图区域 -->
    <Banner swiperid="mybanner1" goTo="toLeft">
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img01.png" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img02.jpg" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img03.png" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img04.jpg" alt />
      </div>
      <div slot="swiper-con" class="swiper-slide">
        <img src="../assets/images/home/img05.jpg" alt />
      </div>
    </Banner>
    <!-- 导航区域 -->
    <ul class="ul-nav">
      <li v-for="(item,index) in arr" :key="index">
        <img :src="item.url" alt class="mypic" />
        <span class="smalltitle">{{item.smalltitle}}</span>
        <br />
        <span>{{item.title}}</span>
      </li>
    </ul>
    <!-- 大图区域 -->
    <div class="nav-img">
      <img src="../assets/images/home/banner.png" alt class="banner" />
      <div class="linghang">
        <span>
          <img src="../assets/images/home/linghang.jpg" alt />
        </span>
        <span>领航装饰</span>
      </div>
      <span class="design">专注家装设计 口碑保障</span>
    </div>
    <!-- 深圳找装修区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3>深圳找装修</h3>
        </li>
        <li class="search-renovate-m">
          <span>百万业主口碑装修公司</span>
        </li>
        <li>
          <a href="#" class="more">更多></a>
        </li>
      </ul>
      <ul class="renovatelist">
        <li v-for="(item,index) in renovatearr" :key="index">
          <img :src="item.url" alt class="renovate-pic" />
          <br />
          <p class="renovate-title">{{item.title}}</p>
          <span class="iconfont icon-start-copy" style="color:red"></span>
          <br />
          <span class="service">{{item.service}}</span>
        </li>
      </ul>
      <div class="coupon">
        <p>装修有好券</p>
        <ul>
          <li v-for="(item,index) in couponarr" :key="index">
            <div class="coupon-left">
              <div class="coupon-top">
                <span>￥</span>
                <span class="aboutprice">{{item.price}}</span>
                <span class="use">{{item.use}}</span>
              </div>
              <div class="coupon-bottom">
                <span>{{item.validity}}</span>
              </div>
            </div>
            <div class="coupon-right">
              <span>{{item.getcoupon}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="goodservice">
        <p>装修好服务</p>
        <ul>
          <li v-for="(item,index) in goodservicearr" :key="index">
            <img :src="item.url" alt class="imgbg" />
            <h4>{{item.p1}}</h4>
            <span class="service-design">{{item.p2}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 深圳买建材区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(239, 78, 78)">深圳买建材</h3>
        </li>
        <li class="search-renovate-m">
          <span>
            <a href="#">查口碑</a>
            <a href="#">看点评</a>
            <a href="#">享优惠</a>
          </span>
        </li>
        <li>
          <a href="#" class="more">更多></a>
        </li>
      </ul>
      <ul class="renovate-material">
        <li
          v-bind:class="{liactive:active==index}"
          @click="clickmaterial(index,item)"
          v-for="(item,index) in renovatematerialarr"
          :key="index"
        >{{item}}</li>
      </ul>
      <div>
        <i class="iconfont icon-shanglajiantou" v-show="ishow" @click="pickup"></i>
        <i class="iconfont icon-xialasanjiao" v-show="!ishow" @click="show"></i>
      </div>
      <!-- 深圳买建材橱柜对应渲染的数据 -->
      <ul class="renovatelist buymaterial">
        <li v-for="(item,index) in buymateriallist" :key="index">
          <img :src="item.url" alt class="renovate-pic" />
          <br />
          <p class="renovate-title">{{item.title}}</p>
          <span class="iconfont icon-start-copy" style="color:red"></span>
          <br />
          <span class="num">
            口碑值:
            <span style="color:rgba(254, 62, 45)">{{item.num}}</span>
          </span>
          <br />
          <span class="service">{{item.service}}</span>
        </li>
      </ul>
      <!-- 深圳居家服务对应的渲染的数据 -->
      <ul class="renovatelist buymaterial">
        <li v-for="(item,index) in housingarr" :key="index">
          <img :src="item.url" alt class="renovate-pic" />
          <br />
          <p class="renovate-title">{{item.title}}</p>
          <span class="iconfont icon-start-copy" style="color:red"></span>
          <br />
          <span class="num">
            口碑值:
            <span style="color:rgba(254, 62, 45)">{{item.num}}</span>
          </span>
          <br />
          <span class="service">{{item.service}}</span>
        </li>
      </ul>
      <!-- 深圳瓷砖的渲染数据 -->
      <ul class="renovatelist buymaterial">
        <li v-for="(item,index) in brickarr" :key="index">
          <img :src="item.url" alt class="renovate-pic" />
          <br />
          <p class="renovate-title">{{item.title}}</p>
          <span class="iconfont icon-start-copy" style="color:red"></span>
          <br />
          <span class="num">
            口碑值:
            <span style="color:rgba(254, 62, 45)">{{item.num}}</span>
          </span>
          <br />
          <span class="service">{{item.service}}</span>
        </li>
      </ul>
    </div>
    <!-- 精选品牌区域 -->
    <div class="search-renovate">
      <ul class="search-renovate-h">
        <li class="search-renovate-t">
          <h3 style="color:rgba(124, 89, 224)">精选品牌</h3>
        </li>
        <li>
          <a href="#" class="more">深度解读更多大牌></a>
        </li>
      </ul>
      <ul class="brand">
        <li>
          <img src="../assets/images/home/sfy.png" alt />
        </li>
        <li>
          <p>
            齐家优选品牌推荐
            全家2000+线下实体门店
          </p>
        </li>
        <li>去看看</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";

export default {
  name: "recommend",
  components: {
    Banner
  },
  data: function() {
    return {
      active: 0, //当前买建材索引
      currentView: "", //买建材对应要显示的内容
      ishow: false, //箭头和剩下的建材的是否显示
      arr: [],
      renovatearr: [],
      couponarr: [],
      goodservicearr: [],
      renovatematerialarr: [],
      splicearr: [],
      buymateriallist: [],
      housingarr: [],
      brickarr: []
    };
  },
  mounted() {
    //请求index的数据
    this.getindexdata();
    //循环renovatematerialarr买建材的这个数组
    //一加载的时候我就只让前面的10个显示
    this.renovatematerialarr.map(originarr => {
      return originarr.splice(8, 18);
    });
  },
  methods: {
    getindexdata() {
      console.log("bbb");
      this.$axios.get("/data/home/index.json").then(res => {
        console.log("优惠券", res.data.mydata.goodservice);
        this.arr = res.data.mydata.lists;
        this.renovatearr = res.data.mydata.renovate;
        this.couponarr = res.data.mydata.coupon;
        this.goodservicearr = res.data.mydata.goodservice;
        this.renovatematerialarr = res.data.mydata.renovatematerial;
        this.buymateriallist = res.data.mydata.buymateriallist;
        this.housingarr = res.data.mydata.houseservice;
        this.brickarr = res.data.mydata.brick;
        console.log("hha", this.brickarr);
        console.log("删除之后的数组", this.renovatematerialarr.splice(8, 18)); //家用电器-开关照明
        console.log(this.renovatematerialarr);
        // this.splicearr = this.renovatematerialarr.splice(0, 8);  //橱柜-家具
        // console.log("splicearr", this.splicearr)
      });
    },
    //点击买建材对应的选项
    clickmaterial(i, v) {
      console.log("点击选建材", i, v);
      this.active = i;
    },
    pickup() {
      console.log("收起来");
      //点击上拉的时候下拉箭头显示  收起箭头消失
      //点击上拉的时候 只显示前10个
      this.ishow = false;
    },
    show() {
      console.log("下拉显示出来");
      //点击下拉的时候 下拉箭头消失  收起箭头显示
      //点击下来的时候 整个数组显示出来
      this.ishow = true;
      this.renovatematerialarr.push(1);
    }
  }
};
</script>
<style lang="less">
@import url("../assets/css/font/iconfont.css");
@import url("../assets/css/recommend/recommend.css");
</style>