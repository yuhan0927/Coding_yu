- 相对单位，为了自适应（适应不同的移动设备）
    750px
  iphpne XR 小手机
  小米，华为
  iphone 大手机 Max
  小米，华为
  - vw，vh 解决的是按比例分配宽/高  20%对应20vh    100vh适用于最外层盒子（主体容器）  基于浏览器窗口大小

  - em  rem   适用于细致的每个盒子或盒子模型的大小等比例定义。
    em 是相对于自身的字体大小来比例的
    10em=10*14px=140px
    rem 相对于html根元素的fontsize

- ::before,::after 伪元素
  - 没有标签，但却可以像正真的元素一样在页面上占位
  - dom 文档流里面不需要写这个元素在文档流中不会产生副作用，不会影响内容的显示
  - 使用CSS进行声明，必须要用content属性

- html 默认的字体大小是16px
   -如果本身没有设置font-size，会使用父级，或body font-size