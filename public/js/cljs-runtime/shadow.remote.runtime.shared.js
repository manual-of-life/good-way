goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17692){
var map__17693 = p__17692;
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var runtime = map__17693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17752 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17752)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17694 = runtime;
var G__17695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17752);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17694,G__17695) : shadow.remote.runtime.shared.process.call(null,G__17694,G__17695));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17696,res){
var map__17697 = p__17696;
var map__17697__$1 = cljs.core.__destructure_map(map__17697);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17697__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17697__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17698 = res;
var G__17698__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17698,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17698);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17698__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17698__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17700 = arguments.length;
switch (G__17700) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17701,msg,handlers,timeout_after_ms){
var map__17702 = p__17701;
var map__17702__$1 = cljs.core.__destructure_map(map__17702);
var runtime = map__17702__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17756 = arguments.length;
var i__5770__auto___17757 = (0);
while(true){
if((i__5770__auto___17757 < len__5769__auto___17756)){
args__5775__auto__.push((arguments[i__5770__auto___17757]));

var G__17758 = (i__5770__auto___17757 + (1));
i__5770__auto___17757 = G__17758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17706,ev,args){
var map__17707 = p__17706;
var map__17707__$1 = cljs.core.__destructure_map(map__17707);
var runtime = map__17707__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17708 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17711 = null;
var count__17712 = (0);
var i__17713 = (0);
while(true){
if((i__17713 < count__17712)){
var ext = chunk__17711.cljs$core$IIndexed$_nth$arity$2(null,i__17713);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17759 = seq__17708;
var G__17760 = chunk__17711;
var G__17761 = count__17712;
var G__17762 = (i__17713 + (1));
seq__17708 = G__17759;
chunk__17711 = G__17760;
count__17712 = G__17761;
i__17713 = G__17762;
continue;
} else {
var G__17763 = seq__17708;
var G__17764 = chunk__17711;
var G__17765 = count__17712;
var G__17766 = (i__17713 + (1));
seq__17708 = G__17763;
chunk__17711 = G__17764;
count__17712 = G__17765;
i__17713 = G__17766;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17708);
if(temp__5804__auto__){
var seq__17708__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17708__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17708__$1);
var G__17767 = cljs.core.chunk_rest(seq__17708__$1);
var G__17768 = c__5568__auto__;
var G__17769 = cljs.core.count(c__5568__auto__);
var G__17770 = (0);
seq__17708 = G__17767;
chunk__17711 = G__17768;
count__17712 = G__17769;
i__17713 = G__17770;
continue;
} else {
var ext = cljs.core.first(seq__17708__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17771 = cljs.core.next(seq__17708__$1);
var G__17772 = null;
var G__17773 = (0);
var G__17774 = (0);
seq__17708 = G__17771;
chunk__17711 = G__17772;
count__17712 = G__17773;
i__17713 = G__17774;
continue;
} else {
var G__17775 = cljs.core.next(seq__17708__$1);
var G__17776 = null;
var G__17777 = (0);
var G__17778 = (0);
seq__17708 = G__17775;
chunk__17711 = G__17776;
count__17712 = G__17777;
i__17713 = G__17778;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17703){
var G__17704 = cljs.core.first(seq17703);
var seq17703__$1 = cljs.core.next(seq17703);
var G__17705 = cljs.core.first(seq17703__$1);
var seq17703__$2 = cljs.core.next(seq17703__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17704,G__17705,seq17703__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17716,p__17717){
var map__17718 = p__17716;
var map__17718__$1 = cljs.core.__destructure_map(map__17718);
var runtime = map__17718__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17718__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17719 = p__17717;
var map__17719__$1 = cljs.core.__destructure_map(map__17719);
var msg = map__17719__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17720 = cljs.core.deref(state_ref);
var map__17720__$1 = cljs.core.__destructure_map(map__17720);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17720__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17720__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17721,msg){
var map__17722 = p__17721;
var map__17722__$1 = cljs.core.__destructure_map(map__17722);
var runtime = map__17722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17723,key,p__17724){
var map__17725 = p__17723;
var map__17725__$1 = cljs.core.__destructure_map(map__17725);
var state = map__17725__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17725__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17726 = p__17724;
var map__17726__$1 = cljs.core.__destructure_map(map__17726);
var spec = map__17726__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17727,key,spec){
var map__17728 = p__17727;
var map__17728__$1 = cljs.core.__destructure_map(map__17728);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17728__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17729_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17729_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17730_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17730_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17731_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17731_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17732_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17732_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17733_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17733_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17734,key){
var map__17735 = p__17734;
var map__17735__$1 = cljs.core.__destructure_map(map__17735);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17736,msg){
var map__17737 = p__17736;
var map__17737__$1 = cljs.core.__destructure_map(map__17737);
var runtime = map__17737__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17737__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17738,p__17739){
var map__17740 = p__17738;
var map__17740__$1 = cljs.core.__destructure_map(map__17740);
var runtime = map__17740__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17741 = p__17739;
var map__17741__$1 = cljs.core.__destructure_map(map__17741);
var msg = map__17741__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17741__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17741__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17742 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17744 = null;
var count__17745 = (0);
var i__17746 = (0);
while(true){
if((i__17746 < count__17745)){
var map__17750 = chunk__17744.cljs$core$IIndexed$_nth$arity$2(null,i__17746);
var map__17750__$1 = cljs.core.__destructure_map(map__17750);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17779 = seq__17742;
var G__17780 = chunk__17744;
var G__17781 = count__17745;
var G__17782 = (i__17746 + (1));
seq__17742 = G__17779;
chunk__17744 = G__17780;
count__17745 = G__17781;
i__17746 = G__17782;
continue;
} else {
var G__17783 = seq__17742;
var G__17784 = chunk__17744;
var G__17785 = count__17745;
var G__17786 = (i__17746 + (1));
seq__17742 = G__17783;
chunk__17744 = G__17784;
count__17745 = G__17785;
i__17746 = G__17786;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17742);
if(temp__5804__auto__){
var seq__17742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17742__$1);
var G__17787 = cljs.core.chunk_rest(seq__17742__$1);
var G__17788 = c__5568__auto__;
var G__17789 = cljs.core.count(c__5568__auto__);
var G__17790 = (0);
seq__17742 = G__17787;
chunk__17744 = G__17788;
count__17745 = G__17789;
i__17746 = G__17790;
continue;
} else {
var map__17751 = cljs.core.first(seq__17742__$1);
var map__17751__$1 = cljs.core.__destructure_map(map__17751);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17751__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17791 = cljs.core.next(seq__17742__$1);
var G__17792 = null;
var G__17793 = (0);
var G__17794 = (0);
seq__17742 = G__17791;
chunk__17744 = G__17792;
count__17745 = G__17793;
i__17746 = G__17794;
continue;
} else {
var G__17795 = cljs.core.next(seq__17742__$1);
var G__17796 = null;
var G__17797 = (0);
var G__17798 = (0);
seq__17742 = G__17795;
chunk__17744 = G__17796;
count__17745 = G__17797;
i__17746 = G__17798;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
