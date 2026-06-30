goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19221){
var map__19224 = p__19221;
var map__19224__$1 = cljs.core.__destructure_map(map__19224);
var m = map__19224__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19228_19566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19229_19567 = null;
var count__19230_19568 = (0);
var i__19231_19569 = (0);
while(true){
if((i__19231_19569 < count__19230_19568)){
var f_19570 = chunk__19229_19567.cljs$core$IIndexed$_nth$arity$2(null,i__19231_19569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19570], 0));


var G__19571 = seq__19228_19566;
var G__19572 = chunk__19229_19567;
var G__19573 = count__19230_19568;
var G__19574 = (i__19231_19569 + (1));
seq__19228_19566 = G__19571;
chunk__19229_19567 = G__19572;
count__19230_19568 = G__19573;
i__19231_19569 = G__19574;
continue;
} else {
var temp__5804__auto___19575 = cljs.core.seq(seq__19228_19566);
if(temp__5804__auto___19575){
var seq__19228_19576__$1 = temp__5804__auto___19575;
if(cljs.core.chunked_seq_QMARK_(seq__19228_19576__$1)){
var c__5568__auto___19577 = cljs.core.chunk_first(seq__19228_19576__$1);
var G__19578 = cljs.core.chunk_rest(seq__19228_19576__$1);
var G__19579 = c__5568__auto___19577;
var G__19580 = cljs.core.count(c__5568__auto___19577);
var G__19581 = (0);
seq__19228_19566 = G__19578;
chunk__19229_19567 = G__19579;
count__19230_19568 = G__19580;
i__19231_19569 = G__19581;
continue;
} else {
var f_19582 = cljs.core.first(seq__19228_19576__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19582], 0));


var G__19583 = cljs.core.next(seq__19228_19576__$1);
var G__19584 = null;
var G__19585 = (0);
var G__19586 = (0);
seq__19228_19566 = G__19583;
chunk__19229_19567 = G__19584;
count__19230_19568 = G__19585;
i__19231_19569 = G__19586;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19587 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19587], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19587)))?cljs.core.second(arglists_19587):arglists_19587)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19268_19607 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19269_19608 = null;
var count__19270_19609 = (0);
var i__19271_19610 = (0);
while(true){
if((i__19271_19610 < count__19270_19609)){
var vec__19288_19611 = chunk__19269_19608.cljs$core$IIndexed$_nth$arity$2(null,i__19271_19610);
var name_19612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288_19611,(0),null);
var map__19291_19613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288_19611,(1),null);
var map__19291_19614__$1 = cljs.core.__destructure_map(map__19291_19613);
var doc_19615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19291_19614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19291_19614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19612], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19616], 0));

if(cljs.core.truth_(doc_19615)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19615], 0));
} else {
}


var G__19617 = seq__19268_19607;
var G__19618 = chunk__19269_19608;
var G__19619 = count__19270_19609;
var G__19620 = (i__19271_19610 + (1));
seq__19268_19607 = G__19617;
chunk__19269_19608 = G__19618;
count__19270_19609 = G__19619;
i__19271_19610 = G__19620;
continue;
} else {
var temp__5804__auto___19621 = cljs.core.seq(seq__19268_19607);
if(temp__5804__auto___19621){
var seq__19268_19622__$1 = temp__5804__auto___19621;
if(cljs.core.chunked_seq_QMARK_(seq__19268_19622__$1)){
var c__5568__auto___19623 = cljs.core.chunk_first(seq__19268_19622__$1);
var G__19624 = cljs.core.chunk_rest(seq__19268_19622__$1);
var G__19625 = c__5568__auto___19623;
var G__19626 = cljs.core.count(c__5568__auto___19623);
var G__19627 = (0);
seq__19268_19607 = G__19624;
chunk__19269_19608 = G__19625;
count__19270_19609 = G__19626;
i__19271_19610 = G__19627;
continue;
} else {
var vec__19292_19628 = cljs.core.first(seq__19268_19622__$1);
var name_19629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19628,(0),null);
var map__19295_19630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19628,(1),null);
var map__19295_19631__$1 = cljs.core.__destructure_map(map__19295_19630);
var doc_19632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295_19631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19295_19631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19629], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19633], 0));

if(cljs.core.truth_(doc_19632)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19632], 0));
} else {
}


var G__19637 = cljs.core.next(seq__19268_19622__$1);
var G__19638 = null;
var G__19639 = (0);
var G__19640 = (0);
seq__19268_19607 = G__19637;
chunk__19269_19608 = G__19638;
count__19270_19609 = G__19639;
i__19271_19610 = G__19640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19313 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19314 = null;
var count__19315 = (0);
var i__19316 = (0);
while(true){
if((i__19316 < count__19315)){
var role = chunk__19314.cljs$core$IIndexed$_nth$arity$2(null,i__19316);
var temp__5804__auto___19641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19641__$1)){
var spec_19642 = temp__5804__auto___19641__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19642)], 0));
} else {
}


