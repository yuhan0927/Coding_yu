- 相应框架或技术栈的快速启动
    gitup 项目 Starter
    .git 删除

- 组件，路由接管一切
    最好用目录
    <router-view/>
    install?

- 全家桶
    vue-router 路由
    vuex 数据流管理
    axios 负责API

- alias
    短路径，常用的

- 目录架构
    - components 组件
    - pages 页面级别组件
    - commons header footer dialog 等跨页面的通用组件
    - element-ui 框架级别组件，全局可用

- 在components pages 目录下加一个index.js 模块化输出所有的文件，可读性很好

- transition name
    v-enter -> v-enter-active
    v-leave -> v-leave-active
