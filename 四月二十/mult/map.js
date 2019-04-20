const googleMap = {  //对象
    show() {
        console.log('开始渲染GOOGLE地图');
    }
}
const baiduMap = {
    show() {
        console.log('开始渲染baidu地图')
    }
}
const gaodeMap = {
    show() {
        console.log('开始渲染gaode地图');
    }
}
const sosoMap = {

}
const renderMap = (mapname) => {
    if(mapname.show && mapname.show instanceof Function){
        mapname.show();
    }else{
        console.log('没有show方法')
    }
}

renderMap(googleMap);
renderMap(baiduMap);
renderMap(gaodeMap);
renderMap(sosoMap);