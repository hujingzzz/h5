var Laya=window.Laya=(function(window,document){var Laya={__internals:[],__packages:{},__classmap:{'Object':Object,'Function':Function,'Array':Array,'String':String},__sysClass:{'object':'Object','array':'Array','string':'String','dictionary':'Dictionary'},__propun:{writable:true,enumerable:false,configurable:true},__presubstr:String.prototype.substr,__substr:function(ofs,sz){return arguments.length==1?Laya.__presubstr.call(this,ofs):Laya.__presubstr.call(this,ofs,sz>0?sz:(this.length+sz));},__init:function(_classs){_classs.forEach(function(o){o.__init$&&o.__init$();});},__isClass:function(o){return o&&(o.__isclass||o==Object||o==String||o==Array);},__newvec:function(sz,value){var d=[];d.length=sz;for(var i=0;i<sz;i++)d[i]=value;return d;},__extend:function(d,b){for(var p in b){if(!b.hasOwnProperty(p))continue;var gs=Object.getOwnPropertyDescriptor(b,p);var g=gs.get,s=gs.set;if(g||s){if(g&&s)
Object.defineProperty(d,p,gs);else{g&&Object.defineProperty(d,p,g);s&&Object.defineProperty(d,p,s);}}else d[p]=b[p];}
function __(){Laya.un(this,'constructor',d);}
__.prototype=b.prototype;d.prototype=new __();Laya.un(d.prototype,'__imps',Laya.__copy({},b.prototype.__imps));},__copy:function(dec,src){if(!src)return null;dec=dec||{};for(var i in src)dec[i]=src[i];return dec;},__package:function(name,o){if(Laya.__packages[name])return;Laya.__packages[name]=true;var p=window,strs=name.split('.');if(strs.length>1){for(var i=0,sz=strs.length-1;i<sz;i++){var c=p[strs[i]];p=c?c:(p[strs[i]]={});}}
p[strs[strs.length-1]]||(p[strs[strs.length-1]]=o||{});},__hasOwnProperty:function(name,o){o=o||this;function classHas(name,o){if(Object.hasOwnProperty.call(o.prototype,name))return true;var s=o.prototype.__super;return s==null?null:classHas(name,s);}
return(Object.hasOwnProperty.call(o,name))||classHas(name,o.__class);},__typeof:function(o,value){if(!o||!value)return false;if(value===String)return(typeof o==='string');if(value===Number)return(typeof o==='number');if(value.__interface__)value=value.__interface__;else if(typeof value!='string')return(o instanceof value);return(o.__imps&&o.__imps[value])||(o.__class==value);},__as:function(value,type){return(this.__typeof(value,type))?value:null;},__int:function(value){return value?parseInt(value):0;},interface:function(name,_super){Laya.__package(name,{});var ins=Laya.__internals;var a=ins[name]=ins[name]||{self:name};if(_super){var supers=_super.split(',');a.extend=[];for(var i=0;i<supers.length;i++){var nm=supers[i];ins[nm]=ins[nm]||{self:nm};a.extend.push(ins[nm]);}}
var o=window,words=name.split('.');for(var i=0;i<words.length-1;i++)o=o[words[i]];o[words[words.length-1]]={__interface__:name};},class:function(o,fullName,_super,miniName){_super&&Laya.__extend(o,_super);if(fullName){Laya.__package(fullName,o);Laya.__classmap[fullName]=o;if(fullName.indexOf('.')>0){if(fullName.indexOf('laya.')==0){var paths=fullName.split('.');miniName=miniName||paths[paths.length-1];if(Laya[miniName])console.log("Warning!,this class["+miniName+"] already exist:",Laya[miniName]);Laya[miniName]=o;}}else{if(fullName=="Main")
window.Main=o;else{if(Laya[fullName]){console.log("Error!,this class["+fullName+"] already exist:",Laya[fullName]);}
Laya[fullName]=o;}}}
var un=Laya.un,p=o.prototype;un(p,'hasOwnProperty',Laya.__hasOwnProperty);un(p,'__class',o);un(p,'__super',_super);un(p,'__className',fullName);un(o,'__super',_super);un(o,'__className',fullName);un(o,'__isclass',true);un(o,'super',function(o){this.__super.call(o);});},imps:function(dec,src){if(!src)return null;var d=dec.__imps||Laya.un(dec,'__imps',{});function __(name){var c,exs;if(!(c=Laya.__internals[name]))return;d[name]=true;if(!(exs=c.extend))return;for(var i=0;i<exs.length;i++){__(exs[i].self);}}
for(var i in src)__(i);},superSet:function(clas,o,prop,value){var fun=clas.prototype["_$set_"+prop];fun&&fun.call(o,value);},superGet:function(clas,o,prop){var fun=clas.prototype["_$get_"+prop];return fun?fun.call(o):null;},getset:function(isStatic,o,name,getfn,setfn){if(!isStatic){getfn&&Laya.un(o,'_$get_'+name,getfn);setfn&&Laya.un(o,'_$set_'+name,setfn);}else{getfn&&(o['_$GET_'+name]=getfn);setfn&&(o['_$SET_'+name]=setfn);}
if(getfn&&setfn)
Object.defineProperty(o,name,{get:getfn,set:setfn,enumerable:false,configurable:true});else{getfn&&Object.defineProperty(o,name,{get:getfn,enumerable:false,configurable:true});setfn&&Object.defineProperty(o,name,{set:setfn,enumerable:false,configurable:true});}},static:function(_class,def){for(var i=0,sz=def.length;i<sz;i+=2){if(def[i]=='length')
_class.length=def[i+1].call(_class);else{function tmp(){var name=def[i];var getfn=def[i+1];Object.defineProperty(_class,name,{get:function(){delete this[name];return this[name]=getfn.call(this);},set:function(v){delete this[name];this[name]=v;},enumerable:true,configurable:true});}
tmp();}}},un:function(obj,name,value){value||(value=obj[name]);Laya.__propun.value=value;Object.defineProperty(obj,name,Laya.__propun);return value;},uns:function(obj,names){names.forEach(function(o){Laya.un(obj,o)});}};window.console=window.console||({log:function(){}});window.trace=window.console.log;Error.prototype.throwError=function(){throw arguments;};Object.defineProperty(Array.prototype,'fixed',{enumerable:false});return Laya;})(window,document);(function(window,document,Laya){var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;})(window,document,Laya);(function(window,document,Laya){var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;Laya.interface('laya.filters.IFilter');Laya.interface('laya.resource.IDispose');Laya.interface('laya.resource.IDestroy');Laya.interface('laya.webgl.submit.ISubmit');Laya.interface('laya.resource.ICreateResource');Laya.interface('laya.webgl.canvas.save.ISaveData');Laya.interface('laya.resource.ISingletonElement');var ___Laya=(function(){__getset(1,Laya,'alertGlobalError',null,function(value){var erralert=0;if(value){Browser.window.onerror=function(msg,url,line,column,detail){if(erralert++<5&&detail)
alert("出错啦，请把此信息截图给研发商\n"+msg+"\n"+detail.stack);}}else{Browser.window.onerror=null;}});Laya.init=function(width,height,__plugins){var plugins=[];for(var i=2,sz=arguments.length;i<sz;i++)plugins.push(arguments[i]);if(Laya._isinit)return;Laya._isinit=true;ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=Laya._arrayBufferSlice);Browser.__init__();Laya.systemTimer=new Timer(false);Laya.startTimer=new Timer(false);Laya.physicsTimer=new Timer(false);Laya.updateTimer=new Timer(false);Laya.lateTimer=new Timer(false);Laya.timer=new Timer(false);Laya.loader=new LoaderManager();WeakObject.__init__();WebGL.inner_enable();for(var i=0,n=plugins.length;i<n;i++){if(plugins[i]&&plugins[i].enable){plugins[i].enable();}}
if(Render.isConchApp){RunDriver.enableNative();}
CacheManger.beginCheck();Laya._currentStage=Laya.stage=new Stage();URL.rootPath=URL._basePath=Laya._getUrlPath();Laya.render=new Render(0,0);Laya.stage.size(width,height);window.stage=Laya.stage;RenderSprite.__init__();KeyBoardManager.__init__();MouseManager.instance.__init__(Laya.stage,Render.canvas);Input.__init__();SoundManager.autoStopMusic=true;return Render.canvas;}
Laya._getUrlPath=function(){var location=Browser.window.location;var pathName=location.pathname;pathName=pathName.charAt(2)==':'?pathName.substring(1):pathName;return URL.getPath(location.protocol=="file:"?pathName:location.protocol+"//"+location.host+location.pathname);}
Laya._arrayBufferSlice=function(start,end){var arr=this;var arrU8List=new Uint8Array(arr,start,end-start);var newU8List=new Uint8Array(arrU8List.length);newU8List.set(arrU8List);return newU8List.buffer;}
Laya._runScript=function(script){return Browser.window[Laya._evcode](script);}
Laya.enableDebugPanel=function(debugJsPath){(debugJsPath===void 0)&&(debugJsPath="libs/laya.debugtool.js");if(!Laya["DebugPanel"]){var script=Browser.createElement("script");script.onload=function(){Laya["DebugPanel"].enable();}
script.src=debugJsPath;Browser.document.body.appendChild(script);}else{Laya["DebugPanel"].enable();}}
Laya.stage=null;Laya.systemTimer=null;Laya.startTimer=null;Laya.physicsTimer=null;Laya.updateTimer=null;Laya.lateTimer=null;Laya.timer=null;Laya.loader=null;Laya.version="2.1.1.1";Laya.render=null;Laya._currentStage=null;Laya._isinit=false;Laya.isWXOpenDataContext=false;Laya.isWXPosMsg=false;__static(Laya,['_evcode',function(){return this._evcode="eva"+"l";}]);return Laya;})()
var LayaGLQuickRunner=(function(){function LayaGLQuickRunner(){}
__class(LayaGLQuickRunner,'laya.renders.LayaGLQuickRunner');LayaGLQuickRunner.__init__=function(){LayaGLQuickRunner.map[0x01|0x02|0x200]=LayaGLQuickRunner.alpha_transform_drawLayaGL;LayaGLQuickRunner.map[0x01|0x200]=LayaGLQuickRunner.alpha_drawLayaGL;LayaGLQuickRunner.map[0x02|0x200]=LayaGLQuickRunner.transform_drawLayaGL;LayaGLQuickRunner.map[0x02|0x2000]=LayaGLQuickRunner.transform_drawNodes;LayaGLQuickRunner.map[0x01|0x02|0x100]=LayaGLQuickRunner.alpha_transform_drawTexture;LayaGLQuickRunner.map[0x01|0x100]=LayaGLQuickRunner.alpha_drawTexture;LayaGLQuickRunner.map[0x02|0x100]=LayaGLQuickRunner.transform_drawTexture;LayaGLQuickRunner.map[0x200|0x2000]=LayaGLQuickRunner.drawLayaGL_drawNodes;}
LayaGLQuickRunner.transform_drawTexture=function(sprite,context,x,y){var style=sprite._style;var tex=sprite.texture;context.saveTransform(LayaGLQuickRunner.curMat);context.transformByMatrix(sprite.transform,x,y);context.drawTexture(tex,-sprite.pivotX,-sprite.pivotY,sprite._width||tex.width,sprite._height||tex.height);context.restoreTransform(LayaGLQuickRunner.curMat);}
LayaGLQuickRunner.alpha_drawTexture=function(sprite,context,x,y){var style=sprite._style;var alpha=NaN;var tex=sprite.texture;if((alpha=style.alpha)>0.01||sprite._needRepaint()){var temp=context.globalAlpha;context.globalAlpha*=alpha;context.drawTexture(tex,x-style.pivotX+tex.offsetX,y-style.pivotY+tex.offsetY,sprite._width||tex.width,sprite._height||tex.height);context.globalAlpha=temp;}}
LayaGLQuickRunner.alpha_transform_drawTexture=function(sprite,context,x,y){var style=sprite._style;var alpha=NaN;var tex=sprite.texture;if((alpha=style.alpha)>0.01||sprite._needRepaint()){var temp=context.globalAlpha;context.globalAlpha*=alpha;context.saveTransform(LayaGLQuickRunner.curMat);context.transformByMatrix(sprite.transform,x,y);context.drawTexture(tex,-style.pivotX+tex.offsetX,-style.pivotY+tex.offsetY,sprite._width||tex.width,sprite._height||tex.height);context.restoreTransform(LayaGLQuickRunner.curMat);context.globalAlpha=temp;}}
LayaGLQuickRunner.alpha_transform_drawLayaGL=function(sprite,context,x,y){var style=sprite._style;var alpha=NaN;if((alpha=style.alpha)>0.01||sprite._needRepaint()){var temp=context.globalAlpha;context.globalAlpha*=alpha;context.saveTransform(LayaGLQuickRunner.curMat);context.transformByMatrix(sprite.transform,x,y);sprite._graphics&&sprite._graphics._render(sprite,context,-style.pivotX,-style.pivotY);context.restoreTransform(LayaGLQuickRunner.curMat);context.globalAlpha=temp;}}
LayaGLQuickRunner.alpha_drawLayaGL=function(sprite,context,x,y){var style=sprite._style;var alpha=NaN;if((alpha=style.alpha)>0.01||sprite._needRepaint()){var temp=context.globalAlpha;context.globalAlpha*=alpha;sprite._graphics&&sprite._graphics._render(sprite,context,x-style.pivotX,y-style.pivotY);context.globalAlpha=temp;}}
LayaGLQuickRunner.transform_drawLayaGL=function(sprite,context,x,y){var style=sprite._style;context.saveTransform(LayaGLQuickRunner.curMat);context.transformByMatrix(sprite.transform,x,y);sprite._graphics&&sprite._graphics._render(sprite,context,-style.pivotX,-style.pivotY);context.restoreTransform(LayaGLQuickRunner.curMat);}
LayaGLQuickRunner.transform_drawNodes=function(sprite,context,x,y){var textLastRender=sprite._getBit(0x100)&&context.drawCallOptimize(true);var style=sprite._style;context.saveTransform(LayaGLQuickRunner.curMat);context.transformByMatrix(sprite.transform,x,y);x=-style.pivotX;y=-style.pivotY;var childs=sprite._children,n=childs.length,ele;if(style.viewport){var rect=style.viewport;var left=rect.x;var top=rect.y;var right=rect.right;var bottom=rect.bottom;var _x=NaN,_y=NaN;for(i=0;i<n;++i){if((ele=childs[i])._visible&&((_x=ele._x)<right&&(_x+ele.width)>left&&(_y=ele._y)<bottom&&(_y+ele.height)>top)){ele.render(context,x,y);}}}else{for(var i=0;i<n;++i)
(ele=(childs[i]))._visible&&ele.render(context,x,y);}
context.restoreTransform(LayaGLQuickRunner.curMat);textLastRender&&context.drawCallOptimize(false);}
LayaGLQuickRunner.drawLayaGL_drawNodes=function(sprite,context,x,y){var textLastRender=sprite._getBit(0x100)&&context.drawCallOptimize(true);var style=sprite._style;x=x-style.pivotX;y=y-style.pivotY;sprite._graphics&&sprite._graphics._render(sprite,context,x,y);var childs=sprite._children,n=childs.length,ele;if(style.viewport){var rect=style.viewport;var left=rect.x;var top=rect.y;var right=rect.right;var bottom=rect.bottom;var _x=NaN,_y=NaN;for(i=0;i<n;++i){if((ele=childs[i])._visible&&((_x=ele._x)<right&&(_x+ele.width)>left&&(_y=ele._y)<bottom&&(_y+ele.height)>top)){ele.render(context,x,y);}}}else{for(var i=0;i<n;++i)
(ele=(childs[i]))._visible&&ele.render(context,x,y);}
textLastRender&&context.drawCallOptimize(false);}
LayaGLQuickRunner.map={};__static(LayaGLQuickRunner,['curMat',function(){return this.curMat=new Matrix();}]);return LayaGLQuickRunner;})()
var ColorUtils=(function(){function ColorUtils(value){this.arrColor=[];if(value==null){this.strColor="#00000000";this.numColor=0;this.arrColor=[0,0,0,0];return;};var i=0,len=0;var color=0;if((typeof value=='string')){if((value).indexOf("rgba(")>=0||(value).indexOf("rgb(")>=0){var tStr=value;var beginI=0,endI=0;beginI=tStr.indexOf("(");endI=tStr.indexOf(")");tStr=tStr.substring(beginI+1,endI);this.arrColor=tStr.split(",");len=this.arrColor.length;for(i=0;i<len;i++){this.arrColor[i]=parseFloat(this.arrColor[i]);if(i<3){this.arrColor[i]=Math.round(this.arrColor[i]);}}
if(this.arrColor.length==4){color=((this.arrColor[0]*256+this.arrColor[1])*256+this.arrColor[2])*256+Math.round(this.arrColor[3]*255);}else{color=((this.arrColor[0]*256+this.arrColor[1])*256+this.arrColor[2]);}
this.strColor=value;}else{this.strColor=value;value.charAt(0)==='#'&&(value=value.substr(1));len=value.length;if(len===3||len===4){var temp="";for(i=0;i<len;i++){temp+=(value[i]+value[i]);}
value=temp;}
color=parseInt(value,16);}}else{color=value;this.strColor=Utils.toHexColor(color);}
if(this.strColor.indexOf("rgba")>=0||this.strColor.length===9){this.arrColor=[((0xFF000000&color)>>>24)/255,((0xFF0000&color)>>16)/255,((0xFF00&color)>>8)/255,(0xFF&color)/255];this.numColor=(0xff000000&color)>>>24|(color&0xff0000)>>8|(color&0x00ff00)<<8|((color&0xff)<<24);}else{this.arrColor=[((0xFF0000&color)>>16)/255,((0xFF00&color)>>8)/255,(0xFF&color)/255,1];this.numColor=0xff000000|(color&0xff0000)>>16|(color&0x00ff00)|(color&0xff)<<16;}
(this.arrColor).__id=++ColorUtils._COLODID;}
__class(ColorUtils,'laya.utils.ColorUtils');ColorUtils._initDefault=function(){ColorUtils._DEFAULT={};for(var i in ColorUtils._COLOR_MAP)ColorUtils._SAVE[i]=ColorUtils._DEFAULT[i]=new ColorUtils(ColorUtils._COLOR_MAP[i]);return ColorUtils._DEFAULT;}
ColorUtils._initSaveMap=function(){ColorUtils._SAVE_SIZE=0;ColorUtils._SAVE={};for(var i in ColorUtils._DEFAULT)ColorUtils._SAVE[i]=ColorUtils._DEFAULT[i];}
ColorUtils.create=function(value){var key=value+"";var color=ColorUtils._SAVE[key];if(color!=null)return color;if(ColorUtils._SAVE_SIZE<1000)ColorUtils._initSaveMap();return ColorUtils._SAVE[key]=new ColorUtils(value);}
ColorUtils._SAVE={};ColorUtils._SAVE_SIZE=0;ColorUtils._COLOR_MAP={"purple":"#800080","orange":"#ffa500","white":'#FFFFFF',"red":'#FF0000',"green":'#00FF00',"blue":'#0000FF',"black":'#000000',"yellow":'#FFFF00','gray':'#808080'};ColorUtils._DEFAULT=ColorUtils._initDefault();ColorUtils._COLODID=1;return ColorUtils;})()
var SaveBase=(function(){function SaveBase(){}
__class(SaveBase,'laya.webgl.canvas.save.SaveBase');var __proto=SaveBase.prototype;Laya.imps(__proto,{"laya.webgl.canvas.save.ISaveData":true})
__proto.isSaveMark=function(){return false;}
__proto.restore=function(context){this._dataObj[this._valueName]=this._value;SaveBase.POOL[SaveBase.POOL._length++]=this;this._newSubmit&&(context._curSubmit=Submit.RENDERBASE);}
SaveBase._createArray=function(){var value=[];value._length=0;return value;}
SaveBase._init=function(){var namemap=SaveBase._namemap={};namemap[0x1]="ALPHA";namemap[0x2]="fillStyle";namemap[0x8]="font";namemap[0x100]="lineWidth";namemap[0x200]="strokeStyle";namemap[0x2000]="_mergeID";namemap[0x400]=namemap[0x800]=namemap[0x1000]=[];namemap[0x4000]="textBaseline";namemap[0x8000]="textAlign";namemap[0x10000]="_nBlendType";namemap[0x100000]="shader";namemap[0x200000]="filters";namemap[0x800000]='_colorFiler';return namemap;}
SaveBase.save=function(context,type,dataObj,newSubmit){if((context._saveMark._saveuse&type)!==type){context._saveMark._saveuse|=type;var cache=SaveBase.POOL;var o=cache._length>0?cache[--cache._length]:(new SaveBase());o._value=dataObj[o._valueName=SaveBase._namemap[type]];o._dataObj=dataObj;o._newSubmit=newSubmit;var _save=context._save;_save[_save._length++]=o;}}
SaveBase.POOL=laya.webgl.canvas.save.SaveBase._createArray();SaveBase._namemap=SaveBase._init();return SaveBase;})()
var Submit=(function(){function Submit(renderType){this.clipInfoID=-1;this._mesh=null;this._blendFn=null;this._id=0;this._renderType=0;this._parent=null;this._startIdx=0;this._numEle=0;this._ref=1;this.shaderValue=null;this._key=new SubmitKey();(renderType===void 0)&&(renderType=10000);this._renderType=renderType;this._id=++Submit.ID;}
__class(Submit,'laya.webgl.submit.Submit');var __proto=Submit.prototype;Laya.imps(__proto,{"laya.webgl.submit.ISubmit":true})
__proto.getID=function(){return this._id;}
__proto.releaseRender=function(){if(Submit.RENDERBASE==this)
return;if((--this._ref)<1){Submit.POOL[Submit._poolSize++]=this;this.shaderValue.release();this.shaderValue=null;this._mesh=null;this._parent&&(this._parent.releaseRender(),this._parent=null);}}
__proto.getRenderType=function(){return this._renderType;}
__proto.renderSubmit=function(){if(this._numEle===0||!this._mesh||this._numEle==0)return 1;var _tex=this.shaderValue.textureHost;if(_tex){var source=_tex._getSource();if(!source)
return 1;this.shaderValue.texture=source;};var gl=WebGL.mainContext;this._mesh.useMesh(gl);this.shaderValue.upload();if(BlendMode.activeBlendFunction!==this._blendFn){WebGLContext.setBlend(gl,true);this._blendFn(gl);BlendMode.activeBlendFunction=this._blendFn;}
gl.drawElements(0x0004,this._numEle,0x1403,this._startIdx);Stat.renderBatches++;Stat.trianglesFaces+=this._numEle/3;return 1;}
__proto._cloneInit=function(o,context,mesh,pos){;o._ref=1;o._mesh=mesh;o._id=this._id;o._key.copyFrom(this._key);o._parent=this;o._blendFn=this._blendFn;o._renderType=this._renderType;o._startIdx=pos*CONST3D2D.BYTES_PIDX;o._numEle=this._numEle;o.shaderValue=this.shaderValue;this.shaderValue.ref++;this._ref++;}
__proto.clone=function(context,mesh,pos){;return null;}
__proto.reUse=function(context,pos){;return 0;}
__proto.toString=function(){return"ibindex:"+this._startIdx+" num:"+this._numEle+" key="+this._key;}
Submit.__init__=function(){var s=Submit.RENDERBASE=new Submit(-1);s.shaderValue=new Value2D(0,0);s.shaderValue.ALPHA=1;s._ref=0xFFFFFFFF;}
Submit.create=function(context,mesh,sv){;var o=Submit._poolSize?Submit.POOL[--Submit._poolSize]:new Submit();o._ref=1;o._mesh=mesh;o._key.clear();o._startIdx=mesh.indexNum*CONST3D2D.BYTES_PIDX;o._numEle=0;var blendType=context._nBlendType;o._blendFn=context._targets?BlendMode.targetFns[blendType]:BlendMode.fns[blendType];o.shaderValue=sv;o.shaderValue.setValue(context._shader2D);var filters=context._shader2D.filters;filters&&o.shaderValue.setFilters(filters);return o;}
Submit.createShape=function(ctx,mesh,numEle,sv){var o=Submit._poolSize?Submit.POOL[--Submit._poolSize]:(new Submit());o._mesh=mesh;o._numEle=numEle;o._startIdx=mesh.indexNum*2;o._ref=1;o.shaderValue=sv;o.shaderValue.setValue(ctx._shader2D);var blendType=ctx._nBlendType;o._key.blendShader=blendType;o._blendFn=ctx._targets?BlendMode.targetFns[blendType]:BlendMode.fns[blendType];return o;}
Submit.TYPE_2D=10000;Submit.TYPE_CANVAS=10003;Submit.TYPE_CMDSETRT=10004;Submit.TYPE_CUSTOM=10005;Submit.TYPE_BLURRT=10006;Submit.TYPE_CMDDESTORYPRERT=10007;Submit.TYPE_DISABLESTENCIL=10008;Submit.TYPE_OTHERIBVB=10009;Submit.TYPE_PRIMITIVE=10010;Submit.TYPE_RT=10011;Submit.TYPE_BLUR_RT=10012;Submit.TYPE_TARGET=10013;Submit.TYPE_CHANGE_VALUE=10014;Submit.TYPE_SHAPE=10015;Submit.TYPE_TEXTURE=10016;Submit.TYPE_FILLTEXTURE=10017;Submit.KEY_ONCE=-1;Submit.KEY_FILLRECT=1;Submit.KEY_DRAWTEXTURE=2;Submit.KEY_VG=3;Submit.KEY_TRIANGLES=4;Submit.RENDERBASE=null;Submit.ID=1;Submit.preRender=null;Submit._poolSize=0;Submit.POOL=[];return Submit;})()
var FillTextureCmd=(function(){function FillTextureCmd(){}
__class(FillTextureCmd,'laya.display.cmd.FillTextureCmd');var __proto=FillTextureCmd.prototype;__proto.recover=function(){this.texture=null;this.offset=null;this.other=null;Pool.recover("FillTextureCmd",this);}
__proto.run=function(context,gx,gy){context.fillTexture(this.texture,this.x+gx,this.y+gy,this.width,this.height,this.type,this.offset,this.other);}
__getset(0,__proto,'cmdID',function(){return"FillTexture";});FillTextureCmd.create=function(texture,x,y,width,height,type,offset,other){var cmd=Pool.getItemByClass("FillTextureCmd",FillTextureCmd);cmd.texture=texture;cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;cmd.type=type;cmd.offset=offset;cmd.other=other;return cmd;}
FillTextureCmd.ID="FillTexture";return FillTextureCmd;})()
var Filter=(function(){function Filter(){this._glRender=null;}
__class(Filter,'laya.filters.Filter');var __proto=Filter.prototype;Laya.imps(__proto,{"laya.filters.IFilter":true})
__getset(0,__proto,'type',function(){return-1});Filter.BLUR=0x10;Filter.COLOR=0x20;Filter.GLOW=0x08;Filter._filter=function(sprite,context,x,y){var webglctx=context;var next=(this)._next;if(next){var filters=sprite.filters,len=filters.length;if(len==1&&(filters[0].type==0x20)){context.save();context.setColorFilter(filters[0]);next._fun.call(next,sprite,context,x,y);context.restore();return;};var svCP=Value2D.create(0x01,0);var b;var p=Point.TEMP;var tMatrix=webglctx._curMat;var mat=Matrix.create();tMatrix.copyTo(mat);var tPadding=0;var tHalfPadding=0;var tIsHaveGlowFilter=false;var source=null;var out=sprite._cacheStyle.filterCache||null;if(!out||sprite.getRepaint()!=0){tIsHaveGlowFilter=sprite._isHaveGlowFilter();if(tIsHaveGlowFilter){tPadding=50;tHalfPadding=25;}
b=new Rectangle();b.copyFrom(sprite.getSelfBounds());b.x+=sprite.x;b.y+=sprite.y;b.x-=sprite.pivotX+4;b.y-=sprite.pivotY+4;var tSX=b.x;var tSY=b.y;b.width+=(tPadding+8);b.height+=(tPadding+8);p.x=b.x*mat.a+b.y*mat.c;p.y=b.y*mat.d+b.x*mat.b;b.x=p.x;b.y=p.y;p.x=b.width*mat.a+b.height*mat.c;p.y=b.height*mat.d+b.width*mat.b;b.width=p.x;b.height=p.y;if(b.width<=0||b.height<=0){return;}
out&&WebGLRTMgr.releaseRT(out);source=WebGLRTMgr.getRT(b.width,b.height);var outRT=out=WebGLRTMgr.getRT(b.width,b.height);sprite._getCacheStyle().filterCache=out;webglctx.pushRT();webglctx.useRT(source);var tX=sprite.x-tSX+tHalfPadding;var tY=sprite.y-tSY+tHalfPadding;next._fun.call(next,sprite,context,tX,tY);webglctx.useRT(outRT);for(var i=0;i<len;i++){if(i!=0){webglctx.useRT(source);webglctx.drawTarget(outRT,0,0,b.width,b.height,Matrix.TEMP.identity(),svCP,null,BlendMode.TOINT.overlay);webglctx.useRT(outRT);};var fil=filters[i];switch(fil.type){case 0x10:fil._glRender&&fil._glRender.render(source,context,b.width,b.height,fil);break;case 0x08:fil._glRender&&fil._glRender.render(source,context,b.width,b.height,fil);break;case 0x20:webglctx.setColorFilter(fil);webglctx.drawTarget(source,0,0,b.width,b.height,Matrix.EMPTY.identity(),Value2D.create(0x01,0));webglctx.setColorFilter(null);break;}}
webglctx.popRT();}else{tIsHaveGlowFilter=sprite._cacheStyle.hasGlowFilter||false;if(tIsHaveGlowFilter){tPadding=50;tHalfPadding=25;}
b=sprite.getBounds();if(b.width<=0||b.height<=0){return;}
b.width+=tPadding;b.height+=tPadding;p.x=b.x*mat.a+b.y*mat.c;p.y=b.y*mat.d+b.x*mat.b;b.x=p.x;b.y=p.y;p.x=b.width*mat.a+b.height*mat.c;p.y=b.height*mat.d+b.width*mat.b;b.width=p.x;b.height=p.y;}
x=x-tHalfPadding-sprite.x;y=y-tHalfPadding-sprite.y;p.setTo(x,y);mat.transformPoint(p);x=p.x+b.x;y=p.y+b.y;webglctx._drawRenderTexture(out,x,y,b.width,b.height,Matrix.TEMP.identity(),1.0,RenderTexture2D.defuv);if(source){var submit=SubmitCMD.create([source],function(s){s.destroy();},this);source=null;context.addRenderObject(submit);}
mat.destroy();}}
return Filter;})()
var Log=(function(){function Log(){}
__class(Log,'laya.utils.Log');Log.enable=function(){if(!Log._logdiv){Log._logdiv=Browser.createElement('div');Log._logdiv.style.cssText="border:white;padding:4px;overflow-y:auto;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;";Browser.document.body.appendChild(Log._logdiv);Log._btn=Browser.createElement("button");Log._btn.innerText="Hide";Log._btn.style.cssText="z-index:1000001;position: absolute;left:10px;top:10px;";Log._btn.onclick=Log.toggle;Browser.document.body.appendChild(Log._btn);}}
Log.toggle=function(){var style=Log._logdiv.style;if(style.display===""){Log._btn.innerText="Show";style.display="none";}else{Log._btn.innerText="Hide";style.display="";}}
Log.print=function(value){if(Log._logdiv){if(Log._count>=Log.maxCount)Log.clear();Log._count++;Log._logdiv.innerText+=value+"\n";if(Log.autoScrollToBottom){if(Log._logdiv.scrollHeight-Log._logdiv.scrollTop-Log._logdiv.clientHeight<50){Log._logdiv.scrollTop=Log._logdiv.scrollHeight;}}}}
Log.clear=function(){Log._logdiv.innerText="";Log._count=0;}
Log._logdiv=null;Log._btn=null;Log._count=0;Log.maxCount=50;Log.autoScrollToBottom=true;return Log;})()
var TouchManager=(function(){function TouchManager(){this.preOvers=[];this.preDowns=[];this.preRightDowns=[];this.enable=true;this._lastClickTime=0;this._event=new Event();}
__class(TouchManager,'laya.events.TouchManager');var __proto=TouchManager.prototype;__proto._clearTempArrs=function(){TouchManager._oldArr.length=0;TouchManager._newArr.length=0;TouchManager._tEleArr.length=0;}
__proto.getTouchFromArr=function(touchID,arr){var i=0,len=0;len=arr.length;var tTouchO;for(i=0;i<len;i++){tTouchO=arr[i];if(tTouchO.id==touchID){return tTouchO;}}
return null;}
__proto.removeTouchFromArr=function(touchID,arr){var i=0;for(i=arr.length-1;i>=0;i--){if(arr[i].id==touchID){arr.splice(i,1);}}}
__proto.createTouchO=function(ele,touchID){var rst;rst=Pool.getItem("TouchData")||{};rst.id=touchID;rst.tar=ele;return rst;}
__proto.onMouseDown=function(ele,touchID,isLeft){(isLeft===void 0)&&(isLeft=false);if(!this.enable)
return;var preO;var tO;var arrs;preO=this.getTouchFromArr(touchID,this.preOvers);arrs=this.getEles(ele,null,TouchManager._tEleArr);if(!preO){tO=this.createTouchO(ele,touchID);this.preOvers.push(tO);}else{preO.tar=ele;}
if(Browser.onMobile)
this.sendEvents(arrs,"mouseover");var preDowns;preDowns=isLeft?this.preDowns:this.preRightDowns;preO=this.getTouchFromArr(touchID,preDowns);if(!preO){tO=this.createTouchO(ele,touchID);preDowns.push(tO);}else{preO.tar=ele;}
this.sendEvents(arrs,isLeft?"mousedown":"rightmousedown");this._clearTempArrs();}
__proto.sendEvents=function(eles,type){var i=0,len=0;len=eles.length;this._event._stoped=false;var _target;_target=eles[0];var tE;for(i=0;i<len;i++){tE=eles[i];if(tE.destroyed)return;tE.event(type,this._event.setTo(type,tE,_target));if(this._event._stoped)
break;}}
__proto.getEles=function(start,end,rst){if(!rst){rst=[];}else{rst.length=0;}
while(start&&start!=end){rst.push(start);start=start.parent;}
return rst;}
__proto.checkMouseOutAndOverOfMove=function(eleNew,elePre,touchID){(touchID===void 0)&&(touchID=0);if(elePre==eleNew)
return;var tar;var arrs;var i=0,len=0;if(elePre.contains(eleNew)){arrs=this.getEles(eleNew,elePre,TouchManager._tEleArr);this.sendEvents(arrs,"mouseover");}else if(eleNew.contains(elePre)){arrs=this.getEles(elePre,eleNew,TouchManager._tEleArr);this.sendEvents(arrs,"mouseout");}else{arrs=TouchManager._tEleArr;arrs.length=0;var oldArr;oldArr=this.getEles(elePre,null,TouchManager._oldArr);var newArr;newArr=this.getEles(eleNew,null,TouchManager._newArr);len=oldArr.length;var tIndex=0;for(i=0;i<len;i++){tar=oldArr[i];tIndex=newArr.indexOf(tar);if(tIndex>=0){newArr.splice(tIndex,newArr.length-tIndex);break;}else{arrs.push(tar);}}
if(arrs.length>0){this.sendEvents(arrs,"mouseout");}
if(newArr.length>0){this.sendEvents(newArr,"mouseover");}}}
__proto.onMouseMove=function(ele,touchID){if(!this.enable)
return;var preO;preO=this.getTouchFromArr(touchID,this.preOvers);var arrs;var tO;if(!preO){arrs=this.getEles(ele,null,TouchManager._tEleArr);this.sendEvents(arrs,"mouseover");this.preOvers.push(this.createTouchO(ele,touchID));}else{this.checkMouseOutAndOverOfMove(ele,preO.tar);preO.tar=ele;arrs=this.getEles(ele,null,TouchManager._tEleArr);}
this.sendEvents(arrs,"mousemove");this._clearTempArrs();}
__proto.getLastOvers=function(){TouchManager._tEleArr.length=0;if(this.preOvers.length>0&&this.preOvers[0].tar){return this.getEles(this.preOvers[0].tar,null,TouchManager._tEleArr);}
TouchManager._tEleArr.push(Laya.stage);return TouchManager._tEleArr;}
__proto.stageMouseOut=function(){var lastOvers;lastOvers=this.getLastOvers();this.preOvers.length=0;this.sendEvents(lastOvers,"mouseout");}
__proto.onMouseUp=function(ele,touchID,isLeft){(isLeft===void 0)&&(isLeft=false);if(!this.enable)
return;var preO;var tO;var arrs;var oldArr;var i=0,len=0;var tar;var sendArr;var onMobile=Browser.onMobile;arrs=this.getEles(ele,null,TouchManager._tEleArr);this.sendEvents(arrs,isLeft?"mouseup":"rightmouseup");var preDowns;preDowns=isLeft?this.preDowns:this.preRightDowns;preO=this.getTouchFromArr(touchID,preDowns);if(!preO){}else{var isDouble=false;var now=Browser.now();isDouble=now-this._lastClickTime<300;this._lastClickTime=now;if(ele==preO.tar){sendArr=arrs;}else{oldArr=this.getEles(preO.tar,null,TouchManager._oldArr);sendArr=TouchManager._newArr;sendArr.length=0;len=oldArr.length;for(i=0;i<len;i++){tar=oldArr[i];if(arrs.indexOf(tar)>=0){sendArr.push(tar);}}}
if(sendArr.length>0){this.sendEvents(sendArr,isLeft?"click":"rightclick");}
if(isLeft&&isDouble){this.sendEvents(sendArr,"doubleclick");}
this.removeTouchFromArr(touchID,preDowns);preO.tar=null;Pool.recover("TouchData",preO);}
preO=this.getTouchFromArr(touchID,this.preOvers);if(!preO){}else{if(onMobile){sendArr=this.getEles(preO.tar,null,sendArr);if(sendArr&&sendArr.length>0){this.sendEvents(sendArr,"mouseout");}
this.removeTouchFromArr(touchID,this.preOvers);preO.tar=null;Pool.recover("TouchData",preO);}}
this._clearTempArrs();}
TouchManager._oldArr=[];TouchManager._newArr=[];TouchManager._tEleArr=[];__static(TouchManager,['I',function(){return this.I=new TouchManager();}]);return TouchManager;})()
var SubmitTarget=(function(){function SubmitTarget(){this._mesh=null;this._startIdx=0;this._numEle=0;this.shaderValue=null;this.blendType=0;this._ref=1;this.srcRT=null;this._key=new SubmitKey();}
__class(SubmitTarget,'laya.webgl.submit.SubmitTarget');var __proto=SubmitTarget.prototype;Laya.imps(__proto,{"laya.webgl.submit.ISubmit":true})
__proto.renderSubmit=function(){var gl=WebGL.mainContext;this._mesh.useMesh(gl);var target=this.srcRT;if(target){this.shaderValue.texture=target._getSource();this.shaderValue.upload();this.blend();Stat.renderBatches++;Stat.trianglesFaces+=this._numEle/3;WebGL.mainContext.drawElements(0x0004,this._numEle,0x1403,this._startIdx);}
return 1;}
__proto.blend=function(){if(BlendMode.activeBlendFunction!==BlendMode.fns[this.blendType]){var gl=WebGL.mainContext;gl.enable(0x0BE2);BlendMode.fns[this.blendType](gl);BlendMode.activeBlendFunction=BlendMode.fns[this.blendType];}}
__proto.getRenderType=function(){return 0;}
__proto.releaseRender=function(){if((--this._ref)<1){var pool=SubmitTarget.POOL;pool[pool._length++]=this;}}
__proto.reUse=function(context,pos){this._startIdx=pos;this._ref++;return pos;}
SubmitTarget.create=function(context,mesh,sv,rt){var o=SubmitTarget.POOL._length?SubmitTarget.POOL[--SubmitTarget.POOL._length]:new SubmitTarget();o._mesh=mesh;o.srcRT=rt;o._startIdx=mesh.indexNum*CONST3D2D.BYTES_PIDX;o._ref=1;o._key.clear();o._numEle=0;o.blendType=context._nBlendType;o._key.blendShader=o.blendType;o.shaderValue=sv;o.shaderValue.setValue(context._shader2D);if(context._colorFiler){var ft=context._colorFiler;sv.defines.add(ft.type);(sv).colorMat=ft._mat;(sv).colorAlpha=ft._alpha;}
return o;}
SubmitTarget.POOL=[];SubmitTarget.__init$=function(){;{SubmitTarget.POOL._length=0;}}
return SubmitTarget;})()
var DrawImageCmd=(function(){function DrawImageCmd(){}
__class(DrawImageCmd,'laya.display.cmd.DrawImageCmd');var __proto=DrawImageCmd.prototype;__proto.recover=function(){this.texture._removeReference();this.texture=null;Pool.recover("DrawImageCmd",this);}
__proto.run=function(context,gx,gy){context.drawTexture(this.texture,this.x+gx,this.y+gy,this.width,this.height);}
__getset(0,__proto,'cmdID',function(){return"DrawImage";});DrawImageCmd.create=function(texture,x,y,width,height){var cmd=Pool.getItemByClass("DrawImageCmd",DrawImageCmd);cmd.texture=texture;texture._addReference();cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;return cmd;}
DrawImageCmd.ID="DrawImage";return DrawImageCmd;})()
var Component=(function(){function Component(){this._id=Utils.getGID();this._resetComp();}
__class(Component,'laya.components.Component');var __proto=Component.prototype;Laya.imps(__proto,{"laya.resource.ISingletonElement":true,"laya.resource.IDestroy":true})
__proto._isScript=function(){return false;}
__proto._resetComp=function(){this._indexInList=-1;this._enabled=true;this._awaked=false;this.owner=null;}
__proto._getIndexInList=function(){return this._indexInList;}
__proto._setIndexInList=function(index){this._indexInList=index;}
__proto._onAdded=function(){}
__proto._onAwake=function(){}
__proto._onEnable=function(){}
__proto._onDisable=function(){}
__proto._onEnableInScene=function(){}
__proto._onDisableInScene=function(){}
__proto._onDestroy=function(){}
__proto.onReset=function(){}
__proto._parse=function(data){}
__proto._cloneTo=function(dest){}
__proto._setActive=function(value){if(value){if(!this._awaked){this._awaked=true;this._onAwake();}
this._enabled&&this._onEnable();}else{this._enabled&&this._onDisable();}}
__proto._setActiveInScene=function(value){if(value)this._onEnableInScene();else this._onDisableInScene();}
__proto.destroy=function(){if(this.owner)this.owner._destroyComponent(this);}
__proto._destroy=function(){if(this.owner.activeInHierarchy&&this._enabled){this._setActive(false);(this._isScript())&&((this).onDisable());}
this.owner._scene&&this._setActiveInScene(false);this._onDestroy();this._destroyed=true;if(this.onReset!==laya.components.Component.prototype.onReset){this.onReset();this._resetComp();Pool.recoverByClass(this);}else{this._resetComp();}}
__getset(0,__proto,'id',function(){return this._id;});__getset(0,__proto,'enabled',function(){return this._enabled;},function(value){this._enabled=value;if(this.owner){if(value)
this.owner.activeInHierarchy&&this._onEnable();else
this.owner.activeInHierarchy&&this._onDisable();}});__getset(0,__proto,'isSingleton',function(){return true;});__getset(0,__proto,'destroyed',function(){return this._destroyed;});return Component;})()
var EventDispatcher=(function(){var EventHandler;function EventDispatcher(){this._$0__events=null;}
__class(EventDispatcher,'laya.events.EventDispatcher');var __proto=EventDispatcher.prototype;__proto.hasListener=function(type){var listener=this._$0__events&&this._$0__events[type];return!!listener;}
__proto.event=function(type,data){if(!this._$0__events||!this._$0__events[type])return false;var listeners=this._$0__events[type];if(listeners.run){if(listeners.once)delete this._$0__events[type];data!=null?listeners.runWith(data):listeners.run();}else{for(var i=0,n=listeners.length;i<n;i++){var listener=listeners[i];if(listener){(data!=null)?listener.runWith(data):listener.run();}
if(!listener||listener.once){listeners.splice(i,1);i--;n--;}}
if(listeners.length===0&&this._$0__events)delete this._$0__events[type];}
return true;}
__proto.on=function(type,caller,listener,args){return this._createListener(type,caller,listener,args,false);}
__proto.once=function(type,caller,listener,args){return this._createListener(type,caller,listener,args,true);}
__proto._createListener=function(type,caller,listener,args,once,offBefore){(offBefore===void 0)&&(offBefore=true);offBefore&&this.off(type,caller,listener,once);var handler=EventHandler.create(caller||this,listener,args,once);this._$0__events||(this._$0__events={});var events=this._$0__events;if(!events[type])events[type]=handler;else{if(!events[type].run)events[type].push(handler);else events[type]=[events[type],handler];}
return this;}
__proto.off=function(type,caller,listener,onceOnly){(onceOnly===void 0)&&(onceOnly=false);if(!this._$0__events||!this._$0__events[type])return this;var listeners=this._$0__events[type];if(listeners!=null){if(listeners.run){if((!caller||listeners.caller===caller)&&(listener==null||listeners.method===listener)&&(!onceOnly||listeners.once)){delete this._$0__events[type];listeners.recover();}}else{var count=0;for(var i=0,n=listeners.length;i<n;i++){var item=listeners[i];if(!item){count++;continue;}
if(item&&(!caller||item.caller===caller)&&(listener==null||item.method===listener)&&(!onceOnly||item.once)){count++;listeners[i]=null;item.recover();}}
if(count===n)delete this._$0__events[type];}}
return this;}
__proto.offAll=function(type){var events=this._$0__events;if(!events)return this;if(type){this._recoverHandlers(events[type]);delete events[type];}else{for(var name in events){this._recoverHandlers(events[name]);}
this._$0__events=null;}
return this;}
__proto.offAllCaller=function(caller){if(caller&&this._$0__events){for(var name in this._$0__events){this.off(name,caller,null);}}
return this;}
__proto._recoverHandlers=function(arr){if(!arr)return;if(arr.run){arr.recover();}else{for(var i=arr.length-1;i>-1;i--){if(arr[i]){arr[i].recover();arr[i]=null;}}}}
__proto.isMouseEvent=function(type){return EventDispatcher.MOUSE_EVENTS[type]||false;}
EventDispatcher.MOUSE_EVENTS={"rightmousedown":true,"rightmouseup":true,"rightclick":true,"mousedown":true,"mouseup":true,"mousemove":true,"mouseover":true,"mouseout":true,"click":true,"doubleclick":true};EventDispatcher.__init$=function(){Object.defineProperty(laya.events.EventDispatcher.prototype,"_events",{enumerable:false,writable:true});EventHandler=(function(_super){function EventHandler(caller,method,args,once){EventHandler.__super.call(this,caller,method,args,once);}
__class(EventHandler,'',_super);var __proto=EventHandler.prototype;__proto.recover=function(){if(this._id>0){this._id=0;EventHandler._pool.push(this.clear());}}
EventHandler.create=function(caller,method,args,once){(once===void 0)&&(once=true);if(EventHandler._pool.length)return EventHandler._pool.pop().setTo(caller,method,args,once);return new EventHandler(caller,method,args,once);}
EventHandler._pool=[];return EventHandler;})(Handler)}
return EventDispatcher;})()
var Handler=(function(){function Handler(caller,method,args,once){this.once=false;this._id=0;(once===void 0)&&(once=false);this.setTo(caller,method,args,once);}
__class(Handler,'laya.utils.Handler');var __proto=Handler.prototype;__proto.setTo=function(caller,method,args,once){this._id=Handler._gid++;this.caller=caller;this.method=method;this.args=args;this.once=once;return this;}
__proto.run=function(){if(this.method==null)return null;var id=this._id;var result=this.method.apply(this.caller,this.args);this._id===id&&this.once&&this.recover();return result;}
__proto.runWith=function(data){if(this.method==null)return null;var id=this._id;if(data==null)
var result=this.method.apply(this.caller,this.args);else if(!this.args&&!data.unshift)result=this.method.call(this.caller,data);else if(this.args)result=this.method.apply(this.caller,this.args.concat(data));else result=this.method.apply(this.caller,data);this._id===id&&this.once&&this.recover();return result;}
__proto.clear=function(){this.caller=null;this.method=null;this.args=null;return this;}
__proto.recover=function(){if(this._id>0){this._id=0;Handler._pool.push(this.clear());}}
Handler.create=function(caller,method,args,once){(once===void 0)&&(once=true);if(Handler._pool.length)return Handler._pool.pop().setTo(caller,method,args,once);return new Handler(caller,method,args,once);}
Handler._pool=[];Handler._gid=1;return Handler;})()
var SkinMeshBuffer=(function(){function SkinMeshBuffer(){this.ib=null;this.vb=null;var gl=WebGL.mainContext;this.ib=IndexBuffer2D.create(0x88E8);this.vb=VertexBuffer2D.create(8);}
__class(SkinMeshBuffer,'laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer');var __proto=SkinMeshBuffer.prototype;__proto.addSkinMesh=function(skinMesh){skinMesh.getData2(this.vb,this.ib,this.vb._byteLength/32);}
__proto.reset=function(){this.vb.clear();this.ib.clear();}
SkinMeshBuffer.getInstance=function(){return SkinMeshBuffer.instance=SkinMeshBuffer.instance||new SkinMeshBuffer();}
SkinMeshBuffer.instance=null;return SkinMeshBuffer;})()
var DrawTrianglesCmd=(function(){function DrawTrianglesCmd(){}
__class(DrawTrianglesCmd,'laya.display.cmd.DrawTrianglesCmd');var __proto=DrawTrianglesCmd.prototype;__proto.recover=function(){this.texture=null;this.vertices=null;this.uvs=null;this.indices=null;this.matrix=null;Pool.recover("DrawTrianglesCmd",this);}
__proto.run=function(context,gx,gy){context.drawTriangles(this.texture,this.x+gx,this.y+gy,this.vertices,this.uvs,this.indices,this.matrix,this.alpha,this.color,this.blendMode);}
__getset(0,__proto,'cmdID',function(){return"DrawTriangles";});DrawTrianglesCmd.create=function(texture,x,y,vertices,uvs,indices,matrix,alpha,color,blendMode){var cmd=Pool.getItemByClass("DrawTrianglesCmd",DrawTrianglesCmd);cmd.texture=texture;cmd.x=x;cmd.y=y;cmd.vertices=vertices;cmd.uvs=uvs;cmd.indices=indices;cmd.matrix=matrix;cmd.alpha=alpha;if(color){cmd.color=new ColorFilter();var c=ColorUtils.create(color).arrColor;cmd.color.color(c[0]*255,c[1]*255,c[2]*255,c[3]*255);}
cmd.blendMode=blendMode;return cmd;}
DrawTrianglesCmd.ID="DrawTriangles";return DrawTrianglesCmd;})()
var DrawPieCmd=(function(){function DrawPieCmd(){}
__class(DrawPieCmd,'laya.display.cmd.DrawPieCmd');var __proto=DrawPieCmd.prototype;__proto.recover=function(){this.fillColor=null;this.lineColor=null;Pool.recover("DrawPieCmd",this);}
__proto.run=function(context,gx,gy){context._drawPie(this.x+gx,this.y+gy,this.radius,this._startAngle,this._endAngle,this.fillColor,this.lineColor,this.lineWidth,this.vid);}
__getset(0,__proto,'startAngle',function(){return this._startAngle*180/Math.PI;},function(value){this._startAngle=value*Math.PI/180;});__getset(0,__proto,'cmdID',function(){return"DrawPie";});__getset(0,__proto,'endAngle',function(){return this._endAngle*180/Math.PI;},function(value){this._endAngle=value*Math.PI/180;});DrawPieCmd.create=function(x,y,radius,startAngle,endAngle,fillColor,lineColor,lineWidth,vid){var cmd=Pool.getItemByClass("DrawPieCmd",DrawPieCmd);cmd.x=x;cmd.y=y;cmd.radius=radius;cmd._startAngle=startAngle;cmd._endAngle=endAngle;cmd.fillColor=fillColor;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;cmd.vid=vid;return cmd;}
DrawPieCmd.ID="DrawPie";return DrawPieCmd;})()
var WordText=(function(){function WordText(){this.id=NaN;this.save=[];this.toUpperCase=null;this.changed=false;this._text=null;this.width=-1;this.pageChars=[];this.startID=0;this.startIDStroke=0;this.lastGCCnt=0;this.splitRender=false;}
__class(WordText,'laya.utils.WordText');var __proto=WordText.prototype;__proto.setText=function(txt){this.changed=true;this._text=txt;this.width=-1;this.cleanCache();}
__proto.toString=function(){return this._text;}
__proto.charCodeAt=function(i){return this._text?this._text.charCodeAt(i):NaN;}
__proto.charAt=function(i){return this._text?this._text.charAt(i):null;}
__proto.cleanCache=function(){this.pageChars.forEach(function(p){var tex=p.tex;var words=p.words;if(p.words.length==1&&tex&&tex.ri){tex.destroy();}});this.pageChars=[];this.startID=0;}
__getset(0,__proto,'length',function(){return this._text?this._text.length:0;});return WordText;})()
var Mesh2D=(function(){function Mesh2D(stride,vballoc,iballoc){this._stride=0;this.vertNum=0;this.indexNum=0;this._applied=false;this._vb=null;this._ib=null;this._vao=null;this._attribInfo=null;this._quadNum=0;this.canReuse=false;this._stride=stride;this._vb=new VertexBuffer2D(stride,0x88E8);if(vballoc){this._vb._resizeBuffer(vballoc,false);}else{Config.webGL2D_MeshAllocMaxMem&&this._vb._resizeBuffer(64*1024*stride,false);}
this._ib=new IndexBuffer2D();if(iballoc){this._ib._resizeBuffer(iballoc,false);}}
__class(Mesh2D,'laya.webgl.utils.Mesh2D');var __proto=Mesh2D.prototype;__proto.cloneWithNewVB=function(){var mesh=new Mesh2D(this._stride,0,0);mesh._ib=this._ib;mesh._quadNum=this._quadNum;mesh._attribInfo=this._attribInfo;return mesh;}
__proto.cloneWithNewVBIB=function(){var mesh=new Mesh2D(this._stride,0,0);mesh._attribInfo=this._attribInfo;return mesh;}
__proto.getVBW=function(){this._vb.setNeedUpload();return this._vb;}
__proto.getVBR=function(){return this._vb;}
__proto.getIBR=function(){return this._ib;}
__proto.getIBW=function(){this._ib.setNeedUpload();return this._ib;}
__proto.createQuadIB=function(QuadNum){this._quadNum=QuadNum;this._ib._resizeBuffer(QuadNum*6*2,false);this._ib.byteLength=this._ib.bufferLength;var bd=this._ib.getUint16Array();var idx=0;var curvert=0;for(var i=0;i<QuadNum;i++){bd[idx++]=curvert;bd[idx++]=curvert+2;bd[idx++]=curvert+1;bd[idx++]=curvert;bd[idx++]=curvert+3;bd[idx++]=curvert+2;curvert+=4;}
this._ib.setNeedUpload();}
__proto.setAttributes=function(attribs){this._attribInfo=attribs;if(this._attribInfo.length%3!=0){throw'Mesh2D setAttributes error!';}}
__proto.configVAO=function(gl){if(this._applied)
return;this._applied=true;if(!this._vao){this._vao=new BufferState2D();}
this._vao.bind();this._vb._bindForVAO();this._ib.setNeedUpload();this._ib._bind_uploadForVAO();var attribNum=this._attribInfo.length/3;var idx=0;for(var i=0;i<attribNum;i++){var _size=this._attribInfo[idx+1];var _type=this._attribInfo[idx];var _off=this._attribInfo[idx+2];gl.enableVertexAttribArray(i);gl.vertexAttribPointer(i,_size,_type,false,this._stride,_off);idx+=3;}
this._vao.unBind();}
__proto.useMesh=function(gl){this._applied||this.configVAO(gl);this._vao.bind();this._vb.bind();this._ib._bind_upload()||this._ib.bind();this._vb._bind_upload()||this._vb.bind();}
__proto.getEleNum=function(){return this._ib.getBuffer().byteLength/2;}
__proto.releaseMesh=function(){}
__proto.destroy=function(){}
__proto.clearVB=function(){this._vb.clear();}
Mesh2D._gvaoid=0;return Mesh2D;})()
var Event=(function(){function Event(){}
__class(Event,'laya.events.Event');var __proto=Event.prototype;__proto.setTo=function(type,currentTarget,target){this.type=type;this.currentTarget=currentTarget;this.target=target;return this;}
__proto.stopPropagation=function(){this._stoped=true;}
__getset(0,__proto,'stageY',function(){return Laya.stage.mouseY;});__getset(0,__proto,'charCode',function(){return this.nativeEvent.charCode;});__getset(0,__proto,'touches',function(){if(!this.nativeEvent)return null;var arr=this.nativeEvent.touches;if(arr){var stage=Laya.stage;for(var i=0,n=arr.length;i<n;i++){var e=arr[i];var point=Point.TEMP;point.setTo(e.clientX,e.clientY);stage._canvasTransform.invertTransformPoint(point);stage.transform.invertTransformPoint(point);e.stageX=point.x;e.stageY=point.y;}}
return arr;});__getset(0,__proto,'keyLocation',function(){return this.nativeEvent.location||this.nativeEvent.keyLocation;});__getset(0,__proto,'ctrlKey',function(){return this.nativeEvent.ctrlKey;});__getset(0,__proto,'altKey',function(){return this.nativeEvent.altKey;});__getset(0,__proto,'shiftKey',function(){return this.nativeEvent.shiftKey;});__getset(0,__proto,'stageX',function(){return Laya.stage.mouseX;});Event.EMPTY=new Event();Event.MOUSE_DOWN="mousedown";Event.MOUSE_UP="mouseup";Event.CLICK="click";Event.RIGHT_MOUSE_DOWN="rightmousedown";Event.RIGHT_MOUSE_UP="rightmouseup";Event.RIGHT_CLICK="rightclick";Event.MOUSE_MOVE="mousemove";Event.MOUSE_OVER="mouseover";Event.MOUSE_OUT="mouseout";Event.MOUSE_WHEEL="mousewheel";Event.ROLL_OVER="mouseover";Event.ROLL_OUT="mouseout";Event.DOUBLE_CLICK="doubleclick";Event.CHANGE="change";Event.CHANGED="changed";Event.RESIZE="resize";Event.ADDED="added";Event.REMOVED="removed";Event.DISPLAY="display";Event.UNDISPLAY="undisplay";Event.ERROR="error";Event.COMPLETE="complete";Event.LOADED="loaded";Event.READY="ready";Event.PROGRESS="progress";Event.INPUT="input";Event.RENDER="render";Event.OPEN="open";Event.MESSAGE="message";Event.CLOSE="close";Event.KEY_DOWN="keydown";Event.KEY_PRESS="keypress";Event.KEY_UP="keyup";Event.FRAME="enterframe";Event.DRAG_START="dragstart";Event.DRAG_MOVE="dragmove";Event.DRAG_END="dragend";Event.ENTER="enter";Event.SELECT="select";Event.BLUR="blur";Event.FOCUS="focus";Event.VISIBILITY_CHANGE="visibilitychange";Event.FOCUS_CHANGE="focuschange";Event.PLAYED="played";Event.PAUSED="paused";Event.STOPPED="stopped";Event.START="start";Event.END="end";Event.COMPONENT_ADDED="componentadded";Event.COMPONENT_REMOVED="componentremoved";Event.RELEASED="released";Event.LINK="link";Event.LABEL="label";Event.FULL_SCREEN_CHANGE="fullscreenchange";Event.DEVICE_LOST="devicelost";Event.TRANSFORM_CHANGED="transformchanged";Event.ANIMATION_CHANGED="animationchanged";Event.TRAIL_FILTER_CHANGE="trailfilterchange";Event.TRIGGER_ENTER="triggerenter";Event.TRIGGER_STAY="triggerstay";Event.TRIGGER_EXIT="triggerexit";return Event;})()
var TextRender=(function(){function TextRender(){this.fontSizeInfo={};this.charRender=null;this.mapFont={};this.fontID=0;this.mapColor=[];this.colorID=0;this.fontScaleX=1.0;this.fontScaleY=1.0;this._curStrPos=0;this.bmpData32=null;this.lastFont=null;this.fontSizeW=0;this.fontSizeH=0;this.fontSizeOffX=0;this.fontSizeOffY=0;this.renderPerChar=true;this.textureMem=0;this.fontStr=null;this.textAtlases=[];this.isoTextures=[];this.tmpAtlasPos=new Point();var bugIOS=false;var miniadp=Laya['MiniAdpter'];if(miniadp&&miniadp.systemInfo&&miniadp.systemInfo.system){bugIOS=miniadp.systemInfo.system.toLowerCase()==='ios 10.1.1';}
if(Browser.onMiniGame&&!bugIOS)TextRender.isWan1Wan=true;if(Browser.onLimixiu)TextRender.isWan1Wan=true;this.charRender=Render.isConchApp?(new CharRender_Native()):(new CharRender_Canvas(TextRender.atlasWidth,TextRender.atlasWidth,TextRender.scaleFontWithCtx,!TextRender.isWan1Wan,false));TextRender.textRenderInst=this;Laya['textRender']=this;TextRender.atlasWidth2=TextRender.atlasWidth*TextRender.atlasWidth;}
__class(TextRender,'laya.webgl.text.TextRender');var __proto=TextRender.prototype;__proto.setFont=function(font){if(this.lastFont==font)return;this.lastFont=font;var fontsz=this.getFontSizeInfo(font._family);var offx=fontsz>>24;var offy=(fontsz>>16)&0xff;var fw=(fontsz>>8)&0xff;var fh=fontsz&0xff;var k=font._size/TextRender.standardFontSize;this.fontSizeOffX=Math.ceil(offx*k);this.fontSizeOffY=Math.ceil(offy*k);this.fontSizeW=Math.ceil(fw*k);this.fontSizeH=Math.ceil(fh*k);if(font._font.indexOf('italic')>=0){this.fontStr=font._font.replace('italic','');}else{this.fontStr=font._font;}}
__proto.getNextChar=function(str){var len=str.length;var start=this._curStrPos;if(start>=len)
return null;var link=false;var i=start;var state=0;for(;i<len;i++){var c=str.charCodeAt(i);if((c>>>11)==0x1b){if(state==1)break;state=1;i++;}else if(c===0xfe0e||c===0xfe0f){}else if(c==0x200d){state=2;}else{if(state==0)state=1;else if(state==1)break;else if(state==2){}}}
this._curStrPos=i;return str.substring(start,i);}
__proto.filltext=function(ctx,data,x,y,fontStr,color,strokeColor,lineWidth,textAlign,underLine){(underLine===void 0)&&(underLine=0);if(data.length<=0)
return;var font=FontInfo.Parse(fontStr);var nTextAlign=0;switch(textAlign){case'center':nTextAlign=Context.ENUM_TEXTALIGN_CENTER;break;case'right':nTextAlign=Context.ENUM_TEXTALIGN_RIGHT;break;}
this._fast_filltext(ctx,data,null,x,y,font,color,strokeColor,lineWidth,nTextAlign,underLine);}
__proto.fillWords=function(ctx,data,x,y,fontStr,color,strokeColor,lineWidth){if(!data)return;if(data.length<=0)return;var font=FontInfo.Parse(fontStr);this._fast_filltext(ctx,null,data,x,y,font,color,strokeColor,lineWidth,0,0);}
__proto._fast_filltext=function(ctx,data,htmlchars,x,y,font,color,strokeColor,lineWidth,textAlign,underLine){(underLine===void 0)&&(underLine=0);if(data&&data.length<1)return;if(htmlchars&&htmlchars.length<1)return;if(lineWidth<0)lineWidth=0;this.setFont(font);this.fontScaleX=this.fontScaleY=1.0;if(!Render.isConchApp&&TextRender.scaleFontWithCtx){var sx=1;var sy=1;if(Render.isConchApp){sx=ctx._curMat.getScaleX();sy=ctx._curMat.getScaleY();}else{sx=ctx.getMatScaleX();sy=ctx.getMatScaleY();}
if(sx<1e-4||sy<1e-1)
return;if(sx>1)this.fontScaleX=sx;if(sy>1)this.fontScaleY=sy;}
font._italic&&(ctx._italicDeg=13);var wt=data;var isWT=!htmlchars&&((data instanceof laya.utils.WordText));var str=data;var isHtmlChar=!!htmlchars;var sameTexData=isWT?wt.pageChars:[];var strWidth=0;if(isWT){str=wt._text;strWidth=wt.width;if(strWidth<0){strWidth=wt.width=this.charRender.getWidth(this.fontStr,str);}}else{strWidth=str?this.charRender.getWidth(this.fontStr,str):0;}
switch(textAlign){case Context.ENUM_TEXTALIGN_CENTER:x-=strWidth/2;break;case Context.ENUM_TEXTALIGN_RIGHT:x-=strWidth;break;}
if(wt&&sameTexData){if(this.hasFreedText(sameTexData)){sameTexData=wt.pageChars=[];}};var ri=null;var oneTex=isWT||TextRender.forceWholeRender;var splitTex=this.renderPerChar=(!isWT)||TextRender.forceSplitRender||isHtmlChar||(isWT&&wt.splitRender);if(!sameTexData||sameTexData.length<1){if(splitTex){var stx=0;var sty=0;this._curStrPos=0;var curstr;while(true){if(isHtmlChar){var chc=htmlchars[this._curStrPos++];if(chc){curstr=chc.char;stx=chc.x;sty=chc.y;}else{curstr=null;}}else{curstr=this.getNextChar(str);}
if(!curstr)
break;ri=this.getCharRenderInfo(curstr,font,color,strokeColor,lineWidth,false);if(!ri){break;}
if(ri.isSpace){}else{var add=sameTexData[ri.tex.id];if(!add){var o1={texgen:(ri.tex).genID,tex:ri.tex,words:[]};sameTexData[ri.tex.id]=o1;add=o1.words;}else{add=add.words;}
if(Render.isConchApp){add.push({ri:ri,x:stx,y:sty,w:ri.bmpWidth/this.fontScaleX,h:ri.bmpHeight/this.fontScaleY});}else{add.push({ri:ri,x:stx+1/this.fontScaleX,y:sty,w:(ri.bmpWidth-2)/this.fontScaleX,h:(ri.bmpHeight-1)/this.fontScaleY});}
stx+=ri.width;}}}else{var isotex=TextRender.noAtlas||strWidth*this.fontScaleX>TextRender.atlasWidth;ri=this.getCharRenderInfo(str,font,color,strokeColor,lineWidth,isotex);if(Render.isConchApp){sameTexData[0]={texgen:(ri.tex).genID,tex:ri.tex,words:[{ri:ri,x:0,y:0,w:ri.bmpWidth/this.fontScaleX,h:ri.bmpHeight/this.fontScaleY}]};}else{sameTexData[0]={texgen:(ri.tex).genID,tex:ri.tex,words:[{ri:ri,x:1/this.fontScaleX,y:0/this.fontScaleY,w:(ri.bmpWidth-2)/this.fontScaleX,h:(ri.bmpHeight-1)/this.fontScaleY}]};}}}
this._drawResortedWords(ctx,x,y,sameTexData);ctx._italicDeg=0;}
__proto._drawResortedWords=function(ctx,startx,starty,samePagesData){var isLastRender=ctx._charSubmitCache&&ctx._charSubmitCache._enbale;var mat=ctx._curMat;var slen=samePagesData.length;for(var id=0;id<slen;id++){var dt=samePagesData[id];if(!dt)continue;var pri=dt.words;var pisz=pri.length;if(pisz<=0)continue;var tex=(samePagesData[id].tex);for(var j=0;j<pisz;j++){var riSaved=pri[j];var ri=riSaved.ri;if(ri.isSpace)continue;ri.touch();ctx.drawTexAlign=true;if(Render.isConchApp){ctx._drawTextureM(tex.texture,startx+riSaved.x-ri.orix,starty+riSaved.y-ri.oriy,riSaved.w,riSaved.h,null,1.0,ri.uv);}else
ctx._inner_drawTexture(tex.texture,(tex.texture).bitmap.id,startx+riSaved.x-ri.orix,starty+riSaved.y-ri.oriy,riSaved.w,riSaved.h,mat,ri.uv,1.0,isLastRender);if((ctx).touches){(ctx).touches.push(ri);}}}}
__proto.hasFreedText=function(txts){var sz=txts.length;for(var i=0;i<sz;i++){var pri=txts[i];if(!pri)continue;var tex=(pri.tex);if(tex.__destroyed||tex.genID!=pri.texgen){return true;}}
return false;}
__proto.getCharRenderInfo=function(str,font,color,strokeColor,lineWidth,isoTexture){(isoTexture===void 0)&&(isoTexture=false);var fid=this.mapFont[font._family];if(fid==undefined){this.mapFont[font._family]=fid=this.fontID++;};var key=str+'_'+fid+'_'+font._size+'_'+color;if(lineWidth>0)
key+='_'+strokeColor+lineWidth;if(font._bold)
key+='P';if(this.fontScaleX!=1||this.fontScaleY!=1){key+=(this.fontScaleX*20|0)+'_'+(this.fontScaleY*20|0);};var i=0;var sz=this.textAtlases.length;var ri=null;var atlas=null;if(!isoTexture){for(i=0;i<sz;i++){atlas=this.textAtlases[i];ri=atlas.charMaps[key]
if(ri){ri.touch();return ri;}}}
ri=new CharRenderInfo();this.charRender.scale(this.fontScaleX,this.fontScaleY);ri.char=str;ri.height=font._size;var margin=font._size/3|0;var imgdt=null;var w1=Math.ceil(this.charRender.getWidth(this.fontStr,str)*this.fontScaleX);if(w1>this.charRender.canvasWidth){this.charRender.canvasWidth=Math.min(2048,w1+margin*2);}
if(isoTexture){imgdt=this.charRender.getCharBmp(str,this.fontStr,lineWidth,color,strokeColor,ri,margin,margin,margin,margin,null);var tex=TextTexture.getTextTexture(imgdt.width,imgdt.height);tex.addChar(imgdt,0,0,ri.uv);ri.tex=tex;ri.orix=margin;ri.oriy=margin;tex.ri=ri;this.isoTextures.push(tex);}else{var len=str.length;if(len>1){};var lineExt=lineWidth*1;var fw=Math.ceil((this.fontSizeW+lineExt*2)*this.fontScaleX);var fh=Math.ceil((this.fontSizeH+lineExt*2)*this.fontScaleY);TextRender.imgdtRect[0]=((margin-this.fontSizeOffX-lineExt)*this.fontScaleX)|0;TextRender.imgdtRect[1]=((margin-this.fontSizeOffY-lineExt)*this.fontScaleY)|0;if(this.renderPerChar||len==1){TextRender.imgdtRect[2]=Math.max(w1,fw);TextRender.imgdtRect[3]=Math.max(w1,fh);}else{TextRender.imgdtRect[2]=-1;TextRender.imgdtRect[3]=fh;}
imgdt=this.charRender.getCharBmp(str,this.fontStr,lineWidth,color,strokeColor,ri,margin,margin,margin,margin,TextRender.imgdtRect);atlas=this.addBmpData(imgdt,ri);if(TextRender.isWan1Wan){ri.orix=margin;ri.oriy=margin;}else{ri.orix=(this.fontSizeOffX+lineExt);ri.oriy=(this.fontSizeOffY+lineExt);}
atlas.charMaps[key]=ri;}
return ri;}
__proto.addBmpData=function(data,ri){var w=data.width;var h=data.height;var sz=this.textAtlases.length;var atlas=null;var find=false;for(var i=0;i<sz;i++){atlas=this.textAtlases[i];find=atlas.getAEmpty(w,h,this.tmpAtlasPos);if(find){break;}}
if(!find){atlas=new TextAtlas()
this.textAtlases.push(atlas);find=atlas.getAEmpty(w,h,this.tmpAtlasPos);if(!find){throw'err1';}
this.cleanAtlases();}
if(find){atlas.texture.addChar(data,this.tmpAtlasPos.x,this.tmpAtlasPos.y,ri.uv);ri.tex=atlas.texture;}
return atlas;}
__proto.GC=function(){var i=0;var sz=this.textAtlases.length;var dt=0;var destroyDt=TextRender.destroyAtlasDt;var totalUsedRate=0;var totalUsedRateAtlas=0;var curloop=Stat.loopCount;var maxWasteRateID=-1;var maxWasteRate=0;var tex=null;var curatlas=null;for(;i<sz;i++){curatlas=this.textAtlases[i];tex=curatlas.texture;if(tex){totalUsedRate+=tex.curUsedCovRate;totalUsedRateAtlas+=tex.curUsedCovRateAtlas;var waste=curatlas.usedRate-tex.curUsedCovRateAtlas;if(maxWasteRate<waste){maxWasteRate=waste;maxWasteRateID=i;}}
dt=curloop-curatlas.texture.lastTouchTm;if(dt>destroyDt){TextRender.showLog&&console.log('TextRender GC delete atlas '+tex?curatlas.texture.id:'unk');curatlas.destroy();this.textAtlases[i]=this.textAtlases[sz-1];sz--;i--;maxWasteRateID=-1;}}
this.textAtlases.length=sz;sz=this.isoTextures.length;for(i=0;i<sz;i++){tex=this.isoTextures[i];dt=curloop-tex.lastTouchTm;if(dt>TextRender.destroyUnusedTextureDt){tex.ri.deleted=true;tex.ri.tex=null;tex.destroy();this.isoTextures[i]=this.isoTextures[sz-1];sz--;i--;}}
this.isoTextures.length=sz;var needGC=this.textAtlases.length>1&&this.textAtlases.length-totalUsedRateAtlas>=2;if(TextRender.atlasWidth*TextRender.atlasWidth*4*this.textAtlases.length>TextRender.cleanMem||needGC||TextRender.simClean){TextRender.simClean=false;TextRender.showLog&&console.log('清理使用率低的贴图。总使用率:',totalUsedRateAtlas,':',this.textAtlases.length,'最差贴图:'+maxWasteRateID);if(maxWasteRateID>=0){curatlas=this.textAtlases[maxWasteRateID];curatlas.destroy();this.textAtlases[maxWasteRateID]=this.textAtlases[this.textAtlases.length-1];this.textAtlases.length=this.textAtlases.length-1;}}
TextTexture.clean();}
__proto.cleanAtlases=function(){}
__proto.getCharBmp=function(c){}
__proto.checkBmpLine=function(data,l,sx,ex){if(this.bmpData32.buffer!=data.data.buffer){this.bmpData32=new Uint32Array(data.data.buffer);};var stpos=data.width*l+sx;for(var x=sx;x<ex;x++){if(this.bmpData32[stpos++]!=0)return true;}
return false;}
__proto.updateBbx=function(data,curbbx,onlyH){(onlyH===void 0)&&(onlyH=false);var w=data.width;var h=data.height;var x=0;var sy=curbbx[1];var ey=0;var y=sy;if(this.checkBmpLine(data,sy,0,w)){while(true){y=(sy+ey)/2|0;if(y+1>=sy){curbbx[1]=y;break;}
if(this.checkBmpLine(data,y,0,w)){sy=y;}else{ey=y;}}}
if(curbbx[3]>h)curbbx[3]=h;else{y=sy=curbbx[3];ey=h;if(this.checkBmpLine(data,sy,0,w)){while(true){y=(sy+ey)/2|0;if(y-1<=sy){curbbx[3]=y;break;}
if(this.checkBmpLine(data,y,0,w)){sy=y;}else{ey=y;}}}}
if(onlyH)
return;var minx=curbbx[0];var stpos=w*curbbx[1];for(y=curbbx[1];y<curbbx[3];y++){for(x=0;x<minx;x++){if(this.bmpData32[stpos+x]!=0){minx=x;break;}}
stpos+=w;}
curbbx[0]=minx;var maxx=curbbx[2];stpos=w*curbbx[1];for(y=curbbx[1];y<curbbx[3];y++){for(x=maxx;x<w;x++){if(this.bmpData32[stpos+x]!=0){maxx=x;break;}}
stpos+=w;}
curbbx[2]=maxx;}
__proto.getFontSizeInfo=function(font){var finfo=this.fontSizeInfo[font];if(finfo!=undefined)
return finfo;var fontstr='bold '+TextRender.standardFontSize+'px '+font;if(TextRender.isWan1Wan){this.fontSizeW=this.charRender.getWidth(fontstr,'有')*1.5;this.fontSizeH=TextRender.standardFontSize*1.5;var szinfo=this.fontSizeW<<8|this.fontSizeH;this.fontSizeInfo[font]=szinfo;return szinfo;}
TextRender.pixelBBX[0]=TextRender.standardFontSize/2;TextRender.pixelBBX[1]=TextRender.standardFontSize/2;TextRender.pixelBBX[2]=TextRender.standardFontSize;TextRender.pixelBBX[3]=TextRender.standardFontSize;var orix=16;var oriy=16;var marginr=16;var marginb=16;this.charRender.scale(1,1);TextRender.tmpRI.height=TextRender.standardFontSize;var bmpdt=this.charRender.getCharBmp('g',fontstr,0,'red',null,TextRender.tmpRI,orix,oriy,marginr,marginb);if(Render.isConchApp){bmpdt.data=new Uint8ClampedArray(bmpdt.data);}
this.bmpData32=new Uint32Array(bmpdt.data.buffer);this.updateBbx(bmpdt,TextRender.pixelBBX,false);bmpdt=this.charRender.getCharBmp('有',fontstr,0,'red',null,TextRender.tmpRI,oriy,oriy,marginr,marginb);if(Render.isConchApp){bmpdt.data=new Uint8ClampedArray(bmpdt.data);}
this.bmpData32=new Uint32Array(bmpdt.data.buffer);if(TextRender.pixelBBX[2]<orix+TextRender.tmpRI.width)
TextRender.pixelBBX[2]=orix+TextRender.tmpRI.width;this.updateBbx(bmpdt,TextRender.pixelBBX,false);if(Render.isConchApp){orix=0;oriy=0;};var xoff=Math.max(orix-TextRender.pixelBBX[0],0);var yoff=Math.max(oriy-TextRender.pixelBBX[1],0);var bbxw=TextRender.pixelBBX[2]-TextRender.pixelBBX[0];var bbxh=TextRender.pixelBBX[3]-TextRender.pixelBBX[1]+2;var sizeinfo=xoff<<24|yoff<<16|bbxw<<8|bbxh;this.fontSizeInfo[font]=sizeinfo;return sizeinfo;}
__proto.printDbgInfo=function(){console.log('图集个数:'+this.textAtlases.length+',每个图集大小:'+TextRender.atlasWidth+'x'+TextRender.atlasWidth,' 用canvas:',TextRender.isWan1Wan);console.log('图集占用空间:'+(TextRender.atlasWidth*TextRender.atlasWidth*4/1024/1024*this.textAtlases.length)+'M');console.log('缓存用到的字体:');for(var f in this.mapFont){var fontsz=this.getFontSizeInfo(f);var offx=fontsz>>24;var offy=(fontsz>>16)&0xff;var fw=(fontsz>>8)&0xff;var fh=fontsz&0xff;console.log('    '+f,' off:',offx,offy,' size:',fw,fh);};var num=0;console.log('缓存数据:');var totalUsedRate=0;var totalUsedRateAtlas=0;this.textAtlases.forEach(function(a){var id=a.texture.id;var dt=Stat.loopCount-a.texture.lastTouchTm;var dtstr=dt>0?(''+dt+'帧以前'):'当前帧';totalUsedRate+=a.texture.curUsedCovRate;totalUsedRateAtlas+=a.texture.curUsedCovRateAtlas;console.log('--图集(id:'+id+',当前使用率:'+(a.texture.curUsedCovRate*1000|0)+'‰','当前图集使用率:',(a.texture.curUsedCovRateAtlas*100|0)+'%','图集使用率:',(a.usedRate*100|0),'%, 使用于:'+dtstr+')--:');for(var k in a.charMaps){var ri=a.charMaps[k];console.log('     off:',ri.orix,ri.oriy,' bmp宽高:',ri.bmpWidth,ri.bmpHeight,'无效:',ri.deleted,'touchdt:',(Stat.loopCount-ri.touchTick),'位置:',ri.uv[0]*TextRender.atlasWidth|0,ri.uv[1]*TextRender.atlasWidth|0,'字符:',ri.char,'key:',k);num++;}});console.log('独立贴图文字('+this.isoTextures.length+'个):');this.isoTextures.forEach(function(tex){console.log('    size:',tex._texW,tex._texH,'touch间隔:',(Stat.loopCount-tex.lastTouchTm),'char:',tex.ri.char);});console.log('总缓存:',num,'总使用率:',totalUsedRate,'总当前图集使用率:',totalUsedRateAtlas);}
__proto.showAtlas=function(n,bgcolor,x,y,w,h){if(!this.textAtlases[n]){console.log('没有这个图集');return null;};var sp=new Sprite();var texttex=this.textAtlases[n].texture;var texture={width:TextRender.atlasWidth,height:TextRender.atlasWidth,sourceWidth:TextRender.atlasWidth,sourceHeight:TextRender.atlasWidth,offsetX:0,offsetY:0,getIsReady:function(){return true;},_addReference:function(){},_removeReference:function(){},_getSource:function(){return texttex._getSource();},bitmap:{id:texttex.id},_uv:Texture.DEF_UV};(sp).size=function(w,h){this.width=w;this.height=h;sp.graphics.clear();sp.graphics.drawRect(0,0,sp.width,sp.height,bgcolor);sp.graphics.drawTexture(texture,0,0,sp.width,sp.height);return this;}
sp.graphics.drawRect(0,0,w,h,bgcolor);sp.graphics.drawTexture(texture,0,0,w,h);sp.pos(x,y);Laya.stage.addChild(sp);return sp;}
__proto.filltext_native=function(ctx,data,htmlchars,x,y,fontStr,color,strokeColor,lineWidth,textAlign,underLine){(underLine===void 0)&&(underLine=0);if(data&&data.length<=0)return;if(htmlchars&&htmlchars.length<1)return;var font=FontInfo.Parse(fontStr);var nTextAlign=0;switch(textAlign){case'center':nTextAlign=Context.ENUM_TEXTALIGN_CENTER;break;case'right':nTextAlign=Context.ENUM_TEXTALIGN_RIGHT;break;}
return this._fast_filltext(ctx,data,htmlchars,x,y,font,color,strokeColor,lineWidth,nTextAlign,underLine);}
TextRender.useOldCharBook=false;TextRender.atlasWidth=2048;TextRender.noAtlas=false;TextRender.forceSplitRender=false;TextRender.forceWholeRender=false;TextRender.scaleFontWithCtx=true;TextRender.standardFontSize=32;TextRender.destroyAtlasDt=10;TextRender.checkCleanTextureDt=2000;TextRender.destroyUnusedTextureDt=3000;TextRender.cleanMem=100*1024*1024;TextRender.isWan1Wan=false;TextRender.showLog=false;TextRender.debugUV=false;TextRender.atlasWidth2=2048*2048;TextRender.textRenderInst=null;TextRender.simClean=false;__static(TextRender,['tmpRI',function(){return this.tmpRI=new CharRenderInfo();},'pixelBBX',function(){return this.pixelBBX=[0,0,0,0];},'imgdtRect',function(){return this.imgdtRect=[0,0,0,0];}]);return TextRender;})()
var Stat=(function(){function Stat(){}
__class(Stat,'laya.utils.Stat');__getset(1,Stat,'onclick',null,function(fn){if(Stat._sp){Stat._sp.on("click",Stat._sp,fn);}
if(Stat._canvas){Stat._canvas.source.onclick=fn;Stat._canvas.source.style.pointerEvents='';}});Stat.show=function(x,y){(x===void 0)&&(x=0);(y===void 0)&&(y=0);if(!Browser.onMiniGame&&!Browser.onLimixiu&&!Render.isConchApp&&!Browser.onBDMiniGame&&!Browser.onKGMiniGame&&!Browser.onQGMiniGame&&!Browser.onVVMiniGame&&!Browser.onAlipayMiniGame&&!Browser.onBLMiniGame&&!Browser.onQQMiniGame)Stat._useCanvas=true;Stat._show=true;Stat._fpsData.length=60;Stat._view[0]={title:"FPS(Canvas)",value:"_fpsStr",color:"yellow",units:"int"};Stat._view[1]={title:"Sprite",value:"_spriteStr",color:"white",units:"int"};Stat._view[2]={title:"RenderBatches",value:"renderBatches",color:"white",units:"int"};Stat._view[3]={title:"SavedRenderBatches",value:"savedRenderBatches",color:"white",units:"int"};Stat._view[4]={title:"CPUMemory",value:"cpuMemory",color:"yellow",units:"M"};Stat._view[5]={title:"GPUMemory",value:"gpuMemory",color:"yellow",units:"M"};Stat._view[6]={title:"Shader",value:"shaderCall",color:"white",units:"int"};if(!Render.is3DMode){Stat._view[0].title="FPS(WebGL)";Stat._view[7]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"};}else{Stat._view[0].title="FPS(3D)";Stat._view[7]={title:"TriFaces",value:"trianglesFaces",color:"white",units:"int"};Stat._view[8]={title:"FrustumCulling",value:"frustumCulling",color:"white",units:"int"};Stat._view[9]={title:"OctreeNodeCulling",value:"octreeNodeCulling",color:"white",units:"int"};}
if(Stat._useCanvas){Stat.createUIPre(x,y);}else
Stat.createUI(x,y);Stat.enable();}
Stat.createUIPre=function(x,y){var pixel=Browser.pixelRatio;if(Browser.onQGMiniGame||Browser.onVVMiniGame){pixel=3;}
Stat._width=pixel*180;Stat._vx=pixel*120;Stat._height=pixel*(Stat._view.length*12+3*pixel)+4;Stat._fontSize=12*pixel;for(var i=0;i<Stat._view.length;i++){Stat._view[i].x=4;Stat._view[i].y=i*Stat._fontSize+2*pixel;}
if(!Stat._canvas){Stat._canvas=new HTMLCanvas(true);Stat._canvas.size(Stat._width,Stat._height);Stat._ctx=Stat._canvas.getContext('2d');Stat._ctx.textBaseline="top";Stat._ctx.font=Stat._fontSize+"px Arial";Stat._canvas.source.style.cssText="pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:"+x+"px;top:"+y+"px;width:"+(Stat._width/pixel)+"px;height:"+(Stat._height/pixel)+"px;";}
if(!Browser.onKGMiniGame){Browser.container.appendChild(Stat._canvas.source);}
Stat._first=true;Stat.loop();Stat._first=false;}
Stat.createUI=function(x,y){var stat=Stat._sp;var pixel=Browser.pixelRatio;if(Browser.onQGMiniGame||Browser.onVVMiniGame){pixel=3;}
if(!stat){stat=new Sprite();Stat._leftText=new Text();Stat._leftText.pos(5,5);Stat._leftText.color="#ffffff";stat.addChild(Stat._leftText);Stat._txt=new Text();Stat._txt.pos(80*pixel,5);Stat._txt.color="#ffffff";stat.addChild(Stat._txt);Stat._sp=stat;}
stat.pos(x,y);var text="";for(var i=0;i<Stat._view.length;i++){var one=Stat._view[i];text+=one.title+"\n";}
Stat._leftText.text=text;var width=pixel*138;var height=pixel*(Stat._view.length*12+3*pixel)+4;Stat._txt.fontSize=Stat._fontSize*pixel;Stat._leftText.fontSize=Stat._fontSize*pixel;stat.size(width,height);stat.graphics.clear();stat.graphics.alpha(0.5);stat.graphics.drawRect(0,0,width,height,"#999999");stat.graphics.alpha(2);Stat.loop();}
Stat.enable=function(){Laya.systemTimer.frameLoop(1,Stat,Stat.loop);}
Stat.hide=function(){Stat._show=false;Laya.systemTimer.clear(Stat,Stat.loop);if(Stat._canvas){Browser.removeElement(Stat._canvas.source);}}
Stat.clear=function(){Stat.trianglesFaces=Stat.renderBatches=Stat.savedRenderBatches=Stat.shaderCall=Stat.spriteRenderUseCacheCount=Stat.frustumCulling=Stat.octreeNodeCulling=Stat.canvasNormal=Stat.canvasBitmap=Stat.canvasReCache=0;}
Stat.loop=function(){Stat._count++;var timer=Browser.now();if(timer-Stat._timer<1000)return;var count=Stat._count;Stat.FPS=Math.round((count*1000)/(timer-Stat._timer));if(Stat._show){Stat.trianglesFaces=Math.round(Stat.trianglesFaces/count);if(!Stat._useCanvas){Stat.renderBatches=Math.round(Stat.renderBatches/count)-1;}else{Stat.renderBatches=Math.round(Stat.renderBatches/count);}
Stat.savedRenderBatches=Math.round(Stat.savedRenderBatches/count);Stat.shaderCall=Math.round(Stat.shaderCall/count);Stat.spriteRenderUseCacheCount=Math.round(Stat.spriteRenderUseCacheCount/count);Stat.canvasNormal=Math.round(Stat.canvasNormal/count);Stat.canvasBitmap=Math.round(Stat.canvasBitmap/count);Stat.canvasReCache=Math.ceil(Stat.canvasReCache/count);Stat.frustumCulling=Math.round(Stat.frustumCulling/count);Stat.octreeNodeCulling=Math.round(Stat.octreeNodeCulling/count);var delay=Stat.FPS>0?Math.floor(1000/Stat.FPS).toString():" ";Stat._fpsStr=Stat.FPS+(Stat.renderSlow?" slow":"")+" "+delay;if(Stat._useCanvas)
Stat._spriteStr=(Stat.spriteCount-1)+(Stat.spriteRenderUseCacheCount?("/"+Stat.spriteRenderUseCacheCount):'');else
Stat._spriteStr=(Stat.spriteCount-4)+(Stat.spriteRenderUseCacheCount?("/"+Stat.spriteRenderUseCacheCount):'');Stat._canvasStr=Stat.canvasReCache+"/"+Stat.canvasNormal+"/"+Stat.canvasBitmap;Stat.cpuMemory=Resource.cpuMemory;Stat.gpuMemory=Resource.gpuMemory;if(Stat._useCanvas){Stat.renderInfoPre();}else
Stat.renderInfo();Stat.clear();}
Stat._count=0;Stat._timer=timer;}
Stat.renderInfoPre=function(){var i=0;var one;var value;if(Stat._canvas){var ctx=Stat._ctx;ctx.clearRect(Stat._first?0:Stat._vx,0,Stat._width,Stat._height);for(i=0;i<Stat._view.length;i++){one=Stat._view[i];if(Stat._first){ctx.fillStyle="white";ctx.fillText(one.title,one.x,one.y);}
ctx.fillStyle=one.color;value=Stat[one.value];(one.units=="M")&&(value=Math.floor(value/(1024*1024)*100)/100+" M");ctx.fillText(value+"",one.x+Stat._vx,one.y);}}}
Stat.renderInfo=function(){var text="";for(var i=0;i<Stat._view.length;i++){var one=Stat._view[i];var value=Stat[one.value];(one.units=="M")&&(value=Math.floor(value/(1024*1024)*100)/100+" M");(one.units=="K")&&(value=Math.floor(value/(1024)*100)/100+" K");text+=value+"\n";}
Stat._txt.text=text;}
Stat.FPS=0;Stat.loopCount=0;Stat.shaderCall=0;Stat.renderBatches=0;Stat.savedRenderBatches=0;Stat.trianglesFaces=0;Stat.spriteCount=0;Stat.spriteRenderUseCacheCount=0;Stat.frustumCulling=0;Stat.octreeNodeCulling=0;Stat.canvasNormal=0;Stat.canvasBitmap=0;Stat.canvasReCache=0;Stat.renderSlow=false;Stat.gpuMemory=0;Stat.cpuMemory=0;Stat._fpsStr=null;Stat._canvasStr=null;Stat._spriteStr=null;Stat._fpsData=[];Stat._timer=0;Stat._count=0;Stat._view=[];Stat._fontSize=12;Stat._txt=null;Stat._leftText=null;Stat._sp=null;Stat._titleSp=null;Stat._bgSp=null;Stat._show=false;Stat._useCanvas=false;Stat._canvas=null;Stat._ctx=null;Stat._first=false;Stat._vx=NaN;Stat._width=0;Stat._height=100;return Stat;})()
var Path=(function(){var renderPath;function Path(){this._lastOriX=0;this._lastOriY=0;this.paths=[];this._curPath=null;}
__class(Path,'laya.webgl.canvas.Path');var __proto=Path.prototype;__proto.beginPath=function(convex){this.paths.length=1;this._curPath=this.paths[0]=new renderPath();this._curPath.convex=convex;}
__proto.closePath=function(){this._curPath.loop=true;}
__proto.newPath=function(){this._curPath=new renderPath();this.paths.push(this._curPath);}
__proto.addPoint=function(pointX,pointY){this._curPath.path.push(pointX,pointY);}
__proto.push=function(points,convex){if(!this._curPath){this._curPath=new renderPath();this.paths.push(this._curPath);}else if(this._curPath.path.length>0){this._curPath=new renderPath();this.paths.push(this._curPath);};var rp=this._curPath;rp.path=points.slice();rp.convex=convex;}
__proto.reset=function(){this.paths.length=0;}
Path.__init$=function(){renderPath=(function(){function renderPath(){this.path=[];this.loop=false;this.convex=false;}
__class(renderPath,'');return renderPath;})()}
return Path;})()
var MouseManager=(function(){function MouseManager(){this.mouseX=0;this.mouseY=0;this.disableMouseEvent=false;this.mouseDownTime=0;this.mouseMoveAccuracy=2;this._stage=null;this._captureSp=null;this._captureExlusiveMode=false;this._hitCaputreSp=false;this._target=null;this._lastMoveTimer=0;this._isLeftMouse=false;this._touchIDs={};this._id=1;this._tTouchID=0;this._event=new Event();this._captureChain=[];this._matrix=new Matrix();this._point=new Point();this._rect=new Rectangle();this._prePoint=new Point();this._curTouchID=NaN;}
__class(MouseManager,'laya.events.MouseManager');var __proto=MouseManager.prototype;__proto.__init__=function(stage,canvas){var _$this=this;this._stage=stage;var _this=this;canvas.oncontextmenu=function(e){if(MouseManager.enabled)return false;}
canvas.addEventListener('mousedown',function(e){if(MouseManager.enabled){if(!Browser.onIE)e.preventDefault();_this.mouseDownTime=Browser.now();_$this.runEvent(e);}});canvas.addEventListener('mouseup',function(e){if(MouseManager.enabled){e.preventDefault();_this.mouseDownTime=-Browser.now();_$this.runEvent(e);}},true);canvas.addEventListener('mousemove',function(e){if(MouseManager.enabled){e.preventDefault();var now=Browser.now();if(now-_this._lastMoveTimer<10)return;_this._lastMoveTimer=now;_$this.runEvent(e);}},true);canvas.addEventListener("mouseout",function(e){if(MouseManager.enabled)_$this.runEvent(e);})
canvas.addEventListener("mouseover",function(e){if(MouseManager.enabled)_$this.runEvent(e);})
canvas.addEventListener("touchstart",function(e){if(MouseManager.enabled){if(!MouseManager._isFirstTouch&&!Input.isInputting)e.preventDefault();_this.mouseDownTime=Browser.now();_$this.runEvent(e);}});canvas.addEventListener("touchend",function(e){if(MouseManager.enabled){if(!MouseManager._isFirstTouch&&!Input.isInputting)e.preventDefault();MouseManager._isFirstTouch=false;_this.mouseDownTime=-Browser.now();_$this.runEvent(e);}else{_$this._curTouchID=NaN;}},true);canvas.addEventListener("touchmove",function(e){if(MouseManager.enabled){e.preventDefault();_$this.runEvent(e);}},true);canvas.addEventListener("touchcancel",function(e){if(MouseManager.enabled){e.preventDefault();_$this.runEvent(e);}else{_$this._curTouchID=NaN;}},true);canvas.addEventListener('mousewheel',function(e){if(MouseManager.enabled)_$this.runEvent(e);});canvas.addEventListener('DOMMouseScroll',function(e){if(MouseManager.enabled)_$this.runEvent(e);});}
__proto.initEvent=function(e,nativeEvent){var _this=this;_this._event._stoped=false;_this._event.nativeEvent=nativeEvent||e;_this._target=null;this._point.setTo(e.pageX||e.clientX,e.pageY||e.clientY);if(this._stage._canvasTransform){this._stage._canvasTransform.invertTransformPoint(this._point);_this.mouseX=this._point.x;_this.mouseY=this._point.y;}
_this._event.touchId=e.identifier||0;this._tTouchID=_this._event.touchId;var evt;evt=TouchManager.I._event;evt._stoped=false;evt.nativeEvent=_this._event.nativeEvent;evt.touchId=_this._event.touchId;}
__proto.checkMouseWheel=function(e){this._event.delta=e.wheelDelta?e.wheelDelta*0.025:-e.detail;var _lastOvers=TouchManager.I.getLastOvers();for(var i=0,n=_lastOvers.length;i<n;i++){var ele=_lastOvers[i];ele.event("mousewheel",this._event.setTo("mousewheel",ele,this._target));}}
__proto.onMouseMove=function(ele){TouchManager.I.onMouseMove(ele,this._tTouchID);}
__proto.onMouseDown=function(ele){if(Input.isInputting&&Laya.stage.focus&&Laya.stage.focus["focus"]&&!Laya.stage.focus.contains(this._target)){var pre_input=Laya.stage.focus['_tf']||Laya.stage.focus;var new_input=ele['_tf']||ele;if((new_input instanceof laya.display.Input)&&new_input.multiline==pre_input.multiline)
pre_input['_focusOut']();else
pre_input.focus=false;}
TouchManager.I.onMouseDown(ele,this._tTouchID,this._isLeftMouse);}
__proto.onMouseUp=function(ele){TouchManager.I.onMouseUp(ele,this._tTouchID,this._isLeftMouse);}
__proto.check=function(sp,mouseX,mouseY,callBack){this._point.setTo(mouseX,mouseY);sp.fromParentPoint(this._point);mouseX=this._point.x;mouseY=this._point.y;var scrollRect=sp._style.scrollRect;if(scrollRect){this._rect.setTo(scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);if(!this._rect.contains(mouseX,mouseY))return false;}
if(!this.disableMouseEvent){if(sp.hitTestPrior&&!sp.mouseThrough&&!this.hitTest(sp,mouseX,mouseY)){return false;}
for(var i=sp._children.length-1;i>-1;i--){var child=sp._children[i];if(!child.destroyed&&child._mouseState>1&&child._visible){if(this.check(child,mouseX,mouseY,callBack))return true;}}
for(i=sp._extUIChild.length-1;i>=0;i--){var c=sp._extUIChild[i];if(!c.destroyed&&c._mouseState>1&&c._visible){if(this.check(c,mouseX,mouseY,callBack))return true;}}};var isHit=(sp.hitTestPrior&&!sp.mouseThrough&&!this.disableMouseEvent)?true:this.hitTest(sp,mouseX,mouseY);if(isHit){this._target=sp;callBack.call(this,sp);if(this._target==this._hitCaputreSp){this._hitCaputreSp=true;}}else if(callBack===this.onMouseUp&&sp===this._stage){this._target=this._stage;callBack.call(this,this._target);}
return isHit;}
__proto.hitTest=function(sp,mouseX,mouseY){var isHit=false;if(sp.scrollRect){mouseX-=sp._style.scrollRect.x;mouseY-=sp._style.scrollRect.y;};var hitArea=sp._style.hitArea;if(hitArea&&hitArea._hit){return hitArea.contains(mouseX,mouseY);}
if(sp.width>0&&sp.height>0||sp.mouseThrough||hitArea){if(!sp.mouseThrough){isHit=(hitArea?hitArea:this._rect.setTo(0,0,sp.width,sp.height)).contains(mouseX,mouseY);}else{isHit=sp.getGraphicBounds().contains(mouseX,mouseY);}}
return isHit;}
__proto._checkAllBaseUI=function(mousex,mousey,callback){var ret=this.handleExclusiveCapture(this.mouseX,this.mouseY,callback);if(ret)return true;ret=this.check(this._stage,this.mouseX,this.mouseY,callback);return this.handleCapture(this.mouseX,this.mouseY,callback)||ret;}
__proto.check3DUI=function(mousex,mousey,callback){var uis=this._stage._3dUI;var i=0;var ret=false;for(;i<uis.length;i++){var curui=uis[i];this._stage._curUIBase=curui;if(!curui.destroyed&&curui._mouseState>1&&curui._visible){ret=ret||this.check(curui,this.mouseX,this.mouseY,callback);}}
this._stage._curUIBase=this._stage;return ret;}
__proto.handleExclusiveCapture=function(mousex,mousey,callback){if(this._captureExlusiveMode&&this._captureSp&&this._captureChain.length>0){var cursp;this._point.setTo(mousex,mousey);for(var i=0;i<this._captureChain.length;i++){cursp=this._captureChain[i];cursp.fromParentPoint(this._point);}
this._target=cursp;callback.call(this,cursp);return true;}
return false;}
__proto.handleCapture=function(mousex,mousey,callback){if(!this._hitCaputreSp&&this._captureSp&&this._captureChain.length>0){var cursp;this._point.setTo(mousex,mousey);for(var i=0;i<this._captureChain.length;i++){cursp=this._captureChain[i];cursp.fromParentPoint(this._point);}
this._target=cursp;callback.call(this,cursp);return true;}
return false;}
__proto.runEvent=function(evt){var _this=this;var i=0,n=0,touch;if(evt.type!=='mousemove')this._prePoint.x=this._prePoint.y=-1000000;switch(evt.type){case'mousedown':this._touchIDs[0]=this._id++;if(!MouseManager._isTouchRespond){this._isLeftMouse=evt.button===0;this.initEvent(evt);this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseDown);}else
MouseManager._isTouchRespond=false;break;case'mouseup':this._isLeftMouse=evt.button===0;this.initEvent(evt);this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseUp);break;case'mousemove':if((Math.abs(this._prePoint.x-evt.clientX)+Math.abs(this._prePoint.y-evt.clientY))>=this.mouseMoveAccuracy){this._prePoint.x=evt.clientX;this._prePoint.y=evt.clientY;this.initEvent(evt);this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseMove);}
break;case"touchstart":MouseManager._isTouchRespond=true;this._isLeftMouse=true;var touches=evt.changedTouches;for(i=0,n=touches.length;i<n;i++){touch=touches[i];if(MouseManager.multiTouchEnabled||isNaN(this._curTouchID)){this._curTouchID=touch.identifier;if(this._id%200===0)this._touchIDs={};this._touchIDs[touch.identifier]=this._id++;this.initEvent(touch,evt);this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseDown);}}
break;case"touchend":case"touchcancel":MouseManager._isTouchRespond=true;this._isLeftMouse=true;var touchends=evt.changedTouches;for(i=0,n=touchends.length;i<n;i++){touch=touchends[i];if(MouseManager.multiTouchEnabled||touch.identifier==this._curTouchID){this._curTouchID=NaN;this.initEvent(touch,evt);var isChecked=false;isChecked=this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseUp);if(!isChecked){this.onMouseUp(null);}}}
break;case"touchmove":;var touchemoves=evt.changedTouches;for(i=0,n=touchemoves.length;i<n;i++){touch=touchemoves[i];if(MouseManager.multiTouchEnabled||touch.identifier==this._curTouchID){this.initEvent(touch,evt);this._checkAllBaseUI(this.mouseX,this.mouseY,this.onMouseMove);}}
break;case"wheel":case"mousewheel":case"DOMMouseScroll":this.checkMouseWheel(evt);break;case"mouseout":TouchManager.I.stageMouseOut();break;case"mouseover":this._stage.event("mouseover",this._event.setTo("mouseover",this._stage,this._stage));break;}}
__proto.setCapture=function(sp,exclusive){(exclusive===void 0)&&(exclusive=false);this._captureSp=sp;this._captureExlusiveMode=exclusive;this._captureChain.length=0;this._captureChain.push(sp);var cursp=sp;while(true){if(cursp==Laya.stage)break;if(cursp==Laya.stage._curUIBase)break;cursp=cursp.parent;if(!cursp)break;this._captureChain.splice(0,0,cursp);}}
__proto.releaseCapture=function(){console.log('release capture');this._captureSp=null;}
MouseManager.enabled=true;MouseManager.multiTouchEnabled=true;MouseManager._isTouchRespond=false;MouseManager._isFirstTouch=true;__static(MouseManager,['instance',function(){return this.instance=new MouseManager();}]);return MouseManager;})()
var VectorGraphManager=(function(){function VectorGraphManager(){this.useDic={};this.shapeDic={};this.shapeLineDic={};this._id=0;this._checkKey=false;this._freeIdArray=[];CacheManger.regCacheByFunction(Utils.bind(this.startDispose,this),Utils.bind(this.getCacheList,this));}
__class(VectorGraphManager,'laya.utils.VectorGraphManager');var __proto=VectorGraphManager.prototype;__proto.getId=function(){return this._id++;}
__proto.addShape=function(id,shape){this.shapeDic[id]=shape;if(!this.useDic[id]){this.useDic[id]=true;}}
__proto.addLine=function(id,Line){this.shapeLineDic[id]=Line;if(!this.shapeLineDic[id]){this.shapeLineDic[id]=true;}}
__proto.getShape=function(id){if(this._checkKey){if(this.useDic[id]!=null){this.useDic[id]=true;}}}
__proto.deleteShape=function(id){if(this.shapeDic[id]){this.shapeDic[id]=null;delete this.shapeDic[id];}
if(this.shapeLineDic[id]){this.shapeLineDic[id]=null;delete this.shapeLineDic[id];}
if(this.useDic[id]!=null){delete this.useDic[id];}}
__proto.getCacheList=function(){var str;var list=[];for(str in this.shapeDic){list.push(this.shapeDic[str]);}
for(str in this.shapeLineDic){list.push(this.shapeLineDic[str]);}
return list;}
__proto.startDispose=function(key){var str;for(str in this.useDic){this.useDic[str]=false;}
this._checkKey=true;}
__proto.endDispose=function(){if(this._checkKey){var str;for(str in this.useDic){if(!this.useDic[str]){this.deleteShape(str);}}
this._checkKey=false;}}
VectorGraphManager.getInstance=function(){return VectorGraphManager.instance=VectorGraphManager.instance||new VectorGraphManager();}
VectorGraphManager.instance=null;return VectorGraphManager;})()
var MathUtil=(function(){function MathUtil(){}
__class(MathUtil,'laya.maths.MathUtil');MathUtil.subtractVector3=function(l,r,o){o[0]=l[0]-r[0];o[1]=l[1]-r[1];o[2]=l[2]-r[2];}
MathUtil.lerp=function(left,right,amount){return left*(1-amount)+right*amount;}
MathUtil.scaleVector3=function(f,b,e){e[0]=f[0]*b;e[1]=f[1]*b;e[2]=f[2]*b;}
MathUtil.lerpVector3=function(l,r,t,o){var ax=l[0],ay=l[1],az=l[2];o[0]=ax+t*(r[0]-ax);o[1]=ay+t*(r[1]-ay);o[2]=az+t*(r[2]-az);}
MathUtil.lerpVector4=function(l,r,t,o){var ax=l[0],ay=l[1],az=l[2],aw=l[3];o[0]=ax+t*(r[0]-ax);o[1]=ay+t*(r[1]-ay);o[2]=az+t*(r[2]-az);o[3]=aw+t*(r[3]-aw);}
MathUtil.slerpQuaternionArray=function(a,Offset1,b,Offset2,t,out,Offset3){var ax=a[Offset1+0],ay=a[Offset1+1],az=a[Offset1+2],aw=a[Offset1+3],bx=b[Offset2+0],by=b[Offset2+1],bz=b[Offset2+2],bw=b[Offset2+3];var omega,cosom,sinom,scale0,scale1;cosom=ax*bx+ay*by+az*bz+aw*bw;if(cosom<0.0){cosom=-cosom;bx=-bx;by=-by;bz=-bz;bw=-bw;}
if((1.0-cosom)>0.000001){omega=Math.acos(cosom);sinom=Math.sin(omega);scale0=Math.sin((1.0-t)*omega)/sinom;scale1=Math.sin(t*omega)/sinom;}else{scale0=1.0-t;scale1=t;}
out[Offset3+0]=scale0*ax+scale1*bx;out[Offset3+1]=scale0*ay+scale1*by;out[Offset3+2]=scale0*az+scale1*bz;out[Offset3+3]=scale0*aw+scale1*bw;return out;}
MathUtil.getRotation=function(x0,y0,x1,y1){return Math.atan2(y1-y0,x1-x0)/Math.PI*180;}
MathUtil.sortBigFirst=function(a,b){if(a==b)return 0;return b>a?1:-1;}
MathUtil.sortSmallFirst=function(a,b){if(a==b)return 0;return b>a?-1:1;}
MathUtil.sortNumBigFirst=function(a,b){return parseFloat(b)-parseFloat(a);}
MathUtil.sortNumSmallFirst=function(a,b){return parseFloat(a)-parseFloat(b);}
MathUtil.sortByKey=function(key,bigFirst,forceNum){(bigFirst===void 0)&&(bigFirst=false);(forceNum===void 0)&&(forceNum=true);var _sortFun;if(bigFirst){_sortFun=forceNum?MathUtil.sortNumBigFirst:MathUtil.sortBigFirst;}else{_sortFun=forceNum?MathUtil.sortNumSmallFirst:MathUtil.sortSmallFirst;}
return function(a,b){return _sortFun(a[key],b[key]);}}
return MathUtil;})()
var RenderSprite=(function(){function RenderSprite(type,next){if(LayaGLQuickRunner.map[type]){this._fun=LayaGLQuickRunner.map[type];this._next=RenderSprite.NORENDER;return;}
this._next=next||RenderSprite.NORENDER;switch(type){case 0:this._fun=this._no;return;case 0x01:this._fun=this._alpha;return;case 0x02:this._fun=this._transform;return;case 0x04:this._fun=this._blend;return;case 0x08:this._fun=this._canvas;return;case 0x20:this._fun=this._mask;return;case 0x40:this._fun=this._clip;return;case 0x80:this._fun=this._style;return;case 0x200:this._fun=this._graphics;return;case 0x2000:this._fun=this._children;return;case 0x800:this._fun=this._custom;return;case 0x100:this._fun=this._texture;return;case 0x10:this._fun=Filter._filter;return;case 0x11111:this._fun=RenderSprite._initRenderFun;return;}
this.onCreate(type);}
__class(RenderSprite,'laya.renders.RenderSprite');var __proto=RenderSprite.prototype;__proto.onCreate=function(type){}
__proto._style=function(sprite,context,x,y){var style=sprite._style;if(style.render!=null)style.render(sprite,context,x,y);var next=this._next;next._fun.call(next,sprite,context,x,y);}
__proto._no=function(sprite,context,x,y){}
__proto._custom=function(sprite,context,x,y){sprite.customRender(context,x,y);this._next._fun.call(this._next,sprite,context,x-sprite.pivotX,y-sprite.pivotY);}
__proto._clip=function(sprite,context,x,y){var next=this._next;if(next==RenderSprite.NORENDER)return;var r=sprite._style.scrollRect;context.save();context.clipRect(x,y,r.width,r.height);next._fun.call(next,sprite,context,x-r.x,y-r.y);context.restore();}
__proto._texture=function(sprite,context,x,y){var tex=sprite.texture;if(tex._getSource())
context.drawTexture(tex,x-sprite.pivotX+tex.offsetX,y-sprite.pivotY+tex.offsetY,sprite._width||tex.width,sprite._height||tex.height);var next=this._next;if(next!=RenderSprite.NORENDER)
next._fun.call(next,sprite,context,x,y);}
__proto._graphics=function(sprite,context,x,y){var style=sprite._style;var g=sprite._graphics;g&&g._render(sprite,context,x-style.pivotX,y-style.pivotY);var next=this._next;if(next!=RenderSprite.NORENDER)
next._fun.call(next,sprite,context,x,y);}
__proto._image=function(sprite,context,x,y){var style=sprite._style;context.drawTexture2(x,y,style.pivotX,style.pivotY,sprite.transform,sprite._graphics._one);}
__proto._image2=function(sprite,context,x,y){var style=sprite._style;context.drawTexture2(x,y,style.pivotX,style.pivotY,sprite.transform,sprite._graphics._one);}
__proto._alpha=function(sprite,context,x,y){var style=sprite._style;var alpha;if((alpha=style.alpha)>0.01||sprite._needRepaint()){var temp=context.globalAlpha;context.globalAlpha*=alpha;var next=this._next;next._fun.call(next,sprite,context,x,y);context.globalAlpha=temp;}}
__proto._transform=function(sprite,context,x,y){var transform=sprite.transform,_next=this._next;var style=sprite._style;if(transform&&_next!=RenderSprite.NORENDER){context.save();context.transform(transform.a,transform.b,transform.c,transform.d,transform.tx+x,transform.ty+y);_next._fun.call(_next,sprite,context,0,0);context.restore();}else{if(_next!=RenderSprite.NORENDER)
_next._fun.call(_next,sprite,context,x,y);}}
__proto._children=function(sprite,context,x,y){var style=sprite._style;var childs=sprite._children,n=childs.length,ele;x=x-sprite.pivotX;y=y-sprite.pivotY;var textLastRender=sprite._getBit(0x100)&&context.drawCallOptimize(true);if(style.viewport){var rect=style.viewport;var left=rect.x;var top=rect.y;var right=rect.right;var bottom=rect.bottom;var _x=NaN,_y=NaN;for(i=0;i<n;++i){if((ele=childs[i])._visible&&((_x=ele._x)<right&&(_x+ele.width)>left&&(_y=ele._y)<bottom&&(_y+ele.height)>top)){ele.render(context,x,y);}}}else{for(var i=0;i<n;++i)
(ele=(childs[i]))._visible&&ele.render(context,x,y);}
textLastRender&&context.drawCallOptimize(false);}
__proto._canvas=function(sprite,context,x,y){var _cacheStyle=sprite._cacheStyle;var _next=this._next;if(!_cacheStyle.enableCanvasRender){_next._fun.call(_next,sprite,context,x,y);return;}
_cacheStyle.cacheAs==='bitmap'?(Stat.canvasBitmap++):(Stat.canvasNormal++);var cacheNeedRebuild=false;var textNeedRestore=false;if(_cacheStyle.canvas){var canv=_cacheStyle.canvas;var ctx=canv.context;var charRIs=canv.touches;if(charRIs){for(var ci=0;ci<charRIs.length;ci++){if(charRIs[ci].deleted){textNeedRestore=true;break;}}}
cacheNeedRebuild=canv.isCacheValid&&!canv.isCacheValid();}
if(sprite._needRepaint()||(!_cacheStyle.canvas)||textNeedRestore||cacheNeedRebuild||Laya.stage.isGlobalRepaint()){if(_cacheStyle.cacheAs==='normal'){if(context._targets){_next._fun.call(_next,sprite,context,x,y);return;}else{this._canvas_webgl_normal_repaint(sprite,context);}}else{this._canvas_repaint(sprite,context,x,y);}};var tRec=_cacheStyle.cacheRect;context.drawCanvas(_cacheStyle.canvas,x+tRec.x,y+tRec.y,tRec.width,tRec.height);}
__proto._canvas_repaint=function(sprite,context,x,y){var _cacheStyle=sprite._cacheStyle;var _next=this._next;var tx;var canvas=_cacheStyle.canvas;var left;var top;var tRec;var tCacheType=_cacheStyle.cacheAs;var w,h;var scaleX,scaleY;var scaleInfo;scaleInfo=_cacheStyle._calculateCacheRect(sprite,tCacheType,x,y);scaleX=scaleInfo.x;scaleY=scaleInfo.y;tRec=_cacheStyle.cacheRect;w=tRec.width*scaleX;h=tRec.height*scaleY;left=tRec.x;top=tRec.y;if(tCacheType==='bitmap'&&(w>2048||h>2048)){console.warn("cache bitmap size larger than 2048,cache ignored");_cacheStyle.releaseContext();_next._fun.call(_next,sprite,context,x,y);return;}
if(!canvas){_cacheStyle.createContext();canvas=_cacheStyle.canvas;}
tx=canvas.context;tx.sprite=sprite;(canvas.width!=w||canvas.height!=h)&&canvas.size(w,h);if(tCacheType==='bitmap')tx.asBitmap=true;else if(tCacheType==='normal')tx.asBitmap=false;tx.clear();if(scaleX!=1||scaleY!=1){var ctx=tx;ctx.save();ctx.scale(scaleX,scaleY);_next._fun.call(_next,sprite,tx,-left,-top);ctx.restore();sprite._applyFilters();}else{ctx=tx;_next._fun.call(_next,sprite,tx,-left,-top);sprite._applyFilters();}
if(_cacheStyle.staticCache)_cacheStyle.reCache=false;Stat.canvasReCache++;}
__proto._canvas_webgl_normal_repaint=function(sprite,context){var _cacheStyle=sprite._cacheStyle;var _next=this._next;var canvas=_cacheStyle.canvas;var tCacheType=_cacheStyle.cacheAs;var scaleInfo=_cacheStyle._calculateCacheRect(sprite,tCacheType,0,0);if(!canvas){canvas=_cacheStyle.canvas=new Laya.WebGLCacheAsNormalCanvas(context,sprite);};var tx=canvas.context;canvas['startRec']();_next._fun.call(_next,sprite,tx,sprite.pivotX,sprite.pivotY);sprite._applyFilters();Stat.canvasReCache++;canvas['endRec']();}
__proto._blend=function(sprite,context,x,y){var style=sprite._style;var next=this._next;if(style.blendMode){context.save();context.globalCompositeOperation=style.blendMode;next._fun.call(next,sprite,context,x,y);context.restore();}else{next._fun.call(next,sprite,context,x,y);}}
__proto._mask=function(sprite,context,x,y){var next=this._next;var mask=sprite.mask;var submitCMD;var ctx=context;if(mask){ctx.save();var preBlendMode=ctx.globalCompositeOperation;var tRect=new Rectangle();tRect.copyFrom(mask.getBounds());tRect.width=Math.round(tRect.width);tRect.height=Math.round(tRect.height);tRect.x=Math.round(tRect.x);tRect.y=Math.round(tRect.y);if(tRect.width>0&&tRect.height>0){var w=tRect.width;var h=tRect.height;var tmpRT=WebGLRTMgr.getRT(w,h);ctx.breakNextMerge();ctx.pushRT();ctx.addRenderObject(SubmitCMD.create([ctx,tmpRT,w,h],RenderSprite.tmpTarget,this));mask.render(ctx,-tRect.x,-tRect.y);ctx.breakNextMerge();ctx.popRT();ctx.save();ctx.clipRect(x+tRect.x-sprite.getStyle().pivotX,y+tRect.y-sprite.getStyle().pivotY,w,h);next._fun.call(next,sprite,ctx,x,y);ctx.restore();preBlendMode=ctx.globalCompositeOperation;ctx.addRenderObject(SubmitCMD.create(["mask"],RenderSprite.setBlendMode,this));var shaderValue=Value2D.create(0x01,0);var uv=Texture.INV_UV;ctx.drawTarget(tmpRT,x+tRect.x-sprite.getStyle().pivotX,y+tRect.y-sprite.getStyle().pivotY,w,h,Matrix.TEMP.identity(),shaderValue,uv,6);ctx.addRenderObject(SubmitCMD.create([tmpRT],RenderSprite.recycleTarget,this));ctx.addRenderObject(SubmitCMD.create([preBlendMode],RenderSprite.setBlendMode,this));}
ctx.restore();}else{next._fun.call(next,sprite,context,x,y);}}
RenderSprite.__init__=function(){LayaGLQuickRunner.__init__();var i=0,len=0;var initRender;initRender=new RenderSprite(0x11111,null);len=RenderSprite.renders.length=0x2000*2;for(i=0;i<len;i++)
RenderSprite.renders[i]=initRender;RenderSprite.renders[0]=new RenderSprite(0,null);function _initSame(value,o){var n=0;for(var i=0;i<value.length;i++){n|=value[i];RenderSprite.renders[n]=o;}}}
RenderSprite._initRenderFun=function(sprite,context,x,y){var type=sprite._renderType;var r=RenderSprite.renders[type]=RenderSprite._getTypeRender(type);r._fun(sprite,context,x,y);}
RenderSprite._getTypeRender=function(type){if(LayaGLQuickRunner.map[type])return new RenderSprite(type,null);var rst=null;var tType=0x2000;while(tType>0){if(tType&type)
rst=new RenderSprite(tType,rst);tType=tType>>1;}
return rst;}
RenderSprite.tmpTarget=function(ctx,rt,w,h){rt.start();rt.clear(0,0,0,0);}
RenderSprite.recycleTarget=function(rt){WebGLRTMgr.releaseRT(rt);}
RenderSprite.setBlendMode=function(blendMode){var gl=WebGL.mainContext;BlendMode.targetFns[BlendMode.TOINT[blendMode]](gl);}
RenderSprite.INIT=0x11111;RenderSprite.renders=[];RenderSprite.NORENDER=new RenderSprite(0,null);__static(RenderSprite,['tempUV',function(){return this.tempUV=new Array(8);}]);return RenderSprite;})()
var Keyboard=(function(){function Keyboard(){}
__class(Keyboard,'laya.events.Keyboard');Keyboard.NUMBER_0=48;Keyboard.NUMBER_1=49;Keyboard.NUMBER_2=50;Keyboard.NUMBER_3=51;Keyboard.NUMBER_4=52;Keyboard.NUMBER_5=53;Keyboard.NUMBER_6=54;Keyboard.NUMBER_7=55;Keyboard.NUMBER_8=56;Keyboard.NUMBER_9=57;Keyboard.A=65;Keyboard.B=66;Keyboard.C=67;Keyboard.D=68;Keyboard.E=69;Keyboard.F=70;Keyboard.G=71;Keyboard.H=72;Keyboard.I=73;Keyboard.J=74;Keyboard.K=75;Keyboard.L=76;Keyboard.M=77;Keyboard.N=78;Keyboard.O=79;Keyboard.P=80;Keyboard.Q=81;Keyboard.R=82;Keyboard.S=83;Keyboard.T=84;Keyboard.U=85;Keyboard.V=86;Keyboard.W=87;Keyboard.X=88;Keyboard.Y=89;Keyboard.Z=90;Keyboard.F1=112;Keyboard.F2=113;Keyboard.F3=114;Keyboard.F4=115;Keyboard.F5=116;Keyboard.F6=117;Keyboard.F7=118;Keyboard.F8=119;Keyboard.F9=120;Keyboard.F10=121;Keyboard.F11=122;Keyboard.F12=123;Keyboard.F13=124;Keyboard.F14=125;Keyboard.F15=126;Keyboard.NUMPAD=21;Keyboard.NUMPAD_0=96;Keyboard.NUMPAD_1=97;Keyboard.NUMPAD_2=98;Keyboard.NUMPAD_3=99;Keyboard.NUMPAD_4=100;Keyboard.NUMPAD_5=101;Keyboard.NUMPAD_6=102;Keyboard.NUMPAD_7=103;Keyboard.NUMPAD_8=104;Keyboard.NUMPAD_9=105;Keyboard.NUMPAD_ADD=107;Keyboard.NUMPAD_DECIMAL=110;Keyboard.NUMPAD_DIVIDE=111;Keyboard.NUMPAD_ENTER=108;Keyboard.NUMPAD_MULTIPLY=106;Keyboard.NUMPAD_SUBTRACT=109;Keyboard.SEMICOLON=186;Keyboard.EQUAL=187;Keyboard.COMMA=188;Keyboard.MINUS=189;Keyboard.PERIOD=190;Keyboard.SLASH=191;Keyboard.BACKQUOTE=192;Keyboard.LEFTBRACKET=219;Keyboard.BACKSLASH=220;Keyboard.RIGHTBRACKET=221;Keyboard.QUOTE=222;Keyboard.ALTERNATE=18;Keyboard.BACKSPACE=8;Keyboard.CAPS_LOCK=20;Keyboard.COMMAND=15;Keyboard.CONTROL=17;Keyboard.DELETE=46;Keyboard.ENTER=13;Keyboard.ESCAPE=27;Keyboard.PAGE_UP=33;Keyboard.PAGE_DOWN=34;Keyboard.END=35;Keyboard.HOME=36;Keyboard.LEFT=37;Keyboard.UP=38;Keyboard.RIGHT=39;Keyboard.DOWN=40;Keyboard.SHIFT=16;Keyboard.SPACE=32;Keyboard.TAB=9;Keyboard.INSERT=45;return Keyboard;})()
var RestoreCmd=(function(){function RestoreCmd(){}
__class(RestoreCmd,'laya.display.cmd.RestoreCmd');var __proto=RestoreCmd.prototype;__proto.recover=function(){Pool.recover("RestoreCmd",this);}
__proto.run=function(context,gx,gy){context.restore();}
__getset(0,__proto,'cmdID',function(){return"Restore";});RestoreCmd.create=function(){var cmd=Pool.getItemByClass("RestoreCmd",RestoreCmd);return cmd;}
RestoreCmd.ID="Restore";return RestoreCmd;})()
var ShaderDefinesBase=(function(){function ShaderDefinesBase(name2int,int2name,int2nameMap){this._value=0;this._name2int=name2int;this._int2name=int2name;this._int2nameMap=int2nameMap;}
__class(ShaderDefinesBase,'laya.webgl.shader.ShaderDefinesBase');var __proto=ShaderDefinesBase.prototype;__proto.add=function(value){if((typeof value=='string'))value=this._name2int[value];this._value|=value;return this._value;}
__proto.addInt=function(value){this._value|=value;return this._value;}
__proto.remove=function(value){if((typeof value=='string'))value=this._name2int[value];this._value&=(~value);return this._value;}
__proto.isDefine=function(def){return(this._value&def)===def;}
__proto.getValue=function(){return this._value;}
__proto.setValue=function(value){this._value=value;}
__proto.toNameDic=function(){var r=this._int2nameMap[this._value];return r?r:ShaderDefinesBase._toText(this._value,this._int2name,this._int2nameMap);}
ShaderDefinesBase._reg=function(name,value,_name2int,_int2name){_name2int[name]=value;_int2name[value]=name;}
ShaderDefinesBase._toText=function(value,_int2name,_int2nameMap){var r=_int2nameMap[value];if(r)return r;var o={};var d=1;for(var i=0;i<32;i++){d=1<<i;if(d>value)break;if(value&d){var name=_int2name[d];name&&(o[name]="");}}
_int2nameMap[value]=o;return o;}
ShaderDefinesBase._toInt=function(names,_name2int){var words=names.split('.');var num=0;for(var i=0,n=words.length;i<n;i++){var value=_name2int[words[i]];if(!value)throw new Error("Defines to int err:"+names+"/"+words[i]);num|=value;}
return num;}
return ShaderDefinesBase;})()
var BitmapFont=(function(){function BitmapFont(){this._texture=null;this._fontCharDic={};this._fontWidthMap={};this._complete=null;this._path=null;this._maxWidth=0;this._spaceWidth=10;this._padding=null;this.fontSize=12;this.autoScaleSize=false;this.letterSpacing=0;}
__class(BitmapFont,'laya.display.BitmapFont');var __proto=BitmapFont.prototype;__proto.loadFont=function(path,complete){this._path=path;this._complete=complete;if(!path||path.indexOf(".fnt")===-1){console.error('Bitmap font configuration information must be a ".fnt" file');return;}
Laya.loader.load([{url:path,type:"xml"},{url:path.replace(".fnt",".png"),type:"image"}],Handler.create(this,this._onLoaded));}
__proto._onLoaded=function(){this.parseFont(Loader.getRes(this._path),Loader.getRes(this._path.replace(".fnt",".png")));this._complete&&this._complete.run();}
__proto.parseFont=function(xml,texture){if(xml==null||texture==null)return;this._texture=texture;var tX=0;var tScale=1;var tInfo=xml.getElementsByTagName("info");if(!tInfo[0].getAttributeNode){return this.parseFont2(xml,texture);}
this.fontSize=parseInt(tInfo[0].getAttributeNode("size").nodeValue);var tPadding=tInfo[0].getAttributeNode("padding").nodeValue;var tPaddingArray=tPadding.split(",");this._padding=[parseInt(tPaddingArray[0]),parseInt(tPaddingArray[1]),parseInt(tPaddingArray[2]),parseInt(tPaddingArray[3])];var chars;chars=xml.getElementsByTagName("char");var i=0;for(i=0;i<chars.length;i++){var tAttribute=chars[i];var tId=parseInt(tAttribute.getAttributeNode("id").nodeValue);var xOffset=parseInt(tAttribute.getAttributeNode("xoffset").nodeValue)/tScale;var yOffset=parseInt(tAttribute.getAttributeNode("yoffset").nodeValue)/tScale;var xAdvance=parseInt(tAttribute.getAttributeNode("xadvance").nodeValue)/tScale;var region=new Rectangle();region.x=parseInt(tAttribute.getAttributeNode("x").nodeValue);region.y=parseInt(tAttribute.getAttributeNode("y").nodeValue);region.width=parseInt(tAttribute.getAttributeNode("width").nodeValue);region.height=parseInt(tAttribute.getAttributeNode("height").nodeValue);var tTexture=Texture.create((texture),region.x,region.y,region.width,region.height,xOffset,yOffset);this._maxWidth=Math.max(this._maxWidth,xAdvance+this.letterSpacing);this._fontCharDic[tId]=tTexture;this._fontWidthMap[tId]=xAdvance;}}
__proto.parseFont2=function(xml,texture){if(xml==null||texture==null)return;this._texture=texture;var tX=0;var tScale=1;var tInfo=xml.getElementsByTagName("info");this.fontSize=parseInt(tInfo[0].attributes["size"].nodeValue);var tPadding=tInfo[0].attributes["padding"].nodeValue;var tPaddingArray=tPadding.split(",");this._padding=[parseInt(tPaddingArray[0]),parseInt(tPaddingArray[1]),parseInt(tPaddingArray[2]),parseInt(tPaddingArray[3])];var chars=xml.getElementsByTagName("char");var i=0;for(i=0;i<chars.length;i++){var tAttribute=chars[i].attributes;var tId=parseInt(tAttribute["id"].nodeValue);var xOffset=parseInt(tAttribute["xoffset"].nodeValue)/tScale;var yOffset=parseInt(tAttribute["yoffset"].nodeValue)/tScale;var xAdvance=parseInt(tAttribute["xadvance"].nodeValue)/tScale;var region=new Rectangle();region.x=parseInt(tAttribute["x"].nodeValue);region.y=parseInt(tAttribute["y"].nodeValue);region.width=parseInt(tAttribute["width"].nodeValue);region.height=parseInt(tAttribute["height"].nodeValue);var tTexture=Texture.create((texture),region.x,region.y,region.width,region.height,xOffset,yOffset);this._maxWidth=Math.max(this._maxWidth,xAdvance+this.letterSpacing);this._fontCharDic[tId]=tTexture;this._fontWidthMap[tId]=xAdvance;}}
__proto.getCharTexture=function(char){return this._fontCharDic[char.charCodeAt(0)];}
__proto.destroy=function(){if(this._texture){for(var p in this._fontCharDic){var tTexture=this._fontCharDic[p];if(tTexture)tTexture.destroy();}
this._texture.destroy();this._fontCharDic=null;this._fontWidthMap=null;this._texture=null;this._complete=null;this._padding=null;}}
__proto.setSpaceWidth=function(spaceWidth){this._spaceWidth=spaceWidth;}
__proto.getCharWidth=function(char){var code=char.charCodeAt(0);if(this._fontWidthMap[code])return this._fontWidthMap[code]+this.letterSpacing;if(char===" ")return this._spaceWidth+this.letterSpacing;return 0;}
__proto.getTextWidth=function(text){var tWidth=0;for(var i=0,n=text.length;i<n;i++){tWidth+=this.getCharWidth(text.charAt(i));}
return tWidth;}
__proto.getMaxWidth=function(){return this._maxWidth;}
__proto.getMaxHeight=function(){return this.fontSize;}
__proto._drawText=function(text,sprite,drawX,drawY,align,width){var tWidth=this.getTextWidth(text);var tTexture;var dx=0;align==="center"&&(dx=(width-tWidth)/2);align==="right"&&(dx=(width-tWidth));var tx=0;for(var i=0,n=text.length;i<n;i++){tTexture=this.getCharTexture(text.charAt(i));if(tTexture){sprite.graphics.drawImage(tTexture,drawX+tx+dx,drawY);tx+=this.getCharWidth(text.charAt(i));}}}
return BitmapFont;})()
var ClipRectCmd=(function(){function ClipRectCmd(){}
__class(ClipRectCmd,'laya.display.cmd.ClipRectCmd');var __proto=ClipRectCmd.prototype;__proto.recover=function(){Pool.recover("ClipRectCmd",this);}
__proto.run=function(context,gx,gy){context.clipRect(this.x+gx,this.y+gy,this.width,this.height);}
__getset(0,__proto,'cmdID',function(){return"ClipRect";});ClipRectCmd.create=function(x,y,width,height){var cmd=Pool.getItemByClass("ClipRectCmd",ClipRectCmd);cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;return cmd;}
ClipRectCmd.ID="ClipRect";return ClipRectCmd;})()
var Shader2D=(function(){function Shader2D(){this.ALPHA=1;this.shaderType=0;this.defines=new ShaderDefines2D();this.fillStyle=DrawStyle.DEFAULT;this.strokeStyle=DrawStyle.DEFAULT;}
__class(Shader2D,'laya.webgl.shader.d2.Shader2D');var __proto=Shader2D.prototype;__proto.destroy=function(){this.defines=null;this.filters=null;}
Shader2D.__init__=function(){var vs,ps;vs="/*\n texture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;  // 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;   // 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n uniform mat4 mmat;\n#endif\n#ifdef MVP3D\n uniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n vec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n pos=mmat*pos;\n#endif\n vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n gl_Position=u_MvpMatrix*pos1;\n#else\n gl_Position=pos1;\n#endif\n v_texcoordAlpha.xy = posuv.zw;\n //v_texcoordAlpha.z = attribColor.a/255.0;\n v_color = attribColor/255.0;\n v_color.xyz*=v_color.w;//反正后面也要预乘\n \n v_useTex = attribFlags.r/255.0;\n float clipw = length(clipMatDir.xy);\n float cliph = length(clipMatDir.zw);\n \n vec2 clpos = clipMatPos.xy;\n #ifdef WORLDMAT\n  // 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n  if(clipOff[0]>0.0){\n   clpos.x+=mmat[3].x; //tx 最简单处理\n   clpos.y+=mmat[3].y; //ty\n  }\n #endif\n vec2 clippos = pos.xy - clpos; //pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n if(clipw>20000. && cliph>20000.)\n  cliped = vec2(0.5,0.5);\n else {\n  //转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n  cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n }\n\n}";ps="/*\n texture和fillrect使用的。\n*/\n#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE \nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n if(cliped.x<0.) discard;\n if(cliped.x>1.) discard;\n if(cliped.y<0.) discard;\n if(cliped.y>1.) discard;\n \n#ifdef FILLTEXTURE \n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n gl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n gl_FragColor =   blur();\n gl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n mat4 alphaMat =colorMat;\n\n alphaMat[0][3] *= gl_FragColor.a;\n alphaMat[1][3] *= gl_FragColor.a;\n alphaMat[2][3] *= gl_FragColor.a;\n\n gl_FragColor = gl_FragColor * alphaMat;\n gl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n const float c_IterationTime = 10.0;\n float floatIterationTotalTime = c_IterationTime * c_IterationTime;\n vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n vec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n vec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n float maxNum = u_blurInfo1.x * u_blurInfo1.y;\n vec2 vec2Off = vec2(0.0,0.0);\n float floatOff = c_IterationTime/2.0;\n for(float i = 0.0;i<=c_IterationTime; ++i){\n  for(float j = 0.0;j<=c_IterationTime; ++j){\n   vec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n   vec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n  }\n }\n gl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n gl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}";Shader.preCompile2D(0,0x01,vs,ps,null);vs="attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n uniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n \n#ifdef WORLDMAT\n vec4 pos=mmat*vec4(position.xy,0.,1.);\n gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif \n float clipw = length(clipMatDir.xy);\n float cliph = length(clipMatDir.zw);\n vec2 clippos = position.xy - clipMatPos.xy; //pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n if(clipw>20000. && cliph>20000.)\n  cliped = vec2(0.5,0.5);\n else {\n  //clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n  cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n }\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}";ps="precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n //vec4 a=vec4(color.r, color.g, color.b, 1);\n //a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n gl_FragColor.rgb*=color.a;\n if(cliped.x<0.) discard;\n if(cliped.x>1.) discard;\n if(cliped.y<0.) discard;\n if(cliped.y>1.) discard;\n}";Shader.preCompile2D(0,0x04,vs,ps,null);vs="attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}";ps="precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n vec4 t_color = texture2D(texture, v_texcoord);\n gl_FragColor = t_color.rgba * v_color;\n gl_FragColor *= alpha;\n}";Shader.preCompile2D(0,0x200,vs,ps,null);}
return Shader2D;})()
var DrawPolyCmd=(function(){function DrawPolyCmd(){}
__class(DrawPolyCmd,'laya.display.cmd.DrawPolyCmd');var __proto=DrawPolyCmd.prototype;__proto.recover=function(){this.points=null;this.fillColor=null;this.lineColor=null;Pool.recover("DrawPolyCmd",this);}
__proto.run=function(context,gx,gy){context._drawPoly(this.x+gx,this.y+gy,this.points,this.fillColor,this.lineColor,this.lineWidth,this.isConvexPolygon,this.vid);}
__getset(0,__proto,'cmdID',function(){return"DrawPoly";});DrawPolyCmd.create=function(x,y,points,fillColor,lineColor,lineWidth,isConvexPolygon,vid){var cmd=Pool.getItemByClass("DrawPolyCmd",DrawPolyCmd);cmd.x=x;cmd.y=y;cmd.points=points;cmd.fillColor=fillColor;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;cmd.isConvexPolygon=isConvexPolygon;cmd.vid=vid;return cmd;}
DrawPolyCmd.ID="DrawPoly";return DrawPolyCmd;})()
var TTFLoader=(function(){function TTFLoader(){this.fontName=null;this.complete=null;this.err=null;this._fontTxt=null;this._url=null;this._div=null;this._txtWidth=NaN;this._http=null;}
__class(TTFLoader,'laya.net.TTFLoader');var __proto=TTFLoader.prototype;__proto.load=function(fontPath){this._url=fontPath;var tArr=fontPath.split(".ttf")[0].split("/");this.fontName=tArr[tArr.length-1];if(Render.isConchApp){this._loadConch();}else
if(Browser.window.FontFace){this._loadWithFontFace()}else{this._loadWithCSS();}}
__proto._loadConch=function(){this._http=new HttpRequest();this._http.on("error",this,this._onErr);this._http.on("complete",this,this._onHttpLoaded);this._http.send(this._url,null,"get","arraybuffer");}
__proto._onHttpLoaded=function(data){Browser.window["conchTextCanvas"].setFontFaceFromBuffer(this.fontName,data);this._clearHttp();this._complete();}
__proto._clearHttp=function(){if(this._http){this._http.off("error",this,this._onErr);this._http.off("complete",this,this._onHttpLoaded);this._http=null;}}
__proto._onErr=function(){this._clearHttp();if(this.err){this.err.runWith("fail:"+this._url);this.err=null;}}
__proto._complete=function(){Laya.systemTimer.clear(this,this._complete);Laya.systemTimer.clear(this,this._checkComplete);if(this._div&&this._div.parentNode){this._div.parentNode.removeChild(this._div);this._div=null;}
if(this.complete){this.complete.runWith(this);this.complete=null;}}
__proto._checkComplete=function(){if(RunDriver.measureText("LayaTTFFont",this._fontTxt).width!=this._txtWidth){this._complete();}}
__proto._loadWithFontFace=function(){var fontFace=new Browser.window.FontFace(this.fontName,"url('"+this._url+"')");Browser.window.document.fonts.add(fontFace);var self=this;fontFace.loaded.then((function(){self._complete()}));fontFace.load();}
__proto._createDiv=function(){this._div=Browser.createElement("div");this._div.innerHTML="laya";var _style=this._div.style;_style.fontFamily=this.fontName;_style.position="absolute";_style.left="-100px";_style.top="-100px";Browser.document.body.appendChild(this._div);}
__proto._loadWithCSS=function(){var _$this=this;var fontStyle=Browser.createElement("style");fontStyle.type="text/css";Browser.document.body.appendChild(fontStyle);fontStyle.textContent="@font-face { font-family:'"+this.fontName+"'; src:url('"+this._url+"');}";this._fontTxt="40px "+this.fontName;this._txtWidth=RunDriver.measureText("LayaTTFFont",this._fontTxt).width;var self=this;fontStyle.onload=function(){Laya.systemTimer.once(10000,self,_$this._complete);};Laya.systemTimer.loop(20,this,this._checkComplete);this._createDiv();}
TTFLoader._testString="LayaTTFFont";return TTFLoader;})()
var SubmitKey=(function(){function SubmitKey(){this.blendShader=0;this.submitType=0;this.other=0;this.clear();}
__class(SubmitKey,'laya.webgl.submit.SubmitKey');var __proto=SubmitKey.prototype;__proto.clear=function(){this.submitType=-1;this.blendShader=this.other=0;}
__proto.copyFrom=function(src){this.other=src.other;this.blendShader=src.blendShader;this.submitType=src.submitType;}
__proto.copyFrom2=function(src,submitType,other){this.other=other;this.submitType=submitType;}
__proto.equal3_2=function(next,submitType,other){return this.submitType===submitType&&this.other===other&&this.blendShader===next.blendShader;}
__proto.equal4_2=function(next,submitType,other){return this.submitType===submitType&&this.other===other&&this.blendShader===next.blendShader;}
__proto.equal_3=function(next){return this.submitType===next.submitType&&this.blendShader===next.blendShader;}
__proto.equal=function(next){return this.other===next.other&&this.submitType===next.submitType&&this.blendShader===next.blendShader;}
return SubmitKey;})()
var DrawCanvasCmd=(function(){function DrawCanvasCmd(){this._graphicsCmdEncoder=null;this._index=0;this._paramData=null;this.texture=null;this.x=NaN;this.y=NaN;this.width=NaN;this.height=NaN;}
__class(DrawCanvasCmd,'laya.display.cmd.DrawCanvasCmd');var __proto=DrawCanvasCmd.prototype;__proto.recover=function(){this._graphicsCmdEncoder=null;Pool.recover("DrawCanvasCmd",this);}
__getset(0,__proto,'cmdID',function(){return"DrawCanvasCmd";});DrawCanvasCmd.create=function(texture,x,y,width,height){return null;}
DrawCanvasCmd.ID="DrawCanvasCmd";DrawCanvasCmd._DRAW_IMAGE_CMD_ENCODER_=null;DrawCanvasCmd._PARAM_TEXTURE_POS_=2;DrawCanvasCmd._PARAM_VB_POS_=5;return DrawCanvasCmd;})()
var Pool=(function(){function Pool(){}
__class(Pool,'laya.utils.Pool');Pool.getPoolBySign=function(sign){return Pool._poolDic[sign]||(Pool._poolDic[sign]=[]);}
Pool.clearBySign=function(sign){if(Pool._poolDic[sign])Pool._poolDic[sign].length=0;}
Pool.recover=function(sign,item){if(item["__InPool"])return;item["__InPool"]=true;Pool.getPoolBySign(sign).push(item);}
Pool.recoverByClass=function(instance){if(instance){var className=instance["__className"]||instance.constructor._$gid;if(className)Pool.recover(className,instance);}}
Pool._getClassSign=function(cla){var className=cla["__className"]||cla["_$gid"];if(!className){cla["_$gid"]=className=Utils.getGID()+"";}
return className;}
Pool.createByClass=function(cls){return Pool.getItemByClass(Pool._getClassSign(cls),cls);}
Pool.getItemByClass=function(sign,cls){if(!Pool._poolDic[sign])return new cls();var pool=Pool.getPoolBySign(sign);if(pool.length){var rst=pool.pop();rst["__InPool"]=false;}else{rst=new cls();}
return rst;}
Pool.getItemByCreateFun=function(sign,createFun,caller){var pool=Pool.getPoolBySign(sign);var rst=pool.length?pool.pop():createFun.call(caller);rst["__InPool"]=false;return rst;}
Pool.getItem=function(sign){var pool=Pool.getPoolBySign(sign);var rst=pool.length?pool.pop():null;if(rst){rst["__InPool"]=false;}
return rst;}
Pool.POOLSIGN="__InPool";Pool._poolDic={};return Pool;})()
var InlcudeFile=(function(){function InlcudeFile(txt){this.script=null;this.codes={};this.funs={};this.curUseID=-1;this.funnames="";this.script=txt;var begin=0,ofs=0,end=0;while(true){begin=txt.indexOf("#begin",begin);if(begin<0)break;end=begin+5;while(true){end=txt.indexOf("#end",end);if(end<0)break;if(txt.charAt(end+4)==='i')
end+=5;else break;}
if(end<0){throw"add include err,no #end:"+txt;}
ofs=txt.indexOf('\n',begin);var words=ShaderCompile.splitToWords(txt.substr(begin,ofs-begin),null);if(words[1]=='code'){this.codes[words[2]]=txt.substr(ofs+1,end-ofs-1);}else if(words[1]=='function'){ofs=txt.indexOf("function",begin);ofs+="function".length;this.funs[words[3]]=txt.substr(ofs+1,end-ofs-1);this.funnames+=words[3]+";";}
begin=end+1;}}
__class(InlcudeFile,'laya.webgl.utils.InlcudeFile');var __proto=InlcudeFile.prototype;__proto.getWith=function(name){var r=name?this.codes[name]:this.script;if(!r){throw"get with error:"+name;}
return r;}
__proto.getFunsScript=function(funsdef){var r="";for(var i in this.funs){if(funsdef.indexOf(i+";")>=0){r+=this.funs[i];}}
return r;}
return InlcudeFile;})()
var SpriteConst=(function(){function SpriteConst(){}
__class(SpriteConst,'laya.display.SpriteConst');SpriteConst.ALPHA=0x01;SpriteConst.TRANSFORM=0x02;SpriteConst.BLEND=0x04;SpriteConst.CANVAS=0x08;SpriteConst.FILTERS=0x10;SpriteConst.MASK=0x20;SpriteConst.CLIP=0x40;SpriteConst.STYLE=0x80;SpriteConst.TEXTURE=0x100;SpriteConst.GRAPHICS=0x200;SpriteConst.LAYAGL3D=0x400;SpriteConst.CUSTOM=0x800;SpriteConst.ONECHILD=0x1000;SpriteConst.CHILDS=0x2000;SpriteConst.REPAINT_NONE=0;SpriteConst.REPAINT_NODE=0x01;SpriteConst.REPAINT_CACHE=0x02;SpriteConst.REPAINT_ALL=0x03;return SpriteConst;})()
var Buffer=(function(){function Buffer(){this._glBuffer=null;this._buffer=null;this._bufferType=0;this._bufferUsage=0;this._byteLength=0;this._glBuffer=LayaGL.instance.createBuffer()}
__class(Buffer,'laya.webgl.utils.Buffer');var __proto=Buffer.prototype;__proto._bindForVAO=function(){}
__proto.bind=function(){return false;}
__proto.destroy=function(){if(this._glBuffer){LayaGL.instance.deleteBuffer(this._glBuffer);this._glBuffer=null;}}
__getset(0,__proto,'bufferUsage',function(){return this._bufferUsage;});Buffer._bindedVertexBuffer=null;Buffer._bindedIndexBuffer=null;return Buffer;})()
var DrawTextureCmd=(function(){function DrawTextureCmd(){this.colorFlt=null;}
__class(DrawTextureCmd,'laya.display.cmd.DrawTextureCmd');var __proto=DrawTextureCmd.prototype;__proto.recover=function(){this.texture._removeReference();this.texture=null;this.matrix=null;Pool.recover("DrawTextureCmd",this);}
__proto.run=function(context,gx,gy){context.drawTextureWithTransform(this.texture,this.x,this.y,this.width,this.height,this.matrix,gx,gy,this.alpha,this.blendMode,this.colorFlt);}
__getset(0,__proto,'cmdID',function(){return"DrawTexture";});DrawTextureCmd.create=function(texture,x,y,width,height,matrix,alpha,color,blendMode){var cmd=Pool.getItemByClass("DrawTextureCmd",DrawTextureCmd);cmd.texture=texture;texture._addReference();cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;cmd.matrix=matrix;cmd.alpha=alpha;cmd.color=color;cmd.blendMode=blendMode;if(color){cmd.colorFlt=new ColorFilter();cmd.colorFlt.setColor(color);}
return cmd;}
DrawTextureCmd.ID="DrawTexture";return DrawTextureCmd;})()
var Value2D=(function(){function Value2D(mainID,subID){this.size=[0,0];this.alpha=1.0;this.ALPHA=1.0;this.subID=0;this.ref=1;this._cacheID=0;this.clipMatDir=[99999999,0,0,99999999];this.clipMatPos=[0,0];this.clipOff=[0,0];this.defines=new ShaderDefines2D();this.mainID=mainID;this.subID=subID;this.textureHost=null;this.texture=null;this.color=null;this.colorAdd=null;this.u_mmat2=null;this._cacheID=mainID|subID;this._inClassCache=Value2D._cache[this._cacheID];if(mainID>0&&!this._inClassCache){this._inClassCache=Value2D._cache[this._cacheID]=[];this._inClassCache._length=0;}
this.clear();}
__class(Value2D,'laya.webgl.shader.d2.value.Value2D');var __proto=Value2D.prototype;__proto.setValue=function(value){}
__proto._ShaderWithCompile=function(){var ret=Shader.withCompile2D(0,this.mainID,this.defines.toNameDic(),this.mainID|this.defines._value,Shader2X.create,this._attribLocation);return ret;}
__proto.upload=function(){var renderstate2d=RenderState2D;RenderState2D.worldMatrix4===RenderState2D.TEMPMAT4_ARRAY||this.defines.addInt(0x80);this.mmat=renderstate2d.worldMatrix4;if(RenderState2D.matWVP){this.defines.addInt(0x800);this.u_MvpMatrix=RenderState2D.matWVP.elements;};var sd=Shader.sharders[this.mainID|this.defines._value]||this._ShaderWithCompile();if(sd._shaderValueWidth!==renderstate2d.width||sd._shaderValueHeight!==renderstate2d.height){this.size[0]=renderstate2d.width;this.size[1]=renderstate2d.height;sd._shaderValueWidth=renderstate2d.width;sd._shaderValueHeight=renderstate2d.height;sd.upload(this,null);}else{sd.upload(this,sd._params2dQuick2||sd._make2dQuick2());}}
__proto.setFilters=function(value){this.filters=value;if(!value)
return;var n=value.length,f;for(var i=0;i<n;i++){f=value[i];if(f){this.defines.add(f.type);f.action.setValue(this);}}}
__proto.clear=function(){this.defines._value=this.subID+(WebGL.shaderHighPrecision?0x400:0);this.clipOff[0]=0;}
__proto.release=function(){if((--this.ref)<1){this._inClassCache&&(this._inClassCache[this._inClassCache._length++]=this);this.clear();this.filters=null;this.ref=1;this.clipOff[0]=0;}}
Value2D._initone=function(type,classT){Value2D._typeClass[type]=classT;Value2D._cache[type]=[];Value2D._cache[type]._length=0;}
Value2D.__init__=function(){Value2D._initone(0x04,PrimitiveSV);Value2D._initone(0x200,SkinSV);Value2D._initone(0x01,TextureSV);Value2D._initone(0x01|0x08,TextureSV);}
Value2D.create=function(mainType,subType){var types=Value2D._cache[mainType|subType];if(types._length)
return types[--types._length];else
return new Value2D._typeClass[mainType|subType](subType);}
Value2D._cache=[];Value2D._typeClass=[];Value2D.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];return Value2D;})()
var GrahamScan=(function(){function GrahamScan(){}
__class(GrahamScan,'laya.maths.GrahamScan');GrahamScan.multiply=function(p1,p2,p0){return((p1.x-p0.x)*(p2.y-p0.y)-(p2.x-p0.x)*(p1.y-p0.y));}
GrahamScan.dis=function(p1,p2){return(p1.x-p2.x)*(p1.x-p2.x)+(p1.y-p2.y)*(p1.y-p2.y);}
GrahamScan._getPoints=function(count,tempUse,rst){(tempUse===void 0)&&(tempUse=false);if(!GrahamScan._mPointList)GrahamScan._mPointList=[];while(GrahamScan._mPointList.length<count)GrahamScan._mPointList.push(new Point());if(!rst)rst=[];rst.length=0;if(tempUse){GrahamScan.getFrom(rst,GrahamScan._mPointList,count);}else{GrahamScan.getFromR(rst,GrahamScan._mPointList,count);}
return rst;}
GrahamScan.getFrom=function(rst,src,count){var i=0;for(i=0;i<count;i++){rst.push(src[i]);}
return rst;}
GrahamScan.getFromR=function(rst,src,count){var i=0;for(i=0;i<count;i++){rst.push(src.pop());}
return rst;}
GrahamScan.pListToPointList=function(pList,tempUse){(tempUse===void 0)&&(tempUse=false);var i=0,len=pList.length/2,rst=GrahamScan._getPoints(len,tempUse,GrahamScan._tempPointList);for(i=0;i<len;i++){rst[i].setTo(pList[i+i],pList[i+i+1]);}
return rst;}
GrahamScan.pointListToPlist=function(pointList){var i=0,len=pointList.length,rst=GrahamScan._temPList,tPoint;rst.length=0;for(i=0;i<len;i++){tPoint=pointList[i];rst.push(tPoint.x,tPoint.y);}
return rst;}
GrahamScan.scanPList=function(pList){return Utils.copyArray(pList,GrahamScan.pointListToPlist(GrahamScan.scan(GrahamScan.pListToPointList(pList,true))));}
GrahamScan.scan=function(PointSet){var i=0,j=0,k=0,top=2,tmp,n=PointSet.length,ch;var _tmpDic={};var key;ch=GrahamScan._temArr;ch.length=0;n=PointSet.length;for(i=n-1;i>=0;i--){tmp=PointSet[i];key=tmp.x+"_"+tmp.y;if(!_tmpDic.hasOwnProperty(key)){_tmpDic[key]=true;ch.push(tmp);}}
n=ch.length;Utils.copyArray(PointSet,ch);for(i=1;i<n;i++)
if((PointSet[i].y<PointSet[k].y)||((PointSet[i].y==PointSet[k].y)&&(PointSet[i].x<PointSet[k].x)))
k=i;tmp=PointSet[0];PointSet[0]=PointSet[k];PointSet[k]=tmp;for(i=1;i<n-1;i++){k=i;for(j=i+1;j<n;j++)
if((GrahamScan.multiply(PointSet[j],PointSet[k],PointSet[0])>0)||((GrahamScan.multiply(PointSet[j],PointSet[k],PointSet[0])==0)&&(GrahamScan.dis(PointSet[0],PointSet[j])<GrahamScan.dis(PointSet[0],PointSet[k]))))
k=j;tmp=PointSet[i];PointSet[i]=PointSet[k];PointSet[k]=tmp;}
ch=GrahamScan._temArr;ch.length=0;if(PointSet.length<3){return Utils.copyArray(ch,PointSet);}
ch.push(PointSet[0],PointSet[1],PointSet[2]);for(i=3;i<n;i++){while(ch.length>=2&&GrahamScan.multiply(PointSet[i],ch[ch.length-1],ch[ch.length-2])>=0)ch.pop();PointSet[i]&&ch.push(PointSet[i]);}
return ch;}
GrahamScan._mPointList=null;GrahamScan._tempPointList=[];GrahamScan._temPList=[];GrahamScan._temArr=[];return GrahamScan;})()
var SaveMark=(function(){function SaveMark(){this._saveuse=0;}
__class(SaveMark,'laya.webgl.canvas.save.SaveMark');var __proto=SaveMark.prototype;Laya.imps(__proto,{"laya.webgl.canvas.save.ISaveData":true})
__proto.isSaveMark=function(){return true;}
__proto.restore=function(context){context._saveMark=this._preSaveMark;SaveMark.POOL[SaveMark.POOL._length++]=this;}
SaveMark.Create=function(context){var no=SaveMark.POOL;var o=no._length>0?no[--no._length]:(new SaveMark());o._saveuse=0;o._preSaveMark=context._saveMark;context._saveMark=o;return o;}
SaveMark.POOL=SaveBase._createArray();return SaveMark;})()
var Tween=(function(){function Tween(){this.gid=0;this.repeat=1;this._count=0;}
__class(Tween,'laya.utils.Tween');var __proto=Tween.prototype;__proto.to=function(target,props,duration,ease,complete,delay,coverBefore){(delay===void 0)&&(delay=0);(coverBefore===void 0)&&(coverBefore=false);return this._create(target,props,duration,ease,complete,delay,coverBefore,true,false,true);}
__proto.from=function(target,props,duration,ease,complete,delay,coverBefore){(delay===void 0)&&(delay=0);(coverBefore===void 0)&&(coverBefore=false);return this._create(target,props,duration,ease,complete,delay,coverBefore,false,false,true);}
__proto._create=function(target,props,duration,ease,complete,delay,coverBefore,isTo,usePool,runNow){if(!target)throw new Error("Tween:target is null");this._target=target;this._duration=duration;this._ease=ease||props.ease||Tween.easeNone;this._complete=complete||props.complete;this._delay=delay;this._props=[];this._usedTimer=0;this._startTimer=Browser.now();this._usedPool=usePool;this._delayParam=null;this.update=props.update;var gid=(target.$_GID||(target.$_GID=Utils.getGID()));if(!Tween.tweenMap[gid]){Tween.tweenMap[gid]=[this];}else{if(coverBefore)Tween.clearTween(target);Tween.tweenMap[gid].push(this);}
if(runNow){if(delay<=0)this.firstStart(target,props,isTo);else{this._delayParam=[target,props,isTo];Laya.timer.once(delay,this,this.firstStart,this._delayParam);}}else{this._initProps(target,props,isTo);}
return this;}
__proto.firstStart=function(target,props,isTo){this._delayParam=null;if(target.destroyed){this.clear();return;}
this._initProps(target,props,isTo);this._beginLoop();}
__proto._initProps=function(target,props,isTo){for(var p in props){if((typeof(target[p])=='number')){var start=isTo?target[p]:props[p];var end=isTo?props[p]:target[p];this._props.push([p,start,end-start]);if(!isTo)target[p]=start;}}}
__proto._beginLoop=function(){Laya.timer.frameLoop(1,this,this._doEase);}
__proto._doEase=function(){this._updateEase(Browser.now());}
__proto._updateEase=function(time){var target=this._target;if(!target)return;if(target.destroyed)return Tween.clearTween(target);var usedTimer=this._usedTimer=time-this._startTimer-this._delay;if(usedTimer<0)return;if(usedTimer>=this._duration)return this.complete();var ratio=usedTimer>0?this._ease(usedTimer,0,1,this._duration):0;var props=this._props;for(var i=0,n=props.length;i<n;i++){var prop=props[i];target[prop[0]]=prop[1]+(ratio*prop[2]);}
if(this.update)this.update.run();}
__proto.complete=function(){if(!this._target)return;Laya.timer.runTimer(this,this.firstStart);var target=this._target;var props=this._props;var handler=this._complete;for(var i=0,n=props.length;i<n;i++){var prop=props[i];target[prop[0]]=prop[1]+prop[2];}
if(this.update)this.update.run();this._count++;if(this.repeat!=0&&this._count>=this.repeat){this.clear();handler&&handler.run();}else{this.restart();}}
__proto.pause=function(){Laya.timer.clear(this,this._beginLoop);Laya.timer.clear(this,this._doEase);Laya.timer.clear(this,this.firstStart);var time=Browser.now();var dTime=NaN;dTime=time-this._startTimer-this._delay;if(dTime<0){this._usedTimer=dTime;}}
__proto.setStartTime=function(startTime){this._startTimer=startTime;}
__proto.clear=function(){if(this._target){this._remove();this._clear();}}
__proto._clear=function(){this.pause();Laya.timer.clear(this,this.firstStart);this._complete=null;this._target=null;this._ease=null;this._props=null;this._delayParam=null;if(this._usedPool){this.update=null;Pool.recover("tween",this);}}
__proto.recover=function(){this._usedPool=true;this._clear();}
__proto._remove=function(){var tweens=Tween.tweenMap[this._target.$_GID];if(tweens){for(var i=0,n=tweens.length;i<n;i++){if(tweens[i]===this){tweens.splice(i,1);break;}}}}
__proto.restart=function(){this.pause();this._usedTimer=0;this._startTimer=Browser.now();if(this._delayParam){Laya.timer.once(this._delay,this,this.firstStart,this._delayParam);return;};var props=this._props;for(var i=0,n=props.length;i<n;i++){var prop=props[i];this._target[prop[0]]=prop[1];}
Laya.timer.once(this._delay,this,this._beginLoop);}
__proto.resume=function(){if(this._usedTimer>=this._duration)return;this._startTimer=Browser.now()-this._usedTimer-this._delay;if(this._delayParam){if(this._usedTimer<0){Laya.timer.once(-this._usedTimer,this,this.firstStart,this._delayParam);}else{this.firstStart.apply(this,this._delayParam);}}else{this._beginLoop();}}
__getset(0,__proto,'progress',null,function(v){var uTime=v*this._duration;this._startTimer=Browser.now()-this._delay-uTime;});Tween.to=function(target,props,duration,ease,complete,delay,coverBefore,autoRecover){(delay===void 0)&&(delay=0);(coverBefore===void 0)&&(coverBefore=false);(autoRecover===void 0)&&(autoRecover=true);return Pool.getItemByClass("tween",Tween)._create(target,props,duration,ease,complete,delay,coverBefore,true,autoRecover,true);}
Tween.from=function(target,props,duration,ease,complete,delay,coverBefore,autoRecover){(delay===void 0)&&(delay=0);(coverBefore===void 0)&&(coverBefore=false);(autoRecover===void 0)&&(autoRecover=true);return Pool.getItemByClass("tween",Tween)._create(target,props,duration,ease,complete,delay,coverBefore,false,autoRecover,true);}
Tween.clearAll=function(target){if(!target||!target.$_GID)return;var tweens=Tween.tweenMap[target.$_GID];if(tweens){for(var i=0,n=tweens.length;i<n;i++){tweens[i]._clear();}
tweens.length=0;}}
Tween.clear=function(tween){tween.clear();}
Tween.clearTween=function(target){Tween.clearAll(target);}
Tween.easeNone=function(t,b,c,d){return c*t/d+b;}
Tween.tweenMap=[];return Tween;})()
var DrawRectCmd=(function(){function DrawRectCmd(){}
__class(DrawRectCmd,'laya.display.cmd.DrawRectCmd');var __proto=DrawRectCmd.prototype;__proto.recover=function(){this.fillColor=null;this.lineColor=null;Pool.recover("DrawRectCmd",this);}
__proto.run=function(context,gx,gy){context.drawRect(this.x+gx,this.y+gy,this.width,this.height,this.fillColor,this.lineColor,this.lineWidth);}
__getset(0,__proto,'cmdID',function(){return"DrawRect";});DrawRectCmd.create=function(x,y,width,height,fillColor,lineColor,lineWidth){var cmd=Pool.getItemByClass("DrawRectCmd",DrawRectCmd);cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;cmd.fillColor=fillColor;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;return cmd;}
DrawRectCmd.ID="DrawRect";return DrawRectCmd;})()
var EarcutNode=(function(){function EarcutNode(i,x,y){this.i=null;this.x=null;this.y=null;this.prev=null;this.next=null;this.z=null;this.prevZ=null;this.nextZ=null;this.steiner=null;this.i=i;this.x=x;this.y=y;this.prev=null;this.next=null;this.z=null;this.prevZ=null;this.nextZ=null;this.steiner=false;}
__class(EarcutNode,'laya.webgl.shapes.EarcutNode');return EarcutNode;})()
var SubmitCMD=(function(){function SubmitCMD(){this.fun=null;this._this=null;this.args=null;this._ref=1;this._key=new SubmitKey();}
__class(SubmitCMD,'laya.webgl.submit.SubmitCMD');var __proto=SubmitCMD.prototype;Laya.imps(__proto,{"laya.webgl.submit.ISubmit":true})
__proto.renderSubmit=function(){this.fun.apply(this._this,this.args);return 1;}
__proto.getRenderType=function(){return 0;}
__proto.reUse=function(context,pos){this._ref++;return pos;}
__proto.releaseRender=function(){if((--this._ref)<1){var pool=SubmitCMD.POOL;pool[pool._length++]=this;}}
__proto.clone=function(context,mesh,pos){return null;}
SubmitCMD.create=function(args,fun,thisobj){var o=SubmitCMD.POOL._length?SubmitCMD.POOL[--SubmitCMD.POOL._length]:new SubmitCMD();o.fun=fun;o.args=args;o._this=thisobj;o._ref=1;o._key.clear();return o;}
SubmitCMD.POOL=[];SubmitCMD.__init$=function(){{SubmitCMD.POOL._length=0};}
return SubmitCMD;})()
var URL=(function(){function URL(url){this._url=null;this._path=null;this._url=URL.formatURL(url);this._path=URL.getPath(url);}
__class(URL,'laya.net.URL');var __proto=URL.prototype;__getset(0,__proto,'path',function(){return this._path;});__getset(0,__proto,'url',function(){return this._url;});__getset(1,URL,'basePath',function(){return URL._basePath;},function(value){URL._basePath=Laya._getUrlPath();URL._basePath=URL.formatURL(value);});URL.formatURL=function(url){if(!url)return"null path";if(url.indexOf(":")>0)return url;if(URL.customFormat!=null)url=URL.customFormat(url);if(url.indexOf(":")>0)return url;var char1=url.charAt(0);if(char1==="."){return URL._formatRelativePath(URL._basePath+url);}else if(char1==='~'){return URL.rootPath+url.substring(1);}else if(char1==="d"){if(url.indexOf("data:image")===0)return url;}else if(char1==="/"){return url;}
return URL._basePath+url;}
URL._formatRelativePath=function(value){var parts=value.split("/");for(var i=0,len=parts.length;i<len;i++){if(parts[i]=='..'){parts.splice(i-1,2);i-=2;}}
return parts.join('/');}
URL.getPath=function(url){var ofs=url.lastIndexOf('/');return ofs>0?url.substr(0,ofs+1):"";}
URL.getFileName=function(url){var ofs=url.lastIndexOf('/');return ofs>0?url.substr(ofs+1):url;}
URL.getAdptedFilePath=function(url){if(!URL.exportSceneToJson||!url)return url;var i=0,len=0;len=URL._adpteTypeList.length;var tArr;for(i=0;i<len;i++){tArr=URL._adpteTypeList[i];url=url.replace(tArr[0],tArr[1]);}
return url;}
URL.version={};URL.exportSceneToJson=false;URL._basePath="";URL.rootPath="";URL.customFormat=function(url){var newUrl=URL.version[url];if(!Render.isConchApp&&newUrl)url+="?v="+newUrl;return url;}
__static(URL,['_adpteTypeList',function(){return this._adpteTypeList=[[".scene3d",".json"],[".scene",".json"],[".taa",".json"],[".prefab",".json"]];}]);return URL;})()
var CacheManger=(function(){function CacheManger(){}
__class(CacheManger,'laya.utils.CacheManger');CacheManger.regCacheByFunction=function(disposeFunction,getCacheListFunction){CacheManger.unRegCacheByFunction(disposeFunction,getCacheListFunction);var cache;cache={tryDispose:disposeFunction,getCacheList:getCacheListFunction};CacheManger._cacheList.push(cache);}
CacheManger.unRegCacheByFunction=function(disposeFunction,getCacheListFunction){var i=0,len=0;len=CacheManger._cacheList.length;for(i=0;i<len;i++){if(CacheManger._cacheList[i].tryDispose==disposeFunction&&CacheManger._cacheList[i].getCacheList==getCacheListFunction){CacheManger._cacheList.splice(i,1);return;}}}
CacheManger.forceDispose=function(){var i=0,len=CacheManger._cacheList.length;for(i=0;i<len;i++){CacheManger._cacheList[i].tryDispose(true);}}
CacheManger.beginCheck=function(waitTime){(waitTime===void 0)&&(waitTime=15000);Laya.systemTimer.loop(waitTime,null,CacheManger._checkLoop);}
CacheManger.stopCheck=function(){Laya.systemTimer.clear(null,CacheManger._checkLoop);}
CacheManger._checkLoop=function(){var cacheList=CacheManger._cacheList;if(cacheList.length<1)return;var tTime=Browser.now();var count=0;var len=0;len=count=cacheList.length;while(count>0){CacheManger._index++;CacheManger._index=CacheManger._index%len;cacheList[CacheManger._index].tryDispose(false);if(Browser.now()-tTime>CacheManger.loopTimeLimit)break;count--;}}
CacheManger.loopTimeLimit=2;CacheManger._cacheList=[];CacheManger._index=0;return CacheManger;})()
var SpriteStyle=(function(){function SpriteStyle(){this.reset();}
__class(SpriteStyle,'laya.display.css.SpriteStyle');var __proto=SpriteStyle.prototype;__proto.reset=function(){this.scaleX=this.scaleY=1;this.skewX=this.skewY=0;this.pivotX=this.pivotY=this.rotation=0;this.alpha=1;if(this.scrollRect)this.scrollRect.recover();this.scrollRect=null;if(this.viewport)this.viewport.recover();this.viewport=null;this.hitArea=null;this.dragging=null;this.blendMode=null;return this}
__proto.recover=function(){if(this===SpriteStyle.EMPTY)return;Pool.recover("SpriteStyle",this.reset());}
SpriteStyle.create=function(){return Pool.getItemByClass("SpriteStyle",SpriteStyle);}
SpriteStyle.EMPTY=new SpriteStyle();return SpriteStyle;})()
var WebGLCacheAsNormalCanvas=(function(){function WebGLCacheAsNormalCanvas(ctx,sp){this.submitStartPos=0;this.submitEndPos=0;this.context=null;this.touches=[];this.submits=[];this.sprite=null;this._mesh=null;this._pathMesh=null;this._triangleMesh=null;this.meshlist=[];this._oldMesh=null;this._oldPathMesh=null;this._oldTriMesh=null;this._oldMeshList=null;this.oldTx=0;this.oldTy=0;this.cachedClipInfo=new Matrix();this.invMat=new Matrix();this.context=ctx;this.sprite=sp;ctx._globalClipMatrix.copyTo(this.cachedClipInfo);}
__class(WebGLCacheAsNormalCanvas,'laya.webgl.canvas.WebGLCacheAsNormalCanvas');var __proto=WebGLCacheAsNormalCanvas.prototype;__proto.startRec=function(){if(this.context._charSubmitCache._enbale){this.context._charSubmitCache.enable(false,this.context);this.context._charSubmitCache.enable(true,this.context);}
this.context._incache=true;this.touches.length=0;(this.context).touches=this.touches;this.context._globalClipMatrix.copyTo(this.cachedClipInfo);this.submits.length=0;this.submitStartPos=this.context._submits._length;for(var i=0,sz=this.meshlist.length;i<sz;i++){var curm=this.meshlist[i];curm.canReuse?(curm.releaseMesh()):(curm.destroy());}
this.meshlist.length=0;this._mesh=MeshQuadTexture.getAMesh(false);this._pathMesh=MeshVG.getAMesh(false);this._triangleMesh=MeshTexture.getAMesh(false);this.meshlist.push(this._mesh);this.meshlist.push(this._pathMesh);this.meshlist.push(this._triangleMesh);this.context._curSubmit=Submit.RENDERBASE;this._oldMesh=this.context._mesh;this._oldPathMesh=this.context._pathMesh;this._oldTriMesh=this.context._triangleMesh;this._oldMeshList=this.context.meshlist;this.context._mesh=this._mesh;this.context._pathMesh=this._pathMesh;this.context._triangleMesh=this._triangleMesh;this.context.meshlist=this.meshlist;this.oldTx=this.context._curMat.tx;this.oldTy=this.context._curMat.ty;this.context._curMat.tx=0;this.context._curMat.ty=0;this.context._curMat.copyTo(this.invMat);this.invMat.invert();}
__proto.endRec=function(){if(this.context._charSubmitCache._enbale){this.context._charSubmitCache.enable(false,this.context);this.context._charSubmitCache.enable(true,this.context);};var parsubmits=this.context._submits;this.submitEndPos=parsubmits._length;var num=this.submitEndPos-this.submitStartPos;for(var i=0;i<num;i++){this.submits.push(parsubmits[this.submitStartPos+i]);}
parsubmits._length-=num;this.context._mesh=this._oldMesh;this.context._pathMesh=this._oldPathMesh;this.context._triangleMesh=this._oldTriMesh;this.context.meshlist=this._oldMeshList;this.context._curSubmit=Submit.RENDERBASE;this.context._curMat.tx=this.oldTx;this.context._curMat.ty=this.oldTy;(this.context).touches=null;this.context._incache=false;}
__proto.isCacheValid=function(){var curclip=this.context._globalClipMatrix;if(curclip.a!=this.cachedClipInfo.a||curclip.b!=this.cachedClipInfo.b||curclip.c!=this.cachedClipInfo.c||curclip.d!=this.cachedClipInfo.d||curclip.tx!=this.cachedClipInfo.tx||curclip.ty!=this.cachedClipInfo.ty)
return false;return true;}
__proto.flushsubmit=function(){var curSubmit=Submit.RENDERBASE;this.submits.forEach(function(subm){if(subm==Submit.RENDERBASE)return;Submit.preRender=curSubmit;curSubmit=subm;subm.renderSubmit();});}
__proto.releaseMem=function(){}
__static(WebGLCacheAsNormalCanvas,['matI',function(){return this.matI=new Matrix();}]);return WebGLCacheAsNormalCanvas;})()
var Timer=(function(){var TimerHandler;function Timer(autoActive){this.scale=1;this.currFrame=0;this._delta=0;this._map=[];this._handlers=[];this._temp=[];this._count=0;this.currTimer=Browser.now();this._lastTimer=Browser.now();(autoActive===void 0)&&(autoActive=true);autoActive&&Laya.systemTimer&&Laya.systemTimer.frameLoop(1,this,this._update);}
__class(Timer,'laya.utils.Timer');var __proto=Timer.prototype;__proto._update=function(){if(this.scale<=0){this._lastTimer=Browser.now();return;};var frame=this.currFrame=this.currFrame+this.scale;var now=Browser.now();this._delta=(now-this._lastTimer)*this.scale;var timer=this.currTimer=this.currTimer+this._delta;this._lastTimer=now;var handlers=this._handlers;this._count=0;for(var i=0,n=handlers.length;i<n;i++){var handler=handlers[i];if(handler.method!==null){var t=handler.userFrame?frame:timer;if(t>=handler.exeTime){if(handler.repeat){if(!handler.jumpFrame){handler.exeTime+=handler.delay;handler.run(false);if(t>handler.exeTime){handler.exeTime+=Math.ceil((t-handler.exeTime)/handler.delay)*handler.delay;}}else{while(t>=handler.exeTime){handler.exeTime+=handler.delay;handler.run(false);}}}else{handler.run(true);}}}else{this._count++;}}
if(this._count>30||frame%200===0)this._clearHandlers();}
__proto._clearHandlers=function(){var handlers=this._handlers;for(var i=0,n=handlers.length;i<n;i++){var handler=handlers[i];if(handler.method!==null)this._temp.push(handler);else this._recoverHandler(handler);}
this._handlers=this._temp;handlers.length=0;this._temp=handlers;}
__proto._recoverHandler=function(handler){if(this._map[handler.key]==handler)this._map[handler.key]=null;handler.clear();Timer._pool.push(handler);}
__proto._create=function(useFrame,repeat,delay,caller,method,args,coverBefore){if(!delay){method.apply(caller,args);return null;}
if(coverBefore){var handler=this._getHandler(caller,method);if(handler){handler.repeat=repeat;handler.userFrame=useFrame;handler.delay=delay;handler.caller=caller;handler.method=method;handler.args=args;handler.exeTime=delay+(useFrame?this.currFrame:this.currTimer+Browser.now()-this._lastTimer);return handler;}}
handler=Timer._pool.length>0?Timer._pool.pop():new TimerHandler();handler.repeat=repeat;handler.userFrame=useFrame;handler.delay=delay;handler.caller=caller;handler.method=method;handler.args=args;handler.exeTime=delay+(useFrame?this.currFrame:this.currTimer+Browser.now()-this._lastTimer);this._indexHandler(handler);this._handlers.push(handler);return handler;}
__proto._indexHandler=function(handler){var caller=handler.caller;var method=handler.method;var cid=caller?caller.$_GID||(caller.$_GID=Utils.getGID()):0;var mid=method.$_TID||(method.$_TID=(Timer._mid++)*100000);handler.key=cid+mid;this._map[handler.key]=handler;}
__proto.once=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);this._create(false,false,delay,caller,method,args,coverBefore);}
__proto.loop=function(delay,caller,method,args,coverBefore,jumpFrame){(coverBefore===void 0)&&(coverBefore=true);(jumpFrame===void 0)&&(jumpFrame=false);var handler=this._create(false,true,delay,caller,method,args,coverBefore);if(handler)handler.jumpFrame=jumpFrame;}
__proto.frameOnce=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);this._create(true,false,delay,caller,method,args,coverBefore);}
__proto.frameLoop=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);this._create(true,true,delay,caller,method,args,coverBefore);}
__proto.toString=function(){return" handlers:"+this._handlers.length+" pool:"+Timer._pool.length;}
__proto.clear=function(caller,method){var handler=this._getHandler(caller,method);if(handler){this._map[handler.key]=null;handler.key=0;handler.clear();}}
__proto.clearAll=function(caller){if(!caller)return;for(var i=0,n=this._handlers.length;i<n;i++){var handler=this._handlers[i];if(handler.caller===caller){this._map[handler.key]=null;handler.key=0;handler.clear();}}}
__proto._getHandler=function(caller,method){var cid=caller?caller.$_GID||(caller.$_GID=Utils.getGID()):0;var mid=method.$_TID||(method.$_TID=(Timer._mid++)*100000);return this._map[cid+mid];}
__proto.callLater=function(caller,method,args){CallLater.I.callLater(caller,method,args);}
__proto.runCallLater=function(caller,method){CallLater.I.runCallLater(caller,method);}
__proto.runTimer=function(caller,method){var handler=this._getHandler(caller,method);if(handler&&handler.method!=null){this._map[handler.key]=null;handler.run(true);}}
__proto.pause=function(){this.scale=0;}
__proto.resume=function(){this.scale=1;}
__getset(0,__proto,'delta',function(){return this._delta;});Timer._pool=[];Timer._mid=1;Timer.__init$=function(){TimerHandler=(function(){function TimerHandler(){this.key=0;this.repeat=false;this.delay=0;this.userFrame=false;this.exeTime=0;this.caller=null;this.method=null;this.args=null;this.jumpFrame=false;}
__class(TimerHandler,'');var __proto=TimerHandler.prototype;__proto.clear=function(){this.caller=null;this.method=null;this.args=null;}
__proto.run=function(withClear){var caller=this.caller;if(caller&&caller.destroyed)return this.clear();var method=this.method;var args=this.args;withClear&&this.clear();if(method==null)return;args?method.apply(caller,args):method.call(caller);}
return TimerHandler;})()}
return Timer;})()
var CacheStyle=(function(){function CacheStyle(){this.reset();}
__class(CacheStyle,'laya.display.css.CacheStyle');var __proto=CacheStyle.prototype;__proto.needBitmapCache=function(){return this.cacheForFilters||!!this.mask;}
__proto.needEnableCanvasRender=function(){return this.userSetCache!="none"||this.cacheForFilters||!!this.mask;}
__proto.releaseContext=function(){if(this.canvas&&(this.canvas).size){Pool.recover("CacheCanvas",this.canvas);this.canvas.size(0,0);(this.canvas).width=0;(this.canvas).height=0;}
this.canvas=null;}
__proto.createContext=function(){if(!this.canvas){this.canvas=Pool.getItem("CacheCanvas")||new HTMLCanvas(false);var tx=this.canvas.context;if(!tx){tx=this.canvas.getContext('2d');}}}
__proto.releaseFilterCache=function(){var fc=this.filterCache;if(fc){fc.destroy();fc.recycle();this.filterCache=null;}}
__proto.recover=function(){if(this===CacheStyle.EMPTY)return;Pool.recover("SpriteCache",this.reset());}
__proto.reset=function(){this.releaseContext();this.releaseFilterCache();this.cacheAs="none";this.enableCanvasRender=false;this.userSetCache="none";this.cacheForFilters=false;this.staticCache=false;this.reCache=true;this.mask=null;this.maskParent=null;this.filterCache=null;this.filters=null;this.hasGlowFilter=false;if(this.cacheRect)this.cacheRect.recover();this.cacheRect=null;return this}
__proto._calculateCacheRect=function(sprite,tCacheType,x,y){var _cacheStyle=sprite._cacheStyle;if(!_cacheStyle.cacheRect)
_cacheStyle.cacheRect=Rectangle.create();var tRec;if(tCacheType==="bitmap"){tRec=sprite.getSelfBounds();tRec.width=tRec.width+16*2;tRec.height=tRec.height+16*2;tRec.x=tRec.x-sprite.pivotX;tRec.y=tRec.y-sprite.pivotY;tRec.x=tRec.x-16;tRec.y=tRec.y-16;tRec.x=Math.floor(tRec.x+x)-x;tRec.y=Math.floor(tRec.y+y)-y;tRec.width=Math.floor(tRec.width);tRec.height=Math.floor(tRec.height);_cacheStyle.cacheRect.copyFrom(tRec);}else{_cacheStyle.cacheRect.setTo(-sprite._style.pivotX,-sprite._style.pivotY,1,1);}
tRec=_cacheStyle.cacheRect;if(sprite._style.scrollRect){var scrollRect=sprite._style.scrollRect;tRec.x-=scrollRect.x;tRec.y-=scrollRect.y;}
CacheStyle._scaleInfo.setTo(1,1);return CacheStyle._scaleInfo;}
CacheStyle.create=function(){return Pool.getItemByClass("SpriteCache",CacheStyle);}
CacheStyle.EMPTY=new CacheStyle();CacheStyle.CANVAS_EXTEND_EDGE=16;__static(CacheStyle,['_scaleInfo',function(){return this._scaleInfo=new Point();}]);return CacheStyle;})()
var SaveTranslate=(function(){function SaveTranslate(){this._mat=new Matrix();}
__class(SaveTranslate,'laya.webgl.canvas.save.SaveTranslate');var __proto=SaveTranslate.prototype;Laya.imps(__proto,{"laya.webgl.canvas.save.ISaveData":true})
__proto.isSaveMark=function(){return false;}
__proto.restore=function(context){this._mat.copyTo(context._curMat);SaveTranslate.POOL[SaveTranslate.POOL._length++]=this;}
SaveTranslate.save=function(context){var no=SaveTranslate.POOL;var o=no._length>0?no[--no._length]:(new SaveTranslate());context._curMat.copyTo(o._mat);var _save=context._save;_save[_save._length++]=o;}
SaveTranslate.POOL=SaveBase._createArray();return SaveTranslate;})()
var DrawLineCmd=(function(){function DrawLineCmd(){}
__class(DrawLineCmd,'laya.display.cmd.DrawLineCmd');var __proto=DrawLineCmd.prototype;__proto.recover=function(){Pool.recover("DrawLineCmd",this);}
__proto.run=function(context,gx,gy){context._drawLine(gx,gy,this.fromX,this.fromY,this.toX,this.toY,this.lineColor,this.lineWidth,this.vid);}
__getset(0,__proto,'cmdID',function(){return"DrawLine";});DrawLineCmd.create=function(fromX,fromY,toX,toY,lineColor,lineWidth,vid){var cmd=Pool.getItemByClass("DrawLineCmd",DrawLineCmd);cmd.fromX=fromX;cmd.fromY=fromY;cmd.toX=toX;cmd.toY=toY;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;cmd.vid=vid;return cmd;}
DrawLineCmd.ID="DrawLine";return DrawLineCmd;})()
var WebGLContext=(function(){function WebGLContext(){}
__class(WebGLContext,'laya.webgl.WebGLContext');var __proto=WebGLContext.prototype;__proto.getContextAttributes=function(){return null;}
__proto.isContextLost=function(){}
__proto.getSupportedExtensions=function(){return null;}
__proto.getExtension=function(name){return null;}
__proto.activeTexture=function(texture){}
__proto.attachShader=function(program,shader){}
__proto.bindAttribLocation=function(program,index,name){}
__proto.bindBuffer=function(target,buffer){}
__proto.bindFramebuffer=function(target,framebuffer){}
__proto.bindRenderbuffer=function(target,renderbuffer){}
__proto.bindTexture=function(target,texture){}
__proto.useTexture=function(value){}
__proto.blendColor=function(red,green,blue,alpha){}
__proto.blendEquation=function(mode){}
__proto.blendEquationSeparate=function(modeRGB,modeAlpha){}
__proto.blendFunc=function(sfactor,dfactor){}
__proto.blendFuncSeparate=function(srcRGB,dstRGB,srcAlpha,dstAlpha){}
__proto.bufferData=function(target,size,usage){}
__proto.bufferSubData=function(target,offset,data){}
__proto.checkFramebufferStatus=function(target){return null;}
__proto.clear=function(mask){}
__proto.clearColor=function(red,green,blue,alpha){}
__proto.clearDepth=function(depth){}
__proto.clearStencil=function(s){}
__proto.colorMask=function(red,green,blue,alpha){}
__proto.compileShader=function(shader){}
__proto.copyTexImage2D=function(target,level,internalformat,x,y,width,height,border){}
__proto.copyTexSubImage2D=function(target,level,xoffset,yoffset,x,y,width,height){}
__proto.createBuffer=function(){}
__proto.createFramebuffer=function(){}
__proto.createProgram=function(){}
__proto.createRenderbuffer=function(){}
__proto.createShader=function(type){}
__proto.createTexture=function(){return null}
__proto.cullFace=function(mode){}
__proto.deleteBuffer=function(buffer){}
__proto.deleteFramebuffer=function(framebuffer){}
__proto.deleteProgram=function(program){}
__proto.deleteRenderbuffer=function(renderbuffer){}
__proto.deleteShader=function(shader){}
__proto.deleteTexture=function(texture){}
__proto.depthFunc=function(func){}
__proto.depthMask=function(flag){}
__proto.depthRange=function(zNear,zFar){}
__proto.detachShader=function(program,shader){}
__proto.disable=function(cap){}
__proto.disableVertexAttribArray=function(index){}
__proto.drawArrays=function(mode,first,count){}
__proto.drawElements=function(mode,count,type,offset){}
__proto.enable=function(cap){}
__proto.enableVertexAttribArray=function(index){}
__proto.finish=function(){}
__proto.flush=function(){}
__proto.framebufferRenderbuffer=function(target,attachment,renderbuffertarget,renderbuffer){}
__proto.framebufferTexture2D=function(target,attachment,textarget,texture,level){}
__proto.frontFace=function(mode){return null;}
__proto.generateMipmap=function(target){return null;}
__proto.getActiveAttrib=function(program,index){return null;}
__proto.getActiveUniform=function(program,index){return null;}
__proto.getAttribLocation=function(program,name){return 0;}
__proto.getParameter=function(pname){return null;}
__proto.getBufferParameter=function(target,pname){return null;}
__proto.getError=function(){return null;}
__proto.getFramebufferAttachmentParameter=function(target,attachment,pname){}
__proto.getProgramParameter=function(program,pname){return 0;}
__proto.getProgramInfoLog=function(program){return null;}
__proto.getRenderbufferParameter=function(target,pname){return null;}
__proto.getShaderPrecisionFormat=function(__arg){var arg=arguments;return null;}
__proto.getShaderParameter=function(shader,pname){}
__proto.getShaderInfoLog=function(shader){return null;}
__proto.getShaderSource=function(shader){return null;}
__proto.getTexParameter=function(target,pname){}
__proto.getUniform=function(program,location){}
__proto.getUniformLocation=function(program,name){return null;}
__proto.getVertexAttrib=function(index,pname){return null;}
__proto.getVertexAttribOffset=function(index,pname){return null;}
__proto.hint=function(target,mode){}
__proto.isBuffer=function(buffer){}
__proto.isEnabled=function(cap){}
__proto.isFramebuffer=function(framebuffer){}
__proto.isProgram=function(program){}
__proto.isRenderbuffer=function(renderbuffer){}
__proto.isShader=function(shader){}
__proto.isTexture=function(texture){}
__proto.lineWidth=function(width){}
__proto.linkProgram=function(program){}
__proto.pixelStorei=function(pname,param){}
__proto.polygonOffset=function(factor,units){}
__proto.readPixels=function(x,y,width,height,format,type,pixels){}
__proto.renderbufferStorage=function(target,internalformat,width,height){}
__proto.sampleCoverage=function(value,invert){}
__proto.scissor=function(x,y,width,height){}
__proto.shaderSource=function(shader,source){}
__proto.stencilFunc=function(func,ref,mask){}
__proto.stencilFuncSeparate=function(face,func,ref,mask){}
__proto.stencilMask=function(mask){}
__proto.stencilMaskSeparate=function(face,mask){}
__proto.stencilOp=function(fail,zfail,zpass){}
__proto.stencilOpSeparate=function(face,fail,zfail,zpass){}
__proto.texImage2D=function(__args){}
__proto.texParameterf=function(target,pname,param){}
__proto.texParameteri=function(target,pname,param){}
__proto.texSubImage2D=function(__args){}
__proto.uniform1f=function(location,x){}
__proto.uniform1fv=function(location,v){}
__proto.uniform1i=function(location,x){}
__proto.uniform1iv=function(location,v){}
__proto.uniform2f=function(location,x,y){}
__proto.uniform2fv=function(location,v){}
__proto.uniform2i=function(location,x,y){}
__proto.uniform2iv=function(location,v){}
__proto.uniform3f=function(location,x,y,z){}
__proto.uniform3fv=function(location,v){}
__proto.uniform3i=function(location,x,y,z){}
__proto.uniform3iv=function(location,v){}
__proto.uniform4f=function(location,x,y,z,w){}
__proto.uniform4fv=function(location,v){}
__proto.uniform4i=function(location,x,y,z,w){}
__proto.uniform4iv=function(location,v){}
__proto.uniformMatrix2fv=function(location,transpose,value){}
__proto.uniformMatrix3fv=function(location,transpose,value){}
__proto.uniformMatrix4fv=function(location,transpose,value){}
__proto.useProgram=function(program){}
__proto.validateProgram=function(program){}
__proto.vertexAttrib1f=function(indx,x){}
__proto.vertexAttrib1fv=function(indx,values){}
__proto.vertexAttrib2f=function(indx,x,y){}
__proto.vertexAttrib2fv=function(indx,values){}
__proto.vertexAttrib3f=function(indx,x,y,z){}
__proto.vertexAttrib3fv=function(indx,values){}
__proto.vertexAttrib4f=function(indx,x,y,z,w){}
__proto.vertexAttrib4fv=function(indx,values){}
__proto.vertexAttribPointer=function(indx,size,type,normalized,stride,offset){}
__proto.viewport=function(x,y,width,height){}
__proto.configureBackBuffer=function(width,height,antiAlias,enableDepthAndStencil,wantsBestResolution){(enableDepthAndStencil===void 0)&&(enableDepthAndStencil=true);(wantsBestResolution===void 0)&&(wantsBestResolution=false);}
__proto.compressedTexImage2D=function(__args){}
__proto.createVertexArray=function(){throw"not implemented";}
__proto.bindVertexArray=function(vao){throw"not implemented";}
__proto.deleteVertexArray=function(vao){throw"not implemented";}
__proto.isVertexArray=function(vao){throw"not implemented";}
WebGLContext._forceSupportVAOPlatform=function(){return(Browser.onMiniGame&&Browser.onIOS)||Browser.onBDMiniGame||Browser.onQGMiniGame;}
WebGLContext.__init__=function(gl){laya.webgl.WebGLContext._checkExtensions(gl);if(!WebGL._isWebGL2&&!Render.isConchApp){VertexArrayObject;if(window._setupVertexArrayObject){if(WebGLContext._forceSupportVAOPlatform())
window._forceSetupVertexArrayObject(gl);else
window._setupVertexArrayObject(gl);};var ext=((gl).rawgl||gl).getExtension("OES_vertex_array_object");if(ext){var glContext=gl;glContext.createVertexArray=function(){return ext.createVertexArrayOES();};glContext.bindVertexArray=function(vao){ext.bindVertexArrayOES(vao);};glContext.deleteVertexArray=function(vao){ext.deleteVertexArrayOES(vao);};glContext.isVertexArray=function(vao){ext.isVertexArrayOES(vao);};}}}
WebGLContext._getExtension=function(gl,name){var prefixes=WebGLContext._extentionVendorPrefixes;for(var k in prefixes){var ext=gl.getExtension(prefixes[k]+name);if(ext)
return ext;}
return null;}
WebGLContext._checkExtensions=function(gl){WebGLContext._extTextureFilterAnisotropic=WebGLContext._getExtension(gl,"EXT_texture_filter_anisotropic");WebGLContext._compressedTextureS3tc=WebGLContext._getExtension(gl,"WEBGL_compressed_texture_s3tc");WebGLContext._compressedTexturePvrtc=WebGLContext._getExtension(gl,"WEBGL_compressed_texture_pvrtc");WebGLContext._compressedTextureEtc1=WebGLContext._getExtension(gl,"WEBGL_compressed_texture_etc1");if(!WebGLContext._forceSupportVAOPlatform())
WebGLContext._angleInstancedArrays=WebGLContext._getExtension(gl,"ANGLE_instanced_arrays");}
WebGLContext.__init_native=function(){if(!Render.supportWebGLPlusRendering)return;var webGLContext=WebGLContext;webGLContext.activeTexture=webGLContext.activeTextureForNative;webGLContext.bindTexture=webGLContext.bindTextureForNative;}
WebGLContext.useProgram=function(gl,program){if(WebGLContext._useProgram===program)
return false;gl.useProgram(program);WebGLContext._useProgram=program;return true;}
WebGLContext.setDepthTest=function(gl,value){value!==WebGLContext._depthTest&&(WebGLContext._depthTest=value,value?gl.enable(0x0B71):gl.disable(0x0B71));}
WebGLContext.setDepthMask=function(gl,value){value!==WebGLContext._depthMask&&(WebGLContext._depthMask=value,gl.depthMask(value));}
WebGLContext.setDepthFunc=function(gl,value){value!==WebGLContext._depthFunc&&(WebGLContext._depthFunc=value,gl.depthFunc(value));}
WebGLContext.setBlend=function(gl,value){value!==WebGLContext._blend&&(WebGLContext._blend=value,value?gl.enable(0x0BE2):gl.disable(0x0BE2));}
WebGLContext.setBlendFunc=function(gl,sFactor,dFactor){(sFactor!==WebGLContext._sFactor||dFactor!==WebGLContext._dFactor)&&(WebGLContext._sFactor=WebGLContext._srcAlpha=sFactor,WebGLContext._dFactor=WebGLContext._dstAlpha=dFactor,gl.blendFunc(sFactor,dFactor));}
WebGLContext.setBlendFuncSeperate=function(gl,srcRGB,dstRGB,srcAlpha,dstAlpha){if(srcRGB!==WebGLContext._sFactor||dstRGB!==WebGLContext._dFactor||srcAlpha!==WebGLContext._srcAlpha||dstAlpha!==WebGLContext._dstAlpha){WebGLContext._sFactor=srcRGB;WebGLContext._dFactor=dstRGB;WebGLContext._srcAlpha=srcAlpha;WebGLContext._dstAlpha=dstAlpha;gl.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);}}
WebGLContext.setCullFace=function(gl,value){value!==WebGLContext._cullFace&&(WebGLContext._cullFace=value,value?gl.enable(0x0B44):gl.disable(0x0B44));}
WebGLContext.setFrontFace=function(gl,value){value!==WebGLContext._frontFace&&(WebGLContext._frontFace=value,gl.frontFace(value));}
WebGLContext.activeTexture=function(gl,textureID){if(WebGLContext._activedTextureID!==textureID){gl.activeTexture(textureID);WebGLContext._activedTextureID=textureID;}}
WebGLContext.bindTexture=function(gl,target,texture){if(WebGLContext._activeTextures[WebGLContext._activedTextureID-0x84C0]!==texture){gl.bindTexture(target,texture);WebGLContext._activeTextures[WebGLContext._activedTextureID-0x84C0]=texture;}}
WebGLContext.useProgramForNative=function(gl,program){gl.useProgram(program);return true;}
WebGLContext.setDepthTestForNative=function(gl,value){if(value)gl.enable(0x0B71);else gl.disable(0x0B71);}
WebGLContext.setDepthMaskForNative=function(gl,value){gl.depthMask(value);}
WebGLContext.setDepthFuncForNative=function(gl,value){gl.depthFunc(value);}
WebGLContext.setBlendForNative=function(gl,value){if(value)gl.enable(0x0BE2);else gl.disable(0x0BE2);}
WebGLContext.setBlendFuncForNative=function(gl,sFactor,dFactor){gl.blendFunc(sFactor,dFactor);}
WebGLContext.setCullFaceForNative=function(gl,value){if(value)gl.enable(0x0B44)
else gl.disable(0x0B44);}
WebGLContext.setFrontFaceForNative=function(gl,value){gl.frontFace(value);}
WebGLContext.activeTextureForNative=function(gl,textureID){gl.activeTexture(textureID);}
WebGLContext.bindTextureForNative=function(gl,target,texture){gl.bindTexture(target,texture);}
WebGLContext.bindVertexArrayForNative=function(gl,vertexArray){gl.bindVertexArray(vertexArray);}
WebGLContext.DEPTH_BUFFER_BIT=0x00000100;WebGLContext.STENCIL_BUFFER_BIT=0x00000400;WebGLContext.COLOR_BUFFER_BIT=0x00004000;WebGLContext.POINTS=0x0000;WebGLContext.LINES=0x0001;WebGLContext.LINE_LOOP=0x0002;WebGLContext.LINE_STRIP=0x0003;WebGLContext.TRIANGLES=0x0004;WebGLContext.TRIANGLE_STRIP=0x0005;WebGLContext.TRIANGLE_FAN=0x0006;WebGLContext.ZERO=0;WebGLContext.ONE=1;WebGLContext.SRC_COLOR=0x0300;WebGLContext.ONE_MINUS_SRC_COLOR=0x0301;WebGLContext.SRC_ALPHA=0x0302;WebGLContext.ONE_MINUS_SRC_ALPHA=0x0303;WebGLContext.DST_ALPHA=0x0304;WebGLContext.ONE_MINUS_DST_ALPHA=0x0305;WebGLContext.DST_COLOR=0x0306;WebGLContext.ONE_MINUS_DST_COLOR=0x0307;WebGLContext.SRC_ALPHA_SATURATE=0x0308;WebGLContext.FUNC_ADD=0x8006;WebGLContext.BLEND_EQUATION=0x8009;WebGLContext.BLEND_EQUATION_RGB=0x8009;WebGLContext.BLEND_EQUATION_ALPHA=0x883D;WebGLContext.FUNC_SUBTRACT=0x800A;WebGLContext.FUNC_REVERSE_SUBTRACT=0x800B;WebGLContext.BLEND_DST_RGB=0x80C8;WebGLContext.BLEND_SRC_RGB=0x80C9;WebGLContext.BLEND_DST_ALPHA=0x80CA;WebGLContext.BLEND_SRC_ALPHA=0x80CB;WebGLContext.CONSTANT_COLOR=0x8001;WebGLContext.ONE_MINUS_CONSTANT_COLOR=0x8002;WebGLContext.CONSTANT_ALPHA=0x8003;WebGLContext.ONE_MINUS_CONSTANT_ALPHA=0x8004;WebGLContext.BLEND_COLOR=0x8005;WebGLContext.ARRAY_BUFFER=0x8892;WebGLContext.ELEMENT_ARRAY_BUFFER=0x8893;WebGLContext.ARRAY_BUFFER_BINDING=0x8894;WebGLContext.ELEMENT_ARRAY_BUFFER_BINDING=0x8895;WebGLContext.STREAM_DRAW=0x88E0;WebGLContext.STATIC_DRAW=0x88E4;WebGLContext.DYNAMIC_DRAW=0x88E8;WebGLContext.BUFFER_SIZE=0x8764;WebGLContext.BUFFER_USAGE=0x8765;WebGLContext.CURRENT_VERTEX_ATTRIB=0x8626;WebGLContext.FRONT=0x0404;WebGLContext.BACK=0x0405;WebGLContext.CULL_FACE=0x0B44;WebGLContext.FRONT_AND_BACK=0x0408;WebGLContext.BLEND=0x0BE2;WebGLContext.DITHER=0x0BD0;WebGLContext.STENCIL_TEST=0x0B90;WebGLContext.DEPTH_TEST=0x0B71;WebGLContext.SCISSOR_TEST=0x0C11;WebGLContext.POLYGON_OFFSET_FILL=0x8037;WebGLContext.SAMPLE_ALPHA_TO_COVERAGE=0x809E;WebGLContext.SAMPLE_COVERAGE=0x80A0;WebGLContext.NO_ERROR=0;WebGLContext.INVALID_ENUM=0x0500;WebGLContext.INVALID_VALUE=0x0501;WebGLContext.INVALID_OPERATION=0x0502;WebGLContext.OUT_OF_MEMORY=0x0505;WebGLContext.CW=0x0900;WebGLContext.CCW=0x0901;WebGLContext.LINE_WIDTH=0x0B21;WebGLContext.ALIASED_POINT_SIZE_RANGE=0x846D;WebGLContext.ALIASED_LINE_WIDTH_RANGE=0x846E;WebGLContext.CULL_FACE_MODE=0x0B45;WebGLContext.FRONT_FACE=0x0B46;WebGLContext.DEPTH_RANGE=0x0B70;WebGLContext.DEPTH_WRITEMASK=0x0B72;WebGLContext.DEPTH_CLEAR_VALUE=0x0B73;WebGLContext.DEPTH_FUNC=0x0B74;WebGLContext.STENCIL_CLEAR_VALUE=0x0B91;WebGLContext.STENCIL_FUNC=0x0B92;WebGLContext.STENCIL_FAIL=0x0B94;WebGLContext.STENCIL_PASS_DEPTH_FAIL=0x0B95;WebGLContext.STENCIL_PASS_DEPTH_PASS=0x0B96;WebGLContext.STENCIL_REF=0x0B97;WebGLContext.STENCIL_VALUE_MASK=0x0B93;WebGLContext.STENCIL_WRITEMASK=0x0B98;WebGLContext.STENCIL_BACK_FUNC=0x8800;WebGLContext.STENCIL_BACK_FAIL=0x8801;WebGLContext.STENCIL_BACK_PASS_DEPTH_FAIL=0x8802;WebGLContext.STENCIL_BACK_PASS_DEPTH_PASS=0x8803;WebGLContext.STENCIL_BACK_REF=0x8CA3;WebGLContext.STENCIL_BACK_VALUE_MASK=0x8CA4;WebGLContext.STENCIL_BACK_WRITEMASK=0x8CA5;WebGLContext.VIEWPORT=0x0BA2;WebGLContext.SCISSOR_BOX=0x0C10;WebGLContext.COLOR_CLEAR_VALUE=0x0C22;WebGLContext.COLOR_WRITEMASK=0x0C23;WebGLContext.UNPACK_ALIGNMENT=0x0CF5;WebGLContext.PACK_ALIGNMENT=0x0D05;WebGLContext.MAX_TEXTURE_SIZE=0x0D33;WebGLContext.MAX_VIEWPORT_DIMS=0x0D3A;WebGLContext.SUBPIXEL_BITS=0x0D50;WebGLContext.RED_BITS=0x0D52;WebGLContext.GREEN_BITS=0x0D53;WebGLContext.BLUE_BITS=0x0D54;WebGLContext.ALPHA_BITS=0x0D55;WebGLContext.DEPTH_BITS=0x0D56;WebGLContext.STENCIL_BITS=0x0D57;WebGLContext.POLYGON_OFFSET_UNITS=0x2A00;WebGLContext.POLYGON_OFFSET_FACTOR=0x8038;WebGLContext.TEXTURE_BINDING_2D=0x8069;WebGLContext.SAMPLE_BUFFERS=0x80A8;WebGLContext.SAMPLES=0x80A9;WebGLContext.SAMPLE_COVERAGE_VALUE=0x80AA;WebGLContext.SAMPLE_COVERAGE_INVERT=0x80AB;WebGLContext.NUM_COMPRESSED_TEXTURE_FORMATS=0x86A2;WebGLContext.COMPRESSED_TEXTURE_FORMATS=0x86A3;WebGLContext.DONT_CARE=0x1100;WebGLContext.FASTEST=0x1101;WebGLContext.NICEST=0x1102;WebGLContext.GENERATE_MIPMAP_HINT=0x8192;WebGLContext.BYTE=0x1400;WebGLContext.UNSIGNED_BYTE=0x1401;WebGLContext.SHORT=0x1402;WebGLContext.UNSIGNED_SHORT=0x1403;WebGLContext.INT=0x1404;WebGLContext.UNSIGNED_INT=0x1405;WebGLContext.FLOAT=0x1406;WebGLContext.DEPTH_COMPONENT=0x1902;WebGLContext.ALPHA=0x1906;WebGLContext.RGB=0x1907;WebGLContext.RGBA=0x1908;WebGLContext.LUMINANCE=0x1909;WebGLContext.LUMINANCE_ALPHA=0x190A;WebGLContext.UNSIGNED_SHORT_4_4_4_4=0x8033;WebGLContext.UNSIGNED_SHORT_5_5_5_1=0x8034;WebGLContext.UNSIGNED_SHORT_5_6_5=0x8363;WebGLContext.FRAGMENT_SHADER=0x8B30;WebGLContext.VERTEX_SHADER=0x8B31;WebGLContext.MAX_VERTEX_ATTRIBS=0x8869;WebGLContext.MAX_VERTEX_UNIFORM_VECTORS=0x8DFB;WebGLContext.MAX_VARYING_VECTORS=0x8DFC;WebGLContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS=0x8B4D;WebGLContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS=0x8B4C;WebGLContext.MAX_TEXTURE_IMAGE_UNITS=0x8872;WebGLContext.MAX_FRAGMENT_UNIFORM_VECTORS=0x8DFD;WebGLContext.SHADER_TYPE=0x8B4F;WebGLContext.DELETE_STATUS=0x8B80;WebGLContext.LINK_STATUS=0x8B82;WebGLContext.VALIDATE_STATUS=0x8B83;WebGLContext.ATTACHED_SHADERS=0x8B85;WebGLContext.ACTIVE_UNIFORMS=0x8B86;WebGLContext.ACTIVE_ATTRIBUTES=0x8B89;WebGLContext.SHADING_LANGUAGE_VERSION=0x8B8C;WebGLContext.CURRENT_PROGRAM=0x8B8D;WebGLContext.NEVER=0x0200;WebGLContext.LESS=0x0201;WebGLContext.EQUAL=0x0202;WebGLContext.LEQUAL=0x0203;WebGLContext.GREATER=0x0204;WebGLContext.NOTEQUAL=0x0205;WebGLContext.GEQUAL=0x0206;WebGLContext.ALWAYS=0x0207;WebGLContext.KEEP=0x1E00;WebGLContext.REPLACE=0x1E01;WebGLContext.INCR=0x1E02;WebGLContext.DECR=0x1E03;WebGLContext.INVERT=0x150A;WebGLContext.INCR_WRAP=0x8507;WebGLContext.DECR_WRAP=0x8508;WebGLContext.VENDOR=0x1F00;WebGLContext.RENDERER=0x1F01;WebGLContext.VERSION=0x1F02;WebGLContext.NEAREST=0x2600;WebGLContext.LINEAR=0x2601;WebGLContext.NEAREST_MIPMAP_NEAREST=0x2700;WebGLContext.LINEAR_MIPMAP_NEAREST=0x2701;WebGLContext.NEAREST_MIPMAP_LINEAR=0x2702;WebGLContext.LINEAR_MIPMAP_LINEAR=0x2703;WebGLContext.TEXTURE_MAG_FILTER=0x2800;WebGLContext.TEXTURE_MIN_FILTER=0x2801;WebGLContext.TEXTURE_WRAP_S=0x2802;WebGLContext.TEXTURE_WRAP_T=0x2803;WebGLContext.TEXTURE_2D=0x0DE1;WebGLContext.TEXTURE_3D=0x806f;WebGLContext.TEXTURE=0x1702;WebGLContext.TEXTURE_CUBE_MAP=0x8513;WebGLContext.TEXTURE_BINDING_CUBE_MAP=0x8514;WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_X=0x8515;WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_X=0x8516;WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Y=0x8517;WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Y=0x8518;WebGLContext.TEXTURE_CUBE_MAP_POSITIVE_Z=0x8519;WebGLContext.TEXTURE_CUBE_MAP_NEGATIVE_Z=0x851A;WebGLContext.MAX_CUBE_MAP_TEXTURE_SIZE=0x851C;WebGLContext.TEXTURE0=0x84C0;WebGLContext.TEXTURE1=0x84C1;WebGLContext.TEXTURE2=0x84C2;WebGLContext.TEXTURE3=0x84C3;WebGLContext.TEXTURE4=0x84C4;WebGLContext.TEXTURE5=0x84C5;WebGLContext.TEXTURE6=0x84C6;WebGLContext.TEXTURE7=0x84C7;WebGLContext.TEXTURE8=0x84C8;WebGLContext.TEXTURE9=0x84C9;WebGLContext.TEXTURE10=0x84CA;WebGLContext.TEXTURE11=0x84CB;WebGLContext.TEXTURE12=0x84CC;WebGLContext.TEXTURE13=0x84CD;WebGLContext.TEXTURE14=0x84CE;WebGLContext.TEXTURE15=0x84CF;WebGLContext.TEXTURE16=0x84D0;WebGLContext.TEXTURE17=0x84D1;WebGLContext.TEXTURE18=0x84D2;WebGLContext.TEXTURE19=0x84D3;WebGLContext.TEXTURE20=0x84D4;WebGLContext.TEXTURE21=0x84D5;WebGLContext.TEXTURE22=0x84D6;WebGLContext.TEXTURE23=0x84D7;WebGLContext.TEXTURE24=0x84D8;WebGLContext.TEXTURE25=0x84D9;WebGLContext.TEXTURE26=0x84DA;WebGLContext.TEXTURE27=0x84DB;WebGLContext.TEXTURE28=0x84DC;WebGLContext.TEXTURE29=0x84DD;WebGLContext.TEXTURE30=0x84DE;WebGLContext.TEXTURE31=0x84DF;WebGLContext.ACTIVE_TEXTURE=0x84E0;WebGLContext.REPEAT=0x2901;WebGLContext.CLAMP_TO_EDGE=0x812F;WebGLContext.MIRRORED_REPEAT=0x8370;WebGLContext.FLOAT_VEC2=0x8B50;WebGLContext.FLOAT_VEC3=0x8B51;WebGLContext.FLOAT_VEC4=0x8B52;WebGLContext.INT_VEC2=0x8B53;WebGLContext.INT_VEC3=0x8B54;WebGLContext.INT_VEC4=0x8B55;WebGLContext.BOOL=0x8B56;WebGLContext.BOOL_VEC2=0x8B57;WebGLContext.BOOL_VEC3=0x8B58;WebGLContext.BOOL_VEC4=0x8B59;WebGLContext.FLOAT_MAT2=0x8B5A;WebGLContext.FLOAT_MAT3=0x8B5B;WebGLContext.FLOAT_MAT4=0x8B5C;WebGLContext.SAMPLER_2D=0x8B5E;WebGLContext.SAMPLER_CUBE=0x8B60;WebGLContext.VERTEX_ATTRIB_ARRAY_ENABLED=0x8622;WebGLContext.VERTEX_ATTRIB_ARRAY_SIZE=0x8623;WebGLContext.VERTEX_ATTRIB_ARRAY_STRIDE=0x8624;WebGLContext.VERTEX_ATTRIB_ARRAY_TYPE=0x8625;WebGLContext.VERTEX_ATTRIB_ARRAY_NORMALIZED=0x886A;WebGLContext.VERTEX_ATTRIB_ARRAY_POINTER=0x8645;WebGLContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=0x889F;WebGLContext.COMPILE_STATUS=0x8B81;WebGLContext.LOW_FLOAT=0x8DF0;WebGLContext.MEDIUM_FLOAT=0x8DF1;WebGLContext.HIGH_FLOAT=0x8DF2;WebGLContext.LOW_INT=0x8DF3;WebGLContext.MEDIUM_INT=0x8DF4;WebGLContext.HIGH_INT=0x8DF5;WebGLContext.FRAMEBUFFER=0x8D40;WebGLContext.RENDERBUFFER=0x8D41;WebGLContext.RGBA4=0x8056;WebGLContext.RGB5_A1=0x8057;WebGLContext.RGB565=0x8D62;WebGLContext.DEPTH_COMPONENT16=0x81A5;WebGLContext.STENCIL_INDEX=0x1901;WebGLContext.STENCIL_INDEX8=0x8D48;WebGLContext.DEPTH_STENCIL=0x84F9;WebGLContext.RENDERBUFFER_WIDTH=0x8D42;WebGLContext.RENDERBUFFER_HEIGHT=0x8D43;WebGLContext.RENDERBUFFER_INTERNAL_FORMAT=0x8D44;WebGLContext.RENDERBUFFER_RED_SIZE=0x8D50;WebGLContext.RENDERBUFFER_GREEN_SIZE=0x8D51;WebGLContext.RENDERBUFFER_BLUE_SIZE=0x8D52;WebGLContext.RENDERBUFFER_ALPHA_SIZE=0x8D53;WebGLContext.RENDERBUFFER_DEPTH_SIZE=0x8D54;WebGLContext.RENDERBUFFER_STENCIL_SIZE=0x8D55;WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=0x8CD0;WebGLContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=0x8CD1;WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=0x8CD2;WebGLContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=0x8CD3;WebGLContext.COLOR_ATTACHMENT0=0x8CE0;WebGLContext.DEPTH_ATTACHMENT=0x8D00;WebGLContext.STENCIL_ATTACHMENT=0x8D20;WebGLContext.DEPTH_STENCIL_ATTACHMENT=0x821A;WebGLContext.NONE=0;WebGLContext.FRAMEBUFFER_COMPLETE=0x8CD5;WebGLContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=0x8CD6;WebGLContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=0x8CD7;WebGLContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=0x8CD9;WebGLContext.FRAMEBUFFER_UNSUPPORTED=0x8CDD;WebGLContext.FRAMEBUFFER_BINDING=0x8CA6;WebGLContext.RENDERBUFFER_BINDING=0x8CA7;WebGLContext.MAX_RENDERBUFFER_SIZE=0x84E8;WebGLContext.INVALID_FRAMEBUFFER_OPERATION=0x0506;WebGLContext.UNPACK_FLIP_Y_WEBGL=0x9240;WebGLContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL=0x9241;WebGLContext.CONTEXT_LOST_WEBGL=0x9242;WebGLContext.UNPACK_COLORSPACE_CONVERSION_WEBGL=0x9243;WebGLContext.BROWSER_DEFAULT_WEBGL=0x9244;WebGLContext._extTextureFilterAnisotropic=null;WebGLContext._compressedTextureS3tc=null;WebGLContext._compressedTexturePvrtc=null;WebGLContext._compressedTextureEtc1=null;WebGLContext._angleInstancedArrays=null;WebGLContext._glTextureIDs=[0x84C0,0x84C1,0x84C2,0x84C3,0x84C4,0x84C5,0x84C6,0x84C7];WebGLContext._useProgram=null;WebGLContext._depthTest=true;WebGLContext._depthMask=true;WebGLContext._blend=false;WebGLContext._cullFace=false;WebGLContext._activedTextureID=0x84C0;__static(WebGLContext,['_extentionVendorPrefixes',function(){return this._extentionVendorPrefixes=["","WEBKIT_","MOZ_"];},'_activeTextures',function(){return this._activeTextures=new Array(8);},'_depthFunc',function(){return this._depthFunc=0x0201;},'_sFactor',function(){return this._sFactor=1;},'_dFactor',function(){return this._dFactor=0;},'_srcAlpha',function(){return this._srcAlpha=1;},'_dstAlpha',function(){return this._dstAlpha=0;},'_frontFace',function(){return this._frontFace=0x0901;}]);return WebGLContext;})()
var ResourceVersion=(function(){function ResourceVersion(){}
__class(ResourceVersion,'laya.net.ResourceVersion');ResourceVersion.enable=function(manifestFile,callback,type){(type===void 0)&&(type=2);laya.net.ResourceVersion.type=type;Laya.loader.load(manifestFile,Handler.create(null,ResourceVersion.onManifestLoaded,[callback]),null,"json");URL.customFormat=ResourceVersion.addVersionPrefix;}
ResourceVersion.onManifestLoaded=function(callback,data){ResourceVersion.manifest=data;callback.run();if(!data){console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");}}
ResourceVersion.addVersionPrefix=function(originURL){originURL=URL.getAdptedFilePath(originURL);if(ResourceVersion.manifest&&ResourceVersion.manifest[originURL]){if(ResourceVersion.type==2)return ResourceVersion.manifest[originURL];return ResourceVersion.manifest[originURL]+"/"+originURL;}
return originURL;}
ResourceVersion.FOLDER_VERSION=1;ResourceVersion.FILENAME_VERSION=2;ResourceVersion.manifest=null;ResourceVersion.type=1;return ResourceVersion;})()
var FillWordsCmd=(function(){function FillWordsCmd(){}
__class(FillWordsCmd,'laya.display.cmd.FillWordsCmd');var __proto=FillWordsCmd.prototype;__proto.recover=function(){this.words=null;Pool.recover("FillWordsCmd",this);}
__proto.run=function(context,gx,gy){context.fillWords(this.words,this.x+gx,this.y+gy,this.font,this.color);}
__getset(0,__proto,'cmdID',function(){return"FillWords";});FillWordsCmd.create=function(words,x,y,font,color){var cmd=Pool.getItemByClass("FillWordsCmd",FillWordsCmd);cmd.words=words;cmd.x=x;cmd.y=y;cmd.font=font;cmd.color=color;return cmd;}
FillWordsCmd.ID="FillWords";return FillWordsCmd;})()
var Matrix=(function(){function Matrix(a,b,c,d,tx,ty,nums){this._bTransform=false;(a===void 0)&&(a=1);(b===void 0)&&(b=0);(c===void 0)&&(c=0);(d===void 0)&&(d=1);(tx===void 0)&&(tx=0);(ty===void 0)&&(ty=0);(nums===void 0)&&(nums=0);if(Matrix._createFun!=null){return Matrix._createFun(a,b,c,d,tx,ty,nums);}
this.a=a;this.b=b;this.c=c;this.d=d;this.tx=tx;this.ty=ty;this._checkTransform();}
__class(Matrix,'laya.maths.Matrix');var __proto=Matrix.prototype;__proto.identity=function(){this.a=this.d=1;this.b=this.tx=this.ty=this.c=0;this._bTransform=false;return this;}
__proto._checkTransform=function(){return this._bTransform=(this.a!==1||this.b!==0||this.c!==0||this.d!==1);}
__proto.setTranslate=function(x,y){this.tx=x;this.ty=y;return this;}
__proto.translate=function(x,y){this.tx+=x;this.ty+=y;return this;}
__proto.scale=function(x,y){this.a*=x;this.d*=y;this.c*=x;this.b*=y;this.tx*=x;this.ty*=y;this._bTransform=true;return this;}
__proto.rotate=function(angle){var cos=Math.cos(angle);var sin=Math.sin(angle);var a1=this.a;var c1=this.c;var tx1=this.tx;this.a=a1*cos-this.b*sin;this.b=a1*sin+this.b*cos;this.c=c1*cos-this.d*sin;this.d=c1*sin+this.d*cos;this.tx=tx1*cos-this.ty*sin;this.ty=tx1*sin+this.ty*cos;this._bTransform=true;return this;}
__proto.skew=function(x,y){var tanX=Math.tan(x);var tanY=Math.tan(y);var a1=this.a;var b1=this.b;this.a+=tanY*this.c;this.b+=tanY*this.d;this.c+=tanX*a1;this.d+=tanX*b1;return this;}
__proto.invertTransformPoint=function(out){var a1=this.a;var b1=this.b;var c1=this.c;var d1=this.d;var tx1=this.tx;var n=a1*d1-b1*c1;var a2=d1/n;var b2=-b1/n;var c2=-c1/n;var d2=a1/n;var tx2=(c1*this.ty-d1*tx1)/n;var ty2=-(a1*this.ty-b1*tx1)/n;return out.setTo(a2*out.x+c2*out.y+tx2,b2*out.x+d2*out.y+ty2);}
__proto.transformPoint=function(out){return out.setTo(this.a*out.x+this.c*out.y+this.tx,this.b*out.x+this.d*out.y+this.ty);}
__proto.transformPointN=function(out){return out.setTo(this.a*out.x+this.c*out.y,this.b*out.x+this.d*out.y);}
__proto.getScaleX=function(){return this.b===0?this.a:Math.sqrt(this.a*this.a+this.b*this.b);}
__proto.getScaleY=function(){return this.c===0?this.d:Math.sqrt(this.c*this.c+this.d*this.d);}
__proto.invert=function(){var a1=this.a;var b1=this.b;var c1=this.c;var d1=this.d;var tx1=this.tx;var n=a1*d1-b1*c1;this.a=d1/n;this.b=-b1/n;this.c=-c1/n;this.d=a1/n;this.tx=(c1*this.ty-d1*tx1)/n;this.ty=-(a1*this.ty-b1*tx1)/n;return this;}
__proto.setTo=function(a,b,c,d,tx,ty){this.a=a,this.b=b,this.c=c,this.d=d,this.tx=tx,this.ty=ty;return this;}
__proto.concat=function(matrix){var a=this.a;var c=this.c;var tx=this.tx;this.a=a*matrix.a+this.b*matrix.c;this.b=a*matrix.b+this.b*matrix.d;this.c=c*matrix.a+this.d*matrix.c;this.d=c*matrix.b+this.d*matrix.d;this.tx=tx*matrix.a+this.ty*matrix.c+matrix.tx;this.ty=tx*matrix.b+this.ty*matrix.d+matrix.ty;return this;}
__proto.scaleEx=function(x,y){var ba=this.a,bb=this.b,bc=this.c,bd=this.d;if(bb!==0||bc!==0){this.a=x*ba;this.b=x*bb;this.c=y*bc;this.d=y*bd;}else{this.a=x*ba;this.b=0*bd;this.c=0*ba;this.d=y*bd;}
this._bTransform=true;}
__proto.rotateEx=function(angle){var cos=Math.cos(angle);var sin=Math.sin(angle);var ba=this.a,bb=this.b,bc=this.c,bd=this.d;if(bb!==0||bc!==0){this.a=cos*ba+sin*bc;this.b=cos*bb+sin*bd;this.c=-sin*ba+cos*bc;this.d=-sin*bb+cos*bd;}else{this.a=cos*ba;this.b=sin*bd;this.c=-sin*ba;this.d=cos*bd;}
this._bTransform=true;}
__proto.clone=function(){var dec=Matrix.create();dec.a=this.a;dec.b=this.b;dec.c=this.c;dec.d=this.d;dec.tx=this.tx;dec.ty=this.ty;dec._bTransform=this._bTransform;return dec;}
__proto.copyTo=function(dec){dec.a=this.a;dec.b=this.b;dec.c=this.c;dec.d=this.d;dec.tx=this.tx;dec.ty=this.ty;dec._bTransform=this._bTransform;return dec;}
__proto.toString=function(){return this.a+","+this.b+","+this.c+","+this.d+","+this.tx+","+this.ty;}
__proto.destroy=function(){this.recover();}
__proto.recover=function(){Pool.recover("Matrix",this.identity());}
Matrix.mul=function(m1,m2,out){var aa=m1.a,ab=m1.b,ac=m1.c,ad=m1.d,atx=m1.tx,aty=m1.ty;var ba=m2.a,bb=m2.b,bc=m2.c,bd=m2.d,btx=m2.tx,bty=m2.ty;if(bb!==0||bc!==0){out.a=aa*ba+ab*bc;out.b=aa*bb+ab*bd;out.c=ac*ba+ad*bc;out.d=ac*bb+ad*bd;out.tx=ba*atx+bc*aty+btx;out.ty=bb*atx+bd*aty+bty;}else{out.a=aa*ba;out.b=ab*bd;out.c=ac*ba;out.d=ad*bd;out.tx=ba*atx+btx;out.ty=bd*aty+bty;}
return out;}
Matrix.mul16=function(m1,m2,out){var aa=m1.a,ab=m1.b,ac=m1.c,ad=m1.d,atx=m1.tx,aty=m1.ty;var ba=m2.a,bb=m2.b,bc=m2.c,bd=m2.d,btx=m2.tx,bty=m2.ty;if(bb!==0||bc!==0){out[0]=aa*ba+ab*bc;out[1]=aa*bb+ab*bd;out[4]=ac*ba+ad*bc;out[5]=ac*bb+ad*bd;out[12]=ba*atx+bc*aty+btx;out[13]=bb*atx+bd*aty+bty;}else{out[0]=aa*ba;out[1]=ab*bd;out[4]=ac*ba;out[5]=ad*bd;out[12]=ba*atx+btx;out[13]=bd*aty+bty;}
return out;}
Matrix.create=function(){return Pool.getItemByClass("Matrix",Matrix);}
Matrix.EMPTY=new Matrix();Matrix.TEMP=new Matrix();Matrix._createFun=null;return Matrix;})()
var PerfData=(function(){function PerfData(id,color,name,scale){this.id=0;this.name=null;this.color=0;this.scale=1.0;this.datapos=0;this.datas=new Array(PerfHUD.DATANUM);this.id=id;this.color=color;this.name=name;this.scale=scale;}
__class(PerfData,'laya.utils.PerfData');var __proto=PerfData.prototype;__proto.addData=function(v){this.datas[this.datapos]=v;this.datapos++;this.datapos%=PerfHUD.DATANUM;}
return PerfData;})()
var TransformCmd=(function(){function TransformCmd(){}
__class(TransformCmd,'laya.display.cmd.TransformCmd');var __proto=TransformCmd.prototype;__proto.recover=function(){this.matrix=null;Pool.recover("TransformCmd",this);}
__proto.run=function(context,gx,gy){context._transform(this.matrix,this.pivotX+gx,this.pivotY+gy);}
__getset(0,__proto,'cmdID',function(){return"Transform";});TransformCmd.create=function(matrix,pivotX,pivotY){var cmd=Pool.getItemByClass("TransformCmd",TransformCmd);cmd.matrix=matrix;cmd.pivotX=pivotX;cmd.pivotY=pivotY;return cmd;}
TransformCmd.ID="Transform";return TransformCmd;})()
var DrawTexturesCmd=(function(){function DrawTexturesCmd(){}
__class(DrawTexturesCmd,'laya.display.cmd.DrawTexturesCmd');var __proto=DrawTexturesCmd.prototype;__proto.recover=function(){this.texture._removeReference();this.texture=null;this.pos=null;Pool.recover("DrawTexturesCmd",this);}
__proto.run=function(context,gx,gy){context.drawTextures(this.texture,this.pos,gx,gy);}
__getset(0,__proto,'cmdID',function(){return"DrawTextures";});DrawTexturesCmd.create=function(texture,pos){var cmd=Pool.getItemByClass("DrawTexturesCmd",DrawTexturesCmd);cmd.texture=texture;texture._addReference();cmd.pos=pos;return cmd;}
DrawTexturesCmd.ID="DrawTextures";return DrawTexturesCmd;})()
var DrawCircleCmd=(function(){function DrawCircleCmd(){}
__class(DrawCircleCmd,'laya.display.cmd.DrawCircleCmd');var __proto=DrawCircleCmd.prototype;__proto.recover=function(){this.fillColor=null;this.lineColor=null;Pool.recover("DrawCircleCmd",this);}
__proto.run=function(context,gx,gy){context._drawCircle(this.x+gx,this.y+gy,this.radius,this.fillColor,this.lineColor,this.lineWidth,this.vid);}
__getset(0,__proto,'cmdID',function(){return"DrawCircle";});DrawCircleCmd.create=function(x,y,radius,fillColor,lineColor,lineWidth,vid){var cmd=Pool.getItemByClass("DrawCircleCmd",DrawCircleCmd);cmd.x=x;cmd.y=y;cmd.radius=radius;cmd.fillColor=fillColor;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;cmd.vid=vid;return cmd;}
DrawCircleCmd.ID="DrawCircle";return DrawCircleCmd;})()
var Context=(function(){var ContextParams;function Context(){this._drawTriUseAbsMatrix=false;this._id=++Context._COUNT;this._other=null;this._renderNextSubmitIndex=0;this._path=null;this._drawCount=1;this._renderCount=0;this._isConvexCmd=true;this._submits=null;this._curSubmit=null;this._mesh=null;this._pathMesh=null;this._triangleMesh=null;this.meshlist=[];this._clipInCache=false;this._clipInfoID=0;this._curMat=null;this._lastMatScaleX=1.0;this._lastMatScaleY=1.0;this._lastMat_a=1.0;this._lastMat_b=0.0;this._lastMat_c=0.0;this._lastMat_d=1.0;this._nBlendType=0;this._save=null;this._targets=null;this._charSubmitCache=null;this._saveMark=null;this.sprite=null;this._italicDeg=0;this._lastTex=null;this._fillColor=0;this._flushCnt=0;this.defTexture=null;this._colorFiler=null;this.drawTexAlign=false;this._incache=false;this.isMain=false;this._tmpMatrix=new Matrix();this._drawTexToDrawTri_Vert=new Float32Array(8);this._drawTexToDrawTri_Index=new Uint16Array([0,1,2,0,2,3]);this._tempUV=new Float32Array(8);this._width=99999999;this._height=99999999;this._submitKey=new SubmitKey();this._transedPoints=new Array(8);this._temp4Points=new Array(8);this._clipRect=Context.MAXCLIPRECT;this._globalClipMatrix=new Matrix(99999999,0,0,99999999,0,0);this._shader2D=new Shader2D();Context._contextcount++;if(!this.defTexture){var defTex2d=new Texture2D(2,2);defTex2d.setPixels(new Uint8Array(16));defTex2d.lock=true;this.defTexture=new Texture(defTex2d);}
this._lastTex=this.defTexture;this.clear();}
__class(Context,'laya.resource.Context');var __proto=Context.prototype;__proto.drawImage=function(__args){}
__proto.getImageData=function(__args){}
__proto.measureText=function(text){return null;}
__proto.setTransform=function(__args){}
__proto.$transform=function(a,b,c,d,tx,ty){}
__proto.clearRect=function(x,y,width,height){}
__proto._drawRect=function(x,y,width,height,style){Stat.renderBatches++;style&&(this.fillStyle=style);this.fillRect(x,y,width,height);}
__proto.drawTexture2=function(x,y,pivotX,pivotY,m,args2){}
__proto.transformByMatrix=function(matrix,tx,ty){this.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx+tx,matrix.ty+ty);}
__proto.saveTransform=function(matrix){this.save();}
__proto.restoreTransform=function(matrix){this.restore();}
__proto.drawRect=function(x,y,width,height,fillColor,lineColor,lineWidth){var ctx=this;if(fillColor!=null){ctx.fillStyle=fillColor;ctx.fillRect(x,y,width,height);}
if(lineColor!=null){ctx.strokeStyle=lineColor;ctx.lineWidth=lineWidth;ctx.strokeRect(x,y,width,height);}}
__proto.alpha=function(value){this.globalAlpha*=value;}
__proto._transform=function(mat,pivotX,pivotY){this.translate(pivotX,pivotY);this.transform(mat.a,mat.b,mat.c,mat.d,mat.tx,mat.ty);this.translate(-pivotX,-pivotY);}
__proto._rotate=function(angle,pivotX,pivotY){this.translate(pivotX,pivotY);this.rotate(angle);this.translate(-pivotX,-pivotY);}
__proto._scale=function(scaleX,scaleY,pivotX,pivotY){this.translate(pivotX,pivotY);this.scale(scaleX,scaleY);this.translate(-pivotX,-pivotY);}
__proto._drawLine=function(x,y,fromX,fromY,toX,toY,lineColor,lineWidth,vid){this.beginPath();this.strokeStyle=lineColor;this.lineWidth=lineWidth;this.moveTo(x+fromX,y+fromY);this.lineTo(x+toX,y+toY);this.stroke();}
__proto._drawLines=function(x,y,points,lineColor,lineWidth,vid){this.beginPath();this.strokeStyle=lineColor;this.lineWidth=lineWidth;var i=2,n=points.length;this.addPath(points.slice(),false,false,x,y);this.stroke();}
__proto.drawCurves=function(x,y,points,lineColor,lineWidth){this.beginPath();this.strokeStyle=lineColor;this.lineWidth=lineWidth;this.moveTo(x+points[0],y+points[1]);var i=2,n=points.length;while(i<n){this.quadraticCurveTo(x+points[i++],y+points[i++],x+points[i++],y+points[i++]);}
this.stroke();}
__proto._fillAndStroke=function(fillColor,strokeColor,lineWidth,isConvexPolygon){(isConvexPolygon===void 0)&&(isConvexPolygon=false);if(fillColor!=null){this.fillStyle=fillColor;this.fill();}
if(strokeColor!=null&&lineWidth>0){this.strokeStyle=strokeColor;this.lineWidth=lineWidth;this.stroke();}}
__proto._drawCircle=function(x,y,radius,fillColor,lineColor,lineWidth,vid){Stat.renderBatches++;this.beginPath(true);this.arc(x,y,radius,0,Context.PI2);this.closePath();this._fillAndStroke(fillColor,lineColor,lineWidth);}
__proto._drawPie=function(x,y,radius,startAngle,endAngle,fillColor,lineColor,lineWidth,vid){this.beginPath();this.moveTo(x,y);this.arc(x,y,radius,startAngle,endAngle);this.closePath();this._fillAndStroke(fillColor,lineColor,lineWidth);}
__proto._drawPoly=function(x,y,points,fillColor,lineColor,lineWidth,isConvexPolygon,vid){var i=2,n=points.length;this.beginPath();this.addPath(points.slice(),true,isConvexPolygon,x,y);this.closePath();this._fillAndStroke(fillColor,lineColor,lineWidth,isConvexPolygon);}
__proto._drawPath=function(x,y,paths,brush,pen){this.beginPath();for(var i=0,n=paths.length;i<n;i++){var path=paths[i];switch(path[0]){case"moveTo":this.moveTo(x+path[1],y+path[2]);break;case"lineTo":this.lineTo(x+path[1],y+path[2]);break;case"arcTo":this.arcTo(x+path[1],y+path[2],x+path[3],y+path[4],path[5]);break;case"closePath":this.closePath();break;}}
if(brush!=null){this.fillStyle=brush.fillStyle;this.fill();}
if(pen!=null){this.strokeStyle=pen.strokeStyle;this.lineWidth=pen.lineWidth||1;this.lineJoin=pen.lineJoin;this.lineCap=pen.lineCap;this.miterLimit=pen.miterLimit;this.stroke();}}
__proto.clearBG=function(r,g,b,a){var gl=WebGL.mainContext;gl.clearColor(r,g,b,a);gl.clear(0x00004000);}
__proto._getSubmits=function(){return this._submits;}
__proto._releaseMem=function(keepRT){(keepRT===void 0)&&(keepRT=false);if(!this._submits)
return;this._curMat.destroy();this._curMat=null;this._shader2D.destroy();this._shader2D=null;this._charSubmitCache.clear();for(var i=0,n=this._submits._length;i<n;i++){this._submits[i].releaseRender();}
this._submits.length=0;this._submits._length=0;this._submits=null;this._curSubmit=null;this._path=null;this._save=null;var sz=0;for(i=0,sz=this.meshlist.length;i<sz;i++){var curm=this.meshlist[i];curm.destroy();}
this.meshlist.length=0;this.sprite=null;if(!keepRT){this._targets&&(this._targets.destroy());this._targets=null;}}
__proto.destroy=function(keepRT){(keepRT===void 0)&&(keepRT=false);--Context._contextcount;this.sprite=null;this._releaseMem(keepRT);this._charSubmitCache.destroy();this._mesh.destroy();if(!keepRT){this._targets&&this._targets.destroy();this._targets=null;}}
__proto.clear=function(){if(!this._submits){this._other=ContextParams.DEFAULT;this._curMat=Matrix.create();this._charSubmitCache=new CharSubmitCache();this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh);this._pathMesh=MeshVG.getAMesh(this.isMain);this.meshlist.push(this._pathMesh);this._triangleMesh=MeshTexture.getAMesh(this.isMain);this.meshlist.push(this._triangleMesh);this._submits=[];this._save=[SaveMark.Create(this)];this._save.length=10;this._shader2D=new Shader2D();}
this._submitKey.clear();this._mesh.clearVB();this._renderCount++;this._drawCount=1;this._other=ContextParams.DEFAULT;this._other.lineWidth=this._shader2D.ALPHA=1.0;this._nBlendType=0;this._clipRect=Context.MAXCLIPRECT;this._curSubmit=Submit.RENDERBASE;Submit.RENDERBASE._ref=0xFFFFFF;Submit.RENDERBASE._numEle=0;this._shader2D.fillStyle=this._shader2D.strokeStyle=DrawStyle.DEFAULT;for(var i=0,n=this._submits._length;i<n;i++)
this._submits[i].releaseRender();this._submits._length=0;this._curMat.identity();this._other.clear();this._saveMark=this._save[0];this._save._length=1;}
__proto.size=function(w,h){if(this._width!=w||this._height!=h){this._width=w;this._height=h;if(this._targets){this._targets.destroy();this._targets=new RenderTexture2D(w,h,1,-1);}
if(Render._context==this){WebGL.mainContext.viewport(0,0,w,h);RenderState2D.width=w;RenderState2D.height=h;}}
if(w===0&&h===0)this._releaseMem();}
__proto.getMatScaleX=function(){if(this._lastMat_a==this._curMat.a&&this._lastMat_b==this._curMat.b)
return this._lastMatScaleX;this._lastMatScaleX=this._curMat.getScaleX();this._lastMat_a=this._curMat.a;this._lastMat_b=this._curMat.b;return this._lastMatScaleX;}
__proto.getMatScaleY=function(){if(this._lastMat_c==this._curMat.c&&this._lastMat_d==this._curMat.d)
return this._lastMatScaleY;this._lastMatScaleY=this._curMat.getScaleY();this._lastMat_c=this._curMat.c;this._lastMat_d=this._curMat.d;return this._lastMatScaleY;}
__proto.setFillColor=function(color){this._fillColor=color;}
__proto.getFillColor=function(){return this._fillColor;}
__proto.translate=function(x,y){if(x!==0||y!==0){SaveTranslate.save(this);if(this._curMat._bTransform){SaveTransform.save(this);this._curMat.tx+=(x*this._curMat.a+y*this._curMat.c);this._curMat.ty+=(x*this._curMat.b+y*this._curMat.d);}else{this._curMat.tx=x;this._curMat.ty=y;}}}
__proto.save=function(){this._save[this._save._length++]=SaveMark.Create(this);}
__proto.restore=function(){var sz=this._save._length;var lastBlend=this._nBlendType;if(sz<1)
return;for(var i=sz-1;i>=0;i--){var o=this._save[i];o.restore(this);if(o.isSaveMark()){this._save._length=i;return;}}
if(lastBlend!=this._nBlendType){this._curSubmit=Submit.RENDERBASE;}}
__proto.fillText=function(txt,x,y,fontStr,color,align){this._fillText(txt,null,x,y,fontStr,color,null,0,null);}
__proto._fillText=function(txt,words,x,y,fontStr,color,strokeColor,lineWidth,textAlign,underLine){(underLine===void 0)&&(underLine=0);if(txt)
Context._textRender.filltext(this,txt,x,y,fontStr,color,strokeColor,lineWidth,textAlign,underLine);else if(words)
Context._textRender.fillWords(this,words,x,y,fontStr,color,strokeColor,lineWidth);}
__proto._fast_filltext=function(data,x,y,fontObj,color,strokeColor,lineWidth,textAlign,underLine){(underLine===void 0)&&(underLine=0);Context._textRender._fast_filltext(this,data,null,x,y,fontObj,color,strokeColor,lineWidth,textAlign,underLine);}
__proto.fillWords=function(words,x,y,fontStr,color){this._fillText(null,words,x,y,fontStr,color,null,-1,null,0);}
__proto.fillBorderWords=function(words,x,y,font,color,borderColor,lineWidth){this._fillBorderText(null,words,x,y,font,color,borderColor,lineWidth,null);}
__proto.drawText=function(text,x,y,font,color,textAlign){this._fillText(text,null,x,y,font,ColorUtils.create(color).strColor,null,-1,textAlign);}
__proto.strokeWord=function(text,x,y,font,color,lineWidth,textAlign){this._fillText(text,null,x,y,font,null,ColorUtils.create(color).strColor,lineWidth||1,textAlign);}
__proto.fillBorderText=function(txt,x,y,fontStr,fillColor,borderColor,lineWidth,textAlign){this._fillBorderText(txt,null,x,y,fontStr,ColorUtils.create(fillColor).strColor,ColorUtils.create(borderColor).strColor,lineWidth,textAlign);}
__proto._fillBorderText=function(txt,words,x,y,fontStr,fillColor,borderColor,lineWidth,textAlign){this._fillText(txt,words,x,y,fontStr,fillColor,borderColor,lineWidth||1,textAlign);}
__proto._fillRect=function(x,y,width,height,rgba){var submit=this._curSubmit;var sameKey=submit&&(submit._key.submitType===2&&submit._key.blendShader===this._nBlendType);if(this._mesh.vertNum+4>65535){this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh);sameKey=false;}
sameKey&&(sameKey=sameKey&&this.isSameClipInfo(submit));this.transformQuad(x,y,width,height,0,this._curMat,this._transedPoints);if(!this.clipedOff(this._transedPoints)){this._mesh.addQuad(this._transedPoints,Texture.NO_UV,rgba,false);if(!sameKey){submit=this._curSubmit=SubmitTexture.create(this,this._mesh,Value2D.create(0x01,0));this._submits[this._submits._length++]=submit;this._copyClipInfo(submit,this._globalClipMatrix);submit.shaderValue.textureHost=this._lastTex;submit._key.other=(this._lastTex&&this._lastTex.bitmap)?this._lastTex.bitmap.id:-1
submit._renderType=10016;}
this._curSubmit._numEle+=6;this._mesh.indexNum+=6;this._mesh.vertNum+=4;}}
__proto.fillRect=function(x,y,width,height,fillStyle){var drawstyle=fillStyle?DrawStyle.create(fillStyle):this._shader2D.fillStyle;var rgba=this.mixRGBandAlpha(drawstyle.toInt());this._fillRect(x,y,width,height,rgba);}
__proto.fillTexture=function(texture,x,y,width,height,type,offset,other){if(!texture._getSource()){this.sprite&&Laya.systemTimer.callLater(this,this._repaintSprite);return;}
this._fillTexture(texture,texture.width,texture.height,texture.uvrect,x,y,width,height,type,offset.x,offset.y);}
__proto._fillTexture=function(texture,texw,texh,texuvRect,x,y,width,height,type,offsetx,offsety){var submit=this._curSubmit;var sameKey=false;if(this._mesh.vertNum+4>65535){this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh);sameKey=false;};var repeatx=true;var repeaty=true;switch(type){case"repeat":break;case"repeat-x":repeaty=false;break;case"repeat-y":repeatx=false;break;case"no-repeat":repeatx=repeaty=false;break;default:break;};var uv=this._temp4Points;var stu=0;var stv=0;var stx=0,sty=0,edx=0,edy=0;if(offsetx<0){stx=x;stu=(-offsetx%texw)/texw;}else{stx=x+offsetx;}
if(offsety<0){sty=y;stv=(-offsety%texh)/texh;}else{sty=y+offsety;}
edx=x+width;edy=y+height;(!repeatx)&&(edx=Math.min(edx,x+offsetx+texw));(!repeaty)&&(edy=Math.min(edy,y+offsety+texh));if(edx<x||edy<y)
return;if(stx>edx||sty>edy)
return;var edu=(edx-x-offsetx)/texw;var edv=(edy-y-offsety)/texh;this.transformQuad(stx,sty,edx-stx,edy-sty,0,this._curMat,this._transedPoints);uv[0]=stu;uv[1]=stv;uv[2]=edu;uv[3]=stv;uv[4]=edu;uv[5]=edv;uv[6]=stu;uv[7]=edv;if(!this.clipedOff(this._transedPoints)){var rgba=this._mixRGBandAlpha(0xffffffff,this._shader2D.ALPHA);this._mesh.addQuad(this._transedPoints,uv,rgba,true);var sv=Value2D.create(0x01,0);sv.defines.add(0x100);(sv).u_TexRange=texuvRect;submit=this._curSubmit=SubmitTexture.create(this,this._mesh,sv);this._submits[this._submits._length++]=submit;this._copyClipInfo(submit,this._globalClipMatrix);submit.shaderValue.textureHost=texture;submit._renderType=10016;this._curSubmit._numEle+=6;this._mesh.indexNum+=6;this._mesh.vertNum+=4;}
this.breakNextMerge();}
__proto.setColorFilter=function(filter){SaveBase.save(this,0x800000,this,true);this._colorFiler=filter;this._curSubmit=Submit.RENDERBASE;}
__proto.drawTexture=function(tex,x,y,width,height){this._drawTextureM(tex,x,y,width,height,null,1,null);}
__proto.drawTextures=function(tex,pos,tx,ty){if(!tex._getSource()){this.sprite&&Laya.systemTimer.callLater(this,this._repaintSprite);return;};var n=pos.length/2;var ipos=0;var bmpid=tex.bitmap.id;for(var i=0;i<n;i++){this._inner_drawTexture(tex,bmpid,pos[ipos++]+tx,pos[ipos++]+ty,0,0,null,null,1.0,false);}}
__proto._drawTextureAddSubmit=function(imgid,tex){var submit=null;submit=SubmitTexture.create(this,this._mesh,Value2D.create(0x01,0));this._submits[this._submits._length++]=submit;submit.shaderValue.textureHost=tex;submit._key.other=imgid;submit._renderType=10016;this._curSubmit=submit;}
__proto._drawTextureM=function(tex,x,y,width,height,m,alpha,uv){var cs=this.sprite;if(!tex._getSource(function(){if(cs){cs.repaint();}})){return false;}
return this._inner_drawTexture(tex,tex.bitmap.id,x,y,width,height,m,uv,alpha,false);}
__proto._drawRenderTexture=function(tex,x,y,width,height,m,alpha,uv){return this._inner_drawTexture(tex,-1,x,y,width,height,m,uv,1.0,false);}
__proto.submitDebugger=function(){this._submits[this._submits._length++]=SubmitCMD.create([],function(){debugger;},this);}
__proto._copyClipInfo=function(submit,clipInfo){var cm=submit.shaderValue.clipMatDir;cm[0]=clipInfo.a;cm[1]=clipInfo.b;cm[2]=clipInfo.c;cm[3]=clipInfo.d;var cmp=submit.shaderValue.clipMatPos;cmp[0]=clipInfo.tx;cmp[1]=clipInfo.ty;submit.clipInfoID=this._clipInfoID;if(this._clipInCache){submit.shaderValue.clipOff[0]=1;}}
__proto.isSameClipInfo=function(submit){return(submit.clipInfoID===this._clipInfoID);}
__proto._useNewTex2DSubmit=function(tex,minVertNum){if(this._mesh.vertNum+minVertNum>65535){this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh);};var submit=SubmitTexture.create(this,this._mesh,Value2D.create(0x01,0));this._submits[this._submits._length++]=this._curSubmit=submit;submit.shaderValue.textureHost=tex;this._copyClipInfo(submit,this._globalClipMatrix);}
__proto._drawTexRect=function(x,y,w,h,uv){this.transformQuad(x,y,w,h,this._italicDeg,this._curMat,this._transedPoints);var ops=this._transedPoints;ops[0]=(ops[0]+0.5)|0;ops[1]=(ops[1]+0.5)|0;ops[2]=(ops[2]+0.5)|0;ops[3]=(ops[3]+0.5)|0;ops[4]=(ops[4]+0.5)|0;ops[5]=(ops[5]+0.5)|0;ops[6]=(ops[6]+0.5)|0;ops[7]=(ops[7]+0.5)|0;if(!this.clipedOff(this._transedPoints)){this._mesh.addQuad(this._transedPoints,uv,this._fillColor,true);this._curSubmit._numEle+=6;this._mesh.indexNum+=6;this._mesh.vertNum+=4;}}
__proto.drawCallOptimize=function(enbale){this._charSubmitCache.enable(enbale,this);return enbale;}
__proto._inner_drawTexture=function(tex,imgid,x,y,width,height,m,uv,alpha,lastRender){var preKey=this._curSubmit._key;uv=uv||tex._uv
if(preKey.submitType===4&&preKey.other===imgid){var tv=this._drawTexToDrawTri_Vert;tv[0]=x;tv[1]=y;tv[2]=x+width,tv[3]=y,tv[4]=x+width,tv[5]=y+height,tv[6]=x,tv[7]=y+height;this._drawTriUseAbsMatrix=true;var tuv=this._tempUV;tuv[0]=uv[0];tuv[1]=uv[1];tuv[2]=uv[2];tuv[3]=uv[3];tuv[4]=uv[4];tuv[5]=uv[5];tuv[6]=uv[6];tuv[7]=uv[7];this.drawTriangles(tex,0,0,tv,tuv,this._drawTexToDrawTri_Index,m,alpha,null,null);this._drawTriUseAbsMatrix=false;return true;};var mesh=this._mesh;var submit=this._curSubmit;var ops=lastRender?this._charSubmitCache.getPos():this._transedPoints;this.transformQuad(x,y,width||tex.width,height||tex.height,this._italicDeg,m||this._curMat,ops);if(this.drawTexAlign){var round=Math.round;ops[0]=round(ops[0]);ops[1]=round(ops[1]);ops[2]=round(ops[2]);ops[3]=round(ops[3]);ops[4]=round(ops[4]);ops[5]=round(ops[5]);ops[6]=round(ops[6]);ops[7]=round(ops[7]);this.drawTexAlign=false;};var rgba=this._mixRGBandAlpha(0xffffffff,this._shader2D.ALPHA*alpha);if(lastRender){this._charSubmitCache.add(this,tex,imgid,ops,uv,rgba);return true;}
this._drawCount++;var sameKey=imgid>=0&&preKey.submitType===2&&preKey.other===imgid;sameKey&&(sameKey=sameKey&&this.isSameClipInfo(submit));this._lastTex=tex;if(mesh.vertNum+4>65535){mesh=this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(mesh);sameKey=false;}{mesh.addQuad(ops,uv,rgba,true);if(!sameKey){this._submits[this._submits._length++]=this._curSubmit=submit=SubmitTexture.create(this,mesh,Value2D.create(0x01,0));submit.shaderValue.textureHost=tex;submit._key.other=imgid;this._copyClipInfo(submit,this._globalClipMatrix);}
submit._numEle+=6;mesh.indexNum+=6;mesh.vertNum+=4;return true;}
return false;}
__proto.transform4Points=function(a,m,out){var tx=m.tx;var ty=m.ty;var ma=m.a;var mb=m.b;var mc=m.c;var md=m.d;var a0=a[0];var a1=a[1];var a2=a[2];var a3=a[3];var a4=a[4];var a5=a[5];var a6=a[6];var a7=a[7];if(m._bTransform){out[0]=a0*ma+a1*mc+tx;out[1]=a0*mb+a1*md+ty;out[2]=a2*ma+a3*mc+tx;out[3]=a2*mb+a3*md+ty;out[4]=a4*ma+a5*mc+tx;out[5]=a4*mb+a5*md+ty;out[6]=a6*ma+a7*mc+tx;out[7]=a6*mb+a7*md+ty;}else{out[0]=a0+tx;out[1]=a1+ty;out[2]=a2+tx;out[3]=a3+ty;out[4]=a4+tx;out[5]=a5+ty;out[6]=a6+tx;out[7]=a7+ty;}}
__proto.clipedOff=function(pt){if(this._clipRect.width<=0||this._clipRect.height<=0)
return true;return false;}
__proto.transformQuad=function(x,y,w,h,italicDeg,m,out){var xoff=0;if(italicDeg!=0){xoff=Math.tan(italicDeg*Math.PI/180)*h;};var maxx=x+w;var maxy=y+h;var tx=m.tx;var ty=m.ty;var ma=m.a;var mb=m.b;var mc=m.c;var md=m.d;var a0=x+xoff;var a1=y;var a2=maxx+xoff;var a3=y;var a4=maxx;var a5=maxy;var a6=x;var a7=maxy;if(m._bTransform){out[0]=a0*ma+a1*mc+tx;out[1]=a0*mb+a1*md+ty;out[2]=a2*ma+a3*mc+tx;out[3]=a2*mb+a3*md+ty;out[4]=a4*ma+a5*mc+tx;out[5]=a4*mb+a5*md+ty;out[6]=a6*ma+a7*mc+tx;out[7]=a6*mb+a7*md+ty;}else{out[0]=a0+tx;out[1]=a1+ty;out[2]=a2+tx;out[3]=a3+ty;out[4]=a4+tx;out[5]=a5+ty;out[6]=a6+tx;out[7]=a7+ty;}}
__proto.pushRT=function(){this.addRenderObject(SubmitCMD.create(null,RenderTexture2D.pushRT,this));}
__proto.popRT=function(){this.addRenderObject(SubmitCMD.create(null,RenderTexture2D.popRT,this));this.breakNextMerge();}
__proto.useRT=function(rt){function _use(rt){if(!rt){throw'error useRT'}else{rt.start();rt.clear(0,0,0,0);}}
this.addRenderObject(SubmitCMD.create([rt],_use,this));this.breakNextMerge();}
__proto.RTRestore=function(rt){function _restore(rt){rt.restore();}
this.addRenderObject(SubmitCMD.create([rt],_restore,this));this.breakNextMerge();}
__proto.breakNextMerge=function(){this._curSubmit=Submit.RENDERBASE;}
__proto._repaintSprite=function(){this.sprite&&this.sprite.repaint();}
__proto.drawTextureWithTransform=function(tex,x,y,width,height,transform,tx,ty,alpha,blendMode,colorfilter){var oldcomp=null;var curMat=this._curMat;if(blendMode){oldcomp=this.globalCompositeOperation;this.globalCompositeOperation=blendMode;};var oldColorFilter=this._colorFiler;if(colorfilter){this.setColorFilter(colorfilter);}
if(!transform){this._drawTextureM(tex,x+tx,y+ty,width,height,curMat,alpha,null);if(blendMode){this.globalCompositeOperation=oldcomp;}
if(colorfilter){this.setColorFilter(oldColorFilter);}
return;};var tmpMat=this._tmpMatrix;tmpMat.a=transform.a;tmpMat.b=transform.b;tmpMat.c=transform.c;tmpMat.d=transform.d;tmpMat.tx=transform.tx+tx;tmpMat.ty=transform.ty+ty;tmpMat._bTransform=transform._bTransform;if(transform&&curMat._bTransform){Matrix.mul(tmpMat,curMat,tmpMat);transform=tmpMat;transform._bTransform=true;}else{tmpMat.tx+=curMat.tx;tmpMat.ty+=curMat.ty;transform=tmpMat;}
this._drawTextureM(tex,x,y,width,height,transform,alpha,null);if(blendMode){this.globalCompositeOperation=oldcomp;}
if(colorfilter){this.setColorFilter(oldColorFilter);}}
__proto._flushToTarget=function(context,target){RenderState2D.worldScissorTest=false;WebGL.mainContext.disable(0x0C11);var preAlpha=RenderState2D.worldAlpha;var preMatrix4=RenderState2D.worldMatrix4;var preMatrix=RenderState2D.worldMatrix;var preShaderDefines=RenderState2D.worldShaderDefines;RenderState2D.worldMatrix=Matrix.EMPTY;RenderState2D.restoreTempArray();RenderState2D.worldMatrix4=RenderState2D.TEMPMAT4_ARRAY;RenderState2D.worldAlpha=1;BaseShader.activeShader=null;target.start();if(context._submits._length>0)
target.clear(0,0,0,0);context._curSubmit=Submit.RENDERBASE;context.flush();context.clear();target.restore();context._curSubmit=Submit.RENDERBASE;BaseShader.activeShader=null;RenderState2D.worldAlpha=preAlpha;RenderState2D.worldMatrix4=preMatrix4;RenderState2D.worldMatrix=preMatrix;}
__proto.drawCanvas=function(canvas,x,y,width,height){if(!canvas)return;var src=canvas.context;var submit;if(src._targets){if(src._submits._length>0){submit=SubmitCMD.create([src,src._targets],this._flushToTarget,this);this._submits[this._submits._length++]=submit;}
this._drawRenderTexture(src._targets,x,y,width,height,null,1.0,RenderTexture2D.flipyuv);this._curSubmit=Submit.RENDERBASE;}else{var canv=canvas;if(canv.touches){(canv.touches).forEach(function(v){v.touch();});}
submit=SubmitCanvas.create(canvas,this._shader2D.ALPHA,this._shader2D.filters);this._submits[this._submits._length++]=submit;(submit)._key.clear();var mat=(submit)._matrix;this._curMat.copyTo(mat);var tx=mat.tx,ty=mat.ty;mat.tx=mat.ty=0;mat.transformPoint(Point.TEMP.setTo(x,y));mat.translate(Point.TEMP.x+tx,Point.TEMP.y+ty);Matrix.mul(canv.invMat,mat,mat);this._curSubmit=Submit.RENDERBASE;}}
__proto.drawTarget=function(rt,x,y,width,height,m,shaderValue,uv,blend){(blend===void 0)&&(blend=-1);this._drawCount++;var rgba=0xffffffff;if(this._mesh.vertNum+4>65535){this._mesh=MeshQuadTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh);}
this.transformQuad(x,y,width,height,0,m||this._curMat,this._transedPoints);if(!this.clipedOff(this._transedPoints)){this._mesh.addQuad(this._transedPoints,uv||Texture.DEF_UV,0xffffffff,true);var submit=this._curSubmit=SubmitTarget.create(this,this._mesh,shaderValue,rt);submit.blendType=(blend==-1)?this._nBlendType:blend;this._copyClipInfo(submit,this._globalClipMatrix);submit._numEle=6;this._mesh.indexNum+=6;this._mesh.vertNum+=4;this._submits[this._submits._length++]=submit;this._curSubmit=Submit.RENDERBASE
return true;}
this._curSubmit=Submit.RENDERBASE
return false;}
__proto.drawTriangles=function(tex,x,y,vertices,uvs,indices,matrix,alpha,color,blendMode){if(!tex._getSource()){if(this.sprite){Laya.systemTimer.callLater(this,this._repaintSprite);}
return;}
this._drawCount++;var tmpMat=this._tmpMatrix;var triMesh=this._triangleMesh;var oldColorFilter=null;var needRestorFilter=false;if(color){oldColorFilter=this._colorFiler;this._colorFiler=color;this._curSubmit=Submit.RENDERBASE;needRestorFilter=oldColorFilter!=color;};var webGLImg=tex.bitmap;var preKey=this._curSubmit._key;var sameKey=preKey.submitType===4&&preKey.other===webGLImg.id&&preKey.blendShader==this._nBlendType;if(triMesh.vertNum+vertices.length/2>65535){triMesh=this._triangleMesh=MeshTexture.getAMesh(this.isMain);this.meshlist.push(triMesh);sameKey=false;}
if(!sameKey){var submit=this._curSubmit=SubmitTexture.create(this,triMesh,Value2D.create(0x01,0));submit.shaderValue.textureHost=tex;submit._renderType=10016;submit._key.submitType=4;submit._key.other=webGLImg.id;this._copyClipInfo(submit,this._globalClipMatrix);this._submits[this._submits._length++]=submit;};var rgba=this._mixRGBandAlpha(0xffffffff,this._shader2D.ALPHA*alpha);if(!this._drawTriUseAbsMatrix){if(!matrix){tmpMat.a=1;tmpMat.b=0;tmpMat.c=0;tmpMat.d=1;tmpMat.tx=x;tmpMat.ty=y;}else{tmpMat.a=matrix.a;tmpMat.b=matrix.b;tmpMat.c=matrix.c;tmpMat.d=matrix.d;tmpMat.tx=matrix.tx+x;tmpMat.ty=matrix.ty+y;}
Matrix.mul(tmpMat,this._curMat,tmpMat);triMesh.addData(vertices,uvs,indices,tmpMat,rgba);}else{triMesh.addData(vertices,uvs,indices,matrix,rgba);}
this._curSubmit._numEle+=indices.length;if(needRestorFilter){this._colorFiler=oldColorFilter;this._curSubmit=Submit.RENDERBASE;}}
__proto.transform=function(a,b,c,d,tx,ty){SaveTransform.save(this);Matrix.mul(Matrix.TEMP.setTo(a,b,c,d,tx,ty),this._curMat,this._curMat);this._curMat._checkTransform();}
__proto._transformByMatrix=function(matrix,tx,ty){matrix.setTranslate(tx,ty);Matrix.mul(matrix,this._curMat,this._curMat);matrix.setTranslate(0,0);this._curMat._bTransform=true;}
__proto.setTransformByMatrix=function(value){value.copyTo(this._curMat);}
__proto.rotate=function(angle){SaveTransform.save(this);this._curMat.rotateEx(angle);}
__proto.scale=function(scaleX,scaleY){SaveTransform.save(this);this._curMat.scaleEx(scaleX,scaleY);}
__proto.clipRect=function(x,y,width,height){SaveClipRect.save(this);if(this._clipRect==Context.MAXCLIPRECT){this._clipRect=new Rectangle(x,y,width,height);}else{this._clipRect.width=width;this._clipRect.height=height;this._clipRect.x=x;this._clipRect.y=y;}
Context._clipID_Gen++;Context._clipID_Gen%=10000;this._clipInfoID=Context._clipID_Gen;var cm=this._globalClipMatrix;var minx=cm.tx;var miny=cm.ty;var maxx=minx+cm.a;var maxy=miny+cm.d;if(this._clipRect.width>=99999999){cm.a=cm.d=99999999;cm.b=cm.c=cm.tx=cm.ty=0;}else{if(this._curMat._bTransform){cm.tx=this._clipRect.x*this._curMat.a+this._clipRect.y*this._curMat.c+this._curMat.tx;cm.ty=this._clipRect.x*this._curMat.b+this._clipRect.y*this._curMat.d+this._curMat.ty;cm.a=this._clipRect.width*this._curMat.a;cm.b=this._clipRect.width*this._curMat.b;cm.c=this._clipRect.height*this._curMat.c;cm.d=this._clipRect.height*this._curMat.d;}else{cm.tx=this._clipRect.x+this._curMat.tx;cm.ty=this._clipRect.y+this._curMat.ty;cm.a=this._clipRect.width;cm.b=cm.c=0;cm.d=this._clipRect.height;}
if(this._incache){this._clipInCache=true;}}
if(cm.a>0&&cm.d>0){var cmaxx=cm.tx+cm.a;var cmaxy=cm.ty+cm.d;if(cmaxx<=minx||cmaxy<=miny||cm.tx>=maxx||cm.ty>=maxy){cm.a=-0.1;cm.d=-0.1;}else{if(cm.tx<minx){cm.a-=(minx-cm.tx);cm.tx=minx;}
if(cmaxx>maxx){cm.a-=(cmaxx-maxx);}
if(cm.ty<miny){cm.d-=(miny-cm.ty);cm.ty=miny;}
if(cmaxy>maxy){cm.d-=(cmaxy-maxy);}
if(cm.a<=0)cm.a=-0.1;if(cm.d<=0)cm.d=-0.1;}}}
__proto.drawMesh=function(x,y,ib,vb,numElement,mat,shader,shaderValues,startIndex){(startIndex===void 0)&&(startIndex=0);;}
__proto.addRenderObject=function(o){this._submits[this._submits._length++]=o;}
__proto.submitElement=function(start,end){var mainCtx=Render._context===this;var renderList=this._submits;var ret=(renderList)._length;end<0&&(end=(renderList)._length);var submit=Submit.RENDERBASE;while(start<end){this._renderNextSubmitIndex=start+1;if(renderList[start]===Submit.RENDERBASE){start++;continue;}
Submit.preRender=submit;submit=renderList[start];start+=submit.renderSubmit();}
return ret;}
__proto.flush=function(){var ret=this.submitElement(0,this._submits._length);this._path&&this._path.reset();SkinMeshBuffer.instance&&SkinMeshBuffer.getInstance().reset();this._curSubmit=Submit.RENDERBASE;for(var i=0,sz=this.meshlist.length;i<sz;i++){var curm=this.meshlist[i];curm.canReuse?(curm.releaseMesh()):(curm.destroy());}
this.meshlist.length=0;this._mesh=MeshQuadTexture.getAMesh(this.isMain);this._pathMesh=MeshVG.getAMesh(this.isMain);this._triangleMesh=MeshTexture.getAMesh(this.isMain);this.meshlist.push(this._mesh,this._pathMesh,this._triangleMesh);this._flushCnt++;if(this._flushCnt%60==0&&Render._context==this){if(TextRender.textRenderInst){TextRender.textRenderInst.GC();}}
return ret;}
__proto.beginPath=function(convex){(convex===void 0)&&(convex=false);var tPath=this._getPath();tPath.beginPath(convex);}
__proto.closePath=function(){this._path.closePath();}
__proto.addPath=function(points,close,convex,dx,dy){var ci=0;for(var i=0,sz=points.length/2;i<sz;i++){var x1=points[ci]+dx,y1=points[ci+1]+dy;points[ci]=x1;points[ci+1]=y1;ci+=2;}
this._getPath().push(points,convex);}
__proto.fill=function(){var m=this._curMat;var tPath=this._getPath();var submit=this._curSubmit;var sameKey=(submit._key.submitType===3&&submit._key.blendShader===this._nBlendType);sameKey&&(sameKey=sameKey&&this.isSameClipInfo(submit));if(!sameKey){this._curSubmit=this.addVGSubmit(this._pathMesh);};var rgba=this.mixRGBandAlpha(this.fillStyle.toInt());var curEleNum=0;var idx;for(var i=0,sz=tPath.paths.length;i<sz;i++){var p=tPath.paths[i];var vertNum=p.path.length/2;if(vertNum<3||(vertNum==3&&!p.convex))
continue;var cpath=p.path.concat();var pi=0;var xp=0,yp=0;var _x=NaN,_y=NaN;if(m._bTransform){for(pi=0;pi<vertNum;pi++){xp=pi<<1;yp=xp+1;_x=cpath[xp];_y=cpath[yp];cpath[xp]=m.a*_x+m.c*_y+m.tx;cpath[yp]=m.b*_x+m.d*_y+m.ty;}}else{for(pi=0;pi<vertNum;pi++){xp=pi<<1;yp=xp+1;_x=cpath[xp];_y=cpath[yp];cpath[xp]=_x+m.tx;cpath[yp]=_y+m.ty;}}
if(this._pathMesh.vertNum+vertNum>65535){this._curSubmit._numEle+=curEleNum;curEleNum=0;this._pathMesh=MeshVG.getAMesh(this.isMain);this._curSubmit=this.addVGSubmit(this._pathMesh);};var curvert=this._pathMesh.vertNum;if(p.convex){var faceNum=vertNum-2;idx=new Array(faceNum*3);var idxpos=0;for(var fi=0;fi<faceNum;fi++){idx[idxpos++]=curvert;idx[idxpos++]=fi+1+curvert;idx[idxpos++]=fi+2+curvert;}}else{idx=Earcut.earcut(cpath,null,2);if(curvert>0){for(var ii=0;ii<idx.length;ii++){idx[ii]+=curvert;}}}
this._pathMesh.addVertAndIBToMesh(this,cpath,rgba,idx);curEleNum+=idx.length;}
this._curSubmit._numEle+=curEleNum;}
__proto.addVGSubmit=function(mesh){var submit=Submit.createShape(this,mesh,0,Value2D.create(0x04,0));submit._key.submitType=3;this._submits[this._submits._length++]=submit;this._copyClipInfo(submit,this._globalClipMatrix);return submit;}
__proto.stroke=function(){if(this.lineWidth>0){var rgba=this.mixRGBandAlpha(this.strokeStyle._color.numColor);var tPath=this._getPath();var submit=this._curSubmit;var sameKey=(submit._key.submitType===3&&submit._key.blendShader===this._nBlendType);sameKey&&(sameKey=sameKey&&this.isSameClipInfo(submit));if(!sameKey){this._curSubmit=this.addVGSubmit(this._pathMesh);};var curEleNum=0;for(var i=0,sz=tPath.paths.length;i<sz;i++){var p=tPath.paths[i];if(p.path.length<=0)
continue;var idx=[];var vertex=[];var maxVertexNum=p.path.length*2;if(maxVertexNum<2)
continue;if(this._pathMesh.vertNum+maxVertexNum>65535){this._curSubmit._numEle+=curEleNum;curEleNum=0;this._pathMesh=MeshVG.getAMesh(this.isMain);this.meshlist.push(this._pathMesh);this._curSubmit=this.addVGSubmit(this._pathMesh);}
BasePoly.createLine2(p.path,idx,this.lineWidth,this._pathMesh.vertNum,vertex,p.loop);var ptnum=vertex.length/2;var m=this._curMat;var pi=0;var xp=0,yp=0;var _x=NaN,_y=NaN;if(m._bTransform){for(pi=0;pi<ptnum;pi++){xp=pi<<1;yp=xp+1;_x=vertex[xp];_y=vertex[yp];vertex[xp]=m.a*_x+m.c*_y+m.tx;vertex[yp]=m.b*_x+m.d*_y+m.ty;}}else{for(pi=0;pi<ptnum;pi++){xp=pi<<1;yp=xp+1;_x=vertex[xp];_y=vertex[yp];vertex[xp]=_x+m.tx;vertex[yp]=_y+m.ty;}}
this._pathMesh.addVertAndIBToMesh(this,vertex,rgba,idx);curEleNum+=idx.length;}
this._curSubmit._numEle+=curEleNum;}}
__proto.moveTo=function(x,y){var tPath=this._getPath();tPath.newPath();tPath._lastOriX=x;tPath._lastOriY=y;tPath.addPoint(x,y);}
__proto.lineTo=function(x,y){var tPath=this._getPath();if(Math.abs(x-tPath._lastOriX)<1e-3&&Math.abs(y-tPath._lastOriY)<1e-3)
return;tPath._lastOriX=x;tPath._lastOriY=y;tPath.addPoint(x,y);}
__proto.arcTo=function(x1,y1,x2,y2,r){var i=0;var x=0,y=0;var dx=this._path._lastOriX-x1;var dy=this._path._lastOriY-y1;var len1=Math.sqrt(dx*dx+dy*dy);if(len1<=0.000001){return;};var ndx=dx/len1;var ndy=dy/len1;var dx2=x2-x1;var dy2=y2-y1;var len22=dx2*dx2+dy2*dy2;var len2=Math.sqrt(len22);if(len2<=0.000001){return;};var ndx2=dx2/len2;var ndy2=dy2/len2;var odx=ndx+ndx2;var ody=ndy+ndy2;var olen=Math.sqrt(odx*odx+ody*ody);if(olen<=0.000001){return;};var nOdx=odx/olen;var nOdy=ody/olen;var alpha=Math.acos(nOdx*ndx+nOdy*ndy);var halfAng=Math.PI/2-alpha;len1=r/Math.tan(halfAng);var ptx1=len1*ndx+x1;var pty1=len1*ndy+y1;var orilen=Math.sqrt(len1*len1+r*r);var orix=x1+nOdx*orilen;var oriy=y1+nOdy*orilen;var ptx2=len1*ndx2+x1;var pty2=len1*ndy2+y1;var dir=ndx*ndy2-ndy*ndx2;var fChgAng=0;var sinx=0.0;var cosx=0.0;if(dir>=0){fChgAng=halfAng*2;var fda=fChgAng/Context.SEGNUM;sinx=Math.sin(fda);cosx=Math.cos(fda);}else{fChgAng=-halfAng*2;fda=fChgAng/Context.SEGNUM;sinx=Math.sin(fda);cosx=Math.cos(fda);};var lastx=this._path._lastOriX,lasty=this._path._lastOriY;var _x1=ptx1,_y1=pty1;if(Math.abs(_x1-this._path._lastOriX)>0.1||Math.abs(_y1-this._path._lastOriY)>0.1){x=_x1;y=_y1;lastx=_x1;lasty=_y1;this._path.addPoint(x,y);};var cvx=ptx1-orix;var cvy=pty1-oriy;var tx=0.0;var ty=0.0;for(i=0;i<Context.SEGNUM;i++){var cx=cvx*cosx+cvy*sinx;var cy=-cvx*sinx+cvy*cosx;x=cx+orix;y=cy+oriy;if(Math.abs(lastx-x)>0.1||Math.abs(lasty-y)>0.1){this._path.addPoint(x,y);lastx=x;lasty=y;}
cvx=cx;cvy=cy;}}
__proto.arc=function(cx,cy,r,startAngle,endAngle,counterclockwise,b){(counterclockwise===void 0)&&(counterclockwise=false);(b===void 0)&&(b=true);var a=0,da=0,hda=0,kappa=0;var dx=0,dy=0,x=0,y=0,tanx=0,tany=0;var px=0,py=0,ptanx=0,ptany=0;var i=0,ndivs=0,nvals=0;da=endAngle-startAngle;if(!counterclockwise){if(Math.abs(da)>=Math.PI*2){da=Math.PI*2;}else{while(da<0.0){da+=Math.PI*2;}}}else{if(Math.abs(da)>=Math.PI*2){da=-Math.PI*2;}else{while(da>0.0){da-=Math.PI*2;}}};var sx=this.getMatScaleX();var sy=this.getMatScaleY();var sr=r*(sx>sy?sx:sy);var cl=2*Math.PI*sr;ndivs=(Math.max(cl/10,10))|0;hda=(da/ndivs)/2.0;kappa=Math.abs(4/3*(1-Math.cos(hda))/Math.sin(hda));if(counterclockwise)
kappa=-kappa;nvals=0;var tPath=this._getPath();var _x1=NaN,_y1=NaN;for(i=0;i<=ndivs;i++){a=startAngle+da*(i/ndivs);dx=Math.cos(a);dy=Math.sin(a);x=cx+dx*r;y=cy+dy*r;if(x!=this._path._lastOriX||y!=this._path._lastOriY){tPath.addPoint(x,y);}}
dx=Math.cos(endAngle);dy=Math.sin(endAngle);x=cx+dx*r;y=cy+dy*r;if(x!=this._path._lastOriX||y!=this._path._lastOriY){tPath.addPoint(x,y);}}
__proto.quadraticCurveTo=function(cpx,cpy,x,y){var tBezier=Bezier.I;var tResultArray=[];var tArray=tBezier.getBezierPoints([this._path._lastOriX,this._path._lastOriY,cpx,cpy,x,y],30,2);for(var i=0,n=tArray.length/2;i<n;i++){this.lineTo(tArray[i*2],tArray[i*2+1]);}
this.lineTo(x,y);}
__proto.mixRGBandAlpha=function(color){return this._mixRGBandAlpha(color,this._shader2D.ALPHA);}
__proto._mixRGBandAlpha=function(color,alpha){if(alpha>=1){return color;};var a=((color&0xff000000)>>>24);if(a!=0){a*=alpha;}else{a=alpha*255;}
return(color&0x00ffffff)|(a<<24);}
__proto.strokeRect=function(x,y,width,height,parameterLineWidth){var tW=parameterLineWidth*0.5;if(this.lineWidth>0){var rgba=this.mixRGBandAlpha(this.strokeStyle._color.numColor);var hw=this.lineWidth/2;this._fillRect(x-hw,y-hw,width+this.lineWidth,this.lineWidth,rgba);this._fillRect(x-hw,y-hw+height,width+this.lineWidth,this.lineWidth,rgba);this._fillRect(x-hw,y+hw,this.lineWidth,height-this.lineWidth,rgba);this._fillRect(x-hw+width,y+hw,this.lineWidth,height-this.lineWidth,rgba);}}
__proto.clip=function(){}
__proto.drawParticle=function(x,y,pt){pt.x=x;pt.y=y;this._submits[this._submits._length++]=pt;}
__proto._getPath=function(){return this._path||(this._path=new Path());}
__proto._fillTexture_h=function(tex,imgid,uv,oriw,orih,x,y,w){var stx=x;var num=Math.floor(w/oriw);var left=w%oriw;for(var i=0;i<num;i++){this._inner_drawTexture(tex,imgid,stx,y,oriw,orih,this._curMat,uv,1,false);stx+=oriw;}
if(left>0){var du=uv[2]-uv[0];var uvr=uv[0]+du*(left/oriw);var tuv=Context.tmpuv1;tuv[0]=uv[0];tuv[1]=uv[1];tuv[2]=uvr;tuv[3]=uv[3];tuv[4]=uvr;tuv[5]=uv[5];tuv[6]=uv[6];tuv[7]=uv[7];this._inner_drawTexture(tex,imgid,stx,y,left,orih,this._curMat,tuv,1,false);}}
__proto._fillTexture_v=function(tex,imgid,uv,oriw,orih,x,y,h){var sty=y;var num=Math.floor(h/orih);var left=h%orih;for(var i=0;i<num;i++){this._inner_drawTexture(tex,imgid,x,sty,oriw,orih,this._curMat,uv,1,false);sty+=orih;}
if(left>0){var dv=uv[7]-uv[1];var uvb=uv[1]+dv*(left/orih);var tuv=Context.tmpuv1;tuv[0]=uv[0];tuv[1]=uv[1];tuv[2]=uv[2];tuv[3]=uv[3];tuv[4]=uv[4];tuv[5]=uvb;tuv[6]=uv[6];tuv[7]=uvb;this._inner_drawTexture(tex,imgid,x,sty,oriw,left,this._curMat,tuv,1,false);}}
__proto.drawTextureWithSizeGrid=function(tex,tx,ty,width,height,sizeGrid,gx,gy){if(!tex._getSource())
return;tx+=gx;ty+=gy;var uv=tex.uv,w=tex.bitmap.width,h=tex.bitmap.height;var top=sizeGrid[0];var left=sizeGrid[3];var d_top=top/h;var d_left=left/w;var right=sizeGrid[1];var bottom=sizeGrid[2];var d_right=right/w;var d_bottom=bottom/h;var repeat=sizeGrid[4];var needClip=false;if(width==w){left=right=0;}
if(height==h){top=bottom=0;}
if(left+right>width){var clipWidth=width;needClip=true;width=left+right;this.save();this.clipRect(0+tx,0+ty,clipWidth,height);};var imgid=tex.bitmap.id;var mat=this._curMat;var tuv=this._tempUV;var uvl=uv[0];var uvt=uv[1];var uvr=uv[4];var uvb=uv[5];var uvl_=uvl;var uvt_=uvt;var uvr_=uvr;var uvb_=uvb;if(left&&top){uvr_=uvl+d_left;uvb_=uvt+d_top;tuv[0]=uvl,tuv[1]=uvt,tuv[2]=uvr_,tuv[3]=uvt,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl,tuv[7]=uvb_;this._inner_drawTexture(tex,imgid,tx,ty,left,top,mat,tuv,1,false);}
if(right&&top){uvl_=uvr-d_right;uvt_=uvt;uvr_=uvr;uvb_=uvt+d_top;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;this._inner_drawTexture(tex,imgid,width-right+tx,0+ty,right,top,mat,tuv,1,false);}
if(left&&bottom){uvl_=uvl;uvt_=uvb-d_bottom;uvr_=uvl+d_left;uvb_=uvb;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;this._inner_drawTexture(tex,imgid,0+tx,height-bottom+ty,left,bottom,mat,tuv,1,false);}
if(right&&bottom){uvl_=uvr-d_right;uvt_=uvb-d_bottom;uvr_=uvr;uvb_=uvb;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;this._inner_drawTexture(tex,imgid,width-right+tx,height-bottom+ty,right,bottom,mat,tuv,1,false);}
if(top){uvl_=uvl+d_left;uvt_=uvt;uvr_=uvr-d_right;uvb_=uvt+d_top;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;if(repeat){this._fillTexture_h(tex,imgid,tuv,tex.width-left-right,top,left+tx,ty,width-left-right);}else{this._inner_drawTexture(tex,imgid,left+tx,ty,width-left-right,top,mat,tuv,1,false);}}
if(bottom){uvl_=uvl+d_left;uvt_=uvb-d_bottom;uvr_=uvr-d_right;uvb_=uvb;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;if(repeat){this._fillTexture_h(tex,imgid,tuv,tex.width-left-right,bottom,left+tx,height-bottom+ty,width-left-right);}else{this._inner_drawTexture(tex,imgid,left+tx,height-bottom+ty,width-left-right,bottom,mat,tuv,1,false);}}
if(left){uvl_=uvl;uvt_=uvt+d_top;uvr_=uvl+d_left;uvb_=uvb-d_bottom;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;if(repeat){this._fillTexture_v(tex,imgid,tuv,left,tex.height-top-bottom,tx,top+ty,height-top-bottom);}else{this._inner_drawTexture(tex,imgid,tx,top+ty,left,height-top-bottom,mat,tuv,1,false);}}
if(right){uvl_=uvr-d_right;uvt_=uvt+d_top;uvr_=uvr;uvb_=uvb-d_bottom;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;if(repeat){this._fillTexture_v(tex,imgid,tuv,right,tex.height-top-bottom,width-right+tx,top+ty,height-top-bottom);}else{this._inner_drawTexture(tex,imgid,width-right+tx,top+ty,right,height-top-bottom,mat,tuv,1,false);}}
uvl_=uvl+d_left;uvt_=uvt+d_top;uvr_=uvr-d_right;uvb_=uvb-d_bottom;tuv[0]=uvl_,tuv[1]=uvt_,tuv[2]=uvr_,tuv[3]=uvt_,tuv[4]=uvr_,tuv[5]=uvb_,tuv[6]=uvl_,tuv[7]=uvb_;if(repeat){var tuvr=Context.tmpUVRect;tuvr[0]=uvl_;tuvr[1]=uvt_;tuvr[2]=uvr_-uvl_;tuvr[3]=uvb_-uvt_;this._fillTexture(tex,tex.width-left-right,tex.height-top-bottom,tuvr,left+tx,top+ty,width-left-right,height-top-bottom,'repeat',0,0);}else{this._inner_drawTexture(tex,imgid,left+tx,top+ty,width-left-right,height-top-bottom,mat,tuv,1,false);}
if(needClip)this.restore();}
__getset(0,__proto,'textAlign',function(){return this._other.textAlign;},function(value){(this._other.textAlign===value)||(this._other=this._other.make(),SaveBase.save(this,0x8000,this._other,false),this._other.textAlign=value);});__getset(0,__proto,'lineJoin',function(){return null;},function(value){});__getset(0,__proto,'fillStyle',function(){return this._shader2D.fillStyle;},function(value){if(!this._shader2D.fillStyle.equal(value)){SaveBase.save(this,0x2,this._shader2D,false);this._shader2D.fillStyle=DrawStyle.create(value);this._submitKey.other=-this._shader2D.fillStyle.toInt();}});__getset(0,__proto,'lineCap',function(){return null;},function(value){});__getset(0,__proto,'miterLimit',function(){return null;},function(value){});__getset(0,__proto,'strokeStyle',function(){return this._shader2D.strokeStyle;},function(value){this._shader2D.strokeStyle.equal(value)||(SaveBase.save(this,0x200,this._shader2D,false),this._shader2D.strokeStyle=DrawStyle.create(value),this._submitKey.other=-this._shader2D.strokeStyle.toInt());});__getset(0,__proto,'globalCompositeOperation',function(){return BlendMode.NAMES[this._nBlendType];},function(value){var n=BlendMode.TOINT[value];n==null||(this._nBlendType===n)||(SaveBase.save(this,0x10000,this,true),this._curSubmit=Submit.RENDERBASE,this._nBlendType=n);});__getset(0,__proto,'globalAlpha',function(){return this._shader2D.ALPHA;},function(value){value=Math.floor(value*1000)/1000;if(value!=this._shader2D.ALPHA){SaveBase.save(this,0x1,this._shader2D,false);this._shader2D.ALPHA=value;}});__getset(0,__proto,'asBitmap',null,function(value){if(value){this._targets||(this._targets=new RenderTexture2D(this._width,this._height,1,-1));if(!this._width||!this._height)
throw Error("asBitmap no size!");}else{this._targets&&this._targets.destroy();this._targets=null;}});__getset(0,__proto,'textBaseline',function(){return this._other.textBaseline;},function(value){(this._other.textBaseline===value)||(this._other=this._other.make(),SaveBase.save(this,0x4000,this._other,false),this._other.textBaseline=value);});__getset(0,__proto,'lineWidth',function(){return this._other.lineWidth;},function(value){(this._other.lineWidth===value)||(this._other=this._other.make(),SaveBase.save(this,0x100,this._other,false),this._other.lineWidth=value);});__getset(0,__proto,'font',null,function(str){this._other=this._other.make();SaveBase.save(this,0x8,this._other,false);});__getset(0,__proto,'canvas',function(){return this._canvas;});Context.__init__=function(){Context.MAXCLIPRECT=new Rectangle(0,0,99999999,99999999);ContextParams.DEFAULT=new ContextParams();WebGLCacheAsNormalCanvas;}
Context.set2DRenderConfig=function(){var gl=LayaGL.instance;WebGLContext.setBlend(gl,true);WebGLContext.setBlendFunc(gl,1,0x0303);WebGLContext.setDepthTest(gl,false);WebGLContext.setCullFace(gl,false);WebGLContext.setDepthMask(gl,true);WebGLContext.setFrontFace(gl,0x0901);gl.viewport(0,0,RenderState2D.width,RenderState2D.height);}
Context.ENUM_TEXTALIGN_DEFAULT=0;Context.ENUM_TEXTALIGN_CENTER=1;Context.ENUM_TEXTALIGN_RIGHT=2;Context._SUBMITVBSIZE=32000;Context._MAXSIZE=99999999;Context._MAXVERTNUM=65535;Context.MAXCLIPRECT=null;Context._COUNT=0;Context.SEGNUM=32;Context._contextcount=0;Context.PI2=2*Math.PI;Context._clipID_Gen=0;__static(Context,['_textRender',function(){return this._textRender=new TextRender();},'tmpuv1',function(){return this.tmpuv1=[0,0,0,0,0,0,0,0];},'tmpUV',function(){return this.tmpUV=[0,0,0,0,0,0,0,0];},'tmpUVRect',function(){return this.tmpUVRect=[0,0,0,0];}]);Context.__init$=function(){ContextParams=(function(){function ContextParams(){this.lineWidth=1;this.textAlign=null;this.textBaseline=null;}
__class(ContextParams,'');var __proto=ContextParams.prototype;__proto.clear=function(){this.lineWidth=1;this.textAlign=this.textBaseline=null;}
__proto.make=function(){return this===ContextParams.DEFAULT?new ContextParams():this;}
ContextParams.DEFAULT=null;return ContextParams;})()}
return Context;})()
var BlurFilterGLRender=(function(){function BlurFilterGLRender(){}
__class(BlurFilterGLRender,'laya.filters.BlurFilterGLRender');var __proto=BlurFilterGLRender.prototype;__proto.render=function(rt,ctx,width,height,filter){var shaderValue=Value2D.create(0x01,0);this.setShaderInfo(shaderValue,filter,rt.width,rt.height);ctx.drawTarget(rt,0,0,width,height,Matrix.EMPTY.identity(),shaderValue);}
__proto.setShaderInfo=function(shader,filter,w,h){shader.defines.add(0x10);var sv=shader;BlurFilterGLRender.blurinfo[0]=w;BlurFilterGLRender.blurinfo[1]=h;sv.blurInfo=BlurFilterGLRender.blurinfo;var sigma=filter.strength/3.0;var sigma2=sigma*sigma;filter.strength_sig2_2sig2_gauss1[0]=filter.strength;filter.strength_sig2_2sig2_gauss1[1]=sigma2;filter.strength_sig2_2sig2_gauss1[2]=2.0*sigma2;filter.strength_sig2_2sig2_gauss1[3]=1.0/(2.0*Math.PI*sigma2);sv.strength_sig2_2sig2_gauss1=filter.strength_sig2_2sig2_gauss1;}
__static(BlurFilterGLRender,['blurinfo',function(){return this.blurinfo=new Array(2);}]);return BlurFilterGLRender;})()
var CONST3D2D=(function(){function CONST3D2D(){}
__class(CONST3D2D,'laya.webgl.utils.CONST3D2D');CONST3D2D.BYTES_PE=4;CONST3D2D.BYTES_PIDX=2;CONST3D2D.defaultMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];CONST3D2D.defaultMinusYMatrix4=[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1];CONST3D2D.uniformMatrix3=[1,0,0,0,0,1,0,0,0,0,1,0];CONST3D2D._TMPARRAY=[];CONST3D2D._OFFSETX=0;CONST3D2D._OFFSETY=0;return CONST3D2D;})()
var CharRenderInfo=(function(){function CharRenderInfo(){this.char='';this.tex=null;this.deleted=false;this.pos=0;this.width=0;this.height=0;this.bmpWidth=0;this.bmpHeight=0;this.orix=0;this.oriy=0;this.touchTick=0;this.isSpace=false;this.uv=new Array(8);}
__class(CharRenderInfo,'laya.webgl.text.CharRenderInfo');var __proto=CharRenderInfo.prototype;__proto.touch=function(){var curLoop=Stat.loopCount;if(this.touchTick!=curLoop){this.tex.touchRect(this,curLoop);}
this.touchTick=curLoop;}
return CharRenderInfo;})()
var QuickTestTool=(function(){function QuickTestTool(){this._renderType=0;this._repaint=0;this._x=NaN;this._y=NaN;}
__class(QuickTestTool,'laya.layagl.QuickTestTool');var __proto=QuickTestTool.prototype;__proto.render=function(context,x,y){QuickTestTool._addType(this._renderType);QuickTestTool.showRenderTypeInfo(this._renderType);RenderSprite.renders[this._renderType]._fun(this,context,x+this._x,y+this._y);this._repaint=0;}
__proto._stageRender=function(context,x,y){QuickTestTool._countStart();QuickTestTool._PreStageRender.call(Laya.stage,context,x,y);QuickTestTool._countEnd();}
QuickTestTool.getMCDName=function(type){return QuickTestTool._typeToNameDic[type];}
QuickTestTool.showRenderTypeInfo=function(type,force){(force===void 0)&&(force=false);if(!force&&QuickTestTool.showedDic[type])
return;QuickTestTool.showedDic[type]=true;if(!QuickTestTool._rendertypeToStrDic[type]){var arr=[];var tType=0;tType=1;while(tType<=type){if(tType&type){arr.push(QuickTestTool.getMCDName(tType&type));}
tType=tType<<1;}
QuickTestTool._rendertypeToStrDic[type]=arr.join(",");}
console.log("cmd:",QuickTestTool._rendertypeToStrDic[type]);}
QuickTestTool.__init__=function(){QuickTestTool._typeToNameDic[0x01]="ALPHA";QuickTestTool._typeToNameDic[0x02]="TRANSFORM";QuickTestTool._typeToNameDic[0x100]="TEXTURE";QuickTestTool._typeToNameDic[0x200]="GRAPHICS";QuickTestTool._typeToNameDic[0x1000]="ONECHILD";QuickTestTool._typeToNameDic[0x2000]="CHILDS";QuickTestTool._typeToNameDic[0x02|0x01]="TRANSFORM|ALPHA";QuickTestTool._typeToNameDic[0x08]="CANVAS";QuickTestTool._typeToNameDic[0x04]="BLEND";QuickTestTool._typeToNameDic[0x10]="FILTERS";QuickTestTool._typeToNameDic[0x20]="MASK";QuickTestTool._typeToNameDic[0x40]="CLIP";QuickTestTool._typeToNameDic[0x400]="LAYAGL3D";}
QuickTestTool._countStart=function(){var key;for(key in QuickTestTool._countDic){QuickTestTool._countDic[key]=0;}}
QuickTestTool._countEnd=function(){QuickTestTool._i++;if(QuickTestTool._i>60){QuickTestTool.showCountInfo();QuickTestTool._i=0;}}
QuickTestTool._addType=function(type){if(!QuickTestTool._countDic[type]){QuickTestTool._countDic[type]=1;}else{QuickTestTool._countDic[type]+=1;}}
QuickTestTool.showCountInfo=function(){console.log("===================");var key;for(key in QuickTestTool._countDic){console.log("count:"+QuickTestTool._countDic[key]);QuickTestTool.showRenderTypeInfo(key,true);}}
QuickTestTool.enableQuickTest=function(){QuickTestTool.__init__();Sprite["prototype"]["render"]=QuickTestTool["prototype"]["render"];QuickTestTool._PreStageRender=Stage["prototype"]["render"];Stage["prototype"]["render"]=QuickTestTool["prototype"]["_stageRender"];}
QuickTestTool.showedDic={};QuickTestTool._rendertypeToStrDic={};QuickTestTool._typeToNameDic={};QuickTestTool._PreStageRender=null;QuickTestTool._countDic={};QuickTestTool._i=0;return QuickTestTool;})()
var RenderState2D=(function(){function RenderState2D(){}
__class(RenderState2D,'laya.webgl.utils.RenderState2D');RenderState2D.mat2MatArray=function(mat,matArray){var m=mat;var m4=matArray;m4[0]=m.a;m4[1]=m.b;m4[2]=RenderState2D.EMPTYMAT4_ARRAY[2];m4[3]=RenderState2D.EMPTYMAT4_ARRAY[3];m4[4]=m.c;m4[5]=m.d;m4[6]=RenderState2D.EMPTYMAT4_ARRAY[6];m4[7]=RenderState2D.EMPTYMAT4_ARRAY[7];m4[8]=RenderState2D.EMPTYMAT4_ARRAY[8];m4[9]=RenderState2D.EMPTYMAT4_ARRAY[9];m4[10]=RenderState2D.EMPTYMAT4_ARRAY[10];m4[11]=RenderState2D.EMPTYMAT4_ARRAY[11];m4[12]=m.tx;m4[13]=m.ty;m4[14]=RenderState2D.EMPTYMAT4_ARRAY[14];m4[15]=RenderState2D.EMPTYMAT4_ARRAY[15];return matArray;}
RenderState2D.restoreTempArray=function(){RenderState2D.TEMPMAT4_ARRAY[0]=1;RenderState2D.TEMPMAT4_ARRAY[1]=0;RenderState2D.TEMPMAT4_ARRAY[4]=0;RenderState2D.TEMPMAT4_ARRAY[5]=1;RenderState2D.TEMPMAT4_ARRAY[12]=0;RenderState2D.TEMPMAT4_ARRAY[13]=0;}
RenderState2D.clear=function(){RenderState2D.worldScissorTest=false;RenderState2D.worldAlpha=1;}
RenderState2D._MAXSIZE=99999999;RenderState2D.EMPTYMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];RenderState2D.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];RenderState2D.worldMatrix4=RenderState2D.TEMPMAT4_ARRAY;RenderState2D.matWVP=null;RenderState2D.worldAlpha=1.0;RenderState2D.worldScissorTest=false;RenderState2D.worldShaderDefines=null;RenderState2D.worldFilters=null;RenderState2D.width=0;RenderState2D.height=0;__static(RenderState2D,['worldMatrix',function(){return this.worldMatrix=new Matrix();}]);return RenderState2D;})()
var SceneUtils=(function(){var DataWatcher,InitTool;function SceneUtils(){}
__class(SceneUtils,'laya.utils.SceneUtils');SceneUtils.getBindFun=function(value){var fun=SceneUtils._funMap.get(value);if(fun==null){var temp="\""+value+"\"";temp=temp.replace(/^"\${|}"$/g,"").replace(/\${/g,"\"+").replace(/}/g,"+\"");var str="(function(data){if(data==null)return;with(data){try{\nreturn "+temp+"\n}catch(e){}}})";fun=Laya._runScript(str);SceneUtils._funMap.set(value,fun);}
return fun;}
SceneUtils.createByData=function(root,uiView){var tInitTool=InitTool.create();root=SceneUtils.createComp(uiView,root,root,null,tInitTool);root._setBit(0x08,true);if(root.hasOwnProperty("_idMap")){root["_idMap"]=tInitTool._idMap;}
if(uiView.animations){var anilist=[];var animations=uiView.animations;var i=0,len=animations.length;var tAni;var tAniO;for(i=0;i<len;i++){tAni=new FrameAnimation();tAniO=animations[i];tAni._setUp(tInitTool._idMap,tAniO);root[tAniO.name]=tAni;tAni._setControlNode(root);switch(tAniO.action){case 1:tAni.play(0,false);break;case 2:tAni.play(0,true);break;}
anilist.push(tAni);}
root._aniList=anilist;}
if(root._$componentType==="Scene"&&root._width>0&&uiView.props.hitTestPrior==null&&!root.mouseThrough)
root.hitTestPrior=true;tInitTool.beginLoad(root);return root;}
SceneUtils.createInitTool=function(){return InitTool.create();}
SceneUtils.createComp=function(uiView,comp,view,dataMap,initTool){if(uiView.type=="Scene3D"||uiView.type=="Sprite3D"){var outBatchSprits=[];var scene3D=Laya["Utils3D"]._createSceneByJsonForMaker(uiView,outBatchSprits,initTool);if(uiView.type=="Sprite3D")
Laya["StaticBatchManager"].combine(scene3D,outBatchSprits);else
Laya["StaticBatchManager"].combine(null,outBatchSprits);return scene3D;}
comp=comp||SceneUtils.getCompInstance(uiView);if(!comp){if(uiView.props&&uiView.props.runtime)
console.warn("runtime not found:"+uiView.props.runtime);else
console.warn("can not create:"+uiView.type);return null;};var child=uiView.child;if(child){var isList=comp["_$componentType"]=="List";for(var i=0,n=child.length;i<n;i++){var node=child[i];if(comp.hasOwnProperty("itemRender")&&(node.props.name=="render"||node.props.renderType==="render")){comp["itemRender"]=node;}else if(node.type=="Graphic"){ClassUtils._addGraphicsToSprite(node,comp);}else if(ClassUtils._isDrawType(node.type)){ClassUtils._addGraphicToSprite(node,comp,true);}else{if(isList){var arr=[];var tChild=SceneUtils.createComp(node,null,view,arr,initTool);if(arr.length)
tChild["_$bindData"]=arr;}else{tChild=SceneUtils.createComp(node,null,view,dataMap,initTool);}
if(node.type=="Script"){if((tChild instanceof laya.components.Component)){comp._addComponentInstance(tChild);}else{if("owner"in tChild){tChild["owner"]=comp;}else if("target"in tChild){tChild["target"]=comp;}}}else if(node.props.renderType=="mask"||node.props.name=="mask"){comp.mask=tChild;}else{(tChild instanceof laya.display.Node)&&comp.addChild(tChild);}}}};var props=uiView.props;for(var prop in props){var value=props[prop];if((typeof value=='string')&&(value.indexOf("@node:")>=0||value.indexOf("@Prefab:")>=0)){if(initTool){initTool.addNodeRef(comp,prop,value);}}else
SceneUtils.setCompValue(comp,prop,value,view,dataMap);}
if(comp._afterInited){comp._afterInited();}
if(uiView.compId&&initTool&&initTool._idMap){initTool._idMap[uiView.compId]=comp;}
return comp;}
SceneUtils.setCompValue=function(comp,prop,value,view,dataMap){if((typeof value=='string')&&value.indexOf("${")>-1){SceneUtils._sheet||(SceneUtils._sheet=ClassUtils.getClass("laya.data.Table"));if(!SceneUtils._sheet){console.warn("Can not find class Sheet");return;}
if(dataMap){dataMap.push(comp,prop,value);}else if(view){if(value.indexOf("].")==-1){value=value.replace(".","[0].");};var watcher=new DataWatcher(comp,prop,value);watcher.exe(view);var one,temp;var str=value.replace(/\[.*?\]\./g,".");while((one=SceneUtils._parseWatchData.exec(str))!=null){var key1=one[1];while((temp=SceneUtils._parseKeyWord.exec(key1))!=null){var key2=temp[0];var arr=(view._watchMap[key2]||(view._watchMap[key2]=[]));arr.push(watcher);SceneUtils._sheet.I.notifer.on(key2,view,view.changeData,[key2]);}
arr=(view._watchMap[key1]||(view._watchMap[key1]=[]));arr.push(watcher);SceneUtils._sheet.I.notifer.on(key1,view,view.changeData,[key1]);}}
return;}
if(prop==="var"&&view){view[value]=comp;}else{comp[prop]=(value==="true"?true:(value==="false"?false:value));}}
SceneUtils.getCompInstance=function(json){if(json.type=="UIView"){if(json.props&&json.props.pageData){return SceneUtils.createByData(null,json.props.pageData);}};var runtime=(json.props&&json.props.runtime)||json.type;var compClass=ClassUtils.getClass(runtime);if(!compClass)throw"Can not find class "+runtime;if(json.type==="Script"&&compClass.prototype._doAwake){var comp=Pool.createByClass(compClass);comp._destroyed=false;return comp;}
if(json.props&&json.props.hasOwnProperty("renderType")&&json.props["renderType"]=="instance"){if(!compClass["instance"])compClass["instance"]=new compClass();return compClass["instance"];}
return new compClass();}
SceneUtils._sheet=null;__static(SceneUtils,['_funMap',function(){return this._funMap=new WeakObject();},'_parseWatchData',function(){return this._parseWatchData=/\${(.*?)}/g;},'_parseKeyWord',function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;}]);SceneUtils.__init$=function(){DataWatcher=(function(){function DataWatcher(comp,prop,value){this.comp=null;this.prop=null;this.value=null;this.comp=comp;this.prop=prop;this.value=value;}
__class(DataWatcher,'');var __proto=DataWatcher.prototype;__proto.exe=function(view){var fun=SceneUtils.getBindFun(this.value);this.comp[this.prop]=fun.call(this,view);}
return DataWatcher;})()
InitTool=(function(){function InitTool(){this._nodeRefList=null;this._initList=null;this._loadList=null;this._idMap=null;this._scene=null;}
__class(InitTool,'');var __proto=InitTool.prototype;__proto.reset=function(){this._nodeRefList=null;this._initList=null;this._idMap=null;this._loadList=null;this._scene=null;}
__proto.recover=function(){this.reset();Pool.recover("InitTool",this);}
__proto.addLoadRes=function(url,type){if(!this._loadList)this._loadList=[];if(!type){this._loadList.push(url);}else{this._loadList.push({url:url,type:type});}}
__proto.addNodeRef=function(node,prop,referStr){if(!this._nodeRefList)this._nodeRefList=[];this._nodeRefList.push([node,prop,referStr]);if(referStr.indexOf("@Prefab:")>=0){this.addLoadRes(referStr.replace("@Prefab:",""),"prefab");}}
__proto.setNodeRef=function(){if(!this._nodeRefList)return;if(!this._idMap){this._nodeRefList=null;return;};var i=0,len=0;len=this._nodeRefList.length;var tRefInfo;for(i=0;i<len;i++){tRefInfo=this._nodeRefList[i];tRefInfo[0][tRefInfo[1]]=this.getReferData(tRefInfo[2]);}
this._nodeRefList=null;}
__proto.getReferData=function(referStr){if(referStr.indexOf("@Prefab:")>=0){var prefab;prefab=Loader.getRes(referStr.replace("@Prefab:",""));return prefab;}else if(referStr.indexOf("@arr:")>=0){referStr=referStr.replace("@arr:","");var list;list=referStr.split(",");var i=0,len=0;var tStr;len=list.length;for(i=0;i<len;i++){tStr=list[i];if(tStr){list[i]=this._idMap[tStr.replace("@node:","")];}else{list[i]=null;}}
return list;}else{return this._idMap[referStr.replace("@node:","")];}}
__proto.addInitItem=function(item){if(!this._initList)this._initList=[];this._initList.push(item);}
__proto.doInits=function(){if(!this._initList)return;this._initList=null;}
__proto.finish=function(){this.setNodeRef();this.doInits();this._scene._setBit(0x08,false);if(this._scene.parent&&this._scene.parent.activeInHierarchy&&this._scene.active)this._scene._processActive();this._scene.event("onViewCreated");this.recover();}
__proto.beginLoad=function(scene){this._scene=scene;if(!this._loadList||this._loadList.length<1){this.finish();}else{Laya.loader.load(this._loadList,Handler.create(this,this.finish));}}
InitTool.create=function(){var tool=Pool.getItemByClass("InitTool",InitTool);tool._idMap=[];return tool;}
return InitTool;})()}
return SceneUtils;})()
var Rectangle=(function(){function Rectangle(x,y,width,height){(x===void 0)&&(x=0);(y===void 0)&&(y=0);(width===void 0)&&(width=0);(height===void 0)&&(height=0);this.x=x;this.y=y;this.width=width;this.height=height;}
__class(Rectangle,'laya.maths.Rectangle');var __proto=Rectangle.prototype;__proto.setTo=function(x,y,width,height){this.x=x;this.y=y;this.width=width;this.height=height;return this;}
__proto.reset=function(){this.x=this.y=this.width=this.height=0;return this;}
__proto.recover=function(){if(this==Rectangle.TEMP||this==Rectangle.EMPTY){console.log("recover Temp or Empty:",this);return;}
Pool.recover("Rectangle",this.reset());}
__proto.copyFrom=function(source){this.x=source.x;this.y=source.y;this.width=source.width;this.height=source.height;return this;}
__proto.contains=function(x,y){if(this.width<=0||this.height<=0)return false;if(x>=this.x&&x<this.right){if(y>=this.y&&y<this.bottom){return true;}}
return false;}
__proto.intersects=function(rect){return!(rect.x>(this.x+this.width)||(rect.x+rect.width)<this.x||rect.y>(this.y+this.height)||(rect.y+rect.height)<this.y);}
__proto.intersection=function(rect,out){if(!this.intersects(rect))return null;out||(out=new Rectangle());out.x=Math.max(this.x,rect.x);out.y=Math.max(this.y,rect.y);out.width=Math.min(this.right,rect.right)-out.x;out.height=Math.min(this.bottom,rect.bottom)-out.y;return out;}
__proto.union=function(source,out){out||(out=new Rectangle());this.clone(out);if(source.width<=0||source.height<=0)return out;out.addPoint(source.x,source.y);out.addPoint(source.right,source.bottom);return this;}
__proto.clone=function(out){out||(out=new Rectangle());out.x=this.x;out.y=this.y;out.width=this.width;out.height=this.height;return out;}
__proto.toString=function(){return this.x+","+this.y+","+this.width+","+this.height;}
__proto.equals=function(rect){if(!rect||rect.x!==this.x||rect.y!==this.y||rect.width!==this.width||rect.height!==this.height)return false;return true;}
__proto.addPoint=function(x,y){this.x>x&&(this.width+=this.x-x,this.x=x);this.y>y&&(this.height+=this.y-y,this.y=y);if(this.width<x-this.x)this.width=x-this.x;if(this.height<y-this.y)this.height=y-this.y;return this;}
__proto._getBoundPoints=function(){var rst=Rectangle._temB;rst.length=0;if(this.width==0||this.height==0)return rst;rst.push(this.x,this.y,this.x+this.width,this.y,this.x,this.y+this.height,this.x+this.width,this.y+this.height);return rst;}
__proto.isEmpty=function(){if(this.width<=0||this.height<=0)return true;return false;}
__getset(0,__proto,'right',function(){return this.x+this.width;});__getset(0,__proto,'bottom',function(){return this.y+this.height;});Rectangle.create=function(){return Pool.getItemByClass("Rectangle",Rectangle);}
Rectangle._getBoundPointS=function(x,y,width,height){var rst=Rectangle._temA;rst.length=0;if(width==0||height==0)return rst;rst.push(x,y,x+width,y,x,y+height,x+width,y+height);return rst;}
Rectangle._getWrapRec=function(pointList,rst){if(!pointList||pointList.length<1)return rst?rst.setTo(0,0,0,0):Rectangle.TEMP.setTo(0,0,0,0);rst=rst?rst:laya.maths.Rectangle.create();var i,len=pointList.length,minX,maxX,minY,maxY,tPoint=Point.TEMP;minX=minY=99999;maxX=maxY=-minX;for(i=0;i<len;i+=2){tPoint.x=pointList[i];tPoint.y=pointList[i+1];minX=minX<tPoint.x?minX:tPoint.x;minY=minY<tPoint.y?minY:tPoint.y;maxX=maxX>tPoint.x?maxX:tPoint.x;maxY=maxY>tPoint.y?maxY:tPoint.y;}
return rst.setTo(minX,minY,maxX-minX,maxY-minY);}
Rectangle.EMPTY=new Rectangle();Rectangle.TEMP=new Rectangle();Rectangle._temB=[];Rectangle._temA=[];return Rectangle;})()
var KeyBoardManager=(function(){function KeyBoardManager(){}
__class(KeyBoardManager,'laya.events.KeyBoardManager');KeyBoardManager.__init__=function(){KeyBoardManager._addEvent("keydown");KeyBoardManager._addEvent("keypress");KeyBoardManager._addEvent("keyup");}
KeyBoardManager._addEvent=function(type){Browser.document.addEventListener(type,function(e){laya.events.KeyBoardManager._dispatch(e,type);},true);}
KeyBoardManager._dispatch=function(e,type){if(!KeyBoardManager.enabled)return;KeyBoardManager._event._stoped=false;KeyBoardManager._event.nativeEvent=e;KeyBoardManager._event.keyCode=e.keyCode||e.which||e.charCode;if(type==="keydown")KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode]=true;else if(type==="keyup")KeyBoardManager._pressKeys[KeyBoardManager._event.keyCode]=null;var target=(Laya.stage.focus&&(Laya.stage.focus.event!=null)&&Laya.stage.focus.displayedInStage)?Laya.stage.focus:Laya.stage;var ct=target;while(ct){ct.event(type,KeyBoardManager._event.setTo(type,ct,target));ct=ct.parent;}}
KeyBoardManager.hasKeyDown=function(key){return KeyBoardManager._pressKeys[key];}
KeyBoardManager._pressKeys={};KeyBoardManager.enabled=true;__static(KeyBoardManager,['_event',function(){return this._event=new Event();}]);return KeyBoardManager;})()
var LayaGLRunner=(function(){function LayaGLRunner(){}
__class(LayaGLRunner,'laya.layagl.LayaGLRunner');LayaGLRunner.uploadShaderUniforms=function(layaGL,commandEncoder,shaderData,uploadUnTexture){var data=shaderData._data;var shaderUniform=commandEncoder.getArrayData();var shaderCall=0;for(var i=0,n=shaderUniform.length;i<n;i++){var one=shaderUniform[i];if(uploadUnTexture||one.textureID!==-1){var value=data[one.dataOffset];if(value!=null)
shaderCall+=one.fun.call(one.caller,one,value);}}
return shaderCall;}
LayaGLRunner.uploadCustomUniform=function(layaGL,custom,index,data){var shaderCall=0;var one=custom[index];if(one&&data!=null)
shaderCall+=one.fun.call(one.caller,one,data);return shaderCall;}
LayaGLRunner.uploadShaderUniformsForNative=function(layaGL,commandEncoder,shaderData){var nType=0;if(shaderData._runtimeCopyValues.length>0){nType=1;};var data=shaderData._data;return layaGL.uploadShaderUniforms(commandEncoder,data,nType);}
return LayaGLRunner;})()
var DrawPathCmd=(function(){function DrawPathCmd(){}
__class(DrawPathCmd,'laya.display.cmd.DrawPathCmd');var __proto=DrawPathCmd.prototype;__proto.recover=function(){this.paths=null;this.brush=null;this.pen=null;Pool.recover("DrawPathCmd",this);}
__proto.run=function(context,gx,gy){context._drawPath(this.x+gx,this.y+gy,this.paths,this.brush,this.pen);}
__getset(0,__proto,'cmdID',function(){return"DrawPath";});DrawPathCmd.create=function(x,y,paths,brush,pen){var cmd=Pool.getItemByClass("DrawPathCmd",DrawPathCmd);cmd.x=x;cmd.y=y;cmd.paths=paths;cmd.brush=brush;cmd.pen=pen;return cmd;}
DrawPathCmd.ID="DrawPath";return DrawPathCmd;})()
var BufferStateBase=(function(){function BufferStateBase(){this._nativeVertexArrayObject=null;this._bindedIndexBuffer=null;this._nativeVertexArrayObject=LayaGL.instance.createVertexArray();}
__class(BufferStateBase,'laya.webgl.BufferStateBase');var __proto=BufferStateBase.prototype;__proto.bind=function(){if(BufferStateBase._curBindedBufferState!==this){LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject);BufferStateBase._curBindedBufferState=this;}}
__proto.unBind=function(){if(BufferStateBase._curBindedBufferState===this){LayaGL.instance.bindVertexArray(null);BufferStateBase._curBindedBufferState=null;}else{throw"BufferState: must call bind() function first.";}}
__proto.bindForNative=function(){LayaGL.instance.bindVertexArray(this._nativeVertexArrayObject);BufferStateBase._curBindedBufferState=this;}
__proto.unBindForNative=function(){LayaGL.instance.bindVertexArray(null);BufferStateBase._curBindedBufferState=null;}
__proto.destroy=function(){LayaGL.instance.deleteVertexArray(this._nativeVertexArrayObject);}
BufferStateBase._curBindedBufferState=null;return BufferStateBase;})()
var SaveCmd=(function(){function SaveCmd(){}
__class(SaveCmd,'laya.display.cmd.SaveCmd');var __proto=SaveCmd.prototype;__proto.recover=function(){Pool.recover("SaveCmd",this);}
__proto.run=function(context,gx,gy){context.save();}
__getset(0,__proto,'cmdID',function(){return"Save";});SaveCmd.create=function(){var cmd=Pool.getItemByClass("SaveCmd",SaveCmd);return cmd;}
SaveCmd.ID="Save";return SaveCmd;})()
var LocalStorage=(function(){var Storage;function LocalStorage(){}
__class(LocalStorage,'laya.net.LocalStorage');LocalStorage.__init__=function(){if(!LocalStorage._baseClass){LocalStorage._baseClass=Storage;Storage.init();}
LocalStorage.items=LocalStorage._baseClass.items;LocalStorage.support=LocalStorage._baseClass.support;return LocalStorage.support;}
LocalStorage.setItem=function(key,value){LocalStorage._baseClass.setItem(key,value);}
LocalStorage.getItem=function(key){return LocalStorage._baseClass.getItem(key);}
LocalStorage.setJSON=function(key,value){LocalStorage._baseClass.setJSON(key,value);}
LocalStorage.getJSON=function(key){return LocalStorage._baseClass.getJSON(key);}
LocalStorage.removeItem=function(key){LocalStorage._baseClass.removeItem(key);}
LocalStorage.clear=function(){LocalStorage._baseClass.clear();}
LocalStorage._baseClass=null;LocalStorage.items=null;LocalStorage.support=false;LocalStorage.__init$=function(){Storage=(function(){function Storage(){}
__class(Storage,'');Storage.init=function(){try{Storage.support=true;Storage.items=window.localStorage;Storage.setItem('laya','1');Storage.removeItem('laya');}catch(e){Storage.support=false;}
if(!Storage.support)console.log('LocalStorage is not supprot or browser is private mode.');}
Storage.setItem=function(key,value){try{Storage.support&&Storage.items.setItem(key,value);}catch(e){console.warn("set localStorage failed",e);}}
Storage.getItem=function(key){return Storage.support?Storage.items.getItem(key):null;}
Storage.setJSON=function(key,value){try{Storage.support&&Storage.items.setItem(key,JSON.stringify(value));}catch(e){console.warn("set localStorage failed",e);}}
Storage.getJSON=function(key){return JSON.parse(Storage.support?Storage.items.getItem(key):null);}
Storage.removeItem=function(key){Storage.support&&Storage.items.removeItem(key);}
Storage.clear=function(){Storage.support&&Storage.items.clear();}
Storage.items=null;Storage.support=false;return Storage;})()}
return LocalStorage;})()
var WebGL=(function(){function WebGL(){}
__class(WebGL,'laya.webgl.WebGL');WebGL._uint8ArraySlice=function(){var _this=this;var sz=_this.length;var dec=new Uint8Array(_this.length);for(var i=0;i<sz;i++)dec[i]=_this[i];return dec;}
WebGL._float32ArraySlice=function(){var _this=this;var sz=_this.length;var dec=new Float32Array(_this.length);for(var i=0;i<sz;i++)dec[i]=_this[i];return dec;}
WebGL._uint16ArraySlice=function(__arg){var arg=arguments;var _this=this;var sz=0;var dec;var i=0;if(arg.length===0){sz=_this.length;dec=new Uint16Array(sz);for(i=0;i<sz;i++)
dec[i]=_this[i];}else if(arg.length===2){var start=arg[0];var end=arg[1];if(end>start){sz=end-start;dec=new Uint16Array(sz);for(i=start;i<end;i++)
dec[i-start]=_this[i];}else{dec=new Uint16Array(0);}}
return dec;}
WebGL._nativeRender_enable=function(){if(WebGL.isNativeRender_enable)
return;WebGL.isNativeRender_enable=true;WebGLContext.__init_native();Shader.prototype.uploadTexture2D=function(value){var CTX=WebGLContext;CTX.bindTexture(laya.webgl.WebGL.mainContext,CTX.TEXTURE_2D,value);}
RenderState2D.width=Browser.window.innerWidth;RenderState2D.height=Browser.window.innerHeight;RunDriver.measureText=function(txt,font){window["conchTextCanvas"].font=font;return window["conchTextCanvas"].measureText(txt);}
RunDriver.enableNative=function(){if(Render.supportWebGLPlusRendering){(LayaGLRunner).uploadShaderUniforms=LayaGLRunner.uploadShaderUniformsForNative;CommandEncoder=window.GLCommandEncoder;LayaGL=window.LayaGLContext;};var stage=Stage;stage.prototype.render=stage.prototype.renderToNative;}
RunDriver.clear=function(color){Context.set2DRenderConfig();var c=ColorUtils.create(color).arrColor;var gl=LayaGL.instance;if(c)gl.clearColor(c[0],c[1],c[2],c[3]);gl.clear(0x00004000|0x00000100|0x00000400);RenderState2D.clear();}
RunDriver.drawToCanvas=RunDriver.drawToTexture=function(sprite,_renderType,canvasWidth,canvasHeight,offsetX,offsetY){offsetX-=sprite.x;offsetY-=sprite.y;offsetX|=0;offsetY|=0;canvasWidth|=0;canvasHeight|=0;var canv=new HTMLCanvas(false);var ctx=canv.getContext('2d');canv.size(canvasWidth,canvasHeight);ctx.asBitmap=true;ctx._targets.start();RenderSprite.renders[_renderType]._fun(sprite,ctx,offsetX,offsetY);ctx.flush();ctx._targets.end();ctx._targets.restore();return canv;}
RenderTexture2D.prototype._uv=RenderTexture2D.flipyuv;Object["defineProperty"](RenderTexture2D.prototype,"uv",{"get":function(){return this._uv;},"set":function(v){this._uv=v;}});HTMLCanvas.prototype.getTexture=function(){if(!this._texture){this._texture=this.context._targets;this._texture.uv=RenderTexture2D.flipyuv;this._texture.bitmap=this._texture;}
return this._texture;}}
WebGL.enable=function(){return true;}
WebGL.inner_enable=function(){Float32Array.prototype.slice||(Float32Array.prototype.slice=WebGL._float32ArraySlice);Uint16Array.prototype.slice||(Uint16Array.prototype.slice=WebGL._uint16ArraySlice);Uint8Array.prototype.slice||(Uint8Array.prototype.slice=WebGL._uint8ArraySlice);if(Render.isConchApp){WebGL._nativeRender_enable();}
return true;}
WebGL.onStageResize=function(width,height){if(WebGL.mainContext==null)return;WebGL.mainContext.viewport(0,0,width,height);RenderState2D.width=width;RenderState2D.height=height;}
WebGL.mainContext=null;WebGL.shaderHighPrecision=false;WebGL._isWebGL2=false;WebGL.isNativeRender_enable=false;return WebGL;})()
var WeakObject=(function(){function WeakObject(){this._obj=null;this._obj=WeakObject.supportWeakMap?new Browser.window.WeakMap():{};if(!WeakObject.supportWeakMap)WeakObject._maps.push(this);}
__class(WeakObject,'laya.utils.WeakObject');var __proto=WeakObject.prototype;__proto.set=function(key,value){if(key==null)return;if(WeakObject.supportWeakMap){var objKey=key;if((typeof key=='string')||(typeof key=='number')){objKey=WeakObject._keys[key];if(!objKey)objKey=WeakObject._keys[key]={k:key};}
this._obj.set(objKey,value);}else{if((typeof key=='string')||(typeof key=='number')){this._obj[key]=value;}else{key.$_GID||(key.$_GID=Utils.getGID());this._obj[key.$_GID]=value;}}}
__proto.get=function(key){if(key==null)return null;if(WeakObject.supportWeakMap){var objKey=((typeof key=='string')||(typeof key=='number'))?WeakObject._keys[key]:key;if(!objKey)return null;return this._obj.get(objKey);}else{if((typeof key=='string')||(typeof key=='number'))return this._obj[key];return this._obj[key.$_GID];}}
__proto.del=function(key){if(key==null)return;if(WeakObject.supportWeakMap){var objKey=((typeof key=='string')||(typeof key=='number'))?WeakObject._keys[key]:key;if(!objKey)return;this._obj.delete(objKey);}else{if((typeof key=='string')||(typeof key=='number'))delete this._obj[key];else delete this._obj[this._obj.$_GID];}}
__proto.has=function(key){if(key==null)return false;if(WeakObject.supportWeakMap){var objKey=((typeof key=='string')||(typeof key=='number'))?WeakObject._keys[key]:key;return this._obj.has(objKey);}else{if((typeof key=='string')||(typeof key=='number'))return this._obj[key]!=null;return this._obj[this._obj.$_GID]!=null;}}
WeakObject.__init__=function(){WeakObject.supportWeakMap=Browser.window.WeakMap!=null;if(!WeakObject.supportWeakMap)Laya.systemTimer.loop(WeakObject.delInterval,null,WeakObject.clearCache);}
WeakObject.clearCache=function(){for(var i=0,n=WeakObject._maps.length;i<n;i++){var obj=WeakObject._maps[i];obj._obj={};}}
WeakObject.supportWeakMap=false;WeakObject.delInterval=10*60*1000;WeakObject._keys={};WeakObject._maps=[];__static(WeakObject,['I',function(){return this.I=new WeakObject();}]);return WeakObject;})()
var BoundsStyle=(function(){function BoundsStyle(){}
__class(BoundsStyle,'laya.display.css.BoundsStyle');var __proto=BoundsStyle.prototype;__proto.reset=function(){if(this.bounds)this.bounds.recover();if(this.userBounds)this.userBounds.recover();this.bounds=null;this.userBounds=null;this.temBM=null;return this;}
__proto.recover=function(){Pool.recover("BoundsStyle",this.reset());}
BoundsStyle.create=function(){return Pool.getItemByClass("BoundsStyle",BoundsStyle);}
return BoundsStyle;})()
var DrawStyle=(function(){function DrawStyle(value){this._color=null;this.setValue(value);}
__class(DrawStyle,'laya.webgl.canvas.DrawStyle');var __proto=DrawStyle.prototype;__proto.setValue=function(value){if(value){this._color=((value instanceof laya.utils.ColorUtils))?(value):ColorUtils.create(value);}else this._color=ColorUtils.create("#000000");}
__proto.reset=function(){this._color=ColorUtils.create("#000000");}
__proto.toInt=function(){return this._color.numColor;}
__proto.equal=function(value){if((typeof value=='string'))return this._color.strColor===value;if((value instanceof laya.utils.ColorUtils))return this._color.numColor===(value).numColor;return false;}
__proto.toColorStr=function(){return this._color.strColor;}
DrawStyle.create=function(value){if(value){var color=((value instanceof laya.utils.ColorUtils))?(value):ColorUtils.create(value);return color._drawStyle||(color._drawStyle=new DrawStyle(value));}
return DrawStyle.DEFAULT;}
__static(DrawStyle,['DEFAULT',function(){return this.DEFAULT=new DrawStyle("#000000");}]);return DrawStyle;})()
var System=(function(){function System(){}
__class(System,'laya.system.System');System.changeDefinition=function(name,classObj){Laya[name]=classObj;var str=name+"=classObj";Laya._runScript(str);}
System.__init__=function(){}
return System;})()
var DrawParticleCmd=(function(){function DrawParticleCmd(){}
__class(DrawParticleCmd,'laya.display.cmd.DrawParticleCmd');var __proto=DrawParticleCmd.prototype;__proto.recover=function(){this._templ=null;Pool.recover("DrawParticleCmd",this);}
__proto.run=function(context,gx,gy){context.drawParticle(gx,gy,this._templ);}
__getset(0,__proto,'cmdID',function(){return"DrawParticleCmd";});DrawParticleCmd.create=function(_temp){var cmd=Pool.getItemByClass("DrawParticleCmd",DrawParticleCmd);cmd._templ=_temp;return cmd;}
DrawParticleCmd.ID="DrawParticleCmd";return DrawParticleCmd;})()
var Render=(function(){function Render(width,height){this._timeId=0;Render._mainCanvas.source.id="layaCanvas";Render._mainCanvas.source.width=width;Render._mainCanvas.source.height=height;if(laya.renders.Render.isConchApp){Browser.document.body.appendChild(Render._mainCanvas.source);}else{if(!Browser.onKGMiniGame){Browser.container.appendChild(Render._mainCanvas.source);}}
this.initRender(Render._mainCanvas,width,height);Browser.window.requestAnimationFrame(loop);function loop(stamp){Laya.stage._loop();Browser.window.requestAnimationFrame(loop);}
Laya.stage.on("visibilitychange",this,this._onVisibilitychange);}
__class(Render,'laya.renders.Render');var __proto=Render.prototype;__proto._onVisibilitychange=function(){if(!Laya.stage.isVisibility){this._timeId=Browser.window.setInterval(this._enterFrame,1000);}else if(this._timeId!=0){Browser.window.clearInterval(this._timeId);}}
__proto.initRender=function(canvas,w,h){function getWebGLContext(canvas){var gl;var names=["webgl2","webgl","experimental-webgl","webkit-3d","moz-webgl"];if(!Config.useWebGL2){names.shift();}
for(var i=0;i<names.length;i++){try{gl=canvas.getContext(names[i],{stencil:Config.isStencil,alpha:Config.isAlpha,antialias:Config.isAntialias,premultipliedAlpha:Config.premultipliedAlpha,preserveDrawingBuffer:Config.preserveDrawingBuffer});}catch(e){}
if(gl){(names[i]==='webgl2')&&(WebGL._isWebGL2=true);new LayaGL();return gl;}}
return null;};var gl=LayaGL.instance=WebGL.mainContext=getWebGLContext(laya.renders.Render._mainCanvas.source);if(!gl)
return false;canvas.size(w,h);WebGLContext.__init__(gl);Context.__init__();Submit.__init__();var ctx=new Context();ctx.isMain=true;laya.renders.Render._context=ctx;canvas._setContext(ctx);WebGL.shaderHighPrecision=false;try{var precisionFormat=gl.getShaderPrecisionFormat(0x8B30,0x8DF2);precisionFormat.precision?WebGL.shaderHighPrecision=true:WebGL.shaderHighPrecision=false;}catch(e){}
LayaGL.instance=gl;System.__init__();ShaderDefines2D.__init__();Value2D.__init__();Shader2D.__init__();Buffer2D.__int__(gl);BlendMode._init_(gl);return true;}
__proto._enterFrame=function(e){Laya.stage._loop();}
__getset(1,Render,'context',function(){return Render._context;});__getset(1,Render,'canvas',function(){return Render._mainCanvas.source;});Render._context=null;Render._mainCanvas=null;Render.supportWebGLPlusCulling=false;Render.supportWebGLPlusAnimation=false;Render.supportWebGLPlusRendering=false;Render.isConchApp=false;Render.is3DMode=false;Render.__init$=function(){{Render.isConchApp=(window.conch!=null);if(Render.isConchApp){Render.supportWebGLPlusCulling=true;Render.supportWebGLPlusAnimation=true;Render.supportWebGLPlusRendering=true;}};;}
return Render;})()
var ClassUtils=(function(){function ClassUtils(){}
__class(ClassUtils,'laya.utils.ClassUtils');ClassUtils.regClass=function(className,classDef){ClassUtils._classMap[className]=classDef;}
ClassUtils.regShortClassName=function(classes){for(var i=0;i<classes.length;i++){var classDef=classes[i];var className=classDef.name;ClassUtils._classMap[className]=classDef;}}
ClassUtils.getRegClass=function(className){return ClassUtils._classMap[className];}
ClassUtils.getClass=function(className){var classObject=ClassUtils._classMap[className]||className;if((typeof classObject=='string'))return(Laya["__classmap"][classObject]||Laya[className]);return classObject;}
ClassUtils.getInstance=function(className){var compClass=ClassUtils.getClass(className);if(compClass)return new compClass();else console.warn("[error] Undefined class:",className);return null;}
ClassUtils.createByJson=function(json,node,root,customHandler,instanceHandler){if((typeof json=='string'))json=JSON.parse(json);var props=json.props;if(!node){node=instanceHandler?instanceHandler.runWith(json):ClassUtils.getInstance(props.runtime||json.type);if(!node)return null;};var child=json.child;if(child){for(var i=0,n=child.length;i<n;i++){var data=child[i];if((data.props.name==="render"||data.props.renderType==="render")&&node["_$set_itemRender"])
node.itemRender=data;else{if(data.type=="Graphic"){ClassUtils._addGraphicsToSprite(data,node);}else if(ClassUtils._isDrawType(data.type)){ClassUtils._addGraphicToSprite(data,node,true);}else{var tChild=ClassUtils.createByJson(data,null,root,customHandler,instanceHandler)
if(data.type==="Script"){if(tChild.hasOwnProperty("owner")){tChild["owner"]=node;}else if(tChild.hasOwnProperty("target")){tChild["target"]=node;}}else if(data.props.renderType=="mask"){node.mask=tChild;}else{node.addChild(tChild);}}}}}
if(props){for(var prop in props){var value=props[prop];if(prop==="var"&&root){root[value]=node;}else if((value instanceof Array)&&(typeof(node[prop])=='function')){node[prop].apply(node,value);}else{node[prop]=value;}}}
if(customHandler&&json.customProps){customHandler.runWith([node,json]);}
if(node["created"])node.created();return node;}
ClassUtils._addGraphicsToSprite=function(graphicO,sprite){var graphics=graphicO.child;if(!graphics||graphics.length<1)return;var g=ClassUtils._getGraphicsFromSprite(graphicO,sprite);var ox=0;var oy=0;if(graphicO.props){ox=ClassUtils._getObjVar(graphicO.props,"x",0);oy=ClassUtils._getObjVar(graphicO.props,"y",0);}
if(ox!=0&&oy!=0){g.translate(ox,oy);};var i=0,len=0;len=graphics.length;for(i=0;i<len;i++){ClassUtils._addGraphicToGraphics(graphics[i],g);}
if(ox!=0&&oy!=0){g.translate(-ox,-oy);}}
ClassUtils._addGraphicToSprite=function(graphicO,sprite,isChild){(isChild===void 0)&&(isChild=false);var g=isChild?ClassUtils._getGraphicsFromSprite(graphicO,sprite):sprite.graphics;ClassUtils._addGraphicToGraphics(graphicO,g);}
ClassUtils._getGraphicsFromSprite=function(dataO,sprite){if(!dataO||!dataO.props)return sprite.graphics;var propsName=dataO.props.renderType;if(propsName==="hit"||propsName==="unHit"){var hitArea=sprite._style.hitArea||(sprite.hitArea=new HitArea());if(!hitArea[propsName]){hitArea[propsName]=new Graphics();};var g=hitArea[propsName];}
if(!g)g=sprite.graphics;return g;}
ClassUtils._getTransformData=function(propsO){var m;if(propsO.hasOwnProperty("pivotX")||propsO.hasOwnProperty("pivotY")){m=m||new Matrix();m.translate(-ClassUtils._getObjVar(propsO,"pivotX",0),-ClassUtils._getObjVar(propsO,"pivotY",0));};var sx=ClassUtils._getObjVar(propsO,"scaleX",1),sy=ClassUtils._getObjVar(propsO,"scaleY",1);var rotate=ClassUtils._getObjVar(propsO,"rotation",0);var skewX=ClassUtils._getObjVar(propsO,"skewX",0);var skewY=ClassUtils._getObjVar(propsO,"skewY",0);if(sx!=1||sy!=1||rotate!=0){m=m||new Matrix();m.scale(sx,sy);m.rotate(rotate*0.0174532922222222);}
return m;}
ClassUtils._addGraphicToGraphics=function(graphicO,graphic){var propsO;propsO=graphicO.props;if(!propsO)return;var drawConfig;drawConfig=ClassUtils.DrawTypeDic[graphicO.type];if(!drawConfig)return;var g=graphic;var params=ClassUtils._getParams(propsO,drawConfig[1],drawConfig[2],drawConfig[3]);var m=ClassUtils._tM;if(m||ClassUtils._alpha!=1){g.save();if(m)g.transform(m);if(ClassUtils._alpha!=1)g.alpha(ClassUtils._alpha);}
g[drawConfig[0]].apply(g,params);if(m||ClassUtils._alpha!=1){g.restore();}}
ClassUtils._adptLineData=function(params){params[2]=parseFloat(params[0])+parseFloat(params[2]);params[3]=parseFloat(params[1])+parseFloat(params[3]);return params;}
ClassUtils._adptTextureData=function(params){params[0]=Loader.getRes(params[0]);return params;}
ClassUtils._adptLinesData=function(params){params[2]=ClassUtils._getPointListByStr(params[2]);return params;}
ClassUtils._isDrawType=function(type){if(type==="Image")return false;return ClassUtils.DrawTypeDic.hasOwnProperty(type);}
ClassUtils._getParams=function(obj,params,xPos,adptFun){(xPos===void 0)&&(xPos=0);var rst=ClassUtils._temParam;rst.length=params.length;var i=0,len=0;len=params.length;for(i=0;i<len;i++){rst[i]=ClassUtils._getObjVar(obj,params[i][0],params[i][1]);}
ClassUtils._alpha=ClassUtils._getObjVar(obj,"alpha",1);var m;m=ClassUtils._getTransformData(obj);if(m){if(!xPos)xPos=0;m.translate(rst[xPos],rst[xPos+1]);rst[xPos]=rst[xPos+1]=0;ClassUtils._tM=m;}else{ClassUtils._tM=null;}
if(adptFun&&ClassUtils[adptFun]){rst=ClassUtils[adptFun](rst);}
return rst;}
ClassUtils._getPointListByStr=function(str){var pointArr=str.split(",");var i=0,len=0;len=pointArr.length;for(i=0;i<len;i++){pointArr[i]=parseFloat(pointArr[i]);}
return pointArr;}
ClassUtils._getObjVar=function(obj,key,noValue){if(obj.hasOwnProperty(key)){return obj[key];}
return noValue;}
ClassUtils._temParam=[];ClassUtils._classMap={'Sprite':Sprite,'Scene':Scene,'Text':Text,'Animation':'laya.display.Animation','Skeleton':'laya.ani.bone.Skeleton','Particle2D':'laya.particle.Particle2D','div':'laya.html.dom.HTMLDivParser','p':'laya.html.dom.HTMLElement','img':'laya.html.dom.HTMLImageElement','span':'laya.html.dom.HTMLElement','br':'laya.html.dom.HTMLBrElement','style':'laya.html.dom.HTMLStyleElement','font':'laya.html.dom.HTMLElement','a':'laya.html.dom.HTMLElement','#text':'laya.html.dom.HTMLElement','link':'laya.html.dom.HTMLLinkElement'};ClassUtils._tM=null;ClassUtils._alpha=NaN;__static(ClassUtils,['DrawTypeDic',function(){return this.DrawTypeDic={"Rect":["drawRect",[["x",0],["y",0],["width",0],["height",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],"Circle":["drawCircle",[["x",0],["y",0],["radius",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],"Pie":["drawPie",[["x",0],["y",0],["radius",0],["startAngle",0],["endAngle",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],"Image":["drawTexture",[["x",0],["y",0],["width",0],["height",0]]],"Texture":["drawTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0]],1,"_adptTextureData"],"FillTexture":["fillTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0],["repeat",null]],1,"_adptTextureData"],"FillText":["fillText",[["text",""],["x",0],["y",0],["font",null],["color",null],["textAlign",null]],1],"Line":["drawLine",[["x",0],["y",0],["toX",0],["toY",0],["lineColor",null],["lineWidth",0]],0,"_adptLineData"],"Lines":["drawLines",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],"Curves":["drawCurves",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],"Poly":["drawPoly",[["x",0],["y",0],["points",""],["fillColor",null],["lineColor",null],["lineWidth",1]],0,"_adptLinesData"]};}]);return ClassUtils;})()
var GraphicsBounds=(function(){function GraphicsBounds(){this._cacheBoundsType=false;}
__class(GraphicsBounds,'laya.display.GraphicsBounds');var __proto=GraphicsBounds.prototype;__proto.destroy=function(){this._graphics=null;this._cacheBoundsType=false;if(this._temp)this._temp.length=0;if(this._rstBoundPoints)this._rstBoundPoints.length=0;if(this._bounds)this._bounds.recover();this._bounds=null;Pool.recover("GraphicsBounds",this);}
__proto.reset=function(){this._temp&&(this._temp.length=0);}
__proto.getBounds=function(realSize){(realSize===void 0)&&(realSize=false);if(!this._bounds||!this._temp||this._temp.length<1||realSize!=this._cacheBoundsType){this._bounds=Rectangle._getWrapRec(this.getBoundPoints(realSize),this._bounds)}
this._cacheBoundsType=realSize;return this._bounds;}
__proto.getBoundPoints=function(realSize){(realSize===void 0)&&(realSize=false);if(!this._temp||this._temp.length<1||realSize!=this._cacheBoundsType)
this._temp=this._getCmdPoints(realSize);this._cacheBoundsType=realSize;return this._rstBoundPoints=Utils.copyArray(this._rstBoundPoints,this._temp);}
__proto._getCmdPoints=function(realSize){(realSize===void 0)&&(realSize=false);var context=Render._context;var cmds=this._graphics.cmds;var rst;rst=this._temp||(this._temp=[]);rst.length=0;if(!cmds&&this._graphics._one!=null){GraphicsBounds._tempCmds.length=0;GraphicsBounds._tempCmds.push(this._graphics._one);cmds=GraphicsBounds._tempCmds;}
if(!cmds)return rst;var matrixs=GraphicsBounds._tempMatrixArrays;matrixs.length=0;var tMatrix=GraphicsBounds._initMatrix;tMatrix.identity();var tempMatrix=GraphicsBounds._tempMatrix;var cmd;var tex;for(var i=0,n=cmds.length;i<n;i++){cmd=cmds[i];switch(cmd.cmdID){case"Alpha":matrixs.push(tMatrix);tMatrix=tMatrix.clone();break;case"Restore":tMatrix=matrixs.pop();break;case"Scale":tempMatrix.identity();tempMatrix.translate(-cmd.pivotX,-cmd.pivotY);tempMatrix.scale(cmd.scaleX,cmd.scaleY);tempMatrix.translate(cmd.pivotX,cmd.pivotY);this._switchMatrix(tMatrix,tempMatrix);break;case"Rotate":tempMatrix.identity();tempMatrix.translate(-cmd.pivotX,-cmd.pivotY);tempMatrix.rotate(cmd.angle);tempMatrix.translate(cmd.pivotX,cmd.pivotY);this._switchMatrix(tMatrix,tempMatrix);break;case"Translate":tempMatrix.identity();tempMatrix.translate(cmd.tx,cmd.ty);this._switchMatrix(tMatrix,tempMatrix);break;case"Transform":tempMatrix.identity();tempMatrix.translate(-cmd.pivotX,-cmd.pivotY);tempMatrix.concat(cmd.matrix);tempMatrix.translate(cmd.pivotX,cmd.pivotY);this._switchMatrix(tMatrix,tempMatrix);break;case"DrawImage":case"FillTexture":GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),tMatrix);break;case"DrawTexture":tMatrix.copyTo(tempMatrix);if(cmd.matrix)
tempMatrix.concat(cmd.matrix);GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),tempMatrix);break;case"DrawImage":tex=cmd.texture;if(realSize){if(cmd.width&&cmd.height){GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),tMatrix);}else{GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,tex.width,tex.height),tMatrix);}}else{var wRate=(cmd.width||tex.sourceWidth)/tex.width;var hRate=(cmd.height||tex.sourceHeight)/tex.height;var oWidth=wRate*tex.sourceWidth;var oHeight=hRate*tex.sourceHeight;var offX=tex.offsetX>0?tex.offsetX:0;var offY=tex.offsetY>0?tex.offsetY:0;offX*=wRate;offY*=hRate;GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x-offX,cmd.y-offY,oWidth,oHeight),tMatrix);}
break;case"FillTexture":if(cmd.width&&cmd.height){GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),tMatrix);}else{tex=cmd.texture;GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,tex.width,tex.height),tMatrix);}
break;case"DrawTexture":;var drawMatrix;if(cmd.matrix){tMatrix.copyTo(tempMatrix);tempMatrix.concat(cmd.matrix);drawMatrix=tempMatrix;}else{drawMatrix=tMatrix;}
if(realSize){if(cmd.width&&cmd.height){GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),drawMatrix);}else{tex=cmd.texture;GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,tex.width,tex.height),drawMatrix);}}else{tex=cmd.texture;wRate=(cmd.width||tex.sourceWidth)/tex.width;hRate=(cmd.height||tex.sourceHeight)/tex.height;oWidth=wRate*tex.sourceWidth;oHeight=hRate*tex.sourceHeight;offX=tex.offsetX>0?tex.offsetX:0;offY=tex.offsetY>0?tex.offsetY:0;offX*=wRate;offY*=hRate;GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x-offX,cmd.y-offY,oWidth,oHeight),drawMatrix);}
break;case"DrawRect":GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x,cmd.y,cmd.width,cmd.height),tMatrix);break;case"DrawCircle":GraphicsBounds._addPointArrToRst(rst,Rectangle._getBoundPointS(cmd.x-cmd.radius,cmd.y-cmd.radius,cmd.radius+cmd.radius,cmd.radius+cmd.radius),tMatrix);break;case"DrawLine":GraphicsBounds._tempPoints.length=0;var lineWidth=NaN;lineWidth=cmd.lineWidth*0.5;if(cmd.fromX==cmd.toX){GraphicsBounds._tempPoints.push(cmd.fromX+lineWidth,cmd.fromY,cmd.toX+lineWidth,cmd.toY,cmd.fromX-lineWidth,cmd.fromY,cmd.toX-lineWidth,cmd.toY);}else if(cmd.fromY==cmd.toY){GraphicsBounds._tempPoints.push(cmd.fromX,cmd.fromY+lineWidth,cmd.toX,cmd.toY+lineWidth,cmd.fromX,cmd.fromY-lineWidth,cmd.toX,cmd.toY-lineWidth);}else{GraphicsBounds._tempPoints.push(cmd.fromX,cmd.fromY,cmd.toX,cmd.toY);}
GraphicsBounds._addPointArrToRst(rst,GraphicsBounds._tempPoints,tMatrix);break;case"DrawCurves":GraphicsBounds._addPointArrToRst(rst,Bezier.I.getBezierPoints(cmd.points),tMatrix,cmd.x,cmd.y);break;case"DrawLines":case"DrawPoly":GraphicsBounds._addPointArrToRst(rst,cmd.points,tMatrix,cmd.x,cmd.y);break;case"DrawPath":GraphicsBounds._addPointArrToRst(rst,this._getPathPoints(cmd.paths),tMatrix,cmd.x,cmd.y);break;case"DrawPie":GraphicsBounds._addPointArrToRst(rst,this._getPiePoints(cmd.x,cmd.y,cmd.radius,cmd.startAngle,cmd.endAngle),tMatrix);break;}}
if(rst.length>200){rst=Utils.copyArray(rst,Rectangle._getWrapRec(rst)._getBoundPoints());}else if(rst.length>8)
rst=GrahamScan.scanPList(rst);return rst;}
__proto._switchMatrix=function(tMatix,tempMatrix){tempMatrix.concat(tMatix);tempMatrix.copyTo(tMatix);}
__proto._getPiePoints=function(x,y,radius,startAngle,endAngle){var rst=GraphicsBounds._tempPoints;GraphicsBounds._tempPoints.length=0;var k=Math.PI/180;var d1=endAngle-startAngle;if(d1>=360||d1<=-360){rst.push(x-radius,y-radius);rst.push(x+radius,y-radius);rst.push(x+radius,y+radius);rst.push(x-radius,y+radius);return rst;}
rst.push(x,y);var delta=d1%360;if(delta<0)delta+=360;var end1=startAngle+delta;var st=startAngle*k;var ed=end1*k;rst.push(x+radius*Math.cos(st),y+radius*Math.sin(st));rst.push(x+radius*Math.cos(ed),y+radius*Math.sin(ed));var s1=Math.ceil(startAngle/90)*90;var s2=Math.floor(end1/90)*90;for(var cs=s1;cs<=s2;cs+=90){var csr=cs*k;rst.push(x+radius*Math.cos(csr),y+radius*Math.sin(csr));}
return rst;}
__proto._getPathPoints=function(paths){var i=0,len=0;var rst=GraphicsBounds._tempPoints;rst.length=0;len=paths.length;var tCMD;for(i=0;i<len;i++){tCMD=paths[i];if(tCMD.length>1){rst.push(tCMD[1],tCMD[2]);if(tCMD.length>3){rst.push(tCMD[3],tCMD[4]);}}}
return rst;}
GraphicsBounds.create=function(){return Pool.getItemByClass("GraphicsBounds",GraphicsBounds);}
GraphicsBounds._addPointArrToRst=function(rst,points,matrix,dx,dy){(dx===void 0)&&(dx=0);(dy===void 0)&&(dy=0);var i=0,len=0;len=points.length;for(i=0;i<len;i+=2){GraphicsBounds._addPointToRst(rst,points[i]+dx,points[i+1]+dy,matrix);}}
GraphicsBounds._addPointToRst=function(rst,x,y,matrix){var _tempPoint=Point.TEMP;_tempPoint.setTo(x?x:0,y?y:0);matrix.transformPoint(_tempPoint);rst.push(_tempPoint.x,_tempPoint.y);}
GraphicsBounds._tempPoints=[];GraphicsBounds._tempMatrixArrays=[];GraphicsBounds._tempCmds=[];__static(GraphicsBounds,['_tempMatrix',function(){return this._tempMatrix=new Matrix();},'_initMatrix',function(){return this._initMatrix=new Matrix();}]);return GraphicsBounds;})()
var LayaGL=(function(){function LayaGL(){}
__class(LayaGL,'laya.layagl.LayaGL');var __proto=LayaGL.prototype;__proto.createCommandEncoder=function(reserveSize,adjustSize,isSyncToRenderThread){(reserveSize===void 0)&&(reserveSize=128);(adjustSize===void 0)&&(adjustSize=64);(isSyncToRenderThread===void 0)&&(isSyncToRenderThread=false);return new CommandEncoder(this,reserveSize,adjustSize,isSyncToRenderThread);}
__proto.beginCommandEncoding=function(commandEncoder){}
__proto.endCommandEncoding=function(){}
__proto.matrix4x4Multiply=function(m1,m2,out){}
__proto.evaluateClipDatasRealTime=function(nodes,playCurTime,realTimeCurrentFrameIndexs,addtive){}
LayaGL.getFrameCount=function(){return 0;}
LayaGL.syncBufferToRenderThread=function(value,index){(index===void 0)&&(index=0);}
LayaGL.createArrayBufferRef=function(arrayBuffer,type,syncRender){}
LayaGL.createArrayBufferRefs=function(arrayBuffer,type,syncRender,refType){}
LayaGL.EXECUTE_JS_THREAD_BUFFER=0;LayaGL.EXECUTE_RENDER_THREAD_BUFFER=1;LayaGL.EXECUTE_COPY_TO_RENDER=2;LayaGL.EXECUTE_COPY_TO_RENDER3D=3;LayaGL.ARRAY_BUFFER_TYPE_DATA=0;LayaGL.ARRAY_BUFFER_TYPE_CMD=1;LayaGL.ARRAY_BUFFER_REF_REFERENCE=0;LayaGL.ARRAY_BUFFER_REF_COPY=1;LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_ID=0;LayaGL.UPLOAD_SHADER_UNIFORM_TYPE_DATA=1;LayaGL.instance=null;return LayaGL;})()
var Browser=(function(){function Browser(){}
__class(Browser,'laya.utils.Browser');__getset(1,Browser,'pixelRatio',function(){if(Browser._pixelRatio<0){Browser.__init__();if(Browser.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")>-1)Browser._pixelRatio=2;else{var ctx=Browser.context;var backingStore=ctx.backingStorePixelRatio||ctx.webkitBackingStorePixelRatio||ctx.mozBackingStorePixelRatio||ctx.msBackingStorePixelRatio||ctx.oBackingStorePixelRatio||ctx.backingStorePixelRatio||1;Browser._pixelRatio=(Browser._window.devicePixelRatio||1)/backingStore;if(Browser._pixelRatio<1)Browser._pixelRatio=1;}}
return Browser._pixelRatio;});__getset(1,Browser,'height',function(){Browser.__init__();return((Laya.stage&&Laya.stage.canvasRotation)?Browser.clientWidth:Browser.clientHeight)*Browser.pixelRatio;});__getset(1,Browser,'clientWidth',function(){Browser.__init__();return Browser._window.innerWidth||Browser._document.body.clientWidth;});__getset(1,Browser,'window',function(){return Browser._window||Browser.__init__();});__getset(1,Browser,'clientHeight',function(){Browser.__init__();return Browser._window.innerHeight||Browser._document.body.clientHeight||Browser._document.documentElement.clientHeight;});__getset(1,Browser,'width',function(){Browser.__init__();return((Laya.stage&&Laya.stage.canvasRotation)?Browser.clientHeight:Browser.clientWidth)*Browser.pixelRatio;});__getset(1,Browser,'container',function(){if(!Browser._container){Browser.__init__();Browser._container=Browser.createElement("div");Browser._container.id="layaContainer";Browser._document.body.appendChild(Browser._container);}
return Browser._container;},function(value){Browser._container=value;});__getset(1,Browser,'document',function(){Browser.__init__();return Browser._document;});Browser.__init__=function(){if(Browser._window)return Browser._window;var win=Browser._window=window;var doc=Browser._document=win.document;var u=Browser.userAgent=win.navigator.userAgent;var libs=win._layalibs;if(libs){libs.sort(function(a,b){return a.i-b.i;});for(var j=0;j<libs.length;j++){libs[j].f(win,doc,Laya);}}
if(u.indexOf("MiniGame")>-1&&Browser.window.hasOwnProperty("wx")){if(laya.utils.Browser.window.hasOwnProperty("bl")){if(!Laya["BLMiniAdapter"]){console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0");}else{Laya["BLMiniAdapter"].enable();}}else if(laya.utils.Browser.window.hasOwnProperty("qq")){if(!Laya["QQMiniAdapter"]){console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0");}else{Laya["QQMiniAdapter"].enable();}}else if(!Laya["MiniAdpter"]){console.error("请先添加小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0");}else{Laya["MiniAdpter"].enable();}}
if(u.indexOf("SwanGame")>-1){if(!Laya["BMiniAdapter"]){console.error("请先添加百度小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0");}else{Laya["BMiniAdapter"].enable();}}
if((typeof getApp=='function')){if(!Laya["KGMiniAdapter"]){console.error("请先添加小米小游戏适配库,详细教程：https://ldc2.layabox.com/doc/?nav=zh-ts-5-0-0");}else{Laya["KGMiniAdapter"].enable();}}
if(u.indexOf('OPPO')>-1&&u.indexOf('MiniGame')>-1){if(!Laya["QGMiniAdapter"]){console.error("请先添加OPPO小游戏适配库");}else{Laya["QGMiniAdapter"].enable();}}
if(u.indexOf('VVGame')>-1){if(!Laya["VVMiniAdapter"]){console.error("请先添加VIVO小游戏适配库");}else{Laya["VVMiniAdapter"].enable();}}
if(u.indexOf('AlipayMiniGame')>-1){if(!Laya["ALIMiniAdapter"]){console.error("请先添加VIVO小游戏适配库");}else{Laya["ALIMiniAdapter"].enable();}}
win.trace=console.log;win.requestAnimationFrame=win.requestAnimationFrame||win.webkitRequestAnimationFrame||win.mozRequestAnimationFrame||win.oRequestAnimationFrame||win.msRequestAnimationFrame||function(fun){return win.setTimeout(fun,1000/60);};var bodyStyle=doc.body.style;bodyStyle.margin=0;bodyStyle.overflow='hidden';bodyStyle['-webkit-user-select']='none';bodyStyle['-webkit-tap-highlight-color']='rgba(200,200,200,0)';var metas=doc.getElementsByTagName('meta');var i=0,flag=false,content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no';while(i<metas.length){var meta=metas[i];if(meta.name=='viewport'){meta.content=content;flag=true;break;}
i++;}
if(!flag){meta=doc.createElement('meta');meta.name='viewport',meta.content=content;doc.getElementsByTagName('head')[0].appendChild(meta);}
Browser.onMobile=window.isConchApp?true:u.indexOf("Mobile")>-1;Browser.onIOS=!!u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/);Browser.onIPhone=u.indexOf("iPhone")>-1;Browser.onMac=u.indexOf("Mac OS X")>-1;Browser.onIPad=u.indexOf("iPad")>-1;Browser.onAndroid=u.indexOf('Android')>-1||u.indexOf('Adr')>-1;Browser.onWP=u.indexOf("Windows Phone")>-1;Browser.onQQBrowser=u.indexOf("QQBrowser")>-1;Browser.onMQQBrowser=u.indexOf("MQQBrowser")>-1||(u.indexOf("Mobile")>-1&&u.indexOf("QQ")>-1);Browser.onIE=!!win.ActiveXObject||"ActiveXObject"in win;Browser.onWeiXin=u.indexOf('MicroMessenger')>-1;Browser.onSafari=u.indexOf("Safari")>-1;Browser.onPC=!Browser.onMobile;Browser.onMiniGame=u.indexOf('MiniGame')>-1;Browser.onBDMiniGame=u.indexOf('SwanGame')>-1;if(u.indexOf('OPPO')>-1&&u.indexOf('MiniGame')>-1){Browser.onQGMiniGame=true;Browser.onMiniGame=false;}else if(laya.utils.Browser.window.hasOwnProperty("bl")&&u.indexOf('MiniGame')>-1){Browser.onBLMiniGame=true;Browser.onMiniGame=false;}else if(laya.utils.Browser.window.hasOwnProperty("qq")&&u.indexOf('MiniGame')>-1){Browser.onQQMiniGame=true;Browser.onMiniGame=false;}
Browser.onVVMiniGame=u.indexOf('VVGame')>-1;Browser.onLimixiu=u.indexOf('limixiu')>-1;Browser.onKGMiniGame=u.indexOf('QuickGame')>-1;if(u.indexOf('AlipayMiniGame')>-1){Browser.onAlipayMiniGame=true;Browser.onMiniGame=false;}
Browser.supportLocalStorage=LocalStorage.__init__();Browser.supportWebAudio=SoundManager.__init__();Render._mainCanvas=new HTMLCanvas(true);var style=Render._mainCanvas.source.style;style.position='absolute';style.top=style.left="0px";style.background="#000000";Browser.canvas=new HTMLCanvas(true);Browser.context=Browser.canvas.getContext('2d');var tmpCanv=new HTMLCanvas(true);if(laya.utils.Browser.onQGMiniGame||laya.utils.Browser.onVVMiniGame)
tmpCanv=Render._mainCanvas;var names=["webgl","experimental-webgl","webkit-3d","moz-webgl"];var gl=null;for(i=0;i<names.length;i++){try{gl=tmpCanv.source.getContext(names[i]);}catch(e){}
if(gl){Browser._supportWebGL=true;break;}}
return win;}
Browser.createElement=function(type){Browser.__init__();return Browser._document.createElement(type);}
Browser.getElementById=function(type){Browser.__init__();return Browser._document.getElementById(type);}
Browser.removeElement=function(ele){if(ele&&ele.parentNode)ele.parentNode.removeChild(ele);}
Browser.now=function(){return Date.now();;}
Browser.userAgent=null;Browser.onMobile=false;Browser.onIOS=false;Browser.onMac=false;Browser.onIPhone=false;Browser.onIPad=false;Browser.onAndroid=false;Browser.onWP=false;Browser.onQQBrowser=false;Browser.onMQQBrowser=false;Browser.onSafari=false;Browser.onIE=false;Browser.onWeiXin=false;Browser.onPC=false;Browser.onMiniGame=false;Browser.onBDMiniGame=false;Browser.onVVMiniGame=false;Browser.onKGMiniGame=false;Browser.onQGMiniGame=false;Browser.onBLMiniGame=false;Browser.onAlipayMiniGame=false;Browser.onQQMiniGame=false;Browser.onLimixiu=false;Browser.onFirefox=false;Browser.onEdge=false;Browser.supportWebAudio=false;Browser.supportLocalStorage=false;Browser.canvas=null;Browser.context=null;Browser._window=null;Browser._document=null;Browser._container=null;Browser._pixelRatio=-1;Browser._supportWebGL=false;return Browser;})()
var SaveTransform=(function(){function SaveTransform(){this._matrix=new Matrix();}
__class(SaveTransform,'laya.webgl.canvas.save.SaveTransform');var __proto=SaveTransform.prototype;Laya.imps(__proto,{"laya.webgl.canvas.save.ISaveData":true})
__proto.isSaveMark=function(){return false;}
__proto.restore=function(context){context._curMat=this._savematrix;SaveTransform.POOL[SaveTransform.POOL._length++]=this;}
SaveTransform.save=function(context){var _saveMark=context._saveMark;if((_saveMark._saveuse&0x800)===0x800)return;_saveMark._saveuse|=0x800;var no=SaveTransform.POOL;var o=no._length>0?no[--no._length]:(new SaveTransform());o._savematrix=context._curMat;context._curMat=context._curMat.copyTo(o._matrix);var _save=context._save;_save[_save._length++]=o;}
SaveTransform.POOL=SaveBase._createArray();return SaveTransform;})()
var CommandEncoder=(function(){function CommandEncoder(layagl,reserveSize,adjustSize,isSyncToRenderThread){this._idata=[];}
__class(CommandEncoder,'laya.layagl.CommandEncoder');var __proto=CommandEncoder.prototype;__proto.getArrayData=function(){return this._idata;}
__proto.getPtrID=function(){return 0;}
__proto.beginEncoding=function(){}
__proto.endEncoding=function(){}
__proto.clearEncoding=function(){this._idata.length=0;}
__proto.getCount=function(){return this._idata.length;}
__proto.add_ShaderValue=function(o){this._idata.push(o);}
__proto.addShaderUniform=function(one){this.add_ShaderValue(one);}
return CommandEncoder;})()
var FillBorderTextCmd=(function(){function FillBorderTextCmd(){}
__class(FillBorderTextCmd,'laya.display.cmd.FillBorderTextCmd');var __proto=FillBorderTextCmd.prototype;__proto.recover=function(){Pool.recover("FillBorderTextCmd",this);}
__proto.run=function(context,gx,gy){context.fillBorderText(this.text,this.x+gx,this.y+gy,this.font,this.fillColor,this.borderColor,this.lineWidth,this.textAlign);}
__getset(0,__proto,'cmdID',function(){return"FillBorderText";});FillBorderTextCmd.create=function(text,x,y,font,fillColor,borderColor,lineWidth,textAlign){var cmd=Pool.getItemByClass("FillBorderTextCmd",FillBorderTextCmd);cmd.text=text;cmd.x=x;cmd.y=y;cmd.font=font;cmd.fillColor=fillColor;cmd.borderColor=borderColor;cmd.lineWidth=lineWidth;cmd.textAlign=textAlign;return cmd;}
FillBorderTextCmd.ID="FillBorderText";return FillBorderTextCmd;})()
var Bezier=(function(){function Bezier(){this._controlPoints=[new Point(),new Point(),new Point()];this._calFun=this.getPoint2;}
__class(Bezier,'laya.maths.Bezier');var __proto=Bezier.prototype;__proto._switchPoint=function(x,y){var tPoint=this._controlPoints.shift();tPoint.setTo(x,y);this._controlPoints.push(tPoint);}
__proto.getPoint2=function(t,rst){var p1=this._controlPoints[0];var p2=this._controlPoints[1];var p3=this._controlPoints[2];var lineX=Math.pow((1-t),2)*p1.x+2*t*(1-t)*p2.x+Math.pow(t,2)*p3.x;var lineY=Math.pow((1-t),2)*p1.y+2*t*(1-t)*p2.y+Math.pow(t,2)*p3.y;rst.push(lineX,lineY);}
__proto.getPoint3=function(t,rst){var p1=this._controlPoints[0];var p2=this._controlPoints[1];var p3=this._controlPoints[2];var p4=this._controlPoints[3];var lineX=Math.pow((1-t),3)*p1.x+3*p2.x*t*(1-t)*(1-t)+3*p3.x*t*t*(1-t)+p4.x*Math.pow(t,3);var lineY=Math.pow((1-t),3)*p1.y+3*p2.y*t*(1-t)*(1-t)+3*p3.y*t*t*(1-t)+p4.y*Math.pow(t,3);rst.push(lineX,lineY);}
__proto.insertPoints=function(count,rst){var i=NaN;count=count>0?count:5;var dLen=NaN;dLen=1/count;for(i=0;i<=1;i+=dLen){this._calFun(i,rst);}}
__proto.getBezierPoints=function(pList,inSertCount,count){(inSertCount===void 0)&&(inSertCount=5);(count===void 0)&&(count=2);var i=0,len=0;len=pList.length;if(len<(count+1)*2)return[];var rst=[];switch(count){case 2:this._calFun=this.getPoint2;break;case 3:this._calFun=this.getPoint3;break;default:return[];}
while(this._controlPoints.length<=count){this._controlPoints.push(Point.create());}
for(i=0;i<count*2;i+=2){this._switchPoint(pList[i],pList[i+1]);}
for(i=count*2;i<len;i+=2){this._switchPoint(pList[i],pList[i+1]);if((i/2)%count==0)this.insertPoints(inSertCount,rst);}
return rst;}
__static(Bezier,['I',function(){return this.I=new Bezier();}]);return Bezier;})()
var Draw9GridTexture=(function(){function Draw9GridTexture(){}
__class(Draw9GridTexture,'laya.display.cmd.Draw9GridTexture');var __proto=Draw9GridTexture.prototype;__proto.recover=function(){this.texture._removeReference();Pool.recover("Draw9GridTexture",this);}
__proto.run=function(context,gx,gy){context.drawTextureWithSizeGrid(this.texture,this.x,this.y,this.width,this.height,this.sizeGrid,gx,gy);}
__getset(0,__proto,'cmdID',function(){return"Draw9GridTexture";});Draw9GridTexture.create=function(texture,x,y,width,height,sizeGrid){var cmd=Pool.getItemByClass("Draw9GridTexture",Draw9GridTexture);cmd.texture=texture;texture._addReference();cmd.x=x;cmd.y=y;cmd.width=width;cmd.height=height;cmd.sizeGrid=sizeGrid;return cmd;}
Draw9GridTexture.ID="Draw9GridTexture";return Draw9GridTexture;})()
var TextAtlas=(function(){function TextAtlas(){this.texWidth=1024;this.texHeight=1024;this.atlasgrid=null;this.protectDist=1;this.texture=null;this.charMaps={};this.texHeight=this.texWidth=TextRender.atlasWidth;this.texture=TextTexture.getTextTexture(this.texWidth,this.texHeight);if(this.texWidth/TextAtlas.atlasGridW>256){TextAtlas.atlasGridW=Math.ceil(this.texWidth/256);}
this.atlasgrid=new AtlasGrid(this.texWidth/TextAtlas.atlasGridW,this.texHeight/TextAtlas.atlasGridW,this.texture.id);}
__class(TextAtlas,'laya.webgl.text.TextAtlas');var __proto=TextAtlas.prototype;__proto.setProtecteDist=function(d){this.protectDist=d;}
__proto.getAEmpty=function(w,h,pt){var find=this.atlasgrid.addRect(1,Math.ceil(w/TextAtlas.atlasGridW),Math.ceil(h/TextAtlas.atlasGridW),pt);if(find){pt.x*=TextAtlas.atlasGridW;pt.y*=TextAtlas.atlasGridW;}
return find;}
__proto.destroy=function(){for(var k in this.charMaps){var ri=this.charMaps[k];ri.deleted=true;}
this.texture.discard();}
__proto.printDebugInfo=function(){}
__getset(0,__proto,'usedRate',function(){return this.atlasgrid._used;});TextAtlas.atlasGridW=16;return TextAtlas;})()
var StringKey=(function(){function StringKey(){this._strsToID={};this._idToStrs=[];this._length=0;}
__class(StringKey,'laya.utils.StringKey');var __proto=StringKey.prototype;__proto.add=function(str){var index=this._strsToID[str];if(index!=null)return index;this._idToStrs[this._length]=str;return this._strsToID[str]=this._length++;}
__proto.getID=function(str){var index=this._strsToID[str];return index==null?-1:index;}
__proto.getName=function(id){var str=this._idToStrs[id];return str==null?undefined:str;}
return StringKey;})()
var Dragging=(function(){function Dragging(){this.ratio=0.92;this.maxOffset=60;this._dragging=false;this._clickOnly=true;}
__class(Dragging,'laya.utils.Dragging');var __proto=Dragging.prototype;__proto.start=function(target,area,hasInertia,elasticDistance,elasticBackTime,data,disableMouseEvent,ratio){(ratio===void 0)&&(ratio=0.92);this.clearTimer();this.target=target;this.area=area;this.hasInertia=hasInertia;this.elasticDistance=area?elasticDistance:0;this.elasticBackTime=elasticBackTime;this.data=data;this._disableMouseEvent=disableMouseEvent;this.ratio=ratio;this._parent=target.parent;this._clickOnly=true;this._dragging=true;this._elasticRateX=this._elasticRateY=1;this._lastX=this._parent.mouseX;this._lastY=this._parent.mouseY;Laya.stage.on("mouseup",this,this.onStageMouseUp);Laya.stage.on("mouseout",this,this.onStageMouseUp);Laya.systemTimer.frameLoop(1,this,this.loop);}
__proto.clearTimer=function(){Laya.systemTimer.clear(this,this.loop);Laya.systemTimer.clear(this,this.tweenMove);if(this._tween){this._tween.recover();this._tween=null;}}
__proto.stop=function(){if(this._dragging){MouseManager.instance.disableMouseEvent=false;Laya.stage.off("mouseup",this,this.onStageMouseUp);Laya.stage.off("mouseout",this,this.onStageMouseUp);this._dragging=false;this.target&&this.area&&this.backToArea();this.clear();}}
__proto.loop=function(){var point=this._parent.getMousePoint();var mouseX=point.x;var mouseY=point.y;var offsetX=mouseX-this._lastX;var offsetY=mouseY-this._lastY;if(this._clickOnly){if(Math.abs(offsetX*Laya.stage._canvasTransform.getScaleX())>1||Math.abs(offsetY*Laya.stage._canvasTransform.getScaleY())>1){this._clickOnly=false;this._offsets||(this._offsets=[]);this._offsets.length=0;this.target.event("dragstart",this.data);MouseManager.instance.disableMouseEvent=this._disableMouseEvent;}else return;}else{this._offsets.push(offsetX,offsetY);}
if(offsetX===0&&offsetY===0)return;this._lastX=mouseX;this._lastY=mouseY;this.target.x+=offsetX*this._elasticRateX;this.target.y+=offsetY*this._elasticRateY;this.area&&this.checkArea();this.target.event("dragmove",this.data);}
__proto.checkArea=function(){if(this.elasticDistance<=0){this.backToArea();}else{if(this.target._x<this.area.x){var offsetX=this.area.x-this.target._x;}else if(this.target._x>this.area.x+this.area.width){offsetX=this.target._x-this.area.x-this.area.width;}else{offsetX=0;}
this._elasticRateX=Math.max(0,1-(offsetX/this.elasticDistance));if(this.target._y<this.area.y){var offsetY=this.area.y-this.target.y;}else if(this.target._y>this.area.y+this.area.height){offsetY=this.target._y-this.area.y-this.area.height;}else{offsetY=0;}
this._elasticRateY=Math.max(0,1-(offsetY/this.elasticDistance));}}
__proto.backToArea=function(){this.target.x=Math.min(Math.max(this.target._x,this.area.x),this.area.x+this.area.width);this.target.y=Math.min(Math.max(this.target._y,this.area.y),this.area.y+this.area.height);}
__proto.onStageMouseUp=function(e){MouseManager.instance.disableMouseEvent=false;Laya.stage.off("mouseup",this,this.onStageMouseUp);Laya.stage.off("mouseout",this,this.onStageMouseUp);Laya.systemTimer.clear(this,this.loop);if(this._clickOnly||!this.target)return;if(this.hasInertia){if(this._offsets.length<1){this._offsets.push(this._parent.mouseX-this._lastX,this._parent.mouseY-this._lastY);}
this._offsetX=this._offsetY=0;var len=this._offsets.length;var n=Math.min(len,6);var m=this._offsets.length-n;for(var i=len-1;i>m;i--){this._offsetY+=this._offsets[i--];this._offsetX+=this._offsets[i];}
this._offsetX=this._offsetX/n*2;this._offsetY=this._offsetY/n*2;if(Math.abs(this._offsetX)>this.maxOffset)this._offsetX=this._offsetX>0?this.maxOffset:-this.maxOffset;if(Math.abs(this._offsetY)>this.maxOffset)this._offsetY=this._offsetY>0?this.maxOffset:-this.maxOffset;Laya.systemTimer.frameLoop(1,this,this.tweenMove);}else if(this.elasticDistance>0){this.checkElastic();}else{this.clear();}}
__proto.checkElastic=function(){var tx=NaN;var ty=NaN;if(this.target.x<this.area.x)tx=this.area.x;else if(this.target._x>this.area.x+this.area.width)tx=this.area.x+this.area.width;if(this.target.y<this.area.y)ty=this.area.y;else if(this.target._y>this.area.y+this.area.height)ty=this.area.y+this.area.height;if(!isNaN(tx)||!isNaN(ty)){var obj={};if(!isNaN(tx))obj.x=tx;if(!isNaN(ty))obj.y=ty;this._tween=Tween.to(this.target,obj,this.elasticBackTime,Ease.sineOut,Handler.create(this,this.clear),0,false,false);}else{this.clear();}}
__proto.tweenMove=function(){this._offsetX*=this.ratio*this._elasticRateX;this._offsetY*=this.ratio*this._elasticRateY;this.target.x+=this._offsetX;this.target.y+=this._offsetY;this.area&&this.checkArea();this.target.event("dragmove",this.data);if((Math.abs(this._offsetX)<1&&Math.abs(this._offsetY)<1)||this._elasticRateX<0.5||this._elasticRateY<0.5){Laya.systemTimer.clear(this,this.tweenMove);if(this.elasticDistance>0)this.checkElastic();else this.clear();}}
__proto.clear=function(){if(this.target){this.clearTimer();var sp=this.target;this.target=null;this._parent=null;sp.event("dragend",this.data);}}
return Dragging;})()
var Earcut=(function(){function Earcut(){}
__class(Earcut,'laya.webgl.shapes.Earcut');Earcut.earcut=function(data,holeIndices,dim){dim=dim||2;var hasHoles=holeIndices&&holeIndices.length,outerLen=hasHoles?holeIndices[0]*dim:data.length,outerNode=Earcut.linkedList(data,0,outerLen,dim,true),triangles=[];if(!outerNode)return triangles;var minX,minY,maxX,maxY,x,y,invSize;if(hasHoles)outerNode=Earcut.eliminateHoles(data,holeIndices,outerNode,dim);if(data.length>80*dim){minX=maxX=data[0];minY=maxY=data[1];for(var i=dim;i<outerLen;i+=dim){x=data[i];y=data[i+1];if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y;}
invSize=Math.max(maxX-minX,maxY-minY);invSize=invSize!==0?1/invSize:0;}
Earcut.earcutLinked(outerNode,triangles,dim,minX,minY,invSize);return triangles;}
Earcut.linkedList=function(data,start,end,dim,clockwise){var i,last;if(clockwise===(Earcut.signedArea(data,start,end,dim)>0)){for(i=start;i<end;i+=dim)last=Earcut.insertNode(i,data[i],data[i+1],last);}else{for(i=end-dim;i>=start;i-=dim)last=Earcut.insertNode(i,data[i],data[i+1],last);}
if(last&&Earcut.equals(last,last.next)){Earcut.removeNode(last);last=last.next;}
return last;}
Earcut.filterPoints=function(start,end){if(!start)return start;if(!end)end=start;var p=start,again;do{again=false;if(!p.steiner&&(Earcut.equals(p,p.next)||Earcut.area(p.prev,p,p.next)===0)){Earcut.removeNode(p);p=end=p.prev;if(p===p.next)break;again=true;}else{p=p.next;}}while(again||p!==end);return end;}
Earcut.earcutLinked=function(ear,triangles,dim,minX,minY,invSize,pass){if(!ear)return;if(!pass&&invSize)Earcut.indexCurve(ear,minX,minY,invSize);var stop=ear,prev,next;while(ear.prev!==ear.next){prev=ear.prev;next=ear.next;if(invSize?Earcut.isEarHashed(ear,minX,minY,invSize):Earcut.isEar(ear)){triangles.push(prev.i/dim);triangles.push(ear.i/dim);triangles.push(next.i/dim);Earcut.removeNode(ear);ear=next.next;stop=next.next;continue;}
ear=next;if(ear===stop){if(!pass){Earcut.earcutLinked(Earcut.filterPoints(ear,null),triangles,dim,minX,minY,invSize,1);}else if(pass===1){ear=Earcut.cureLocalIntersections(ear,triangles,dim);Earcut.earcutLinked(ear,triangles,dim,minX,minY,invSize,2);}else if(pass===2){Earcut.splitEarcut(ear,triangles,dim,minX,minY,invSize);}
break;}}}
Earcut.isEar=function(ear){var a=ear.prev,b=ear,c=ear.next;if(Earcut.area(a,b,c)>=0)return false;var p=ear.next.next;while(p!==ear.prev){if(Earcut.pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&Earcut.area(p.prev,p,p.next)>=0)return false;p=p.next;}
return true;}
Earcut.isEarHashed=function(ear,minX,minY,invSize){var a=ear.prev,b=ear,c=ear.next;if(Earcut.area(a,b,c)>=0)return false;var minTX=a.x<b.x?(a.x<c.x?a.x:c.x):(b.x<c.x?b.x:c.x),minTY=a.y<b.y?(a.y<c.y?a.y:c.y):(b.y<c.y?b.y:c.y),maxTX=a.x>b.x?(a.x>c.x?a.x:c.x):(b.x>c.x?b.x:c.x),maxTY=a.y>b.y?(a.y>c.y?a.y:c.y):(b.y>c.y?b.y:c.y);var minZ=Earcut.zOrder(minTX,minTY,minX,minY,invSize),maxZ=Earcut.zOrder(maxTX,maxTY,minX,minY,invSize);var p=ear.nextZ;while(p&&p.z<=maxZ){if(p!==ear.prev&&p!==ear.next&&Earcut.pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&Earcut.area(p.prev,p,p.next)>=0)return false;p=p.nextZ;}
p=ear.prevZ;while(p&&p.z>=minZ){if(p!==ear.prev&&p!==ear.next&&Earcut.pointInTriangle(a.x,a.y,b.x,b.y,c.x,c.y,p.x,p.y)&&Earcut.area(p.prev,p,p.next)>=0)return false;p=p.prevZ;}
return true;}
Earcut.cureLocalIntersections=function(start,triangles,dim){var p=start;do{var a=p.prev,b=p.next.next;if(!Earcut.equals(a,b)&&Earcut.intersects(a,p,p.next,b)&&Earcut.locallyInside(a,b)&&Earcut.locallyInside(b,a)){triangles.push(a.i/dim);triangles.push(p.i/dim);triangles.push(b.i/dim);Earcut.removeNode(p);Earcut.removeNode(p.next);p=start=b;}
p=p.next;}while(p!==start);return p;}
Earcut.splitEarcut=function(start,triangles,dim,minX,minY,invSize){var a=start;do{var b=a.next.next;while(b!==a.prev){if(a.i!==b.i&&Earcut.isValidDiagonal(a,b)){var c=Earcut.splitPolygon(a,b);a=Earcut.filterPoints(a,a.next);c=Earcut.filterPoints(c,c.next);Earcut.earcutLinked(a,triangles,dim,minX,minY,invSize);Earcut.earcutLinked(c,triangles,dim,minX,minY,invSize);return;}
b=b.next;}
a=a.next;}while(a!==start);}
Earcut.eliminateHoles=function(data,holeIndices,outerNode,dim){var queue=[],i,len,start,end,list;for(i=0,len=holeIndices.length;i<len;i++){start=holeIndices[i]*dim;end=i<len-1?holeIndices[i+1]*dim:data.length;list=Earcut.linkedList(data,start,end,dim,false);if(list===list.next)list.steiner=true;queue.push(Earcut.getLeftmost(list));}
queue.sort(Earcut.compareX);for(i=0;i<queue.length;i++){Earcut.eliminateHole(queue[i],outerNode);outerNode=Earcut.filterPoints(outerNode,outerNode.next);}
return outerNode;}
Earcut.compareX=function(a,b){return a.x-b.x;}
Earcut.eliminateHole=function(hole,outerNode){outerNode=Earcut.findHoleBridge(hole,outerNode);if(outerNode){var b=Earcut.splitPolygon(outerNode,hole);Earcut.filterPoints(b,b.next);}}
Earcut.findHoleBridge=function(hole,outerNode){var p=outerNode,hx=hole.x,hy=hole.y,qx=-Infinity,m;do{if(hy<=p.y&&hy>=p.next.y&&p.next.y!==p.y){var x=p.x+(hy-p.y)*(p.next.x-p.x)/(p.next.y-p.y);if(x<=hx&&x>qx){qx=x;if(x===hx){if(hy===p.y)return p;if(hy===p.next.y)return p.next;}
m=p.x<p.next.x?p:p.next;}}
p=p.next;}while(p!==outerNode);if(!m)return null;if(hx===qx)return m.prev;var stop=m,mx=m.x,my=m.y,tanMin=Infinity,tan;p=m.next;while(p!==stop){if(hx>=p.x&&p.x>=mx&&hx!==p.x&&Earcut.pointInTriangle(hy<my?hx:qx,hy,mx,my,hy<my?qx:hx,hy,p.x,p.y)){tan=Math.abs(hy-p.y)/(hx-p.x);if((tan<tanMin||(tan===tanMin&&p.x>m.x))&&Earcut.locallyInside(p,hole)){m=p;tanMin=tan;}}
p=p.next;}
return m;}
Earcut.indexCurve=function(start,minX,minY,invSize){var p=start;do{if(p.z===null)p.z=Earcut.zOrder(p.x,p.y,minX,minY,invSize);p.prevZ=p.prev;p.nextZ=p.next;p=p.next;}while(p!==start);p.prevZ.nextZ=null;p.prevZ=null;Earcut.sortLinked(p);}
Earcut.sortLinked=function(list){var i,p,q,e,tail,numMerges,pSize,qSize,inSize=1;do{p=list;list=null;tail=null;numMerges=0;while(p){numMerges++;q=p;pSize=0;for(i=0;i<inSize;i++){pSize++;q=q.nextZ;if(!q)break;}
qSize=inSize;while(pSize>0||(qSize>0&&q)){if(pSize!==0&&(qSize===0||!q||p.z<=q.z)){e=p;p=p.nextZ;pSize--;}else{e=q;q=q.nextZ;qSize--;}
if(tail)tail.nextZ=e;else list=e;e.prevZ=tail;tail=e;}
p=q;}
tail.nextZ=null;inSize*=2;}while(numMerges>1);return list;}
Earcut.zOrder=function(x,y,minX,minY,invSize){x=32767*(x-minX)*invSize;y=32767*(y-minY)*invSize;x=(x|(x<<8))&0x00FF00FF;x=(x|(x<<4))&0x0F0F0F0F;x=(x|(x<<2))&0x33333333;x=(x|(x<<1))&0x55555555;y=(y|(y<<8))&0x00FF00FF;y=(y|(y<<4))&0x0F0F0F0F;y=(y|(y<<2))&0x33333333;y=(y|(y<<1))&0x55555555;return x|(y<<1);}
Earcut.getLeftmost=function(start){var p=start,leftmost=start;do{if(p.x<leftmost.x)leftmost=p;p=p.next;}while(p!==start);return leftmost;}
Earcut.pointInTriangle=function(ax,ay,bx,by,cx,cy,px,py){return(cx-px)*(ay-py)-(ax-px)*(cy-py)>=0&&(ax-px)*(by-py)-(bx-px)*(ay-py)>=0&&(bx-px)*(cy-py)-(cx-px)*(by-py)>=0;}
Earcut.isValidDiagonal=function(a,b){return a.next.i!==b.i&&a.prev.i!==b.i&&!Earcut.intersectsPolygon(a,b)&&Earcut.locallyInside(a,b)&&Earcut.locallyInside(b,a)&&Earcut.middleInside(a,b);}
Earcut.area=function(p,q,r){return(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y);}
Earcut.equals=function(p1,p2){return p1.x===p2.x&&p1.y===p2.y;}
Earcut.intersects=function(p1,q1,p2,q2){if((Earcut.equals(p1,q1)&&Earcut.equals(p2,q2))||(Earcut.equals(p1,q2)&&Earcut.equals(p2,q1)))return true;return Earcut.area(p1,q1,p2)>0!==Earcut.area(p1,q1,q2)>0&&Earcut.area(p2,q2,p1)>0!==Earcut.area(p2,q2,q1)>0;}
Earcut.intersectsPolygon=function(a,b){var p=a;do{if(p.i!==a.i&&p.next.i!==a.i&&p.i!==b.i&&p.next.i!==b.i&&Earcut.intersects(p,p.next,a,b))return true;p=p.next;}while(p!==a);return false;}
Earcut.locallyInside=function(a,b){return Earcut.area(a.prev,a,a.next)<0?Earcut.area(a,b,a.next)>=0&&Earcut.area(a,a.prev,b)>=0:Earcut.area(a,b,a.prev)<0||Earcut.area(a,a.next,b)<0;}
Earcut.middleInside=function(a,b){var p=a,inside=false,px=(a.x+b.x)/2,py=(a.y+b.y)/2;do{if(((p.y>py)!==(p.next.y>py))&&p.next.y!==p.y&&(px<(p.next.x-p.x)*(py-p.y)/(p.next.y-p.y)+p.x))
inside=!inside;p=p.next;}while(p!==a);return inside;}
Earcut.splitPolygon=function(a,b){var a2=new EarcutNode(a.i,a.x,a.y),b2=new EarcutNode(b.i,b.x,b.y),an=a.next,bp=b.prev;a.next=b;b.prev=a;a2.next=an;an.prev=a2;b2.next=a2;a2.prev=b2;bp.next=b2;b2.prev=bp;return b2;}
Earcut.insertNode=function(i,x,y,last){var p=new EarcutNode(i,x,y);if(!last){p.prev=p;p.next=p;}else{p.next=last.next;p.prev=last;last.next.prev=p;last.next=p;}
return p;}
Earcut.removeNode=function(p){p.next.prev=p.prev;p.prev.next=p.next;if(p.prevZ)p.prevZ.nextZ=p.nextZ;if(p.nextZ)p.nextZ.prevZ=p.prevZ;}
Earcut.signedArea=function(data,start,end,dim){var sum=0;for(var i=start,j=end-dim;i<end;i+=dim){sum+=(data[j]-data[i])*(data[i+1]+data[j+1]);j=i;}
return sum;}
return Earcut;})()
var ShaderNode=(function(){function ShaderNode(includefiles){this.childs=[];this.text="";this.parent=null;this.name=null;this.noCompile=false;this.includefiles=null;this.condition=null;this.conditionType=0;this.useFuns="";this.z=0;this.src=null;this.includefiles=includefiles;}
__class(ShaderNode,'laya.webgl.utils.ShaderNode');var __proto=ShaderNode.prototype;__proto.setParent=function(parent){parent.childs.push(this);this.z=parent.z+1;this.parent=parent;}
__proto.setCondition=function(condition,type){if(condition){this.conditionType=type;condition=condition.replace(/(\s*$)/g,"");this.condition=function(){return this[condition];}
this.condition.__condition=condition;}}
__proto.toscript=function(def,out){return this._toscript(def,out,++ShaderNode.__id);}
__proto._toscript=function(def,out,id){if(this.childs.length<1&&!this.text)return out;var outIndex=out.length;if(this.condition){var ifdef=!!this.condition.call(def);this.conditionType===2&&(ifdef=!ifdef);if(!ifdef)return out;}
this.text&&out.push(this.text);this.childs.length>0&&this.childs.forEach(function(o,index,arr){o._toscript(def,out,id);});if(this.includefiles.length>0&&this.useFuns.length>0){var funsCode;for(var i=0,n=this.includefiles.length;i<n;i++){if(this.includefiles[i].curUseID==id){continue;}
funsCode=this.includefiles[i].file.getFunsScript(this.useFuns);if(funsCode.length>0){this.includefiles[i].curUseID=id;out[0]=funsCode+out[0];}}}
return out;}
ShaderNode.__id=1;return ShaderNode;})()
var TranslateCmd=(function(){function TranslateCmd(){}
__class(TranslateCmd,'laya.display.cmd.TranslateCmd');var __proto=TranslateCmd.prototype;__proto.recover=function(){Pool.recover("TranslateCmd",this);}
__proto.run=function(context,gx,gy){context.translate(this.tx,this.ty);}
__getset(0,__proto,'cmdID',function(){return"Translate";});TranslateCmd.create=function(tx,ty){var cmd=Pool.getItemByClass("TranslateCmd",TranslateCmd);cmd.tx=tx;cmd.ty=ty;return cmd;}
TranslateCmd.ID="Translate";return TranslateCmd;})()
var Point=(function(){function Point(x,y){(x===void 0)&&(x=0);(y===void 0)&&(y=0);this.x=x;this.y=y;}
__class(Point,'laya.maths.Point');var __proto=Point.prototype;__proto.setTo=function(x,y){this.x=x;this.y=y;return this;}
__proto.reset=function(){this.x=this.y=0;return this;}
__proto.recover=function(){Pool.recover("Point",this.reset());}
__proto.distance=function(x,y){return Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));}
__proto.toString=function(){return this.x+","+this.y;}
__proto.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y);if(d>0){var id=1.0/d;this.x*=id;this.y*=id;}}
__proto.copy=function(point){return this.setTo(point.x,point.y);}
Point.create=function(){return Pool.getItemByClass("Point",Point);}
Point.TEMP=new Point();Point.EMPTY=new Point();return Point;})()
var Const=(function(){function Const(){}
__class(Const,'laya.Const');Const.NOT_ACTIVE=0x01;Const.ACTIVE_INHIERARCHY=0x02;Const.AWAKED=0x04;Const.NOT_READY=0x08;Const.DISPLAY=0x10;Const.HAS_ZORDER=0x20;Const.HAS_MOUSE=0x40;Const.DISPLAYED_INSTAGE=0x80;Const.DRAWCALL_OPTIMIZE=0x100;return Const;})()
var BasePoly=(function(){function BasePoly(){}
__class(BasePoly,'laya.webgl.shapes.BasePoly');BasePoly.createLine2=function(p,indices,lineWidth,indexBase,outVertex,loop){if(p.length<4)return null;var points=BasePoly.tempData.length>(p.length+2)?BasePoly.tempData:new Array(p.length+2);points[0]=p[0];points[1]=p[1];var newlen=2;var i=0;var length=p.length;for(i=2;i<length;i+=2){if(Math.abs(p[i]-p[i-2])+Math.abs(p[i+1]-p[i-1])>0.01){points[newlen++]=p[i];points[newlen++]=p[i+1];}}
if(loop&&Math.abs(p[0]-points[newlen-2])+Math.abs(p[1]-points[newlen-1])>0.01){points[newlen++]=p[0];points[newlen++]=p[1];};var result=outVertex;length=newlen/2;var w=lineWidth/2;var px,py,p1x,p1y,p2x,p2y,p3x,p3y;var perpx,perpy,perp2x,perp2y,perp3x,perp3y;var a1,b1,c1,a2,b2,c2;var denom,pdist,dist;p1x=points[0];p1y=points[1];p2x=points[2];p2y=points[3];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx=perpx/dist*w;perpy=perpy/dist*w;var tpx=perpx,tpy=perpy;result.push(p1x-perpx,p1y-perpy,p1x+perpx,p1y+perpy);for(i=1;i<length-1;i++){p1x=points[(i-1)*2];p1y=points[(i-1)*2+1];p2x=points[(i)*2];p2y=points[(i)*2+1];p3x=points[(i+1)*2];p3y=points[(i+1)*2+1];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx=perpx/dist*w;perpy=perpy/dist*w;perp2x=-(p2y-p3y);perp2y=p2x-p3x;dist=Math.sqrt(perp2x*perp2x+perp2y*perp2y);perp2x=perp2x/dist*w;perp2y=perp2y/dist*w;a1=(-perpy+p1y)-(-perpy+p2y);b1=(-perpx+p2x)-(-perpx+p1x);c1=(-perpx+p1x)*(-perpy+p2y)-(-perpx+p2x)*(-perpy+p1y);a2=(-perp2y+p3y)-(-perp2y+p2y);b2=(-perp2x+p2x)-(-perp2x+p3x);c2=(-perp2x+p3x)*(-perp2y+p2y)-(-perp2x+p2x)*(-perp2y+p3y);denom=a1*b2-a2*b1;if(Math.abs(denom)<0.1){denom+=10.1;result.push(p2x-perpx,p2y-perpy,p2x+perpx,p2y+perpy);continue;}
px=(b1*c2-b2*c1)/denom;py=(a2*c1-a1*c2)/denom;pdist=(px-p2x)*(px-p2x)+(py-p2y)+(py-p2y);result.push(px,py,p2x-(px-p2x),p2y-(py-p2y));}
p1x=points[newlen-4];p1y=points[newlen-3];p2x=points[newlen-2];p2y=points[newlen-1];perpx=-(p1y-p2y);perpy=p1x-p2x;dist=Math.sqrt(perpx*perpx+perpy*perpy);perpx=perpx/dist*w;perpy=perpy/dist*w;result.push(p2x-perpx,p2y-perpy,p2x+perpx,p2y+perpy);for(i=1;i<length;i++){indices.push(indexBase+(i-1)*2,indexBase+(i-1)*2+1,indexBase+i*2+1,indexBase+i*2+1,indexBase+i*2,indexBase+(i-1)*2);}
return result;}
BasePoly.createLineTriangle=function(path,color,width,loop,outvb,vbstride,outib){var points=path.slice();var ptlen=points.length;var p1x=points[0],p1y=points[1];var p2x=points[2],p2y=points[2];var len=0;var rp=0;var dx=0,dy=0;var pointnum=ptlen/2;if(pointnum<=1)return;if(pointnum==2){return;};var tmpData=new Array(pointnum*4);var realPtNum=0;var ci=0;for(var i=0;i<pointnum-1;i++){p1x=points[ci++],p1y=points[ci++];p2x=points[ci++],p2y=points[ci++];dx=p2x-p1x,dy=p2y-p1y;if(dx!=0&&dy!=0){len=Math.sqrt(dx*dx+dy*dy);if(len>1e-3){rp=realPtNum*4;tmpData[rp]=p1x;tmpData[rp+1]=p1y;tmpData[rp+2]=dx/len;tmpData[rp+3]=dy/len;realPtNum++;}}}
if(loop){p1x=points[ptlen-2],p1y=points[ptlen-1];p2x=points[0],p2y=points[1];dx=p2x-p1x,dy=p2y-p1y;if(dx!=0&&dy!=0){len=Math.sqrt(dx*dx+dy*dy);if(len>1e-3){rp=realPtNum*4;tmpData[rp]=p1x;tmpData[rp+1]=p1y;tmpData[rp+2]=dx/len;tmpData[rp+3]=dy/len;realPtNum++;}}}else{rp=realPtNum*4;tmpData[rp]=p1x;tmpData[rp+1]=p1y;tmpData[rp+2]=dx/len;tmpData[rp+3]=dy/len;realPtNum++;}
ci=0;for(i=0;i<pointnum;i++){p1x=points[ci],p1y=points[ci+1];p2x=points[ci+2],p2y=points[ci+3];var p3x=points[ci+4],p3y=points[ci+5];}
if(loop){}}
__static(BasePoly,['tempData',function(){return this.tempData=new Array(256);}]);return BasePoly;})()
var ScaleCmd=(function(){function ScaleCmd(){}
__class(ScaleCmd,'laya.display.cmd.ScaleCmd');var __proto=ScaleCmd.prototype;__proto.recover=function(){Pool.recover("ScaleCmd",this);}
__proto.run=function(context,gx,gy){context._scale(this.scaleX,this.scaleY,this.pivotX+gx,this.pivotY+gy);}
__getset(0,__proto,'cmdID',function(){return"Scale";});ScaleCmd.create=function(scaleX,scaleY,pivotX,pivotY){var cmd=Pool.getItemByClass("ScaleCmd",ScaleCmd);cmd.scaleX=scaleX;cmd.scaleY=scaleY;cmd.pivotX=pivotX;cmd.pivotY=pivotY;return cmd;}
ScaleCmd.ID="Scale";return ScaleCmd;})()
var AlphaCmd=(function(){function AlphaCmd(){}
__class(AlphaCmd,'laya.display.cmd.AlphaCmd');var __proto=AlphaCmd.prototype;__proto.recover=function(){Pool.recover("AlphaCmd",this);}
__proto.run=function(context,gx,gy){context.alpha(this.alpha);}
__getset(0,__proto,'cmdID',function(){return"Alpha";});AlphaCmd.create=function(alpha){var cmd=Pool.getItemByClass("AlphaCmd",AlphaCmd);cmd.alpha=alpha;return cmd;}
AlphaCmd.ID="Alpha";return AlphaCmd;})()
var Byte=(function(){function Byte(data){this._xd_=true;this._allocated_=8;this._pos_=0;this._length=0;if(data){this._u8d_=new Uint8Array(data);this._d_=new DataView(this._u8d_.buffer);this._length=this._d_.byteLength;}else{this._resizeBuffer(this._allocated_);}}
__class(Byte,'laya.utils.Byte');var __proto=Byte.prototype;__proto._resizeBuffer=function(len){try{var newByteView=new Uint8Array(len);if(this._u8d_!=null){if(this._u8d_.length<=len)newByteView.set(this._u8d_);else newByteView.set(this._u8d_.subarray(0,len));}
this._u8d_=newByteView;this._d_=new DataView(newByteView.buffer);}catch(err){throw"Invalid typed array length:"+len;}}
__proto.getString=function(){return this.readString();}
__proto.readString=function(){return this._rUTF(this.getUint16());}
__proto.getFloat32Array=function(start,len){return this.readFloat32Array(start,len);}
__proto.readFloat32Array=function(start,len){var end=start+len;end=(end>this._length)?this._length:end;var v=new Float32Array(this._d_.buffer.slice(start,end));this._pos_=end;return v;}
__proto.getUint8Array=function(start,len){return this.readUint8Array(start,len);}
__proto.readUint8Array=function(start,len){var end=start+len;end=(end>this._length)?this._length:end;var v=new Uint8Array(this._d_.buffer.slice(start,end));this._pos_=end;return v;}
__proto.getInt16Array=function(start,len){return this.readInt16Array(start,len);}
__proto.readInt16Array=function(start,len){var end=start+len;end=(end>this._length)?this._length:end;var v=new Int16Array(this._d_.buffer.slice(start,end));this._pos_=end;return v;}
__proto.getFloat32=function(){return this.readFloat32();}
__proto.readFloat32=function(){if(this._pos_+4>this._length)throw"getFloat32 error - Out of bounds";var v=this._d_.getFloat32(this._pos_,this._xd_);this._pos_+=4;return v;}
__proto.getFloat64=function(){return this.readFloat64();}
__proto.readFloat64=function(){if(this._pos_+8>this._length)throw"getFloat64 error - Out of bounds";var v=this._d_.getFloat64(this._pos_,this._xd_);this._pos_+=8;return v;}
__proto.writeFloat32=function(value){this._ensureWrite(this._pos_+4);this._d_.setFloat32(this._pos_,value,this._xd_);this._pos_+=4;}
__proto.writeFloat64=function(value){this._ensureWrite(this._pos_+8);this._d_.setFloat64(this._pos_,value,this._xd_);this._pos_+=8;}
__proto.getInt32=function(){return this.readInt32();}
__proto.readInt32=function(){if(this._pos_+4>this._length)throw"getInt32 error - Out of bounds";var float=this._d_.getInt32(this._pos_,this._xd_);this._pos_+=4;return float;}
__proto.getUint32=function(){return this.readUint32();}
__proto.readUint32=function(){if(this._pos_+4>this._length)throw"getUint32 error - Out of bounds";var v=this._d_.getUint32(this._pos_,this._xd_);this._pos_+=4;return v;}
__proto.writeInt32=function(value){this._ensureWrite(this._pos_+4);this._d_.setInt32(this._pos_,value,this._xd_);this._pos_+=4;}
__proto.writeUint32=function(value){this._ensureWrite(this._pos_+4);this._d_.setUint32(this._pos_,value,this._xd_);this._pos_+=4;}
__proto.getInt16=function(){return this.readInt16();}
__proto.readInt16=function(){if(this._pos_+2>this._length)throw"getInt16 error - Out of bounds";var us=this._d_.getInt16(this._pos_,this._xd_);this._pos_+=2;return us;}
__proto.getUint16=function(){return this.readUint16();}
__proto.readUint16=function(){if(this._pos_+2>this._length)throw"getUint16 error - Out of bounds";var us=this._d_.getUint16(this._pos_,this._xd_);this._pos_+=2;return us;}
__proto.writeUint16=function(value){this._ensureWrite(this._pos_+2);this._d_.setUint16(this._pos_,value,this._xd_);this._pos_+=2;}
__proto.writeInt16=function(value){this._ensureWrite(this._pos_+2);this._d_.setInt16(this._pos_,value,this._xd_);this._pos_+=2;}
__proto.getUint8=function(){return this.readUint8();}
__proto.readUint8=function(){if(this._pos_+1>this._length)throw"getUint8 error - Out of bounds";return this._u8d_[this._pos_++];}
__proto.writeUint8=function(value){this._ensureWrite(this._pos_+1);this._d_.setUint8(this._pos_,value);this._pos_++;}
__proto._getUInt8=function(pos){return this._readUInt8(pos);}
__proto._readUInt8=function(pos){return this._d_.getUint8(pos);}
__proto._getUint16=function(pos){return this._readUint16(pos);}
__proto._readUint16=function(pos){return this._d_.getUint16(pos,this._xd_);}
__proto._getMatrix=function(){return this._readMatrix();}
__proto._readMatrix=function(){var rst=new Matrix(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32());return rst;}
__proto._rUTF=function(len){var v="",max=this._pos_+len,c=0,c2=0,c3=0,f=String.fromCharCode;var u=this._u8d_,i=0;var strs=[];var n=0;strs.length=1000;while(this._pos_<max){c=u[this._pos_++];if(c<0x80){if(c!=0)
strs[n++]=f(c);}else if(c<0xE0){strs[n++]=f(((c&0x3F)<<6)|(u[this._pos_++]&0x7F));}else if(c<0xF0){c2=u[this._pos_++];strs[n++]=f(((c&0x1F)<<12)|((c2&0x7F)<<6)|(u[this._pos_++]&0x7F));}else{c2=u[this._pos_++];c3=u[this._pos_++];strs[n++]=f(((c&0x0F)<<18)|((c2&0x7F)<<12)|((c3<<6)&0x7F)|(u[this._pos_++]&0x7F));}
i++;}
strs.length=n;return strs.join('');}
__proto.getCustomString=function(len){return this.readCustomString(len);}
__proto.readCustomString=function(len){var v="",ulen=0,c=0,c2=0,f=String.fromCharCode;var u=this._u8d_,i=0;while(len>0){c=u[this._pos_];if(c<0x80){v+=f(c);this._pos_++;len--;}else{ulen=c-0x80;this._pos_++;len-=ulen;while(ulen>0){c=u[this._pos_++];c2=u[this._pos_++];v+=f((c2<<8)|c);ulen--;}}}
return v;}
__proto.clear=function(){this._pos_=0;this.length=0;}
__proto.__getBuffer=function(){return this._d_.buffer;}
__proto.writeUTFBytes=function(value){value=value+"";for(var i=0,sz=value.length;i<sz;i++){var c=value.charCodeAt(i);if(c<=0x7F){this.writeByte(c);}else if(c<=0x7FF){this._ensureWrite(this._pos_+2);this._u8d_.set([0xC0|(c>>6),0x80|(c&0x3F)],this._pos_);this._pos_+=2;}else if(c<=0xFFFF){this._ensureWrite(this._pos_+3);this._u8d_.set([0xE0|(c>>12),0x80|((c>>6)&0x3F),0x80|(c&0x3F)],this._pos_);this._pos_+=3;}else{this._ensureWrite(this._pos_+4);this._u8d_.set([0xF0|(c>>18),0x80|((c>>12)&0x3F),0x80|((c>>6)&0x3F),0x80|(c&0x3F)],this._pos_);this._pos_+=4;}}}
__proto.writeUTFString=function(value){var tPos=this.pos;this.writeUint16(1);this.writeUTFBytes(value);var dPos=this.pos-tPos-2;this._d_.setUint16(tPos,dPos,this._xd_);}
__proto.readUTFString=function(){return this.readUTFBytes(this.getUint16());}
__proto.getUTFString=function(){return this.readUTFString();}
__proto.readUTFBytes=function(len){(len===void 0)&&(len=-1);if(len===0)return"";var lastBytes=this.bytesAvailable;if(len>lastBytes)throw"readUTFBytes error - Out of bounds";len=len>0?len:lastBytes;return this._rUTF(len);}
__proto.getUTFBytes=function(len){(len===void 0)&&(len=-1);return this.readUTFBytes(len);}
__proto.writeByte=function(value){this._ensureWrite(this._pos_+1);this._d_.setInt8(this._pos_,value);this._pos_+=1;}
__proto.readByte=function(){if(this._pos_+1>this._length)throw"readByte error - Out of bounds";return this._d_.getInt8(this._pos_++);}
__proto.getByte=function(){return this.readByte();}
__proto._ensureWrite=function(lengthToEnsure){if(this._length<lengthToEnsure)this._length=lengthToEnsure;if(this._allocated_<lengthToEnsure)this.length=lengthToEnsure;}
__proto.writeArrayBuffer=function(arraybuffer,offset,length){(offset===void 0)&&(offset=0);(length===void 0)&&(length=0);if(offset<0||length<0)throw"writeArrayBuffer error - Out of bounds";if(length==0)length=arraybuffer.byteLength-offset;this._ensureWrite(this._pos_+length);var uint8array=new Uint8Array(arraybuffer);this._u8d_.set(uint8array.subarray(offset,offset+length),this._pos_);this._pos_+=length;}
__proto.readArrayBuffer=function(length){var rst;rst=this._u8d_.buffer.slice(this._pos_,this._pos_+length);this._pos_=this._pos_+length
return rst;}
__getset(0,__proto,'buffer',function(){var rstBuffer=this._d_.buffer;if(rstBuffer.byteLength===this._length)return rstBuffer;return rstBuffer.slice(0,this._length);});__getset(0,__proto,'endian',function(){return this._xd_?"littleEndian":"bigEndian";},function(value){this._xd_=(value==="littleEndian");});__getset(0,__proto,'length',function(){return this._length;},function(value){if(this._allocated_<value)this._resizeBuffer(this._allocated_=Math.floor(Math.max(value,this._allocated_*2)));else if(this._allocated_>value)this._resizeBuffer(this._allocated_=value);this._length=value;});__getset(0,__proto,'pos',function(){return this._pos_;},function(value){this._pos_=value;});__getset(0,__proto,'bytesAvailable',function(){return this._length-this._pos_;});Byte.getSystemEndian=function(){if(!Byte._sysEndian){var buffer=new ArrayBuffer(2);new DataView(buffer).setInt16(0,256,true);Byte._sysEndian=(new Int16Array(buffer))[0]===256?"littleEndian":"bigEndian";}
return Byte._sysEndian;}
Byte.BIG_ENDIAN="bigEndian";Byte.LITTLE_ENDIAN="littleEndian";Byte._sysEndian=null;return Byte;})()
var CallLater=(function(){var LaterHandler;function CallLater(){this._pool=[];this._map=[];this._laters=[];}
__class(CallLater,'laya.utils.CallLater');var __proto=CallLater.prototype;__proto._update=function(){var laters=this._laters;var len=laters.length;if(len>0){for(var i=0,n=len-1;i<=n;i++){var handler=laters[i];this._map[handler.key]=null;if(handler.method!==null){handler.run();handler.clear();}
this._pool.push(handler);i===n&&(n=laters.length-1);}
laters.length=0;}}
__proto._getHandler=function(caller,method){var cid=caller?caller.$_GID||(caller.$_GID=Utils.getGID()):0;var mid=method.$_TID||(method.$_TID=(Timer._mid++)*100000);return this._map[cid+mid];}
__proto.callLater=function(caller,method,args){if(this._getHandler(caller,method)==null){if(this._pool.length)
var handler=this._pool.pop();else handler=new LaterHandler();handler.caller=caller;handler.method=method;handler.args=args;var cid=caller?caller.$_GID:0;var mid=method["$_TID"];handler.key=cid+mid;this._map[handler.key]=handler
this._laters.push(handler);}}
__proto.runCallLater=function(caller,method){var handler=this._getHandler(caller,method);if(handler&&handler.method!=null){this._map[handler.key]=null;handler.run();handler.clear();}}
CallLater.I=new CallLater();CallLater.__init$=function(){LaterHandler=(function(){function LaterHandler(){this.key=0;this.caller=null;this.method=null;this.args=null;}
__class(LaterHandler,'');var __proto=LaterHandler.prototype;__proto.clear=function(){this.caller=null;this.method=null;this.args=null;}
__proto.run=function(){var caller=this.caller;if(caller&&caller.destroyed)return this.clear();var method=this.method;var args=this.args;if(method==null)return;args?method.apply(caller,args):method.call(caller);}
return LaterHandler;})()}
return CallLater;})()
var Graphics=(function(){function Graphics(){this._sp=null;this._one=null;this._cmds=null;this._vectorgraphArray=null;this._graphicBounds=null;this.autoDestroy=false;this._render=this._renderEmpty;this._createData();}
__class(Graphics,'laya.display.Graphics');var __proto=Graphics.prototype;__proto._createData=function(){}
__proto._clearData=function(){}
__proto._destroyData=function(){}
__proto.destroy=function(){this.clear(true);if(this._graphicBounds)this._graphicBounds.destroy();this._graphicBounds=null;this._vectorgraphArray=null;if(this._sp){this._sp._renderType=0;this._sp._setRenderType(0);this._sp=null;}
this._destroyData();}
__proto.clear=function(recoverCmds){(recoverCmds===void 0)&&(recoverCmds=true);if(recoverCmds){var tCmd=this._one;if(this._cmds){var i=0,len=this._cmds.length;for(i=0;i<len;i++){tCmd=this._cmds[i];tCmd.recover();}
this._cmds.length=0;}else if(tCmd){tCmd.recover();}}else{this._cmds=null;}
this._one=null;this._render=this._renderEmpty;this._clearData();if(this._sp){this._sp._renderType&=~0x200;this._sp._setRenderType(this._sp._renderType);}
this._repaint();if(this._vectorgraphArray){for(i=0,len=this._vectorgraphArray.length;i<len;i++){VectorGraphManager.getInstance().deleteShape(this._vectorgraphArray[i]);}
this._vectorgraphArray.length=0;}}
__proto._clearBoundsCache=function(){if(this._graphicBounds)this._graphicBounds.reset();}
__proto._initGraphicBounds=function(){if(!this._graphicBounds){this._graphicBounds=GraphicsBounds.create();this._graphicBounds._graphics=this;}}
__proto._repaint=function(){this._clearBoundsCache();this._sp&&this._sp.repaint();}
__proto._isOnlyOne=function(){return!this._cmds||this._cmds.length===0;}
__proto.getBounds=function(realSize){(realSize===void 0)&&(realSize=false);this._initGraphicBounds();return this._graphicBounds.getBounds(realSize);}
__proto.getBoundPoints=function(realSize){(realSize===void 0)&&(realSize=false);this._initGraphicBounds();return this._graphicBounds.getBoundPoints(realSize);}
__proto.drawImage=function(texture,x,y,width,height){(x===void 0)&&(x=0);(y===void 0)&&(y=0);(width===void 0)&&(width=0);(height===void 0)&&(height=0);if(!texture)return null;if(!width)width=texture.sourceWidth;if(!height)height=texture.sourceHeight;if(texture.getIsReady()){var wRate=width/texture.sourceWidth;var hRate=height/texture.sourceHeight;width=texture.width*wRate;height=texture.height*hRate;if(width<=0||height<=0)return null;x+=texture.offsetX*wRate;y+=texture.offsetY*hRate;}
if(this._sp){this._sp._renderType|=0x200;this._sp._setRenderType(this._sp._renderType);};var args=DrawImageCmd.create.call(this,texture,x,y,width,height);if(this._one==null){this._one=args;this._render=this._renderOneImg;}else{this._saveToCmd(null,args);}
this._repaint();return args;}
__proto.drawTexture=function(texture,x,y,width,height,matrix,alpha,color,blendMode){(x===void 0)&&(x=0);(y===void 0)&&(y=0);(width===void 0)&&(width=0);(height===void 0)&&(height=0);(alpha===void 0)&&(alpha=1);if(!texture||alpha<0.01)return null;if(!texture.getIsReady())return null;if(!width)width=texture.sourceWidth;if(!height)height=texture.sourceHeight;if(texture.getIsReady()){var wRate=width/texture.sourceWidth;var hRate=height/texture.sourceHeight;width=texture.width*wRate;height=texture.height*hRate;if(width<=0||height<=0)return null;x+=texture.offsetX*wRate;y+=texture.offsetY*hRate;}
if(this._sp){this._sp._renderType|=0x200;this._sp._setRenderType(this._sp._renderType);};var args=DrawTextureCmd.create.call(this,texture,x,y,width,height,matrix,alpha,color,blendMode);this._repaint();return this._saveToCmd(null,args);}
__proto.drawTextures=function(texture,pos){if(!texture)return null;return this._saveToCmd(Render._context.drawTextures,DrawTexturesCmd.create.call(this,texture,pos));}
__proto.drawTriangles=function(texture,x,y,vertices,uvs,indices,matrix,alpha,color,blendMode){(alpha===void 0)&&(alpha=1);return this._saveToCmd(Render._context.drawTriangles,DrawTrianglesCmd.create.call(this,texture,x,y,vertices,uvs,indices,matrix,alpha,color,blendMode));}
__proto.fillTexture=function(texture,x,y,width,height,type,offset){(width===void 0)&&(width=0);(height===void 0)&&(height=0);(type===void 0)&&(type="repeat");if(texture&&texture.getIsReady())
return this._saveToCmd(Render._context._fillTexture,FillTextureCmd.create.call(this,texture,x,y,width,height,type,offset||Point.EMPTY,{}));else
return null;}
__proto._saveToCmd=function(fun,args){if(this._sp){this._sp._renderType|=0x200;this._sp._setRenderType(this._sp._renderType);}
if(this._one==null){this._one=args;this._render=this._renderOne;}else{this._render=this._renderAll;(this._cmds||(this._cmds=[])).length===0&&this._cmds.push(this._one);this._cmds.push(args);}
this._repaint();return args;}
__proto.clipRect=function(x,y,width,height){return this._saveToCmd(Render._context.clipRect,ClipRectCmd.create.call(this,x,y,width,height));}
__proto.fillText=function(text,x,y,font,color,textAlign){return this._saveToCmd(Render._context.fillText,FillTextCmd.create.call(this,text,x,y,font||Text.defaultFontStr(),color,textAlign));}
__proto.fillBorderText=function(text,x,y,font,fillColor,borderColor,lineWidth,textAlign){return this._saveToCmd(Render._context.fillBorderText,FillBorderTextCmd.create.call(this,text,x,y,font||Text.defaultFontStr(),fillColor,borderColor,lineWidth,textAlign));}
__proto.fillWords=function(words,x,y,font,color){return this._saveToCmd(Render._context.fillWords,FillWordsCmd.create.call(this,words,x,y,font||Text.defaultFontStr(),color));}
__proto.fillBorderWords=function(words,x,y,font,fillColor,borderColor,lineWidth){return this._saveToCmd(Render._context.fillBorderWords,FillBorderWordsCmd.create.call(this,words,x,y,font||Text.defaultFontStr(),fillColor,borderColor,lineWidth));}
__proto.strokeText=function(text,x,y,font,color,lineWidth,textAlign){return this._saveToCmd(Render._context.fillBorderText,StrokeTextCmd.create.call(this,text,x,y,font||Text.defaultFontStr(),null,color,lineWidth,textAlign));}
__proto.alpha=function(alpha){return this._saveToCmd(Render._context.alpha,AlphaCmd.create.call(this,alpha));}
__proto.transform=function(matrix,pivotX,pivotY){(pivotX===void 0)&&(pivotX=0);(pivotY===void 0)&&(pivotY=0);return this._saveToCmd(Render._context._transform,TransformCmd.create.call(this,matrix,pivotX,pivotY));}
__proto.rotate=function(angle,pivotX,pivotY){(pivotX===void 0)&&(pivotX=0);(pivotY===void 0)&&(pivotY=0);return this._saveToCmd(Render._context._rotate,RotateCmd.create.call(this,angle,pivotX,pivotY));}
__proto.scale=function(scaleX,scaleY,pivotX,pivotY){(pivotX===void 0)&&(pivotX=0);(pivotY===void 0)&&(pivotY=0);return this._saveToCmd(Render._context._scale,ScaleCmd.create.call(this,scaleX,scaleY,pivotX,pivotY));}
__proto.translate=function(tx,ty){return this._saveToCmd(Render._context.translate,TranslateCmd.create.call(this,tx,ty));}
__proto.save=function(){return this._saveToCmd(Render._context._save,SaveCmd.create.call(this));}
__proto.restore=function(){return this._saveToCmd(Render._context.restore,RestoreCmd.create.call(this));}
__proto.replaceText=function(text){this._repaint();var cmds=this._cmds;if(!cmds){if(this._one&&this._isTextCmd(this._one)){this._one.text=text;return true;}}else{for(var i=cmds.length-1;i>-1;i--){if(this._isTextCmd(cmds[i])){cmds[i].text=text;return true;}}}
return false;}
__proto._isTextCmd=function(cmd){var cmdID=cmd.cmdID;return cmdID=="FillText"||cmdID=="StrokeText"||cmdID=="FillBorderText";}
__proto.replaceTextColor=function(color){this._repaint();var cmds=this._cmds;if(!cmds){if(this._one&&this._isTextCmd(this._one)){this._setTextCmdColor(this._one,color);}}else{for(var i=cmds.length-1;i>-1;i--){if(this._isTextCmd(cmds[i])){this._setTextCmdColor(cmds[i],color);}}}}
__proto._setTextCmdColor=function(cmdO,color){var cmdID=cmdO.cmdID;switch(cmdID){case"FillText":case"StrokeText":cmdO.color=color;break;case"FillBorderText":case"FillBorderWords":case"FillBorderText":cmdO.fillColor=color;break;}}
__proto.loadImage=function(url,x,y,width,height,complete){(x===void 0)&&(x=0);(y===void 0)&&(y=0);(width===void 0)&&(width=0);(height===void 0)&&(height=0);var tex=Loader.getRes(url);if(!tex){tex=new Texture();tex.load(url);Loader.cacheRes(url,tex);tex.once("ready",this,this.drawImage,[tex,x,y,width,height]);}else{if(!tex.getIsReady()){tex.once("ready",this,this.drawImage,[tex,x,y,width,height]);}else
this.drawImage(tex,x,y,width,height);}
if(complete!=null){tex.getIsReady()?complete.call(this._sp):tex.on("ready",this._sp,complete);}}
__proto._renderEmpty=function(sprite,context,x,y){}
__proto._renderAll=function(sprite,context,x,y){var cmds=this._cmds;for(var i=0,n=cmds.length;i<n;i++){cmds[i].run(context,x,y);}}
__proto._renderOne=function(sprite,context,x,y){context.sprite=sprite;this._one.run(context,x,y);}
__proto._renderOneImg=function(sprite,context,x,y){context.sprite=sprite;this._one.run(context,x,y);}
__proto.drawLine=function(fromX,fromY,toX,toY,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);var offset=(lineWidth<1||lineWidth%2===0)?0:0.5;return this._saveToCmd(Render._context._drawLine,DrawLineCmd.create.call(this,fromX+offset,fromY+offset,toX+offset,toY+offset,lineColor,lineWidth,0));}
__proto.drawLines=function(x,y,points,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);if(!points||points.length<4)return null;var offset=(lineWidth<1||lineWidth%2===0)?0:0.5;return this._saveToCmd(Render._context._drawLines,DrawLinesCmd.create.call(this,x+offset,y+offset,points,lineColor,lineWidth,0));}
__proto.drawCurves=function(x,y,points,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);return this._saveToCmd(Render._context.drawCurves,DrawCurvesCmd.create.call(this,x,y,points,lineColor,lineWidth));}
__proto.drawRect=function(x,y,width,height,fillColor,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);var offset=(lineWidth>=1&&lineColor)?lineWidth/2:0;var lineOffset=lineColor?lineWidth:0;return this._saveToCmd(Render._context.drawRect,DrawRectCmd.create.call(this,x+offset,y+offset,width-lineOffset,height-lineOffset,fillColor,lineColor,lineWidth));}
__proto.drawCircle=function(x,y,radius,fillColor,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);var offset=(lineWidth>=1&&lineColor)?lineWidth/2:0;return this._saveToCmd(Render._context._drawCircle,DrawCircleCmd.create.call(this,x,y,radius-offset,fillColor,lineColor,lineWidth,0));}
__proto.drawPie=function(x,y,radius,startAngle,endAngle,fillColor,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);var offset=(lineWidth>=1&&lineColor)?lineWidth/2:0;var lineOffset=lineColor?lineWidth:0;return this._saveToCmd(Render._context._drawPie,DrawPieCmd.create.call(this,x+offset,y+offset,radius-lineOffset,Utils.toRadian(startAngle),Utils.toRadian(endAngle),fillColor,lineColor,lineWidth,0));}
__proto.drawPoly=function(x,y,points,fillColor,lineColor,lineWidth){(lineWidth===void 0)&&(lineWidth=1);var tIsConvexPolygon=false;if(points.length>6){tIsConvexPolygon=false;}else{tIsConvexPolygon=true;};var offset=(lineWidth>=1&&lineColor)?(lineWidth%2===0?0:0.5):0;return this._saveToCmd(Render._context._drawPoly,DrawPolyCmd.create.call(this,x+offset,y+offset,points,fillColor,lineColor,lineWidth,tIsConvexPolygon,0));}
__proto.drawPath=function(x,y,paths,brush,pen){return this._saveToCmd(Render._context._drawPath,DrawPathCmd.create.call(this,x,y,paths,brush,pen));}
__proto.draw9Grid=function(texture,x,y,width,height,sizeGrid){(x===void 0)&&(x=0);(y===void 0)&&(y=0);(width===void 0)&&(width=0);(height===void 0)&&(height=0);this._saveToCmd(null,Draw9GridTexture.create(texture,x,y,width,height,sizeGrid));}
__getset(0,__proto,'cmds',function(){return this._cmds;},function(value){if(this._sp){this._sp._renderType|=0x200;this._sp._setRenderType(this._sp._renderType);}
this._cmds=value;this._render=this._renderAll;this._repaint();});return Graphics;})()
var HTMLChar=(function(){function HTMLChar(){this.reset();}
__class(HTMLChar,'laya.utils.HTMLChar');var __proto=HTMLChar.prototype;__proto.setData=function(char,w,h,style){this.char=char;this.charNum=char.charCodeAt(0);this.x=this.y=0;this.width=w;this.height=h;this.style=style;this.isWord=!HTMLChar._isWordRegExp.test(char);return this;}
__proto.reset=function(){this.x=this.y=this.width=this.height=0;this.isWord=false;this.char=null;this.charNum=0;this.style=null;return this;}
__proto.recover=function(){Pool.recover("HTMLChar",this.reset());}
__proto._isChar=function(){return true;}
__proto._getCSSStyle=function(){return this.style;}
HTMLChar.create=function(){return Pool.getItemByClass("HTMLChar",HTMLChar);}
HTMLChar._isWordRegExp=new RegExp("[\\w\.]","");return HTMLChar;})()
var AtlasGrid=(function(){function AtlasGrid(width,height,id){this.atlasID=0;this._width=0;this._height=0;this._texCount=0;this._rowInfo=null;this._cells=null;this._used=0;(width===void 0)&&(width=0);(height===void 0)&&(height=0);(id===void 0)&&(id=0);this._cells=null;this._rowInfo=null;this.atlasID=id;this._init(width,height);}
__class(AtlasGrid,'laya.webgl.text.AtlasGrid');var __proto=AtlasGrid.prototype;__proto.addRect=function(type,width,height,pt){if(!this._get(width,height,pt))
return false;this._fill(pt.x,pt.y,width,height,type);this._texCount++;return true;}
__proto._release=function(){this._cells=null;this._rowInfo=null;}
__proto._init=function(width,height){this._width=width;this._height=height;this._release();if(this._width==0)return false;this._cells=new Uint8Array(this._width*this._height*3);this._rowInfo=new Uint8Array(this._height);this._used=0;this._clear();return true;}
__proto._get=function(width,height,pt){if(width>this._width||height>this._height){return false;};var rx=-1;var ry=-1;var nWidth=this._width;var nHeight=this._height;var pCellBox=this._cells;for(var y=0;y<nHeight;y++){if(this._rowInfo[y]<width)continue;for(var x=0;x<nWidth;){var tm=(y*nWidth+x)*3;if(pCellBox[tm]!=0||pCellBox[tm+1]<width||pCellBox[tm+2]<height){x+=pCellBox[tm+1];continue;}
rx=x;ry=y;for(var xx=0;xx<width;xx++){if(pCellBox[3*xx+tm+2]<height){rx=-1;break;}}
if(rx<0){x+=pCellBox[tm+1];continue;}
pt.x=rx;pt.y=ry;return true;}}
return false;}
__proto._fill=function(x,y,w,h,type){var nWidth=this._width;var nHeghit=this._height;this._check((x+w)<=nWidth&&(y+h)<=nHeghit);for(var yy=y;yy<(h+y);++yy){this._check(this._rowInfo[yy]>=w);this._rowInfo[yy]-=w;for(var xx=0;xx<w;xx++){var tm=(x+yy*nWidth+xx)*3;this._check(this._cells[tm]==0);this._cells[tm]=type;this._cells[tm+1]=w;this._cells[tm+2]=h;}}
if(x>0){for(yy=0;yy<h;++yy){var s=0;for(xx=x-1;xx>=0;--xx,++s){if(this._cells[((y+yy)*nWidth+xx)*3]!=0)break;}
for(xx=s;xx>0;--xx){this._cells[((y+yy)*nWidth+x-xx)*3+1]=xx;this._check(xx>0);}}}
if(y>0){for(xx=x;xx<(x+w);++xx){s=0;for(yy=y-1;yy>=0;--yy,s++){if(this._cells[(xx+yy*nWidth)*3]!=0)break;}
for(yy=s;yy>0;--yy){this._cells[(xx+(y-yy)*nWidth)*3+2]=yy;this._check(yy>0);}}}
this._used+=(w*h)/(this._width*this._height);}
__proto._check=function(ret){if(ret==false){console.log("xtexMerger 错误啦");}}
__proto._clear=function(){this._texCount=0;for(var y=0;y<this._height;y++){this._rowInfo[y]=this._width;}
for(var i=0;i<this._height;i++){for(var j=0;j<this._width;j++){var tm=(i*this._width+j)*3;this._cells[tm]=0;this._cells[tm+1]=this._width-j;this._cells[tm+2]=this._width-i;}}}
return AtlasGrid;})()
var StrokeTextCmd=(function(){function StrokeTextCmd(){}
__class(StrokeTextCmd,'laya.display.cmd.StrokeTextCmd');var __proto=StrokeTextCmd.prototype;__proto.recover=function(){Pool.recover("StrokeTextCmd",this);}
__proto.run=function(context,gx,gy){context.strokeWord(this.text,this.x+gx,this.y+gy,this.font,this.color,this.lineWidth,this.textAlign);}
__getset(0,__proto,'cmdID',function(){return"StrokeText";});StrokeTextCmd.create=function(text,x,y,font,color,lineWidth,textAlign){var cmd=Pool.getItemByClass("StrokeTextCmd",StrokeTextCmd);cmd.text=text;cmd.x=x;cmd.y=y;cmd.font=font;cmd.color=color;cmd.lineWidth=lineWidth;cmd.textAlign=textAlign;return cmd;}
StrokeTextCmd.ID="StrokeText";return StrokeTextCmd;})()
var ICharRender=(function(){function ICharRender(){}
__class(ICharRender,'laya.webgl.text.ICharRender');var __proto=ICharRender.prototype;__proto.getWidth=function(font,str){return 0;}
__proto.scale=function(sx,sy){}
__proto.getCharBmp=function(char,font,lineWidth,colStr,strokeColStr,size,margin_left,margin_top,margin_right,margin_bottom,rect){return null;}
__getset(0,__proto,'canvasWidth',function(){return 0;},function(w){});return ICharRender;})()
var Ease=(function(){function Ease(){}
__class(Ease,'laya.utils.Ease');Ease.linearNone=function(t,b,c,d){return c*t/d+b;}
Ease.linearIn=function(t,b,c,d){return c*t/d+b;}
Ease.linearInOut=function(t,b,c,d){return c*t/d+b;}
Ease.linearOut=function(t,b,c,d){return c*t/d+b;}
Ease.bounceIn=function(t,b,c,d){return c-Ease.bounceOut(d-t,0,c,d)+b;}
Ease.bounceInOut=function(t,b,c,d){if(t<d*0.5)return Ease.bounceIn(t*2,0,c,d)*.5+b;else return Ease.bounceOut(t*2-d,0,c,d)*.5+c*.5+b;}
Ease.bounceOut=function(t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}
Ease.backIn=function(t,b,c,d,s){(s===void 0)&&(s=1.70158);return c*(t/=d)*t*((s+1)*t-s)+b;}
Ease.backInOut=function(t,b,c,d,s){(s===void 0)&&(s=1.70158);if((t/=d*0.5)<1)return c*0.5*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;}
Ease.backOut=function(t,b,c,d,s){(s===void 0)&&(s=1.70158);return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;}
Ease.elasticIn=function(t,b,c,d,a,p){(a===void 0)&&(a=0);(p===void 0)&&(p=0);var s;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||(c>0&&a<c)||(c<0&&a<-c)){a=c;s=p/4;}else s=p/Ease.PI2*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*Ease.PI2/p))+b;}
Ease.elasticInOut=function(t,b,c,d,a,p){(a===void 0)&&(a=0);(p===void 0)&&(p=0);var s;if(t==0)return b;if((t/=d*0.5)==2)return b+c;if(!p)p=d*(.3*1.5);if(!a||(c>0&&a<c)||(c<0&&a<-c)){a=c;s=p/4;}else s=p/Ease.PI2*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*Ease.PI2/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*Ease.PI2/p)*.5+c+b;}
Ease.elasticOut=function(t,b,c,d,a,p){(a===void 0)&&(a=0);(p===void 0)&&(p=0);var s;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||(c>0&&a<c)||(c<0&&a<-c)){a=c;s=p/4;}else s=p/Ease.PI2*Math.asin(c/a);return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*Ease.PI2/p)+c+b);}
Ease.strongIn=function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;}
Ease.strongInOut=function(t,b,c,d){if((t/=d*0.5)<1)return c*0.5*t*t*t*t*t+b;return c*0.5*((t-=2)*t*t*t*t+2)+b;}
Ease.strongOut=function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;}
Ease.sineInOut=function(t,b,c,d){return-c*0.5*(Math.cos(Math.PI*t/d)-1)+b;}
Ease.sineIn=function(t,b,c,d){return-c*Math.cos(t/d*Ease.HALF_PI)+c+b;}
Ease.sineOut=function(t,b,c,d){return c*Math.sin(t/d*Ease.HALF_PI)+b;}
Ease.quintIn=function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;}
Ease.quintInOut=function(t,b,c,d){if((t/=d*0.5)<1)return c*0.5*t*t*t*t*t+b;return c*0.5*((t-=2)*t*t*t*t+2)+b;}
Ease.quintOut=function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;}
Ease.quartIn=function(t,b,c,d){return c*(t/=d)*t*t*t+b;}
Ease.quartInOut=function(t,b,c,d){if((t/=d*0.5)<1)return c*0.5*t*t*t*t+b;return-c*0.5*((t-=2)*t*t*t-2)+b;}
Ease.quartOut=function(t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;}
Ease.cubicIn=function(t,b,c,d){return c*(t/=d)*t*t+b;}
Ease.cubicInOut=function(t,b,c,d){if((t/=d*0.5)<1)return c*0.5*t*t*t+b;return c*0.5*((t-=2)*t*t+2)+b;}
Ease.cubicOut=function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;}
Ease.quadIn=function(t,b,c,d){return c*(t/=d)*t+b;}
Ease.quadInOut=function(t,b,c,d){if((t/=d*0.5)<1)return c*0.5*t*t+b;return-c*0.5*((--t)*(t-2)-1)+b;}
Ease.quadOut=function(t,b,c,d){return-c*(t/=d)*(t-2)+b;}
Ease.expoIn=function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b-c*0.001;}
Ease.expoInOut=function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d*0.5)<1)return c*0.5*Math.pow(2,10*(t-1))+b;return c*0.5*(-Math.pow(2,-10* --t)+2)+b;}
Ease.expoOut=function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;}
Ease.circIn=function(t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;}
Ease.circInOut=function(t,b,c,d){if((t/=d*0.5)<1)return-c*0.5*(Math.sqrt(1-t*t)-1)+b;return c*0.5*(Math.sqrt(1-(t-=2)*t)+1)+b;}
Ease.circOut=function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;}
Ease.HALF_PI=Math.PI*0.5;Ease.PI2=Math.PI*2;return Ease;})()
var PoolCache=(function(){function PoolCache(){this.sign=null;this.maxCount=1000;}
__class(PoolCache,'laya.utils.PoolCache');var __proto=PoolCache.prototype;__proto.getCacheList=function(){return Pool.getPoolBySign(this.sign);}
__proto.tryDispose=function(force){var list;list=Pool.getPoolBySign(this.sign);if(list.length>this.maxCount){list.splice(this.maxCount,list.length-this.maxCount);}}
PoolCache.addPoolCacheManager=function(sign,maxCount){(maxCount===void 0)&&(maxCount=100);var cache;cache=new PoolCache();cache.sign=sign;cache.maxCount=maxCount;CacheManger.regCacheByFunction(Utils.bind(cache.tryDispose,cache),Utils.bind(cache.getCacheList,cache));}
return PoolCache;})()
var MatirxArray=(function(){function MatirxArray(){}
__class(MatirxArray,'laya.webgl.utils.MatirxArray');MatirxArray.ArrayMul=function(a,b,o){if(!a){MatirxArray.copyArray(b,o);return;}
if(!b){MatirxArray.copyArray(a,o);return;};var ai0=NaN,ai1=NaN,ai2=NaN,ai3=NaN;for(var i=0;i<4;i++){ai0=a[i];ai1=a[i+4];ai2=a[i+8];ai3=a[i+12];o[i]=ai0*b[0]+ai1*b[1]+ai2*b[2]+ai3*b[3];o[i+4]=ai0*b[4]+ai1*b[5]+ai2*b[6]+ai3*b[7];o[i+8]=ai0*b[8]+ai1*b[9]+ai2*b[10]+ai3*b[11];o[i+12]=ai0*b[12]+ai1*b[13]+ai2*b[14]+ai3*b[15];}}
MatirxArray.copyArray=function(f,t){if(!f)return;if(!t)return;for(var i=0;i<f.length;i++){t[i]=f[i];}}
return MatirxArray;})()
var Mouse=(function(){function Mouse(){}
__class(Mouse,'laya.utils.Mouse');__getset(1,Mouse,'cursor',function(){return Mouse._style.cursor;},function(cursorStr){Mouse._style.cursor=cursorStr;});Mouse.hide=function(){if(Mouse.cursor!="none"){Mouse._preCursor=Mouse.cursor;Mouse.cursor="none";}}
Mouse.show=function(){if(Mouse.cursor=="none"){if(Mouse._preCursor){Mouse.cursor=Mouse._preCursor;}else{Mouse.cursor="auto";}}}
Mouse._preCursor=null;__static(Mouse,['_style',function(){return this._style=Browser.document.body.style;}]);return Mouse;})()
var VertexArrayObject=(function(){function VertexArrayObject(){}
__class(VertexArrayObject,'laya.webgl.VertexArrayObject');return VertexArrayObject;})()
(function(){var glErrorShadow={};function error(msg){if(window.console&&window.console.error){window.console.error(msg)}}
function log(msg){if(window.console&&window.console.log){window.console.log(msg)}}
function synthesizeGLError(err,opt_msg){glErrorShadow[err]=true;if(opt_msg!==undefined){error(opt_msg)}}
function wrapGLError(gl){var f=gl.getError;gl.getError=function(){var err;do{err=f.apply(gl);if(err!=gl.NO_ERROR){glErrorShadow[err]=true}}while(err!=gl.NO_ERROR);for(var err in glErrorShadow){if(glErrorShadow[err]){delete glErrorShadow[err];return parseInt(err)}}
return gl.NO_ERROR}}
var WebGLVertexArrayObjectOES=function WebGLVertexArrayObjectOES(ext){var gl=ext.gl;this.ext=ext;this.isAlive=true;this.hasBeenBound=false;this.elementArrayBuffer=null;this.attribs=new Array(ext.maxVertexAttribs);for(var n=0;n<this.attribs.length;n++){var attrib=new WebGLVertexArrayObjectOES.VertexAttrib(gl);this.attribs[n]=attrib}
this.maxAttrib=0};WebGLVertexArrayObjectOES.VertexAttrib=function VertexAttrib(gl){this.enabled=false;this.buffer=null;this.size=4;this.type=gl.FLOAT;this.normalized=false;this.stride=16;this.offset=0;this.cached="";this.recache()};WebGLVertexArrayObjectOES.VertexAttrib.prototype.recache=function recache(){this.cached=[this.size,this.type,this.normalized,this.stride,this.offset].join(":")};var OESVertexArrayObject=function OESVertexArrayObject(gl){var self=this;this.gl=gl;wrapGLError(gl);var original=this.original={getParameter:gl.getParameter,enableVertexAttribArray:gl.enableVertexAttribArray,disableVertexAttribArray:gl.disableVertexAttribArray,bindBuffer:gl.bindBuffer,getVertexAttrib:gl.getVertexAttrib,vertexAttribPointer:gl.vertexAttribPointer};gl.getParameter=function getParameter(pname){if(pname==self.VERTEX_ARRAY_BINDING_OES){if(self.currentVertexArrayObject==self.defaultVertexArrayObject){return null}else{return self.currentVertexArrayObject}}
return original.getParameter.apply(this,arguments)};gl.enableVertexAttribArray=function enableVertexAttribArray(index){var vao=self.currentVertexArrayObject;vao.maxAttrib=Math.max(vao.maxAttrib,index);var attrib=vao.attribs[index];attrib.enabled=true;return original.enableVertexAttribArray.apply(this,arguments)};gl.disableVertexAttribArray=function disableVertexAttribArray(index){var vao=self.currentVertexArrayObject;vao.maxAttrib=Math.max(vao.maxAttrib,index);var attrib=vao.attribs[index];attrib.enabled=false;return original.disableVertexAttribArray.apply(this,arguments)};gl.bindBuffer=function bindBuffer(target,buffer){switch(target){case gl.ARRAY_BUFFER:self.currentArrayBuffer=buffer;break;case gl.ELEMENT_ARRAY_BUFFER:self.currentVertexArrayObject.elementArrayBuffer=buffer;break}
return original.bindBuffer.apply(this,arguments)};gl.getVertexAttrib=function getVertexAttrib(index,pname){var vao=self.currentVertexArrayObject;var attrib=vao.attribs[index];switch(pname){case gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:return attrib.buffer;case gl.VERTEX_ATTRIB_ARRAY_ENABLED:return attrib.enabled;case gl.VERTEX_ATTRIB_ARRAY_SIZE:return attrib.size;case gl.VERTEX_ATTRIB_ARRAY_STRIDE:return attrib.stride;case gl.VERTEX_ATTRIB_ARRAY_TYPE:return attrib.type;case gl.VERTEX_ATTRIB_ARRAY_NORMALIZED:return attrib.normalized;default:return original.getVertexAttrib.apply(this,arguments)}};gl.vertexAttribPointer=function vertexAttribPointer(indx,size,type,normalized,stride,offset){var vao=self.currentVertexArrayObject;vao.maxAttrib=Math.max(vao.maxAttrib,indx);var attrib=vao.attribs[indx];attrib.buffer=self.currentArrayBuffer;attrib.size=size;attrib.type=type;attrib.normalized=normalized;attrib.stride=stride;attrib.offset=offset;attrib.recache();return original.vertexAttribPointer.apply(this,arguments)};if(gl.instrumentExtension){gl.instrumentExtension(this,"OES_vertex_array_object")}
if(gl.canvas&&gl.canvas.addEventListener)gl.canvas.addEventListener("webglcontextrestored",function(){log("OESVertexArrayObject emulation library context restored");self.reset_()},true);this.reset_()};OESVertexArrayObject.prototype.VERTEX_ARRAY_BINDING_OES=34229;OESVertexArrayObject.prototype.reset_=function reset_(){var contextWasLost=this.vertexArrayObjects!==undefined;if(contextWasLost){for(var ii=0;ii<this.vertexArrayObjects.length;++ii){this.vertexArrayObjects.isAlive=false}}
var gl=this.gl;this.maxVertexAttribs=gl.getParameter(gl.MAX_VERTEX_ATTRIBS);this.defaultVertexArrayObject=new WebGLVertexArrayObjectOES(this);this.currentVertexArrayObject=null;this.currentArrayBuffer=null;this.vertexArrayObjects=[this.defaultVertexArrayObject];this.bindVertexArrayOES(null)};OESVertexArrayObject.prototype.createVertexArrayOES=function createVertexArrayOES(){var arrayObject=new WebGLVertexArrayObjectOES(this);this.vertexArrayObjects.push(arrayObject);return arrayObject};OESVertexArrayObject.prototype.deleteVertexArrayOES=function deleteVertexArrayOES(arrayObject){arrayObject.isAlive=false;this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(arrayObject),1);if(this.currentVertexArrayObject==arrayObject){this.bindVertexArrayOES(null)}};OESVertexArrayObject.prototype.isVertexArrayOES=function isVertexArrayOES(arrayObject){if(arrayObject&&arrayObject instanceof WebGLVertexArrayObjectOES){if(arrayObject.hasBeenBound&&arrayObject.ext==this){return true}}
return false};OESVertexArrayObject.prototype.bindVertexArrayOES=function bindVertexArrayOES(arrayObject){var gl=this.gl;if(arrayObject&&!arrayObject.isAlive){synthesizeGLError(gl.INVALID_OPERATION,"bindVertexArrayOES: attempt to bind deleted arrayObject");return}
var original=this.original;var oldVAO=this.currentVertexArrayObject;this.currentVertexArrayObject=arrayObject||this.defaultVertexArrayObject;this.currentVertexArrayObject.hasBeenBound=true;var newVAO=this.currentVertexArrayObject;if(oldVAO==newVAO){return}
if(!oldVAO||newVAO.elementArrayBuffer!=oldVAO.elementArrayBuffer){original.bindBuffer.call(gl,gl.ELEMENT_ARRAY_BUFFER,newVAO.elementArrayBuffer)}
var currentBinding=this.currentArrayBuffer;var maxAttrib=Math.max(oldVAO?oldVAO.maxAttrib:0,newVAO.maxAttrib);for(var n=0;n<=maxAttrib;n++){var attrib=newVAO.attribs[n];var oldAttrib=oldVAO?oldVAO.attribs[n]:null;if(!oldVAO||attrib.enabled!=oldAttrib.enabled){if(attrib.enabled){original.enableVertexAttribArray.call(gl,n)}else{original.disableVertexAttribArray.call(gl,n)}}
if(attrib.enabled){var bufferChanged=false;if(!oldVAO||attrib.buffer!=oldAttrib.buffer){if(currentBinding!=attrib.buffer){original.bindBuffer.call(gl,gl.ARRAY_BUFFER,attrib.buffer);currentBinding=attrib.buffer}
bufferChanged=true}
if(bufferChanged||attrib.cached!=oldAttrib.cached){original.vertexAttribPointer.call(gl,n,attrib.size,attrib.type,attrib.normalized,attrib.stride,attrib.offset)}}}
if(this.currentArrayBuffer!=currentBinding){original.bindBuffer.call(gl,gl.ARRAY_BUFFER,this.currentArrayBuffer)}};window._setupVertexArrayObject=function(gl){var original_getSupportedExtensions=gl.getSupportedExtensions;gl.getSupportedExtensions=function getSupportedExtensions(){var list=original_getSupportedExtensions.call(this)||[];if(list.indexOf("OES_vertex_array_object")<0){list.push("OES_vertex_array_object")}
return list};var original_getExtension=gl.getExtension;gl.getExtension=function getExtension(name){var ext=original_getExtension.call(this,name);if(ext){return ext}
if(name!=="OES_vertex_array_object"){return null}
if(!this.__OESVertexArrayObject){console.log("Setup OES_vertex_array_object polyfill");this.__OESVertexArrayObject=new OESVertexArrayObject(this)}
return this.__OESVertexArrayObject}};window._forceSetupVertexArrayObject=function(gl){var original_getSupportedExtensions=gl.getSupportedExtensions;gl.getSupportedExtensions=function getSupportedExtensions(){var list=original_getSupportedExtensions.call(this)||[];if(list.indexOf("OES_vertex_array_object")<0){list.push("OES_vertex_array_object")}
return list};var original_getExtension=gl.getExtension;gl.getExtension=function getExtension(name){if(name==="OES_vertex_array_object"){if(!this.__OESVertexArrayObject){console.log("Setup OES_vertex_array_object polyfill");this.__OESVertexArrayObject=new OESVertexArrayObject(this)}
return this.__OESVertexArrayObject}else{var ext=original_getExtension.call(this,name);if(ext){return ext}else{return null}}}}}());;var WebGLRTMgr=(function(){function WebGLRTMgr(){}
__class(WebGLRTMgr,'laya.resource.WebGLRTMgr');WebGLRTMgr.getRT=function(w,h){w=w|0;h=h|0;if(w>=10000){console.error('getRT error! w too big');};var key=h*10000+w;var sw=WebGLRTMgr.dict[key];var ret;if(sw){if(sw.length>0){ret=sw.pop();ret._mgrKey=key;return ret;}}
ret=new RenderTexture2D(w,h,1,-1);ret._mgrKey=key;return ret;}
WebGLRTMgr.releaseRT=function(rt){if(rt._mgrKey<=0)
return;var sw=WebGLRTMgr.dict[rt._mgrKey];!sw&&(sw=[],WebGLRTMgr.dict[rt._mgrKey]=sw);rt._mgrKey=0;sw.push(rt);}
WebGLRTMgr.dict={};return WebGLRTMgr;})()
var Utils=(function(){function Utils(){}
__class(Utils,'laya.utils.Utils');Utils.toRadian=function(angle){return angle*Utils._pi2;}
Utils.toAngle=function(radian){return radian*Utils._pi;}
Utils.toHexColor=function(color){if(color<0||isNaN(color))return null;var str=color.toString(16);while(str.length<6)str="0"+str;return"#"+str;}
Utils.getGID=function(){return Utils._gid++;}
Utils.concatArray=function(source,array){if(!array)return source;if(!source)return array;var i=0,len=array.length;for(i=0;i<len;i++){source.push(array[i]);}
return source;}
Utils.clearArray=function(array){if(!array)return array;array.length=0;return array;}
Utils.copyArray=function(source,array){source||(source=[]);if(!array)return source;source.length=array.length;var i=0,len=array.length;for(i=0;i<len;i++){source[i]=array[i];}
return source;}
Utils.getGlobalRecByPoints=function(sprite,x0,y0,x1,y1){var newLTPoint;newLTPoint=Point.create().setTo(x0,y0);newLTPoint=sprite.localToGlobal(newLTPoint);var newRBPoint;newRBPoint=Point.create().setTo(x1,y1);newRBPoint=sprite.localToGlobal(newRBPoint);var rst=Rectangle._getWrapRec([newLTPoint.x,newLTPoint.y,newRBPoint.x,newRBPoint.y]);newLTPoint.recover();newRBPoint.recover();return rst;}
Utils.getGlobalPosAndScale=function(sprite){return Utils.getGlobalRecByPoints(sprite,0,0,1,1);}
Utils.bind=function(fun,scope){var rst=fun;rst=fun.bind(scope);;return rst;}
Utils.measureText=function(txt,font){return RunDriver.measureText(txt,font);}
Utils.updateOrder=function(array){if(!array||array.length<2)return false;var i=1,j=0,len=array.length,key=NaN,c;while(i<len){j=i;c=array[j];key=array[j]._zOrder;while(--j>-1){if(array[j]._zOrder>key)array[j+1]=array[j];else break;}
array[j+1]=c;i++;}
return true;}
Utils.transPointList=function(points,x,y){var i=0,len=points.length;for(i=0;i<len;i+=2){points[i]+=x;points[i+1]+=y;}}
Utils.parseInt=function(str,radix){(radix===void 0)&&(radix=0);var result=Browser.window.parseInt(str,radix);if(isNaN(result))return 0;return result;}
Utils.getFileExtension=function(path){Utils._extReg.lastIndex=path.lastIndexOf(".");var result=Utils._extReg.exec(path);if(result&&result.length>1){return result[1].toLowerCase();}
return null;}
Utils.getTransformRelativeToWindow=function(coordinateSpace,x,y){var stage=Laya.stage;var globalTransform=laya.utils.Utils.getGlobalPosAndScale(coordinateSpace);var canvasMatrix=stage._canvasTransform.clone();var canvasLeft=canvasMatrix.tx;var canvasTop=canvasMatrix.ty;canvasMatrix.rotate(-Math.PI/180*Laya.stage.canvasDegree);canvasMatrix.scale(Laya.stage.clientScaleX,Laya.stage.clientScaleY);var perpendicular=(Laya.stage.canvasDegree%180!=0);var tx=NaN,ty=NaN;if(perpendicular){tx=y+globalTransform.y;ty=x+globalTransform.x;tx*=canvasMatrix.d;ty*=canvasMatrix.a;if(Laya.stage.canvasDegree==90){tx=canvasLeft-tx;ty+=canvasTop;}else{tx+=canvasLeft;ty=canvasTop-ty;}}else{tx=x+globalTransform.x;ty=y+globalTransform.y;tx*=canvasMatrix.a;ty*=canvasMatrix.d;tx+=canvasLeft;ty+=canvasTop;}
ty+=Laya.stage['_safariOffsetY'];var domScaleX=NaN,domScaleY=NaN;if(perpendicular){domScaleX=canvasMatrix.d*globalTransform.height;domScaleY=canvasMatrix.a*globalTransform.width;}else{domScaleX=canvasMatrix.a*globalTransform.width;domScaleY=canvasMatrix.d*globalTransform.height;}
return{x:tx,y:ty,scaleX:domScaleX,scaleY:domScaleY};}
Utils.fitDOMElementInArea=function(dom,coordinateSpace,x,y,width,height){if(!dom._fitLayaAirInitialized){dom._fitLayaAirInitialized=true;dom.style.transformOrigin=dom.style.webKittransformOrigin="left top";dom.style.position="absolute"};var transform=Utils.getTransformRelativeToWindow(coordinateSpace,x,y);dom.style.transform=dom.style.webkitTransform="scale("+transform.scaleX+","+transform.scaleY+") rotate("+(Laya.stage.canvasDegree)+"deg)";dom.style.width=width+'px';dom.style.height=height+'px';dom.style.left=transform.x+'px';dom.style.top=transform.y+'px';}
Utils.isOkTextureList=function(textureList){if(!textureList)return false;var i=0,len=textureList.length;var tTexture;for(i=0;i<len;i++){tTexture=textureList[i];if(!tTexture||!tTexture._getSource())return false;}
return true;}
Utils.isOKCmdList=function(cmds){if(!cmds)return false;var i=0,len=cmds.length;var cmd;var tex;for(i=0;i<len;i++){cmd=cmds[i];}
return true;}
Utils.getQueryString=function(name){if(Browser.onMiniGame)return null;if(!window.location||!window.location.search)
return null;var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null;}
Utils._gid=1;Utils._pi=180/Math.PI;Utils._pi2=Math.PI/180;Utils._extReg=/\.(\w+)\??/g;Utils.parseXMLFromString=function(value){var rst;value=value.replace(/>\s+</g,'><');rst=(new DOMParser()).parseFromString(value,'text/xml');if(rst.firstChild.textContent.indexOf("This page contains the following errors")>-1){throw new Error(rst.firstChild.firstChild.textContent);}
return rst;}
return Utils;})()
var ArabicReshaper=(function(){function ArabicReshaper(){}
__class(ArabicReshaper,'laya.webgl.text.ArabicReshaper');var __proto=ArabicReshaper.prototype;__proto.characterMapContains=function(c){for(var i=0;i<ArabicReshaper.charsMap.length;++i){if(ArabicReshaper.charsMap[i][0]===c){return true;}}
return false;}
__proto.getCharRep=function(c){for(var i=0;i<ArabicReshaper.charsMap.length;++i){if(ArabicReshaper.charsMap[i][0]===c){return ArabicReshaper.charsMap[i];}}
return false;}
__proto.getCombCharRep=function(c1,c2){for(var i=0;i<ArabicReshaper.combCharsMap.length;++i){if(ArabicReshaper.combCharsMap[i][0][0]===c1&&ArabicReshaper.combCharsMap[i][0][1]===c2){return ArabicReshaper.combCharsMap[i];}}
return false;}
__proto.isTransparent=function(c){for(var i=0;i<ArabicReshaper.transChars.length;++i){if(ArabicReshaper.transChars[i]===c){return true;}}
return false;}
__proto.getOriginalCharsFromCode=function(code){var j=0;for(j=0;j<ArabicReshaper.charsMap.length;++j){if(ArabicReshaper.charsMap[j].indexOf(code)>-1){return String.fromCharCode(ArabicReshaper.charsMap[j][0]);}}
for(j=0;j<ArabicReshaper.combCharsMap.length;++j){if(ArabicReshaper.combCharsMap[j].indexOf(code)>-1){return String.fromCharCode(ArabicReshaper.combCharsMap[j][0][0])+
String.fromCharCode(ArabicReshaper.combCharsMap[j][0][1]);}}
return String.fromCharCode(code);}
__proto.convertArabic=function(normal){var crep,combcrep,shaped='';for(var i=0;i<normal.length;++i){var current=normal.charCodeAt(i);if(this.characterMapContains(current)){var prev=null,next=null,prevID=i-1,nextID=i+1;for(;prevID>=0;--prevID){if(!this.isTransparent(normal.charCodeAt(prevID))){break;}}
prev=(prevID>=0)?normal.charCodeAt(prevID):null;crep=prev?this.getCharRep(prev):false;if(!crep||crep[2]==null&&crep[3]==null){prev=null;}
for(;nextID<normal.length;++nextID){if(!this.isTransparent(normal.charCodeAt(nextID))){break;}}
next=(nextID<normal.length)?normal.charCodeAt(nextID):null;crep=next?this.getCharRep(next):false;if(!crep||crep[3]==null&&crep[4]==null){next=null;}
if(current===0x0644&&next!=null&&(next===0x0622||next===0x0623||next===0x0625||next===0x0627)){combcrep=this.getCombCharRep(current,next);if(prev!=null){shaped+=String.fromCharCode(combcrep[4]);}else{shaped+=String.fromCharCode(combcrep[1]);}
++i;continue;}
crep=this.getCharRep(current);if(prev!=null&&next!=null&&crep[3]!=null){shaped+=String.fromCharCode(crep[3]);continue;}else
if(prev!=null&&crep[4]!=null){shaped+=String.fromCharCode(crep[4]);continue;}else
if(next!=null&&crep[2]!=null){shaped+=String.fromCharCode(crep[2]);continue;}else{shaped+=String.fromCharCode(crep[1]);}}else{shaped+=String.fromCharCode(current);}}
return shaped;}
__proto.convertArabicBack=function(apfb){var toReturn='',selectedChar=0;var i=0;for(i=0;i<apfb.length;++i){selectedChar=apfb.charCodeAt(i);toReturn+=this.getOriginalCharsFromCode(selectedChar);}
return toReturn;}
__static(ArabicReshaper,['charsMap',function(){return this.charsMap=[[0x0621,0xFE80,null,null,null],[0x0622,0xFE81,null,null,0xFE82],[0x0623,0xFE83,null,null,0xFE84],[0x0624,0xFE85,null,null,0xFE86],[0x0625,0xFE87,null,null,0xFE88],[0x0626,0xFE89,0xFE8B,0xFE8C,0xFE8A],[0x0627,0xFE8D,null,null,0xFE8E],[0x0628,0xFE8F,0xFE91,0xFE92,0xFE90],[0x0629,0xFE93,null,null,0xFE94],[0x062A,0xFE95,0xFE97,0xFE98,0xFE96],[0x062B,0xFE99,0xFE9B,0xFE9C,0xFE9A],[0x062C,0xFE9D,0xFE9F,0xFEA0,0xFE9E],[0x062D,0xFEA1,0xFEA3,0xFEA4,0xFEA2],[0x062E,0xFEA5,0xFEA7,0xFEA8,0xFEA6],[0x062F,0xFEA9,null,null,0xFEAA],[0x0630,0xFEAB,null,null,0xFEAC],[0x0631,0xFEAD,null,null,0xFEAE],[0x0632,0xFEAF,null,null,0xFEB0],[0x0633,0xFEB1,0xFEB3,0xFEB4,0xFEB2],[0x0634,0xFEB5,0xFEB7,0xFEB8,0xFEB6],[0x0635,0xFEB9,0xFEBB,0xFEBC,0xFEBA],[0x0636,0xFEBD,0xFEBF,0xFEC0,0xFEBE],[0x0637,0xFEC1,0xFEC3,0xFEC4,0xFEC2],[0x0638,0xFEC5,0xFEC7,0xFEC8,0xFEC6],[0x0639,0xFEC9,0xFECB,0xFECC,0xFECA],[0x063A,0xFECD,0xFECF,0xFED0,0xFECE],[0x0640,0x0640,0x0640,0x0640,0x0640],[0x0641,0xFED1,0xFED3,0xFED4,0xFED2],[0x0642,0xFED5,0xFED7,0xFED8,0xFED6],[0x0643,0xFED9,0xFEDB,0xFEDC,0xFEDA],[0x0644,0xFEDD,0xFEDF,0xFEE0,0xFEDE],[0x0645,0xFEE1,0xFEE3,0xFEE4,0xFEE2],[0x0646,0xFEE5,0xFEE7,0xFEE8,0xFEE6],[0x0647,0xFEE9,0xFEEB,0xFEEC,0xFEEA],[0x0648,0xFEED,null,null,0xFEEE],[0x0649,0xFEEF,null,null,0xFEF0],[0x064A,0xFEF1,0xFEF3,0xFEF4,0xFEF2],[0x067E,0xFB56,0xFB58,0xFB59,0xFB57],[0x06CC,0xFBFC,0xFBFE,0xFBFF,0xFBFD],[0x0686,0xFB7A,0xFB7C,0xFB7D,0xFB7B],[0x06A9,0xFB8E,0xFB90,0xFB91,0xFB8F],[0x06AF,0xFB92,0xFB94,0xFB95,0xFB93],[0x0698,0xFB8A,null,null,0xFB8B],];},'combCharsMap',function(){return this.combCharsMap=[[[0x0644,0x0622],0xFEF5,null,null,0xFEF6],[[0x0644,0x0623],0xFEF7,null,null,0xFEF8],[[0x0644,0x0625],0xFEF9,null,null,0xFEFA],[[0x0644,0x0627],0xFEFB,null,null,0xFEFC],];},'transChars',function(){return this.transChars=[0x0610,0x0612,0x0613,0x0614,0x0615,0x064B,0x064C,0x064D,0x064E,0x064F,0x0650,0x0651,0x0652,0x0653,0x0654,0x0655,0x0656,0x0657,0x0658,0x0670,0x06D6,0x06D7,0x06D8,0x06D9,0x06DA,0x06DB,0x06DC,0x06DF,0x06E0,0x06E1,0x06E2,0x06E3,0x06E4,0x06E7,0x06E8,0x06EA,0x06EB,0x06EC,0x06ED,];}]);return ArabicReshaper;})()
var DrawLinesCmd=(function(){function DrawLinesCmd(){}
__class(DrawLinesCmd,'laya.display.cmd.DrawLinesCmd');var __proto=DrawLinesCmd.prototype;__proto.recover=function(){this.points=null;this.lineColor=null;Pool.recover("DrawLinesCmd",this);}
__proto.run=function(context,gx,gy){context._drawLines(this.x+gx,this.y+gy,this.points,this.lineColor,this.lineWidth,this.vid);}
__getset(0,__proto,'cmdID',function(){return"DrawLines";});DrawLinesCmd.create=function(x,y,points,lineColor,lineWidth,vid){var cmd=Pool.getItemByClass("DrawLinesCmd",DrawLinesCmd);cmd.x=x;cmd.y=y;cmd.points=points;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;cmd.vid=vid;return cmd;}
DrawLinesCmd.ID="DrawLines";return DrawLinesCmd;})()
var CharSubmitCache=(function(){function CharSubmitCache(){this._data=[];this._ndata=0;this._tex=null;this._imgId=0;this._clipid=-1;this._enbale=false;this._colorFiler=null;this._clipMatrix=new Matrix();}
__class(CharSubmitCache,'laya.webgl.text.CharSubmitCache');var __proto=CharSubmitCache.prototype;__proto.clear=function(){this._tex=null;this._imgId=-1;this._ndata=0;this._enbale=false;this._colorFiler=null;}
__proto.destroy=function(){this.clear();this._data.length=0;this._data=null;}
__proto.add=function(ctx,tex,imgid,pos,uv,color){if(this._ndata>0&&(this._tex!=tex||this._imgId!=imgid||(this._clipid>=0&&this._clipid!=ctx._clipInfoID))){this.submit(ctx);}
this._clipid=ctx._clipInfoID;ctx._globalClipMatrix.copyTo(this._clipMatrix);this._tex=tex;this._imgId=imgid;this._colorFiler=ctx._colorFiler;this._data[this._ndata]=pos;this._data[this._ndata+1]=uv;this._data[this._ndata+2]=color;this._ndata+=3;}
__proto.getPos=function(){if(CharSubmitCache.__nPosPool==0)
return new Array(8);return CharSubmitCache.__posPool[--CharSubmitCache.__nPosPool];}
__proto.enable=function(value,ctx){if(value===this._enbale)
return;this._enbale=value;this._enbale||this.submit(ctx);}
__proto.submit=function(ctx){var n=this._ndata;if(!n)
return;var _mesh=ctx._mesh;var colorFiler=ctx._colorFiler;ctx._colorFiler=this._colorFiler;var submit=SubmitTexture.create(ctx,_mesh,Value2D.create(0x01,0));ctx._submits[ctx._submits._length++]=ctx._curSubmit=submit;submit.shaderValue.textureHost=this._tex;submit._key.other=this._imgId;ctx._colorFiler=colorFiler;ctx._copyClipInfo(submit,this._clipMatrix);submit.clipInfoID=this._clipid;for(var i=0;i<n;i+=3){_mesh.addQuad(this._data[i],this._data[i+1],this._data[i+2],true);CharSubmitCache.__posPool[CharSubmitCache.__nPosPool++]=this._data[i];}
n/=3;submit._numEle+=n*6;_mesh.indexNum+=n*6;_mesh.vertNum+=n*4;ctx._drawCount+=n;this._ndata=0;if(Stat.loopCount%100==0)
this._data.length=0;}
CharSubmitCache.__posPool=[];CharSubmitCache.__nPosPool=0;return CharSubmitCache;})()
var Config=(function(){function Config(){}
__class(Config,'Config');Config.animationInterval=50;Config.isAntialias=false;Config.isAlpha=false;Config.premultipliedAlpha=true;Config.isStencil=true;Config.preserveDrawingBuffer=false;Config.webGL2D_MeshAllocMaxMem=true;Config.is2DPixelArtGame=false;Config.useWebGL2=false;Config.useRetinalCanvas=false;return Config;})()
var DrawCurvesCmd=(function(){function DrawCurvesCmd(){}
__class(DrawCurvesCmd,'laya.display.cmd.DrawCurvesCmd');var __proto=DrawCurvesCmd.prototype;__proto.recover=function(){this.points=null;this.lineColor=null;Pool.recover("DrawCurvesCmd",this);}
__proto.run=function(context,gx,gy){context.drawCurves(this.x+gx,this.y+gy,this.points,this.lineColor,this.lineWidth);}
__getset(0,__proto,'cmdID',function(){return"DrawCurves";});DrawCurvesCmd.create=function(x,y,points,lineColor,lineWidth){var cmd=Pool.getItemByClass("DrawCurvesCmd",DrawCurvesCmd);cmd.x=x;cmd.y=y;cmd.points=points;cmd.lineColor=lineColor;cmd.lineWidth=lineWidth;return cmd;}
DrawCurvesCmd.ID="DrawCurves";return DrawCurvesCmd;})()
var FillTextCmd=(function(){function FillTextCmd(){this._textIsWorldText=false;this._fontColor=0xffffffff;this._strokeColor=0;this._nTexAlign=0;this._fontObj=FillTextCmd._defFontObj;}
__class(FillTextCmd,'laya.display.cmd.FillTextCmd');var __proto=FillTextCmd.prototype;__proto.recover=function(){Pool.recover("FillTextCmd",this);}
__proto.run=function(context,gx,gy){if(Laya.stage.isGlobalRepaint()){this._textIsWorldText&&(this._text).cleanCache();}
if(this._textIsWorldText){context._fast_filltext((this._text),this.x+gx,this.y+gy,this._fontObj,this._color,null,0,this._nTexAlign,0);}else{context.drawText(this._text,this.x+gx,this.y+gy,this._font,this._color,this._textAlign);}}
__getset(0,__proto,'text',function(){return this._text;},function(value){this._text=value;this._textIsWorldText=(value instanceof laya.utils.WordText);this._textIsWorldText&&(this._text).cleanCache();});__getset(0,__proto,'cmdID',function(){return"FillText";});__getset(0,__proto,'color',function(){return this._color;},function(value){this._color=value;this._fontColor=ColorUtils.create(value).numColor;this._textIsWorldText&&(this._text).cleanCache();});__getset(0,__proto,'font',function(){return this._font;},function(value){this._font=value;this._fontObj=FontInfo.Parse(value);this._textIsWorldText&&(this._text).cleanCache();});__getset(0,__proto,'textAlign',function(){return this._textAlign;},function(value){this._textAlign=value;switch(value){case'center':this._nTexAlign=Context.ENUM_TEXTALIGN_CENTER;break;case'right':this._nTexAlign=Context.ENUM_TEXTALIGN_RIGHT;break;default:this._nTexAlign=Context.ENUM_TEXTALIGN_DEFAULT;}
this._textIsWorldText&&(this._text).cleanCache();});FillTextCmd.create=function(text,x,y,font,color,textAlign){var cmd=Pool.getItemByClass("FillTextCmd",FillTextCmd);cmd.text=text;cmd._textIsWorldText=(text instanceof laya.utils.WordText);cmd.x=x;cmd.y=y;cmd.font=font;cmd.color=color;cmd.textAlign=textAlign;return cmd;}
FillTextCmd.ID="FillText";__static(FillTextCmd,['_defFontObj',function(){return this._defFontObj=new FontInfo(null);}]);return FillTextCmd;})()
var ShaderValue=(function(){function ShaderValue(){}
__class(ShaderValue,'laya.webgl.shader.ShaderValue');return ShaderValue;})()
var KeyLocation=(function(){function KeyLocation(){}
__class(KeyLocation,'laya.events.KeyLocation');KeyLocation.STANDARD=0;KeyLocation.LEFT=1;KeyLocation.RIGHT=2;KeyLocation.NUM_PAD=3;return KeyLocation;})()
var SaveClipRect=(function(){function SaveClipRect(){this._clipInfoID=-1;this.incache=false;this._globalClipMatrix=new Matrix();this._clipRect=new Rectangle();}
__class(SaveClipRect,'laya.webgl.canvas.save.SaveClipRect');var __proto=SaveClipRect.prototype;Laya.imps(__proto,{"laya.webgl.canvas.save.ISaveData":true})
__proto.isSaveMark=function(){return false;}
__proto.restore=function(context){this._globalClipMatrix.copyTo(context._globalClipMatrix);this._clipRect.clone(context._clipRect);context._clipInfoID=this._clipInfoID;SaveClipRect.POOL[SaveClipRect.POOL._length++]=this;context._clipInCache=this.incache;}
SaveClipRect.save=function(context){if((context._saveMark._saveuse&0x20000)==0x20000)return;context._saveMark._saveuse|=0x20000;var cache=SaveClipRect.POOL;var o=cache._length>0?cache[--cache._length]:(new SaveClipRect());context._globalClipMatrix.copyTo(o._globalClipMatrix);context._clipRect.clone(o._clipRect);o._clipInfoID=context._clipInfoID;o.incache=context._clipInCache;var _save=context._save;_save[_save._length++]=o;}
SaveClipRect.POOL=SaveBase._createArray();return SaveClipRect;})()
var GlowFilterGLRender=(function(){function GlowFilterGLRender(){}
__class(GlowFilterGLRender,'laya.filters.GlowFilterGLRender');var __proto=GlowFilterGLRender.prototype;__proto.setShaderInfo=function(shader,w,h,data){shader.defines.add(data.type);var sv=shader;sv.u_blurInfo1=data._sv_blurInfo1;var info2=data._sv_blurInfo2;info2[0]=w;info2[1]=h;sv.u_blurInfo2=info2;sv.u_color=data.getColor();}
__proto.render=function(rt,ctx,width,height,filter){var w=width,h=height;var svBlur=Value2D.create(0x01,0);this.setShaderInfo(svBlur,w,h,filter);var svCP=Value2D.create(0x01,0);var matI=Matrix.TEMP.identity();ctx.drawTarget(rt,0,0,w,h,matI,svBlur);ctx.drawTarget(rt,0,0,w,h,matI,svCP);}
return GlowFilterGLRender;})()
var RunDriver=(function(){function RunDriver(){}
__class(RunDriver,'laya.utils.RunDriver');RunDriver.createShaderCondition=function(conditionScript){var fn="(function() {return "+conditionScript+";})";return Laya._runScript(fn);}
RunDriver.fontMap=[];RunDriver.measureText=function(txt,font){var isChinese=RunDriver.hanzi.test(txt);if(isChinese&&RunDriver.fontMap[font]){return RunDriver.fontMap[font];};var ctx=Browser.context;ctx.font=font;var r=ctx.measureText(txt);if(isChinese)RunDriver.fontMap[font]=r;return r;}
RunDriver.drawToCanvas=function(sprite,_renderType,canvasWidth,canvasHeight,offsetX,offsetY){offsetX-=sprite.x;offsetY-=sprite.y;offsetX|=0;offsetY|=0;canvasWidth|=0;canvasHeight|=0;var ctx=new Context();ctx.size(canvasWidth,canvasHeight);ctx.asBitmap=true;ctx._targets.start();RenderSprite.renders[_renderType]._fun(sprite,ctx,offsetX,offsetY);ctx.flush();ctx._targets.end();ctx._targets.restore();var dt=ctx._targets.getData(0,0,canvasWidth,canvasHeight);ctx.destroy();var imgdata=new ImageData(canvasWidth,canvasHeight);;var lineLen=canvasWidth*4;var temp=new Uint8Array(lineLen);var dst=imgdata.data;var y=canvasHeight-1;var off=y*lineLen;var srcoff=0;for(;y>=0;y--){dst.set(dt.subarray(srcoff,srcoff+lineLen),off);off-=lineLen;srcoff+=lineLen;};var canv=new HTMLCanvas(true);canv.size(canvasWidth,canvasHeight);var ctx2d=canv.getContext('2d');ctx2d.putImageData(imgdata,0,0);;return canv;}
RunDriver.drawToTexture=function(sprite,_renderType,canvasWidth,canvasHeight,offsetX,offsetY){offsetX-=sprite.x;offsetY-=sprite.y;offsetX|=0;offsetY|=0;canvasWidth|=0;canvasHeight|=0;var ctx=new Context();ctx.size(canvasWidth,canvasHeight);ctx.asBitmap=true;ctx._targets.start();RenderSprite.renders[_renderType]._fun(sprite,ctx,offsetX,offsetY);ctx.flush();ctx._targets.end();ctx._targets.restore();var rtex=new Texture((ctx._targets),Texture.INV_UV);ctx.destroy(true);return rtex;}
RunDriver.changeWebGLSize=function(w,h){WebGL.onStageResize(w,h);}
RunDriver.clear=function(value){Context.set2DRenderConfig();RenderState2D.worldScissorTest&&WebGL.mainContext.disable(0x0C11);var ctx=Render.context;var c=(ctx._submits._length==0||Config.preserveDrawingBuffer)?ColorUtils.create(value).arrColor:Laya.stage._wgColor;if(c)
ctx.clearBG(c[0],c[1],c[2],c[3]);else
ctx.clearBG(0,0,0,0);RenderState2D.clear();}
RunDriver.enableNative=null;__static(RunDriver,['hanzi',function(){return this.hanzi=new RegExp("^[\u4E00-\u9FA5]$");}]);return RunDriver;})()
var AtlasInfoManager=(function(){function AtlasInfoManager(){}
__class(AtlasInfoManager,'laya.net.AtlasInfoManager');AtlasInfoManager.enable=function(infoFile,callback){Laya.loader.load(infoFile,Handler.create(null,AtlasInfoManager._onInfoLoaded,[callback]),null,"json");}
AtlasInfoManager._onInfoLoaded=function(callback,data){var tKey;var tPrefix;var tArr;var i=0,len=0;for(tKey in data){tArr=data[tKey];tPrefix=tArr[0];tArr=tArr[1];len=tArr.length;for(i=0;i<len;i++){AtlasInfoManager._fileLoadDic[tPrefix+tArr[i]]=tKey;}}
callback&&callback.run();}
AtlasInfoManager.getFileLoadPath=function(file){return AtlasInfoManager._fileLoadDic[file]||file;}
AtlasInfoManager._fileLoadDic={};return AtlasInfoManager;})()
var BlendMode=(function(){function BlendMode(){}
__class(BlendMode,'laya.webgl.canvas.BlendMode');BlendMode._init_=function(gl){BlendMode.fns=[BlendMode.BlendNormal,BlendMode.BlendAdd,BlendMode.BlendMultiply,BlendMode.BlendScreen,BlendMode.BlendOverlay,BlendMode.BlendLight,BlendMode.BlendMask,BlendMode.BlendDestinationOut];BlendMode.targetFns=[BlendMode.BlendNormalTarget,BlendMode.BlendAddTarget,BlendMode.BlendMultiplyTarget,BlendMode.BlendScreenTarget,BlendMode.BlendOverlayTarget,BlendMode.BlendLightTarget,BlendMode.BlendMask,BlendMode.BlendDestinationOut];}
BlendMode.BlendNormal=function(gl){WebGLContext.setBlendFunc(gl,1,0x0303);}
BlendMode.BlendAdd=function(gl){WebGLContext.setBlendFunc(gl,1,0x0304);}
BlendMode.BlendMultiply=function(gl){WebGLContext.setBlendFunc(gl,0x0306,0x0303);}
BlendMode.BlendScreen=function(gl){WebGLContext.setBlendFunc(gl,1,1);}
BlendMode.BlendOverlay=function(gl){WebGLContext.setBlendFunc(gl,1,0x0301);}
BlendMode.BlendLight=function(gl){WebGLContext.setBlendFunc(gl,1,1);}
BlendMode.BlendNormalTarget=function(gl){WebGLContext.setBlendFunc(gl,1,0x0303);}
BlendMode.BlendAddTarget=function(gl){WebGLContext.setBlendFunc(gl,1,0x0304);}
BlendMode.BlendMultiplyTarget=function(gl){WebGLContext.setBlendFunc(gl,0x0306,0x0303);}
BlendMode.BlendScreenTarget=function(gl){WebGLContext.setBlendFunc(gl,1,1);}
BlendMode.BlendOverlayTarget=function(gl){WebGLContext.setBlendFunc(gl,1,0x0301);}
BlendMode.BlendLightTarget=function(gl){WebGLContext.setBlendFunc(gl,1,1);}
BlendMode.BlendMask=function(gl){WebGLContext.setBlendFunc(gl,0,0x0302);}
BlendMode.BlendDestinationOut=function(gl){WebGLContext.setBlendFunc(gl,0,0);}
BlendMode.activeBlendFunction=null;BlendMode.NAMES=["normal","add","multiply","screen","overlay","light","mask","destination-out"];BlendMode.TOINT={"normal":0,"add":1,"multiply":2,"screen":3,"overlay":4,"light":5,"mask":6,"destination-out":7,"lighter":1};BlendMode.NORMAL="normal";BlendMode.ADD="add";BlendMode.MULTIPLY="multiply";BlendMode.SCREEN="screen";BlendMode.OVERLAY="overlay";BlendMode.LIGHT="light";BlendMode.MASK="mask";BlendMode.DESTINATIONOUT="destination-out";BlendMode.LIGHTER="lighter";BlendMode.fns=[];BlendMode.targetFns=[];return BlendMode;})()
var RotateCmd=(function(){function RotateCmd(){}
__class(RotateCmd,'laya.display.cmd.RotateCmd');var __proto=RotateCmd.prototype;__proto.recover=function(){Pool.recover("RotateCmd",this);}
__proto.run=function(context,gx,gy){context._rotate(this.angle,this.pivotX+gx,this.pivotY+gy);}
__getset(0,__proto,'cmdID',function(){return"Rotate";});RotateCmd.create=function(angle,pivotX,pivotY){var cmd=Pool.getItemByClass("RotateCmd",RotateCmd);cmd.angle=angle;cmd.pivotX=pivotX;cmd.pivotY=pivotY;return cmd;}
RotateCmd.ID="Rotate";return RotateCmd;})()
var FontInfo=(function(){function FontInfo(font){this._font="14px Arial";this._family="Arial";this._size=14;this._italic=false;this._bold=false;this._id=FontInfo._gfontID++;this.setFont(font||this._font);}
__class(FontInfo,'laya.utils.FontInfo');var __proto=FontInfo.prototype;__proto.setFont=function(value){this._font=value;var _words=value.split(' ');var l=_words.length;if(l<2){if(l==1){if(_words[0].indexOf('px')>0){this._size=parseInt(_words[0]);}}
return;};var szpos=-1;for(var i=0;i<l;i++){if(_words[i].indexOf('px')>0||_words[i].indexOf('pt')>0){szpos=i;this._size=parseInt(_words[i]);if(this._size<=0){console.error('font parse error:'+value);this._size=14;}
break;}};var fpos=szpos+1;var familys=_words[fpos];fpos++;for(;fpos<l;fpos++){familys+=' '+_words[fpos];}
this._family=(familys.split(','))[0];this._italic=_words.indexOf('italic')>=0;this._bold=_words.indexOf('bold')>=0;}
FontInfo.Parse=function(font){if(font===FontInfo._lastFont){return FontInfo._lastFontInfo;};var r=FontInfo._cache[font];if(!r){r=FontInfo._cache[font]=new FontInfo(font);}
FontInfo._lastFont=font;FontInfo._lastFontInfo=r;return r;}
FontInfo.EMPTY=new FontInfo(null);FontInfo._cache={};FontInfo._gfontID=0;FontInfo._lastFont='';FontInfo._lastFontInfo=null;return FontInfo;})()
var ShaderCompile=(function(){function ShaderCompile(vs,ps,nameMap,defs){this._clearCR=new RegExp("\r","g");var _$this=this;function _compile(script){script=script.replace(_$this._clearCR,"");var includefiles=[];var top=new ShaderNode(includefiles);_$this._compileToTree(top,script.split('\n'),0,includefiles,defs);return top;};var startTime=Browser.now();this._VS=_compile(vs);this._PS=_compile(ps);this._nameMap=nameMap;if((Browser.now()-startTime)>2)
console.log("ShaderCompile use time:"+(Browser.now()-startTime)+"  size:"+vs.length+"/"+ps.length);}
__class(ShaderCompile,'laya.webgl.utils.ShaderCompile');var __proto=ShaderCompile.prototype;__proto._compileToTree=function(parent,lines,start,includefiles,defs){var node,preNode;var text,name,fname;var ofs=0,words,noUseNode;var i=0,n=0,j=0;for(i=start;i<lines.length;i++){text=lines[i];if(text.length<1)continue;ofs=text.indexOf("//");if(ofs===0)continue;if(ofs>=0)text=text.substr(0,ofs);node=noUseNode||new ShaderNode(includefiles);noUseNode=null;node.text=text;node.noCompile=true;if((ofs=text.indexOf("#"))>=0){name="#";for(j=ofs+1,n=text.length;j<n;j++){var c=text.charAt(j);if(c===' '||c==='\t'||c==='?')break;name+=c;}
node.name=name;switch(name){case"#ifdef":case"#ifndef":node.src=text;node.noCompile=text.match(/[!&|()=<>]/)!=null;if(!node.noCompile){words=text.replace(/^\s*/,'').split(/\s+/);node.setCondition(words[1],name==="#ifdef"?1:2);node.text="//"+node.text;}else{console.log("function():Boolean{return "+text.substr(ofs+node.name.length)+"}");}
node.setParent(parent);parent=node;if(defs){words=text.substr(j).split(ShaderCompile._splitToWordExps3);for(j=0;j<words.length;j++){text=words[j];text.length&&(defs[text]=true);}}
continue;case"#if":node.src=text;node.noCompile=true;node.setParent(parent);parent=node;if(defs){words=text.substr(j).split(ShaderCompile._splitToWordExps3);for(j=0;j<words.length;j++){text=words[j];text.length&&text!="defined"&&(defs[text]=true);}}
continue;case"#else":node.src=text;parent=parent.parent;preNode=parent.childs[parent.childs.length-1];node.noCompile=preNode.noCompile;if(!node.noCompile){node.condition=preNode.condition;node.conditionType=preNode.conditionType==1?2:1;node.text="//"+node.text+" "+preNode.text+" "+node.conditionType;}
node.setParent(parent);parent=node;continue;case"#endif":parent=parent.parent;preNode=parent.childs[parent.childs.length-1];node.noCompile=preNode.noCompile;if(!node.noCompile){node.text="//"+node.text;}
node.setParent(parent);continue;case"#include":words=ShaderCompile.splitToWords(text,null);var inlcudeFile=ShaderCompile.includes[words[1]];if(!inlcudeFile){throw"ShaderCompile error no this include file:"+words[1];}
if((ofs=words[0].indexOf("?"))<0){node.setParent(parent);text=inlcudeFile.getWith(words[2]=='with'?words[3]:null);this._compileToTree(node,text.split('\n'),0,includefiles,defs);node.text="";continue;}
node.setCondition(words[0].substr(ofs+1),1);node.text=inlcudeFile.getWith(words[2]=='with'?words[3]:null);break;case"#import":words=ShaderCompile.splitToWords(text,null);fname=words[1];includefiles.push({node:node,file:ShaderCompile.includes[fname],ofs:node.text.length});continue;}}else{preNode=parent.childs[parent.childs.length-1];if(preNode&&!preNode.name){includefiles.length>0&&ShaderCompile.splitToWords(text,preNode);noUseNode=node;preNode.text+="\n"+text;continue;}
includefiles.length>0&&ShaderCompile.splitToWords(text,node);}
node.setParent(parent);}}
__proto.createShader=function(define,shaderName,createShader,bindAttrib){var defMap={};var defineStr="";if(define){for(var i in define){defineStr+="#define "+i+"\n";defMap[i]=true;}};var vs=this._VS.toscript(defMap,[]);var ps=this._PS.toscript(defMap,[]);return(createShader||Shader.create)(defineStr+vs.join('\n'),defineStr+ps.join('\n'),shaderName,this._nameMap,bindAttrib);}
ShaderCompile._parseOne=function(attributes,uniforms,words,i,word,b){var one={type:ShaderCompile.shaderParamsMap[words[i+1]],name:words[i+2],size:isNaN(parseInt(words[i+3]))?1:parseInt(words[i+3])};if(b){if(word=="attribute"){attributes.push(one);}else{uniforms.push(one);}}
if(words[i+3]==':'){one.type=words[i+4];i+=2;}
i+=2;return i;}
ShaderCompile.addInclude=function(fileName,txt){if(!txt||txt.length===0)
throw new Error("add shader include file err:"+fileName);if(ShaderCompile.includes[fileName])
throw new Error("add shader include file err, has add:"+fileName);ShaderCompile.includes[fileName]=new InlcudeFile(txt);}
ShaderCompile.preGetParams=function(vs,ps){var text=[vs,ps];var result={};var attributes=[];var uniforms=[];var definesInfo={};var definesName=[];result.attributes=attributes;result.uniforms=uniforms;result.defines=definesInfo;var i=0,n=0,one;for(var s=0;s<2;s++){text[s]=text[s].replace(ShaderCompile._removeAnnotation,"");var words=text[s].match(ShaderCompile._reg);var tempelse;for(i=0,n=words.length;i<n;i++){var word=words[i];if(word!="attribute"&&word!="uniform"){if(word=="#define"){word=words[++i];definesName[word]=1;continue;}else if(word=="#ifdef"){tempelse=words[++i];var def=definesInfo[tempelse]=definesInfo[tempelse]||[];for(i++;i<n;i++){word=words[i];if(word!="attribute"&&word!="uniform"){if(word=="#else"){for(i++;i<n;i++){word=words[i];if(word!="attribute"&&word!="uniform"){if(word=="#endif"){break;}
continue;}
i=ShaderCompile._parseOne(attributes,uniforms,words,i,word,!definesName[tempelse]);}}
continue;}
i=ShaderCompile._parseOne(attributes,uniforms,words,i,word,definesName[tempelse]);}}
continue;}
i=ShaderCompile._parseOne(attributes,uniforms,words,i,word,true);}}
return result;}
ShaderCompile.splitToWords=function(str,block){var out=[];var c;var ofs=-1;var word;for(var i=0,n=str.length;i<n;i++){c=str.charAt(i);if(" \t=+-*/&%!<>()'\",;".indexOf(c)>=0){if(ofs>=0&&(i-ofs)>1){word=str.substr(ofs,i-ofs);out.push(word);}
if(c=='"'||c=="'"){var ofs2=str.indexOf(c,i+1);if(ofs2<0){throw"Sharder err:"+str;}
out.push(str.substr(i+1,ofs2-i-1));i=ofs2;ofs=-1;continue;}
if(c=='('&&block&&out.length>0){word=out[out.length-1]+";";if("vec4;main;".indexOf(word)<0)
block.useFuns+=word;}
ofs=-1;continue;}
if(ofs<0)ofs=i;}
if(ofs<n&&(n-ofs)>1){word=str.substr(ofs,n-ofs);out.push(word);}
return out;}
ShaderCompile.IFDEF_NO=0;ShaderCompile.IFDEF_YES=1;ShaderCompile.IFDEF_ELSE=2;ShaderCompile.IFDEF_PARENT=3;ShaderCompile._removeAnnotation=new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g");ShaderCompile._reg=new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g");ShaderCompile._splitToWordExps=new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%\(\),;])","g");ShaderCompile.includes={};__static(ShaderCompile,['shaderParamsMap',function(){return this.shaderParamsMap={"float":0x1406,"int":0x1404,"bool":0x8B56,"vec2":0x8B50,"vec3":0x8B51,"vec4":0x8B52,"ivec2":0x8B53,"ivec3":0x8B54,"ivec4":0x8B55,"bvec2":0x8B57,"bvec3":0x8B58,"bvec4":0x8B59,"mat2":0x8B5A,"mat3":0x8B5B,"mat4":0x8B5C,"sampler2D":0x8B5E,"samplerCube":0x8B60};},'_splitToWordExps3',function(){return this._splitToWordExps3=new RegExp("[ \\t=\\+\\-*/&%!<>!%\(\),;\\|]","g");}]);return ShaderCompile;})()
var Prefab=(function(){function Prefab(){this.json=null;}
__class(Prefab,'laya.components.Prefab');var __proto=Prefab.prototype;__proto.create=function(){if(this.json)return SceneUtils.createByData(null,this.json);return null;}
return Prefab;})()
var FillBorderWordsCmd=(function(){function FillBorderWordsCmd(){}
__class(FillBorderWordsCmd,'laya.display.cmd.FillBorderWordsCmd');var __proto=FillBorderWordsCmd.prototype;__proto.recover=function(){this.words=null;Pool.recover("FillBorderWordsCmd",this);}
__proto.run=function(context,gx,gy){context.fillBorderWords(this.words,this.x+gx,this.y+gy,this.font,this.fillColor,this.borderColor,this.lineWidth);}
__getset(0,__proto,'cmdID',function(){return"FillBorderWords";});FillBorderWordsCmd.create=function(words,x,y,font,fillColor,borderColor,lineWidth){var cmd=Pool.getItemByClass("FillBorderWordsCmd",FillBorderWordsCmd);cmd.words=words;cmd.x=x;cmd.y=y;cmd.font=font;cmd.fillColor=fillColor;cmd.borderColor=borderColor;cmd.lineWidth=lineWidth;return cmd;}
FillBorderWordsCmd.ID="FillBorderWords";return FillBorderWordsCmd;})()
var HitArea=(function(){function HitArea(){this._hit=null;this._unHit=null;}
__class(HitArea,'laya.utils.HitArea');var __proto=HitArea.prototype;__proto.contains=function(x,y){if(!HitArea._isHitGraphic(x,y,this.hit))return false;return!HitArea._isHitGraphic(x,y,this.unHit);}
__getset(0,__proto,'hit',function(){if(!this._hit)this._hit=new Graphics();return this._hit;},function(value){this._hit=value;});__getset(0,__proto,'unHit',function(){if(!this._unHit)this._unHit=new Graphics();return this._unHit;},function(value){this._unHit=value;});HitArea._isHitGraphic=function(x,y,graphic){if(!graphic)return false;var cmds=graphic.cmds;if(!cmds&&graphic._one){cmds=HitArea._cmds;cmds.length=1;cmds[0]=graphic._one;}
if(!cmds)return false;var i=0,len=0;len=cmds.length;var cmd;for(i=0;i<len;i++){cmd=cmds[i];if(!cmd)continue;switch(cmd.cmdID){case"Translate":x-=cmd.tx;y-=cmd.ty;}
if(HitArea._isHitCmd(x,y,cmd))return true;}
return false;}
HitArea._isHitCmd=function(x,y,cmd){if(!cmd)return false;var rst=false;switch(cmd.cmdID){case"DrawRect":HitArea._rect.setTo(cmd.x,cmd.y,cmd.width,cmd.height);rst=HitArea._rect.contains(x,y);break;case"DrawCircle":;var d=NaN;x-=cmd.x;y-=cmd.y;d=x*x+y*y;rst=d<cmd.radius*cmd.radius;break;case"DrawPoly":x-=cmd.x;y-=cmd.y;rst=HitArea._ptInPolygon(x,y,cmd.points);break;}
return rst;}
HitArea._ptInPolygon=function(x,y,areaPoints){var p=HitArea._ptPoint;p.setTo(x,y);var nCross=0;var p1x=NaN,p1y=NaN,p2x=NaN,p2y=NaN;var len=0;len=areaPoints.length;for(var i=0;i<len;i+=2){p1x=areaPoints[i];p1y=areaPoints[i+1];p2x=areaPoints[(i+2)%len];p2y=areaPoints[(i+3)%len];if(p1y==p2y)continue;if(p.y<Math.min(p1y,p2y))continue;if(p.y>=Math.max(p1y,p2y))continue;var tx=(p.y-p1y)*(p2x-p1x)/(p2y-p1y)+p1x;if(tx>p.x)nCross++;}
return(nCross%2==1);}
HitArea._cmds=[];__static(HitArea,['_rect',function(){return this._rect=new Rectangle();},'_ptPoint',function(){return this._ptPoint=new Point();}]);return HitArea;})()
var SoundManager=(function(){function SoundManager(){}
__class(SoundManager,'laya.media.SoundManager');__getset(1,SoundManager,'useAudioMusic',function(){return SoundManager._useAudioMusic;},function(value){SoundManager._useAudioMusic=value;if(value){SoundManager._musicClass=AudioSound;}else{SoundManager._musicClass=null;}});__getset(1,SoundManager,'autoStopMusic',function(){return SoundManager._autoStopMusic;},function(v){Laya.stage.off("blur",null,SoundManager._stageOnBlur);Laya.stage.off("focus",null,SoundManager._stageOnFocus);Laya.stage.off("visibilitychange",null,SoundManager._visibilityChange);SoundManager._autoStopMusic=v;if(v){Laya.stage.on("blur",null,SoundManager._stageOnBlur);Laya.stage.on("focus",null,SoundManager._stageOnFocus);Laya.stage.on("visibilitychange",null,SoundManager._visibilityChange);}});__getset(1,SoundManager,'muted',function(){return SoundManager._muted;},function(value){if(value==SoundManager._muted)return;if(value){SoundManager.stopAllSound();}
SoundManager.musicMuted=value;SoundManager._muted=value;});__getset(1,SoundManager,'musicMuted',function(){return SoundManager._musicMuted;},function(value){if(value==SoundManager._musicMuted)return;if(value){if(SoundManager._bgMusic){if(SoundManager._musicChannel&&!SoundManager._musicChannel.isStopped){if(Render.isConchApp){if(SoundManager._musicChannel._audio)SoundManager._musicChannel._audio.muted=true;;}else{SoundManager._musicChannel.pause();}}else{SoundManager._musicChannel=null;}}else{SoundManager._musicChannel=null;}
SoundManager._musicMuted=value;}else{SoundManager._musicMuted=value;if(SoundManager._bgMusic){if(SoundManager._musicChannel){if(Render.isConchApp){if(SoundManager._musicChannel._audio)SoundManager._musicChannel._audio.muted=false;;}else{SoundManager._musicChannel.resume();}}}}});__getset(1,SoundManager,'soundMuted',function(){return SoundManager._soundMuted;},function(value){SoundManager._soundMuted=value;});SoundManager.__init__=function(){var win=Browser.window;var supportWebAudio=win["AudioContext"]||win["webkitAudioContext"]||win["mozAudioContext"]?true:false;if(supportWebAudio)WebAudioSound.initWebAudio();SoundManager._soundClass=supportWebAudio?WebAudioSound:AudioSound;AudioSound._initMusicAudio();SoundManager._musicClass=AudioSound;return supportWebAudio;}
SoundManager.addChannel=function(channel){if(SoundManager._channels.indexOf(channel)>=0)return;SoundManager._channels.push(channel);}
SoundManager.removeChannel=function(channel){var i=0;for(i=SoundManager._channels.length-1;i>=0;i--){if(SoundManager._channels[i]==channel){SoundManager._channels.splice(i,1);}}}
SoundManager.disposeSoundLater=function(url){SoundManager._lastSoundUsedTimeDic[url]=Browser.now();if(!SoundManager._isCheckingDispose){SoundManager._isCheckingDispose=true;Laya.timer.loop(5000,null,SoundManager._checkDisposeSound);}}
SoundManager._checkDisposeSound=function(){var key;var tTime=Browser.now();var hasCheck=false;for(key in SoundManager._lastSoundUsedTimeDic){if(tTime-SoundManager._lastSoundUsedTimeDic[key]>30000){delete SoundManager._lastSoundUsedTimeDic[key];SoundManager.disposeSoundIfNotUsed(key);}else{hasCheck=true;}}
if(!hasCheck){SoundManager._isCheckingDispose=false;Laya.timer.clear(null,SoundManager._checkDisposeSound);}}
SoundManager.disposeSoundIfNotUsed=function(url){var i=0;for(i=SoundManager._channels.length-1;i>=0;i--){if(SoundManager._channels[i].url==url){return;}}
SoundManager.destroySound(url);}
SoundManager._visibilityChange=function(){if(Laya.stage.isVisibility){SoundManager._stageOnFocus();}else{SoundManager._stageOnBlur();}}
SoundManager._stageOnBlur=function(){SoundManager._isActive=false;if(SoundManager._musicChannel){if(!SoundManager._musicChannel.isStopped){SoundManager._blurPaused=true;SoundManager._musicChannel.pause();}}
SoundManager.stopAllSound();Laya.stage.once("mousedown",null,SoundManager._stageOnFocus);}
SoundManager._recoverWebAudio=function(){if(WebAudioSound.ctx&&WebAudioSound.ctx.state!="running"&&WebAudioSound.ctx.resume)
WebAudioSound.ctx.resume();}
SoundManager._stageOnFocus=function(){SoundManager._isActive=true;SoundManager._recoverWebAudio();Laya.stage.off("mousedown",null,SoundManager._stageOnFocus);if(SoundManager._blurPaused){if(SoundManager._musicChannel&&SoundManager._musicChannel.isStopped){SoundManager._blurPaused=false;SoundManager._musicChannel.resume();}}}
SoundManager.playSound=function(url,loops,complete,soundClass,startTime){(loops===void 0)&&(loops=1);(startTime===void 0)&&(startTime=0);if(!SoundManager._isActive||!url)return null;if(SoundManager._muted)return null;SoundManager._recoverWebAudio();url=URL.formatURL(url);if(url==SoundManager._bgMusic){if(SoundManager._musicMuted)return null;}else{if(Render.isConchApp){var ext=Utils.getFileExtension(url);if(ext!="wav"&&ext!="ogg"){alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document.");return null;}}
if(SoundManager._soundMuted)return null;};var tSound;if(!Browser.onMiniGame&&!Browser.onBLMiniGame&&!Browser.onQQMiniGame&&!Browser.onQGMiniGame&&!Browser.onVVMiniGame&&!Browser.onBDMiniGame&&!Browser.onKGMiniGame){tSound=Laya.loader.getRes(url);}
if(!soundClass)soundClass=SoundManager._soundClass;if(!tSound){tSound=new soundClass();tSound.load(url);if(!Browser.onMiniGame&&!Browser.onBLMiniGame&&!Browser.onQQMiniGame&&!Browser.onQGMiniGame&&!Browser.onVVMiniGame&&!Browser.onBDMiniGame&&!Browser.onKGMiniGame){Loader.cacheRes(url,tSound);}};var channel;channel=tSound.play(startTime,loops);if(!channel)return null;channel.url=url;channel.volume=(url==SoundManager._bgMusic)?SoundManager.musicVolume:SoundManager.soundVolume;channel.completeHandler=complete;return channel;}
SoundManager.destroySound=function(url){var tSound=Laya.loader.getRes(url);if(tSound){Loader.clearRes(url);tSound.dispose();}}
SoundManager.playMusic=function(url,loops,complete,startTime){(loops===void 0)&&(loops=0);(startTime===void 0)&&(startTime=0);url=URL.formatURL(url);SoundManager._bgMusic=url;if(SoundManager._musicChannel)SoundManager._musicChannel.stop();return SoundManager._musicChannel=SoundManager.playSound(url,loops,complete,SoundManager._musicClass,startTime);}
SoundManager.stopSound=function(url){url=URL.formatURL(url);var i=0;var channel;for(i=SoundManager._channels.length-1;i>=0;i--){channel=SoundManager._channels[i];if(channel.url==url){channel.stop();}}}
SoundManager.stopAll=function(){SoundManager._bgMusic=null;var i=0;var channel;for(i=SoundManager._channels.length-1;i>=0;i--){channel=SoundManager._channels[i];channel.stop();}}
SoundManager.stopAllSound=function(){var i=0;var channel;for(i=SoundManager._channels.length-1;i>=0;i--){channel=SoundManager._channels[i];if(channel.url!=SoundManager._bgMusic){channel.stop();}}}
SoundManager.stopMusic=function(){if(SoundManager._musicChannel)SoundManager._musicChannel.stop();SoundManager._bgMusic=null;}
SoundManager.setSoundVolume=function(volume,url){if(url){url=URL.formatURL(url);SoundManager._setVolume(url,volume);}else{SoundManager.soundVolume=volume;var i=0;var channel;for(i=SoundManager._channels.length-1;i>=0;i--){channel=SoundManager._channels[i];if(channel.url!=SoundManager._bgMusic){channel.volume=volume;}}}}
SoundManager.setMusicVolume=function(volume){SoundManager.musicVolume=volume;SoundManager._setVolume(SoundManager._bgMusic,volume);}
SoundManager._setVolume=function(url,volume){url=URL.formatURL(url);var i=0;var channel;for(i=SoundManager._channels.length-1;i>=0;i--){channel=SoundManager._channels[i];if(channel.url==url){channel.volume=volume;}}}
SoundManager.musicVolume=1;SoundManager.soundVolume=1;SoundManager.playbackRate=1;SoundManager._useAudioMusic=true;SoundManager._muted=false;SoundManager._soundMuted=false;SoundManager._musicMuted=false;SoundManager._bgMusic=null;SoundManager._musicChannel=null;SoundManager._channels=[];SoundManager._autoStopMusic=false;SoundManager._blurPaused=false;SoundManager._isActive=true;SoundManager._soundClass=null;SoundManager._musicClass=null;SoundManager._lastSoundUsedTimeDic={};SoundManager._isCheckingDispose=false;SoundManager.autoReleaseSound=true;return SoundManager;})()
var SubmitTexture=(function(_super){function SubmitTexture(renderType){(renderType===void 0)&&(renderType=10000);SubmitTexture.__super.call(this,renderType);}
__class(SubmitTexture,'laya.webgl.submit.SubmitTexture',_super);var __proto=SubmitTexture.prototype;__proto.clone=function(context,mesh,pos){var o=SubmitTexture._poolSize?SubmitTexture.POOL[--SubmitTexture._poolSize]:new SubmitTexture();this._cloneInit(o,context,mesh,pos);return o;}
__proto.releaseRender=function(){if((--this._ref)<1){SubmitTexture.POOL[SubmitTexture._poolSize++]=this;this.shaderValue.release();this._mesh=null;this._parent&&(this._parent.releaseRender(),this._parent=null);}}
__proto.renderSubmit=function(){if(this._numEle===0)
return 1;var tex=this.shaderValue.textureHost;if(tex){var source=tex?tex._getSource():null;if(!source)return 1;};var gl=WebGL.mainContext;this._mesh.useMesh(gl);var lastSubmit=Submit.preRender;var prekey=(Submit.preRender)._key;if(this._key.blendShader===0&&(this._key.submitType===prekey.submitType&&this._key.blendShader===prekey.blendShader)&&BaseShader.activeShader&&(Submit.preRender).clipInfoID==this.clipInfoID&&lastSubmit.shaderValue.defines._value===this.shaderValue.defines._value&&(this.shaderValue.defines._value&ShaderDefines2D.NOOPTMASK)==0){(BaseShader.activeShader).uploadTexture2D(source);}else{if(BlendMode.activeBlendFunction!==this._blendFn){WebGLContext.setBlend(gl,true);this._blendFn(gl);BlendMode.activeBlendFunction=this._blendFn;}
this.shaderValue.texture=source;this.shaderValue.upload();}
gl.drawElements(0x0004,this._numEle,0x1403,this._startIdx);Stat.renderBatches++;Stat.trianglesFaces+=this._numEle/3;return 1;}
SubmitTexture.create=function(context,mesh,sv){var o=SubmitTexture._poolSize?SubmitTexture.POOL[--SubmitTexture._poolSize]:new SubmitTexture(10016);o._mesh=mesh;o._key.clear();o._key.submitType=2;o._ref=1;o._startIdx=mesh.indexNum*CONST3D2D.BYTES_PIDX;o._numEle=0;var blendType=context._nBlendType;o._key.blendShader=blendType;o._blendFn=context._targets?BlendMode.targetFns[blendType]:BlendMode.fns[blendType];o.shaderValue=sv;if(context._colorFiler){var ft=context._colorFiler;sv.defines.add(ft.type);(sv).colorMat=ft._mat;(sv).colorAlpha=ft._alpha;}
return o;}
SubmitTexture._poolSize=0;SubmitTexture.POOL=[];return SubmitTexture;})(Submit)
var ColorFilter=(function(_super){function ColorFilter(mat){ColorFilter.__super.call(this);if(!mat)mat=this._copyMatrix(ColorFilter.IDENTITY_MATRIX);this._mat=new Float32Array(16);this._alpha=new Float32Array(4);this.setByMatrix(mat);}
__class(ColorFilter,'laya.filters.ColorFilter',_super);var __proto=ColorFilter.prototype;Laya.imps(__proto,{"laya.filters.IFilter":true})
__proto.gray=function(){return this.setByMatrix(ColorFilter.GRAY_MATRIX);}
__proto.color=function(red,green,blue,alpha){(red===void 0)&&(red=0);(green===void 0)&&(green=0);(blue===void 0)&&(blue=0);(alpha===void 0)&&(alpha=1);return this.setByMatrix([1,0,0,0,red,0,1,0,0,green,0,0,1,0,blue,0,0,0,1,alpha]);}
__proto.setColor=function(color){var arr=ColorUtils.create(color).arrColor;var mt=[0,0,0,0,256*arr[0],0,0,0,0,256*arr[1],0,0,0,0,256*arr[2],0,0,0,1,0];return this.setByMatrix(mt);}
__proto.setByMatrix=function(matrix){if(this._matrix!=matrix)this._copyMatrix(matrix);var j=0;var z=0;for(var i=0;i<20;i++){if(i%5!=4){this._mat[j++]=matrix[i];}else{this._alpha[z++]=matrix[i];}}
return this;}
__proto.adjustColor=function(brightness,contrast,saturation,hue){this.adjustHue(hue);this.adjustContrast(contrast);this.adjustBrightness(brightness);this.adjustSaturation(saturation);return this;}
__proto.adjustBrightness=function(brightness){brightness=this._clampValue(brightness,100);if(brightness==0||isNaN(brightness))return this;return this._multiplyMatrix([1,0,0,0,brightness,0,1,0,0,brightness,0,0,1,0,brightness,0,0,0,1,0,0,0,0,0,1]);}
__proto.adjustContrast=function(contrast){contrast=this._clampValue(contrast,100);if(contrast==0||isNaN(contrast))return this;var x=NaN;if(contrast<0){x=127+contrast/100*127}else{x=contrast%1;if(x==0){x=ColorFilter.DELTA_INDEX[contrast];}else{x=ColorFilter.DELTA_INDEX[(contrast<<0)]*(1-x)+ColorFilter.DELTA_INDEX[(contrast<<0)+1]*x;}
x=x*127+127;};var x1=x/127;var x2=(127-x)*0.5;return this._multiplyMatrix([x1,0,0,0,x2,0,x1,0,0,x2,0,0,x1,0,x2,0,0,0,1,0,0,0,0,0,1]);}
__proto.adjustSaturation=function(saturation){saturation=this._clampValue(saturation,100);if(saturation==0||isNaN(saturation))return this;var x=1+((saturation>0)?3*saturation/100:saturation/100);var dx=1-x;var r=0.3086*dx;var g=0.6094*dx;var b=0.0820*dx;return this._multiplyMatrix([r+x,g,b,0,0,r,g+x,b,0,0,r,g,b+x,0,0,0,0,0,1,0,0,0,0,0,1]);}
__proto.adjustHue=function(hue){hue=this._clampValue(hue,180)/180*Math.PI;if(hue==0||isNaN(hue))return this;var cos=Math.cos(hue);var sin=Math.sin(hue);var r=0.213;var g=0.715;var b=0.072;return this._multiplyMatrix([r+cos*(1-r)+sin*(-r),g+cos*(-g)+sin*(-g),b+cos*(-b)+sin*(1-b),0,0,r+cos*(-r)+sin*(0.143),g+cos*(1-g)+sin*(0.140),b+cos*(-b)+sin*(-0.283),0,0,r+cos*(-r)+sin*(-(1-r)),g+cos*(-g)+sin*(g),b+cos*(1-b)+sin*(b),0,0,0,0,0,1,0,0,0,0,0,1]);}
__proto.reset=function(){return this.setByMatrix(this._copyMatrix(ColorFilter.IDENTITY_MATRIX));}
__proto._multiplyMatrix=function(matrix){var col=[];this._matrix=this._fixMatrix(this._matrix);for(var i=0;i<5;i++){for(var j=0;j<5;j++){col[j]=this._matrix[j+i*5];}
for(j=0;j<5;j++){var val=0;for(var k=0;k<5;k++){val+=matrix[j+k*5]*col[k];}
this._matrix[j+i*5]=val;}}
return this.setByMatrix(this._matrix);}
__proto._clampValue=function(val,limit){return Math.min(limit,Math.max(-limit,val));}
__proto._fixMatrix=function(matrix){if(matrix==null)return ColorFilter.IDENTITY_MATRIX;if(matrix.length<25)matrix=matrix.slice(0,matrix.length).concat(ColorFilter.IDENTITY_MATRIX.slice(matrix.length,25));else if(matrix.length>25)matrix=matrix.slice(0,25);return matrix;}
__proto._copyMatrix=function(matrix){var len=25;if(!this._matrix)this._matrix=[];for(var i=0;i<len;i++){this._matrix[i]=matrix[i];}
return this._matrix;}
__getset(0,__proto,'type',function(){return 0x20;});ColorFilter.LENGTH=25;__static(ColorFilter,['DELTA_INDEX',function(){return this.DELTA_INDEX=[0,0.01,0.02,0.04,0.05,0.06,0.07,0.08,0.1,0.11,0.12,0.14,0.15,0.16,0.17,0.18,0.20,0.21,0.22,0.24,0.25,0.27,0.28,0.30,0.32,0.34,0.36,0.38,0.40,0.42,0.44,0.46,0.48,0.5,0.53,0.56,0.59,0.62,0.65,0.68,0.71,0.74,0.77,0.80,0.83,0.86,0.89,0.92,0.95,0.98,1.0,1.06,1.12,1.18,1.24,1.30,1.36,1.42,1.48,1.54,1.60,1.66,1.72,1.78,1.84,1.90,1.96,2.0,2.12,2.25,2.37,2.50,2.62,2.75,2.87,3.0,3.2,3.4,3.6,3.8,4.0,4.3,4.7,4.9,5.0,5.5,6.0,6.5,6.8,7.0,7.3,7.5,7.8,8.0,8.4,8.7,9.0,9.4,9.6,9.8,10.0];},'GRAY_MATRIX',function(){return this.GRAY_MATRIX=[0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0,0,0,1,0];},'IDENTITY_MATRIX',function(){return this.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1];}]);return ColorFilter;})(Filter)
var SubmitCanvas=(function(_super){function SubmitCanvas(){this._matrix=new Matrix();this._matrix4=CONST3D2D.defaultMatrix4.concat();SubmitCanvas.__super.call(this,10000);this.shaderValue=new Value2D(0,0);}
__class(SubmitCanvas,'laya.webgl.submit.SubmitCanvas',_super);var __proto=SubmitCanvas.prototype;__proto.renderSubmit=function(){var preAlpha=RenderState2D.worldAlpha;var preMatrix4=RenderState2D.worldMatrix4;var preMatrix=RenderState2D.worldMatrix;var preFilters=RenderState2D.worldFilters;var preWorldShaderDefines=RenderState2D.worldShaderDefines;var v=this.shaderValue;var m=this._matrix;var m4=this._matrix4;var mout=Matrix.TEMP;Matrix.mul(m,preMatrix,mout);m4[0]=mout.a;m4[1]=mout.b;m4[4]=mout.c;m4[5]=mout.d;m4[12]=mout.tx;m4[13]=mout.ty;RenderState2D.worldMatrix=mout.clone();RenderState2D.worldMatrix4=m4;RenderState2D.worldAlpha=RenderState2D.worldAlpha*v.alpha;if(v.filters&&v.filters.length){RenderState2D.worldFilters=v.filters;RenderState2D.worldShaderDefines=v.defines;}
this.canv['flushsubmit']();RenderState2D.worldAlpha=preAlpha;RenderState2D.worldMatrix4=preMatrix4;RenderState2D.worldMatrix.destroy();RenderState2D.worldMatrix=preMatrix;RenderState2D.worldFilters=preFilters;RenderState2D.worldShaderDefines=preWorldShaderDefines;return 1;}
__proto.releaseRender=function(){if((--this._ref)<1){var cache=SubmitCanvas.POOL;this._mesh=null;cache[cache._length++]=this;}}
__proto.clone=function(context,mesh,pos){return null;}
__proto.getRenderType=function(){return 10003;}
SubmitCanvas.create=function(canvas,alpha,filters){var o=(!SubmitCanvas.POOL._length)?(new SubmitCanvas()):SubmitCanvas.POOL[--SubmitCanvas.POOL._length];o.canv=canvas;o._ref=1;o._numEle=0;var v=o.shaderValue;v.alpha=alpha;v.defines.setValue(0);filters&&filters.length&&v.setFilters(filters);return o;}
SubmitCanvas.POOL=[];SubmitCanvas.__init$=function(){;;{SubmitCanvas.POOL._length=0};}
return SubmitCanvas;})(Submit)
var Script=(function(_super){function Script(){Script.__super.call(this);;}
__class(Script,'laya.components.Script',_super);var __proto=Script.prototype;__proto._onAwake=function(){this.onAwake();if(this.onStart!==laya.components.Script.prototype.onStart){Laya.startTimer.callLater(this,this.onStart);}}
__proto._onEnable=function(){var proto=laya.components.Script.prototype;if(this.onTriggerEnter!==proto.onTriggerEnter){this.owner.on("triggerenter",this,this.onTriggerEnter);}
if(this.onTriggerStay!==proto.onTriggerStay){this.owner.on("triggerstay",this,this.onTriggerStay);}
if(this.onTriggerExit!==proto.onTriggerExit){this.owner.on("triggerexit",this,this.onTriggerExit);}
if(this.onMouseDown!==proto.onMouseDown){this.owner.on("mousedown",this,this.onMouseDown);}
if(this.onMouseUp!==proto.onMouseUp){this.owner.on("mouseup",this,this.onMouseUp);}
if(this.onClick!==proto.onClick){this.owner.on("click",this,this.onClick);}
if(this.onStageMouseDown!==proto.onStageMouseDown){Laya.stage.on("mousedown",this,this.onStageMouseDown);}
if(this.onStageMouseUp!==proto.onStageMouseUp){Laya.stage.on("mouseup",this,this.onStageMouseUp);}
if(this.onStageClick!==proto.onStageClick){Laya.stage.on("click",this,this.onStageClick);}
if(this.onStageMouseMove!==proto.onStageMouseMove){Laya.stage.on("mousemove",this,this.onStageMouseMove);}
if(this.onDoubleClick!==proto.onDoubleClick){this.owner.on("doubleclick",this,this.onDoubleClick);}
if(this.onRightClick!==proto.onRightClick){this.owner.on("rightclick",this,this.onRightClick);}
if(this.onMouseMove!==proto.onMouseMove){this.owner.on("mousemove",this,this.onMouseMove);}
if(this.onMouseOver!==proto.onMouseOver){this.owner.on("mouseover",this,this.onMouseOver);}
if(this.onMouseOut!==proto.onMouseOut){this.owner.on("mouseout",this,this.onMouseOut);}
if(this.onKeyDown!==proto.onKeyDown){Laya.stage.on("keydown",this,this.onKeyDown);}
if(this.onKeyPress!==proto.onKeyPress){Laya.stage.on("keypress",this,this.onKeyPress);}
if(this.onKeyUp!==proto.onKeyUp){Laya.stage.on("keyup",this,this.onKeyUp);}
if(this.onUpdate!==proto.onUpdate){Laya.updateTimer.frameLoop(1,this,this.onUpdate);}
if(this.onLateUpdate!==proto.onLateUpdate){Laya.lateTimer.frameLoop(1,this,this.onLateUpdate);}
if(this.onPreRender!==proto.onPreRender){Laya.lateTimer.frameLoop(1,this,this.onPreRender);}}
__proto._onDisable=function(){this.owner.offAllCaller(this);Laya.stage.offAllCaller(this);Laya.startTimer.clearAll(this);Laya.updateTimer.clearAll(this);Laya.lateTimer.clearAll(this);}
__proto._isScript=function(){return true;}
__proto._onDestroy=function(){this.onDestroy();}
__proto.onAwake=function(){}
__proto.onEnable=function(){}
__proto.onStart=function(){}
__proto.onTriggerEnter=function(other,self,contact){}
__proto.onTriggerStay=function(other,self,contact){}
__proto.onTriggerExit=function(other,self,contact){}
__proto.onMouseDown=function(e){}
__proto.onMouseUp=function(e){}
__proto.onClick=function(e){}
__proto.onStageMouseDown=function(e){}
__proto.onStageMouseUp=function(e){}
__proto.onStageClick=function(e){}
__proto.onStageMouseMove=function(e){}
__proto.onDoubleClick=function(e){}
__proto.onRightClick=function(e){}
__proto.onMouseMove=function(e){}
__proto.onMouseOver=function(e){}
__proto.onMouseOut=function(e){}
__proto.onKeyDown=function(e){}
__proto.onKeyPress=function(e){}
__proto.onKeyUp=function(e){}
__proto.onUpdate=function(){}
__proto.onLateUpdate=function(){}
__proto.onPreRender=function(){}
__proto.onPostRender=function(){}
__proto.onDisable=function(){}
__proto.onDestroy=function(){}
__getset(0,__proto,'isSingleton',function(){return false;});return Script;})(Component)
var AudioSound=(function(_super){function AudioSound(){this.url=null;this.audio=null;this.loaded=false;AudioSound.__super.call(this);}
__class(AudioSound,'laya.media.h5audio.AudioSound',_super);var __proto=AudioSound.prototype;__proto.dispose=function(){var ad=AudioSound._audioCache[this.url];Pool.clearBySign("audio:"+this.url);if(ad){if(!Render.isConchApp){ad.src="";}
delete AudioSound._audioCache[this.url];}}
__proto.load=function(url){url=URL.formatURL(url);this.url=url;var ad;if(url==SoundManager._bgMusic){AudioSound._initMusicAudio();ad=AudioSound._musicAudio;if(ad.src!=url){AudioSound._audioCache[ad.src]=null;ad=null;}}else{ad=AudioSound._audioCache[url];}
if(ad&&ad.readyState>=2){this.event("complete");return;}
if(!ad){if(url==SoundManager._bgMusic){AudioSound._initMusicAudio();ad=AudioSound._musicAudio;}else{ad=Browser.createElement("audio");}
AudioSound._audioCache[url]=ad;ad.src=url;}
ad.addEventListener("canplaythrough",onLoaded);ad.addEventListener("error",onErr);var me=this;function onLoaded(){offs();me.loaded=true;me.event("complete");}
function onErr(){ad.load=null;offs();me.event("error");}
function offs(){ad.removeEventListener("canplaythrough",onLoaded);ad.removeEventListener("error",onErr);}
this.audio=ad;if(ad.load){ad.load();}else{onErr();}}
__proto.play=function(startTime,loops){(startTime===void 0)&&(startTime=0);(loops===void 0)&&(loops=0);if(!this.url)return null;var ad;if(this.url==SoundManager._bgMusic){ad=AudioSound._musicAudio;}else{ad=AudioSound._audioCache[this.url];}
if(!ad)return null;var tAd;tAd=Pool.getItem("audio:"+this.url);if(Render.isConchApp){if(!tAd){tAd=Browser.createElement("audio");tAd.src=this.url;}}else{if(this.url==SoundManager._bgMusic){AudioSound._initMusicAudio();tAd=AudioSound._musicAudio;tAd.src=this.url;}else{tAd=tAd?tAd:ad.cloneNode(true);}};var channel=new AudioSoundChannel(tAd);channel.url=this.url;channel.loops=loops;channel.startTime=startTime;channel.play();SoundManager.addChannel(channel);return channel;}
__getset(0,__proto,'duration',function(){var ad;ad=AudioSound._audioCache[this.url];if(!ad)
return 0;return ad.duration;});AudioSound._initMusicAudio=function(){if(AudioSound._musicAudio)return;if(!AudioSound._musicAudio)AudioSound._musicAudio=Browser.createElement("audio");if(!Render.isConchApp){Browser.document.addEventListener("mousedown",AudioSound._makeMusicOK);}}
AudioSound._makeMusicOK=function(){Browser.document.removeEventListener("mousedown",AudioSound._makeMusicOK);if(!AudioSound._musicAudio.src){AudioSound._musicAudio.src="";AudioSound._musicAudio.load();}else{AudioSound._musicAudio.play();}}
AudioSound._audioCache={};AudioSound._musicAudio=null;return AudioSound;})(EventDispatcher)
var Sound=(function(_super){function Sound(){Sound.__super.call(this);;}
__class(Sound,'laya.media.Sound',_super);var __proto=Sound.prototype;__proto.load=function(url){}
__proto.play=function(startTime,loops){(startTime===void 0)&&(startTime=0);(loops===void 0)&&(loops=0);return null;}
__proto.dispose=function(){}
__getset(0,__proto,'duration',function(){return 0;});return Sound;})(EventDispatcher)
var MeshParticle2D=(function(_super){function MeshParticle2D(maxNum){MeshParticle2D.__super.call(this,116,maxNum*4*116,4);this.canReuse=true;this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo);this.createQuadIB(maxNum);this._quadNum=maxNum;}
__class(MeshParticle2D,'laya.webgl.utils.MeshParticle2D',_super);var __proto=MeshParticle2D.prototype;__proto.setMaxParticleNum=function(maxNum){this._vb._resizeBuffer(maxNum*4*116,false);this.createQuadIB(maxNum);}
__proto.releaseMesh=function(){;this._vb.setByteLength(0);this.vertNum=0;this.indexNum=0;laya.webgl.utils.MeshParticle2D._POOL.push(this);}
__proto.destroy=function(){this._ib.destroy();this._vb.destroy();this._vb.deleteBuffer();}
MeshParticle2D.getAMesh=function(maxNum){if(laya.webgl.utils.MeshParticle2D._POOL.length){var ret=laya.webgl.utils.MeshParticle2D._POOL.pop();ret.setMaxParticleNum(maxNum);return ret;}
return new MeshParticle2D(maxNum);}
MeshParticle2D.const_stride=116;MeshParticle2D._POOL=[];__static(MeshParticle2D,['_fixattriInfo',function(){return this._fixattriInfo=[0x1406,4,0,0x1406,3,16,0x1406,3,28,0x1406,4,40,0x1406,4,56,0x1406,3,72,0x1406,2,84,0x1406,4,92,0x1406,1,108,0x1406,1,112];}]);return MeshParticle2D;})(Mesh2D)
var Node=(function(_super){function Node(){this._bits=0;this._parent=null;this.name="";this.destroyed=false;this._conchData=null;this._components=null;this._activeChangeScripts=null;this._scene=null;Node.__super.call(this);this._children=Node.ARRAY_EMPTY;this._extUIChild=Node.ARRAY_EMPTY;this.createGLBuffer();}
__class(Node,'laya.display.Node',_super);var __proto=Node.prototype;__proto.createGLBuffer=function(){}
__proto._setBit=function(type,value){if(type===0x10){var preValue=this._getBit(type);if(preValue!=value)this._updateDisplayedInstage();}
if(value)this._bits|=type;else this._bits&=~type;}
__proto._getBit=function(type){return(this._bits&type)!=0;}
__proto._setUpNoticeChain=function(){if(this._getBit(0x10))this._setBitUp(0x10);}
__proto._setBitUp=function(type){var ele=this;ele._setBit(type,true);ele=ele._parent;while(ele){if(ele._getBit(type))return;ele._setBit(type,true);ele=ele._parent;}}
__proto.on=function(type,caller,listener,args){if(type==="display"||type==="undisplay"){if(!this._getBit(0x10))this._setBitUp(0x10);}
return this._createListener(type,caller,listener,args,false);}
__proto.once=function(type,caller,listener,args){if(type==="display"||type==="undisplay"){if(!this._getBit(0x10))this._setBitUp(0x10);}
return this._createListener(type,caller,listener,args,true);}
__proto.destroy=function(destroyChild){(destroyChild===void 0)&&(destroyChild=true);this.destroyed=true;this._destroyAllComponent();this._parent&&this._parent.removeChild(this);if(this._children){if(destroyChild)this.destroyChildren();else this.removeChildren();}
this.onDestroy();this._children=null;this.offAll();}
__proto.onDestroy=function(){}
__proto.destroyChildren=function(){if(this._children){for(var i=0,n=this._children.length;i<n;i++){this._children[0].destroy(true);}}}
__proto.addChild=function(node){if(!node||this.destroyed||node===this)return node;if((node)._zOrder)this._setBit(0x20,true);if(node._parent===this){var index=this.getChildIndex(node);if(index!==this._children.length-1){this._children.splice(index,1);this._children.push(node);this._childChanged();}}else{node._parent&&node._parent.removeChild(node);this._children===Node.ARRAY_EMPTY&&(this._children=[]);this._children.push(node);node._setParent(this);this._childChanged();}
return node;}
__proto.addInputChild=function(node){if(this._extUIChild==Node.ARRAY_EMPTY){this._extUIChild=[node];}else{if(this._extUIChild.indexOf(node)>=0){return null;}
this._extUIChild.push(node);}
return null;}
__proto.removeInputChild=function(node){var idx=this._extUIChild.indexOf(node);if(idx>=0){this._extUIChild.splice(idx,1);}}
__proto.addChildren=function(__args){var args=arguments;var i=0,n=args.length;while(i<n){this.addChild(args[i++]);}}
__proto.addChildAt=function(node,index){if(!node||this.destroyed||node===this)return node;if((node)._zOrder)this._setBit(0x20,true);if(index>=0&&index<=this._children.length){if(node._parent===this){var oldIndex=this.getChildIndex(node);this._children.splice(oldIndex,1);this._children.splice(index,0,node);this._childChanged();}else{node._parent&&node._parent.removeChild(node);this._children===Node.ARRAY_EMPTY&&(this._children=[]);this._children.splice(index,0,node);node._setParent(this);}
return node;}else{throw new Error("appendChildAt:The index is out of bounds");}}
__proto.getChildIndex=function(node){return this._children.indexOf(node);}
__proto.getChildByName=function(name){var nodes=this._children;if(nodes){for(var i=0,n=nodes.length;i<n;i++){var node=nodes[i];if(node.name===name)return node;}}
return null;}
__proto.getChildAt=function(index){return this._children[index]||null;}
__proto.setChildIndex=function(node,index){var childs=this._children;if(index<0||index>=childs.length){throw new Error("setChildIndex:The index is out of bounds.");};var oldIndex=this.getChildIndex(node);if(oldIndex<0)throw new Error("setChildIndex:node is must child of this object.");childs.splice(oldIndex,1);childs.splice(index,0,node);this._childChanged();return node;}
__proto._childChanged=function(child){}
__proto.removeChild=function(node){if(!this._children)return node;var index=this._children.indexOf(node);return this.removeChildAt(index);}
__proto.removeSelf=function(){this._parent&&this._parent.removeChild(this);return this;}
__proto.removeChildByName=function(name){var node=this.getChildByName(name);node&&this.removeChild(node);return node;}
__proto.removeChildAt=function(index){var node=this.getChildAt(index);if(node){this._children.splice(index,1);node._setParent(null);}
return node;}
__proto.removeChildren=function(beginIndex,endIndex){(beginIndex===void 0)&&(beginIndex=0);(endIndex===void 0)&&(endIndex=0x7fffffff);if(this._children&&this._children.length>0){var childs=this._children;if(beginIndex===0&&endIndex>=childs.length-1){var arr=childs;this._children=Node.ARRAY_EMPTY;}else{arr=childs.splice(beginIndex,endIndex-beginIndex);}
for(var i=0,n=arr.length;i<n;i++){arr[i]._setParent(null);}}
return this;}
__proto.replaceChild=function(newNode,oldNode){var index=this._children.indexOf(oldNode);if(index>-1){this._children.splice(index,1,newNode);oldNode._setParent(null);newNode._setParent(this);return newNode;}
return null;}
__proto._setParent=function(value){if(this._parent!==value){if(value){this._parent=value;this._onAdded();this.event("added");if(this._getBit(0x10)){this._setUpNoticeChain();value.displayedInStage&&this._displayChild(this,true);}
value._childChanged(this);}else{this._onRemoved();this.event("removed");this._parent._childChanged();if(this._getBit(0x10))this._displayChild(this,false);this._parent=value;}}}
__proto._updateDisplayedInstage=function(){var ele;ele=this;var stage=Laya.stage;var displayedInStage=false;while(ele){if(ele._getBit(0x10)){displayedInStage=ele._getBit(0x80);break;}
if(ele===stage||ele._getBit(0x80)){displayedInStage=true;break;}
ele=ele._parent;}
this._setBit(0x80,displayedInStage);}
__proto._setDisplay=function(value){if(this._getBit(0x80)!==value){this._setBit(0x80,value);if(value)this.event("display");else this.event("undisplay");}}
__proto._displayChild=function(node,display){var childs=node._children;if(childs){for(var i=0,n=childs.length;i<n;i++){var child=childs[i];if(!child._getBit(0x10))continue;if(child._children.length>0){this._displayChild(child,display);}else{child._setDisplay(display);}}}
node._setDisplay(display);}
__proto.contains=function(node){if(node===this)return true;while(node){if(node._parent===this)return true;node=node._parent;}
return false;}
__proto.timerLoop=function(delay,caller,method,args,coverBefore,jumpFrame){(coverBefore===void 0)&&(coverBefore=true);(jumpFrame===void 0)&&(jumpFrame=false);var timer=this.scene?this.scene.timer:Laya.timer;timer.loop(delay,caller,method,args,coverBefore,jumpFrame);}
__proto.timerOnce=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);var timer=this.scene?this.scene.timer:Laya.timer;timer._create(false,false,delay,caller,method,args,coverBefore);}
__proto.frameLoop=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);var timer=this.scene?this.scene.timer:Laya.timer;timer._create(true,true,delay,caller,method,args,coverBefore);}
__proto.frameOnce=function(delay,caller,method,args,coverBefore){(coverBefore===void 0)&&(coverBefore=true);var timer=this.scene?this.scene.timer:Laya.timer;timer._create(true,false,delay,caller,method,args,coverBefore);}
__proto.clearTimer=function(caller,method){var timer=this.scene?this.scene.timer:Laya.timer;timer.clear(caller,method);}
__proto.callLater=function(method,args){var timer=this.scene?this.scene.timer:Laya.timer;timer.callLater(this,method,args);}
__proto.runCallLater=function(method){var timer=this.scene?this.scene.timer:Laya.timer;timer.runCallLater(this,method);}
__proto._onActive=function(){Stat.spriteCount++;}
__proto._onInActive=function(){Stat.spriteCount--;}
__proto._onActiveInScene=function(){}
__proto._onInActiveInScene=function(){}
__proto._parse=function(data,spriteMap){}
__proto._setBelongScene=function(scene){if(!this._scene){this._scene=scene;if(this._components){for(var i=0,n=this._components.length;i<n;i++)
this._components[i]._setActiveInScene(true);}
this._onActiveInScene();for(i=0,n=this._children.length;i<n;i++)
this._children[i]._setBelongScene(scene);}}
__proto._setUnBelongScene=function(){if(this._scene!==this){this._onInActiveInScene();if(this._components){for(var i=0,n=this._components.length;i<n;i++)
this._components[i]._setActiveInScene(false);}
this._scene=null;for(i=0,n=this._children.length;i<n;i++)
this._children[i]._setUnBelongScene();}}
__proto.onAwake=function(){}
__proto.onEnable=function(){}
__proto._processActive=function(){(this._activeChangeScripts)||(this._activeChangeScripts=[]);this._activeHierarchy(this._activeChangeScripts);this._activeScripts();}
__proto._activeHierarchy=function(activeChangeScripts){this._setBit(0x02,true);if(this._components){for(var i=0,n=this._components.length;i<n;i++){var comp=this._components[i];comp._setActive(true);(comp._isScript()&&comp._enabled)&&(activeChangeScripts.push(comp));}}
this._onActive();for(i=0,n=this._children.length;i<n;i++){var child=this._children[i];(!child._getBit(0x01))&&(child._activeHierarchy(activeChangeScripts));}
if(!this._getBit(0x04)){this._setBit(0x04,true);this.onAwake();}
this.onEnable();}
__proto._activeScripts=function(){for(var i=0,n=this._activeChangeScripts.length;i<n;i++)
this._activeChangeScripts[i].onEnable();this._activeChangeScripts.length=0;}
__proto._processInActive=function(){(this._activeChangeScripts)||(this._activeChangeScripts=[]);this._inActiveHierarchy(this._activeChangeScripts);this._inActiveScripts();}
__proto._inActiveHierarchy=function(activeChangeScripts){this._onInActive();if(this._components){for(var i=0,n=this._components.length;i<n;i++){var comp=this._components[i];comp._setActive(false);(comp._isScript()&&comp._enabled)&&(activeChangeScripts.push(comp));}}
this._setBit(0x02,false);for(i=0,n=this._children.length;i<n;i++){var child=this._children[i];(child&&!child._getBit(0x01))&&(child._inActiveHierarchy(activeChangeScripts));}
this.onDisable();}
__proto._inActiveScripts=function(){for(var i=0,n=this._activeChangeScripts.length;i<n;i++)
this._activeChangeScripts[i].onDisable();this._activeChangeScripts.length=0;}
__proto.onDisable=function(){}
__proto._onAdded=function(){if(this._activeChangeScripts&&this._activeChangeScripts.length!==0){throw"Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";}else{var parentScene=this._parent.scene;parentScene&&this._setBelongScene(parentScene);(this._parent.activeInHierarchy&&this.active)&&this._processActive();}}
__proto._onRemoved=function(){if(this._activeChangeScripts&&this._activeChangeScripts.length!==0){throw"Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";}else{(this._parent.activeInHierarchy&&this.active)&&this._processInActive();this._parent.scene&&this._setUnBelongScene();}}
__proto._addComponentInstance=function(comp){this._components=this._components||[];this._components.push(comp);comp.owner=this;comp._onAdded();if(this.activeInHierarchy){comp._setActive(true);(comp._isScript()&&comp._enabled)&&((comp).onEnable());}
this._scene&&comp._setActiveInScene(true);}
__proto._destroyComponent=function(comp){if(this._components){for(var i=0,n=this._components.length;i<n;i++){var item=this._components[i];if(item===comp){item._destroy();this._components.splice(i,1);break;}}}}
__proto._destroyAllComponent=function(){if(this._components){for(var i=0,n=this._components.length;i<n;i++){var item=this._components[i];item._destroy();}
this._components.length=0;}}
__proto._cloneTo=function(destObject,srcRoot,dstRoot){var destNode=destObject;if(this._components){for(var i=0,n=this._components.length;i<n;i++){var destComponent=destNode.addComponent(this._components[i].constructor);this._components[i]._cloneTo(destComponent);}}}
__proto.addComponentIntance=function(comp){if(comp.owner)
throw"Node:the component has belong to other node.";if(comp.isSingleton&&this.getComponent((comp).constructor))
throw"Node:the component is singleton,can't add the second one.";this._addComponentInstance(comp);return comp;}
__proto.addComponent=function(type){var comp=Pool.createByClass(type);comp._destroyed=false;if(comp.isSingleton&&this.getComponent(type))
throw"无法实例"+type+"组件"+"，"+type+"组件已存在！";this._addComponentInstance(comp);return comp;}
__proto.getComponent=function(clas){if(this._components){for(var i=0,n=this._components.length;i<n;i++){var comp=this._components[i];if(Laya.__typeof(comp,clas))
return comp;}}
return null;}
__proto.getComponents=function(clas){var arr;if(this._components){for(var i=0,n=this._components.length;i<n;i++){var comp=this._components[i];if(Laya.__typeof(comp,clas)){arr=arr||[];arr.push(comp);}}}
return arr;}
__getset(0,__proto,'numChildren',function(){return this._children.length;});__getset(0,__proto,'parent',function(){return this._parent;});__getset(0,__proto,'activeInHierarchy',function(){return this._getBit(0x02);});__getset(0,__proto,'active',function(){return!this._getBit(0x08)&&!this._getBit(0x01);},function(value){value=!!value;if(!this._getBit(0x01)!==value){if(this._activeChangeScripts&&this._activeChangeScripts.length!==0){if(value)
throw"Node: can't set the main inActive node active in hierarchy,if the operate is in main inActive node or it's children script's onDisable Event.";else
throw"Node: can't set the main active node inActive in hierarchy,if the operate is in main active node or it's children script's onEnable Event.";}else{this._setBit(0x01,!value);if(this._parent){if(this._parent.activeInHierarchy){if(value)this._processActive();else this._processInActive();}}}}});__getset(0,__proto,'displayedInStage',function(){if(this._getBit(0x10))return this._getBit(0x80);this._setBitUp(0x10);return this._getBit(0x80);});__getset(0,__proto,'scene',function(){return this._scene;});__getset(0,__proto,'timer',function(){return this.scene?this.scene.timer:Laya.timer;});Node.ARRAY_EMPTY=[];return Node;})(EventDispatcher)
var SoundChannel=(function(_super){function SoundChannel(){this.url=null;this.loops=0;this.startTime=NaN;this.isStopped=false;this.completeHandler=null;SoundChannel.__super.call(this);}
__class(SoundChannel,'laya.media.SoundChannel',_super);var __proto=SoundChannel.prototype;__proto.play=function(){}
__proto.stop=function(){if(this.completeHandler)this.completeHandler.run();}
__proto.pause=function(){}
__proto.resume=function(){}
__proto.__runComplete=function(handler){if(handler){handler.run();}}
__getset(0,__proto,'volume',function(){return 1;},function(v){});__getset(0,__proto,'position',function(){return 0;});__getset(0,__proto,'duration',function(){return 0;});return SoundChannel;})(EventDispatcher)
var Resource=(function(_super){function Resource(){this._id=0;this._url=null;this._cpuMemory=0;this._gpuMemory=0;this._destroyed=false;this._referenceCount=0;this.lock=false;this.name=null;Resource.__super.call(this);this._id=++Resource._uniqueIDCounter;this._destroyed=false;this._referenceCount=0;Resource._idResourcesMap[this.id]=this;this.lock=false;}
__class(Resource,'laya.resource.Resource',_super);var __proto=Resource.prototype;Laya.imps(__proto,{"laya.resource.ICreateResource":true,"laya.resource.IDestroy":true})
__proto._setCPUMemory=function(value){var offsetValue=value-this._cpuMemory;this._cpuMemory=value;Resource._addCPUMemory(offsetValue);}
__proto._setGPUMemory=function(value){var offsetValue=value-this._gpuMemory;this._gpuMemory=value;Resource._addGPUMemory(offsetValue);}
__proto._setCreateURL=function(url){url=URL.formatURL(url);if(this._url!==url){var resList;if(this._url){resList=Resource._urlResourcesMap[this._url];resList.splice(resList.indexOf(this),1);(resList.length===0)&&(delete Resource._urlResourcesMap[this._url]);}
if(url){resList=Resource._urlResourcesMap[url];(resList)||(Resource._urlResourcesMap[url]=resList=[]);resList.push(this);}
this._url=url;}}
__proto._addReference=function(count){(count===void 0)&&(count=1);this._referenceCount+=count;}
__proto._removeReference=function(count){(count===void 0)&&(count=1);this._referenceCount-=count;}
__proto._clearReference=function(){this._referenceCount=0;}
__proto._recoverResource=function(){}
__proto._disposeResource=function(){}
__proto._activeResource=function(){}
__proto.destroy=function(){if(this._destroyed)
return;this._destroyed=true;this.lock=false;this._disposeResource();delete Resource._idResourcesMap[this.id];var resList;if(this._url){resList=Resource._urlResourcesMap[this._url];if(resList){resList.splice(resList.indexOf(this),1);(resList.length===0)&&(delete Resource._urlResourcesMap[this._url]);};var resou=Loader.getRes(this._url);(resou==this)&&(delete Loader.loadedMap[this._url]);}}
__getset(0,__proto,'id',function(){return this._id;});__getset(0,__proto,'gpuMemory',function(){return this._gpuMemory;});__getset(0,__proto,'url',function(){return this._url;});__getset(0,__proto,'cpuMemory',function(){return this._cpuMemory;});__getset(0,__proto,'destroyed',function(){return this._destroyed;});__getset(0,__proto,'referenceCount',function(){return this._referenceCount;});__getset(1,Resource,'cpuMemory',function(){return this._cpuMemory;},laya.events.EventDispatcher._$SET_cpuMemory);__getset(1,Resource,'gpuMemory',function(){return this._gpuMemory;},laya.events.EventDispatcher._$SET_gpuMemory);Resource._addCPUMemory=function(size){this._cpuMemory+=size;}
Resource._addGPUMemory=function(size){this._gpuMemory+=size;}
Resource._addMemory=function(cpuSize,gpuSize){this._cpuMemory+=cpuSize;this._gpuMemory+=gpuSize;}
Resource.getResourceByID=function(id){return Resource._idResourcesMap[id];}
Resource.getResourceByURL=function(url,index){(index===void 0)&&(index=0);return Resource._urlResourcesMap[url][index];}
Resource.destroyUnusedResources=function(){for(var k in Resource._idResourcesMap){var res=Resource._idResourcesMap[k];if(!res.lock&&res._referenceCount===0)
res.destroy();}}
Resource._uniqueIDCounter=0;Resource._idResourcesMap={};Resource._urlResourcesMap={};Resource._cpuMemory=0;Resource._gpuMemory=0;return Resource;})(EventDispatcher)
var MeshVG=(function(_super){function MeshVG(){MeshVG.__super.call(this,12,4,4);this.canReuse=true;this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo);}
__class(MeshVG,'laya.webgl.utils.MeshVG',_super);var __proto=MeshVG.prototype;__proto.addVertAndIBToMesh=function(ctx,points,rgba,ib){var startpos=this._vb.needSize(points.length/2*12);var f32pos=startpos>>2;var vbdata=this._vb._floatArray32||this._vb.getFloat32Array();var vbu32Arr=this._vb._uint32Array;var ci=0;var sz=points.length/2;for(var i=0;i<sz;i++){vbdata[f32pos++]=points[ci];vbdata[f32pos++]=points[ci+1];ci+=2;vbu32Arr[f32pos++]=rgba;}
this._vb.setNeedUpload();this._ib.append(new Uint16Array(ib));this._ib.setNeedUpload();this.vertNum+=sz;this.indexNum+=ib.length;}
__proto.releaseMesh=function(){this._vb.setByteLength(0);this._ib.setByteLength(0);this.vertNum=0;this.indexNum=0;laya.webgl.utils.MeshVG._POOL.push(this);}
__proto.destroy=function(){this._ib.destroy();this._vb.destroy();this._ib.disposeResource();this._vb.deleteBuffer();}
MeshVG.getAMesh=function(mainctx){var ret;if(laya.webgl.utils.MeshVG._POOL.length){ret=laya.webgl.utils.MeshVG._POOL.pop();}else
ret=new MeshVG();mainctx&&ret._vb._resizeBuffer(64*1024*12,false);return ret;}
MeshVG.const_stride=12;MeshVG._POOL=[];__static(MeshVG,['_fixattriInfo',function(){return this._fixattriInfo=[0x1406,2,0,0x1401,4,8];}]);return MeshVG;})(Mesh2D)
var TimeLine=(function(_super){var tweenData;function TimeLine(){this._labelDic=null;this._tweenDic={};this._tweenDataList=[];this._endTweenDataList=null;this._currTime=0;this._lastTime=0;this._startTime=0;this._index=0;this._gidIndex=0;this._firstTweenDic={};this._startTimeSort=false;this._endTimeSort=false;this._loopKey=false;this.scale=1;this._frameRate=60;this._frameIndex=0;this._total=0;TimeLine.__super.call(this);}
__class(TimeLine,'laya.utils.TimeLine',_super);var __proto=TimeLine.prototype;__proto.to=function(target,props,duration,ease,offset){(offset===void 0)&&(offset=0);return this._create(target,props,duration,ease,offset,true);}
__proto.from=function(target,props,duration,ease,offset){(offset===void 0)&&(offset=0);return this._create(target,props,duration,ease,offset,false);}
__proto._create=function(target,props,duration,ease,offset,isTo){var tTweenData=Pool.getItemByClass("tweenData",tweenData);tTweenData.isTo=isTo;tTweenData.type=0;tTweenData.target=target;tTweenData.duration=duration;tTweenData.data=props;tTweenData.startTime=this._startTime+offset;tTweenData.endTime=tTweenData.startTime+tTweenData.duration;tTweenData.ease=ease;this._startTime=Math.max(tTweenData.endTime,this._startTime);this._tweenDataList.push(tTweenData);this._startTimeSort=true;this._endTimeSort=true;return this;}
__proto.addLabel=function(label,offset){var tTweenData=Pool.getItemByClass("tweenData",tweenData);tTweenData.type=1;tTweenData.data=label;tTweenData.endTime=tTweenData.startTime=this._startTime+offset;this._labelDic||(this._labelDic={});this._labelDic[label]=tTweenData;this._tweenDataList.push(tTweenData);return this;}
__proto.removeLabel=function(label){if(this._labelDic&&this._labelDic[label]){var tTweenData=this._labelDic[label];if(tTweenData){var tIndex=this._tweenDataList.indexOf(tTweenData);if(tIndex>-1){this._tweenDataList.splice(tIndex,1);}}
delete this._labelDic[label];}}
__proto.gotoTime=function(time){if(this._tweenDataList==null||this._tweenDataList.length==0)return;var tTween;var tObject;for(var p in this._firstTweenDic){tObject=this._firstTweenDic[p];if(tObject){for(var tDataP in tObject){if(tObject.diyTarget.hasOwnProperty(tDataP)){tObject.diyTarget[tDataP]=tObject[tDataP];}}}}
for(p in this._tweenDic){tTween=this._tweenDic[p];tTween.clear();delete this._tweenDic[p];}
this._index=0;this._gidIndex=0;this._currTime=time;this._lastTime=Browser.now();var tTweenDataCopyList;if(this._endTweenDataList==null||this._endTimeSort){this._endTimeSort=false;this._endTweenDataList=tTweenDataCopyList=this._tweenDataList.concat();function Compare(paraA,paraB){if(paraA.endTime>paraB.endTime){return 1;}else if(paraA.endTime<paraB.endTime){return-1;}else{return 0;}}
tTweenDataCopyList.sort(Compare);}else{tTweenDataCopyList=this._endTweenDataList};var tTweenData;for(var i=0,n=tTweenDataCopyList.length;i<n;i++){tTweenData=tTweenDataCopyList[i];if(tTweenData.type==0){if(time>=tTweenData.endTime){this._index=Math.max(this._index,i+1);var props=tTweenData.data;if(tTweenData.isTo){for(var tP in props){tTweenData.target[tP]=props[tP];}}}else{break;}}}
for(i=0,n=this._tweenDataList.length;i<n;i++){tTweenData=this._tweenDataList[i];if(tTweenData.type==0){if(time>=tTweenData.startTime&&time<tTweenData.endTime){this._index=Math.max(this._index,i+1);this._gidIndex++;tTween=Pool.getItemByClass("tween",Tween);tTween._create(tTweenData.target,tTweenData.data,tTweenData.duration,tTweenData.ease,Handler.create(this,this._animComplete,[this._gidIndex]),0,false,tTweenData.isTo,true,false);tTween.setStartTime(this._currTime-(time-tTweenData.startTime));tTween._updateEase(this._currTime);tTween.gid=this._gidIndex;this._tweenDic[this._gidIndex]=tTween;}}}}
__proto.gotoLabel=function(Label){if(this._labelDic==null)return;var tLabelData=this._labelDic[Label];if(tLabelData)this.gotoTime(tLabelData.startTime);}
__proto.pause=function(){Laya.timer.clear(this,this._update);}
__proto.resume=function(){this.play(this._currTime,this._loopKey);}
__proto.play=function(timeOrLabel,loop){(timeOrLabel===void 0)&&(timeOrLabel=0);(loop===void 0)&&(loop=false);if(!this._tweenDataList)return;if(this._startTimeSort){this._startTimeSort=false;function Compare(paraA,paraB){if(paraA.startTime>paraB.startTime){return 1;}else if(paraA.startTime<paraB.startTime){return-1;}else{return 0;}}
this._tweenDataList.sort(Compare);for(var i=0,n=this._tweenDataList.length;i<n;i++){var tTweenData=this._tweenDataList[i];if(tTweenData!=null&&tTweenData.type==0){var tTarget=tTweenData.target;var gid=(tTarget.$_GID||(tTarget.$_GID=Utils.getGID()));var tSrcData=null;if(this._firstTweenDic[gid]==null){tSrcData={};tSrcData.diyTarget=tTarget;this._firstTweenDic[gid]=tSrcData;}else{tSrcData=this._firstTweenDic[gid];}
for(var p in tTweenData.data){if(tSrcData[p]==null){tSrcData[p]=tTarget[p];}}}}}
if((typeof timeOrLabel=='string')){this.gotoLabel(timeOrLabel);}else{this.gotoTime(timeOrLabel);}
this._loopKey=loop;this._lastTime=Browser.now();Laya.timer.frameLoop(1,this,this._update);}
__proto._update=function(){if(this._currTime>=this._startTime){if(this._loopKey){this._complete();if(!this._tweenDataList)return;this.gotoTime(0);}else{for(var p in this._tweenDic){tTween=this._tweenDic[p];tTween.complete();}
this._complete();this.pause();return;}};var tNow=Browser.now();var tFrameTime=tNow-this._lastTime;var tCurrTime=this._currTime+=tFrameTime*this.scale;this._lastTime=tNow;for(p in this._tweenDic){tTween=this._tweenDic[p];tTween._updateEase(tCurrTime);};var tTween;if(this._tweenDataList.length!=0&&this._index<this._tweenDataList.length){var tTweenData=this._tweenDataList[this._index];if(tCurrTime>=tTweenData.startTime){this._index++;if(tTweenData.type==0){this._gidIndex++;tTween=Pool.getItemByClass("tween",Tween);tTween._create(tTweenData.target,tTweenData.data,tTweenData.duration,tTweenData.ease,Handler.create(this,this._animComplete,[this._gidIndex]),0,false,tTweenData.isTo,true,false);tTween.setStartTime(tCurrTime);tTween.gid=this._gidIndex;this._tweenDic[this._gidIndex]=tTween;tTween._updateEase(tCurrTime);}else{this.event("label",tTweenData.data);}}}}
__proto._animComplete=function(index){var tTween=this._tweenDic[index];if(tTween)delete this._tweenDic[index];}
__proto._complete=function(){this.event("complete");}
__proto.reset=function(){var p;if(this._labelDic){for(p in this._labelDic){delete this._labelDic[p];}};var tTween;for(p in this._tweenDic){tTween=this._tweenDic[p];tTween.clear();delete this._tweenDic[p];}
for(p in this._firstTweenDic){delete this._firstTweenDic[p];}
this._endTweenDataList=null;if(this._tweenDataList&&this._tweenDataList.length){var i=0,len=0;len=this._tweenDataList.length;for(i=0;i<len;i++){if(this._tweenDataList[i])
this._tweenDataList[i].destroy();}}
this._tweenDataList.length=0;this._currTime=0;this._lastTime=0;this._startTime=0;this._index=0;this._gidIndex=0;this.scale=1;Laya.timer.clear(this,this._update);}
__proto.destroy=function(){this.reset();this._labelDic=null;this._tweenDic=null;this._tweenDataList=null;this._firstTweenDic=null;}
__getset(0,__proto,'index',function(){return this._frameIndex;},function(value){this._frameIndex=value;this.gotoTime(this._frameIndex/this._frameRate*1000);});__getset(0,__proto,'total',function(){this._total=Math.floor(this._startTime/1000*this._frameRate);return this._total;});TimeLine.to=function(target,props,duration,ease,offset){(offset===void 0)&&(offset=0);return(new TimeLine()).to(target,props,duration,ease,offset);}
TimeLine.from=function(target,props,duration,ease,offset){(offset===void 0)&&(offset=0);return(new TimeLine()).from(target,props,duration,ease,offset);}
TimeLine.__init$=function(){tweenData=(function(){function tweenData(){this.type=0;this.isTo=true;this.startTime=NaN;this.endTime=NaN;this.target=null;this.duration=NaN;this.ease=null;this.data=null;}
__class(tweenData,'');var __proto=tweenData.prototype;__proto.destroy=function(){this.target=null;this.ease=null;this.data=null;this.isTo=true;this.type=0;Pool.recover("tweenData",this);}
return tweenData;})()}
return TimeLine;})(EventDispatcher)
var ShaderDefines2D=(function(_super){function ShaderDefines2D(){ShaderDefines2D.__super.call(this,ShaderDefines2D.__name2int,ShaderDefines2D.__int2name,ShaderDefines2D.__int2nameMap);}
__class(ShaderDefines2D,'laya.webgl.shader.d2.ShaderDefines2D',_super);ShaderDefines2D.__init__=function(){ShaderDefines2D.reg("TEXTURE2D",0x01);ShaderDefines2D.reg("PRIMITIVE",0x04);ShaderDefines2D.reg("GLOW_FILTER",0x08);ShaderDefines2D.reg("BLUR_FILTER",0x10);ShaderDefines2D.reg("COLOR_FILTER",0x20);ShaderDefines2D.reg("COLOR_ADD",0x40);ShaderDefines2D.reg("WORLDMAT",0x80);ShaderDefines2D.reg("FILLTEXTURE",0x100);ShaderDefines2D.reg("FSHIGHPRECISION",0x400);ShaderDefines2D.reg('MVP3D',0x800);}
ShaderDefines2D.reg=function(name,value){ShaderDefinesBase._reg(name,value,ShaderDefines2D.__name2int,ShaderDefines2D.__int2name);}
ShaderDefines2D.toText=function(value,int2name,int2nameMap){return ShaderDefinesBase._toText(value,int2name,int2nameMap);}
ShaderDefines2D.toInt=function(names){return ShaderDefinesBase._toInt(names,ShaderDefines2D.__name2int);}
ShaderDefines2D.TEXTURE2D=0x01;ShaderDefines2D.PRIMITIVE=0x04;ShaderDefines2D.FILTERGLOW=0x08;ShaderDefines2D.FILTERBLUR=0x10;ShaderDefines2D.FILTERCOLOR=0x20;ShaderDefines2D.COLORADD=0x40;ShaderDefines2D.WORLDMAT=0x80;ShaderDefines2D.FILLTEXTURE=0x100;ShaderDefines2D.SKINMESH=0x200;ShaderDefines2D.SHADERDEFINE_FSHIGHPRECISION=0x400;ShaderDefines2D.MVP3D=0x800;ShaderDefines2D.NOOPTMASK=0x08|0x10|0x20|0x100;ShaderDefines2D.__name2int={};ShaderDefines2D.__int2name=[];ShaderDefines2D.__int2nameMap=[];return ShaderDefines2D;})(ShaderDefinesBase)
var Texture=(function(_super){function Texture(bitmap,uv,sourceWidth,sourceHeight){this.uvrect=[0,0,1,1];this._destroyed=false;this._referenceCount=0;this.$_GID=0;this.offsetX=0;this.offsetY=0;this._w=0;this._h=0;this.sourceWidth=0;this.sourceHeight=0;this.url=null;this.scaleRate=1;Texture.__super.call(this);(sourceWidth===void 0)&&(sourceWidth=0);(sourceHeight===void 0)&&(sourceHeight=0);this.setTo(bitmap,uv,sourceWidth,sourceHeight);}
__class(Texture,'laya.resource.Texture',_super);var __proto=Texture.prototype;__proto._addReference=function(){this._bitmap&&this._bitmap._addReference();this._referenceCount++;}
__proto._removeReference=function(){this._bitmap&&this._bitmap._removeReference();this._referenceCount--;}
__proto._getSource=function(cb){if(this._destroyed||!this._bitmap)
return null;this.recoverBitmap(cb);return this._bitmap.destroyed?null:this.bitmap._getSource();}
__proto._onLoaded=function(complete,context){if(!context){}else if(context==this){}else if((context instanceof laya.resource.Texture)){var tex=context;Texture._create(context,0,0,tex.width,tex.height,0,0,tex.sourceWidth,tex.sourceHeight,this);}else{this.bitmap=context;this.sourceWidth=this._w=context.width;this.sourceHeight=this._h=context.height;}
complete&&complete.run();this.event("ready",this);}
__proto.getIsReady=function(){return this._destroyed?false:(this._bitmap?true:false);}
__proto.setTo=function(bitmap,uv,sourceWidth,sourceHeight){(sourceWidth===void 0)&&(sourceWidth=0);(sourceHeight===void 0)&&(sourceHeight=0);this.bitmap=bitmap;this.sourceWidth=sourceWidth;this.sourceHeight=sourceHeight;if(bitmap){this._w=bitmap.width;this._h=bitmap.height;this.sourceWidth=this.sourceWidth||bitmap.width;this.sourceHeight=this.sourceHeight||bitmap.height}
this.uv=uv||Texture.DEF_UV;}
__proto.load=function(url,complete){if(!this._destroyed)
Laya.loader.load(url,Handler.create(this,this._onLoaded,[complete]),null,"htmlimage",1,false,null,true);}
__proto.getTexturePixels=function(x,y,width,height){var st=0,dst=0,i=0;var tex2d=this.bitmap;var texw=tex2d.width;var texh=tex2d.height;if(x+width>texw)width-=(x+width)-texw;if(y+height>texh)height-=(y+height)-texh;if(width<=0||height<=0)return null;var wstride=width*4;var pix=null;try{pix=tex2d.getPixels();}catch(e){}
if(pix){if(x==0&&y==0&&width==texw&&height==texh)
return pix;var ret=new Uint8Array(width*height*4);wstride=texw*4;st=x*4;dst=(y+height-1)*wstride+x*4;for(i=height-1;i>=0;i--){ret.set(dt.slice(dst,dst+width*4),st);st+=wstride;dst-=wstride;}
return ret;};var ctx=new Context();ctx.size(width,height);ctx.asBitmap=true;var uv=null;if(x!=0||y!=0||width!=texw||height!=texh){uv=uv.concat();var stu=uv[0];var stv=uv[1];var uvw=uv[2]-stu;var uvh=uv[7]-stv;var uk=uvw/texw;var vk=uvh/texh;uv=[stu+x*uk,stv+y*vk,stu+(x+width)*uk,stv+y*vk,stu+(x+width)*uk,stv+(y+height)*vk,stu+x*uk,stv+(y+height)*vk,];}
ctx._drawTextureM(this,0,0,width,height,null,1.0,uv);ctx._targets.start();ctx.flush();ctx._targets.end();ctx._targets.restore();var dt=ctx._targets.getData(0,0,width,height);ctx.destroy();ret=new Uint8Array(width*height*4);st=0;dst=(height-1)*wstride;for(i=height-1;i>=0;i--){ret.set(dt.slice(dst,dst+wstride),st);st+=wstride;dst-=wstride;}
return ret;}
__proto.getPixels=function(x,y,width,height){if(Render.isConchApp){return this._nativeObj.getImageData(x,y,width,height);}else{return this.getTexturePixels(x,y,width,height);}}
__proto.recoverBitmap=function(onok){var _$this=this;var url=this._bitmap.url;if(!this._destroyed&&(!this._bitmap||this._bitmap.destroyed)&&url){Laya.loader.load(url,Handler.create(this,function(bit){_$this.bitmap=bit;onok&&onok();}),null,"htmlimage",1,false,null,true);}}
__proto.disposeBitmap=function(){if(!this._destroyed&&this._bitmap){this._bitmap.destroy();}}
__proto.destroy=function(force){(force===void 0)&&(force=false);if(!this._destroyed){this._destroyed=true;var bit=this._bitmap;if(bit){bit._removeReference(this._referenceCount);if(bit.referenceCount===0||force)
bit.destroy();bit=null;}
if(this.url&&this===Laya.loader.getRes(this.url))
Laya.loader.clearRes(this.url);}}
__getset(0,__proto,'height',function(){if(this._h)
return this._h;if(!this.bitmap)return 0;return(this.uv&&this.uv!==Texture.DEF_UV)?(this.uv[5]-this.uv[1])*this.bitmap.height:this.bitmap.height;},function(value){this._h=value;this.sourceHeight||(this.sourceHeight=value);});__getset(0,__proto,'uv',function(){return this._uv;},function(value){this.uvrect[0]=Math.min(value[0],value[2],value[4],value[6]);this.uvrect[1]=Math.min(value[1],value[3],value[5],value[7]);this.uvrect[2]=Math.max(value[0],value[2],value[4],value[6])-this.uvrect[0];this.uvrect[3]=Math.max(value[1],value[3],value[5],value[7])-this.uvrect[1];this._uv=value;});__getset(0,__proto,'width',function(){if(this._w)
return this._w;if(!this.bitmap)return 0;return(this.uv&&this.uv!==Texture.DEF_UV)?(this.uv[2]-this.uv[0])*this.bitmap.width:this.bitmap.width;},function(value){this._w=value;this.sourceWidth||(this.sourceWidth=value);});__getset(0,__proto,'bitmap',function(){return this._bitmap;},function(value){this._bitmap&&this._bitmap._removeReference(this._referenceCount);this._bitmap=value;value&&(value._addReference(this._referenceCount));});__getset(0,__proto,'destroyed',function(){return this._destroyed;});Texture.moveUV=function(offsetX,offsetY,uv){for(var i=0;i<8;i+=2){uv[i]+=offsetX;uv[i+1]+=offsetY;}
return uv;}
Texture.create=function(source,x,y,width,height,offsetX,offsetY,sourceWidth,sourceHeight){(offsetX===void 0)&&(offsetX=0);(offsetY===void 0)&&(offsetY=0);(sourceWidth===void 0)&&(sourceWidth=0);(sourceHeight===void 0)&&(sourceHeight=0);return Texture._create(source,x,y,width,height,offsetX,offsetY,sourceWidth,sourceHeight);}
Texture._create=function(source,x,y,width,height,offsetX,offsetY,sourceWidth,sourceHeight,outTexture){(offsetX===void 0)&&(offsetX=0);(offsetY===void 0)&&(offsetY=0);(sourceWidth===void 0)&&(sourceWidth=0);(sourceHeight===void 0)&&(sourceHeight=0);var btex=(source instanceof laya.resource.Texture);var uv=btex?(source).uv:Texture.DEF_UV;var bitmap=btex?(source).bitmap:source;if(bitmap.width&&(x+width)>bitmap.width)
width=bitmap.width-x;if(bitmap.height&&(y+height)>bitmap.height)
height=bitmap.height-y;var tex;if(outTexture){tex=outTexture;tex.setTo(bitmap,null,sourceWidth||width,sourceHeight||height);}else{tex=new Texture(bitmap,null,sourceWidth||width,sourceHeight||height)}
tex.width=width;tex.height=height;tex.offsetX=offsetX;tex.offsetY=offsetY;var dwidth=1/bitmap.width;var dheight=1/bitmap.height;x*=dwidth;y*=dheight;width*=dwidth;height*=dheight;var u1=tex.uv[0],v1=tex.uv[1],u2=tex.uv[4],v2=tex.uv[5];var inAltasUVWidth=(u2-u1),inAltasUVHeight=(v2-v1);var oriUV=Texture.moveUV(uv[0],uv[1],[x,y,x+width,y,x+width,y+height,x,y+height]);tex.uv=new Float32Array([u1+oriUV[0]*inAltasUVWidth,v1+oriUV[1]*inAltasUVHeight,u2-(1-oriUV[2])*inAltasUVWidth,v1+oriUV[3]*inAltasUVHeight,u2-(1-oriUV[4])*inAltasUVWidth,v2-(1-oriUV[5])*inAltasUVHeight,u1+oriUV[6]*inAltasUVWidth,v2-(1-oriUV[7])*inAltasUVHeight]);var bitmapScale=(bitmap).scaleRate;if(bitmapScale&&bitmapScale!=1){tex.sourceWidth/=bitmapScale;tex.sourceHeight/=bitmapScale;tex.width/=bitmapScale;tex.height/=bitmapScale;tex.scaleRate=bitmapScale;}else{tex.scaleRate=1;}
return tex;}
Texture.createFromTexture=function(texture,x,y,width,height){var texScaleRate=texture.scaleRate;if(texScaleRate!=1){x*=texScaleRate;y*=texScaleRate;width*=texScaleRate;height*=texScaleRate;};var rect=Rectangle.TEMP.setTo(x-texture.offsetX,y-texture.offsetY,width,height);var result=rect.intersection(Texture._rect1.setTo(0,0,texture.width,texture.height),Texture._rect2);if(result)
var tex=Texture.create((texture),result.x,result.y,result.width,result.height,result.x-rect.x,result.y-rect.y,width,height);else
return null;return tex;}
Texture.DEF_UV=new Float32Array([0,0,1.0,0,1.0,1.0,0,1.0]);Texture.NO_UV=new Float32Array([0,0,0,0,0,0,0,0]);Texture.INV_UV=new Float32Array([0,1,1.0,1,1.0,0.0,0,0.0]);Texture._rect1=new Rectangle();Texture._rect2=new Rectangle();return Texture;})(EventDispatcher)
var HttpRequest=(function(_super){function HttpRequest(){this._responseType=null;this._data=null;this._url=null;HttpRequest.__super.call(this);this._http=new Browser.window.XMLHttpRequest();}
__class(HttpRequest,'laya.net.HttpRequest',_super);var __proto=HttpRequest.prototype;__proto.send=function(url,data,method,responseType,headers){(method===void 0)&&(method="get");(responseType===void 0)&&(responseType="text");this._responseType=responseType;this._data=null;if(Browser.onQGMiniGame||Browser.onVVMiniGame||Browser.onQQMiniGame){url=encodeURI(url);}
this._url=url;var _this=this;var http=this._http;url=URL.getAdptedFilePath(url);http.open(method,url,true);if(headers){for(var i=0;i<headers.length;i++){http.setRequestHeader(headers[i++],headers[i]);}}else if(!Render.isConchApp){if(!data||(typeof data=='string'))http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");else http.setRequestHeader("Content-Type","application/json");}
http.responseType=responseType!=="arraybuffer"?"text":"arraybuffer";http.onerror=function(e){_this._onError(e);}
http.onabort=function(e){_this._onAbort(e);}
http.onprogress=function(e){_this._onProgress(e);}
http.onload=function(e){_this._onLoad(e);}
http.send(data);}
__proto._onProgress=function(e){if(e&&e.lengthComputable)this.event("progress",e.loaded/e.total);}
__proto._onAbort=function(e){this.error("Request was aborted by user");}
__proto._onError=function(e){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText);}
__proto._onLoad=function(e){var http=this._http;var status=http.status!==undefined?http.status:200;if(status===200||status===204||status===0){this.complete();}else{this.error("["+http.status+"]"+http.statusText+":"+http.responseURL);}}
__proto.error=function(message){this.clear();console.warn(this.url,message);this.event("error",message);}
__proto.complete=function(){this.clear();var flag=true;try{if(this._responseType==="json"){this._data=JSON.parse(this._http.responseText);}else if(this._responseType==="xml"){this._data=Utils.parseXMLFromString(this._http.responseText);}else{this._data=this._http.response||this._http.responseText;}}catch(e){flag=false;this.error(e.message);}
flag&&this.event("complete",(this._data instanceof Array)?[this._data]:this._data);}
__proto.clear=function(){var http=this._http;http.onerror=http.onabort=http.onprogress=http.onload=null;}
__getset(0,__proto,'url',function(){return this._url;});__getset(0,__proto,'http',function(){return this._http;});__getset(0,__proto,'data',function(){return this._data;});return HttpRequest;})(EventDispatcher)
var Loader=(function(_super){function Loader(){this._data=null;this._url=null;this._type=null;this._cache=false;this._http=null;this._useWorkerLoader=false;this._customParse=false;this._constructParams=null;this._propertyParams=null;this._createCache=false;Loader.__super.call(this);}
__class(Loader,'laya.net.Loader',_super);var __proto=Loader.prototype;__proto.load=function(url,type,cache,group,ignoreCache,useWorkerLoader){(cache===void 0)&&(cache=true);(ignoreCache===void 0)&&(ignoreCache=false);(useWorkerLoader===void 0)&&(useWorkerLoader=false);if(!url){this.onLoaded(null);return;}
Loader.setGroup(url,"666");this._url=url;if(url.indexOf("data:image")===0)type="image";else url=URL.formatURL(url);this._type=type||(type=Loader.getTypeFromUrl(this._url));this._cache=cache;this._useWorkerLoader=useWorkerLoader;this._data=null;if(useWorkerLoader)WorkerLoader.enableWorkerLoader();if(!ignoreCache&&Loader.loadedMap[url]){this._data=Loader.loadedMap[url];this.event("progress",1);this.event("complete",this._data);return;}
if(group)Loader.setGroup(url,group);if(Loader.parserMap[type]!=null){this._customParse=true;if(((Loader.parserMap[type])instanceof laya.utils.Handler))Loader.parserMap[type].runWith(this);else Loader.parserMap[type].call(null,this);return;}
if(type==="image"||type==="htmlimage"||type==="nativeimage")return this._loadImage(url);if(type==="sound")return this._loadSound(url);if(type==="ttf")return this._loadTTF(url);var contentType;switch(type){case"atlas":case"prefab":case"plf":contentType="json";break;case"font":contentType="xml";break;case"plfb":contentType="arraybuffer";break;default:contentType=type;}
if(Loader.preLoadedMap[url]){this.onLoaded(Loader.preLoadedMap[url]);}else{if(Browser.onVVMiniGame){this._http=new HttpRequest();this._http.on("progress",this,this.onProgress);this._http.on("error",this,this.onError);this._http.on("complete",this,this.onLoaded);}else{if(!this._http){this._http=new HttpRequest();this._http.on("progress",this,this.onProgress);this._http.on("error",this,this.onError);this._http.on("complete",this,this.onLoaded);}}
this._http.send(url,null,"get",contentType);}}
__proto._loadTTF=function(url){url=URL.formatURL(url);var ttfLoader=new TTFLoader();ttfLoader.complete=Handler.create(this,this.onLoaded);ttfLoader.load(url);}
__proto._loadImage=function(url){url=URL.formatURL(url);var _this=this;var image;function clear(){var img=image;if(img){img.onload=null;img.onerror=null;delete Loader._imgCache[url];}};var onerror=function(){clear();_this.event("error","Load image failed");}
if(this._type==="nativeimage"){var onload=function(){clear();_this.onLoaded(image);};image=new Browser.window.Image();image.crossOrigin="";image.onload=onload;image.onerror=onerror;image.src=url;Loader._imgCache[url]=image;}else{var ext=Utils.getFileExtension(url);if(ext==="ktx"||ext==="pvr"){onload=function(imageData){var format=0;switch(ext){case"ktx":format=5;break;case"pvr":format=12;break;}
image=new Texture2D(0,0,format,false,false);image.wrapModeU=1;image.wrapModeV=1;image.setCompressData(imageData);image._setCreateURL(url);clear();_this.onLoaded(image);};var tempHttp;tempHttp=new HttpRequest();tempHttp.on("error",null,onerror);tempHttp.on("complete",null,onload);tempHttp.send(url,null,"get","arraybuffer");}else{var imageSource=new Browser.window.Image();onload=function(){var tex=new Texture2D(imageSource.width,imageSource.height,1,false,false);tex.wrapModeU=1;tex.wrapModeV=1;tex.loadImageSource(imageSource,true);tex._setCreateURL(url);clear();_this.onLoaded(tex);};imageSource.crossOrigin="";imageSource.onload=onload;imageSource.onerror=onerror;imageSource.src=url;Loader._imgCache[url]=imageSource;}}}
__proto._loadSound=function(url){var sound=(new SoundManager._soundClass());var _this=this;sound.on("complete",this,soundOnload);sound.on("error",this,soundOnErr);sound.load(url);function soundOnload(){clear();_this.onLoaded(sound);}
function soundOnErr(){clear();sound.dispose();_this.event("error","Load sound failed");}
function clear(){sound.offAll();}}
__proto.onProgress=function(value){if(this._type==="atlas")this.event("progress",value*0.3);else this.event("progress",value);}
__proto.onError=function(message){this.event("error",message);}
__proto.onLoaded=function(data){var type=this._type;if(type=="plfb"){this.parsePLFBData(data);this.complete(data);}else
if(type=="plf"){this.parsePLFData(data);this.complete(data);}else if(type==="image"){var tex=new Texture(data);tex.url=this._url;this.complete(tex);}else if(type==="sound"||type==="htmlimage"||type==="nativeimage"){this.complete(data);}else if(type==="atlas"){if(!data.url&&!data._setContext){if(!this._data){this._data=data;if(data.meta&&data.meta.image){var toloadPics=data.meta.image.split(",");var split=this._url.indexOf("/")>=0?"/":"\\";var idx=this._url.lastIndexOf(split);var folderPath=idx>=0?this._url.substr(0,idx+1):"";var changeType;if(Browser.onAndroid&&data.meta.compressTextureAndroid){changeType=".ktx";}
if(Browser.onIOS&&data.meta.compressTextureIOS){changeType=".pvr";}
for(var i=0,len=toloadPics.length;i<len;i++){if(changeType){toloadPics[i]=folderPath+toloadPics[i].replace(".png",changeType);}else{toloadPics[i]=folderPath+toloadPics[i];}}}else{toloadPics=[this._url.replace(".json",".png")];}
toloadPics.reverse();data.toLoads=toloadPics;data.pics=[];}
this.event("progress",0.3+1/toloadPics.length*0.6);return this._loadImage(toloadPics.pop());}else{this._data.pics.push(data);if(this._data.toLoads.length>0){this.event("progress",0.3+1/this._data.toLoads.length*0.6);return this._loadImage(this._data.toLoads.pop());};var frames=this._data.frames;var cleanUrl=this._url.split("?")[0];var directory=(this._data.meta&&this._data.meta.prefix)?this._data.meta.prefix:cleanUrl.substring(0,cleanUrl.lastIndexOf("."))+"/";var pics=this._data.pics;var atlasURL=URL.formatURL(this._url);var map=Loader.atlasMap[atlasURL]||(Loader.atlasMap[atlasURL]=[]);map.dir=directory;var scaleRate=1;if(this._data.meta&&this._data.meta.scale&&this._data.meta.scale!=1){scaleRate=parseFloat(this._data.meta.scale);for(var name in frames){var obj=frames[name];var tPic=pics[obj.frame.idx?obj.frame.idx:0];var url=URL.formatURL(directory+name);(tPic).scaleRate=scaleRate;var tTexture;tTexture=Texture._create(tPic,obj.frame.x,obj.frame.y,obj.frame.w,obj.frame.h,obj.spriteSourceSize.x,obj.spriteSourceSize.y,obj.sourceSize.w,obj.sourceSize.h,laya.net.Loader.getRes(url));Loader.cacheRes(url,tTexture);tTexture.url=url;map.push(url);}}else{for(name in frames){obj=frames[name];tPic=pics[obj.frame.idx?obj.frame.idx:0];url=URL.formatURL(directory+name);tTexture=Texture._create(tPic,obj.frame.x,obj.frame.y,obj.frame.w,obj.frame.h,obj.spriteSourceSize.x,obj.spriteSourceSize.y,obj.sourceSize.w,obj.sourceSize.h,laya.net.Loader.getRes(url));Loader.cacheRes(url,tTexture);tTexture.url=url;map.push(url);}}
delete this._data.pics;this.complete(this._data);}}else if(type==="font"){if(!data._source){this._data=data;this.event("progress",0.5);return this._loadImage(this._url.replace(".fnt",".png"));}else{var bFont=new BitmapFont();bFont.parseFont(this._data,new Texture(data));var tArr=this._url.split(".fnt")[0].split("/");var fontName=tArr[tArr.length-1];Text.registerBitmapFont(fontName,bFont);this._data=bFont;this.complete(this._data);}}else if(type==="prefab"){var prefab=new Prefab();prefab.json=data;this.complete(prefab);}else{this.complete(data);}}
__proto.parsePLFData=function(plfData){var type;var filePath;var fileDic;for(type in plfData){fileDic=plfData[type];switch(type){case"json":case"text":for(filePath in fileDic){Loader.preLoadedMap[URL.formatURL(filePath)]=fileDic[filePath]}
break;default:for(filePath in fileDic){Loader.preLoadedMap[URL.formatURL(filePath)]=fileDic[filePath]}}}}
__proto.parsePLFBData=function(plfData){var byte;byte=new Byte(plfData);var i=0,len=0;len=byte.getInt32();for(i=0;i<len;i++){this.parseOnePLFBFile(byte);}}
__proto.parseOnePLFBFile=function(byte){var fileLen=0;var fileName;var fileData;fileName=byte.getUTFString();fileLen=byte.getInt32();fileData=byte.readArrayBuffer(fileLen);Loader.preLoadedMap[URL.formatURL(fileName)]=fileData;}
__proto.complete=function(data){this._data=data;if(this._customParse){this.event("loaded",(data instanceof Array)?[data]:data);}else{Loader._loaders.push(this);if(!Loader._isWorking)Loader.checkNext();}}
__proto.endLoad=function(content){content&&(this._data=content);if(this._cache)Loader.cacheRes(this._url,this._data);this.event("progress",1);this.event("complete",(this.data instanceof Array)?[this.data]:this.data);}
__getset(0,__proto,'url',function(){return this._url;});__getset(0,__proto,'data',function(){return this._data;});__getset(0,__proto,'cache',function(){return this._cache;});__getset(0,__proto,'type',function(){return this._type;});Loader.getTypeFromUrl=function(url){var type=Utils.getFileExtension(url);if(type)return Loader.typeMap[type];console.warn("Not recognize the resources suffix",url);return"text";}
Loader.checkNext=function(){Loader._isWorking=true;var startTimer=Browser.now();var thisTimer=startTimer;while(Loader._startIndex<Loader._loaders.length){thisTimer=Browser.now();Loader._loaders[Loader._startIndex].endLoad();Loader._startIndex++;if(Browser.now()-startTimer>Loader.maxTimeOut){console.warn("loader callback cost a long time:"+(Browser.now()-startTimer)+" url="+Loader._loaders[Loader._startIndex-1].url);Laya.systemTimer.frameOnce(1,null,Loader.checkNext);return;}}
Loader._loaders.length=0;Loader._startIndex=0;Loader._isWorking=false;}
Loader.clearRes=function(url){url=URL.formatURL(url);var arr=Loader.getAtlas(url);if(arr){for(var i=0,n=arr.length;i<n;i++){var resUrl=arr[i];var tex=Loader.getRes(resUrl);delete Loader.loadedMap[resUrl];if(tex)tex.destroy();}
arr.length=0;delete Loader.atlasMap[url];delete Loader.loadedMap[url];}else{var res=Loader.loadedMap[url];if(res){delete Loader.loadedMap[url];if((res instanceof laya.resource.Texture)&&res.bitmap)(res).destroy();}}}
Loader.clearTextureRes=function(url){url=URL.formatURL(url);var arr=laya.net.Loader.getAtlas(url);var res=(arr&&arr.length>0)?laya.net.Loader.getRes(arr[0]):laya.net.Loader.getRes(url);if((res instanceof laya.resource.Texture))
res.disposeBitmap();}
Loader.getRes=function(url){return Loader.loadedMap[URL.formatURL(url)];}
Loader.getAtlas=function(url){return Loader.atlasMap[URL.formatURL(url)];}
Loader.cacheRes=function(url,data){url=URL.formatURL(url);if(Loader.loadedMap[url]!=null){console.warn("Resources already exist,is repeated loading:",url);}else{Loader.loadedMap[url]=data;}}
Loader.setGroup=function(url,group){if(!Loader.groupMap[group])Loader.groupMap[group]=[];Loader.groupMap[group].push(url);}
Loader.clearResByGroup=function(group){if(!Loader.groupMap[group])return;var arr=Loader.groupMap[group],i=0,len=arr.length;for(i=0;i<len;i++){Loader.clearRes(arr[i]);}
arr.length=0;}
Loader.TEXT="text";Loader.JSON="json";Loader.PREFAB="prefab";Loader.XML="xml";Loader.BUFFER="arraybuffer";Loader.IMAGE="image";Loader.SOUND="sound";Loader.ATLAS="atlas";Loader.FONT="font";Loader.TTF="ttf";Loader.PLF="plf";Loader.PLFB="plfb";Loader.HIERARCHY="HIERARCHY";Loader.MESH="MESH";Loader.MATERIAL="MATERIAL";Loader.TEXTURE2D="TEXTURE2D";Loader.TEXTURECUBE="TEXTURECUBE";Loader.ANIMATIONCLIP="ANIMATIONCLIP";Loader.AVATAR="AVATAR";Loader.TERRAINHEIGHTDATA="TERRAINHEIGHTDATA";Loader.TERRAINRES="TERRAIN";Loader.typeMap={"ttf":"ttf","png":"image","jpg":"image","jpeg":"image","ktx":"image","pvr":"image","txt":"text","json":"json","prefab":"prefab","xml":"xml","als":"atlas","atlas":"atlas","mp3":"sound","ogg":"sound","wav":"sound","part":"json","fnt":"font","plf":"plf","plfb":"plfb","scene":"json","ani":"json","sk":"arraybuffer"};Loader.parserMap={};Loader.maxTimeOut=100;Loader.groupMap={};Loader.loadedMap={};Loader.atlasMap={};Loader.preLoadedMap={};Loader._imgCache={};Loader._loaders=[];Loader._isWorking=false;Loader._startIndex=0;return Loader;})(EventDispatcher)
var BlurFilter=(function(_super){function BlurFilter(strength){this.strength=NaN;this.strength_sig2_2sig2_gauss1=[];this.strength_sig2_native=null;this.renderFunc=null;BlurFilter.__super.call(this);(strength===void 0)&&(strength=4);this.strength=strength;this._glRender=new BlurFilterGLRender();}
__class(BlurFilter,'laya.filters.BlurFilter',_super);var __proto=BlurFilter.prototype;__proto.getStrenth_sig2_2sig2_native=function(){if(!this.strength_sig2_native){this.strength_sig2_native=new Float32Array(4);};var sigma=this.strength/3.0;var sigma2=sigma*sigma;this.strength_sig2_native[0]=this.strength;this.strength_sig2_native[1]=sigma2;this.strength_sig2_native[2]=2.0*sigma2;this.strength_sig2_native[3]=1.0/(2.0*Math.PI*sigma2);return this.strength_sig2_native;}
__getset(0,__proto,'type',function(){return 0x10;});return BlurFilter;})(Filter)
var Buffer2D=(function(_super){function Buffer2D(){this._maxsize=0;this._upload=true;this._uploadSize=0;this._bufferSize=0;this._u8Array=null;Buffer2D.__super.call(this);}
__class(Buffer2D,'laya.webgl.utils.Buffer2D',_super);var __proto=Buffer2D.prototype;__proto.setByteLength=function(value){if(this._byteLength!==value){value<=this._bufferSize||(this._resizeBuffer(value*2+256,true));this._byteLength=value;}}
__proto.needSize=function(sz){var old=this._byteLength;if(sz){var needsz=this._byteLength+sz;needsz<=this._bufferSize||(this._resizeBuffer(needsz<<1,true));this._byteLength=needsz;}
return old;}
__proto._bufferData=function(){this._maxsize=Math.max(this._maxsize,this._byteLength);if(Stat.loopCount%30==0){if(this._buffer.byteLength>(this._maxsize+64)){this._buffer=this._buffer.slice(0,this._maxsize+64);this._bufferSize=this._buffer.byteLength;this._checkArrayUse();}
this._maxsize=this._byteLength;}
if(this._uploadSize<this._buffer.byteLength){this._uploadSize=this._buffer.byteLength;LayaGL.instance.bufferData(this._bufferType,this._uploadSize,this._bufferUsage);}
LayaGL.instance.bufferSubData(this._bufferType,0,new Uint8Array(this._buffer,0,this._byteLength));}
__proto._bufferSubData=function(offset,dataStart,dataLength){(offset===void 0)&&(offset=0);(dataStart===void 0)&&(dataStart=0);(dataLength===void 0)&&(dataLength=0);this._maxsize=Math.max(this._maxsize,this._byteLength);if(Stat.loopCount%30==0){if(this._buffer.byteLength>(this._maxsize+64)){this._buffer=this._buffer.slice(0,this._maxsize+64);this._bufferSize=this._buffer.byteLength;this._checkArrayUse();}
this._maxsize=this._byteLength;}
if(this._uploadSize<this._buffer.byteLength){this._uploadSize=this._buffer.byteLength;LayaGL.instance.bufferData(this._bufferType,this._uploadSize,this._bufferUsage);}
if(dataStart||dataLength){var subBuffer=this._buffer.slice(dataStart,dataLength);LayaGL.instance.bufferSubData(this._bufferType,offset,subBuffer);}else{LayaGL.instance.bufferSubData(this._bufferType,offset,this._buffer);}}
__proto._checkArrayUse=function(){}
__proto._bind_uploadForVAO=function(){if(!this._upload)
return false;this._upload=false;this._bindForVAO();this._bufferData();return true;}
__proto._bind_upload=function(){if(!this._upload)
return false;this._upload=false;this.bind();this._bufferData();return true;}
__proto._bind_subUpload=function(offset,dataStart,dataLength){(offset===void 0)&&(offset=0);(dataStart===void 0)&&(dataStart=0);(dataLength===void 0)&&(dataLength=0);if(!this._upload)
return false;this._upload=false;this.bind();this._bufferSubData(offset,dataStart,dataLength);return true;}
__proto._resizeBuffer=function(nsz,copy){var buff=this._buffer;if(nsz<=buff.byteLength)
return this;var u8buf=this._u8Array;if(copy&&buff&&buff.byteLength>0){var newbuffer=new ArrayBuffer(nsz);var oldU8Arr=(u8buf&&u8buf.buffer==buff)?u8buf:new Uint8Array(buff);u8buf=this._u8Array=new Uint8Array(newbuffer);u8buf.set(oldU8Arr,0);buff=this._buffer=newbuffer;}else{buff=this._buffer=new ArrayBuffer(nsz);this._u8Array=null;}
this._checkArrayUse();this._upload=true;this._bufferSize=buff.byteLength;return this;}
__proto.append=function(data){this._upload=true;var byteLen=0,n;byteLen=data.byteLength;if((data instanceof Uint8Array)){this._resizeBuffer(this._byteLength+byteLen,true);n=new Uint8Array(this._buffer,this._byteLength);}else if((data instanceof Uint16Array)){this._resizeBuffer(this._byteLength+byteLen,true);n=new Uint16Array(this._buffer,this._byteLength);}else if((data instanceof Float32Array)){this._resizeBuffer(this._byteLength+byteLen,true);n=new Float32Array(this._buffer,this._byteLength);}
n.set(data,0);this._byteLength+=byteLen;this._checkArrayUse();}
__proto.appendU16Array=function(data,len){this._resizeBuffer(this._byteLength+len*2,true);var u=new Uint16Array(this._buffer,this._byteLength,len);if(len==6){u[0]=data[0];u[1]=data[1];u[2]=data[2];u[3]=data[3];u[4]=data[4];u[5]=data[5];}else if(len>=100){u.set(new Uint16Array(data.buffer,0,len));}else{for(var i=0;i<len;i++){u[i]=data[i];}}
this._byteLength+=len*2;this._checkArrayUse();}
__proto.appendEx=function(data,type){this._upload=true;var byteLen=0,n;byteLen=data.byteLength;this._resizeBuffer(this._byteLength+byteLen,true);n=new type(this._buffer,this._byteLength);n.set(data,0);this._byteLength+=byteLen;this._checkArrayUse();}
__proto.appendEx2=function(data,type,dataLen,perDataLen){(perDataLen===void 0)&&(perDataLen=1);this._upload=true;var byteLen=0,n;byteLen=dataLen*perDataLen;this._resizeBuffer(this._byteLength+byteLen,true);n=new type(this._buffer,this._byteLength);var i=0;for(i=0;i<dataLen;i++){n[i]=data[i];}
this._byteLength+=byteLen;this._checkArrayUse();}
__proto.getBuffer=function(){return this._buffer;}
__proto.setNeedUpload=function(){this._upload=true;}
__proto.getNeedUpload=function(){return this._upload;}
__proto.upload=function(){var scuess=this._bind_upload();LayaGL.instance.bindBuffer(this._bufferType,null);if(this._bufferType==0x8892)Buffer._bindedVertexBuffer=null;if(this._bufferType==0x8893)Buffer._bindedIndexBuffer=null;BaseShader.activeShader=null
return scuess;}
__proto.subUpload=function(offset,dataStart,dataLength){(offset===void 0)&&(offset=0);(dataStart===void 0)&&(dataStart=0);(dataLength===void 0)&&(dataLength=0);var scuess=this._bind_subUpload();LayaGL.instance.bindBuffer(this._bufferType,null);if(this._bufferType==0x8892)Buffer._bindedVertexBuffer=null;if(this._bufferType==0x8893)Buffer._bindedIndexBuffer=null;BaseShader.activeShader=null
return scuess;}
__proto._disposeResource=function(){this._upload=true;this._uploadSize=0;}
__proto.clear=function(){this._byteLength=0;this._upload=true;}
__getset(0,__proto,'bufferLength',function(){return this._buffer.byteLength;});__getset(0,__proto,'byteLength',null,function(value){this.setByteLength(value);});Buffer2D.__int__=function(gl){}
Buffer2D.FLOAT32=4;Buffer2D.SHORT=2;return Buffer2D;})(Buffer)
var GlowFilter=(function(_super){function GlowFilter(color,blur,offX,offY){this._sv_blurInfo2=[0,0,1,0];this._color=null;this._color_native=null;this._blurInof1_native=null;this._blurInof2_native=null;GlowFilter.__super.call(this);this._elements=new Float32Array(9);this._sv_blurInfo1=new Array(4);(blur===void 0)&&(blur=4);(offX===void 0)&&(offX=6);(offY===void 0)&&(offY=6);this._color=new ColorUtils(color);this.blur=Math.min(blur,20);this.offX=offX;this.offY=offY;this._sv_blurInfo1[0]=this._sv_blurInfo1[1]=this.blur;this._sv_blurInfo1[2]=offX;this._sv_blurInfo1[3]=-offY;this._glRender=new GlowFilterGLRender();}
__class(GlowFilter,'laya.filters.GlowFilter',_super);var __proto=GlowFilter.prototype;__proto.getColor=function(){return this._color.arrColor;}
__proto.getColorNative=function(){if(!this._color_native){this._color_native=new Float32Array(4);};var color=this.getColor();this._color_native[0]=color[0];this._color_native[1]=color[1];this._color_native[2]=color[2];this._color_native[3]=color[3];return this._color_native;}
__proto.getBlurInfo1Native=function(){if(!this._blurInof1_native){this._blurInof1_native=new Float32Array(4);}
this._blurInof1_native[0]=this._blurInof1_native[1]=this.blur;this._blurInof1_native[2]=this.offX;this._blurInof1_native[3]=this.offY;return this._blurInof1_native;}
__proto.getBlurInfo2Native=function(){if(!this._blurInof2_native){this._blurInof2_native=new Float32Array(4);}
this._blurInof2_native[2]=1;return this._blurInof2_native;}
__getset(0,__proto,'type',function(){return 0x08;});__getset(0,__proto,'offY',function(){return this._elements[6];},function(value){this._elements[6]=value;this._sv_blurInfo1[3]=-value;});__getset(0,__proto,'offX',function(){return this._elements[5];},function(value){this._elements[5]=value;this._sv_blurInfo1[2]=value;});__getset(0,__proto,'blur',function(){return this._elements[4];},function(value){this._elements[4]=value;this._sv_blurInfo1[0]=this._sv_blurInfo1[1]=value;});return GlowFilter;})(Filter)
var WebAudioSound=(function(_super){function WebAudioSound(){this.url=null;this.loaded=false;this.data=null;this.audioBuffer=null;this.__toPlays=null;this._disposed=false;WebAudioSound.__super.call(this);}
__class(WebAudioSound,'laya.media.webaudio.WebAudioSound',_super);var __proto=WebAudioSound.prototype;__proto.load=function(url){var me=this;url=URL.formatURL(url);this.url=url;this.audioBuffer=WebAudioSound._dataCache[url];if(this.audioBuffer){this._loaded(this.audioBuffer);return;}
WebAudioSound.e.on("loaded:"+url,this,this._loaded);WebAudioSound.e.on("err:"+url,this,this._err);if(WebAudioSound.__loadingSound[url]){return;}
WebAudioSound.__loadingSound[url]=true;var request=new Browser.window.XMLHttpRequest();request.open("GET",url,true);request.responseType="arraybuffer";request.onload=function(){if(me._disposed){me._removeLoadEvents();return;}
me.data=request.response;WebAudioSound.buffs.push({"buffer":me.data,"url":me.url});WebAudioSound.decode();};request.onerror=function(e){me._err();}
request.send();}
__proto._err=function(){this._removeLoadEvents();WebAudioSound.__loadingSound[this.url]=false;this.event("error");}
__proto._loaded=function(audioBuffer){this._removeLoadEvents();if(this._disposed){return;}
this.audioBuffer=audioBuffer;WebAudioSound._dataCache[this.url]=this.audioBuffer;this.loaded=true;this.event("complete");}
__proto._removeLoadEvents=function(){WebAudioSound.e.off("loaded:"+this.url,this,this._loaded);WebAudioSound.e.off("err:"+this.url,this,this._err);}
__proto.__playAfterLoaded=function(){if(!this.__toPlays)return;var i=0,len=0;var toPlays;toPlays=this.__toPlays;len=toPlays.length;var tParams;for(i=0;i<len;i++){tParams=toPlays[i];if(tParams[2]&&!(tParams[2]).isStopped){this.play(tParams[0],tParams[1],tParams[2]);}}
this.__toPlays.length=0;}
__proto.play=function(startTime,loops,channel){(startTime===void 0)&&(startTime=0);(loops===void 0)&&(loops=0);channel=channel?channel:new WebAudioSoundChannel();if(!this.audioBuffer){if(this.url){if(!this.__toPlays)this.__toPlays=[];this.__toPlays.push([startTime,loops,channel]);this.once("complete",this,this.__playAfterLoaded);this.load(this.url);}}
channel.url=this.url;channel.loops=loops;channel["audioBuffer"]=this.audioBuffer;channel.startTime=startTime;channel.play();SoundManager.addChannel(channel);return channel;}
__proto.dispose=function(){this._disposed=true;delete WebAudioSound._dataCache[this.url];delete WebAudioSound.__loadingSound[this.url];this.audioBuffer=null;this.data=null;this.__toPlays=[];}
__getset(0,__proto,'duration',function(){if(this.audioBuffer){return this.audioBuffer.duration;}
return 0;});WebAudioSound.decode=function(){if(WebAudioSound.buffs.length<=0||WebAudioSound.isDecoding){return;}
WebAudioSound.isDecoding=true;WebAudioSound.tInfo=WebAudioSound.buffs.shift();WebAudioSound.ctx.decodeAudioData(WebAudioSound.tInfo["buffer"],WebAudioSound._done,WebAudioSound._fail);}
WebAudioSound._done=function(audioBuffer){WebAudioSound.e.event("loaded:"+WebAudioSound.tInfo.url,audioBuffer);WebAudioSound.isDecoding=false;WebAudioSound.decode();}
WebAudioSound._fail=function(){WebAudioSound.e.event("err:"+WebAudioSound.tInfo.url,null);WebAudioSound.isDecoding=false;WebAudioSound.decode();}
WebAudioSound._playEmptySound=function(){if(WebAudioSound.ctx==null){return;};var source=WebAudioSound.ctx.createBufferSource();source.buffer=WebAudioSound._miniBuffer;source.connect(WebAudioSound.ctx.destination);source.start(0,0,0);}
WebAudioSound._unlock=function(){if(WebAudioSound._unlocked){return;}
WebAudioSound._playEmptySound();if(WebAudioSound.ctx.state=="running"){Browser.document.removeEventListener("mousedown",WebAudioSound._unlock,true);Browser.document.removeEventListener("touchend",WebAudioSound._unlock,true);Browser.document.removeEventListener("touchstart",WebAudioSound._unlock,true);WebAudioSound._unlocked=true;}}
WebAudioSound.initWebAudio=function(){if(WebAudioSound.ctx.state!="running"){WebAudioSound._unlock();Browser.document.addEventListener("mousedown",WebAudioSound._unlock,true);Browser.document.addEventListener("touchend",WebAudioSound._unlock,true);Browser.document.addEventListener("touchstart",WebAudioSound._unlock,true);}}
WebAudioSound._dataCache={};WebAudioSound.buffs=[];WebAudioSound.isDecoding=false;WebAudioSound._unlocked=false;WebAudioSound.tInfo=null;WebAudioSound.__loadingSound={};__static(WebAudioSound,['window',function(){return this.window=Browser.window;},'webAudioEnabled',function(){return this.webAudioEnabled=WebAudioSound.window["AudioContext"]||WebAudioSound.window["webkitAudioContext"]||WebAudioSound.window["mozAudioContext"];},'ctx',function(){return this.ctx=WebAudioSound.webAudioEnabled?new(WebAudioSound.window["AudioContext"]||WebAudioSound.window["webkitAudioContext"]||WebAudioSound.window["mozAudioContext"])():undefined;},'_miniBuffer',function(){return this._miniBuffer=WebAudioSound.ctx.createBuffer(1,1,22050);},'e',function(){return this.e=new EventDispatcher();}]);return WebAudioSound;})(EventDispatcher)
var MeshQuadTexture=(function(_super){function MeshQuadTexture(){MeshQuadTexture.__super.call(this,24,4,4);this.canReuse=true;this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo);if(!laya.webgl.utils.MeshQuadTexture._fixib){this.createQuadIB(MeshQuadTexture._maxIB);laya.webgl.utils.MeshQuadTexture._fixib=this._ib;}else{this._ib=laya.webgl.utils.MeshQuadTexture._fixib;this._quadNum=MeshQuadTexture._maxIB;}}
__class(MeshQuadTexture,'laya.webgl.utils.MeshQuadTexture',_super);var __proto=MeshQuadTexture.prototype;__proto.releaseMesh=function(){this._vb.setByteLength(0);this.vertNum=0;this.indexNum=0;laya.webgl.utils.MeshQuadTexture._POOL.push(this);}
__proto.destroy=function(){this._vb.destroy();this._vb.deleteBuffer();}
__proto.addQuad=function(pos,uv,color,useTex){var vb=this._vb;var vpos=(vb._byteLength>>2);vb.setByteLength((vpos+24)<<2);var vbdata=vb._floatArray32||vb.getFloat32Array();var vbu32Arr=vb._uint32Array;var cpos=vpos;var useTexVal=useTex?0xff:0;vbdata[cpos++]=pos[0];vbdata[cpos++]=pos[1];vbdata[cpos++]=uv[0];vbdata[cpos++]=uv[1];vbu32Arr[cpos++]=color;vbu32Arr[cpos++]=useTexVal;vbdata[cpos++]=pos[2];vbdata[cpos++]=pos[3];vbdata[cpos++]=uv[2];vbdata[cpos++]=uv[3];vbu32Arr[cpos++]=color;vbu32Arr[cpos++]=useTexVal;vbdata[cpos++]=pos[4];vbdata[cpos++]=pos[5];vbdata[cpos++]=uv[4];vbdata[cpos++]=uv[5];vbu32Arr[cpos++]=color;vbu32Arr[cpos++]=useTexVal;vbdata[cpos++]=pos[6];vbdata[cpos++]=pos[7];vbdata[cpos++]=uv[6];vbdata[cpos++]=uv[7];vbu32Arr[cpos++]=color;vbu32Arr[cpos++]=useTexVal;vb._upload=true;}
MeshQuadTexture.getAMesh=function(mainctx){var ret=null;if(laya.webgl.utils.MeshQuadTexture._POOL.length){ret=laya.webgl.utils.MeshQuadTexture._POOL.pop();}else
ret=new MeshQuadTexture();mainctx&&ret._vb._resizeBuffer(64*1024*24,false);return ret;}
MeshQuadTexture.const_stride=24;MeshQuadTexture._fixib=null;MeshQuadTexture._maxIB=16*1024;MeshQuadTexture._POOL=[];__static(MeshQuadTexture,['_fixattriInfo',function(){return this._fixattriInfo=[0x1406,4,0,0x1401,4,16,0x1401,4,20];}]);return MeshQuadTexture;})(Mesh2D)
var Socket=(function(_super){function Socket(host,port,byteClass,protocols){this._endian=null;this._socket=null;this._connected=false;this._addInputPosition=0;this._input=null;this._output=null;this.disableInput=false;this._byteClass=null;this.protocols=[];Socket.__super.call(this);(port===void 0)&&(port=0);this._byteClass=byteClass?byteClass:Byte;this.protocols=protocols;this.endian="bigEndian";if(host&&port>0&&port<65535)this.connect(host,port);}
__class(Socket,'laya.net.Socket',_super);var __proto=Socket.prototype;__proto.connect=function(host,port){var url="ws://"+host+":"+port;this.connectByUrl(url);}
__proto.connectByUrl=function(url){var _$this=this;if(this._socket!=null)this.close();this._socket&&this.cleanSocket();if(!this.protocols||this.protocols.length==0){this._socket=new Browser.window.WebSocket(url);}else{this._socket=new Browser.window.WebSocket(url,this.protocols);}
this._socket.binaryType="arraybuffer";this._output=new this._byteClass();this._output.endian=this.endian;this._input=new this._byteClass();this._input.endian=this.endian;this._addInputPosition=0;this._socket.onopen=function(e){_$this._onOpen(e);};this._socket.onmessage=function(msg){_$this._onMessage(msg);};this._socket.onclose=function(e){_$this._onClose(e);};this._socket.onerror=function(e){_$this._onError(e);};}
__proto.cleanSocket=function(){this.close();this._connected=false;this._socket.onopen=null;this._socket.onmessage=null;this._socket.onclose=null;this._socket.onerror=null;this._socket=null;}
__proto.close=function(){if(this._socket!=null){try{this._socket.close();}catch(e){}}}
__proto._onOpen=function(e){this._connected=true;this.event("open",e);}
__proto._onMessage=function(msg){if(!msg||!msg.data)return;var data=msg.data;if(this.disableInput&&data){this.event("message",data);return;}
if(this._input.length>0&&this._input.bytesAvailable<1){this._input.clear();this._addInputPosition=0;};var pre=this._input.pos;!this._addInputPosition&&(this._addInputPosition=0);this._input.pos=this._addInputPosition;if(data){if((typeof data=='string')){this._input.writeUTFBytes(data);}else{this._input.writeArrayBuffer(data);}
this._addInputPosition=this._input.pos;this._input.pos=pre;}
this.event("message",data);}
__proto._onClose=function(e){this._connected=false;this.event("close",e)}
__proto._onError=function(e){this.event("error",e)}
__proto.send=function(data){this._socket.send(data);}
__proto.flush=function(){if(this._output&&this._output.length>0){var evt;try{this._socket&&this._socket.send(this._output.__getBuffer().slice(0,this._output.length));}catch(e){evt=e;}
this._output.endian=this.endian;this._output.clear();if(evt)this.event("error",evt);}}
__getset(0,__proto,'input',function(){return this._input;});__getset(0,__proto,'output',function(){return this._output;});__getset(0,__proto,'connected',function(){return this._connected;});__getset(0,__proto,'endian',function(){return this._endian;},function(value){this._endian=value;if(this._input!=null)this._input.endian=value;if(this._output!=null)this._output.endian=value;});Socket.LITTLE_ENDIAN="littleEndian";Socket.BIG_ENDIAN="bigEndian";return Socket;})(EventDispatcher)
var TextureSV=(function(_super){function TextureSV(subID){this.u_colorMatrix=null;this.strength=0;this.blurInfo=null;this.colorMat=null;this.colorAlpha=null;(subID===void 0)&&(subID=0);TextureSV.__super.call(this,0x01,subID);this._attribLocation=['posuv',0,'attribColor',1,'attribFlags',2];}
__class(TextureSV,'laya.webgl.shader.d2.value.TextureSV',_super);var __proto=TextureSV.prototype;__proto.clear=function(){this.texture=null;this.shader=null;this.defines._value=this.subID+(WebGL.shaderHighPrecision?0x400:0);}
return TextureSV;})(Value2D)
var CommonScript=(function(_super){function CommonScript(){CommonScript.__super.call(this);}
__class(CommonScript,'laya.components.CommonScript',_super);var __proto=CommonScript.prototype;__proto.onAwake=function(){}
__proto.onEnable=function(){}
__proto.onStart=function(){}
__proto.onUpdate=function(){}
__proto.onLateUpdate=function(){}
__proto.onDisable=function(){}
__proto.onDestroy=function(){}
__getset(0,__proto,'isSingleton',function(){return false;});return CommonScript;})(Component)
var LoaderManager=(function(_super){var ResInfo;function LoaderManager(){this.retryNum=1;this.retryDelay=0;this.maxLoader=5;this._loaders=[];this._loaderCount=0;this._resInfos=[];this._infoPool=[];this._maxPriority=5;this._failRes={};this._statInfo={count:1,loaded:1};LoaderManager.__super.call(this);for(var i=0;i<this._maxPriority;i++)this._resInfos[i]=[];}
__class(LoaderManager,'laya.net.LoaderManager',_super);var __proto=LoaderManager.prototype;__proto.getProgress=function(){return this._statInfo.loaded/this._statInfo.count;}
__proto.resetProgress=function(){this._statInfo.count=this._statInfo.loaded=1;}
__proto.create=function(url,complete,progress,type,constructParams,propertyParams,priority,cache){(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);this._create(url,true,complete,progress,type,constructParams,propertyParams,priority,cache);}
__proto._create=function(url,mainResou,complete,progress,type,constructParams,propertyParams,priority,cache){(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);if((url instanceof Array)){var allScuess=true;var items=url;var itemCount=items.length;var loadedCount=0;if(progress){var progress2=Handler.create(progress.caller,progress.method,progress.args,false);}
for(var i=0;i<itemCount;i++){var item=items[i];if((typeof item=='string'))
item=items[i]={url:item};item.progress=0;}
for(i=0;i<itemCount;i++){item=items[i];var progressHandler=progress?Handler.create(null,onProgress,[item],false):null;var completeHandler=(progress||complete)?Handler.create(null,onComplete,[item]):null;this._createOne(item.url,mainResou,completeHandler,progressHandler,item.type||type,item.constructParams||constructParams,item.propertyParams||propertyParams,item.priority||priority,cache);}
function onComplete(item,content){loadedCount++;item.progress=1;content||(allScuess=false);if(loadedCount===itemCount&&complete){complete.runWith(allScuess);}}
function onProgress(item,value){item.progress=value;var num=0;for(var j=0;j<itemCount;j++){var item1=items[j];num+=item1.progress;};var v=num/itemCount;progress2.runWith(v);}}else{this._createOne(url,mainResou,complete,progress,type,constructParams,propertyParams,priority,cache);}}
__proto._createOne=function(url,mainResou,complete,progress,type,constructParams,propertyParams,priority,cache){(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);var item=this.getRes(url);if(!item){var extension=Utils.getFileExtension(url);(type)||(type=LoaderManager.createMap[extension]?LoaderManager.createMap[extension][0]:null);if(!type){this.load(url,complete,progress,type,priority,cache);return;};var parserMap=Loader.parserMap;if(!parserMap[type]){this.load(url,complete,progress,type,priority,cache);return;}
this._createLoad(url,Handler.create(null,onLoaded),progress,type,constructParams,propertyParams,priority,cache,true);function onLoaded(createRes){if(createRes){if(!mainResou&&(createRes instanceof laya.resource.Resource))
(createRes)._addReference();createRes._setCreateURL(url);}
complete&&complete.runWith(createRes);Laya.loader.event(url);};}else{if(!mainResou&&(item instanceof laya.resource.Resource))
item._addReference();progress&&progress.runWith(1);complete&&complete.runWith(item);}}
__proto.load=function(url,complete,progress,type,priority,cache,group,ignoreCache,useWorkerLoader){var _$this=this;(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);(ignoreCache===void 0)&&(ignoreCache=false);(useWorkerLoader===void 0)&&(useWorkerLoader=false);if((url instanceof Array))return this._loadAssets(url,complete,progress,type,priority,cache,group);var content=Loader.getRes(url);if(!ignoreCache&&content!=null){Laya.systemTimer.frameOnce(1,null,function(){progress&&progress.runWith(1);complete&&complete.runWith((content instanceof Array)?[content]:content);_$this._loaderCount||_$this.event("complete");});}else{var original;original=url;url=AtlasInfoManager.getFileLoadPath(url);if(url!=original&&type!=="nativeimage"){type="atlas";}else{original=null;};var info=LoaderManager._resMap[url];if(!info){info=this._infoPool.length?this._infoPool.pop():new ResInfo();info.url=url;info.type=type;info.cache=cache;info.group=group;info.ignoreCache=ignoreCache;info.useWorkerLoader=useWorkerLoader;info.originalUrl=original;complete&&info.on("complete",complete.caller,complete.method,complete.args);progress&&info.on("progress",progress.caller,progress.method,progress.args);LoaderManager._resMap[url]=info;priority=priority<this._maxPriority?priority:this._maxPriority-1;this._resInfos[priority].push(info);this._statInfo.count++;this.event("progress",this.getProgress());this._next();}else{if(complete){if(original){complete&&info._createListener("complete",this,this._resInfoLoaded,[original,complete],false,false);}else{complete&&info._createListener("complete",complete.caller,complete.method,complete.args,false,false);}}
progress&&info._createListener("progress",progress.caller,progress.method,progress.args,false,false);}}
return this;}
__proto._resInfoLoaded=function(original,complete){complete.runWith(Loader.getRes(original));}
__proto._createLoad=function(url,complete,progress,type,constructParams,propertyParams,priority,cache,ignoreCache){var _$this=this;(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);(ignoreCache===void 0)&&(ignoreCache=false);if((url instanceof Array))return this._loadAssets(url,complete,progress,type,priority,cache);var content=Loader.getRes(url);if(content!=null){Laya.systemTimer.frameOnce(1,null,function(){progress&&progress.runWith(1);complete&&complete.runWith(content);_$this._loaderCount||_$this.event("complete");});}else{var info=LoaderManager._resMap[url];if(!info){info=this._infoPool.length?this._infoPool.pop():new ResInfo();info.url=url;info.type=type;info.cache=false;info.ignoreCache=ignoreCache;info.originalUrl=null;info.createCache=cache;info.createConstructParams=constructParams;info.createPropertyParams=propertyParams;complete&&info.on("complete",complete.caller,complete.method,complete.args);progress&&info.on("progress",progress.caller,progress.method,progress.args);LoaderManager._resMap[url]=info;priority=priority<this._maxPriority?priority:this._maxPriority-1;this._resInfos[priority].push(info);this._statInfo.count++;this.event("progress",this.getProgress());this._next();}else{complete&&info._createListener("complete",complete.caller,complete.method,complete.args,false,false);progress&&info._createListener("progress",progress.caller,progress.method,progress.args,false,false);}}
return this;}
__proto._next=function(){if(this._loaderCount>=this.maxLoader)return;for(var i=0;i<this._maxPriority;i++){var infos=this._resInfos[i];while(infos.length>0){var info=infos.shift();if(info)return this._doLoad(info);}}
this._loaderCount||this.event("complete");}
__proto._doLoad=function(resInfo){this._loaderCount++;var loader=this._loaders.length?this._loaders.pop():new Loader();loader.on("complete",null,onLoaded);loader.on("progress",null,function(num){resInfo.event("progress",num);});loader.on("error",null,function(msg){onLoaded(null);});var _me=this;function onLoaded(data){loader.offAll();loader._data=null;loader._customParse=false;_me._loaders.push(loader);_me._endLoad(resInfo,(data instanceof Array)?[data]:data);_me._loaderCount--;_me._next();}
loader._constructParams=resInfo.createConstructParams;loader._propertyParams=resInfo.createPropertyParams;loader._createCache=resInfo.createCache;loader.load(resInfo.url,resInfo.type,resInfo.cache,resInfo.group,resInfo.ignoreCache,resInfo.useWorkerLoader);}
__proto._endLoad=function(resInfo,content){var url=resInfo.url;if(content==null){var errorCount=this._failRes[url]||0;if(errorCount<this.retryNum){console.warn("[warn]Retry to load:",url);this._failRes[url]=errorCount+1;Laya.systemTimer.once(this.retryDelay,this,this._addReTry,[resInfo],false);return;}else{Loader.clearRes(url);console.warn("[error]Failed to load:",url);this.event("error",url);}}
if(this._failRes[url])this._failRes[url]=0;delete LoaderManager._resMap[url];if(resInfo.originalUrl){content=Loader.getRes(resInfo.originalUrl);}
resInfo.event("complete",content);resInfo.offAll();this._infoPool.push(resInfo);this._statInfo.loaded++;this.event("progress",this.getProgress());}
__proto._addReTry=function(resInfo){this._resInfos[this._maxPriority-1].push(resInfo);this._next();}
__proto.clearRes=function(url){Loader.clearRes(url);}
__proto.clearTextureRes=function(url){Loader.clearTextureRes(url);}
__proto.getRes=function(url){return Loader.getRes(url);}
__proto.cacheRes=function(url,data){Loader.cacheRes(url,data);}
__proto.setGroup=function(url,group){Loader.setGroup(url,group);}
__proto.clearResByGroup=function(group){Loader.clearResByGroup(group);}
__proto.clearUnLoaded=function(){for(var i=0;i<this._maxPriority;i++){var infos=this._resInfos[i];for(var j=infos.length-1;j>-1;j--){var info=infos[j];if(info){info.offAll();this._infoPool.push(info);}}
infos.length=0;}
this._loaderCount=0;LoaderManager._resMap={};}
__proto.cancelLoadByUrls=function(urls){if(!urls)return;for(var i=0,n=urls.length;i<n;i++){this.cancelLoadByUrl(urls[i]);}}
__proto.cancelLoadByUrl=function(url){for(var i=0;i<this._maxPriority;i++){var infos=this._resInfos[i];for(var j=infos.length-1;j>-1;j--){var info=infos[j];if(info&&info.url===url){infos[j]=null;info.offAll();this._infoPool.push(info);}}}
if(LoaderManager._resMap[url])delete LoaderManager._resMap[url];}
__proto._loadAssets=function(arr,complete,progress,type,priority,cache,group){(priority===void 0)&&(priority=1);(cache===void 0)&&(cache=true);var itemCount=arr.length;var loadedCount=0;var totalSize=0;var items=[];var success=true;for(var i=0;i<itemCount;i++){var item=arr[i];if((typeof item=='string'))item={url:item,type:type,size:1,priority:priority};if(!item.size)item.size=1;item.progress=0;totalSize+=item.size;items.push(item);var progressHandler=progress?Handler.create(null,loadProgress,[item],false):null;var completeHandler=(complete||progress)?Handler.create(null,loadComplete,[item]):null;this.load(item.url,completeHandler,progressHandler,item.type,item.priority||1,cache,item.group||group,false,item.useWorkerLoader);}
function loadComplete(item,content){loadedCount++;item.progress=1;if(!content)success=false;if(loadedCount===itemCount&&complete){complete.runWith(success);}}
function loadProgress(item,value){if(progress!=null){item.progress=value;var num=0;for(var j=0;j<items.length;j++){var item1=items[j];num+=item1.size*item1.progress;};var v=num/totalSize;progress.runWith(v);}}
return this;}
__proto.decodeBitmaps=function(urls){var i=0,len=urls.length;var ctx;ctx=Render._context;for(i=0;i<len;i++){var atlas;atlas=Loader.getAtlas(urls[i]);if(atlas){this._decodeTexture(atlas[0],ctx);}else{var tex;tex=this.getRes(urls[i]);if(tex&&(tex instanceof laya.resource.Texture)){this._decodeTexture(tex,ctx);}}}}
__proto._decodeTexture=function(tex,ctx){var bitmap=tex.bitmap;if(!tex||!bitmap)return;var tImg=bitmap.source||bitmap.image;if(!tImg)return;if(Laya.__typeof(tImg,Browser.window.HTMLImageElement)){ctx.drawImage(tImg,0,0,1,1);var info=ctx.getImageData(0,0,1,1);}}
LoaderManager.cacheRes=function(url,data){Loader.cacheRes(url,data);}
LoaderManager._resMap={};__static(LoaderManager,['createMap',function(){return this.createMap={atlas:[null,"atlas"]};}]);LoaderManager.__init$=function(){ResInfo=(function(_super){function ResInfo(){this.url=null;this.type=null;this.cache=false;this.group=null;this.ignoreCache=false;this.useWorkerLoader=false;this.originalUrl=null;this.createCache=false;this.createConstructParams=null;this.createPropertyParams=null;ResInfo.__super.call(this);}
__class(ResInfo,'',_super);return ResInfo;})(EventDispatcher)}
return LoaderManager;})(EventDispatcher)
var MeshTexture=(function(_super){function MeshTexture(){MeshTexture.__super.call(this,24,4,4);this.canReuse=true;this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo);}
__class(MeshTexture,'laya.webgl.utils.MeshTexture',_super);var __proto=MeshTexture.prototype;__proto.addData=function(vertices,uvs,idx,matrix,rgba){var vb=this._vb;var ib=this._ib;var vertsz=vertices.length>>1;var startpos=vb.needSize(vertsz*24);var f32pos=startpos>>2;var vbdata=vb._floatArray32||vb.getFloat32Array();var vbu32Arr=vb._uint32Array;var ci=0;var m00=matrix.a;var m01=matrix.b;var m10=matrix.c;var m11=matrix.d;var tx=matrix.tx;var ty=matrix.ty;var i=0;for(i=0;i<vertsz;i++){var x=vertices[ci],y=vertices[ci+1];vbdata[f32pos]=x*m00+y*m10+tx;vbdata[f32pos+1]=x*m01+y*m11+ty;vbdata[f32pos+2]=uvs[ci];vbdata[f32pos+3]=uvs[ci+1];vbu32Arr[f32pos+4]=rgba;vbu32Arr[f32pos+5]=0xff;f32pos+=6;ci+=2;}
vb.setNeedUpload();var vertN=this.vertNum;var sz=idx.length;var stib=ib.needSize(idx.byteLength);var cidx=ib.getUint16Array();var stibid=stib>>1;if(vertN>0){var end=stibid+sz;var si=0;for(i=stibid;i<end;i++,si++){cidx[i]=idx[si]+vertN;}}else{cidx.set(idx,stibid);}
ib.setNeedUpload();this.vertNum+=vertsz;this.indexNum+=idx.length;}
__proto.releaseMesh=function(){this._vb.setByteLength(0);this._ib.setByteLength(0);this.vertNum=0;this.indexNum=0;laya.webgl.utils.MeshTexture._POOL.push(this);}
__proto.destroy=function(){this._ib.destroy();this._vb.destroy();this._ib.disposeResource();this._vb.deleteBuffer();}
MeshTexture.getAMesh=function(mainctx){var ret;if(laya.webgl.utils.MeshTexture._POOL.length){ret=laya.webgl.utils.MeshTexture._POOL.pop();}else ret=new MeshTexture();mainctx&&ret._vb._resizeBuffer(64*1024*24,false);return ret;}
MeshTexture.const_stride=24;MeshTexture._POOL=[];__static(MeshTexture,['_fixattriInfo',function(){return this._fixattriInfo=[0x1406,4,0,0x1401,4,16,0x1401,4,20];}]);return MeshTexture;})(Mesh2D)
var SceneLoader=(function(_super){function SceneLoader(){this.totalCount=0;this._completeHandler=null;this._toLoadList=null;this._isLoading=false;this._curUrl=null;SceneLoader.__super.call(this);this._completeHandler=new Handler(this,this.onOneLoadComplete);this.reset();}
__class(SceneLoader,'laya.net.SceneLoader',_super);var __proto=SceneLoader.prototype;__proto.reset=function(){this._toLoadList=[];this._isLoading=false;this.totalCount=0;}
__proto.load=function(url,is3D,ifCheck){(is3D===void 0)&&(is3D=false);(ifCheck===void 0)&&(ifCheck=true);if((url instanceof Array)){var i=0,len=0;len=url.length;for(i=0;i<len;i++){this._addToLoadList(url[i],is3D);}}else{this._addToLoadList(url,is3D);}
if(ifCheck)
this._checkNext();}
__proto._addToLoadList=function(url,is3D){(is3D===void 0)&&(is3D=false);if(this._toLoadList.indexOf(url)>=0)return;if(Loader.getRes(url))return;if(is3D){this._toLoadList.push({url:url});}else
this._toLoadList.push(url);this.totalCount++;}
__proto._checkNext=function(){if(!this._isLoading){if(this._toLoadList.length==0){this.event("complete");return;};var tItem;tItem=this._toLoadList.pop();if((typeof tItem=='string')){this.loadOne(tItem);}else{this.loadOne(tItem.url,true);}}}
__proto.loadOne=function(url,is3D){(is3D===void 0)&&(is3D=false);this._curUrl=url;var type=Utils.getFileExtension(this._curUrl);if(is3D){Laya.loader.create(url,this._completeHandler);}else
if(SceneLoader.LoadableExtensions[type]){Laya.loader.load(url,this._completeHandler,null,SceneLoader.LoadableExtensions[type]);}else if(url!=AtlasInfoManager.getFileLoadPath(url)||SceneLoader.No3dLoadTypes[type]||!LoaderManager.createMap[type]){Laya.loader.load(url,this._completeHandler);}else{Laya.loader.create(url,this._completeHandler);}}
__proto.onOneLoadComplete=function(){this._isLoading=false;if(!Loader.getRes(this._curUrl)){console.log("Fail to load:",this._curUrl);};var type=Utils.getFileExtension(this._curUrl);if(SceneLoader.LoadableExtensions[type]){var dataO;dataO=Loader.getRes(this._curUrl);if(dataO&&((dataO instanceof laya.components.Prefab))){dataO=dataO.json;}
if(dataO){if(dataO.loadList){this.load(dataO.loadList,false,false);}
if(dataO.loadList3D){this.load(dataO.loadList3D,true,false);}}}
if(type=="sk"){this.load(this._curUrl.replace(".sk",".png"),false,false);}
this.event("progress",this.getProgress());this._checkNext();}
__proto.getProgress=function(){return this.loadedCount/this.totalCount;}
__getset(0,__proto,'loadedCount',function(){return this.totalCount-this.leftCount;});__getset(0,__proto,'leftCount',function(){if(this._isLoading)return this._toLoadList.length+1;return this._toLoadList.length;});__static(SceneLoader,['LoadableExtensions',function(){return this.LoadableExtensions={"scene":"json","scene3d":"json","ani":"json","ui":"json","prefab":"prefab"};},'No3dLoadTypes',function(){return this.No3dLoadTypes={"png":true,"jpg":true,"txt":true};}]);return SceneLoader;})(EventDispatcher)
var TextStyle=(function(_super){function TextStyle(){this.italic=false;TextStyle.__super.call(this);}
__class(TextStyle,'laya.display.css.TextStyle',_super);var __proto=TextStyle.prototype;__proto.reset=function(){_super.prototype.reset.call(this);this.italic=false;this.align="left";this.wordWrap=false;this.leading=0;this.padding=[0,0,0,0];this.bgColor=null;this.borderColor=null;this.asPassword=false;this.stroke=0;this.strokeColor="#000000";this.bold=false;this.underline=false;this.underlineColor=null;this.currBitmapFont=null;return this;}
__proto.recover=function(){if(this===TextStyle.EMPTY)
return;Pool.recover("TextStyle",this.reset());}
__proto.render=function(sprite,context,x,y){(this.bgColor||this.borderColor)&&context.drawRect(x,y,sprite.width,sprite.height,this.bgColor,this.borderColor,1);}
TextStyle.create=function(){return Pool.getItemByClass("TextStyle",TextStyle);}
TextStyle.EMPTY=new TextStyle();return TextStyle;})(SpriteStyle)
var WorkerLoader=(function(_super){function WorkerLoader(){this.worker=null;this._useWorkerLoader=false;WorkerLoader.__super.call(this);var _$this=this;this.worker=new Worker(WorkerLoader.workerPath);this.worker.onmessage=function(evt){_$this.workerMessage(evt.data);}}
__class(WorkerLoader,'laya.net.WorkerLoader',_super);var __proto=WorkerLoader.prototype;__proto.workerMessage=function(data){if(data){switch(data.type){case"Image":this.imageLoaded(data);break;case"Disable":WorkerLoader.enable=false;break;}}}
__proto.imageLoaded=function(data){if(!data.dataType||data.dataType!="imageBitmap"){this.event(data.url,null);return;};var canvas=new HTMLCanvas(true);var ctx=canvas.source.getContext("2d");switch(data.dataType){case"imageBitmap":;var imageData=data.imageBitmap;canvas.size(imageData.width,imageData.height);ctx.drawImage(imageData,0,0);break;}
console.log("load:",data.url);canvas._setGPUMemory(0);var tex=new Texture2D();tex.loadImageSource(canvas.source);this.event(data.url,tex);}
__proto.loadImage=function(url){this.worker.postMessage(url);}
__proto._loadImage=function(url){var _this=this;if(!this._useWorkerLoader||!WorkerLoader._enable){WorkerLoader._preLoadFun.call(_this,url);return;}
url=URL.formatURL(url);function clear(){laya.net.WorkerLoader.I.off(url,_this,onload);};var onload=function(image){clear();if(image){_this["onLoaded"](image);}else{WorkerLoader._preLoadFun.call(_this,url);}};laya.net.WorkerLoader.I.on(url,_this,onload);laya.net.WorkerLoader.I.loadImage(url);}
__getset(1,WorkerLoader,'enable',function(){return WorkerLoader._enable;},function(value){if(WorkerLoader._enable!=value){WorkerLoader._enable=value;if(value&&WorkerLoader._preLoadFun==null)WorkerLoader._enable=WorkerLoader.__init__();}});WorkerLoader.__init__=function(){if(WorkerLoader._preLoadFun!=null)return false;if(!Worker)return false;WorkerLoader._preLoadFun=Loader["prototype"]["_loadImage"];Loader["prototype"]["_loadImage"]=WorkerLoader["prototype"]["_loadImage"];if(!WorkerLoader.I)WorkerLoader.I=new WorkerLoader();return true;}
WorkerLoader.workerSupported=function(){return Worker?true:false;}
WorkerLoader.enableWorkerLoader=function(){if(!WorkerLoader._tryEnabled){WorkerLoader.enable=true;WorkerLoader._tryEnabled=true;}}
WorkerLoader.I=null;WorkerLoader.workerPath="libs/workerloader.js";WorkerLoader._preLoadFun=null;WorkerLoader._enable=false;WorkerLoader._tryEnabled=false;return WorkerLoader;})(EventDispatcher)
var BufferState2D=(function(_super){function BufferState2D(){BufferState2D.__super.call(this);}
__class(BufferState2D,'laya.webgl.BufferState2D',_super);return BufferState2D;})(BufferStateBase)
var PrimitiveSV=(function(_super){function PrimitiveSV(args){PrimitiveSV.__super.call(this,0x04,0);this._attribLocation=['position',0,'attribColor',1];}
__class(PrimitiveSV,'laya.webgl.shader.d2.value.PrimitiveSV',_super);return PrimitiveSV;})(Value2D)
var SkinSV=(function(_super){function SkinSV(type){this.texcoord=null;this.position=null;this.offsetX=300;this.offsetY=0;SkinSV.__super.call(this,0x200,0);var _vlen=8*CONST3D2D.BYTES_PE;this.position=[2,0x1406,false,_vlen,0];this.texcoord=[2,0x1406,false,_vlen,2*CONST3D2D.BYTES_PE];this.color=[4,0x1406,false,_vlen,4*CONST3D2D.BYTES_PE];}
__class(SkinSV,'laya.webgl.shader.d2.skinAnishader.SkinSV',_super);return SkinSV;})(Value2D)
var CharRender_Canvas=(function(_super){function CharRender_Canvas(maxw,maxh,scalefont,useImageData,showdbg){this.ctx=null;this.lastScaleX=1.0;this.lastScaleY=1.0;this.needResetScale=false;this.maxTexW=0;this.maxTexH=0;this.scaleFontSize=true;this.showDbgInfo=false;this.supportImageData=true;this.settrans=null;CharRender_Canvas.__super.call(this);(scalefont===void 0)&&(scalefont=true);(useImageData===void 0)&&(useImageData=true);(showdbg===void 0)&&(showdbg=false);this.maxTexW=maxw;this.maxTexH=maxh;this.scaleFontSize=scalefont;this.supportImageData=useImageData;this.showDbgInfo=showdbg;if(!CharRender_Canvas.canvas){CharRender_Canvas.canvas=window.document.createElement('canvas');CharRender_Canvas.canvas.width=1024;CharRender_Canvas.canvas.height=512;CharRender_Canvas.canvas.style.left="-10000px";CharRender_Canvas.canvas.style.position="absolute";document.body.appendChild(CharRender_Canvas.canvas);;this.ctx=CharRender_Canvas.canvas.getContext('2d');this.settrans=this.ctx._setTransform||this.ctx.setTransform;}}
__class(CharRender_Canvas,'laya.webgl.text.CharRender_Canvas',_super);var __proto=CharRender_Canvas.prototype;__proto.getWidth=function(font,str){if(!this.ctx)return 0;if(this.ctx._lastFont!=font){this.ctx.font=font;this.ctx._lastFont=font;}
return this.ctx.measureText(str).width;}
__proto.scale=function(sx,sy){if(!this.supportImageData){this.lastScaleX=sx;this.lastScaleY=sy;return;}
if(this.lastScaleX!=sx||this.lastScaleY!=sy){this.settrans.call(this.ctx,sx,0,0,sy,0,0);this.lastScaleX=sx;this.lastScaleY=sy;}}
__proto.getCharBmp=function(char,font,lineWidth,colStr,strokeColStr,cri,margin_left,margin_top,margin_right,margin_bottom,rect){if(!this.supportImageData)
return this.getCharCanvas(char,font,lineWidth,colStr,strokeColStr,cri,margin_left,margin_top,margin_right,margin_bottom);var ctx=this.ctx;if(ctx.font!=font){ctx.font=font;ctx._lastFont=font;}
cri.width=ctx.measureText(char).width;var w=cri.width*this.lastScaleX;var h=cri.height*this.lastScaleY;w+=(margin_left+margin_right)*this.lastScaleX;h+=(margin_top+margin_bottom)*this.lastScaleY;w=Math.ceil(w);h=Math.ceil(h);w=Math.min(w,laya.webgl.text.CharRender_Canvas.canvas.width);h=Math.min(h,laya.webgl.text.CharRender_Canvas.canvas.height);var clearW=w+lineWidth*2+1;var clearH=h+lineWidth*2+1;if(rect){clearW=Math.max(clearW,rect[0]+rect[2]+1);clearH=Math.max(clearH,rect[1]+rect[3]+1);}
ctx.clearRect(0,0,clearW,clearH);ctx.save();ctx.textBaseline="top";if(lineWidth>0){ctx.strokeStyle=strokeColStr;ctx.lineWidth=lineWidth;ctx.strokeText(char,margin_left,margin_top);}
ctx.fillStyle=colStr;ctx.fillText(char,margin_left,margin_top);if(this.showDbgInfo){ctx.strokeStyle='#ff0000';ctx.strokeRect(0,0,w,h);ctx.strokeStyle='#00ff00';ctx.strokeRect(margin_left,margin_top,cri.width,cri.height);}
if(rect){if(rect[2]==-1)rect[2]=Math.ceil((cri.width+lineWidth*2)*this.lastScaleX);};var imgdt=rect?(ctx.getImageData(rect[0],rect[1],rect[2],rect[3])):(ctx.getImageData(0,0,w,h));ctx.restore();cri.bmpWidth=imgdt.width;cri.bmpHeight=imgdt.height;return imgdt;}
__proto.getCharCanvas=function(char,font,lineWidth,colStr,strokeColStr,cri,margin_left,margin_top,margin_right,margin_bottom){var ctx=this.ctx;if(ctx.font!=font){ctx.font=font;ctx._lastFont=font;}
cri.width=ctx.measureText(char).width;var w=cri.width*this.lastScaleX;var h=cri.height*this.lastScaleY;w+=(margin_left+margin_right)*this.lastScaleX;h+=((margin_top+margin_bottom)*this.lastScaleY+1);w=Math.min(w,this.maxTexW);h=Math.min(h,this.maxTexH);CharRender_Canvas.canvas.width=Math.min(w+1,this.maxTexW);CharRender_Canvas.canvas.height=Math.min(h+1,this.maxTexH);ctx.font=font;ctx.clearRect(0,0,w+1+lineWidth,h+1+lineWidth);this.settrans.call(ctx,1,0,0,1,0,0);ctx.save();if(this.scaleFontSize){ctx.scale(this.lastScaleX,this.lastScaleY);}
ctx.translate(margin_left,margin_top);ctx.textAlign="left";ctx.textBaseline="top";if(lineWidth>0){ctx.strokeStyle=strokeColStr;ctx.fillStyle=colStr;ctx.lineWidth=lineWidth;if(ctx.fillAndStrokeText){ctx.fillAndStrokeText(char,0,0);}else{ctx.strokeText(char,0,0);ctx.fillText(char,0,0);}}else{ctx.fillStyle=colStr;ctx.fillText(char,0,0);}
if(this.showDbgInfo){ctx.strokeStyle='#ff0000';ctx.strokeRect(0,0,w,h);ctx.strokeStyle='#00ff00';ctx.strokeRect(0,0,cri.width,cri.height);}
ctx.restore();cri.bmpWidth=CharRender_Canvas.canvas.width;cri.bmpHeight=CharRender_Canvas.canvas.height;return CharRender_Canvas.canvas;}
__getset(0,__proto,'canvasWidth',function(){return CharRender_Canvas.canvas.width;},function(w){if(CharRender_Canvas.canvas.width==w)
return;CharRender_Canvas.canvas.width=w;if(w>2048){console.warn("画文字设置的宽度太大，超过2048了");}
this.settrans.call(this.ctx,1,0,0,1,0,0);this.ctx.scale(this.lastScaleX,this.lastScaleY);});CharRender_Canvas.canvas=null;return CharRender_Canvas;})(ICharRender)
var CharRender_Native=(function(_super){function CharRender_Native(){this.lastFont='';CharRender_Native.__super.call(this);}
__class(CharRender_Native,'laya.webgl.text.CharRender_Native',_super);var __proto=CharRender_Native.prototype;__proto.getWidth=function(font,str){if(!window.conchTextCanvas)return 0;window.conchTextCanvas.font=font;this.lastFont=font;return window.conchTextCanvas.measureText(str).width;}
__proto.scale=function(sx,sy){}
__proto.getCharBmp=function(char,font,lineWidth,colStr,strokeColStr,size,margin_left,margin_top,margin_right,margin_bottom,rect){if(!window.conchTextCanvas)return null;window.conchTextCanvas.font=font;this.lastFont=font;var w=size.width=window.conchTextCanvas.measureText(char).width;var h=size.height;w+=(margin_left+margin_right);h+=(margin_top+margin_bottom);var c1=ColorUtils.create(strokeColStr);var nStrokeColor=c1.numColor;var c2=ColorUtils.create(colStr);var nTextColor=c2.numColor;var textInfo=window.conchTextCanvas.getTextBitmapData(char,nTextColor,lineWidth>2?2:lineWidth,nStrokeColor);size.bmpWidth=textInfo.width;size.bmpHeight=textInfo.height;return textInfo;}
return CharRender_Native;})(ICharRender)
var Sprite=(function(_super){function Sprite(){this._x=0;this._y=0;this._width=0;this._height=0;this._visible=true;this._mouseState=0;this._zOrder=0;this._renderType=0;this._transform=null;this._tfChanged=false;this._texture=null;this._boundStyle=null;this._graphics=null;this.mouseThrough=false;this.autoSize=false;this.hitTestPrior=false;Sprite.__super.call(this);this._repaint=0;this._style=SpriteStyle.EMPTY;this._cacheStyle=CacheStyle.EMPTY;}
__class(Sprite,'laya.display.Sprite',_super);var __proto=Sprite.prototype;__proto.destroy=function(destroyChild){(destroyChild===void 0)&&(destroyChild=true);_super.prototype.destroy.call(this,destroyChild);this._style&&this._style.recover();this._cacheStyle&&this._cacheStyle.recover();this._boundStyle&&this._boundStyle.recover();this._style=null;this._cacheStyle=null;this._boundStyle=null;this._transform=null;if(this._graphics&&this._graphics.autoDestroy){this._graphics.destroy();}
this._graphics=null;this.texture=null;}
__proto.updateZOrder=function(){Utils.updateOrder(this._children)&&this.repaint();}
__proto._getBoundsStyle=function(){if(!this._boundStyle)this._boundStyle=BoundsStyle.create();return this._boundStyle;}
__proto._setCustomRender=function(){}
__proto._setCacheAs=function(value){}
__proto._checkCanvasEnable=function(){var tEnable=this._cacheStyle.needEnableCanvasRender();this._getCacheStyle().enableCanvasRender=tEnable;if(tEnable){if(this._cacheStyle.needBitmapCache()){this._cacheStyle.cacheAs="bitmap";}else{this._cacheStyle.cacheAs=this._cacheStyle.userSetCache;}
this._cacheStyle.reCache=true;this._renderType|=0x08;}else{this._cacheStyle.cacheAs="none";this._cacheStyle.releaseContext();this._renderType&=~0x08;}
this._setCacheAs(this._cacheStyle.cacheAs);this._setRenderType(this._renderType);}
__proto.reCache=function(){this._cacheStyle.reCache=true;this._repaint|=0x02;}
__proto.getRepaint=function(){return this._repaint;}
__proto._setX=function(value){this._x=value;}
__proto._setY=function(value){this._y=value;}
__proto._setWidth=function(texture,value){}
__proto._setHeight=function(texture,value){}
__proto.setSelfBounds=function(bound){this._getBoundsStyle().userBounds=bound;}
__proto.getBounds=function(){return this._getBoundsStyle().bounds=Rectangle._getWrapRec(this._boundPointsToParent());}
__proto.getSelfBounds=function(){if(this._boundStyle&&this._boundStyle.userBounds)return this._boundStyle.userBounds;if(!this._graphics&&this._children.length===0&&!this._texture)return Rectangle.TEMP.setTo(0,0,0,0);return this._getBoundsStyle().bounds=Rectangle._getWrapRec(this._getBoundPointsM(false));}
__proto._boundPointsToParent=function(ifRotate){(ifRotate===void 0)&&(ifRotate=false);var pX=0,pY=0;if(this._style){pX=this.pivotX;pY=this.pivotY;ifRotate=ifRotate||(this._style.rotation!==0);if(this._style.scrollRect){pX+=this._style.scrollRect.x;pY+=this._style.scrollRect.y;}};var pList=this._getBoundPointsM(ifRotate);if(!pList||pList.length<1)return pList;if(pList.length!=8){pList=ifRotate?GrahamScan.scanPList(pList):Rectangle._getWrapRec(pList,Rectangle.TEMP)._getBoundPoints();}
if(!this.transform){Utils.transPointList(pList,this._x-pX,this._y-pY);return pList;};var tPoint=Point.TEMP;var i=0,len=pList.length;for(i=0;i<len;i+=2){tPoint.x=pList[i];tPoint.y=pList[i+1];this.toParentPoint(tPoint);pList[i]=tPoint.x;pList[i+1]=tPoint.y;}
return pList;}
__proto.getGraphicBounds=function(realSize){(realSize===void 0)&&(realSize=false);if(!this._graphics)return Rectangle.TEMP.setTo(0,0,0,0);return this._graphics.getBounds(realSize);}
__proto._getBoundPointsM=function(ifRotate){(ifRotate===void 0)&&(ifRotate=false);if(this._boundStyle&&this._boundStyle.userBounds)return this._boundStyle.userBounds._getBoundPoints();if(!this._boundStyle)this._getBoundsStyle();if(!this._boundStyle.temBM)this._boundStyle.temBM=[];if(this._style.scrollRect){var rst=Utils.clearArray(this._boundStyle.temBM);var rec=Rectangle.TEMP;rec.copyFrom(this._style.scrollRect);Utils.concatArray(rst,rec._getBoundPoints());return rst;};var pList;if(this._graphics){pList=this._graphics.getBoundPoints();}else{pList=Utils.clearArray(this._boundStyle.temBM);if(this._texture){rec=Rectangle.TEMP;rec.setTo(0,0,this.width||this._texture.width,this.height||this._texture.height);Utils.concatArray(pList,rec._getBoundPoints());}};var child;var cList;var __childs;__childs=this._children;for(var i=0,n=__childs.length;i<n;i++){child=__childs[i];if((child instanceof laya.display.Sprite)&&child._visible===true){cList=child._boundPointsToParent(ifRotate);if(cList)
pList=pList?Utils.concatArray(pList,cList):cList;}}
return pList;}
__proto._getCacheStyle=function(){this._cacheStyle===CacheStyle.EMPTY&&(this._cacheStyle=CacheStyle.create());return this._cacheStyle;}
__proto.getStyle=function(){this._style===SpriteStyle.EMPTY&&(this._style=SpriteStyle.create());return this._style;}
__proto.setStyle=function(value){this._style=value;}
__proto._setScaleX=function(value){this._style.scaleX=value;}
__proto._setScaleY=function(value){this._style.scaleY=value;}
__proto._setRotation=function(value){this._style.rotation=value;}
__proto._setSkewX=function(value){this._style.skewX=value;}
__proto._setSkewY=function(value){this._style.skewY=value;}
__proto._createTransform=function(){return Matrix.create();}
__proto._adjustTransform=function(){this._tfChanged=false;var style=this._style;var sx=style.scaleX,sy=style.scaleY;var sskx=style.skewX;var ssky=style.skewY;var rot=style.rotation;var m=this._transform||(this._transform=this._createTransform());if(rot||sx!==1||sy!==1||sskx!==0||ssky!==0){m._bTransform=true;var skx=(rot-sskx)*0.0174532922222222;var sky=(rot+ssky)*0.0174532922222222;var cx=Math.cos(sky);var ssx=Math.sin(sky);var cy=Math.sin(skx);var ssy=Math.cos(skx);m.a=sx*cx;m.b=sx*ssx;m.c=-sy*cy;m.d=sy*ssy;m.tx=m.ty=0;}else{m.identity();this._renderType&=~0x02;this._setRenderType(this._renderType);}
return m;}
__proto._setTransform=function(value){}
__proto._setPivotX=function(value){var style=this.getStyle();style.pivotX=value;}
__proto._getPivotX=function(){return this._style.pivotX;}
__proto._setPivotY=function(value){var style=this.getStyle();style.pivotY=value;}
__proto._getPivotY=function(){return this._style.pivotY;}
__proto._setAlpha=function(value){if(this._style.alpha!==value){var style=this.getStyle();style.alpha=value;if(value!==1)this._renderType|=0x01;else this._renderType&=~0x01;this._setRenderType(this._renderType);this.parentRepaint();}}
__proto._getAlpha=function(){return this._style.alpha;}
__proto._setBlendMode=function(value){}
__proto._setGraphics=function(value){}
__proto._setGraphicsCallBack=function(){}
__proto._setScrollRect=function(value){}
__proto.pos=function(x,y,speedMode){(speedMode===void 0)&&(speedMode=false);if(this._x!==x||this._y!==y){if(this.destroyed)return this;if(speedMode){this._setX(x);this._setY(y);this.parentRepaint(0x02);var p=this._cacheStyle.maskParent;if(p){p.repaint(0x02);}}else{this.x=x;this.y=y;}}
return this;}
__proto.pivot=function(x,y){this.pivotX=x;this.pivotY=y;return this;}
__proto.size=function(width,height){this.width=width;this.height=height;return this;}
__proto.scale=function(scaleX,scaleY,speedMode){(speedMode===void 0)&&(speedMode=false);var style=this.getStyle();if(style.scaleX!=scaleX||style.scaleY!=scaleY){if(this.destroyed)return this;if(speedMode){this._setScaleX(scaleX);this._setScaleY(scaleY);this._setTranformChange();}else{this.scaleX=scaleX;this.scaleY=scaleY;}}
return this;}
__proto.skew=function(skewX,skewY){this.skewX=skewX;this.skewY=skewY;return this;}
__proto.render=function(ctx,x,y){RenderSprite.renders[this._renderType]._fun(this,ctx,x+this._x,y+this._y);this._repaint=0;}
__proto.drawToCanvas=function(canvasWidth,canvasHeight,offsetX,offsetY){return RunDriver.drawToCanvas(this,this._renderType,canvasWidth,canvasHeight,offsetX,offsetY);}
__proto.drawToTexture=function(canvasWidth,canvasHeight,offsetX,offsetY){return RunDriver.drawToTexture(this,this._renderType,canvasWidth,canvasHeight,offsetX,offsetY);}
__proto.customRender=function(context,x,y){this._repaint=0x03;}
__proto._applyFilters=function(){}
__proto._setColorFilter=function(value){}
__proto._isHaveGlowFilter=function(){var i=0,len=0;if(this.filters){for(i=0;i<this.filters.length;i++){if(this.filters[i].type==0x08){return true;}}}
for(i=0,len=this._children.length;i<len;i++){if(this._children[i]._isHaveGlowFilter()){return true;}}
return false;}
__proto.localToGlobal=function(point,createNewPoint,globalNode){(createNewPoint===void 0)&&(createNewPoint=false);if(createNewPoint===true){point=new Point(point.x,point.y);};var ele=this;globalNode=globalNode||Laya.stage;while(ele&&!ele.destroyed){if(ele==globalNode)break;point=ele.toParentPoint(point);ele=ele.parent;}
return point;}
__proto.globalToLocal=function(point,createNewPoint,globalNode){(createNewPoint===void 0)&&(createNewPoint=false);if(createNewPoint){point=new Point(point.x,point.y);};var ele=this;var list=[];globalNode=globalNode||Laya.stage;while(ele&&!ele.destroyed){if(ele==globalNode)break;list.push(ele);ele=ele.parent;};var i=list.length-1;while(i>=0){ele=list[i];point=ele.fromParentPoint(point);i--;}
return point;}
__proto.toParentPoint=function(point){if(!point)return point;point.x-=this.pivotX;point.y-=this.pivotY;if(this.transform){this._transform.transformPoint(point);}
point.x+=this._x;point.y+=this._y;var scroll=this._style.scrollRect;if(scroll){point.x-=scroll.x;point.y-=scroll.y;}
return point;}
__proto.fromParentPoint=function(point){if(!point)return point;point.x-=this._x;point.y-=this._y;var scroll=this._style.scrollRect;if(scroll){point.x+=scroll.x;point.y+=scroll.y;}
if(this.transform){this._transform.invertTransformPoint(point);}
point.x+=this.pivotX;point.y+=this.pivotY;return point;}
__proto.fromStagePoint=function(point){return point;}
__proto.on=function(type,caller,listener,args){if(this._mouseState!==1&&this.isMouseEvent(type)){this.mouseEnabled=true;this._setBit(0x40,true);if(this._parent){this._$2__onDisplay();}
return this._createListener(type,caller,listener,args,false);}
return _super.prototype.on.call(this,type,caller,listener,args);}
__proto.once=function(type,caller,listener,args){if(this._mouseState!==1&&this.isMouseEvent(type)){this.mouseEnabled=true;this._setBit(0x40,true);if(this._parent){this._$2__onDisplay();}
return this._createListener(type,caller,listener,args,true);}
return _super.prototype.once.call(this,type,caller,listener,args);}
__proto._$2__onDisplay=function(){if(this._mouseState!==1){var ele=this;ele=ele.parent;while(ele&&ele._mouseState!==1){if(ele._getBit(0x40))break;ele.mouseEnabled=true;ele._setBit(0x40,true);ele=ele.parent;}}}
__proto._setParent=function(value){_super.prototype._setParent.call(this,value);if(value&&this._getBit(0x40)){this._$2__onDisplay();}}
__proto.loadImage=function(url,complete){var _$this=this;if(url==null){this.texture=null;loaded();}else{var tex=Loader.getRes(url);if(!tex){tex=new Texture();tex.load(url);Loader.cacheRes(url,tex);}
this.texture=tex;if(!tex.getIsReady())tex.once("ready",null,loaded);else loaded();}
function loaded(){_$this.repaint(0x03);complete&&complete.run();}
return this;}
__proto.repaint=function(type){(type===void 0)&&(type=0x02);if(!(this._repaint&type)){this._repaint|=type;this.parentRepaint(type);}
if(this._cacheStyle&&this._cacheStyle.maskParent){this._cacheStyle.maskParent.repaint(type);}}
__proto._needRepaint=function(){return(this._repaint&0x02)&&this._cacheStyle.enableCanvasRender&&this._cacheStyle.reCache;}
__proto._childChanged=function(child){if(this._children.length)this._renderType|=0x2000;else this._renderType&=~0x2000;this._setRenderType(this._renderType);if(child&&this._getBit(0x20))Laya.systemTimer.callLater(this,this.updateZOrder);this.repaint(0x03);}
__proto.parentRepaint=function(type){(type===void 0)&&(type=0x02);var p=this._parent;if(p&&!(p._repaint&type)){p._repaint|=type;p.parentRepaint(type);}}
__proto._setMask=function(value){}
__proto.startDrag=function(area,hasInertia,elasticDistance,elasticBackTime,data,disableMouseEvent,ratio){(hasInertia===void 0)&&(hasInertia=false);(elasticDistance===void 0)&&(elasticDistance=0);(elasticBackTime===void 0)&&(elasticBackTime=300);(disableMouseEvent===void 0)&&(disableMouseEvent=false);(ratio===void 0)&&(ratio=0.92);this._style.dragging||(this.getStyle().dragging=new Dragging());this._style.dragging.start(this,area,hasInertia,elasticDistance,elasticBackTime,data,disableMouseEvent,ratio);}
__proto.stopDrag=function(){this._style.dragging&&this._style.dragging.stop();}
__proto._setDisplay=function(value){if(!value){if(this._cacheStyle){this._cacheStyle.releaseContext();this._cacheStyle.releaseFilterCache();if(this._cacheStyle.hasGlowFilter){this._cacheStyle.hasGlowFilter=false;}}}
_super.prototype._setDisplay.call(this,value);}
__proto.hitTestPoint=function(x,y){var point=this.globalToLocal(Point.TEMP.setTo(x,y));x=point.x;y=point.y;var rect=this._style.hitArea?this._style.hitArea:(this._width>0&&this._height>0)?Rectangle.TEMP.setTo(0,0,this._width,this._height):this.getSelfBounds();return rect.contains(x,y);}
__proto.getMousePoint=function(){return this.globalToLocal(Point.TEMP.setTo(Laya.stage.mouseX,Laya.stage.mouseY));}
__proto._setTexture=function(value){}
__proto._setRenderType=function(type){}
__proto._setTranformChange=function(){this._tfChanged=true;this._renderType|=0x02;this.parentRepaint(0x02);}
__proto._setBgStyleColor=function(x,y,width,height,fillColor){}
__proto._setBorderStyleColor=function(x,y,width,height,fillColor,borderWidth){}
__proto.captureMouseEvent=function(exclusive){MouseManager.instance.setCapture(this,exclusive);}
__proto.releaseMouseEvent=function(){MouseManager.instance.releaseCapture();}
__getset(0,__proto,'customRenderEnable',null,function(b){if(b){this._renderType|=0x800;this._setRenderType(this._renderType);this._setCustomRender();}});__getset(0,__proto,'cacheAs',function(){return this._cacheStyle.cacheAs;},function(value){if(value===this._cacheStyle.userSetCache)return;if(this.mask&&value==='normal')return;this._setCacheAs(value);this._getCacheStyle().userSetCache=value;this._checkCanvasEnable();this.repaint();});__getset(0,__proto,'globalScaleY',function(){var scale=1;var ele=this;while(ele){if(ele===Laya.stage)break;scale*=ele.scaleY;ele=ele.parent;}
return scale;});__getset(0,__proto,'hitArea',function(){return this._style.hitArea;},function(value){this.getStyle().hitArea=value;});__getset(0,__proto,'staticCache',function(){return this._cacheStyle.staticCache;},function(value){this._getCacheStyle().staticCache=value;if(!value)this.reCache();});__getset(0,__proto,'displayWidth',function(){return this.width*this.scaleX;});__getset(0,__proto,'zOrder',function(){return this._zOrder;},function(value){if(this._zOrder!=value){this._zOrder=value;if(this._parent){value&&this._parent._setBit(0x20,true);Laya.systemTimer.callLater(this._parent,this.updateZOrder);}}});__getset(0,__proto,'rotation',function(){return this._style.rotation;},function(value){var style=this.getStyle();if(style.rotation!==value){this._setRotation(value);this._setTranformChange();}});__getset(0,__proto,'width',function(){if(!this.autoSize)return this._width||(this.texture?this.texture.width:0);if(this.texture)return this.texture.width;if(!this._graphics&&this._children.length===0)return 0;return this.getSelfBounds().width;},function(value){if(this._width!==value){this._width=value;this._setWidth(this.texture,value);this._setTranformChange();}});__getset(0,__proto,'x',function(){return this._x;},function(value){if(this.destroyed)return;if(this._x!==value){this._setX(value);this.parentRepaint(0x02);var p=this._cacheStyle.maskParent;if(p){p.repaint(0x02);}}});__getset(0,__proto,'drawCallOptimize',function(){return this._getBit(0x100);},function(value){this._setBit(0x100,value);});__getset(0,__proto,'texture',function(){return this._texture;},function(value){if((typeof value=='string')){this.loadImage(value);}else if(this._texture!=value){this._texture&&this._texture._removeReference();this._texture=value;value&&value._addReference();this._setTexture(value);this._setWidth(this._texture,this.width);this._setHeight(this._texture,this.height);if(value)this._renderType|=0x100;else this._renderType&=~0x100;this._setRenderType(this._renderType);this.repaint();}});__getset(0,__proto,'globalRotation',function(){var angle=0;var ele=this;while(ele){if(ele===Laya.stage)break;angle+=ele.rotation;ele=ele.parent;}
return angle;});__getset(0,__proto,'y',function(){return this._y;},function(value){if(this.destroyed)return;if(this._y!==value){this._setY(value);this.parentRepaint(0x02);var p=this._cacheStyle.maskParent;if(p){p.repaint(0x02);}}});__getset(0,__proto,'displayHeight',function(){return this.height*this.scaleY;});__getset(0,__proto,'height',function(){if(!this.autoSize)return this._height||(this.texture?this.texture.height:0);if(this.texture)return this.texture.height;if(!this._graphics&&this._children.length===0)return 0;return this.getSelfBounds().height;},function(value){if(this._height!==value){this._height=value;this._setHeight(this.texture,value);this._setTranformChange();}});__getset(0,__proto,'blendMode',function(){return this._style.blendMode;},function(value){this._setBlendMode(value);this.getStyle().blendMode=value;if(value&&value!="source-over")this._renderType|=0x04;else this._renderType&=~0x04;this._setRenderType(this._renderType);this.parentRepaint();});__getset(0,__proto,'scaleX',function(){return this._style.scaleX;},function(value){var style=this.getStyle();if(style.scaleX!==value){this._setScaleX(value);this._setTranformChange();}});__getset(0,__proto,'scaleY',function(){return this._style.scaleY;},function(value){var style=this.getStyle();if(style.scaleY!==value){this._setScaleY(value);this._setTranformChange();}});__getset(0,__proto,'stage',function(){return Laya.stage;});__getset(0,__proto,'skewX',function(){return this._style.skewX;},function(value){var style=this.getStyle();if(style.skewX!==value){this._setSkewX(value);this._setTranformChange();}});__getset(0,__proto,'scrollRect',function(){return this._style.scrollRect;},function(value){this.getStyle().scrollRect=value;this._setScrollRect(value);this.repaint();if(value){this._renderType|=0x40;}else{this._renderType&=~0x40;}
this._setRenderType(this._renderType);});__getset(0,__proto,'skewY',function(){return this._style.skewY;},function(value){var style=this.getStyle();if(style.skewY!==value){this._setSkewY(value);this._setTranformChange();}});__getset(0,__proto,'transform',function(){return this._tfChanged?this._adjustTransform():this._transform;},function(value){this._tfChanged=false;var m=this._transform||(this._transform=this._createTransform());value.copyTo(m);this._setTransform(m);if(value){this._x=m.tx;this._y=m.ty;m.tx=m.ty=0;}
if(value)this._renderType|=0x02;else{this._renderType&=~0x02;}
this._setRenderType(this._renderType);this.parentRepaint();});__getset(0,__proto,'pivotX',function(){return this._getPivotX();},function(value){this._setPivotX(value);this.repaint();});__getset(0,__proto,'pivotY',function(){return this._getPivotY();},function(value){this._setPivotY(value);this.repaint();});__getset(0,__proto,'alpha',function(){return this._getAlpha();},function(value){value=value<0?0:(value>1?1:value);this._setAlpha(value);});__getset(0,__proto,'visible',function(){return this._visible;},function(value){if(this._visible!==value){this._visible=value;this.parentRepaint(0x03);}});__getset(0,__proto,'graphics',function(){if(!this._graphics){this.graphics=new Graphics();this._graphics.autoDestroy=true;}
return this._graphics;},function(value){if(this._graphics)this._graphics._sp=null;this._graphics=value;if(value){this._setGraphics(value);this._renderType|=0x200;value._sp=this;}else{this._renderType&=~0x200;}
this._setRenderType(this._renderType);this.repaint();});__getset(0,__proto,'filters',function(){return this._cacheStyle.filters;},function(value){value&&value.length===0&&(value=null);if(this._cacheStyle.filters==value)return;this._getCacheStyle().filters=value?value.slice():null;if(value&&value.length){this._setColorFilter(value[0]);this._renderType|=0x10;}else{this._setColorFilter(null);this._renderType&=~0x10;}
this._setRenderType(this._renderType);if(value&&value.length>0){if(!this._getBit(0x10))this._setBitUp(0x10);if(!(value.length==1&&(((value[0])instanceof laya.filters.ColorFilter)))){this._getCacheStyle().cacheForFilters=true;this._checkCanvasEnable();}}else{if(this._cacheStyle.cacheForFilters){this._cacheStyle.cacheForFilters=false;this._checkCanvasEnable();}}
this._getCacheStyle().hasGlowFilter=this._isHaveGlowFilter();this.repaint();});__getset(0,__proto,'mask',function(){return this._cacheStyle.mask;},function(value){if(value&&this.mask&&this.mask._cacheStyle.maskParent)return;this._getCacheStyle().mask=value;this._setMask(value);this._checkCanvasEnable();if(value){value._getCacheStyle().maskParent=this;}else{if(this.mask){this.mask._getCacheStyle().maskParent=null;}}
this._renderType|=0x20;this._setRenderType(this._renderType);this.parentRepaint(0x03);});__getset(0,__proto,'mouseEnabled',function(){return this._mouseState>1;},function(value){this._mouseState=value?2:1;});__getset(0,__proto,'globalScaleX',function(){var scale=1;var ele=this;while(ele){if(ele===Laya.stage)break;scale*=ele.scaleX;ele=ele.parent;}
return scale;});__getset(0,__proto,'mouseX',function(){return this.getMousePoint().x;});__getset(0,__proto,'mouseY',function(){return this.getMousePoint().y;});__getset(0,__proto,'viewport',function(){return this._style.viewport;},function(value){if((typeof value=='string')){var recArr;recArr=(value).split(",");if(recArr.length>3){value=new Rectangle(parseFloat(recArr[0]),parseFloat(recArr[1]),parseFloat(recArr[2]),parseFloat(recArr[3]));}}
this.getStyle().viewport=value;});Sprite.fromImage=function(url){return new Sprite().loadImage(url);}
return Sprite;})(Node)
var BaseShader=(function(_super){function BaseShader(){BaseShader.__super.call(this);}
__class(BaseShader,'laya.webgl.shader.BaseShader',_super);BaseShader.activeShader=null;BaseShader.bindShader=null;return BaseShader;})(Resource)
var Bitmap=(function(_super){function Bitmap(){Bitmap.__super.call(this);this._width=-1;this._height=-1;}
__class(Bitmap,'laya.resource.Bitmap',_super);var __proto=Bitmap.prototype;__proto._getSource=function(){throw"Bitmap: must override it.";}
__getset(0,__proto,'width',function(){return this._width;});__getset(0,__proto,'height',function(){return this._height;});return Bitmap;})(Resource)
var TextTexture=(function(_super){function TextTexture(textureW,textureH){this._source=null;this._texW=0;this._texH=0;this.__destroyed=false;this._discardTm=0;this.genID=0;this.bitmap={id:0,_glTexture:null};this.curUsedCovRate=0;this.curUsedCovRateAtlas=0;this.lastTouchTm=0;this.ri=null;TextTexture.__super.call(this);this._texW=textureW||TextRender.atlasWidth;this._texH=textureH||TextRender.atlasWidth;this.bitmap.id=this.id;this.lock=true;}
__class(TextTexture,'laya.webgl.text.TextTexture',_super);var __proto=TextTexture.prototype;__proto.recreateResource=function(){if(this._source)
return;var gl=Render.isConchApp?LayaGL.instance.getDefaultCommandEncoder():WebGL.mainContext;var glTex=this._source=gl.createTexture();this.bitmap._glTexture=glTex;WebGLContext.bindTexture(gl,0x0DE1,glTex);gl.texImage2D(0x0DE1,0,0x1908,this._texW,this._texH,0,0x1908,0x1401,null);gl.texParameteri(0x0DE1,0x2801,0x2601);gl.texParameteri(0x0DE1,0x2800,0x2601);gl.texParameteri(0x0DE1,0x2802,0x812F);gl.texParameteri(0x0DE1,0x2803,0x812F);if(TextRender.debugUV){this.fillWhite();}}
__proto.addChar=function(data,x,y,uv){if(TextRender.isWan1Wan){return this.addCharCanvas(data,x,y,uv);}!this._source&&this.recreateResource();var gl=Render.isConchApp?LayaGL.instance.getDefaultCommandEncoder():WebGL.mainContext;WebGLContext.bindTexture(gl,0x0DE1,this._source);!Render.isConchApp&&gl.pixelStorei(0x9241,true);var dt=data.data;if(data.data instanceof Uint8ClampedArray)
dt=new Uint8Array(dt.buffer);gl.texSubImage2D(0x0DE1,0,x,y,data.width,data.height,0x1908,0x1401,dt);!Render.isConchApp&&gl.pixelStorei(0x9241,false);var u0=NaN;var v0=NaN;var u1=NaN;var v1=NaN;if(Render.isConchApp){u0=x/this._texW;v0=y/this._texH;u1=(x+data.width)/this._texW;v1=(y+data.height)/this._texH;}else{u0=(x+1)/this._texW;v0=(y)/this._texH;u1=(x+data.width-1)/this._texW;v1=(y+data.height-1)/this._texH;}
uv=uv||new Array(8);uv[0]=u0,uv[1]=v0;uv[2]=u1,uv[3]=v0;uv[4]=u1,uv[5]=v1;uv[6]=u0,uv[7]=v1;return uv;}
__proto.addCharCanvas=function(canv,x,y,uv){!this._source&&this.recreateResource();var gl=Render.isConchApp?LayaGL.instance.getDefaultCommandEncoder():WebGL.mainContext;WebGLContext.bindTexture(gl,0x0DE1,this._source);!Render.isConchApp&&gl.pixelStorei(0x9241,true);gl.texSubImage2D(0x0DE1,0,x,y,0x1908,0x1401,canv);!Render.isConchApp&&gl.pixelStorei(0x9241,false);var u0=NaN;var v0=NaN;var u1=NaN;var v1=NaN;if(Render.isConchApp){u0=x/this._texW;v0=y/this._texH;u1=(x+canv.width)/this._texW;v1=(y+canv.height)/this._texH;}else{u0=(x+1)/this._texW;v0=(y+1)/this._texH;u1=(x+canv.width-1)/this._texW;v1=(y+canv.height-1)/this._texH;}
uv=uv||new Array(8);uv[0]=u0,uv[1]=v0;uv[2]=u1,uv[3]=v0;uv[4]=u1,uv[5]=v1;uv[6]=u0,uv[7]=v1;return uv;}
__proto.fillWhite=function(){!this._source&&this.recreateResource();var gl=Render.isConchApp?LayaGL.instance.getDefaultCommandEncoder():WebGL.mainContext;var dt=new Uint8Array(this._texW*this._texH*4);(dt).fill(0xff);gl.texSubImage2D(0x0DE1,0,0,0,this._texW,this._texH,0x1908,0x1401,dt);}
__proto.discard=function(){if(this._texW!=TextRender.atlasWidth||this._texH!=TextRender.atlasWidth){this.destroy();return;}
this.genID++;if(TextTexture.poolLen>=TextTexture.pool.length){TextTexture.pool=TextTexture.pool.concat(new Array(10));}
this._discardTm=Laya.stage.getFrameTm();TextTexture.pool[TextTexture.poolLen++]=this;}
__proto.destroy=function(){this.__destroyed=true;var gl=Render.isConchApp?LayaGL.instance.getDefaultCommandEncoder():WebGL.mainContext;this._source&&gl.deleteTexture(this._source);this._source=null;}
__proto.touchRect=function(ri,curloop){if(this.lastTouchTm!=curloop){this.curUsedCovRate=0;this.curUsedCovRateAtlas=0;this.lastTouchTm=curloop;};var texw2=TextRender.atlasWidth*TextRender.atlasWidth;var gridw2=TextAtlas.atlasGridW*TextAtlas.atlasGridW;this.curUsedCovRate+=(ri.bmpWidth*ri.bmpHeight)/texw2;this.curUsedCovRateAtlas+=(Math.ceil(ri.bmpWidth/TextAtlas.atlasGridW)*Math.ceil(ri.bmpHeight/TextAtlas.atlasGridW))/(texw2/gridw2);}
__proto._getSource=function(){return this._source;}
__proto.drawOnScreen=function(x,y){}
__getset(0,__proto,'texture',function(){return this;});TextTexture.getTextTexture=function(w,h){if(w!=TextRender.atlasWidth||w!=TextRender.atlasWidth)
return new TextTexture(w,h);if(TextTexture.poolLen>0){var ret=TextTexture.pool[--TextTexture.poolLen];if(TextTexture.poolLen>0)
TextTexture.clean();return ret;}
return new TextTexture(w,h);}
TextTexture.clean=function(){var curtm=Laya.stage.getFrameTm();if(TextTexture.cleanTm===0)TextTexture.cleanTm=curtm;if(curtm-TextTexture.cleanTm>=TextRender.checkCleanTextureDt){for(var i=0;i<TextTexture.poolLen;i++){var p=TextTexture.pool[i];if(curtm-p._discardTm>=TextRender.destroyUnusedTextureDt){p.destroy();TextTexture.pool[i]=TextTexture.pool[TextTexture.poolLen-1];TextTexture.poolLen--;i--;}}
TextTexture.cleanTm=curtm;}}
TextTexture.poolLen=0;TextTexture.cleanTm=0;__static(TextTexture,['pool',function(){return this.pool=new Array(10);}]);return TextTexture;})(Resource)
var IndexBuffer2D=(function(_super){function IndexBuffer2D(bufferUsage){this._uint16Array=null;(bufferUsage===void 0)&&(bufferUsage=0x88e4);IndexBuffer2D.__super.call(this);this._bufferUsage=bufferUsage;this._bufferType=0x8893;this._buffer=new ArrayBuffer(8);}
__class(IndexBuffer2D,'laya.webgl.utils.IndexBuffer2D',_super);var __proto=IndexBuffer2D.prototype;__proto._checkArrayUse=function(){this._uint16Array&&(this._uint16Array=new Uint16Array(this._buffer));}
__proto.getUint16Array=function(){return this._uint16Array||(this._uint16Array=new Uint16Array(this._buffer));}
__proto._bindForVAO=function(){LayaGL.instance.bindBuffer(0x8893,this._glBuffer);}
__proto.bind=function(){if(Buffer._bindedIndexBuffer!==this._glBuffer){LayaGL.instance.bindBuffer(0x8893,this._glBuffer);Buffer._bindedIndexBuffer=this._glBuffer;return true;}
return false;}
__proto.destory=function(){this._uint16Array=null;this._buffer=null;}
__proto.disposeResource=function(){this._disposeResource();}
IndexBuffer2D.create=function(bufferUsage){(bufferUsage===void 0)&&(bufferUsage=0x88e4);return new IndexBuffer2D(bufferUsage);}
return IndexBuffer2D;})(Buffer2D)
var WebAudioSoundChannel=(function(_super){function WebAudioSoundChannel(){this.audioBuffer=null;this.gain=null;this.bufferSource=null;this._currentTime=0;this._volume=1;this._startTime=0;this._pauseTime=0;this._onPlayEnd=null;this.context=WebAudioSound.ctx;WebAudioSoundChannel.__super.call(this);this._onPlayEnd=Utils.bind(this.__onPlayEnd,this);if(this.context["createGain"]){this.gain=this.context["createGain"]();}else{this.gain=this.context["createGainNode"]();}}
__class(WebAudioSoundChannel,'laya.media.webaudio.WebAudioSoundChannel',_super);var __proto=WebAudioSoundChannel.prototype;__proto.play=function(){SoundManager.addChannel(this);this.isStopped=false;this._clearBufferSource();if(!this.audioBuffer)return;if(this.startTime>=this.duration)return this.stop();var context=this.context;var gain=this.gain;var bufferSource=context.createBufferSource();this.bufferSource=bufferSource;bufferSource.buffer=this.audioBuffer;bufferSource.connect(gain);if(gain)
gain.disconnect();gain.connect(context.destination);bufferSource.onended=this._onPlayEnd;this._startTime=Browser.now();if(this.gain.gain.setTargetAtTime){this.gain.gain.setTargetAtTime(this._volume,this.context.currentTime,0.001);}else
this.gain.gain.value=this._volume;if(this.loops==0){bufferSource.loop=true;}
if(bufferSource.playbackRate.setTargetAtTime){bufferSource.playbackRate.setTargetAtTime(SoundManager.playbackRate,this.context.currentTime,0.001)}else
bufferSource.playbackRate.value=SoundManager.playbackRate;bufferSource.start(0,this.startTime);this._currentTime=0;}
__proto.__onPlayEnd=function(){if(this.loops==1){if(this.completeHandler){Laya.timer.once(10,this,this.__runComplete,[this.completeHandler],false);this.completeHandler=null;}
this.stop();this.event("complete");return;}
if(this.loops>0){this.loops--;}
this.startTime=0;this.play();}
__proto._clearBufferSource=function(){if(this.bufferSource){var sourceNode=this.bufferSource;if(sourceNode.stop){sourceNode.stop(0);}else{sourceNode.noteOff(0);}
sourceNode.disconnect(0);sourceNode.onended=null;if(!WebAudioSoundChannel._tryCleanFailed)this._tryClearBuffer(sourceNode);this.bufferSource=null;}}
__proto._tryClearBuffer=function(sourceNode){if(!Browser.onMac){try{sourceNode.buffer=null;}catch(e){WebAudioSoundChannel._tryCleanFailed=true;}
return;}
try{sourceNode.buffer=WebAudioSound._miniBuffer;}catch(e){WebAudioSoundChannel._tryCleanFailed=true;}}
__proto.stop=function(){_super.prototype.stop.call(this);this._clearBufferSource();this.audioBuffer=null;if(this.gain)
this.gain.disconnect();this.isStopped=true;SoundManager.removeChannel(this);this.completeHandler=null;if(SoundManager.autoReleaseSound)
SoundManager.disposeSoundLater(this.url);}
__proto.pause=function(){if(!this.isStopped){this._pauseTime=this.position;}
this._clearBufferSource();if(this.gain)
this.gain.disconnect();this.isStopped=true;SoundManager.removeChannel(this);if(SoundManager.autoReleaseSound)
SoundManager.disposeSoundLater(this.url);}
__proto.resume=function(){this.startTime=this._pauseTime;this.play();}
__getset(0,__proto,'position',function(){if(this.bufferSource){return(Browser.now()-this._startTime)/1000+this.startTime;}
return 0;});__getset(0,__proto,'duration',function(){if(this.audioBuffer){return this.audioBuffer.duration;}
return 0;});__getset(0,__proto,'volume',function(){return this._volume;},function(v){this._volume=v;if(this.isStopped){return;}
if(this.gain.gain.setTargetAtTime){this.gain.gain.setTargetAtTime(v,this.context.currentTime,0.001);}else
this.gain.gain.value=v;});WebAudioSoundChannel._tryCleanFailed=false;WebAudioSoundChannel.SetTargetDelay=0.001;return WebAudioSoundChannel;})(SoundChannel)
var AudioSoundChannel=(function(_super){function AudioSoundChannel(audio){this._audio=null;this._onEnd=null;this._resumePlay=null;AudioSoundChannel.__super.call(this);this._onEnd=Utils.bind(this.__onEnd,this);this._resumePlay=Utils.bind(this.__resumePlay,this);audio.addEventListener("ended",this._onEnd);this._audio=audio;}
__class(AudioSoundChannel,'laya.media.h5audio.AudioSoundChannel',_super);var __proto=AudioSoundChannel.prototype;__proto.__onEnd=function(){if(this.loops==1){if(this.completeHandler){Laya.systemTimer.once(10,this,this.__runComplete,[this.completeHandler],false);this.completeHandler=null;}
this.stop();this.event("complete");return;}
if(this.loops>0){this.loops--;}
this.startTime=0;this.play();}
__proto.__resumePlay=function(){if(this._audio)this._audio.removeEventListener("canplay",this._resumePlay);if(this.isStopped)return;try{this._audio.currentTime=this.startTime;Browser.container.appendChild(this._audio);this._audio.play();}catch(e){this.event("error");}}
__proto.play=function(){this.isStopped=false;try{this._audio.playbackRate=SoundManager.playbackRate;this._audio.currentTime=this.startTime;}catch(e){this._audio.addEventListener("canplay",this._resumePlay);return;}
SoundManager.addChannel(this);Browser.container.appendChild(this._audio);if("play"in this._audio)
this._audio.play();}
__proto.stop=function(){_super.prototype.stop.call(this);this.isStopped=true;SoundManager.removeChannel(this);this.completeHandler=null;if(!this._audio)
return;if("pause"in this._audio)
if(Render.isConchApp){this._audio.stop();}
this._audio.pause();this._audio.removeEventListener("ended",this._onEnd);this._audio.removeEventListener("canplay",this._resumePlay);if(!Browser.onIE){if(this._audio!=AudioSound._musicAudio){Pool.recover("audio:"+this.url,this._audio);}}
Browser.removeElement(this._audio);this._audio=null;}
__proto.pause=function(){this.isStopped=true;SoundManager.removeChannel(this);if("pause"in this._audio)
this._audio.pause();}
__proto.resume=function(){if(!this._audio)
return;this.isStopped=false;SoundManager.addChannel(this);if("play"in this._audio)
this._audio.play();}
__getset(0,__proto,'position',function(){if(!this._audio)
return 0;return this._audio.currentTime;});__getset(0,__proto,'duration',function(){if(!this._audio)
return 0;return this._audio.duration;});__getset(0,__proto,'volume',function(){if(!this._audio)return 1;return this._audio.volume;},function(v){if(!this._audio)return;this._audio.volume=v;});return AudioSoundChannel;})(SoundChannel)
var VertexBuffer2D=(function(_super){function VertexBuffer2D(vertexStride,bufferUsage){this._floatArray32=null;this._uint32Array=null;this._vertexStride=0;VertexBuffer2D.__super.call(this);this._vertexStride=vertexStride;this._bufferUsage=bufferUsage;this._bufferType=0x8892;this._buffer=new ArrayBuffer(8);this._floatArray32=new Float32Array(this._buffer);this._uint32Array=new Uint32Array(this._buffer);}
__class(VertexBuffer2D,'laya.webgl.utils.VertexBuffer2D',_super);var __proto=VertexBuffer2D.prototype;__proto.getFloat32Array=function(){return this._floatArray32;}
__proto.appendArray=function(data){var oldoff=this._byteLength>>2;this.setByteLength(this._byteLength+data.length*4);var vbdata=this.getFloat32Array();vbdata.set(data,oldoff);this._upload=true;}
__proto._checkArrayUse=function(){this._floatArray32&&(this._floatArray32=new Float32Array(this._buffer));this._uint32Array&&(this._uint32Array=new Uint32Array(this._buffer));}
__proto.deleteBuffer=function(){this._disposeResource();}
__proto._bindForVAO=function(){LayaGL.instance.bindBuffer(0x8892,this._glBuffer);}
__proto.bind=function(){if(Buffer._bindedVertexBuffer!==this._glBuffer){LayaGL.instance.bindBuffer(0x8892,this._glBuffer);Buffer._bindedVertexBuffer=this._glBuffer;return true;}
return false;}
__proto.destroy=function(){laya.webgl.utils.Buffer.prototype.destroy.call(this);this._byteLength=0;this._upload=true;this._buffer=null;this._floatArray32=null;}
__getset(0,__proto,'vertexStride',function(){return this._vertexStride;});VertexBuffer2D.create=function(vertexStride,bufferUsage){(bufferUsage===void 0)&&(bufferUsage=0x88e8);return new VertexBuffer2D(vertexStride,bufferUsage);}
return VertexBuffer2D;})(Buffer2D)
var Text=(function(_super){function Text(){this._clipPoint=null;this._text=null;this._isChanged=false;this._textWidth=0;this._textHeight=0;this._lines=[];this._lineWidths=[];this._startX=0;this._startY=0;this._words=null;this._charSize={};this._valign="top";this._color="#000000";this._singleCharRender=false;Text.__super.call(this);this._fontSize=Text.defaultFontSize;this._font=Text.defaultFont;this.overflow="visible";this._style=TextStyle.EMPTY;}
__class(Text,'laya.display.Text',_super);var __proto=Text.prototype;__proto.getStyle=function(){this._style===TextStyle.EMPTY&&(this._style=TextStyle.create());return this._style;}
__proto._getTextStyle=function(){if(this._style===TextStyle.EMPTY){this._style=TextStyle.create();}
return this._style;}
__proto.destroy=function(destroyChild){(destroyChild===void 0)&&(destroyChild=true);_super.prototype.destroy.call(this,destroyChild);this._clipPoint=null;this._lines=null;this._lineWidths=null;this._words&&this._words.forEach(function(w){w.cleanCache();});this._words=null;this._charSize=null;}
__proto._getBoundPointsM=function(ifRotate){(ifRotate===void 0)&&(ifRotate=false);var rec=Rectangle.TEMP;rec.setTo(0,0,this.width,this.height);return rec._getBoundPoints();}
__proto.getGraphicBounds=function(realSize){(realSize===void 0)&&(realSize=false);var rec=Rectangle.TEMP;rec.setTo(0,0,this.width,this.height);return rec;}
__proto._getCSSStyle=function(){return this._style;}
__proto.lang=function(text,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){text=Text.langPacks&&Text.langPacks[text]?Text.langPacks[text]:text;if(arguments.length<2){this._text=text;}else{for(var i=0,n=arguments.length;i<n;i++){text=text.replace("{"+i+"}",arguments[i+1]);}
this._text=text;}}
__proto._getContextFont=function(){return(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(Browser.onIPhone?(laya.display.Text.fontFamilyMap[this.font]||this.font):this.font);}
__proto._isPassWordMode=function(){var style=this._style;var password=style.asPassword;if(("prompt"in this)&&this['prompt']==this._text)
password=false;return password;}
__proto._getPassWordTxt=function(txt){var len=txt.length;var word;word="";for(var j=len;j>0;j--){word+="●";}
return word;}
__proto._renderText=function(){var padding=this.padding;var visibleLineCount=this._lines.length;if(this.overflow!="visible"){visibleLineCount=Math.min(visibleLineCount,Math.floor((this.height-padding[0]-padding[2])/(this.leading+this._charSize.height))+1);};var beginLine=this.scrollY/(this._charSize.height+this.leading)|0;var graphics=this.graphics;graphics.clear(true);var ctxFont=this._getContextFont();Browser.context.font=ctxFont;var startX=padding[3];var textAlgin="left";var lines=this._lines;var lineHeight=this.leading+this._charSize.height;var tCurrBitmapFont=(this._style).currBitmapFont;if(tCurrBitmapFont){lineHeight=this.leading+tCurrBitmapFont.getMaxHeight();};var startY=padding[0];if((!tCurrBitmapFont)&&this._width>0&&this._textWidth<=this._width){if(this.align=="right"){textAlgin="right";startX=this._width-padding[1];}else if(this.align=="center"){textAlgin="center";startX=this._width*0.5+padding[3]-padding[1];}}
if(this._height>0){var tempVAlign=(this._textHeight>this._height)?"top":this.valign;if(tempVAlign==="middle")
startY=(this._height-visibleLineCount*lineHeight)*0.5+padding[0]-padding[2];else if(tempVAlign==="bottom")
startY=this._height-visibleLineCount*lineHeight-padding[2];};var style=this._style;if(tCurrBitmapFont&&tCurrBitmapFont.autoScaleSize){var bitmapScale=tCurrBitmapFont.fontSize/this.fontSize;}
if(this._clipPoint){graphics.save();if(tCurrBitmapFont&&tCurrBitmapFont.autoScaleSize){var tClipWidth=0;var tClipHeight=0;this._width?tClipWidth=(this._width-padding[3]-padding[1]):tClipWidth=this._textWidth;this._height?tClipHeight=(this._height-padding[0]-padding[2]):tClipHeight=this._textHeight;tClipWidth*=bitmapScale;tClipHeight*=bitmapScale;graphics.clipRect(padding[3],padding[0],tClipWidth,tClipHeight);}else{graphics.clipRect(padding[3],padding[0],this._width?(this._width-padding[3]-padding[1]):this._textWidth,this._height?(this._height-padding[0]-padding[2]):this._textHeight);}
this.repaint();};var password=style.asPassword;if(("prompt"in this)&&this['prompt']==this._text)
password=false;var x=0,y=0;var end=Math.min(this._lines.length,visibleLineCount+beginLine)||1;for(var i=beginLine;i<end;i++){var word=lines[i];var _word;if(password){var len=word.length;word="";for(var j=len;j>0;j--){word+="●";}}
if(word==null)word="";x=startX-(this._clipPoint?this._clipPoint.x:0);y=startY+lineHeight*i-(this._clipPoint?this._clipPoint.y:0);this.underline&&this._drawUnderline(textAlgin,x,y,i);if(tCurrBitmapFont){var tWidth=this.width;if(tCurrBitmapFont.autoScaleSize){tWidth=this.width*bitmapScale;}
tCurrBitmapFont._drawText(word,this,x,y,this.align,tWidth);}else{this._words||(this._words=[]);if(this._words.length>(i-beginLine)){_word=this._words[i-beginLine];}else{_word=new WordText();this._words.push(_word);}
_word.setText(word);(_word).splitRender=this._singleCharRender;style.stroke?graphics.fillBorderText(_word,x,y,ctxFont,this.color,style.strokeColor,style.stroke,textAlgin):graphics.fillText(_word,x,y,ctxFont,this.color,textAlgin);}}
if(tCurrBitmapFont&&tCurrBitmapFont.autoScaleSize){var tScale=1/bitmapScale;this.scale(tScale,tScale);}
if(this._clipPoint)graphics.restore();this._startX=startX;this._startY=startY;}
__proto._drawUnderline=function(align,x,y,lineIndex){var lineWidth=this._lineWidths[lineIndex];switch(align){case'center':x-=lineWidth/2;break;case'right':x-=lineWidth;break;case'left':default:break;}
y+=this._charSize.height;this._graphics.drawLine(x,y,x+lineWidth,y,this.underlineColor||this.color,1);}
__proto.typeset=function(){this._isChanged=false;if(!this._text){this._clipPoint=null;this._textWidth=this._textHeight=0;this.graphics.clear(true);return;}
if(Render.isConchApp){window.conchTextCanvas.font=this._getContextFont();;}else{Browser.context.font=this._getContextFont();}
this._lines.length=0;this._lineWidths.length=0;if(this._isPassWordMode()){this._parseLines(this._getPassWordTxt(this._text));}else
this._parseLines(this._text);this._evalTextSize();if(this._checkEnabledViewportOrNot())this._clipPoint||(this._clipPoint=new Point(0,0));else this._clipPoint=null;this._renderText();}
__proto._evalTextSize=function(){var nw=NaN,nh=NaN;nw=Math.max.apply(this,this._lineWidths);if((this._style).currBitmapFont)
nh=this._lines.length*((this._style).currBitmapFont.getMaxHeight()+this.leading)+this.padding[0]+this.padding[2];else
nh=this._lines.length*(this._charSize.height+this.leading)+this.padding[0]+this.padding[2];if(nw!=this._textWidth||nh!=this._textHeight){this._textWidth=nw;this._textHeight=nh;}}
__proto._checkEnabledViewportOrNot=function(){return this.overflow=="scroll"&&((this._width>0&&this._textWidth>this._width)||(this._height>0&&this._textHeight>this._height));}
__proto.changeText=function(text){if(this._text!==text){this.lang(text+"");if(this._graphics&&this._graphics.replaceText(this._text)){}else{this.typeset();}}}
__proto._parseLines=function(text){var needWordWrapOrTruncate=this.wordWrap||this.overflow=="hidden";if(needWordWrapOrTruncate){var wordWrapWidth=this._getWordWrapWidth();};var bitmapFont=(this._style).currBitmapFont;if(bitmapFont){this._charSize.width=bitmapFont.getMaxWidth();this._charSize.height=bitmapFont.getMaxHeight();}else{var measureResult=null;if(Render.isConchApp){measureResult=window.conchTextCanvas.measureText(this._testWord);}else{measureResult=Browser.context.measureText(Text._testWord);}
if(!measureResult)measureResult={width:100};this._charSize.width=measureResult.width;this._charSize.height=(measureResult.height||this.fontSize);};var lines=text.replace(/\r\n/g,"\n").split("\n");for(var i=0,n=lines.length;i<n;i++){var line=lines[i];if(needWordWrapOrTruncate)
this._parseLine(line,wordWrapWidth);else{this._lineWidths.push(this._getTextWidth(line));this._lines.push(line);}}}
__proto._parseLine=function(line,wordWrapWidth){var ctx=Browser.context;var lines=this._lines;var maybeIndex=0;var execResult;var charsWidth=NaN;var wordWidth=NaN;var startIndex=0;charsWidth=this._getTextWidth(line);if(charsWidth<=wordWrapWidth){lines.push(line);this._lineWidths.push(charsWidth);return;}
charsWidth=this._charSize.width;maybeIndex=Math.floor(wordWrapWidth/charsWidth);(maybeIndex==0)&&(maybeIndex=1);charsWidth=this._getTextWidth(line.substring(0,maybeIndex));wordWidth=charsWidth;for(var j=maybeIndex,m=line.length;j<m;j++){charsWidth=this._getTextWidth(line.charAt(j));wordWidth+=charsWidth;if(wordWidth>wordWrapWidth){if(this.wordWrap){var newLine=line.substring(startIndex,j);if(newLine.charCodeAt(newLine.length-1)<255){execResult=/(?:\w|-)+$/.exec(newLine);if(execResult){j=execResult.index+startIndex;if(execResult.index==0)j+=newLine.length;else newLine=line.substring(startIndex,j);}}
lines.push(newLine);this._lineWidths.push(wordWidth-charsWidth);startIndex=j;if(j+maybeIndex<m){j+=maybeIndex;charsWidth=this._getTextWidth(line.substring(startIndex,j));wordWidth=charsWidth;j--;}else{lines.push(line.substring(startIndex,m));this._lineWidths.push(this._getTextWidth(lines[lines.length-1]));startIndex=-1;break;}}else if(this.overflow=="hidden"){lines.push(line.substring(0,j));this._lineWidths.push(this._getTextWidth(lines[lines.length-1]));return;}}}
if(this.wordWrap&&startIndex!=-1){lines.push(line.substring(startIndex,m));this._lineWidths.push(this._getTextWidth(lines[lines.length-1]));}}
__proto._getTextWidth=function(text){var bitmapFont=(this._style).currBitmapFont;if(bitmapFont)return bitmapFont.getTextWidth(text);else{if(Render.isConchApp){return window.conchTextCanvas.measureText(text).width;;}else return Browser.context.measureText(text).width;}}
__proto._getWordWrapWidth=function(){var p=this.padding;var w=NaN;var bitmapFont=(this._style).currBitmapFont;if(bitmapFont&&bitmapFont.autoScaleSize)w=this._width*(bitmapFont.fontSize/this.fontSize);else w=this._width;if(w<=0){w=this.wordWrap?100:Browser.width;}
w<=0&&(w=100);return w-p[3]-p[1];}
__proto.getCharPoint=function(charIndex,out){this._isChanged&&Laya.systemTimer.runCallLater(this,this.typeset);var len=0,lines=this._lines,startIndex=0;for(var i=0,n=lines.length;i<n;i++){len+=lines[i].length;if(charIndex<len){var line=i;break;}
startIndex=len;};var ctxFont=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+this.font;Browser.context.font=ctxFont;var width=this._getTextWidth(this._text.substring(startIndex,charIndex));var point=out||new Point();return point.setTo(this._startX+width-(this._clipPoint?this._clipPoint.x:0),this._startY+line*(this._charSize.height+this.leading)-(this._clipPoint?this._clipPoint.y:0));}
__getset(0,__proto,'width',function(){if(this._width)return this._width;return this.textWidth+this.padding[1]+this.padding[3];},function(value){if(value!=this._width){Laya.superSet(Sprite,this,'width',value);this.isChanged=true;if(this.borderColor){this._setBorderStyleColor(0,0,this.width,this.height,this.borderColor,1);}}});__getset(0,__proto,'textWidth',function(){this._isChanged&&Laya.systemTimer.runCallLater(this,this.typeset);return this._textWidth;});__getset(0,__proto,'height',function(){if(this._height)return this._height;return this.textHeight;},function(value){if(value!=this._height){Laya.superSet(Sprite,this,'height',value);this.isChanged=true;if(this.borderColor){this._setBorderStyleColor(0,0,this.width,this.height,this.borderColor,1);}}});__getset(0,__proto,'textHeight',function(){this._isChanged&&Laya.systemTimer.runCallLater(this,this.typeset);return this._textHeight;});__getset(0,__proto,'padding',function(){return(this._style).padding;},function(value){if((typeof value=='string')){var arr;arr=(value).split(",");var i=0,len=0;len=arr.length;while(arr.length<4){arr.push(0);}
for(i=0;i<len;i++){arr[i]=parseFloat(arr[i])||0;}
value=arr;}
this._getTextStyle().padding=value;this.isChanged=true;});__getset(0,__proto,'bold',function(){return(this._style).bold;},function(value){this._getTextStyle().bold=value;this.isChanged=true;});__getset(0,__proto,'text',function(){return this._text||"";},function(value){if(this._text!==value){this.lang(value+"");this.isChanged=true;this.event("change");if(this.borderColor){this._setBorderStyleColor(0,0,this.width,this.height,this.borderColor,1);}}});__getset(0,__proto,'color',function(){return this._color;},function(value){if(this._color!=value){this._color=value;if(!this._isChanged&&this._graphics){this._graphics.replaceTextColor(this.color)}else{this.isChanged=true;}}});__getset(0,__proto,'font',function(){return this._font;},function(value){if((this._style).currBitmapFont){this._getTextStyle().currBitmapFont=null;this.scale(1,1);}
if(Text._bitmapFonts&&Text._bitmapFonts[value]){this._getTextStyle().currBitmapFont=Text._bitmapFonts[value];}
this._font=value;this.isChanged=true;});__getset(0,__proto,'fontSize',function(){return this._fontSize;},function(value){if(this._fontSize!=value){this._fontSize=value;this.isChanged=true;}});__getset(0,__proto,'italic',function(){return(this._style).italic;},function(value){this._getTextStyle().italic=value;this.isChanged=true;});__getset(0,__proto,'align',function(){return(this._style).align;},function(value){this._getTextStyle().align=value;this.isChanged=true;});__getset(0,__proto,'valign',function(){return this._valign;},function(value){this._valign=value;this.isChanged=true;});__getset(0,__proto,'wordWrap',function(){return(this._style).wordWrap;},function(value){this._getTextStyle().wordWrap=value;this.isChanged=true;});__getset(0,__proto,'singleCharRender',function(){return this._singleCharRender;},function(value){this._singleCharRender=value;});__getset(0,__proto,'leading',function(){return(this._style).leading;},function(value){this._getTextStyle().leading=value;this.isChanged=true;});__getset(0,__proto,'bgColor',function(){return(this._style).bgColor;},function(value){this._getTextStyle().bgColor=value;this._renderType|=0x80;this._setBgStyleColor(0,0,this.width,this.height,value);this._setRenderType(this._renderType);this.isChanged=true;});__getset(0,__proto,'borderColor',function(){return(this._style).borderColor;},function(value){this._getTextStyle().borderColor=value;this._renderType|=0x80;this._setBorderStyleColor(0,0,this.width,this.height,value,1);this._setRenderType(this._renderType);this.isChanged=true;});__getset(0,__proto,'stroke',function(){return(this._style).stroke;},function(value){this._getTextStyle().stroke=value;this.isChanged=true;});__getset(0,__proto,'strokeColor',function(){return(this._style).strokeColor;},function(value){this._getTextStyle().strokeColor=value;this.isChanged=true;});__getset(0,__proto,'isChanged',null,function(value){if(this._isChanged!==value){this._isChanged=value;value&&Laya.systemTimer.callLater(this,this.typeset);}});__getset(0,__proto,'scrollX',function(){if(!this._clipPoint)return 0;return this._clipPoint.x;},function(value){if(this.overflow!="scroll"||(this.textWidth<this._width||!this._clipPoint))return;value=value<this.padding[3]?this.padding[3]:value;var maxScrollX=this._textWidth-this._width;value=value>maxScrollX?maxScrollX:value;this._clipPoint.x=value;this._renderText();});__getset(0,__proto,'scrollY',function(){if(!this._clipPoint)return 0;return this._clipPoint.y;},function(value){if(this.overflow!="scroll"||(this.textHeight<this._height||!this._clipPoint))return;value=value<this.padding[0]?this.padding[0]:value;var maxScrollY=this._textHeight-this._height;value=value>maxScrollY?maxScrollY:value;this._clipPoint.y=value;this._renderText();});__getset(0,__proto,'maxScrollX',function(){return(this.textWidth<this._width)?0:this._textWidth-this._width;});__getset(0,__proto,'maxScrollY',function(){return(this.textHeight<this._height)?0:this._textHeight-this._height;});__getset(0,__proto,'lines',function(){if(this._isChanged)this.typeset();return this._lines;});__getset(0,__proto,'underlineColor',function(){return(this._style).underlineColor;},function(value){this._getTextStyle().underlineColor=value;if(!this._isChanged)this._renderText();});__getset(0,__proto,'underline',function(){return(this._style).underline;},function(value){this._getTextStyle().underline=value;});Text.defaultFontStr=function(){return Text.defaultFontSize+"px "+Text.defaultFont;}
Text.registerBitmapFont=function(name,bitmapFont){Text._bitmapFonts||(Text._bitmapFonts={});Text._bitmapFonts[name]=bitmapFont;}
Text.unregisterBitmapFont=function(name,destroy){(destroy===void 0)&&(destroy=true);if(Text._bitmapFonts&&Text._bitmapFonts[name]){var tBitmapFont=Text._bitmapFonts[name];if(destroy)tBitmapFont.destroy();delete Text._bitmapFonts[name];}}
Text.VISIBLE="visible";Text.SCROLL="scroll";Text.HIDDEN="hidden";Text.defaultFontSize=12;Text.defaultFont="Arial";Text.langPacks=null;Text.isComplexText=false;Text._testWord="游";Text._bitmapFonts=null;Text.CharacterCache=true;Text.RightToLeft=false;__static(Text,['fontFamilyMap',function(){return this.fontFamilyMap={"报隶":"报隶-简","黑体":"黑体-简","楷体":"楷体-简","兰亭黑":"兰亭黑-简","隶变":"隶变-简","凌慧体":"凌慧体-简","翩翩体":"翩翩体-简","苹方":"苹方-简","手札体":"手札体-简","宋体":"宋体-简","娃娃体":"娃娃体-简","魏碑":"魏碑-简","行楷":"行楷-简","雅痞":"雅痞-简","圆体":"圆体-简"};}]);return Text;})(Sprite)
var AnimationBase=(function(_super){function AnimationBase(){this.loop=false;this.wrapMode=0;this._index=0;this._count=0;this._isPlaying=false;this._labels=null;this._isReverse=false;this._frameRateChanged=false;this._actionName=null;this._controlNode=null;AnimationBase.__super.call(this);this._interval=Config.animationInterval;this._setBitUp(0x10);}
__class(AnimationBase,'laya.display.AnimationBase',_super);var __proto=AnimationBase.prototype;__proto.play=function(start,loop,name){(start===void 0)&&(start=0);(loop===void 0)&&(loop=true);(name===void 0)&&(name="");this._isPlaying=true;this._actionName=name;this.index=((typeof start=='string'))?this._getFrameByLabel(start):start;this.loop=loop;this._isReverse=this.wrapMode===1;if(this.index==0&&this._isReverse){this.index=this.count-1;}
if(this.interval>0)this.timerLoop(this.interval,this,this._frameLoop,null,true,true);}
__proto._getFrameByLabel=function(label){for(var i=0;i<this._count;i++){var item=this._labels[i];if(item&&(item).indexOf(label)>-1)return i;}
return 0;}
__proto._frameLoop=function(){if(this._isReverse){this._index--;if(this._index<0){if(this.loop){if(this.wrapMode==2){this._index=this._count>0?1:0;this._isReverse=false;}else{this._index=this._count-1;}
this.event("complete");}else{this._index=0;this.stop();this.event("complete");return;}}}else{this._index++;if(this._index>=this._count){if(this.loop){if(this.wrapMode==2){this._index=this._count-2>=0?this._count-2:0;this._isReverse=true;}else{this._index=0;}
this.event("complete");}else{this._index--;this.stop();this.event("complete");return;}}}
this.index=this._index;}
__proto._setControlNode=function(node){if(this._controlNode){this._controlNode.off("display",this,this._resumePlay);this._controlNode.off("undisplay",this,this._resumePlay);}
this._controlNode=node;if(node&&node!=this){node.on("display",this,this._resumePlay);node.on("undisplay",this,this._resumePlay);}}
__proto._setDisplay=function(value){_super.prototype._setDisplay.call(this,value);this._resumePlay();}
__proto._resumePlay=function(){if(this._isPlaying){if(this._controlNode.displayedInStage)this.play(this._index,this.loop,this._actionName);else this.clearTimer(this,this._frameLoop);}}
__proto.stop=function(){this._isPlaying=false;this.clearTimer(this,this._frameLoop);}
__proto.addLabel=function(label,index){if(!this._labels)this._labels={};if(!this._labels[index])this._labels[index]=[];this._labels[index].push(label);}
__proto.removeLabel=function(label){if(!label)this._labels=null;else if(this._labels){for(var name in this._labels){this._removeLabelFromList(this._labels[name],label);}}}
__proto._removeLabelFromList=function(list,label){if(!list)return;for(var i=list.length-1;i>=0;i--){if(list[i]==label){list.splice(i,1);}}}
__proto.gotoAndStop=function(position){this.index=((typeof position=='string'))?this._getFrameByLabel(position):position;this.stop();}
__proto._displayToIndex=function(value){}
__proto.clear=function(){this.stop();this._labels=null;return this;}
__getset(0,__proto,'interval',function(){return this._interval;},function(value){if(this._interval!=value){this._frameRateChanged=true;this._interval=value;if(this._isPlaying&&value>0){this.timerLoop(value,this,this._frameLoop,null,true,true);}}});__getset(0,__proto,'isPlaying',function(){return this._isPlaying;});__getset(0,__proto,'index',function(){return this._index;},function(value){this._index=value;this._displayToIndex(value);if(this._labels&&this._labels[value]){var tArr=this._labels[value];for(var i=0,len=tArr.length;i<len;i++){this.event("label",tArr[i]);}}});__getset(0,__proto,'count',function(){return this._count;});AnimationBase.WRAP_POSITIVE=0;AnimationBase.WRAP_REVERSE=1;AnimationBase.WRAP_PINGPONG=2;return AnimationBase;})(Sprite)
var Shader=(function(_super){function Shader(vs,ps,saveName,nameMap,bindAttrib){this._attribInfo=null;this.customCompile=false;this._curActTexIndex=0;this.tag={};this._program=null;this._params=null;this._paramsMap={};Shader.__super.call(this);if((!vs)||(!ps))throw"Shader Error";this._attribInfo=bindAttrib;this._id=++Shader._count;this._vs=vs;this._ps=ps;this._nameMap=nameMap?nameMap:{};saveName!=null&&(Shader.sharders[saveName]=this);this.recreateResource();this.lock=true;}
__class(Shader,'laya.webgl.shader.Shader',_super);var __proto=Shader.prototype;__proto.recreateResource=function(){this._compile();this._setGPUMemory(0);}
__proto._disposeResource=function(){WebGL.mainContext.deleteShader(this._vshader);WebGL.mainContext.deleteShader(this._pshader);WebGL.mainContext.deleteProgram(this._program);this._vshader=this._pshader=this._program=null;this._params=null;this._paramsMap={};this._setGPUMemory(0);this._curActTexIndex=0;}
__proto._compile=function(){if(!this._vs||!this._ps||this._params)
return;this._reCompile=true;this._params=[];var result;if(this.customCompile)
result=ShaderCompile.preGetParams(this._vs,this._ps);var gl=WebGL.mainContext;this._program=gl.createProgram();this._vshader=Shader._createShader(gl,this._vs,0x8B31);this._pshader=Shader._createShader(gl,this._ps,0x8B30);gl.attachShader(this._program,this._vshader);gl.attachShader(this._program,this._pshader);var one,i=0,j=0,n=0,location;var attribDescNum=this._attribInfo?this._attribInfo.length:0;for(i=0;i<attribDescNum;i+=2){gl.bindAttribLocation(this._program,this._attribInfo[i+1],this._attribInfo[i]);}
gl.linkProgram(this._program);if(!this.customCompile&&!gl.getProgramParameter(this._program,0x8B82)){throw gl.getProgramInfoLog(this._program);};var nUniformNum=this.customCompile?result.uniforms.length:gl.getProgramParameter(this._program,0x8B86);for(i=0;i<nUniformNum;i++){var uniform=this.customCompile?result.uniforms[i]:gl.getActiveUniform(this._program,i);location=gl.getUniformLocation(this._program,uniform.name);one={vartype:"uniform",glfun:null,ivartype:1,location:location,name:uniform.name,type:uniform.type,isArray:false,isSame:false,preValue:null,indexOfParams:0};if(one.name.indexOf('[0]')>0){one.name=one.name.substr(0,one.name.length-3);one.isArray=true;one.location=gl.getUniformLocation(this._program,one.name);}
this._params.push(one);}
for(i=0,n=this._params.length;i<n;i++){one=this._params[i];one.indexOfParams=i;one.index=1;one.value=[one.location,null];one.codename=one.name;one.name=this._nameMap[one.codename]?this._nameMap[one.codename]:one.codename;this._paramsMap[one.name]=one;one._this=this;one.uploadedValue=[];switch(one.type){case 0x1404:one.fun=one.isArray?this._uniform1iv:this._uniform1i;break;case 0x1406:one.fun=one.isArray?this._uniform1fv:this._uniform1f;break;case 0x8B50:one.fun=one.isArray?this._uniform_vec2v:this._uniform_vec2;break;case 0x8B51:one.fun=one.isArray?this._uniform_vec3v:this._uniform_vec3;break;case 0x8B52:one.fun=one.isArray?this._uniform_vec4v:this._uniform_vec4;break;case 0x8B5E:one.fun=this._uniform_sampler2D;break;case 0x8B60:one.fun=this._uniform_samplerCube;break;case 0x8B5C:one.glfun=gl.uniformMatrix4fv;one.fun=this._uniformMatrix4fv;break;case 0x8B56:one.fun=this._uniform1i;break;case 0x8B5A:case 0x8B5B:throw new Error("compile shader err!");default:throw new Error("compile shader err!");}}}
__proto.getUniform=function(name){return this._paramsMap[name];}
__proto._uniform1f=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value){WebGL.mainContext.uniform1f(one.location,uploadedValue[0]=value);return 1;}
return 0;}
__proto._uniform1fv=function(one,value){if(value.length<4){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]||uploadedValue[3]!==value[3]){WebGL.mainContext.uniform1fv(one.location,value);uploadedValue[0]=value[0];uploadedValue[1]=value[1];uploadedValue[2]=value[2];uploadedValue[3]=value[3];return 1;}
return 0;}else{WebGL.mainContext.uniform1fv(one.location,value);return 1;}}
__proto._uniform_vec2=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]){WebGL.mainContext.uniform2f(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1]);return 1;}
return 0;}
__proto._uniform_vec2v=function(one,value){if(value.length<2){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]||uploadedValue[3]!==value[3]){WebGL.mainContext.uniform2fv(one.location,value);uploadedValue[0]=value[0];uploadedValue[1]=value[1];uploadedValue[2]=value[2];uploadedValue[3]=value[3];return 1;}
return 0;}else{WebGL.mainContext.uniform2fv(one.location,value);return 1;}}
__proto._uniform_vec3=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]){WebGL.mainContext.uniform3f(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1],uploadedValue[2]=value[2]);return 1;}
return 0;}
__proto._uniform_vec3v=function(one,value){WebGL.mainContext.uniform3fv(one.location,value);return 1;}
__proto._uniform_vec4=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]||uploadedValue[3]!==value[3]){WebGL.mainContext.uniform4f(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1],uploadedValue[2]=value[2],uploadedValue[3]=value[3]);return 1;}
return 0;}
__proto._uniform_vec4v=function(one,value){WebGL.mainContext.uniform4fv(one.location,value);return 1;}
__proto._uniformMatrix2fv=function(one,value){WebGL.mainContext.uniformMatrix2fv(one.location,false,value);return 1;}
__proto._uniformMatrix3fv=function(one,value){WebGL.mainContext.uniformMatrix3fv(one.location,false,value);return 1;}
__proto._uniformMatrix4fv=function(one,value){WebGL.mainContext.uniformMatrix4fv(one.location,false,value);return 1;}
__proto._uniform1i=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value){WebGL.mainContext.uniform1i(one.location,uploadedValue[0]=value);return 1;}
return 0;}
__proto._uniform1iv=function(one,value){WebGL.mainContext.uniform1iv(one.location,value);return 1;}
__proto._uniform_ivec2=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]){WebGL.mainContext.uniform2i(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1]);return 1;}
return 0;}
__proto._uniform_ivec2v=function(one,value){WebGL.mainContext.uniform2iv(one.location,value);return 1;}
__proto._uniform_vec3i=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]){WebGL.mainContext.uniform3i(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1],uploadedValue[2]=value[2]);return 1;}
return 0;}
__proto._uniform_vec3vi=function(one,value){WebGL.mainContext.uniform3iv(one.location,value);return 1;}
__proto._uniform_vec4i=function(one,value){var uploadedValue=one.uploadedValue;if(uploadedValue[0]!==value[0]||uploadedValue[1]!==value[1]||uploadedValue[2]!==value[2]||uploadedValue[3]!==value[3]){WebGL.mainContext.uniform4i(one.location,uploadedValue[0]=value[0],uploadedValue[1]=value[1],uploadedValue[2]=value[2],uploadedValue[3]=value[3]);return 1;}
return 0;}
__proto._uniform_vec4vi=function(one,value){WebGL.mainContext.uniform4iv(one.location,value);return 1;}
__proto._uniform_sampler2D=function(one,value){var gl=WebGL.mainContext;var uploadedValue=one.uploadedValue;if(uploadedValue[0]==null){uploadedValue[0]=this._curActTexIndex;gl.uniform1i(one.location,this._curActTexIndex);WebGLContext.activeTexture(gl,0x84C0+this._curActTexIndex);WebGLContext.bindTexture(gl,0x0DE1,value);this._curActTexIndex++;return 1;}else{WebGLContext.activeTexture(gl,0x84C0+uploadedValue[0]);WebGLContext.bindTexture(gl,0x0DE1,value);return 0;}}
__proto._uniform_samplerCube=function(one,value){var gl=WebGL.mainContext;var uploadedValue=one.uploadedValue;if(uploadedValue[0]==null){uploadedValue[0]=this._curActTexIndex;gl.uniform1i(one.location,this._curActTexIndex);WebGLContext.activeTexture(gl,0x84C0+this._curActTexIndex);WebGLContext.bindTexture(gl,0x8513,value);this._curActTexIndex++;return 1;}else{WebGLContext.activeTexture(gl,0x84C0+uploadedValue[0]);WebGLContext.bindTexture(gl,0x8513,value);return 0;}}
__proto._noSetValue=function(one){console.log("no....:"+one.name);}
__proto.uploadOne=function(name,value){WebGLContext.useProgram(WebGL.mainContext,this._program);var one=this._paramsMap[name];one.fun.call(this,one,value);}
__proto.uploadTexture2D=function(value){var CTX=WebGLContext;if(CTX._activeTextures[0]!==value){CTX.bindTexture(WebGL.mainContext,CTX.TEXTURE_2D,value);CTX._activeTextures[0]=value;}}
__proto.upload=function(shaderValue,params){BaseShader.activeShader=BaseShader.bindShader=this;var gl=WebGL.mainContext;WebGLContext.useProgram(gl,this._program);if(this._reCompile){params=this._params;this._reCompile=false;}else{params=params||this._params;};var one,value,n=params.length,shaderCall=0;for(var i=0;i<n;i++){one=params[i];if((value=shaderValue[one.name])!==null)
shaderCall+=one.fun.call(this,one,value);}
Stat.shaderCall+=shaderCall;}
__proto.uploadArray=function(shaderValue,length,_bufferUsage){BaseShader.activeShader=this;BaseShader.bindShader=this;WebGLContext.useProgram(WebGL.mainContext,this._program);var params=this._params,value;var one,shaderCall=0;for(var i=length-2;i>=0;i-=2){one=this._paramsMap[shaderValue[i]];if(!one)
continue;value=shaderValue[i+1];if(value!=null){_bufferUsage&&_bufferUsage[one.name]&&_bufferUsage[one.name].bind();shaderCall+=one.fun.call(this,one,value);}}
Stat.shaderCall+=shaderCall;}
__proto.getParams=function(){return this._params;}
__proto.setAttributesLocation=function(attribDesc){this._attribInfo=attribDesc;}
Shader.getShader=function(name){return Shader.sharders[name];}
Shader.create=function(vs,ps,saveName,nameMap,bindAttrib){return new Shader(vs,ps,saveName,nameMap,bindAttrib);}
Shader.withCompile=function(nameID,define,shaderName,createShader){if(shaderName&&Shader.sharders[shaderName])
return Shader.sharders[shaderName];var pre=Shader._preCompileShader[0.0002*nameID];if(!pre)
throw new Error("withCompile shader err!"+nameID);return pre.createShader(define,shaderName,createShader,null);}
Shader.withCompile2D=function(nameID,mainID,define,shaderName,createShader,bindAttrib){if(shaderName&&Shader.sharders[shaderName])
return Shader.sharders[shaderName];var pre=Shader._preCompileShader[0.0002*nameID+mainID];if(!pre)
throw new Error("withCompile shader err!"+nameID+" "+mainID);return pre.createShader(define,shaderName,createShader,bindAttrib);}
Shader.addInclude=function(fileName,txt){ShaderCompile.addInclude(fileName,txt);}
Shader.preCompile=function(nameID,vs,ps,nameMap){var id=0.0002*nameID;Shader._preCompileShader[id]=new ShaderCompile(vs,ps,nameMap);}
Shader.preCompile2D=function(nameID,mainID,vs,ps,nameMap){var id=0.0002*nameID+mainID;Shader._preCompileShader[id]=new ShaderCompile(vs,ps,nameMap);}
Shader._createShader=function(gl,str,type){var shader=gl.createShader(type);gl.shaderSource(shader,str);gl.compileShader(shader);if(gl.getShaderParameter(shader,0x8B81)){return shader;}else{console.log(gl.getShaderInfoLog(shader));return null;}}
Shader._count=0;Shader._preCompileShader={};Shader.SHADERNAME2ID=0.0002;Shader.sharders=new Array(0x20);__static(Shader,['nameKey',function(){return this.nameKey=new StringKey();}]);return Shader;})(BaseShader)
var SoundNode=(function(_super){function SoundNode(){this.url=null;this._channel=null;this._tar=null;this._playEvents=null;this._stopEvents=null;SoundNode.__super.call(this);this.visible=false;this.on("added",this,this._onParentChange);this.on("removed",this,this._onParentChange);}
__class(SoundNode,'laya.media.SoundNode',_super);var __proto=SoundNode.prototype;__proto._onParentChange=function(){this.target=this.parent;}
__proto.play=function(loops,complete){(loops===void 0)&&(loops=1);if(isNaN(loops)){loops=1;}
if(!this.url)return;this.stop();this._channel=SoundManager.playSound(this.url,loops,complete);}
__proto.stop=function(){if(this._channel&&!this._channel.isStopped){this._channel.stop();}
this._channel=null;}
__proto._setPlayAction=function(tar,event,action,add){(add===void 0)&&(add=true);if(!this[action])return;if(!tar)return;if(add){tar.on(event,this,this[action]);}else{tar.off(event,this,this[action]);}}
__proto._setPlayActions=function(tar,events,action,add){(add===void 0)&&(add=true);if(!tar)return;if(!events)return;var eventArr=events.split(",");var i=0,len=0;len=eventArr.length;for(i=0;i<len;i++){this._setPlayAction(tar,eventArr[i],action,add);}}
__getset(0,__proto,'playEvent',null,function(events){this._playEvents=events;if(!events)return;if(this._tar){this._setPlayActions(this._tar,events,"play");}});__getset(0,__proto,'target',null,function(tar){if(this._tar){this._setPlayActions(this._tar,this._playEvents,"play",false);this._setPlayActions(this._tar,this._stopEvents,"stop",false);}
this._tar=tar;if(this._tar){this._setPlayActions(this._tar,this._playEvents,"play",true);this._setPlayActions(this._tar,this._stopEvents,"stop",true);}});__getset(0,__proto,'stopEvent',null,function(events){this._stopEvents=events;if(!events)return;if(this._tar){this._setPlayActions(this._tar,events,"stop");}});return SoundNode;})(Sprite)
var BaseTexture=(function(_super){function BaseTexture(format,mipMap){BaseTexture.__super.call(this);this._wrapModeU=0;this._wrapModeV=0;this._filterMode=1;this._readyed=false;this._width=-1;this._height=-1;this._format=format;this._mipmap=mipMap;this._anisoLevel=1;this._glTexture=LayaGL.instance.createTexture();}
__class(BaseTexture,'laya.resource.BaseTexture',_super);var __proto=BaseTexture.prototype;__proto._isPot=function(size){return(size&(size-1))===0;}
__proto._getGLFormat=function(){var glFormat=0;switch(this._format){case 0:glFormat=0x1907;break;case 1:glFormat=0x1908;break;case 2:glFormat=0x1906;break;case 3:if(WebGLContext._compressedTextureS3tc)
glFormat=WebGLContext._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;else
throw"BaseTexture: not support DXT1 format.";break;case 4:if(WebGLContext._compressedTextureS3tc)
glFormat=WebGLContext._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;else
throw"BaseTexture: not support DXT5 format.";break;case 5:if(WebGLContext._compressedTextureEtc1)
glFormat=WebGLContext._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;else
throw"BaseTexture: not support ETC1RGB format.";break;case 9:if(WebGLContext._compressedTexturePvrtc)
glFormat=WebGLContext._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;else
throw"BaseTexture: not support PVRTCRGB_2BPPV format.";break;case 10:if(WebGLContext._compressedTexturePvrtc)
glFormat=WebGLContext._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;else
throw"BaseTexture: not support PVRTCRGBA_2BPPV format.";break;case 11:if(WebGLContext._compressedTexturePvrtc)
glFormat=WebGLContext._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;else
throw"BaseTexture: not support PVRTCRGB_4BPPV format.";break;case 12:if(WebGLContext._compressedTexturePvrtc)
glFormat=WebGLContext._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;else
throw"BaseTexture: not support PVRTCRGBA_4BPPV format.";break;default:throw"BaseTexture: unknown texture format.";}
return glFormat;}
__proto._setFilterMode=function(value){var gl=LayaGL.instance;WebGLContext.bindTexture(gl,this._glTextureType,this._glTexture);switch(value){case 0:if(this._mipmap)
gl.texParameteri(this._glTextureType,0x2801,0x2700);else
gl.texParameteri(this._glTextureType,0x2801,0x2600);gl.texParameteri(this._glTextureType,0x2800,0x2600);break;case 1:if(this._mipmap)
gl.texParameteri(this._glTextureType,0x2801,0x2701);else
gl.texParameteri(this._glTextureType,0x2801,0x2601);gl.texParameteri(this._glTextureType,0x2800,0x2601);break;case 2:if(this._mipmap)
gl.texParameteri(this._glTextureType,0x2801,0x2703);else
gl.texParameteri(this._glTextureType,0x2801,0x2601);gl.texParameteri(this._glTextureType,0x2800,0x2601);break;default:throw new Error("BaseTexture:unknown filterMode value.");}}
__proto._setWarpMode=function(orientation,mode){var gl=LayaGL.instance;WebGLContext.bindTexture(gl,this._glTextureType,this._glTexture);if(this._isPot(this._width)&&this._isPot(this._height)){switch(mode){case 0:gl.texParameteri(this._glTextureType,orientation,0x2901);break;case 1:gl.texParameteri(this._glTextureType,orientation,0x812F);break;}}else{gl.texParameteri(this._glTextureType,orientation,0x812F);}}
__proto._setAnisotropy=function(value){var anisotropic=WebGLContext._extTextureFilterAnisotropic;if(anisotropic&&!Browser.onLimixiu){value=Math.max(value,1);var gl=LayaGL.instance;WebGLContext.bindTexture(gl,this._glTextureType,this._glTexture);value=Math.min(gl.getParameter(anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT),value);gl.texParameterf(this._glTextureType,anisotropic.TEXTURE_MAX_ANISOTROPY_EXT,value);}}
__proto._disposeResource=function(){if(this._glTexture){LayaGL.instance.deleteTexture(this._glTexture);this._glTexture=null;this._setGPUMemory(0);}}
__proto._getSource=function(){if(this._readyed)
return this._glTexture;else
return null;}
__proto.generateMipmap=function(){if(this._isPot(this.width)&&this._isPot(this.height))
LayaGL.instance.generateMipmap(this._glTextureType);}
__getset(0,__proto,'wrapModeU',function(){return this._wrapModeU;},function(value){if(this._wrapModeU!==value){this._wrapModeU=value;(this._width!==-1)&&(this._setWarpMode(0x2802,value));}});__getset(0,__proto,'mipmap',function(){return this._mipmap;});__getset(0,__proto,'format',function(){return this._format;});__getset(0,__proto,'wrapModeV',function(){return this._wrapModeV;},function(value){if(this._wrapModeV!==value){this._wrapModeV=value;(this._height!==-1)&&(this._setWarpMode(0x2803,value));}});__getset(0,__proto,'defaulteTexture',function(){throw"BaseTexture:must override it."});__getset(0,__proto,'filterMode',function(){return this._filterMode;},function(value){if(value!==this._filterMode){this._filterMode=value;((this._width!==-1)&&(this._height!==-1))&&(this._setFilterMode(value));}});__getset(0,__proto,'anisoLevel',function(){return this._anisoLevel;},function(value){if(value!==this._anisoLevel){this._anisoLevel=Math.max(1,Math.min(16,value));((this._width!==-1)&&(this._height!==-1))&&(this._setAnisotropy(value));}});BaseTexture.WARPMODE_REPEAT=0;BaseTexture.WARPMODE_CLAMP=1;BaseTexture.FILTERMODE_POINT=0;BaseTexture.FILTERMODE_BILINEAR=1;BaseTexture.FILTERMODE_TRILINEAR=2;BaseTexture.FORMAT_R8G8B8=0;BaseTexture.FORMAT_R8G8B8A8=1;BaseTexture.FORMAT_ALPHA8=2;BaseTexture.FORMAT_DXT1=3;BaseTexture.FORMAT_DXT5=4;BaseTexture.FORMAT_ETC1RGB=5;BaseTexture.FORMAT_PVRTCRGB_2BPPV=9;BaseTexture.FORMAT_PVRTCRGBA_2BPPV=10;BaseTexture.FORMAT_PVRTCRGB_4BPPV=11;BaseTexture.FORMAT_PVRTCRGBA_4BPPV=12;BaseTexture.FORMAT_DEPTH_16=0;BaseTexture.FORMAT_STENCIL_8=1;BaseTexture.FORMAT_DEPTHSTENCIL_16_8=2;BaseTexture.FORMAT_DEPTHSTENCIL_NONE=3;return BaseTexture;})(Bitmap)
var HTMLCanvas=(function(_super){function HTMLCanvas(createCanvas){HTMLCanvas.__super.call(this);(createCanvas===void 0)&&(createCanvas=false);if(createCanvas)
this._source=Browser.createElement("canvas");else{this._source=this;}
this.lock=true;}
__class(HTMLCanvas,'laya.resource.HTMLCanvas',_super);var __proto=HTMLCanvas.prototype;__proto._getSource=function(){return this._source;}
__proto.clear=function(){this._ctx&&this._ctx.clear&&this._ctx.clear();if(this._texture){this._texture.destroy();this._texture=null;}}
__proto.destroy=function(){laya.resource.Resource.prototype.destroy.call(this);this._setCPUMemory(0);this._ctx&&this._ctx.destroy();this._ctx=null;}
__proto.release=function(){}
__proto._setContext=function(context){this._ctx=context;}
__proto.getContext=function(contextID,other){return this.context;}
__proto.getMemSize=function(){return 0;}
__proto.size=function(w,h){if(this._width!=w||this._height!=h||(this._source&&(this._source.width!=w||this._source.height!=h))){this._width=w;this._height=h;this._setCPUMemory(w*h*4);this._ctx&&this._ctx.size&&this._ctx.size(w,h);this._source&&(this._source.height=h,this._source.width=w);if(this._texture){this._texture.destroy();this._texture=null;}}}
__proto.getTexture=function(){if(!this._texture){var bitmap=new Texture2D();bitmap.loadImageSource(this.source);this._texture=new Texture(bitmap);}
return this._texture;}
__proto.toBase64=function(type,encoderOptions){if(this._source){if(Render.isConchApp){if(conchConfig.threadMode==2){throw"native 2 thread mode use toBase64Async";};var width=this._ctx._targets.sourceWidth;var height=this._ctx._targets.sourceHeight;var data=this._ctx._targets.getData(0,0,width,height);return conchToBase64FlipY?conchToBase64FlipY(type,encoderOptions,data.buffer,width,height):conchToBase64(type,encoderOptions,data.buffer,width,height);}else{return this._source.toDataURL(type,encoderOptions);}}
return null;}
__proto.toBase64Async=function(type,encoderOptions,callBack){var width=this._ctx._targets.sourceWidth;var height=this._ctx._targets.sourceHeight;this._ctx._targets.getDataAsync(0,0,width,height,function(data){var base64=conchToBase64FlipY?conchToBase64FlipY(type,encoderOptions,data.buffer,width,height):conchToBase64(type,encoderOptions,data.buffer,width,height);callBack(base64);});}
__getset(0,__proto,'source',function(){return this._source;});__getset(0,__proto,'context',function(){if(this._ctx)return this._ctx;if(this._source==this){this._ctx=new Context();}else{this._ctx=this._source.getContext(Render.isConchApp?'layagl':'2d');}
this._ctx._canvas=this;return this._ctx;});return HTMLCanvas;})(Bitmap)
var HTMLImage=(function(_super){function HTMLImage(){HTMLImage.__super.call(this);;}
__class(HTMLImage,'laya.resource.HTMLImage',_super);HTMLImage.create=function(width,height,format){var tex=new Texture2D(width,height,format,false,false);tex.wrapModeU=1;tex.wrapModeV=1;return tex;}
return HTMLImage;})(Bitmap)
var Stage=(function(_super){function Stage(){this.focus=null;this._frameRate="fast";this.designWidth=0;this.designHeight=0;this.canvasRotation=false;this.canvasDegree=0;this.renderingEnabled=true;this.screenAdaptationEnabled=true;this._screenMode="none";this._scaleMode="noscale";this._alignV="top";this._alignH="left";this._bgColor="black";this._mouseMoveTime=0;this._renderCount=0;this._safariOffsetY=0;this._frameStartTime=0;this._isFocused=false;this._isVisibility=false;this._wgColor=[0,0,0,1];this._scene3Ds=[];this._globalRepaintSet=false;this._globalRepaintGet=false;this._curUIBase=null;this.useRetinalCanvas=false;Stage.__super.call(this);this.offset=new Point();this._canvasTransform=new Matrix();this._previousOrientation=Browser.window.orientation;this._3dUI=[];var _$this=this;this.transform=this._createTransform();this.mouseEnabled=true;this.hitTestPrior=true;this.autoSize=false;this._setBit(0x80,true);this._setBit(0x02,true);this._isFocused=true;this._isVisibility=true;this.useRetinalCanvas=Config.useRetinalCanvas;var window=Browser.window;var _me=this;window.addEventListener("focus",function(){_$this._isFocused=true;_me.event("focus");_me.event("focuschange");});window.addEventListener("blur",function(){_$this._isFocused=false;_me.event("blur");_me.event("focuschange");if(_me._isInputting())Input["inputElement"].target.focus=false;});var hidden="hidden",state="visibilityState",visibilityChange="visibilitychange";var document=window.document;if(typeof document.hidden!=="undefined"){visibilityChange="visibilitychange";state="visibilityState";}else if(typeof document.mozHidden!=="undefined"){visibilityChange="mozvisibilitychange";state="mozVisibilityState";}else if(typeof document.msHidden!=="undefined"){visibilityChange="msvisibilitychange";state="msVisibilityState";}else if(typeof document.webkitHidden!=="undefined"){visibilityChange="webkitvisibilitychange";state="webkitVisibilityState";}
window.document.addEventListener(visibilityChange,visibleChangeFun);function visibleChangeFun(){if(Browser.document[state]=="hidden"){_$this._isVisibility=false;if(_me._isInputting())Input["inputElement"].target.focus=false;}else{_$this._isVisibility=true;}
_$this.renderingEnabled=_$this._isVisibility;_me.event("visibilitychange");}
window.addEventListener("resize",function(){var orientation=Browser.window.orientation;if(orientation!=null&&orientation!=_$this._previousOrientation&&_me._isInputting()){Input["inputElement"].target.focus=false;}
_$this._previousOrientation=orientation;if(_me._isInputting())return;if(Browser.onSafari)
_me._safariOffsetY=(Browser.window.__innerHeight||Browser.document.body.clientHeight||Browser.document.documentElement.clientHeight)-Browser.window.innerHeight;_me._resetCanvas();});window.addEventListener("orientationchange",function(e){_me._resetCanvas();});this.on("mousemove",this,this._onmouseMove);if(Browser.onMobile)this.on("mousedown",this,this._onmouseMove);}
__class(Stage,'laya.display.Stage',_super);var __proto=Stage.prototype;__proto._isInputting=function(){return(Browser.onMobile&&Input.isInputting);}
__proto._changeCanvasSize=function(){this.setScreenSize(Browser.clientWidth*Browser.pixelRatio,Browser.clientHeight*Browser.pixelRatio);}
__proto._resetCanvas=function(){if(!this.screenAdaptationEnabled)return;this._changeCanvasSize();}
__proto.setScreenSize=function(screenWidth,screenHeight){var rotation=false;if(this._screenMode!=="none"){var screenType=screenWidth/screenHeight<1?"vertical":"horizontal";rotation=screenType!==this._screenMode;if(rotation){var temp=screenHeight;screenHeight=screenWidth;screenWidth=temp;}}
this.canvasRotation=rotation;var canvas=Render._mainCanvas;var canvasStyle=canvas.source.style;var mat=this._canvasTransform.identity();var scaleMode=this._scaleMode;var scaleX=screenWidth/this.designWidth;var scaleY=screenHeight/this.designHeight;var canvasWidth=this.useRetinalCanvas?screenWidth:this.designWidth;var canvasHeight=this.useRetinalCanvas?screenHeight:this.designHeight;var realWidth=screenWidth;var realHeight=screenHeight;var pixelRatio=Browser.pixelRatio;this._width=this.designWidth;this._height=this.designHeight;switch(scaleMode){case"noscale":scaleX=scaleY=1;realWidth=this.designWidth;realHeight=this.designHeight;break;case"showall":scaleX=scaleY=Math.min(scaleX,scaleY);canvasWidth=realWidth=Math.round(this.designWidth*scaleX);canvasHeight=realHeight=Math.round(this.designHeight*scaleY);break;case"noborder":scaleX=scaleY=Math.max(scaleX,scaleY);realWidth=Math.round(this.designWidth*scaleX);realHeight=Math.round(this.designHeight*scaleY);break;case"full":scaleX=scaleY=1;this._width=canvasWidth=screenWidth;this._height=canvasHeight=screenHeight;break;case"fixedwidth":scaleY=scaleX;this._height=canvasHeight=Math.round(screenHeight/scaleX);break;case"fixedheight":scaleX=scaleY;this._width=canvasWidth=Math.round(screenWidth/scaleY);break;case"fixedauto":if((screenWidth/screenHeight)<(this.designWidth/this.designHeight)){scaleY=scaleX;this._height=canvasHeight=Math.round(screenHeight/scaleX);}else{scaleX=scaleY;this._width=canvasWidth=Math.round(screenWidth/scaleY);}
break;}
if(this.useRetinalCanvas){canvasWidth=screenWidth;canvasHeight=screenHeight;}
scaleX*=this.scaleX;scaleY*=this.scaleY;if(scaleX===1&&scaleY===1){this.transform.identity();}else{this.transform.a=this._formatData(scaleX/(realWidth/canvasWidth));this.transform.d=this._formatData(scaleY/(realHeight/canvasHeight));}
canvas.size(canvasWidth,canvasHeight);RunDriver.changeWebGLSize(canvasWidth,canvasHeight);mat.scale(realWidth/canvasWidth/pixelRatio,realHeight/canvasHeight/pixelRatio);if(this._alignH==="left")this.offset.x=0;else if(this._alignH==="right")this.offset.x=screenWidth-realWidth;else this.offset.x=(screenWidth-realWidth)*0.5/pixelRatio;if(this._alignV==="top")this.offset.y=0;else if(this._alignV==="bottom")this.offset.y=screenHeight-realHeight;else this.offset.y=(screenHeight-realHeight)*0.5/pixelRatio;this.offset.x=Math.round(this.offset.x);this.offset.y=Math.round(this.offset.y);mat.translate(this.offset.x,this.offset.y);if(this._safariOffsetY)mat.translate(0,this._safariOffsetY);this.canvasDegree=0;if(rotation){if(this._screenMode==="horizontal"){mat.rotate(Math.PI/2);mat.translate(screenHeight/pixelRatio,0);this.canvasDegree=90;}else{mat.rotate(-Math.PI/2);mat.translate(0,screenWidth/pixelRatio);this.canvasDegree=-90;}}
mat.a=this._formatData(mat.a);mat.d=this._formatData(mat.d);mat.tx=this._formatData(mat.tx);mat.ty=this._formatData(mat.ty);this.transform=this.transform;canvasStyle.transformOrigin=canvasStyle.webkitTransformOrigin=canvasStyle.msTransformOrigin=canvasStyle.mozTransformOrigin=canvasStyle.oTransformOrigin="0px 0px 0px";canvasStyle.transform=canvasStyle.webkitTransform=canvasStyle.msTransform=canvasStyle.mozTransform=canvasStyle.oTransform="matrix("+mat.toString()+")";if(this._safariOffsetY)mat.translate(0,-this._safariOffsetY);mat.translate(parseInt(canvasStyle.left)||0,parseInt(canvasStyle.top)||0);this.visible=true;this._repaint|=0x02;this.event("resize");}
__proto._formatData=function(value){if(Math.abs(value)<0.000001)return 0;if(Math.abs(1-value)<0.001)return value>0?1:-1;return value;}
__proto.getMousePoint=function(){return Point.TEMP.setTo(this.mouseX,this.mouseY);}
__proto.repaint=function(type){(type===void 0)&&(type=0x02);this._repaint|=type;}
__proto.parentRepaint=function(type){(type===void 0)&&(type=0x02);}
__proto._loop=function(){this._globalRepaintGet=this._globalRepaintSet;this._globalRepaintSet=false;this.render(Render._context,0,0);return true;}
__proto.getFrameTm=function(){return this._frameStartTime;}
__proto._onmouseMove=function(e){this._mouseMoveTime=Browser.now();}
__proto.getTimeFromFrameStart=function(){return Browser.now()-this._frameStartTime;}
__proto.render=function(context,x,y){Stage._dbgSprite.graphics.clear();if(this._frameRate==="sleep"){var now=Browser.now();if(now-this._frameStartTime>=1000)this._frameStartTime=now;else return;}else{if(!this._visible){this._renderCount++;if(this._renderCount%5===0){CallLater.I._update();Stat.loopCount++;this._updateTimers();}
return;}
this._frameStartTime=Browser.now();}
this._renderCount++;var frameMode=this._frameRate==="mouse"?(((this._frameStartTime-this._mouseMoveTime)<2000)?"fast":"slow"):this._frameRate;var isFastMode=(frameMode!=="slow");var isDoubleLoop=(this._renderCount%2===0);Stat.renderSlow=!isFastMode;if(isFastMode||isDoubleLoop){CallLater.I._update();Stat.loopCount++;if(this.renderingEnabled){for(var i=0,n=this._scene3Ds.length;i<n;i++)
this._scene3Ds[i]._update();context.clear();_super.prototype.render.call(this,context,x,y);Stat._show&&Stat._sp&&Stat._sp.render(context,x,y);}}
Stage._dbgSprite.render(context,0,0);if(isFastMode||!isDoubleLoop){if(this.renderingEnabled){RunDriver.clear(this._bgColor);context.flush();VectorGraphManager.instance&&VectorGraphManager.getInstance().endDispose();}
this._updateTimers();}}
__proto.renderToNative=function(context,x,y){this._renderCount++;if(!this._visible){if(this._renderCount%5===0){CallLater.I._update();Stat.loopCount++;this._updateTimers();}
return;}
CallLater.I._update();Stat.loopCount++;if(this.renderingEnabled){for(var i=0,n=this._scene3Ds.length;i<n;i++)
this._scene3Ds[i]._update();context.clear();_super.prototype.render.call(this,context,x,y);Stat._show&&Stat._sp&&Stat._sp.render(context,x,y);}
if(this.renderingEnabled){RunDriver.clear(this._bgColor);context.flush();VectorGraphManager.instance&&VectorGraphManager.getInstance().endDispose();}
this._updateTimers();}
__proto._updateTimers=function(){Laya.systemTimer._update();Laya.startTimer._update();Laya.physicsTimer._update();Laya.updateTimer._update();Laya.lateTimer._update();Laya.timer._update();}
__proto._requestFullscreen=function(){var element=Browser.document.documentElement;if(element.requestFullscreen){element.requestFullscreen();}else if(element.mozRequestFullScreen){element.mozRequestFullScreen();}else if(element.webkitRequestFullscreen){element.webkitRequestFullscreen();}else if(element.msRequestFullscreen){element.msRequestFullscreen();}}
__proto._fullScreenChanged=function(){Laya.stage.event("fullscreenchange");}
__proto.exitFullscreen=function(){var document=Browser.document;if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}}
__proto.isGlobalRepaint=function(){return this._globalRepaintGet;}
__proto.setGlobalRepaint=function(){this._globalRepaintSet=true;}
__proto.add3DUI=function(uibase){var uiroot=uibase.rootView;if(this._3dUI.indexOf(uiroot)>=0)return;this._3dUI.push(uiroot);}
__proto.remove3DUI=function(uibase){var uiroot=uibase.rootView;var p=this._3dUI.indexOf(uiroot);if(p>=0){this._3dUI.splice(p,1);return true;}
return false;}
__getset(0,__proto,'clientScaleY',function(){return this._transform?this._transform.getScaleY():1;});__getset(0,__proto,'width',_super.prototype._$get_width,function(value){this.designWidth=value;Laya.superSet(Sprite,this,'width',value);Laya.systemTimer.callLater(this,this._changeCanvasSize);});__getset(0,__proto,'isFocused',function(){return this._isFocused;});__getset(0,__proto,'alignH',function(){return this._alignH;},function(value){this._alignH=value;Laya.systemTimer.callLater(this,this._changeCanvasSize);});__getset(0,__proto,'height',_super.prototype._$get_height,function(value){this.designHeight=value;Laya.superSet(Sprite,this,'height',value);Laya.systemTimer.callLater(this,this._changeCanvasSize);});__getset(0,__proto,'transform',function(){if(this._tfChanged)this._adjustTransform();return(this._transform=this._transform||this._createTransform());},_super.prototype._$set_transform);__getset(0,__proto,'isVisibility',function(){return this._isVisibility;});__getset(0,__proto,'scaleMode',function(){return this._scaleMode;},function(value){this._scaleMode=value;Laya.systemTimer.callLater(this,this._changeCanvasSize);});__getset(0,__proto,'alignV',function(){return this._alignV;},function(value){this._alignV=value;Laya.systemTimer.callLater(this,this._changeCanvasSize);});__getset(0,__proto,'bgColor',function(){return this._bgColor;},function(value){this._bgColor=value;if(value)
this._wgColor=ColorUtils.create(value).arrColor;else
this._wgColor=null;if(Browser.onLimixiu){this._wgColor=ColorUtils.create(value).arrColor;}else if(value){Render.canvas.style.background=value;}else{Render.canvas.style.background="none";}});__getset(0,__proto,'mouseX',function(){return Math.round(MouseManager.instance.mouseX/this.clientScaleX);});__getset(0,__proto,'mouseY',function(){return Math.round(MouseManager.instance.mouseY/this.clientScaleY);});__getset(0,__proto,'clientScaleX',function(){return this._transform?this._transform.getScaleX():1;});__getset(0,__proto,'screenMode',function(){return this._screenMode;},function(value){this._screenMode=value;});__getset(0,__proto,'visible',_super.prototype._$get_visible,function(value){if(this.visible!==value){Laya.superSet(Sprite,this,'visible',value);var style=Render._mainCanvas.source.style;style.visibility=value?"visible":"hidden";}});__getset(0,__proto,'fullScreenEnabled',null,function(value){var document=Browser.document;var canvas=Render.canvas;if(value){canvas.addEventListener('mousedown',this._requestFullscreen);canvas.addEventListener('touchstart',this._requestFullscreen);document.addEventListener("fullscreenchange",this._fullScreenChanged);document.addEventListener("mozfullscreenchange",this._fullScreenChanged);document.addEventListener("webkitfullscreenchange",this._fullScreenChanged);document.addEventListener("msfullscreenchange",this._fullScreenChanged);}else{canvas.removeEventListener('mousedown',this._requestFullscreen);canvas.removeEventListener('touchstart',this._requestFullscreen);document.removeEventListener("fullscreenchange",this._fullScreenChanged);document.removeEventListener("mozfullscreenchange",this._fullScreenChanged);document.removeEventListener("webkitfullscreenchange",this._fullScreenChanged);document.removeEventListener("msfullscreenchange",this._fullScreenChanged);}});__getset(0,__proto,'frameRate',function(){if(!Render.isConchApp){return this._frameRate;}else{return this._frameRateNative;}},function(value){if(!Render.isConchApp){this._frameRate=value;}else{switch(value){case"fast":window.conch.config.setLimitFPS(60);break;case"mouse":window.conch.config.setMouseFrame(2000);break;case"slow":window.conch.config.setSlowFrame(true);break;case"sleep":window.conch.config.setLimitFPS(1);break;}
this._frameRateNative=value;}});Stage.SCALE_NOSCALE="noscale";Stage.SCALE_EXACTFIT="exactfit";Stage.SCALE_SHOWALL="showall";Stage.SCALE_NOBORDER="noborder";Stage.SCALE_FULL="full";Stage.SCALE_FIXED_WIDTH="fixedwidth";Stage.SCALE_FIXED_HEIGHT="fixedheight";Stage.SCALE_FIXED_AUTO="fixedauto";Stage.ALIGN_LEFT="left";Stage.ALIGN_RIGHT="right";Stage.ALIGN_CENTER="center";Stage.ALIGN_TOP="top";Stage.ALIGN_MIDDLE="middle";Stage.ALIGN_BOTTOM="bottom";Stage.SCREEN_NONE="none";Stage.SCREEN_HORIZONTAL="horizontal";Stage.SCREEN_VERTICAL="vertical";Stage.FRAME_FAST="fast";Stage.FRAME_SLOW="slow";Stage.FRAME_MOUSE="mouse";Stage.FRAME_SLEEP="sleep";__static(Stage,['_dbgSprite',function(){return this._dbgSprite=new Sprite();}]);return Stage;})(Sprite)
var PerfHUD=(function(_super){function PerfHUD(){this.datas=[];this.hud_width=800;this.hud_height=200;this.gMinV=0;this.gMaxV=100;this.textSpace=40;this._now=null;this.sttm=0;PerfHUD.__super.call(this);this.xdata=new Array(PerfHUD.DATANUM);this.ydata=new Array(PerfHUD.DATANUM);PerfHUD.inst=this;this._renderType|=0x800;this._setRenderType(this._renderType);this._setCustomRender();this.addDataDef(0,0xffffff,'frame',1.0);this.addDataDef(1,0x00ff00,'update',1.0);this.addDataDef(2,0xff0000,'flush',1.0);this._now=performance?performance.now.bind(performance):Date.now;}
__class(PerfHUD,'laya.utils.PerfHUD',_super);var __proto=PerfHUD.prototype;__proto.now=function(){return this._now();}
__proto.start=function(){this.sttm=this._now();}
__proto.end=function(i){var dt=this._now()-this.sttm;this.updateValue(i,dt);}
__proto.config=function(w,h){this.hud_width=w;this.hud_height=h;}
__proto.addDataDef=function(id,color,name,scale){this.datas[id]=new PerfData(id,color,name,scale);}
__proto.updateValue=function(id,v){this.datas[id].addData(v);}
__proto.v2y=function(v){var bb=this._y+this.hud_height*(1-(v-this.gMinV)/this.gMaxV);return this._y+this.hud_height*(1-(v-this.gMinV)/this.gMaxV);}
__proto.drawHLine=function(ctx,v,color,text){var sx=this._x;var ex=this._x+this.hud_width;var sy=this.v2y(v);ctx.fillText(text,sx,sy-6,null,'green',null);sx+=this.textSpace;ctx.fillStyle=color;ctx.fillRect(sx,sy,this._x+this.hud_width,1,null);}
__proto.customRender=function(ctx,x,y){var now=performance.now();;if(PerfHUD._lastTm<=0)PerfHUD._lastTm=now;this.updateValue(0,now-PerfHUD._lastTm);PerfHUD._lastTm=now;ctx.save();ctx.fillRect(this._x,this._y,this.hud_width,this.hud_height+4,'#000000cc');ctx.globalAlpha=0.9;this.drawHLine(ctx,0,'green','    0');this.drawHLine(ctx,10,'green','  10');this.drawHLine(ctx,16.667,'red',' ');this.drawHLine(ctx,20,'green','50|20');this.drawHLine(ctx,16.667*2,'yellow','');this.drawHLine(ctx,16.667*3,'yellow','');this.drawHLine(ctx,16.667*4,'yellow','');this.drawHLine(ctx,50,'green','20|50');this.drawHLine(ctx,100,'green','10|100');for(var di=0,sz=this.datas.length;di<sz;di++){var cd=this.datas[di];if(!cd)continue;var dtlen=cd.datas.length;var dx=(this.hud_width-this.textSpace)/dtlen;var cx=cd.datapos;var _cx=this._x+this.textSpace;ctx.fillStyle=cd.color;for(var dtsz=dtlen;cx<dtsz;cx++){var sty=this.v2y(cd.datas[cx]*cd.scale);ctx.fillRect(_cx,sty,dx,this.hud_height+this._y-sty,null);_cx+=dx;}
for(cx=0;cx<cd.datapos;cx++){sty=this.v2y(cd.datas[cx]*cd.scale);ctx.fillRect(_cx,sty,dx,this.hud_height+this._y-sty,null);_cx+=dx;}}
ctx.restore();}
PerfHUD._lastTm=0;PerfHUD._now=0;PerfHUD.DATANUM=300;PerfHUD.inst=null;PerfHUD.drawTexTm=0;return PerfHUD;})(Sprite)
var Scene=(function(_super){function Scene(){this.autoDestroyAtClosed=false;this.url=null;this._timer=null;this._viewCreated=false;this._idMap=null;this._$componentType="Scene";Scene.__super.call(this);this._setBit(0x08,true);Scene.unDestroyedScenes.push(this);this._scene=this;this.createChildren();}
__class(Scene,'laya.display.Scene',_super);var __proto=Scene.prototype;__proto.createChildren=function(){}
__proto.loadScene=function(path){var url=path.indexOf(".")>-1?path:path+".scene";var view=Laya.loader.getRes(url);if(view){this.createView(view);}else{Laya.loader.resetProgress();var loader=new SceneLoader();loader.on("complete",this,this._onSceneLoaded,[url]);loader.load(url);}}
__proto._onSceneLoaded=function(url){this.createView(Loader.getRes(url));}
__proto.createView=function(view){if(view&&!this._viewCreated){this._viewCreated=true;SceneUtils.createByData(this,view);}}
__proto.getNodeByID=function(id){if(this._idMap)return this._idMap[id];return null;}
__proto.open=function(closeOther,param){(closeOther===void 0)&&(closeOther=true);if(closeOther)Scene.closeAll();Scene.root.addChild(this);this.onOpened(param);}
__proto.onOpened=function(param){}
__proto.close=function(type){this.onClosed(type);if(this.autoDestroyAtClosed)this.destroy();else this.removeSelf();}
__proto.onClosed=function(type){}
__proto.destroy=function(destroyChild){(destroyChild===void 0)&&(destroyChild=true);this._idMap=null;_super.prototype.destroy.call(this,destroyChild);var list=laya.display.Scene.unDestroyedScenes;for(var i=list.length-1;i>-1;i--){if(list[i]===this){list.splice(i,1);return;}}}
__proto._sizeChanged=function(){this.event("resize");}
__getset(0,__proto,'scaleX',_super.prototype._$get_scaleX,function(value){if(Laya.superGet(Sprite,this,'scaleX')==value)return;Laya.superSet(Sprite,this,'scaleX',value);this.event("resize");});__getset(0,__proto,'scaleY',_super.prototype._$get_scaleY,function(value){if(Laya.superGet(Sprite,this,'scaleY')==value)return;Laya.superSet(Sprite,this,'scaleY',value);this.event("resize");});__getset(0,__proto,'width',function(){if(this._width)return this._width;var max=0;for(var i=this.numChildren-1;i>-1;i--){var comp=this.getChildAt(i);if(comp._visible){max=Math.max(comp._x+comp.width*comp.scaleX,max);}}
return max;},function(value){if(Laya.superGet(Sprite,this,'width')==value)return;Laya.superSet(Sprite,this,'width',value);this.callLater(this._sizeChanged);});__getset(0,__proto,'timer',function(){return this._timer||Laya.timer;},function(value){this._timer=value;});__getset(0,__proto,'height',function(){if(this._height)return this._height;var max=0;for(var i=this.numChildren-1;i>-1;i--){var comp=this.getChildAt(i);if(comp._visible){max=Math.max(comp._y+comp.height*comp.scaleY,max);}}
return max;},function(value){if(Laya.superGet(Sprite,this,'height')==value)return;Laya.superSet(Sprite,this,'height',value);this.callLater(this._sizeChanged);});__getset(1,Scene,'root',function(){if(!Scene._root){Scene._root=Laya.stage.addChild(new Sprite());Scene._root.name="root";Laya.stage.on("resize",null,resize);function resize(){Scene._root.size(Laya.stage.width,Laya.stage.height);Scene._root.event("resize");}
resize();}
return Scene._root;},laya.display.Sprite._$SET_root);Scene.load=function(url,complete,progress){Laya.loader.resetProgress();var loader=new SceneLoader();loader.on("progress",null,onProgress);loader.once("complete",null,create);loader.load(url);function onProgress(value){if(Scene._loadPage)Scene._loadPage.event("progress",value);progress&&progress.runWith(value);}
function create(){loader.off("progress",null,onProgress);var obj=Loader.getRes(url);if(!obj)throw"Can not find scene:"+url;if(!obj.props)throw"Scene data is error:"+url;var runtime=obj.props.runtime?obj.props.runtime:obj.type;var clas=ClassUtils.getClass(runtime);if(obj.props.renderType=="instance"){var scene=clas.instance||(clas.instance=new clas());}else{scene=new clas();}
if(scene&&(scene instanceof laya.display.Node)){scene.url=url;if(!scene._getBit(0x08)){complete&&complete.runWith(scene);}else{scene.on("onViewCreated",null,function(){complete&&complete.runWith(scene)})
scene.createView(obj);}
Scene.hideLoadingPage();}else{throw"Can not find scene:"+runtime;}}}
Scene.open=function(url,closeOther,param,complete,progress){(closeOther===void 0)&&(closeOther=true);if((param instanceof laya.utils.Handler)){var temp=complete;complete=param;param=temp;}
Scene.showLoadingPage();Scene.load(url,Handler.create(null,this._onSceneLoaded,[closeOther,complete,param]),progress);}
Scene._onSceneLoaded=function(closeOther,complete,param,scene){scene.open(closeOther,param);if(complete)complete.runWith(scene);}
Scene.close=function(url,name){(name===void 0)&&(name="");var flag=false;var list=laya.display.Scene.unDestroyedScenes;for(var i=0,n=list.length;i<n;i++){var scene=list[i];if(scene&&scene.parent&&scene.url===url&&scene.name==name){scene.close();flag=true;}}
return flag;}
Scene.closeAll=function(){var root=laya.display.Scene.root;for(var i=0,n=root.numChildren;i<n;i++){var scene=root.getChildAt(0);if((scene instanceof laya.display.Scene))scene.close();else scene.removeSelf();}}
Scene.destroy=function(url,name){(name===void 0)&&(name="");var flag=false;var list=laya.display.Scene.unDestroyedScenes;for(var i=0,n=list.length;i<n;i++){var scene=list[i];if(scene.url===url&&scene.name==name){scene.destroy();flag=true;}}
return flag;}
Scene.gc=function(){Resource.destroyUnusedResources();}
Scene.setLoadingPage=function(loadPage){if(Scene._loadPage!=loadPage){Scene._loadPage=loadPage;}}
Scene.showLoadingPage=function(param,delay){(delay===void 0)&&(delay=500);if(Scene._loadPage){Laya.systemTimer.clear(null,Scene._showLoading);Laya.systemTimer.clear(null,Scene._hideLoading);Laya.systemTimer.once(delay,null,Scene._showLoading,[param],false);}}
Scene._showLoading=function(param){Laya.stage.addChild(Scene._loadPage);Scene._loadPage.onOpened(param);}
Scene._hideLoading=function(){Scene._loadPage.close();}
Scene.hideLoadingPage=function(delay){(delay===void 0)&&(delay=500);if(Scene._loadPage){Laya.systemTimer.clear(null,Scene._showLoading);Laya.systemTimer.clear(null,Scene._hideLoading);Laya.systemTimer.once(delay,null,Scene._hideLoading);}}
Scene.unDestroyedScenes=[];Scene._root=null;Scene._loadPage=null;return Scene;})(Sprite)
var Input=(function(_super){function Input(){this._focus=false;this._multiline=false;this._editable=true;this._restrictPattern=null;this._type="text";this._prompt='';this._promptColor="#A9A9A9";this._originColor="#000000";this._content='';Input.__super.call(this);this._maxChars=1E5;this._width=100;this._height=20;this.multiline=false;this.overflow="scroll";this.on("mousedown",this,this._onMouseDown);this.on("undisplay",this,this._onUnDisplay);}
__class(Input,'laya.display.Input',_super);var __proto=Input.prototype;__proto.setSelection=function(startIndex,endIndex){this.focus=true;laya.display.Input.inputElement.selectionStart=startIndex;laya.display.Input.inputElement.selectionEnd=endIndex;}
__proto._onUnDisplay=function(e){this.focus=false;}
__proto._onMouseDown=function(e){this.focus=true;}
__proto._syncInputTransform=function(){var inputElement=this.nativeInput;var transform=Utils.getTransformRelativeToWindow(this,this.padding[3],this.padding[0]);var inputWid=this._width-this.padding[1]-this.padding[3];var inputHei=this._height-this.padding[0]-this.padding[2];if(Render.isConchApp){inputElement.setScale(transform.scaleX,transform.scaleY);inputElement.setSize(inputWid,inputHei);inputElement.setPos(transform.x,transform.y);}else{Input.inputContainer.style.transform=Input.inputContainer.style.webkitTransform="scale("+transform.scaleX+","+transform.scaleY+") rotate("+(Laya.stage.canvasDegree)+"deg)";inputElement.style.width=inputWid+'px';inputElement.style.height=inputHei+'px';Input.inputContainer.style.left=transform.x+'px';Input.inputContainer.style.top=transform.y+'px';}}
__proto.select=function(){this.nativeInput.select();}
__proto._setInputMethod=function(){Input.input.parentElement&&(Input.inputContainer.removeChild(Input.input));Input.area.parentElement&&(Input.inputContainer.removeChild(Input.area));Input.inputElement=(this._multiline?Input.area:Input.input);Input.inputContainer.appendChild(Input.inputElement);if(Text.RightToLeft){Input.inputElement.style.direction="rtl";}}
__proto._focusIn=function(){laya.display.Input.isInputting=true;var input=this.nativeInput;this._focus=true;var cssStyle=input.style;cssStyle.whiteSpace=(this.wordWrap?"pre-wrap":"nowrap");this._setPromptColor();input.readOnly=!this._editable;if(Render.isConchApp){input.setType(this._type);input.setForbidEdit(!this._editable);}
input.maxLength=this._maxChars;var padding=this.padding;input.type=this._type;input.value=this._content;input.placeholder=this._prompt;Laya.stage.off("keydown",this,this._onKeyDown);Laya.stage.on("keydown",this,this._onKeyDown);Laya.stage.focus=this;this.event("focus");if(Browser.onPC)input.focus();if(!Browser.onMiniGame&&!Browser.onBDMiniGame&&!Browser.onQGMiniGame&&!Browser.onKGMiniGame&&!Browser.onVVMiniGame&&!Browser.onAlipayMiniGame&&!Browser.onBLMiniGame&&!Browser.onQQMiniGame){var temp=this._text;this._text=null;}
this.typeset();input.setColor(this._originColor);input.setFontSize(this.fontSize);input.setFontFace(Browser.onIPhone?(Text.fontFamilyMap[this.font]||this.font):this.font);if(Render.isConchApp){input.setMultiAble&&input.setMultiAble(this._multiline);}
cssStyle.lineHeight=(this.leading+this.fontSize)+"px";cssStyle.fontStyle=(this.italic?"italic":"normal");cssStyle.fontWeight=(this.bold?"bold":"normal");cssStyle.textAlign=this.align;cssStyle.padding="0 0";this._syncInputTransform();if(!Render.isConchApp&&Browser.onPC)
Laya.systemTimer.frameLoop(1,this,this._syncInputTransform);}
__proto._setPromptColor=function(){Input.promptStyleDOM=Browser.getElementById("promptStyle");if(!Input.promptStyleDOM){Input.promptStyleDOM=Browser.createElement("style");Input.promptStyleDOM.setAttribute("id","promptStyle");Browser.document.head.appendChild(Input.promptStyleDOM);}
Input.promptStyleDOM.innerText="input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {"+"color:"+this._promptColor+"}"+"input:-moz-placeholder, textarea:-moz-placeholder {"+"color:"+this._promptColor+"}"+"input::-moz-placeholder, textarea::-moz-placeholder {"+"color:"+this._promptColor+"}"+"input:-ms-input-placeholder, textarea:-ms-input-placeholder {"+"color:"+this._promptColor+"}";}
__proto._focusOut=function(){laya.display.Input.isInputting=false;this._focus=false;this._text=null;this._content=this.nativeInput.value;if(!this._content){Laya.superSet(Text,this,'text',this._prompt);Laya.superSet(Text,this,'color',this._promptColor);}else{Laya.superSet(Text,this,'text',this._content);Laya.superSet(Text,this,'color',this._originColor);}
Laya.stage.off("keydown",this,this._onKeyDown);Laya.stage.focus=null;this.event("blur");this.event("change");if(Render.isConchApp)this.nativeInput.blur();Browser.onPC&&Laya.systemTimer.clear(this,this._syncInputTransform);}
__proto._onKeyDown=function(e){if(e.keyCode===13){if(Browser.onMobile&&!this._multiline)
this.focus=false;this.event("enter");}}
__proto.changeText=function(text){this._content=text;if(this._focus){this.nativeInput.value=text||'';this.event("change");}else
_super.prototype.changeText.call(this,text);}
__getset(0,__proto,'color',_super.prototype._$get_color,function(value){if(this._focus)
this.nativeInput.setColor(value);Laya.superSet(Text,this,'color',this._content?value:this._promptColor);this._originColor=value;});__getset(0,__proto,'multiline',function(){return this._multiline;},function(value){this._multiline=value;this.valign=value?"top":"middle";});__getset(0,__proto,'maxChars',function(){return this._maxChars;},function(value){if(value<=0)
value=1E5;this._maxChars=value;});__getset(0,__proto,'text',function(){if(this._focus)
return this.nativeInput.value;else
return this._content||"";},function(value){Laya.superSet(Text,this,'color',this._originColor);value+='';if(this._focus){this.nativeInput.value=value||'';this.event("change");}else{if(!this._multiline)
value=value.replace(/\r?\n/g,'');this._content=value;if(value)
Laya.superSet(Text,this,'text',value);else{Laya.superSet(Text,this,'text',this._prompt);Laya.superSet(Text,this,'color',this.promptColor);}}});__getset(0,__proto,'nativeInput',function(){return this._multiline?Input.area:Input.input;});__getset(0,__proto,'focus',function(){return this._focus;},function(value){var input=this.nativeInput;if(this._focus!==value){if(value){if(input.target){input.target._focusOut();}else{this._setInputMethod();}
input.target=this;this._focusIn();}else{input.target=null;this._focusOut();Browser.document.body.scrollTop=0;input.blur();if(Render.isConchApp)input.setPos(-10000,-10000);else if(Input.inputContainer.contains(input))Input.inputContainer.removeChild(input);}}});__getset(0,__proto,'editable',function(){return this._editable;},function(value){this._editable=value;if(Render.isConchApp){Input.input.setForbidEdit(!value);}});__getset(0,__proto,'bgColor',_super.prototype._$get_bgColor,function(value){Laya.superSet(Text,this,'bgColor',value);if(Render.isConchApp)
this.nativeInput.setBgColor(value);});__getset(0,__proto,'restrict',function(){if(this._restrictPattern){return this._restrictPattern.source;}
return"";},function(pattern){if(pattern){pattern="[^"+pattern+"]";if(pattern.indexOf("^^")>-1)
pattern=pattern.replace("^^","");this._restrictPattern=new RegExp(pattern,"g");}else
this._restrictPattern=null;});__getset(0,__proto,'prompt',function(){return this._prompt;},function(value){if(!this._text&&value)
Laya.superSet(Text,this,'color',this._promptColor);this.promptColor=this._promptColor;if(this._text)
Laya.superSet(Text,this,'text',(this._text==this._prompt)?value:this._text);else
Laya.superSet(Text,this,'text',value);this._prompt=Text.langPacks&&Text.langPacks[value]?Text.langPacks[value]:value;});__getset(0,__proto,'promptColor',function(){return this._promptColor;},function(value){this._promptColor=value;if(!this._content)Laya.superSet(Text,this,'color',value);});__getset(0,__proto,'type',function(){return this._type;},function(value){if(value==="password")this._getTextStyle().asPassword=true;else this._getTextStyle().asPassword=false;this._type=value;});Input.__init__=function(){Input._createInputElement();if(Browser.onMobile){var isTrue=false;if(Browser.onMiniGame||Browser.onBDMiniGame||Browser.onQGMiniGame||Browser.onKGMiniGame||Browser.onVVMiniGame||Browser.onAlipayMiniGame||Browser.onBLMiniGame||Browser.onQQMiniGame){isTrue=true;}
Render.canvas.addEventListener(Input.IOS_IFRAME?(isTrue?"touchend":"click"):"touchend",Input._popupInputMethod);}}
Input._popupInputMethod=function(e){if(!laya.display.Input.isInputting)return;var input=laya.display.Input.inputElement;input.focus();}
Input._createInputElement=function(){Input._initInput(Input.area=Browser.createElement("textarea"));Input._initInput(Input.input=Browser.createElement("input"));Input.inputContainer=Browser.createElement("div");Input.inputContainer.style.position="absolute";Input.inputContainer.style.zIndex=1E5;Browser.container.appendChild(Input.inputContainer);Input.inputContainer.setPos=function(x,y){Input.inputContainer.style.left=x+'px';Input.inputContainer.style.top=y+'px';};}
Input._initInput=function(input){var style=input.style;style.cssText="position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;";style.resize='none';style.backgroundColor='transparent';style.border='none';style.outline='none';style.zIndex=1;input.addEventListener('input',Input._processInputting);input.addEventListener('mousemove',Input._stopEvent);input.addEventListener('mousedown',Input._stopEvent);input.addEventListener('touchmove',Input._stopEvent);input.setFontFace=function(fontFace){input.style.fontFamily=fontFace;};if(!Render.isConchApp){input.setColor=function(color){input.style.color=color;};input.setFontSize=function(fontSize){input.style.fontSize=fontSize+'px';};}}
Input._processInputting=function(e){var input=laya.display.Input.inputElement.target;if(!input)return;var value=laya.display.Input.inputElement.value;if(input._restrictPattern){value=value.replace(/\u2006|\x27/g,"");if(input._restrictPattern.test(value)){value=value.replace(input._restrictPattern,"");laya.display.Input.inputElement.value=value;}}
input._text=value;input.event("input");}
Input._stopEvent=function(e){if(e.type=='touchmove')
e.preventDefault();e.stopPropagation&&e.stopPropagation();}
Input.TYPE_TEXT="text";Input.TYPE_PASSWORD="password";Input.TYPE_EMAIL="email";Input.TYPE_URL="url";Input.TYPE_NUMBER="number";Input.TYPE_RANGE="range";Input.TYPE_DATE="date";Input.TYPE_MONTH="month";Input.TYPE_WEEK="week";Input.TYPE_TIME="time";Input.TYPE_DATE_TIME="datetime";Input.TYPE_DATE_TIME_LOCAL="datetime-local";Input.TYPE_SEARCH="search";Input.input=null;Input.area=null;Input.inputElement=null;Input.inputContainer=null;Input.confirmButton=null;Input.promptStyleDOM=null;Input.inputHeight=45;Input.isInputting=false;Input.stageMatrix=null;__static(Input,['IOS_IFRAME',function(){return this.IOS_IFRAME=(Browser.onIOS&&Browser.window.top!=Browser.window.self);}]);return Input;})(Text)
var Animation=(function(_super){function Animation(){this._frames=null;this._url=null;Animation.__super.call(this);this._setControlNode(this);}
__class(Animation,'laya.display.Animation',_super);var __proto=Animation.prototype;__proto.destroy=function(destroyChild){(destroyChild===void 0)&&(destroyChild=true);this.stop();laya.display.Sprite.prototype.destroy.call(this,destroyChild);this._frames=null;this._labels=null;}
__proto.play=function(start,loop,name){(start===void 0)&&(start=0);(loop===void 0)&&(loop=true);(name===void 0)&&(name="");if(name)this._setFramesFromCache(name,true);_super.prototype.play.call(this,start,loop,name);}
__proto._setFramesFromCache=function(name,showWarn){(showWarn===void 0)&&(showWarn=false);if(this._url)name=this._url+"#"+name;if(name&&Animation.framesMap[name]){var tAniO=Animation.framesMap[name];if((tAniO instanceof Array)){this._frames=Animation.framesMap[name];this._count=this._frames.length;}else{if(tAniO.nodeRoot){Animation.framesMap[name]=GraphicAnimation.parseAnimationByData(tAniO);tAniO=Animation.framesMap[name];}
this._frames=tAniO.frames;this._count=this._frames.length;if(!this._frameRateChanged)this._interval=tAniO.interval;this._labels=this._copyLabels(tAniO.labels);}
return true;}else{if(showWarn)console.log("ani not found:",name);}
return false;}
__proto._copyLabels=function(labels){if(!labels)return null;var rst;rst={};var key;for(key in labels){rst[key]=Utils.copyArray([],labels[key]);}
return rst;}
__proto._frameLoop=function(){if(this._visible&&this._style.alpha>0.01&&this._frames){_super.prototype._frameLoop.call(this);}}
__proto._displayToIndex=function(value){if(this._frames)this.graphics=this._frames[value];}
__proto.clear=function(){_super.prototype.clear.call(this);this.stop();this.graphics=null;this._frames=null;this._labels=null;return this;}
__proto.loadImages=function(urls,cacheName){(cacheName===void 0)&&(cacheName="");this._url="";if(!this._setFramesFromCache(cacheName)){this.frames=Animation.framesMap[cacheName]?Animation.framesMap[cacheName]:Animation.createFrames(urls,cacheName);}
return this;}
__proto.loadAtlas=function(url,loaded,cacheName){(cacheName===void 0)&&(cacheName="");this._url="";var _this=this;if(!_this._setFramesFromCache(cacheName)){function onLoaded(loadUrl){if(url===loadUrl){_this.frames=Animation.framesMap[cacheName]?Animation.framesMap[cacheName]:Animation.createFrames(url,cacheName);if(loaded)loaded.run();}}
if(Loader.getAtlas(url))onLoaded(url);else Laya.loader.load(url,Handler.create(null,onLoaded,[url]),null,"atlas");}
return this;}
__proto.loadAnimation=function(url,loaded,atlas){this._url=url;var _this=this;if(!this._actionName)this._actionName="";if(!_this._setFramesFromCache(this._actionName)){if(!atlas||Loader.getAtlas(atlas)){this._loadAnimationData(url,loaded,atlas);}else{Laya.loader.load(atlas,Handler.create(this,this._loadAnimationData,[url,loaded,atlas]),null,"atlas")}}else{_this._setFramesFromCache(this._actionName,true);this.index=0;if(loaded)loaded.run();}
return this;}
__proto._loadAnimationData=function(url,loaded,atlas){var _$this=this;if(atlas&&!Loader.getAtlas(atlas)){console.warn("atlas load fail:"+atlas);return;};var _this=this;function onLoaded(loadUrl){if(!Loader.getRes(loadUrl)){if(Animation.framesMap[url+"#"]){_this._setFramesFromCache(_$this._actionName,true);_$this.index=0;_$this._resumePlay();if(loaded)loaded.run();}
return;}
if(url===loadUrl){var tAniO;if(!Animation.framesMap[url+"#"]){var aniData=GraphicAnimation.parseAnimationData(Loader.getRes(url));if(!aniData)return;var aniList=aniData.animationList;var i=0,len=aniList.length;var defaultO;for(i=0;i<len;i++){tAniO=aniList[i];Animation.framesMap[url+"#"+tAniO.name]=tAniO;if(!defaultO)defaultO=tAniO;}
if(defaultO){Animation.framesMap[url+"#"]=defaultO;_this._setFramesFromCache(_$this._actionName,true);_$this.index=0;}
_$this._resumePlay();}else{_this._setFramesFromCache(_$this._actionName,true);_$this.index=0;_$this._resumePlay();}
if(loaded)loaded.run();}
Loader.clearRes(url);}
if(Loader.getRes(url))onLoaded(url);else Laya.loader.load(url,Handler.create(null,onLoaded,[url]),null,"json");}
__getset(0,__proto,'frames',function(){return this._frames;},function(value){this._frames=value;if(value){this._count=value.length;if(this._actionName)this._setFramesFromCache(this._actionName,true);this.index=this._index;}});__getset(0,__proto,'autoPlay',null,function(value){if(value)this.play();else this.stop();});__getset(0,__proto,'source',null,function(value){if(value.indexOf(".ani")>-1)this.loadAnimation(value);else if(value.indexOf(".json")>-1||value.indexOf("als")>-1||value.indexOf("atlas")>-1)this.loadAtlas(value);else this.loadImages(value.split(","));});__getset(0,__proto,'autoAnimation',null,function(value){this.play(0,true,value);});Animation.createFrames=function(url,name){var arr;if((typeof url=='string')){var atlas=Loader.getAtlas(url);if(atlas&&atlas.length){arr=[];for(var i=0,n=atlas.length;i<n;i++){var g=new Graphics();g.drawImage(Loader.getRes(atlas[i]),0,0);arr.push(g);}}}else if((url instanceof Array)){arr=[];for(i=0,n=url.length;i<n;i++){g=new Graphics();g.loadImage(url[i],0,0);arr.push(g);}}
if(name)Animation.framesMap[name]=arr;return arr;}
Animation.clearCache=function(key){var cache=Animation.framesMap;var val;var key2=key+"#";for(val in cache){if(val===key||val.indexOf(key2)===0){delete Animation.framesMap[val];}}}
Animation.framesMap={};return Animation;})(AnimationBase)
var Shader2X=(function(_super){function Shader2X(vs,ps,saveName,nameMap,bindAttrib){this._params2dQuick2=null;this._shaderValueWidth=0;this._shaderValueHeight=0;Shader2X.__super.call(this,vs,ps,saveName,nameMap,bindAttrib);}
__class(Shader2X,'laya.webgl.shader.d2.Shader2X',_super);var __proto=Shader2X.prototype;__proto._disposeResource=function(){_super.prototype._disposeResource.call(this);this._params2dQuick2=null;}
__proto.upload2dQuick2=function(shaderValue){this.upload(shaderValue,this._params2dQuick2||this._make2dQuick2());}
__proto._make2dQuick2=function(){if(!this._params2dQuick2){this._params2dQuick2=[];var params=this._params,one;for(var i=0,n=params.length;i<n;i++){one=params[i];if(one.name!=="size")this._params2dQuick2.push(one);}}
return this._params2dQuick2;}
Shader2X.create=function(vs,ps,saveName,nameMap,bindAttrib){return new Shader2X(vs,ps,saveName,nameMap,bindAttrib);}
return Shader2X;})(Shader)
var FrameAnimation=(function(_super){function FrameAnimation(){this._targetDic=null;this._animationData=null;this._usedFrames=null;FrameAnimation.__super.call(this);if(FrameAnimation._sortIndexFun===null){FrameAnimation._sortIndexFun=MathUtil.sortByKey("index",false,true);}}
__class(FrameAnimation,'laya.display.FrameAnimation',_super);var __proto=FrameAnimation.prototype;__proto._setUp=function(targetDic,animationData){this._targetDic=targetDic;this._animationData=animationData;this.interval=1000/animationData.frameRate;if(animationData.parsed){this._count=animationData.count;this._labels=animationData.labels;this._usedFrames=animationData.animationNewFrames;}else{this._usedFrames=[];this._calculateDatas();animationData.parsed=true;animationData.labels=this._labels;animationData.count=this._count;animationData.animationNewFrames=this._usedFrames;}}
__proto.clear=function(){_super.prototype.clear.call(this);this._targetDic=null;this._animationData=null;return this;}
__proto._displayToIndex=function(value){if(!this._animationData)return;if(value<0)value=0;if(value>this._count)value=this._count;var nodes=this._animationData.nodes,i=0,len=nodes.length;for(i=0;i<len;i++){this._displayNodeToFrame(nodes[i],value);}}
__proto._displayNodeToFrame=function(node,frame,targetDic){if(!targetDic)targetDic=this._targetDic;var target=targetDic[node.target];if(!target){return;};var frames=node.frames,key,propFrames,value;var keys=node.keys,i=0,len=keys.length;for(i=0;i<len;i++){key=keys[i];propFrames=frames[key];if(propFrames.length>frame){value=propFrames[frame];}else{value=propFrames[propFrames.length-1];}
target[key]=value;};var funkeys=node.funkeys;len=funkeys.length;var funFrames;if(len==0)return;for(i=0;i<len;i++){key=funkeys[i];funFrames=frames[key];if(funFrames[frame]!==undefined){target[key]&&target[key].apply(target,funFrames[frame]);}}}
__proto._calculateDatas=function(){if(!this._animationData)return;var nodes=this._animationData.nodes,i=0,len=nodes.length,tNode;this._count=0;for(i=0;i<len;i++){tNode=nodes[i];this._calculateKeyFrames(tNode);}
this._count+=1;}
__proto._calculateKeyFrames=function(node){var keyFrames=node.keyframes,key,tKeyFrames,target=node.target;if(!node.frames)node.frames={};if(!node.keys)node.keys=[];else node.keys.length=0;if(!node.funkeys)node.funkeys=[];else node.funkeys.length=0;if(!node.initValues)node.initValues={};for(key in keyFrames){var isFun=key.indexOf("()")!=-1;tKeyFrames=keyFrames[key];if(isFun)key=key.substr(0,key.length-2);if(!node.frames[key]){node.frames[key]=[];}
if(!isFun){if(this._targetDic&&this._targetDic[target]){node.initValues[key]=this._targetDic[target][key];}
tKeyFrames.sort(FrameAnimation._sortIndexFun);node.keys.push(key);this._calculateNodePropFrames(tKeyFrames,node.frames[key],key,target);}else{node.funkeys.push(key);var map=node.frames[key];for(var i=0;i<tKeyFrames.length;i++){var temp=tKeyFrames[i];map[temp.index]=temp.value;if(temp.index>this._count)this._count=temp.index;}}}}
__proto.resetNodes=function(){if(!this._targetDic)return;if(!this._animationData)return;var nodes=this._animationData.nodes,i=0,len=nodes.length;var tNode;var initValues;for(i=0;i<len;i++){tNode=nodes[i];initValues=tNode.initValues;if(!initValues)continue;var target=this._targetDic[tNode.target];if(!target)continue;var key;for(key in initValues){target[key]=initValues[key];}}}
__proto._calculateNodePropFrames=function(keyframes,frames,key,target){var i=0,len=keyframes.length-1;frames.length=keyframes[len].index+1;for(i=0;i<len;i++){this._dealKeyFrame(keyframes[i]);this._calculateFrameValues(keyframes[i],keyframes[i+1],frames);}
if(len==0){frames[0]=keyframes[0].value;if(this._usedFrames)this._usedFrames[keyframes[0].index]=true;}
this._dealKeyFrame(keyframes[i]);}
__proto._dealKeyFrame=function(keyFrame){if(keyFrame.label&&keyFrame.label!="")this.addLabel(keyFrame.label,keyFrame.index);}
__proto._calculateFrameValues=function(startFrame,endFrame,result){var i=0,easeFun;var start=startFrame.index,end=endFrame.index;var startValue=startFrame.value;var dValue=endFrame.value-startFrame.value;var dLen=end-start;var frames=this._usedFrames;if(end>this._count)this._count=end;if(startFrame.tween){easeFun=Ease[startFrame.tweenMethod];if(easeFun==null)easeFun=Ease.linearNone;for(i=start;i<end;i++){result[i]=easeFun(i-start,startValue,dValue,dLen);if(frames)frames[i]=true;}}else{for(i=start;i<end;i++){result[i]=startValue;}}
if(frames){frames[startFrame.index]=true;frames[endFrame.index]=true;}
result[endFrame.index]=endFrame.value;}
FrameAnimation._sortIndexFun=null;return FrameAnimation;})(AnimationBase)
var Texture2D=(function(_super){function Texture2D(width,height,format,mipmap,canRead){(width===void 0)&&(width=0);(height===void 0)&&(height=0);(format===void 0)&&(format=1);(mipmap===void 0)&&(mipmap=true);(canRead===void 0)&&(canRead=false);Texture2D.__super.call(this,format,mipmap);this._glTextureType=0x0DE1;this._width=width;this._height=height;this._canRead=canRead;this._setWarpMode(0x2802,this._wrapModeU);this._setWarpMode(0x2803,this._wrapModeV);this._setFilterMode(this._filterMode);this._setAnisotropy(this._anisoLevel);if(this._mipmap){this._mipmapCount=Math.max(Math.ceil(Math.log2(width))+1,Math.ceil(Math.log2(2))+1);for(var i=0;i<this._mipmapCount;i++)
this._setPixels(null,i,Math.max(width>>i,1),Math.max(height>>i,1));this._setGPUMemory(width*height*4*(1+1/3));}else{this._mipmapCount=1;this._setGPUMemory(width*height*4);}}
__class(Texture2D,'laya.resource.Texture2D',_super);var __proto=Texture2D.prototype;__proto._getFormatByteCount=function(){switch(this._format){case 0:return 3;case 1:return 4;case 2:return 1;default:throw"Texture2D: unknown format.";}}
__proto._setPixels=function(pixels,miplevel,width,height){var gl=LayaGL.instance;var textureType=this._glTextureType;var glFormat=this._getGLFormat();WebGLContext.bindTexture(gl,textureType,this._glTexture);if(this.format===0){gl.pixelStorei(0x0CF5,1);gl.texImage2D(textureType,miplevel,glFormat,width,height,0,glFormat,0x1401,pixels);gl.pixelStorei(0x0CF5,4);}else{gl.texImage2D(textureType,miplevel,glFormat,width,height,0,glFormat,0x1401,pixels);}}
__proto._calcualatesCompressedDataSize=function(format,width,height){switch(format){case 3:case 5:return((width+3)>>2)*((height+3)>>2)*8;case 4:return((width+3)>>2)*((height+3)>>2)*16;case 11:case 12:return Math.floor((Math.max(width,8)*Math.max(height,8)*4+7)/8);case 9:case 10:return Math.floor((Math.max(width,16)*Math.max(height,8)*2+7)/8);default:return 0;}}
__proto._pharseDDS=function(arrayBuffer){var FOURCC_DXT1=827611204;var FOURCC_DXT5=894720068;var DDPF_FOURCC=0x4;var DDSD_MIPMAPCOUNT=0x20000;var DDS_MAGIC=0x20534444;var DDS_HEADER_LENGTH=31;var DDS_HEADER_MAGIC=0;var DDS_HEADER_SIZE=1;var DDS_HEADER_FLAGS=2;var DDS_HEADER_HEIGHT=3;var DDS_HEADER_WIDTH=4;var DDS_HEADER_MIPMAPCOUNT=7;var DDS_HEADER_PF_FLAGS=20;var DDS_HEADER_PF_FOURCC=21;var header=new Int32Array(arrayBuffer,0,DDS_HEADER_LENGTH);if(header[DDS_HEADER_MAGIC]!=DDS_MAGIC)
throw"Invalid magic number in DDS header";if(!(header[DDS_HEADER_PF_FLAGS]&DDPF_FOURCC))
throw"Unsupported format, must contain a FourCC code";var compressedFormat=header[DDS_HEADER_PF_FOURCC];switch(this._format){case 3:if(compressedFormat!==FOURCC_DXT1)
throw"the FourCC code is not same with texture format.";break;case 4:if(compressedFormat!==FOURCC_DXT5)
throw"the FourCC code is not same with texture format.";break;default:throw"unknown texture format.";};var mipLevels=1;if(header[DDS_HEADER_FLAGS]&DDSD_MIPMAPCOUNT){mipLevels=Math.max(1,header[DDS_HEADER_MIPMAPCOUNT]);if(!this._mipmap)
throw"the mipmap is not same with Texture2D.";}else{if(this._mipmap)
throw"the mipmap is not same with Texture2D.";};var width=header[DDS_HEADER_WIDTH];var height=header[DDS_HEADER_HEIGHT];this._width=width;this._height=height;var dataOffset=header[DDS_HEADER_SIZE]+4;this._upLoadCompressedTexImage2D(arrayBuffer,width,height,mipLevels,dataOffset,0);}
__proto._pharseKTX=function(arrayBuffer){var ETC_HEADER_LENGTH=13;var ETC_HEADER_FORMAT=4;var ETC_HEADER_HEIGHT=7;var ETC_HEADER_WIDTH=6;var ETC_HEADER_MIPMAPCOUNT=11;var ETC_HEADER_METADATA=12;var id=new Uint8Array(arrayBuffer,0,12);if(id[0]!=0xAB||id[1]!=0x4B||id[2]!=0x54||id[3]!=0x58||id[4]!=0x20||id[5]!=0x31||id[6]!=0x31||id[7]!=0xBB||id[8]!=0x0D||id[9]!=0x0A||id[10]!=0x1A||id[11]!=0x0A)
throw("Invalid fileIdentifier in KTX header");var header=new Int32Array(id.buffer,id.length,ETC_HEADER_LENGTH);var compressedFormat=header[ETC_HEADER_FORMAT];switch(compressedFormat){case WebGLContext._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:this._format=5;break;default:throw"unknown texture format.";};var mipLevels=header[ETC_HEADER_MIPMAPCOUNT];var width=header[ETC_HEADER_WIDTH];var height=header[ETC_HEADER_HEIGHT];this._width=width;this._height=height;var dataOffset=64+header[ETC_HEADER_METADATA];this._upLoadCompressedTexImage2D(arrayBuffer,width,height,mipLevels,dataOffset,4);}
__proto._pharsePVR=function(arrayBuffer){var PVR_FORMAT_2BPP_RGB=0;var PVR_FORMAT_2BPP_RGBA=1;var PVR_FORMAT_4BPP_RGB=2;var PVR_FORMAT_4BPP_RGBA=3;var PVR_MAGIC=0x03525650;var PVR_HEADER_LENGTH=13;var PVR_HEADER_MAGIC=0;var PVR_HEADER_FORMAT=2;var PVR_HEADER_HEIGHT=6;var PVR_HEADER_WIDTH=7;var PVR_HEADER_MIPMAPCOUNT=11;var PVR_HEADER_METADATA=12;var header=new Int32Array(arrayBuffer,0,PVR_HEADER_LENGTH);if(header[PVR_HEADER_MAGIC]!=PVR_MAGIC)
throw("Invalid magic number in PVR header");var compressedFormat=header[PVR_HEADER_FORMAT];switch(compressedFormat){case PVR_FORMAT_2BPP_RGB:this._format=9;break;case PVR_FORMAT_4BPP_RGB:this._format=11;break;case PVR_FORMAT_2BPP_RGBA:this._format=10;break;case PVR_FORMAT_4BPP_RGBA:this._format=12;break;default:throw"Texture2D:unknown PVR format.";};var mipLevels=header[PVR_HEADER_MIPMAPCOUNT];var width=header[PVR_HEADER_WIDTH];var height=header[PVR_HEADER_HEIGHT];this._width=width;this._height=height;var dataOffset=header[PVR_HEADER_METADATA]+52;this._upLoadCompressedTexImage2D(arrayBuffer,width,height,mipLevels,dataOffset,0);}
__proto._upLoadCompressedTexImage2D=function(data,width,height,miplevelCount,dataOffset,imageSizeOffset){var gl=LayaGL.instance;var textureType=this._glTextureType;WebGLContext.bindTexture(gl,textureType,this._glTexture);var glFormat=this._getGLFormat();var offset=dataOffset;for(var i=0;i<miplevelCount;i++){offset+=imageSizeOffset;var mipDataSize=this._calcualatesCompressedDataSize(this._format,width,height);var mipData=new Uint8Array(data,offset,mipDataSize);gl.compressedTexImage2D(textureType,i,glFormat,width,height,0,mipData);width=Math.max(width>>1,1.0);height=Math.max(height>>1,1.0);offset+=mipDataSize;};var memory=offset;this._setGPUMemory(memory);this._readyed=true;this._activeResource();}
__proto.loadImageSource=function(source,premultiplyAlpha){(premultiplyAlpha===void 0)&&(premultiplyAlpha=false);var width=source.width;var height=source.height;this._width=width;this._height=height;if(!(this._isPot(width)&&this._isPot(height)))
this._mipmap=false;this._setWarpMode(0x2802,this._wrapModeU);this._setWarpMode(0x2803,this._wrapModeV);this._setFilterMode(this._filterMode);var gl=LayaGL.instance;WebGLContext.bindTexture(gl,this._glTextureType,this._glTexture);var glFormat=this._getGLFormat();if(Render.isConchApp){if((source instanceof laya.resource.HTMLCanvas)){gl.texImage2D(this._glTextureType,0,0x1908,0x1908,0x1401,source);}else{source.setPremultiplyAlpha(premultiplyAlpha);gl.texImage2D(this._glTextureType,0,0x1908,0x1908,0x1401,source);}}else{(premultiplyAlpha)&&(gl.pixelStorei(0x9241,true));gl.texImage2D(this._glTextureType,0,glFormat,glFormat,0x1401,source);(premultiplyAlpha)&&(gl.pixelStorei(0x9241,false));}
if(this._mipmap){gl.generateMipmap(this._glTextureType);this._setGPUMemory(width*height*4*(1+1/3));}else{this._setGPUMemory(width*height*4);}
if(this._canRead){if(Render.isConchApp){this._pixels=new Uint8Array(source._nativeObj.getImageData(0,0,width,height));}else{Browser.canvas.size(width,height);Browser.canvas.clear();Browser.context.drawImage(source,0,0,width,height);this._pixels=new Uint8Array(Browser.context.getImageData(0,0,width,height).data.buffer);}}
this._readyed=true;this._activeResource();}
__proto.setPixels=function(pixels,miplevel){(miplevel===void 0)&&(miplevel=0);if(!pixels)
throw"Texture2D:pixels can't be null.";var width=Math.max(this._width>>miplevel,1);var height=Math.max(this._height>>miplevel,1);var pixelsCount=width*height*this._getFormatByteCount();if(pixels.length<pixelsCount)
throw"Texture2D:pixels length should at least "+pixelsCount+".";this._setPixels(pixels,miplevel,width,height);if(this._canRead)
this._pixels=pixels;this._readyed=true;this._activeResource();}
__proto.setSubPixels=function(x,y,width,height,pixels,miplevel){(miplevel===void 0)&&(miplevel=0);if(!pixels)
throw"Texture2D:pixels can't be null.";var gl=LayaGL.instance;var textureType=this._glTextureType;WebGLContext.bindTexture(gl,textureType,this._glTexture);var glFormat=this._getGLFormat();if(this._format===0){gl.pixelStorei(0x0CF5,1);gl.texSubImage2D(textureType,miplevel,x,y,width,height,glFormat,0x1401,pixels);gl.pixelStorei(0x0CF5,4);}else{gl.texSubImage2D(textureType,miplevel,x,y,width,height,glFormat,0x1401,pixels);}
this._readyed=true;this._activeResource();}
__proto.setCompressData=function(data){switch(this._format){case 3:case 4:this._pharseDDS(data);break;case 5:this._pharseKTX(data);break;case 9:case 10:case 11:case 12:this._pharsePVR(data);break;default:throw"Texture2D:unkonwn format.";}}
__proto._recoverResource=function(){}
__proto.getPixels=function(){if(this._canRead)
return this._pixels;else
throw new Error("Texture2D: must set texture canRead is true.");}
__getset(0,__proto,'mipmapCount',function(){return this._mipmapCount;});__getset(0,__proto,'defaulteTexture',function(){return laya.resource.Texture2D.grayTexture;});Texture2D.__init__=function(){var pixels=new Uint8Array(3);pixels[0]=128;pixels[1]=128;pixels[2]=128;Texture2D.grayTexture=new Texture2D(1,1,0,false,false);Texture2D.grayTexture.setPixels(pixels);Texture2D.grayTexture.lock=true;pixels[0]=255;pixels[1]=255;pixels[2]=255;Texture2D.whiteTexture=new Texture2D(1,1,0,false,false);Texture2D.whiteTexture.setPixels(pixels);Texture2D.whiteTexture.lock=true;pixels[0]=0;pixels[1]=0;pixels[2]=0;Texture2D.blackTexture=new Texture2D(1,1,0,false,false);Texture2D.blackTexture.setPixels(pixels);Texture2D.blackTexture.lock=true;}
Texture2D._parse=function(data,propertyParams,constructParams){var texture=constructParams?new Texture2D(constructParams[0],constructParams[1],constructParams[2],constructParams[3],constructParams[4]):new Texture2D(0,0);if(propertyParams){texture.wrapModeU=propertyParams.wrapModeU;texture.wrapModeV=propertyParams.wrapModeV;texture.filterMode=propertyParams.filterMode;texture.anisoLevel=propertyParams.anisoLevel;}
switch(texture._format){case 0:case 1:texture.loadImageSource(data);break;case 3:case 4:case 5:case 9:case 10:case 11:case 12:texture.setCompressData(data);break;default:throw"Texture2D:unkonwn format.";}
return texture;}
Texture2D.load=function(url,complete){Laya.loader.create(url,complete,null,"TEXTURE2D");}
Texture2D.grayTexture=null;Texture2D.whiteTexture=null;Texture2D.blackTexture=null;return Texture2D;})(BaseTexture)
var RenderTexture2D=(function(_super){function RenderTexture2D(width,height,format,depthStencilFormat){this._mgrKey=0;(format===void 0)&&(format=0);(depthStencilFormat===void 0)&&(depthStencilFormat=0);RenderTexture2D.__super.call(this,format,false);this._glTextureType=0x0DE1;this._width=width;this._height=height;this._depthStencilFormat=depthStencilFormat;this._create(width,height);this.lock=true;}
__class(RenderTexture2D,'laya.resource.RenderTexture2D',_super);var __proto=RenderTexture2D.prototype;__proto.getIsReady=function(){return true;}
__proto._create=function(width,height){var gl=LayaGL.instance;this._frameBuffer=gl.createFramebuffer();WebGLContext.bindTexture(gl,this._glTextureType,this._glTexture);var glFormat=this._getGLFormat();gl.texImage2D(this._glTextureType,0,glFormat,width,height,0,glFormat,0x1401,null);this._setGPUMemory(width*height*4);gl.bindFramebuffer(0x8D40,this._frameBuffer);gl.framebufferTexture2D(0x8D40,0x8CE0,0x0DE1,this._glTexture,0);if(this._depthStencilFormat!==3){this._depthStencilBuffer=gl.createRenderbuffer();gl.bindRenderbuffer(0x8D41,this._depthStencilBuffer);switch(this._depthStencilFormat){case 0:gl.renderbufferStorage(0x8D41,0x81A5,width,height);gl.framebufferRenderbuffer(0x8D40,0x8D00,0x8D41,this._depthStencilBuffer);break;case 1:gl.renderbufferStorage(0x8D41,0x8D48,width,height);gl.framebufferRenderbuffer(0x8D40,0x8D20,0x8D41,this._depthStencilBuffer);break;case 2:gl.renderbufferStorage(0x8D41,0x84F9,width,height);gl.framebufferRenderbuffer(0x8D40,0x821A,0x8D41,this._depthStencilBuffer);break;default:}}
gl.bindFramebuffer(0x8D40,null);gl.bindRenderbuffer(0x8D41,null);this._setWarpMode(0x2802,this._wrapModeU);this._setWarpMode(0x2803,this._wrapModeV);this._setFilterMode(this._filterMode);this._setAnisotropy(this._anisoLevel);this._readyed=true;this._activeResource();}
__proto.generateMipmap=function(){if(this._isPot(this.width)&&this._isPot(this.height)){this._mipmap=true;LayaGL.instance.generateMipmap(this._glTextureType);this._setFilterMode(this._filterMode);this._setGPUMemory(this.width*this.height*4*(1+1/3));}else{this._mipmap=false;this._setGPUMemory(this.width*this.height*4);}}
__proto.start=function(){var gl=LayaGL.instance;LayaGL.instance.bindFramebuffer(0x8D40,this._frameBuffer);this._lastRT=RenderTexture2D._currentActive;RenderTexture2D._currentActive=this;this._readyed=true;gl.viewport(0,0,this._width,this._height);this._lastWidth=RenderState2D.width;this._lastHeight=RenderState2D.height;RenderState2D.width=this._width;RenderState2D.height=this._height;BaseShader.activeShader=null;}
__proto.end=function(){LayaGL.instance.bindFramebuffer(0x8D40,null);RenderTexture2D._currentActive=null;this._readyed=true;}
__proto.restore=function(){var gl=LayaGL.instance;if(this._lastRT!=RenderTexture2D._currentActive){LayaGL.instance.bindFramebuffer(0x8D40,this._lastRT?this._lastRT._frameBuffer:null);RenderTexture2D._currentActive=this._lastRT;}
this._readyed=true;gl.viewport(0,0,this._lastWidth,this._lastHeight);RenderState2D.width=this._lastWidth;RenderState2D.height=this._lastHeight;BaseShader.activeShader=null;}
__proto.clear=function(r,g,b,a){(r===void 0)&&(r=0.0);(g===void 0)&&(g=0.0);(b===void 0)&&(b=0.0);(a===void 0)&&(a=1.0);var gl=LayaGL.instance;gl.clearColor(r,g,b,a);var clearFlag=0x00004000;switch(this._depthStencilFormat){case 0x81A5:clearFlag|=0x00000100;break;case 0x8D48:clearFlag|=0x00000400;break;case 0x84F9:clearFlag|=0x00000100;clearFlag|=0x00000400
break;}
gl.clear(clearFlag);}
__proto.getData=function(x,y,width,height){if(Render.isConchApp&&conchConfig.threadMode==2){throw"native 2 thread mode use getDataAsync";};var gl=LayaGL.instance;gl.bindFramebuffer(0x8D40,this._frameBuffer);var canRead=(gl.checkFramebufferStatus(0x8D40)===0x8CD5);if(!canRead){gl.bindFramebuffer(0x8D40,null);return null;};var pixels=new Uint8Array(this._width*this._height*4);var glFormat=this._getGLFormat();gl.readPixels(x,y,width,height,glFormat,0x1401,pixels);gl.bindFramebuffer(0x8D40,null);return pixels;}
__proto.getDataAsync=function(x,y,width,height,callBack){var gl=LayaGL.instance;gl.bindFramebuffer(0x8D40,this._frameBuffer);gl.readPixelsAsync(x,y,width,height,0x1908,0x1401,function(data){callBack(new Uint8Array(data));});gl.bindFramebuffer(0x8D40,null);}
__proto.recycle=function(){}
__proto._disposeResource=function(){if(this._frameBuffer){var gl=LayaGL.instance;gl.deleteTexture(this._glTexture);gl.deleteFramebuffer(this._frameBuffer);gl.deleteRenderbuffer(this._depthStencilBuffer);this._glTexture=null;this._frameBuffer=null;this._depthStencilBuffer=null;this._setGPUMemory(0);}}
__getset(0,__proto,'depthStencilFormat',function(){return this._depthStencilFormat;});__getset(0,__proto,'defaulteTexture',function(){return Texture2D.grayTexture;});__getset(0,__proto,'sourceWidth',function(){return this._width;});__getset(0,__proto,'sourceHeight',function(){return this._height;});__getset(0,__proto,'offsetX',function(){return 0;});__getset(0,__proto,'offsetY',function(){return 0;});__getset(1,RenderTexture2D,'currentActive',function(){return RenderTexture2D._currentActive;},laya.resource.BaseTexture._$SET_currentActive);RenderTexture2D.pushRT=function(){RenderTexture2D.rtStack.push({rt:RenderTexture2D._currentActive,w:RenderState2D.width,h:RenderState2D.height});}
RenderTexture2D.popRT=function(){var gl=LayaGL.instance;var top=RenderTexture2D.rtStack.pop();if(top){if(RenderTexture2D._currentActive!=top.rt){LayaGL.instance.bindFramebuffer(0x8D40,top.rt?top.rt._frameBuffer:null);RenderTexture2D._currentActive=top.rt;}
gl.viewport(0,0,top.w,top.h);RenderState2D.width=top.w;RenderState2D.height=top.h;}}
RenderTexture2D._currentActive=null;RenderTexture2D.rtStack=[];__static(RenderTexture2D,['defuv',function(){return this.defuv=[0,0,1,0,1,1,0,1];},'flipyuv',function(){return this.flipyuv=[0,1,1,1,1,0,0,0];}]);return RenderTexture2D;})(BaseTexture)
var GraphicAnimation=(function(_super){var GraphicNode;function GraphicAnimation(){this.animationList=null;this.animationDic=null;this._nodeList=null;this._nodeDefaultProps=null;this._gList=null;this._nodeIDAniDic={};this._rootNode=null;this._nodeGDic=null;GraphicAnimation.__super.call(this);}
__class(GraphicAnimation,'laya.utils.GraphicAnimation',_super);var __proto=GraphicAnimation.prototype;__proto._parseNodeList=function(uiView){if(!this._nodeList)this._nodeList=[];this._nodeDefaultProps[uiView.compId]=uiView.props;if(uiView.compId)this._nodeList.push(uiView.compId);var childs=uiView.child;if(childs){var i=0,len=childs.length;for(i=0;i<len;i++){this._parseNodeList(childs[i]);}}}
__proto._calGraphicData=function(aniData){this._setUp(null,aniData);this._createGraphicData();if(this._nodeIDAniDic){var key;for(key in this._nodeIDAniDic){this._nodeIDAniDic[key]=null;}}}
__proto._createGraphicData=function(){var gList=[];var i=0,len=this.count;var animationDataNew=this._usedFrames;if(!animationDataNew)animationDataNew=[];var preGraphic;for(i=0;i<len;i++){if(animationDataNew[i]||!preGraphic){preGraphic=this._createFrameGraphic(i);}
gList.push(preGraphic);}
this._gList=gList;}
__proto._createFrameGraphic=function(frame){var g=new Graphics();if(!GraphicAnimation._rootMatrix)GraphicAnimation._rootMatrix=new Matrix();this._updateNodeGraphic(this._rootNode,frame,GraphicAnimation._rootMatrix,g);return g;}
__proto._updateNodeGraphic=function(node,frame,parentTransfrom,g,alpha){(alpha===void 0)&&(alpha=1);var tNodeG;tNodeG=this._nodeGDic[node.compId]=this._getNodeGraphicData(node.compId,frame,this._nodeGDic[node.compId]);if(!tNodeG.resultTransform)
tNodeG.resultTransform=new Matrix();var tResultTransform;tResultTransform=tNodeG.resultTransform;Matrix.mul(tNodeG.transform,parentTransfrom,tResultTransform);var tTex;var tGraphicAlpha=tNodeG.alpha*alpha;if(tGraphicAlpha<0.01)return;if(tNodeG.skin){tTex=this._getTextureByUrl(tNodeG.skin);if(tTex){if(tResultTransform._checkTransform()){g.drawTexture(tTex,0,0,tNodeG.width,tNodeG.height,tResultTransform,tGraphicAlpha);tNodeG.resultTransform=null;}else{g.drawTexture(tTex,tResultTransform.tx,tResultTransform.ty,tNodeG.width,tNodeG.height,null,tGraphicAlpha);}}};var childs=node.child;if(!childs)return;var i=0,len=0;len=childs.length;for(i=0;i<len;i++){this._updateNodeGraphic(childs[i],frame,tResultTransform,g,tGraphicAlpha);}}
__proto._updateNoChilds=function(tNodeG,g){if(!tNodeG.skin)return;var tTex=this._getTextureByUrl(tNodeG.skin);if(!tTex)return;var tTransform=tNodeG.transform;tTransform._checkTransform();var onlyTranslate=false;onlyTranslate=!tTransform._bTransform;if(!onlyTranslate){g.drawTexture(tTex,0,0,tNodeG.width,tNodeG.height,tTransform.clone(),tNodeG.alpha);}else{g.drawTexture(tTex,tTransform.tx,tTransform.ty,tNodeG.width,tNodeG.height,null,tNodeG.alpha);}}
__proto._updateNodeGraphic2=function(node,frame,g){var tNodeG;tNodeG=this._nodeGDic[node.compId]=this._getNodeGraphicData(node.compId,frame,this._nodeGDic[node.compId]);if(!node.child){this._updateNoChilds(tNodeG,g);return;};var tTransform=tNodeG.transform;tTransform._checkTransform();var onlyTranslate=false;onlyTranslate=!tTransform._bTransform;var hasTrans=false;hasTrans=onlyTranslate&&(tTransform.tx!=0||tTransform.ty!=0);var ifSave=false;ifSave=(tTransform._bTransform)||tNodeG.alpha!=1;if(ifSave)g.save();if(tNodeG.alpha!=1)g.alpha(tNodeG.alpha);if(!onlyTranslate)g.transform(tTransform.clone());else if(hasTrans)g.translate(tTransform.tx,tTransform.ty);var childs=node.child;var tTex;if(tNodeG.skin){tTex=this._getTextureByUrl(tNodeG.skin);if(tTex){g.drawImage(tTex,0,0,tNodeG.width,tNodeG.height);}}
if(childs){var i=0,len=0;len=childs.length;for(i=0;i<len;i++){this._updateNodeGraphic2(childs[i],frame,g);}}
if(ifSave){g.restore();}else{if(!onlyTranslate){g.transform(tTransform.clone().invert());}else if(hasTrans){g.translate(-tTransform.tx,-tTransform.ty);}}}
__proto._calculateKeyFrames=function(node){_super.prototype._calculateKeyFrames.call(this,node);this._nodeIDAniDic[node.target]=node;}
__proto.getNodeDataByID=function(nodeID){return this._nodeIDAniDic[nodeID];}
__proto._getParams=function(obj,params,frame,obj2){var rst=GraphicAnimation._temParam;rst.length=params.length;var i=0,len=params.length;for(i=0;i<len;i++){rst[i]=this._getObjVar(obj,params[i][0],frame,params[i][1],obj2);}
return rst;}
__proto._getObjVar=function(obj,key,frame,noValue,obj2){if(obj.hasOwnProperty(key)){var vArr=obj[key];if(frame>=vArr.length)frame=vArr.length-1;return obj[key][frame];}
if(obj2.hasOwnProperty(key)){return obj2[key];}
return noValue;}
__proto._getNodeGraphicData=function(nodeID,frame,rst){if(!rst)
rst=new GraphicNode();if(!rst.transform){rst.transform=new Matrix();}else{rst.transform.identity();};var node=this.getNodeDataByID(nodeID);if(!node)return rst;var frameData=node.frames;var params=this._getParams(frameData,GraphicAnimation._drawTextureCmd,frame,this._nodeDefaultProps[nodeID]);var url=params[0];var width=NaN,height=NaN;var px=params[5],py=params[6];var aX=params[13],aY=params[14];var sx=params[7],sy=params[8];var rotate=params[9];var skewX=params[11],skewY=params[12]
width=params[3];height=params[4];if(width==0||height==0)url=null;if(width==-1)width=0;if(height==-1)height=0;var tex;rst.skin=url;rst.width=width;rst.height=height;if(url){tex=this._getTextureByUrl(url);if(tex){if(!width)
width=tex.sourceWidth;if(!height)
height=tex.sourceHeight;}else{console.warn("lost skin:",url,",you may load pics first");}}
rst.alpha=params[10];var m=rst.transform;if(aX!=0){px=aX*width;}
if(aY!=0){py=aY*height;}
if(px!=0||py!=0){m.translate(-px,-py);};var tm=null;if(rotate||sx!==1||sy!==1||skewX||skewY){tm=GraphicAnimation._tempMt;tm.identity();tm._bTransform=true;var skx=(rotate-skewX)*0.0174532922222222;var sky=(rotate+skewY)*0.0174532922222222;var cx=Math.cos(sky);var ssx=Math.sin(sky);var cy=Math.sin(skx);var ssy=Math.cos(skx);tm.a=sx*cx;tm.b=sx*ssx;tm.c=-sy*cy;tm.d=sy*ssy;tm.tx=tm.ty=0;}
if(tm){m=Matrix.mul(m,tm,m);}
m.translate(params[1],params[2]);return rst;}
__proto._getTextureByUrl=function(url){return Loader.getRes(url);}
__proto.setAniData=function(uiView,aniName){if(uiView.animations){this._nodeDefaultProps={};this._nodeGDic={};if(this._nodeList)this._nodeList.length=0;this._rootNode=uiView;this._parseNodeList(uiView);var aniDic={};var anilist=[];var animations=uiView.animations;var i=0,len=animations.length;var tAniO;for(i=0;i<len;i++){tAniO=animations[i];this._labels=null;if(aniName&&aniName!=tAniO.name){continue;}
if(!tAniO)
continue;try{this._calGraphicData(tAniO);}catch(e){console.warn("parse animation fail:"+tAniO.name+",empty animation created");this._gList=[];};var frameO={};frameO.interval=1000/tAniO["frameRate"];frameO.frames=this._gList;frameO.labels=this._labels;frameO.name=tAniO.name;anilist.push(frameO);aniDic[tAniO.name]=frameO;}
this.animationList=anilist;this.animationDic=aniDic;}
GraphicAnimation._temParam.length=0;}
__proto.parseByData=function(aniData){var rootNode,aniO;rootNode=aniData.nodeRoot;aniO=aniData.aniO;delete aniData.nodeRoot;delete aniData.aniO;this._nodeDefaultProps={};this._nodeGDic={};if(this._nodeList)this._nodeList.length=0;this._rootNode=rootNode;this._parseNodeList(rootNode);this._labels=null;try{this._calGraphicData(aniO);}catch(e){console.warn("parse animation fail:"+aniO.name+",empty animation created");this._gList=[];};var frameO=aniData;frameO.interval=1000/aniO["frameRate"];frameO.frames=this._gList;frameO.labels=this._labels;frameO.name=aniO.name;return frameO;}
__proto.setUpAniData=function(uiView){if(uiView.animations){var aniDic={};var anilist=[];var animations=uiView.animations;var i=0,len=animations.length;var tAniO;for(i=0;i<len;i++){tAniO=animations[i];if(!tAniO)continue;var frameO={};frameO.name=tAniO.name;frameO.aniO=tAniO;frameO.nodeRoot=uiView;anilist.push(frameO);aniDic[tAniO.name]=frameO;}
this.animationList=anilist;this.animationDic=aniDic;}}
__proto._clear=function(){this.animationList=null;this.animationDic=null;this._gList=null;this._nodeGDic=null;}
GraphicAnimation.parseAnimationByData=function(animationObject){if(!GraphicAnimation._I)GraphicAnimation._I=new GraphicAnimation();var rst;rst=GraphicAnimation._I.parseByData(animationObject);GraphicAnimation._I._clear();return rst;}
GraphicAnimation.parseAnimationData=function(aniData){if(!GraphicAnimation._I)GraphicAnimation._I=new GraphicAnimation();GraphicAnimation._I.setUpAniData(aniData);var rst;rst={};rst.animationList=GraphicAnimation._I.animationList;rst.animationDic=GraphicAnimation._I.animationDic;GraphicAnimation._I._clear();return rst;}
GraphicAnimation._temParam=[];GraphicAnimation._I=null;GraphicAnimation._rootMatrix=null;__static(GraphicAnimation,['_drawTextureCmd',function(){return this._drawTextureCmd=[["skin",null],["x",0],["y",0],["width",-1],["height",-1],["pivotX",0],["pivotY",0],["scaleX",1],["scaleY",1],["rotation",0],["alpha",1],["skewX",0],["skewY",0],["anchorX",0],["anchorY",0]];},'_tempMt',function(){return this._tempMt=new Matrix();}]);GraphicAnimation.__init$=function(){GraphicNode=(function(){function GraphicNode(){this.skin=null;this.transform=null;this.resultTransform=null;this.width=NaN;this.height=NaN;this.alpha=1;}
__class(GraphicNode,'');return GraphicNode;})()}
return GraphicAnimation;})(FrameAnimation)
var EffectAnimation=(function(_super){function EffectAnimation(){this._target=null;this._playEvent=null;this._initData={};this._aniKeys=null;this._effectClass=null;EffectAnimation.__super.call(this);}
__class(EffectAnimation,'laya.display.EffectAnimation',_super);var __proto=EffectAnimation.prototype;__proto._onOtherBegin=function(effect){if(effect===this)return;this.stop();}
__proto._addEvent=function(){if(!this._target||!this._playEvent)return;this._setControlNode(this._target);this._target.on(this._playEvent,this,this._onPlayAction);}
__proto._onPlayAction=function(){this.play(0,false);}
__proto.play=function(start,loop,name){(start===void 0)&&(start=0);(loop===void 0)&&(loop=true);(name===void 0)&&(name="");if(!this._target)
return;this._target.event("effectbegin",[this]);this._recordInitData();laya.display.AnimationBase.prototype.play.call(this,start,loop,name);}
__proto._recordInitData=function(){if(!this._aniKeys)return;var i=0,len=0;len=this._aniKeys.length;var key;for(i=0;i<len;i++){key=this._aniKeys[i];this._initData[key]=this._target[key];}}
__proto._displayToIndex=function(value){if(!this._animationData)return;if(value<0)value=0;if(value>this._count)value=this._count;var nodes=this._animationData.nodes,i=0,len=nodes.length;len=len>1?1:len;for(i=0;i<len;i++){this._displayNodeToFrame(nodes[i],value);}}
__proto._displayNodeToFrame=function(node,frame,targetDic){if(!this._target)return;var target=this._target;var frames=node.frames,key,propFrames,value;var keys=node.keys,i=0,len=keys.length;var secondFrames=node.secondFrames;var tSecondFrame=0;var easeFun;var tKeyFrames;var startFrame;var endFrame;for(i=0;i<len;i++){key=keys[i];propFrames=frames[key];tSecondFrame=secondFrames[key];if(tSecondFrame==-1){value=this._initData[key];}else{if(frame<tSecondFrame){tKeyFrames=node.keyframes[key];startFrame=tKeyFrames[0];if(startFrame.tween){easeFun=Ease[startFrame.tweenMethod];if(easeFun==null)easeFun=Ease.linearNone;endFrame=tKeyFrames[1];value=easeFun(frame,this._initData[key],endFrame.value-this._initData[key],endFrame.index);}else{value=this._initData[key];}}else{if(propFrames.length>frame)value=propFrames[frame];else value=propFrames[propFrames.length-1];}}
target[key]=value;}}
__proto._calculateKeyFrames=function(node){_super.prototype._calculateKeyFrames.call(this,node);var keyFrames=node.keyframes,key,tKeyFrames,target=node.target;var secondFrames={};node.secondFrames=secondFrames;for(key in keyFrames){tKeyFrames=keyFrames[key];if(tKeyFrames.length<=1)secondFrames[key]=-1;else secondFrames[key]=tKeyFrames[1].index;}}
__getset(0,__proto,'target',function(){return this._target;},function(v){if(this._target)this._target.off("effectbegin",this,this._onOtherBegin);this._target=v;if(this._target)this._target.on("effectbegin",this,this._onOtherBegin);this._addEvent();});__getset(0,__proto,'playEvent',null,function(event){this._playEvent=event;if(!event)return;this._addEvent();});__getset(0,__proto,'effectData',null,function(uiData){if(uiData){var aniData=uiData["animations"];if(aniData&&aniData[0]){var data=aniData[0];this._setUp({},data);if(data.nodes&&data.nodes[0]){this._aniKeys=data.nodes[0].keys;}}}});__getset(0,__proto,'effectClass',null,function(classStr){this._effectClass=ClassUtils.getClass(classStr);if(this._effectClass){var uiData=this._effectClass["uiView"];if(uiData){var aniData=uiData["animations"];if(aniData&&aniData[0]){var data=aniData[0];this._setUp({},data);if(data.nodes&&data.nodes[0]){this._aniKeys=data.nodes[0].keys;}}}}});EffectAnimation.EFFECT_BEGIN="effectbegin";return EffectAnimation;})(FrameAnimation)
Laya.__init([LoaderManager,EventDispatcher,Context,Path,GraphicAnimation,SceneUtils,Render,SubmitCMD,Timer,CallLater,LocalStorage,SubmitCanvas,SubmitTarget,TimeLine]);})(window,document,Laya);(function(window,document,Laya){var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;var LayaMain=(function(){function LayaMain(){}
__class(LayaMain,'LayaMain');return LayaMain;})()
new LayaMain();})(window,document,Laya);