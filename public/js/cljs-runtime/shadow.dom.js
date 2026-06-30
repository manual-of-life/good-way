goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16622 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16622(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16623 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16623(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15828 = coll;
var G__15829 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15828,G__15829) : shadow.dom.lazy_native_coll_seq.call(null,G__15828,G__15829));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15905 = arguments.length;
switch (G__15905) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15924 = arguments.length;
switch (G__15924) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15938 = arguments.length;
switch (G__15938) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15963 = arguments.length;
switch (G__15963) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15977 = arguments.length;
switch (G__15977) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16053 = arguments.length;
switch (G__16053) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16081){if((e16081 instanceof Object)){
var e = e16081;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16081;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16105 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16106 = null;
var count__16107 = (0);
var i__16108 = (0);
while(true){
if((i__16108 < count__16107)){
var el = chunk__16106.cljs$core$IIndexed$_nth$arity$2(null,i__16108);
var handler_16630__$1 = ((function (seq__16105,chunk__16106,count__16107,i__16108,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16105,chunk__16106,count__16107,i__16108,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16630__$1);


var G__16631 = seq__16105;
var G__16632 = chunk__16106;
var G__16633 = count__16107;
var G__16634 = (i__16108 + (1));
seq__16105 = G__16631;
chunk__16106 = G__16632;
count__16107 = G__16633;
i__16108 = G__16634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16105);
if(temp__5804__auto__){
var seq__16105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16105__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16105__$1);
var G__16635 = cljs.core.chunk_rest(seq__16105__$1);
var G__16636 = c__5568__auto__;
var G__16637 = cljs.core.count(c__5568__auto__);
var G__16638 = (0);
seq__16105 = G__16635;
chunk__16106 = G__16636;
count__16107 = G__16637;
i__16108 = G__16638;
continue;
} else {
var el = cljs.core.first(seq__16105__$1);
var handler_16639__$1 = ((function (seq__16105,chunk__16106,count__16107,i__16108,el,seq__16105__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16105,chunk__16106,count__16107,i__16108,el,seq__16105__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16639__$1);


var G__16640 = cljs.core.next(seq__16105__$1);
var G__16641 = null;
var G__16642 = (0);
var G__16643 = (0);
seq__16105 = G__16640;
chunk__16106 = G__16641;
count__16107 = G__16642;
i__16108 = G__16643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16153 = arguments.length;
switch (G__16153) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16164 = cljs.core.seq(events);
var chunk__16165 = null;
var count__16166 = (0);
var i__16167 = (0);
while(true){
if((i__16167 < count__16166)){
var vec__16198 = chunk__16165.cljs$core$IIndexed$_nth$arity$2(null,i__16167);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16645 = seq__16164;
var G__16646 = chunk__16165;
var G__16647 = count__16166;
var G__16648 = (i__16167 + (1));
seq__16164 = G__16645;
chunk__16165 = G__16646;
count__16166 = G__16647;
i__16167 = G__16648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16164);
if(temp__5804__auto__){
var seq__16164__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16164__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16164__$1);
var G__16649 = cljs.core.chunk_rest(seq__16164__$1);
var G__16650 = c__5568__auto__;
var G__16651 = cljs.core.count(c__5568__auto__);
var G__16652 = (0);
seq__16164 = G__16649;
chunk__16165 = G__16650;
count__16166 = G__16651;
i__16167 = G__16652;
continue;
} else {
var vec__16208 = cljs.core.first(seq__16164__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16653 = cljs.core.next(seq__16164__$1);
var G__16654 = null;
var G__16655 = (0);
var G__16656 = (0);
seq__16164 = G__16653;
chunk__16165 = G__16654;
count__16166 = G__16655;
i__16167 = G__16656;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16216 = cljs.core.seq(styles);
var chunk__16217 = null;
var count__16218 = (0);
var i__16219 = (0);
while(true){
if((i__16219 < count__16218)){
var vec__16251 = chunk__16217.cljs$core$IIndexed$_nth$arity$2(null,i__16219);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16657 = seq__16216;
var G__16658 = chunk__16217;
var G__16659 = count__16218;
var G__16660 = (i__16219 + (1));
seq__16216 = G__16657;
chunk__16217 = G__16658;
count__16218 = G__16659;
i__16219 = G__16660;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16216);
if(temp__5804__auto__){
var seq__16216__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16216__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16216__$1);
var G__16661 = cljs.core.chunk_rest(seq__16216__$1);
var G__16662 = c__5568__auto__;
var G__16663 = cljs.core.count(c__5568__auto__);
var G__16664 = (0);
seq__16216 = G__16661;
chunk__16217 = G__16662;
count__16218 = G__16663;
i__16219 = G__16664;
continue;
} else {
var vec__16259 = cljs.core.first(seq__16216__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16665 = cljs.core.next(seq__16216__$1);
var G__16666 = null;
var G__16667 = (0);
var G__16668 = (0);
seq__16216 = G__16665;
chunk__16217 = G__16666;
count__16218 = G__16667;
i__16219 = G__16668;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16277_16669 = key;
var G__16277_16670__$1 = (((G__16277_16669 instanceof cljs.core.Keyword))?G__16277_16669.fqn:null);
switch (G__16277_16670__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16672 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16672,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16672,"aria-");
}
})())){
el.setAttribute(ks_16672,value);
} else {
(el[ks_16672] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16321){
var map__16322 = p__16321;
var map__16322__$1 = cljs.core.__destructure_map(map__16322);
var props = map__16322__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16323 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16323,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16328 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16328,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16328;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16335 = arguments.length;
switch (G__16335) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16340){
var vec__16342 = p__16340;
var seq__16343 = cljs.core.seq(vec__16342);
var first__16344 = cljs.core.first(seq__16343);
var seq__16343__$1 = cljs.core.next(seq__16343);
var nn = first__16344;
var first__16344__$1 = cljs.core.first(seq__16343__$1);
var seq__16343__$2 = cljs.core.next(seq__16343__$1);
var np = first__16344__$1;
var nc = seq__16343__$2;
var node = vec__16342;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16346 = nn;
var G__16347 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16346,G__16347) : create_fn.call(null,G__16346,G__16347));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16348 = nn;
var G__16349 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16348,G__16349) : create_fn.call(null,G__16348,G__16349));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16351 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16351,(1),null);
var seq__16355_16676 = cljs.core.seq(node_children);
var chunk__16356_16677 = null;
var count__16357_16678 = (0);
var i__16358_16679 = (0);
while(true){
if((i__16358_16679 < count__16357_16678)){
var child_struct_16680 = chunk__16356_16677.cljs$core$IIndexed$_nth$arity$2(null,i__16358_16679);
var children_16681 = shadow.dom.dom_node(child_struct_16680);
if(cljs.core.seq_QMARK_(children_16681)){
var seq__16377_16682 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16681));
var chunk__16379_16683 = null;
var count__16380_16684 = (0);
var i__16381_16685 = (0);
while(true){
if((i__16381_16685 < count__16380_16684)){
var child_16686 = chunk__16379_16683.cljs$core$IIndexed$_nth$arity$2(null,i__16381_16685);
if(cljs.core.truth_(child_16686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16686);


var G__16687 = seq__16377_16682;
var G__16688 = chunk__16379_16683;
var G__16689 = count__16380_16684;
var G__16690 = (i__16381_16685 + (1));
seq__16377_16682 = G__16687;
chunk__16379_16683 = G__16688;
count__16380_16684 = G__16689;
i__16381_16685 = G__16690;
continue;
} else {
var G__16691 = seq__16377_16682;
var G__16692 = chunk__16379_16683;
var G__16693 = count__16380_16684;
var G__16694 = (i__16381_16685 + (1));
seq__16377_16682 = G__16691;
chunk__16379_16683 = G__16692;
count__16380_16684 = G__16693;
i__16381_16685 = G__16694;
continue;
}
} else {
var temp__5804__auto___16695 = cljs.core.seq(seq__16377_16682);
if(temp__5804__auto___16695){
var seq__16377_16696__$1 = temp__5804__auto___16695;
if(cljs.core.chunked_seq_QMARK_(seq__16377_16696__$1)){
var c__5568__auto___16697 = cljs.core.chunk_first(seq__16377_16696__$1);
var G__16698 = cljs.core.chunk_rest(seq__16377_16696__$1);
var G__16699 = c__5568__auto___16697;
var G__16700 = cljs.core.count(c__5568__auto___16697);
var G__16701 = (0);
seq__16377_16682 = G__16698;
chunk__16379_16683 = G__16699;
count__16380_16684 = G__16700;
i__16381_16685 = G__16701;
continue;
} else {
var child_16702 = cljs.core.first(seq__16377_16696__$1);
if(cljs.core.truth_(child_16702)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16702);


var G__16703 = cljs.core.next(seq__16377_16696__$1);
var G__16704 = null;
var G__16705 = (0);
var G__16706 = (0);
seq__16377_16682 = G__16703;
chunk__16379_16683 = G__16704;
count__16380_16684 = G__16705;
i__16381_16685 = G__16706;
continue;
} else {
var G__16707 = cljs.core.next(seq__16377_16696__$1);
var G__16708 = null;
var G__16709 = (0);
var G__16710 = (0);
seq__16377_16682 = G__16707;
chunk__16379_16683 = G__16708;
count__16380_16684 = G__16709;
i__16381_16685 = G__16710;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16681);
}


var G__16711 = seq__16355_16676;
var G__16712 = chunk__16356_16677;
var G__16713 = count__16357_16678;
var G__16714 = (i__16358_16679 + (1));
seq__16355_16676 = G__16711;
chunk__16356_16677 = G__16712;
count__16357_16678 = G__16713;
i__16358_16679 = G__16714;
continue;
} else {
var temp__5804__auto___16715 = cljs.core.seq(seq__16355_16676);
if(temp__5804__auto___16715){
var seq__16355_16716__$1 = temp__5804__auto___16715;
if(cljs.core.chunked_seq_QMARK_(seq__16355_16716__$1)){
var c__5568__auto___16717 = cljs.core.chunk_first(seq__16355_16716__$1);
var G__16718 = cljs.core.chunk_rest(seq__16355_16716__$1);
var G__16719 = c__5568__auto___16717;
var G__16720 = cljs.core.count(c__5568__auto___16717);
var G__16721 = (0);
seq__16355_16676 = G__16718;
chunk__16356_16677 = G__16719;
count__16357_16678 = G__16720;
i__16358_16679 = G__16721;
continue;
} else {
var child_struct_16722 = cljs.core.first(seq__16355_16716__$1);
var children_16723 = shadow.dom.dom_node(child_struct_16722);
if(cljs.core.seq_QMARK_(children_16723)){
var seq__16387_16724 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16723));
var chunk__16389_16725 = null;
var count__16390_16726 = (0);
var i__16391_16727 = (0);
while(true){
if((i__16391_16727 < count__16390_16726)){
var child_16728 = chunk__16389_16725.cljs$core$IIndexed$_nth$arity$2(null,i__16391_16727);
if(cljs.core.truth_(child_16728)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16728);


var G__16729 = seq__16387_16724;
var G__16730 = chunk__16389_16725;
var G__16731 = count__16390_16726;
var G__16732 = (i__16391_16727 + (1));
seq__16387_16724 = G__16729;
chunk__16389_16725 = G__16730;
count__16390_16726 = G__16731;
i__16391_16727 = G__16732;
continue;
} else {
var G__16733 = seq__16387_16724;
var G__16734 = chunk__16389_16725;
var G__16735 = count__16390_16726;
var G__16736 = (i__16391_16727 + (1));
seq__16387_16724 = G__16733;
chunk__16389_16725 = G__16734;
count__16390_16726 = G__16735;
i__16391_16727 = G__16736;
continue;
}
} else {
var temp__5804__auto___16737__$1 = cljs.core.seq(seq__16387_16724);
if(temp__5804__auto___16737__$1){
var seq__16387_16738__$1 = temp__5804__auto___16737__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16387_16738__$1)){
var c__5568__auto___16739 = cljs.core.chunk_first(seq__16387_16738__$1);
var G__16740 = cljs.core.chunk_rest(seq__16387_16738__$1);
var G__16741 = c__5568__auto___16739;
var G__16742 = cljs.core.count(c__5568__auto___16739);
var G__16743 = (0);
seq__16387_16724 = G__16740;
chunk__16389_16725 = G__16741;
count__16390_16726 = G__16742;
i__16391_16727 = G__16743;
continue;
} else {
var child_16744 = cljs.core.first(seq__16387_16738__$1);
if(cljs.core.truth_(child_16744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16744);


var G__16745 = cljs.core.next(seq__16387_16738__$1);
var G__16746 = null;
var G__16747 = (0);
var G__16748 = (0);
seq__16387_16724 = G__16745;
chunk__16389_16725 = G__16746;
count__16390_16726 = G__16747;
i__16391_16727 = G__16748;
continue;
} else {
var G__16749 = cljs.core.next(seq__16387_16738__$1);
var G__16750 = null;
var G__16751 = (0);
var G__16752 = (0);
seq__16387_16724 = G__16749;
chunk__16389_16725 = G__16750;
count__16390_16726 = G__16751;
i__16391_16727 = G__16752;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16723);
}


var G__16753 = cljs.core.next(seq__16355_16716__$1);
var G__16754 = null;
var G__16755 = (0);
var G__16756 = (0);
seq__16355_16676 = G__16753;
chunk__16356_16677 = G__16754;
count__16357_16678 = G__16755;
i__16358_16679 = G__16756;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16408 = cljs.core.seq(node);
var chunk__16409 = null;
var count__16410 = (0);
var i__16411 = (0);
while(true){
if((i__16411 < count__16410)){
var n = chunk__16409.cljs$core$IIndexed$_nth$arity$2(null,i__16411);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16760 = seq__16408;
var G__16761 = chunk__16409;
var G__16762 = count__16410;
var G__16763 = (i__16411 + (1));
seq__16408 = G__16760;
chunk__16409 = G__16761;
count__16410 = G__16762;
i__16411 = G__16763;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16408);
if(temp__5804__auto__){
var seq__16408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16408__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16408__$1);
var G__16764 = cljs.core.chunk_rest(seq__16408__$1);
var G__16765 = c__5568__auto__;
var G__16766 = cljs.core.count(c__5568__auto__);
var G__16767 = (0);
seq__16408 = G__16764;
chunk__16409 = G__16765;
count__16410 = G__16766;
i__16411 = G__16767;
continue;
} else {
var n = cljs.core.first(seq__16408__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16768 = cljs.core.next(seq__16408__$1);
var G__16769 = null;
var G__16770 = (0);
var G__16771 = (0);
seq__16408 = G__16768;
chunk__16409 = G__16769;
count__16410 = G__16770;
i__16411 = G__16771;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16418 = arguments.length;
switch (G__16418) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16423 = arguments.length;
switch (G__16423) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16438 = arguments.length;
switch (G__16438) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16775 = arguments.length;
var i__5770__auto___16776 = (0);
while(true){
if((i__5770__auto___16776 < len__5769__auto___16775)){
args__5775__auto__.push((arguments[i__5770__auto___16776]));

var G__16777 = (i__5770__auto___16776 + (1));
i__5770__auto___16776 = G__16777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16464_16778 = cljs.core.seq(nodes);
var chunk__16465_16779 = null;
var count__16466_16780 = (0);
var i__16467_16781 = (0);
while(true){
if((i__16467_16781 < count__16466_16780)){
var node_16782 = chunk__16465_16779.cljs$core$IIndexed$_nth$arity$2(null,i__16467_16781);
fragment.appendChild(shadow.dom._to_dom(node_16782));


var G__16783 = seq__16464_16778;
var G__16784 = chunk__16465_16779;
var G__16785 = count__16466_16780;
var G__16786 = (i__16467_16781 + (1));
seq__16464_16778 = G__16783;
chunk__16465_16779 = G__16784;
count__16466_16780 = G__16785;
i__16467_16781 = G__16786;
continue;
} else {
var temp__5804__auto___16787 = cljs.core.seq(seq__16464_16778);
if(temp__5804__auto___16787){
var seq__16464_16788__$1 = temp__5804__auto___16787;
if(cljs.core.chunked_seq_QMARK_(seq__16464_16788__$1)){
var c__5568__auto___16789 = cljs.core.chunk_first(seq__16464_16788__$1);
var G__16790 = cljs.core.chunk_rest(seq__16464_16788__$1);
var G__16791 = c__5568__auto___16789;
var G__16792 = cljs.core.count(c__5568__auto___16789);
var G__16793 = (0);
seq__16464_16778 = G__16790;
chunk__16465_16779 = G__16791;
count__16466_16780 = G__16792;
i__16467_16781 = G__16793;
continue;
} else {
var node_16794 = cljs.core.first(seq__16464_16788__$1);
fragment.appendChild(shadow.dom._to_dom(node_16794));


var G__16795 = cljs.core.next(seq__16464_16788__$1);
var G__16796 = null;
var G__16797 = (0);
var G__16798 = (0);
seq__16464_16778 = G__16795;
chunk__16465_16779 = G__16796;
count__16466_16780 = G__16797;
i__16467_16781 = G__16798;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16460){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16460));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16474_16799 = cljs.core.seq(scripts);
var chunk__16475_16800 = null;
var count__16476_16801 = (0);
var i__16477_16802 = (0);
while(true){
if((i__16477_16802 < count__16476_16801)){
var vec__16486_16803 = chunk__16475_16800.cljs$core$IIndexed$_nth$arity$2(null,i__16477_16802);
var script_tag_16804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486_16803,(0),null);
var script_body_16805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486_16803,(1),null);
eval(script_body_16805);


var G__16806 = seq__16474_16799;
var G__16807 = chunk__16475_16800;
var G__16808 = count__16476_16801;
var G__16809 = (i__16477_16802 + (1));
seq__16474_16799 = G__16806;
chunk__16475_16800 = G__16807;
count__16476_16801 = G__16808;
i__16477_16802 = G__16809;
continue;
} else {
var temp__5804__auto___16810 = cljs.core.seq(seq__16474_16799);
if(temp__5804__auto___16810){
var seq__16474_16811__$1 = temp__5804__auto___16810;
if(cljs.core.chunked_seq_QMARK_(seq__16474_16811__$1)){
var c__5568__auto___16812 = cljs.core.chunk_first(seq__16474_16811__$1);
var G__16813 = cljs.core.chunk_rest(seq__16474_16811__$1);
var G__16814 = c__5568__auto___16812;
var G__16815 = cljs.core.count(c__5568__auto___16812);
var G__16816 = (0);
seq__16474_16799 = G__16813;
chunk__16475_16800 = G__16814;
count__16476_16801 = G__16815;
i__16477_16802 = G__16816;
continue;
} else {
var vec__16489_16817 = cljs.core.first(seq__16474_16811__$1);
var script_tag_16818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16489_16817,(0),null);
var script_body_16819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16489_16817,(1),null);
eval(script_body_16819);


var G__16820 = cljs.core.next(seq__16474_16811__$1);
var G__16821 = null;
var G__16822 = (0);
var G__16823 = (0);
seq__16474_16799 = G__16820;
chunk__16475_16800 = G__16821;
count__16476_16801 = G__16822;
i__16477_16802 = G__16823;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16494){
var vec__16495 = p__16494;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16495,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16495,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16507 = arguments.length;
switch (G__16507) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16509 = cljs.core.seq(style_keys);
var chunk__16510 = null;
var count__16511 = (0);
var i__16512 = (0);
while(true){
if((i__16512 < count__16511)){
var it = chunk__16510.cljs$core$IIndexed$_nth$arity$2(null,i__16512);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16826 = seq__16509;
var G__16827 = chunk__16510;
var G__16828 = count__16511;
var G__16829 = (i__16512 + (1));
seq__16509 = G__16826;
chunk__16510 = G__16827;
count__16511 = G__16828;
i__16512 = G__16829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16509);
if(temp__5804__auto__){
var seq__16509__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16509__$1);
var G__16830 = cljs.core.chunk_rest(seq__16509__$1);
var G__16831 = c__5568__auto__;
var G__16832 = cljs.core.count(c__5568__auto__);
var G__16833 = (0);
seq__16509 = G__16830;
chunk__16510 = G__16831;
count__16511 = G__16832;
i__16512 = G__16833;
continue;
} else {
var it = cljs.core.first(seq__16509__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16834 = cljs.core.next(seq__16509__$1);
var G__16835 = null;
var G__16836 = (0);
var G__16837 = (0);
seq__16509 = G__16834;
chunk__16510 = G__16835;
count__16511 = G__16836;
i__16512 = G__16837;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16514,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16518 = k16514;
var G__16518__$1 = (((G__16518 instanceof cljs.core.Keyword))?G__16518.fqn:null);
switch (G__16518__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16514,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16519){
var vec__16520 = p__16519;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16513){
var self__ = this;
var G__16513__$1 = this;
return (new cljs.core.RecordIter((0),G__16513__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16515,other16516){
var self__ = this;
var this16515__$1 = this;
return (((!((other16516 == null)))) && ((((this16515__$1.constructor === other16516.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.x,other16516.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.y,other16516.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.__extmap,other16516.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16514){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16523 = k16514;
var G__16523__$1 = (((G__16523 instanceof cljs.core.Keyword))?G__16523.fqn:null);
switch (G__16523__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16514);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16513){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16524 = cljs.core.keyword_identical_QMARK_;
var expr__16525 = k__5352__auto__;
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16525)))){
return (new shadow.dom.Coordinate(G__16513,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525)))){
return (new shadow.dom.Coordinate(self__.x,G__16513,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16513),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16513){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16513,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16517){
var extmap__5385__auto__ = (function (){var G__16527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16517,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16517)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16527);
} else {
return G__16527;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16517),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16517),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16529,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16533 = k16529;
var G__16533__$1 = (((G__16533 instanceof cljs.core.Keyword))?G__16533.fqn:null);
switch (G__16533__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16529,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16534){
var vec__16535 = p__16534;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16528){
var self__ = this;
var G__16528__$1 = this;
return (new cljs.core.RecordIter((0),G__16528__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16530,other16531){
var self__ = this;
var this16530__$1 = this;
return (((!((other16531 == null)))) && ((((this16530__$1.constructor === other16531.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.w,other16531.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.h,other16531.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.__extmap,other16531.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16529){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16538 = k16529;
var G__16538__$1 = (((G__16538 instanceof cljs.core.Keyword))?G__16538.fqn:null);
switch (G__16538__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16529);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16528){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16539 = cljs.core.keyword_identical_QMARK_;
var expr__16540 = k__5352__auto__;
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16540)))){
return (new shadow.dom.Size(G__16528,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16540)))){
return (new shadow.dom.Size(self__.w,G__16528,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16528),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16528){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16528,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16532){
var extmap__5385__auto__ = (function (){var G__16542 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16532,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16532)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16542);
} else {
return G__16542;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16532),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16532),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16864 = (i + (1));
var G__16865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16864;
ret = G__16865;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16547){
var vec__16548 = p__16547;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16552 = arguments.length;
switch (G__16552) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16867 = ps;
var G__16868 = (i + (1));
el__$1 = G__16867;
i = G__16868;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16553 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16556_16869 = cljs.core.seq(props);
var chunk__16557_16870 = null;
var count__16558_16871 = (0);
var i__16559_16872 = (0);
while(true){
if((i__16559_16872 < count__16558_16871)){
var vec__16566_16873 = chunk__16557_16870.cljs$core$IIndexed$_nth$arity$2(null,i__16559_16872);
var k_16874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16873,(0),null);
var v_16875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16873,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16874);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16874),v_16875);


var G__16876 = seq__16556_16869;
var G__16877 = chunk__16557_16870;
var G__16878 = count__16558_16871;
var G__16879 = (i__16559_16872 + (1));
seq__16556_16869 = G__16876;
chunk__16557_16870 = G__16877;
count__16558_16871 = G__16878;
i__16559_16872 = G__16879;
continue;
} else {
var temp__5804__auto___16880 = cljs.core.seq(seq__16556_16869);
if(temp__5804__auto___16880){
var seq__16556_16881__$1 = temp__5804__auto___16880;
if(cljs.core.chunked_seq_QMARK_(seq__16556_16881__$1)){
var c__5568__auto___16882 = cljs.core.chunk_first(seq__16556_16881__$1);
var G__16883 = cljs.core.chunk_rest(seq__16556_16881__$1);
var G__16884 = c__5568__auto___16882;
var G__16885 = cljs.core.count(c__5568__auto___16882);
var G__16886 = (0);
seq__16556_16869 = G__16883;
chunk__16557_16870 = G__16884;
count__16558_16871 = G__16885;
i__16559_16872 = G__16886;
continue;
} else {
var vec__16569_16887 = cljs.core.first(seq__16556_16881__$1);
var k_16888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16887,(0),null);
var v_16889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16887,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16888);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16888),v_16889);


var G__16890 = cljs.core.next(seq__16556_16881__$1);
var G__16891 = null;
var G__16892 = (0);
var G__16893 = (0);
seq__16556_16869 = G__16890;
chunk__16557_16870 = G__16891;
count__16558_16871 = G__16892;
i__16559_16872 = G__16893;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(1),null);
var seq__16576_16894 = cljs.core.seq(node_children);
var chunk__16578_16895 = null;
var count__16579_16896 = (0);
var i__16580_16897 = (0);
while(true){
if((i__16580_16897 < count__16579_16896)){
var child_struct_16898 = chunk__16578_16895.cljs$core$IIndexed$_nth$arity$2(null,i__16580_16897);
if((!((child_struct_16898 == null)))){
if(typeof child_struct_16898 === 'string'){
var text_16899 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16899),child_struct_16898].join(''));
} else {
var children_16900 = shadow.dom.svg_node(child_struct_16898);
if(cljs.core.seq_QMARK_(children_16900)){
var seq__16594_16901 = cljs.core.seq(children_16900);
var chunk__16596_16902 = null;
var count__16597_16903 = (0);
var i__16598_16904 = (0);
while(true){
if((i__16598_16904 < count__16597_16903)){
var child_16905 = chunk__16596_16902.cljs$core$IIndexed$_nth$arity$2(null,i__16598_16904);
if(cljs.core.truth_(child_16905)){
node.appendChild(child_16905);


var G__16906 = seq__16594_16901;
var G__16907 = chunk__16596_16902;
var G__16908 = count__16597_16903;
var G__16909 = (i__16598_16904 + (1));
seq__16594_16901 = G__16906;
chunk__16596_16902 = G__16907;
count__16597_16903 = G__16908;
i__16598_16904 = G__16909;
continue;
} else {
var G__16910 = seq__16594_16901;
var G__16911 = chunk__16596_16902;
var G__16912 = count__16597_16903;
var G__16913 = (i__16598_16904 + (1));
seq__16594_16901 = G__16910;
chunk__16596_16902 = G__16911;
count__16597_16903 = G__16912;
i__16598_16904 = G__16913;
continue;
}
} else {
var temp__5804__auto___16920 = cljs.core.seq(seq__16594_16901);
if(temp__5804__auto___16920){
var seq__16594_16921__$1 = temp__5804__auto___16920;
if(cljs.core.chunked_seq_QMARK_(seq__16594_16921__$1)){
var c__5568__auto___16922 = cljs.core.chunk_first(seq__16594_16921__$1);
var G__16923 = cljs.core.chunk_rest(seq__16594_16921__$1);
var G__16924 = c__5568__auto___16922;
var G__16925 = cljs.core.count(c__5568__auto___16922);
var G__16926 = (0);
seq__16594_16901 = G__16923;
chunk__16596_16902 = G__16924;
count__16597_16903 = G__16925;
i__16598_16904 = G__16926;
continue;
} else {
var child_16927 = cljs.core.first(seq__16594_16921__$1);
if(cljs.core.truth_(child_16927)){
node.appendChild(child_16927);


var G__16928 = cljs.core.next(seq__16594_16921__$1);
var G__16929 = null;
var G__16930 = (0);
var G__16931 = (0);
seq__16594_16901 = G__16928;
chunk__16596_16902 = G__16929;
count__16597_16903 = G__16930;
i__16598_16904 = G__16931;
continue;
} else {
var G__16932 = cljs.core.next(seq__16594_16921__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16594_16901 = G__16932;
chunk__16596_16902 = G__16933;
count__16597_16903 = G__16934;
i__16598_16904 = G__16935;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16900);
}
}


var G__16936 = seq__16576_16894;
var G__16937 = chunk__16578_16895;
var G__16938 = count__16579_16896;
var G__16939 = (i__16580_16897 + (1));
seq__16576_16894 = G__16936;
chunk__16578_16895 = G__16937;
count__16579_16896 = G__16938;
i__16580_16897 = G__16939;
continue;
} else {
var G__16940 = seq__16576_16894;
var G__16941 = chunk__16578_16895;
var G__16942 = count__16579_16896;
var G__16943 = (i__16580_16897 + (1));
seq__16576_16894 = G__16940;
chunk__16578_16895 = G__16941;
count__16579_16896 = G__16942;
i__16580_16897 = G__16943;
continue;
}
} else {
var temp__5804__auto___16944 = cljs.core.seq(seq__16576_16894);
if(temp__5804__auto___16944){
var seq__16576_16945__$1 = temp__5804__auto___16944;
if(cljs.core.chunked_seq_QMARK_(seq__16576_16945__$1)){
var c__5568__auto___16946 = cljs.core.chunk_first(seq__16576_16945__$1);
var G__16947 = cljs.core.chunk_rest(seq__16576_16945__$1);
var G__16948 = c__5568__auto___16946;
var G__16949 = cljs.core.count(c__5568__auto___16946);
var G__16950 = (0);
seq__16576_16894 = G__16947;
chunk__16578_16895 = G__16948;
count__16579_16896 = G__16949;
i__16580_16897 = G__16950;
continue;
} else {
var child_struct_16951 = cljs.core.first(seq__16576_16945__$1);
if((!((child_struct_16951 == null)))){
if(typeof child_struct_16951 === 'string'){
var text_16952 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16952),child_struct_16951].join(''));
} else {
var children_16953 = shadow.dom.svg_node(child_struct_16951);
if(cljs.core.seq_QMARK_(children_16953)){
var seq__16600_16954 = cljs.core.seq(children_16953);
var chunk__16602_16955 = null;
var count__16603_16956 = (0);
var i__16604_16957 = (0);
while(true){
if((i__16604_16957 < count__16603_16956)){
var child_16958 = chunk__16602_16955.cljs$core$IIndexed$_nth$arity$2(null,i__16604_16957);
if(cljs.core.truth_(child_16958)){
node.appendChild(child_16958);


var G__16959 = seq__16600_16954;
var G__16960 = chunk__16602_16955;
var G__16961 = count__16603_16956;
var G__16962 = (i__16604_16957 + (1));
seq__16600_16954 = G__16959;
chunk__16602_16955 = G__16960;
count__16603_16956 = G__16961;
i__16604_16957 = G__16962;
continue;
} else {
var G__16963 = seq__16600_16954;
var G__16964 = chunk__16602_16955;
var G__16965 = count__16603_16956;
var G__16966 = (i__16604_16957 + (1));
seq__16600_16954 = G__16963;
chunk__16602_16955 = G__16964;
count__16603_16956 = G__16965;
i__16604_16957 = G__16966;
continue;
}
} else {
var temp__5804__auto___16967__$1 = cljs.core.seq(seq__16600_16954);
if(temp__5804__auto___16967__$1){
var seq__16600_16968__$1 = temp__5804__auto___16967__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16600_16968__$1)){
var c__5568__auto___16969 = cljs.core.chunk_first(seq__16600_16968__$1);
var G__16970 = cljs.core.chunk_rest(seq__16600_16968__$1);
var G__16971 = c__5568__auto___16969;
var G__16972 = cljs.core.count(c__5568__auto___16969);
var G__16973 = (0);
seq__16600_16954 = G__16970;
chunk__16602_16955 = G__16971;
count__16603_16956 = G__16972;
i__16604_16957 = G__16973;
continue;
} else {
var child_16974 = cljs.core.first(seq__16600_16968__$1);
if(cljs.core.truth_(child_16974)){
node.appendChild(child_16974);


var G__16975 = cljs.core.next(seq__16600_16968__$1);
var G__16976 = null;
var G__16977 = (0);
var G__16978 = (0);
seq__16600_16954 = G__16975;
chunk__16602_16955 = G__16976;
count__16603_16956 = G__16977;
i__16604_16957 = G__16978;
continue;
} else {
var G__16979 = cljs.core.next(seq__16600_16968__$1);
var G__16980 = null;
var G__16981 = (0);
var G__16982 = (0);
seq__16600_16954 = G__16979;
chunk__16602_16955 = G__16980;
count__16603_16956 = G__16981;
i__16604_16957 = G__16982;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16953);
}
}


var G__16983 = cljs.core.next(seq__16576_16945__$1);
var G__16984 = null;
var G__16985 = (0);
var G__16986 = (0);
seq__16576_16894 = G__16983;
chunk__16578_16895 = G__16984;
count__16579_16896 = G__16985;
i__16580_16897 = G__16986;
continue;
} else {
var G__16987 = cljs.core.next(seq__16576_16945__$1);
var G__16988 = null;
var G__16989 = (0);
var G__16990 = (0);
seq__16576_16894 = G__16987;
chunk__16578_16895 = G__16988;
count__16579_16896 = G__16989;
i__16580_16897 = G__16990;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16991 = arguments.length;
var i__5770__auto___16992 = (0);
while(true){
if((i__5770__auto___16992 < len__5769__auto___16991)){
args__5775__auto__.push((arguments[i__5770__auto___16992]));

var G__16993 = (i__5770__auto___16992 + (1));
i__5770__auto___16992 = G__16993;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16606){
var G__16607 = cljs.core.first(seq16606);
var seq16606__$1 = cljs.core.next(seq16606);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16607,seq16606__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16609 = arguments.length;
switch (G__16609) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13437__auto___16995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_16614){
var state_val_16615 = (state_16614[(1)]);
if((state_val_16615 === (1))){
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16614__$1,(2),once_or_cleanup);
} else {
if((state_val_16615 === (2))){
var inst_16611 = (state_16614[(2)]);
var inst_16612 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16614__$1 = (function (){var statearr_16616 = state_16614;
(statearr_16616[(7)] = inst_16611);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16614__$1,inst_16612);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13319__auto__ = null;
var shadow$dom$state_machine__13319__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = shadow$dom$state_machine__13319__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var shadow$dom$state_machine__13319__auto____1 = (function (state_16614){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_16614);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e16618){var ex__13322__auto__ = e16618;
var statearr_16619_16996 = state_16614;
(statearr_16619_16996[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_16614[(4)]))){
var statearr_16620_16997 = state_16614;
(statearr_16620_16997[(1)] = cljs.core.first((state_16614[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16998 = state_16614;
state_16614 = G__16998;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
shadow$dom$state_machine__13319__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13319__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13319__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13319__auto____0;
shadow$dom$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13319__auto____1;
return shadow$dom$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_16621 = f__13438__auto__();
(statearr_16621[(6)] = c__13437__auto___16995);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
