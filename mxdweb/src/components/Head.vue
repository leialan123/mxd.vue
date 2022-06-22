<template>
    <nav>
        <div class="topLeft">
            <img class="topLogo" src="@/assets/imgs/logo2.png" alt="" srcset="" />
        </div>

        <div class="topMiddle">
            <div v-for="(list, index) in topIncons" :data-title="list.cnName" class="tip" :key="list.name">
                <img class="topIcon" @mouseenter="enter(index, $event)" @mouseleave="leave(index, $event)" :class="list.name" :src="list.src" :alt="list.name" srcset="" />
            </div>
            
        </div>
        <div class="topRight">
            <div class="download">
                <p>点击下载</p>
                <p>DOWNLOAD</p>
            </div>
            <div class="login">登录</div>
            <div class="register">注册</div>
        </div>
    </nav>
</template>

<script>
import { ref } from "vue"

export default {
    name: "Head",
    props: {

    },
    setup(props) {
        let name = ref('张三')
        let topIncons = [
            {
                name: 'home',
                cnName: '首页',
                src: require('@/assets/icons/home.png'),
                activeSrc: require('@/assets/icons/home-active.png')
            },
            {
                name: 'book',
                cnName: '图书馆',
                src: require('@/assets/icons/book.png'),
                activeSrc: require('@/assets/icons/book-active.png')
            },
            {
                name: 'rank',
                cnName: '排行榜',
                src: require('@/assets/icons/rank.png'),
                activeSrc: require('@/assets/icons/rank-active.png')
            },
            {
                name: 'message',
                cnName: '论坛',
                src: require('@/assets/icons/message.png'),
                activeSrc: require('@/assets/icons/message-active.png')
            },
            {
                name: 'game',
                cnName: '博客',
                src: require('@/assets/icons/game.png'),
                activeSrc: require('@/assets/icons/game-active.png')
            },
            {
                name: 'date',
                cnName: '投票',
                 src: require('@/assets/icons/date.png'),
                activeSrc: require('@/assets/icons/date-active.png')
            },
            {
                name: 'price',
                cnName: '赞助',
                src: require('@/assets/icons/price.png'),
                activeSrc: require('@/assets/icons/price-active.png')
            }
        ]
        
        function enter(index, event) {
            event.target.src = topIncons[index].activeSrc
        }


        function leave(index, event) {
            event.target.src = topIncons[index].src
        }

        return {
            name,
            topIncons,
            enter,
            leave
        }
    }
}
</script>

<style scoped>
    nav {
        padding-left: 50px;
        padding-right: 30px;
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, .9) */

        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(0,0,0,.9);
        z-index: 1000;
    }
    .topLeft {
        
    }

     .topLogo {
        width: 150px;
        height: 54px;        
    }

    .topMiddle {
        display: flex;
        align-items: center;
    }

    .topIcon {
        position: relative;
        height: 35px;
        margin: 0 10px;
        cursor: pointer;
    }

    .topIcon:hover::after {
        position:absolute;
        top:20px;
        left:0;
        content:attr(data-title);
        /* //在这里设内置好title出现的位容置就好了 */
        color:#000000;
        border:1px solid #242424;
        border-radius:5px ;
        background-color:#E5E5E5;
    }

    .tip {
        position: relative;
    }

    .tip:hover::after {
        position:absolute;
        top:30px;
        left:-4px;
        content:attr(data-title);
        /* 在这里设内置好title出现的位容置就好了 */
        color:#000000;
        font-size: 12px;
        border:1px solid #242424;
        border-radius:5px;
        width: 60px;
        background-color:#E5E5E5;
    }

    .topRight {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .download {
        padding: 5px 10px;
        background-image: linear-gradient(#f40,#ff1d02);
        cursor: pointer;
        font-size: 12px;
        margin: 8px 16px;
        line-height: normal;
        text-align: center;
        color: #fff;
        white-space: nowrap;
        border-radius: 4px;
        border: 2px solid #e64120;
    }

    .login,
    .register {
        width: 50px;
        margin-right: 10px;
        padding: 0 10px;
        line-height: 24px;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        border-width: 1px;
        border-style: solid;
        border-color: #0aa0d2;
        border-radius: 4px;
        cursor: pointer;
    }

     .login {
        color: #0aa0d2;
        border-color: #0aa0d2;
    }

    .login:hover {
        color: #fff;
        background-color: #0aa0d2;
    }

    .register {
        color: #91b610;
        border-color: #91b610;
    }

    .register:hover {
        color: #fff;
        background-color: #91b610;
    }

</style>