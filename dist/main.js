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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ canvas)\n/* harmony export */ });\nconst canvas = () => {\r\n  const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8,\r\n  STAR_SIZE = 3,\r\n  STAR_MIN_SCALE = 0.2,\r\n  OVERFLOW_THRESHOLD = 50;\r\n\r\n  const canvas = document.querySelector( 'canvas' ),\r\n    context = canvas.getContext( '2d' );\r\n\r\n  let scale = 1, // device pixel ratio\r\n  width,\r\n  height;\r\n\r\n  let stars = [];\r\n\r\n  let pointerX,\r\n  pointerY;\r\n\r\n  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };\r\n\r\n  let touchInput = false;\r\n\r\n  generate();\r\n  resize();\r\n  step();\r\n\r\n  window.onresize = resize;\r\n  canvas.onmousemove = onMouseMove;\r\n  canvas.ontouchmove = onTouchMove;\r\n  canvas.ontouchend = onMouseLeave;\r\n  document.onmouseleave = onMouseLeave;\r\n\r\n  function generate() {\r\n\r\n  for( let i = 0; i < STAR_COUNT; i++ ) {\r\n  stars.push({\r\n    x: 0,\r\n    y: 0,\r\n    z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )\r\n  });\r\n  }\r\n\r\n  }\r\n\r\n  function placeStar( star ) {\r\n\r\n  star.x = Math.random() * width;\r\n  star.y = Math.random() * height;\r\n\r\n  }\r\n\r\n  function recycleStar( star ) {\r\n\r\n  let direction = 'z';\r\n\r\n  let vx = Math.abs( velocity.x ),\r\n    vy = Math.abs( velocity.y );\r\n\r\n  if( vx > 1 || vy > 1 ) {\r\n  let axis;\r\n\r\n  if( vx > vy ) {\r\n    axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';\r\n  }\r\n  else {\r\n    axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';\r\n  }\r\n\r\n  if( axis === 'h' ) {\r\n    direction = velocity.x > 0 ? 'l' : 'r';\r\n  }\r\n  else {\r\n    direction = velocity.y > 0 ? 't' : 'b';\r\n  }\r\n  }\r\n\r\n  star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );\r\n\r\n  if( direction === 'z' ) {\r\n  star.z = 0.1;\r\n  star.x = Math.random() * width;\r\n  star.y = Math.random() * height;\r\n  }\r\n  else if( direction === 'l' ) {\r\n  star.x = -OVERFLOW_THRESHOLD;\r\n  star.y = height * Math.random();\r\n  }\r\n  else if( direction === 'r' ) {\r\n  star.x = width + OVERFLOW_THRESHOLD;\r\n  star.y = height * Math.random();\r\n  }\r\n  else if( direction === 't' ) {\r\n  star.x = width * Math.random();\r\n  star.y = -OVERFLOW_THRESHOLD;\r\n  }\r\n  else if( direction === 'b' ) {\r\n  star.x = width * Math.random();\r\n  star.y = height + OVERFLOW_THRESHOLD;\r\n  }\r\n\r\n  }\r\n\r\n  function resize() {\r\n\r\n  scale = window.devicePixelRatio || 1;\r\n\r\n  width = window.innerWidth * scale;\r\n  height = window.innerHeight * scale;\r\n\r\n  canvas.width = width;\r\n  canvas.height = height;\r\n\r\n  stars.forEach( placeStar );\r\n\r\n  }\r\n\r\n  function step() {\r\n\r\n  context.clearRect( 0, 0, width, height );\r\n\r\n  update();\r\n  render();\r\n\r\n  requestAnimationFrame( step );\r\n\r\n  }\r\n\r\n  function update() {\r\n\r\n  velocity.tx *= 0.66;\r\n  velocity.ty *= 0.66;\r\n\r\n  velocity.x += ( velocity.tx - velocity.x ) * 0.8;\r\n  velocity.y += ( velocity.ty - velocity.y ) * 0.8;\r\n\r\n  stars.forEach( ( star ) => {\r\n\r\n  star.x += velocity.x * star.z;\r\n  star.y += velocity.y * star.z;\r\n\r\n  star.x += ( star.x - width/2 ) * velocity.z * star.z;\r\n  star.y += ( star.y - height/2 ) * velocity.z * star.z;\r\n  star.z += velocity.z;\r\n\r\n  // recycle when out of bounds\r\n  if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {\r\n    recycleStar( star );\r\n  }\r\n\r\n  } );\r\n\r\n  }\r\n\r\n  function render() {\r\n\r\n  stars.forEach( ( star ) => {\r\n\r\n  context.beginPath();\r\n  context.lineCap = 'round';\r\n  context.lineWidth = STAR_SIZE * star.z * scale;\r\n  context.strokeStyle = 'rgba(255,255,255,'+(0.5 + 0.5*Math.random())+')';\r\n\r\n  context.beginPath();\r\n  context.moveTo( star.x, star.y );\r\n\r\n  var tailX = velocity.x * 2,\r\n      tailY = velocity.y * 2;\r\n\r\n  // stroke() wont work on an invisible line\r\n  if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;\r\n  if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;\r\n\r\n  context.lineTo( star.x + tailX, star.y + tailY );\r\n\r\n  context.stroke();\r\n\r\n  } );\r\n\r\n  }\r\n\r\n  function movePointer( x, y ) {\r\n\r\n  if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {\r\n\r\n  let ox = x - pointerX,\r\n      oy = y - pointerY;\r\n\r\n  velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );\r\n  velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );\r\n\r\n  }\r\n\r\n  pointerX = x;\r\n  pointerY = y;\r\n\r\n  }\r\n\r\n  function onMouseMove( event ) {\r\n\r\n  touchInput = false;\r\n\r\n  movePointer( event.clientX, event.clientY );\r\n\r\n  }\r\n\r\n  function onTouchMove( event ) {\r\n\r\n  touchInput = true;\r\n\r\n  movePointer( event.touches[0].clientX, event.touches[0].clientY, true );\r\n\r\n  event.preventDefault();\r\n\r\n  }\r\n\r\n  function onMouseLeave() {\r\n\r\n  pointerX = null;\r\n  pointerY = null;\r\n\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://marcode95.github.io/./src/components/canvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/canvas */ \"./src/components/canvas.js\");\n\r\n(0,_components_canvas__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\nconst mediaQuery = window.matchMedia('(max-width: 540px)')\r\n\r\nconst handleTabletChange = (e) => {\r\n  if (e.matches) {\r\n    const selfStack = document.querySelectorAll(\"div.self-stack-check, span.self-stack-name\");\r\n    for (let i = 0; i < selfStack.length; i++) {\r\n      let item = selfStack[i];\r\n      item.setAttribute('data-aos', '')\r\n    }\r\n  }\r\n\r\n  else {\r\n    const selfStackName = document.querySelectorAll(\"span.self-stack-name\");\r\n    const selfStackCheck = document.querySelectorAll(\"div.self-stack-check\");\r\n    for (let i = 0; i < selfStackName.length; i++) {\r\n      let item = selfStackName[i];\r\n      item.setAttribute('data-aos', 'fade')\r\n    }\r\n    for (let i = 0; i < selfStackCheck.length; i++) {\r\n      let item = selfStackCheck[i];\r\n      item.setAttribute('data-aos', 'fade-left')\r\n    }\r\n  }\r\n}\r\n\r\nmediaQuery.addListener(handleTabletChange);\r\nhandleTabletChange(mediaQuery);\r\n\r\nconst projectImageContainers = document.querySelectorAll('div.project-image-container');\r\n\r\nprojectImageContainers[0].addEventListener('mouseenter', (e) => {\r\n  e.target.innerHTML = `\r\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\r\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"600\">IN THE WOODS</p>\r\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">JavaScript / Phaser</p>\r\n    <p class=\"project-summary\" data-aos=\"fade-down\" data-aos-delay=\"400\" data-aos-duration=\"400\" data-aos-anchor=\".project-title\">Sidescroller Jump 'n Run game including shooting enemies, collecting coins, an end boss fight, and a leaderboard API.</p>\r\n    <div class=\"d-flex\">\r\n      <a href=\"https://agitated-curie-05b9b2.netlify.app/\" class=\"github-link\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\r\n      <a href=\"https://github.com/marcode95/phaser-game\" class=\"github-link\" data-aos=\"fade-left\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\r\n    </div>\r\n  </div>`;\r\n})\r\nprojectImageContainers[0].addEventListener('mouseleave', (e) => {\r\n  e.target.innerHTML = ``;\r\n})\r\n\r\nprojectImageContainers[1].addEventListener('mouseenter', (e) => {\r\n  e.target.innerHTML = `\r\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\r\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"600\">VCL / NG-VCL</p>\r\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">Angular</p>\r\n    <p class=\"project-summary\" data-aos=\"fade-down\" data-aos-delay=\"400\" data-aos-duration=\"400\" data-aos-anchor=\".project-title\">A comprehensive library of components for Angular 11+ with VCL based styling.</p>\r\n    <div class=\"d-flex\">\r\n      <a href=\"https://vcl.github.io/\" class=\"github-link\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\r\n      <a href=\"https://github.com/vcl\" class=\"github-link\" data-aos=\"fade-left\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\r\n    </div>\r\n  </div>`;\r\n})\r\nprojectImageContainers[1].addEventListener('mouseleave', (e) => {\r\n  e.target.innerHTML = ``;\r\n})\r\n\r\nprojectImageContainers[2].addEventListener('mouseenter', (e) => {\r\n  e.target.innerHTML = `\r\n    <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\r\n      <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"600\">E-DEALS</p>\r\n      <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML / CSS / Rails</p>\r\n      <p class=\"project-summary\" data-aos=\"fade-down\" data-aos-delay=\"400\" data-aos-duration=\"400\" data-aos-anchor=\".project-title\">Mobile app for keeping track of the user's spendings. Turn on 'Touch Simulation' in Firefox when checking it out!</p>\r\n      <div class=\"d-flex\">\r\n        <a href=\"https://desolate-beach-15262.herokuapp.com/\" class=\"github-link\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\r\n        <a href=\"https://github.com/marcode95/e-deals\" class=\"github-link\" data-aos=\"fade-left\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\r\n      </div>\r\n    </div>`;\r\n})\r\nprojectImageContainers[2].addEventListener('mouseleave', (e) => {\r\n  e.target.innerHTML = ``;\r\n})\r\n\r\nprojectImageContainers[3].addEventListener('mouseenter', (e) => {\r\n  e.target.innerHTML = `\r\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\r\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"600\">PRO-CON</p>\r\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML / CSS</p>\r\n    <p class=\"project-summary\" data-aos=\"fade-down\" data-aos-delay=\"400\" data-aos-duration=\"400\" data-aos-anchor=\".project-title\">HTML&CSS website for selling gaming controllers.</p>\r\n    <div class=\"d-flex\">\r\n      <a href=\"https://raw.githack.com/marcode95/HTML-CSS-capstone/feature/index.html\" class=\"github-link\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\r\n      <a href=\"https://github.com/marcode95/HTML-CSS-capstone\" class=\"github-link\" data-aos=\"fade-left\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\r\n    </div>\r\n  </div>`;\r\n})\r\nprojectImageContainers[3].addEventListener('mouseleave', (e) => {\r\n  e.target.innerHTML = ``;\r\n})\r\n\r\nprojectImageContainers[4].addEventListener('mouseenter', (e) => {\r\n  e.target.innerHTML = `\r\n  <div class=\"project-description w-100 h-100 d-flex flex-column align-items-center\">\r\n    <p class=\"project-title\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"600\">TO-DO'S</p>\r\n    <p class=\"project-stack\" data-aos=\"fade-down\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\".project-title\">HTML / CSS / JavaScript</p>\r\n    <p class=\"project-summary\" data-aos=\"fade-down\" data-aos-delay=\"400\" data-aos-duration=\"400\" data-aos-anchor=\".project-title\">The classic: An app for keeping track of the user's \"to-do's\" built with JS!</p>\r\n    <div class=\"d-flex\">\r\n      <a href=\"https://cocky-ardinghelli-805b0e.netlify.app/\" class=\"github-link\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">LIVE DEMO</a>\r\n      <a href=\"https://github.com/marcode95/to-do-list\" class=\"github-link\" data-aos=\"fade-left\" data-aos-delay=\"200\" data-aos-duration=\"600\" data-aos-anchor=\".project-title\" target=\"_blank\">GITHUB</a>\r\n    </div>\r\n  </div>`;\r\n})\r\nprojectImageContainers[4].addEventListener('mouseleave', (e) => {\r\n  e.target.innerHTML = ``;\r\n})\n\n//# sourceURL=webpack://marcode95.github.io/./src/index.js?");

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