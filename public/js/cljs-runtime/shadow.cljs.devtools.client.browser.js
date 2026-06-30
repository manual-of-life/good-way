goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20960 = arguments.length;
var i__5770__auto___20961 = (0);
while(true){
if((i__5770__auto___20961 < len__5769__auto___20960)){
args__5775__auto__.push((arguments[i__5770__auto___20961]));

var G__20962 = (i__5770__auto___20961 + (1));
i__5770__auto___20961 = G__20962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20567){
var G__20568 = cljs.core.first(seq20567);
var seq20567__$1 = cljs.core.next(seq20567);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20568,seq20567__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20575 = cljs.core.seq(sources);
var chunk__20576 = null;
var count__20577 = (0);
var i__20578 = (0);
while(true){
if((i__20578 < count__20577)){
var map__20584 = chunk__20576.cljs$core$IIndexed$_nth$arity$2(null,i__20578);
var map__20584__$1 = cljs.core.__destructure_map(map__20584);
var src = map__20584__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20585){var e_20965 = e20585;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20965);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20965.message)].join('')));
}

var G__20966 = seq__20575;
var G__20967 = chunk__20576;
var G__20968 = count__20577;
var G__20969 = (i__20578 + (1));
seq__20575 = G__20966;
chunk__20576 = G__20967;
count__20577 = G__20968;
i__20578 = G__20969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20575);
if(temp__5804__auto__){
var seq__20575__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20575__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20575__$1);
var G__20970 = cljs.core.chunk_rest(seq__20575__$1);
var G__20971 = c__5568__auto__;
var G__20972 = cljs.core.count(c__5568__auto__);
var G__20973 = (0);
seq__20575 = G__20970;
chunk__20576 = G__20971;
count__20577 = G__20972;
i__20578 = G__20973;
continue;
} else {
var map__20586 = cljs.core.first(seq__20575__$1);
var map__20586__$1 = cljs.core.__destructure_map(map__20586);
var src = map__20586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20587){var e_20974 = e20587;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20974);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20974.message)].join('')));
}

var G__20975 = cljs.core.next(seq__20575__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20575 = G__20975;
chunk__20576 = G__20976;
count__20577 = G__20977;
i__20578 = G__20978;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20588 = cljs.core.seq(js_requires);
var chunk__20589 = null;
var count__20590 = (0);
var i__20591 = (0);
while(true){
if((i__20591 < count__20590)){
var js_ns = chunk__20589.cljs$core$IIndexed$_nth$arity$2(null,i__20591);
var require_str_20979 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20979);


var G__20980 = seq__20588;
var G__20981 = chunk__20589;
var G__20982 = count__20590;
var G__20983 = (i__20591 + (1));
seq__20588 = G__20980;
chunk__20589 = G__20981;
count__20590 = G__20982;
i__20591 = G__20983;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20588);
if(temp__5804__auto__){
var seq__20588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20588__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20588__$1);
var G__20984 = cljs.core.chunk_rest(seq__20588__$1);
var G__20985 = c__5568__auto__;
var G__20986 = cljs.core.count(c__5568__auto__);
var G__20987 = (0);
seq__20588 = G__20984;
chunk__20589 = G__20985;
count__20590 = G__20986;
i__20591 = G__20987;
continue;
} else {
var js_ns = cljs.core.first(seq__20588__$1);
var require_str_20988 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20988);


