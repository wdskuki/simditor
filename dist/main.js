/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _simditor = __webpack_require__(2);

var _simditor2 = _interopRequireDefault(_simditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/.0.28.7@css-loader/index.js!../node_modules/.2.0.10@postcss-loader/lib/index.js!../node_modules/.6.0.6@sass-loader/lib/loader.js!./simditor.scss", function() {
			var newContent = require("!!../node_modules/.0.28.7@css-loader/index.js!../node_modules/.2.0.10@postcss-loader/lib/index.js!../node_modules/.6.0.6@sass-loader/lib/loader.js!./simditor.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Simditor';\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABp8AA4AAAAAKmwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAaYAAAABoAAAAcdO8GE09TLzIAAAG0AAAARQAAAGAQ+ZFXY21hcAAAAkgAAABRAAABWuA2Gx9jdnQgAAAEgAAAAAoAAAAKAwQAxGZwZ20AAAKcAAABsQAAAmUPtC+nZ2x5ZgAABNgAABPeAAAgZG/p6QxoZWFkAAABRAAAADAAAAA2BvuCgGhoZWEAAAF0AAAAHgAAACQH9QTlaG10eAAAAfwAAABKAAAAlHv7AItsb2NhAAAEjAAAAEwAAABMi4qTXm1heHAAAAGUAAAAIAAAACABRwHNbmFtZQAAGLgAAAEFAAAB12vS/ulwb3N0AAAZwAAAAJ4AAAFsyCrvunByZXAAAARQAAAALgAAAC6w8isUeNpjYGRgYADiKAkPy3h+m68M8swfgCIMF0/IVyDo/84sFswJQC4HAxNIFAAZwAnyeNpjYGRgYE5gmMAQzWLBwPD/O5AEiqAAVQBa6wPkAAAAAQAAACUAoAAKAAAAAAACAAEAAgAWAAABAAEpAAAAAHjaY2BhnsA4gYGVgYGpn+kgAwNDL4RmfMxgxMgCFGVgZWaAAUYBBjTQwMDwQY454X8BQzRzAsMEIJcRSVaBgREAQ9oK6QAAAHjaY8xhUGQAAsYABgbmDwjMYsEgxCzBwMDkAOQnALEEgx1UjhNMr4BjTqBakDxC/wqIPsYMqJoEKIbpk0C1C4zXM3DA5AEzchbtAAB42mNgYGBmgGAZBkYGEAgB8hjBfBYGCyDNxcDBwASEDAy8DAof5P7/B6sCsRmAbOb/3/8/FWCD6oUCRjaIkWA2SCcLAyoAqmZlGN4AALmUC0kAAAB42l1Ru05bQRDdDQ8DgcTYIDnaFLOZkALvhTZIIK4uwsh2YzlC2o1c5GJcwAdQIFGD9msGaChTpE2DkAskPoFPiJSZNYmiNDs7s3POmTNLypGqd2m956lzFkjhboNmm34npNpFgAfS9Y1GRtrBIy02M3rlun2/j8FmNOVOGkB5z1vKQ0bTTqAW7bl/Mj+D4T7/yzwHg5Zmmp5aZyE9hMB8M25p8DWjWXf9QV+xOlwNBoYU01Tc9cdUyv+W5lxtGbY2M5p3cCEiP5gGaGqtjUDTnzqkej6OYgly+WysDSamrD/JRHBhMl3VVC0zvnZwn+wsOtikSnPgAQ6wVZ6Ch+OjCYX0LYkyS0OEg9gqMULEJIdCTjl3sj8pUD6ShDFvktLOuGGtgXHkNTCozdMcvsxmU9tbhzB+EUfw3S/Gkg4+sqE2RoTYjlgKYAKRkFFVvqHGcy+LAbnU/jMQJWB5+u1fJwKtOzYRL2VtnWOMFYKe3zbf+WXF3apc50Whu3dVNVTplOZDL2ff4xFPj4XhoLHgzed9f6NA7Q2LGw2aA8GQ3o3e/9FadcRV3gsf2W81s7EWAAAAuAH/hbABjQBLsAhQWLEBAY5ZsUYGK1ghsBBZS7AUUlghsIBZHbAGK1xYWbAUKwAAAAAAowCFACECfwAAAAAAKgAqACoAKgAqACoAfgEkAcAChAK+A2oElgU2BbQGxgeYCBgIPgjGCU4KZgqKCq4LQAuYDDoMcAzuDXINoA4MDngO4g86D6QQMnjazVl5cBvXeX9vF4tdXHsBuwBBEvdBAgQXxOIgRPGQSEkULcoJJds6Yku2Na6TKJXHsnx0XNptHcvNpLaSJpkczthV68Zu0ulbQE58qXXaHK3j7ThjD6PmmnQmaTydSaqkmdbxkFC/tyApinXiuP2jlcC37/vegX3f8fu+7wExKIkQLjCPIxbxaNjCyNja4l3sTyqWm/vu1hbLQBdZLGVzlN3i3a7lrS1M+aaSVPKmkk5iz+tf/zrz+MrRJHMDgp3US3/tyjEvIQn1oiJCWd6dx7kGrsexLuGwjlm3AXSQ0h5M+5M4D3/1MNbx4b5AoPNmIIDdgQB0v/e9AJ78JqemVLfT4uN0sDtAHzBtvvvYsIK5aqWgcF6XyizRR+f+K9cAhRB9T3TpGTbCRlAARdAEehiRCYNwNulNLCmkzyZ+g6g2GTSIaJKCTUo2JpMGSS0RZBOp0kohb7E9lerzFMlghSDZ4nGRbLGJRpdXbGsKFy2UUlRL7Gk2iaacYzlfeCITbhJeJY0msvycorZj8eYWylMV4JFBtaXlKs1mszyS5UNh3azUqvlhnOLZsAZEvZpLp9gU35jAjfo4lvM5GEzn6xkzXAnrWogXMR/DITfvTuMy9hSyr0XSx+6VXa6+1NFbTrwrPvD+v8OevSHFLzT9cYbZgqXZ+U9cVahEC7nrTo6ZN33w2fdsCykvTOaaCTc+/vn7XbOf27X840CNEYXYRJYp6gEOswb24YPlHbsHtIgSvO1Tt/aNgglRWTJTIMsB9FeIDIAcTZKzidsmIYNoNumpEE0mvSDCQcMqgKDq0ecmDv/sY0grekXil4n0opXCvyTxF4Foi34pWCQpuZ1IxYPFdpK2LWAmPpT4UNotKmqzBTx4kEQTPe0X44lkatj5h6+gyFQUI8s9AErADCghpxChSUIq6W9aWq+iEh0EzeVzKTffqK/+V2sg03wjXKk33FSeImbcYKhhN4/fd9OemVtlr18f6ZF5rjKH9R0+33cKp0KsIC1o7ti2EsbaPoaf9TE+XHZxvoCWEf8N39gvBlhmi0fAkSinC+Kfdr71j6KX8/f3IsaxwaMgt13oOvSHqDWPUJHst4lgUJPbYrSVYGw6EzbJmG2FpioVMiaTCDWwcZMkbLKjgskBgwSWSMZuZQLUIDMxT7EVyNBuIAi2mZGtEbDEg/A3kgGDi/RuGQODQ1aiABSWA3WgrMgWkMa2JhlTyCTIBLxUhbO706lhZhxXc/mUgetmuFGpm3xYc6d4dz+mQgGbBJFN4OowNjCYIp9vmGG9EdZDsFbEwRoYbDIFk0O6mazUmTcx5w8nC4c/c/3p7WF9p8ozvPRZIiZYjLPTXh4L3N6Rxs1jUZ8Wcgksy/T3NAXGODmw0+tiotqg/xavsPwVwesV2K2Cl/ly0tv5m+Nbkjur+2+/7oX3J1hmBPMc5rMcJ/LTyd/77O8O9A6F5NSO04195WQ+hpmymxFwMCDybv/ymxm6EW2o/U5c+g/m28xHURrwSg9J2A0n5mmTq1J0gqZeiYPXQUOHmZdkeY9cVJ94Qi1CR37iiU30Y7+Cv0av4c9F0L2EBtEcWkTENMiMo3vJJmmD6OAuVwEILZGs3Z7IqkKRTNokK1uz4EAl29oDOp2cAMXJTZJVqPpm1afj+kChYlJIKSnnIv3R4qCjbWEGtF0ojU5SbaclIGQ12k+n6QqJUJVXdFCTG9SVA43XzUauVm3UzUoYAEUC7eaom4RA5WHeBPWKbIpqnBoHIFEjhqktgCHkc+z3qVyXq7TtjF6156NX3+4OMLwh9MVGPrhn7u6bzQd+7Ar7hq87cLq0N+lnmKasspMnM/trJQXf2tUIbTKzV98yuyunv6/pYVhmf9zcfnhPKp4+ox3a2j88qgd0r9fDjw8N4giTLrtu7Js5MCBRXHcjz6XbQK6HURiV0RSaR9ejD+BB1KpT3xq3iatCxmXC2hTHAeNlm0QNMmyTsk32GeSQTVIGydvkZoNsN8n7bKqSbZXWzM3UpWau8hQx+W2DsEtkrkIYmzCytQPUMW8TvtLaMU8n7Zj2FNvq/A7QV8IkXruleilbpaFiXrYMX5FE6J7WCVAgwyoqgJYWy+ym2tihtEOl4V1OSFCfllE4lb+KEvOK5RsCCPOqbTc3WHB0KvsB2LwB4NaVtkcMhuhEVrV4DVhIIUCNq8TdtIajYCS9TbIP4lqTlFVSapJDyrlYojCUoWtSKsk2SV4hg2AIDV5L10zNCSSpfMOJQXy+Pom1dK4KCFmrplNAmxWdBhrerHHaBrNJVnRM19fSbgoG2uZBZRP9QH3r87X+5Ph7s4m+SHlMqgT2v8wOhKfi0WA5tnNwNBceZ3ax+73Cyn5qF8wXBO/y6+fHsSsyMD/GXrORv7F/iOm/ZmQbPzhXzVaiiSwX3+a/cFAyG2IuEksmx40Zw5+KJNvH6Xza4J81Gmc8WnHXD//pMi+y3u3aFbr0XfYi8wvIlCQUR3nUANQ+gVoatSvIF1iKyzwkCgap2sRHKfDjccen05TKgz/PQmhcsvwZgHJsW0KiUrF24yKy+jSKxi4OUf+sloDw+AMCJWbGgUhmsgkgyiN1UAqoobL2xJvkiX4Ff7PcL0wemlz7sNddKd63YG7sn3KW/bPTdv5iXUaMsZlzpQAZJ+l6EvAujibRAmpxVG4Zk4puK6QHIDWT+G0yBDFtyiDCEgiI9NitHoE6T48CzoNlawB8LWmTpt1qDlB+c8RTtLaBBAHB4IhFnMrVlGp9bBXOgHaiD6W5txmH9K50oTT51F0ZSdOkzNg1CX2xNInfeEvuDPAmS/jDdz2lSbOSds2Yqiecif+NSY/tXT87tRwDzn81OgK2cx96BD2GHkStj1NZ+G1r6D1gGJxhZfabVDDWnnsrVDTWzB1Ab7Wt4x8GumZYxx4A+lGwp8cN8skl4rGtyCiMeGQLAabIZegP2tbsrfQpWwngTR2F/kHbuvsh+pStdwHvtvuh/xHb+hNHflmI1hvkUafYvpHmNo3j2q8ff6fzN39fQ+maLNWXgysJr3COGtQVzUZu5wdvzf9N5lxuZmvZFX+2Vssyv8hVD62b8A/We69ctvBn3oL5NsOX93lh5VHna46B5Gk+4Ln0ZfYx9jqomhqQDT7u1CNRm+x0ckE3RZBrneC013ayvrklmmLnZCsGPrFgk+10hm6TBdlinFLESfq25yC+JPtmds7vpWiixyBmTO+DALGgWKH98GTUds/4xLVORNkJgeJphm9u2TZNJxfcMHmGTrpWsYp0UUpt53bPvduBomy9CmlBio8xkO+5U8Ns3h2C7KgClZ4zAElUlx5m8hSSYiy3llnlqo38WnLVTan4cL0SZtOyfEoaVlnFzXkTMUnkZVaV7pBLUuer3ec+mCCXNk7A3zfK+4wHyyeNSqV8euTUFdTDsOQUpBcyz/sHEi6fW2FVAzaS8He6zwV5SL5ywr+PPDi8YJTvGDkNTmScuoJCLpqzuUbBj3kkohgaRu9FrbCDY4D/BkV/2SBF0I8BOcQSCUH9I1scaMNL8b6FOYpZ2NPFsl7gJ2yrDFrCUAsSf5P0KiQAemDDgPkCRACnXFSICOK+jOzJWiOMs5BXa0o3rwYPyYU3e8utDowz9y2/fu4QTuDE8r1O4vwAtAu17PK91N3ZB3JVZncXt19YPk4nnt0I9erKfsdCv5CrVimEQZ2HE2wEvwE4piEAKgrYfjiubFjKOghvjDNsJKGv7NcTCZ35gp7Af3ucdmmDOAcTLzr1dz8qoXHI1OqoFaTSjDr5r8upuyEphqoa5DcNJg9ftdewrqYR0yzQsg7RWll1zMo5OhjT5leovUP6a9xZXvR6Rf4sa6wlsuzLTgx81BHMsc39y3PwR/38Wc4r4BnBy53t/OjXwsMrV+QXby8PdoM8fG8tD4Gn8giCLax7l/6/lccFKgrOEQobeacCYYY7L1BR8I5cOrO/uUAEpz56kj2KPGBrSdRE74ZM/r3oJPo2apWpVAbsFiQVxTY7UIZUe4DCH2TycZtca5DDNkVPipR3OEi5HfBRtmTwOB8IT7aOQe+ITY7IVhVT77VOUaycAxEyHOCcrHzRo4fHZ3bMUw/0qWRvkxxT2kMlp3gmR1Qy0CRV5UtGvt44cPD4CcrMqOQk+G60rKhfFELBzFCpStlxhaQBQNV2vTGzgzIOK2R3k0yoX9oytn3uxpuOf4Ay9yrkdif5hpyb3oXpYY36O9VBRc91ExcnbVmvTnN5qLMrkw7YNvRwns+vQS6f24Csrg1r8YY9w+vf9J9nQDmBwJlAdMEre+GzuB4LmbMAp6WHys97xdOfkoYp/H7aKyknLhOqeH5tCr59fV3nQnenH61v/fEzHOd0MuuxdtGZ0tNF2Be8uvfTFI9L0mdOe6Tfukz4/efXpow7K3BifYvr13btYhM6x0wBNgWQiojbcIBJNCzJASZ0OfaAVTNFzbfsSXiWfZqE38BvaHHoAieuOfvM4hnmIdgniJwdeKjYIFtf3ehKsJlxVtH1+O61/STYvBsrwH63OvVCHnK+21CLp3Yrmt3AQG9wIGh4TRo9+rppr7lEhiAHli0MZhmwSUC2PNBT7JZHobHDE+nmu9aQCbY6thVsFSuWKwPPgEomwf4yCRgwyhQHMlWnZqf3hs6zscGzx3AMO1kWFHIsmMhqcjyO012zoLbDvKLFNC32hNNen9CXv0LR+6JvNH0mPeq7qCe+JPSc0aQzknYGsnR12dfnW1adyaufs+foAtoMDCQS+Fp9mSbRy3pYptKWu/eGzv1XDlURFYbk3BjmQHN55+YDxD5A0S0kKeo5jLzRXuotOcVKZegJkexOp3KrHhPDzhVpig/r/Ophqo16HNcT7NFO68a/nPD5592Ka/Cu6bueeur1ffOqV+iBF4K32X0fvp6Jdh7tLMwFfPNuhquNPfXTp+b3ymEdXpeebfauVYxefd8gZGlpVEQm+ghqFalWDUeZoLKwQWIm6YVUrUIPYcJZqgYZWYKMnCbjPaBOzSaabCWh12+TftnKdi90aqBXrQdSMJ87XzAq9KRJpc0yAT/t9qtPS8Fccdh0UrVwAOYJSmawVKaDvUo7OzA04iRmWMRUJhOYiqRC7+dieC17cK0+VTmXcMt6AgSYyMn1BLOo3f7w7Ron9vW5xD037BFdfX1i50eFrYXCVjznPJ57tbP06qu4gHtXOp9eWcG3YHZm374ZsdcjiqXR0ZIoenoxR2eufjp/jAuv0kVMb3fBytq9+zTEORP8wgtZVA61/FR+gMuQT3hAWpJBgRpZnF9RW4ybd+7DsYnT+SSfxmwS15Ia/sZRvGtxrvOZubvwyT/C0ZV76ZYr/mefZe7s/NnKv54/j7o1p+ODEajeG2gvIl6jFUs2TCiefHarN12tQAEEzlc0wNAwGTWsJv1inxdciI+DT2WUViBqwguQotrWI8MGlTVWiOZcklbqZi5Pr0kbE2wDm0HIhGNMHIf4fIoH/KXgXAN0FnEoxgKe83j0SU7jyo3OT3rLW7BY6U8KOD17j7qQjhSjewUWL2l/z8xh3tu7sCI35EQk78J4gMGPnFh5zCWUXALfozE/7/xL4Rt7x09oMpv0cB5BjEkMK8jaeZz7RFT1cC6c9HKrZ/+Y8/uGgnT0eUQ8Br30gvxUMgFPCKoQBo5t0h85ggA+YcOKdC/mXxx/c5FezBN1WCT6i5zFML8UiffF5ya/8eYFOsARDCMijATpSOhFjohyG4k4WCSMDAbrDRbbHtpSvkT5LGp7xZDu3NFP+RFmWI9XlNRgl7X2j0xFaQ7ZSAaT9M4xHcdmrRFM5nGS5bLMvUJHjuID/hMn+Jv8LzMv9XU+4bmE2Mhs5/nOeUa+ufPq/bHY1Y828SgeuQULy986fHhVDmBvzEtgeSEaGVBX2VBV6w6ga2BOWUANiKCN/AQex9gMa+zFlWeDmd7snj/4UEIKM8K7m+cPHnwt0BPfw39wiNVEE3+nuYdi/GrOtlbX51bvNSAv1gx6tZE1KKDXDKjeKcCv3lVkN+VY+U10423G2YuASwcomLJPStoFTeoIlKChBwB5+XVnJNId+aQzcqukHZ+lPdr8w6/tof9H51opU4J5pXuux52Ro92Ru52Rh/5PzvVOc+grz7XxWBtP9T86FIuESyfZZ5ivQkSKoRTUDEQwWu6gTlHOY7c4NUxRLmBArMFQRlgZCnEegUJciKYNCmG6+KrHsZbna3VwPBGHIQPNSbg2gScxZs0gVJ34z3fjqbypLn3zHtfCG2bIJd3w+B2l2jjLYu3I157BLuary52g12X4vcNy9OWTh4WouyT6XEWfznGM2rmEv3XgAMV/qgPmTuf34RQ6hloC1YAO2OTcdSlxeHHJeVfiW6J8XabVJb33S3ZvO1ibnsJKKlA1p5ok5txrs/R3PWTpcDJKasq5YKQ/meqGxIqubSyQsZLm82nFrIUbGtdI19Jamv1cvFCIL5+lLf7p4g1HFheP3IC3PHZk8QbmzkK80+cM/DBe6Aj4dxYXOw+ev+ee8/HvOoHm8t1mEU2hQ6s2lbBbCVrwo0QBCv4ep1im59rm3G52Iz8cg+Y42+E0mX4o+pXhStOJ7z2QxrWH6036gw2RFCfVu1xer1b5EN8hGS1i51e2tdsAsDkIPGYliDdesazes7CRI9OdoekjR6bxa8mk4OL7XB7OJ3aGoMLP4ddyVS7j5kK/36mLGfHnojgBj4/h49BOiPiadnfd9BGRDfJ9nKua6657hIdVGMMiWEOnOmvoYoT+C93/Vj8AAHjafY+/asMwEIc/JU6aQhsyltJBQ6eCg20IgdCt1GTwlNJsHUJijCCxwHaeqVufpM/Qta/Ri31ZOkTipO9Ov/sjYMwXhm7d8qBsGPGs3OOKd+U+j3wqB6L5UR5wY4zykJGxojTBtXj3bdaJDROelHvS91W5z5IP5UA038oD7vhVHjIxY1I8JQ2ObUs1lkz2C6S+bNzWl7XNMnHfRHNgJ2cjykoC7rBzjRdakVNwZM/m9LDKi+N+I3AunrYJhagsCVMiuRdi/0t20Vg0IXOxRJQxs26U1FdFbpNpZBf23FowTsJ5mETx7OKEa+ldyedcO9GpRzcF67yqnS9tLHUvVfgDz/ZF8gAAAHjabc25DgFhGIXh/53B2Pd9J9HPN/bSWolC4iI0OjfgxhFO6SQnT/k6z333errI/dvkc5yHh+98YsRJEJAkRZoMWXLkKVCkRJkKVWrUadCkRZsOXXr0GTBkxDh2vp5O3u4SPO63YxiG0mQkp3Im53Ihl3Il13Ijt3In9/Igjz9NfVPf1Df1TX1T39Q39U19U9/UN/VNfVPfDm8tR0peAAB42mNgYGBkAIKLcceVwfQJ+XIoXQEARe8GegAA) format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.simditor-icon {\n  display: inline-block;\n  font: normal normal normal 14px/1 'Simditor';\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n     -moz-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.simditor-icon-code:before {\n  content: '\\F000'; }\n\n.simditor-icon-bold:before {\n  content: '\\F001'; }\n\n.simditor-icon-italic:before {\n  content: '\\F002'; }\n\n.simditor-icon-underline:before {\n  content: '\\F003'; }\n\n.simditor-icon-times:before {\n  content: '\\F004'; }\n\n.simditor-icon-strikethrough:before {\n  content: '\\F005'; }\n\n.simditor-icon-list-ol:before {\n  content: '\\F006'; }\n\n.simditor-icon-list-ul:before {\n  content: '\\F007'; }\n\n.simditor-icon-quote-left:before {\n  content: '\\F008'; }\n\n.simditor-icon-table:before {\n  content: '\\F009'; }\n\n.simditor-icon-link:before {\n  content: '\\F00A'; }\n\n.simditor-icon-picture-o:before {\n  content: '\\F00B'; }\n\n.simditor-icon-minus:before {\n  content: '\\F00C'; }\n\n.simditor-icon-indent:before {\n  content: '\\F00D'; }\n\n.simditor-icon-outdent:before {\n  content: '\\F00E'; }\n\n.simditor-icon-unlink:before {\n  content: '\\F00F'; }\n\n.simditor-icon-caret-down:before {\n  content: '\\F010'; }\n\n.simditor-icon-caret-right:before {\n  content: '\\F011'; }\n\n.simditor-icon-upload:before {\n  content: '\\F012'; }\n\n.simditor-icon-undo:before {\n  content: '\\F013'; }\n\n.simditor-icon-smile-o:before {\n  content: '\\F014'; }\n\n.simditor-icon-tint:before {\n  content: '\\F015'; }\n\n.simditor-icon-font:before {\n  content: '\\F016'; }\n\n.simditor-icon-html5:before {\n  content: '\\F017'; }\n\n.simditor-icon-mark:before {\n  content: '\\F018'; }\n\n.simditor-icon-align-center:before {\n  content: '\\F019'; }\n\n.simditor-icon-align-left:before {\n  content: '\\F01A'; }\n\n.simditor-icon-align-right:before {\n  content: '\\F01B'; }\n\n.simditor-icon-font-minus:before {\n  content: '\\F01C'; }\n\n.simditor-icon-markdown:before {\n  content: '\\F01D'; }\n\n.simditor-icon-checklist:before {\n  content: '\\F01E'; }\n\n.simditor {\n  position: relative;\n  border: 1px solid #c9d8db; }\n  .simditor .simditor-wrapper {\n    position: relative;\n    background: #ffffff; }\n    .simditor .simditor-wrapper > textarea {\n      display: none !important;\n      width: 100%;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box;\n      font-family: monaco;\n      font-size: 16px;\n      line-height: 1.6;\n      border: none;\n      padding: 22px 15px 40px;\n      min-height: 300px;\n      outline: none;\n      background: transparent;\n      resize: none; }\n    .simditor .simditor-wrapper .simditor-placeholder {\n      display: none;\n      position: absolute;\n      left: 0;\n      z-index: 0;\n      padding: 22px 15px;\n      font-size: 16px;\n      font-family: arial, sans-serif;\n      line-height: 1.5;\n      color: #999999;\n      background: transparent; }\n    .simditor .simditor-wrapper.toolbar-floating .simditor-toolbar {\n      position: fixed;\n      top: 0;\n      z-index: 10;\n      -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n         -moz-box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n              box-shadow: 0 0 6px rgba(0, 0, 0, 0.1); }\n    .simditor .simditor-wrapper .simditor-image-loading {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 2; }\n      .simditor .simditor-wrapper .simditor-image-loading .progress {\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.4);\n        position: absolute;\n        bottom: 0;\n        left: 0; }\n  .simditor .simditor-body {\n    padding: 22px 15px 40px;\n    min-height: 300px;\n    outline: none;\n    cursor: text;\n    position: relative;\n    z-index: 1;\n    background: transparent; }\n    .simditor .simditor-body a.selected {\n      background: #b3d4fd; }\n    .simditor .simditor-body a.simditor-mention {\n      cursor: pointer; }\n    .simditor .simditor-body .simditor-table {\n      position: relative; }\n      .simditor .simditor-body .simditor-table.resizing {\n        cursor: col-resize; }\n      .simditor .simditor-body .simditor-table .simditor-resize-handle {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 10px;\n        height: 100%;\n        cursor: col-resize; }\n    .simditor .simditor-body pre {\n      /*min-height: 28px;*/\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      word-wrap: break-word !important;\n      white-space: pre-wrap !important; }\n    .simditor .simditor-body img {\n      cursor: pointer; }\n      .simditor .simditor-body img.selected {\n        -webkit-box-shadow: 0 0 0 4px #cccccc;\n           -moz-box-shadow: 0 0 0 4px #cccccc;\n                box-shadow: 0 0 0 4px #cccccc; }\n  .simditor .simditor-paste-bin {\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    width: 1px;\n    height: 20px;\n    font-size: 1px;\n    line-height: 1px;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    -webkit-user-select: text; }\n  .simditor .simditor-toolbar {\n    border-bottom: 1px solid #eeeeee;\n    background: #ffffff;\n    width: 100%; }\n    .simditor .simditor-toolbar > ul {\n      margin: 0;\n      padding: 0 0 0 6px;\n      list-style: none; }\n      .simditor .simditor-toolbar > ul > li {\n        position: relative;\n        display: inline-block;\n        font-size: 0; }\n        .simditor .simditor-toolbar > ul > li > span.separator {\n          display: inline-block;\n          background: #cfcfcf;\n          width: 1px;\n          height: 18px;\n          margin: 11px 15px;\n          vertical-align: middle; }\n        .simditor .simditor-toolbar > ul > li > .toolbar-item {\n          display: inline-block;\n          width: 46px;\n          height: 40px;\n          outline: none;\n          color: #333333;\n          font-size: 15px;\n          line-height: 40px;\n          vertical-align: middle;\n          text-align: center;\n          text-decoration: none; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item span {\n            opacity: 0.6; }\n            .simditor .simditor-toolbar > ul > li > .toolbar-item span.simditor-icon {\n              display: inline;\n              line-height: normal; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item:hover span {\n            opacity: 1; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.active {\n            background: #eeeeee; }\n            .simditor .simditor-toolbar > ul > li > .toolbar-item.active span {\n              opacity: 1; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.disabled {\n            cursor: default; }\n            .simditor .simditor-toolbar > ul > li > .toolbar-item.disabled span {\n              opacity: 0.3; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-title span:before {\n            content: \"H\";\n            font-size: 19px;\n            font-weight: bold;\n            font-family: 'Times New Roman'; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-title.active-h1 span:before {\n            content: 'H1';\n            font-size: 18px; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-title.active-h2 span:before {\n            content: 'H2';\n            font-size: 18px; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-title.active-h3 span:before {\n            content: 'H3';\n            font-size: 18px; }\n          .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-image {\n            position: relative;\n            overflow: hidden; }\n            .simditor .simditor-toolbar > ul > li > .toolbar-item.toolbar-item-image > input[type=file] {\n              position: absolute;\n              right: 0px;\n              top: 0px;\n              opacity: 0;\n              font-size: 100px;\n              cursor: pointer; }\n        .simditor .simditor-toolbar > ul > li.menu-on .toolbar-item {\n          position: relative;\n          z-index: 20;\n          background: #ffffff;\n          -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n             -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n                  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3); }\n          .simditor .simditor-toolbar > ul > li.menu-on .toolbar-item span {\n            opacity: 1; }\n        .simditor .simditor-toolbar > ul > li.menu-on .toolbar-menu {\n          display: block; }\n    .simditor .simditor-toolbar .toolbar-menu {\n      display: none;\n      position: absolute;\n      top: 40px;\n      left: 0;\n      z-index: 21;\n      background: #ffffff;\n      text-align: left;\n      -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n         -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n              box-shadow: 0 0 4px rgba(0, 0, 0, 0.3); }\n      .simditor .simditor-toolbar .toolbar-menu:before {\n        content: '';\n        display: block;\n        width: 46px;\n        height: 4px;\n        background: #ffffff;\n        position: absolute;\n        top: -3px;\n        left: 0; }\n      .simditor .simditor-toolbar .toolbar-menu ul {\n        min-width: 160px;\n        list-style: none;\n        margin: 0;\n        padding: 10px 1px; }\n        .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item {\n          display: block;\n          font-size: 16px;\n          line-height: 2em;\n          padding: 0 10px;\n          text-decoration: none;\n          color: #666666; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item:hover {\n            background: #f6f6f6; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item.menu-item-h1 {\n            font-size: 24px;\n            color: #333333; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item.menu-item-h2 {\n            font-size: 22px;\n            color: #333333; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item.menu-item-h3 {\n            font-size: 20px;\n            color: #333333; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item.menu-item-h4 {\n            font-size: 18px;\n            color: #333333; }\n          .simditor .simditor-toolbar .toolbar-menu ul > li .menu-item.menu-item-h5 {\n            font-size: 16px;\n            color: #333333; }\n        .simditor .simditor-toolbar .toolbar-menu ul > li .separator {\n          display: block;\n          border-top: 1px solid #cccccc;\n          height: 0;\n          line-height: 0;\n          font-size: 0;\n          margin: 6px 0; }\n      .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color {\n        width: 96px; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list {\n          height: 40px;\n          margin: 10px 6px 6px 10px;\n          padding: 0;\n          min-width: 0; }\n          .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li {\n            float: left;\n            margin: 0 4px 4px 0; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color {\n              display: block;\n              width: 16px;\n              height: 16px;\n              background: #dfdfdf;\n              -webkit-border-radius: 2px;\n                 -moz-border-radius: 2px;\n                      border-radius: 2px; }\n              .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color:hover {\n                opacity: 0.8; }\n              .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color.font-color-default {\n                background: #333333; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-1 {\n              background: #E33737; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-2 {\n              background: #e28b41; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-3 {\n              background: #c8a732; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-4 {\n              background: #209361; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-5 {\n              background: #418caf; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-6 {\n              background: #aa8773; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-color .color-list li .font-color-7 {\n              background: #999999; }\n      .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-create-table {\n        background: #ffffff;\n        padding: 1px; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-create-table table {\n          border: none;\n          border-collapse: collapse;\n          border-spacing: 0;\n          table-layout: fixed; }\n          .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-create-table table td {\n            padding: 0;\n            cursor: pointer; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-create-table table td:before {\n              width: 16px;\n              height: 16px;\n              border: 1px solid #ffffff;\n              background: #f3f3f3;\n              display: block;\n              content: ''; }\n            .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-create-table table td.selected:before {\n              background: #cfcfcf; }\n      .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-edit-table {\n        display: none; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-table .menu-edit-table ul li {\n          white-space: nowrap; }\n      .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-image .menu-item-upload-image {\n        position: relative;\n        overflow: hidden; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-image .menu-item-upload-image input[type=file] {\n          position: absolute;\n          right: 0px;\n          top: 0px;\n          opacity: 0;\n          font-size: 100px;\n          cursor: pointer; }\n      .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-alignment {\n        width: 100%; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-alignment ul {\n          min-width: 100%; }\n        .simditor .simditor-toolbar .toolbar-menu.toolbar-menu-alignment .menu-item {\n          text-align: center; }\n  .simditor .simditor-popover {\n    display: none;\n    padding: 5px 8px 0;\n    background: #ffffff;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n       -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    -webkit-border-radius: 2px;\n       -moz-border-radius: 2px;\n            border-radius: 2px;\n    position: absolute;\n    z-index: 2; }\n    .simditor .simditor-popover .settings-field {\n      margin: 0 0 5px 0;\n      font-size: 12px;\n      height: 25px;\n      line-height: 25px; }\n      .simditor .simditor-popover .settings-field label {\n        display: inline-block;\n        margin: 0 5px 0 0; }\n      .simditor .simditor-popover .settings-field input[type=text] {\n        display: inline-block;\n        width: 200px;\n        -webkit-box-sizing: border-box;\n           -moz-box-sizing: border-box;\n                box-sizing: border-box;\n        font-size: 12px; }\n        .simditor .simditor-popover .settings-field input[type=text].image-size {\n          width: 83px; }\n      .simditor .simditor-popover .settings-field .times {\n        display: inline-block;\n        width: 26px;\n        font-size: 12px;\n        text-align: center; }\n    .simditor .simditor-popover.link-popover .btn-unlink,\n    .simditor .simditor-popover.image-popover .btn-upload,\n    .simditor .simditor-popover.image-popover .btn-restore {\n      display: inline-block;\n      margin: 0 0 0 5px;\n      color: #333333;\n      font-size: 14px;\n      outline: 0; }\n      .simditor .simditor-popover.link-popover .btn-unlink span,\n      .simditor .simditor-popover.image-popover .btn-upload span,\n      .simditor .simditor-popover.image-popover .btn-restore span {\n        opacity: 0.6; }\n      .simditor .simditor-popover.link-popover .btn-unlink:hover span,\n      .simditor .simditor-popover.image-popover .btn-upload:hover span,\n      .simditor .simditor-popover.image-popover .btn-restore:hover span {\n        opacity: 1; }\n    .simditor .simditor-popover.image-popover .btn-upload {\n      position: relative;\n      display: inline-block;\n      overflow: hidden;\n      vertical-align: middle; }\n      .simditor .simditor-popover.image-popover .btn-upload input[type=file] {\n        position: absolute;\n        right: 0px;\n        top: 0px;\n        opacity: 0;\n        height: 100%;\n        width: 28px; }\n  .simditor.simditor-mobile .simditor-wrapper.toolbar-floating .simditor-toolbar {\n    position: absolute;\n    top: 0;\n    z-index: 10;\n    -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n       -moz-box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 6px rgba(0, 0, 0, 0.1); }\n\n.simditor .simditor-body, .editor-style {\n  font-size: 16px;\n  font-family: arial, sans-serif;\n  line-height: 1.6;\n  color: #333;\n  outline: none;\n  word-wrap: break-word; }\n  .simditor .simditor-body > :first-child, .editor-style > :first-child {\n    margin-top: 0 !important; }\n  .simditor .simditor-body a, .editor-style a {\n    color: #4298BA;\n    text-decoration: none;\n    word-break: break-all; }\n  .simditor .simditor-body a:visited, .editor-style a:visited {\n    color: #4298BA; }\n  .simditor .simditor-body a:hover, .editor-style a:hover {\n    color: #0F769F; }\n  .simditor .simditor-body a:active, .editor-style a:active {\n    color: #9E792E; }\n  .simditor .simditor-body a:hover, .simditor .simditor-body a:active, .editor-style a:hover, .editor-style a:active {\n    outline: 0; }\n  .simditor .simditor-body h1, .simditor .simditor-body h2, .simditor .simditor-body h3, .simditor .simditor-body h4, .simditor .simditor-body h5, .simditor .simditor-body h6, .editor-style h1, .editor-style h2, .editor-style h3, .editor-style h4, .editor-style h5, .editor-style h6 {\n    font-weight: normal;\n    margin: 40px 0 20px;\n    color: #000000; }\n  .simditor .simditor-body h1, .editor-style h1 {\n    font-size: 24px; }\n  .simditor .simditor-body h2, .editor-style h2 {\n    font-size: 22px; }\n  .simditor .simditor-body h3, .editor-style h3 {\n    font-size: 20px; }\n  .simditor .simditor-body h4, .editor-style h4 {\n    font-size: 18px; }\n  .simditor .simditor-body h5, .editor-style h5 {\n    font-size: 16px; }\n  .simditor .simditor-body h6, .editor-style h6 {\n    font-size: 16px; }\n  .simditor .simditor-body p, .simditor .simditor-body div, .editor-style p, .editor-style div {\n    word-wrap: break-word;\n    margin: 0 0 15px 0;\n    color: #333;\n    word-wrap: break-word; }\n  .simditor .simditor-body b, .simditor .simditor-body strong, .editor-style b, .editor-style strong {\n    font-weight: bold; }\n  .simditor .simditor-body i, .simditor .simditor-body em, .editor-style i, .editor-style em {\n    font-style: italic; }\n  .simditor .simditor-body u, .editor-style u {\n    text-decoration: underline; }\n  .simditor .simditor-body strike, .simditor .simditor-body del, .editor-style strike, .editor-style del {\n    text-decoration: line-through; }\n  .simditor .simditor-body ul, .simditor .simditor-body ol, .editor-style ul, .editor-style ol {\n    list-style: disc outside none;\n    margin: 15px 0;\n    padding: 0 0 0 40px;\n    line-height: 1.6; }\n    .simditor .simditor-body ul li, .simditor .simditor-body ol li, .editor-style ul li, .editor-style ol li {\n      list-style-type: inherit; }\n    .simditor .simditor-body ul ul, .simditor .simditor-body ul ol, .simditor .simditor-body ol ul, .simditor .simditor-body ol ol, .editor-style ul ul, .editor-style ul ol, .editor-style ol ul, .editor-style ol ol {\n      padding-left: 30px; }\n    .simditor .simditor-body ul ul, .simditor .simditor-body ol ul, .editor-style ul ul, .editor-style ol ul {\n      list-style: circle outside none; }\n      .simditor .simditor-body ul ul ul, .simditor .simditor-body ol ul ul, .editor-style ul ul ul, .editor-style ol ul ul {\n        list-style: square outside none; }\n  .simditor .simditor-body ol, .editor-style ol {\n    list-style: decimal; }\n  .simditor .simditor-body blockquote, .editor-style blockquote {\n    border-left: 6px solid #ddd;\n    padding: 5px 0 5px 10px;\n    margin: 15px 0 15px 15px; }\n    .simditor .simditor-body blockquote > :first-child, .editor-style blockquote > :first-child {\n      margin-top: 0; }\n  .simditor .simditor-body code, .editor-style code {\n    display: inline-block;\n    padding: 0 4px;\n    margin: 0 5px;\n    background: #eeeeee;\n    -webkit-border-radius: 3px;\n       -moz-border-radius: 3px;\n            border-radius: 3px;\n    font-size: 13px;\n    font-family: 'monaco', 'Consolas', \"Liberation Mono\", Courier, monospace; }\n  .simditor .simditor-body pre, .editor-style pre {\n    padding: 10px 5px 10px 10px;\n    margin: 15px 0;\n    display: block;\n    line-height: 18px;\n    background: #F0F0F0;\n    -webkit-border-radius: 3px;\n       -moz-border-radius: 3px;\n            border-radius: 3px;\n    font-size: 13px;\n    font-family: 'monaco', 'Consolas', \"Liberation Mono\", Courier, monospace;\n    white-space: pre;\n    word-wrap: normal;\n    overflow-x: auto; }\n    .simditor .simditor-body pre code, .editor-style pre code {\n      display: block;\n      padding: 0;\n      margin: 0;\n      background: none;\n      -webkit-border-radius: 0;\n         -moz-border-radius: 0;\n              border-radius: 0; }\n  .simditor .simditor-body hr, .editor-style hr {\n    display: block;\n    height: 0px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 15px 0;\n    padding: 0; }\n  .simditor .simditor-body table, .editor-style table {\n    width: 100%;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin: 15px 0; }\n    .simditor .simditor-body table thead, .editor-style table thead {\n      background-color: #f9f9f9; }\n    .simditor .simditor-body table td, .simditor .simditor-body table th, .editor-style table td, .editor-style table th {\n      min-width: 40px;\n      height: 30px;\n      border: 1px solid #ccc;\n      vertical-align: top;\n      padding: 2px 4px;\n      text-align: left;\n      -webkit-box-sizing: border-box;\n         -moz-box-sizing: border-box;\n              box-sizing: border-box; }\n      .simditor .simditor-body table td.active, .simditor .simditor-body table th.active, .editor-style table td.active, .editor-style table th.active {\n        background-color: #ffffee; }\n  .simditor .simditor-body img, .editor-style img {\n    margin: 0 5px;\n    vertical-align: middle; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);