(()=>{"use strict";(()=>{const t=(window.innerWidth+window.innerHeight)/8,a=document.querySelector("canvas"),e=a.getContext("2d");let n,o,d,r,i=1,s=[],c={x:0,y:0,tx:0,ty:0,z:5e-4},l=!1;function h(t){t.x=Math.random()*n,t.y=Math.random()*o}function u(){i=window.devicePixelRatio||1,n=window.innerWidth*i,o=window.innerHeight*i,a.width=n,a.height=o,s.forEach(h)}function m(t,a){if("number"==typeof d&&"number"==typeof r){let e=t-d,n=a-r;c.tx=c.tx+e/8*i*(l?1:-1),c.ty=c.ty+n/8*i*(l?1:-1)}d=t,r=a}function y(){d=null,r=null}!function(){for(let a=0;a<t;a++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),u(),function t(){e.clearRect(0,0,n,o),c.tx*=.96,c.ty*=.96,c.x+=.8*(c.tx-c.x),c.y+=.8*(c.ty-c.y),s.forEach((t=>{t.x+=c.x*t.z,t.y+=c.y*t.z,t.x+=(t.x-n/2)*c.z*t.z,t.y+=(t.y-o/2)*c.z*t.z,t.z+=c.z,(t.x<-50||t.x>n+50||t.y<-50||t.y>o+50)&&function(t){let a="z",e=Math.abs(c.x),d=Math.abs(c.y);if(e>1||d>1){let t;t=e>d?Math.random()<e/(e+d)?"h":"v":Math.random()<d/(e+d)?"v":"h",a="h"===t?c.x>0?"l":"r":c.y>0?"t":"b"}t.z=.2+.8*Math.random(),"z"===a?(t.z=.1,t.x=Math.random()*n,t.y=Math.random()*o):"l"===a?(t.x=-50,t.y=o*Math.random()):"r"===a?(t.x=n+50,t.y=o*Math.random()):"t"===a?(t.x=n*Math.random(),t.y=-50):"b"===a&&(t.x=n*Math.random(),t.y=o+50)}(t)})),s.forEach((t=>{e.beginPath(),e.lineCap="round",e.lineWidth=3*t.z*i,e.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",e.beginPath(),e.moveTo(t.x,t.y);var a=2*c.x,n=2*c.y;Math.abs(a)<.1&&(a=.5),Math.abs(n)<.1&&(n=.5),e.lineTo(t.x+a,t.y+n),e.stroke()})),requestAnimationFrame(t)}(),window.onresize=u,a.onmousemove=function(t){l=!1,m(t.clientX,t.clientY)},a.ontouchmove=function(t){l=!0,m(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault()},a.ontouchend=y,document.onmouseleave=y})();const t=window.matchMedia("(max-width: 540px)"),a=t=>{if(t.matches){const t=document.querySelectorAll("div.self-stack-check, span.self-stack-name");for(let a=0;a<t.length;a++)t[a].setAttribute("data-aos","")}else{const t=document.querySelectorAll("span.self-stack-name"),a=document.querySelectorAll("div.self-stack-check");for(let a=0;a<t.length;a++)t[a].setAttribute("data-aos","fade");for(let t=0;t<a.length;t++)a[t].setAttribute("data-aos","fade-left")}};t.addListener(a),a(t);const e=document.querySelectorAll("div.project-image-container");e[0].addEventListener("mouseenter",(t=>{t.target.innerHTML='\n  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">\n    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">E-DEALS</p>\n    <p class="project-stack" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title">HTML, CSS, Rails</p>\n    <a href="https://github.com/marcode95/e-deals" class="github-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">GITHUB</a>\n    <a href="https://desolate-beach-15262.herokuapp.com/" class="project-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>\n  </div>'})),e[0].addEventListener("mouseleave",(t=>{t.target.innerHTML=""}))})();