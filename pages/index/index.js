//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad() {
    var that = this
    var ctx = wx.createCanvasContext('canvas'),
      w=320,
      h=504;
    wx.getSystemInfo({
      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
      success(res){
        that.width = res.windowWidth
        that.height = res.windowHeight
      }
    })

    // 初始化
    var clearColor = 'rgba(0, 0, 0, .1)', // 用于绘制渐变阴影
    wordColor = '#33ff33', // 文字颜色
    words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOPASDFGHJKLZXCVBNM<>?:{}|",
    wordsArr = words.split(''),
    font_size = 16,
    clumns = w / font_size, // 文字降落的列数
    drops = [];

    for (var i=0; i<clumns; i++) {
      drops[i] = 1;
    }

    // 动画循环
    (function drawFrame(){
      setInterval(()=>{
        console.log('hhh')
        ctx.setFillStyle = clearColor;
        ctx.fillRect(0,0,w,h);
        ctx.save();
        ctx.fillStyle = wordColor;
        ctx.font = font_size + "px arial";
        // 核心
        for (var i = 0; i < drops.length; i++) {
          var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
          ctx.fillText(text, i * font_size, drops[i] * font_size);
          if (drops[i] * font_size > h && Math.random() > 0.98) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        ctx.restore();
        ctx.draw();
      }, 20)
    }())
  }
})
