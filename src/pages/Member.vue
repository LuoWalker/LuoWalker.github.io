<template>
    <div class="common-layout w">
        <el-container>
            <el-aside width="200px"><img src="../assets/profile.jpg" alt="" /></el-aside>
            <el-main> <h1>Walker</h1> </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Member'
};
</script>

<style scoped>
.common-layout {
    float: left;
    background-color: #fff;
    padding: 20px;
}
.common-layout img {
    width: 200px;
    border-radius: 100px;
}
</style>
