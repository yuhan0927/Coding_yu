# WEUI
  来自于微信的前端开发框架
  - 微信生态  公众号 小程序
  在weui.css的基础上进行开
  - App 生态
  内嵌的html
  - PC 传统网站 Bootstrap

  - 界面的编写过程
    - html 结构，    html结构是独立于样式的
      结构主要是研究DOM的文档流   是从左到右，从上到下写盒子
       - 取类名很重要   要满足BEM规范
          - Block 区块 weui-cell
            weui-button  30-50个复用区块（组件）
          - Element 元素
             weui-cell__hd  区块中的元素用两个下划线
             weui-cell__bd
             weui-cell__ft  
             通用的词汇 hd+bd+ft
    - 再写样式

- 离开文档流
  里面的元素不再受其影响，before absolute脱离了正常的文档流，
  weui-cells border-top 使用盒子模型，元素在页面上的占位，是需要综合考虑 内容w*h padding border margin position

  
- 1px 边框
  css 像素 1px在手机里
  硬件物理像素 retina 2px 3倍retina 3px
  transform scaleY(0.5)压一下
  浏览器不会处理小数点像素 所以要使用 transform scaleY(0.5)来进行边框压缩  在配合 transform origin 基点  基点是不动点
  上边线从下往上压 基点0 0  下边线从上往下压 基点 0 100%

- flex
  - 不受块级的约束，它的内部是一个新的世界  弹性布局是父与子们的一起布局
  - 有好用的对齐方式  align-items:center 纵轴对齐居中   justify-content:center 横轴对齐居中
  - 在一堆子元素中只给一个元素设置flex:1  这个元素成为主元素 其他元素占完该占的盒子模型内容后，余下的空间都交给主元素