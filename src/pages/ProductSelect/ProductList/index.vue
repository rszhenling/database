<template>
    <div class="product-list">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column :show-overflow-tooltip="true" prop="id" label="商品ID"></el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="title" label="商品标题"></el-table-column>
            <el-table-column :show-overflow-tooltip="true" prop="price" label="商品价格"></el-table-column>
            <el-table-column :show-overflow-tooltip="true" label="操作">
            <template slot-scope="scope">
                    <el-button
                        size="mini"
                        icon="el-icon-edit"
                        @click="handleEdit(scope.$index, scope.row)"
                        circle
                    ></el-button>
                    <el-button
                        size="mini"
                        icon="el-icon-delete"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        circle
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
        <ProdctPagination @onsend="getPagination"/>   
    </div>
</template>
<script>

import ProdctPagination from "../ProductPagination"

export default {
    name: "ProductList",
    data() {
        return {
            tableData: [{
            id: '1',
            title: '鞋子',
            price: '20'
          },
          {
            id: '2',
            title: '衣服',
            price: '50'
          },
          {
            id: '3',
            title: '裤子',
            price: '70'
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
    },
       methods: {
        handleEdit(index, row) {},
        handleDelete(index, row) {},
        getPagination(tableData){
            this.tableData = tableData;
        }
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