var G__20989 = cljs.core.next(seq__20588__$1);
var G__20990 = null;
var G__20991 = (0);
var G__20992 = (0);
seq__20588 = G__20989;
chunk__20589 = G__20990;
count__20590 = G__20991;
i__20591 = G__20992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20593){
var map__20594 = p__20593;
var map__20594__$1 = cljs.core.__destructure_map(map__20594);
var msg = map__20594__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20594__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20594__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20597(s__20598){
return (new cljs.core.LazySeq(null,(function (){
var s__20598__$1 = s__20598;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20598__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20607 = cljs.core.first(xs__6360__auto__);
var map__20607__$1 = cljs.core.__destructure_map(map__20607);
var src = map__20607__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20598__$1,map__20607,map__20607__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20597_$_iter__20599(s__20600){
return (new cljs.core.LazySeq(null,((function (s__20598__$1,map__20607,map__20607__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info){
return (function (){
var s__20600__$1 = s__20600;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20600__$1);
if(temp__5804__auto____$1){
var s__20600__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20600__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20600__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20602 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20601 = (0);
while(true){
if((i__20601 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20601);
cljs.core.chunk_append(b__20602,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20994 = (i__20601 + (1));
i__20601 = G__20994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20602),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20597_$_iter__20599(cljs.core.chunk_rest(s__20600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20602),null);
}
} else {
var warning = cljs.core.first(s__20600__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20597_$_iter__20599(cljs.core.rest(s__20600__$2)));
}
} else {
return null;
}
break;
}
});})(s__20598__$1,map__20607,map__20607__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info))
,null,null));
});})(s__20598__$1,map__20607,map__20607__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20597(cljs.core.rest(s__20598__$1)));
} else {
var G__20995 = cljs.core.rest(s__20598__$1);
s__20598__$1 = G__20995;
continue;
}
} else {
var G__20996 = cljs.core.rest(s__20598__$1);
s__20598__$1 = G__20996;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20618_20997 = cljs.core.seq(warnings);
var chunk__20619_20998 = null;
var count__20620_20999 = (0);
var i__20621_21000 = (0);
while(true){
if((i__20621_21000 < count__20620_20999)){
var map__20628_21001 = chunk__20619_20998.cljs$core$IIndexed$_nth$arity$2(null,i__20621_21000);
var map__20628_21002__$1 = cljs.core.__destructure_map(map__20628_21001);
var w_21003 = map__20628_21002__$1;
var msg_21004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628_21002__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628_21002__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628_21002__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628_21002__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21007)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21005),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21006),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21004__$1)].join(''));


var G__21008 = seq__20618_20997;
var G__21009 = chunk__20619_20998;
var G__21010 = count__20620_20999;
var G__21011 = (i__20621_21000 + (1));
seq__20618_20997 = G__21008;
chunk__20619_20998 = G__21009;
count__20620_20999 = G__21010;
i__20621_21000 = G__21011;
continue;
} else {
var temp__5804__auto___21012 = cljs.core.seq(seq__20618_20997);
if(temp__5804__auto___21012){
var seq__20618_21013__$1 = temp__5804__auto___21012;
if(cljs.core.chunked_seq_QMARK_(seq__20618_21013__$1)){
var c__5568__auto___21014 = cljs.core.chunk_first(seq__20618_21013__$1);
var G__21015 = cljs.core.chunk_rest(seq__20618_21013__$1);
var G__21016 = c__5568__auto___21014;
var G__21017 = cljs.core.count(c__5568__auto___21014);
var G__21018 = (0);
seq__20618_20997 = G__21015;
chunk__20619_20998 = G__21016;
count__20620_20999 = G__21017;
i__20621_21000 = G__21018;
continue;
} else {
var map__20629_21019 = cljs.core.first(seq__20618_21013__$1);
var map__20629_21020__$1 = cljs.core.__destructure_map(map__20629_21019);
var w_21021 = map__20629_21020__$1;
var msg_21022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629_21020__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629_21020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629_21020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20629_21020__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21025)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21023),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21024),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21022__$1)].join(''));


