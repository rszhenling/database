<template>
    <div class="product-list">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column :show-overflow-tooltip="true" prop="id" label="商品ID"></el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="size" label="商品尺寸"></el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="color" label="商品颜色"></el-table-column>
            </el-table-column>
        </el-table>
        <ProdctPagination @onsend="getPagination"/>   
    </div>
</template>
<script>

import ProdctPagination from "../ProductSelect/ProductPagination"

export default {
    name: "ProductList",
    data() {
        return {
            tableData: [{
            id: '1',
            size: '40',
            color: '白色'
          },
          {
            id: '2',
            size: '偏大',
            color: '红色'
          },
          {
            id: '3',
            size: '31',
            color: '蓝色'
          }]
        };
    },
    components:{
        ProdctPagination
    },
    mounted() {
        this.$api
            .getSelectTbItemAllByPage({
                page: 1
            })
            .then(res => {
                if (res.data.status === 200) {
                    this.tableData = res.data.data.result;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>
<style scoped>
.product-list {
    width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
}
.upload-img {
    width: 200px;
    float: left;
    margin-left: 10px;
}
</style>