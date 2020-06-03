<!-- 子组件 -->
<template>
    <div class="banner">
        <div class="swiper-container" :class="swiperid">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div> -->
                <slot name="swiper-con"></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" :class="goTo"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from "swiper";
    import "swiper/css/swiper.css";
    export default {
        name: "banner",
        props: {
            paginationType: {
                type: String,
                default: "bullets"
            },
            swiperid: {
                type: String,
                default: ""
            },
            goTo: {
                type: String,
                default: ""
            },
            myeffect: {
                type: String,
                default: ""
            }

        },
        mounted() {
            console.log(this.swiperid)
            //就是类选择器.mybanner1   .mybanner2
            new Swiper('.' + this.swiperid, {
                loop: true, // 循环模式选项
                effect: this.myeffect,
                autoplay:true,  //自动播放
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    // type: 'bullets',
                    type: this.paginationType,
                    //type : 'progressbar',
                    //type : 'custom',
                },
            })
        }

    }
</script>
<style lang="less">
    .banner {
        width: 100%;
    }
    .swiper-slide>img {
        width: 100%;
    }

    .toLeft {
        text-align: right;
    }

    :root {
        --swiper-theme-color: #fff;
    }
</style>