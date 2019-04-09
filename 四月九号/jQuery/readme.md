DOM 树 有html结构，再加上css，DOM树将被生成，静态页面就显示出来了了。document 上 DOMContentLoaded 有了元素的节点，就可以做js交互了
页面上还依赖于其他的一些资源 js，阻塞下载 ， img 是网页性能的杀手
window.onload 此时写js就晚了

如果不等事件的发生， js操作有可能无效

当静态页面加载完毕，即html结构和css被加载完毕 DOMContentLoaded 就完成了  就能获取到元素的节点了  之后就可以写js进行页面交互了

当页面所有的内容都被加载完以后 window.onload 就被执行了