/*

Balloons: GameArtForge - http://opengameart.org/users/gameartforge
Sky background: Downdate - http://opengameart.org/users/downdate

*/
(function(e){Number.prototype.map=function(e,t,n,r){return n+(r-n)*((this-e)/(t-e))},Number.prototype
.limit=function(e,t){return Math.min(t,Math.max(e,this))},Number.prototype.round=function(e){return e=
Math.pow(10,e||0),Math.round(this*e)/e},Number.prototype.floor=function(){return Math.floor(this)},Number
.prototype.ceil=function(){return Math.ceil(this)},Number.prototype.toInt=function(){return this|0},Number
.prototype.toRad=function(){return this/180*Math.PI},Number.prototype.toDeg=function(){return 180*this/
Math.PI},Array.prototype.erase=function(e){for(var t=this.length;t--;)this[t]===e&&this.splice(t,1);return this
},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Function.prototype
.bind=Function.prototype.bind||function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"
);var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof 
r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new 
r,i},e.ig={game:null,debug:null,version:"1.22",global:e,modules:{},resources:[],ready:!1,baked:!1,nocache
:"",ua:{},prefix:e.ImpactPrefix||"",lib:"lib/",_current:null,_loadQueue:[],_waitForOnload:0,$:function(
e){return"#"==e.charAt(0)?document.getElementById(e.substr(1)):document.getElementsByTagName(e)},$new
:function(e){return document.createElement(e)},copy:function(e){if(!e||"object"!=typeof e||e instanceof 
HTMLElement||e instanceof ig.Class)return e;if(e instanceof Array)for(var t=[],n=0,r=e.length;n<r;n++
)t[n]=ig.copy(e[n]);else for(n in t={},e)t[n]=ig.copy(e[n]);return t},merge:function(e,t){for(var n in 
t){var r=t[n];if("object"!=typeof r||r instanceof HTMLElement||r instanceof ig.Class||null===r)e[n]=r
;else{if(!e[n]||"object"!=typeof e[n])e[n]=r instanceof Array?[]:{};ig.merge(e[n],r)}}return e},ksort
:function(e){if(!e||"object"!=typeof e)return[];var t=[],n=[],r;for(r in e)t.push(r);t.sort();for(r=0
;r<t.length;r++)n.push(e[t[r]]);return n},setVendorAttribute:function(e,t,n){var r=t.charAt(0).toUpperCase
()+t.substr(1);e[t]=e["ms"+r]=e["moz"+r]=e["webkit"+r]=e["o"+r]=n},getVendorAttribute:function(e,t){var n=
t.charAt(0).toUpperCase()+t.substr(1);return e[t]||e["ms"+n]||e["moz"+n]||e["webkit"+n]||e["o"+n]},normalizeVendorAttribute
:function(e,t){var n=ig.getVendorAttribute(e,t);!e[t]&&n&&(e[t]=n)},getImagePixels:function(e,t,n,r,i
){var s=ig.$new("canvas");s.width=e.width,s.height=e.height;var o=s.getContext("2d");ig.System.SCALE.
CRISP(s,o);var u=ig.getVendorAttribute(o,"backingStorePixelRatio")||1;ig.normalizeVendorAttribute(o,"getImageDataHD"
);var a=e.width/u,f=e.height/u;return s.width=Math.ceil(a),s.height=Math.ceil(f),o.drawImage(e,0,0,a,
f),1===u?o.getImageData(t,n,r,i):o.getImageDataHD(t,n,r,i)},module:function(e){if(ig._current)throw"Module '"+
ig._current.name+"' defines nothing";if(ig.modules[e]&&ig.modules[e].body)throw"Module '"+e+"' is already defined"
;return ig._current={name:e,requires:[],loaded:!1,body:null},ig.modules[e]=ig._current,ig._loadQueue.
push(ig._current),ig},requires:function(){return ig._current.requires=Array.prototype.slice.call(arguments
),ig},defines:function(e){ig._current.body=e,ig._current=null,ig._initDOMReady()},addResource:function(
e){ig.resources.push(e)},setNocache:function(e){ig.nocache=e?"?"+Date.now():""},log:function(){},assert
:function(){},show:function(){},mark:function(){},_loadScript:function(e,t){ig.modules[e]={name:e,requires
:[],loaded:!1,body:null},ig._waitForOnload++;var n=ig.prefix+ig.lib+e.replace(/\./g,"/")+".js"+ig.nocache
,r=ig.$new("script");r.type="text/javascript",r.src=n,r.onload=function(){ig._waitForOnload--,ig._execModules
()},r.onerror=function(){throw"Failed to load module "+e+" at "+n+" required from "+t},ig.$("head")[0
].appendChild(r)},_execModules:function(){for(var e=!1,t=0;t<ig._loadQueue.length;t++){for(var n=ig._loadQueue
[t],r=!0,i=0;i<n.requires.length;i++){var s=n.requires[i];ig.modules[s]?ig.modules[s].loaded||(r=!1):
(r=!1,ig._loadScript(s,n.name))}r&&n.body&&(ig._loadQueue.splice(t,1),n.loaded=!0,n.body(),e=!0,t--)}
if(e)ig._execModules();else if(!ig.baked&&0==ig._waitForOnload&&0!=ig._loadQueue.length){e=[];for(t=0
;t<ig._loadQueue.length;t++){r=[],s=ig._loadQueue[t].requires;for(i=0;i<s.length;i++)n=ig.modules[s[i
]],(!n||!n.loaded)&&r.push(s[i]);e.push(ig._loadQueue[t].name+" (requires: "+r.join(", ")+")")}throw"Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n"+
e.join("\n")}},_DOMReady:function(){if(!ig.modules["dom.ready"].loaded){if(!document.body)return setTimeout
(ig._DOMReady,13);ig.modules["dom.ready"].loaded=!0,ig._waitForOnload--,ig._execModules()}return 0},_boot
:function(){document.location.href.match(/\?nocache/)&&ig.setNocache(!0),ig.ua.pixelRatio=e.devicePixelRatio||1
,ig.ua.viewport={width:e.innerWidth,height:e.innerHeight},ig.ua.screen={width:e.screen.availWidth*ig.
ua.pixelRatio,height:e.screen.availHeight*ig.ua.pixelRatio},ig.ua.iPhone=/iPhone/i.test(navigator.userAgent
),ig.ua.iPhone4=ig.ua.iPhone&&2==ig.ua.pixelRatio,ig.ua.iPad=/iPad/i.test(navigator.userAgent),ig.ua.
android=/android/i.test(navigator.userAgent),ig.ua.winPhone=/Windows Phone/i.test(navigator.userAgent
),ig.ua.iOS=ig.ua.iPhone||ig.ua.iPad,ig.ua.mobile=ig.ua.iOS||ig.ua.android||ig.ua.winPhone||/mobile/i
.test(navigator.userAgent),ig.ua.touchDevice="ontouchstart"in e||e.navigator.msMaxTouchPoints},_initDOMReady
:function(){ig.modules["dom.ready"]?ig._execModules():(ig._boot(),ig.modules["dom.ready"]={requires:[
],loaded:!1,body:null},ig._waitForOnload++,"complete"===document.readyState?ig._DOMReady():(document.
addEventListener("DOMContentLoaded",ig._DOMReady,!1),e.addEventListener("load",ig._DOMReady,!1)))}},ig
.normalizeVendorAttribute(e,"requestAnimationFrame");if(e.requestAnimationFrame){var t=1,n={};e.ig.setAnimation=
function(r,i){var s=t++;n[s]=!0;var o=function(){n[s]&&(e.requestAnimationFrame(o,i),r())};return e.requestAnimationFrame
(o,i),s},e.ig.clearAnimation=function(e){delete n[e]}}else e.ig.setAnimation=function(t){return e.setInterval
(t,1e3/60)},e.ig.clearAnimation=function(t){e.clearInterval(t)};var r=!1,i=/xyz/.test(function(){xyz}
)?/\bparent\b/:/.*/,s=0;e.ig.Class=function(){};var o=function(e){var t=this.prototype,n={},r;for(r in 
e)"function"==typeof e[r]&&"function"==typeof t[r]&&i.test(e[r])?(n[r]=t[r],t[r]=function(e,t){return function(
){var r=this.parent;this.parent=n[e];var i=t.apply(this,arguments);return this.parent=r,i}}(r,e[r])):
t[r]=e[r]};e.ig.Class.extend=function(t){function n(){if(!r){if(this.staticInstantiate){var e=this.staticInstantiate
.apply(this,arguments);if(e)return e}for(var t in this)"object"==typeof this[t]&&(this[t]=ig.copy(this
[t]));this.init&&this.init.apply(this,arguments)}return this}var u=this.prototype;r=!0;var l=new this
;r=!1;for(var c in t)l[c]="function"==typeof t[c]&&"function"==typeof u[c]&&i.test(t[c])?function(e,t
){return function(){var n=this.parent;this.parent=u[e];var r=t.apply(this,arguments);return this.parent=
n,r}}(c,t[c]):t[c];return n.prototype=l,n.prototype.constructor=n,n.extend=e.ig.Class.extend,n.inject=
o,n.classId=l.classId=++s,n},e.ImpactMixin&&ig.merge(ig,e.ImpactMixin)})(window),ig.baked=!0,ig.module
("impact.image").defines(function(){ig.Image=ig.Class.extend({data:null,width:0,height:0,loaded:!1,failed
:!1,loadCallback:null,path:"",staticInstantiate:function(e){return ig.Image.cache[e]||null},init:function(
e){this.path=e,this.load()},load:function(e){this.loaded?e&&e(this.path,!0):(!this.loaded&&ig.ready?(
this.loadCallback=e||null,this.data=new Image,this.data.onload=this.onload.bind(this),this.data.onerror=
this.onerror.bind(this),this.data.src=ig.prefix+this.path+ig.nocache):ig.addResource(this),ig.Image.cache
[this.path]=this)},reload:function(){this.loaded=!1,this.data=new Image,this.data.onload=this.onload.
bind(this),this.data.src=this.path+"?"+Date.now()},onload:function(){this.width=this.data.width,this.
height=this.data.height,this.loaded=!0,1!=ig.system.scale&&this.resize(ig.system.scale),this.loadCallback&&
this.loadCallback(this.path,!0)},onerror:function(){this.failed=!0,this.loadCallback&&this.loadCallback
(this.path,!1)},resize:function(e){var t=ig.getImagePixels(this.data,0,0,this.width,this.height),n=this
.width*e,r=this.height*e,i=ig.$new("canvas");i.width=n,i.height=r;for(var s=i.getContext("2d"),o=s.getImageData
(0,0,n,r),u=0;u<r;u++)for(var a=0;a<n;a++){var f=4*(Math.floor(u/e)*this.width+Math.floor(a/e)),l=4*(
u*n+a);o.data[l]=t.data[f],o.data[l+1]=t.data[f+1],o.data[l+2]=t.data[f+2],o.data[l+3]=t.data[f+3]}s.
putImageData(o,0,0),this.data=i},draw:function(e,t,n,r,i,s){if(this.loaded){var o=ig.system.scale;i=(
i?i:this.width)*o,s=(s?s:this.height)*o,ig.system.context.drawImage(this.data,n?n*o:0,r?r*o:0,i,s,ig.
system.getDrawPos(e),ig.system.getDrawPos(t),i,s),ig.Image.drawCount++}},drawTile:function(e,t,n,r,i,
s,o){i=i?i:r;if(this.loaded&&!(r>this.width||i>this.height)){var u=ig.system.scale,a=Math.floor(r*u),
f=Math.floor(i*u),l=s?-1:1,c=o?-1:1;if(s||o)ig.system.context.save(),ig.system.context.scale(l,c);ig.
system.context.drawImage(this.data,Math.floor(n*r)%this.width*u,Math.floor(n*r/this.width)*i*u,a,f,ig
.system.getDrawPos(e)*l-(s?a:0),ig.system.getDrawPos(t)*c-(o?f:0),a,f),(s||o)&&ig.system.context.restore
(),ig.Image.drawCount++}}}),ig.Image.drawCount=0,ig.Image.cache={},ig.Image.reloadCache=function(){for(
var e in ig.Image.cache)ig.Image.cache[e].reload()}}),ig.baked=!0,ig.module("impact.font").requires("impact.image"
).defines(function(){ig.Font=ig.Image.extend({widthMap:[],indices:[],firstChar:32,alpha:1,letterSpacing
:1,lineSpacing:0,onload:function(e){this._loadMetrics(this.data),this.parent(e)},widthForString:function(
e){if(-1!==e.indexOf("\n")){e=e.split("\n");for(var t=0,n=0;n<e.length;n++)t=Math.max(t,this._widthForLine
(e[n]));return t}return this._widthForLine(e)},_widthForLine:function(e){for(var t=0,n=0;n<e.length;n++
)t+=this.widthMap[e.charCodeAt(n)-this.firstChar]+this.letterSpacing;return t},heightForString:function(
e){return e.split("\n").length*(this.height+this.lineSpacing)},draw:function(e,t,n,r){"string"!=typeof 
e&&(e=e.toString());if(-1!==e.indexOf("\n")){e=e.split("\n");for(var i=this.height+this.lineSpacing,s=0
;s<e.length;s++)this.draw(e[s],t,n+s*i,r)}else{if(r==ig.Font.ALIGN.RIGHT||r==ig.Font.ALIGN.CENTER)s=this
._widthForLine(e),t-=r==ig.Font.ALIGN.CENTER?s/2:s;1!==this.alpha&&(ig.system.context.globalAlpha=this
.alpha);for(s=0;s<e.length;s++)r=e.charCodeAt(s),t+=this._drawChar(r-this.firstChar,t,n);1!==this.alpha&&
(ig.system.context.globalAlpha=1),ig.Image.drawCount+=e.length}},_drawChar:function(e,t,n){if(!this.loaded||0>
e||e>=this.indices.length)return 0;var r=ig.system.scale,i=this.widthMap[e]*r,s=(this.height-2)*r;return ig
.system.context.drawImage(this.data,this.indices[e]*r,0,i,s,ig.system.getDrawPos(t),ig.system.getDrawPos
(n),i,s),this.widthMap[e]+this.letterSpacing},_loadMetrics:function(e){this.height=e.height-1,this.widthMap=
[],this.indices=[];for(var t=ig.getImagePixels(e,0,e.height-1,e.width,1),n=0,r=0,i=0;i<e.width;i++){var s=4*
i+3;127<t.data[s]?r++:128>t.data[s]&&r&&(this.widthMap.push(r),this.indices.push(i-r),n++,r=0)}this.widthMap
.push(r),this.indices.push(i-r)}}),ig.Font.ALIGN={LEFT:0,RIGHT:1,CENTER:2}}),ig.baked=!0,ig.module("impact.sound"
).defines(function(){ig.SoundManager=ig.Class.extend({clips:{},volume:1,format:null,init:function(){if(!
ig.Sound.enabled||!window.Audio)ig.Sound.enabled=!1;else{for(var e=new Audio,t=0;t<ig.Sound.use.length
;t++){var n=ig.Sound.use[t];if(e.canPlayType(n.mime)){this.format=n;break}}this.format||(ig.Sound.enabled=!1
)}},load:function(e,t,n){var r=ig.prefix+e.replace(/[^\.]+$/,this.format.ext)+ig.nocache;if(this.clips
[e]){if(t&&this.clips[e].length<ig.Sound.channels)for(t=this.clips[e].length;t<ig.Sound.channels;t++)
{var i=new Audio(r);i.load(),this.clips[e].push(i)}return this.clips[e][0]}var s=new Audio(r);n&&(s.addEventListener
("canplaythrough",function o(t){s.removeEventListener("canplaythrough",o,!1),n(e,!0,t)},!1),s.addEventListener
("error",function(t){n(e,!1,t)},!1)),s.preload="auto",s.load(),this.clips[e]=[s];if(t)for(t=1;t<ig.Sound
.channels;t++)i=new Audio(r),i.load(),this.clips[e].push(i);return s},get:function(e){e=this.clips[e]
;for(var t=0,n;n=e[t++];)if(n.paused||n.ended)return n.ended&&(n.currentTime=0),n;return e[0].pause()
,e[0].currentTime=0,e[0]}}),ig.Music=ig.Class.extend({tracks:[],namedTracks:{},currentTrack:null,currentIndex
:0,random:!1,_volume:1,_loop:!1,_fadeInterval:0,_fadeTimer:null,_endedCallbackBound:null,init:function(
){this._endedCallbackBound=this._endedCallback.bind(this),Object.defineProperty?(Object.defineProperty
(this,"volume",{get:this.getVolume.bind(this),set:this.setVolume.bind(this)}),Object.defineProperty(this
,"loop",{get:this.getLooping.bind(this),set:this.setLooping.bind(this)})):this.__defineGetter__&&(this
.__defineGetter__("volume",this.getVolume.bind(this)),this.__defineSetter__("volume",this.setVolume.bind
(this)),this.__defineGetter__("loop",this.getLooping.bind(this)),this.__defineSetter__("loop",this.setLooping
.bind(this)))},add:function(e,t){if(ig.Sound.enabled){var n=ig.soundManager.load(e instanceof ig.Sound?
e.path:e,!1);n.loop=this._loop,n.volume=this._volume,n.addEventListener("ended",this._endedCallbackBound
,!1),this.tracks.push(n),t&&(this.namedTracks[t]=n),this.currentTrack||(this.currentTrack=n)}},next:function(
){this.tracks.length&&(this.stop(),this.currentIndex=this.random?Math.floor(Math.random()*this.tracks
.length):(this.currentIndex+1)%this.tracks.length,this.currentTrack=this.tracks[this.currentIndex],this
.play())},pause:function(){this.currentTrack&&this.currentTrack.pause()},stop:function(){this.currentTrack&&
(this.currentTrack.pause(),this.currentTrack.currentTime=0)},play:function(e){if(e&&this.namedTracks[
e])e=this.namedTracks[e],e!=this.currentTrack&&(this.stop(),this.currentTrack=e);else if(!this.currentTrack
)return;this.currentTrack.play()},getLooping:function(){return this._loop},setLooping:function(e){this
._loop=e;for(var t in this.tracks)this.tracks[t].loop=e},getVolume:function(){return this._volume},setVolume
:function(e){this._volume=e.limit(0,1);for(var t in this.tracks)this.tracks[t].volume=this._volume},fadeOut
:function(e){this.currentTrack&&(clearInterval(this._fadeInterval),this.fadeTimer=new ig.Timer(e),this
._fadeInterval=setInterval(this._fadeStep.bind(this),50))},_fadeStep:function(){var e=this.fadeTimer.
delta().map(-this.fadeTimer.target,0,1,0).limit(0,1)*this._volume;.01>=e?(this.stop(),this.currentTrack
.volume=this._volume,clearInterval(this._fadeInterval)):this.currentTrack.volume=e},_endedCallback:function(
){this._loop?this.play():this.next()}}),ig.Sound=ig.Class.extend({path:"",volume:1,currentClip:null,multiChannel
:!0,init:function(e,t){this.path=e,this.multiChannel=!1!==t,this.load()},load:function(e){ig.Sound.enabled?
ig.ready?ig.soundManager.load(this.path,this.multiChannel,e):ig.addResource(this):e&&e(this.path,!0)}
,play:function(){ig.Sound.enabled&&(this.currentClip=ig.soundManager.get(this.path),this.currentClip.
volume=ig.soundManager.volume*this.volume,this.currentClip.play())},stop:function(){this.currentClip&&
(this.currentClip.pause(),this.currentClip.currentTime=0)}}),ig.Sound.FORMAT={MP3:{ext:"mp3",mime:"audio/mpeg"
},M4A:{ext:"m4a",mime:"audio/mp4; codecs=mp4a"},OGG:{ext:"ogg",mime:"audio/ogg; codecs=vorbis"},WEBM:
{ext:"webm",mime:"audio/webm; codecs=vorbis"},CAF:{ext:"caf",mime:"audio/x-caf"}},ig.Sound.use=[ig.Sound
.FORMAT.OGG,ig.Sound.FORMAT.MP3],ig.Sound.channels=4,ig.Sound.enabled=!0}),ig.baked=!0,ig.module("impact.loader"
).requires("impact.image","impact.font","impact.sound").defines(function(){ig.Loader=ig.Class.extend(
{resources:[],gameClass:null,status:0,done:!1,_unloaded:[],_drawStatus:0,_intervalId:0,_loadCallbackBound
:null,init:function(e,t){this.gameClass=e,this.resources=t,this._loadCallbackBound=this._loadCallback
.bind(this);for(var n=0;n<this.resources.length;n++)this._unloaded.push(this.resources[n].path)},load
:function(){ig.system.clear("#000");if(this.resources.length){for(var e=0;e<this.resources.length;e++
)this.loadResource(this.resources[e]);this._intervalId=setInterval(this.draw.bind(this),16)}else this
.end()},loadResource:function(e){e.load(this._loadCallbackBound)},end:function(){this.done||(this.done=!0
,clearInterval(this._intervalId),ig.system.setGame(this.gameClass))},draw:function(){this._drawStatus+=
(this.status-this._drawStatus)/5;var e=ig.system.scale,t=.6*ig.system.width,n=.1*ig.system.height,r=.5*
ig.system.width-t/2,i=.5*ig.system.height-n/2;ig.system.context.fillStyle="#000",ig.system.context.fillRect
(0,0,480,320),ig.system.context.fillStyle="#fff",ig.system.context.fillRect(r*e,i*e,t*e,n*e),ig.system
.context.fillStyle="#000",ig.system.context.fillRect(r*e+e,i*e+e,t*e-e-e,n*e-e-e),ig.system.context.fillStyle="#fff"
,ig.system.context.fillRect(r*e,i*e,t*e*this._drawStatus,n*e)},_loadCallback:function(e,t){if(!t)throw"Failed to load resource: "+
e;this._unloaded.erase(e),this.status=1-this._unloaded.length/this.resources.length,0==this._unloaded
.length&&setTimeout(this.end.bind(this),250)}})}),ig.baked=!0,ig.module("impact.timer").defines(function(
){ig.Timer=ig.Class.extend({target:0,base:0,last:0,pausedAt:0,init:function(e){this.last=this.base=ig
.Timer.time,this.target=e||0},set:function(e){this.target=e||0,this.base=ig.Timer.time,this.pausedAt=0
},reset:function(){this.base=ig.Timer.time,this.pausedAt=0},tick:function(){var e=ig.Timer.time-this.
last;return this.last=ig.Timer.time,this.pausedAt?0:e},delta:function(){return(this.pausedAt||ig.Timer
.time)-this.base-this.target},pause:function(){this.pausedAt||(this.pausedAt=ig.Timer.time)},unpause:
function(){this.pausedAt&&(this.base+=ig.Timer.time-this.pausedAt,this.pausedAt=0)}}),ig.Timer._last=0
,ig.Timer.time=Number.MIN_VALUE,ig.Timer.timeScale=1,ig.Timer.maxStep=.05,ig.Timer.step=function(){var e=
Date.now();ig.Timer.time+=Math.min((e-ig.Timer._last)/1e3,ig.Timer.maxStep)*ig.Timer.timeScale,ig.Timer
._last=e}}),ig.baked=!0,ig.module("impact.system").requires("impact.timer","impact.image").defines(function(
){ig.System=ig.Class.extend({fps:30,width:320,height:240,realWidth:320,realHeight:240,scale:1,restoreGame
:!1,playAsWhite:!0,tick:0,animationId:0,newGameClass:null,running:!1,delegate:null,clock:null,canvas:
null,context:null,init:function(e,t,n,r,i){this.fps=t,this.clock=new ig.Timer,this.canvas=ig.$(e),this
.resize(n,r,i),this.context=this.canvas.getContext("2d"),this.getDrawPos=ig.System.drawMode,1!=this.scale&&
(ig.System.scaleMode=ig.System.SCALE.CRISP),ig.System.scaleMode(this.canvas,this.context)},resize:function(
e,t,n){this.width=e,this.height=t,this.scale=n||this.scale,this.realWidth=this.width*this.scale,this.
realHeight=this.height*this.scale,this.canvas.width=this.realWidth,this.canvas.height=this.realHeight
},setGame:function(e){this.running?this.newGameClass=e:this.setGameNow(e)},setGameNow:function(e){ig.
game=new e,ig.system.setDelegate(ig.game)},setDelegate:function(e){if("function"!=typeof e.run)throw"System.setDelegate: No run() function in object"
;this.delegate=e,this.startRunLoop()},stopRunLoop:function(){ig.clearAnimation(this.animationId),this
.running=!1},startRunLoop:function(){this.stopRunLoop(),this.animationId=ig.setAnimation(this.run.bind
(this),this.canvas),this.running=!0},clear:function(e){this.context.fillStyle=e,this.context.fillRect
(0,0,this.realWidth,this.realHeight)},run:function(){ig.Timer.step(),this.tick=this.clock.tick(),this
.delegate.run(),ig.input.clearPressed(),this.newGameClass&&(this.setGameNow(this.newGameClass),this.newGameClass=
null)},getDrawPos:null}),ig.System.DRAW={AUTHENTIC:function(e){return Math.round(e)*this.scale},SMOOTH
:function(e){return Math.round(e*this.scale)},SUBPIXEL:function(e){return e*this.scale}},ig.System.drawMode=
ig.System.DRAW.SMOOTH,ig.System.SCALE={CRISP:function(e,t){ig.setVendorAttribute(t,"imageSmoothingEnabled"
,!1),e.style.imageRendering="-moz-crisp-edges",e.style.imageRendering="-o-crisp-edges",e.style.imageRendering="-webkit-optimize-contrast"
,e.style.imageRendering="crisp-edges",e.style.msInterpolationMode="nearest-neighbor"},SMOOTH:function(
e,t){ig.setVendorAttribute(t,"imageSmoothingEnabled",!0),e.style.imageRendering="",e.style.msInterpolationMode=""
}},ig.System.scaleMode=ig.System.SCALE.SMOOTH}),ig.baked=!0,ig.module("impact.input").defines(function(
){ig.KEY={MOUSE1:-1,MOUSE2:-3,MWHEEL_UP:-4,MWHEEL_DOWN:-5,BACKSPACE:8,TAB:9,ENTER:13,PAUSE:19,CAPS:20
,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW
:40,INSERT:45,DELETE:46,_0:48,_1:49,_2:50,_3:51,_4:52,_5:53,_6:54,_7:55,_8:56,_9:57,A:65,B:66,C:67,D:68
,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,
Y:89,Z:90,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7
:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBSTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113
,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SHIFT:16,CTRL:17,ALT:18,PLUS
:187,COMMA:188,MINUS:189,PERIOD:190},ig.Input=ig.Class.extend({bindings:{},actions:{},presses:{},locks
:{},delayedKeyup:{},isUsingMouse:!1,isUsingKeyboard:!1,isUsingAccelerometer:!1,mouse:{x:0,y:0},accel:
{x:0,y:0,z:0},initMouse:function(){if(!this.isUsingMouse){this.isUsingMouse=!0;var e=this.mousewheel.
bind(this);ig.system.canvas.addEventListener("mousewheel",e,!1),ig.system.canvas.addEventListener("DOMMouseScroll"
,e,!1),ig.system.canvas.addEventListener("contextmenu",this.contextmenu.bind(this),!1),ig.system.canvas
.addEventListener("mousedown",this.keydown.bind(this),!1),ig.system.canvas.addEventListener("mouseup"
,this.keyup.bind(this),!1),ig.system.canvas.addEventListener("mousemove",this.mousemove.bind(this),!1
),ig.ua.touchDevice&&(ig.system.canvas.addEventListener("touchstart",this.keydown.bind(this),!1),ig.system
.canvas.addEventListener("touchend",this.keyup.bind(this),!1),ig.system.canvas.addEventListener("touchmove"
,this.mousemove.bind(this),!1),ig.system.canvas.addEventListener("MSPointerDown",this.keydown.bind(this
),!1),ig.system.canvas.addEventListener("MSPointerUp",this.keyup.bind(this),!1),ig.system.canvas.addEventListener
("MSPointerMove",this.mousemove.bind(this),!1),ig.system.canvas.style.msTouchAction="none")}},initKeyboard
:function(){this.isUsingKeyboard||(this.isUsingKeyboard=!0,window.addEventListener("keydown",this.keydown
.bind(this),!1),window.addEventListener("keyup",this.keyup.bind(this),!1))},initAccelerometer:function(
){this.isUsingAccelerometer||window.addEventListener("devicemotion",this.devicemotion.bind(this),!1)}
,mousewheel:function(e){var t=this.bindings[0<(e.wheelDelta?e.wheelDelta:-1*e.detail)?ig.KEY.MWHEEL_UP
:ig.KEY.MWHEEL_DOWN];t&&(this.actions[t]=!0,this.presses[t]=!0,this.delayedKeyup[t]=!0,e.stopPropagation
(),e.preventDefault())},mousemove:function(e){var t=parseInt(ig.system.canvas.offsetWidth)||ig.system
.realWidth,t=ig.system.scale*(t/ig.system.realWidth),n={left:0,top:0};ig.system.canvas.getBoundingClientRect&&
(n=ig.system.canvas.getBoundingClientRect()),e=e.touches?e.touches[0]:e,this.mouse.x=(e.clientX-n.left
)/t,this.mouse.y=(e.clientY-n.top)/t},contextmenu:function(e){this.bindings[ig.KEY.MOUSE2]&&(e.stopPropagation
(),e.preventDefault())},keydown:function(e){var t=e.target.tagName;"INPUT"!=t&&"TEXTAREA"!=t&&(t="keydown"==
e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1,("touchstart"==e.type||"mousedown"==e.type)&&
this.mousemove(e),t=this.bindings[t])&&(this.actions[t]=!0,this.locks[t]||(this.presses[t]=!0,this.locks
[t]=!0),e.stopPropagation(),e.preventDefault())},keyup:function(e){var t=e.target.tagName;"INPUT"!=t&&"TEXTAREA"!=
t&&(t=this.bindings["keyup"==e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1])&&(this.delayedKeyup
[t]=!0,e.stopPropagation(),e.preventDefault())},devicemotion:function(e){this.accel=e.accelerationIncludingGravity
},bind:function(e,t){0>e?this.initMouse():0<e&&this.initKeyboard(),this.bindings[e]=t},bindTouch:function(
e,t){var n=ig.$(e),r=this;n.addEventListener("touchstart",function(e){r.touchStart(e,t)},!1),n.addEventListener
("touchend",function(e){r.touchEnd(e,t)},!1),n.addEventListener("MSPointerDown",function(e){r.touchStart
(e,t)},!1),n.addEventListener("MSPointerUp",function(e){r.touchEnd(e,t)},!1)},unbind:function(e){this
.delayedKeyup[this.bindings[e]]=!0,this.bindings[e]=null},unbindAll:function(){this.bindings={},this.
actions={},this.presses={},this.locks={},this.delayedKeyup={}},state:function(e){return this.actions[
e]},pressed:function(e){return this.presses[e]},released:function(e){return!!this.delayedKeyup[e]},clearPressed
:function(){for(var e in this.delayedKeyup)this.actions[e]=!1,this.locks[e]=!1;this.delayedKeyup={},this
.presses={}},touchStart:function(e,t){return this.actions[t]=!0,this.presses[t]=!0,e.stopPropagation(
),e.preventDefault(),!1},touchEnd:function(e,t){return this.delayedKeyup[t]=!0,e.stopPropagation(),e.
preventDefault(),!1}})}),ig.baked=!0,ig.module("impact.impact").requires("dom.ready","impact.loader","impact.system"
,"impact.input","impact.sound").defines(function(){ig.main=function(e,t,n,r,i,s,o){ig.system=new ig.System
(e,n,r,i,s||1),ig.input=new ig.Input,ig.soundManager=new ig.SoundManager,ig.music=new ig.Music,ig.ready=!0
,(new(o||ig.Loader)(t,ig.resources)).load()}}),ig.baked=!0,ig.module("impact.animation").requires("impact.timer"
,"impact.image").defines(function(){ig.AnimationSheet=ig.Class.extend({width:8,height:8,image:null,init
:function(e,t,n){this.width=t,this.height=n,this.image=new ig.Image(e)}}),ig.Animation=ig.Class.extend
({sheet:null,timer:null,sequence:[],flip:{x:!1,y:!1},pivot:{x:0,y:0},frame:0,tile:0,loopCount:0,alpha
:1,angle:0,init:function(e,t,n,r){this.sheet=e,this.pivot={x:e.width/2,y:e.height/2},this.timer=new ig
.Timer,this.frameTime=t,this.sequence=n,this.stop=!!r,this.tile=this.sequence[0]},rewind:function(){return this
.timer.set(),this.frame=this.loopCount=0,this.tile=this.sequence[0],this},gotoFrame:function(e){this.
timer.set(this.frameTime*-e-1e-4),this.update()},gotoRandomFrame:function(){this.gotoFrame(Math.floor
(Math.random()*this.sequence.length))},update:function(){var e=Math.floor(this.timer.delta()/this.frameTime
);this.loopCount=Math.floor(e/this.sequence.length),this.frame=this.stop&&0<this.loopCount?this.sequence
.length-1:e%this.sequence.length,this.tile=this.sequence[this.frame]},draw:function(e,t){var n=Math.max
(this.sheet.width,this.sheet.height);e>ig.system.width||t>ig.system.height||0>e+n||0>t+n||(1!=this.alpha&&
(ig.system.context.globalAlpha=this.alpha),0==this.angle?this.sheet.image.drawTile(e,t,this.tile,this
.sheet.width,this.sheet.height,this.flip.x,this.flip.y):(ig.system.context.save(),ig.system.context.translate
(ig.system.getDrawPos(e+this.pivot.x),ig.system.getDrawPos(t+this.pivot.y)),ig.system.context.rotate(
this.angle),this.sheet.image.drawTile(-this.pivot.x,-this.pivot.y,this.tile,this.sheet.width,this.sheet
.height,this.flip.x,this.flip.y),ig.system.context.restore()),1!=this.alpha&&(ig.system.context.globalAlpha=1
))}})}),ig.baked=!0,ig.module("impact.entity").requires("impact.animation","impact.impact").defines(function(
){ig.Entity=ig.Class.extend({id:0,settings:{},size:{x:16,y:16},offset:{x:0,y:0},pos:{x:0,y:0},last:{x
:0,y:0},vel:{x:0,y:0},accel:{x:0,y:0},friction:{x:0,y:0},maxVel:{x:100,y:100},zIndex:0,gravityFactor:1
,standing:!1,bounciness:0,minBounceVelocity:40,anims:{},animSheet:null,currentAnim:null,health:10,type
:0,checkAgainst:0,collides:0,_killed:!1,slopeStanding:{min:44..toRad(),max:136..toRad()},init:function(
e,t,n){this.id=++ig.Entity._lastId,this.pos.x=e,this.pos.y=t,ig.merge(this,n)},addAnim:function(e,t,n
,r){if(!this.animSheet)throw"No animSheet to add the animation "+e+" to.";return t=new ig.Animation(this
.animSheet,t,n,r),this.anims[e]=t,this.currentAnim||(this.currentAnim=t),t},update:function(){this.last
.x=this.pos.x,this.last.y=this.pos.y,this.vel.y+=ig.game.gravity*ig.system.tick*this.gravityFactor,this
.vel.x=this.getNewVelocity(this.vel.x,this.accel.x,this.friction.x,this.maxVel.x),this.vel.y=this.getNewVelocity
(this.vel.y,this.accel.y,this.friction.y,this.maxVel.y);var e=ig.game.collisionMap.trace(this.pos.x,this
.pos.y,this.vel.x*ig.system.tick,this.vel.y*ig.system.tick,this.size.x,this.size.y);this.handleMovementTrace
(e),this.currentAnim&&this.currentAnim.update()},getNewVelocity:function(e,t,n,r){return t?(e+t*ig.system
.tick).limit(-r,r):n?(t=n*ig.system.tick,0<e-t?e-t:0>e+t?e+t:0):e.limit(-r,r)},handleMovementTrace:function(
e){this.standing=!1,e.collision.y&&(0<this.bounciness&&Math.abs(this.vel.y)>this.minBounceVelocity?this
.vel.y*=-this.bounciness:(0<this.vel.y&&(this.standing=!0),this.vel.y=0)),e.collision.x&&(this.vel.x=0<
this.bounciness&&Math.abs(this.vel.x)>this.minBounceVelocity?this.vel.x*-this.bounciness:0);if(e.collision
.slope){var t=e.collision.slope;if(0<this.bounciness){var n=this.vel.x*t.nx+this.vel.y*t.ny;this.vel.
x=(this.vel.x-2*t.nx*n)*this.bounciness,this.vel.y=(this.vel.y-2*t.ny*n)*this.bounciness}else n=(this
.vel.x*t.x+this.vel.y*t.y)/(t.x*t.x+t.y*t.y),this.vel.x=t.x*n,this.vel.y=t.y*n,t=Math.atan2(t.x,t.y),
t>this.slopeStanding.min&&t<this.slopeStanding.max&&(this.standing=!0)}this.pos=e.pos},draw:function(
){this.currentAnim&&this.currentAnim.draw(this.pos.x-this.offset.x-ig.game._rscreen.x,this.pos.y-this
.offset.y-ig.game._rscreen.y)},kill:function(){ig.game.removeEntity(this)},receiveDamage:function(e){
this.health-=e,0>=this.health&&this.kill()},touches:function(e){return!(this.pos.x>=e.pos.x+e.size.x||
this.pos.x+this.size.x<=e.pos.x||this.pos.y>=e.pos.y+e.size.y||this.pos.y+this.size.y<=e.pos.y)},distanceTo
:function(e){var t=this.pos.x+this.size.x/2-(e.pos.x+e.size.x/2);return e=this.pos.y+this.size.y/2-(e
.pos.y+e.size.y/2),Math.sqrt(t*t+e*e)},angleTo:function(e){return Math.atan2(e.pos.y+e.size.y/2-(this
.pos.y+this.size.y/2),e.pos.x+e.size.x/2-(this.pos.x+this.size.x/2))},check:function(){},collideWith:
function(){},ready:function(){}}),ig.Entity._lastId=0,ig.Entity.COLLIDES={NEVER:0,LITE:1,PASSIVE:2,ACTIVE
:4,FIXED:8},ig.Entity.TYPE={NONE:0,A:1,B:2,BOTH:3},ig.Entity.checkPair=function(e,t){e.checkAgainst&t
.type&&e.check(t),t.checkAgainst&e.type&&t.check(e),e.collides&&t.collides&&e.collides+t.collides>ig.
Entity.COLLIDES.ACTIVE&&ig.Entity.solveCollision(e,t)},ig.Entity.solveCollision=function(e,t){var n=null
;if(e.collides==ig.Entity.COLLIDES.LITE||t.collides==ig.Entity.COLLIDES.FIXED)n=e;else if(t.collides==
ig.Entity.COLLIDES.LITE||e.collides==ig.Entity.COLLIDES.FIXED)n=t;e.last.x+e.size.x>t.last.x&&e.last.
x<t.last.x+t.size.x?(e.last.y<t.last.y?ig.Entity.seperateOnYAxis(e,t,n):ig.Entity.seperateOnYAxis(t,e
,n),e.collideWith(t,"y"),t.collideWith(e,"y")):e.last.y+e.size.y>t.last.y&&e.last.y<t.last.y+t.size.y&&
(e.last.x<t.last.x?ig.Entity.seperateOnXAxis(e,t,n):ig.Entity.seperateOnXAxis(t,e,n),e.collideWith(t,"x"
),t.collideWith(e,"x"))},ig.Entity.seperateOnXAxis=function(e,t,n){var r=e.pos.x+e.size.x-t.pos.x;n?(
n.vel.x=-n.vel.x*n.bounciness+(e===n?t:e).vel.x,t=ig.game.collisionMap.trace(n.pos.x,n.pos.y,n==e?-r:
r,0,n.size.x,n.size.y),n.pos.x=t.pos.x):(n=(e.vel.x-t.vel.x)/2,e.vel.x=-n,t.vel.x=n,n=ig.game.collisionMap
.trace(e.pos.x,e.pos.y,-r/2,0,e.size.x,e.size.y),e.pos.x=Math.floor(n.pos.x),e=ig.game.collisionMap.trace
(t.pos.x,t.pos.y,r/2,0,t.size.x,t.size.y),t.pos.x=Math.ceil(e.pos.x))},ig.Entity.seperateOnYAxis=function(
e,t,n){var r=e.pos.y+e.size.y-t.pos.y;if(n){t=e===n?t:e,n.vel.y=-n.vel.y*n.bounciness+t.vel.y;var i=0
;n==e&&Math.abs(n.vel.y-t.vel.y)<n.minBounceVelocity&&(n.standing=!0,i=t.vel.x*ig.system.tick),e=ig.game
.collisionMap.trace(n.pos.x,n.pos.y,i,n==e?-r:r,n.size.x,n.size.y),n.pos.y=e.pos.y,n.pos.x=e.pos.x}else ig
.game.gravity&&(t.standing||0<e.vel.y)?(n=ig.game.collisionMap.trace(e.pos.x,e.pos.y,0,-(e.pos.y+e.size
.y-t.pos.y),e.size.x,e.size.y),e.pos.y=n.pos.y,0<e.bounciness&&e.vel.y>e.minBounceVelocity?e.vel.y*=-
e.bounciness:(e.standing=!0,e.vel.y=0)):(n=(e.vel.y-t.vel.y)/2,e.vel.y=-n,t.vel.y=n,i=t.vel.x*ig.system
.tick,n=ig.game.collisionMap.trace(e.pos.x,e.pos.y,i,-r/2,e.size.x,e.size.y),e.pos.y=n.pos.y,e=ig.game
.collisionMap.trace(t.pos.x,t.pos.y,0,r/2,t.size.x,t.size.y),t.pos.y=e.pos.y)}}),ig.baked=!0,ig.module
("impact.map").defines(function(){ig.Map=ig.Class.extend({tilesize:8,width:1,height:1,data:[[]],name:
null,init:function(e,t){this.tilesize=e,this.data=t,this.height=t.length,this.width=t[0].length},getTile
:function(e,t){var n=Math.floor(e/this.tilesize),r=Math.floor(t/this.tilesize);return 0<=n&&n<this.width&&0<=
r&&r<this.height?this.data[r][n]:0},setTile:function(e,t,n){e=Math.floor(e/this.tilesize),t=Math.floor
(t/this.tilesize),0<=e&&e<this.width&&0<=t&&t<this.height&&(this.data[t][e]=n)}})}),ig.baked=!0,ig.module
("impact.collision-map").requires("impact.map").defines(function(){ig.CollisionMap=ig.Map.extend({lastSlope
:1,tiledef:null,init:function(e,t,n){this.parent(e,t),this.tiledef=n||ig.CollisionMap.defaultTileDef;
for(var r in this.tiledef)r|0>this.lastSlope&&(this.lastSlope=r|0)},trace:function(e,t,n,r,i,s){var o=
{collision:{x:!1,y:!1,slope:!1},pos:{x:e,y:t},tile:{x:0,y:0}},u=Math.ceil(Math.max(Math.abs(n),Math.abs
(r))/this.tilesize);if(1<u)for(var a=n/u,f=r/u,l=0;l<u&&(a||f)&&(this._traceStep(o,e,t,a,f,i,s,n,r,l)
,e=o.pos.x,t=o.pos.y,o.collision.x&&(n=a=0),o.collision.y&&(r=f=0),!o.collision.slope);l++);else this
._traceStep(o,e,t,n,r,i,s,n,r,0);return o},_traceStep:function(e,t,n,r,i,s,o,u,a,f){e.pos.x+=r,e.pos.
y+=i;var l=0;if(r){var c=0<r?s:0,h=0>r?this.tilesize:0,l=Math.max(Math.floor(n/this.tilesize),0),p=Math
.min(Math.ceil((n+o)/this.tilesize),this.height);r=Math.floor((e.pos.x+c)/this.tilesize);var d=Math.floor
((t+c)/this.tilesize);if(0<f||r==d||0>d||d>=this.width)d=-1;if(0<=r&&r<this.width)for(var v=l;v<p&&!(-1!=
d&&(l=this.data[v][d],1<l&&l<=this.lastSlope&&this._checkTileDef(e,l,t,n,u,a,s,o,d,v)));v++)if(l=this
.data[v][r],1==l||l>this.lastSlope||1<l&&this._checkTileDef(e,l,t,n,u,a,s,o,r,v)){if(1<l&&l<=this.lastSlope&&
e.collision.slope)break;e.collision.x=!0,e.tile.x=l,t=e.pos.x=r*this.tilesize-c+h,u=0;break}}if(i){c=0<
i?o:0,i=0>i?this.tilesize:0,l=Math.max(Math.floor(e.pos.x/this.tilesize),0),h=Math.min(Math.ceil((e.pos
.x+s)/this.tilesize),this.width),v=Math.floor((e.pos.y+c)/this.tilesize),p=Math.floor((n+c)/this.tilesize
);if(0<f||v==p||0>p||p>=this.height)p=-1;if(0<=v&&v<this.height)for(r=l;r<h&&!(-1!=p&&(l=this.data[p]
[r],1<l&&l<=this.lastSlope&&this._checkTileDef(e,l,t,n,u,a,s,o,r,p)));r++)if(l=this.data[v][r],1==l||
l>this.lastSlope||1<l&&this._checkTileDef(e,l,t,n,u,a,s,o,r,v)){if(1<l&&l<=this.lastSlope&&e.collision
.slope)break;e.collision.y=!0,e.tile.y=l,e.pos.y=v*this.tilesize-c+i;break}}},_checkTileDef:function(
e,t,n,r,i,s,o,u,a,f){var l=this.tiledef[t];if(!l)return!1;t=(l[2]-l[0])*this.tilesize;var c=(l[3]-l[1
])*this.tilesize,h=l[4];o=n+i+(0>c?o:0)-(a+l[0])*this.tilesize,u=r+s+(0<t?u:0)-(f+l[1])*this.tilesize
;if(0<t*u-c*o){if(0>i*-c+s*t)return h;a=Math.sqrt(t*t+c*c),f=c/a,a=-t/a;var p=o*f+u*a,l=f*p,p=a*p;return l*
l+p*p>=i*i+s*s?h||.5>t*(u-s)-c*(o-i):(e.pos.x=n+i-l,e.pos.y=r+s-p,e.collision.slope={x:t,y:c,nx:f,ny:
a},!0)}return!1}});var e=1/3,t=2/3;ig.CollisionMap.defaultTileDef={5:[0,1,1,t,!0],6:[0,t,1,e,!0],7:[0
,e,1,0,!0],3:[0,1,1,.5,!0],4:[0,.5,1,0,!0],2:[0,1,1,0,!0],10:[.5,1,1,0,!0],21:[0,1,.5,0,!0],32:[t,1,1
,0,!0],43:[e,1,t,0,!0],54:[0,1,e,0,!0],27:[0,0,1,e,!0],28:[0,e,1,t,!0],29:[0,t,1,1,!0],25:[0,0,1,.5,!0
],26:[0,.5,1,1,!0],24:[0,0,1,1,!0],11:[0,0,.5,1,!0],22:[.5,0,1,1,!0],33:[0,0,e,1,!0],44:[e,0,t,1,!0],55
:[t,0,1,1,!0],16:[1,e,0,0,!0],17:[1,t,0,e,!0],18:[1,1,0,t,!0],14:[1,.5,0,0,!0],15:[1,1,0,.5,!0],13:[1
,1,0,0,!0],8:[.5,1,0,0,!0],19:[1,1,.5,0,!0],30:[e,1,0,0,!0],41:[t,1,e,0,!0],52:[1,1,t,0,!0],38:[1,t,0
,1,!0],39:[1,e,0,t,!0],40:[1,0,0,e,!0],36:[1,.5,0,1,!0],37:[1,0,0,.5,!0],35:[1,0,0,1,!0],9:[1,0,.5,1,!0
],20:[.5,0,0,1,!0],31:[1,0,t,1,!0],42:[t,0,e,1,!0],53:[e,0,0,1,!0],12:[0,0,1,0,!1],23:[1,1,0,1,!1],34
:[1,0,1,1,!1],45:[0,1,0,0,!1]},ig.CollisionMap.staticNoCollision={trace:function(e,t,n,r){return{collision
:{x:!1,y:!1,slope:!1},pos:{x:e+n,y:t+r},tile:{x:0,y:0}}}}}),ig.baked=!0,ig.module("impact.background-map"
).requires("impact.map","impact.image").defines(function(){ig.BackgroundMap=ig.Map.extend({tiles:null
,scroll:{x:0,y:0},distance:1,repeat:!1,tilesetName:"",foreground:!1,enabled:!0,preRender:!1,preRenderedChunks
:null,chunkSize:512,debugChunks:!1,anims:{},init:function(e,t,n){this.parent(e,t),this.setTileset(n)}
,setTileset:function(e){this.tilesetName=e instanceof ig.Image?e.path:e,this.tiles=new ig.Image(this.
tilesetName),this.preRenderedChunks=null},setScreenPos:function(e,t){this.scroll.x=e/this.distance,this
.scroll.y=t/this.distance},preRenderMapToChunks:function(){var e=this.width*this.tilesize*ig.system.scale
,t=this.height*this.tilesize*ig.system.scale;this.chunkSize=Math.min(Math.max(e,t),this.chunkSize);var n=
Math.ceil(e/this.chunkSize),r=Math.ceil(t/this.chunkSize);this.preRenderedChunks=[];for(var i=0;i<r;i++
){this.preRenderedChunks[i]=[];for(var s=0;s<n;s++)this.preRenderedChunks[i][s]=this.preRenderChunk(s
,i,s==n-1?e-s*this.chunkSize:this.chunkSize,i==r-1?t-i*this.chunkSize:this.chunkSize)}},preRenderChunk
:function(e,t,n,r){var i=n/this.tilesize/ig.system.scale+1,s=r/this.tilesize/ig.system.scale+1,o=e*this
.chunkSize/ig.system.scale%this.tilesize,u=t*this.chunkSize/ig.system.scale%this.tilesize;e=Math.floor
(e*this.chunkSize/this.tilesize/ig.system.scale),t=Math.floor(t*this.chunkSize/this.tilesize/ig.system
.scale);var a=ig.$new("canvas");a.width=n,a.height=r,a.retinaResolutionEnabled=!1,r=a.getContext("2d"
),ig.System.scaleMode(a,r),n=ig.system.context,ig.system.context=r;for(r=0;r<i;r++)for(var f=0;f<s;f++
)if(r+e<this.width&&f+t<this.height){var l=this.data[f+t][r+e];l&&this.tiles.drawTile(r*this.tilesize-
o,f*this.tilesize-u,l-1,this.tilesize)}return ig.system.context=n,a},draw:function(){this.tiles.loaded&&
this.enabled&&(this.preRender?this.drawPreRendered():this.drawTiled())},drawPreRendered:function(){this
.preRenderedChunks||this.preRenderMapToChunks();var e=ig.system.getDrawPos(this.scroll.x),t=ig.system
.getDrawPos(this.scroll.y);if(this.repeat)var n=this.width*this.tilesize*ig.system.scale,e=(e%n+n)%n,
n=this.height*this.tilesize*ig.system.scale,t=(t%n+n)%n;var n=Math.max(Math.floor(e/this.chunkSize),0
),r=Math.max(Math.floor(t/this.chunkSize),0),i=Math.ceil((e+ig.system.realWidth)/this.chunkSize),s=Math
.ceil((t+ig.system.realHeight)/this.chunkSize),o=this.preRenderedChunks[0].length,u=this.preRenderedChunks
.length;this.repeat||(i=Math.min(i,o),s=Math.min(s,u));for(var a=0;r<s;r++){for(var f=0,l=n;l<i;l++){
var c=this.preRenderedChunks[r%u][l%o],h=-e+l*this.chunkSize-f,p=-t+r*this.chunkSize-a;ig.system.context
.drawImage(c,h,p),ig.Image.drawCount++,this.debugChunks&&(ig.system.context.strokeStyle="#f0f",ig.system
.context.strokeRect(h,p,this.chunkSize,this.chunkSize)),this.repeat&&c.width<this.chunkSize&&h+c.width<
ig.system.realWidth&&(f+=this.chunkSize-c.width,i++)}this.repeat&&c.height<this.chunkSize&&p+c.height<
ig.system.realHeight&&(a+=this.chunkSize-c.height,s++)}},drawTiled:function(){for(var e=0,t=null,n=(this
.scroll.x/this.tilesize).toInt(),r=(this.scroll.y/this.tilesize).toInt(),i=this.scroll.x%this.tilesize
,s=this.scroll.y%this.tilesize,o=-i-this.tilesize,i=ig.system.width+this.tilesize-i,u=ig.system.height+
this.tilesize-s,a=-1,s=-s-this.tilesize;s<u;a++,s+=this.tilesize){var f=a+r;if(f>=this.height||0>f){if(!
this.repeat)continue;f=(f%this.height+this.height)%this.height}for(var l=-1,c=o;c<i;l++,c+=this.tilesize
){e=l+n;if(e>=this.width||0>e){if(!this.repeat)continue;e=(e%this.width+this.width)%this.width}if(e=this
.data[f][e])(t=this.anims[e-1])?t.draw(c,s):this.tiles.drawTile(c,s,e-1,this.tilesize)}}}})}),ig.baked=!0
,ig.module("impact.game").requires("impact.impact","impact.entity","impact.collision-map","impact.background-map"
).defines(function(){ig.Game=ig.Class.extend({clearColor:"#000000",gravity:0,screen:{x:0,y:0},_rscreen
:{x:0,y:0},entities:[],namedEntities:{},collisionMap:ig.CollisionMap.staticNoCollision,backgroundMaps
:[],backgroundAnims:{},autoSort:!1,sortBy:null,cellSize:64,_deferredKill:[],_levelToLoad:null,_doSortEntities
:!1,staticInstantiate:function(){return this.sortBy=this.sortBy||ig.Game.SORT.Z_INDEX,ig.game=this,null
},loadLevel:function(e){this.screen={x:0,y:0},this.entities=[],this.namedEntities={};for(var t=0;t<e.
entities.length;t++){var n=e.entities[t];this.spawnEntity(n.type,n.x,n.y,n.settings)}this.sortEntities
(),this.collisionMap=ig.CollisionMap.staticNoCollision,this.backgroundMaps=[];for(t=0;t<e.layer.length
;t++)if(n=e.layer[t],"collision"==n.name)this.collisionMap=new ig.CollisionMap(n.tilesize,n.data);else{
var r=new ig.BackgroundMap(n.tilesize,n.data,n.tilesetName);r.anims=this.backgroundAnims[n.tilesetName
]||{},r.repeat=n.repeat,r.distance=n.distance,r.foreground=!!n.foreground,r.preRender=!!n.preRender,r
.name=n.name,this.backgroundMaps.push(r)}for(t=0;t<this.entities.length;t++)this.entities[t].ready()}
,loadLevelDeferred:function(e){this._levelToLoad=e},getMapByName:function(e){if("collision"==e)return this
.collisionMap;for(var t=0;t<this.backgroundMaps.length;t++)if(this.backgroundMaps[t].name==e)return this
.backgroundMaps[t];return null},getEntityByName:function(e){return this.namedEntities[e]},getEntitiesByType
:function(e){e="string"==typeof e?ig.global[e]:e;for(var t=[],n=0;n<this.entities.length;n++){var r=this
.entities[n];r instanceof e&&!r._killed&&t.push(r)}return t},spawnEntity:function(e,t,n,r){var i="string"==typeof 
e?ig.global[e]:e;if(!i)throw"Can't spawn entity of type "+e;return e=new i(t,n,r||{}),this.entities.push
(e),e.name&&(this.namedEntities[e.name]=e),e},sortEntities:function(){this.entities.sort(this.sortBy)
},sortEntitiesDeferred:function(){this._doSortEntities=!0},removeEntity:function(e){e.name&&delete this
.namedEntities[e.name],e._killed=!0,e.type=ig.Entity.TYPE.NONE,e.checkAgainst=ig.Entity.TYPE.NONE,e.collides=
ig.Entity.COLLIDES.NEVER,this._deferredKill.push(e)},run:function(){this.update(),this.draw()},update
:function(){this._levelToLoad&&(this.loadLevel(this._levelToLoad),this._levelToLoad=null);if(this._doSortEntities||
this.autoSort)this.sortEntities(),this._doSortEntities=!1;this.updateEntities(),this.checkEntities();
for(var e=0;e<this._deferredKill.length;e++)this.entities.erase(this._deferredKill[e]);this._deferredKill=
[];for(var t in this.backgroundAnims){var e=this.backgroundAnims[t],n;for(n in e)e[n].update()}},updateEntities
:function(){for(var e=0;e<this.entities.length;e++){var t=this.entities[e];t._killed||t.update()}},draw
:function(){this.clearColor&&ig.system.clear(this.clearColor),this._rscreen.x=ig.system.getDrawPos(this
.screen.x)/ig.system.scale,this._rscreen.y=ig.system.getDrawPos(this.screen.y)/ig.system.scale;var e;
for(e=0;e<this.backgroundMaps.length;e++){var t=this.backgroundMaps[e];if(t.foreground)break;t.setScreenPos
(this.screen.x,this.screen.y),t.draw()}this.drawEntities();for(e;e<this.backgroundMaps.length;e++)t=this
.backgroundMaps[e],t.setScreenPos(this.screen.x,this.screen.y),t.draw()},drawEntities:function(){for(
var e=0;e<this.entities.length;e++)this.entities[e].draw()},checkEntities:function(){for(var e={},t=0
;t<this.entities.length;t++){var n=this.entities[t];if(n.type!=ig.Entity.TYPE.NONE||n.checkAgainst!=ig
.Entity.TYPE.NONE||n.collides!=ig.Entity.COLLIDES.NEVER)for(var r={},i=Math.floor(n.pos.y/this.cellSize
),s=Math.floor((n.pos.x+n.size.x)/this.cellSize)+1,o=Math.floor((n.pos.y+n.size.y)/this.cellSize)+1,u=
Math.floor(n.pos.x/this.cellSize);u<s;u++)for(var a=i;a<o;a++)if(e[u])if(e[u][a]){for(var f=e[u][a],l=0
;l<f.length;l++)n.touches(f[l])&&!r[f[l].id]&&(r[f[l].id]=!0,ig.Entity.checkPair(n,f[l]));f.push(n)}else e
[u][a]=[n];else e[u]={},e[u][a]=[n]}}}),ig.Game.SORT={Z_INDEX:function(e,t){return e.zIndex-t.zIndex}
,POS_X:function(e,t){return e.pos.x+e.size.x-(t.pos.x+t.size.x)},POS_Y:function(e,t){return e.pos.y+e
.size.y-(t.pos.y+t.size.y)}}}),ig.baked=!0,ig.module("game.config").defines(function(){leveltemp=0,mylevelreq=
[],mylevelreq[leveltemp]=[],mylevelreq[leveltemp][0]=0,mylevelreq[leveltemp][1]=0,mylevelreq[leveltemp
][2]=0,mylevelreq[leveltemp][3]=0,leveltemp++,mylevelreq[leveltemp]=[],mylevelreq[leveltemp][0]=15,mylevelreq
[leveltemp][1]=35,mylevelreq[leveltemp][2]=25,mylevelreq[leveltemp][3]=0,Config=window.Ejecta?{background
:{x:576,y:480},mylevelreq:mylevelreq,debug:!1}:{background:{x:576,y:576},mylevelreq:mylevelreq,debug:!1
}}),ig.baked=!0,ig.module("plugins.font").requires("impact.impact").defines(function(){Font=ig.Class.
extend({align:"left",alpha:1,baseline:"top",colors:["#FFFFFF"],current:0,flicker:.15,font:null,pos:{x
:0,y:0},size:0,text:"",vel:{x:0,y:0},init:function(e,t,n,r){this.flicker=new ig.Timer(this.flicker),this
.font=e||"20px Garamond",this.pos.x=t||0,this.pos.y=n||0,this.size=this.getSize(),ig.merge(this,r)},draw
:function(e,t,n,r,i){var s=ig.system.context;if(!ig.game._font||ig.game._font!==this.font)ig.game._font=
this.font,s.font=this.font;s.save(),s.globalAlpha=this.alpha,s.textAlign=r||this.align,s.textBaseline=
this.baseline,s.fillStyle=i||this.colors[this.current],s.fillText(e||this.text,ig.system.getDrawPos(t||
this.pos.x),ig.system.getDrawPos(n||this.pos.y)),s.restore()},getSize:function(e){return Number(/\d+/
.exec(e||this.font))},getWidth:function(e){return Font.Width(e||this.text,this.font)},update:function(
){this.pos.x+=this.vel.x*ig.system.tick,this.pos.y+=this.vel.y*ig.system.tick,0<this.flicker.delta()&&
(++this.current===this.colors.length&&(this.current=0),this.flicker.reset())}}),Font.Width=function(e
,t){var n=ig.system.context;if(!ig.game._font||t&&ig.game._font!==t)ig.game._font=t,n.font=t;return n
.measureText(e).width/ig.system.scale}}),ig.baked=!0,ig.module("plugins.text-menu").defines(function(
){window.TextMenu=ig.Class.extend({init:function(e,t){this.selectedChoice=0,this.cursorLeft=">>",this
.cursorRight="<<",this.cursorLeftWidth=e.widthForString(this.cursorLeft),this.cursorRightWidth=e.widthForString
(this.cursorRight);var n;for(n=0;n<t.length;n++)t[n].labelWidth=e.widthForString(t[n].label);this.font=
e,this.choices=t},draw:function(e,t){var n=this.choices,r=this.font,i,s,o,u;for(i=0;i<n.length;i++)s=
n[i],u=t+20*i,r.draw(s.label,e,u,ig.Font.ALIGN.CENTER),this.selectedChoice===i&&(o=e-s.labelWidth/2-this
.cursorLeftWidth-8,r.draw(this.cursorLeft,o,u-1),o=e+s.labelWidth/2+8,r.draw(this.cursorRight,o,u-1))
;ig.input.pressed("up")?(this.selectedChoice--,this.selectedChoice=0>this.selectedChoice?0:this.selectedChoice
):ig.input.pressed("down")?(this.selectedChoice++,this.selectedChoice=this.selectedChoice>=n.length?n
.length-1:this.selectedChoice):ig.input.pressed("interact")&&n[this.selectedChoice].interact()},selectChoice
:function(e){e=this.selectedChoice+e,this.selectedChoice=0>e?this.choices.length-1:e%this.choices.length
}}),window.TextMenuItem=ig.Class.extend({init:function(e,t){this.label=e,this.action=t},interact:function(
){this.action(this.selectedChoice)}})}),ig.baked=!0,ig.module("game.menu").requires("impact.game","impact.font"
,"plugins.font","plugins.text-menu").defines(function(){GameMenu=ig.Class.extend({buttons:[],buttonStart
:new ig.Image("media/menu/play.png"),buttonLobby:new ig.Image("media/menu/lobby.png"),buttonWhite:new 
ig.Image("media/menu/white.png"),buttonBlack:new ig.Image("media/menu/black.png"),buttonHighscore:new 
ig.Image("media/menu/score.png"),clearcolor:"#c2c5ff",menu:null,gameCenter:null,menufont:null,choice:
null,connection:!1,connected:!1,bEjectaHosted:!0,bgImg:new ig.Image("media/bg/chess_bg.png"),menuFont
:new Font("36px Bookman bold"),font:new Font("20px Garamond"),init:function(){ig.system.clear(this.clearcolor
),this.menuFont.colors=["#333333"],ig.ua.mobile&&!window.ejecta?(ig.$("#bottom").style.display="none"
,ig.$("#bottom").style.zIndex="-1"):window.ejecta||(ig.$("#bottom").style.zIndex="999999");if(ig.ua.mobile||
window.ejecta)this.buttons=[new ig.TouchButton("startGameAsBlack",ig.system.width-300,130,76,90,this.
buttonBlack,0),new ig.TouchButton("startGameAsWhite",ig.system.width-170,130,76,90,this.buttonWhite,0
)];else{ig.input.bind(ig.KEY.ENTER,"interact"),ig.input.bind(ig.KEY.UP_ARROW,"up"),ig.input.bind(ig.KEY
.DOWN_ARROW,"down");var e=[new TextMenuItem("Start game",this.menuAction)];this.selfont=new ig.Font("media/postino24.font.png"
),this.menu=new TextMenu(this.selfont,e)}},run:function(){this.bgImg.draw(0,0);if(ig.ua.mobile||window
.ejecta)for(var e=0;e<this.buttons.length;e++)this.buttons[e].draw();ig.input.pressed("startGameAsBlack"
)?(this.level=1,10>ig.game.gameSETMODE?ig.game.gameSETMODE++:ig.game.gameSETMODE=1,ig.game.playerColor="black"
,ig.system.playAsWhite=!1,ig.system.setGame(SuperChess)):ig.input.pressed("startGameAsWhite")?(this.level=1
,10>ig.game.gameSETMODE?ig.game.gameSETMODE++:ig.game.gameSETMODE=1,ig.game.playerColor="white",ig.system
.playAsWhite=!0,ig.system.setGame(SuperChess)):ig.input.pressed("openLobby")&&(this.level=1,10>ig.game
.gameSETMODE?ig.game.gameSETMODE++:ig.game.gameSETMODE=1,ig.system.setGame(GameLobby))},menuAction:function(
){switch(ig.game.menu.selectedChoice){case 0:ig.system.setGame(SuperChess)}}})}),ig.baked=!0,ig.module
("game.lobby").requires("impact.game","impact.font","plugins.font","plugins.text-menu").defines(function(
){GameLobby=ig.Class.extend({buttons:[],buttonStart:new ig.Image("media/menu/play.png"),buttonLobby:new 
ig.Image("media/menu/lobby.png"),buttonHighscore:new ig.Image("media/menu/score.png"),buttonStartSession
:new ig.Image("media/menu/startsession.png"),buttonJoinGame:new ig.Image("media/menu/joingame.png"),clearcolor
:"#02c5ff",menu:null,gameCenter:null,menufont:null,choice:null,connection:!1,connected:!1,socket:!1,menuFont
:new Font("36px Bookman bold"),font:new Font("20px Garamond"),init:function(){ig.system.clear(this.clearcolor
),this.menuFont.colors=["#333333"],console.log(ig.system.playerData),window.ejecta&&(this.socket=ig.system
.connectToWS()),ig.ua.mobile&&!window.ejecta?(ig.$("#bottom").style.display="none",ig.$("#bottom").style
.zIndex="-1"):window.ejecta||(ig.$("#bottom").style.zIndex="999999");if(ig.ua.mobile||window.ejecta)this
.buttons=[new ig.TouchButton("startGame",ig.system.width/2-96,160,280,34,this.buttonStart,0),new ig.TouchButton
("startSession",ig.system.width/2-96,220,280,34,this.buttonStartSession,0),new ig.TouchButton("joinGame"
,ig.system.width/2-96,270,280,34,this.buttonJoinGame,0)];else{ig.input.bind(ig.KEY.ENTER,"interact"),
ig.input.bind(ig.KEY.UP_ARROW,"up"),ig.input.bind(ig.KEY.DOWN_ARROW,"down");var e=[new TextMenuItem("Start game"
,this.menuAction)];this.selfont=new ig.Font("media/postino24.font.png"),this.menu=new TextMenu(this.selfont
,e)}},run:function(){if(ig.ua.mobile||window.ejecta){var e=ig.system.context;e.font="26pt Futura",e.textAlign="center"
,e.fillStyle="#4973ff";for(e=0;e<this.buttons.length;e++)this.buttons[e].draw()}ig.input.pressed("startGame"
)?(this.level=1,10>ig.game.gameSETMODE?ig.game.gameSETMODE++:ig.game.gameSETMODE=1,ig.system.setGame(
GameMenu)):ig.input.pressed("joinGame")?(ig.system.setGame(SuperChess,{playMode:"multiplayer",opponent
:"Roberto"}),ig.system.playMode="multiplayer"):ig.input.pressed("startSession")&&(this.level=1,10>ig.
game.gameSETMODE?ig.game.gameSETMODE++:ig.game.gameSETMODE=1,ejecta.getText("User Name","Please enter your name"
,function(e){ig.system.pressedMenu=!0,ig.system.playerData.playerName=e,ig.system.storage.set("playername"
,e),ig.system.socket.send(JSON.stringify({type:"playername",playername:e})),ig.system.setGame(GameMenu
)}))},menuAction:function(){switch(ig.game.menu.selectedChoice){case 0:ig.system.setGame(SuperChess)}
}})}),ig.baked=!0,ig.module("game.levels.sky").requires("impact.image").defines(function(){LevelSky={
entities:[],layer:[{name:"clouds",width:4,height:2,linkWithCollision:!1,visible:1,tilesetName:"media/sky3.png"
,repeat:!0,preRender:!1,distance:"1",tilesize:32,foreground:!1,data:[[1,1,1,1],[1,1,1,1]]}]},LevelSkyResources=
[]}),ig.baked=!0,ig.module("plugins.impact-storage").requires("impact.game").defines(function(){ig.Storage=
ig.Class.extend({staticInstantiate:function(){return ig.Storage.instance?ig.Storage.instance:null},init
:function(){ig.Storage.instance=this},isCapable:function(){return"undefined"!=typeof window.localStorage
},isSet:function(e){return null===this.get(e)?!1:!0},getOrSet:function(e,t){ig.system.playerData.playerName=
this.isSet(e)?this.get(e):this.set(e,t)},initUnset:function(e,t){return null===this.get(e)&&this.set(
e,t),t},get:function(e){if(!this.isCapable())return null;try{return JSON.parse(localStorage.getItem(e
))}catch(t){return window.localStorage.getItem(e)}},getInt:function(e){return parseInt(this.get(e))},
getFloat:function(e){return parseFloat(this.get(e))},getBool:function(e){return!!this.get(e)},key:function(
e){return this.isCapable()?window.localStorage.key(e):null},set:function(e,t){if(!this.isCapable())return console
.log("WTF? Can't use localStorage"),null;try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n
){n==QUOTA_EXCEEDED_ERR&&console.log("localStorage quota exceeded")}},setHighest:function(e,t){t>this
.getFloat(e)&&this.set(e,t)},remove:function(e){if(!this.isCapable())return null;window.localStorage.
removeItem(e)},clear:function(){if(!this.isCapable())return null;window.localStorage.clear()}})}),ig.
baked=!0,ig.module("game.entities.piece").requires("impact.entity").defines(function(){EntityPiece=ig
.Entity.extend({debug:!1,collides:ig.Entity.COLLIDES.NEVER,type:ig.Entity.TYPE.A,checkAgainst:ig.Entity
.TYPE.NONE,EntityType:"opponent",drawCube:!1,drawMoveCube:!1,resetTimer:null,clickedBrick:!1,hasMovedInGame
:!1,hasDied:!1,deathTimer:!1,isMovingTimer:new ig.Timer(1e3),enPassant:!1,size:{x:64,y:64},maxVel:{x:0
,y:0},vel:{x:0,y:0},bPos:{x:0,y:0},endX:0,endY:0,canmove:!0,animSheet:new ig.AnimationSheet("media/chesspieces64.png"
,64,64),init:function(e,t,n){this.parent(e,t,n),this.resetTimer=new ig.Timer(1),this.endX=this.pos.x,
this.endY=this.pos.y,this.deathTimer=new ig.Timer(900)},draw:function(){if(this.drawCube){var e=ig.system
.context,t=ig.system.scale,n=this.pos.x*t-ig.game.screen.x*t,t=this.pos.y*t-ig.game.screen.y*t;e.save
(),e.fillStyle="rgba(255,25,255,0.7)",e.fillRect(n,t,64,64),e.fillRect(this.pos.x,this.pos.y,64,64),e
.restore()}if(!this.canmove){var e=ig.system.context,r=64-25*this.resetTimer.delta();64<r&&(r=64),0>=
r?(this.canmove=!0,this.clickedBrick=!1):this.canmove=!1,t=ig.system.scale,n=this.pos.x*t-ig.game.screen
.x*t,t=this.pos.y*t-ig.game.screen.y*t,e.save(),e.fillStyle="player"===this.EntityType?"rgba(255,25,255,0.7)"
:"rgba(55,215,255,0.7)",e.fillRect(n,t,64,r),e.fillRect(this.pos.x,this.pos.y,64,r),e.restore()}this.
parent()},updateMoveArray:function(){if(ig.game.activeClick&&!0===ig.game.activeClick.canmove){var e=
ig.game.activeClick,t=[];ig.game.validMoveArray=[];var n=Math.floor((e.pos.x-ig.game.startXpos)/ig.game
.brickSize),r=Math.floor((e.pos.y-ig.game.startYpos)/ig.game.brickSize);switch(e.fen){case"q":if("white"===
ig.game.playerColor)break;this.debug&&console.log("black queen at "+r),e=!1;for(i=1;8>i;i++)7>=r+i&&7>=
n+i&&!e&&(0===ig.game.board[r+i][n+i]?t.push({y:i,x:i}):(e=!0,("P"===ig.game.board[r+i][n+i]||"R"===ig
.game.board[r+i][n+i]||"B"===ig.game.board[r+i][n+i]||"N"===ig.game.board[r+i][n+i]||"Q"===ig.game.board
[r+i][n+i]||"K"===ig.game.board[r+i][n+i])&&t.push({y:i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&7>=n+i&&!
e&&(0===ig.game.board[r-i][n+i]?t.push({y:-i,x:i}):(e=!0,("P"===ig.game.board[r-i][n+i]||"R"===ig.game
.board[r-i][n+i]||"B"===ig.game.board[r-i][n+i]||"N"===ig.game.board[r-i][n+i]||"Q"===ig.game.board[r-
i][n+i]||"K"===ig.game.board[r-i][n+i])&&t.push({y:-i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&0<=n-i&&!e&&
(0===ig.game.board[r-i][n-i]?t.push({y:-i,x:-i}):(e=!0,("P"===ig.game.board[r-i][n-i]||"R"===ig.game.
board[r-i][n-i]||"B"===ig.game.board[r-i][n-i]||"N"===ig.game.board[r-i][n-i]||"Q"===ig.game.board[r-
i][n-i]||"K"===ig.game.board[r-i][n-i])&&t.push({y:-i,x:-i})));e=!1;for(i=1;8>i;i++)7>=r+i&&0<=n-i&&!
e&&(0===ig.game.board[r+i][n-i]?t.push({y:i,x:-i}):(e=!0,("P"===ig.game.board[r+i][n-i]||"R"===ig.game
.board[r+i][n-i]||"B"===ig.game.board[r+i][n-i]||"N"===ig.game.board[r+i][n-i]||"Q"===ig.game.board[r+
i][n-i]||"K"===ig.game.board[r+i][n-i])&&t.push({y:i,x:-i})));e=!1;for(i=1;8>i;i++)0<=n-i&&!e&&(0===ig
.game.board[r][n-i]?t.push({y:0,x:-i}):(e=!0,("P"===ig.game.board[r][n-i]||"R"===ig.game.board[r][n-i
]||"B"===ig.game.board[r][n-i]||"N"===ig.game.board[r][n-i]||"Q"===ig.game.board[r][n-i]||"K"===ig.game
.board[r][n-i])&&t.push({y:0,x:-i})));e=!1;for(i=1;8>i;i++)7>=n+i&&!e&&(0===ig.game.board[r][n+i]?t.push
({y:0,x:+i}):(e=!0,("P"===ig.game.board[r][n+i]||"R"===ig.game.board[r][n+i]||"B"===ig.game.board[r][
n+i]||"N"===ig.game.board[r][n+i]||"Q"===ig.game.board[r][n+i]||"K"===ig.game.board[r][n+i])&&t.push(
{y:0,x:i})));e=!1;for(i=1;8>i;i++)7>=r+i&&!e&&(0===ig.game.board[r+i][n]?t.push({y:i,x:0}):(e=!0,("P"===
ig.game.board[r+i][n]||"R"===ig.game.board[r+i][n]||"B"===ig.game.board[r+i][n]||"N"===ig.game.board[
r+i][n]||"Q"===ig.game.board[r+i][n]||"K"===ig.game.board[r+i][n])&&t.push({y:i,x:0})));e=!1;for(i=1;8>
i;i++)0<=r-i&&!e&&(0===ig.game.board[r-i][n]?t.push({y:-i,x:0}):(e=!0,("P"===ig.game.board[r-i][n]||"R"===
ig.game.board[r-i][n]||"B"===ig.game.board[r-i][n]||"N"===ig.game.board[r-i][n]||"Q"===ig.game.board[
r-i][n]||"K"===ig.game.board[r-i][n])&&t.push({y:-i,x:0})));this.moveFromArray(t,r,n,!1);break;case"Q"
:if("black"===ig.game.playerColor)break;this.debug&&console.log("white queen at "+r),e=!1;for(i=1;8>i
;i++)7>=r+i&&7>=n+i&&!e&&(0===ig.game.board[r+i][n+i]?t.push({y:i,x:i}):(e=!0,("p"===ig.game.board[r+
i][n+i]||"r"===ig.game.board[r+i][n+i]||"b"===ig.game.board[r+i][n+i]||"n"===ig.game.board[r+i][n+i]||"q"===
ig.game.board[r+i][n+i]||"k"===ig.game.board[r+i][n+i])&&t.push({y:i,x:i})));e=!1;for(i=1;8>i;i++)0<=
r-i&&7>=n+i&&!e&&(0===ig.game.board[r-i][n+i]?t.push({y:-i,x:i}):(e=!0,("p"===ig.game.board[r-i][n+i]||"r"===
ig.game.board[r-i][n+i]||"b"===ig.game.board[r-i][n+i]||"n"===ig.game.board[r-i][n+i]||"q"===ig.game.
board[r-i][n+i]||"k"===ig.game.board[r-i][n+i])&&t.push({y:-i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&0<=
n-i&&!e&&(0===ig.game.board[r-i][n-i]?t.push({y:-i,x:-i}):(e=!0,("p"===ig.game.board[r-i][n-i]||"r"===
ig.game.board[r-i][n-i]||"b"===ig.game.board[r-i][n-i]||"n"===ig.game.board[r-i][n-i]||"q"===ig.game.
board[r-i][n-i]||"k"===ig.game.board[r-i][n-i])&&t.push({y:-i,x:-i})));e=!1;for(i=1;8>i;i++)7>=r+i&&0<=
n-i&&!e&&(0===ig.game.board[r+i][n-i]?t.push({y:i,x:-i}):(e=!0,("p"===ig.game.board[r+i][n-i]||"r"===
ig.game.board[r+i][n-i]||"b"===ig.game.board[r+i][n-i]||"n"===ig.game.board[r+i][n-i]||"q"===ig.game.
board[r+i][n-i]||"k"===ig.game.board[r+i][n-i])&&t.push({y:i,x:-i})));e=!1;for(i=1;8>i;i++)0<=n-i&&!e&&
(0===ig.game.board[r][n-i]?t.push({y:0,x:-i}):(e=!0,("p"===ig.game.board[r][n-i]||"r"===ig.game.board
[r][n-i]||"b"===ig.game.board[r][n-i]||"n"===ig.game.board[r][n-i]||"q"===ig.game.board[r][n-i]||"k"===
ig.game.board[r][n-i])&&t.push({y:0,x:-i})));e=!1;for(i=1;8>i;i++)7>=n+i&&!e&&(0===ig.game.board[r][n+
i]?t.push({y:0,x:+i}):(e=!0,("p"===ig.game.board[r][n+i]||"r"===ig.game.board[r][n+i]||"b"===ig.game.
board[r][n+i]||"n"===ig.game.board[r][n+i]||"q"===ig.game.board[r][n+i]||"k"===ig.game.board[r][n+i])&&
t.push({y:0,x:i})));e=!1;for(i=1;8>i;i++)7>=r+i&&!e&&(0===ig.game.board[r+i][n]?t.push({y:i,x:0}):(e=!0
,("p"===ig.game.board[r+i][n]||"r"===ig.game.board[r+i][n]||"b"===ig.game.board[r+i][n]||"n"===ig.game
.board[r+i][n]||"q"===ig.game.board[r+i][n]||"k"===ig.game.board[r+i][n])&&t.push({y:i,x:0})));e=!1;for(
i=1;8>i;i++)0<=r-i&&!e&&(0===ig.game.board[r-i][n]?t.push({y:-i,x:0}):(e=!0,("p"===ig.game.board[r-i]
[n]||"r"===ig.game.board[r-i][n]||"b"===ig.game.board[r-i][n]||"n"===ig.game.board[r-i][n]||"q"===ig.
game.board[r-i][n]||"k"===ig.game.board[r-i][n])&&t.push({y:-i,x:0})));this.moveFromArray(t,r,n,!1);break;
case"r":if("white"===ig.game.playerColor)break;e=!1;for(i=1;8>i;i++)0<=n-i&&!e&&(0===ig.game.board[r]
[n-i]?t.push({y:0,x:-i}):(e=!0,("P"===ig.game.board[r][n-i]||"R"===ig.game.board[r][n-i]||"B"===ig.game
.board[r][n-i]||"N"===ig.game.board[r][n-i]||"Q"===ig.game.board[r][n-i]||"K"===ig.game.board[r][n-i]
)&&t.push({y:0,x:-i})));e=!1;for(i=1;8>i;i++)7>=n+i&&!e&&(0===ig.game.board[r][n+i]?t.push({y:0,x:+i}
):(e=!0,("P"===ig.game.board[r][n+i]||"R"===ig.game.board[r][n+i]||"B"===ig.game.board[r][n+i]||"N"===
ig.game.board[r][n+i]||"Q"===ig.game.board[r][n+i]||"K"===ig.game.board[r][n+i])&&t.push({y:0,x:i})))
;e=!1;for(i=1;8>i;i++)7>=r+i&&!e&&(0===ig.game.board[r+i][n]?t.push({y:i,x:0}):(e=!0,("P"===ig.game.board
[r+i][n]||"R"===ig.game.board[r+i][n]||"B"===ig.game.board[r+i][n]||"N"===ig.game.board[r+i][n]||"Q"===
ig.game.board[r+i][n]||"K"===ig.game.board[r+i][n])&&t.push({y:i,x:0})));e=!1;for(i=1;8>i;i++)0<=r-i&&!
e&&(0===ig.game.board[r-i][n]?t.push({y:-i,x:0}):(e=!0,("P"===ig.game.board[r-i][n]||"R"===ig.game.board
[r-i][n]||"B"===ig.game.board[r-i][n]||"N"===ig.game.board[r-i][n]||"Q"===ig.game.board[r-i][n]||"K"===
ig.game.board[r-i][n])&&t.push({y:-i,x:0})));this.moveFromArray(t,r,n,!1);break;case"R":if("black"===
ig.game.playerColor)break;e=!1;for(i=1;8>i;i++)0<=n-i&&!e&&(0===ig.game.board[r][n-i]?t.push({y:0,x:-
i}):(e=!0,("p"===ig.game.board[r][n-i]||"r"===ig.game.board[r][n-i]||"b"===ig.game.board[r][n-i]||"n"===
ig.game.board[r][n-i]||"q"===ig.game.board[r][n-i]||"k"===ig.game.board[r][n-i])&&t.push({y:0,x:-i}))
);e=!1;for(i=1;8>i;i++)7>=n+i&&!e&&(0===ig.game.board[r][n+i]?t.push({y:0,x:+i}):(e=!0,("p"===ig.game
.board[r][n+i]||"r"===ig.game.board[r][n+i]||"b"===ig.game.board[r][n+i]||"n"===ig.game.board[r][n+i]||"q"===
ig.game.board[r][n+i]||"k"===ig.game.board[r][n+i])&&t.push({y:0,x:i})));e=!1;for(i=1;8>i;i++)7>=r+i&&!
e&&(0===ig.game.board[r+i][n]?t.push({y:i,x:0}):(e=!0,("p"===ig.game.board[r+i][n]||"r"===ig.game.board
[r+i][n]||"b"===ig.game.board[r+i][n]||"n"===ig.game.board[r+i][n]||"q"===ig.game.board[r+i][n]||"k"===
ig.game.board[r+i][n])&&t.push({y:i,x:0})));e=!1;for(i=1;8>i;i++)0<=r-i&&!e&&(0===ig.game.board[r-i][
n]?t.push({y:-i,x:0}):(e=!0,("p"===ig.game.board[r-i][n]||"r"===ig.game.board[r-i][n]||"b"===ig.game.
board[r-i][n]||"n"===ig.game.board[r-i][n]||"q"===ig.game.board[r-i][n]||"k"===ig.game.board[r-i][n])&&
t.push({y:-i,x:0})));this.moveFromArray(t,r,n,!1);break;case"b":if("white"===ig.game.playerColor)break;
this.debug&&console.log("white bishop at "+r),e=!1;for(i=1;8>i;i++)7>=r+i&&7>=n+i&&!e&&(0===ig.game.board
[r+i][n+i]?t.push({y:i,x:i}):(e=!0,("P"===ig.game.board[r+i][n+i]||"R"===ig.game.board[r+i][n+i]||"B"===
ig.game.board[r+i][n+i]||"N"===ig.game.board[r+i][n+i]||"Q"===ig.game.board[r+i][n+i]||"K"===ig.game.
board[r+i][n+i])&&t.push({y:i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&7>=n+i&&!e&&(0===ig.game.board[r-i
][n+i]?t.push({y:-i,x:i}):(e=!0,("P"===ig.game.board[r-i][n+i]||"R"===ig.game.board[r-i][n+i]||"B"===
ig.game.board[r-i][n+i]||"N"===ig.game.board[r-i][n+i]||"Q"===ig.game.board[r-i][n+i]||"K"===ig.game.
board[r-i][n+i])&&t.push({y:-i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&0<=n-i&&!e&&(0===ig.game.board[r-
i][n-i]?t.push({y:-i,x:-i}):(e=!0,("P"===ig.game.board[r-i][n-i]||"R"===ig.game.board[r-i][n-i]||"B"===
ig.game.board[r-i][n-i]||"N"===ig.game.board[r-i][n-i]||"Q"===ig.game.board[r-i][n-i]||"K"===ig.game.
board[r-i][n-i])&&t.push({y:-i,x:-i})));e=!1;for(i=1;8>i;i++)7>=r+i&&0<=n-i&&!e&&(0===ig.game.board[r+
i][n-i]?t.push({y:i,x:-i}):(e=!0,("P"===ig.game.board[r+i][n-i]||"R"===ig.game.board[r+i][n-i]||"B"===
ig.game.board[r+i][n-i]||"N"===ig.game.board[r+i][n-i]||"Q"===ig.game.board[r+i][n-i]||"K"===ig.game.
board[r+i][n-i])&&t.push({y:i,x:-i})));this.moveFromArray(t,r,n,!1);break;case"B":if("black"===ig.game
.playerColor)break;this.debug&&console.log("white bishop at "+r),e=!1;for(i=1;8>i;i++)7>=r+i&&7>=n+i&&!
e&&(0===ig.game.board[r+i][n+i]?t.push({y:i,x:i}):(e=!0,("p"===ig.game.board[r+i][n+i]||"r"===ig.game
.board[r+i][n+i]||"b"===ig.game.board[r+i][n+i]||"n"===ig.game.board[r+i][n+i]||"q"===ig.game.board[r+
i][n+i]||"k"===ig.game.board[r+i][n+i])&&t.push({y:i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&7>=n+i&&!e&&
(0===ig.game.board[r-i][n+i]?t.push({y:-i,x:i}):(e=!0,("p"===ig.game.board[r-i][n+i]||"r"===ig.game.board
[r-i][n+i]||"b"===ig.game.board[r-i][n+i]||"n"===ig.game.board[r-i][n+i]||"q"===ig.game.board[r-i][n+
i]||"k"===ig.game.board[r-i][n+i])&&t.push({y:-i,x:i})));e=!1;for(i=1;8>i;i++)0<=r-i&&0<=n-i&&!e&&(0===
ig.game.board[r-i][n-i]?t.push({y:-i,x:-i}):(e=!0,("p"===ig.game.board[r-i][n-i]||"r"===ig.game.board
[r-i][n-i]||"b"===ig.game.board[r-i][n-i]||"n"===ig.game.board[r-i][n-i]||"q"===ig.game.board[r-i][n-
i]||"k"===ig.game.board[r-i][n-i])&&t.push({y:-i,x:-i})));e=!1;for(i=1;8>i;i++)7>=r+i&&0<=n-i&&!e&&(0===
ig.game.board[r+i][n-i]?t.push({y:i,x:-i}):(e=!0,("p"===ig.game.board[r+i][n-i]||"r"===ig.game.board[
r+i][n-i]||"b"===ig.game.board[r+i][n-i]||"n"===ig.game.board[r+i][n-i]||"q"===ig.game.board[r+i][n-i
]||"k"===ig.game.board[r+i][n-i])&&t.push({y:i,x:-i})));this.moveFromArray(t,r,n,!1);break;case"k":if("white"===
ig.game.playerColor)break;this.debug&&console.log("white king at "+r),t.push({y:1,x:1}),t.push({y:1,x
:0}),t.push({y:1,x:-1}),t.push({y:-1,x:1}),t.push({y:-1,x:0}),t.push({y:-1,x:-1}),t.push({y:0,x:1}),t
.push({y:0,x:-1}),this.moveFromArray(t,r,n,!1),ig.game.castlingAllowedLeft&&0===ig.game.board[r][n-1]&&0===
ig.game.board[r][n-2]&&0===ig.game.board[r][n-3]&&0!==ig.game.board[r][n-4]&&ig.game.validMoveArray.push
({y:r,x:n-2}),ig.game.castlingAllowedRight&&0===ig.game.board[r][n+1]&&0===ig.game.board[r][n+2]&&0!==
ig.game.board[r][n+3]&&ig.game.validMoveArray.push({y:r,x:n+2});break;case"K":if("black"===ig.game.playerColor
)break;this.debug&&console.log("white king at "+r),t.push({y:1,x:1}),t.push({y:1,x:0}),t.push({y:1,x:-1
}),t.push({y:-1,x:1}),t.push({y:-1,x:0}),t.push({y:-1,x:-1}),t.push({y:0,x:1}),t.push({y:0,x:-1}),this
.moveFromArray(t,r,n,!1),ig.game.castlingAllowedLeft&&0===ig.game.board[r][n-1]&&0===ig.game.board[r]
[n-2]&&0===ig.game.board[r][n-3]&&0!==ig.game.board[r][n-4]&&ig.game.validMoveArray.push({y:r,x:n-2})
,ig.game.castlingAllowedRight&&0===ig.game.board[r][n+1]&&0===ig.game.board[r][n+2]&&0!==ig.game.board
[r][n+3]&&ig.game.validMoveArray.push({y:r,x:n+2});break;case"N":if("black"===ig.game.playerColor)break;
this.debug&&console.log("white knight at "+r),tryPos={y:-1,x:2},t.push(tryPos),tryPos={y:-1,x:-2},t.push
(tryPos),tryPos={y:-1,x:2},t.push(tryPos),tryPos={y:-1,x:-2},t.push(tryPos),tryPos={y:-2,x:-1},t.push
(tryPos),tryPos={y:-2,x:1},t.push(tryPos),tryPos={y:2,x:1},t.push(tryPos),tryPos={y:2,x:-1},t.push(tryPos
),tryPos={y:1,x:-2},t.push(tryPos),tryPos={y:1,x:2},t.push(tryPos),this.moveFromArray(t,r,n);break;case"n"
:if("white"===ig.game.playerColor)break;this.debug&&console.log("black knight at "+r),tryPos={y:-1,x:2
},t.push(tryPos),tryPos={y:-1,x:-2},t.push(tryPos),tryPos={y:-1,x:2},t.push(tryPos),tryPos={y:-1,x:-2
},t.push(tryPos),tryPos={y:-2,x:-1},t.push(tryPos),tryPos={y:-2,x:1},t.push(tryPos),tryPos={y:2,x:1},
t.push(tryPos),tryPos={y:2,x:-1},t.push(tryPos),tryPos={y:1,x:-2},t.push(tryPos),tryPos={y:1,x:2},t.push
(tryPos),this.moveFromArray(t,r,n);break;case"P":if("black"===ig.game.playerColor)break;t=[],6===r&&0===
ig.game.board[r-2][n]&&0===ig.game.board[r-1][n]&&ig.game.validMoveArray.push({y:r-2,x:n}),0===ig.game
.board[r-1][n]&&ig.game.validMoveArray.push({y:r-1,x:n}),3===r&&0===ig.game.board[r-1][n+1]&&0!==ig.game
.board[r][n+1]&&t.push({y:-1,x:1}),t.push({y:-1,x:-1}),t.push({y:-1,x:1}),this.moveFromArray(t,r,n,!0
);break;case"p":if("white"===ig.game.playerColor)break;t=[],1===r&&0===ig.game.board[r+2][n]&&0===ig.
game.board[r+1][n]&&ig.game.validMoveArray.push({y:r+2,x:n}),0===ig.game.board[r+1][n]&&ig.game.validMoveArray
.push({y:r+1,x:n}),3===r&&0===ig.game.board[r+1][n+1]&&0!==ig.game.board[r][n+1]&&t.push({y:1,x:1}),t
.push({y:1,x:-1}),t.push({y:1,x:1}),this.moveFromArray(t,r,n,!0)}}},update:function(){this.updateMoveArray
(),ig.game.lastNx=ig.input.mouse.x,ig.game.lastNy=ig.input.mouse.y,this.parent(),this.bPos.x=Math.floor
((this.pos.x-ig.game.startXpos)/ig.game.brickSize),this.bPos.y=Math.floor((this.pos.y-ig.game.startYpos
)/ig.game.brickSize);if(ig.input.pressed("CanvasTouch")&&ig.game.activeClick==this){var e=Math.floor(
(ig.input.mouse.x-ig.game.startXpos)/ig.game.brickSize),t=Math.floor((ig.input.mouse.y-ig.game.startYpos
)/ig.game.brickSize);this.debug&&console.log("click/touch    "+e+" "+t);var n=!1;for(i=0;i<ig.game.validMoveArray
.length;i++)boardpos=ig.game.validMoveArray[i],e===boardpos.x&&t===boardpos.y&&(n=!0),ig.game.playerIsMoving=!0
;if(n){for(n=0;n<ig.game.entities.length;n++){var r=ig.game.entities[n],s=Math.floor((r.pos.y-ig.game
.startYpos)/ig.game.brickSize);e===Math.floor((r.pos.x-ig.game.startXpos)/ig.game.brickSize)&&t===s&&
("white"===ig.game.playerColor&&"opponent"==r.EntityType?(this.debug&&console.log("killed opponenet!"
),"k"===r.fen&&ig.game.checkWinLose(),r.zIndex=10,this.zIndex=1,r.hasDied=!0,r.deathTimer.set(.4)):"black"===
ig.game.playerColor&&"player"==r.EntityType?(this.debug&&console.log("killed white as black!"),"K"===
r.fen&&ig.game.checkWinLose(),r.zIndex=10,this.zIndex=1,r.hasDied=!0,r.deathTimer.set(.4)):"player"==
r.EntityType&&(this.debug&&console.log("DESELECT"),this.clickedBrick=this,this.clicked=!0,ig.game.activeClick=
this,this.entityClicked=this.drawCube=!0))}n=e*ig.game.brickSize+ig.game.startXpos,r=t*ig.game.brickSize+
ig.game.startXpos,this.debug&&console.log("endx + this.pos.x: "+n+" "+this.pos.x),n>this.pos.x?(endPosX=
n/ig.game.brickSize-this.pos.x/ig.game.brickSize,this.debug&&console.log("flytter "+endPosX+" til høyre"
),endXboard=endPosX):(endPosX=this.pos.x/ig.game.brickSize-n/ig.game.brickSize,this.debug&&console.log
("flytter "+endPosX+" til venstre"),endXboard=-endPosX),r>this.pos.y?(endPosY=r/ig.game.brickSize-this
.pos.y/ig.game.brickSize,this.debug&&console.log("flytter "+endPosY+" opp"),endYboard=endPosY):(endPosY=
this.pos.y/ig.game.brickSize-r/ig.game.brickSize,this.debug&&console.log("flytter "+endPosY+" ned"),endYboard=-
endPosY);var s=endXboard,o=endYboard;this.debug&&console.log("hei, jeg er "+this.fen+" og går til "+s+"X og "+
o+"Y"),this.debug&&console.log("relativeMovement (xy): "+s+" "+o);if("K"===this.fen&&2===s&&0===o){this
.debug&&console.log("castling høyre");for(i=0;i<ig.game.entities.length;i++)"R"===ig.game.entities[i]
.fen&&7===ig.game.entities[i].bPos.x&&(rook=ig.game.entities[i]);if(void 0===rook){this.debug&&console
.log("WTF no rook?");return}newPosX=(rook.pos.x-ig.game.startXpos-2*ig.game.brickSize)/ig.game.brickSize
,ig.game.board[7][newPosX]="R",ig.game.board[7][7]=0,rook.endX=newPosX*ig.game.brickSize+ig.game.startXpos
,rook.endY=rook.pos.y*ig.game.brickSize+ig.game.startYpos,ig.game.activeClick=!1,rook.clearDrawCubes(
),rook.resetTimer=new ig.Timer(1),rook.hasMovedInGame=!0,rook.tween({pos:{x:rook.pos.x-2*ig.game.brickSize
,y:rook.pos.y}},twSpeed,{easing:ig.Tween.Easing.Linear.EaseNone}).start()}if("K"===this.fen&&-2===s&&0===
o){this.debug&&console.log("castling venstre");for(i=0;i<ig.game.entities.length;i++)"R"===ig.game.entities
[i].fen&&0===ig.game.entities[i].bPos.x&&(rook=ig.game.entities[i]);if(void 0===rook){this.debug&&console
.log("WTF no rook?");return}newPosX=(rook.pos.x-ig.game.startXpos+3*ig.game.brickSize)/ig.game.brickSize
,this.debug&&console.log(rook),ig.game.board[rook.bPos.y][newPosX]="R",ig.game.board[rook.bPos.y][0]=0
,rook.endX=newPosX*ig.game.brickSize+ig.game.startXpos,rook.endY=rook.pos.y*ig.game.brickSize+ig.game
.startYpos,ig.game.activeClick=!1,rook.clearDrawCubes(),rook.resetTimer=new ig.Timer(1),rook.hasMovedInGame=!0
,rook.tween({pos:{x:rook.pos.x+newPosX*ig.game.brickSize,y:rook.pos.y}},twSpeed,{easing:ig.Tween.Easing
.Linear.EaseNone}).start()}tMoves=e>t?e:t,twSpeed=.1,1===tMoves&&(twSpeed=.2),this.canmove=!1,ig.game
.board[t][e]=ig.game.board[this.clicked.y][this.clicked.x],ig.game.board[this.clicked.y][this.clicked
.x]=0,this.endX=n,this.endY=r,ig.game.activeClick=!1,this.clearDrawCubes(),"P"===this.fen&&0===parseInt
(t,10)?(ig.game.board[t][e]="Q",this.kill(),ig.game.spawnEntity(EntityQueenWhite,n,r,{canmove:!1})):ig
.game.playerIsMoving=!1,this.resetTimer=new ig.Timer(1),this.clickedBrick.tween({pos:{x:n,y:r}},twSpeed
,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),"multiplayer"===ig.system.playMode&&ig.system.socket
.send(JSON.stringify({type:"playerMove",playername:ig.system.playerData.playerName,opponent:"Roberto"
,piece:this.fen,x:n,y:r})),ig.game.validMoveArray=!1,this.hasMovedInGame=!0,ig.game.playerIsMoving=!1
,e=Math.abs(this.clicked.y-t),"P"===this.fen&&2===e&&(this.enPassant=!0),"R"===this.fen&&0===this.bPos
.x&&(ig.game.castlingAllowedLeft=!1,ig.game.storage.set("castlingl",ig.game.castlingAllowedLeft)),"R"===
this.fen&&7===this.bPos.x&&(ig.game.castlingAllowedRight=!1,ig.game.storage.set("castlingr",ig.game.castlingAllowedRight
)),"K"===this.fen&&(ig.game.castlingAllowedLeft=!1,ig.game.castlingAllowedRight=!1,ig.game.storage.set
("castlingr",ig.game.castlingAllowedRight),ig.game.storage.set("castlingl",ig.game.castlingAllowedLeft
))}}if(!this.hasDied&&window.ejecta&&0<ig.game.nX&&0<ig.game.nY&&this.inFocusiOS()||ig.input.pressed("CanvasTouch"
)&&this.clickedBrick===this){e=!0,t=Math.floor((ig.input.mouse.x-ig.game.startXpos)/ig.game.brickSize
),n=Math.floor((ig.input.mouse.y-ig.game.startYpos)/ig.game.brickSize),this.debug&&console.log("clicked xy: "+
t+" +"+n);if(0<ig.game.validMoveArray.length)for(i=0;i<ig.game.validMoveArray.length;i++)boardpos=ig.
game.validMoveArray[i],r=Math.floor(boardpos.y*ig.game.brickSize+ig.game.startYpos),Math.floor(boardpos
.x*ig.game.brickSize+ig.game.startXpos)===t&&r===n&&(e=!1);e&&(this.debug&&console.log("now deselecting...."
),ig.game.activeClick=!1,this.drawCube=this.clickedBrick=ig.game.validMoveArray=!1,this.clearDrawCubes
(),this.inFocus()&&!0===this.canmove&&this.selectPiece(this))}ig.input.pressed("CanvasTouch")&&this.inFocus
()&&!0===this.canmove&&!this.hasDied&&!1===ig.game.activeClick&&this.selectPiece(this)},moveFromArray
:function(e,n,r,s){if("white"===ig.game.playerColor){if(0<e.length)for(i=0;i<e.length;i++)t=e[i],!s&&0<=
parseInt(n+t.y,10)&&7>=parseInt(n+t.y,10)&&7>=parseInt(r+t.x,10)&&0<=parseInt(r+t.x,10)&&0===ig.game.
board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]&&ig.game.validMoveArray.push({y:n+t.y,x:r+t.x}),0<=parseInt
(n+t.y,10)&&7>=parseInt(n+t.y,10)&&7>=parseInt(r+t.x,10)&&0<=parseInt(r+t.x,10)&&0!==ig.game.board[parseInt
(n+t.y,10)][parseInt(r+t.x,10)]&&("p"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"n"===
ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"q"===ig.game.board[parseInt(n+t.y,10)][parseInt
(r+t.x,10)]||"r"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"b"===ig.game.board[parseInt
(n+t.y,10)][parseInt(r+t.x,10)]||"k"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)])&&ig.game
.validMoveArray.push({y:n+t.y,x:r+t.x})}else if(0<e.length)for(i=0;i<e.length;i++)t=e[i],!s&&0<=parseInt
(n+t.y,10)&&7>=parseInt(n+t.y,10)&&7>=parseInt(r+t.x,10)&&0<=parseInt(r+t.x,10)&&0===ig.game.board[parseInt
(n+t.y,10)][parseInt(r+t.x,10)]&&ig.game.validMoveArray.push({y:n+t.y,x:r+t.x}),0<=parseInt(n+t.y,10)&&7>=
parseInt(n+t.y,10)&&7>=parseInt(r+t.x,10)&&0<=parseInt(r+t.x,10)&&0!==ig.game.board[parseInt(n+t.y,10
)][parseInt(r+t.x,10)]&&("P"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"N"===ig.game.board
[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"Q"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"R"===
ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)]||"B"===ig.game.board[parseInt(n+t.y,10)][parseInt
(r+t.x,10)]||"K"===ig.game.board[parseInt(n+t.y,10)][parseInt(r+t.x,10)])&&ig.game.validMoveArray.push
({y:n+t.y,x:r+t.x})},selectPiece:function(e){entityClicked=!0;if(!e.hasDied){var t=Math.floor((ig.input
.mouse.x-ig.game.startXpos)/ig.game.brickSize),n=Math.floor((ig.input.mouse.y-ig.game.startYpos)/ig.game
.brickSize);ig.game.validMoveArray=[],this.debug&&console.log(e.fen);if(e.clickedBrick)e.clickedBrick=!0
,e.clicked=!0,ig.game.activeClick=!1,e.entityClicked=!0;else if("player"==e.EntityType&&"white"===ig.
game.playerColor||"opponent"==e.EntityType&&"black"===ig.game.playerColor)if(e.clickedBrick=this,ig.game
.activeClick=this,ig.game.lastClick=this,t=Math.floor((ig.input.mouse.x-ig.game.startXpos)/ig.game.brickSize
),n=Math.floor((ig.input.mouse.y-ig.game.startYpos)/ig.game.brickSize),e.clicked={x:t,y:n},e.debug&&console
.log(e.pos),brickPos={x:(e.pos.x-ig.game.startXpos)/ig.game.brickSize,y:(e.pos.y-ig.game.startYpos)/ig
.game.brickSize},e.debug&&console.log(brickPos),"player"==e.EntityType&&"white"===ig.game.playerColor||"opponent"==
e.EntityType&&"black"===ig.game.playerColor)e.clearDrawCubes(),e.drawCube=!0}},clearDrawCubes:function(
){for(i=0;i<ig.game.entities.length;i++)ig.game.entities[i].drawCube=!1},inFocus:function(){return this
.pos.x<=ig.input.mouse.x+ig.game.screen.x&&ig.input.mouse.x+ig.game.screen.x<=this.pos.x+this.size.x&&
this.pos.y<=ig.input.mouse.y+ig.game.screen.y&&ig.input.mouse.y+ig.game.screen.y<=this.pos.y+this.size
.y},inFocusiOS:function(){return this.pos.x<=ig.game.nX+ig.game.screen.x&&ig.game.nX+ig.game.screen.x<=
this.pos.x+this.size.x&&this.pos.y<=ig.game.nY+ig.game.screen.y&&ig.game.nY+ig.game.screen.y<=this.pos
.y+this.size.y},kill:function(){ig.game.activeClick===this&&(ig.game.activeClick=!1,this.drawCube=this
.clickedBrick=ig.game.validMoveArray=!1,this.clearDrawCubes()),ig.game.board[this.bPos.y][this.bPos.x
]===this.fen&&(ig.game.board[this.bPos.y][this.bPos.x]=0),ig.game.removeEntity(this)}})}),ig.baked=!0
,ig.module("game.entities.rook_black").requires("game.entities.piece").defines(function(){EntityRookBlack=
EntityPiece.extend({bricktype:"rook",fen:"r",etype:"EntityRookBlack",init:function(e,t,n){this.parent
(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[7]),this.currentAnim=this.anims.normal}
})}),ig.baked=!0,ig.module("game.entities.rook_white").requires("game.entities.piece").defines(function(
){EntityRookWhite=EntityPiece.extend({EntityType:"player",bricktype:"rook",fen:"R",etype:"EntityRookWhite"
,init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,200,[1]),this
.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.pawn_black").requires("game.entities.piece"
).defines(function(){EntityPawnBlack=EntityPiece.extend({bricktype:"pawn",fen:"p",etype:"EntityPawnBlack"
,init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[6]),this
.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.pawn_white").requires("game.entities.piece"
).defines(function(){EntityPawnWhite=EntityPiece.extend({EntityType:"player",bricktype:"pawn",fen:"P"
,etype:"EntityPawnWhite",init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this
.animSheet,.5,[0]),this.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.knight_black"
).requires("game.entities.piece").defines(function(){EntityKnightBlack=EntityPiece.extend({bricktype:"knight"
,fen:"n",etype:"EntityKnightBlack",init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation
(this.animSheet,.5,[8]),this.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.knight_white"
).requires("game.entities.piece").defines(function(){EntityKnightWhite=EntityPiece.extend({EntityType
:"player",bricktype:"knight",brickcolor:"white",fen:"N",etype:"EntityKnightWhite",init:function(e,t,n
){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[2]),this.currentAnim=this.
anims.normal}})}),ig.baked=!0,ig.module("game.entities.horse_black").requires("game.entities.piece").
defines(function(){EntityHorseBlack=EntityPiece.extend({bricktype:"bishop",fen:"b",etype:"EntityHorseBlack"
,init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[9]),this
.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.king_white").requires("game.entities.piece"
).defines(function(){EntityKingWhite=EntityPiece.extend({fen:"K",EntityType:"player",bricktype:"king"
,brickcolor:"white",etype:"EntityKingWhite",init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new 
ig.Animation(this.animSheet,.5,[5]),this.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.horse_white"
).requires("game.entities.piece").defines(function(){EntityHorseWhite=EntityPiece.extend({EntityType:"player"
,bricktype:"bishop",fen:"B",etype:"EntityHorseWhite",init:function(e,t,n){this.parent(e,t,n),this.anims
.normal=new ig.Animation(this.animSheet,.5,[3]),this.currentAnim=this.anims.normal}})}),ig.baked=!0,ig
.module("game.entities.queen_black").requires("game.entities.piece").defines(function(){EntityQueenBlack=
EntityPiece.extend({bricktype:"queen",fen:"q",etype:"EntityQueenBlack",init:function(e,t,n){this.parent
(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[10]),this.currentAnim=this.anims.normal
}})}),ig.baked=!0,ig.module("game.entities.queen_white").requires("game.entities.piece").defines(function(
){EntityQueenWhite=EntityPiece.extend({EntityType:"player",bricktype:"queen",fen:"Q",etype:"EntityQueenWhite"
,init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[4]),this
.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("game.entities.king_black").requires("game.entities.piece"
).defines(function(){EntityKingBlack=EntityPiece.extend({bricktype:"king",fen:"k",etype:"EntityKingBlack"
,init:function(e,t,n){this.parent(e,t,n),this.anims.normal=new ig.Animation(this.animSheet,.5,[11]),this
.currentAnim=this.anims.normal}})}),ig.baked=!0,ig.module("plugins.chess.rook").defines(function(){Rook=
function(e,t){var n,r,s,o;if(ig.game.playerIsMoving)return!1;if("white"===ig.game.playerColor){var u=!1
,a=!1;n=!1;var f=.3;r=[];var a=[],c=t.x,h=t.y;n&&console.log("--* / ROOK / *--"),pieceBlocked=!1;for(
i=1;i<ig.game.boardwidth+1;i++)0<=c-i&&!pieceBlocked&&(0===ig.game.board[h][c-i]?r.push({y:0,x:-i}):(
pieceBlocked=!0,("P"===ig.game.board[h][c-i]||"R"===ig.game.board[h][c-i]||"B"===ig.game.board[h][c-i
]||"N"===ig.game.board[h][c-i]||"Q"===ig.game.board[h][c-i]||"K"===ig.game.board[h][c-i])&&a.push({y:0
,x:-i})));pieceBlocked=!1;for(i=1;i<ig.game.boardheight+1;i++)c+i<=ig.game.boardwidth&&!pieceBlocked&&
(0===ig.game.board[h][c+i]?r.push({y:0,x:+i}):(pieceBlocked=!0,("P"===ig.game.board[h][c+i]||"R"===ig
.game.board[h][c+i]||"B"===ig.game.board[h][c+i]||"N"===ig.game.board[h][c+i]||"Q"===ig.game.board[h]
[c+i]||"K"===ig.game.board[h][c+i])&&a.push({y:0,x:i})));pieceBlocked=!1;for(i=1;i<ig.game.boardheight+1
;i++)h+i<=ig.game.boardheight&&!pieceBlocked&&(0===ig.game.board[h+i][c]?r.push({y:i,x:0}):(pieceBlocked=!0
,("P"===ig.game.board[h+i][c]||"R"===ig.game.board[h+i][c]||"B"===ig.game.board[h+i][c]||"N"===ig.game
.board[h+i][c]||"Q"===ig.game.board[h+i][c]||"K"===ig.game.board[h+i][c])&&a.push({y:i,x:0})));pieceBlocked=!1
;for(i=1;i<ig.game.boardheight+1;i++)0<=h-i&&!pieceBlocked&&(0===ig.game.board[h-i][c]?r.push({y:-i,x
:0}):(pieceBlocked=!0,("P"===ig.game.board[h-i][c]||"R"===ig.game.board[h-i][c]||"B"===ig.game.board[
h-i][c]||"N"===ig.game.board[h-i][c]||"Q"===ig.game.board[h-i][c]||"K"===ig.game.board[h-i][c])&&a.push
({y:-i,x:0})));if(0<a.length){if(m=a.random()){u=e.pos.y+ig.game.brickSize*m.y,a=e.pos.x+ig.game.brickSize*
m.x,ig.game.board[t.y+m.y][t.x+m.x]=e.fen;for(c=ig.game.board[t.y][t.x]=0;c<ig.game.entities.length;c++
)if(h=ig.game.entities[c],s=h.pos.x,o=h.pos.y,n=h.endX,r=h.endY,(s===a&&o===u||a===n&&u===r)&&"player"===
h.EntityType)this.debug&&console.log("killing entity at (xy) "+n+" "+r),h.zIndex=10,e.zIndex=1,h.hasDied=!0
,h.deathTimer.set(.4);e.canmove=!1,twfactor=m.y>m.x?Math.abs(m.y/10):Math.abs(m.x/10),e.tween({pos:{x
:a,y:u}},f+twfactor,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),u=!0}}else if(0<r.length){u=[],
a=!1;for(l=0;l<r.length;l++)a||(u=r.random(),0<=u.y&&u.y<=ig.game.boardheight&&0<=u.x&&u.x<=ig.game.boardwidth&&0===
ig.game.board[t.y+u.y][t.x+u.x]&&(a=!0));n&&console.log(u.y+" "+u.x),n&&console.log(s+" "+o),ig.game.
board[t.y+u.y][t.x+u.x]=e.fen,ig.game.board[t.y][t.x]=0,s=e.pos.y+ig.game.brickSize*u.y,o=e.pos.x+ig.
game.brickSize*u.x,e.canmove=!1,twfactor2=u.y>u.x?Math.abs(u.y/10):Math.abs(u.x/10),e.tween({pos:{x:o
,y:s}},f+twfactor2,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),u=!0}}else{n=u=!1,f=.3,r=[],a=[]
,c=t.x,h=t.y,n&&console.log("--* / ROOK / *--"),pieceBlocked=!1;for(i=1;i<ig.game.boardwidth+1;i++)0<=
c-i&&!pieceBlocked&&(0===ig.game.board[h][c-i]?r.push({y:0,x:-i}):(pieceBlocked=!0,("p"===ig.game.board
[h][c-i]||"r"===ig.game.board[h][c-i]||"b"===ig.game.board[h][c-i]||"n"===ig.game.board[h][c-i]||"q"===
ig.game.board[h][c-i]||"k"===ig.game.board[h][c-i])&&a.push({y:0,x:-i})));pieceBlocked=!1;for(i=1;i<ig
.game.boardheight+1;i++)c+i<=ig.game.boardwidth&&!pieceBlocked&&(0===ig.game.board[h][c+i]?r.push({y:0
,x:+i}):(pieceBlocked=!0,("p"===ig.game.board[h][c+i]||"r"===ig.game.board[h][c+i]||"b"===ig.game.board
[h][c+i]||"n"===ig.game.board[h][c+i]||"q"===ig.game.board[h][c+i]||"k"===ig.game.board[h][c+i])&&a.push
({y:0,x:i})));pieceBlocked=!1;for(i=1;i<ig.game.boardheight+1;i++)h+i<=ig.game.boardheight&&!pieceBlocked&&
(0===ig.game.board[h+i][c]?r.push({y:i,x:0}):(pieceBlocked=!0,("p"===ig.game.board[h+i][c]||"r"===ig.
game.board[h+i][c]||"b"===ig.game.board[h+i][c]||"n"===ig.game.board[h+i][c]||"q"===ig.game.board[h+i
][c]||"k"===ig.game.board[h+i][c])&&a.push({y:i,x:0})));pieceBlocked=!1;for(i=1;i<ig.game.boardheight+1
;i++)0<=h-i&&!pieceBlocked&&(0===ig.game.board[h-i][c]?r.push({y:-i,x:0}):(pieceBlocked=!0,("p"===ig.
game.board[h-i][c]||"r"===ig.game.board[h-i][c]||"b"===ig.game.board[h-i][c]||"n"===ig.game.board[h-i
][c]||"q"===ig.game.board[h-i][c]||"k"===ig.game.board[h-i][c])&&a.push({y:-i,x:0})));if(0<a.length){
if(m=a.random()){u=e.pos.y+ig.game.brickSize*m.y,a=e.pos.x+ig.game.brickSize*m.x,ig.game.board[t.y+m.
y][t.x+m.x]=e.fen;for(c=ig.game.board[t.y][t.x]=0;c<ig.game.entities.length;c++)if(h=ig.game.entities
[c],s=h.pos.x,o=h.pos.y,n=h.endX,r=h.endY,(s===a&&o===u||a===n&&u===r)&&"opponent"===h.EntityType)this
.debug&&console.log("killing entity at (xy) "+n+" "+r),h.zIndex=10,e.zIndex=1,h.hasDied=!0,h.deathTimer
.set(.4);e.canmove=!1,twfactor=m.y>m.x?Math.abs(m.y/10):Math.abs(m.x/10),e.tween({pos:{x:a,y:u}},f+twfactor
,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),u=!0}}else if(0<r.length){u=[],a=!1;for(l=0;l<r.length
;l++)a||(u=r.random(),0<=u.y&&u.y<=ig.game.boardheight&&0<=u.x&&u.x<=ig.game.boardwidth&&0===ig.game.
board[t.y+u.y][t.x+u.x]&&(a=!0));n&&console.log(u.y+" "+u.x),n&&console.log(s+" "+o),ig.game.board[t.
y+u.y][t.x+u.x]=e.fen,ig.game.board[t.y][t.x]=0,s=e.pos.y+ig.game.brickSize*u.y,o=e.pos.x+ig.game.brickSize*
u.x,e.canmove=!1,twfactor2=u.y>u.x?Math.abs(u.y/10):Math.abs(u.x/10),e.tween({pos:{x:o,y:s}},f+twfactor2
,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),u=!0}}return u?(e.resetTimer.set(.1),e.drawMoveCube=!0
,e.isMovingTimer.set(.3),!0):!1}}),ig.baked=!0,ig.module("plugins.chess.pawn").defines(function(){Pawn=
function(e,t){if(ig.game.playerIsMoving)return!1;var n=!1,r=!1,s=[],o=[],r=[],u=[];"white"===ig.game.
playerColor?(1==t.y?(tryPos={y:1,x:0},r.push(tryPos),tryPos={y:2,x:0}):tryPos={y:1,x:0},r.push(tryPos
)):"black"===ig.game.playerColor&&(6==t.y?(tryPos={y:-1,x:0},r.push(tryPos),tryPos={y:-2,x:0}):tryPos=
{y:-1,x:0},r.push(tryPos)),"white"===ig.game.playerColor?1===Math.floor(3*Math.random())?(tryKillPos=
{y:1,x:-1},u.push(tryKillPos),tryKillPos={y:1,x:1}):(tryKillPos={y:1,x:1},u.push(tryKillPos),tryKillPos=
{y:1,x:-1}):1===Math.floor(3*Math.random())?(tryKillPos={y:-1,x:-1},u.push(tryKillPos),tryKillPos={y:-1
,x:1}):(tryKillPos={y:-1,x:1},u.push(tryKillPos),tryKillPos={y:-1,x:-1}),u.push(tryKillPos);for(i=0;i<
u.length;i++)tryPos=r[i],t.y+tryKillPos.y<=ig.game.boardheight&&0<=t.y+tryKillPos.y&&0<=t.x+tryKillPos
.x&&t.x+tryKillPos.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryKillPos.y][t.x+tryKillPos.x]&&(ypos=
t.y+tryKillPos.y,xpos=t.x+tryKillPos.x,("white"===ig.game.playerColor&&("P"===ig.game.board[ypos][xpos
]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===
ig.game.board[ypos][xpos]||"K"===ig.game.board[ypos][xpos])||"black"===ig.game.playerColor&&("p"===ig
.game.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game
.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][xpos]))&&o.push(tryKillPos
));for(i=0;i<r.length;i++)tryPos=r[i],t.y+tryPos.y<=ig.game.boardheight&&0<=t.y+tryPos.y&&0<=t.x+tryPos
.x&&t.x+tryPos.x<=ig.game.boardwidth&&(2===tryPos.y?0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0===
ig.game.board[t.y+(tryPos.y-1)][t.x+tryPos.x]&&s.push(tryPos):-2===tryPos.y?0===ig.game.board[t.y+tryPos
.y][t.x+tryPos.x]&&0===ig.game.board[t.y+(tryPos.y+1)][t.x+tryPos.x]&&s.push(tryPos):0===ig.game.board
[t.y+tryPos.y][t.x+tryPos.x]&&s.push(tryPos));if(0<o.length){if(m=o.random()){this.debug&&console.log
(m.x),s=e.pos.y+ig.game.brickSize*m.y,o=e.pos.x+ig.game.brickSize*m.x,ig.game.board[t.y+m.y][t.x+m.x]=
e.fen;for(n=ig.game.board[t.y][t.x]=0;n<ig.game.entities.length;n++){var r=ig.game.entities[n],u=r.pos
.x,a=r.pos.y,f=r.endX,c=r.endY;"white"===ig.game.playerColor&&(u===o&&a===s||o===f&&s===c)&&"player"===
r.EntityType?(r.zIndex=10,e.zIndex=1,r.hasDied=!0,r.deathTimer.set(.4)):"black"===ig.game.playerColor&&
(u===o&&a===s||o===f&&s===c)&&"opponent"===r.EntityType&&(r.zIndex=10,e.zIndex=1,r.hasDied=!0,r.deathTimer
.set(.4))}e.canmove=!1,n=Math.abs(m.y/10),e.tween({pos:{x:o,y:s}},.4-n,{easing:ig.Tween.Easing.Linear
.EaseNone}).start(),n=!0,e.isMovingTimer.set(.3);if(7===t.y+m.y)return ig.game.board[t.y+m.y][t.x+m.x
]="q",e.kill(),ig.game.spawnEntity(EntityQueenBlack,o,s),!1;if(0===t.y+m.y)return ig.game.board[t.y+m
.y][t.x+m.x]="Q",e.kill(),ig.game.spawnEntity(EntityQueenWhite,o,s,{canmove:!1}),!1}}else if(0<s.length
){o=s.random(),r=!1;for(l=0;l<s.length;l++)!r&&(o=s.random(),"white"===ig.game.playerColor&&0<=o.y&&o
.y<=ig.game.boardheight&&0<=o.x&&o.x<=ig.game.boardwidth&&0===ig.game.board[t.y+o.y][t.x+o.x]||"black"===
ig.game.playerColor&&0>o.y&&o.y<=ig.game.boardheight&&0<=o.x&&o.x<=ig.game.boardwidth&&0===ig.game.board
[t.y+o.y][t.x+o.x])&&(r=!0);if(r){this.debug&&console.log("found move"),n=Math.abs(o.y/10),s=e.pos.y+
ig.game.brickSize*o.y,r=e.pos.x+ig.game.brickSize*o.x,ig.game.board[t.y+o.y][t.x+o.x]=e.fen,ig.game.board
[t.y][t.x]=0,e.canmove=!1,2===o.y&&(e.enPassant=!0),e.tween({pos:{x:r,y:s}},.4-n,{easing:ig.Tween.Easing
.Linear.EaseNone}).start(),n=!0;if(7===t.y+o.y)return ig.game.board[t.y+o.y][t.x+o.x]="q",e.kill(),ig
.game.spawnEntity(EntityQueenBlack,r,s),!1;if(0===t.y+o.y)return ig.game.board[t.y+o.y][t.x+o.x]="Q",
e.kill(),ig.game.spawnEntity(EntityQueenWhite,r,s,{canmove:!1}),!1}}return n?(e.resetTimer.set(.1),e.
drawMoveCube=!0,e.isMovingTimer.set(.3),!0):!1}}),ig.baked=!0,ig.module("plugins.chess.knight").defines
(function(){Knight=function(e,t){var n,r,i,s;if(ig.game.playerIsMoving)return!1;r=n=!1;var o=[];r=[];
if("white"===ig.game.playerColor){if(tryPos={y:2,x:-1},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos
.x&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=t.x&&(ypos=t.y+tryPos
.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game
.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos]||"K"===ig.game.board
[ypos][xpos])&&r.push(tryPos)),tryPos={y:1,x:-2},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&0!==
ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=
t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos
][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos]||"K"===ig.game.board[ypos][
xpos])&&r.push(tryPos)),tryPos={y:2,x:1},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0!==
ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&(ypos=t
.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game.board[ypos][xpos]||"Q"===
ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos]||"K"===ig
.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:1,x:2},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos
.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=
ig.game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game
.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board
[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-2,x:-1},0<=t.y+tryPos.y&&0<=
t.x+tryPos.x&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=
t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos
][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos]||"K"===ig.game.board[ypos][
xpos])&&r.push(tryPos)),tryPos={y:-1,x:-2},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0!==ig.game.board[t.y+tryPos
.y][t.x+tryPos.x]&&0<=t.y&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos
]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===
ig.game.board[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-2,x:1},0<=t.y+
tryPos.y&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.
x<=ig.game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig
.game.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game
.board[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-1,x:2},0<=t.y+tryPos
.y&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.
game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===ig.game
.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board
[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:1,x:2},0<=t.y+tryPos.y&&t.y+
tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig.game.board[t
.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===
ig.game.board[ypos][xpos]||"N"===ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig
.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&r.push(tryPos
)),tryPos={y:2,x:-1},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos
.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=t.x&&o.push(tryPos),tryPos={y:1,x:-2},t.y+tryPos.y<=ig
.game.boardheight&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=
t.x&&o.push(tryPos),tryPos={y:2,x:1},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0===
ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&o.push(
tryPos),tryPos={y:1,x:2},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0===ig.
game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&o.push(tryPos
),tryPos={y:-2,x:-1},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=
t.y&&0<=t.x&&o.push(tryPos),tryPos={y:-1,x:-2},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0===ig.game.board[t.
y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&0<=t.x&&o.push(tryPos),tryPos={y:-2,x:1},0<=t.y+tryPos.y&&t.x+tryPos
.x<=ig.game.boardwidth&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&
o.push(tryPos),tryPos={y:-1,x:2},0<=t.y+tryPos.y&&t.x+tryPos.x<=ig.game.boardwidth&&0===ig.game.board
[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&o.push(tryPos),0<r.length){if(o=[],o=r
.random()){for(var u=e.pos.y+ig.game.brickSize*o.y,a=e.pos.x+ig.game.brickSize*o.x,f=0;f<ig.game.entities
.length;f++){var c=ig.game.entities[f];i=c.pos.x,s=c.pos.y,n=c.endX,r=c.endY,(i===a&&s===u||a===n&&u===
r)&&"player"===c.EntityType&&(c.zIndex=10,e.zIndex=1,c.hasDied=!0,c.deathTimer.set(.4))}e.canmove=!1,
twfactor=o.y>o.x?Math.abs(o.y/10):Math.abs(o.x/10),ig.game.board[t.y+o.y][t.x+o.x]=e.fen,ig.game.board
[t.y][t.x]=0,e.isMovingTimer.set(.3),e.tween({pos:{x:a,y:u}},.2+twfactor,{easing:ig.Tween.Easing.Linear
.EaseNone}).start(),n=!0}}else if(0<o.length){n=o.random(),r=!1;for(l=0;l<o.length;l++)r||(n=o.random
(),0<=n.y&&n.y<=ig.game.boardheight&&0<=n.x&&n.x<=ig.game.boardwidth&&0===ig.game.board[t.y+n.y][t.x+
n.x]&&(r=!0));o=e.pos.y+ig.game.brickSize*n.y,r=e.pos.x+ig.game.brickSize*n.x,e.canmove=!1,twfactor2=
n.y>n.x?Math.abs(n.y/10):Math.abs(n.x/10),ig.game.board[t.y+n.y][t.x+n.x]=e.fen,ig.game.board[t.y][t.
x]=0,e.tween({pos:{x:r,y:o}},.2+twfactor2,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),n=!0}}else if(
tryPos={y:2,x:-1},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&0!==ig.game.board[t.y+tryPos.y]
[t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game
.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board
[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos=
{y:1,x:-2},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos
.x]&&t.y<=ig.game.boardheight&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos
][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board[ypos][
xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:2
,x:1},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos
.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos
.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===
ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][xpos])&&r.push(
tryPos)),tryPos={y:1,x:2},t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig
.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&(ypos=t.y+
tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig
.game.board[ypos][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game
.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-2,x:-1},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0!==ig.game
.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&0<=t.x&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game
.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board
[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos=
{y:-1,x:-2},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&0<=
t.x&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[ypos]
[xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos
]||"k"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-2,x:1},0<=t.y+tryPos.y&&t.x+tryPos.x<=
ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&(
ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===
ig.game.board[ypos][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig
.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:-1,x:2},0<=t.y+tryPos.y&&t.x+tryPos.x<=ig.game.boardwidth&&0!==
ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t
.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[ypos][xpos]||"q"===ig.game.board[ypos
][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos][xpos]||"k"===ig.game.board[ypos][
xpos])&&r.push(tryPos)),tryPos={y:1,x:2},0<=t.y+tryPos.y&&t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos
.x&&t.x+tryPos.x<=ig.game.boardwidth&&0!==ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.
game.boardwidth&&(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game
.board[ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board
[ypos][xpos]||"k"===ig.game.board[ypos][xpos])&&r.push(tryPos)),tryPos={y:2,x:-1},t.y+tryPos.y<=ig.game
.boardheight&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=
t.x&&o.push(tryPos),tryPos={y:1,x:-2},t.y+tryPos.y<=ig.game.boardheight&&0<=t.x+tryPos.x&&0===ig.game
.board[t.y+tryPos.y][t.x+tryPos.x]&&t.y<=ig.game.boardheight&&0<=t.x&&o.push(tryPos),tryPos={y:2,x:1}
,t.y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0===ig.game.board[t.y+tryPos.y]
[t.x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&o.push(tryPos),tryPos={y:1,x:2},t.
y+tryPos.y<=ig.game.boardheight&&t.x+tryPos.x<=ig.game.boardwidth&&0===ig.game.board[t.y+tryPos.y][t.
x+tryPos.x]&&t.y<=ig.game.boardheight&&t.x<=ig.game.boardwidth&&o.push(tryPos),tryPos={y:-2,x:-1},0<=
t.y+tryPos.y&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&0<=t.x&&o.push(
tryPos),tryPos={y:-1,x:-2},0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos
.x]&&0<=t.y&&0<=t.x&&o.push(tryPos),tryPos={y:-2,x:1},0<=t.y+tryPos.y&&t.x+tryPos.x<=ig.game.boardwidth&&0===
ig.game.board[t.y+tryPos.y][t.x+tryPos.x]&&0<=t.y&&t.x<=ig.game.boardwidth&&o.push(tryPos),tryPos={y:-1
,x:2},0<=t.y+tryPos.y&&t.x+tryPos.x<=ig.game.boardwidth&&0===ig.game.board[t.y+tryPos.y][t.x+tryPos.x
]&&0<=t.y&&t.x<=ig.game.boardwidth&&o.push(tryPos),0<r.length){if(o=r.random()){u=e.pos.y+ig.game.brickSize*
o.y,a=e.pos.x+ig.game.brickSize*o.x;for(f=0;f<ig.game.entities.length;f++)if(c=ig.game.entities[f],i=
c.pos.x,s=c.pos.y,n=c.endX,r=c.endY,(i===a&&s===u||a===n&&u===r)&&"opponent"===c.EntityType)c.zIndex=10
,e.zIndex=1,c.hasDied=!0,c.deathTimer.set(.4);e.canmove=!1,twfactor=o.y>o.x?Math.abs(o.y/10):Math.abs
(o.x/10),ig.game.board[t.y+o.y][t.x+o.x]=e.fen,ig.game.board[t.y][t.x]=0,e.tween({pos:{x:a,y:u}},.2+twfactor
,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),n=!0}}else if(0<o.length){n=o.random(),r=!1;for(l=0
;l<o.length;l++)r||(n=o.random(),0<=n.y&&n.y<=ig.game.boardheight&&0<=n.x&&n.x<=ig.game.boardwidth&&0===
ig.game.board[t.y+n.y][t.x+n.x]&&(r=!0));o=e.pos.y+ig.game.brickSize*n.y,r=e.pos.x+ig.game.brickSize*
n.x,e.canmove=!1,twfactor2=n.y>n.x?Math.abs(n.y/10):Math.abs(n.x/10),ig.game.board[t.y+n.y][t.x+n.x]=
e.fen,ig.game.board[t.y][t.x]=0,e.tween({pos:{x:r,y:o}},.2+twfactor2,{easing:ig.Tween.Easing.Linear.EaseNone
}).start(),n=!0}return n?(e.isMovingTimer.set(.3),e.resetTimer.set(.1),e.drawMoveCube=!0):!1}}),ig.baked=!0
,ig.module("plugins.chess.bishop").defines(function(){Bishop=function(e,t){var n,r,s,o;if(ig.game.playerIsMoving
)return!1;if("white"===ig.game.playerColor){var u=!1,a=!1;n=!1,r=[];var a=[],f=t.x,c=t.y,h=.3;n&&console
.log("--* / Bishop / *--"),pieceBlocked=!1;for(i=1;i<ig.game.boardwidth+1;i++)c+i<=ig.game.boardwidth&&
f+i<=ig.game.boardwidth&&!pieceBlocked&&(0===ig.game.board[c+i][f+i]?r.push({y:i,x:i}):(pieceBlocked=!0
,("P"===ig.game.board[c+i][f+i]||"R"===ig.game.board[c+i][f+i]||"B"===ig.game.board[c+i][f+i]||"N"===
ig.game.board[c+i][f+i]||"Q"===ig.game.board[c+i][f+i]||"K"===ig.game.board[c+i][f+i])&&a.push({y:i,x
:i})));pieceBlocked=!1;for(i=1;i<ig.game.boardwidth+1;i++)0<=c-i&&f+i<=ig.game.boardwidth&&!pieceBlocked&&
(0===ig.game.board[c-i][f+i]?r.push({y:-i,x:i}):(pieceBlocked=!0,("P"===ig.game.board[c-i][f+i]||"R"===
ig.game.board[c-i][f+i]||"B"===ig.game.board[c-i][f+i]||"N"===ig.game.board[c-i][f+i]||"Q"===ig.game.
board[c-i][f+i]||"K"===ig.game.board[c-i][f+i])&&a.push({y:-i,x:i})));pieceBlocked=!1;for(i=1;i<ig.game
.boardwidth+1;i++)0<=c-i&&0<=f-i&&!pieceBlocked&&(0===ig.game.board[c-i][f-i]?r.push({y:-i,x:-i}):(pieceBlocked=!0
,("P"===ig.game.board[c-i][f-i]||"R"===ig.game.board[c-i][f-i]||"B"===ig.game.board[c-i][f-i]||"N"===
ig.game.board[c-i][f-i]||"Q"===ig.game.board[c-i][f-i]||"K"===ig.game.board[c-i][f-i])&&a.push({y:-i,
x:-i})));pieceBlocked=!1;for(i=1;i<ig.game.boardwidth+1;i++)c+i<=ig.game.boardwidth&&0<=f-i&&!pieceBlocked&&
(0===ig.game.board[c+i][f-i]?r.push({y:i,x:-i}):(pieceBlocked=!0,("P"===ig.game.board[c+i][f-i]||"R"===
ig.game.board[c+i][f-i]||"B"===ig.game.board[c+i][f-i]||"N"===ig.game.board[c+i][f-i]||"Q"===ig.game.
board[c+i][f-i]||"K"===ig.game.board[c+i][f-i])&&a.push({y:i,x:-i})));if(0<a.length){if(m=a.random())
{u=e.pos.y+ig.game.brickSize*m.y,a=e.pos.x+ig.game.brickSize*m.x,ig.game.board[t.y+m.y][t.x+m.x]=e.fen
;for(f=ig.game.board[t.y][t.x]=0;f<ig.game.entities.length;f++)if(c=ig.game.entities[f],s=c.pos.x,o=c
.pos.y,n=c.endX,r=c.endY,(s===a&&o===u||a===n&&u===r)&&"player"===c.EntityType)c.zIndex=10,e.zIndex=1
,c.hasDied=!0,c.deathTimer.set(.4),e.canmove=!1,e.isMovingTimer.set(.3);e.canmove=!1,e.tween({pos:{x:
a,y:u}},h,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),u=!0}}else if(0<r.length){u=[],a=!1;for(l=0
;l<r.length;l++)a||(u=r.random(),0<=u.y&&u.y<=ig.game.boardheight&&0<=u.x&&u.x<=ig.game.boardwidth&&0===
ig.game.board[t.y+u.y][t.x+u.x]&&(a=!0));n&&console.log(u.y+" "+u.x),n&&console.log(s+" "+o),s=e.pos.
y+ig.game.brickSize*u.y,o=e.pos.x+ig.game.brickSize*u.x,ig.game.board[t.y+u.y][t.x+u.x]=e.fen,ig.game
.board[t.y][t.x]=0,e.canmove=!1,e.tween({pos:{x:o,y:s}},h,{easing:ig.Tween.Easing.Linear.EaseNone}).start
(),u=!0}}else{n=u=!1,r=[],a=[],f=t.x,c=t.y,h=.3,n&&console.log("--* / white Bishop / *--"),pieceBlocked=!1
;for(i=1;i<ig.game.boardwidth+1;i++)c+i<=ig.game.boardwidth&&f+i<=ig.game.boardwidth&&!pieceBlocked&&
(0===ig.game.board[c+i][f+i]?r.push({y:i,x:i}):(pieceBlocked=!0,("p"===ig.game.board[c+i][f+i]||"r"===
ig.game.board[c+i][f+i]||"b"===ig.game.board[c+i][f+i]||"n"===ig.game.board[c+i][f+i]||"q"===ig.game.
board[c+i][f+i]||"k"===ig.game.board[c+i][f+i])&&a.push({y:i,x:i})));pieceBlocked=!1;for(i=1;i<ig.game
.boardwidth+1;i++)0<=c-i&&f+i<=ig.game.boardwidth&&!pieceBlocked&&(0===ig.game.board[c-i][f+i]?r.push
({y:-i,x:i}):(pieceBlocked=!0,("p"===ig.game.board[c-i][f+i]||"r"===ig.game.board[c-i][f+i]||"b"===ig
.game.board[c-i][f+i]||"n"===ig.game.board[c-i][f+i]||"q"===ig.game.board[c-i][f+i]||"k"===ig.game.board
[c-i][f+i])&&a.push({y:-i,x:i})));pieceBlocked=!1;for(i=1;i<ig.game.boardwidth+1;i++)0<=c-i&&0<=f-i&&!
pieceBlocked&&(0===ig.game.board[c-i][f-i]?r.push({y:-i,x:-i}):(pieceBlocked=!0,("p"===ig.game.board[
c-i][f-i]||"r"===ig.game.board[c-i][f-i]||"b"===ig.game.board[c-i][f-i]||"n"===ig.game.board[c-i][f-i
]||"q"===ig.game.board[c-i][f-i]||"k"===ig.game.board[c-i][f-i])&&a.push({y:-i,x:-i})));pieceBlocked=!1
;for(i=1;i<ig.game.boardwidth+1;i++)c+i<=ig.game.boardwidth&&0<=f-i&&!pieceBlocked&&(0===ig.game.board
[c+i][f-i]?r.push({y:i,x:-i}):(pieceBlocked=!0,("p"===ig.game.board[c+i][f-i]||"r"===ig.game.board[c+
i][f-i]||"b"===ig.game.board[c+i][f-i]||"n"===ig.game.board[c+i][f-i]||"q"===ig.game.board[c+i][f-i]||"k"===
ig.game.board[c+i][f-i])&&a.push({y:i,x:-i})));if(0<a.length){if(m=a.random()){u=e.pos.y+ig.game.brickSize*
m.y,a=e.pos.x+ig.game.brickSize*m.x,ig.game.board[t.y+m.y][t.x+m.x]=e.fen;for(f=ig.game.board[t.y][t.
x]=0;f<ig.game.entities.length;f++)if(c=ig.game.entities[f],s=c.pos.x,o=c.pos.y,n=c.endX,r=c.endY,(s===
a&&o===u||a===n&&u===r)&&"opponent"===c.EntityType)c.zIndex=10,e.zIndex=1,c.hasDied=!0,c.deathTimer.set
(.4),e.canmove=!1;e.canmove=!1,e.tween({pos:{x:a,y:u}},h,{easing:ig.Tween.Easing.Linear.EaseNone}).start
(),u=!0}}else if(0<r.length){u=[],a=!1;for(l=0;l<r.length;l++)a||(u=r.random(),0<=u.y&&u.y<=ig.game.boardheight&&0<=
u.x&&u.x<=ig.game.boardwidth&&0===ig.game.board[t.y+u.y][t.x+u.x]&&(a=!0));n&&console.log(u.y+" "+u.x
),n&&console.log(s+" "+o),s=e.pos.y+ig.game.brickSize*u.y,o=e.pos.x+ig.game.brickSize*u.x,ig.game.board
[t.y+u.y][t.x+u.x]=e.fen,ig.game.board[t.y][t.x]=0,e.canmove=!1,e.tween({pos:{x:o,y:s}},h,{easing:ig.
Tween.Easing.Linear.EaseNone}).start(),u=!0}}return u?(e.isMovingTimer.set(.3),e.resetTimer.set(.1),e
.drawMoveCube=!0):!1}}),ig.baked=!0,ig.module("plugins.chess.king").defines(function(){King=function(
e,t){var n,r,s,o;if(ig.game.playerIsMoving)return!1;if("white"===ig.game.playerColor){r=o=n=!1;var u=.1
,a=[];s=[],r=[],30<ig.game.seconds?(tryPos={y:0,x:1},r.push(tryPos),tryPos={y:0,x:1},r.push(tryPos),tryPos=
{y:0,x:-1},r.push(tryPos),tryPos={y:-1,x:1},r.push(tryPos),tryPos={y:-1,x:0},r.push(tryPos),tryPos={y
:-1,x:-1},r.push(tryPos),tryPos={y:1,x:0},r.push(tryPos),tryPos={y:1,x:1},r.push(tryPos),tryPos={y:1,
x:-1},r.push(tryPos),tryPos={y:1,x:1}):1===t.y?(tryPos={y:0,x:1},r.push(tryPos),tryPos={y:0,x:1},r.push
(tryPos),tryPos={y:0,x:-1},r.push(tryPos),tryPos={y:-1,x:1},r.push(tryPos),tryPos={y:-1,x:0},r.push(tryPos
),tryPos={y:-1,x:-1}):(tryPos={y:1,x:0},r.push(tryPos),tryPos={y:1,x:1},r.push(tryPos),tryPos={y:1,x:-1
},r.push(tryPos),tryPos={y:1,x:1}),r.push(tryPos);for(i=0;i<r.length;i++)tryPos=r[i],t.y+tryPos.y<=ig
.game.boardheight&&0<=t.y+tryPos.y&&0<=t.x+tryPos.x&&t.x+tryPos.x<=ig.game.boardwidth&&(0!==ig.game.board
[t.y+tryPos.y][t.x+tryPos.x]?(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("P"===ig.game.board[ypos][xpos]||"N"===
ig.game.board[ypos][xpos]||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig
.game.board[ypos][xpos]||"K"===ig.game.board[ypos][xpos])&&s.push(tryPos)):0===ig.game.board[t.y+tryPos
.y][t.x+tryPos.x]&&a.push(tryPos));if(0<s.length){var f=[];r=!1;for(l=0;l<a.length;l++)r||(f=s.random
(),0<=f.y&&f.y<=ig.game.boardheight&&0<=f.x&&f.x<=ig.game.boardwidth&&0===ig.game.board[t.y+f.y][t.x+
f.x]&&(r=!0));for(var a=e.pos.y+ig.game.brickSize*f.y,c=e.pos.x+ig.game.brickSize*f.x,h=0;h<ig.game.entities
.length;h++){var p=ig.game.entities[h];s=p.pos.x,o=p.pos.y,n=p.endX,r=p.endY,(s===c&&o===a||c===n&&a===
r)&&"player"===p.EntityType&&(p.zIndex=10,e.zIndex=1,p.hasDied=!0,p.deathTimer.set(.4))}e.canmove=!1,
n=Math.abs(f.y/10),ig.game.board[t.y+f.y][t.x+f.x]=e.fen,ig.game.board[t.y][t.x]=0,e.isMovingTimer.set
(.3),e.tween({pos:{x:c,y:a}},u+n,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),o=!0}else if(0<a.length
){s=a.random(),r=!1;for(l=0;l<a.length;l++)r||(s=a.random(),0<=s.y&&s.y<=ig.game.boardheight&&0<=s.x&&
s.x<=ig.game.boardwidth&&0===ig.game.board[t.y+s.y][t.x+s.x]&&(r=!0));n&&console.log(s.y+" "+s.x),n&&
console.log(f+" "+c),a=Math.abs(s.y/10),f=e.pos.y+ig.game.brickSize*s.y,c=e.pos.x+ig.game.brickSize*s
.x,ig.game.board[t.y+s.y][t.x+s.x]=e.fen,ig.game.board[t.y][t.x]=0,e.canmove=!1,e.tween({pos:{x:c,y:f
}},u+a,{easing:ig.Tween.Easing.Linear.EaseNone}).start(),o=!0}}else{o=n=!1,u=.1,a=[],s=[],r=[],30<ig.
game.seconds?(tryPos={y:0,x:1},r.push(tryPos),tryPos={y:0,x:1},r.push(tryPos),tryPos={y:0,x:-1},r.push
(tryPos),tryPos={y:-1,x:1},r.push(tryPos),tryPos={y:-1,x:0},r.push(tryPos),tryPos={y:-1,x:-1},r.push(
tryPos),tryPos={y:1,x:0},r.push(tryPos),tryPos={y:1,x:1},r.push(tryPos),tryPos={y:1,x:-1},r.push(tryPos
),tryPos={y:1,x:1}):1===t.y?(tryPos={y:0,x:1},r.push(tryPos),tryPos={y:0,x:1},r.push(tryPos),tryPos={
y:0,x:-1},r.push(tryPos),tryPos={y:-1,x:1},r.push(tryPos),tryPos={y:-1,x:0},r.push(tryPos),tryPos={y:-1
,x:-1}):(tryPos={y:1,x:0},r.push(tryPos),tryPos={y:1,x:1},r.push(tryPos),tryPos={y:1,x:-1},r.push(tryPos
),tryPos={y:1,x:1}),r.push(tryPos);for(i=0;i<r.length;i++)tryPos=r[i],t.y+tryPos.y<=ig.game.boardheight&&0<=
t.y+tryPos.y&&0<=t.x+tryPos.x&&t.x+tryPos.x<=ig.game.boardwidth&&(0!==ig.game.board[t.y+tryPos.y][t.x+
tryPos.x]?(ypos=t.y+tryPos.y,xpos=t.x+tryPos.x,("p"===ig.game.board[ypos][xpos]||"n"===ig.game.board[
ypos][xpos]||"q"===ig.game.board[ypos][xpos]||"r"===ig.game.board[ypos][xpos]||"b"===ig.game.board[ypos
][xpos]||"k"===ig.game.board[ypos][xpos])&&s.push(tryPos)):0===ig.game.board[t.y+tryPos.y][t.x+tryPos
.x]&&a.push(tryPos));if(0<s.length){f=[],r=!1;for(l=0;l<a.length;l++)r||(f=s.random(),0<=f.y&&f.y<=ig
.game.boardheight&&0<=f.x&&f.x<=ig.game.boardwidth&&0===ig.game.board[t.y+f.y][t.x+f.x]&&(r=!0));a=e.
pos.y+ig.game.brickSize*f.y,c=e.pos.x+ig.game.brickSize*f.x;for(h=0;h<ig.game.entities.length;h++)if(
p=ig.game.entities[h],s=p.pos.x,o=p.pos.y,n=p.endX,r=p.endY,(s===c&&o===a||c===n&&a===r)&&"opponent"===
p.EntityType)p.zIndex=10,e.zIndex=1,p.hasDied=!0,p.deathTimer.set(.4);e.canmove=!1,n=Math.abs(f.y/10)
,ig.game.board[t.y+f.y][t.x+f.x]=e.fen,ig.game.board[t.y][t.x]=0,e.tween({pos:{x:c,y:a}},u+n,{easing:
ig.Tween.Easing.Linear.EaseNone}).start(),o=!0}else if(0<a.length){s=a.random(),r=!1;for(l=0;l<a.length
;l++)r||(s=a.random(),0<=s.y&&s.y<=ig.game.boardheight&&0<=s.x&&s.x<=ig.game.boardwidth&&0===ig.game.
board[t.y+s.y][t.x+s.x]&&(r=!0));n&&console.log(s.y+" "+s.x),n&&console.log(f+" "+c),a=Math.abs(s.y/10
),f=e.pos.y+ig.game.brickSize*s.y,c=e.pos.x+ig.game.brickSize*s.x,ig.game.board[t.y+s.y][t.x+s.x]=e.fen
,ig.game.board[t.y][t.x]=0,e.canmove=!1,e.tween({pos:{x:c,y:f}},u+a,{easing:ig.Tween.Easing.Linear.EaseNone
}).start(),o=!0}}return o?(e.isMovingTimer.set(.3),e.resetTimer.set(.1),e.drawMoveCube=!0):!1}}),ig.baked=!0
,ig.module("plugins.tween").requires("impact.entity").defines(function(){Array.prototype.indexOf||(Array
.prototype.indexOf=function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1}),ig.Entity
.prototype.tweens=[],ig.Entity.prototype._preTweenUpdate=ig.Entity.prototype.update,ig.Entity.prototype
.update=function(){this._preTweenUpdate();if(0<this.tweens.length){for(var e=[],t=0;t<this.tweens.length
;t++)this.tweens[t].update(),this.tweens[t].complete||e.push(this.tweens[t]);this.tweens=e}},ig.Entity
.prototype.tween=function(e,t,n){return e=new ig.Tween(this,e,t,n),this.tweens.push(e),e},ig.Entity.prototype
.pauseTweens=function(){for(var e=0;e<this.tweens.length;e++)this.tweens[e].pause()},ig.Entity.prototype
.resumeTweens=function(){for(var e=0;e<this.tweens.length;e++)this.tweens[e].resume()},ig.Entity.prototype
.stopTweens=function(e){for(var t=0;t<this.tweens.length;t++)this.tweens[t].stop(e)},ig.Tween=function(
e,t,n,r){var i={},s={},o={},u=0,a=!1,f=!1,l=!1;this.duration=n,this.paused=this.complete=!1,this.easing=
ig.Tween.Easing.Linear.EaseNone,this.onComplete=!1,this.loop=this.delay=0,this.loopCount=-1,ig.merge(
this,r),this.loopNum=this.loopCount,this.chain=function(e){l=e},this.initEnd=function(e,t,n){if("object"!=typeof 
t[e])n[e]=t[e];else for(subprop in t[e])n[e]||(n[e]={}),this.initEnd(subprop,t[e],n[e])},this.initStart=
function(e,t,n,r){if("object"!=typeof n[e])"undefined"!=typeof t[e]&&(r[e]=n[e]);else for(subprop in 
n[e])r[e]||(r[e]={}),"undefined"!=typeof t[e]&&this.initStart(subprop,t[e],n[e],r[e])},this.start=function(
){this.paused=this.complete=!1,this.loopNum=this.loopCount,u=0,-1==e.tweens.indexOf(this)&&e.tweens.push
(this),f=!0,a=new ig.Timer;for(var n in t)this.initEnd(n,t,s);for(n in s)this.initStart(n,s,e,i),this
.initDelta(n,o,e,s)},this.initDelta=function(e,t,n,r){if("object"!=typeof r[e])t[e]=r[e]-n[e];else for(
subprop in r[e])t[e]||(t[e]={}),this.initDelta(subprop,t[e],n[e],r[e])},this.propUpdate=function(e,t,
n,r,i){if("object"!=typeof n[e])t[e]="undefined"!=typeof n[e]?n[e]+r[e]*i:t[e];else for(subprop in n[
e])this.propUpdate(subprop,t[e],n[e],r[e],i)},this.propSet=function(e,t,n){if("object"!=typeof t[e])n
[e]=t[e];else for(subprop in t[e])n[e]||(n[e]={}),this.propSet(subprop,t[e],n[e])},this.update=function(
){if(!f)return!1;if(this.delay){if(a.delta()<this.delay)return;this.delay=0,a.reset()}if(this.paused||
this.complete)return!1;var t=(a.delta()+u)/this.duration,t=1<t?1:t,n=this.easing(t);for(property in o
)this.propUpdate(property,e,i,o,n);if(1<=t){if(0==this.loopNum||!this.loop)return this.complete=!0,this
.onComplete&&this.onComplete(),l&&l.start(),!1;if(this.loop==ig.Tween.Loop.Revert){for(property in i)
this.propSet(property,i,e);u=0,a.reset(),-1!=this.loopNum&&this.loopNum--}else if(this.loop==ig.Tween
.Loop.Reverse){t={},n={},ig.merge(t,s),ig.merge(n,i),ig.merge(i,t),ig.merge(s,n);for(property in s)this
.initDelta(property,o,e,s);u=0,a.reset(),-1!=this.loopNum&&this.loopNum--}}},this.pause=function(){this
.paused=!0,u+=a.delta()},this.resume=function(){this.paused=!1,a.reset()},this.stop=function(e){e&&(this
.loop=this.complete=this.paused=!1,u+=n,this.update()),this.complete=!0}},ig.Tween.Loop={Revert:1,Reverse
:2},ig.Tween.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:
{},Circular:{},Elastic:{},Back:{},Bounce:{}},ig.Tween.Easing.Linear.EaseNone=function(e){return e},ig
.Tween.Easing.Quadratic.EaseIn=function(e){return e*e},ig.Tween.Easing.Quadratic.EaseOut=function(e){
return-e*(e-2)},ig.Tween.Easing.Quadratic.EaseInOut=function(e){return 1>(e*=2)?.5*e*e:-0.5*(--e*(e-2
)-1)},ig.Tween.Easing.Cubic.EaseIn=function(e){return e*e*e},ig.Tween.Easing.Cubic.EaseOut=function(e
){return--e*e*e+1},ig.Tween.Easing.Cubic.EaseInOut=function(e){return 1>(e*=2)?.5*e*e*e:.5*((e-=2)*e*
e+2)},ig.Tween.Easing.Quartic.EaseIn=function(e){return e*e*e*e},ig.Tween.Easing.Quartic.EaseOut=function(
e){return-(--e*e*e*e-1)},ig.Tween.Easing.Quartic.EaseInOut=function(e){return 1>(e*=2)?.5*e*e*e*e:-0.5*
((e-=2)*e*e*e-2)},ig.Tween.Easing.Quintic.EaseIn=function(e){return e*e*e*e*e},ig.Tween.Easing.Quintic
.EaseOut=function(e){return(e-=1)*e*e*e*e+1},ig.Tween.Easing.Quintic.EaseInOut=function(e){return 1>(
e*=2)?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},ig.Tween.Easing.Sinusoidal.EaseIn=function(e){return-Math.cos
(e*Math.PI/2)+1},ig.Tween.Easing.Sinusoidal.EaseOut=function(e){return Math.sin(e*Math.PI/2)},ig.Tween
.Easing.Sinusoidal.EaseInOut=function(e){return-0.5*(Math.cos(Math.PI*e)-1)},ig.Tween.Easing.Exponential
.EaseIn=function(e){return 0==e?0:Math.pow(2,10*(e-1))},ig.Tween.Easing.Exponential.EaseOut=function(
e){return 1==e?1:-Math.pow(2,-10*e)+1},ig.Tween.Easing.Exponential.EaseInOut=function(e){return 0==e?0
:1==e?1:1>(e*=2)?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*(e-1))+2)},ig.Tween.Easing.Circular.EaseIn=
function(e){return-(Math.sqrt(1-e*e)-1)},ig.Tween.Easing.Circular.EaseOut=function(e){return Math.sqrt
(1- --e*e)},ig.Tween.Easing.Circular.EaseInOut=function(e){return 1>(e/=.5)?-0.5*(Math.sqrt(1-e*e)-1)
:.5*(Math.sqrt(1-(e-=2)*e)+1)},ig.Tween.Easing.Elastic.EaseIn=function(e){var t,n=.1,r=.4;return 0==e?0
:1==e?1:(r||(r=.3),!n||1>n?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(e-=1))*Math.
sin((e-t)*2*Math.PI/r)))},ig.Tween.Easing.Elastic.EaseOut=function(e){var t,n=.1,r=.4;return 0==e?0:1==
e?1:(r||(r=.3),!n||1>n?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*e)*Math.sin((e-t)*2*
Math.PI/r)+1)},ig.Tween.Easing.Elastic.EaseInOut=function(e){var t,n=.1,r=.4;return 0==e?0:1==e?1:(r||
(r=.3),!n||1>n?(n=1,t=r/4):t=r/(2*Math.PI)*Math.asin(1/n),1>(e*=2)?-0.5*n*Math.pow(2,10*(e-=1))*Math.
sin((e-t)*2*Math.PI/r):.5*n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*2*Math.PI/r)+1)},ig.Tween.Easing.Back
.EaseIn=function(e){return e*e*(2.70158*e-1.70158)},ig.Tween.Easing.Back.EaseOut=function(e){return(e-=1
)*e*(2.70158*e+1.70158)+1},ig.Tween.Easing.Back.EaseInOut=function(e){return 1>(e*=2)?.5*e*e*(3.5949095*
e-2.5949095):.5*((e-=2)*e*(3.5949095*e+2.5949095)+2)},ig.Tween.Easing.Bounce.EaseIn=function(e){return 1-
ig.Tween.Easing.Bounce.EaseOut(1-e)},ig.Tween.Easing.Bounce.EaseOut=function(e){return(e/=1)<1/2.75?7.5625*
e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75
)*e+.984375},ig.Tween.Easing.Bounce.EaseInOut=function(e){return.5>e?.5*ig.Tween.Easing.Bounce.EaseIn
(2*e):.5*ig.Tween.Easing.Bounce.EaseOut(2*e-1)+.5}}),ig.baked=!0,ig.module("plugins.iospreloader").requires
("impact.loader").defines(function(){SvenardoIosLoader=ig.Loader.extend({endTime:0,fadeToWhiteTime:200
,fadeToGameTime:800,end:function(){this.parent(),this.endTime=Date.now(),ig.system.setDelegate(this)}
,run:function(){var e=Date.now()-this.endTime,t=1;if(e<this.fadeToWhiteTime)this.draw(),t=e.map(0,this
.fadeToWhiteTime,0,1);else{if(!(e<this.fadeToGameTime)){ig.system.setDelegate(ig.game);return}ig.game
.run(),t=e.map(this.fadeToWhiteTime,this.fadeToGameTime,1,0)}ig.system.context.fillStyle="rgba(255,255,255,"+
t+")",ig.system.context.fillRect(0,0,ig.system.realWidth,ig.system.realHeight)},draw:function(){this.
parent(),this._drawStatus+=(this.status-this._drawStatus)/5;var e=ig.system.context,t=ig.system.realWidth
,n=ig.system.realHeight;e.fillStyle="rgba(255,255,255,1)",e.fillRect(0,0,t,n),e=(100*this.status).round
()+"%",ig.system.context.fillStyle="#333",ig.system.context.fillText(e,t/2-10,60),ig.system.context.fillText
("Loading...",t/2-20,50),ig.system.context.fillText("Super POP!",t/2-30,150)}})}),ig.baked=!0,ig.module
("plugins.empika.under_mouse").requires("impact.game").defines(function(){ig.Game.inject({entitiesUnderMouse
:function(){for(var e=this.entities,t=[],n=0;n<e.length;n+=1){var r=e[n],i=r.pos.x,s=r.pos.y,o=r.size
.x,u=r.size.y;i<=ig.input.mouse.x+ig.game.screen.x&&ig.input.mouse.x+ig.game.screen.x<=i+o&&s<=ig.input
.mouse.y+ig.game.screen.y&&ig.input.mouse.y+ig.game.screen.y<=s+u&&t.push(r)}return t}})}),ig.baked=!0
,ig.module("plugins.touch-button").requires("impact.system","impact.input","impact.image").defines(function(
){ig.TouchButton=ig.Class.extend({action:"undefined",image:null,tile:0,pos:{x:0,y:0},size:{x:0,y:0},area
:{x1:0,y1:0,x2:0,y2:0},pressed:!1,touchId:0,init:function(e,t,n,r,i,s,o){var u=parseInt(ig.system.canvas
.offsetWidth)||ig.system.realWidth,u=ig.system.scale*(u/ig.system.realWidth);this.action=e,this.pos={
x:t,y:n},this.size={x:r,y:i},this.area={x1:t*u,y1:n*u,x2:(t+r)*u,y2:(n+i)*u},this.image=s||null,this.
tile=o||0,document.addEventListener("touchstart",this.touchStart.bind(this),!1),document.addEventListener
("touchend",this.touchEnd.bind(this),!1)},touchStart:function(e){e.preventDefault();if(!this.pressed)
{for(var t=ig.system.canvas,n=0,r=0;null!=t;)n+=t.offsetLeft,r+=t.offsetTop,t=t.offsetParent;for(t=0;
t<e.touches.length;t++){var i=e.touches[t].pageX-n,s=e.touches[t].pageY-r;if(i>this.area.x1&&i<this.area
.x2&&s>this.area.y1&&s<this.area.y2){this.pressed=!0,this.touchId=e.touches[t].identifier,ig.input.actions
[this.action]=!0,ig.input.locks[this.action]||(ig.input.presses[this.action]=!0,ig.input.locks[this.action
]=!0);break}}}},touchEnd:function(e){e.preventDefault();if(this.pressed)for(var t=0;t<e.changedTouches
.length;t++)if(e.changedTouches[t].identifier===this.touchId){this.pressed=!1,this.touchId=0,ig.input
.delayedKeyup[this.action]=!0;break}},draw:function(){this.image&&this.image.drawTile(this.pos.x,this
.pos.y,this.tile,this.size.x,this.size.y)}})}),ig.baked=!0,ig.module("plugins.preloader").requires("impact.loader"
).defines(function(){SvenardoLoader=ig.Loader.extend({endTime:0,fadeToWhiteTime:200,fadeToGameTime:800
,end:function(){this.parent(),this.endTime=Date.now(),ig.system.setDelegate(this)},run:function(){var e=
Date.now()-this.endTime,t=1;if(e<this.fadeToWhiteTime)this.draw(),t=e.map(0,this.fadeToWhiteTime,0,1)
;else{if(!(e<this.fadeToGameTime)){ig.system.setDelegate(ig.game);return}ig.game.run(),t=e.map(this.fadeToWhiteTime
,this.fadeToGameTime,1,0)}ig.system.context.fillStyle="rgba(255,255,255,"+t+")",ig.system.context.fillRect
(0,0,ig.system.realWidth,ig.system.realHeight)},draw:function(){this.parent(),this._drawStatus+=(this
.status-this._drawStatus)/5;var e=ig.system.context,t=ig.system.realWidth,n=ig.system.realHeight;e.fillStyle="rgba(0,0,0,1)"
,e.fillRect(0,0,t,n),n=(100*this.status).round()+"%",ig.system.context.fillStyle="#333",ig.system.context
.fillText(n,t/2-10,60),ig.system.context.fillText("Loading...",t/2-20,50),t=new Image,t.src="data:image/png;base64,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"
,e.drawImage(t,(ig.system.realWidth-250)/2,ig.system.realHeight/4-20)}})}),ig.baked=!0,ig.module("game.superchess"
).requires("impact.game","impact.font","plugins.font","plugins.text-menu","game.levels.sky","plugins.impact-storage"
,"game.entities.rook_black","game.entities.rook_white","game.entities.pawn_black","game.entities.pawn_white"
,"game.entities.knight_black","game.entities.knight_white","game.entities.horse_black","game.entities.king_white"
,"game.entities.horse_white","game.entities.queen_black","game.entities.queen_white","game.entities.king_black"
,"plugins.chess.rook","plugins.chess.pawn","plugins.chess.knight","plugins.chess.bishop","plugins.chess.king"
,"plugins.tween","plugins.iospreloader","plugins.empika.under_mouse","plugins.font","plugins.touch-button"
,"plugins.preloader").defines(function(){window.SuperChess=ig.Game.extend({debug:!1,debugMenu:!1,board
:[],tinyVersion:!1,fourinchVersion:!1,boardwidth:7,boardheight:7,playerColor:"white",font:new Font("20px Garamond"
),debugfont:new ig.Font("media/font_hellovetica_black_8.png"),spawnTimer:new ig.Timer(.2),tiles:new ig
.Image("media/chessboard.png"),spawns:[1,1,1,2,2,3,4,5],kills:null,validMoves:[],killMoves:[],playerIsMoving
:!1,castlingAllowedLeft:!0,castlingAllowedRight:!0,activeClick:!1,lastClick:!1,currentLevel:null,gameSETMODE
:0,drawdebug:[],gravity:0,validMoveArray:null,poppedBalloons:0,gameOver:!1,spawnChessBoard:!0,buttons
:[],gamespeed:3,speedMoveArr:[],endMessageShown:!1,movetimer:null,speedMovetimer:null,gametimer:null,
killsactual:0,tempkill:0,scoreReportedScore:!1,scoreReportedPop:!1,tempscore:0,score:0,nX:0,nY:0,startXpos
:32,startYpos:32,brickSize:64,getreadytimer:null,gameCenter:null,clearcolor:"#ffffff",backgroundScroll
:null,backgroundMap:null,gameOverTimer:null,gameOverTimerSet:!1,showlinkstimer:null,spawnPos:null,gametime
:null,seconds:0,minutes:0,playerWon:!1,playerLost:!1,init:function(){this.validMoveArray=[],this.storage=new 
ig.Storage,this.storage.initUnset("victories",0),this.storage.initUnset("losses",0),this.storage.initUnset
("gamesplayed",0),this.game_wins=this.storage.get("victories"),this.game_losses=this.storage.get("losses"
),this.games_played=this.storage.get("gamesplayed"),480>=parseInt(window.innerHeight,10)?(this.tinyVersion=!0
,this.boardwidth=4):568===parseInt(window.innerHeight,10)&&(this.fourinchVersion=!0,this.tinyVersion=!1
,this.boardwidth=3),this.minutes=this.seconds=0,ig.input.bind(ig.KEY.MOUSE1,"CanvasTouch"),this.spawnPosX=
[],this.spawnPosY=[],this.scoreReportedPop=this.scoreReportedScore=!1,this.movetimer=new ig.Timer(.6)
,this.speedMovetimer=new ig.Timer(.5),this.debug&&!window.ejecta&&(this.debugDisplay=new DebugDisplay
(this.debugfont)),this.movetimer=new ig.Timer(1),this.backgroundScroll=this.minutes=this.seconds=0,this
.gameOver=!1,this.showlinkstimer=new ig.Timer(1),ig.system.playAsWhite||(ig.game.playerColor="black")
,this.gametimer=new ig.Timer(1),this.storage=new ig.Storage;if(ig.system.restoreGame&&this.storage.isSet
("gboard")){this.debug&&console.log("Restoring"),this.board=ig.game.storage.get("gboard"),this.castlingAllowedRight=
ig.game.storage.get("castlingr"),this.castlingAllowedLeft=ig.game.storage.get("castlingl"),this.minutes=
this.seconds=0;var e=ig.game.storage.get("minutes");null!==e&&(this.minutes=e),e=ig.game.storage.get("seconds"
),null!==e&&(this.seconds=e)}else if(this.debug&&console.log("Fresh start"),ig.game.storage.set("castlingr"
,ig.game.castlingAllowedRight),ig.game.storage.set("castlingl",ig.game.castlingAllowedLeft),this.fourinchVersion
)for(i=0;8>i;i++)7===i?this.board[7]=["R","Q","K","B"]:6===i?this.board[6]=["P","P","P","P"]:0===i?this
.board[0]=["r","q","k","b"]:1===i?this.board[1]=["p","p","p","p"]:this.board[i]=[0,0,0,0];else if(this
.tinyVersion)for(i=0;8>i;i++)7===i?this.board[7]=["R","N","Q","K","B"]:6===i?this.board[6]=["P","P","P"
,"P","P"]:0===i?this.board[0]=["r","n","q","k","b"]:1===i?this.board[1]=["p","p","p","p","p"]:this.board
[i]=[0,0,0,0,0];else for(i=0;8>i;i++)7===i?this.board[7]="RNBQKBNR".split(""):6===i?this.board[6]="PPPPPPPP"
.split(""):0===i?this.board[0]="rnbqkbnr".split(""):1===i?this.board[1]="pppppppp".split(""):this.board
[i]=[0,0,0,0,0,0,0,0];this.getreadytimer=new ig.Timer(0),this.gameOverTimerSet=!1,this.loadLevel(LevelSky
),this.gameOverTimer=new ig.Timer(0),SuperChess.initialized=!0},clearOppononentDrawCubes:function(){for(
i=0;i<ig.game.entities.length;i++)ig.game.entities[i].drawMoveCube=!1},isEnemyMoving:function(){var e=!1
;for(i=0;i<ig.game.entities.length;i++)0<ig.game.entities[i].isMovingTimer.delta()?e=!0:(ig.game.entities
[i].isMovingTimer.set(1e3),e=!1);return e?!0:!1},killDeadPieces:function(){for(i=0;i<ig.game.entities
.length;i++)-1<ig.game.entities[i].deathTimer.delta()&&(ig.game.entities[i].currentAnim.alpha=Math.abs
(ig.game.entities[i].deathTimer.delta())),0<ig.game.entities[i].deathTimer.delta()&&ig.game.entities[
i].kill()},reset:function(){this.currentLevel=1,this.entities=[]},setTitle:function(){this.reset()},loadLevel
:function(){this.backgroundMaps.erase(this.backgroundMap),ig.system.clear(this.clearcolor);var e=[];this
.fourinchVersion?(console.log("**** 4INCH VERSION"),e=[[3,4,4,4,4,4,4,4,4,5],[10,1,1,8,8,1,1,8,8,12],
[10,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,12],[10,1
,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,12],[10,1,1,8,8
,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8
,8,12],[10,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,12],[17,18,18,18,18,18,18,18,18,19]]):this.tinyVersion?
(console.log("**** TINY VERSION"),e=[[3,4,4,4,4,4,4,4,4,4,4,5],[10,1,1,8,8,1,1,8,8,1,1,12],[10,1,1,8,8
,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8,8,1,1,12],
[10,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8
,8,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,1,1
,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,12
],[17,18,18,18,18,18,18,18,18,18,18,19]]):e=window.ejecta?[[3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,3,4,4
,4,4,5],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10
,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1
,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1
,1,8,8,12,10,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8
,1,1,8,8,1,1,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8
,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12],[10,8,8,1,1
,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,1
,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12,10,1,1,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12
],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12,10,1,1,1,1,12],[17,18,18,18,18,18,18,18,18,18,18,18,18,18,18
,18,18,19,17,18,18,18,18,19]]:[[3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8
,8,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8
,1,1,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12
],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8
,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],
[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[10,1,1,8,8,1,1,8,8,1,1,8,8,1,1,8,8,12],[10,1,1,8,8,1,1,8,8,1
,1,8,8,1,1,8,8,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[10,8,8,1,1,8,8,1,1,8,8,1,1,8,8,1,1,12],[17
,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,19]],e=new ig.BackgroundMap(32,e,this.tiles),e.setScreenPos
(0,0),e.draw(),ig.game.backgroundMaps[0]=e,this.backgroundMap=this.backgroundMaps[0]},checkBrick4Pos:
function(e){for(var t=0;t<ig.game.entities.length;t++){var n=ig.game.entities[t],r=Math.floor((n.pos.
x-ig.game.startXpos)/ig.game.brickSize),i=Math.floor((n.pos.y-ig.game.startYpos)/ig.game.brickSize);if(
parseInt(e.x,10)===parseInt(r,10)&&parseInt(e.y,10)===parseInt(i,10))return console.log(n),n.EntityType
}},killBrick4Pos:function(e){for(var t=0;t<ig.game.entities.length;t++){var n=ig.game.entities[t],r=Math
.floor((n.pos.x-ig.game.startXpos)/ig.game.brickSize),i=Math.floor((n.pos.y-ig.game.startYpos)/ig.game
.brickSize);parseInt(e.x,10)===parseInt(r,10)&&parseInt(e.y,10)===parseInt(i,10)&&"player"==n.EntityType&&
(n.zIndex=10,piece.zIndex=1,n.hasDied=!0,n.deathTimer.set(1))}},drawCubeValidMove:function(e){if(0<this
.validMoveArray.length)for(i=0;i<this.validMoveArray.length;i++){e=this.validMoveArray[i];var t=Math.
floor(e.x*ig.game.brickSize+ig.game.startXpos);e=Math.floor(e.y*ig.game.brickSize+ig.game.startYpos);
var n=ig.system.context,r=ig.system.scale,s=t*r-ig.game.screen.x*r,r=e*r-ig.game.screen.y*r;n.save(),
n.fillStyle="rgba(25,255,25,0.1)",n.fillRect(s,r,this.brickSize,this.brickSize),n.fillRect(t,e,this.brickSize
,this.brickSize),n.restore()}},putsCheck:function(e,t,n,r){var s=!1;for(i=0;i<t.length;i++)if(!s&&(tx=
(e.pos.x-ig.game.startXpos)/ig.game.brickSize,ty=(e.pos.y-ig.game.startYpos)/ig.game.brickSize,ty+t[i
].y<=ig.game.boardheight&&0<=ty+t[i].y&&0<=tx+t[i].x&&tx+t[i].x<=ig.game.boardwidth))if(0===ig.game.board
[ty+t[i].y][tx+t[i].x]){if(ypos=ty+t[i].y,xpos=tx,xpos+r<=ig.game.boardwidth&&0<=xpos+r&&ypos+n<=ig.game
.boardheight&&0<=ypos+n&&"K"===ig.game.board[ypos+n][xpos+r])return this.drawdebug.push({x:tx+t[i].x,
y:ty+t[i].y}),console.log("can take king "+i+"it :  x"+xpos+" y"+ypos),{x:t[i].x,y:t[i].y}}else s=!0;
return!1},checkThreat:function(e,t,n){var r=!1,s=!1;if(void 0!==e){for(i=0;i<t.length;i++)if(!s&&(tx=
(e.pos.x-ig.game.startXpos)/ig.game.brickSize,ty=(e.pos.y-ig.game.startYpos)/ig.game.brickSize,ty+t[i
].y<=ig.game.boardheight&&0<=tx+t[i].x&&0<=ty+t[i].y&&tx+t[i].x<=ig.game.boardwidth&&0!==ig.game.board
[ty+t[i].y][tx+t[i].x]))if(ypos=ty+t[i].y,xpos=tx+t[i].x,"P"===ig.game.board[ypos][xpos]&&1===t[i].x&&1===
t[i].y||"Q"===ig.game.board[ypos][xpos]||"R"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos
]||"K"===ig.game.board[ypos][xpos]){if(this.debug&&console.log("piece is in check "+i+"  "+t[i].x+" "+
t[i].y),r=!0,n)if(this.dangerBrickPos=ig.game.board[ypos][xpos],this.debug&&console.log("take it? "+t
[i].x+" "+t[i].y),1===t[i].x&&1===t[i].y||-1===t[i].x&&-1===t[i].y||1===t[i].x&&0===t[i].y||0===t[i].
x&&1===t[i].y||-1===t[i].x&&0===t[i].y||0===t[i].x&&-1===t[i].y||-1===t[i].x&&1===t[i].y||1===t[i].x&&-1===
t[i].y)this.speedMoveArr.push({b:e,k:t[i],v:!1}),s=!0;else{var r=!0,o=0,u=!1;movePos=[],movePos.push(
{x:1,y:1}),movePos.push({x:1,y:-1}),movePos.push({x:-1,y:1}),movePos.push({x:-1,y:-1}),movePos.push({
x:1,y:0}),movePos.push({x:-1,y:0}),movePos.push({x:0,y:1}),movePos.push({x:0,y:-1});for(o=0;o<movePos
.length;o++)u||(moveY=parseInt(ty+movePos[o].y,10),moveX=parseInt(tx+movePos[o].x,10),this.debug&&console
.log("checking "+moveY+" "+moveX),moveY<=ig.game.boardwidth&&0<=moveY&&moveX<=ig.game.boardwidth&&0<=
moveX&&0===ig.game.board[moveY][moveX]&&(this.speedMoveArr.push({b:e,k:!1,v:movePos[o]}),u=!0))}}else s=!0
;return r}},justCheckforCheck:function(e,t){this.debug&&console.log("just check");if(void 0===t)return!1
;var n=!1;return(n=this.checkThreat(e,t,!1))||(n=this.checkThreat(e,t,!1)),n||(n=this.checkThreat(e,t
,!1)),n||(n=this.checkThreat(e,t,!1)),n||(n=this.checkThreat(e,t,!1)),n||(n=this.checkThreat(e,t,!1))
,n||(n=this.checkThreat(e,t,!1)),n||(n=this.checkThreat(e,t,!1)),n&&this.debug&&console.log("KING IS THREATENED"
),n},_justCheckHelper:function(e,t){this.debug&&console.log("pos: "),this.debug&&console.log(e),this.
debug&&console.log("trypos: "),this.debug&&console.log(t);var n=!1,r=!1;for(i=0;i<t.length;i++)if(!r&&
(tx=(e.x-ig.game.startXpos)/ig.game.brickSize,ty=(e.y-ig.game.startYpos)/ig.game.brickSize,ty+t[i].y<=
ig.game.boardheight&&0<=tx+t[i].x&&0<=ty+t[i].y&&tx+t[i].x<=ig.game.boardwidth))if(0!==ig.game.board[
parseInt(ty+t[i].y,10)][parseInt(tx+t[i].x,10)]){if(ypos=parseInt(ty+t[i].y,10),xpos=parseInt(tx+t[i]
.x,10),this.debug&&console.log(ig.game.board[ypos][xpos]),"P"===ig.game.board[ypos][xpos]&&1===t[i].x&&1===
t[i].y||"Q"===ig.game.board[ypos][xpos]||"B"===ig.game.board[ypos][xpos])n=!0,this.debug&&console.log
("piece is in check "+i+"  "+t[i].x+" "+t[i].y)}else r=!0;return n},bishopCanTakeKing:function(e,t){if(void 0===
e)return!1;var n=!1;for(i=1;i<=ig.game.boardwidth+1;i++)if(e.bPos.x+i<=ig.game.boardwidth&&e.bPos.y+i<=
ig.game.boardheight&&(n||0!==ig.game.board[e.bPos.y+i][e.bPos.x+i])&&!n&&0!==ig.game.board[e.bPos.y+i
][e.bPos.x+i]){if(e.bPos.x+i===t.bPos.x&&e.bPos.y+i===t.bPos.y)return this.debug&&console.log("going for the kill"
),this.movePiece(e,{y:i,x:i},!1),!0;n=!0}for(i=1;i<=ig.game.boardwidth+1;i++)if(e.bPos.x+i<=ig.game.boardwidth&&0<=
e.bPos.y-i&&(n||0!==ig.game.board[e.bPos.y-i][e.bPos.x+i])&&!n&&0!==ig.game.board[e.bPos.y-i][e.bPos.
x+i]){if(e.bPos.x+i===t.bPos.x&&e.bPos.y-i===t.bPos.y)return console.log("going for the kill"),this.movePiece
(e,{y:-i,x:i},!1),!0;n=!0}for(i=1;i<=ig.game.boardwidth+1;i++)if(0<=e.bPos.x-i&&0<=e.bPos.y-i&&(n||0!==
ig.game.board[e.bPos.y-i][e.bPos.x-i])&&!n&&0!==ig.game.board[e.bPos.y-i][e.bPos.x-i]){if(e.bPos.x-i===
t.bPos.x&&e.bPos.y-i===t.bPos.y)return console.log("going for the kill"),this.movePiece(e,{y:-i,x:-i}
,!1),!0;n=!0}for(i=1;i<=ig.game.boardwidth+1;i++)if(0<=e.bPos.x-i&&e.bPos.y+i<=ig.game.boardheight&&(
n||0!==ig.game.board[e.bPos.y+i][e.bPos.x-i])&&!n&&0!==ig.game.board[e.bPos.y+i][e.bPos.x-i]){if(e.bPos
.x-i===t.bPos.x&&e.bPos.y+i===t.bPos.y)return console.log("going for the kill"),this.movePiece(e,{y:i
,x:-i},!1),!0;n=!0}},rookCanTakeKing:function(e,t){if(void 0===e)return!1;var n=!1;if(t.bPos.y===e.bPos
.y){for(i=1;i<=ig.game.boardwidth+1;i++)if(e.bPos.x+i<=ig.game.boardwidth&&(n||0!==ig.game.board[e.bPos
.y][e.bPos.x+i])&&!n&&0!==ig.game.board[e.bPos.y][e.bPos.x+i]){if(e.bPos.x+i===t.bPos.x)return console
.log("going for the kill"),this.movePiece(e,{y:0,x:i},!1),!0;n=!0}n=!1;for(i=1;i<=ig.game.boardwidth+1
;i++)if(0<=e.bPos.x-i&&(n||0!==ig.game.board[e.bPos.y][e.bPos.x-i])&&!n&&0!==ig.game.board[e.bPos.y][
e.bPos.x-i]){if(e.bPos.x-i===t.bPos.x)return console.log("going for the kill"),this.movePiece(e,{y:0,
x:-i},!1),!0;n=!0}}else if(t.bPos.y>e.bPos.y){n=!1;for(i=1;i<=ig.game.boardheight+1;i++)if(!n&&e.bPos
.y+i<=ig.game.boardheight&&(n||0!==ig.game.board[e.bPos.y+i][e.bPos.x])&&!n&&0!==ig.game.board[e.bPos
.y+i][e.bPos.x]){if(e.bPos.y+i===t.bPos.y&&e.bPos.x===t.bPos.x)return console.log("going for the kill"
),this.movePiece(e,{y:+i,x:0},!1),!0;n=!0}}else{n=!1;for(i=1;i<=ig.game.boardheight+1;i++)if(0<=e.bPos
.y-i&&(n||0!==ig.game.board[e.bPos.y-i][e.bPos.x])&&!n&&0!==ig.game.board[e.bPos.y-i][e.bPos.x]){if(e
.bPos.y-i===t.bPos.y&&e.bPos.x===t.bPos.x)return console.log("going for the kill"),this.movePiece(e,{
y:-i,x:0},!1),!0;n=!0}}return!1},isInCheck:function(e){if(void 0===e)return!1;var t=[],n=!1;if(!n){for(
i=1;i<ig.game.boardwidth+1;i++)t.push({y:i,x:-i});n=this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig
.game.boardwidth+1;i++)t.push({y:i,x:i});n=this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1
;i++)t.push({y:-i,x:-i});n=this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1;i++)t.
push({y:-i,x:i});n=this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1;i++)t.push({y:0
,x:i});n=this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1;i++)t.push({y:0,x:-i});n=
this.checkThreat(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1;i++)t.push({y:i,x:0});n=this.checkThreat
(e,t,!0),t=[]}if(!n){for(i=1;i<ig.game.boardwidth+1;i++)t.push({y:-i,x:0});n=this.checkThreat(e,t,!0)
}return n&&this.debug&&console.log("KING IS THREATENED"),n},movePiece:function(e,t,n){this.debug&&console
.log("speedmoving");var r=!1;if(void 0===e)return!1;if(void 0!==t&&!1!==t){n=(e.pos.x-ig.game.startXpos
)/ig.game.brickSize;var r=(e.pos.y-ig.game.startYpos)/ig.game.brickSize,i=e.pos.y+ig.game.brickSize*t
.y,s=e.pos.x+ig.game.brickSize*t.x,o=/^\d+$/;if(!o.test(i)||!o.test(s))return!1;this.debug&&console.log
("end "+i+" "+s);for(o=0;o<ig.game.entities.length;o++){var u=ig.game.entities[o],a=u.pos.x,f=u.pos.y
,l=u.endX,c=u.endY;"white"===ig.game.playerColor&&(a===s&&f===i||s===l&&i===c)&&"player"===u.EntityType?
(u.zIndex=10,e.zIndex=1,u.hasDied=!0,u.deathTimer.set(1)):"black"===ig.game.playerColor&&(a===s&&f===
i||s===l&&i===c)&&"opponent"===u.EntityType&&(u.zIndex=10,e.zIndex=1,u.hasDied=!0,u.deathTimer.set(1)
)}this.debug&&console.log("moving piece kill"),e.canmove=!1,e.tween({pos:{x:s,y:i}},.75,{easing:ig.Tween
.Easing.Linear.EaseNone}).start(),ig.game.board[r+t.y][n+t.x]=ig.game.board[r][n],ig.game.board[r][n]=0
,r=!0}else if(void 0!==n&&!1!==n){this.debug&&console.log("moving piece hide"),t=n,n=(e.pos.x-ig.game
.startXpos)/ig.game.brickSize,r=(e.pos.y-ig.game.startYpos)/ig.game.brickSize,i=e.pos.y+ig.game.brickSize*
t.y,s=e.pos.x+ig.game.brickSize*t.x,this.debug&&(console.log(t.y+" "+t.x),console.log(i+" "+s)),e.canmove=!1
,o=/^\d+$/;if(!o.test(i)||!o.test(s))return!1;e.tween({pos:{x:s,y:i}},.75,{easing:ig.Tween.Easing.Linear
.EaseNone}).start(),ig.game.board[r+t.y][n+t.x]=ig.game.board[r][n],ig.game.board[r][n]=0,this.speedMoveArr=
[],r=!0}return r?(e.resetTimer.set(.1),e.drawMoveCube=!0):!1},chooseCPUmoveDefense:function(){if(ig.game
.playerIsMoving)return!1;var e=[],t=[],n=[],r=[],s=[],o=[];qCount=bCount=rCount=1;for(i=0;i<ig.game.entities
.length;i++){if(!0===ig.game.entities[i].canmove&&"white"===ig.game.playerColor&&"opponent"==ig.game.
entities[i].EntityType&&"k"===ig.game.entities[i].fen||"black"===ig.game.playerColor&&"player"==ig.game
.entities[i].EntityType&&"K"===ig.game.entities[i].fen)e={b:ig.game.entities[i],py:ig.game.entities[i
].pos.y,px:ig.game.entities[i].pos.x,x:(ig.game.entities[i].pos.x-ig.game.startXpos)/ig.game.brickSize
,y:(ig.game.entities[i].pos.y-ig.game.startYpos)/ig.game.brickSize};if("white"===ig.game.playerColor&&"player"==
ig.game.entities[i].EntityType&&"K"===ig.game.entities[i].fen||"black"===ig.game.playerColor&&"opponent"==
ig.game.entities[i].EntityType&&"k"===ig.game.entities[i].fen)targetKing={b:ig.game.entities[i],py:ig
.game.entities[i].pos.y,px:ig.game.entities[i].pos.x,x:(ig.game.entities[i].pos.x-ig.game.startXpos)/
ig.game.brickSize,y:(ig.game.entities[i].pos.y-ig.game.startYpos)/ig.game.brickSize};if(!0===ig.game.
entities[i].canmove&&"white"===ig.game.playerColor&&"opponent"==ig.game.entities[i].EntityType&&"q"===
ig.game.entities[i].fen&&1===qCount||"black"===ig.game.playerColor&&"player"==ig.game.entities[i].EntityType&&"Q"===
ig.game.entities[i].fen&&1===qCount)qCount++,t={b:ig.game.entities[i],py:ig.game.entities[i].pos.y,px
:ig.game.entities[i].pos.x,x:(ig.game.entities[i].pos.x-ig.game.startXpos)/ig.game.brickSize,y:(ig.game
.entities[i].pos.y-ig.game.startYpos)/ig.game.brickSize};if(!0===ig.game.entities[i].canmove&&"white"===
ig.game.playerColor&&"opponent"==ig.game.entities[i].EntityType&&"r"===ig.game.entities[i].fen||"black"===
ig.game.playerColor&&"player"==ig.game.entities[i].EntityType&&"R"===ig.game.entities[i].fen)1===rCount?
(rCount++,n={b:ig.game.entities[i],py:ig.game.entities[i].pos.y,px:ig.game.entities[i].pos.x,x:(ig.game
.entities[i].pos.x-ig.game.startXpos)/ig.game.brickSize,y:(ig.game.entities[i].pos.y-ig.game.startYpos
)/ig.game.brickSize}):r={b:ig.game.entities[i],py:ig.game.entities[i].pos.y,px:ig.game.entities[i].pos
.x,x:(ig.game.entities[i].pos.x-ig.game.startXpos)/ig.game.brickSize,y:(ig.game.entities[i].pos.y-ig.
game.startYpos)/ig.game.brickSize};if(!0===ig.game.entities[i].canmove&&"white"===ig.game.playerColor&&"opponent"==
ig.game.entities[i].EntityType&&"b"===ig.game.entities[i].fen||"black"===ig.game.playerColor&&"player"==
ig.game.entities[i].EntityType&&"B"===ig.game.entities[i].fen)1===bCount?(bCount++,s={b:ig.game.entities
[i],py:ig.game.entities[i].pos.y,px:ig.game.entities[i].pos.x,x:(ig.game.entities[i].pos.x-ig.game.startXpos
)/ig.game.brickSize,y:(ig.game.entities[i].pos.y-ig.game.startYpos)/ig.game.brickSize}):o={b:ig.game.
entities[i],py:ig.game.entities[i].pos.y,px:ig.game.entities[i].pos.x,x:(ig.game.entities[i].pos.x-ig
.game.startXpos)/ig.game.brickSize,y:(ig.game.entities[i].pos.y-ig.game.startYpos)/ig.game.brickSize}
}var u=!1,a=!1;void 0!==e&&this.isInCheck(e.b),e=this.rookCanTakeKing(t.b,targetKing.b),!e&&n&&(u=this
.rookCanTakeKing(n.b,targetKing.b)),!u&&!e&&r&&(u=this.rookCanTakeKing(r.b,targetKing.b)),!u&&!e&&r&&
(u=this.rookCanTakeKing(r.b,targetKing.b)),!u&&!e&&s&&(a=this.bishopCanTakeKing(s.b,targetKing.b)),!a&&!
u&&!e&&o&&this.bishopCanTakeKing(o.b,targetKing.b)},shuffle:function(e){for(var t=e.length,n,r;t--;)r=
Math.random()*t|0,n=e[t],e[t]=e[r],e[r]=n;return e},chooseCPUmove:function(){cpuMovePool=[];for(i=0;i<
ig.game.entities.length;i++)"white"===ig.game.playerColor&&!0===ig.game.entities[i].canmove&&"opponent"==
ig.game.entities[i].EntityType?cpuMovePool.push(ig.game.entities[i]):"black"===ig.game.playerColor&&!0===
ig.game.entities[i].canmove&&"player"==ig.game.entities[i].EntityType&&cpuMovePool.push(ig.game.entities
[i]);var e=cpuMovePool.random();if(e){brickPos={x:(e.pos.x-ig.game.startXpos)/ig.game.brickSize,y:(e.
pos.y-ig.game.startYpos)/ig.game.brickSize};var r=!1;for(i=n=t=0;i<ig.game.entities.length;i++)"opponent"===
ig.game.entities[i].EntityType&&n++;for(;!r&&t<n;)"king"==e.bricktype&&(r=King(e,brickPos)),"bishop"==
e.bricktype&&(r=Bishop(e,brickPos)),"pawn"==e.bricktype&&(r=Pawn(e,brickPos)),"knight"==e.bricktype&&
(r=Knight(e,brickPos)),"queen"==e.bricktype&&(r=5>Math.floor(5*Math.random())?Rook(e,brickPos):Knight
(e,brickPos)),"rook"==e.bricktype&&(r=Rook(e,brickPos)),t++;r&&this.debug?console.log("did move"):this
.debug&&console.log("stood still")}},checkWinLose:function(){var e=!1,t=!1,n=!1,r=!1;for(i=0;i<ig.game
.entities.length;i++)"EntityKingWhite"==ig.game.entities[i].etype&&(e=!0),"EntityKingBlack"==ig.game.
entities[i].etype&&(t=!0);!t&&"black"===ig.game.playerColor&&(this.playerWon=n=!1,r=!0),!t&&"white"===
ig.game.playerColor&&(r=this.playerWon=n=!0),!e&&"black"===ig.game.playerColor&&(r=this.playerWon=n=!0
),!e&&"white"===ig.game.playerColor&&(this.playerWon=n=!1,r=!0);if(r&&n&&!ig.game.endMessageShown){ig
.system.stats.LastRoundWon=!0,0<ig.system.stats.WinningStreak?ig.system.stats.WinningStreak++:ig.system
.stats.WinningStreak=1,ig.system.stats.PlaysThisSession+=1,2<ig.system.stats.WinningStreak&&Alertify.
log.success("You're doing well. "+ig.system.stats.WinningStreak+" games won in a row");if(!window.Ejecta
){window.Ejecta||($(".alertify-dialog").css("zIndex","81"),$(".alertify-cover").css("zIndex","-999"),
$(".alertify-cover").css("backgroundColor","rgba(0,0,0,0.1)"),$(".is-alertify-cover-showing").css("backgroundColor"
,"rgba(0,0,0,0.1)"),$("#canvas").css("backgroundColor","rgba(0,0,0,0.1)"),Alertify.dialog.labels.ok="One more go"
,Alertify.dialog.buttonReverse=!0,Alertify.dialog.labels.cancel="I'm done",Alertify.dialog.confirm("Great, you won!"
,function(){$(".alertify-dialog").css("zIndex","-99999"),ig.system.setGame(SuperChess),ig.system.restoreGame=!1
},function(){ig.system.setGame(GameMenu),gamesplayed=ig.game.storage.get("gamesplayed"),Alertify.log.
success("You've played "+gamesplayed+" rounds!"),Alertify.log.success("Why not have another go?")}));
for(k=0;k<ig.game.entities.length;k++)ig.game.entities[k].deathTimer.set(3*Math.random())}ig.game.endMessageShown=!0
,this.movetimer.set(1e9),this.speedMovetimer.set(1e9),this.gameOver=!0}r&&!n&&!ig.game.endMessageShown&&
(this.playerLost=!0,gamesplayed=ig.game.storage.get("gamesplayed"),this.storage.set("gamesplayed",gamesplayed+1
),window.Ejecta||($(".alertify-dialog").css("zIndex","999"),$(".alertify-cover").css("zIndex","-999")
,$(".alertify-cover").css("backgroundColor","rgba(0,0,0,0.1)"),$(".is-alertify-cover-showing").css("backgroundColor"
,"rgba(0,0,0,0.1)"),$("#canvas").css("backgroundColor","rgba(0,0,0,0.1)"),Alertify.dialog.labels.ok="One more go"
,Alertify.dialog.buttonReverse=!0,Alertify.dialog.labels.cancel="I'm done",Alertify.dialog.confirm("Sorry mate, you lost!"
,function(){$(".alertify-dialog").css("zIndex","-99999"),ig.system.setGame(SuperChess),ig.system.restoreGame=!1
},function(){ig.system.setGame(GameMenu),gamesplayed=ig.game.storage.get("gamesplayed"),Alertify.log.
success("You've played "+gamesplayed+" rounds!"),Alertify.log.success("Why not have another go?")})),
ig.game.endMessageShown=!0,this.movetimer.set(1e9),this.speedMovetimer.set(1e9),this.gameOver=!0)},performMoves
:function(){0<this.speedMoveArr.length&&(this.movePiece(this.speedMoveArr[0].b,this.speedMoveArr[0].k
,this.speedMoveArr[0].v),this.speedMoveArr=[])},cleanBoard:function(){gbCopy=ig.game.board;for(i=0;7>=
i;i++)for(j=0;7>=j;j++)gbCopy[i][j]=0;for(i=0;i<ig.game.entities.length;i++)gbCopy[parseInt(ig.game.entities
[i].bPos.y,10)][parseInt(ig.game.entities[i].bPos.x,10)]=ig.game.entities[i].fen;return gbCopy},update
:function(){this.parent();var e="";for(x=0;x<=parseInt(ig.game.boardwidth,10);x++)for(y=0;y<=parseInt
(ig.game.boardwidth,10);y++)e=ig.game.board[y][x],1<e.length&&alert("collision in pos "+ig.game.board
[y][x]);this.isEnemyMoving()||(this.spawnChessBoard&&this.spawnBoard(),this.checkWinLose(),this.killDeadPieces
(),"multiplayer"!=ig.system.playMode&&(ig.game.validMoves=[],ig.game.killMoves=[],ig.game.speedMoveArr=
[],this.performMoves(),0>=this.speedMoveArr.length&&0<this.speedMovetimer.delta()&&(this.chooseCPUmoveDefense
(),this.speedMovetimer.reset()),0<this.movetimer.delta()&&(this.chooseCPUmove(),this.movetimer.reset(
))),ig.input.pressed("startGame")&&this.gameOver&&(this.level=1,10>ig.game.gameSETMODE?ig.game.gameSETMODE++
:ig.game.gameSETMODE=1,ig.system.setGame(SuperChess)))},spawnBoard:function(){if(this.spawnChessBoard
){for(i=0;8>i;i++)for(j=0;j<=parseInt(ig.game.boardwidth,10);j++)void 0!==ig.game.board[i][j]&&0!==ig
.game.board[i][j]&&null!==ig.game.board[i][j]&&("r"==ig.game.board[i][j]?ent=EntityRookBlack:"n"==ig.
game.board[i][j]?ent=EntityKnightBlack:"b"==ig.game.board[i][j]?ent=EntityHorseBlack:"q"==ig.game.board
[i][j]?ent=EntityQueenBlack:"k"==ig.game.board[i][j]?ent=EntityKingBlack:"R"==ig.game.board[i][j]?ent=
EntityRookWhite:"N"==ig.game.board[i][j]?ent=EntityKnightWhite:"B"==ig.game.board[i][j]?ent=EntityHorseWhite
:"Q"==ig.game.board[i][j]?ent=EntityQueenWhite:"K"==ig.game.board[i][j]?ent=EntityKingWhite:"P"==ig.game
.board[i][j]?ent=EntityPawnWhite:"p"==ig.game.board[i][j]&&(ent=EntityPawnBlack),ig.game.spawnEntity(
ent,64*j+ig.game.startXpos,ig.game.startYpos+64*i));this.spawnChessBoard=!1}},draw:function(){this.backgroundMap
.draw(),this.parent();for(var e=0;e<this.buttons.length;e++)this.buttons[e].draw();ig.game.drawCubeValidMove
({x:4,y:4}),0<this.gametimer.delta()&&!this.gameOver&&(this.seconds++,this.gametimer.reset()),60===this
.seconds&&(this.minutes++,this.seconds=0),(new Date).getTime(),this.framerateNow=(new Date).getTime()
,secpad="",10>this.seconds&&(secpad="0");if(window.ejecta&&(this.tinyVersion||this.fourinchVersion)){
var t=ig.system.context;t.font="12pt Optima-ExtraBlack",t.textAlign="left",t.fillStyle="#4973ff",t.fillStyle="#e5bc41"
,t.fillText(this.minutes+":"+secpad+this.seconds,26,19),t.fillText("TINY CHESS",110,19),t.fillStyle="#593915"
,t.fillText("TINY CHESS",109,18),t.fillText(this.minutes+":"+secpad+this.seconds,25,18)}else window.ejecta&&!
this.tinyVersion&&!this.fourinchVersion?(t=ig.system.context,t.font="12pt Optima-ExtraBlack",t.textAlign="left"
,t.fillStyle="#4973ff",t.fillStyle="#e5bc41",t.fillText(this.minutes+":"+secpad+this.seconds,653,116)
,t.fillText("REAL TIME",631,55),t.fillStyle="#593915",t.fillText("REAL TIME",630,54),t.fillText(this.
minutes+":"+secpad+this.seconds,652,115),t.fillStyle="#e5bc41",t.fillText("CHESS",640,75),t.fillStyle="#593915"
,t.fillText("CHESS",639,74),t.fillText("Wins: "+this.game_wins,642,295),t.fillText("Losses: "+this.game_losses
,637,315),t.fillText("Games: "+this.games_played,634,335),ig.system.playAsWhite?(t.fillText("Playing as"
,635,195),t.fillText("white",648,220)):(t.fillText("Playing as",635,195),t.fillText("black",648,220))
,t.font="8pt Optima-ExtraBlack",t.fillText("www.svenardo.com",621,528)):this.font.draw(this.minutes+":"+
secpad+this.seconds,12,2);if(this.gameOver){e=ig.system.context,e.beginPath(),e.rect(148,120,380,80),
e.fillStyle="white",e.fill(),e.lineWidth=7,e.strokeStyle="black",e.stroke(),this.playerWon&&window.Ejecta?
(t=ig.system.context,t.font="24pt Optima-ExtraBlack",t.textAlign="left",t.fillStyle="#e5bc41",t.fillText
("Great, you won!",164,165),t.fillStyle="#593915",t.fillText("Great, you won!",163,164)):this.playerLost&&
window.Ejecta&&(e=ig.system.context,e.font="24pt Optima-ExtraBlack",e.textAlign="left",e.fillStyle="#e5bc41"
,e.fillText("Sorry, you lost...",164,165),e.fillStyle="#593915",e.fillText("Sorry, you lost...",163,164
)),this.gameOverTimerSet||(this.gameOverTimer.set(7),this.gameOverTimerSet=!0,this.playerLost?this.storage
.set("losses",this.storage.get("losses")+1):this.storage.set("victories",this.storage.get("victories"
)+1),this.storage.set("gamesplayed",ig.game.storage.get("gamesplayed")+1));if(!window.ejecta&&ig.ua.mobile
){for(e=0;e<this.menubuttons.length;e++)this.menubuttons[e].draw();this.font.draw("GAME OVER",ig.system
.width/2,170,ig.Font.ALIGN.CENTER)}else window.ejecta&&0<this.gameOverTimer.delta()&&ig.system.setGame
(GameMenu);0<this.getreadytimer.delta()&&!this.gameOver&&(window.ejecta?(e=ig.system.context,e.font="26pt Futura-Medium"
,e.textAlign="center",t.fillStyle="#e5bc41",e.fillText("GOOD LUCK!",354,219),t.fillStyle="#593915",e.
fillText("GOOD LUCK!",355,220)):this.font.draw("GOOD LUCK!",225,170,ig.Font.ALIGN.CENTER)),Config.debug&&
(this._draw_bottom_strip(),t=ig.system.context,t.font="16pt Futura-Medium",t.textAlign="center",t.fillStyle="#4973ff"
,t.fillText("Ent: "+ig.game.entities.length,35*ig.system.scale,ig.system.height-5*ig.system.scale))}this
.debug&&this._draw_board_debug()},_queen_ch:function(){for(i=0;i<this.drawdebug.length;i++){x=this.drawdebug
[i].x,y=this.drawdebug[i].y;var e=ig.system.context;e.font="12pt Optima-ExtraBlack",e.fillStyle="#aaaaaa"
,e.fillText("Q",x*ig.game.brickSize,y*ig.game.brickSize)}},_draw_board_debug:function(){for(y=0;y<=ig
.game.boardheight;y++)for(x=0;x<=ig.game.boardwidth;x++){var e=ig.system.context;e.font="12pt Optima-ExtraBlack"
,e.textAlign="left",e.fillStyle="P"===ig.game.board[y][x]||"B"===ig.game.board[y][x]||"R"===ig.game.board
[y][x]||"N"===ig.game.board[y][x]||"K"===ig.game.board[y][x]||"Q"===ig.game.board[y][x]?"#990000":"p"===
ig.game.board[y][x]||"b"===ig.game.board[y][x]||"r"===ig.game.board[y][x]||"n"===ig.game.board[y][x]||"k"===
ig.game.board[y][x]||"q"===ig.game.board[y][x]?"#000066":"#aaaaaa",e.fillText(ig.game.board[y][x],ig.
game.startXpos+6+x*ig.game.brickSize,ig.game.startYpos-6+y*ig.game.brickSize+32)}},_draw_bottom_strip
:function(){ig.system.context.fillStyle="rgba(90,90,90,0.8)",ig.system.context.fillRect(0,ig.system.height-25*
ig.system.scale,ig.system.width*ig.system.scale,25*ig.system.scale)}}),window.SuperChess.checkOrientation=
function(){if(!window.ejecta){var e=SuperChess.isPortrait();e!==SuperChess.wasPortrait&&(SuperChess.wasPortrait=
e,ig.$("#loading").style.display="none",e?(ig.$("#canvas").style.display="block",SuperChess.initialized&&
SuperChess.paused?(ig.system.startRunLoop(),SuperChess.paused=!1):SuperChess.initialized||(window.scrollTo
(0,0),window.setTimeout("SuperChess.startGame",1))):(SuperChess.initialized&&(ig.system.stopRunLoop()
,SuperChess.paused=!0),ig.$("#canvas").style.display="none"))}},window.SuperChess.tweetPopup=function(
){var e="I just scored "+ig.game.score+" in #SuperChess!";return!window.open("http://twitter.com/share?url="+
encodeURIComponent("http://play.svenardo.com/alphaforce/")+"&text="+encodeURIComponent(e),"_self","width=320,height=480,scrollbars=no"
)},window.SuperChess.wasPortrait=-1,window.SuperChess.isPortrait=function(){return!ig.ua.mobile||window
.innerHeight>window.innerWidth},window.ejecta||(window.addEventListener("orientationchange",SuperChess
.checkOrientation,!1),window.addEventListener("resize",SuperChess.checkOrientation,!1),window.SuperChess
.checkOrientation());if(window.Ejecta){var e=576,r=window.innerWidth/(window.innerHeight/e);canvas.style
.width=window.innerWidth,canvas.style.height=window.innerHeight,console.log("height: "+e+" width: "+r
),ig.main("#canvas",GameMenu,60,r,e,1,!1)}else{r=window.innerWidth,e=window.innerHeight,r=320,e=480,window
.innerWidth>Config.background.x&&(r=Config.background.x),window.innerHeight>Config.background.y&&(e=Config
.background.y);if(ig.ua.mobile||ig.ua.iPad)ig.Sound.enabled=!1;ig.main("#canvas",GameMenu,60,r,e,1,SvenardoLoader
),ig.$("#loading").style.display="none"}window.document.checkOrientation=function(){var e=SuperChess.
isPortrait();e!==SuperChess.wasPortrait&&(ig.SuperChess.wasPortrait=e)}}),ig.baked=!0,ig.module("game.main"
).requires("impact.game","game.config","game.menu","game.lobby","game.superchess","plugins.impact-storage"
).defines(function(){ig.System.inject({playerData:{playerName:"Guest"},socket:!1,pressedMenu:!1,hostingGame
:!1,connectedToRemotePlayer:!1,playMode:"singleplayer",storage:new ig.Storage,stats:{PlayerHasMovedThisRound
:!1,PlaysThisSession:0,WinningStrek:0,LosingStreak:0,LastRoundWon:!1},init:function(){ig.system.playerData
.playerName=this.storage.getOrSet("playername","Guest")},connectToWS:function(){var e=ig.system.canvas
.width,t=ig.system.canvas.height;Math.round(20*Math.random());var n=document.getElementById("canvas")
,r=n.getContext("2d");n.width=e,n.height=t,n.imageSmoothingEnabled=!0,r.strokeStyle="#0f0f55",r.lineWidth=4
;var i=new Ejecta.WebSocket("ws://www.svenardo.com:8080");return i.binaryType="arraybuffer",i.addEventListener
("open",function(){var e=JSON.stringify({type:"_login",name:ig.system.playerData.playerName});i.send(
e)}),window.addEventListener("sendAMessage",function(e){console.log("send a message "+e)}),i.addEventListener
("message",function(e){console.log("got message with type: "+e.type),"lobby"===e.type?console.log("got message from lobby"
):console.log(e.data)}),i.addEventListener("close",function(){this.socket=null}),i.addEventListener("error"
,function(e){return console.log(e),!1}),ig.system.socket=i}})});