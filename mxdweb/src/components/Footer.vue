<template>
    <footer class="footer">
        <div class="versionInfos">
            <ul>
                <li>服务器版本：v0.05</li>
                <li>经验倍率：1x</li>
                <li>物品爆率：1x</li>
                <li>以开放频道数：4</li>
            </ul>
        </div>
        <div class="serverElapsedTime">服务器已运行时间 247 天 5时 57分 32秒 </div>
        <div class="copyright">🌈© 2022 MapleRecall</div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer {
        position: relative;
        z-index: 2;
        background: url(@/assets/imgs/bg_footer.png);
        border-top: 1px solid #8b2815;
        text-align: center;
        padding: 40px 20px;
        color: #fff;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        font-size: 14px;
    }
    li:first-child::before {
        content: "";
    }

    li:before {
        padding: 0 4px;
        content: "|";
        color: #fff;
    }

    .serverElapsedTime {
        margin: 10px 0;
    }
</style>