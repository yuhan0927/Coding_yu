- vue-cli 3.0+  原生命令行支持 typescript
    react 最早拥抱typescript，vue现在加入
- 项目多加20% typescript代码 本来不用写的，写了后少了60%的潜在bug，因为js是弱类型的脚本语言，并且它提供良好的代码提示，让团队合作体验更好
- typescript用在哪？重要的对象要声明类型比如组件，state，prop，vuex/redux，函数(调用函数怎么传参，返回值需要约定好)
    vuex里面最大的对象是 state
    typescript里面的类型约束一般用接口(interface)进行