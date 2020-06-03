<template>
    <div class="recommend">
        <!-- 轮播图区域 -->
        <Banner swiperid="mybanner1" goTo="toLeft">
            <div slot="swiper-con" class="swiper-slide">
                <img src="../assets/images/home/img01.png" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../assets/images/home/img02.jpg" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../assets/images/home/img03.png" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../assets/images/home/img04.jpg" alt="">
            </div>
            <div slot="swiper-con" class="swiper-slide">
                <img src="../assets/images/home/img05.jpg" alt="">
            </div>
        </Banner>
        <!-- 导航区域 -->
        <ul class="ul-nav">
            <li v-for="(item,index) in arr" :key="index">
                <img :src="item.url" alt="" class="mypic">
                <span class="smalltitle">{{item.smalltitle}}</span>
                <br>
                <span>{{item.title}}</span>
            </li>
        </ul>
        <!-- 大图区域 -->
        <div class="nav-img">
            <img src="../assets/images/home/banner.png" alt="" class="banner">
            <div class="linghang">
                <span><img src="../assets/images/home/linghang.jpg" alt=""></span>
                <span>领航装饰</span>
            </div>
            <span class="design">专注家装设计 口碑保障</span>
        </div>
        <!-- 深圳找装修区域 -->
        <div class="search-renovate">
            <ul class="search-renovate-h">
                <li class="search-renovate-t">
                    <h3> 深圳找装修</h3>
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
                    <img :src="item.url" alt="" class="renovate-pic">
                    <br>
                    <p class="renovate-title">{{item.title}}</p>
                    <span class="iconfont icon-start-copy" style="color:red"></span>
                    <br>
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
                        <img :src="item.url" alt="" class="imgbg">
                        <h4>{{item.p1}}</h4>
                        <span class="service-design">{{item.p2}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 深圳买建材区域 -->
        <div>
            <ul class="search-renovate-h">
                <li class="search-renovate-t">
                    <h3> 深圳买建材</h3>
                </li>
                <li class="search-renovate-m">
                    <span>查口碑 看点评 享优惠</span>
                </li>
                <li>
                    <a href="#" class="more">更多></a>
                </li>
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
        data: function () {
            return {
                arr: [],
                renovatearr: [],
                couponarr: [],
                goodservicearr: []

            }
        },
        mounted() {
            //请求index的数据 
            this.getindexdata()
        },
        methods: {
            getindexdata() {
                console.log("bbb")
                this.$axios.get("/data/home/index.json")
                    .then(res => {
                        console.log("优惠券", res.data.mydata.goodservice)
                        this.arr = res.data.mydata.lists
                        this.renovatearr = res.data.mydata.renovate
                        this.couponarr = res.data.mydata.coupon
                        this.goodservicearr = res.data.mydata.goodservice
                        console.log("arr", this.goodservicearr)

                        //this.arr.push(res.data.recommend_feeds)
                        // console.log("arr呀呀呀哈哈哈", this.arr,this.arr.length)
                        // console.log(this.arr.length)//1
                    })
            }
        },

    }
</script>
<style lang="less">
    @import url("../assets/css/myfont/iconfont.css");

    /* 导航区域 */
    .ul-nav {
        padding-top: 40/100rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        background: #fff;

        li {
            width: 20%;
            margin-bottom: 30/100rem;
            position: relative;

            img {
                width: 95/100rem;

            }

            span {
                font-size: 12px;
            }

            .smalltitle {
                position: absolute;
                right: 0px;
                top: 2px;
                background: rgba(255, 94, 94);
                color: #fff;
                border-radius: 10px;
                width: 31px;
                box-shadow: 2px 2px 2px #fff;
            }
        }

        li:nth-of-type(5) {
            .smalltitle {
                background: rgba(154, 123, 255)
            }
        }
    }

    /* 大图区域 */
    .nav-img {
        background: #fff;
        margin-top: 30/100rem;
        padding: 20/100rem;
        position: relative;
    }

    .banner {
        width: 100%;
    }

    .linghang {
        position: absolute;
        top: 49/100rem;
        left: 47/100rem;
        color: #fff;
        font-size: 12px;

        img {
            width: 30/100rem;
            margin-right: 10/100rem;
        }
    }

    .design {
        position: absolute;
        top: 80/100rem;
        left: 47/100rem;
        color: #fff;
    }

    /* 深圳找装修区域 */
    .search-renovate {
        padding: 10/100rem;
        background: #fff;
        margin-top: 30/100rem;

        .search-renovate-h {
            display: flex;
            position: relative;


            .more {
                font-size: 12px;
                color: rgba(194, 194, 194);
                text-decoration: none;
                position: absolute;
                right: 10/100rem;
                top: 10/100rem;
            }

            .search-renovate-t {
                h3 {
                    color: rgba(245, 142, 20);
                }
            }

            .search-renovate-m {
                span {
                    font-size: 12px;
                    color: rgba(194, 194, 194);
                    margin: 20/100rem;
                    display: inline-block;
                    margin-top: 10/100rem;
                }
            }


        }

    }

    .renovatelist {
        /* width:100%; */
        display: flex;
        overflow-x: scroll;

        li {
            border: 1px solid rgba(236, 236, 236);
            padding: 10/100rem;
            margin-right: 10/100rem;
            text-align: center;

            img {
                width: 150/100rem;
                border: 1px solid rgba(236, 236, 236);
                border-radius: 50%;
            }

            .renovate-title {
                width: 220/100rem;
                font-size: 12px;
                font-weight: bold;
            }

            .service {
                color: rgba(254, 62, 45);
                border: 1px solid rgba(254, 62, 45);
                border-radius: 20px;
                padding: 5/100rem 20/100rem;
                font-size: 12px;
                margin: 20/100rem 0;
                display: inline-block;
            }
        }
    }

    .coupon {
        text-align: left;

        p {
            padding: 20/100rem 0;
        }

        ul {
            display: flex;

            li {
                margin-right: 20/100rem;
                margin-left: 10/100rem;
                display: flex;
            }

            li:first-of-type {
                background: rgba(247, 243, 232);
                color: rgba(217, 183, 124);
            }

            li:nth-of-type(2) {
                background: rgba(243, 225, 216);
            }

            .aboutprice {
                font-size: 30px;
                font-weight: bold;
            }

            .use {
                font-size: 12px;
            }

            .coupon-right {
                width: 20px;
                font-size: 12px;
                background: rgba(245, 236, 211);
                padding: 8px;
            }

            .coupon-bottom {
                color: rgba(153, 153, 153);
                font-size: 12px;
            }
        }

    }

    .goodservice {
        p {
            text-align: left;
            padding: 20/100rem 0;
        }

        ul {
            display: flex;
            overflow-x: scroll;

            li {
                position: relative;
                width: 400/100rem;
                margin-right: 20/100rem;

                img {
                    width: 350/100rem;
                }

                h4 {
                    color: rgba(108, 160, 224);
                    position: absolute;
                    top: 33%;
                    left: 50%;
                    transform: translate(-50%, -33%);
                    width: 200/100rem;
                }

                .service-design {
                    font-size: 12px;
                    position: absolute;
                    bottom: 15px;
                    left: 10px;
                }
            }
        }
    }
</style>