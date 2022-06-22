<!--
 * @Author: leialan123 leialan123@sina.com
 * @Date: 2022-06-21 10:20:29
 * @LastEditors: leialan123 leialan123@sina.com
 * @LastEditTime: 2022-06-22 14:27:07
 * @FilePath: \mxd.vue\mxdweb\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Head />
  <Main />
  <Footer />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Head from "@/components/Head.vue"
import Main from "@/views/Home.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'App',
  setup(props) {
    // 数据
    let name = "张三"

    // 方法
    function sayHello() {
     alert(`我叫${name}`)
    }

    return {
      name,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h("h1", "尚硅谷")
  },

  components: {
    Head,
    Main,
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

*, ::after, ::before {
    box-sizing: border-box;
}

a {
    text-decoration: none!important;
    color: #2b2725;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  /* margin-top: 60px; */
}
</style>
