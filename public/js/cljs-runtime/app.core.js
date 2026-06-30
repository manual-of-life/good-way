goog.provide('app.core');
var module$node_modules$$tauri_apps$api$primitives_cjs=shadow.js.require("module$node_modules$$tauri_apps$api$primitives_cjs", {});
app.core.root = (function (){var _STAR_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var _STAR_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var handle_input = (function (new_value){
return cljs.core.reset_BANG_(_STAR_name,new_value);
});
var greet_BANG_ = (function (name){
return module$node_modules$$tauri_apps$api$primitives_cjs.invoke("greet",({"name": name})).then((function (res){
return cljs.core.reset_BANG_(_STAR_message,res);
}));
});
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Tauri!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://tauri.app",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/tauri.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"logo tauri",new cljs.core.Keyword(null,"alt","alt",-3214426),"Tauri logo"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://clojurescript.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/cljs.svg",new cljs.core.Keyword(null,"class","class",-2030961996),"logo tauri",new cljs.core.Keyword(null,"alt","alt",-3214426),"ClojureScript logo"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click on the Tauri, ClojureScript logos to learn more."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"greet-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21685_SHARP_){
return handle_input(p1__21685_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a name..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return greet_BANG_(cljs.core.deref(_STAR_name));
})], null),"Greet"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(_STAR_message)], null)], null);
});
})();
/**
 * Mount root component.
 */
app.core.mount_root = (function app$core$mount_root(){
var G__21690 = goog.dom.getElement("root");
if((G__21690 == null)){
return null;
} else {
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.root], null),G__21690);
}
});
/**
 * Application entry point.
 */
app.core.main = (function app$core$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21708 = arguments.length;
var i__5770__auto___21709 = (0);
while(true){
if((i__5770__auto___21709 < len__5769__auto___21708)){
args__5775__auto__.push((arguments[i__5770__auto___21709]));

var G__21710 = (i__5770__auto___21709 + (1));
i__5770__auto___21709 = G__21710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return app.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('app.core.main', app.core.main);

(app.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (_args){
return app.core.mount_root();
}));

(app.core.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.core.main.cljs$lang$applyTo = (function (seq21692){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21692));
}));


//# sourceMappingURL=app.core.js.map
