stylus
1. @import 文件引入，一个文件做一件事，有利于代码的维护及管理 多人协作
    /base/reset 基础的reset任务
    base是核心  widget
    @import 让我们可以做文件的分离和管理，多人协作，目录让我们看到了思想及野心。
    variable(变量) 当是个大项目时，有大量的变量要维护，variable成为了目录

    weui.styl 是一个入口文件 @import 负责串起来各个部分
    base  /  widget  
    - reset.styl
    - variable
      - global.styl
    - weui-botton
      - weui-button.styl