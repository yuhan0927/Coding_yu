const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';

//  去除内容中的标签 只显示loremipsum
const stripHTMLTags = str => str.replace(/<[^>]*>/g,''); 
// [^>]*  []表示范围匹配 eg:[0-9]  在[]里面的^是取取非