var G__21026 = cljs.core.next(seq__20618_21013__$1);
var G__21027 = null;
var G__21028 = (0);
var G__21029 = (0);
seq__20618_20997 = G__21026;
chunk__20619_20998 = G__21027;
count__20620_20999 = G__21028;
i__20621_21000 = G__21029;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20592_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20592_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20636){
var map__20637 = p__20636;
var map__20637__$1 = cljs.core.__destructure_map(map__20637);
var msg = map__20637__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20639 = cljs.core.seq(updates);
var chunk__20641 = null;
var count__20642 = (0);
var i__20643 = (0);
while(true){
if((i__20643 < count__20642)){
var path = chunk__20641.cljs$core$IIndexed$_nth$arity$2(null,i__20643);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20815_21032 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20819_21033 = null;
var count__20820_21034 = (0);
var i__20821_21035 = (0);
while(true){
if((i__20821_21035 < count__20820_21034)){
var node_21036 = chunk__20819_21033.cljs$core$IIndexed$_nth$arity$2(null,i__20821_21035);
if(cljs.core.not(node_21036.shadow$old)){
var path_match_21037 = shadow.cljs.devtools.client.browser.match_paths(node_21036.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21037)){
var new_link_21038 = (function (){var G__20855 = node_21036.cloneNode(true);
G__20855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21037),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20855;
})();
(node_21036.shadow$old = true);

(new_link_21038.onload = ((function (seq__20815_21032,chunk__20819_21033,count__20820_21034,i__20821_21035,seq__20639,chunk__20641,count__20642,i__20643,new_link_21038,path_match_21037,node_21036,path,map__20637,map__20637__$1,msg,updates,reload_info){
return (function (e){
var seq__20856_21039 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20858_21040 = null;
var count__20859_21041 = (0);
var i__20860_21042 = (0);
while(true){
if((i__20860_21042 < count__20859_21041)){
var map__20864_21043 = chunk__20858_21040.cljs$core$IIndexed$_nth$arity$2(null,i__20860_21042);
var map__20864_21044__$1 = cljs.core.__destructure_map(map__20864_21043);
var task_21045 = map__20864_21044__$1;
var fn_str_21046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864_21044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864_21044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21048 = goog.getObjectByName(fn_str_21046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21047)].join(''));

(fn_obj_21048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21048.cljs$core$IFn$_invoke$arity$2(path,new_link_21038) : fn_obj_21048.call(null,path,new_link_21038));


var G__21050 = seq__20856_21039;
var G__21051 = chunk__20858_21040;
var G__21052 = count__20859_21041;
var G__21053 = (i__20860_21042 + (1));
seq__20856_21039 = G__21050;
chunk__20858_21040 = G__21051;
count__20859_21041 = G__21052;
i__20860_21042 = G__21053;
continue;
} else {
var temp__5804__auto___21054 = cljs.core.seq(seq__20856_21039);
if(temp__5804__auto___21054){
var seq__20856_21055__$1 = temp__5804__auto___21054;
if(cljs.core.chunked_seq_QMARK_(seq__20856_21055__$1)){
var c__5568__auto___21056 = cljs.core.chunk_first(seq__20856_21055__$1);
var G__21057 = cljs.core.chunk_rest(seq__20856_21055__$1);
var G__21058 = c__5568__auto___21056;
var G__21059 = cljs.core.count(c__5568__auto___21056);
var G__21060 = (0);
seq__20856_21039 = G__21057;
chunk__20858_21040 = G__21058;
count__20859_21041 = G__21059;
i__20860_21042 = G__21060;
continue;
} else {
var map__20866_21061 = cljs.core.first(seq__20856_21055__$1);
var map__20866_21062__$1 = cljs.core.__destructure_map(map__20866_21061);
var task_21063 = map__20866_21062__$1;
var fn_str_21064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866_21062__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866_21062__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21066 = goog.getObjectByName(fn_str_21064,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21065)].join(''));

(fn_obj_21066.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21066.cljs$core$IFn$_invoke$arity$2(path,new_link_21038) : fn_obj_21066.call(null,path,new_link_21038));


var G__21067 = cljs.core.next(seq__20856_21055__$1);
var G__21068 = null;
var G__21069 = (0);
var G__21070 = (0);
seq__20856_21039 = G__21067;
chunk__20858_21040 = G__21068;
count__20859_21041 = G__21069;
i__20860_21042 = G__21070;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21036);
});})(seq__20815_21032,chunk__20819_21033,count__20820_21034,i__20821_21035,seq__20639,chunk__20641,count__20642,i__20643,new_link_21038,path_match_21037,node_21036,path,map__20637,map__20637__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21037], 0));

goog.dom.insertSiblingAfter(new_link_21038,node_21036);


var G__21072 = seq__20815_21032;
var G__21073 = chunk__20819_21033;
var G__21074 = count__20820_21034;
var G__21075 = (i__20821_21035 + (1));
seq__20815_21032 = G__21072;
chunk__20819_21033 = G__21073;
count__20820_21034 = G__21074;
i__20821_21035 = G__21075;
continue;
} else {
var G__21076 = seq__20815_21032;
var G__21077 = chunk__20819_21033;
var G__21078 = count__20820_21034;
var G__21079 = (i__20821_21035 + (1));
seq__20815_21032 = G__21076;
chunk__20819_21033 = G__21077;
count__20820_21034 = G__21078;
i__20821_21035 = G__21079;
continue;
}
} else {
var G__21080 = seq__20815_21032;
var G__21081 = chunk__20819_21033;
var G__21082 = count__20820_21034;
var G__21083 = (i__20821_21035 + (1));
seq__20815_21032 = G__21080;
chunk__20819_21033 = G__21081;
count__20820_21034 = G__21082;
i__20821_21035 = G__21083;
continue;
}
} else {
var temp__5804__auto___21084 = cljs.core.seq(seq__20815_21032);
if(temp__5804__auto___21084){
var seq__20815_21085__$1 = temp__5804__auto___21084;
if(cljs.core.chunked_seq_QMARK_(seq__20815_21085__$1)){
var c__5568__auto___21086 = cljs.core.chunk_first(seq__20815_21085__$1);
var G__21087 = cljs.core.chunk_rest(seq__20815_21085__$1);
var G__21088 = c__5568__auto___21086;
var G__21089 = cljs.core.count(c__5568__auto___21086);
var G__21090 = (0);
seq__20815_21032 = G__21087;
chunk__20819_21033 = G__21088;
count__20820_21034 = G__21089;
i__20821_21035 = G__21090;
continue;
} else {
var node_21091 = cljs.core.first(seq__20815_21085__$1);
if(cljs.core.not(node_21091.shadow$old)){
var path_match_21092 = shadow.cljs.devtools.client.browser.match_paths(node_21091.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21092)){
var new_link_21093 = (function (){var G__20867 = node_21091.cloneNode(true);
G__20867.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21092),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20867;
})();
(node_21091.shadow$old = true);

(new_link_21093.onload = ((function (seq__20815_21032,chunk__20819_21033,count__20820_21034,i__20821_21035,seq__20639,chunk__20641,count__20642,i__20643,new_link_21093,path_match_21092,node_21091,seq__20815_21085__$1,temp__5804__auto___21084,path,map__20637,map__20637__$1,msg,updates,reload_info){
return (function (e){
var seq__20868_21097 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20870_21098 = null;
var count__20871_21099 = (0);
var i__20872_21100 = (0);
while(true){
if((i__20872_21100 < count__20871_21099)){
var map__20876_21101 = chunk__20870_21098.cljs$core$IIndexed$_nth$arity$2(null,i__20872_21100);
var map__20876_21102__$1 = cljs.core.__destructure_map(map__20876_21101);
var task_21103 = map__20876_21102__$1;
var fn_str_21104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21102__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21102__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21106 = goog.getObjectByName(fn_str_21104,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21105)].join(''));

(fn_obj_21106.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21106.cljs$core$IFn$_invoke$arity$2(path,new_link_21093) : fn_obj_21106.call(null,path,new_link_21093));


var G__21107 = seq__20868_21097;
var G__21108 = chunk__20870_21098;
var G__21109 = count__20871_21099;
var G__21110 = (i__20872_21100 + (1));
seq__20868_21097 = G__21107;
chunk__20870_21098 = G__21108;
count__20871_21099 = G__21109;
i__20872_21100 = G__21110;
continue;
} else {
var temp__5804__auto___21111__$1 = cljs.core.seq(seq__20868_21097);
if(temp__5804__auto___21111__$1){
var seq__20868_21112__$1 = temp__5804__auto___21111__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20868_21112__$1)){
var c__5568__auto___21113 = cljs.core.chunk_first(seq__20868_21112__$1);
var G__21114 = cljs.core.chunk_rest(seq__20868_21112__$1);
var G__21115 = c__5568__auto___21113;
var G__21116 = cljs.core.count(c__5568__auto___21113);
var G__21117 = (0);
seq__20868_21097 = G__21114;
chunk__20870_21098 = G__21115;
count__20871_21099 = G__21116;
i__20872_21100 = G__21117;
continue;
} else {
var map__20877_21118 = cljs.core.first(seq__20868_21112__$1);
var map__20877_21119__$1 = cljs.core.__destructure_map(map__20877_21118);
var task_21120 = map__20877_21119__$1;
var fn_str_21121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21119__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21119__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21123 = goog.getObjectByName(fn_str_21121,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21122)].join(''));

(fn_obj_21123.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21123.cljs$core$IFn$_invoke$arity$2(path,new_link_21093) : fn_obj_21123.call(null,path,new_link_21093));


var G__21124 = cljs.core.next(seq__20868_21112__$1);
var G__21125 = null;
var G__21126 = (0);
var G__21127 = (0);
seq__20868_21097 = G__21124;
chunk__20870_21098 = G__21125;
count__20871_21099 = G__21126;
i__20872_21100 = G__21127;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21091);
});})(seq__20815_21032,chunk__20819_21033,count__20820_21034,i__20821_21035,seq__20639,chunk__20641,count__20642,i__20643,new_link_21093,path_match_21092,node_21091,seq__20815_21085__$1,temp__5804__auto___21084,path,map__20637,map__20637__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21092], 0));

goog.dom.insertSiblingAfter(new_link_21093,node_21091);


var G__21128 = cljs.core.next(seq__20815_21085__$1);
var G__21129 = null;
var G__21130 = (0);
var G__21131 = (0);
seq__20815_21032 = G__21128;
chunk__20819_21033 = G__21129;
count__20820_21034 = G__21130;
i__20821_21035 = G__21131;
continue;
} else {
var G__21132 = cljs.core.next(seq__20815_21085__$1);
var G__21133 = null;
var G__21134 = (0);
var G__21135 = (0);
seq__20815_21032 = G__21132;
chunk__20819_21033 = G__21133;
count__20820_21034 = G__21134;
i__20821_21035 = G__21135;
continue;
}
} else {
var G__21136 = cljs.core.next(seq__20815_21085__$1);
var G__21137 = null;
var G__21138 = (0);
var G__21139 = (0);
seq__20815_21032 = G__21136;
chunk__20819_21033 = G__21137;
count__20820_21034 = G__21138;
i__20821_21035 = G__21139;
continue;
}
}
} else {
}
}
break;
}


