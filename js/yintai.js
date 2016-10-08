$(function(){
  // 动画的黑线
        function border(obj,time){
         obj.style.position="relative";
         var div1=document.createElement("div");
         var div2=document.createElement("div");
         var div3=document.createElement("div");
         var div4=document.createElement("div");
          div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px"
          div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px"
          div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px"
          div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px"
          obj.appendChild(div1)
          obj.appendChild(div2)
          obj.appendChild(div3)
          obj.appendChild(div4)
          var width=parseInt(getStyle(obj,"width"))+2
          var height=parseInt(getStyle(obj,"height"))+2
          obj.onmouseover=function(){
            animate(div1,{width:width},time)
            animate(div2,{height:height},time)
            animate(div3,{width:width},time)
            animate(div4,{height:height},time)
          }
          obj.onmouseout=function(){
            animate(div1,{width,width:0},time)
            animate(div2,{height,height:0},time)
            animate(div3,{width,width:0},time)
            animate(div4,{height,height:0},time)
          }
        }
        var fashionrighttu1=$(".fashionrighttu1");
        var fashionrighttu2=$(".fashionrighttu2");
        var fashionrighttu3=$(".fashionrighttu3");
        var fashionrighttu4=$(".fashionrighttu4");
       

        for (var i = 0; i < fashionrighttu1.length; i++) {
          border(fashionrighttu1[i],500)
        };
        for (var i = 0; i < fashionrighttu2.length; i++) {
          border(fashionrighttu2[i],500)
        };
        for (var i = 0; i < fashionrighttu3.length; i++) {
          border(fashionrighttu3[i],500)
        };
        for (var i = 0; i < fashionrighttu4.length; i++) {
          border(fashionrighttu4[i],500)
        };
        
        var boxbigger=$(".recommended-left2-1-1");
      var box1=$(".counters-small11");
      var box2=$(".brand1-right-1");
      
      for (var i = 0; i < boxbigger.length; i++) {
        border(boxbigger[i],300);
        
        
      };
      for (var i = 0; i < box1.length; i++) {
        border(box1[i],300);    
      };
      for (var i = 0; i < box2.length; i++) {
        border(box2[i],300);
      };


//选项卡

 var btns1=document.getElementsByClassName("recommended-border");
     var text=document.getElementsByClassName("recommended-font");
     var biaoti1=document.getElementsByClassName("recommended-jiantou");
     var recommend=document.getElementsByClassName("recommended-left2-1");
   for (var i = 0; i < btns1.length; i++) {
        btns1[i].index=i;
        btns1[i].onmouseover=function(){
          for (var i = 0; i < btns1.length; i++) {
            recommend[i].style.display="none";
            btns1[i].style.borderColor="#333";
            biaoti1[i].style.display="none";
            text[i].style.fontWeight="400";
            text[i].style.color="rgb(102,102,102)";
            
          };
          recommend[this.index].style.display="block";
          this.style.borderColor="rgb(229,0,79)"
          biaoti1[this.index].style.display="block"
          text[this.index].style.fontWeight="700";
          text[this.index].style.color="#000";
          
        }
      }



      var counters=document.getElementsByClassName("counters-bottom-right-bottom-box1");
  var btns=document.getElementsByClassName("counters-bottom-right-top1");
  var biaoti=document.getElementsByClassName("counters-right-biaoti")
  var top1=document.getElementsByClassName("counters-right-top1"); 
  for (var i = 0; i < btns.length; i++) {
    btns[i].index=i;
    btns[i].onmouseover=function(){
      for (var i = 0; i < btns.length; i++) {
        counters[i].style.display="none";
                btns[i].style.borderColor="rgb(51,51,51)";
                biaoti[i].style.color="#666"
                biaoti[i].style.fontWeight="400"
                top1[i].style.display="none";
                   
      };
      counters[this.index].style.display="block";
      this.style.borderColor="rgb(231,0,80)";
      biaoti[this.index].style.color="rgb(65,65,65)"
      biaoti[this.index].style.fontWeight="700"
      top1[this.index].style.display="block"
    }
  };
//下拉菜单
    var lists=$(".myqinyin")[0];
    var navnavs=$(".navnav2")[0];
        hover(lists,function(){
           navnavs.style.display="block"
        },function(){
           navnavs.style.display="none"
        })
    var bannerleftone=$(".bannerleftone");
    var caidandan=$(".caidandan");
    for (var i = 0; i < bannerleftone.length; i++) {
      lb(bannerleftone[i],caidandan[i])
    };
    function lb(bannerleftone,caidandan){
       hover(bannerleftone,function(){
           caidandan.style.display="block"
        },function(){
           caidandan.style.display="none"
       })
       hover(caidandan,function(){
           caidandan.style.display="block"
        },function(){
           caidandan.style.display="none"
       })
    }
    var weixinbox=$(".weixinbox")[0];
    var weixintop=$(".weixintop")[0];
    hover(weixintop,function(){
      weixinbox.style.display="block";
      weixinbox.style.background="white";
    },function(){
       weixinbox.style.display="none";
       weixinbox.style.background="";
    })
    hover(weixinbox,function(){
      weixinbox.style.display="block";
      weixinbox.style.background="white";
    },function(){
       weixinbox.style.display="none";
       weixinbox.style.background="";
    })

    var weixinbox1=$(".weixinbox1")[0];
    var weixintop1=$(".weixintop1")[0];
    hover(weixintop1,function(){
      weixinbox1.style.display="block";
      weixinbox1.style.background="white";
    },function(){
       weixinbox1.style.display="none";
       weixinbox1.style.background="";
    })
    hover(weixinbox1,function(){
      weixinbox1.style.display="block";
      weixinbox1.style.background="white";
    },function(){
       weixinbox1.style.display="none";
       weixinbox1.style.background="";
    })




var valuezi=$(".valuezi")
var phoneleft=$(".phoneleft")
var phonelefttwo=$(".phonelefttwo")
for (var i = 0; i < valuezi.length; i++) {
  valuezi[i].index=i;
  valuezi[i].onmouseover=function(){
      for (var i = 0; i < valuezi.length; i++) {
      valuezi[i].style.fontWeight=""
      valuezi[i].style.backgroundColor="#000"
      phonelefttwo[i].style.zIndex="0"
     }
    valuezi[this.index].style.fontWeight="bold"
    valuezi[this.index].style.backgroundColor="#E5004F"
    phonelefttwo[this.index].style.zIndex="1"
  }
}



//下边的小轮播
  var box=getClass("fashiondatu")
  var leftbtn=getClass("leftbtn")
  var rightbtn=getClass("rightbtn")
  var circles=getClass("bigbtns")
  var circles1=getClass("bigbtns1")
  var inner=getClass("btnbtn")
  var boxs=getClass("bigphoto")
  var flog=true;
  
   for (var i = 0; i < box.length; i++) {
     lunbotu(box[i],leftbtn[i],rightbtn[i],circles[i],circles1[i],inner[i],boxs[i])
   };
  function lunbotu(box,leftbtn,rightbtn,circles,circles1,inner,boxs){
  box.onmouseover=function(){
    animate(leftbtn,{left:0},200)
    animate(rightbtn,{right:0},200)
  }
  box.onmouseout=function(){
    animate(leftbtn,{left:-30},200)
     animate(rightbtn,{right:-30},200)
  }//鼠标移入移除箭头让箭头颜色改变
  leftbtn.onmouseover=function(){
    this.style.backgroundPosition="left bottom"
  }
 leftbtn.onmouseout=function(){
     this.style.backgroundPosition="left top"
  }
rightbtn.onmouseover=function(){
    if(flog){
      flog=true
   this.style.backgroundPosition="right bottom"
     }
  }
 rightbtn.onmouseout=function(){
     this.style.backgroundPosition="right top"
  }
// 箭头和圆圈的点击效果
rightbtn.onclick=moveright;
leftbtn.onclick=moveleft;
circles.onclick=moveleft;
circles1.onclick=moveright;
function moveright(){
  flog=false
  animate(boxs,{marginLeft:-390})
  circles.style.background="#555"
  circles1.style.background="#E5004F"
}
function moveleft(){
  flog=true
  animate(boxs,{marginLeft:0})
  circles1.style.background="#555";
  circles.style.background="#E5004F"
}
}


//轮播图
var smallbtns=document.getElementsByClassName('smallbtn');
var banner_box=document.getElementsByClassName("item");
var bannerboxbox=$(".bannerbox")[0]
  for (var i = 0; i < smallbtns.length; i++) {
    smallbtns[i].index=i;
    smallbtns[i].onmouseover=function(){
      for (var i = 0; i < smallbtns.length; i++) {
        num=this.index
        banner_box[i].style.display="none";
        smallbtns[i].style.backgroundColor=""
      };
        banner_box[this.index].style.display="block"
        smallbtns[this.index].style.backgroundColor="#e5004f"
    }
  };
  var lunbo1=setInterval(move,3000)
  var num=0;
  function move(){
    num++;
    if(num==4){
      num=0
    }
    for (var i = 0; i < banner_box.length; i++) {
      banner_box[i].style.display="none"
      smallbtns[i].style.backgroundColor=""
    };
      banner_box[num].style.display="block"
      smallbtns[num].style.backgroundColor="#e5004f"
  }
    bannerboxbox.onmouseover=function(){
      clearInterval(lunbo1)
    }
    bannerboxbox.onmouseout=function(){
      lunbo1=setInterval(move,3000)
    }




  var items=document.getElementsByClassName("cenavone");
  var masks=document.getElementsByClassName("mask");
  for (var i = 0; i < items.length; i++) {
    items[i].index=i;
    items[i].onmouseover=function(){
      masks[this.index].style.opacity="1";
     };
     items[i].onmouseout=function(){
      masks[this.index].style.opacity="0";  
  };
}



// 楼层跳转
  var rightbn=$(".right-box")[0];
  var as=getChild(rightbn)
      document.documentElement.scrollTop=1;
      if (document.documentElement.scrollTop==1) {
        var scrollobj=document.documentElement;
      }else{
        var scrollobj=document.body;
      }
      addEvent(window,"scroll",function(){
        var st=scrollobj.scrollTop;
        if (st>800) {
          rightbn.style.display="block";
        }else{
          rightbn.style.display="none";
        }
      })
      var pingpai=$(".yintaimiddless");
      var rightbtns=$(".right-box0");
      var head=$(".topmid")[0];
      var returnt=$(".right-box1")
      for (var i = 0; i < rightbtns.length; i++) {
        rightbtns[i].index=i;
        rightbtns[i].onclick=function(){
          var ot=pingpai[this.index].offsetTop;
          animate(scrollobj,{scrollTop:ot})
        }
      };
   
   addEvent(window,"scroll",function(){
      var st=scrollobj.scrollTop;
      for (var i = 0; i < pingpai.length; i++) {
          if(st+400>pingpai[i].offsetTop){
          for (var j = 0; j < pingpai.length; j++) {
            as[j].style.background=""
            as[j].style.fontSize="";
            as[j].style.color=""
          };
          as[i].style.background="#e5004f"
          as[i].style.fontSize="14px";
            as[i].style.color="white"
            };
        }
   })

//返回顶部
 var dingbu=$(".dingbu")[0];
        var obj=document.documentElement;
        dingbu.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
          animate(obj,{scrollTop:0})
        }




//无缝轮播图
 var fashionLeft=$(".fashion-left-box");
 var lefttwo=$(".rightbtns");
 var righttwo=$(".leftbtns")
  for (var i = 0; i < fashionLeft.length; i++) {
      lunbobo(fashionLeft[i],lefttwo[i],righttwo[i])
   };
        
  function lunbobo(fashionLeft,lefttwo,righttwo){
  righttwo.onclick=function(){
    animate(fashionLeft,{left:-223},500,
       function(){
          var first=getFirst(this);
          this.appendChild(first);
          this.style.left=0;

    })
  }
    lefttwo.onclick=function(){
    var last=getLast(fashionLeft);
    var first=getFirst(fashionLeft);
    fashionLeft.insertBefore(last,first);
    fashionLeft.style.left="-223px";
    animate(fashionLeft,{left:0},500)
  }
}
  

 //按需加载
 
 var fashionBox=$(".anxujiazai");
 var tops=[];
 for (var i = 0; i < fashionBox.length; i++) {
   tops.push(fashionBox[i].offsetTop);
 };
 var doc=document.body;
 doc.scrollTop=1;
 if(doc.scrollTop!=1){
  doc=document.documentElement;
}
 var chs=document.documentElement.clientHeight;
 // doc.scrollTop=41;
 addEvent(window,"scroll",function(){
  var scroll=doc.scrollTop;
  for (var i = 0; i < fashionBox.length; i++) {
    if (scroll+chs>tops[i]&&fashionBox[i].getAttribute("flag")!="true") {  
     var imgs=$('img',fashionBox[i]);  
     for (var j = 0; j < imgs.length; j++) {
     imgs[j].src=imgs[j].getAttribute("asrc")
  };
     fashionBox[i].setAttribute("flag",true)
  };       
  };
 })
   
})




        