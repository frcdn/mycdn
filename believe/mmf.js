var system ={ 
win : false, 
mac : false, 
xll : false
};
var p = navigator.platform; 
system.win = p.indexOf("Win") == 0; 
system.mac = p.indexOf("Mac") == 0; 
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){   
}else{
var p_w="100%";var p_h="100%";
var m=3;
var n=Math.floor(Math.random()*m+1)
switch(n){
  case 1:var p_s="//cdn.jsdelivr.net/gh/frcdn/myimg/202202/739e97b441b4b569113f.gif";break;
  case 2:var p_s="//cdn.jsdelivr.net/gh/frcdn/myimg/202202/649c6e1c49be37a7bdf4.gif";break;
  case 3:var p_s="//cdn.jsdelivr.net/gh/frcdn/myimg/202202/1626b8b93743788390df.gif";break;
}
var p_l="https://eheqqupw.cn/index/jump/index?agent_code=2894";document.writeln('<style type="text/css">');document.writeln(".f_f{width:100%;position:fixed;bottom:-5px;z-index:9999;}");document.writeln(".f_pic{width:"+p_w+";height:"+p_h+";margin:0 auto;position:relative;overflow:hidden}");document.writeln(".f_pic img{width:"+p_w+"; height:"+p_h+";}");document.writeln(".f_pic .f_close{position:absolute;width:18px;height:18px;line-height:18px;text-align:center;border-radius:20px;font-size:12px;background:#000;color:#fff;top:2px;right:2px;}");document.writeln("</style>");document.writeln('<div class="f_f" id="f_f">');document.writeln('<div class="f_pic">');document.writeln('<a href="'+p_l+'" target="_blank"><img src="'+p_s+'" /></a>');document.writeln('<span class="f_close" id="f_close">X</span>');document.writeln("</div>");document.writeln("</div>");var close_btn=document.getElementById("f_close");var ffoot=document.getElementById("f_f");close_btn.onclick=function(){if(ffoot){ffoot.style.display="none"}};
}