var G__21140 = seq__20639;
var G__21141 = chunk__20641;
var G__21142 = count__20642;
var G__21143 = (i__20643 + (1));
seq__20639 = G__21140;
chunk__20641 = G__21141;
count__20642 = G__21142;
i__20643 = G__21143;
continue;
} else {
var G__21144 = seq__20639;
var G__21145 = chunk__20641;
var G__21146 = count__20642;
var G__21147 = (i__20643 + (1));
seq__20639 = G__21144;
chunk__20641 = G__21145;
count__20642 = G__21146;
i__20643 = G__21147;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20639);
if(temp__5804__auto__){
var seq__20639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20639__$1);
var G__21148 = cljs.core.chunk_rest(seq__20639__$1);
var G__21149 = c__5568__auto__;
var G__21150 = cljs.core.count(c__5568__auto__);
var G__21151 = (0);
seq__20639 = G__21148;
chunk__20641 = G__21149;
count__20642 = G__21150;
i__20643 = G__21151;
continue;
} else {
var path = cljs.core.first(seq__20639__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20878_21152 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20882_21153 = null;
var count__20883_21154 = (0);
var i__20884_21155 = (0);
while(true){
if((i__20884_21155 < count__20883_21154)){
var node_21156 = chunk__20882_21153.cljs$core$IIndexed$_nth$arity$2(null,i__20884_21155);
if(cljs.core.not(node_21156.shadow$old)){
var path_match_21157 = shadow.cljs.devtools.client.browser.match_paths(node_21156.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21157)){
var new_link_21158 = (function (){var G__20910 = node_21156.cloneNode(true);
G__20910.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21157),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20910;
})();
(node_21156.shadow$old = true);

(new_link_21158.onload = ((function (seq__20878_21152,chunk__20882_21153,count__20883_21154,i__20884_21155,seq__20639,chunk__20641,count__20642,i__20643,new_link_21158,path_match_21157,node_21156,path,seq__20639__$1,temp__5804__auto__,map__20637,map__20637__$1,msg,updates,reload_info){
return (function (e){
var seq__20911_21159 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20913_21160 = null;
var count__20914_21161 = (0);
var i__20915_21162 = (0);
while(true){
if((i__20915_21162 < count__20914_21161)){
var map__20919_21163 = chunk__20913_21160.cljs$core$IIndexed$_nth$arity$2(null,i__20915_21162);
var map__20919_21164__$1 = cljs.core.__destructure_map(map__20919_21163);
var task_21165 = map__20919_21164__$1;
var fn_str_21166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21164__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20919_21164__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21168 = goog.getObjectByName(fn_str_21166,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21167)].join(''));

(fn_obj_21168.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21168.cljs$core$IFn$_invoke$arity$2(path,new_link_21158) : fn_obj_21168.call(null,path,new_link_21158));


var G__21169 = seq__20911_21159;
var G__21170 = chunk__20913_21160;
var G__21171 = count__20914_21161;
var G__21172 = (i__20915_21162 + (1));
seq__20911_21159 = G__21169;
chunk__20913_21160 = G__21170;
count__20914_21161 = G__21171;
i__20915_21162 = G__21172;
continue;
} else {
var temp__5804__auto___21173__$1 = cljs.core.seq(seq__20911_21159);
if(temp__5804__auto___21173__$1){
var seq__20911_21174__$1 = temp__5804__auto___21173__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20911_21174__$1)){
var c__5568__auto___21175 = cljs.core.chunk_first(seq__20911_21174__$1);
var G__21176 = cljs.core.chunk_rest(seq__20911_21174__$1);
var G__21177 = c__5568__auto___21175;
var G__21178 = cljs.core.count(c__5568__auto___21175);
var G__21179 = (0);
seq__20911_21159 = G__21176;
chunk__20913_21160 = G__21177;
count__20914_21161 = G__21178;
i__20915_21162 = G__21179;
continue;
} else {
var map__20920_21180 = cljs.core.first(seq__20911_21174__$1);
var map__20920_21181__$1 = cljs.core.__destructure_map(map__20920_21180);
var task_21182 = map__20920_21181__$1;
var fn_str_21183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21181__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920_21181__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21185 = goog.getObjectByName(fn_str_21183,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21184)].join(''));

(fn_obj_21185.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21185.cljs$core$IFn$_invoke$arity$2(path,new_link_21158) : fn_obj_21185.call(null,path,new_link_21158));


var G__21186 = cljs.core.next(seq__20911_21174__$1);
var G__21187 = null;
var G__21188 = (0);
var G__21189 = (0);
seq__20911_21159 = G__21186;
chunk__20913_21160 = G__21187;
count__20914_21161 = G__21188;
i__20915_21162 = G__21189;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21156);
});})(seq__20878_21152,chunk__20882_21153,count__20883_21154,i__20884_21155,seq__20639,chunk__20641,count__20642,i__20643,new_link_21158,path_match_21157,node_21156,path,seq__20639__$1,temp__5804__auto__,map__20637,map__20637__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21157], 0));

goog.dom.insertSiblingAfter(new_link_21158,node_21156);


var G__21190 = seq__20878_21152;
var G__21191 = chunk__20882_21153;
var G__21192 = count__20883_21154;
var G__21193 = (i__20884_21155 + (1));
seq__20878_21152 = G__21190;
chunk__20882_21153 = G__21191;
count__20883_21154 = G__21192;
i__20884_21155 = G__21193;
continue;
} else {
var G__21194 = seq__20878_21152;
var G__21195 = chunk__20882_21153;
var G__21196 = count__20883_21154;
var G__21197 = (i__20884_21155 + (1));
seq__20878_21152 = G__21194;
chunk__20882_21153 = G__21195;
count__20883_21154 = G__21196;
i__20884_21155 = G__21197;
continue;
}
} else {
var G__21198 = seq__20878_21152;
var G__21199 = chunk__20882_21153;
var G__21200 = count__20883_21154;
var G__21201 = (i__20884_21155 + (1));
seq__20878_21152 = G__21198;
chunk__20882_21153 = G__21199;
count__20883_21154 = G__21200;
i__20884_21155 = G__21201;
continue;
}
} else {
var temp__5804__auto___21202__$1 = cljs.core.seq(seq__20878_21152);
if(temp__5804__auto___21202__$1){
var seq__20878_21203__$1 = temp__5804__auto___21202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20878_21203__$1)){
var c__5568__auto___21204 = cljs.core.chunk_first(seq__20878_21203__$1);
var G__21205 = cljs.core.chunk_rest(seq__20878_21203__$1);
var G__21206 = c__5568__auto___21204;
var G__21207 = cljs.core.count(c__5568__auto___21204);
var G__21208 = (0);
seq__20878_21152 = G__21205;
chunk__20882_21153 = G__21206;
count__20883_21154 = G__21207;
i__20884_21155 = G__21208;
continue;
} else {
var node_21209 = cljs.core.first(seq__20878_21203__$1);
if(cljs.core.not(node_21209.shadow$old)){
var path_match_21210 = shadow.cljs.devtools.client.browser.match_paths(node_21209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21210)){
var new_link_21211 = (function (){var G__20921 = node_21209.cloneNode(true);
G__20921.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20921;
})();
(node_21209.shadow$old = true);

(new_link_21211.onload = ((function (seq__20878_21152,chunk__20882_21153,count__20883_21154,i__20884_21155,seq__20639,chunk__20641,count__20642,i__20643,new_link_21211,path_match_21210,node_21209,seq__20878_21203__$1,temp__5804__auto___21202__$1,path,seq__20639__$1,temp__5804__auto__,map__20637,map__20637__$1,msg,updates,reload_info){
return (function (e){
var seq__20922_21212 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20924_21213 = null;
var count__20925_21214 = (0);
var i__20926_21215 = (0);
while(true){
if((i__20926_21215 < count__20925_21214)){
var map__20930_21216 = chunk__20924_21213.cljs$core$IIndexed$_nth$arity$2(null,i__20926_21215);
var map__20930_21217__$1 = cljs.core.__destructure_map(map__20930_21216);
var task_21218 = map__20930_21217__$1;
var fn_str_21219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930_21217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930_21217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21221 = goog.getObjectByName(fn_str_21219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21220)].join(''));

(fn_obj_21221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21221.cljs$core$IFn$_invoke$arity$2(path,new_link_21211) : fn_obj_21221.call(null,path,new_link_21211));


var G__21222 = seq__20922_21212;
var G__21223 = chunk__20924_21213;
var G__21224 = count__20925_21214;
var G__21225 = (i__20926_21215 + (1));
seq__20922_21212 = G__21222;
chunk__20924_21213 = G__21223;
count__20925_21214 = G__21224;
i__20926_21215 = G__21225;
continue;
} else {
var temp__5804__auto___21226__$2 = cljs.core.seq(seq__20922_21212);
if(temp__5804__auto___21226__$2){
var seq__20922_21227__$1 = temp__5804__auto___21226__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20922_21227__$1)){
var c__5568__auto___21228 = cljs.core.chunk_first(seq__20922_21227__$1);
var G__21229 = cljs.core.chunk_rest(seq__20922_21227__$1);
var G__21230 = c__5568__auto___21228;
var G__21231 = cljs.core.count(c__5568__auto___21228);
var G__21232 = (0);
seq__20922_21212 = G__21229;
chunk__20924_21213 = G__21230;
count__20925_21214 = G__21231;
i__20926_21215 = G__21232;
continue;
} else {
var map__20931_21233 = cljs.core.first(seq__20922_21227__$1);
var map__20931_21234__$1 = cljs.core.__destructure_map(map__20931_21233);
var task_21235 = map__20931_21234__$1;
var fn_str_21236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931_21234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931_21234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21238 = goog.getObjectByName(fn_str_21236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21237)].join(''));

(fn_obj_21238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21238.cljs$core$IFn$_invoke$arity$2(path,new_link_21211) : fn_obj_21238.call(null,path,new_link_21211));


var G__21239 = cljs.core.next(seq__20922_21227__$1);
var G__21240 = null;
var G__21241 = (0);
var G__21242 = (0);
seq__20922_21212 = G__21239;
chunk__20924_21213 = G__21240;
count__20925_21214 = G__21241;
i__20926_21215 = G__21242;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21209);
});})(seq__20878_21152,chunk__20882_21153,count__20883_21154,i__20884_21155,seq__20639,chunk__20641,count__20642,i__20643,new_link_21211,path_match_21210,node_21209,seq__20878_21203__$1,temp__5804__auto___21202__$1,path,seq__20639__$1,temp__5804__auto__,map__20637,map__20637__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21210], 0));

