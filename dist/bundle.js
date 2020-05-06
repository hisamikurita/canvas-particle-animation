!function(t){var n={};function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(i,a,function(n){return t[n]}.bind(null,a));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e.r(n);var a=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a;return n=t,a=[{key:"norm",value:function(t,n,e){return(t-n)/(e-n)}},{key:"lerp",value:function(t,n,e){return(e-n)*t+n}},{key:"map",value:function(n,e,i,a,r){return t.lerp(t.norm(n,e,i),a,r)}},{key:"clamp",value:function(t,n,e){return Math.min(Math.max(t,Math.min(n,e)),Math.max(n,e))}},{key:"distance",value:function(t,n){var e=n.x-t.x,i=n.y-t.y;return Math.sqrt(e*e+i*i)}},{key:"distanceXY",value:function(t,n,e,i){var a=e-t,r=i-n;return Math.sqrt(a*a+r*r)}},{key:"circleCollision",value:function(n,e){return t.distance(n,e)<=n.radius+e.radius}},{key:"circlePointCollision",value:function(n,e,i){return t.distanceXY(n,e,i.x,i.y)<i.radius}},{key:"pointInRect",value:function(n,e,i){return t.inRange(n,i.x,i.x+i.width)&&t.inRange(e,i.y,i.y+i.height)}},{key:"inRange",value:function(t,n,e){return t>=Math.min(n,e)&&t<=Math.max(n,e)}},{key:"rangeIntersect",value:function(t,n,e,i){return Math.max(t,n)>=Math.min(e,i)&&Math.min(t,n)<=Math.max(e,i)}},{key:"rectIntersect",value:function(n,e){return t.rangeIntersect(n.x,n.x+n.width,e.x,e.x+e.width)&&t.rangeIntersect(n.y,n.y+n.height,e.y,e.y+e.height)}},{key:"degreesToRads",value:function(t){return t/180*Math.PI}},{key:"radsToDegrees",value:function(t){return 180*t/Math.PI}},{key:"randomRange",value:function(t,n){return t+Math.random()*(n-t)}},{key:"randomInt",value:function(t,n){return Math.floor(t+Math.random()*(n-t+1))}},{key:"randomDist",value:function(n,e,i){for(var a=0,r=0;r<i;r+=1)a+=t.randomRange(n,e);return a/i}},{key:"randomColor",value:function(t){return t[Math.floor(Math.random()*t.length)]}}],(e=null)&&i(n.prototype,e),a&&i(n,a),t}();function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o={};window.addEventListener("mousemove",(function(t){o.x=t.clientX,o.y=t.clientY}));var u=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=canvas,this.ctx=canvas.getContext("2d"),this.color="#645f5a",this.x=this.canvas.width+Math.random(),this.y=this.canvas.height+Math.random(),this.dest={x:n,y:e},this.radius=2.5*Math.random()+1,this.vx=20*(Math.random()-.5),this.vy=20*(Math.random()-.5),this.friction=.05*Math.random()+.94,this.ax=0,this.ay=0}var n,e,i;return n=t,(e=[{key:"update",value:function(){this.ax=(this.dest.x-this.x)/100,this.ay=(this.dest.x-this.y)/100,this.vx+=this.ax,this.vy+=this.ay,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,this.dist<30*this.radius&&(this.vx+=this.ax*o.x/10,this.vy+=this.ay*o.y/10)}},{key:"draw",value:function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.dist<30*this.radius&&(this.ctx.fillStyle="#87d7f2"),this.ctx.fill()}},{key:"resize",value:function(){this.distancex=a.randomDist(this.canvas.width/12,this.canvas.width/6+150,2),this.distancey=a.randomDist(this.canvas.height/12,this.canvas.height/1.8+200,6)}},{key:"mousemove",value:function(){this.dist=a.distanceXY(this.x,this.y,o.x,o.y)}}])&&r(n.prototype,e),i&&r(n,i),t}();!function(){window.addEventListener("load",(function(){!function(){window.onresize=function(){i=n.width=window.innerWidth,a=n.height=window.innerHeight,r.forEach((function(t){t.resize()}))},function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t}(),e.font="bold "+i/10+"px sans-serif",e.textAlign="center",e.baseline="middle",e.fillText("Hisami Kurita",i/2,a/2);for(var t=e.getImageData(0,0,i,a).data,s=0;s<i;s+=Math.round(i/150))for(var h=0;h<i;h+=Math.round(i/150))t[4*(s+h*i)+3]>150&&r.push(new u(s,h));o=r.length}(),s()}));var t,n=document.querySelector("#canvas"),e=n.getContext("2d"),i=n.width=window.innerWidth,a=n.height=window.innerHeight,r=[],o=0;function s(){for(var n=0;n<o;n++)(t=r[n]).update(),t.draw();requestAnimationFrame(s)}}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJub3JtIiwic291cmNlTWluIiwic291cmNlTWF4IiwiZGVzdE1pbiIsImRlc3RNYXgiLCJsZXJwIiwiTWF0aCIsInAwIiwicDEiLCJkeCIsIngiLCJkeSIsInkiLCJzcXJ0IiwieDAiLCJ5MCIsIngxIiwieTEiLCJjMCIsImMxIiwiZGlzdGFuY2UiLCJyYWRpdXMiLCJjaXJjbGUiLCJkaXN0YW5jZVhZIiwicmVjdCIsImluUmFuZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1pbjAiLCJtYXgwIiwibWluMSIsIm1heDEiLCJyMCIsInIxIiwicmFuZ2VJbnRlcnNlY3QiLCJkZWdyZWVzIiwiUEkiLCJyYWRpYW5zIiwicmFuZG9tIiwiZmxvb3IiLCJpdGVyYXRpb25zIiwidG90YWwiLCJyYW5kb21SYW5nZSIsImNvbG9ycyIsImxlbmd0aCIsIm1vdXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJQYXJ0aWNsZSIsInRoaXMiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3IiLCJkZXN0IiwidngiLCJ2eSIsImZyaWN0aW9uIiwiYXgiLCJheSIsImRpc3QiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZGlzdGFuY2V4IiwicmFuZG9tRGlzdCIsImRpc3RhbmNleSIsIm9ucmVzaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGFydGljbGVzIiwiZm9yRWFjaCIsInBhcnRpY2xlIiwicmVzaXplIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmb250IiwidGV4dEFsaWduIiwiYmFzZWxpbmUiLCJmaWxsVGV4dCIsImltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJkYXRhIiwicm91bmQiLCJqIiwicHVzaCIsImFtb3VudCIsImluaXQiLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1cGRhdGUiLCJkcmF3Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVB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U0FDZjlCLEVBQUkrQixTQUFTLGdCQUFpQjNELEVBQVEsRUFBR0MsRUFBUyxHQUdsRCxJQUZBLElBQUkyRCxFQUFVaEMsRUFBSWlDLGFBQWEsRUFBRyxFQUFHN0QsRUFBT0MsR0FBUTZELEtBRTNDM0gsRUFBSSxFQUFHQSxFQUFJNkQsRUFBTzdELEdBQUt5QyxLQUFLbUYsTUFBTS9ELEVBQVEsS0FDL0MsSUFBSyxJQUFJZ0UsRUFBSSxFQUFHQSxFQUFJaEUsRUFBT2dFLEdBQUtwRixLQUFLbUYsTUFBTS9ELEVBQVEsS0FDM0M0RCxFQUEyQixHQUFqQnpILEVBQUk2SCxFQUFJaEUsR0FBYyxHQUFLLEtBQ3JDZ0QsRUFBVWlCLEtBQUssSUFBSXhDLEVBQVN0RixFQUFHNkgsSUFJM0NFLEVBQVNsQixFQUFVOUIsT0ExQ25CaUQsR0FDQUMsT0FHSixJQUlJbkcsRUFKQTBELEVBQVMwQyxTQUFTQyxjQUFjLFdBQ2hDMUMsRUFBTUQsRUFBT0UsV0FBVyxNQUN4QjdCLEVBQVEyQixFQUFPM0IsTUFBUW9CLE9BQU8wQixXQUM5QjdDLEVBQVMwQixFQUFPMUIsT0FBU21CLE9BQU8yQixZQUM3QkMsRUFBWSxHQUFJa0IsRUFBUyxFQXFDaEMsU0FBU0UsSUFFTCxJQUFLLElBQUlqSSxFQUFJLEVBQUdBLEVBQUkrSCxFQUFRL0gsS0FDeEI4QixFQUFJK0UsRUFBVTdHLElBQ1pvSSxTQUNGdEcsRUFBRXVHLE9BRU5wQixzQkFBc0JnQixJQXZEOUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAgIHN0YXRpYyBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbGVycChub3JtLCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiAobWF4IC0gbWluKSAqIG5vcm0gKyBtaW47XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWFwKHZhbHVlLCBzb3VyY2VNaW4sIHNvdXJjZU1heCwgZGVzdE1pbiwgZGVzdE1heCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5sZXJwKFV0aWxzLm5vcm0odmFsdWUsIHNvdXJjZU1pbiwgc291cmNlTWF4KSwgZGVzdE1pbiwgZGVzdE1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4obWluLCBtYXgpKSwgTWF0aC5tYXgobWluLCBtYXgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzdGFuY2UocDAsIHAxKSB7XHJcbiAgICAgICAgdmFyIGR4ID0gcDEueCAtIHAwLngsXHJcbiAgICAgICAgICAgIGR5ID0gcDEueSAtIHAwLnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3RhbmNlWFkoeDAsIHkwLCB4MSwgeTEpIHtcclxuICAgICAgICB2YXIgZHggPSB4MSAtIHgwLFxyXG4gICAgICAgICAgICBkeSA9IHkxIC0geTA7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNpcmNsZUNvbGxpc2lvbihjMCwgYzEpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZGlzdGFuY2UoYzAsIGMxKSA8PSBjMC5yYWRpdXMgKyBjMS5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNpcmNsZVBvaW50Q29sbGlzaW9uKHgsIHksIGNpcmNsZSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5kaXN0YW5jZVhZKHgsIHksIGNpcmNsZS54LCBjaXJjbGUueSkgPCBjaXJjbGUucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwb2ludEluUmVjdCh4LCB5LCByZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmluUmFuZ2UoeCwgcmVjdC54LCByZWN0LnggKyByZWN0LndpZHRoKSAmJlxyXG4gICAgICAgICAgICBVdGlscy5pblJhbmdlKHksIHJlY3QueSwgcmVjdC55ICsgcmVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpblJhbmdlKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSBNYXRoLm1pbihtaW4sIG1heCkgJiYgdmFsdWUgPD0gTWF0aC5tYXgobWluLCBtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5nZUludGVyc2VjdChtaW4wLCBtYXgwLCBtaW4xLCBtYXgxKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG1pbjAsIG1heDApID49IE1hdGgubWluKG1pbjEsIG1heDEpICYmXHJcbiAgICAgICAgICAgIE1hdGgubWluKG1pbjAsIG1heDApIDw9IE1hdGgubWF4KG1pbjEsIG1heDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWN0SW50ZXJzZWN0KHIwLCByMSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5yYW5nZUludGVyc2VjdChyMC54LCByMC54ICsgcjAud2lkdGgsIHIxLngsIHIxLnggKyByMS53aWR0aCkgJiZcclxuICAgICAgICAgICAgVXRpbHMucmFuZ2VJbnRlcnNlY3QocjAueSwgcjAueSArIHIwLmhlaWdodCwgcjEueSwgcjEueSArIHIxLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlZ3JlZXNUb1JhZHMoZGVncmVlcykge1xyXG4gICAgICAgIHJldHVybiBkZWdyZWVzIC8gMTgwICogTWF0aC5QSTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFkc1RvRGVncmVlcyhyYWRpYW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21SYW5nZShtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21EaXN0KG1pbiwgbWF4LCBpdGVyYXRpb25zKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gVXRpbHMucmFuZG9tUmFuZ2UobWluLCBtYXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWwgLyBpdGVyYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21Db2xvcihjb2xvcnMpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuY29uc3QgbW91c2UgPSB7fTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBtb3VzZS54ID0gZXZlbnQuY2xpZW50WDtcclxuICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WTtcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB0aGlzLmNvbG9yID0gJyM2NDVmNWEnO1xyXG4gICAgdGhpcy54ID0gdGhpcy5jYW52YXMud2lkdGggKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0ICsgTWF0aC5yYW5kb20oKTtcclxuICAgIHRoaXMuZGVzdCA9IHtcclxuICAgICAgeDogeCxcclxuICAgICAgeTogeVxyXG4gICAgfVxyXG4gICAgdGhpcy5yYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMi41ICsgMTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDtcclxuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMC4wNSArIDAuOTQ7XHJcbiAgICB0aGlzLmF4ID0gMDtcclxuICAgIHRoaXMuYXkgPSAwO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmF4ID0gKHRoaXMuZGVzdC54IC0gdGhpcy54KSAvIDEwMDtcclxuICAgIHRoaXMuYXkgPSAodGhpcy5kZXN0LnggLSB0aGlzLnkpIC8gMTAwO1xyXG4gICAgdGhpcy52eCArPSB0aGlzLmF4O1xyXG4gICAgdGhpcy52eSArPSB0aGlzLmF5O1xyXG4gICAgdGhpcy52eCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgdGhpcy52eSAqPSB0aGlzLmZyaWN0aW9uO1xyXG5cclxuICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgICBpZiAodGhpcy5kaXN0IDwgdGhpcy5yYWRpdXMgKiAzMCkge1xyXG4gICAgICB0aGlzLnZ4ICs9IHRoaXMuYXggKiBtb3VzZS54IC8gMTA7XHJcbiAgICAgIHRoaXMudnkgKz0gdGhpcy5heSAqIG1vdXNlLnkgLyAxMDtcclxuICAgIH1cclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBpZiAodGhpcy5kaXN0IDwgdGhpcy5yYWRpdXMgKiAzMCkge1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzg3ZDdmMic7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eC5maWxsKClcclxuICB9XHJcbiAgcmVzaXplKCkge1xyXG4gICAgdGhpcy5kaXN0YW5jZXggPSBVdGlscy5yYW5kb21EaXN0KHRoaXMuY2FudmFzLndpZHRoIC8gMTIsIHRoaXMuY2FudmFzLndpZHRoIC8gNiArIDE1MCwgMik7XHJcbiAgICB0aGlzLmRpc3RhbmNleSA9IFV0aWxzLnJhbmRvbURpc3QodGhpcy5jYW52YXMuaGVpZ2h0IC8gMTIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOCArIDIwMCwgNik7XHJcbiAgfVxyXG4gIG1vdXNlbW92ZSgpIHtcclxuICAgIHRoaXMuZGlzdCA9IFV0aWxzLmRpc3RhbmNlWFkodGhpcy54LCB0aGlzLnksIG1vdXNlLngsIG1vdXNlLnkpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBhcnRpY2xlIH0gZnJvbSAnLi9wYXJ0aWNsZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbigoKSA9PiB7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpLFxyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIiksXHJcbiAgICAgICAgd2lkdGggPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIHAsIHBhcnRpY2xlcyA9IFtdLCBhbW91bnQgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICBwYXJ0aWNsZXMuZm9yRWFjaCgocGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuXHJcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgXCIgKyAod2lkdGggLyAxMCkgKyBcInB4IHNhbnMtc2VyaWZcIjtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgY3R4LmJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KCdIaXNhbWkgS3VyaXRhJywgd2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICB2YXIgaW1nRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSBNYXRoLnJvdW5kKHdpZHRoIC8gMTUwKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHdpZHRoOyBqICs9IE1hdGgucm91bmQod2lkdGggLyAxNTApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nRGF0YVsoKGkgKyBqICogd2lkdGgpICogNCkgKyAzXSA+IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShpLCBqKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW1vdW50ID0gcGFydGljbGVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHAgPSBwYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgIHAudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHAuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9