var G__19643 = seq__19313;
var G__19644 = chunk__19314;
var G__19645 = count__19315;
var G__19646 = (i__19316 + (1));
seq__19313 = G__19643;
chunk__19314 = G__19644;
count__19315 = G__19645;
i__19316 = G__19646;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19313);
if(temp__5804__auto____$1){
var seq__19313__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19313__$1);
var G__19647 = cljs.core.chunk_rest(seq__19313__$1);
var G__19648 = c__5568__auto__;
var G__19649 = cljs.core.count(c__5568__auto__);
var G__19650 = (0);
seq__19313 = G__19647;
chunk__19314 = G__19648;
count__19315 = G__19649;
i__19316 = G__19650;
continue;
} else {
var role = cljs.core.first(seq__19313__$1);
var temp__5804__auto___19651__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19651__$2)){
var spec_19652 = temp__5804__auto___19651__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19652)], 0));
} else {
}


var G__19653 = cljs.core.next(seq__19313__$1);
var G__19654 = null;
var G__19655 = (0);
var G__19656 = (0);
seq__19313 = G__19653;
chunk__19314 = G__19654;
count__19315 = G__19655;
i__19316 = G__19656;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19658 = cljs.core.ex_cause(t);
via = G__19657;
t = G__19658;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19420 = datafied_throwable;
var map__19420__$1 = cljs.core.__destructure_map(map__19420);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19420__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19420__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19420__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19421 = cljs.core.last(via);
var map__19421__$1 = cljs.core.__destructure_map(map__19421);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19422 = data;
var map__19422__$1 = cljs.core.__destructure_map(map__19422);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19423 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19423__$1 = cljs.core.__destructure_map(map__19423);
var top_data = map__19423__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19442 = phase;
var G__19442__$1 = (((G__19442 instanceof cljs.core.Keyword))?G__19442.fqn:null);
switch (G__19442__$1) {
case "read-source":
var map__19447 = data;
var map__19447__$1 = cljs.core.__destructure_map(map__19447);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19447__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19448 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19448__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19448);
var G__19448__$2 = (cljs.core.truth_((function (){var fexpr__19450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19450.cljs$core$IFn$_invoke$arity$1 ? fexpr__19450.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19450.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19448__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19448__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19451 = top_data;
var G__19451__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19451,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19451);
var G__19451__$2 = (cljs.core.truth_((function (){var fexpr__19452 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19452.cljs$core$IFn$_invoke$arity$1 ? fexpr__19452.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19452.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19451__$1);
var G__19451__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19451__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19451__$2);
var G__19451__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19451__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19451__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19451__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19451__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19453 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19453,(3),null);
var G__19456 = top_data;
var G__19456__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19456,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19456);
var G__19456__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19456__$1);
var G__19456__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19456__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19456__$2);
var G__19456__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19456__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19456__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19456__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19456__$4;
}

break;
case "execution":
var vec__19462 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19462,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19462,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19462,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19462,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19418_SHARP_){
var or__5045__auto__ = (p1__19418_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19465.cljs$core$IFn$_invoke$arity$1 ? fexpr__19465.cljs$core$IFn$_invoke$arity$1(p1__19418_SHARP_) : fexpr__19465.call(null,p1__19418_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19471 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19471__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19471,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19471);
var G__19471__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19471__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19471__$1);
var G__19471__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19471__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19471__$2);
var G__19471__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19471__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19471__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19471__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19471__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19442__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19484){
var map__19485 = p__19484;
var map__19485__$1 = cljs.core.__destructure_map(map__19485);
var triage_data = map__19485__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19485__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19488 = phase;
var G__19488__$1 = (((G__19488 instanceof cljs.core.Keyword))?G__19488.fqn:null);
switch (G__19488__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19489 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19490 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19491 = loc;
var G__19492 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19501_19675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19502_19676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19503_19677 = true;
var _STAR_print_fn_STAR__temp_val__19504_19678 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19503_19677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19504_19678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19477_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19477_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19502_19676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19501_19675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19489,G__19490,G__19491,G__19492) : format.call(null,G__19489,G__19490,G__19491,G__19492));

break;
case "macroexpansion":
var G__19506 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19507 = cause_type;
var G__19508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19509 = loc;
var G__19510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19506,G__19507,G__19508,G__19509,G__19510) : format.call(null,G__19506,G__19507,G__19508,G__19509,G__19510));

break;
case "compile-syntax-check":
var G__19511 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19512 = cause_type;
var G__19513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19514 = loc;
var G__19515 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19511,G__19512,G__19513,G__19514,G__19515) : format.call(null,G__19511,G__19512,G__19513,G__19514,G__19515));

break;
case "compilation":
var G__19517 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19518 = cause_type;
var G__19519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19520 = loc;
var G__19521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19517,G__19518,G__19519,G__19520,G__19521) : format.call(null,G__19517,G__19518,G__19519,G__19520,G__19521));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19522 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19523 = symbol;
var G__19524 = loc;
var G__19525 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19526_19679 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19527_19680 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19528_19681 = true;
var _STAR_print_fn_STAR__temp_val__19529_19682 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19528_19681);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19529_19682);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19527_19680);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19526_19679);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19522,G__19523,G__19524,G__19525) : format.call(null,G__19522,G__19523,G__19524,G__19525));
} else {
var G__19549 = "Execution error%s at %s(%s).\n%s\n";
var G__19550 = cause_type;
var G__19551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19552 = loc;
var G__19553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19549,G__19550,G__19551,G__19552,G__19553) : format.call(null,G__19549,G__19550,G__19551,G__19552,G__19553));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19488__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
