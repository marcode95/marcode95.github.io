(()=>{"use strict";(()=>{const t=(window.innerWidth+window.innerHeight)/8,n=document.querySelector("canvas"),e=n.getContext("2d");let o,a,i,r,h=1,c=[],d={x:0,y:0,tx:0,ty:0,z:5e-4},l=!1;function y(t){t.x=Math.random()*o,t.y=Math.random()*a}function u(){h=window.devicePixelRatio||1,o=window.innerWidth*h,a=window.innerHeight*h,n.width=o,n.height=a,c.forEach(y)}function m(t,n){if("number"==typeof i&&"number"==typeof r){let e=t-i,o=n-r;d.tx=d.tx+e/8*h*(l?1:-1),d.ty=d.ty+o/8*h*(l?1:-1)}i=t,r=n}function x(){i=null,r=null}!function(){for(let n=0;n<t;n++)c.push({x:0,y:0,z:.2+.8*Math.random()})}(),u(),function t(){e.clearRect(0,0,o,a),d.tx*=.96,d.ty*=.96,d.x+=.8*(d.tx-d.x),d.y+=.8*(d.ty-d.y),c.forEach((t=>{t.x+=d.x*t.z,t.y+=d.y*t.z,t.x+=(t.x-o/2)*d.z*t.z,t.y+=(t.y-a/2)*d.z*t.z,t.z+=d.z,(t.x<-50||t.x>o+50||t.y<-50||t.y>a+50)&&function(t){let n="z",e=Math.abs(d.x),i=Math.abs(d.y);if(e>1||i>1){let t;t=e>i?Math.random()<e/(e+i)?"h":"v":Math.random()<i/(e+i)?"v":"h",n="h"===t?d.x>0?"l":"r":d.y>0?"t":"b"}t.z=.2+.8*Math.random(),"z"===n?(t.z=.1,t.x=Math.random()*o,t.y=Math.random()*a):"l"===n?(t.x=-50,t.y=a*Math.random()):"r"===n?(t.x=o+50,t.y=a*Math.random()):"t"===n?(t.x=o*Math.random(),t.y=-50):"b"===n&&(t.x=o*Math.random(),t.y=a+50)}(t)})),c.forEach((t=>{e.beginPath(),e.lineCap="round",e.lineWidth=3*t.z*h,e.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",e.beginPath(),e.moveTo(t.x,t.y);var n=2*d.x,o=2*d.y;Math.abs(n)<.1&&(n=.5),Math.abs(o)<.1&&(o=.5),e.lineTo(t.x+n,t.y+o),e.stroke()})),requestAnimationFrame(t)}(),window.onresize=u,n.onmousemove=function(t){l=!1,m(t.clientX,t.clientY)},n.ontouchmove=function(t){l=!0,m(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault()},n.ontouchend=x,document.onmouseleave=x})();const t=document.getElementById("showcase-button");document.getElementById("showcase").scrollHeight,t.addEventListener("click",(()=>{window.scrollBy(0,window.scrollTo(0,window.innerHeight))}))})();