(()=>{"use strict";(()=>{const t=(window.innerWidth+window.innerHeight)/8,e=document.querySelector("canvas"),n=e.getContext("2d");let o,a,i,r,c=1,h=[],l={x:0,y:0,tx:0,ty:0,z:5e-4},d=!1;function s(t){t.x=Math.random()*o,t.y=Math.random()*a}function u(){c=window.devicePixelRatio||1,o=window.innerWidth*c,a=window.innerHeight*c,e.width=o,e.height=a,h.forEach(s)}function y(t,e){if("number"==typeof i&&"number"==typeof r){let n=t-i,o=e-r;l.tx=l.tx+n/8*c*(d?1:-1),l.ty=l.ty+o/8*c*(d?1:-1)}i=t,r=e}function m(){i=null,r=null}!function(){for(let e=0;e<t;e++)h.push({x:0,y:0,z:.2+.8*Math.random()})}(),u(),function t(){n.clearRect(0,0,o,a),l.tx*=.96,l.ty*=.96,l.x+=.8*(l.tx-l.x),l.y+=.8*(l.ty-l.y),h.forEach((t=>{t.x+=l.x*t.z,t.y+=l.y*t.z,t.x+=(t.x-o/2)*l.z*t.z,t.y+=(t.y-a/2)*l.z*t.z,t.z+=l.z,(t.x<-50||t.x>o+50||t.y<-50||t.y>a+50)&&function(t){let e="z",n=Math.abs(l.x),i=Math.abs(l.y);if(n>1||i>1){let t;t=n>i?Math.random()<n/(n+i)?"h":"v":Math.random()<i/(n+i)?"v":"h",e="h"===t?l.x>0?"l":"r":l.y>0?"t":"b"}t.z=.2+.8*Math.random(),"z"===e?(t.z=.1,t.x=Math.random()*o,t.y=Math.random()*a):"l"===e?(t.x=-50,t.y=a*Math.random()):"r"===e?(t.x=o+50,t.y=a*Math.random()):"t"===e?(t.x=o*Math.random(),t.y=-50):"b"===e&&(t.x=o*Math.random(),t.y=a+50)}(t)})),h.forEach((t=>{n.beginPath(),n.lineCap="round",n.lineWidth=3*t.z*c,n.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",n.beginPath(),n.moveTo(t.x,t.y);var e=2*l.x,o=2*l.y;Math.abs(e)<.1&&(e=.5),Math.abs(o)<.1&&(o=.5),n.lineTo(t.x+e,t.y+o),n.stroke()})),requestAnimationFrame(t)}(),window.onresize=u,e.onmousemove=function(t){d=!1,y(t.clientX,t.clientY)},e.ontouchmove=function(t){d=!0,y(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault()},e.ontouchend=m,document.onmouseleave=m})();const t=window.matchMedia("(max-width: 540px)"),e=t=>{if(t.matches){const t=document.querySelectorAll("div.self-stack-check, span.self-stack-name");for(let e=0;e<t.length;e++)t[e].setAttribute("data-aos","")}else{const t=document.querySelectorAll("span.self-stack-name"),e=document.querySelectorAll("div.self-stack-check");for(let e=0;e<t.length;e++)t[e].setAttribute("data-aos","fade");for(let t=0;t<e.length;t++)e[t].setAttribute("data-aos","fade-left")}};t.addListener(e),e(t)})();