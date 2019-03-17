const witem =document.querySelectorAll('.weui-tab__panel');
const wtab =document.querySelectorAll('.weui-tabbar__item');
for (let i =0; i < witem.length; i++){
    witem[i].addEventListener('click',function(){
        showTab.call(this)
    })
}
function showTab() {
    for (let j = 0, len = wtab.length; j < len; j++) {
      console.log(this)
      if (witem[j] === this) {
        witem[j].classList.add('weui-bar__item_on');
        wtab[j].classList.add('show');
      } else {
        witem[j].classList.remove('weui-bar__item_on');
        wtab[j].classList.remove('show');
      }
    }
  }

