(function(){var r,e,t,i,u,c,n,s,R,P,l=[].slice,o={}.hasOwnProperty;function H(e,t){var i,n,s;if(this.element=e,this.version=H.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(H.instances.push(this),this.element.dropzone=this,i=null!=(s=H.optionsForElement(this.element))?s:{},this.options=R({},this.defaultOptions,i,null!=t?t:{}),this.options.forceFallback||!H.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(n=this.getExistingFallback())&&n.parentNode&&n.parentNode.removeChild(n),!1!==this.options.previewsContainer&&(this.previewsContainer=this.options.previewsContainer?H.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=!0===this.options.clickable?[this.element]:H.getElements(this.options.clickable,"clickable")),this.init()}function a(){}n=function(){},a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},a.prototype.emit=function(){var e,t,i,n,s;if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},t=this._callbacks[i])for(n=0,s=t.length;n<s;n++)t[n].apply(this,e);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(e,t){var i,n,s,o;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(!(i=this._callbacks[e]))return this;if(1===arguments.length)return delete this._callbacks[e],this;for(n=s=0,o=i.length;s<o;n=++s)if(i[n]===t){i.splice(n,1);break}return this},function(e,t){function i(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype}(H,e=a),H.prototype.Emitter=e,H.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],H.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return n},forceFallback:!1,fallback:function(){var e,t,i,n,s,o;for(this.element.className=this.element.className+" dz-browser-not-supported",n=0,s=(o=this.element.getElementsByTagName("div")).length;n<s;n++)e=o[n],/(^| )dz-message($| )/.test(e.className)&&((t=e).className="dz-message");return t||(t=H.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),(i=t.getElementsByTagName("span")[0])&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n<i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:n,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:n,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(i){var e,t,n,s,o,r,l,a,p,d,u,c;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(i.previewElement=H.createElement(this.options.previewTemplate.trim()),i.previewTemplate=i.previewElement,this.previewsContainer.appendChild(i.previewElement),n=0,r=(p=i.previewElement.querySelectorAll("[data-dz-name]")).length;n<r;n++)p[n].textContent=this._renameFilename(i.name);for(s=0,l=(d=i.previewElement.querySelectorAll("[data-dz-size]")).length;s<l;s++)d[s].innerHTML=this.filesize(i.size);for(this.options.addRemoveLinks&&(i._removeLink=H.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),i.previewElement.appendChild(i._removeLink)),e=function(t){return function(e){return e.preventDefault(),e.stopPropagation(),i.status===H.UPLOADING?H.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(i)}):t.options.dictRemoveFileConfirmation?H.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(i)}):t.removeFile(i)}}(this),c=[],o=0,a=(u=i.previewElement.querySelectorAll("[data-dz-remove]")).length;o<a;o++)t=u[o],c.push(t.addEventListener("click",e));return c}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,s,o;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),n=0,s=(o=e.previewElement.querySelectorAll("[data-dz-thumbnail]")).length;n<s;n++)(i=o[n]).alt=e.name,i.src=t;return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){var i,n,s,o,r;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=[],n=0,s=(o=e.previewElement.querySelectorAll("[data-dz-errormessage]")).length;n<s;n++)i=o[n],r.push(i.textContent=t);return r}},errormultiple:n,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:n,uploadprogress:function(e,t){var i,n,s,o,r;if(e.previewElement){for(r=[],n=0,s=(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]")).length;n<s;n++)i=o[n],r.push("PROGRESS"===i.nodeName?i.value=t:i.style.width=t+"%");return r}},totaluploadprogress:n,sending:n,sendingmultiple:n,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:n,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:n,complete:function(e){return e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement?e.previewElement.classList.add("dz-complete"):void 0},completemultiple:n,maxfilesexceeded:n,maxfilesreached:n,queuecomplete:n,addedfiles:n,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},R=function(){var e,t,i,n,s,o,r;for(n=arguments[0],o=0,r=(i=2<=arguments.length?l.call(arguments,1):[]).length;o<r;o++)for(e in t=i[o])s=t[e],n[e]=s;return n},H.prototype.getAcceptedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted&&s.push(e);return s},H.prototype.getRejectedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted||s.push(e);return s},H.prototype.getFilesWithStatus=function(e){var t,i,n,s,o;for(o=[],i=0,n=(s=this.files).length;i<n;i++)(t=s[i]).status===e&&o.push(t);return o},H.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(H.QUEUED)},H.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(H.UPLOADING)},H.prototype.getAddedFiles=function(){return this.getFilesWithStatus(H.ADDED)},H.prototype.getActiveFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).status!==H.UPLOADING&&e.status!==H.QUEUED||s.push(e);return s},H.prototype.init=function(){var e,i,o,t,n,s,r,l,a,p,d,u,c,h,m,f,g,v;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(H.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(o=function(s){return function(){return s.hiddenFileInput&&s.hiddenFileInput.parentNode.removeChild(s.hiddenFileInput),s.hiddenFileInput=document.createElement("input"),s.hiddenFileInput.setAttribute("type","file"),(null==s.options.maxFiles||1<s.options.maxFiles)&&s.hiddenFileInput.setAttribute("multiple","multiple"),s.hiddenFileInput.className="dz-hidden-input",null!=s.options.acceptedFiles&&s.hiddenFileInput.setAttribute("accept",s.options.acceptedFiles),null!=s.options.capture&&s.hiddenFileInput.setAttribute("capture",s.options.capture),s.hiddenFileInput.style.visibility="hidden",s.hiddenFileInput.style.position="absolute",s.hiddenFileInput.style.top="0",s.hiddenFileInput.style.left="0",s.hiddenFileInput.style.height="0",s.hiddenFileInput.style.width="0",document.querySelector(s.options.hiddenInputContainer).appendChild(s.hiddenFileInput),s.hiddenFileInput.addEventListener("change",function(){var e,t,i,n;if((t=s.hiddenFileInput.files).length)for(i=0,n=t.length;i<n;i++)e=t[i],s.addFile(e);return s.emit("addedfiles",t),o()})}}(this))(),this.URL=null!=(s=window.URL)?s:window.webkitURL,t=0,n=(r=this.events).length;t<n;t++)e=r[t],this.on(e,this.options[e]);return this.on("uploadprogress",(v=this,function(){return v.updateTotalUploadProgress()})),this.on("removedfile",(g=this,function(){return g.updateTotalUploadProgress()})),this.on("canceled",(f=this,function(e){return f.emit("complete",e)})),this.on("complete",(m=this,function(){return 0===m.getAddedFiles().length&&0===m.getUploadingFiles().length&&0===m.getQueuedFiles().length?setTimeout(function(){return m.emit("queuecomplete")},0):void 0})),i=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:(h=this,function(e){return h.emit("dragstart",e)}),dragenter:(c=this,function(e){return i(e),c.emit("dragenter",e)}),dragover:(u=this,function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",i(e),u.emit("dragover",e)}),dragleave:(d=this,function(e){return d.emit("dragleave",e)}),drop:(p=this,function(e){return i(e),p.drop(e)}),dragend:(a=this,function(e){return a.emit("dragend",e)})}}],this.clickableElements.forEach((l=this,function(t){return l.listeners.push({element:t,events:{click:function(e){return t===l.element&&e.target!==l.element&&!H.elementInside(e.target,l.element.querySelector(".dz-message"))||l.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)},H.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,H.instances.splice(H.instances.indexOf(this),1)},H.prototype.updateTotalUploadProgress=function(){var e,t,i,n,s,o,r;if(t=i=0,this.getActiveFiles().length){for(s=0,o=(r=this.getActiveFiles()).length;s<o;s++)i+=(e=r[s]).upload.bytesSent,t+=e.upload.total;n=100*i/t}else n=100;return this.emit("totaluploadprogress",n,t,i)},H.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},H.prototype._renameFilename=function(e){return"function"!=typeof this.options.renameFilename?e:this.options.renameFilename(e)},H.prototype.getFallbackForm=function(){var e,t,i,n;return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=H.createElement(i),"FORM"!==this.element.tagName?(n=H.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(t):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=n?n:t)},H.prototype.getExistingFallback=function(){var e,t,i,n,s,o;for(t=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},n=0,s=(o=["div","form"]).length;n<s;n++)if(i=o[n],e=t(this.element.getElementsByTagName(i)))return e},H.prototype.setupEventListeners=function(){var i,n,s,e,t,o,r;for(r=[],e=0,t=(o=this.listeners).length;e<t;e++)i=o[e],r.push(function(){var e,t;for(n in t=[],e=i.events)s=e[n],t.push(i.element.addEventListener(n,s,!1));return t}());return r},H.prototype.removeEventListeners=function(){var i,n,s,e,t,o,r;for(r=[],e=0,t=(o=this.listeners).length;e<t;e++)i=o[e],r.push(function(){var e,t;for(n in t=[],e=i.events)s=e[n],t.push(i.element.removeEventListener(n,s,!1));return t}());return r},H.prototype.disable=function(){var e,t,i,n,s;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),s=[],t=0,i=(n=this.files).length;t<i;t++)e=n[t],s.push(this.cancelUpload(e));return s},H.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},H.prototype.filesize=function(e){var t,i,n,s,o,r,l;if(n="b",(i=0)<e){for(t=r=0,l=(o=["TB","GB","MB","KB","b"]).length;r<l;t=++r)if(s=o[t],Math.pow(this.options.filesizeBase,4-t)/10<=e){i=e/Math.pow(this.options.filesizeBase,4-t),n=s;break}i=Math.round(10*i)/10}return"<strong>"+i+"</strong> "+n},H.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},H.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&((i=e.dataTransfer.items)&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},H.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),(t=e.clipboardData.items).length?this._addFilesFromItems(t):void 0},H.prototype.handleFiles=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;i<n;i++)t=e[i],s.push(this.addFile(t));return s},H.prototype._addFilesFromItems=function(e){var t,i,n,s,o;for(o=[],n=0,s=e.length;n<s;n++)i=e[n],o.push(null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?this.addFile(i.getAsFile()):t.isDirectory?this._addFilesFromDirectory(t,t.name):void 0:null==i.getAsFile||null!=i.kind&&"file"!==i.kind?void 0:this.addFile(i.getAsFile()));return o},H.prototype._addFilesFromDirectory=function(e,s){var t,i,o,r;return t=e.createReader(),i=function(e){"undefined"!=typeof console&&null!==console&&console.log},r=this,(o=function(){return t.readEntries(function(e){var t,i,n;if(0<e.length){for(i=0,n=e.length;i<n;i++)(t=e[i]).isFile?t.file(function(e){return r.options.ignoreHiddenFiles&&"."===e.name.substring(0,1)?void 0:(e.fullPath=s+"/"+e.name,r.addFile(e))}):t.isDirectory&&r._addFilesFromDirectory(t,s+"/"+t.name);o()}return null},i)})()},H.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):H.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},H.prototype.addFile=function(t){return t.upload={progress:0,total:t.size,bytesSent:0},this.files.push(t),t.status=H.ADDED,this.emit("addedfile",t),this._enqueueThumbnail(t),this.accept(t,(i=this,function(e){return e?(t.accepted=!1,i._errorProcessing([t],e)):(t.accepted=!0,i.options.autoQueue&&i.enqueueFile(t)),i._updateMaxFilesReachedClass()}));var i},H.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)t=e[i],this.enqueueFile(t);return null},H.prototype.enqueueFile=function(e){if(e.status!==H.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=H.QUEUED,this.options.autoProcessQueue?setTimeout((t=this,function(){return t.processQueue()}),0):void 0;var t},H.prototype._thumbnailQueue=[],H.prototype._processingThumbnail=!1,H.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout((t=this,function(){return t._processThumbnailQueue()}),0)):void 0;var t},H.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),(e=this,function(){return e._processingThumbnail=!1,e._processThumbnailQueue()})));var e},H.prototype.removeFile=function(e){return e.status===H.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},H.prototype.removeAllFiles=function(e){var t,i,n,s;for(null==e&&(e=!1),i=0,n=(s=this.files.slice()).length;i<n;i++)(t=s[i]).status===H.UPLOADING&&!e||this.removeFile(t);return null},H.prototype.createThumbnail=function(e,t){var i,n;return(i=new FileReader).onload=(n=this,function(){return"image/svg+xml"===e.type?(n.emit("thumbnail",e,i.result),void(null!=t&&t())):n.createThumbnailFromUrl(e,i.result,t)}),i.readAsDataURL(e)},H.prototype.createThumbnailFromUrl=function(a,e,p,t){var d,u;return d=document.createElement("img"),t&&(d.crossOrigin=t),d.onload=(u=this,function(){var e,t,i,n,s,o,r,l;return a.width=d.width,a.height=d.height,null==(i=u.options.resize.call(u,a)).trgWidth&&(i.trgWidth=i.optWidth),null==i.trgHeight&&(i.trgHeight=i.optHeight),t=(e=document.createElement("canvas")).getContext("2d"),e.width=i.trgWidth,e.height=i.trgHeight,c(t,d,null!=(s=i.srcX)?s:0,null!=(o=i.srcY)?o:0,i.srcWidth,i.srcHeight,null!=(r=i.trgX)?r:0,null!=(l=i.trgY)?l:0,i.trgWidth,i.trgHeight),n=e.toDataURL("image/png"),u.emit("thumbnail",a,n),null!=p?p():void 0}),null!=p&&(d.onerror=p),d.src=e},H.prototype.processQueue=function(){var e,t,i,n;if(!((t=this.options.parallelUploads)<=(e=i=this.getUploadingFiles().length))&&0<(n=this.getQueuedFiles()).length){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;e<t;){if(!n.length)return;this.processFile(n.shift()),e++}}},H.prototype.processFile=function(e){return this.processFiles([e])},H.prototype.processFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)(t=e[i]).processing=!0,t.status=H.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},H.prototype._getFilesWithXhr=function(s){var o;return function(){var e,t,i,n;for(n=[],e=0,t=(i=this.files).length;e<t;e++)(o=i[e]).xhr===s&&n.push(o);return n}.call(this)},H.prototype.cancelUpload=function(e){var t,i,n,s,o,r,l;if(e.status===H.UPLOADING){for(n=0,o=(i=this._getFilesWithXhr(e.xhr)).length;n<o;n++)(t=i[n]).status=H.CANCELED;for(e.xhr.abort(),s=0,r=i.length;s<r;s++)t=i[s],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(l=e.status)!==H.ADDED&&l!==H.QUEUED||(e.status=H.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},P=function(){var e,t;return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},H.prototype.uploadFile=function(e){return this.uploadFiles([e])},H.prototype.uploadFiles=function(d){var u,e,i,t,n,s,o,r,l,a,p,c,h,m,f,g,v,y,F,w,E,b,z,C,k,L,x,T,A,D,S,_,M,U,I,N;for(y=new XMLHttpRequest,F=0,z=d.length;F<z;F++)(u=d[F]).xhr=y;for(t in c=P(this.options.method,d),g=P(this.options.url,d),y.open(c,g,!0),y.withCredentials=!!this.options.withCredentials,m=null,i=function(){var e,t,i;for(i=[],e=0,t=d.length;e<t;e++)u=d[e],i.push(N._errorProcessing(d,m||N.options.dictResponseError.replace("{{statusCode}}",y.status),y));return i},I=N=this,f=function(e){var t,i,n,s,o,r,l,a,p;if(null!=e)for(i=100*e.loaded/e.total,n=0,r=d.length;n<r;n++)(u=d[n]).upload={progress:i,total:e.total,bytesSent:e.loaded};else{for(t=!0,i=100,s=0,l=d.length;s<l;s++)100===(u=d[s]).upload.progress&&u.upload.bytesSent===u.upload.total||(t=!1),u.upload.progress=i,u.upload.bytesSent=u.upload.total;if(t)return}for(p=[],o=0,a=d.length;o<a;o++)u=d[o],p.push(I.emit("uploadprogress",u,i,u.upload.bytesSent));return p},y.onload=(U=this,function(t){var e;if(d[0].status!==H.CANCELED&&4===y.readyState){if(m=y.responseText,y.getResponseHeader("content-type")&&~y.getResponseHeader("content-type").indexOf("application/json"))try{m=JSON.parse(m)}catch(e){t=e,m="Invalid JSON response from server."}return f(),200<=(e=y.status)&&e<300?U._finished(d,m,t):i()}}),y.onerror=function(){return d[0].status!==H.CANCELED?i():void 0},(null!=(T=y.upload)?T:y).onprogress=f,s={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&R(s,this.options.headers),s)(n=s[t])&&y.setRequestHeader(t,n);if(e=new FormData,this.options.params)for(p in A=this.options.params)v=A[p],e.append(p,v);for(w=0,C=d.length;w<C;w++)u=d[w],this.emit("sending",u,y,e);if(this.options.uploadMultiple&&this.emit("sendingmultiple",d,y,e),"FORM"===this.element.tagName)for(E=0,k=(D=this.element.querySelectorAll("input, textarea, select, button")).length;E<k;E++)if(l=(r=D[E]).getAttribute("name"),a=r.getAttribute("type"),"SELECT"===r.tagName&&r.hasAttribute("multiple"))for(b=0,L=(S=r.options).length;b<L;b++)(h=S[b]).selected&&e.append(l,h.value);else(!a||"checkbox"!==(_=a.toLowerCase())&&"radio"!==_||r.checked)&&e.append(l,r.value);for(o=x=0,M=d.length-1;0<=M?x<=M:M<=x;o=0<=M?++x:--x)e.append(this._getParamName(o),d[o],this._renameFilename(d[o].name));return this.submitRequest(y,e,d)},H.prototype.submitRequest=function(e,t){return e.send(t)},H.prototype._finished=function(e,t,i){var n,s,o;for(s=0,o=e.length;s<o;s++)(n=e[s]).status=H.SUCCESS,this.emit("success",n,t,i),this.emit("complete",n);return this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},H.prototype._errorProcessing=function(e,t,i){var n,s,o;for(s=0,o=e.length;s<o;s++)(n=e[s]).status=H.ERROR,this.emit("error",n,t,i),this.emit("complete",n);return this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},(r=H).version="4.3.0",r.options={},r.optionsForElement=function(e){return e.getAttribute("id")?r.options[t(e.getAttribute("id"))]:void 0},r.instances=[],r.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},r.autoDiscover=!0,r.discover=function(){var e,t,o,i,n,s;for(document.querySelectorAll?o=document.querySelectorAll(".dropzone"):(o=[],(e=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;i<n;i++)t=e[i],s.push(/(^| )dropzone($| )/.test(t.className)?o.push(t):void 0);return s})(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),s=[],i=0,n=o.length;i<n;i++)t=o[i],s.push(!1!==r.optionsForElement(t)?new r(t):void 0);return s},r.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],r.isBrowserSupported=function(){var e,t,i,n;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(t=0,i=(n=r.blacklistedBrowsers).length;t<i;t++)n[t].test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},s=function(e,t){var i,n,s,o;for(o=[],n=0,s=e.length;n<s;n++)(i=e[n])!==t&&o.push(i);return o},t=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},r.createElement=function(e){var t;return(t=document.createElement("div")).innerHTML=e,t.childNodes[0]},r.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},r.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},r.getElements=function(e,t){var i,n,s,o,r,l,a;if(e instanceof Array){n=[];try{for(s=0,r=e.length;s<r;s++)i=e[s],n.push(this.getElement(i,t))}catch(e){e,n=null}}else if("string"==typeof e)for(n=[],o=0,l=(a=document.querySelectorAll(e)).length;o<l;o++)i=a[o],n.push(i);else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},r.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},r.isValidFile=function(e,t){var i,n,s,o,r;if(!t)return!0;for(t=t.split(","),i=(n=e.type).replace(/\/.*$/,""),o=0,r=t.length;o<r;o++)if("."===(s=(s=t[o]).trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new r(this,e)})}),"undefined"!=typeof module&&null!==module?module.exports=r:window.Dropzone=r,r.ADDED="added",r.QUEUED="queued",r.ACCEPTED=r.QUEUED,r.UPLOADING="uploading",r.PROCESSING=r.UPLOADING,r.CANCELED="canceled",r.ERROR="error",r.SUCCESS="success",u=function(e){var t,i,n,s,o,r,l,a;for(e.naturalWidth,o=e.naturalHeight,(t=document.createElement("canvas")).width=1,t.height=o,(i=t.getContext("2d")).drawImage(e,0,0),n=i.getImageData(0,0,1,o).data,a=0,r=s=o;a<r;)0===n[4*(r-1)+3]?s=r:a=r,r=s+a>>1;return 0==(l=r/o)?1:l},c=function(e,t,i,n,s,o,r,l,a,p){var d;return d=u(t),e.drawImage(t,i,n,s,o,r,l,a,p/d)},i=function(t,i){var e,n,s,o,r,l,a,p,d;if(d=!(s=!1),n=t.document,p=n.documentElement,e=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",o=function(e){return"readystatechange"!==e.type||"complete"===n.readyState?(("load"===e.type?t:n)[a](l+e.type,o,!1),!s&&(s=!0)?i.call(t,e.type||e):void 0):void 0},r=function(){try{p.doScroll("left")}catch(e){return e,void setTimeout(r,50)}return o("poll")},"complete"!==n.readyState){if(n.createEventObject&&p.doScroll){try{d=!t.frameElement}catch(e){}d&&r()}return n[e](l+"DOMContentLoaded",o,!1),n[e](l+"readystatechange",o,!1),t[e](l+"load",o,!1)}},r._autoDiscoverFunction=function(){return r.autoDiscover?r.discover():void 0},i(window,r._autoDiscoverFunction)}).call(this),$(function(){var t,e,i,n,s;t=$("form#needs-validation"),e=$("div#file-upload"),i=e.find(".dz-message a"),n=e.find('input[name="fileUploadList"]'),s=[],i.click(function(e){e.preventDefault()}),e.dropzone({url:"http://www.dropzonejs.com/upload",previewTemplate:'<div class="dz-preview dz-file-preview">\n   <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="close-icon">\n  </div>\n</div>',previewsContainer:"#dropzonejs-previews",init:function(e,t,i,n){
// console.log(a,b,c,d);
},sending:function(e,t,i,n){
// console.log('###sending',a,b,c,d);
},success:function(e,t,i,n){
// console.log('###success',a,b,c,d);
},complete:function(e){s.push(e.upload.filename),n.val(s.toLocaleString())}}),t.on("submit",function(e){!1===e.target.checkValidity()&&(e.preventDefault(),e.stopPropagation()),t.addClass("was-validated")})});
