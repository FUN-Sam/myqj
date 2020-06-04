<!-- 首页的头部的子组件 -->
<template>
    <div class="header" v-if="$route.path!='choosematerials'">
        <ul class="nav-header">
            <li>
                <div>
                    <span class="logo">齐家</span>
                    <span>jia.coM</span>
                    <span>深圳<i class="iconfont icon-xialasanjiao"></i></span>
                </div>
                <div>
                    <span> <img src="../assets/images/home/zizhi-icon.png" alt=""></span>
                    <span><img src="../assets/images/home/tousu_icon_w.png" alt=""></span>
                    <span class="complain">投诉</span>
                    <span class="search"><img src="../assets/images/home/search_icon_w.png" alt=""></span>
                    <span class="aboutme"><img src="../assets/images/home/white_person.png" alt=""></span>
                </div>
            </li>
        </ul>
        <div class="headernav">
            <nav class="mynav">
                <div :class="{active:curindex==0}" @click="curindex=0">
                    <router-link to="/home">首页</router-link>
                </div>
                <div :class="{active:curindex==1}" @click="curindex=1">
                    <router-link to="/renovate">找装修</router-link>
                </div>
                <div :class="{active:curindex==2}" @click="curindex=2">
                    <router-link to="/choosematerials">选建材</router-link>
                </div>
                <div :class="{active:curindex==3}" @click="curindex=3">
                    <router-link to="/community">社区</router-link>
                </div>
            </nav>
            <!-- <div class="navcontent">
                <router-view></router-view>
            </div> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "myheader",
        data: function () {
            return {
                curindex: 0,

            }
        }
    }
</script>
<style lang="less">
 
    @import url("../assets/css/font/iconfont.css");
    @import url("../assets/css/header/header.css"); 
   
</style>