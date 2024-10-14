/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
function calenderOnLoad(t){var e="/scripts/modules/calendar.min.js";-1!=top.location.search.indexOf("iodebug")&&(e="/dp-s-master/dist/scripts/modules/calendar.js"),-1!=top.location.search.indexOf("iodebug2")&&(e="/DPS/dp-s/dist/scripts/modules/calendar.js"),-1!=top.location.href.indexOf("dps.dev")&&(e="/dps.dev/scripts/modules/calendar.js"),sssl(e,function(){})}function formOnLoad(t){sssl("/scripts/modules/form.min.js",function(){initTypeahead()})}function prepareMaps(){var e,n,i={lat:50.730105,lng:7.109427},o={lat:50.730105,lng:7.109427},r=$("body").hasClass("briq")?'<div id="infoWindowContent">briq<br>Institute on Behavior & Inequality<br><br><a href="https://goo.gl/maps/293amvQcqLm" target="_blank">Route</a></div>':$("body").hasClass("iza")?'<div id="infoWindowContent">IZA Institute of Labor Economics<br><a href="https://goo.gl/maps/293amvQcqLm" target="_blank">Route</a></div>':$("body").hasClass("sun")?'<div id="infoWindowContent">SUN Institute Environment &amp; Sustainability<br><a href="https://goo.gl/maps/dXzq52U95NK2" target="_blank">Route</a></div>':$("body").hasClass("dps")?'<div id="infoWindowContent">Deutsche Post Stiftung<br><a href="https://goo.gl/maps/293amvQcqLm" target="_blank">Route</a></div>':void 0,s=0<$("#map").length,a=$("#mapMobile"),l=a.attr("href");window.initMap=function(){if(s){0<$("#map").parents(".module-teaser-type-2").length&&(i=o),e=new google.maps.Map(document.getElementById("map"),{center:i,zoom:16,disableDefaultUI:!0,zoomControl:!1,scaleControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0}),n=new google.maps.InfoWindow({content:r});var t=new SVGMarker({map:e,position:new google.maps.LatLng(o),icon:{anchor:new google.maps.Point(21.5,48),size:new google.maps.Size(43,48),url:"//static.iza.org/images/location-pin.svg"}});t.addListener("click",function(){n.open(e,t)}),l+=o.lat+","+o.lng,a.attr("href",l)}}}function gmapsOnLoad(){prepareMaps();sssl("//maps.googleapis.com/maps/api/js?key=AIzaSyDEBXURU-HZMSSvxRjRtSmrS1AIWL1H1mE",function(){if("object"==typeof google&&"object"==typeof google.maps){document.getElementById("map").innerHTML+="<br /><br />Loading Google Maps<span></span>",document.getElementById("map").className="prepare",sssl("//static.iza.org/scripts/vendor/SVGMarker/SVGMarker_v0.8.1.min.js",function(){"function"==typeof SVGMarker?google.maps.event.addDomListener(window,"load",initMap()):errorMaps()})}else errorMaps()})}function errorMaps(){var t=document.getElementById("map");t.innerHTML="<br><br>Es gibt ein Problem mit Google Maps",t.className="error"}
/*
$('.module-twitter-feed .element-carousel').bxSlider({
    infiniteLoop: false,
    nextText: '',
    prevText: '',
    hideControlOnEnd: true,
    slideMargin: 40
});*/
function getPathPrefix(){return rx=/(\/.*?)\//g,m=rx.exec(window.location.pathname),null!==m&&Array.isArray(m)&&0<m.length?m[1]:""}!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function(C,t){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function g(t){return null!=t&&t===t.window}var e=[],E=C.document,i=Object.getPrototypeOf,a=e.slice,m=e.concat,l=e.push,o=e.indexOf,n={},r=n.toString,v=n.hasOwnProperty,s=v.toString,c=s.call(Object),y={},b=function(t){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof t&&"number"!=typeof t.nodeType},u={type:!0,src:!0,nonce:!0,noModule:!0};function w(t,e,n){var i,o,r=(n=n||E).createElement("script");if(r.text=t,e)for(i in u)
// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(o=e[i]||e.getAttribute&&e.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r)}function _(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?n[r.call(t)]||"object":typeof t;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var d="3.4.1",
// Define a local copy of jQuery
T=function(t,e){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new T.fn.init(t,e)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
f=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function h(t){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,n=_(t);return!b(t)&&!g(t)&&("array"===n||0===e||"number"==typeof e&&0<e&&e-1 in t)}T.fn=T.prototype={
// The current version of jQuery being used
jquery:d,constructor:T,
// The default length of a jQuery object is 0
length:0,toArray:function(){return a.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){
// Return all the elements in a clean array
return null==t?a.call(this):t<0?this[t+this.length]:this[t];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){
// Build a new jQuery matched element set
var e=T.merge(this.constructor(),t);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return e.prevObject=this,e},
// Execute a callback for every element in the matched set.
each:function(t){return T.each(this,t)},map:function(n){return this.pushStack(T.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(0<=n&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:l,sort:e.sort,splice:e.splice},T.extend=T.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof s&&(c=s,
// Skip the boolean and the target
s=arguments[a]||{},a++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof s||b(s)||(s={}),
// Extend jQuery itself if only one argument is passed
a===l&&(s=this,a--);a<l;a++)
// Only deal with non-null/undefined values
if(null!=(t=arguments[a]))
// Extend the base object
for(e in t)i=t[e],
// Prevent Object.prototype pollution
// Prevent never-ending loop
"__proto__"!==e&&s!==i&&(
// Recurse if we're merging plain objects or arrays
c&&i&&(T.isPlainObject(i)||(o=Array.isArray(i)))?(n=s[e],
// Ensure proper type for the source value
r=o&&!Array.isArray(n)?[]:o||T.isPlainObject(n)?n:{},o=!1,
// Never move original objects, clone them
s[e]=T.extend(c,r,i)):void 0!==i&&(s[e]=i));
// Return the modified object
return s},T.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!t||"[object Object]"!==r.call(t))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(e=i(t))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=v.call(e,"constructor")&&e.constructor)&&s.call(n)===c)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(t,e){w(t,{nonce:e&&e.nonce})},each:function(t,e){var n,i=0;if(h(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},
// Support: Android <=4.0 only
trim:function(t){return null==t?"":(t+"").replace(f,"")},
// results is for internal usage only
makeArray:function(t,e){var n=e||[];return null!=t&&(h(Object(t))?T.merge(n,"string"==typeof t?[t]:t):l.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:o.call(e,t,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i=[],o=0,r=t.length,s=!n;o<r;o++)!e(t[o],o)!=s&&i.push(t[o]);return i},
// arg is for internal usage only
map:function(t,e,n){var i,o,r=0,s=[];
// Go through the array, translating each of the items to their new values
if(h(t))for(i=t.length;r<i;r++)null!=(o=e(t[r],r,n))&&s.push(o);
// Go through every key on the object,
else for(r in t)null!=(o=e(t[r],r,n))&&s.push(o);
// Flatten any nested arrays
return m.apply([],s)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:y}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=e[Symbol.iterator]),
// Populate the class2type map
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){n["[object "+e+"]"]=e.toLowerCase()});var p=
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
function(n){function d(t,e,n){var i="0x"+e-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return i!=i||n?e:i<0?
// BMP codepoint
String.fromCharCode(65536+i):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(i>>10|55296,1023&i|56320)}function
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
o(){x()}var t,h,w,r,s,p,f,g,_,l,c,
// Local document vars
x,C,a,E,m,u,v,y,
// Instance-specific data
T="sizzle"+1*new Date,b=n.document,S=0,i=0,A=lt(),D=lt(),k=lt(),I=lt(),O=function(t,e){return t===e&&(c=!0),0},
// Instance methods
N={}.hasOwnProperty,e=[],L=e.pop,P=e.push,j=e.push,H=e.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
M=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},$="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
q="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
W="\\["+q+"*("+R+")(?:"+q+
// Operator (capture 2)
"*([*^$|!~]?=)"+q+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+q+"*\\]",B=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
z=new RegExp(q+"+","g"),F=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g"),U=new RegExp("^"+q+"*,"+q+"*"),Q=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),V=new RegExp(q+"|>"),X=new RegExp(B),K=new RegExp("^"+R+"$"),Y={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+$+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,Z=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,tt=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
et=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,nt=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
it=new RegExp("\\\\([\\da-f]{1,6}"+q+"?|("+q+")|.)","ig"),
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
ot=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,rt=function(t,e){return e?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t;
// Other potentially-special ASCII characters get backslash-escaped
},st=wt(function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{j.apply(e=H.call(b.childNodes),b.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
e[b.childNodes.length].nodeType}catch(t){j={apply:e.length?
// Leverage slice if possible
function(t,e){P.apply(t,H.call(e))}:
// Support: IE<9
// Otherwise append directly
function(t,e){
// Can't trust NodeList.length
for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}function at(e,t,n,i){var o,r,s,a,l,c,u,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
f=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((t?t.ownerDocument||t:b)!==C&&x(t),t=t||C,E)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==f&&(l=et.exec(e)))
// ID selector
if(o=l[1]){
// Document context
if(9===f){if(!(s=t.getElementById(o)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(s.id===o)return n.push(s),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(s=d.getElementById(o))&&y(t,s)&&s.id===o)return n.push(s),n;
// Type selector
}else{if(l[2])return j.apply(n,t.getElementsByTagName(e)),n;
// Class selector
if((o=l[3])&&h.getElementsByClassName&&t.getElementsByClassName)return j.apply(n,t.getElementsByClassName(o)),n}
// Take advantage of querySelectorAll
if(h.qsa&&!I[e+" "]&&(!m||!m.test(e))&&(
// Support: IE 8 only
// Exclude object elements
1!==f||"object"!==t.nodeName.toLowerCase())){
// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// Thanks to Andrew Dupont for this technique.
if(u=e,d=t,1===f&&V.test(e)){for(
// Capture the context ID, setting it first if necessary
(a=t.getAttribute("id"))?a=a.replace(ot,rt):t.setAttribute("id",a=T),r=(
// Prefix every selector in the list
c=p(e)).length;r--;)c[r]="#"+a+" "+bt(c[r]);u=c.join(","),
// Expand context for sibling selectors
d=nt.test(e)&&vt(t.parentNode)||t}try{return j.apply(n,d.querySelectorAll(u)),n}catch(t){I(e,!0)}finally{a===T&&t.removeAttribute("id")}}}
// All others
return g(e.replace(F,"$1"),t,n,i)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function lt(){var i=[];return function t(e,n){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return i.push(e+" ")>w.cacheLength&&
// Only keep the most recent entries
delete t[i.shift()],t[e+" "]=n}}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function ct(t){return t[T]=!0,t}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ut(t){var e=C.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{
// Remove from its parent by default
e.parentNode&&e.parentNode.removeChild(e),
// release memory in IE
e=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function dt(t,e){for(var n=t.split("|"),i=n.length;i--;)w.attrHandle[n[i]]=e}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function ft(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function ht(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function pt(n){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function gt(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?
// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||
// Where there is no isDisabled, check manually
/* jshint -W018 */
t.isDisabled!==!e&&st(t)===e:t.disabled===e:"label"in t&&t.disabled===e;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function mt(s){return ct(function(r){return r=+r,ct(function(t,e){
// Match elements found at the specified indexes
for(var n,i=s([],t.length,r),o=i.length;o--;)t[n=i[o]]&&(t[n]=!(e[n]=t[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function vt(t){return t&&void 0!==t.getElementsByTagName&&t}
// Expose support vars for convenience
// Add button/input type pseudos
for(t in h=at.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
s=at.isXML=function(t){var e=t.namespaceURI,n=(t.ownerDocument||t).documentElement;
// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!G.test(e||n&&n.nodeName||"HTML")},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
x=at.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:b;
// Return early if doc is invalid or already selected
return i!==C&&9===i.nodeType&&i.documentElement&&(
// Update global variables
a=(C=i).documentElement,E=!s(C),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
b!==C&&(n=C.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",o,!1):n.attachEvent&&n.attachEvent("onunload",o)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
h.attributes=ut(function(t){return t.className="i",!t.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
h.getElementsByTagName=ut(function(t){return t.appendChild(C.createComment("")),!t.getElementsByTagName("*").length}),
// Support: IE<9
h.getElementsByClassName=tt.test(C.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=ut(function(t){return a.appendChild(t).id=T,!C.getElementsByName||!C.getElementsByName(T).length}),
// ID filter and find
h.getById?(w.filter.ID=function(t){var e=t.replace(it,d);return function(t){return t.getAttribute("id")===e}},w.find.ID=function(t,e){if(void 0!==e.getElementById&&E){var n=e.getElementById(t);return n?[n]:[]}}):(w.filter.ID=function(t){var n=t.replace(it,d);return function(t){var e=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return e&&e.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
w.find.ID=function(t,e){if(void 0!==e.getElementById&&E){var n,i,o,r=e.getElementById(t);if(r){if((
// Verify the id attribute
n=r.getAttributeNode("id"))&&n.value===t)return[r];
// Fall back on getElementsByName
for(o=e.getElementsByName(t),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===t)return[r]}return[]}}),
// Tag
w.find.TAG=h.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):h.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
r=e.getElementsByTagName(t);
// Filter out possible comments
if("*"!==t)return r;for(;n=r[o++];)1===n.nodeType&&i.push(n);return i},
// Class
w.find.CLASS=h.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&E)return e.getElementsByClassName(t)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
u=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
m=[],(h.qsa=tt.test(C.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
ut(function(t){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
a.appendChild(t).innerHTML="<a id='"+T+"'></a><select id='"+T+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+q+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
t.querySelectorAll("[selected]").length||m.push("\\["+q+"*(?:value|"+$+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
t.querySelectorAll("[id~="+T+"-]").length||m.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
t.querySelectorAll(":checked").length||m.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
t.querySelectorAll("a#"+T+"+*").length||m.push(".#.+[+~]")}),ut(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var e=C.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
t.querySelectorAll("[name=d]").length&&m.push("name"+q+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
a.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
t.querySelectorAll("*,:x"),m.push(",.*:")})),(h.matchesSelector=tt.test(v=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ut(function(t){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
h.disconnectedMatch=v.call(t,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
v.call(t,"[s!='']:x"),u.push("!=",B)}),m=m.length&&new RegExp(m.join("|")),u=u.length&&new RegExp(u.join("|")),
/* Contains
	---------------------------------------------------------------------- */
e=tt.test(a.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
y=e||tt.test(a.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
O=e?function(t,e){
// Flag for duplicate removal
if(t===e)return c=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):
// Otherwise we know they are disconnected
1)||!h.sortDetached&&e.compareDocumentPosition(t)===n?
// Choose the first element that is related to our preferred document
t===C||t.ownerDocument===b&&y(b,t)?-1:e===C||e.ownerDocument===b&&y(b,e)?1:l?M(l,t)-M(l,e):0:4&n?-1:1)}:function(t,e){
// Exit early if the nodes are identical
if(t===e)return c=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,s=[t],a=[e];
// Parentless nodes are either documents or disconnected
if(!o||!r)return t===C?-1:e===C?1:o?-1:r?1:l?M(l,t)-M(l,e):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===r)return ft(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
ft(s[i],a[i]):
// Otherwise nodes in our document sort first
s[i]===b?-1:a[i]===b?1:0}),C},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if(
// Set document vars if needed
(t.ownerDocument||t)!==C&&x(t),h.matchesSelector&&E&&!I[e+" "]&&(!u||!u.test(e))&&(!m||!m.test(e)))try{var n=v.call(t,e);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return n}catch(t){I(e,!0)}return 0<at(e,C,null,[t]).length},at.contains=function(t,e){
// Set document vars if needed
return(t.ownerDocument||t)!==C&&x(t),y(t,e)},at.attr=function(t,e){
// Set document vars if needed
(t.ownerDocument||t)!==C&&x(t);var n=w.attrHandle[e.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&N.call(w.attrHandle,e.toLowerCase())?n(t,e,!E):void 0;return void 0!==i?i:h.attributes||!E?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},at.escape=function(t){return(t+"").replace(ot,rt)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
at.uniqueSort=function(t){var e,n=[],i=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(c=!h.detectDuplicates,l=!h.sortStable&&t.slice(0),t.sort(O),c){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return l=null,t},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
r=at.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof t.textContent)return t.textContent;
// Traverse its children
for(t=t.firstChild;t;t=t.nextSibling)n+=r(t)}else if(3===o||4===o)return t.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;e=t[i++];)
// Do not traverse comment nodes
n+=r(e);return n},(w=at.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:ct,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(it,d),
// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(it,d),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(
// nth-* requires argument
t[3]||at.error(t[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return Y.CHILD.test(t[0])?null:(
// Accept quoted arguments as-is
t[3]?t[2]=t[4]||t[5]||"":n&&X.test(n)&&(
// Get excess from tokenize (recursively)
e=p(n,!0))&&(
// advance to the next closing parenthesis
e=n.indexOf(")",n.length-e)-n.length)&&(
// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(it,d).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=A[t+" "];return e||(e=new RegExp("(^|"+q+")"+t+"("+q+"|$)"))&&A(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(t){var e=at.attr(t,n);return null==e?"!="===i:!i||(e+="","="===i?e===o:"!="===i?e!==o:"^="===i?o&&0===e.indexOf(o):"*="===i?o&&-1<e.indexOf(o):"$="===i?o&&e.slice(-o.length)===o:"~="===i?-1<(" "+e.replace(z," ")+" ").indexOf(o):"|="===i&&(e===o||e.slice(0,o.length+1)===o+"-"))}},CHILD:function(p,t,e,g,m){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),b="of-type"===t;return 1===g&&0===m?
// Shortcut for :nth-*(n)
function(t){return!!t.parentNode}:function(t,e,n){var i,o,r,s,a,l,c=v!=y?"nextSibling":"previousSibling",u=t.parentNode,d=b&&t.nodeName.toLowerCase(),f=!n&&!b,h=!1;if(u){
// :(first|last|only)-(child|of-type)
if(v){for(;c;){for(s=t;s=s[c];)if(b?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
l=c="only"===p&&!l&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?u.firstChild:u.lastChild],y&&f){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
h=(a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(s=u)[T]||(s[T]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===S&&i[1])&&i[2],s=a&&u.childNodes[a];s=++a&&s&&s[c]||(
// Fallback to seeking `elem` from the start
h=a=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===s.nodeType&&++h&&s===t){o[p]=[S,a,h];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
f&&(h=a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(
// ...in a gzip-friendly way
s=t)[T]||(s[T]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===S&&i[1]),!1===h)
// Use the same loop as above to seek `elem` from the start
for(;(s=++a&&s&&s[c]||(h=a=0)||l.pop())&&((b?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++h||(
// Cache the index of each encountered element
f&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=s[T]||(s[T]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]=[S,h]),s!==t)););
// Incorporate the offset, then check against cycle size
return(h-=m)===g||h%g==0&&0<=h/g}}},PSEUDO:function(t,r){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,s=w.pseudos[t]||w.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return s[T]?s(r):
// But maintain support for old signatures
1<s.length?(e=[t,t,"",r],w.setFilters.hasOwnProperty(t.toLowerCase())?ct(function(t,e){for(var n,i=s(t,r),o=i.length;o--;)t[n=M(t,i[o])]=!(e[n]=i[o])}):function(t){return s(t,0,e)}):s}},pseudos:{
// Potentially complex pseudos
not:ct(function(t){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var i=[],o=[],a=f(t.replace(F,"$1"));return a[T]?ct(function(t,e,n,i){
// Match elements unmatched by `matcher`
for(var o,r=a(t,null,i,[]),s=t.length;s--;)(o=r[s])&&(t[s]=!(e[s]=o))}):function(t,e,n){return i[0]=t,a(i,null,n,o),
// Don't keep the element (issue #299)
i[0]=null,!o.pop()}}),has:ct(function(e){return function(t){return 0<at(e,t).length}}),contains:ct(function(e){return e=e.replace(it,d),function(t){return-1<(t.textContent||r(t)).indexOf(e)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:ct(function(n){
// lang value must be a valid identifier
return K.test(n||"")||at.error("unsupported lang: "+n),n=n.replace(it,d).toLowerCase(),function(t){var e;do{if(e=E?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===n||0===e.indexOf(n+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var e=n.location&&n.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===a},focus:function(t){return t===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},
// Boolean properties
enabled:gt(!1),disabled:gt(!0),checked:function(t){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){
// Accessing this property makes selected-by-default
// options in Safari work properly
return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},
// Contents
empty:function(t){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!w.pseudos.empty(t)},
// Element/input types
header:function(t){return J.test(t.nodeName)},input:function(t){return Z.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},
// Position-in-collection
first:mt(function(){return[0]}),last:mt(function(t,e){return[e-1]}),eq:mt(function(t,e,n){return[n<0?n+e:n]}),even:mt(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:mt(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:mt(function(t,e,n){for(var i=n<0?n+e:e<n?e:n;0<=--i;)t.push(i);return t}),gt:mt(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=w.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[t]=ht(t);for(t in{submit:!0,reset:!0})w.pseudos[t]=pt(t);
// Easy API for creating new setFilters
function yt(){}function bt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function wt(a,t,e){var l=t.dir,c=t.next,u=c||l,d=e&&"parentNode"===u,f=i++;return t.first?
// Check against closest ancestor/preceding element
function(t,e,n){for(;t=t[l];)if(1===t.nodeType||d)return a(t,e,n);return!1}:
// Check against all ancestor/preceding elements
function(t,e,n){var i,o,r,s=[S,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;t=t[l];)if((1===t.nodeType||d)&&a(t,e,n))return!0}else for(;t=t[l];)if(1===t.nodeType||d)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=t[T]||(t[T]={}))[t.uniqueID]||(r[t.uniqueID]={}),c&&c===t.nodeName.toLowerCase())t=t[l]||t;else{if((i=o[u])&&i[0]===S&&i[1]===f)
// Assign to newCache so results back-propagate to previous elements
return s[2]=i[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
o[u]=s)[2]=a(t,e,n))return!0}return!1}}function _t(o){return 1<o.length?function(t,e,n){for(var i=o.length;i--;)if(!o[i](t,e,n))return!1;return!0}:o[0]}function xt(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,c=null!=e;a<l;a++)(r=t[a])&&(n&&!n(r,i,o)||(s.push(r),c&&e.push(a)));return s}function Ct(h,p,g,m,v,t){return m&&!m[T]&&(m=Ct(m)),v&&!v[T]&&(v=Ct(v,t)),ct(function(t,e,n,i){var o,r,s,a=[],l=[],c=e.length,
// Get initial elements from seed or context
u=t||function(t,e,n){for(var i=0,o=e.length;i<o;i++)at(t,e[i],n);return n}(p||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!h||!t&&p?u:xt(u,a,h,n,i),f=g?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(t?h:c||m)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
e:d;
// Find primary matches
// Apply postFilter
if(g&&g(d,f,n,i),m)for(o=xt(f,l),m(o,[],n,i),
// Un-match failing elements by moving them back to matcherIn
r=o.length;r--;)(s=o[r])&&(f[l[r]]=!(d[l[r]]=s));if(t){if(v||h){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
o=[],r=f.length;r--;)(s=f[r])&&
// Restore matcherIn since elem is not yet a final match
o.push(d[r]=s);v(null,f=[],o,i)}
// Move matched elements from seed to results to keep them synchronized
for(r=f.length;r--;)(s=f[r])&&-1<(o=v?M(t,s):a[r])&&(t[o]=!(e[o]=s))}
// Add elements to results, through postFinder if defined
}else f=xt(f===e?f.splice(c,f.length):f),v?v(null,e,f,i):j.apply(e,f)})}function Et(t){for(var o,e,n,i=t.length,r=w.relative[t[0].type],s=r||w.relative[" "],a=r?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=wt(function(t){return t===o},s,!0),c=wt(function(t){return-1<M(o,t)},s,!0),u=[function(t,e,n){var i=!r&&(n||e!==_)||((o=e).nodeType?l(t,e,n):c(t,e,n));
// Avoid hanging onto element (issue #299)
return o=null,i}];a<i;a++)if(e=w.relative[t[a].type])u=[wt(_t(u),e)];else{
// Return special upon seeing a positional matcher
if((e=w.filter[t[a].type].apply(null,t[a].matches))[T]){for(
// Find the next relative operator (if any) for proper handling
n=++a;n<i&&!w.relative[t[n].type];n++);return Ct(1<a&&_t(u),1<a&&bt(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(F,"$1"),e,a<n&&Et(t.slice(a,n)),n<i&&Et(t=t.slice(n)),n<i&&bt(t))}u.push(e)}return _t(u)}return yt.prototype=w.filters=w.pseudos,w.setFilters=new yt,p=at.tokenize=function(t,e){var n,i,o,r,s,a,l,c=D[t+" "];if(c)return e?0:c.slice(0);for(s=t,a=[],l=w.preFilter;s;){
// Filters
for(r in
// Comma and first run
n&&!(i=U.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,
// Combinators
(i=Q.exec(s))&&(n=i.shift(),o.push({value:n,
// Cast descendant combinators to space
type:i[0].replace(F," ")}),s=s.slice(n.length)),w.filter)!(i=Y[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return e?s.length:s?at.error(t):
// Cache the tokens
D(t,a).slice(0)},f=at.compile=function(t,e/* Internal Use Only */){var n,i=[],o=[],r=k[t+" "];if(!r){for(n=(e=
// Generate a function of recursive functions that can be used to check each element
e||p(t)).length;n--;)(r=Et(e[n]))[T]?i.push(r):o.push(r);
// Cache the compiled function
// Save selector and tokenization
(r=k(t,function(m,v){function t(t,e,n,i,o){var r,s,a,l=0,c="0",u=t&&[],d=[],f=_,
// We must always have either seed elements or outermost context
h=t||b&&w.find.TAG("*",o),
// Use integer dirruns iff this is the outermost matcher
p=S+=null==f?1:Math.random()||.1,g=h.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(o&&(_=e===C||e||o);c!==g&&null!=(r=h[c]);c++){if(b&&r){for(s=0,e||r.ownerDocument===C||(x(r),n=!E);a=m[s++];)if(a(r,e||C,n)){i.push(r);break}o&&(S=p)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(r=!a&&r)&&l--,
// Lengthen the array for every element, matched or not
t&&u.push(r))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=c,y&&c!==l){for(s=0;a=v[s++];)a(u,d,e,n);if(t){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;c--;)u[c]||d[c]||(d[c]=L.call(i));
// Discard index placeholder values to get only actual matches
d=xt(d)}
// Add matches to results
j.apply(i,d),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
o&&!t&&0<d.length&&1<l+v.length&&at.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return o&&(S=p,_=f),u}var y=0<v.length,b=0<m.length;return y?ct(t):t}(o,i))).selector=t}return r},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
g=at.select=function(t,e,n,i){var o,r,s,a,l,c="function"==typeof t&&t,u=!i&&p(t=c.selector||t);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===u.length){if(2<(
// Reduce context if the leading compound selector is an ID
r=u[0]=u[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===e.nodeType&&E&&w.relative[r[1].type]){if(!(e=(w.find.ID(s.matches[0].replace(it,d),e)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
c&&(e=e.parentNode),t=t.slice(r.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=Y.needsContext.test(t)?0:r.length;o--&&(s=r[o],!w.relative[a=s.type]);)if((l=w.find[a])&&(i=l(s.matches[0].replace(it,d),nt.test(r[0].type)&&vt(e.parentNode)||e))){if(
// If seed is empty or no tokens remain, we can return early
r.splice(o,1),!(t=i.length&&bt(r)))return j.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||f(t,u))(i,e,!E,n,!e||nt.test(t)&&vt(e.parentNode)||e),n},
// One-time assignments
// Sort stability
h.sortStable=T.split("").sort(O).join("")===T,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
h.detectDuplicates=!!c,
// Initialize against the default document
x(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
h.sortDetached=ut(function(t){
// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(C.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ut(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||dt("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
h.attributes&&ut(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||dt("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
ut(function(t){return null==t.getAttribute("disabled")})||dt($,function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),at}(C);T.find=p,T.expr=p.selectors,
// Deprecated
T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=p.uniqueSort,T.text=p.getText,T.isXMLDoc=p.isXML,T.contains=p.contains,T.escapeSelector=p.escape;function x(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&T(t).is(n))break;i.push(t)}return i}function S(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}var A=T.expr.match.needsContext;function D(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var k=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
// Implement the identical functionality for filter and not
function I(t,n,i){return b(n)?T.grep(t,function(t,e){return!!n.call(t,e,t)!==i}):
// Single element
n.nodeType?T.grep(t,function(t){return t===n!==i}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?T.grep(t,function(t){return-1<o.call(n,t)!==i}):T.filter(n,t,i)}T.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?T.find.matchesSelector(i,t)?[i]:[]:T.find.matches(t,T.grep(e,function(t){return 1===t.nodeType}))},T.fn.extend({find:function(t){var e,n,i=this.length,o=this;if("string"!=typeof t)return this.pushStack(T(t).filter(function(){for(e=0;e<i;e++)if(T.contains(o[e],this))return!0}));for(n=this.pushStack([]),e=0;e<i;e++)T.find(t,o[e],n);return 1<i?T.uniqueSort(n):n},filter:function(t){return this.pushStack(I(this,t||[],!1))},not:function(t){return this.pushStack(I(this,t||[],!0))},is:function(t){return!!I(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&A.test(t)?T(t):t||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var O,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(T.fn.init=function(t,e,n){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||O,"string"!=typeof t)return t.nodeType?(this[0]=t,this.length=1,this):b(t)?void 0!==n.ready?n.ready(t):
// Execute immediately if ready is not present
t(T):T.makeArray(t,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:N.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(e=e instanceof T?e[0]:e,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
T.merge(this,T.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:E,!0)),k.test(i[1])&&T.isPlainObject(e))for(i in e)
// Properties of context are called as methods if possible
b(this[i])?this[i](e[i]):this.attr(i,e[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(o=E.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this}).prototype=T.fn,
// Initialize central reference
O=T(E);var L=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
P={children:!0,contents:!0,next:!0,prev:!0};function j(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}T.fn.extend({has:function(t){var e=T(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(T.contains(this,e[t]))return!0})},closest:function(t,e){var n,i=0,o=this.length,r=[],s="string"!=typeof t&&T(t);
// Positional selectors never match, since there's no _selection_ context
if(!A.test(t))for(;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(s?-1<s.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&T.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(1<r.length?T.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(t){
// No argument, return index in parent
return t?
// Index in selector
"string"==typeof t?o.call(T(t),this[0]):o.call(this,
// If it receives a jQuery object, the first element is used
t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),T.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return x(t,"parentNode")},parentsUntil:function(t,e,n){return x(t,"parentNode",n)},next:function(t){return j(t,"nextSibling")},prev:function(t){return j(t,"previousSibling")},nextAll:function(t){return x(t,"nextSibling")},prevAll:function(t){return x(t,"previousSibling")},nextUntil:function(t,e,n){return x(t,"nextSibling",n)},prevUntil:function(t,e,n){return x(t,"previousSibling",n)},siblings:function(t){return S((t.parentNode||{}).firstChild,t)},children:function(t){return S(t.firstChild)},contents:function(t){return void 0!==t.contentDocument?t.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
D(t,"template")&&(t=t.content||t),T.merge([],t.childNodes))}},function(i,o){T.fn[i]=function(t,e){var n=T.map(this,o,t);return"Until"!==i.slice(-5)&&(e=t),e&&"string"==typeof e&&(n=T.filter(e,n)),1<this.length&&(
// Remove duplicates
P[i]||T.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
L.test(i)&&n.reverse()),this.pushStack(n)}});var H=/[^\x20\t\r\n\f]+/g;
// Convert String-formatted options into Object-formatted ones
function M(t){return t}function $(t){throw t}function q(t,e,n,i){var o;try{
// Check for promise aspect first to privilege synchronous behavior
t&&b(o=t.promise)?o.call(t).done(e).fail(n):t&&b(o=t.then)?o.call(t,e,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[t])}}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
T.Callbacks=function(i){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
i="string"==typeof i?function(t){var n={};return T.each(t.match(H)||[],function(t,e){n[e]=!0}),n}(i):T.extend({},i);function
// Fire callbacks
n(){for(
// Enforce single-firing
r=r||i.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
e=o=!0;a.length;l=-1)for(t=a.shift();++l<s.length;)
// Run callback and check for early termination
!1===s[l].apply(t[0],t[1])&&i.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
l=s.length,t=!1);
// Forget the data if we're done with it
i.memory||(t=!1),o=!1,
// Clean up if we're done firing for good
r&&(
// Keep an empty list if we have data for future add calls
s=t?[]:"")}var// Flag to know if list is currently firing
o,
// Last fire value for non-forgettable lists
t,
// Flag to know if list was already fired
e,
// Flag to prevent firing
r,
// Actual callback list
s=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
l=-1,
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
t&&!o&&(l=s.length-1,a.push(t)),function n(t){T.each(t,function(t,e){b(e)?i.unique&&c.has(e)||s.push(e):e&&e.length&&"string"!==_(e)&&
// Inspect recursively
n(e)})}(arguments),t&&!o&&n()),this},
// Remove a callback from the list
remove:function(){return T.each(arguments,function(t,e){for(var n;-1<(n=T.inArray(e,s,n));)s.splice(n,1),
// Handle firing indexes
n<=l&&l--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?-1<T.inArray(t,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s=s&&[],this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=a=[],s=t="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=a=[],t||o||(s=t=""),this},locked:function(){return!!r},
// Call all callbacks with the given context and arguments
fireWith:function(t,e){return r||(e=[t,(e=e||[]).slice?e.slice():e],a.push(e),o||n()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!e}};return c},T.extend({Deferred:function(t){var r=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},
// Keep pipe for back-compat
pipe:function(){var o=arguments;return T.Deferred(function(i){T.each(r,function(t,e){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=b(o[e[4]])&&o[e[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[e[1]](function(){var t=n&&n.apply(this,arguments);t&&b(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[e[0]+"With"](this,n?[t]:arguments)})}),o=null}).promise()},then:function(e,n,i){var l=0;function c(o,r,s,a){return function(){function t(){var t,e;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(o<l)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
e=t&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof t||"function"==typeof t)&&t.then,
// Handle a returned thenable
b(e)?
// Special processors (notify) just wait for resolution
a?e.call(t,c(l,r,M,a),c(l,r,$,a)):(
// ...and disregard older resolution values
l++,e.call(t,c(l,r,M,a),c(l,r,$,a),c(l,r,M,r.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==M&&(n=void 0,i=[t]),
// Process the value(s)
// Default process is resolve
(a||r.resolveWith)(n,i))}}var n=this,i=arguments,
// Only normal processors (resolve) catch and reject exceptions
e=a?t:function(){try{t()}catch(t){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(t,e.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
l<=o+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==$&&(n=void 0,i=[t]),r.rejectWith(n,i))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
o?e():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
T.Deferred.getStackHook&&(e.stackTrace=T.Deferred.getStackHook()),C.setTimeout(e))}}return T.Deferred(function(t){
// progress_handlers.add( ... )
r[0][3].add(c(0,t,b(i)?i:M,t.notifyWith)),
// fulfilled_handlers.add( ... )
r[1][3].add(c(0,t,b(e)?e:M)),
// rejected_handlers.add( ... )
r[2][3].add(c(0,t,b(n)?n:$))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?T.extend(t,s):s}},a={};
// Add list-specific methods
// All done!
return T.each(r,function(t,e){var n=e[2],i=e[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
s[e[1]]=n.add,
// Handle state
i&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=i},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
r[3-t][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
r[3-t][3].disable,
// progress_callbacks.lock
r[0][2].lock,
// progress_handlers.lock
r[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(e[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[e[0]+"With"]=n.fireWith}),
// Make the deferred a promise
s.promise(a),
// Call given func if any
t&&t.call(a,a),a},
// Deferred helper
when:function(t){function
// subordinate callback factory
e(e){return function(t){o[e]=this,r[e]=1<arguments.length?a.call(arguments):t,--n||s.resolveWith(o,r)}}var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
i=n,
// subordinate fulfillment data
o=Array(i),r=a.call(arguments),
// the master Deferred
s=T.Deferred();
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(q(t,s.done(e(i)).resolve,s.reject,!n),"pending"===s.state()||b(r[i]&&r[i].then)))return s.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;i--;)q(r[i],e(i),s.reject);return s.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var R=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(t,e){C.console&&C.console.warn&&t&&R.test(t.name)},T.readyException=function(t){C.setTimeout(function(){throw t})};
// The deferred used on DOM ready
var W=T.Deferred();
// The ready event handler and self cleanup method
function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),T.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
T.fn.ready=function(t){return W.then(t).catch(function(t){T.readyException(t)}),this},T.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(t){
// Abort if there are pending holds or we're already ready
(!0===t?--T.readyWait:T.isReady)||(
// Remember that the DOM is ready
T.isReady=!0)!==t&&0<--T.readyWait||
// If there are functions bound, to execute
W.resolveWith(E,[T])}}),T.ready.then=W.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
C.setTimeout(T.ready):(
// Use the handy event callback
E.addEventListener("DOMContentLoaded",B),
// A fallback to window.onload, that will always work
C.addEventListener("load",B));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var z=function(t,e,n,i,o,r,s){var a=0,l=t.length,c=null==n;
// Sets many values
if("object"===_(n))for(a in o=!0,n)z(t,e,a,n[a],!0,r,s);
// Sets one value
else if(void 0!==i&&(o=!0,b(i)||(s=!0),c&&(
// Bulk operations run against the entire set
e=s?(e.call(t,i),null):(c=e,function(t,e,n){return c.call(T(t),n)})),e))for(;a<l;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:
// Gets
c?e.call(t):l?e(t[0],n):r},F=/^-ms-/,U=/-([a-z])/g;
// Matches dashed string for camelizing
// Used by camelCase as callback to replace()
function Q(t,e){return e.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function V(t){return t.replace(F,"ms-").replace(U,Q)}function X(t){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType}function K(){this.expando=T.expando+K.uid++}K.uid=1,K.prototype={cache:function(t){
// Check if the owner object already has a cache
var e=t[this.expando];
// If not, create one
return e||(e={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
X(t)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)o[V(e)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in e)o[V(i)]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):
// Always use camelCase key (gh-2257)
t[this.expando]&&t[this.expando][V(e)]},access:function(t,e,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(V):(e=V(e))in i?[e]:e.match(H)||[]).length;for(;n--;)delete i[e[n]]}
// Remove the expando if there's no more data
void 0!==e&&!T.isEmptyObject(i)||(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!T.isEmptyObject(e)}};var Y=new K,G=new K,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function tt(t,e,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(J,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=function(t){return"true"===t||"false"!==t&&("null"===t?null:
// Only convert to a number if it doesn't change the string
t===+t+""?+t:Z.test(t)?JSON.parse(t):t)}(n)}catch(t){}
// Make sure we set the data so it isn't changed later
G.set(t,e,n)}else n=void 0;return n}T.extend({hasData:function(t){return G.hasData(t)||Y.hasData(t)},data:function(t,e,n){return G.access(t,e,n)},removeData:function(t,e){G.remove(t,e)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,n){return Y.access(t,e,n)},_removeData:function(t,e){Y.remove(t,e)}}),T.fn.extend({data:function(n,t){var e,i,o,r=this[0],s=r&&r.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){G.set(this,n)}):z(this,function(t){var e;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===t)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
e=G.get(r,n))?e:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
e=tt(r,n))?e:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
G.set(this,n,t)})},null,t,1<arguments.length,null,!0);if(this.length&&(o=G.get(r),1===r.nodeType&&!Y.get(r,"hasDataAttrs"))){for(e=s.length;e--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[e]&&0===(i=s[e].name).indexOf("data-")&&(i=V(i.slice(5)),tt(r,i,o[i]));Y.set(r,"hasDataAttrs",!0)}return o},removeData:function(t){return this.each(function(){G.remove(this,t)})}}),T.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=Y.get(t,e),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=Y.access(t,e,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=T.queue(t,e),i=n.length,o=n.shift(),r=T._queueHooks(t,e);
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),i--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===e&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete r.stop,o.call(t,function(){T.dequeue(t,e)},r)),!i&&r&&r.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var n=e+"queueHooks";return Y.get(t,n)||Y.access(t,n,{empty:T.Callbacks("once memory").add(function(){Y.remove(t,[e+"queue",n])})})}}),T.fn.extend({queue:function(e,n){var t=2;return"string"!=typeof e&&(n=e,e="fx",t--),arguments.length<t?T.queue(this[0],e):void 0===n?this:this.each(function(){var t=T.queue(this,e,n);
// Ensure a hooks for this queue
T._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&T.dequeue(this,e)})},dequeue:function(t){return this.each(function(){T.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){function n(){--o||r.resolveWith(s,[s])}var i,o=1,r=T.Deferred(),s=this,a=this.length;for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(i=Y.get(s[a],t+"queueHooks"))&&i.empty&&(o++,i.empty.add(n));return n(),r.promise(e)}});var et=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,nt=new RegExp("^(?:([+-])=|)("+et+")([a-z%]*)$","i"),it=["Top","Right","Bottom","Left"],ot=E.documentElement,rt=function(t){return T.contains(t.ownerDocument,t)},st={composed:!0};
// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
// Check attachment across shadow DOM boundaries when possible (gh-3504)
// Support: iOS 10.0-10.2 only
// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
// leading to errors. We need to check for `getRootNode`.
ot.getRootNode&&(rt=function(t){return T.contains(t.ownerDocument,t)||t.getRootNode(st)===t.ownerDocument});function at(t,e,n,i){var o,r,s={};
// Remember the old values, and insert the new ones
for(r in e)s[r]=t.style[r],t.style[r]=e[r];
// Revert the old values
for(r in o=n.apply(t,i||[]),e)t.style[r]=s[r];return o}var lt=function(t,e){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
t=e||t).style.display||""===t.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
rt(t)&&"none"===T.css(t,"display")};function ct(t,e,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return T.css(t,e,"")},l=a(),c=n&&n[3]||(T.cssNumber[e]?"":"px"),
// Starting value computation is required for potential unit mismatches
u=t.nodeType&&(T.cssNumber[e]||"px"!==c&&+l)&&nt.exec(T.css(t,e));if(u&&u[3]!==c){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
c=c||u[3],
// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
T.style(t,e,u+c),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),u/=r;u*=2,T.style(t,e,u+c),
// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,
// Apply relative offset (+=/-=) if specified
o=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=o)),o}var ut={};function dt(t,e){
// Determine new display value for elements that need to change
for(var n,i,o,r,s,a,l,c=[],u=0,d=t.length;u<d;u++)(i=t[u]).style&&(n=i.style.display,e?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(c[u]=Y.get(i,"display")||null,c[u]||(i.style.display="")),""===i.style.display&&lt(i)&&(c[u]=(l=s=r=void 0,s=(o=i).ownerDocument,a=o.nodeName,(l=ut[a])||(r=s.body.appendChild(s.createElement(a)),l=T.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),ut[a]=l)))):"none"!==n&&(c[u]="none",
// Remember what we're overwriting
Y.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(u=0;u<d;u++)null!=c[u]&&(t[u].style.display=c[u]);return t}T.fn.extend({show:function(){return dt(this,!0)},hide:function(){return dt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){lt(this)?T(this).show():T(this).hide()})}});var ft=/^(?:checkbox|radio)$/i,ht=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pt=/^$|^module$|\/(?:java|ecma)script/i,gt={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function mt(t,e){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&D(t,e)?T.merge([t],n):n}
// Mark scripts as having already been evaluated
function vt(t,e){for(var n=0,i=t.length;n<i;n++)Y.set(t[n],"globalEval",!e||Y.get(e[n],"globalEval"))}
// Support: IE <=9 only
gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;var yt,bt,wt=/<|&#?\w+;/;function _t(t,e,n,i,o){for(var r,s,a,l,c,u,d=e.createDocumentFragment(),f=[],h=0,p=t.length;h<p;h++)if((r=t[h])||0===r)
// Add nodes directly
if("object"===_(r))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(f,r.nodeType?[r]:r);
// Convert non-html into a text node
else if(wt.test(r)){for(s=s||d.appendChild(e.createElement("div")),
// Deserialize a standard representation
a=(ht.exec(r)||["",""])[1].toLowerCase(),l=gt[a]||gt._default,s.innerHTML=l[1]+T.htmlPrefilter(r)+l[2],
// Descend through wrappers to the right content
u=l[0];u--;)s=s.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(f,s.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
s=d.firstChild).textContent=""}else f.push(e.createTextNode(r));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",h=0;r=f[h++];)
// Skip elements already in the context collection (trac-4087)
if(i&&-1<T.inArray(r,i))o&&o.push(r);else
// Capture executables
if(c=rt(r),
// Append to fragment
s=mt(d.appendChild(r),"script"),
// Preserve script evaluation history
c&&vt(s),n)for(u=0;r=s[u++];)pt.test(r.type||"")&&n.push(r);return d}yt=E.createDocumentFragment().appendChild(E.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(bt=E.createElement("input")).setAttribute("type","radio"),bt.setAttribute("checked","checked"),bt.setAttribute("name","t"),yt.appendChild(bt),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
y.checkClone=yt.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
yt.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!yt.cloneNode(!0).lastChild.defaultValue;var xt=/^key/,Ct=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Et=/^([^.]*)(?:\.(.+)|)/;function Tt(){return!0}function St(){return!1}
// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function At(t,e){return t===
// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return E.activeElement}catch(t){}}()==("focus"===e)}function Dt(t,e,n,i,o,r){var s,a;
// Types can be a map of types/handlers
if("object"==typeof e){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),e)Dt(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(
// ( types, fn )
o=n,i=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=i,i=void 0):(
// ( types, data, fn )
o=i,i=n,n=void 0)),!1===o)o=St;else if(!o)return t;return 1===r&&(s=o,
// Use same guid so caller can remove using origFn
(o=function(t){
// Can use an empty set, since event contains the info
return T().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),t.each(function(){T.event.add(this,e,o,i,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function kt(t,o,r){
// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
r?(
// Register the controller as a special universal handler for all event namespaces
Y.set(t,o,!1),T.event.add(t,o,{namespace:!1,handler:function(t){var e,n,i=Y.get(this,o);if(1&t.isTrigger&&this[o]){
// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(i.length)(T.event.special[o]||{}).delegateType&&t.stopPropagation();
// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
else if(
// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
i=a.call(arguments),Y.set(this,o,i),
// Trigger the native event and capture its result
// Support: IE <=9 - 11+
// focus() and blur() are asynchronous
e=r(this,o),this[o](),i!==(n=Y.get(this,o))||e?Y.set(this,o,!1):n={},i!==n)
// Cancel the outer synthetic event
return t.stopImmediatePropagation(),t.preventDefault(),n.value;
// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
}else i.length&&(
// ...and capture the result
Y.set(this,o,{value:T.event.trigger(
// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
T.extend(i[0],T.Event.prototype),i.slice(1),this)}),
// Abort handling of the native event
t.stopImmediatePropagation())}})):void 0===Y.get(t,o)&&T.event.add(t,o,Tt)}T.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,c,u,d,f,h,p,g,m=Y.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(m)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(r=n).handler,o=r.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
o&&T.find.matchesSelector(ot,o),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=T.guid++),
// Init the element's event structure and main handler, if this is the first
(l=m.events)||(l=m.events={}),(s=m.handle)||(s=m.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(
// Handle multiple events separated by a space
t=(t||"").match(H)||[""]).length;c--;)h=g=(a=Et.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
d=T.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(o?d.delegateType:d.bindType)||h,
// Update special based on newly reset type
d=T.event.special[h]||{},
// handleObj is passed to all event handlers
u=T.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:p.join(".")},r),
// Init the event handler queue if we're the first
(f=l[h])||((f=l[h]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(e,i,p,s)||e.addEventListener&&e.addEventListener(h,s)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
o?f.splice(f.delegateCount++,0,u):f.push(u),
// Keep track of which events have ever been used, for event optimization
T.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(t,e,n,i,o){var r,s,a,l,c,u,d,f,h,p,g,m=Y.hasData(t)&&Y.get(t);if(m&&(l=m.events)){for(c=(
// Once for each type.namespace in types; type may be omitted
e=(e||"").match(H)||[""]).length;c--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=g=(a=Et.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),h){for(d=T.event.special[h]||{},f=l[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
s=r=f.length;r--;)u=f[r],!o&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(f.splice(r,1),u.selector&&f.delegateCount--,d.remove&&d.remove.call(t,u));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
s&&!f.length&&(d.teardown&&!1!==d.teardown.call(t,p,m.handle)||T.removeEvent(t,h,m.handle),delete l[h])}else for(h in l)T.event.remove(t,h+e[c],n,i,!0);
// Remove data and the expando if it's no longer used
T.isEmptyObject(l)&&Y.remove(t,"handle events")}},dispatch:function(t){
// Make a writable jQuery.Event from the native event object
var e,n,i,o,r,s,a=T.event.fix(t),l=new Array(arguments.length),c=(Y.get(this,"events")||{})[a.type]||[],u=T.event.special[a.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(a.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,a)){for(
// Determine handlers
s=T.event.handlers.call(this,a,c),
// Run delegates first; they may want to stop propagation beneath us
e=0;(o=s[e++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)
// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
a.rnamespace&&!1!==r.namespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((T.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return u.postDispatch&&u.postDispatch.call(this,a),a.result}},handlers:function(t,e){var n,i,o,r,s,a=[],l=e.delegateCount,c=t.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&1<=t.button))for(;c!==this;c=c.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[
// Don't conflict with Object.prototype properties (#13203)
o=(i=e[n]).selector+" "]&&(s[o]=i.needsContext?-1<T(o,this).index(c):T.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}
// Add the remaining (directly-bound) handlers
return c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:b(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(t){return t[T.expando]?t:new T.Event(t)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{
// Utilize native event to ensure correct state for checkable inputs
setup:function(t){
// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;
// Claim the first handler
// Return false to allow normal processing in the caller
return ft.test(e.type)&&e.click&&D(e,"input")&&
// dataPriv.set( el, "click", ... )
kt(e,"click",Tt),!1},trigger:function(t){
// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;
// Force setup before triggering a click
// Return non-false to allow normal event-path propagation
return ft.test(e.type)&&e.click&&D(e,"input")&&kt(e,"click"),!0},
// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(t){var e=t.target;return ft.test(e.type)&&e.click&&D(e,"input")&&Y.get(e,"click")||D(e,"a")}},beforeunload:{postDispatch:function(t){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},T.removeEvent=function(t,e,n){
// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,n)},T.Event=function(t,e){
// Allow instantiation without the 'new' keyword
if(!(this instanceof T.Event))return new T.Event(t,e);
// Event object
t&&t.type?(this.originalEvent=t,this.type=t.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&
// Support: Android <=2.3 only
!1===t.returnValue?Tt:St,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,
// Put explicitly provided properties onto the event object
e&&T.extend(this,e),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),
// Mark it as fixed
this[T.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
T.Event.prototype={constructor:T.Event,isDefaultPrevented:St,isPropagationStopped:St,isImmediatePropagationStopped:St,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Tt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Tt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Tt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;
// Add which for key events
return null==t.which&&xt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!t.which&&void 0!==e&&Ct.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(t,e){T.event.special[t]={
// Utilize native event if possible so blur/focus sequence is correct
setup:function(){
// Return false to allow normal processing in the caller
// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
return kt(this,t,At),!1},trigger:function(){
// Return non-false to allow normal event-path propagation
// Force setup before trigger
return kt(this,t),!0},delegateType:e}}),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,o){T.event.special[t]={delegateType:o,bindType:o,handle:function(t){var e,n=t.relatedTarget,i=t.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return n&&(n===this||T.contains(this,n))||(t.type=i.origType,e=i.handler.apply(this,arguments),t.type=o),e}}}),T.fn.extend({on:function(t,e,n,i){return Dt(this,t,e,n,i)},one:function(t,e,n,i){return Dt(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)
// ( event )  dispatched jQuery.Event
return i=t.handleObj,T(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof t)return!1!==e&&"function"!=typeof e||(
// ( types [, fn] )
n=e,e=void 0),!1===n&&(n=St),this.each(function(){T.event.remove(this,t,n,e)});
// ( types-object [, selector] )
for(o in t)this.off(o,e,t[o]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
It=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
Ot=/<script|<style|<link/i,
// checked="checked" or checked
Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,Lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
// Prefer a tbody over its parent table for containing new rows
function Pt(t,e){return D(t,"table")&&D(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function jt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Ht(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Mt(t,e){var n,i,o,r,s,a,l,c;if(1===e.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Y.hasData(t)&&(r=Y.access(t),s=Y.set(e,r),c=r.events))for(o in delete s.handle,s.events={},c)for(n=0,i=c[o].length;n<i;n++)T.event.add(e,o,c[o][n]);
// 2. Copy user data
G.hasData(t)&&(a=G.access(t),l=T.extend({},a),G.set(e,l))}}
// Fix IE bugs, see support tests
function $t(n,i,o,r){
// Flatten any nested arrays
i=m.apply([],i);var t,e,s,a,l,c,u=0,d=n.length,f=d-1,h=i[0],p=b(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||1<d&&"string"==typeof h&&!y.checkClone&&Nt.test(h))return n.each(function(t){var e=n.eq(t);p&&(i[0]=h.call(this,t,e.html())),$t(e,i,o,r)});if(d&&(e=(t=_t(i,n[0].ownerDocument,!1,n,r)).firstChild,1===t.childNodes.length&&(t=e),e||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(s=T.map(mt(t,"script"),jt)).length;u<d;u++)l=t,u!==f&&(l=T.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(s,mt(l,"script"))),o.call(n[u],l,u);if(a)
// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,
// Reenable scripts
T.map(s,Ht),u=0;u<a;u++)l=s[u],pt.test(l.type||"")&&!Y.access(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")}):w(l.textContent.replace(Lt,""),l,c))}return n}function qt(t,e,n){for(var i,o=e?T.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||T.cleanData(mt(i)),i.parentNode&&(n&&rt(i)&&vt(mt(i,"script")),i.parentNode.removeChild(i));return t}T.extend({htmlPrefilter:function(t){return t.replace(It,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a,l,c,u=t.cloneNode(!0),d=rt(t);
// Fix IE cloning issues
if(!(y.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||T.isXMLDoc(t)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
s=mt(u),i=0,o=(r=mt(t)).length;i<o;i++)a=r[i],l=s[i],void 0,
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===(c=l.nodeName.toLowerCase())&&ft.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);
// Copy the events from the original to the clone
if(e)if(n)for(r=r||mt(t),s=s||mt(u),i=0,o=r.length;i<o;i++)Mt(r[i],s[i]);else Mt(t,u);
// Preserve script evaluation history
// Return the cloned set
return 0<(s=mt(u,"script")).length&&vt(s,!d&&mt(t,"script")),u},cleanData:function(t){for(var e,n,i,o=T.event.special,r=0;void 0!==(n=t[r]);r++)if(X(n)){if(e=n[Y.expando]){if(e.events)for(i in e.events)o[i]?T.event.remove(n,i):T.removeEvent(n,i,e.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Y.expando]=void 0}n[G.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[G.expando]=void 0)}}}),T.fn.extend({detach:function(t){return qt(this,t,!0)},remove:function(t){return qt(this,t)},text:function(t){return z(this,function(t){return void 0===t?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return $t(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Pt(this,t).appendChild(t)})},prepend:function(){return $t(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Pt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return $t(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return $t(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(
// Prevent memory leaks
T.cleanData(mt(t,!1)),
// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return T.clone(this,t,e)})},html:function(t){return z(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!Ot.test(t)&&!gt[(ht.exec(t)||["",""])[1].toLowerCase()]){t=T.htmlPrefilter(t);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(e=this[n]||{}).nodeType&&(T.cleanData(mt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return $t(this,arguments,function(t){var e=this.parentNode;T.inArray(this,n)<0&&(T.cleanData(mt(this)),e&&e.replaceChild(t,this));
// Force callback invocation
},n)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,s){T.fn[t]=function(t){for(var e,n=[],i=T(t),o=i.length-1,r=0;r<=o;r++)e=r===o?this:this.clone(!0),T(i[r])[s](e),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
l.apply(n,e.get());return this.pushStack(n)}});var Rt,Wt,Bt,zt,Ft,Ut,Qt,Vt=new RegExp("^("+et+")(?!px)[a-z%]+$","i"),Xt=function(t){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var e=t.ownerDocument.defaultView;return e&&e.opener||(e=C),e.getComputedStyle(t)},Kt=new RegExp(it.join("|"),"i");
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function Yt(){
// This is a singleton, we need to execute it only once
if(Qt){Ut.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Qt.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ot.appendChild(Ut).appendChild(Qt);var t=C.getComputedStyle(Qt);Rt="1%"!==t.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
Ft=12===Gt(t.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
Qt.style.right="60%",zt=36===Gt(t.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
Wt=36===Gt(t.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
Qt.style.position="absolute",Bt=12===Gt(Qt.offsetWidth/3),ot.removeChild(Ut),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
Qt=null}}function Gt(t){return Math.round(parseFloat(t))}function Zt(t,e,n){var i,o,r,s,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=t.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||Xt(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||rt(t)||(s=T.style(t,e)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!y.pixelBoxStyles()&&Vt.test(s)&&Kt.test(e)&&(
// Remember the original values
i=a.width,o=a.minWidth,r=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=s,s=n.width,
// Revert the changed values
a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+"":s}function Jt(t,e){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!t())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}Ut=E.createElement("div"),
// Finish early in limited (non-browser) environments
(Qt=E.createElement("div")).style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
Qt.style.backgroundClip="content-box",Qt.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===Qt.style.backgroundClip,T.extend(y,{boxSizingReliable:function(){return Yt(),Wt},pixelBoxStyles:function(){return Yt(),zt},pixelPosition:function(){return Yt(),Rt},reliableMarginLeft:function(){return Yt(),Ft},scrollboxSize:function(){return Yt(),Bt}}));var te=["Webkit","Moz","ms"],ee=E.createElement("div").style,ne={};
// Return a vendor-prefixed property or undefined
// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function ie(t){var e=T.cssProps[t]||ne[t];return e||(t in ee?t:ne[t]=function(t){for(
// Check for vendor prefixed names
var e=t[0].toUpperCase()+t.slice(1),n=te.length;n--;)if((t=te[n]+e)in ee)return t}(t)||t)}var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
oe=/^(none|table(?!-c[ea]).+)/,re=/^--/,se={position:"absolute",visibility:"hidden",display:"block"},ae={letterSpacing:"0",fontWeight:"400"};function le(t,e,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=nt.exec(e);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function ce(t,e,n,i,o,r){var s="width"===e?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)
// Both box models exclude margin
"margin"===n&&(l+=T.css(t,n+it[s],!0,o)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=T.css(t,"padding"+it[s],!0,o)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=T.css(t,"border"+it[s]+"Width",!0,o))):(
// Add padding
l+=T.css(t,"padding"+it[s],!0,o),
// For "border" or "margin", add border
"padding"!==n?l+=T.css(t,"border"+it[s]+"Width",!0,o):a+=T.css(t,"border"+it[s]+"Width",!0,o));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&0<=r&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-l-a-.5))||0),l}function ue(t,e,n){
// Start with computed style
var i=Xt(t),o=(!y.boxSizingReliable()||n)&&"border-box"===T.css(t,"boxSizing",!1,i),r=o,s=Zt(t,e,i),a="offset"+e[0].toUpperCase()+e.slice(1);
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(Vt.test(s)){if(!n)return s;s="auto"}
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// Support: IE 9-11 only
// Also use offsetWidth/offsetHeight for when box sizing is unreliable
// We use getClientRects() to check for hidden/disconnected.
// In those cases, the computed value can be trusted to be border-box
// Adjust for the element's box model
return(!y.boxSizingReliable()&&o||"auto"===s||!parseFloat(s)&&"inline"===T.css(t,"display",!1,i))&&t.getClientRects().length&&(o="border-box"===T.css(t,"boxSizing",!1,i),(
// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
r=a in t)&&(s=t[a])),(
// Normalize "" and auto
s=parseFloat(s)||0)+ce(t,e,n||(o?"border":"content"),r,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
s)+"px"}function de(t,e,n,i,o){return new de.prototype.init(t,e,n,i,o)}T.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){
// We should always get a number back from opacity
var n=Zt(t,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(t,e,n,i){
// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){
// Make sure that we're working with the right name
var o,r,s,a=V(e),l=re.test(e),c=t.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(e=ie(a)),
// Gets hook for the prefixed version, then unprefixed version
s=T.cssHooks[e]||T.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:c[e];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(r=typeof n)&&(o=nt.exec(n))&&o[1]&&(n=ct(t,e,o),
// Fixes bug #9237
r="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
"number"!==r||l||(n+=o&&o[3]||(T.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
y.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,i){var o,r,s,a=V(e);
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return re.test(e)||(e=ie(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
s=T.cssHooks[e]||T.cssHooks[a])&&"get"in s&&(o=s.get(t,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===o&&(o=Zt(t,e,i)),
// Convert "normal" to computed value
"normal"===o&&e in ae&&(o=ae[e]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),T.each(["height","width"],function(t,l){T.cssHooks[l]={get:function(t,e,n){if(e)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!oe.test(T.css(t,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?ue(t,l,n):at(t,se,function(){return ue(t,l,n)})},set:function(t,e,n){var i,o=Xt(t),
// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
r=!y.scrollboxSize()&&"absolute"===o.position,s=(r||n)&&"border-box"===T.css(t,"boxSizing",!1,o),a=n?ce(t,l,n,s,o):0;
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return s&&r&&(a-=Math.ceil(t["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(o[l])-ce(t,l,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
a&&(i=nt.exec(e))&&"px"!==(i[3]||"px")&&(t.style[l]=e,e=T.css(t,l)),le(0,e,a)}}}),T.cssHooks.marginLeft=Jt(y.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Zt(t,"marginLeft"))||t.getBoundingClientRect().left-at(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
T.each({margin:"",padding:"",border:"Width"},function(o,r){T.cssHooks[o+r]={expand:function(t){for(var e=0,n={},
// Assumes a single number if not a string
i="string"==typeof t?t.split(" "):[t];e<4;e++)n[o+it[e]+r]=i[e]||i[e-2]||i[0];return n}},"margin"!==o&&(T.cssHooks[o+r].set=le)}),T.fn.extend({css:function(t,e){return z(this,function(t,e,n){var i,o,r={},s=0;if(Array.isArray(e)){for(i=Xt(t),o=e.length;s<o;s++)r[e[s]]=T.css(t,e[s],!1,i);return r}return void 0!==n?T.style(t,e,n):T.css(t,e)},t,e,1<arguments.length)}}),((T.Tween=de).prototype={constructor:de,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||T.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(T.cssNumber[n]?"":"px")},cur:function(){var t=de.propHooks[this.prop];return t&&t.get?t.get(this):de.propHooks._default.get(this)},run:function(t){var e,n=de.propHooks[this.prop];return this.options.duration?this.pos=e=T.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):de.propHooks._default.set(this),this}}).init.prototype=de.prototype,
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
(de.propHooks={_default:{get:function(t){var e;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
e=T.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
T.fx.step[t.prop]?T.fx.step[t.prop](t):1!==t.elem.nodeType||!T.cssHooks[t.prop]&&null==t.elem.style[ie(t.prop)]?t.elem[t.prop]=t.now:T.style(t.elem,t.prop,t.now+t.unit)}}}).scrollTop=de.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},T.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},T.fx=de.prototype.init,
// Back compat <1.8 extension point
T.fx.step={};var fe,he,pe,ge,me=/^(?:toggle|show|hide)$/,ve=/queueHooks$/;function ye(){he&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ye):C.setTimeout(ye,T.fx.interval),T.fx.tick())}
// Animations created synchronously will run synchronously
function be(){return C.setTimeout(function(){fe=void 0}),fe=Date.now()}
// Generate parameters to create a standard animation
function we(t,e){var n,i=0,o={height:t};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(e=e?1:0;i<4;i+=2-e)o["margin"+(n=it[i])]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function _e(t,e,n){for(var i,o=(xe.tweeners[e]||[]).concat(xe.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,e,t))
// We're done with this property
return i}function xe(r,t,e){var n,s,i=0,o=xe.prefilters.length,a=T.Deferred().always(function(){
// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(s)return!1;for(var t=fe||be(),e=Math.max(0,c.startTime+c.duration-t),n=1-(e/c.duration||0),i=0,o=c.tweens.length;i<o;i++)c.tweens[i].run(n);
// If there's more to do, yield
return a.notifyWith(r,[c,n,e]),n<1&&o?e:(
// If this was an empty animation, synthesize a final progress notification
o||a.notifyWith(r,[c,1,0]),
// Resolve the animation and report its conclusion
a.resolveWith(r,[c]),!1)},c=a.promise({elem:r,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},e),originalProperties:t,originalOptions:e,startTime:fe||be(),duration:e.duration,tweens:[],createTween:function(t,e){var n=T.Tween(r,c.opts,t,e,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(n),n},stop:function(t){var e=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=t?c.tweens.length:0;if(s)return this;for(s=!0;e<n;e++)c.tweens[e].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c,t])):a.rejectWith(r,[c,t]),this}}),u=c.props;for(!function(t,e){var n,i,o,r,s;
// camelCase, specialEasing and expand cssHook pass
for(n in t)if(o=e[i=V(n)],r=t[n],Array.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=T.cssHooks[i])&&"expand"in s)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=s.expand(r),delete t[i],r)n in t||(t[n]=r[n],e[n]=o);else e[i]=o}(u,c.opts.specialEasing);i<o;i++)if(n=xe.prefilters[i].call(c,r,u,c.opts))return b(n.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return T.map(u,_e,c),b(c.opts.start)&&c.opts.start.call(r,c),
// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:r,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(xe,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return ct(n.elem,t,nt.exec(e),n),n}]},tweener:function(t,e){for(var n,i=0,o=(t=b(t)?(e=t,["*"]):t.match(H)).length;i<o;i++)n=t[i],xe.tweeners[n]=xe.tweeners[n]||[],xe.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,o,r,s,a,l,c,u,d="width"in e||"height"in e,f=this,h={},p=t.style,g=t.nodeType&&lt(t),m=Y.get(t,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(s=T._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,f.always(function(){
// Ensure the complete handler is called before this completes
f.always(function(){s.unqueued--,T.queue(t,"fx").length||s.empty.fire()})})),e)if(o=e[i],me.test(o)){if(delete e[i],r=r||"toggle"===o,o===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!m||void 0===m[i])continue;g=!0}h[i]=m&&m[i]||T.style(t,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!T.isEmptyObject(e))||!T.isEmptyObject(h))for(i in
// Restrict "overflow" and "display" styles during box animations
d&&1===t.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
c=m&&m.display)&&(c=Y.get(t,"display")),"none"===(u=T.css(t,"display"))&&(c?u=c:(
// Get nonempty value(s) by temporarily forcing visibility
dt([t],!0),c=t.style.display||c,u=T.css(t,"display"),dt([t]))),
// Animate inline elements as inline-block
("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(t,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(f.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1,h)
// General show/hide setup for this element animation
l||(m?"hidden"in m&&(g=m.hidden):m=Y.access(t,"fxshow",{display:c}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(m.hidden=!g),
// Show elements before animating them
g&&dt([t],!0)
/* eslint-disable no-loop-func */,f.done(function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||dt([t]),Y.remove(t,"fxshow"),h)T.style(t,i,h[i])})),
// Per-property setup
l=_e(g?m[i]:0,i,f),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?xe.prefilters.unshift(t):xe.prefilters.push(t)}}),T.speed=function(t,e,n){var i=t&&"object"==typeof t?T.extend({},t):{complete:n||!n&&e||b(t)&&t,duration:t,easing:n&&e||e&&!b(e)&&e};
// Go to the end state if fx are off
return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){b(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(t,e,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(lt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(e,t,n,i){function o(){
// Operate on a copy of prop so per-property easing won't be lost
var t=xe(this,T.extend({},e),s);
// Empty animations, or finishing resolves immediately
(r||Y.get(this,"finish"))&&t.stop(!0)}var r=T.isEmptyObject(e),s=T.speed(t,n,i);return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(o,t,r){function s(t){var e=t.stop;delete t.stop,e(r)}return"string"!=typeof o&&(r=t,t=o,o=void 0),t&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var t=!0,e=null!=o&&o+"queueHooks",n=T.timers,i=Y.get(this);if(e)i[e]&&i[e].stop&&s(i[e]);else for(e in i)i[e]&&i[e].stop&&ve.test(e)&&s(i[e]);for(e=n.length;e--;)n[e].elem!==this||null!=o&&n[e].queue!==o||(n[e].anim.stop(r),t=!1,n.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&r||T.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var t,e=Y.get(this),n=e[s+"queue"],i=e[s+"queueHooks"],o=T.timers,r=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(e.finish=!0,
// Empty the queue first
T.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===s&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<r;t++)n[t]&&n[t].finish&&n[t].finish.call(this);
// Turn off finishing flag
delete e.finish})}}),T.each(["toggle","show","hide"],function(t,i){var o=T.fn[i];T.fn[i]=function(t,e,n){return null==t||"boolean"==typeof t?o.apply(this,arguments):this.animate(we(i,!0),t,e,n)}}),
// Generate shortcuts for custom animations
T.each({slideDown:we("show"),slideUp:we("hide"),slideToggle:we("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){T.fn[t]=function(t,e,n){return this.animate(i,t,e,n)}}),T.timers=[],T.fx.tick=function(){var t,e=0,n=T.timers;for(fe=Date.now();e<n.length;e++)
// Run the timer and safely remove it when done (allowing for external removal)
(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||T.fx.stop(),fe=void 0},T.fx.timer=function(t){T.timers.push(t),T.fx.start()},T.fx.interval=13,T.fx.start=function(){he||(he=!0,ye())},T.fx.stop=function(){he=null},T.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
T.fn.delay=function(i,t){return i=T.fx&&T.fx.speeds[i]||i,t=t||"fx",this.queue(t,function(t,e){var n=C.setTimeout(t,i);e.stop=function(){C.clearTimeout(n)}})},pe=E.createElement("input"),ge=E.createElement("select").appendChild(E.createElement("option")),pe.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
y.checkOn=""!==pe.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
y.optSelected=ge.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
pe=E.createElement("input")).value="t",pe.type="radio",y.radioValue="t"===pe.value;var Ce,Ee=T.expr.attrHandle;T.fn.extend({attr:function(t,e){return z(this,T.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each(function(){T.removeAttr(this,t)})}}),T.extend({attr:function(t,e,n){var i,o,r=t.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)
// Fallback to prop when attributes are not supported
return void 0===t.getAttribute?T.prop(t,e,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===r&&T.isXMLDoc(t)||(o=T.attrHooks[e.toLowerCase()]||(T.expr.match.bool.test(e)?Ce:void 0)),void 0!==n?null===n?void T.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=T.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!y.radioValue&&"radio"===e&&D(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=e&&e.match(H);if(o&&1===t.nodeType)for(;n=o[i++];)t.removeAttribute(n)}}),
// Hooks for boolean attributes
Ce={set:function(t,e,n){return!1===e?
// Remove boolean attributes when set to false
T.removeAttr(t,n):t.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(t,e){var s=Ee[e]||T.find.attr;Ee[e]=function(t,e,n){var i,o,r=e.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=Ee[r],Ee[r]=i,i=null!=s(t,e,n)?r:null,Ee[r]=o),i}});var Te=/^(?:input|select|textarea|button)$/i,Se=/^(?:a|area)$/i;
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function Ae(t){return(t.match(H)||[]).join(" ")}function De(t){return t.getAttribute&&t.getAttribute("class")||""}function ke(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(H)||[]}T.fn.extend({prop:function(t,e){return z(this,T.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each(function(){delete this[T.propFix[t]||t]})}}),T.extend({prop:function(t,e,n){var i,o,r=t.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return 1===r&&T.isXMLDoc(t)||(
// Fix name and attach hooks
e=T.propFix[e]||e,o=T.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var e=T.find.attr(t,"tabindex");return e?parseInt(e,10):Te.test(t.nodeName)||Se.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
y.optSelected||(T.propHooks.selected={get:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(b(e))return this.each(function(t){T(this).addClass(e.call(this,t,De(this)))});if((t=ke(e)).length)for(;n=this[l++];)if(o=De(n),i=1===n.nodeType&&" "+Ae(o)+" "){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");
// Only assign if different to avoid unneeded rendering.
o!==(a=Ae(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(b(e))return this.each(function(t){T(this).removeClass(e.call(this,t,De(this)))});if(!arguments.length)return this.attr("class","");if((t=ke(e)).length)for(;n=this[l++];)if(o=De(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+Ae(o)+" "){for(s=0;r=t[s++];)
// Remove *all* instances
for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");
// Only assign if different to avoid unneeded rendering.
o!==(a=Ae(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,e){var r=typeof o,s="string"==r||Array.isArray(o);return"boolean"==typeof e&&s?e?this.addClass(o):this.removeClass(o):b(o)?this.each(function(t){T(this).toggleClass(o.call(this,t,De(this),e),e)}):this.each(function(){var t,e,n,i;if(s)for(
// Toggle individual class names
e=0,n=T(this),i=ke(o);t=i[e++];)
// Check each className given, space separated list
n.hasClass(t)?n.removeClass(t):n.addClass(t);
// Toggle whole class name
else void 0!==o&&"boolean"!=r||((t=De(this))&&
// Store className if set
Y.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===o?"":Y.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+Ae(De(n))+" ").indexOf(e))return!0;return!1}});var Ie=/\r/g;T.fn.extend({val:function(n){var i,t,o,e=this[0];return arguments.length?(o=b(n),this.each(function(t){var e;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(e=o?n.call(this,t,T(this).val()):n)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=T.map(e,function(t){return null==t?"":t+""})),
// If set returns undefined, fall back to normal setting
(i=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,e,"value")||(this.value=e))})):e?(i=T.valHooks[e.type]||T.valHooks[e.nodeName.toLowerCase()])&&"get"in i&&void 0!==(t=i.get(e,"value"))?t:
// Handle most common string cases
"string"==typeof(t=e.value)?t.replace(Ie,""):null==t?"":t:void 0}}),T.extend({valHooks:{option:{get:function(t){var e=T.find.attr(t,"value");return null!=e?e:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
Ae(T.text(t))}},select:{get:function(t){var e,n,i,o=t.options,r=t.selectedIndex,s="select-one"===t.type,a=s?null:[],l=s?r+1:o.length;
// Loop through all the selected options
for(i=r<0?l:s?r:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=o[i]).selected||i===r)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
e=T(n).val(),s)return e;
// Multi-Selects return an array
a.push(e)}return a},set:function(t,e){for(var n,i,o=t.options,r=T.makeArray(e),s=o.length;s--;)
/* eslint-disable no-cond-assign */
((i=o[s]).selected=-1<T.inArray(T.valHooks.option.get(i),r))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(t.selectedIndex=-1),r}}}}),
// Radios and checkboxes getter/setter
T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<T.inArray(T(t).val(),e)}},y.checkOn||(T.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),
// Return jQuery for attributes-only inclusion
y.focusin="onfocusin"in C;function Oe(t){t.stopPropagation()}var Ne=/^(?:focusinfocus|focusoutblur)$/;T.extend(T.event,{trigger:function(t,e,n,i){var o,r,s,a,l,c,u,d,f=[n||E],h=v.call(t,"type")?t.type:t,p=v.call(t,"namespace")?t.namespace.split("."):[];
// Don't do events on text and comment nodes
if(r=d=s=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Ne.test(h+T.event.triggered)&&(-1<h.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=(p=h.split(".")).shift(),p.sort()),l=h.indexOf(":")<0&&"on"+h,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
t=t[T.expando]?t:new T.Event(h,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
e=null==e?[t]:T.makeArray(e,[t]),
// Allow special events to draw outside the lines
u=T.event.special[h]||{},i||!u.trigger||!1!==u.trigger.apply(n,e))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!u.noBubble&&!g(n)){for(a=u.delegateType||h,Ne.test(a+h)||(r=r.parentNode);r;r=r.parentNode)f.push(r),s=r;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(n.ownerDocument||E)&&f.push(s.defaultView||s.parentWindow||C)}
// Fire handlers on the event path
for(o=0;(r=f[o++])&&!t.isPropagationStopped();)d=r,t.type=1<o?a:u.bindType||h,(
// jQuery handler
c=(Y.get(r,"events")||{})[t.type]&&Y.get(r,"handle"))&&c.apply(r,e),(
// Native handler
c=l&&r[l])&&c.apply&&X(r)&&(t.result=c.apply(r,e),!1===t.result&&t.preventDefault());return t.type=h,
// If nobody prevented the default action, do it now
i||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(f.pop(),e)||!X(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&b(n[h])&&!g(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(s=n[l])&&(n[l]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
T.event.triggered=h,t.isPropagationStopped()&&d.addEventListener(h,Oe),n[h](),t.isPropagationStopped()&&d.removeEventListener(h,Oe),T.event.triggered=void 0,s&&(n[l]=s)),t.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,n){var i=T.extend(new T.Event,n,{type:t,isSimulated:!0});T.event.trigger(i,null,e)}}),T.fn.extend({trigger:function(t,e){return this.each(function(){T.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return T.event.trigger(t,e,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
y.focusin||T.each({focus:"focusin",blur:"focusout"},function(n,i){function o(t){T.event.simulate(i,t.target,T.event.fix(t))}T.event.special[i]={setup:function(){var t=this.ownerDocument||this,e=Y.access(t,i);e||t.addEventListener(n,o,!0),Y.access(t,i,(e||0)+1)},teardown:function(){var t=this.ownerDocument||this,e=Y.access(t,i)-1;e?Y.access(t,i,e):(t.removeEventListener(n,o,!0),Y.remove(t,i))}}});var Le=C.location,Pe=Date.now(),je=/\?/;
// Cross-browser xml parsing
T.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{e=(new C.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+t),e};var He=/\[\]$/,Me=/\r?\n/g,$e=/^(?:submit|button|image|reset|file)$/i,qe=/^(?:input|select|textarea|keygen)/i;function Re(n,t,i,o){var e;if(Array.isArray(t))
// Serialize array item.
T.each(t,function(t,e){i||He.test(n)?
// Treat each array item as a scalar.
o(n,e):
// Item is non-scalar (array or object), encode its numeric index.
Re(n+"["+("object"==typeof e&&null!=e?t:"")+"]",e,i,o)});else if(i||"object"!==_(t))
// Serialize scalar item.
o(n,t);else
// Serialize object item.
for(e in t)Re(n+"["+e+"]",t[e],i,o)}
// Serialize an array of form elements or a set of
// key/values into a query string
T.param=function(t,e){function n(t,e){
// If value is a function, invoke it and use its return value
var n=b(e)?e():e;o[o.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)}var i,o=[];if(null==t)return"";
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!T.isPlainObject(t))
// Serialize the form elements
T.each(t,function(){n(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(i in t)Re(i,t[i],e,n);
// Return the resulting serialization
return o.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var t=T.prop(this,"elements");return t?T.makeArray(t):this}).filter(function(){var t=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!T(this).is(":disabled")&&qe.test(this.nodeName)&&!$e.test(t)&&(this.checked||!ft.test(t))}).map(function(t,e){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(t){return{name:e.name,value:t.replace(Me,"\r\n")}}):{name:e.name,value:n.replace(Me,"\r\n")}}).get()}});var We=/%20/g,Be=/#.*$/,ze=/([?&])_=[^&]*/,Fe=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ue=/^(?:GET|HEAD)$/,Qe=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Ve={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Xe={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Ke="*/".concat("*"),
// Anchor tag for parsing the document origin
Ye=E.createElement("a");
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Ge(r){
// dataTypeExpression is optional and defaults to "*"
return function(t,e){"string"!=typeof t&&(e=t,t="*");var n,i=0,o=t.toLowerCase().match(H)||[];if(b(e))
// For each dataType in the dataTypeExpression
for(;n=o[i++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(e)):(r[n]=r[n]||[]).push(e)}}
// Base inspection function for prefilters and transports
function Ze(e,o,r,s){var a={},l=e===Xe;function c(t){var i;return a[t]=!0,T.each(e[t]||[],function(t,e){var n=e(o,r,s);return"string"!=typeof n||l||a[n]?l?!(i=n):void 0:(o.dataTypes.unshift(n),c(n),!1)}),i}return c(o.dataTypes[0])||!a["*"]&&c("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function Je(t,e){var n,i,o=T.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i=i||{})[n]=e[n]);return i&&T.extend(!0,t,i),t}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */Ye.href=Le.href,T.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Le.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Le.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Ke,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":T.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?
// Building a settings object
Je(Je(t,T.ajaxSettings),e):
// Extending ajaxSettings
Je(T.ajaxSettings,t)},ajaxPrefilter:Ge(Ve),ajaxTransport:Ge(Xe),
// Main method
ajax:function(t,e){
// If url is an object, simulate pre-1.5 signature
"object"==typeof t&&(e=t,t=void 0),
// Force options to be an object
e=e||{};var u,
// URL without anti-cache param
d,
// Response headers
f,n,
// timeout handle
h,
// Url cleanup var
i,
// Request state (becomes false upon send and true upon completion)
p,
// To know if global events are to be dispatched
g,
// Loop variable
o,
// uncached part of the url
r,
// Create the final options object
m=T.ajaxSetup({},e),
// Callbacks context
v=m.context||m,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=m.context&&(v.nodeType||v.jquery)?T(v):T.event,
// Deferreds
b=T.Deferred(),w=T.Callbacks("once memory"),
// Status-dependent callbacks
_=m.statusCode||{},
// Headers (they are sent all at once)
s={},a={},
// Default abort message
l="canceled",
// Fake xhr
x={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(p){if(!n)for(n={};e=Fe.exec(f);)n[e[1].toLowerCase()+" "]=(n[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=n[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},
// Raw string
getAllResponseHeaders:function(){return p?f:null},
// Caches the header
setRequestHeader:function(t,e){return null==p&&(t=a[t.toLowerCase()]=a[t.toLowerCase()]||t,s[t]=e),this},
// Overrides response content-type header
overrideMimeType:function(t){return null==p&&(m.mimeType=t),this},
// Status-dependent callbacks
statusCode:function(t){var e;if(t)if(p)
// Execute the appropriate callbacks
x.always(t[x.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(e in t)_[e]=[_[e],t[e]];return this},
// Cancel the request
abort:function(t){var e=t||l;return u&&u.abort(e),c(0,e),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(x),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
m.url=((t||m.url||Le.href)+"").replace(Qe,Le.protocol+"//"),
// Alias method option to type as per ticket #12004
m.type=e.method||e.type||m.method||m.type,
// Extract dataTypes list
m.dataTypes=(m.dataType||"*").toLowerCase().match(H)||[""],null==m.crossDomain){i=E.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{i.href=m.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
i.href=i.href,m.crossDomain=Ye.protocol+"//"+Ye.host!=i.protocol+"//"+i.host}catch(t){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
m.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=T.param(m.data,m.traditional)),
// Apply prefilters
Ze(Ve,m,e,x),p)return x;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(o in
// Watch for a new set of requests
(g=T.event&&m.global)&&0==T.active++&&T.event.trigger("ajaxStart"),
// Uppercase the type
m.type=m.type.toUpperCase(),
// Determine if request has content
m.hasContent=!Ue.test(m.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=m.url.replace(Be,""),
// More options handling for requests with no content
m.hasContent?m.data&&m.processData&&0===(m.contentType||"").indexOf("application/x-www-form-urlencoded")&&(m.data=m.data.replace(We,"+")):(
// Remember the hash so we can put it back
r=m.url.slice(d.length),
// If data is available and should be processed, append data to url
m.data&&(m.processData||"string"==typeof m.data)&&(d+=(je.test(d)?"&":"?")+m.data,
// #9682: remove data so that it's not used in an eventual retry
delete m.data),
// Add or update anti-cache param if needed
!1===m.cache&&(d=d.replace(ze,"$1"),r=(je.test(d)?"&":"?")+"_="+Pe+++r),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
m.url=d+r),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&(T.lastModified[d]&&x.setRequestHeader("If-Modified-Since",T.lastModified[d]),T.etag[d]&&x.setRequestHeader("If-None-Match",T.etag[d])),
// Set the correct header, if data is being sent
(m.data&&m.hasContent&&!1!==m.contentType||e.contentType)&&x.setRequestHeader("Content-Type",m.contentType),
// Set the Accepts header for the server, depending on the dataType
x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+Ke+"; q=0.01":""):m.accepts["*"]),m.headers)x.setRequestHeader(o,m.headers[o]);
// Allow custom headers/mimetypes and early abort
if(m.beforeSend&&(!1===m.beforeSend.call(v,x,m)||p))
// Abort if not done already and return
return x.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(l="abort",
// Install callbacks on deferreds
w.add(m.complete),x.done(m.success),x.fail(m.error),
// Get transport
u=Ze(Xe,m,e,x)){
// If request was aborted inside ajaxSend, stop there
if(x.readyState=1,
// Send global event
g&&y.trigger("ajaxSend",[x,m]),p)return x;
// Timeout
m.async&&0<m.timeout&&(h=C.setTimeout(function(){x.abort("timeout")},m.timeout));try{p=!1,u.send(s,c)}catch(t){
// Rethrow post-completion exceptions
if(p)throw t;
// Propagate others as results
c(-1,t)}}
// Callback for when everything is done
else c(-1,"No Transport");function c(t,e,n,i){var o,r,s,a,l,c=e;
// Ignore repeat invocations
p||(p=!0,
// Clear timeout if it exists
h&&C.clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
u=void 0,
// Cache response headers
f=i||"",
// Set readyState
x.readyState=0<t?4:0,
// Determine if successful
o=200<=t&&t<300||304===t,
// Get response data
n&&(a=function(t,e,n){
// Remove auto dataType and get content-type in the process
for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)r=l[0];else{
// Try convertible dataTypes
for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){r=o;break}s=s||o}
// Or just use first one
r=r||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==l[0]&&l.unshift(r),n[r]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */(m,x,n)),
// Convert no matter what (that way responseXXX fields are always set)
a=function(t,e,n,i){var o,r,s,a,l,c={},
// Work with a copy of dataTypes in case we need to modify it for conversion
u=t.dataTypes.slice();
// Create converters map with lowercased keys
if(u[1])for(s in t.converters)c[s.toLowerCase()]=t.converters[s];
// Convert to each sequential dataType
for(r=u.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),
// Apply the dataFilter if provided
!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=u.shift())
// There's only work to do if current dataType is non-auto
if("*"===r)r=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==r){
// If none found, seek a pair
if(!(
// Seek a direct converter
s=c[l+" "+r]||c["* "+r]))for(o in c)if((
// If conv2 outputs current
a=o.split(" "))[1]===r&&(
// If prev can be converted to accepted input
s=c[l+" "+a[0]]||c["* "+a[0]])){
// Condense equivalence converters
!0===s?s=c[o]:!0!==c[o]&&(r=a[0],u.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==s)
// Unless errors are allowed to bubble, catch and return them
if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}(m,a,x,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&((l=x.getResponseHeader("Last-Modified"))&&(T.lastModified[d]=l),(l=x.getResponseHeader("etag"))&&(T.etag[d]=l)),
// if no content
204===t||"HEAD"===m.type?c="nocontent":304===t?c="notmodified":(c=a.state,r=a.data,o=!(s=a.error))):(
// Extract error from statusText and normalize for non-aborts
s=c,!t&&c||(c="error",t<0&&(t=0))),
// Set data for the fake xhr object
x.status=t,x.statusText=(e||c)+"",
// Success/Error
o?b.resolveWith(v,[r,c,x]):b.rejectWith(v,[x,c,s]),
// Status-dependent callbacks
x.statusCode(_),_=void 0,g&&y.trigger(o?"ajaxSuccess":"ajaxError",[x,m,o?r:s]),
// Complete
w.fireWith(v,[x,c]),g&&(y.trigger("ajaxComplete",[x,m]),
// Handle the global AJAX counter
--T.active||T.event.trigger("ajaxStop")))}return x},getJSON:function(t,e,n){return T.get(t,e,n,"json")},getScript:function(t,e){return T.get(t,void 0,e,"script")}}),T.each(["get","post"],function(t,o){T[o]=function(t,e,n,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return b(e)&&(i=i||n,n=e,e=void 0),T.ajax(T.extend({url:t,type:o,dataType:i,data:e,success:n},T.isPlainObject(t)&&t))}}),T._evalUrl=function(t,e){return T.ajax({url:t,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,
// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(t){T.globalEval(t,e)}})},T.fn.extend({wrapAll:function(t){var e;return this[0]&&(b(t)&&(t=t.call(this[0])),
// The elements to wrap the target around
e=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return b(n)?this.each(function(t){T(this).wrapInner(n.call(this,t))}):this.each(function(){var t=T(this),e=t.contents();e.length?e.wrapAll(n):t.append(n)})},wrap:function(e){var n=b(e);return this.each(function(t){T(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(t){return this.parent(t).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(t){return!T.expr.pseudos.visible(t)},T.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(t){}};var tn={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},en=T.ajaxSettings.xhr();y.cors=!!en&&"withCredentials"in en,y.ajax=en=!!en,T.ajaxTransport(function(o){var r,s;
// Cross domain only allowed if supported through XMLHttpRequest
if(y.cors||en&&!o.crossDomain)return{send:function(t,e){var n,i=o.xhr();
// Apply custom fields if provided
if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
o.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)i.setRequestHeader(n,t[n]);
// Callback
r=function(t){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===t?i.abort():"error"===t?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof i.status?e(0,"error"):e(
// File: protocol always yields status 0; see #8605, #14207
i.status,i.statusText):e(tn[i.status]||i.status,i.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},
// Listen to events
i.onload=r(),s=i.onerror=i.ontimeout=r("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===i.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
C.setTimeout(function(){r&&s()})},
// Create the abort callback
r=r("abort");try{
// Do send the request (this may raise an exception)
i.send(o.hasContent&&o.data||null)}catch(t){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(r)throw t}},abort:function(){r&&r()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
T.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),
// Install script dataType
T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return T.globalEval(t),t}}}),
// Handle cache's special case and crossDomain
T.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),
// Bind script tag hack transport
T.ajaxTransport("script",function(n){var i,o;
// This transport only deals with cross domain or forced-by-attrs requests
if(n.crossDomain||n.scriptAttrs)return{send:function(t,e){i=T("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(t){i.remove(),o=null,t&&e("error"===t.type?404:200,t.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
E.head.appendChild(i[0])},abort:function(){o&&o()}}});var nn,on=[],rn=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=on.pop()||T.expando+"_"+Pe++;return this[t]=!0,t}}),
// Detect, normalize options and install callbacks for jsonp requests
T.ajaxPrefilter("json jsonp",function(t,e,n){var i,o,r,s=!1!==t.jsonp&&(rn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&rn.test(t.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return i=t.jsonpCallback=b(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,
// Insert callback into url or form data
s?t[s]=t[s].replace(rn,"$1"+i):!1!==t.jsonp&&(t.url+=(je.test(t.url)?"&":"?")+t.jsonp+"="+i),
// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return r||T.error(i+" was not called"),r[0]},
// Force json dataType
t.dataTypes[0]="json",
// Install callback
o=C[i],C[i]=function(){r=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===o?T(C).removeProp(i):C[i]=o,
// Save back as free
t[i]&&(
// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=e.jsonpCallback,
// Save the callback name for future use
on.push(i)),
// Call if it was a function and we have a response
r&&b(o)&&o(r[0]),r=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
y.createHTMLDocument=((nn=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===nn.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
T.parseHTML=function(t,e,n){return"string"!=typeof t?[]:(
// Single tag
"boolean"==typeof e&&(n=e,e=!1),e||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
y.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(e=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,e.head.appendChild(i)):e=E),r=!n&&[],(o=k.exec(t))?[e.createElement(o[1])]:(o=_t([t],e,r),r&&r.length&&T(r).remove(),T.merge([],o.childNodes)));var i,o,r},
/**
 * Load a url into a page
 */
T.fn.load=function(t,e,n){var i,o,r,s=this,a=t.indexOf(" ");return-1<a&&(i=Ae(t.slice(a)),t=t.slice(0,a)),
// If it's a function
b(e)?(
// We assume that it's the callback
n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),
// If we have elements to modify, make the request
0<s.length&&T.ajax({url:t,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:e}).done(function(t){
// Save response for use in complete callback
r=arguments,s.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
T("<div>").append(T.parseHTML(t)).find(i):
// Otherwise use the full result
t)}).always(n&&function(t,e){s.each(function(){n.apply(this,r||[t.responseText,e,t])})}),this},
// Attach a bunch of functions for handling common AJAX events
T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){T.fn[e]=function(t){return this.on(e,t)}}),T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,c=T.css(t,"position"),u=T(t),d={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(t.style.position="relative"),a=u.offset(),r=T.css(t,"top"),l=T.css(t,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
o=("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto")?(s=(i=u.position()).top,i.left):(s=parseFloat(r)||0,parseFloat(l)||0),b(e)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
e=e.call(t,n,T.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):u.css(d)}},T.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,n,i=this[0],o={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===T.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
e=i.getBoundingClientRect();else{for(e=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===T.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(o=T(t).offset()).top+=T.css(t,"borderTopWidth",!0),o.left+=T.css(t,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:e.top-o.top-T.css(i,"marginTop",!0),left:e.left-o.left-T.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===T.css(t,"position");)t=t.offsetParent;return t||ot})}}),
// Create scrollLeft and scrollTop methods
T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,o){var r="pageYOffset"===o;T.fn[e]=function(t){return z(this,function(t,e,n){
// Coalesce documents and windows
var i;if(g(t)?i=t:9===t.nodeType&&(i=t.defaultView),void 0===n)return i?i[o]:t[e];i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):t[e]=n},e,t,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
T.each(["top","left"],function(t,n){T.cssHooks[n]=Jt(y.pixelPosition,function(t,e){if(e)
// If curCSS returns percentage, fallback to offset
return e=Zt(t,n),Vt.test(e)?T(t).position()[n]+"px":e})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
T.each({Height:"height",Width:"width"},function(s,a){T.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){
// Margin is only for outerHeight, outerWidth
T.fn[r]=function(t,e){var n=arguments.length&&(i||"boolean"!=typeof t),o=i||(!0===t||!0===e?"margin":"border");return z(this,function(t,e,n){var i;return g(t)?0===r.indexOf("outer")?t["inner"+s]:t.document.documentElement["client"+s]:
// Get document width or height
9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+s],i["scroll"+s],t.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
T.css(t,e,o):
// Set width or height on the element
T.style(t,e,n,o)},a,n?t:void 0,n)}})}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){
// Handle event binding
T.fn[n]=function(t,e){return 0<arguments.length?this.on(n,null,t,e):this.trigger(n)}}),T.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),T.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
T.proxy=function(t,e){var n,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(n=t[e],e=t,t=n),b(t))
// Simulated bind
return i=a.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return t.apply(e||this,i.concat(a.call(arguments)))}).guid=t.guid=t.guid||T.guid++,o},T.holdReady=function(t){t?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=D,T.isFunction=b,T.isWindow=g,T.camelCase=V,T.type=_,T.now=Date.now,T.isNumeric=function(t){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=T.type(t);return("number"===e||"string"===e)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var
// Map over jQuery in case of overwrite
sn=C.jQuery,
// Map over the $ in case of overwrite
an=C.$;return T.noConflict=function(t){return C.$===T&&(C.$=an),t&&C.jQuery===T&&(C.jQuery=sn),T},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
t||(C.jQuery=C.$=T),T}),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){var e=t.getBoundingClientRect(),n={};for(var i in e)n[i]=e[i];if(t.ownerDocument!==document){var o=t.ownerDocument.defaultView.frameElement;if(o){var r=s(o);n.top+=r.top,n.bottom+=r.top,n.left+=r.left,n.right+=r.left}}return n}function a(t){var e=(getComputedStyle(t)||{}).position,n=[];if("fixed"===e)return[t];for(var i=t;(i=i.parentNode)&&i&&1===i.nodeType;){var o=void 0;try{o=getComputedStyle(i)}catch(t){}if(null==o)return n.push(i),n;var r=o,s=r.overflow,a=r.overflowX,l=r.overflowY;/(auto|scroll)/.test(s+l+a)&&("absolute"!==e||0<=["relative","absolute","fixed"].indexOf(o.position))&&n.push(i)}return n.push(t.ownerDocument.body),t.ownerDocument!==document&&n.push(t.ownerDocument.defaultView),n}function o(){g&&document.body.removeChild(g),g=null}function E(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var n=e.documentElement,i=s(t),o=b();return i.top-=o.top,i.left-=o.left,void 0===i.width&&(i.width=document.body.scrollWidth-i.left-i.right),void 0===i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-n.clientTop,i.left=i.left-n.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function _(t){return t.offsetParent||document.documentElement}function x(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");T(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var n=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;n===i&&(i=e.clientWidth),document.body.removeChild(e);var o=n-i;return{width:o,height:o}}function T(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=[];return Array.prototype.push.apply(t,arguments),t.slice(1).forEach(function(t){if(t)for(var e in t)!{}.hasOwnProperty.call(t,e)||(n[e]=t[e])}),n}function r(e,t){if(void 0!==e.classList)t.split(" ").forEach(function(t){t.trim()&&e.classList.remove(t)});else{var n=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),i=u(e).replace(n," ");d(e,i)}}function l(e,t){if(void 0!==e.classList)t.split(" ").forEach(function(t){t.trim()&&e.classList.add(t)});else{r(e,t);var n=u(e)+" "+t;d(e,n)}}function c(t,e){if(void 0!==t.classList)return t.classList.contains(e);var n=u(t);return new RegExp("(^| )"+e+"( |$)","gi").test(n)}function u(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function d(t,e){t.setAttribute("class",e)}function S(e,n,t){t.forEach(function(t){-1===n.indexOf(t)&&c(e,t)&&r(e,t)}),n.forEach(function(t){c(e,t)||l(e,t)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e,n){var i=arguments.length<=2||void 0===n?1:n;return e<=t+i&&t-i<=e}function f(){return"undefined"!=typeof performance&&void 0!==performance.now?performance.now():+new Date}function C(){for(var i={top:0,left:0},t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.forEach(function(t){var e=t.top,n=t.left;"string"==typeof e&&(e=parseFloat(e,10)),"string"==typeof n&&(n=parseFloat(n,10)),i.top+=e,i.left+=n}),i}function A(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}var D=void 0;function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}void 0===D&&(D={modules:[]});var p,g=null,v=(p=0,function(){return++p}),y={},b=function(){var t=g;t||((t=document.createElement("div")).setAttribute("data-tether-id",v()),T(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),g=t);var e=t.getAttribute("data-tether-id");return void 0===y[e]&&(y[e]=s(t),k(function(){delete y[e]})),y[e]},w=[],k=function(t){w.push(t)},I=function(){for(var t=void 0;t=w.pop();)t()},O=((P=function(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t})(N,[{key:"on",value:function(t,e,n){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:i})}},{key:"once",value:function(t,e,n){this.on(t,e,n,!0)}},{key:"off",value:function(t,e){if(void 0!==this.bindings&&void 0!==this.bindings[t])if(void 0===e)delete this.bindings[t];else for(var n=0;n<this.bindings[t].length;)this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):++n}},{key:"trigger",value:function(t){if(void 0!==this.bindings&&this.bindings[t]){for(var e=0,n=arguments.length,i=Array(1<n?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,l=r.once,c=a;void 0===c&&(c=this),s.apply(c,i),l?this.bindings[t].splice(e,1):++e}}}}]),N);function N(){i(this,N)}D.Utils={getActualBoundingClientRect:s,getScrollParents:a,getBounds:E,getOffsetParent:_,extend:T,addClass:l,removeClass:r,hasClass:c,updateClasses:S,defer:k,flush:I,uniqueId:v,Evented:O,getScrollBarSize:x,removeUtilElements:o};var L=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},P=function(t,e,n){return e&&j(t.prototype,e),n&&j(t,n),t};function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}if(void 0===D)throw new Error("You must include the utils.js file before tether.js");function H(){W.forEach(function(t){t.position(!1)}),I()}var M,$,q,a=(J=D.Utils).getScrollParents,_=(E=J.getBounds,J.getOffsetParent),l=(T=J.extend,J.addClass),r=J.removeClass,x=(S=J.updateClasses,k=J.defer,I=J.flush,J.getScrollBarSize),o=J.removeUtilElements,R=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],n=0;n<e.length;++n){var i=e[n];if(void 0!==t.style[i])return i}}(),W=[];function B(){return void 0!==$&&16<$?($=Math.min($-16,250),void(q=setTimeout(B,250))):void(void 0!==M&&f()-M<10||(null!=q&&(clearTimeout(q),q=null),M=f(),H(),$=f()-M))}q=$=M=null,"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,B)});function z(t){var e=t.left,n=t.top;return void 0!==V[t.left]&&(e=V[t.left]),void 0!==V[t.top]&&(n=V[t.top]),{left:e,top:n}}function F(t){var e=t.split(" "),n=L(e,2);return{top:n[0],left:n[1]}}var U={center:"center",left:"right",right:"left"},Q={middle:"middle",top:"bottom",bottom:"top"},V={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},X=F,K=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Y,O),P(Y,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return void 0!==e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]||arguments[1];this.options=T({offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},t);var i=this.options,o=i.element,r=i.target,s=i.targetModifier;if(this.element=o,this.target=r,this.targetModifier=s,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if(void 0===e[t])throw new Error("Tether Error: Both element and target must be defined");void 0!==e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),l(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=X(this.options.targetAttachment),this.attachment=X(this.options.attachment),this.offset=F(this.options.offset),this.targetOffset=F(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=a(this.target),!1!==this.options.enabled&&this.enable(n)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return E(this.target);if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((r={height:(t=E(this.target)).height,width:t.width,top:t.top,left:t.left}).height=Math.min(r.height,t.height-(pageYOffset-t.top)),r.height=Math.min(r.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),r.height=Math.min(innerHeight,r.height),r.height-=2,r.width=Math.min(r.width,t.width-(pageXOffset-t.left)),r.width=Math.min(r.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),r.width=Math.min(innerWidth,r.width),r.width-=2,r.top<pageYOffset&&(r.top=pageYOffset),r.left<pageXOffset&&(r.left=pageXOffset),r);if("scroll-handle"===this.targetModifier){var t=void 0,e=this.target;t=e===document.body?(e=document.documentElement,{left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):E(e);var n=getComputedStyle(e),i=0;(e.scrollWidth>e.clientWidth||0<=[n.overflow,n.overflowX].indexOf("scroll")||this.target!==document.body)&&(i=15);var o=t.height-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)-i,r={width:15,height:.975*o*(o/e.scrollHeight),left:t.left+t.width-parseFloat(n.borderLeftWidth)-15},s=0;o<408&&this.target===document.body&&(s=-11e-5*Math.pow(o,2)-.00727*o+22.58),this.target!==document.body&&(r.height=Math.max(r.height,24));var a=this.target.scrollTop/(e.scrollHeight-o);return r.top=a*(o-r.height-s)+t.top+parseFloat(n.borderTopWidth),this.target===document.body&&(r.height=Math.max(r.height,24)),r}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return void 0===this._cache&&(this._cache={}),void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0];!1!==this.options.addTargetClasses&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(t){t!==e.target.ownerDocument&&t.addEventListener("scroll",e.position)}),t&&this.position()}},{key:"disable",value:function(){var e=this;r(this.target,this.getClass("enabled")),r(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.position)})}},{key:"destroy",value:function(){var n=this;this.disable(),W.forEach(function(t,e){t===n&&W.splice(e,1)}),0===W.length&&o()}},{key:"updateAttachClasses",value:function(t,e){var n=this;t=t||this.attachment,e=e||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[]);var i=this._addAttachClasses;t.top&&i.push(this.getClass("element-attached")+"-"+t.top),t.left&&i.push(this.getClass("element-attached")+"-"+t.left),e.top&&i.push(this.getClass("target-attached")+"-"+e.top),e.left&&i.push(this.getClass("target-attached")+"-"+e.left);var o=[];["left","top","bottom","right","middle","center"].forEach(function(t){o.push(n.getClass("element-attached")+"-"+t),o.push(n.getClass("target-attached")+"-"+t)}),k(function(){void 0!==n._addAttachClasses&&(S(n.element,n._addAttachClasses,o),!1!==n.options.addTargetClasses&&S(n.target,n._addAttachClasses,o),delete n._addAttachClasses)})}},{key:"position",value:function(){var a=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var e=function(t,e){var n=t.left,i=t.top;return"auto"===n&&(n=U[e.left]),"auto"===i&&(i=Q[e.top]),{left:n,top:i}}(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,e);var n=this.cache("element-bounds",function(){return E(a.element)}),i=n.width,o=n.height;if(0===i&&0===o&&void 0!==this.lastSize){var r=this.lastSize;i=r.width,o=r.height}else this.lastSize={width:i,height:o};var s=this.cache("target-bounds",function(){return a.getTargetBounds()}),l=s,c=A(z(this.attachment),{width:i,height:o}),u=A(z(e),l),d=A(this.offset,{width:i,height:o}),f=A(this.targetOffset,l);c=C(c,d),u=C(u,f);for(var h=s.left+u.left-c.left,p=s.top+u.top-c.top,g=0;g<D.modules.length;++g){var m=D.modules[g].position.call(this,{left:h,top:p,targetAttachment:e,targetPos:s,elementPos:n,offset:c,targetOffset:u,manualOffset:d,manualTargetOffset:f,scrollbarSize:w,attachment:this.attachment});if(!1===m)return!1;void 0!==m&&"object"==typeof m&&(p=m.top,h=m.left)}var v={page:{top:p,left:h},viewport:{top:p-pageYOffset,bottom:pageYOffset-p-o+innerHeight,left:h-pageXOffset,right:pageXOffset-h-i+innerWidth}},y=this.target.ownerDocument,b=y.defaultView,w=void 0;return y.body.scrollWidth>b.innerWidth&&(w=this.cache("scrollbar-size",x),v.viewport.bottom-=w.height),y.body.scrollHeight>b.innerHeight&&(w=this.cache("scrollbar-size",x),v.viewport.right-=w.width),-1!==["","static"].indexOf(y.body.style.position)&&-1!==["","static"].indexOf(y.body.parentElement.style.position)||(v.page.bottom=y.body.scrollHeight-p-o,v.page.right=y.body.scrollWidth-h-i),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var t=a.cache("target-offsetparent",function(){return _(a.target)}),e=a.cache("target-offsetparent-bounds",function(){return E(t)}),n=getComputedStyle(t),i=e,o={};if(["Top","Left","Bottom","Right"].forEach(function(t){o[t.toLowerCase()]=parseFloat(n["border"+t+"Width"])}),e.right=y.body.scrollWidth-e.left-i.width+o.right,e.bottom=y.body.scrollHeight-e.top-i.height+o.bottom,v.page.top>=e.top+o.top&&v.page.bottom>=e.bottom&&v.page.left>=e.left+o.left&&v.page.right>=e.right){var r=t.scrollTop,s=t.scrollLeft;v.offset={top:v.page.top-e.top+r-o.top,left:v.page.left-e.left+s-o.left}}}(),this.move(v),this.history.unshift(v),3<this.history.length&&this.history.pop(),t&&I(),!0}}},{key:"move",value:function(e){var o=this;if(void 0!==this.element.parentNode){var n={};for(var t in e)for(var i in n[t]={},e[t]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if(void 0!==a[t]&&!m(a[t][i],e[t][i])){r=!0;break}}r||(n[t][i]=!0)}var l={top:"",left:"",right:"",bottom:""},c=function(t,e){if(!1!==(void 0!==o.options.optimizations?o.options.optimizations.gpu:null)){var n=void 0,i=void 0;n=t.top?(l.top=0,e.top):(l.bottom=0,-e.bottom),i=t.left?(l.left=0,e.left):(l.right=0,-e.right),l[R]="translateX("+Math.round(i)+"px) translateY("+Math.round(n)+"px)","msTransform"!==R&&(l[R]+=" translateZ(0)")}else t.top?l.top=e.top+"px":l.bottom=e.bottom+"px",t.left?l.left=e.left+"px":l.right=e.right+"px"},u=!1;if((n.page.top||n.page.bottom)&&(n.page.left||n.page.right)?(l.position="absolute",c(n.page,e.page)):(n.viewport.top||n.viewport.bottom)&&(n.viewport.left||n.viewport.right)?(l.position="fixed",c(n.viewport,e.viewport)):void 0!==n.offset&&n.offset.top&&n.offset.left?function(){l.position="absolute";var t=o.cache("target-offsetparent",function(){return _(o.target)});_(o.element)!==t&&k(function(){o.element.parentNode.removeChild(o.element),t.appendChild(o.element)}),c(n.offset,e.offset),u=!0}():(l.position="absolute",c({top:!0,left:!0},e.page)),!u){for(var d=!0,f=this.element.parentNode;f&&1===f.nodeType&&"BODY"!==f.tagName;){if("static"!==getComputedStyle(f).position){d=!1;break}f=f.parentNode}d||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var h={},p=!1;for(var i in l){var g=l[i];this.element.style[i]!==g&&(p=!0,h[i]=g)}p&&k(function(){T(o.element.style,h)})}}}]),Y);function Y(t){var e=this;i(this,Y),function(t,e,n){for(var i=!0;i;){var o=t,r=e,s=n;i=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,r);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(s)}var c=Object.getPrototypeOf(o);if(null===c)return;t=c,e=r,n=s,i=!0,a=c=void 0}}(Object.getPrototypeOf(Y.prototype),"constructor",this).call(this),this.position=this.position.bind(this),W.push(this),this.history=[],this.setOptions(t,!1),D.modules.forEach(function(t){void 0!==t.initialize&&t.initialize.call(e)}),this.position()}K.modules=[],D.position=H;var G=T(K,D),T=(L=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},E=(J=D.Utils).getBounds,J.extend),Z=(S=J.updateClasses,k=J.defer,["left","top","right","bottom"]);D.modules.push({position:function(t){var h=this,p=t.top,g=t.left,m=t.targetAttachment;if(!this.options.constraints)return!0;var e=this.cache("element-bounds",function(){return E(h.element)}),v=e.height,y=e.width;if(0===y&&0===v&&void 0!==this.lastSize){var n=this.lastSize;y=n.width,v=n.height}var i=this.cache("target-bounds",function(){return h.getTargetBounds()}),b=i.height,w=i.width,o=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,n=t.pinnedClass;e&&o.push(e),n&&o.push(n)}),o.forEach(function(e){["left","top","right","bottom"].forEach(function(t){o.push(e+"-"+t)})});var _=[],x=T({},m),C=T({},this.attachment);return this.options.constraints.forEach(function(t){var e=t.to,n=t.attachment,i=t.pin;void 0===n&&(n="");var o=void 0,r=void 0;if(0<=n.indexOf(" ")){var s=n.split(" "),a=L(s,2);r=a[0],o=a[1]}else o=r=n;var l=function(t,r){return"scrollParent"===r?r=t.scrollParents[0]:"window"===r&&(r=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),r===document&&(r=r.documentElement),void 0!==r.nodeType&&function(){var t=r,e=E(r),n=e,i=getComputedStyle(r);if(r=[n.left,n.top,e.width+n.left,e.height+n.top],t.ownerDocument!==document){var o=t.ownerDocument.defaultView;r[0]+=o.pageXOffset,r[1]+=o.pageYOffset,r[2]+=o.pageXOffset,r[3]+=o.pageYOffset}Z.forEach(function(t,e){"Top"===(t=t[0].toUpperCase()+t.substr(1))||"Left"===t?r[e]+=parseFloat(i["border"+t+"Width"]):r[e]-=parseFloat(i["border"+t+"Width"])})}(),r}(h,e);"target"!==r&&"both"!==r||(p<l[1]&&"top"===x.top&&(p+=b,x.top="bottom"),p+v>l[3]&&"bottom"===x.top&&(p-=b,x.top="top")),"together"===r&&("top"===x.top&&("bottom"===C.top&&p<l[1]?(p+=b,x.top="bottom",p+=v,C.top="top"):"top"===C.top&&p+v>l[3]&&p-(v-b)>=l[1]&&(p-=v-b,x.top="bottom",C.top="bottom")),"bottom"===x.top&&("top"===C.top&&p+v>l[3]?(p-=b,x.top="top",p-=v,C.top="bottom"):"bottom"===C.top&&p<l[1]&&p+(2*v-b)<=l[3]&&(p+=v-b,x.top="top",C.top="top")),"middle"===x.top&&(p+v>l[3]&&"top"===C.top?(p-=v,C.top="bottom"):p<l[1]&&"bottom"===C.top&&(p+=v,C.top="top"))),"target"!==o&&"both"!==o||(g<l[0]&&"left"===x.left&&(g+=w,x.left="right"),g+y>l[2]&&"right"===x.left&&(g-=w,x.left="left")),"together"===o&&(g<l[0]&&"left"===x.left?"right"===C.left?(g+=w,x.left="right",g+=y,C.left="left"):"left"===C.left&&(g+=w,x.left="right",g-=y,C.left="right"):g+y>l[2]&&"right"===x.left?"left"===C.left?(g-=w,x.left="left",g-=y,C.left="right"):"right"===C.left&&(g-=w,x.left="left",g+=y,C.left="left"):"center"===x.left&&(g+y>l[2]&&"left"===C.left?(g-=y,C.left="right"):g<l[0]&&"right"===C.left&&(g+=y,C.left="left"))),"element"!==r&&"both"!==r||(p<l[1]&&"bottom"===C.top&&(p+=v,C.top="top"),p+v>l[3]&&"top"===C.top&&(p-=v,C.top="bottom")),"element"!==o&&"both"!==o||(g<l[0]&&("right"===C.left?(g+=y,C.left="left"):"center"===C.left&&(g+=y/2,C.left="left")),g+y>l[2]&&("left"===C.left?(g-=y,C.left="right"):"center"===C.left&&(g-=y/2,C.left="right"))),"string"==typeof i?i=i.split(",").map(function(t){return t.trim()}):!0===i&&(i=["top","left","right","bottom"]),i=i||[];var c,u,d=[],f=[];p<l[1]&&(0<=i.indexOf("top")?(p=l[1],d.push("top")):f.push("top")),p+v>l[3]&&(0<=i.indexOf("bottom")?(p=l[3]-v,d.push("bottom")):f.push("bottom")),g<l[0]&&(0<=i.indexOf("left")?(g=l[0],d.push("left")):f.push("left")),g+y>l[2]&&(0<=i.indexOf("right")?(g=l[2]-y,d.push("right")):f.push("right")),d.length&&(u=void 0!==h.options.pinnedClass?h.options.pinnedClass:h.getClass("pinned"),_.push(u),d.forEach(function(t){_.push(u+"-"+t)})),f.length&&(c=void 0!==h.options.outOfBoundsClass?h.options.outOfBoundsClass:h.getClass("out-of-bounds"),_.push(c),f.forEach(function(t){_.push(c+"-"+t)})),(0<=d.indexOf("left")||0<=d.indexOf("right"))&&(C.left=x.left=!1),(0<=d.indexOf("top")||0<=d.indexOf("bottom"))&&(C.top=x.top=!1),x.top===m.top&&x.left===m.left&&C.top===h.attachment.top&&C.left===h.attachment.left||(h.updateAttachClasses(C,x),h.trigger("update",{attachment:C,targetAttachment:x}))}),k(function(){!1!==h.options.addTargetClasses&&S(h.target,_,o),S(h.element,_,o)}),{top:p,left:g}}});var J,E=(J=D.Utils).getBounds,S=J.updateClasses;k=J.defer;D.modules.push({position:function(t){var e=this,n=t.top,i=t.left,o=this.cache("element-bounds",function(){return E(e.element)}),r=o.height,s=o.width,a=this.getTargetBounds(),l=n+r,c=i+s,u=[];n<=a.bottom&&l>=a.top&&["left","right"].forEach(function(t){var e=a[t];e!==i&&e!==c||u.push(t)}),i<=a.right&&c>=a.left&&["top","bottom"].forEach(function(t){var e=a[t];e!==n&&e!==l||u.push(t)});var d=[],f=[];return d.push(this.getClass("abutted")),["left","top","right","bottom"].forEach(function(t){d.push(e.getClass("abutted")+"-"+t)}),u.length&&f.push(this.getClass("abutted")),u.forEach(function(t){f.push(e.getClass("abutted")+"-"+t)}),k(function(){!1!==e.options.addTargetClasses&&S(e.target,f,d),S(e.element,f,d)}),!0}});L=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};return D.modules.push({position:function(t){var e=t.top,n=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:n}));var o=void 0,r=void 0;if("string"==typeof i){(i=i.split(" "))[1]=i[1]||i[0];var s=L(i,2);o=s[0],r=s[1],o=parseFloat(o,10),r=parseFloat(r,10)}else o=i.top,r=i.left;return{top:e+=o,left:n+=r}}}}),G}),function(U){var Q={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};U.fn.bxSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){U(this).bxSlider(e)}),this;var u={},d=this,o=U(window).width(),r=U(window).height();if(!U(d).data("bxSlider")){function n(){U(d).data("bxSlider")||(u.settings=U.extend({},Q,e),u.settings.slideWidth=parseInt(u.settings.slideWidth),u.children=d.children(u.settings.slideSelector),u.children.length<u.settings.minSlides&&(u.settings.minSlides=u.children.length),u.children.length<u.settings.maxSlides&&(u.settings.maxSlides=u.children.length),u.settings.randomStart&&(u.settings.startSlide=Math.floor(Math.random()*u.children.length)),u.active={index:u.settings.startSlide},u.carousel=1<u.settings.minSlides||1<u.settings.maxSlides,u.carousel&&(u.settings.preloadImages="all"),u.minThreshold=u.settings.minSlides*u.settings.slideWidth+(u.settings.minSlides-1)*u.settings.slideMargin,u.maxThreshold=u.settings.maxSlides*u.settings.slideWidth+(u.settings.maxSlides-1)*u.settings.slideMargin,u.working=!1,u.controls={},u.interval=null,u.animProp="vertical"===u.settings.mode?"top":"left",u.usingCSS=u.settings.useCSS&&"fade"!==u.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],n=0;n<e.length;n++)if(void 0!==t.style[e[n]])return u.cssPrefix=e[n].replace("Perspective","").toLowerCase(),u.animProp="-"+u.cssPrefix+"-transform",!0;return!1}(),"vertical"===u.settings.mode&&(u.settings.maxSlides=u.settings.minSlides),d.data("origStyle",d.attr("style")),d.children(u.settings.slideSelector).each(function(){U(this).data("origStyle",U(this).attr("style"))}),c())}function s(){var t=1,e=null;return"horizontal"===u.settings.mode&&0<u.settings.slideWidth?t=u.viewport.width()<u.minThreshold?u.settings.minSlides:u.viewport.width()>u.maxThreshold?u.settings.maxSlides:(e=u.children.first().width()+u.settings.slideMargin,Math.floor((u.viewport.width()+u.settings.slideMargin)/e)||1):"vertical"===u.settings.mode&&(t=u.settings.minSlides),t}function t(){for(var t="",e="",n=y(),i=0;i<n;i++)e="",u.settings.buildPager&&U.isFunction(u.settings.buildPager)||u.settings.pagerCustom?(e=u.settings.buildPager(i),u.pagerEl.addClass("bx-custom-pager")):(e=i+1,u.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+e+"</a></div>";u.pagerEl.html(t)}function a(){d.startAuto()}function l(){d.stopAuto()}function f(t){var e=s();u.settings.ariaHidden&&!u.settings.ticker&&(u.children.attr("aria-hidden","true"),u.children.slice(t,t+e).attr("aria-hidden","false"))}var c=function(){var t=u.children.eq(u.settings.startSlide);d.wrap('<div class="'+u.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),u.viewport=d.parent(),u.settings.ariaLive&&!u.settings.ticker&&u.viewport.attr("aria-live","polite"),u.loader=U('<div class="bx-loading" />'),u.viewport.prepend(u.loader),d.css({width:"horizontal"===u.settings.mode?1e3*u.children.length+215+"%":"auto",position:"relative"}),u.usingCSS&&u.settings.easing?d.css("-"+u.cssPrefix+"-transition-timing-function",u.settings.easing):u.settings.easing||(u.settings.easing="swing"),u.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),u.viewport.parent().css({maxWidth:m()}),u.children.css({float:"horizontal"===u.settings.mode?"left":"none",listStyle:"none",position:"relative"}),u.children.css("width",v()),"horizontal"===u.settings.mode&&0<u.settings.slideMargin&&u.children.css("marginRight",u.settings.slideMargin),"vertical"===u.settings.mode&&0<u.settings.slideMargin&&u.children.css("marginBottom",u.settings.slideMargin),"fade"===u.settings.mode&&(u.children.css({position:"absolute",zIndex:0,display:"none"}),u.children.eq(u.settings.startSlide).css({zIndex:u.settings.slideZIndex,display:"block"})),u.controls.el=U('<div class="bx-controls" />'),u.settings.captions&&T(),u.active.last=u.settings.startSlide===y()-1,u.settings.video&&d.fitVids(),"none"===u.settings.preloadImages?t=null:"all"!==u.settings.preloadImages&&!u.settings.ticker||(t=u.children),u.settings.ticker?u.settings.pager=!1:(u.settings.controls&&C(),u.settings.auto&&u.settings.autoControls&&E(),u.settings.pager&&x(),(u.settings.controls||u.settings.autoControls||u.settings.pager)&&u.viewport.after(u.controls.el)),null===t?p():h(t,p)},h=function(t,e){var n=t.find('img:not([src=""]), iframe').length,i=0;0!==n?t.find('img:not([src=""]), iframe').each(function(){U(this).one("load error",function(){++i===n&&e()}).each(function(){!this.complete&&""!=this.src||U(this).trigger("load")})}):e()},p=function(){if(u.settings.infiniteLoop&&"fade"!==u.settings.mode&&!u.settings.ticker){var t="vertical"===u.settings.mode?u.settings.minSlides:u.settings.maxSlides,e=u.children.slice(0,t).clone(!0).addClass("bx-clone"),n=u.children.slice(-t).clone(!0).addClass("bx-clone");u.settings.ariaHidden&&(e.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),d.append(e).prepend(n)}u.loader.remove(),w(),"vertical"===u.settings.mode&&(u.settings.adaptiveHeight=!0),u.viewport.height(g()),d.redrawSlider(),u.settings.onSliderLoad.call(d,u.active.index),u.initialized=!0,u.settings.responsive&&U(window).on("resize",F),u.settings.auto&&u.settings.autoStart&&(1<y()||u.settings.autoSlideForOnePage)&&j(),u.settings.ticker&&H(),u.settings.pager&&O(u.settings.startSlide),u.settings.controls&&P(),u.settings.touchEnabled&&!u.settings.ticker&&q(),u.settings.keyboardEnabled&&!u.settings.ticker&&U(document).keydown($)},g=function(){var e=0,t=U();if("vertical"===u.settings.mode||u.settings.adaptiveHeight)if(u.carousel){var n=1===u.settings.moveSlides?u.active.index:u.active.index*b();for(t=u.children.eq(n),i=1;i<=u.settings.maxSlides-1;i++)t=n+i>=u.children.length?t.add(u.children.eq(i-1)):t.add(u.children.eq(n+i))}else t=u.children.eq(u.active.index);else t=u.children;return"vertical"===u.settings.mode?(t.each(function(t){e+=U(this).outerHeight()}),0<u.settings.slideMargin&&(e+=u.settings.slideMargin*(u.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return U(this).outerHeight(!1)}).get()),"border-box"===u.viewport.css("box-sizing")?e+=parseFloat(u.viewport.css("padding-top"))+parseFloat(u.viewport.css("padding-bottom"))+parseFloat(u.viewport.css("border-top-width"))+parseFloat(u.viewport.css("border-bottom-width")):"padding-box"===u.viewport.css("box-sizing")&&(e+=parseFloat(u.viewport.css("padding-top"))+parseFloat(u.viewport.css("padding-bottom"))),e},m=function(){var t="100%";return 0<u.settings.slideWidth&&(t="horizontal"===u.settings.mode?u.settings.maxSlides*u.settings.slideWidth+(u.settings.maxSlides-1)*u.settings.slideMargin:u.settings.slideWidth),t},v=function(){var t=u.settings.slideWidth,e=u.viewport.width();if(0===u.settings.slideWidth||u.settings.slideWidth>e&&!u.carousel||"vertical"===u.settings.mode)t=e;else if(1<u.settings.maxSlides&&"horizontal"===u.settings.mode){if(e>u.maxThreshold)return t;e<u.minThreshold?t=(e-u.settings.slideMargin*(u.settings.minSlides-1))/u.settings.minSlides:u.settings.shrinkItems&&(t=Math.floor((e+u.settings.slideMargin)/Math.ceil((e+u.settings.slideMargin)/(t+u.settings.slideMargin))-u.settings.slideMargin))}return t},y=function(){var t=0,e=0,n=0;if(0<u.settings.moveSlides){if(!u.settings.infiniteLoop){for(;e<u.children.length;)++t,e=n+s(),n+=u.settings.moveSlides<=s()?u.settings.moveSlides:s();return n}t=Math.ceil(u.children.length/b())}else t=Math.ceil(u.children.length/s());return t},b=function(){return 0<u.settings.moveSlides&&u.settings.moveSlides<=s()?u.settings.moveSlides:s()},w=function(){var t,e,n;u.children.length>u.settings.maxSlides&&u.active.last&&!u.settings.infiniteLoop?"horizontal"===u.settings.mode?(t=(e=u.children.last()).position(),_(-(t.left-(u.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===u.settings.mode&&(n=u.children.length-u.settings.minSlides,t=u.children.eq(n).position(),_(-t.top,"reset",0)):(t=u.children.eq(u.active.index*b()).position(),u.active.index===y()-1&&(u.active.last=!0),void 0!==t&&("horizontal"===u.settings.mode?_(-t.left,"reset",0):"vertical"===u.settings.mode&&_(-t.top,"reset",0)))},_=function(t,e,n,i){var o,r;u.usingCSS?(r="vertical"===u.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",d.css("-"+u.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===e?(d.css(u.animProp,r),0!==n?d.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){U(t.target).is(d)&&(d.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),N())}):N()):"reset"===e?d.css(u.animProp,r):"ticker"===e&&(d.css("-"+u.cssPrefix+"-transition-timing-function","linear"),d.css(u.animProp,r),0!==n?d.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){U(t.target).is(d)&&(d.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),_(i.resetValue,"reset",0),M())}):(_(i.resetValue,"reset",0),M()))):((o={})[u.animProp]=t,"slide"===e?d.animate(o,n,u.settings.easing,function(){N()}):"reset"===e?d.css(u.animProp,t):"ticker"===e&&d.animate(o,n,"linear",function(){_(i.resetValue,"reset",0),M()}))},x=function(){u.settings.pagerCustom?u.pagerEl=U(u.settings.pagerCustom):(u.pagerEl=U('<div class="bx-pager" />'),u.settings.pagerSelector?U(u.settings.pagerSelector).html(u.pagerEl):u.controls.el.addClass("bx-has-pager").append(u.pagerEl),t()),u.pagerEl.on("click touchend","a",I)},C=function(){u.controls.next=U('<a class="bx-next" href="">'+u.settings.nextText+"</a>"),u.controls.prev=U('<a class="bx-prev" href="">'+u.settings.prevText+"</a>"),u.controls.next.on("click touchend",S),u.controls.prev.on("click touchend",A),u.settings.nextSelector&&U(u.settings.nextSelector).append(u.controls.next),u.settings.prevSelector&&U(u.settings.prevSelector).append(u.controls.prev),u.settings.nextSelector||u.settings.prevSelector||(u.controls.directionEl=U('<div class="bx-controls-direction" />'),u.controls.directionEl.append(u.controls.prev).append(u.controls.next),u.controls.el.addClass("bx-has-controls-direction").append(u.controls.directionEl))},E=function(){u.controls.start=U('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+u.settings.startText+"</a></div>"),u.controls.stop=U('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+u.settings.stopText+"</a></div>"),u.controls.autoEl=U('<div class="bx-controls-auto" />'),u.controls.autoEl.on("click",".bx-start",D),u.controls.autoEl.on("click",".bx-stop",k),u.settings.autoControlsCombine?u.controls.autoEl.append(u.controls.start):u.controls.autoEl.append(u.controls.start).append(u.controls.stop),u.settings.autoControlsSelector?U(u.settings.autoControlsSelector).html(u.controls.autoEl):u.controls.el.addClass("bx-has-controls-auto").append(u.controls.autoEl),L(u.settings.autoStart?"stop":"start")},T=function(){u.children.each(function(t){var e=U(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&U(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},S=function(t){t.preventDefault(),u.controls.el.hasClass("disabled")||(u.settings.auto&&u.settings.stopAutoOnClick&&d.stopAuto(),d.goToNextSlide())},A=function(t){t.preventDefault(),u.controls.el.hasClass("disabled")||(u.settings.auto&&u.settings.stopAutoOnClick&&d.stopAuto(),d.goToPrevSlide())},D=function(t){d.startAuto(),t.preventDefault()},k=function(t){d.stopAuto(),t.preventDefault()},I=function(t){var e,n;t.preventDefault(),u.controls.el.hasClass("disabled")||(u.settings.auto&&u.settings.stopAutoOnClick&&d.stopAuto(),void 0!==(e=U(t.currentTarget)).attr("data-slide-index")&&(n=parseInt(e.attr("data-slide-index")))!==u.active.index&&d.goToSlide(n))},O=function(n){var t=u.children.length;if("short"===u.settings.pagerType)return 1<u.settings.maxSlides&&(t=Math.ceil(u.children.length/u.settings.maxSlides)),void u.pagerEl.html(n+1+u.settings.pagerShortSeparator+t);u.pagerEl.find("a").removeClass("active"),u.pagerEl.each(function(t,e){U(e).find("a").eq(n).addClass("active")})},N=function(){if(u.settings.infiniteLoop){var t="";0===u.active.index?t=u.children.eq(0).position():u.active.index===y()-1&&u.carousel?t=u.children.eq((y()-1)*b()).position():u.active.index===u.children.length-1&&(t=u.children.eq(u.children.length-1).position()),t&&("horizontal"===u.settings.mode?_(-t.left,"reset",0):"vertical"===u.settings.mode&&_(-t.top,"reset",0))}u.working=!1,u.settings.onSlideAfter.call(d,u.children.eq(u.active.index),u.oldIndex,u.active.index)},L=function(t){u.settings.autoControlsCombine?u.controls.autoEl.html(u.controls[t]):(u.controls.autoEl.find("a").removeClass("active"),u.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},P=function(){1===y()?(u.controls.prev.addClass("disabled"),u.controls.next.addClass("disabled")):!u.settings.infiniteLoop&&u.settings.hideControlOnEnd&&(0===u.active.index?(u.controls.prev.addClass("disabled"),u.controls.next.removeClass("disabled")):u.active.index===y()-1?(u.controls.next.addClass("disabled"),u.controls.prev.removeClass("disabled")):(u.controls.prev.removeClass("disabled"),u.controls.next.removeClass("disabled")))},j=function(){0<u.settings.autoDelay?setTimeout(d.startAuto,u.settings.autoDelay):(d.startAuto(),U(window).focus(a).blur(l)),u.settings.autoHover&&d.hover(function(){u.interval&&(d.stopAuto(!0),u.autoPaused=!0)},function(){u.autoPaused&&(d.startAuto(!0),u.autoPaused=null)})},H=function(){var t,e,n,i,o,r,s,a,l=0;"next"===u.settings.autoDirection?d.append(u.children.clone().addClass("bx-clone")):(d.prepend(u.children.clone().addClass("bx-clone")),t=u.children.first().position(),l="horizontal"===u.settings.mode?-t.left:-t.top),_(l,"reset",0),u.settings.pager=!1,u.settings.controls=!1,u.settings.autoControls=!1,u.settings.tickerHover&&(u.usingCSS?(i="horizontal"===u.settings.mode?4:5,u.viewport.hover(function(){e=d.css("-"+u.cssPrefix+"-transform"),n=parseFloat(e.split(",")[i]),_(n,"reset",0)},function(){a=0,u.children.each(function(t){a+="horizontal"===u.settings.mode?U(this).outerWidth(!0):U(this).outerHeight(!0)}),o=u.settings.speed/a,r="horizontal"===u.settings.mode?"left":"top",s=o*(a-Math.abs(parseInt(n))),M(s)})):u.viewport.hover(function(){d.stop()},function(){a=0,u.children.each(function(t){a+="horizontal"===u.settings.mode?U(this).outerWidth(!0):U(this).outerHeight(!0)}),o=u.settings.speed/a,r="horizontal"===u.settings.mode?"left":"top",s=o*(a-Math.abs(parseInt(d.css(r)))),M(s)})),M()},M=function(t){var e,n,i=t||u.settings.speed,o={left:0,top:0},r={left:0,top:0};"next"===u.settings.autoDirection?o=d.find(".bx-clone").first().position():r=u.children.first().position(),e="horizontal"===u.settings.mode?-o.left:-o.top,n="horizontal"===u.settings.mode?-r.left:-r.top,_(e,"ticker",i,{resetValue:n})},$=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&function(t){var e=U(window),n={top:e.scrollTop(),left:e.scrollLeft()},i=t.offset();return n.right=n.left+e.width(),n.bottom=n.top+e.height(),i.right=i.left+t.outerWidth(),i.bottom=i.top+t.outerHeight(),!(n.right<i.left||n.left>i.right||n.bottom<i.top||n.top>i.bottom)}(d)){if(39===t.keyCode)return S(t),!1;if(37===t.keyCode)return A(t),!1}},q=function(){u.touch={start:{x:0,y:0},end:{x:0,y:0}},u.viewport.on("touchstart MSPointerDown pointerdown",R),u.viewport.on("click",".bxslider a",function(t){u.viewport.hasClass("click-disabled")&&(t.preventDefault(),u.viewport.removeClass("click-disabled"))})},R=function(t){if("touchstart"===t.type||0===t.button)if(t.preventDefault(),u.controls.el.addClass("disabled"),u.working)u.controls.el.removeClass("disabled");else{u.touch.originalPos=d.position();var e=t.originalEvent,n=void 0!==e.changedTouches?e.changedTouches:[e];if("function"==typeof PointerEvent&&void 0===e.pointerId)return;u.touch.start.x=n[0].pageX,u.touch.start.y=n[0].pageY,u.viewport.get(0).setPointerCapture&&(u.pointerId=e.pointerId,u.viewport.get(0).setPointerCapture(u.pointerId)),u.originalClickTarget=e.originalTarget||e.target,u.originalClickButton=e.button,u.originalClickButtons=e.buttons,u.originalEventType=e.type,u.hasMove=!1,u.viewport.on("touchmove MSPointerMove pointermove",B),u.viewport.on("touchend MSPointerUp pointerup",z),u.viewport.on("MSPointerCancel pointercancel",W)}},W=function(t){t.preventDefault(),_(u.touch.originalPos.left,"reset",0),u.controls.el.removeClass("disabled"),u.viewport.off("MSPointerCancel pointercancel",W),u.viewport.off("touchmove MSPointerMove pointermove",B),u.viewport.off("touchend MSPointerUp pointerup",z),u.viewport.get(0).releasePointerCapture&&u.viewport.get(0).releasePointerCapture(u.pointerId)},B=function(t){var e=t.originalEvent,n=void 0!==e.changedTouches?e.changedTouches:[e],i=Math.abs(n[0].pageX-u.touch.start.x),o=Math.abs(n[0].pageY-u.touch.start.y),r=0,s=0;u.hasMove=!0,o<3*i&&u.settings.preventDefaultSwipeX?t.preventDefault():i<3*o&&u.settings.preventDefaultSwipeY&&t.preventDefault(),"touchmove"!==t.type&&t.preventDefault(),"fade"!==u.settings.mode&&u.settings.oneToOneTouch&&(r="horizontal"===u.settings.mode?(s=n[0].pageX-u.touch.start.x,u.touch.originalPos.left+s):(s=n[0].pageY-u.touch.start.y,u.touch.originalPos.top+s),_(r,"reset",0))},z=function(t){t.preventDefault(),u.viewport.off("touchmove MSPointerMove pointermove",B),u.controls.el.removeClass("disabled");var e=t.originalEvent,n=void 0!==e.changedTouches?e.changedTouches:[e],i=0,o=0;u.touch.end.x=n[0].pageX,u.touch.end.y=n[0].pageY,"fade"===u.settings.mode?(o=Math.abs(u.touch.start.x-u.touch.end.x))>=u.settings.swipeThreshold&&(u.touch.start.x>u.touch.end.x?d.goToNextSlide():d.goToPrevSlide(),d.stopAuto()):(i="horizontal"===u.settings.mode?(o=u.touch.end.x-u.touch.start.x,u.touch.originalPos.left):(o=u.touch.end.y-u.touch.start.y,u.touch.originalPos.top),!u.settings.infiniteLoop&&(0===u.active.index&&0<o||u.active.last&&o<0)?_(i,"reset",200):Math.abs(o)>=u.settings.swipeThreshold?(o<0?d.goToNextSlide():d.goToPrevSlide(),d.stopAuto()):_(i,"reset",200)),u.viewport.off("touchend MSPointerUp pointerup",z),u.viewport.get(0).releasePointerCapture&&u.viewport.get(0).releasePointerCapture(u.pointerId),!1!==u.hasMove||0!==u.originalClickButton&&"touchstart"!==u.originalEventType||U(u.originalClickTarget).trigger({type:"click",button:u.originalClickButton,buttons:u.originalClickButtons})},F=function(t){if(u.initialized)if(u.working)window.setTimeout(F,10);else{var e=U(window).width(),n=U(window).height();o===e&&r===n||(o=e,r=n,d.redrawSlider(),u.settings.onSliderResize.call(d,u.active.index))}};return d.goToSlide=function(t,e){var n,i,o,r,s=!0,a=0,l={left:0,top:0},c=null;if(u.oldIndex=u.active.index,u.active.index=function(t){return t<0?u.settings.infiniteLoop?y()-1:u.active.index:t>=y()?u.settings.infiniteLoop?0:u.active.index:t}(t),!u.working&&u.active.index!==u.oldIndex){if(u.working=!0,void 0!==(s=u.settings.onSlideBefore.call(d,u.children.eq(u.active.index),u.oldIndex,u.active.index))&&!s)return u.active.index=u.oldIndex,void(u.working=!1);"next"===e?u.settings.onSlideNext.call(d,u.children.eq(u.active.index),u.oldIndex,u.active.index)||(s=!1):"prev"===e&&(u.settings.onSlidePrev.call(d,u.children.eq(u.active.index),u.oldIndex,u.active.index)||(s=!1)),u.active.last=u.active.index>=y()-1,(u.settings.pager||u.settings.pagerCustom)&&O(u.active.index),u.settings.controls&&P(),"fade"===u.settings.mode?(u.settings.adaptiveHeight&&u.viewport.height()!==g()&&u.viewport.animate({height:g()},u.settings.adaptiveHeightSpeed),u.children.filter(":visible").fadeOut(u.settings.speed).css({zIndex:0}),u.children.eq(u.active.index).css("zIndex",u.settings.slideZIndex+1).fadeIn(u.settings.speed,function(){U(this).css("zIndex",u.settings.slideZIndex),N()})):(u.settings.adaptiveHeight&&u.viewport.height()!==g()&&u.viewport.animate({height:g()},u.settings.adaptiveHeightSpeed),!u.settings.infiniteLoop&&u.carousel&&u.active.last?"horizontal"===u.settings.mode?(l=(c=u.children.eq(u.children.length-1)).position(),a=u.viewport.width()-c.outerWidth()):(n=u.children.length-u.settings.minSlides,l=u.children.eq(n).position()):u.carousel&&u.active.last&&"prev"===e?(i=1===u.settings.moveSlides?u.settings.maxSlides-b():(y()-1)*b()-(u.children.length-u.settings.maxSlides),l=(c=d.children(".bx-clone").eq(i)).position()):"next"===e&&0===u.active.index?(l=d.find("> .bx-clone").eq(u.settings.maxSlides).position(),u.active.last=!1):0<=t&&(r=t*parseInt(b()),l=u.children.eq(r).position()),void 0!==l&&(o="horizontal"===u.settings.mode?-(l.left-a):-l.top,_(o,"slide",u.settings.speed)),u.working=!1),u.settings.ariaHidden&&f(u.active.index*b())}},d.goToNextSlide=function(){if((u.settings.infiniteLoop||!u.active.last)&&!0!==u.working){var t=parseInt(u.active.index)+1;d.goToSlide(t,"next")}},d.goToPrevSlide=function(){if((u.settings.infiniteLoop||0!==u.active.index)&&!0!==u.working){var t=parseInt(u.active.index)-1;d.goToSlide(t,"prev")}},d.startAuto=function(t){u.interval||(u.interval=setInterval(function(){"next"===u.settings.autoDirection?d.goToNextSlide():d.goToPrevSlide()},u.settings.pause),u.settings.onAutoChange.call(d,!0),u.settings.autoControls&&!0!==t&&L("stop"))},d.stopAuto=function(t){u.autoPaused&&(u.autoPaused=!1),u.interval&&(clearInterval(u.interval),u.interval=null,u.settings.onAutoChange.call(d,!1),u.settings.autoControls&&!0!==t&&L("start"))},d.getCurrentSlide=function(){return u.active.index},d.getCurrentSlideElement=function(){return u.children.eq(u.active.index)},d.getSlideElement=function(t){return u.children.eq(t)},d.getSlideCount=function(){return u.children.length},d.isWorking=function(){return u.working},d.redrawSlider=function(){u.children.add(d.find(".bx-clone")).outerWidth(v()),u.viewport.css("height",g()),u.settings.ticker||w(),u.active.last&&(u.active.index=y()-1),u.active.index>=y()&&(u.active.last=!0),u.settings.pager&&!u.settings.pagerCustom&&(t(),O(u.active.index)),u.settings.ariaHidden&&f(u.active.index*b())},d.destroySlider=function(){u.initialized&&(u.initialized=!1,U(".bx-clone",this).remove(),u.children.each(function(){void 0!==U(this).data("origStyle")?U(this).attr("style",U(this).data("origStyle")):U(this).removeAttr("style")}),void 0!==U(this).data("origStyle")?this.attr("style",U(this).data("origStyle")):U(this).removeAttr("style"),U(this).unwrap().unwrap(),u.controls.el&&u.controls.el.remove(),u.controls.next&&u.controls.next.remove(),u.controls.prev&&u.controls.prev.remove(),u.pagerEl&&u.settings.controls&&!u.settings.pagerCustom&&u.pagerEl.remove(),U(".bx-caption",this).remove(),u.controls.autoEl&&u.controls.autoEl.remove(),clearInterval(u.interval),u.settings.responsive&&U(window).off("resize",F),u.settings.keyboardEnabled&&U(document).off("keydown",$),U(this).removeData("bxSlider"),U(window).off("blur",l).off("focus",a))},d.reloadSlider=function(t){void 0!==t&&(e=t),d.destroySlider(),n(),U(d).data("bxSlider",this)},n(),U(d).data("bxSlider",this),this}}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(r){function i(t){this.init.apply(this,arguments)}var n=0,t=r("html"),e=r(document),o=r(window);return i.defaults={elementClass:"",elementLoadingClass:"slbLoading",htmlClass:"slbActive",closeBtnClass:"",nextBtnClass:"",prevBtnClass:"",loadingTextClass:"",closeBtnCaption:"Close",nextBtnCaption:"Next",prevBtnCaption:"Previous",loadingCaption:"Loading...",bindToItems:!0,closeOnOverlayClick:!0,closeOnEscapeKey:!0,nextOnImageClick:!0,showCaptions:!0,captionAttribute:"title",urlAttribute:"href",startAt:0,loadingTimeout:100,appendTarget:"body",beforeSetContent:null,beforeClose:null,beforeDestroy:null,videoRegex:new RegExp(/youtube.com|vimeo.com/)},r.extend(i.prototype,{init:function(t){this.options=r.extend({},i.defaults,t),this.ens=".slb"+ ++n,this.items=[],this.captions=[];var e=this;this.options.$items?(this.$items=this.options.$items,this.$items.each(function(){var t=r(this);e.items.push(t.attr(e.options.urlAttribute)),e.captions.push(t.attr(e.options.captionAttribute))}),this.options.bindToItems&&this.$items.on("click"+this.ens,function(t){t.preventDefault(),e.showPosition(e.$items.index(r(t.currentTarget)))})):this.options.items&&(this.items=this.options.items),this.options.captions&&(this.captions=this.options.captions)},next:function(){return this.showPosition(this.currentPosition+1)},prev:function(){return this.showPosition(this.currentPosition-1)},normalizePosition:function(t){return t>=this.items.length?t=0:t<0&&(t=this.items.length-1),t},showPosition:function(t){return this.currentPosition=this.normalizePosition(t),this.setupLightboxHtml().prepareItem(this.currentPosition,this.setContent).show()},loading:function(t){var e=this;t?this.loadingTimeout=setTimeout(function(){e.$el.addClass(e.options.elementLoadingClass),e.$content.html('<p class="slbLoadingText '+e.options.loadingTextClass+'">'+e.options.loadingCaption+"</p>"),e.show()},this.options.loadingTimeout):(this.$el&&this.$el.removeClass(this.options.elementLoadingClass),clearTimeout(this.loadingTimeout))},prepareItem:function(t,e){var n=this,i=this.items[t];if(this.loading(!0),this.options.videoRegex.test(i))e.call(n,r('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="'+i+'"></iframe></div>'));else{var o=r('<div class="slbImageWrap"><img class="slbImage" src="'+i+'" /></div>');this.$currentImage=o.find(".slbImage"),this.options.showCaptions&&this.captions[t]&&o.append('<div class="slbCaption">'+this.captions[t]+"</div>"),this.loadImage(i,function(){n.setImageDimensions(),e.call(n,o),n.loadImage(n.items[n.normalizePosition(n.currentPosition+1)])})}return this},loadImage:function(t,e){if(!this.options.videoRegex.test(t)){var n=new Image;e&&(n.onload=e),n.src=t}},setupLightboxHtml:function(){var t=this.options;return this.$el||(this.$el=r('<div class="slbElement '+t.elementClass+'"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="'+t.closeBtnCaption+'" class="slbCloseBtn '+t.closeBtnClass+'">×</button></div></div></div></div>'),1<this.items.length&&r('<div class="slbArrows"><button type="button" title="'+t.prevBtnCaption+'" class="prev slbArrow'+t.prevBtnClass+'">'+t.prevBtnCaption+'</button><button type="button" title="'+t.nextBtnCaption+'" class="next slbArrow'+t.nextBtnClass+'">'+t.nextBtnCaption+"</button></div>").appendTo(this.$el.find(".slbContentOuter")),this.$content=this.$el.find(".slbContent")),this.$content.empty(),this},show:function(){return this.modalInDom||(this.$el.appendTo(r(this.options.appendTarget)),t.addClass(this.options.htmlClass),this.setupLightboxEvents(),this.modalInDom=!0),this},setContent:function(t){var e=r(t);return this.loading(!1),this.setupLightboxHtml(),this.options.beforeSetContent&&this.options.beforeSetContent(e,this),this.$content.html(e),this},setImageDimensions:function(){this.$currentImage&&this.$currentImage.css("max-height",o.height()+"px")},setupLightboxEvents:function(){var n=this;this.lightboxEventsSetuped||(this.$el.on("click"+this.ens,function(t){var e=r(t.target);e.is(".slbCloseBtn")||n.options.closeOnOverlayClick&&e.is(".slbWrap")?n.close():e.is(".slbArrow")?e.hasClass("next")?n.next():n.prev():n.options.nextOnImageClick&&1<n.items.length&&e.is(".slbImage")&&n.next()}),e.on("keyup"+this.ens,function(t){n.options.closeOnEscapeKey&&27===t.keyCode&&n.close(),1<n.items.length&&(39!==t.keyCode&&68!==t.keyCode||n.next(),37!==t.keyCode&&65!==t.keyCode||n.prev())}),o.on("resize"+this.ens,function(){n.setImageDimensions()}),this.lightboxEventsSetuped=!0)},close:function(){this.modalInDom&&(this.options.beforeClose&&this.options.beforeClose(this),this.$el&&this.$el.off(this.ens),e.off(this.ens),o.off(this.ens),this.lightboxEventsSetuped=!1,this.$el.detach(),t.removeClass(this.options.htmlClass),this.modalInDom=!1)},destroy:function(){this.close(),this.options.beforeDestroy&&this.options.beforeDestroy(this),this.$items&&this.$items.off(this.ens),this.$el&&this.$el.remove()}}),i.open=function(t){var e=new i(t);return t.content?e.setContent(t.content).show():e.showPosition(e.options.startAt)},r.fn.simpleLightbox=function(t){var e,n=this;return this.each(function(){r.data(this,"simpleLightbox")||(e=e||new i(r.extend({},t,{$items:n})),r.data(this,"simpleLightbox",e))})},r.simpleLightbox=r.SimpleLightbox=i,r}),function(P,h){"use strict";function s(b,w,_,t,e){function n(){y=1<P.devicePixelRatio,_=i(_),0<=w.delay&&setTimeout(function(){o(!0)},w.delay),(w.delay<0||w.combined)&&(t.e=function(o,r){var s,a=0;return function(t,e){function n(){a=+new Date,r.call(b,t)}var i=+new Date-a;s&&clearTimeout(s),o<i||!w.enableThrottle||e?n():s=setTimeout(n,o-i)}}(w.throttle,function(t){"resize"===t.type&&(E=T=-1),o(t.all)}),t.a=function(t){t=i(t),_.push.apply(_,t)},t.g=function(){return _=j(_).filter(function(){return!j(this).data(w.loadedName)})},t.f=function(t){for(var e=0;e<t.length;e++){var n=_.filter(function(){return this===t[e]});n.length&&o(!1,n)}},o(),j(w.appendScroll).on("scroll."+e+" resize."+e,t.e))}function i(t){for(var e=w.defaultImage,n=w.placeholder,i=w.imageBase,o=w.srcsetAttribute,r=w.loaderAttribute,s=w._f||{},a=0,l=(t=j(t).filter(function(){var t=j(this),e=C(this);return!t.data(w.handledName)&&(t.attr(w.attribute)||t.attr(o)||t.attr(r)||s[e]!==h)}).data("plugin_"+w.name,b)).length;a<l;a++){var c=j(t[a]),u=C(t[a]),d=c.attr(w.imageBaseAttribute)||i;u===k&&d&&c.attr(o)&&c.attr(o,f(c.attr(o),d)),s[u]===h||c.attr(r)||c.attr(r,s[u]),u===k&&e&&!c.attr(I)?c.attr(I,e):u===k||!n||c.css(L)&&"none"!==c.css(L)||c.css(L,"url('"+n+"')")}return t}function o(t,e){if(_.length){for(var n=e||_,i=!1,o=w.imageBase||"",r=w.srcsetAttribute,s=w.handledName,a=0;a<n.length;a++)if(t||e||(h=n[a],void 0,p=h.getBoundingClientRect(),g=w.scrollDirection,m=w.threshold,v=(0<=T?T:T=j(P).height())+m>p.top&&-m<p.bottom,y=(0<=E?E:E=j(P).width())+m>p.left&&-m<p.right,"vertical"===g?v:"horizontal"===g?y:v&&y)){var l=j(n[a]),c=C(n[a]),u=l.attr(w.attribute),d=l.attr(w.imageBaseAttribute)||o,f=l.attr(w.loaderAttribute);l.data(s)||w.visibleOnly&&!l.is(":visible")||!((u||l.attr(r))&&(c===k&&(d+u!==l.attr(I)||l.attr(r)!==l.attr(O))||c!==k&&d+u!==l.css(L))||f)||(i=!0,l.data(s,!0),x(l,c,d,f))}var h,p,g,m,v,y;i&&(_=j(_).filter(function(){return!j(this).data(s)}))}else w.autoDestroy&&b.destroy()}function x(e,t,n,i){++v;var o=function(){m("onError",e),g(),o=j.noop};m("beforeLoad",e);var r=w.attribute,s=w.srcsetAttribute,a=w.sizesAttribute,l=w.retinaAttribute,c=w.removeAttribute,u=w.loadedName,d=e.attr(l);if(i){var f=function(){c&&e.removeAttr(w.loaderAttribute),e.data(u,!0),m(S,e),setTimeout(g,1),f=j.noop};e.off(D).one(D,o).one(A,f),m(i,e,function(t){t?(e.off(A),f()):(e.off(D),o())})||e.trigger(D)}else{var h=j(new Image);h.one(D,o).one(A,function(){e.hide(),t===k?e.attr(N,h.attr(N)).attr(O,h.attr(O)).attr(I,h.attr(I)):e.css(L,"url('"+h.attr(I)+"')"),e[w.effect](w.effectTime),c&&(e.removeAttr(r+" "+s+" "+l+" "+w.imageBaseAttribute),a!==N&&e.removeAttr(a)),e.data(u,!0),m(S,e),h.remove(),g()});var p=(y&&d?d:e.attr(r))||"";h.attr(N,e.attr(a)).attr(O,e.attr(s)).attr(I,p?n+p:null),h.complete&&h.trigger(A)}}function C(t){return t.tagName.toLowerCase()}function f(t,e){if(e){var n=t.split(",");t="";for(var i=0,o=n.length;i<o;i++)t+=e+n[i].trim()+(i!==o-1?",":"")}return t}function g(){--v,_.length||v||m("onFinishedAll")}function m(t,e,n){return!!(t=w[t])&&(t.apply(b,[].slice.call(arguments,1)),!0)}var v=0,E=-1,T=-1,y=!1,S="afterLoad",A="load",D="error",k="img",I="src",O="srcset",N="sizes",L="background-image";"event"===w.bind||r?n():j(P).on(A+"."+e,n)}function c(t,e){var n=this,i=j.extend({},n.config,e),o={},r=i.name+"-"+ ++a;return n.config=function(t,e){return e===h?i[t]:(i[t]=e,n)},n.addItems=function(t){return o.a&&o.a("string"===j.type(t)?j(t):t),n},n.getItems=function(){return o.g?o.g():{}},n.update=function(t){return o.e&&o.e({},!t),n},n.force=function(t){return o.f&&o.f("string"===j.type(t)?j(t):t),n},n.loadAll=function(){return o.e&&o.e({all:!0},!0),n},n.destroy=function(){return j(i.appendScroll).off("."+r,o.e),j(P).off("."+r),o={},h},s(n,i,t,o,r),i.chainable?t:n}var j=P.jQuery||P.Zepto,a=0,r=!1;j.fn.Lazy=j.fn.lazy=function(t){return new c(this,t)},j.Lazy=j.lazy=function(t,e,n){if(j.isFunction(e)&&(n=e,e=[]),j.isFunction(n)){t=j.isArray(t)?t:[t],e=j.isArray(e)?e:[e];for(var i=c.prototype.config,o=i._f||(i._f={}),r=0,s=t.length;r<s;r++)i[t[r]]!==h&&!j.isFunction(i[t[r]])||(i[t[r]]=n);for(var a=0,l=e.length;a<l;a++)o[e[a]]=t[0]}},c.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:P,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:h,afterLoad:h,onError:h,onFinishedAll:h},j(P).on("load",function(){r=!0})}(window),
/*
 * Copyright (C) 2012 PrimeBox
 * 
 * This work is licensed under the Creative Commons
 * Attribution 3.0 Unported License. To view a copy
 * of this license, visit
 * http://creativecommons.org/licenses/by/3.0/.
 * 
 * Documentation available at:
 * http://www.primebox.co.uk/projects/cookie-bar/
 * 
 * When using this software you use it at your own risk. We hold
 * no responsibility for any damage caused by using this plugin
 * or the documentation provided.
 */
function(_){_.cookieBar=function(e,t){if("cookies"==e)var n="cookies";else if("set"==e)n="set";else n=!1;var i={message:"We use cookies to track usage and preferences.",//Message displayed on bar
acceptButton:!0,//Set to true to show accept/enable button
acceptText:"I Understand",//Text on accept/enable button
acceptFunction:function(t){"enabled"!=t&&"accepted"!=t&&(window.location=window.location.href)},//Function to run after accept
declineButton:!1,//Set to true to show decline/disable button
declineText:"Disable Cookies",//Text on decline/disable button
declineFunction:function(t){"enabled"!=t&&"accepted"!=t||(window.location=window.location.href)},//Function to run after decline
policyButton:!1,//Set to true to show Privacy Policy button
policyText:"Privacy Policy",//Text on Privacy Policy button
policyURL:"/privacy-policy/",//URL of Privacy Policy
autoEnable:!0,//Set to true for cookies to be accepted automatically. Banner still shows
acceptOnContinue:!1,//Set to true to accept cookies when visitor moves to another page
acceptOnScroll:!1,//Set to true to accept cookies when visitor scrolls X pixels up or down
acceptAnyClick:!1,//Set to true to accept cookies when visitor clicks anywhere on the page
expireDays:365,//Number of days for cookieBar cookie to be stored for
renewOnVisit:!1,//Renew the cookie upon revisit to website
forceShow:!1,//Force cookieBar to show regardless of user cookie preference
effect:"slide",//Options: slide, fade, hide
element:"body",//Element to append/prepend cookieBar to. Remember "." for class or "#" for id.
append:!1,//Set to true for cookieBar HTML to be placed at base of website. Actual position may change according to CSS
fixed:!1,//Set to true to add the class "fixed" to the cookie bar. Default CSS should fix the position
bottom:!1,//Force CSS when fixed, so bar appears at bottom of website
zindex:"",//Can be set in CSS, although some may prefer to set here
domain:String(window.location.hostname),//Location of privacy policy
referrer:String(document.referrer)},o=(e=_.extend(i,e),new Date);o.setTime(o.getTime()+864e5*e.expireDays);var r,s,a="cb-enabled={value}; expires="+(o=o.toGMTString())+"; path=/",l="",c=document.cookie.split("; ");
//Retrieves current cookie preference
for(r=0;r<c.length;r++)"cb-enabled"==(s=c[r].split("="))[0]&&(l=s[1]);
//Sets up default cookie preference if not already set
if(""==l&&"cookies"!=n&&e.autoEnable?(l="enabled",document.cookie=a.replace("{value}","enabled")):"accepted"!=l&&"declined"!=l||"cookies"==n||!e.renewOnVisit||(document.cookie=a.replace("{value}",l)),e.acceptOnContinue&&0<=e.referrer.indexOf(e.domain)&&-1==String(window.location.href).indexOf(e.policyURL)&&"cookies"!=n&&"set"!=n&&"accepted"!=l&&"declined"!=l&&(n="set",t="accepted"),"cookies"==n)
//Returns true if cookies are enabled, false otherwise
return"enabled"==l||"accepted"==l;if("set"==n&&("accepted"==t||"declined"==t))
//Sets value of cookie to 'accepted' or 'declined'
return document.cookie=a.replace("{value}",t),"accepted"==t;
//Sets up enable/accept button if required
var u=e.message.replace("{policy_url}",e.policyURL);if(e.acceptButton)var d='<a href="" class="cb-enable">'+e.acceptText+"</a>";else d="";
//Sets up disable/decline button if required
if(e.declineButton)var f='<a href="" class="cb-disable">'+e.declineText+"</a>";else f="";
//Sets up privacy policy button if required
if(e.policyButton)var h='<a href="'+e.policyURL+'" class="cb-policy">'+e.policyText+"</a>";else h="";
//Whether to add "fixed" class to cookie bar
if(e.fixed)if(e.bottom)var p=' class="fixed bottom"';else p=' class="fixed"';else p="";if(""!=e.zindex)var g=' style="z-index:'+e.zindex+';"';else g="";
//Displays the cookie bar if arguments met
!e.forceShow&&"enabled"!=l&&""!=l||(_("body").addClass("cookieLayer"),e.append?_(e.element).append('<div id="cookie-bar"'+p+g+">"+u+d+f+h+"</div>"):_(e.element).prepend('<div id="cookie-bar"'+p+g+">"+u+d+f+h+"</div>"));function m(t){e.acceptOnScroll&&_(document).off("scroll"),"function"==typeof t&&t(l),"slide"==e.effect?_("#cookie-bar").slideUp(300,function(){_("#cookie-bar").remove()}):"fade"==e.effect?_("#cookie-bar").fadeOut(300,function(){_("#cookie-bar").remove()}):_("#cookie-bar").hide(0,function(){_("#cookie-bar").remove()}),_("body").removeClass("cookieLayer"),_(document).unbind("click",y)}function v(){document.cookie=a.replace("{value}","accepted"),m(e.acceptFunction)}var y=function(t){_(t.target).hasClass("cb-policy")||v()};if(_("#cookie-bar .cb-enable").click(function(){return v(),!1}),_("#cookie-bar .cb-disable").click(function(){return function(){var t=new Date;for(t.setTime(t.getTime()-864e6),t=t.toGMTString(),c=document.cookie.split("; "),r=0;r<c.length;r++)0<=(s=c[r].split("="))[0].indexOf("_")?document.cookie=s[0]+"=0; expires="+t+"; domain="+e.domain.replace("www","")+"; path=/":document.cookie=s[0]+"=0; expires="+t+"; path=/";document.cookie=a.replace("{value}","declined"),m(e.declineFunction)}(),!1}),e.acceptOnScroll){var b,w=_(document).scrollTop();_(document).on("scroll",function(){b=_(document).scrollTop(),(w<b?b-w:w-b)>=Math.round(e.acceptOnScroll)&&v()})}e.acceptAnyClick&&_(document).bind("click",y)}}(jQuery),
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,p,d){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}p=p&&p.hasOwnProperty("default")?p.default:p,d=d&&d.hasOwnProperty("default")?d.default:d;
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
/**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
var n="transitionend";function o(t){var e=this,n=!1;return p(this).one(g.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||g.triggerTransitionEnd(e)},t),this}
/**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */
var g={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;
// eslint-disable-next-line no-bitwise
t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;// Get transition-duration of the element
var e=p(t).css("transition-duration"),n=p(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);// Return 0 if element or transition duration is not found
return i||o?(// If multiple durations are defined, take the first
e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){p(t).trigger(n)},
// TODO: Remove in v5
supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&g.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}// Shoutout AngusCroll (https://goo.gl/pxwQGp)
var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:// when we don't find a shadow root
t.parentNode?g.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if(void 0===p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=p.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};g.jQueryDetection(),p.fn.emulateTransitionEnd=o,p.event.special[g.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(p(t.target).is(this))return t.handleObj.handler.apply(this,arguments);// eslint-disable-line prefer-rest-params
}};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var r="alert",a="bs.alert",c="."+a,u=p.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},h="alert",m="fade",v="show",y=
/* */
function(){function i(t){this._element=t}// Getters
var t=i.prototype;
// Public
return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){p.removeData(this._element,a),this._element=null}// Private
,t._getRootElement=function(t){var e=g.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||p(t).closest("."+h)[0]},t._triggerCloseEvent=function(t){var e=p.Event(f.CLOSE);return p(t).trigger(e),e},t._removeElement=function(e){var n=this;if(p(e).removeClass(v),p(e).hasClass(m)){var t=g.getTransitionDurationFromElement(e);p(e).one(g.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){p(t).detach().trigger(f.CLOSED).remove()}// Static
,i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',y._handleDismiss(new y)),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[r]=y._jQueryInterface,p.fn[r].Constructor=y,p.fn[r].noConflict=function(){return p.fn[r]=u,y._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var b="button",w="bs.button",_="."+w,x=".data-api",C=p.fn[b],E="active",T="btn",S="focus",A='[data-toggle^="button"]',D='[data-toggle="buttons"]',k='[data-toggle="button"]',I='[data-toggle="buttons"] .btn',O='input:not([type="hidden"])',N=".active",L=".btn",P={CLICK_DATA_API:"click"+_+x,FOCUS_BLUR_DATA_API:"focus"+_+x+" blur"+_+x,LOAD_DATA_API:"load"+_+x},j=
/* */
function(){function n(t){this._element=t}// Getters
var t=n.prototype;
// Public
return t.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=this._element.querySelector(O);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(E))t=!1;else{var o=n.querySelector(N);o&&p(o).removeClass(E)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(E)&&(t=!1):
// if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
t=!1;t&&(i.checked=!this._element.classList.contains(E),p(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(E)),t&&p(this._element).toggleClass(E))},t.dispose=function(){p.removeData(this._element,w),this._element=null}// Static
,n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(w);t||(t=new n(this),p(this).data(w,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(P.CLICK_DATA_API,A,function(t){var e=t.target;if(p(e).hasClass(T)||(e=p(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();// work around Firefox bug #1540995
else{var n=e.querySelector(O);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))// work around Firefox bug #1540995
return void t.preventDefault();j._jQueryInterface.call(p(e),"toggle")}}).on(P.FOCUS_BLUR_DATA_API,A,function(t){var e=p(t.target).closest(L)[0];p(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),p(window).on(P.LOAD_DATA_API,function(){for(
// ensure correct active class is set to match the controls' actual values/states
// find all checkboxes/readio buttons inside data-toggle groups
var t=[].slice.call(document.querySelectorAll(I)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(O);o.checked||o.hasAttribute("checked")?i.classList.add(E):i.classList.remove(E)}// find all button toggles
for(var r=0,s=(t=[].slice.call(document.querySelectorAll(k))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(E):a.classList.remove(E)}}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[b]=j._jQueryInterface,p.fn[b].Constructor=j,p.fn[b].noConflict=function(){return p.fn[b]=C,j._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var H="carousel",M="bs.carousel",$="."+M,q=".data-api",R=p.fn[H],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},B={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},z="next",F="prev",U="left",Q="right",V={SLIDE:"slide"+$,SLID:"slid"+$,KEYDOWN:"keydown"+$,MOUSEENTER:"mouseenter"+$,MOUSELEAVE:"mouseleave"+$,TOUCHSTART:"touchstart"+$,TOUCHMOVE:"touchmove"+$,TOUCHEND:"touchend"+$,POINTERDOWN:"pointerdown"+$,POINTERUP:"pointerup"+$,DRAG_START:"dragstart"+$,LOAD_DATA_API:"load"+$+q,CLICK_DATA_API:"click"+$+q},X="carousel",K="active",Y="slide",G="carousel-item-right",Z="carousel-item-left",J="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ut={TOUCH:"touch",PEN:"pen"},dt=
/* */
function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}// Getters
var t=r.prototype;
// Public
return t.next=function(){this._isSliding||this._slide(z)},t.nextWhenVisible=function(){
// Don't call next when the page isn't visible
// or the carousel or its parent isn't visible
!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(g.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)p(this._element).one(V.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?z:F;this._slide(i,this._items[t])}},t.dispose=function(){p(this._element).off($),p.removeData(this._element,M),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}// Private
,t._getConfig=function(t){return t=l({},W,{},t),g.typeCheckConfig(H,t,B),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;// swipe left
(this.touchDeltaX=0)<e&&this.prev(),// swipe right
e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&p(this._element).on(V.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&p(this._element).on(V.MOUSEENTER,function(t){return e.pause(t)}).on(V.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ut[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ut[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(
// If it's a touch-enabled device, mouseenter/leave are fired as
// part of the mouse compatibility events on first tap - the carousel
// would stop cycling until user tapped out of it;
// here, we listen for touchend, explicitly pause the carousel
// (as if it's the second time we tap on it, mouseenter compat event
// is NOT fired) and after a timeout (to allow for mouse compatibility
// events to fire) we explicitly restart cycling
e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};p(this._element.querySelectorAll(rt)).on(V.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(p(this._element).on(V.POINTERDOWN,function(t){return n(t)}),p(this._element).on(V.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(p(this._element).on(V.TOUCHSTART,function(t){return n(t)}),p(this._element).on(V.TOUCHMOVE,function(t){return function(t){
// ensure swiping with one touch and not pinching
t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),p(this._element).on(V.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===z,i=t===F,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===F?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=p.Event(V.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return p(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));p(e).removeClass(K);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&p(n).addClass(K)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),u=Boolean(this._interval);if(o=t===z?(n=Z,i=J,U):(n=G,i=tt,Q),l&&p(l).hasClass(K))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(l);var d=p.Event(V.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(Y)){p(l).addClass(i),g.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var h=g.getTransitionDurationFromElement(s);p(s).one(g.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(K),p(s).removeClass(K+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(d)},0)}).emulateTransitionEnd(h)}else p(s).removeClass(K),p(l).addClass(K),this._isSliding=!1,p(this._element).trigger(d);u&&this.cycle()}}// Static
,r._jQueryInterface=function(i){return this.each(function(){var t=p(this).data(M),e=l({},W,{},p(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),p(this).data(M,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=g.getSelectorFromElement(this);if(e){var n=p(e)[0];if(n&&p(n).hasClass(X)){var i=l({},p(n).data(),{},p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(M).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return W}}]),r}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(V.CLICK_DATA_API,lt,dt._dataApiClickHandler),p(window).on(V.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=p(t[e]);dt._jQueryInterface.call(i,i.data())}}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[H]=dt._jQueryInterface,p.fn[H].Constructor=dt,p.fn[H].noConflict=function(){return p.fn[H]=R,dt._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var ft="collapse",ht="bs.collapse",pt="."+ht,gt=p.fn[ft],mt={toggle:!0,parent:""},vt={toggle:"boolean",parent:"(string|element)"},yt={SHOW:"show"+pt,SHOWN:"shown"+pt,HIDE:"hide"+pt,HIDDEN:"hidden"+pt,CLICK_DATA_API:"click"+pt+".data-api"},bt="show",wt="collapse",_t="collapsing",xt="collapsed",Ct="width",Et="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',At=
/* */
function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=g.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}// Getters
var t=a.prototype;
// Public
return t.toggle=function(){p(this._element).hasClass(bt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(bt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(wt)})).length&&(t=null),!(t&&(e=p(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=p.Event(yt.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(p(t).not(this._selector),"hide"),e||p(t).data(ht,null));var o=this._getDimension();p(this._element).removeClass(wt).addClass(_t),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(xt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,function(){p(n._element).removeClass(_t).addClass(wt).addClass(bt),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(yt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&p(this._element).hasClass(bt)){var e=p.Event(yt.HIDE);if(p(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",g.reflow(this._element),p(this._element).addClass(_t).removeClass(wt).removeClass(bt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=g.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(bt)||p(r).addClass(xt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,function(){t.setTransitioning(!1),p(t._element).removeClass(_t).addClass(wt).trigger(yt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){p.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}// Private
,t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),// Coerce string values
g.typeCheckConfig(ft,t,vt),t},t._getDimension=function(){return p(this._element).hasClass(Ct)?Ct:Et},t._getParent=function(){var t,n=this;g.isElement(this._config.parent)?(t=this._config.parent,// It's a jQuery object
void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return p(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=p(t).hasClass(bt);e.length&&p(e).toggleClass(xt,!n).attr("aria-expanded",n)}// Static
,a._getTargetFromElement=function(t){var e=g.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=p(this),e=t.data(ht),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(yt.CLICK_DATA_API,St,function(t){
// preventDefault only for <a> elements (which change the URL) not inside the collapsible element
"A"===t.currentTarget.tagName&&t.preventDefault();var n=p(this),e=g.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));p(i).each(function(){var t=p(this),e=t.data(ht)?"toggle":n.data();At._jQueryInterface.call(t,e)})}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[ft]=At._jQueryInterface,p.fn[ft].Constructor=At,p.fn[ft].noConflict=function(){return p.fn[ft]=gt,At._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var Dt="dropdown",kt="bs.dropdown",It="."+kt,Ot=".data-api",Nt=p.fn[Dt],Lt=new RegExp("38|40|27"),Pt={HIDE:"hide"+It,HIDDEN:"hidden"+It,SHOW:"show"+It,SHOWN:"shown"+It,CLICK:"click"+It,CLICK_DATA_API:"click"+It+Ot,KEYDOWN_DATA_API:"keydown"+It+Ot,KEYUP_DATA_API:"keyup"+It+Ot},jt="disabled",Ht="show",Mt="dropup",$t="dropright",qt="dropleft",Rt="dropdown-menu-right",Wt="position-static",Bt='[data-toggle="dropdown"]',zt=".dropdown form",Ft=".dropdown-menu",Ut=".navbar-nav",Qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Vt="top-start",Xt="top-end",Kt="bottom-start",Yt="bottom-end",Gt="right-start",Zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=
/* */
function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}// Getters
var t=c.prototype;
// Public
return t.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(jt)){var t=p(this._menu).hasClass(Ht);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||p(this._element).hasClass(jt)||p(this._menu).hasClass(Ht))){var e={relatedTarget:this._element},n=p.Event(Pt.SHOW,e),i=c._getParentFromElement(this._element);if(p(i).trigger(n),!n.isDefaultPrevented()){// Disable totally Popper.js for Dropdown in Navbar
if(!this._inNavbar&&t){
/**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
if(void 0===d)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:g.isElement(this._config.reference)&&(o=this._config.reference,// Check if it's jQuery element
void 0!==this._config.reference.jquery&&(o=this._config.reference[0])),// If boundary is not `scrollParent`, then set position to `static`
// to allow the menu to "escape" the scroll parent's boundaries
// https://github.com/twbs/bootstrap/issues/24251
"scrollParent"!==this._config.boundary&&p(i).addClass(Wt),this._popper=new d(o,this._menu,this._getPopperConfig())}// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&0===p(i).closest(Ut).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(Ht),p(i).toggleClass(Ht).trigger(p.Event(Pt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(jt)&&p(this._menu).hasClass(Ht)){var t={relatedTarget:this._element},e=p.Event(Pt.HIDE,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),p(this._menu).toggleClass(Ht),p(n).toggleClass(Ht).trigger(p.Event(Pt.HIDDEN,t)))}},t.dispose=function(){p.removeData(this._element,kt),p(this._element).off(It),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()}// Private
,t._addEventListeners=function(){var e=this;p(this._element).on(Pt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},p(this._element).data(),{},t),g.typeCheckConfig(Dt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Ft))}return this._menu},t._getPlacement=function(){var t=p(this._element.parentNode),e=Kt;// Handle dropup
return t.hasClass(Mt)?(e=Vt,p(this._menu).hasClass(Rt)&&(e=Xt)):t.hasClass($t)?e=Gt:t.hasClass(qt)?e=Zt:p(this._menu).hasClass(Rt)&&(e=Yt),e},t._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};// Disable Popper.js if we have a static display
return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)}// Static
,c._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(kt);if(t||(t=new c(this,"object"==typeof e?e:null),p(this).data(kt,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Bt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=p(e[n]).data(kt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(p(o).hasClass(Ht)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&p.contains(o,t.target))){var l=p.Event(Pt.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||(// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),p(a).removeClass(Ht),p(o).removeClass(Ht).trigger(p.Event(Pt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=g.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode}// eslint-disable-next-line complexity
,c._dataApiKeydownHandler=function(t){
// If not input/textarea:
//  - And not a key in REGEXP_KEYDOWN => not a dropdown command
// If input/textarea:
//  - If space key => not a dropdown command
//  - If key is other than escape
//    - If key is not up or down => not a dropdown command
//    - If trigger inside the menu => not a dropdown command
if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||p(t.target).closest(Ft).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!p(this).hasClass(jt))){var e=c._getParentFromElement(this),n=p(e).hasClass(Ht);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Qt)).filter(function(t){return p(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&
// Up
o--,40===t.which&&o<i.length-1&&
// Down
o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Bt);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return te}}]),c}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(Pt.KEYDOWN_DATA_API,Bt,ee._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API,Ft,ee._dataApiKeydownHandler).on(Pt.CLICK_DATA_API+" "+Pt.KEYUP_DATA_API,ee._clearMenus).on(Pt.CLICK_DATA_API,Bt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(p(this),"toggle")}).on(Pt.CLICK_DATA_API,zt,function(t){t.stopPropagation()}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[Dt]=ee._jQueryInterface,p.fn[Dt].Constructor=ee,p.fn[Dt].noConflict=function(){return p.fn[Dt]=Nt,ee._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var ne="modal",ie="bs.modal",oe="."+ie,re=p.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",ue="modal-scrollbar-measure",de="modal-backdrop",fe="modal-open",he="fade",pe="show",ge="modal-static",me=".modal-dialog",ve=".modal-body",ye='[data-toggle="modal"]',be='[data-dismiss="modal"]',we=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",xe=
/* */
function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}// Getters
var t=o.prototype;
// Public
return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=p.Event(le.SHOW,{relatedTarget:t});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(le.CLICK_DISMISS,be,function(t){return e.hide(t)}),p(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){p(e._element).one(le.MOUSEUP_DISMISS,function(t){p(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(le.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(le.FOCUSIN),p(this._element).removeClass(pe),p(this._element).off(le.CLICK_DISMISS),p(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return p(t).off(oe)}),
/**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */
p(document).off(le.FOCUSIN),p.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()}// Private
,t._getConfig=function(t){return t=l({},se,{},t),g.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=p.Event(le.HIDE_PREVENTED);if(p(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(ge);var n=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,function(){t._element.classList.remove(ge)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=p(this._element).hasClass(he),i=this._dialog?this._dialog.querySelector(ve):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||
// Don't move modal's DOM position
document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&g.reflow(this._element),p(this._element).addClass(pe),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,p(e._element).trigger(r)}var r=p.Event(le.SHOWN,{relatedTarget:t});if(n){var s=g.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(g.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;p(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===p(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?p(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||p(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?p(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):p(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),p(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=p(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=de,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&g.reflow(this._backdrop),p(this._backdrop).addClass(pe),!t)return;if(!n)return void t();var i=g.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(g.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(pe);var o=function(){e._removeBackdrop(),t&&t()};if(p(this._element).hasClass(he)){var r=g.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(g.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()}// ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
,t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){
// Note: DOMNode.style.paddingRight returns the actual value or '' if not set
//   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
var t=[].slice.call(document.querySelectorAll(we)),e=[].slice.call(document.querySelectorAll(_e));// Adjust fixed content padding
p(t).each(function(t,e){var n=e.style.paddingRight,i=p(e).css("padding-right");p(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),// Adjust sticky content margin
p(e).each(function(t,e){var n=e.style.marginRight,i=p(e).css("margin-right");p(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});// Adjust body padding
var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(fe)},t._resetScrollbar=function(){
// Restore fixed content padding
var t=[].slice.call(document.querySelectorAll(we));p(t).each(function(t,e){var n=p(e).data("padding-right");p(e).removeData("padding-right"),e.style.paddingRight=n||""});// Restore sticky content
var e=[].slice.call(document.querySelectorAll(""+_e));p(e).each(function(t,e){var n=p(e).data("margin-right");void 0!==n&&p(e).css("margin-right",n).removeData("margin-right")});// Restore body padding
var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){
// thx d.walsh
var t=document.createElement("div");t.className=ue,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}// Static
,o._jQueryInterface=function(n,i){return this.each(function(){var t=p(this).data(ie),e=l({},se,{},p(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),p(this).data(ie,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(le.CLICK_DATA_API,ye,function(t){var e,n=this,i=g.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=p(e).data(ie)?"toggle":l({},p(e).data(),{},p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=p(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});xe._jQueryInterface.call(p(e),o,this)}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[ne]=xe._jQueryInterface,p.fn[ne].Constructor=xe,p.fn[ne].noConflict=function(){return p.fn[ne]=re,xe._jQueryInterface};
/**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.4.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
var Ce=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={
// Global attributes allowed on any supplied element below.
"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Te=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Se=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Ae(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Ce.indexOf(n)||Boolean(t.nodeValue.match(Te)||t.nodeValue.match(Se));// Check if a regular expression validates the attribute.
for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,r)&&n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var De="tooltip",ke="bs.tooltip",Ie="."+ke,Oe=p.fn[De],Ne="bs-tooltip",Le=new RegExp("(^|\\s)"+Ne+"\\S+","g"),Pe=["sanitize","whiteList","sanitizeFn"],je={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},He={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Me={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee,popperConfig:null},$e="show",qe="out",Re={HIDE:"hide"+Ie,HIDDEN:"hidden"+Ie,SHOW:"show"+Ie,SHOWN:"shown"+Ie,INSERTED:"inserted"+Ie,CLICK:"click"+Ie,FOCUSIN:"focusin"+Ie,FOCUSOUT:"focusout"+Ie,MOUSEENTER:"mouseenter"+Ie,MOUSELEAVE:"mouseleave"+Ie},We="fade",Be="show",ze=".tooltip-inner",Fe=".arrow",Ue="hover",Qe="focus",Ve="click",Xe="manual",Ke=
/* */
function(){function i(t,e){if(void 0===d)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");// private
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,// Protected
this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}// Getters
var t=i.prototype;
// Public
return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=p(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(Be))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var t=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(t);var n=g.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=g.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(We);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new d(this.element,o,this._getPopperConfig(a)),p(o).addClass(Be),// If this is a touch-enabled device we add extra
// empty mouseover listeners to the body's immediate children;
// only needed because of broken event delegation on iOS
// https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,p(e.element).trigger(e.constructor.Event.SHOWN),t===qe&&e._leave(null,e)};if(p(this.tip).hasClass(We)){var u=g.getTransitionDurationFromElement(this.tip);p(this.tip).one(g.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},t.hide=function(t){function e(){n._hoverState!==$e&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),p(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=p.Event(this.constructor.Event.HIDE);if(p(this.element).trigger(o),!o.isDefaultPrevented()){if(p(i).removeClass(Be),// If this is a touch-enabled device we remove the extra
// empty mouseover listeners we added for iOS support
"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Ve]=!1,this._activeTrigger[Qe]=!1,this._activeTrigger[Ue]=!1,p(this.tip).hasClass(We)){var r=g.getTransitionDurationFromElement(i);p(i).one(g.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()}// Protected
,t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){p(this.getTipElement()).addClass(Ne+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(p(t.querySelectorAll(ze)),this.getTitle()),p(t).removeClass(We+" "+Be)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Ae(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):
// Content is a DOM node or a jQuery
this.config.html?p(e).parent().is(t)||t.empty().append(e):t.text(p(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)}// Private
,t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Fe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:g.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},t._getAttachment=function(t){return He[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Xe){var e=t===Ue?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ue?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},p(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Qe:Ue]=!0),p(e.getTipElement()).hasClass(Be)||e._hoverState===$e?e._hoverState=$e:(clearTimeout(e._timeout),e._hoverState=$e,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===$e&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Qe:Ue]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=qe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===qe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=p(this.element).data();return Object.keys(e).forEach(function(t){-1!==Pe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),g.typeCheckConfig(De,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ae(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(p(t).removeClass(We),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)}// Static
,i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(ke),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(ke,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Me}},{key:"NAME",get:function(){return De}},{key:"DATA_KEY",get:function(){return ke}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return Ie}},{key:"DefaultType",get:function(){return je}}]),i}();
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[De]=Ke._jQueryInterface,p.fn[De].Constructor=Ke,p.fn[De].noConflict=function(){return p.fn[De]=Oe,Ke._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var Ye="popover",Ge="bs.popover",Ze="."+Ge,Je=p.fn[Ye],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Ke.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Ke.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Ze,HIDDEN:"hidden"+Ze,SHOW:"show"+Ze,SHOWN:"shown"+Ze,INSERTED:"inserted"+Ze,CLICK:"click"+Ze,FOCUSIN:"focusin"+Ze,FOCUSOUT:"focusout"+Ze,MOUSEENTER:"mouseenter"+Ze,MOUSELEAVE:"mouseleave"+Ze},un=
/* */
function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;
// Overrides
return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){p(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var t=p(this.getTipElement());// We use append for html objects to maintain js events
this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)}// Private
,e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))}// Static
,i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Ge,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",
// Getters
get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return Ye}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Ze}},{key:"DefaultType",get:function(){return on}}]),i}(Ke);
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[Ye]=un._jQueryInterface,p.fn[Ye].Constructor=un,p.fn[Ye].noConflict=function(){return p.fn[Ye]=Je,un._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var dn="scrollspy",fn="bs.scrollspy",hn="."+fn,pn=p.fn[dn],gn={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},vn={ACTIVATE:"activate"+hn,SCROLL:"scroll"+hn,LOAD_DATA_API:"load"+hn+".data-api"},yn="dropdown-item",bn="active",wn='[data-spy="scroll"]',_n=".nav, .list-group",xn=".nav-link",Cn=".nav-item",En=".list-group-item",Tn=".dropdown",Sn=".dropdown-item",An=".dropdown-toggle",Dn="offset",kn="position",In=
/* */
function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+xn+","+this._config.target+" "+En+","+this._config.target+" "+Sn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(vn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}// Getters
var t=n.prototype;
// Public
return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?Dn:kn,o="auto"===this._config.method?t:this._config.method,r=o===kn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=g.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)
// TODO (fat): remove sketch reliance on jQuery position/offset
return[p(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){p.removeData(this._element,fn),p(this._scrollElement).off(hn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}// Private
,t._getConfig=function(t){if("string"!=typeof(t=l({},gn,{},"object"==typeof t&&t?t:{})).target){var e=p(t.target).attr("id");e||(e=g.getUID(dn),p(t.target).attr("id",e)),t.target="#"+e}return g.typeCheckConfig(dn,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=p([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(yn)?(n.closest(Tn).find(An).addClass(bn),n.addClass(bn)):(
// Set triggered link as active
n.addClass(bn),// Set triggered links parents as active
// With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
n.parents(_n).prev(xn+", "+En).addClass(bn),// Handle special case when .nav-link is inside .nav-item
n.parents(_n).prev(Cn).children(xn).addClass(bn)),p(this._scrollElement).trigger(vn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(bn)}).forEach(function(t){return t.classList.remove(bn)})}// Static
,n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),p(this).data(fn,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return gn}}]),n}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(window).on(vn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(wn)),e=t.length;e--;){var n=p(t[e]);In._jQueryInterface.call(n,n.data())}}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[dn]=In._jQueryInterface,p.fn[dn].Constructor=In,p.fn[dn].noConflict=function(){return p.fn[dn]=pn,In._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var On="bs.tab",Nn="."+On,Ln=p.fn.tab,Pn={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,CLICK_DATA_API:"click"+Nn+".data-api"},jn="dropdown-menu",Hn="active",Mn="disabled",$n="fade",qn="show",Rn=".dropdown",Wn=".nav, .list-group",Bn=".active",zn="> li > .active",Fn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Un=".dropdown-toggle",Qn="> .dropdown-menu .active",Vn=
/* */
function(){function i(t){this._element=t}// Getters
var t=i.prototype;
// Public
return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(Hn)||p(this._element).hasClass(Mn))){var t,i,e=p(this._element).closest(Wn)[0],o=g.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?zn:Bn;i=(i=p.makeArray(p(e).find(r)))[i.length-1]}var s=p.Event(Pn.HIDE,{relatedTarget:this._element}),a=p.Event(Pn.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=p.Event(Pn.HIDDEN,{relatedTarget:n._element}),e=p.Event(Pn.SHOWN,{relatedTarget:i});p(i).trigger(t),p(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){p.removeData(this._element,On),this._element=null}// Private
,t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?p(e).children(Bn):p(e).find(zn))[0],s=n&&r&&p(r).hasClass($n);if(r&&s){var a=g.getTransitionDurationFromElement(r);p(r).removeClass(qn).one(g.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){p(e).removeClass(Hn);var i=p(e.parentNode).find(Qn)[0];i&&p(i).removeClass(Hn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(p(t).addClass(Hn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),g.reflow(t),t.classList.contains($n)&&t.classList.add(qn),t.parentNode&&p(t.parentNode).hasClass(jn)){var o=p(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Un));p(r).addClass(Hn)}t.setAttribute("aria-expanded",!0)}n&&n()}// Static
,i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(On);if(e||(e=new i(this),t.data(On,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();
/**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
p(document).on(Pn.CLICK_DATA_API,Fn,function(t){t.preventDefault(),Vn._jQueryInterface.call(p(this),"show")}),
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn.tab=Vn._jQueryInterface,p.fn.tab.Constructor=Vn,p.fn.tab.noConflict=function(){return p.fn.tab=Ln,Vn._jQueryInterface};
/**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
var Xn="toast",Kn="bs.toast",Yn="."+Kn,Gn=p.fn[Xn],Zn={CLICK_DISMISS:"click.dismiss"+Yn,HIDE:"hide"+Yn,HIDDEN:"hidden"+Yn,SHOW:"show"+Yn,SHOWN:"shown"+Yn},Jn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=
/* */
function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}// Getters
var t=i.prototype;
// Public
return t.show=function(){var t=this,e=p.Event(Zn.SHOW);if(p(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Jn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),p(t._element).trigger(Zn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),g.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=p.Event(Zn.HIDE);p(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),p(this._element).off(Zn.CLICK_DISMISS),p.removeData(this._element,Kn),this._element=null,this._config=null}// Private
,t._getConfig=function(t){return t=l({},oi,{},p(this._element).data(),{},"object"==typeof t&&t?t:{}),g.typeCheckConfig(Xn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;p(this._element).on(Zn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),p(e._element).trigger(Zn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=g.getTransitionDurationFromElement(this._element);p(this._element).one(g.TRANSITION_END,t).emulateTransitionEnd(n)}else t()}// Static
,i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Kn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Kn,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();
/**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
p.fn[Xn]=si._jQueryInterface,p.fn[Xn].Constructor=si,p.fn[Xn].noConflict=function(){return p.fn[Xn]=Gn,si._jQueryInterface},t.Alert=y,t.Button=j,t.Carousel=dt,t.Collapse=At,t.Dropdown=ee,t.Modal=xe,t.Popover=un,t.Scrollspy=In,t.Tab=Vn,t.Toast=si,t.Tooltip=Ke,t.Util=g,Object.defineProperty(t,"__esModule",{value:!0})}),
//# sourceMappingURL=bootstrap.js.map
$(document).ready(function(){"#docuception"==window.location.hash&&$("html").addClass("docuception")}),function(){"use strict";var e,t,n=$(".module-events-detail"),i=n.find(".date-list"),o=n.find(".arrow-left"),r=n.find(".arrow-right"),s=n.find(".slide-container"),a=i.find(".date"),l=n.find(".timetable");function c(t){e=setInterval(function(){s.scrollLeft(s.scrollLeft()+t)},20)}function u(){clearInterval(e)}function d(){t>s.width()-20&&r.removeClass("disabled"),s.scrollLeft()>=t-s.width()&&r.addClass("disabled"),0<s.scrollLeft()?o.removeClass("disabled"):o.addClass("disabled")}t=70*s.find("span").length,o.bind("mousedown touchstart",function(){c(-15)}),r.bind("mousedown touchstart",function(){c(15)}),n.bind("mouseup touchend",u),n.bind("mouseup touchend",u),s.scroll(d),$(window).resize(d),setTimeout(d,500),a.click(function(t){t.preventDefault(),a.removeClass("active"),$(this).addClass("active"),l.hide(),l.eq($(this).index()).show()})}(),$(function(){var r;(r=$("[data-expander]")).click(function(t){t.preventDefault();var e=$(this).data("expander"),n=$(e),i=n.prop("scrollHeight"),o=n.data("height");n.toggleClass("expanded"),$(this).hasClass("active")?($(this).removeClass("active"),n.animate({height:o},500),$(this).text($(this).data("read")),n.data("offset")&&!r.hasClass("element-listexpandable-expander")&&$("html, body").animate({scrollTop:n.data("offset")},"normal")):($(this).addClass("active"),n.animate({height:i},500),$(this).text($(this).data("close")),n.data("offset",n.offset().top))}),$(".no-collapseable a, .element-tableexpandable-content-row a").on("click",function(t){t.stopPropagation()}),$(".element-listexpandable-expander").each(function(t){$(this).hasClass("initial-open")&&$(this).trigger("click")})}),runAfterComplete.lazyLoading=function(){
// standard config
var t={scrollDirection:"vertical",retinaAttribute:"data-src",effect:"fadeIn",effectTime:250,visibleOnly:!0},e=$("div.body-bg"),n=e.css("background-image");
// load image for .body-bg (currently for iza and sun only)
if($("html").hasClass("home")&&n){var i=/url\(\"(.*)\"/g.exec(n);
/* */
null!==i&&(n=i[1].replace("-pre",""),e.addClass("lazy-bg"),e.attr("data-src",n),$(".lazy-bg").lazy({scrollDirection:"both",effect:"show",retinaAttribute:"data-src"}))
/* */}
// load backgrounds where applicable
$(".lazy-background").lazy(t),
// load svg logos for footer
$(".lazy-footer").lazy(t)}
/*var footerSticky = function() {

    var footerAdd = {
        'iza': 46,
        'briq': 25,
        'dps': 141,
        'sun': 25
    };

    var currentInstitute = '';

    var $sf_header = $('header');
    var $sf_content = $('main');
    var $sf_footer = $('footer');

    $.each(['briq', 'iza', 'dps', 'sun'], function(i, v) {
        if ($('body').hasClass(v) && currentInstitute == '') {
            currentInstitute = v;
            console.log(currentInstitute + ' ' + footerAdd[currentInstitute]);
        }
    });

    var sf_minHeight = $sf_header.height() + Math.ceil($sf_footer.height() + footerAdd[currentInstitute]);
    var sf_cssRule = 'calc( 100vh - ' + sf_minHeight + 'px )';
    //console.log('footer-sticky: ' + sf_cssRule);

    $sf_content.css({
        minHeight: sf_cssRule
    });
};

$(window).on('resize', footerSticky);
$(window).resize();*/,$(function(){var t=$("body"),e=$(".hamburger");$(window).on("scroll",function(){1<=$(window).scrollTop()?t.addClass("scrolled"):t.removeClass("scrolled")}),e.on("click",function(t){e.toggleClass("is-active")}),$(".topics").on("click",function(t){var e=$(this),n=e.attr("href");
// If target is active, abort...
return t.preventDefault(),e.hasClass("active")||(
// If another target has been clicked remove all active items.
$(".topic-description.active").removeClass("active"),$(".topics.active").removeClass("active"),
// Add active state to $self and href target.
e.addClass("active"),$(n).addClass("active")),!1})}),$(function(){$("#header-navbar-search-trigger").on("click",function(t){var e=$(this),n=e.parents(".navbar-nav"),i=n.find(".dropdown"),o=n.find("#header-navbar-search-form");return i.fadeOut("fast",function(){var t=$(this);t.hide(),e.hide(),o.show().find("input").trigger("focus").on("blur",function(){$(this).off("blur"),o.fadeOut("fast",function(){$(this).hide(),t.show(),e.show()})})}),t.preventDefault(),!1})}),$(function(){window.matchMedia("(min-width: 991.98px)").matches&&$("li.dropdown a.dropdown-toggle").on("click",function(){$(this).parent().hasClass("show")&&location.assign($(this).attr("href"))})}),$(function(){var t=$(".backtotop"),e=$(".cornerwrapper");$(window).scroll(function(){300<$(window).scrollTop()?e.addClass("visible"):e.removeClass("visible")}),t.on("click",function(t){t.preventDefault(),$("html").animate({scrollTop:"0"},"300")})}),$(window).on("load",function(){setTimeout(function(){0<$(".simpleLightbox").length&&$("a.simpleLightbox").simpleLightbox()},100)}),jQuery(document).ready(function(){
// var mobileFilterTopButton = $('.mobile-filter-top-button');
// if(mobileFilterTopButton.length > 0) {
//     mobileFilterTopButton.click(function(e) {
//         e.preventDefault();
//         $('.filter-top .element-publications-list-filter').toggle();
//     });
// }
var t=$(".mobile-filter-bottom-button");0<t.length&&t.click(function(t){t.preventDefault(),$(".filter-bottom .element-publications-list-filter").toggle()});var e=$('.filter-bottom  .element-publications-list-filter input[type="checkbox"]');
// var filterTopList = $('.filter-top  .element-publications-list-filter input[type="checkbox"]');
// if(filterTopList.length > 0) {
//     filterTopList.change(function(e) {
//         e.preventDefault();
//         $(this).closest('.col-md-12').next('.filter-hint').toggle();
//         if(blockClickRace){
//             blockClickRace = false;
//             return false;
//         }
//         blockClickRace = true;
//         $('.filter-bottom .element-publications-list-filter input[type="checkbox"]').eq( filterTopList.index(this) ).click();
//     });
// }
0<e.length&&e.change(function(t){t.preventDefault(),$(this).closest(".col-md-12").next(".filter-hint").toggle()})
/* Remove due to DPS-857
    var counter = 0;

    $('.mobile-filter-button').click(function(e) {
        e.preventDefault();

        $('main').append('<div class="filter-overlay"></div>');

        $('.element-publications-list-filter').parent().addClass('filter-parent');

        counter += 1;
        var element = $('.element-publications-list-filter').detach();
        $('main').append(element);


        $('.element-publications-list-filter').show();

        $('.filter-done, .filter-overlay').click(function() {
            $('.filter-overlay').detach();
            $('.element-publications-list-filter').hide();
        });

    });
    $(window).on('resize', function() {

        if($(window).width() > 768) {
            $('.element-publications-list-filter').show();
            if(counter >= 1) {
                var element = $(' main ').find('.element-publications-list-filter').detach();
                $('.filter-parent').append(element);
            }
        } else {
            $('.element-publications-list-filter').hide();
            $('.filter-overlay').detach();
        }
    });
     */}),$(window).on("load",function(){function t(){return h.scrollLeft()<=0}function e(){return Math.floor(p.outerWidth())-Math.ceil(h.width())<=h.scrollLeft()}function n(){f.removeClass("disabled")}function i(){f.addClass("disabled")}function o(){d.removeClass("disabled")}function r(){d.addClass("disabled")}function s(){t()?r():o(),e()?i():n()}function a(t){t.preventDefault(),g(-5,10)}function l(t){t.preventDefault(),g(5,10)}function c(){clearInterval(u)}var u,d,f,h,p,g;d=$("#arrow-left"),f=$("#arrow-right"),h=$(".horizontal-slider-wrapper"),p=$(".horizontal-slider-parent"),g=function(t,e){u=setInterval(function(){h.scrollLeft(h.scrollLeft()+t)},e)},$(window).on("resize",function(){0<p.length&&s()}),0<p.length&&setTimeout(function(){
/*
            $('.fellow-alphabet a').on('click', function(e) {
                e.preventDefault();
            });
            */
d.on("mousedown touchstart",a),f.on("mousedown touchstart",l),d.on("mouseup touchend",c),f.on("mouseup touchend",c),s(),h.scroll(function(){return t()?(r(),void c()):e()?(i(),void c()):(n(),void o())})},50)}),$(window).on("load",function(){function t(){function e(){return 543<u()?Math.floor(.059*c.width()):0}function n(){return u()<=543?1:u()<768?2:3}function i(){return 1===n()}function o(){return a>n()}function r(){return Math.floor((Math.floor(l.width())-(n()-1)*e())/n())}var s,t=".module-carousel-type-1",a=$(t+" ul li").length,l=$(t+" .col-md-12"),c=$(t+" .row"),u=function(){return window.innerWidth},d={minSlides:1,maxSlides:n(),slideWidth:r(),slideMargin:e(),infiniteLoop:!1,hideControlOnEnd:!0,responsive:!0,pager:o(),adaptiveHeight:i(),controls:!0,touchEnabled:!1};s=$(".module-carousel-type-1 .element-carousel").bxSlider(d),$(window).on("resize",function(){if(0<s.length){var t=s.getCurrentSlide();$.extend(!0,d,{maxSlides:n(),slideWidth:r(),slideMargin:e(),pager:o(),adaptiveHeight:i(),startSlide:t}),s.reloadSlider(d)}})}setTimeout(function(){t()},50)}),$(window).on("load",function(){setTimeout(function(){!function(){function e(){return n.width()}var t=$(".module-carousel-type-2"),n=t.find(".col-md-10"),i=t.find(".element-carousel"),o={minSlides:1,maxSlides:1,slideWidth:e(),infiniteLoop:!1,nextText:"",prevText:"",hideControlOnEnd:!0,touchEnabled:!1},r=[],s=[];i.each(function(t){r[t]=$(this).bxSlider(o)}),$(window).on("resize",function(){0<r.length&&$.each(r,function(t){s[t]=r[t].getCurrentSlide(),$.extend(!0,o,{slideWidth:e(),startSlide:s[t]}),r[t].reloadSlider(o)})})}()},50)}),jQuery(document).ready(function(){var t=$(".element-filter-horizontal h3");0<t.length&&t.click(function(t){t.preventDefault(),$(this).closest(".container").find(".filter-horizontal-list").toggle()});var e=$(".element-filter-horizontal input");0<e.length&&e.on("click",function(){$(this).closest(".col-md-12").next(".filter-hint").toggle()})}),document.onreadystatechange=function(){"complete"===document.readyState&&$.each(runAfterComplete,function(t,e){"function"==typeof e&&e()})},$(document).ready(function(){0<$(".view-switch").length&&$(".view-switch").click(function(t){t.preventDefault();var e=$(this).attr("href"),n=window.location.href.split("#")[0];0<n.lastIndexOf("#")?(cl=n.lastIndexOf("#"),urlhash=n.substring(cl,n.length)):(urlhash="",cl=n.length);var i=n+e;window.location.href=i,$(".view-switch").toggleClass("active"),"#list"==e?($(".fellows-card-view").fadeOut(),$(".fellows-list-view").fadeIn(),$(".businesscard-link").removeClass("active"),$(".list-link").addClass("active")):($(".fellows-list-view").fadeOut(),$(".fellows-card-view").fadeIn(),$(".list-link").removeClass("active"),$(".businesscard-link").addClass("active"))})}),jQuery(document).ready(function(){0<$(".tooltip-open").length&&($(".tooltip-open").click(function(t){
//if( $( window ).width() > 576 ) {
if(t.preventDefault(),544<$(window).width()){
//get the exact position from the top of the page
var e=$(".search-info").offset().top-$(window).scrollTop(),n=$(".navbar").offset().top-$(window).scrollTop()+$(".navbar").height(),i=$(".tooltip-info-icon").offset().left;$(".search-info-overlay").detach();var o=$(".tooltip-window").detach();$(".tooltip-open").append(o),
//console.log('searchinfoPos: ', searchinfoPos);
//console.log('navbarPos: ', navbarPos);
//console.log('summe: ', searchinfoPos - navbarPos);
// if(searchinfoPos - navbarPos < 310) {
e-n<350?($(".tooltip-window").css({bottom:"auto",top:"40px"}),$(".arrowbottom").hide(),$(".arrowtop").show()):($(".tooltip-window").css({bottom:"40px",top:"auto"}),$(".arrowbottom").show(),$(".arrowtop").hide()),i<420&&($(".tooltip-window").css({right:"auto",left:"60px"}),$(".arrowbottom, .arrowtop").css({right:"auto",left:"40px"}))}else{$("body").append('<div class="search-info-overlay"></div>');o=$(".tooltip-window").detach();$("body").append(o),$(".arrowbottom").hide(),$(".arrowtop").hide(),$(".tooltip-window, .search-info-overlay").click(function(){$(".tooltip-window").hide(),$(".search-info-overlay").detach()})}$(".tooltip-window").toggle()}),$(window).on("resize",function(){$(".tooltip-window").hide(),$(".search-info-overlay").detach()}))});
