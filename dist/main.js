/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/canvas.js":
/*!**********************************!*\
  !*** ./src/components/canvas.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ canvas)\n/* harmony export */ });\nconst canvas = () => {\n  const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8,\n  STAR_SIZE = 3,\n  STAR_MIN_SCALE = 0.2,\n  OVERFLOW_THRESHOLD = 50;\n\n  const canvas = document.querySelector( 'canvas' ),\n    context = canvas.getContext( '2d' );\n\n  let scale = 1, // device pixel ratio\n  width,\n  height;\n\n  let stars = [];\n\n  let pointerX,\n  pointerY;\n\n  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };\n\n  let touchInput = false;\n\n  generate();\n  resize();\n  step();\n\n  window.onresize = resize;\n  canvas.onmousemove = onMouseMove;\n  canvas.ontouchmove = onTouchMove;\n  canvas.ontouchend = onMouseLeave;\n  document.onmouseleave = onMouseLeave;\n\n  function generate() {\n\n  for( let i = 0; i < STAR_COUNT; i++ ) {\n  stars.push({\n    x: 0,\n    y: 0,\n    z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )\n  });\n  }\n\n  }\n\n  function placeStar( star ) {\n\n  star.x = Math.random() * width;\n  star.y = Math.random() * height;\n\n  }\n\n  function recycleStar( star ) {\n\n  let direction = 'z';\n\n  let vx = Math.abs( velocity.x ),\n    vy = Math.abs( velocity.y );\n\n  if( vx > 1 || vy > 1 ) {\n  let axis;\n\n  if( vx > vy ) {\n    axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';\n  }\n  else {\n    axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';\n  }\n\n  if( axis === 'h' ) {\n    direction = velocity.x > 0 ? 'l' : 'r';\n  }\n  else {\n    direction = velocity.y > 0 ? 't' : 'b';\n  }\n  }\n\n  star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );\n\n  if( direction === 'z' ) {\n  star.z = 0.1;\n  star.x = Math.random() * width;\n  star.y = Math.random() * height;\n  }\n  else if( direction === 'l' ) {\n  star.x = -OVERFLOW_THRESHOLD;\n  star.y = height * Math.random();\n  }\n  else if( direction === 'r' ) {\n  star.x = width + OVERFLOW_THRESHOLD;\n  star.y = height * Math.random();\n  }\n  else if( direction === 't' ) {\n  star.x = width * Math.random();\n  star.y = -OVERFLOW_THRESHOLD;\n  }\n  else if( direction === 'b' ) {\n  star.x = width * Math.random();\n  star.y = height + OVERFLOW_THRESHOLD;\n  }\n\n  }\n\n  function resize() {\n\n  scale = window.devicePixelRatio || 1;\n\n  width = window.innerWidth * scale;\n  height = window.innerHeight * scale;\n\n  canvas.width = width;\n  canvas.height = height;\n\n  stars.forEach( placeStar );\n\n  }\n\n  function step() {\n\n  context.clearRect( 0, 0, width, height );\n\n  update();\n  render();\n\n  requestAnimationFrame( step );\n\n  }\n\n  function update() {\n\n  velocity.tx *= 0.66;\n  velocity.ty *= 0.66;\n\n  velocity.x += ( velocity.tx - velocity.x ) * 0.8;\n  velocity.y += ( velocity.ty - velocity.y ) * 0.8;\n\n  stars.forEach( ( star ) => {\n\n  star.x += velocity.x * star.z;\n  star.y += velocity.y * star.z;\n\n  star.x += ( star.x - width/2 ) * velocity.z * star.z;\n  star.y += ( star.y - height/2 ) * velocity.z * star.z;\n  star.z += velocity.z;\n\n  // recycle when out of bounds\n  if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {\n    recycleStar( star );\n  }\n\n  } );\n\n  }\n\n  function render() {\n\n  stars.forEach( ( star ) => {\n\n  context.beginPath();\n  context.lineCap = 'round';\n  context.lineWidth = STAR_SIZE * star.z * scale;\n  context.strokeStyle = 'rgba(255,255,255,'+(0.5 + 0.5*Math.random())+')';\n\n  context.beginPath();\n  context.moveTo( star.x, star.y );\n\n  var tailX = velocity.x * 2,\n      tailY = velocity.y * 2;\n\n  // stroke() wont work on an invisible line\n  if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;\n  if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;\n\n  context.lineTo( star.x + tailX, star.y + tailY );\n\n  context.stroke();\n\n  } );\n\n  }\n\n  function movePointer( x, y ) {\n\n  if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {\n\n  let ox = x - pointerX,\n      oy = y - pointerY;\n\n  velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );\n  velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );\n\n  }\n\n  pointerX = x;\n  pointerY = y;\n\n  }\n\n  function onMouseMove( event ) {\n\n  touchInput = false;\n\n  movePointer( event.clientX, event.clientY );\n\n  }\n\n  function onTouchMove( event ) {\n\n  touchInput = true;\n\n  movePointer( event.touches[0].clientX, event.touches[0].clientY, true );\n\n  event.preventDefault();\n\n  }\n\n  function onMouseLeave() {\n\n  pointerX = null;\n  pointerY = null;\n\n  }\n}\n\n\n\n//# sourceURL=webpack://marcode95.github.io/./src/components/canvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/canvas */ \"./src/components/canvas.js\");\n\n(0,_components_canvas__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n\nconst mediaQuery = window.matchMedia('(max-width: 540px)')\n\nconst handleTabletChange = (e) => {\n  if (e.matches) {\n    const selfStack = document.querySelectorAll(\"div.self-stack-check, span.self-stack-name\");\n    for (let i = 0; i < selfStack.length; i++) {\n      let item = selfStack[i];\n      item.setAttribute('data-aos', '')\n    }\n  }\n\n  else {\n    const selfStackName = document.querySelectorAll(\"span.self-stack-name\");\n    const selfStackCheck = document.querySelectorAll(\"div.self-stack-check\");\n    for (let i = 0; i < selfStackName.length; i++) {\n      let item = selfStackName[i];\n      item.setAttribute('data-aos', 'fade')\n    }\n    for (let i = 0; i < selfStackCheck.length; i++) {\n      let item = selfStackCheck[i];\n      item.setAttribute('data-aos', 'fade-left')\n    }\n  }\n}\n\nmediaQuery.addListener(handleTabletChange);\nhandleTabletChange(mediaQuery);\n\nconst projectImageContainers = document.querySelectorAll('div.project-image-container');\n\nprojectImageContainers[0].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML = `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">E-DEALS</p>\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML, CSS, Rails</p>\n    <a href=\"https://github.com/marcode95/e-deals\" class=\"github-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\n    <a href=\"https://desolate-beach-15262.herokuapp.com/\" class=\"project-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\n  </div>`;\n})\nprojectImageContainers[0].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\nprojectImageContainers[1].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML = `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">IN THE WOODS</p>\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">Javascript, Phaser</p>\n    <a href=\"https://github.com/marcode95/phaser-game\" class=\"github-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\n    <a href=\"https://agitated-curie-05b9b2.netlify.app/\" class=\"project-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\n  </div>`;\n})\nprojectImageContainers[1].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\nprojectImageContainers[2].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML = `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">PRO-CON</p>\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML, CSS</p>\n    <a href=\"https://github.com/marcode95/HTML-CSS-capstone\" class=\"github-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\n    <a href=\"https://raw.githack.com/marcode95/HTML-CSS-capstone/feature/index.html\" class=\"project-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\n  </div>`;\n})\nprojectImageContainers[2].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\nprojectImageContainers[3].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML = `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">Coming soon</p>\n\n  </div>`;\n})\nprojectImageContainers[3].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\nprojectImageContainers[4].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML =  `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">TO-DO'S</p>\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML, CSS, Javascript</p>\n    <a href=\"https://github.com/marcode95/to-do-list\" class=\"github-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\n    <a href=\"https://cocky-ardinghelli-805b0e.netlify.app/\" class=\"project-link\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\n  </div>`;\n})\nprojectImageContainers[4].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\nprojectImageContainers[5].addEventListener('mouseenter', (e) => {\n  e.target.innerHTML = `\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"500\">Coming soon</p>\n\n  </div>`;\n})\nprojectImageContainers[5].addEventListener('mouseleave', (e) => {\n  e.target.innerHTML = ``;\n})\n\n//# sourceURL=webpack://marcode95.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;