goog.dom.insertSiblingAfter(new_link_21211,node_21209);


var G__21243 = cljs.core.next(seq__20878_21203__$1);
var G__21244 = null;
var G__21245 = (0);
var G__21246 = (0);
seq__20878_21152 = G__21243;
chunk__20882_21153 = G__21244;
count__20883_21154 = G__21245;
i__20884_21155 = G__21246;
continue;
} else {
var G__21247 = cljs.core.next(seq__20878_21203__$1);
var G__21248 = null;
var G__21249 = (0);
var G__21250 = (0);
seq__20878_21152 = G__21247;
chunk__20882_21153 = G__21248;
count__20883_21154 = G__21249;
i__20884_21155 = G__21250;
continue;
}
} else {
var G__21251 = cljs.core.next(seq__20878_21203__$1);
var G__21252 = null;
var G__21253 = (0);
var G__21254 = (0);
seq__20878_21152 = G__21251;
chunk__20882_21153 = G__21252;
count__20883_21154 = G__21253;
i__20884_21155 = G__21254;
continue;
}
}
} else {
}
}
break;
}


var G__21255 = cljs.core.next(seq__20639__$1);
var G__21256 = null;
var G__21257 = (0);
var G__21258 = (0);
seq__20639 = G__21255;
chunk__20641 = G__21256;
count__20642 = G__21257;
i__20643 = G__21258;
continue;
} else {
var G__21259 = cljs.core.next(seq__20639__$1);
var G__21260 = null;
var G__21261 = (0);
var G__21262 = (0);
seq__20639 = G__21259;
chunk__20641 = G__21260;
count__20642 = G__21261;
i__20643 = G__21262;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20937){
var map__20938 = p__20937;
var map__20938__$1 = cljs.core.__destructure_map(map__20938);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20939,done,error){
var map__20940 = p__20939;
var map__20940__$1 = cljs.core.__destructure_map(map__20940);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20940__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20941,done,error){
var map__20942 = p__20941;
var map__20942__$1 = cljs.core.__destructure_map(map__20942);
var msg = map__20942__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20943){
var map__20944 = p__20943;
var map__20944__$1 = cljs.core.__destructure_map(map__20944);
var src = map__20944__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20945 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20945) : done.call(null,G__20945));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20946){
var map__20947 = p__20946;
var map__20947__$1 = cljs.core.__destructure_map(map__20947);
var msg__$1 = map__20947__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20947__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20948){var ex = e20948;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20949){
var map__20950 = p__20949;
var map__20950__$1 = cljs.core.__destructure_map(map__20950);
var env = map__20950__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20950__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20956){
var map__20957 = p__20956;
var map__20957__$1 = cljs.core.__destructure_map(map__20957);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20958){
var map__20959 = p__20958;
var map__20959__$1 = cljs.core.__destructure_map(map__20959);
var svc = map__20959__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
