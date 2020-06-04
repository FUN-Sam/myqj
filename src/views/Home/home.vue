<!-- 首页的父组件 -->
<template>
    <div class="home">
        <!-- <Headers></Headers> -->
        <nav class="mynavs">
            <div :class="{active:curindex==0}" @click="curindex=0">
                <router-link to="/home/recommend">推荐</router-link>
            </div>

            <div :class="{active:curindex==1}" @click="curindex=1">
                <router-link to="/home/shenzhen">深圳</router-link>
            </div>
            <div :class="{active:curindex==2}" @click="curindex=2">
                <router-link to="/home/brand">品牌</router-link>
            </div>
            <div :class="{active:curindex==3}" @click="curindex=3">
                <router-link to="/home/tvlive">直播</router-link>
            </div>
            <div :class="{active:curindex==4}" @click="curindex=4">
                <router-link to="/home/strategy">攻略</router-link>
            </div>
            <div :class="{active:curindex==5}" @click="curindex=5">
                <router-link to="/home/housing">房产</router-link>
            </div>
            <div :class="{active:curindex==6}" @click="curindex=6">
                <router-link to="/home/meitu">美图</router-link>
            </div>
            <div :class="{active:curindex==7}" @click="curindex=7">
                <router-link to="/home/diray">日记</router-link>
            </div>
            <div :class="{active:curindex==8}" @click="curindex=8">
                <router-link to="/home/case">案例</router-link>
            </div>
            <div :class="{active:curindex==9}" @click="curindex=9">
                <router-link to="/home/topic">专题</router-link>
            </div>

            <div :class="{active:curindex==10}" @click="curindex=10">
                <router-link to="/home/vedio">视频</router-link>
            </div>
            <div :class="{active:curindex==11}" @click="curindex=11">
                <router-link to="/home/logsorting">选材</router-link>
            </div>
            <div :class="{active:curindex==12}" @click="curindex=12">
                <router-link to="/home/fengshui">风水</router-link>
            </div>
            <div :class="{active:curindex==13}" @click="curindex=13">
                <router-link to="/home/vedio">视频</router-link>
            </div>
            <div :class="{active:curindex==14}" @click="curindex=14">
                <router-link to="/home/logsorting">选材</router-link>
            </div>
            <div :class="{active:curindex==15}" @click="curindex=15">
                <router-link to="/home/fengshui">风水</router-link>
            </div>
        </nav>
        <div class="navcontent">
            <router-view></router-view>
        </div>


    </div>
</template>
<script>
    import Headers from "../../components/header"
    export default {
        name: "home",
        components: {
            Headers
        },
        data: function () {
            return {
                curindex: 0

            }
        }
    }
</script>
<style lang="less">
  @import url("../../assets/css/home/home.css");
</style>