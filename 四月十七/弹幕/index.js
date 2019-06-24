let data = [
    {value: '周杰伦的听妈妈的话，好好听！',time:5,color:'red',speed:1,fontSize:22},
    {value: '妈妈的话，好好听！',time:10,color:'red',speed:1,fontSize:18},
    {value: '周杰伦的听妈妈的话，好好听！',time:11,color:'blue',speed:1,fontSize:12},
    {value: '听妈妈的话，好好学习！',time:13,color:'#00a1f5',speed:1,fontSize:22},
    {value: '周杰伦的听妈妈的话，好好听！',time:5},
    {value: '听妈妈的话，不要早恋了！',time:20},
    {value: '周杰伦好帅！',time:15}
  ]
  
// 获取所有需要的dom结构
let doc = document
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建一个CanvasBarrage的类
class CanvasBarrage {
    constructor(canvas,video,opt = {}) {
        //如果canvas 和 video 都没有传的话
        if (!canvas || !video){
            return;
        }

        //增加属性，挂载到this上
        this.video = video;
        this.canvas = canvas;

        this.canvas.width = video.width;
        this.canvas.height = video.height;
        //获取画布
        this.ctx = canvas.getContext('2d');

        // 设置默认参数，如果没有传就用默认值
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data:[]
        };

        // 合并对象全部挂载到this实例上
        Object.assign(this,defOpts,opts);
        //添加属性，用来判断播放状态，默认true是暂停
        this.isPaused = true;
        // 获取所有的弹幕消息
       this.barrages = this.data.map(item => new Barrage());
        //渲染
       this.render();
    }
    // function render() {}
    render() {
        //渲染的第一步是清除原来的画布
        this.clear();
        // 渲染弹幕
        this.randerBarrage();
    }
}