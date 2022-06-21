/*
 * @Author: leialan123 leialan123@sina.com
 * @Date: 2022-06-21 10:20:29
 * @LastEditors: leialan123 leialan123@sina.com
 * @LastEditTime: 2022-06-21 11:02:52
 * @FilePath: \mxd.vue\mxdweb\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false // 暂时关闭代码格式检测
}