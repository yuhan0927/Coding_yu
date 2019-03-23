## stylus
- stylus 是一套语法 支持现代化的css开发  有一个compile过程
    stylus style.styl -o style.css
    -o (output) 
    stylus -w style.styl -o style.css
    -w(watch) 监听style.styl 实时去修改Style.css
不再写css，写的是css的预编译语言stylus
优点 快
1. 跟css的规则不同不用{};: 直接用tab键进行缩进
2. stylus 提供嵌套功能
    可以帮我们补上前面的选择器
    现在我们的css 就模块化了
3. &运算符
    依然使用table1缩进，但是它与上一级同级，它适合于同一个元素多个类名，或者伪类，为状态
4. 变量定义
    将常用的，或者重复使用的在最上面统一定义以后，可以修改一处，所有使用了此变量的地方都会跟着修改成为网站的风格

## css语法
1. overflow:hidden
2. flex布局中 用 aligin-items 可以搞定 vertical-align 有时不好搞的情况
    vertical-align 兄弟之间 img + 兄弟
3. text-tendering: optimizeLegibility; 抗锯齿 高清手机上文字的边缘不出现锯齿
4. flex-shrink:0
    flex-grow
5. 第几个元素的选择
    :first-child  :last-child  :nth-child(2n) :nth-child(2n+1)
6. -apple-system