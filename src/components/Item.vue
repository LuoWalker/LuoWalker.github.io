<template>
    <div class="common-layout">
        <el-container style="box-shadow: var(--el-box-shadow-lighter)">
            <el-aside width="200px"><img class="cover" src="../assets/vue.svg" alt="" /></el-aside>
            <el-container class="content">
                <el-header height="20px">
                    <h2>这是一个标题</h2>
                </el-header>
                <el-main height="120px">
                    这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
                </el-main>
                <el-footer class="footer" height="20px">
                    {{ time }}
                    <el-row class="mb-4 tag">
                        <el-button type="primary" round size="small">tag</el-button>
                    </el-row>
                </el-footer>
            </el-container>
        </el-container>
        <el-container style="box-shadow: var(--el-box-shadow-lighter)">
            <el-aside width="200px"><img class="cover" src="../assets/vue.svg" alt="" /></el-aside>
            <el-container class="content">
                <el-header height="40px">
                    <h2>这是一个标题</h2>
                </el-header>
                <el-main height="120px">
                    这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
                </el-main>
                <el-footer class="footer" height="20px">
                    {{ time }}
                    <el-row class="mb-4 tag">
                        <el-button type="primary" round size="small">tag</el-button>
                    </el-row>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Item',
    setup() {
        function dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            var month =
                date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        }
        var time = dateFormat(new Date());
        const tag = '测试';
        return {
            time,
            tag
        };
    }
};
</script>

<style scoped>
.common-layout {
    float: left;
    width: 890px;
    background-color: #fff;
}
.cover {
    width: 80%;
    margin: 10%;
}
.content {
    padding: 10px;
}
.tag {
    float: right;
}
</style>
