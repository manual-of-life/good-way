goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19992,p__19993){
var map__19994 = p__19992;
var map__19994__$1 = cljs.core.__destructure_map(map__19994);
var svc = map__19994__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19994__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19994__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19994__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19995 = p__19993;
var map__19995__$1 = cljs.core.__destructure_map(map__19995);
var msg = map__19995__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19995__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19995__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19995__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19995__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20003,p__20004){
var map__20005 = p__20003;
var map__20005__$1 = cljs.core.__destructure_map(map__20005);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20006 = p__20004;
var map__20006__$1 = cljs.core.__destructure_map(map__20006);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20006__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20010,p__20011){
var map__20012 = p__20010;
var map__20012__$1 = cljs.core.__destructure_map(map__20012);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20012__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20012__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20013 = p__20011;
var map__20013__$1 = cljs.core.__destructure_map(map__20013);
var msg = map__20013__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20013__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20018,tid){
var map__20019 = p__20018;
var map__20019__$1 = cljs.core.__destructure_map(map__20019);
var svc = map__20019__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20019__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20033 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20034 = null;
var count__20035 = (0);
var i__20036 = (0);
while(true){
if((i__20036 < count__20035)){
var vec__20043 = chunk__20034.cljs$core$IIndexed$_nth$arity$2(null,i__20036);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20043,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20054 = seq__20033;
var G__20055 = chunk__20034;
var G__20056 = count__20035;
var G__20057 = (i__20036 + (1));
seq__20033 = G__20054;
chunk__20034 = G__20055;
count__20035 = G__20056;
i__20036 = G__20057;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20033);
if(temp__5804__auto__){
var seq__20033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20033__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20033__$1);
var G__20058 = cljs.core.chunk_rest(seq__20033__$1);
var G__20059 = c__5568__auto__;
var G__20060 = cljs.core.count(c__5568__auto__);
var G__20061 = (0);
seq__20033 = G__20058;
chunk__20034 = G__20059;
count__20035 = G__20060;
i__20036 = G__20061;
continue;
} else {
var vec__20047 = cljs.core.first(seq__20033__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20047,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20047,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20062 = cljs.core.next(seq__20033__$1);
var G__20063 = null;
var G__20064 = (0);
var G__20065 = (0);
seq__20033 = G__20062;
chunk__20034 = G__20063;
count__20035 = G__20064;
i__20036 = G__20065;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20022_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20022_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20023_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20023_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20024_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20024_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20025_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20025_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20051){
var map__20052 = p__20051;
var map__20052__$1 = cljs.core.__destructure_map(map__20052);
var svc = map__20052__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20052__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
