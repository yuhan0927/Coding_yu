# 清除浮动的集中方法
1. 在父元素底部加一行代码 <div style="clear:both"></div>
2. 利用BFC简称为“块级格式化上下文”来给父元素增加css 
     在父元素的css上 设置
     {
         overflow:auto;
         <!-- overflow:hidden -->
         <!-- overflow:scroll -->
    }
3. 使用css中的after伪元素，给父元素div添加一个clearfix的类名
    .clearfix::after{
        content:'';
        display:block;
        clear:both;
    }
4. 父容器也浮动 但是不建议使用   如果容器下面还有别的内容会导致内容塌陷
5. 一个更优雅的改进 -- 尼古拉斯大师 方法
    给父元素div添加一个clearfix的类名
    .clearfix::after{
        content:'';
        dispaly:table;
        clear：both;
    }
     把dispaly设置为table，可以创建一个表格单元，这个匿名的表格单元属性会默认出发BFC