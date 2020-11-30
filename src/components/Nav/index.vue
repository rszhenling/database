<template>
    <div class="topNav">
        <div id="topbanner" ref="topNav">
            <div class="con">
                <div class="Log">
                    <span>商城后台系统</span>
                </div>
                <div>
                    <router-link exact to="/" class="product">
                        <i class="el-icon-search"></i>
                       商品查询
                    </router-link>
                </div>
                <div>
                    <router-link to="/params" class="params">
                        <i class="el-icon-copy-document"></i>
                        商品参数
                    </router-link>
                </div>
                <div>
                    <router-link to="/content" class="contentcategory">
                        <i class="el-icon-postcard"></i>
                        商品分类管理
                    </router-link>
                </div>
                <div>
                    <span class="username">{{ userinfo.username }}</span>
                    <el-button @click="logout" class="loginout">退出</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapState,mapActions } from "vuex"
import Storage from "../../utils/Storage"

export default {
    name: "Nav",
    computed: {
        ...mapState(["userinfo"])
    },
    methods:{
        ...mapActions(["seUserInfoActions"]),
        logout(){
            Storage.clear();
            this.seUserInfoActions({});
            this.$router.push("/login");
        }
    }
};
</script>
<style scoped>
#topbanner {
    width: 100%;
    height: 80px;
    background: DimGray;
    margin: 0 auto;
}

.con {
    width: 1120px;
    height: 80px;
    margin: 0 auto;
}
html {
    padding: 0;
    margin: 0;
}

.topNav a {
    text-decoration: none;
    color: White;
}

.con div {
    float: left;
    width: 220px;
    height: 80px;
    line-height: 80px;
}

.backcolor,
.classname {
    color: White;
    cursor: pointer;
}

#topbanner img {
    width: 100%;
    height: 100%;
}

.Log span {
    font-weight: 800;
    font-style: normal;
    color: rgb(42, 50, 61);
    font-size: 25px;
    display: block;
}
.topNav .active {
    color: DarkOrange;
}

.nick {
    margin-right: 10px;
    color: #fff;
}
.username{
    font-size: 20px;
    color:#fff;
    margin-right: 5px;
    color: rgb(42, 50, 61);
}
.loginout{
    color:Red;
}
</style>