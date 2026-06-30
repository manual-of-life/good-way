goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13530 = (function (f,blockable,meta13531){
this.f = f;
this.blockable = blockable;
this.meta13531 = meta13531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13532,meta13531__$1){
var self__ = this;
var _13532__$1 = this;
return (new cljs.core.async.t_cljs$core$async13530(self__.f,self__.blockable,meta13531__$1));
}));

(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13532){
var self__ = this;
var _13532__$1 = this;
return self__.meta13531;
}));

(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13531","meta13531",-513100141,null)], null);
}));

(cljs.core.async.t_cljs$core$async13530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13530");

(cljs.core.async.t_cljs$core$async13530.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13530.
 */
cljs.core.async.__GT_t_cljs$core$async13530 = (function cljs$core$async$__GT_t_cljs$core$async13530(f,blockable,meta13531){
return (new cljs.core.async.t_cljs$core$async13530(f,blockable,meta13531));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13529 = arguments.length;
switch (G__13529) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13530(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13539 = arguments.length;
switch (G__13539) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13541 = arguments.length;
switch (G__13541) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13543 = arguments.length;
switch (G__13543) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15785 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15785) : fn1.call(null,val_15785));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15785) : fn1.call(null,val_15785));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13545 = arguments.length;
switch (G__13545) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15788 = n;
var x_15789 = (0);
while(true){
if((x_15789 < n__5636__auto___15788)){
(a[x_15789] = x_15789);

var G__15790 = (x_15789 + (1));
x_15789 = G__15790;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13553 = (function (flag,meta13554){
this.flag = flag;
this.meta13554 = meta13554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13555,meta13554__$1){
var self__ = this;
var _13555__$1 = this;
return (new cljs.core.async.t_cljs$core$async13553(self__.flag,meta13554__$1));
}));

(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13555){
var self__ = this;
var _13555__$1 = this;
return self__.meta13554;
}));

(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13554","meta13554",1550308394,null)], null);
}));

(cljs.core.async.t_cljs$core$async13553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13553");

(cljs.core.async.t_cljs$core$async13553.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13553.
 */
cljs.core.async.__GT_t_cljs$core$async13553 = (function cljs$core$async$__GT_t_cljs$core$async13553(flag,meta13554){
return (new cljs.core.async.t_cljs$core$async13553(flag,meta13554));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13553(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13562 = (function (flag,cb,meta13563){
this.flag = flag;
this.cb = cb;
this.meta13563 = meta13563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13564,meta13563__$1){
var self__ = this;
var _13564__$1 = this;
return (new cljs.core.async.t_cljs$core$async13562(self__.flag,self__.cb,meta13563__$1));
}));

(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13564){
var self__ = this;
var _13564__$1 = this;
return self__.meta13563;
}));

(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13563","meta13563",604030703,null)], null);
}));

(cljs.core.async.t_cljs$core$async13562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13562");

(cljs.core.async.t_cljs$core$async13562.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13562.
 */
cljs.core.async.__GT_t_cljs$core$async13562 = (function cljs$core$async$__GT_t_cljs$core$async13562(flag,cb,meta13563){
return (new cljs.core.async.t_cljs$core$async13562(flag,cb,meta13563));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13562(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13566_SHARP_){
var G__13572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13566_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13572) : fret.call(null,G__13572));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13567_SHARP_){
var G__13582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13567_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13582) : fret.call(null,G__13582));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15791 = (i + (1));
i = G__15791;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15792 = arguments.length;
var i__5770__auto___15793 = (0);
while(true){
if((i__5770__auto___15793 < len__5769__auto___15792)){
args__5775__auto__.push((arguments[i__5770__auto___15793]));

var G__15794 = (i__5770__auto___15793 + (1));
i__5770__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13610){
var map__13611 = p__13610;
var map__13611__$1 = cljs.core.__destructure_map(map__13611);
var opts = map__13611__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13595){
var G__13596 = cljs.core.first(seq13595);
var seq13595__$1 = cljs.core.next(seq13595);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13596,seq13595__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13641 = arguments.length;
switch (G__13641) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13437__auto___15797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_13756){
var state_val_13757 = (state_13756[(1)]);
if((state_val_13757 === (7))){
var inst_13693 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13767_15798 = state_13756__$1;
(statearr_13767_15798[(2)] = inst_13693);

(statearr_13767_15798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (1))){
var state_13756__$1 = state_13756;
var statearr_13768_15799 = state_13756__$1;
(statearr_13768_15799[(2)] = null);

(statearr_13768_15799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (4))){
var inst_13673 = (state_13756[(7)]);
var inst_13673__$1 = (state_13756[(2)]);
var inst_13674 = (inst_13673__$1 == null);
var state_13756__$1 = (function (){var statearr_13769 = state_13756;
(statearr_13769[(7)] = inst_13673__$1);

return statearr_13769;
})();
if(cljs.core.truth_(inst_13674)){
var statearr_13783_15800 = state_13756__$1;
(statearr_13783_15800[(1)] = (5));

} else {
var statearr_13784_15801 = state_13756__$1;
(statearr_13784_15801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (13))){
var state_13756__$1 = state_13756;
var statearr_13786_15802 = state_13756__$1;
(statearr_13786_15802[(2)] = null);

(statearr_13786_15802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (6))){
var inst_13673 = (state_13756[(7)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13756__$1,(11),to,inst_13673);
} else {
if((state_val_13757 === (3))){
var inst_13754 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13756__$1,inst_13754);
} else {
if((state_val_13757 === (12))){
var state_13756__$1 = state_13756;
var statearr_13801_15803 = state_13756__$1;
(statearr_13801_15803[(2)] = null);

(statearr_13801_15803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (2))){
var state_13756__$1 = state_13756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13756__$1,(4),from);
} else {
if((state_val_13757 === (11))){
var inst_13686 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
if(cljs.core.truth_(inst_13686)){
var statearr_13804_15804 = state_13756__$1;
(statearr_13804_15804[(1)] = (12));

} else {
var statearr_13805_15805 = state_13756__$1;
(statearr_13805_15805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (9))){
var state_13756__$1 = state_13756;
var statearr_13806_15806 = state_13756__$1;
(statearr_13806_15806[(2)] = null);

(statearr_13806_15806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (5))){
var state_13756__$1 = state_13756;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13820_15807 = state_13756__$1;
(statearr_13820_15807[(1)] = (8));

} else {
var statearr_13821_15808 = state_13756__$1;
(statearr_13821_15808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (14))){
var inst_13691 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13824_15809 = state_13756__$1;
(statearr_13824_15809[(2)] = inst_13691);

(statearr_13824_15809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (10))){
var inst_13683 = (state_13756[(2)]);
var state_13756__$1 = state_13756;
var statearr_13828_15810 = state_13756__$1;
(statearr_13828_15810[(2)] = inst_13683);

(statearr_13828_15810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13757 === (8))){
var inst_13679 = cljs.core.async.close_BANG_(to);
var state_13756__$1 = state_13756;
var statearr_13834_15811 = state_13756__$1;
(statearr_13834_15811[(2)] = inst_13679);

(statearr_13834_15811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_13842 = [null,null,null,null,null,null,null,null];
(statearr_13842[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_13842[(1)] = (1));

return statearr_13842;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_13756){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_13756);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e13846){var ex__13322__auto__ = e13846;
var statearr_13847_15812 = state_13756;
(statearr_13847_15812[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_13756[(4)]))){
var statearr_13848_15813 = state_13756;
(statearr_13848_15813[(1)] = cljs.core.first((state_13756[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15815 = state_13756;
state_13756 = G__15815;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_13756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_13756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_13849 = f__13438__auto__();
(statearr_13849[(6)] = c__13437__auto___15797);

return statearr_13849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13870){
var vec__13871 = p__13870;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13871,(1),null);
var job = vec__13871;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13437__auto___15817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_13881){
var state_val_13882 = (state_13881[(1)]);
if((state_val_13882 === (1))){
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13881__$1,(2),res,v);
} else {
if((state_val_13882 === (2))){
var inst_13878 = (state_13881[(2)]);
var inst_13879 = cljs.core.async.close_BANG_(res);
var state_13881__$1 = (function (){var statearr_13886 = state_13881;
(statearr_13886[(7)] = inst_13878);

return statearr_13886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13881__$1,inst_13879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_13888 = [null,null,null,null,null,null,null,null];
(statearr_13888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__);

(statearr_13888[(1)] = (1));

return statearr_13888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1 = (function (state_13881){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_13881);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e13896){var ex__13322__auto__ = e13896;
var statearr_13897_15818 = state_13881;
(statearr_13897_15818[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_13881[(4)]))){
var statearr_13898_15819 = state_13881;
(statearr_13898_15819[(1)] = cljs.core.first((state_13881[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15820 = state_13881;
state_13881 = G__15820;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = function(state_13881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1.call(this,state_13881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_13906 = f__13438__auto__();
(statearr_13906[(6)] = c__13437__auto___15817);

return statearr_13906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13914){
var vec__13915 = p__13914;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13915,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13915,(1),null);
var job = vec__13915;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15822 = n;
var __15823 = (0);
while(true){
if((__15823 < n__5636__auto___15822)){
var G__13919_15824 = type;
var G__13919_15825__$1 = (((G__13919_15824 instanceof cljs.core.Keyword))?G__13919_15824.fqn:null);
switch (G__13919_15825__$1) {
case "compute":
var c__13437__auto___15827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15823,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = ((function (__15823,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function (state_13941){
var state_val_13942 = (state_13941[(1)]);
if((state_val_13942 === (1))){
var state_13941__$1 = state_13941;
var statearr_13944_15830 = state_13941__$1;
(statearr_13944_15830[(2)] = null);

(statearr_13944_15830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (2))){
var state_13941__$1 = state_13941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13941__$1,(4),jobs);
} else {
if((state_val_13942 === (3))){
var inst_13939 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13941__$1,inst_13939);
} else {
if((state_val_13942 === (4))){
var inst_13923 = (state_13941[(2)]);
var inst_13932 = process__$1(inst_13923);
var state_13941__$1 = state_13941;
if(cljs.core.truth_(inst_13932)){
var statearr_13946_15831 = state_13941__$1;
(statearr_13946_15831[(1)] = (5));

} else {
var statearr_13954_15832 = state_13941__$1;
(statearr_13954_15832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (5))){
var state_13941__$1 = state_13941;
var statearr_13955_15833 = state_13941__$1;
(statearr_13955_15833[(2)] = null);

(statearr_13955_15833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (6))){
var state_13941__$1 = state_13941;
var statearr_13960_15834 = state_13941__$1;
(statearr_13960_15834[(2)] = null);

(statearr_13960_15834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13942 === (7))){
var inst_13937 = (state_13941[(2)]);
var state_13941__$1 = state_13941;
var statearr_13961_15835 = state_13941__$1;
(statearr_13961_15835[(2)] = inst_13937);

(statearr_13961_15835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15823,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
;
return ((function (__15823,switch__13317__auto__,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_13962 = [null,null,null,null,null,null,null];
(statearr_13962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__);

(statearr_13962[(1)] = (1));

return statearr_13962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1 = (function (state_13941){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_13941);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e13963){var ex__13322__auto__ = e13963;
var statearr_13964_15836 = state_13941;
(statearr_13964_15836[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_13941[(4)]))){
var statearr_13965_15837 = state_13941;
(statearr_13965_15837[(1)] = cljs.core.first((state_13941[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15839 = state_13941;
state_13941 = G__15839;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = function(state_13941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1.call(this,state_13941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__;
})()
;})(__15823,switch__13317__auto__,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
})();
var state__13439__auto__ = (function (){var statearr_13968 = f__13438__auto__();
(statearr_13968[(6)] = c__13437__auto___15827);

return statearr_13968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
});})(__15823,c__13437__auto___15827,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
);


break;
case "async":
var c__13437__auto___15840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15823,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = ((function (__15823,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function (state_13991){
var state_val_13992 = (state_13991[(1)]);
if((state_val_13992 === (1))){
var state_13991__$1 = state_13991;
var statearr_13994_15842 = state_13991__$1;
(statearr_13994_15842[(2)] = null);

(statearr_13994_15842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13992 === (2))){
var state_13991__$1 = state_13991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13991__$1,(4),jobs);
} else {
if((state_val_13992 === (3))){
var inst_13989 = (state_13991[(2)]);
var state_13991__$1 = state_13991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13991__$1,inst_13989);
} else {
if((state_val_13992 === (4))){
var inst_13980 = (state_13991[(2)]);
var inst_13981 = async(inst_13980);
var state_13991__$1 = state_13991;
if(cljs.core.truth_(inst_13981)){
var statearr_14000_15843 = state_13991__$1;
(statearr_14000_15843[(1)] = (5));

} else {
var statearr_14001_15845 = state_13991__$1;
(statearr_14001_15845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13992 === (5))){
var state_13991__$1 = state_13991;
var statearr_14002_15846 = state_13991__$1;
(statearr_14002_15846[(2)] = null);

(statearr_14002_15846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13992 === (6))){
var state_13991__$1 = state_13991;
var statearr_14003_15848 = state_13991__$1;
(statearr_14003_15848[(2)] = null);

(statearr_14003_15848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13992 === (7))){
var inst_13987 = (state_13991[(2)]);
var state_13991__$1 = state_13991;
var statearr_14009_15849 = state_13991__$1;
(statearr_14009_15849[(2)] = inst_13987);

(statearr_14009_15849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15823,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
;
return ((function (__15823,switch__13317__auto__,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_14010 = [null,null,null,null,null,null,null];
(statearr_14010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__);

(statearr_14010[(1)] = (1));

return statearr_14010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1 = (function (state_13991){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_13991);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14012){var ex__13322__auto__ = e14012;
var statearr_14013_15850 = state_13991;
(statearr_14013_15850[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_13991[(4)]))){
var statearr_14014_15851 = state_13991;
(statearr_14014_15851[(1)] = cljs.core.first((state_13991[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15852 = state_13991;
state_13991 = G__15852;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = function(state_13991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1.call(this,state_13991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__;
})()
;})(__15823,switch__13317__auto__,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
})();
var state__13439__auto__ = (function (){var statearr_14018 = f__13438__auto__();
(statearr_14018[(6)] = c__13437__auto___15840);

return statearr_14018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
});})(__15823,c__13437__auto___15840,G__13919_15824,G__13919_15825__$1,n__5636__auto___15822,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13919_15825__$1)].join('')));

}

var G__15853 = (__15823 + (1));
__15823 = G__15853;
continue;
} else {
}
break;
}

var c__13437__auto___15854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14040){
var state_val_14041 = (state_14040[(1)]);
if((state_val_14041 === (7))){
var inst_14036 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14046_15855 = state_14040__$1;
(statearr_14046_15855[(2)] = inst_14036);

(statearr_14046_15855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (1))){
var state_14040__$1 = state_14040;
var statearr_14047_15856 = state_14040__$1;
(statearr_14047_15856[(2)] = null);

(statearr_14047_15856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (4))){
var inst_14021 = (state_14040[(7)]);
var inst_14021__$1 = (state_14040[(2)]);
var inst_14022 = (inst_14021__$1 == null);
var state_14040__$1 = (function (){var statearr_14048 = state_14040;
(statearr_14048[(7)] = inst_14021__$1);

return statearr_14048;
})();
if(cljs.core.truth_(inst_14022)){
var statearr_14049_15857 = state_14040__$1;
(statearr_14049_15857[(1)] = (5));

} else {
var statearr_14050_15858 = state_14040__$1;
(statearr_14050_15858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (6))){
var inst_14021 = (state_14040[(7)]);
var inst_14026 = (state_14040[(8)]);
var inst_14026__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14028 = [inst_14021,inst_14026__$1];
var inst_14029 = (new cljs.core.PersistentVector(null,2,(5),inst_14027,inst_14028,null));
var state_14040__$1 = (function (){var statearr_14057 = state_14040;
(statearr_14057[(8)] = inst_14026__$1);

return statearr_14057;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14040__$1,(8),jobs,inst_14029);
} else {
if((state_val_14041 === (3))){
var inst_14038 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14040__$1,inst_14038);
} else {
if((state_val_14041 === (2))){
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14040__$1,(4),from);
} else {
if((state_val_14041 === (9))){
var inst_14033 = (state_14040[(2)]);
var state_14040__$1 = (function (){var statearr_14058 = state_14040;
(statearr_14058[(9)] = inst_14033);

return statearr_14058;
})();
var statearr_14059_15859 = state_14040__$1;
(statearr_14059_15859[(2)] = null);

(statearr_14059_15859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (5))){
var inst_14024 = cljs.core.async.close_BANG_(jobs);
var state_14040__$1 = state_14040;
var statearr_14060_15860 = state_14040__$1;
(statearr_14060_15860[(2)] = inst_14024);

(statearr_14060_15860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (8))){
var inst_14026 = (state_14040[(8)]);
var inst_14031 = (state_14040[(2)]);
var state_14040__$1 = (function (){var statearr_14061 = state_14040;
(statearr_14061[(10)] = inst_14031);

return statearr_14061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14040__$1,(9),results,inst_14026);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_14062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__);

(statearr_14062[(1)] = (1));

return statearr_14062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1 = (function (state_14040){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14040);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14063){var ex__13322__auto__ = e14063;
var statearr_14064_15861 = state_14040;
(statearr_14064_15861[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14040[(4)]))){
var statearr_14065_15862 = state_14040;
(statearr_14065_15862[(1)] = cljs.core.first((state_14040[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15863 = state_14040;
state_14040 = G__15863;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = function(state_14040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1.call(this,state_14040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14066 = f__13438__auto__();
(statearr_14066[(6)] = c__13437__auto___15854);

return statearr_14066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


var c__13437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14105){
var state_val_14106 = (state_14105[(1)]);
if((state_val_14106 === (7))){
var inst_14101 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14107_15864 = state_14105__$1;
(statearr_14107_15864[(2)] = inst_14101);

(statearr_14107_15864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (20))){
var state_14105__$1 = state_14105;
var statearr_14111_15865 = state_14105__$1;
(statearr_14111_15865[(2)] = null);

(statearr_14111_15865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (1))){
var state_14105__$1 = state_14105;
var statearr_14112_15866 = state_14105__$1;
(statearr_14112_15866[(2)] = null);

(statearr_14112_15866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (4))){
var inst_14069 = (state_14105[(7)]);
var inst_14069__$1 = (state_14105[(2)]);
var inst_14070 = (inst_14069__$1 == null);
var state_14105__$1 = (function (){var statearr_14113 = state_14105;
(statearr_14113[(7)] = inst_14069__$1);

return statearr_14113;
})();
if(cljs.core.truth_(inst_14070)){
var statearr_14114_15867 = state_14105__$1;
(statearr_14114_15867[(1)] = (5));

} else {
var statearr_14115_15868 = state_14105__$1;
(statearr_14115_15868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (15))){
var inst_14082 = (state_14105[(8)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14105__$1,(18),to,inst_14082);
} else {
if((state_val_14106 === (21))){
var inst_14095 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14117_15869 = state_14105__$1;
(statearr_14117_15869[(2)] = inst_14095);

(statearr_14117_15869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (13))){
var inst_14097 = (state_14105[(2)]);
var state_14105__$1 = (function (){var statearr_14121 = state_14105;
(statearr_14121[(9)] = inst_14097);

return statearr_14121;
})();
var statearr_14124_15870 = state_14105__$1;
(statearr_14124_15870[(2)] = null);

(statearr_14124_15870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (6))){
var inst_14069 = (state_14105[(7)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14105__$1,(11),inst_14069);
} else {
if((state_val_14106 === (17))){
var inst_14090 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
if(cljs.core.truth_(inst_14090)){
var statearr_14125_15871 = state_14105__$1;
(statearr_14125_15871[(1)] = (19));

} else {
var statearr_14126_15873 = state_14105__$1;
(statearr_14126_15873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (3))){
var inst_14103 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14105__$1,inst_14103);
} else {
if((state_val_14106 === (12))){
var inst_14079 = (state_14105[(10)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14105__$1,(14),inst_14079);
} else {
if((state_val_14106 === (2))){
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14105__$1,(4),results);
} else {
if((state_val_14106 === (19))){
var state_14105__$1 = state_14105;
var statearr_14127_15876 = state_14105__$1;
(statearr_14127_15876[(2)] = null);

(statearr_14127_15876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (11))){
var inst_14079 = (state_14105[(2)]);
var state_14105__$1 = (function (){var statearr_14128 = state_14105;
(statearr_14128[(10)] = inst_14079);

return statearr_14128;
})();
var statearr_14129_15877 = state_14105__$1;
(statearr_14129_15877[(2)] = null);

(statearr_14129_15877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (9))){
var state_14105__$1 = state_14105;
var statearr_14134_15878 = state_14105__$1;
(statearr_14134_15878[(2)] = null);

(statearr_14134_15878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (5))){
var state_14105__$1 = state_14105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14135_15879 = state_14105__$1;
(statearr_14135_15879[(1)] = (8));

} else {
var statearr_14136_15880 = state_14105__$1;
(statearr_14136_15880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (14))){
var inst_14082 = (state_14105[(8)]);
var inst_14084 = (state_14105[(11)]);
var inst_14082__$1 = (state_14105[(2)]);
var inst_14083 = (inst_14082__$1 == null);
var inst_14084__$1 = cljs.core.not(inst_14083);
var state_14105__$1 = (function (){var statearr_14141 = state_14105;
(statearr_14141[(8)] = inst_14082__$1);

(statearr_14141[(11)] = inst_14084__$1);

return statearr_14141;
})();
if(inst_14084__$1){
var statearr_14142_15881 = state_14105__$1;
(statearr_14142_15881[(1)] = (15));

} else {
var statearr_14143_15882 = state_14105__$1;
(statearr_14143_15882[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (16))){
var inst_14084 = (state_14105[(11)]);
var state_14105__$1 = state_14105;
var statearr_14146_15883 = state_14105__$1;
(statearr_14146_15883[(2)] = inst_14084);

(statearr_14146_15883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (10))){
var inst_14076 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14147_15884 = state_14105__$1;
(statearr_14147_15884[(2)] = inst_14076);

(statearr_14147_15884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (18))){
var inst_14087 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14153_15885 = state_14105__$1;
(statearr_14153_15885[(2)] = inst_14087);

(statearr_14153_15885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (8))){
var inst_14073 = cljs.core.async.close_BANG_(to);
var state_14105__$1 = state_14105;
var statearr_14154_15886 = state_14105__$1;
(statearr_14154_15886[(2)] = inst_14073);

(statearr_14154_15886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_14155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__);

(statearr_14155[(1)] = (1));

return statearr_14155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1 = (function (state_14105){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14105);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14156){var ex__13322__auto__ = e14156;
var statearr_14157_15887 = state_14105;
(statearr_14157_15887[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14105[(4)]))){
var statearr_14158_15888 = state_14105;
(statearr_14158_15888[(1)] = cljs.core.first((state_14105[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15889 = state_14105;
state_14105 = G__15889;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__ = function(state_14105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1.call(this,state_14105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14159 = f__13438__auto__();
(statearr_14159[(6)] = c__13437__auto__);

return statearr_14159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

return c__13437__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14176 = arguments.length;
switch (G__14176) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14179 = arguments.length;
switch (G__14179) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14185 = arguments.length;
switch (G__14185) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13437__auto___15894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14211){
var state_val_14212 = (state_14211[(1)]);
if((state_val_14212 === (7))){
var inst_14207 = (state_14211[(2)]);
var state_14211__$1 = state_14211;
var statearr_14213_15895 = state_14211__$1;
(statearr_14213_15895[(2)] = inst_14207);

(statearr_14213_15895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (1))){
var state_14211__$1 = state_14211;
var statearr_14215_15896 = state_14211__$1;
(statearr_14215_15896[(2)] = null);

(statearr_14215_15896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (4))){
var inst_14188 = (state_14211[(7)]);
var inst_14188__$1 = (state_14211[(2)]);
var inst_14189 = (inst_14188__$1 == null);
var state_14211__$1 = (function (){var statearr_14224 = state_14211;
(statearr_14224[(7)] = inst_14188__$1);

return statearr_14224;
})();
if(cljs.core.truth_(inst_14189)){
var statearr_14225_15897 = state_14211__$1;
(statearr_14225_15897[(1)] = (5));

} else {
var statearr_14226_15898 = state_14211__$1;
(statearr_14226_15898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (13))){
var state_14211__$1 = state_14211;
var statearr_14227_15901 = state_14211__$1;
(statearr_14227_15901[(2)] = null);

(statearr_14227_15901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (6))){
var inst_14188 = (state_14211[(7)]);
var inst_14194 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14188) : p.call(null,inst_14188));
var state_14211__$1 = state_14211;
if(cljs.core.truth_(inst_14194)){
var statearr_14228_15903 = state_14211__$1;
(statearr_14228_15903[(1)] = (9));

} else {
var statearr_14229_15904 = state_14211__$1;
(statearr_14229_15904[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (3))){
var inst_14209 = (state_14211[(2)]);
var state_14211__$1 = state_14211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14211__$1,inst_14209);
} else {
if((state_val_14212 === (12))){
var state_14211__$1 = state_14211;
var statearr_14234_15908 = state_14211__$1;
(statearr_14234_15908[(2)] = null);

(statearr_14234_15908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (2))){
var state_14211__$1 = state_14211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14211__$1,(4),ch);
} else {
if((state_val_14212 === (11))){
var inst_14188 = (state_14211[(7)]);
var inst_14198 = (state_14211[(2)]);
var state_14211__$1 = state_14211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14211__$1,(8),inst_14198,inst_14188);
} else {
if((state_val_14212 === (9))){
var state_14211__$1 = state_14211;
var statearr_14241_15910 = state_14211__$1;
(statearr_14241_15910[(2)] = tc);

(statearr_14241_15910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (5))){
var inst_14191 = cljs.core.async.close_BANG_(tc);
var inst_14192 = cljs.core.async.close_BANG_(fc);
var state_14211__$1 = (function (){var statearr_14242 = state_14211;
(statearr_14242[(8)] = inst_14191);

return statearr_14242;
})();
var statearr_14244_15911 = state_14211__$1;
(statearr_14244_15911[(2)] = inst_14192);

(statearr_14244_15911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (14))){
var inst_14205 = (state_14211[(2)]);
var state_14211__$1 = state_14211;
var statearr_14247_15912 = state_14211__$1;
(statearr_14247_15912[(2)] = inst_14205);

(statearr_14247_15912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (10))){
var state_14211__$1 = state_14211;
var statearr_14260_15913 = state_14211__$1;
(statearr_14260_15913[(2)] = fc);

(statearr_14260_15913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14212 === (8))){
var inst_14200 = (state_14211[(2)]);
var state_14211__$1 = state_14211;
if(cljs.core.truth_(inst_14200)){
var statearr_14263_15914 = state_14211__$1;
(statearr_14263_15914[(1)] = (12));

} else {
var statearr_14264_15915 = state_14211__$1;
(statearr_14264_15915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_14270 = [null,null,null,null,null,null,null,null,null];
(statearr_14270[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_14270[(1)] = (1));

return statearr_14270;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_14211){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14211);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14271){var ex__13322__auto__ = e14271;
var statearr_14272_15916 = state_14211;
(statearr_14272_15916[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14211[(4)]))){
var statearr_14273_15917 = state_14211;
(statearr_14273_15917[(1)] = cljs.core.first((state_14211[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15918 = state_14211;
state_14211 = G__15918;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_14211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_14211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14288 = f__13438__auto__();
(statearr_14288[(6)] = c__13437__auto___15894);

return statearr_14288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14317){
var state_val_14318 = (state_14317[(1)]);
if((state_val_14318 === (7))){
var inst_14313 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14319_15919 = state_14317__$1;
(statearr_14319_15919[(2)] = inst_14313);

(statearr_14319_15919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (1))){
var inst_14289 = init;
var inst_14290 = inst_14289;
var state_14317__$1 = (function (){var statearr_14320 = state_14317;
(statearr_14320[(7)] = inst_14290);

return statearr_14320;
})();
var statearr_14321_15920 = state_14317__$1;
(statearr_14321_15920[(2)] = null);

(statearr_14321_15920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (4))){
var inst_14300 = (state_14317[(8)]);
var inst_14300__$1 = (state_14317[(2)]);
var inst_14301 = (inst_14300__$1 == null);
var state_14317__$1 = (function (){var statearr_14322 = state_14317;
(statearr_14322[(8)] = inst_14300__$1);

return statearr_14322;
})();
if(cljs.core.truth_(inst_14301)){
var statearr_14323_15921 = state_14317__$1;
(statearr_14323_15921[(1)] = (5));

} else {
var statearr_14324_15922 = state_14317__$1;
(statearr_14324_15922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (6))){
var inst_14290 = (state_14317[(7)]);
var inst_14304 = (state_14317[(9)]);
var inst_14300 = (state_14317[(8)]);
var inst_14304__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14290,inst_14300) : f.call(null,inst_14290,inst_14300));
var inst_14305 = cljs.core.reduced_QMARK_(inst_14304__$1);
var state_14317__$1 = (function (){var statearr_14325 = state_14317;
(statearr_14325[(9)] = inst_14304__$1);

return statearr_14325;
})();
if(inst_14305){
var statearr_14326_15925 = state_14317__$1;
(statearr_14326_15925[(1)] = (8));

} else {
var statearr_14327_15926 = state_14317__$1;
(statearr_14327_15926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (3))){
var inst_14315 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14317__$1,inst_14315);
} else {
if((state_val_14318 === (2))){
var state_14317__$1 = state_14317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14317__$1,(4),ch);
} else {
if((state_val_14318 === (9))){
var inst_14304 = (state_14317[(9)]);
var inst_14290 = inst_14304;
var state_14317__$1 = (function (){var statearr_14328 = state_14317;
(statearr_14328[(7)] = inst_14290);

return statearr_14328;
})();
var statearr_14332_15928 = state_14317__$1;
(statearr_14332_15928[(2)] = null);

(statearr_14332_15928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (5))){
var inst_14290 = (state_14317[(7)]);
var state_14317__$1 = state_14317;
var statearr_14333_15929 = state_14317__$1;
(statearr_14333_15929[(2)] = inst_14290);

(statearr_14333_15929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (10))){
var inst_14311 = (state_14317[(2)]);
var state_14317__$1 = state_14317;
var statearr_14334_15930 = state_14317__$1;
(statearr_14334_15930[(2)] = inst_14311);

(statearr_14334_15930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14318 === (8))){
var inst_14304 = (state_14317[(9)]);
var inst_14307 = cljs.core.deref(inst_14304);
var state_14317__$1 = state_14317;
var statearr_14335_15932 = state_14317__$1;
(statearr_14335_15932[(2)] = inst_14307);

(statearr_14335_15932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13319__auto____0 = (function (){
var statearr_14336 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14336[(0)] = cljs$core$async$reduce_$_state_machine__13319__auto__);

(statearr_14336[(1)] = (1));

return statearr_14336;
});
var cljs$core$async$reduce_$_state_machine__13319__auto____1 = (function (state_14317){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14317);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14337){var ex__13322__auto__ = e14337;
var statearr_14338_15933 = state_14317;
(statearr_14338_15933[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14317[(4)]))){
var statearr_14339_15935 = state_14317;
(statearr_14339_15935[(1)] = cljs.core.first((state_14317[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15936 = state_14317;
state_14317 = G__15936;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13319__auto__ = function(state_14317){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13319__auto____1.call(this,state_14317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13319__auto____0;
cljs$core$async$reduce_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13319__auto____1;
return cljs$core$async$reduce_$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14342 = f__13438__auto__();
(statearr_14342[(6)] = c__13437__auto__);

return statearr_14342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

return c__13437__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14348){
var state_val_14349 = (state_14348[(1)]);
if((state_val_14349 === (1))){
var inst_14343 = cljs.core.async.reduce(f__$1,init,ch);
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14348__$1,(2),inst_14343);
} else {
if((state_val_14349 === (2))){
var inst_14345 = (state_14348[(2)]);
var inst_14346 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14345) : f__$1.call(null,inst_14345));
var state_14348__$1 = state_14348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14348__$1,inst_14346);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13319__auto____0 = (function (){
var statearr_14355 = [null,null,null,null,null,null,null];
(statearr_14355[(0)] = cljs$core$async$transduce_$_state_machine__13319__auto__);

(statearr_14355[(1)] = (1));

return statearr_14355;
});
var cljs$core$async$transduce_$_state_machine__13319__auto____1 = (function (state_14348){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14348);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14356){var ex__13322__auto__ = e14356;
var statearr_14357_15939 = state_14348;
(statearr_14357_15939[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14348[(4)]))){
var statearr_14358_15940 = state_14348;
(statearr_14358_15940[(1)] = cljs.core.first((state_14348[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15941 = state_14348;
state_14348 = G__15941;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13319__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13319__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13319__auto____0;
cljs$core$async$transduce_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13319__auto____1;
return cljs$core$async$transduce_$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14361 = f__13438__auto__();
(statearr_14361[(6)] = c__13437__auto__);

return statearr_14361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

return c__13437__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14363 = arguments.length;
switch (G__14363) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14388){
var state_val_14389 = (state_14388[(1)]);
if((state_val_14389 === (7))){
var inst_14370 = (state_14388[(2)]);
var state_14388__$1 = state_14388;
var statearr_14390_15945 = state_14388__$1;
(statearr_14390_15945[(2)] = inst_14370);

(statearr_14390_15945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (1))){
var inst_14364 = cljs.core.seq(coll);
var inst_14365 = inst_14364;
var state_14388__$1 = (function (){var statearr_14391 = state_14388;
(statearr_14391[(7)] = inst_14365);

return statearr_14391;
})();
var statearr_14392_15946 = state_14388__$1;
(statearr_14392_15946[(2)] = null);

(statearr_14392_15946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (4))){
var inst_14365 = (state_14388[(7)]);
var inst_14368 = cljs.core.first(inst_14365);
var state_14388__$1 = state_14388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14388__$1,(7),ch,inst_14368);
} else {
if((state_val_14389 === (13))){
var inst_14382 = (state_14388[(2)]);
var state_14388__$1 = state_14388;
var statearr_14393_15947 = state_14388__$1;
(statearr_14393_15947[(2)] = inst_14382);

(statearr_14393_15947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (6))){
var inst_14373 = (state_14388[(2)]);
var state_14388__$1 = state_14388;
if(cljs.core.truth_(inst_14373)){
var statearr_14394_15948 = state_14388__$1;
(statearr_14394_15948[(1)] = (8));

} else {
var statearr_14395_15949 = state_14388__$1;
(statearr_14395_15949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (3))){
var inst_14386 = (state_14388[(2)]);
var state_14388__$1 = state_14388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14388__$1,inst_14386);
} else {
if((state_val_14389 === (12))){
var state_14388__$1 = state_14388;
var statearr_14396_15950 = state_14388__$1;
(statearr_14396_15950[(2)] = null);

(statearr_14396_15950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (2))){
var inst_14365 = (state_14388[(7)]);
var state_14388__$1 = state_14388;
if(cljs.core.truth_(inst_14365)){
var statearr_14397_15951 = state_14388__$1;
(statearr_14397_15951[(1)] = (4));

} else {
var statearr_14398_15952 = state_14388__$1;
(statearr_14398_15952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (11))){
var inst_14379 = cljs.core.async.close_BANG_(ch);
var state_14388__$1 = state_14388;
var statearr_14399_15953 = state_14388__$1;
(statearr_14399_15953[(2)] = inst_14379);

(statearr_14399_15953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (9))){
var state_14388__$1 = state_14388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14400_15954 = state_14388__$1;
(statearr_14400_15954[(1)] = (11));

} else {
var statearr_14401_15956 = state_14388__$1;
(statearr_14401_15956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (5))){
var inst_14365 = (state_14388[(7)]);
var state_14388__$1 = state_14388;
var statearr_14402_15957 = state_14388__$1;
(statearr_14402_15957[(2)] = inst_14365);

(statearr_14402_15957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (10))){
var inst_14384 = (state_14388[(2)]);
var state_14388__$1 = state_14388;
var statearr_14403_15958 = state_14388__$1;
(statearr_14403_15958[(2)] = inst_14384);

(statearr_14403_15958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14389 === (8))){
var inst_14365 = (state_14388[(7)]);
var inst_14375 = cljs.core.next(inst_14365);
var inst_14365__$1 = inst_14375;
var state_14388__$1 = (function (){var statearr_14404 = state_14388;
(statearr_14404[(7)] = inst_14365__$1);

return statearr_14404;
})();
var statearr_14406_15959 = state_14388__$1;
(statearr_14406_15959[(2)] = null);

(statearr_14406_15959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_14408 = [null,null,null,null,null,null,null,null];
(statearr_14408[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_14408[(1)] = (1));

return statearr_14408;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_14388){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14388);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14409){var ex__13322__auto__ = e14409;
var statearr_14410_15960 = state_14388;
(statearr_14410_15960[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14388[(4)]))){
var statearr_14411_15961 = state_14388;
(statearr_14411_15961[(1)] = cljs.core.first((state_14388[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15962 = state_14388;
state_14388 = G__15962;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_14388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_14388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14412 = f__13438__auto__();
(statearr_14412[(6)] = c__13437__auto__);

return statearr_14412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

return c__13437__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14416 = arguments.length;
switch (G__14416) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15965 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15965(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15966 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15966(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15967 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15967(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15968 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15968(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14421 = (function (ch,cs,meta14422){
this.ch = ch;
this.cs = cs;
this.meta14422 = meta14422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14423,meta14422__$1){
var self__ = this;
var _14423__$1 = this;
return (new cljs.core.async.t_cljs$core$async14421(self__.ch,self__.cs,meta14422__$1));
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14423){
var self__ = this;
var _14423__$1 = this;
return self__.meta14422;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14422","meta14422",1963335004,null)], null);
}));

(cljs.core.async.t_cljs$core$async14421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14421");

(cljs.core.async.t_cljs$core$async14421.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14421.
 */
cljs.core.async.__GT_t_cljs$core$async14421 = (function cljs$core$async$__GT_t_cljs$core$async14421(ch,cs,meta14422){
return (new cljs.core.async.t_cljs$core$async14421(ch,cs,meta14422));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14421(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13437__auto___15970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14556){
var state_val_14557 = (state_14556[(1)]);
if((state_val_14557 === (7))){
var inst_14552 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14562_15971 = state_14556__$1;
(statearr_14562_15971[(2)] = inst_14552);

(statearr_14562_15971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (20))){
var inst_14457 = (state_14556[(7)]);
var inst_14469 = cljs.core.first(inst_14457);
var inst_14470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14469,(0),null);
var inst_14471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14469,(1),null);
var state_14556__$1 = (function (){var statearr_14565 = state_14556;
(statearr_14565[(8)] = inst_14470);

return statearr_14565;
})();
if(cljs.core.truth_(inst_14471)){
var statearr_14566_15972 = state_14556__$1;
(statearr_14566_15972[(1)] = (22));

} else {
var statearr_14567_15973 = state_14556__$1;
(statearr_14567_15973[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (27))){
var inst_14506 = (state_14556[(9)]);
var inst_14426 = (state_14556[(10)]);
var inst_14499 = (state_14556[(11)]);
var inst_14501 = (state_14556[(12)]);
var inst_14506__$1 = cljs.core._nth(inst_14499,inst_14501);
var inst_14507 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14506__$1,inst_14426,done);
var state_14556__$1 = (function (){var statearr_14568 = state_14556;
(statearr_14568[(9)] = inst_14506__$1);

return statearr_14568;
})();
if(cljs.core.truth_(inst_14507)){
var statearr_14569_15975 = state_14556__$1;
(statearr_14569_15975[(1)] = (30));

} else {
var statearr_14570_15976 = state_14556__$1;
(statearr_14570_15976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (1))){
var state_14556__$1 = state_14556;
var statearr_14571_15978 = state_14556__$1;
(statearr_14571_15978[(2)] = null);

(statearr_14571_15978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (24))){
var inst_14457 = (state_14556[(7)]);
var inst_14476 = (state_14556[(2)]);
var inst_14477 = cljs.core.next(inst_14457);
var inst_14435 = inst_14477;
var inst_14436 = null;
var inst_14437 = (0);
var inst_14438 = (0);
var state_14556__$1 = (function (){var statearr_14572 = state_14556;
(statearr_14572[(13)] = inst_14436);

(statearr_14572[(14)] = inst_14435);

(statearr_14572[(15)] = inst_14476);

(statearr_14572[(16)] = inst_14437);

(statearr_14572[(17)] = inst_14438);

return statearr_14572;
})();
var statearr_14573_15979 = state_14556__$1;
(statearr_14573_15979[(2)] = null);

(statearr_14573_15979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (39))){
var state_14556__$1 = state_14556;
var statearr_14577_15980 = state_14556__$1;
(statearr_14577_15980[(2)] = null);

(statearr_14577_15980[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (4))){
var inst_14426 = (state_14556[(10)]);
var inst_14426__$1 = (state_14556[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var state_14556__$1 = (function (){var statearr_14578 = state_14556;
(statearr_14578[(10)] = inst_14426__$1);

return statearr_14578;
})();
if(cljs.core.truth_(inst_14427)){
var statearr_14583_15981 = state_14556__$1;
(statearr_14583_15981[(1)] = (5));

} else {
var statearr_14584_15982 = state_14556__$1;
(statearr_14584_15982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (15))){
var inst_14436 = (state_14556[(13)]);
var inst_14435 = (state_14556[(14)]);
var inst_14437 = (state_14556[(16)]);
var inst_14438 = (state_14556[(17)]);
var inst_14453 = (state_14556[(2)]);
var inst_14454 = (inst_14438 + (1));
var tmp14574 = inst_14436;
var tmp14575 = inst_14435;
var tmp14576 = inst_14437;
var inst_14435__$1 = tmp14575;
var inst_14436__$1 = tmp14574;
var inst_14437__$1 = tmp14576;
var inst_14438__$1 = inst_14454;
var state_14556__$1 = (function (){var statearr_14585 = state_14556;
(statearr_14585[(13)] = inst_14436__$1);

(statearr_14585[(14)] = inst_14435__$1);

(statearr_14585[(16)] = inst_14437__$1);

(statearr_14585[(18)] = inst_14453);

(statearr_14585[(17)] = inst_14438__$1);

return statearr_14585;
})();
var statearr_14586_15983 = state_14556__$1;
(statearr_14586_15983[(2)] = null);

(statearr_14586_15983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (21))){
var inst_14480 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14590_15988 = state_14556__$1;
(statearr_14590_15988[(2)] = inst_14480);

(statearr_14590_15988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (31))){
var inst_14506 = (state_14556[(9)]);
var inst_14510 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14506);
var state_14556__$1 = state_14556;
var statearr_14591_15992 = state_14556__$1;
(statearr_14591_15992[(2)] = inst_14510);

(statearr_14591_15992[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (32))){
var inst_14499 = (state_14556[(11)]);
var inst_14500 = (state_14556[(19)]);
var inst_14498 = (state_14556[(20)]);
var inst_14501 = (state_14556[(12)]);
var inst_14512 = (state_14556[(2)]);
var inst_14513 = (inst_14501 + (1));
var tmp14587 = inst_14499;
var tmp14588 = inst_14500;
var tmp14589 = inst_14498;
var inst_14498__$1 = tmp14589;
var inst_14499__$1 = tmp14587;
var inst_14500__$1 = tmp14588;
var inst_14501__$1 = inst_14513;
var state_14556__$1 = (function (){var statearr_14592 = state_14556;
(statearr_14592[(21)] = inst_14512);

(statearr_14592[(11)] = inst_14499__$1);

(statearr_14592[(19)] = inst_14500__$1);

(statearr_14592[(20)] = inst_14498__$1);

(statearr_14592[(12)] = inst_14501__$1);

return statearr_14592;
})();
var statearr_14593_16000 = state_14556__$1;
(statearr_14593_16000[(2)] = null);

(statearr_14593_16000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (40))){
var inst_14525 = (state_14556[(22)]);
var inst_14529 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14525);
var state_14556__$1 = state_14556;
var statearr_14594_16001 = state_14556__$1;
(statearr_14594_16001[(2)] = inst_14529);

(statearr_14594_16001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (33))){
var inst_14516 = (state_14556[(23)]);
var inst_14518 = cljs.core.chunked_seq_QMARK_(inst_14516);
var state_14556__$1 = state_14556;
if(inst_14518){
var statearr_14595_16002 = state_14556__$1;
(statearr_14595_16002[(1)] = (36));

} else {
var statearr_14596_16003 = state_14556__$1;
(statearr_14596_16003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (13))){
var inst_14447 = (state_14556[(24)]);
var inst_14450 = cljs.core.async.close_BANG_(inst_14447);
var state_14556__$1 = state_14556;
var statearr_14599_16004 = state_14556__$1;
(statearr_14599_16004[(2)] = inst_14450);

(statearr_14599_16004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (22))){
var inst_14470 = (state_14556[(8)]);
var inst_14473 = cljs.core.async.close_BANG_(inst_14470);
var state_14556__$1 = state_14556;
var statearr_14600_16005 = state_14556__$1;
(statearr_14600_16005[(2)] = inst_14473);

(statearr_14600_16005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (36))){
var inst_14516 = (state_14556[(23)]);
var inst_14520 = cljs.core.chunk_first(inst_14516);
var inst_14521 = cljs.core.chunk_rest(inst_14516);
var inst_14522 = cljs.core.count(inst_14520);
var inst_14498 = inst_14521;
var inst_14499 = inst_14520;
var inst_14500 = inst_14522;
var inst_14501 = (0);
var state_14556__$1 = (function (){var statearr_14601 = state_14556;
(statearr_14601[(11)] = inst_14499);

(statearr_14601[(19)] = inst_14500);

(statearr_14601[(20)] = inst_14498);

(statearr_14601[(12)] = inst_14501);

return statearr_14601;
})();
var statearr_14602_16006 = state_14556__$1;
(statearr_14602_16006[(2)] = null);

(statearr_14602_16006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (41))){
var inst_14516 = (state_14556[(23)]);
var inst_14531 = (state_14556[(2)]);
var inst_14532 = cljs.core.next(inst_14516);
var inst_14498 = inst_14532;
var inst_14499 = null;
var inst_14500 = (0);
var inst_14501 = (0);
var state_14556__$1 = (function (){var statearr_14603 = state_14556;
(statearr_14603[(25)] = inst_14531);

(statearr_14603[(11)] = inst_14499);

(statearr_14603[(19)] = inst_14500);

(statearr_14603[(20)] = inst_14498);

(statearr_14603[(12)] = inst_14501);

return statearr_14603;
})();
var statearr_14604_16007 = state_14556__$1;
(statearr_14604_16007[(2)] = null);

(statearr_14604_16007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (43))){
var state_14556__$1 = state_14556;
var statearr_14605_16008 = state_14556__$1;
(statearr_14605_16008[(2)] = null);

(statearr_14605_16008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (29))){
var inst_14540 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14606_16010 = state_14556__$1;
(statearr_14606_16010[(2)] = inst_14540);

(statearr_14606_16010[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (44))){
var inst_14549 = (state_14556[(2)]);
var state_14556__$1 = (function (){var statearr_14607 = state_14556;
(statearr_14607[(26)] = inst_14549);

return statearr_14607;
})();
var statearr_14608_16018 = state_14556__$1;
(statearr_14608_16018[(2)] = null);

(statearr_14608_16018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (6))){
var inst_14490 = (state_14556[(27)]);
var inst_14489 = cljs.core.deref(cs);
var inst_14490__$1 = cljs.core.keys(inst_14489);
var inst_14491 = cljs.core.count(inst_14490__$1);
var inst_14492 = cljs.core.reset_BANG_(dctr,inst_14491);
var inst_14497 = cljs.core.seq(inst_14490__$1);
var inst_14498 = inst_14497;
var inst_14499 = null;
var inst_14500 = (0);
var inst_14501 = (0);
var state_14556__$1 = (function (){var statearr_14609 = state_14556;
(statearr_14609[(27)] = inst_14490__$1);

(statearr_14609[(11)] = inst_14499);

(statearr_14609[(28)] = inst_14492);

(statearr_14609[(19)] = inst_14500);

(statearr_14609[(20)] = inst_14498);

(statearr_14609[(12)] = inst_14501);

return statearr_14609;
})();
var statearr_14610_16027 = state_14556__$1;
(statearr_14610_16027[(2)] = null);

(statearr_14610_16027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (28))){
var inst_14516 = (state_14556[(23)]);
var inst_14498 = (state_14556[(20)]);
var inst_14516__$1 = cljs.core.seq(inst_14498);
var state_14556__$1 = (function (){var statearr_14611 = state_14556;
(statearr_14611[(23)] = inst_14516__$1);

return statearr_14611;
})();
if(inst_14516__$1){
var statearr_14612_16034 = state_14556__$1;
(statearr_14612_16034[(1)] = (33));

} else {
var statearr_14613_16036 = state_14556__$1;
(statearr_14613_16036[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (25))){
var inst_14500 = (state_14556[(19)]);
var inst_14501 = (state_14556[(12)]);
var inst_14503 = (inst_14501 < inst_14500);
var inst_14504 = inst_14503;
var state_14556__$1 = state_14556;
if(cljs.core.truth_(inst_14504)){
var statearr_14614_16043 = state_14556__$1;
(statearr_14614_16043[(1)] = (27));

} else {
var statearr_14615_16048 = state_14556__$1;
(statearr_14615_16048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (34))){
var state_14556__$1 = state_14556;
var statearr_14616_16049 = state_14556__$1;
(statearr_14616_16049[(2)] = null);

(statearr_14616_16049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (17))){
var state_14556__$1 = state_14556;
var statearr_14617_16050 = state_14556__$1;
(statearr_14617_16050[(2)] = null);

(statearr_14617_16050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (3))){
var inst_14554 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14556__$1,inst_14554);
} else {
if((state_val_14557 === (12))){
var inst_14485 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14618_16052 = state_14556__$1;
(statearr_14618_16052[(2)] = inst_14485);

(statearr_14618_16052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (2))){
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14556__$1,(4),ch);
} else {
if((state_val_14557 === (23))){
var state_14556__$1 = state_14556;
var statearr_14619_16054 = state_14556__$1;
(statearr_14619_16054[(2)] = null);

(statearr_14619_16054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (35))){
var inst_14538 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14620_16055 = state_14556__$1;
(statearr_14620_16055[(2)] = inst_14538);

(statearr_14620_16055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (19))){
var inst_14457 = (state_14556[(7)]);
var inst_14461 = cljs.core.chunk_first(inst_14457);
var inst_14462 = cljs.core.chunk_rest(inst_14457);
var inst_14463 = cljs.core.count(inst_14461);
var inst_14435 = inst_14462;
var inst_14436 = inst_14461;
var inst_14437 = inst_14463;
var inst_14438 = (0);
var state_14556__$1 = (function (){var statearr_14621 = state_14556;
(statearr_14621[(13)] = inst_14436);

(statearr_14621[(14)] = inst_14435);

(statearr_14621[(16)] = inst_14437);

(statearr_14621[(17)] = inst_14438);

return statearr_14621;
})();
var statearr_14622_16056 = state_14556__$1;
(statearr_14622_16056[(2)] = null);

(statearr_14622_16056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (11))){
var inst_14435 = (state_14556[(14)]);
var inst_14457 = (state_14556[(7)]);
var inst_14457__$1 = cljs.core.seq(inst_14435);
var state_14556__$1 = (function (){var statearr_14623 = state_14556;
(statearr_14623[(7)] = inst_14457__$1);

return statearr_14623;
})();
if(inst_14457__$1){
var statearr_14624_16057 = state_14556__$1;
(statearr_14624_16057[(1)] = (16));

} else {
var statearr_14625_16058 = state_14556__$1;
(statearr_14625_16058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (9))){
var inst_14487 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14626_16059 = state_14556__$1;
(statearr_14626_16059[(2)] = inst_14487);

(statearr_14626_16059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (5))){
var inst_14433 = cljs.core.deref(cs);
var inst_14434 = cljs.core.seq(inst_14433);
var inst_14435 = inst_14434;
var inst_14436 = null;
var inst_14437 = (0);
var inst_14438 = (0);
var state_14556__$1 = (function (){var statearr_14627 = state_14556;
(statearr_14627[(13)] = inst_14436);

(statearr_14627[(14)] = inst_14435);

(statearr_14627[(16)] = inst_14437);

(statearr_14627[(17)] = inst_14438);

return statearr_14627;
})();
var statearr_14628_16060 = state_14556__$1;
(statearr_14628_16060[(2)] = null);

(statearr_14628_16060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (14))){
var state_14556__$1 = state_14556;
var statearr_14629_16061 = state_14556__$1;
(statearr_14629_16061[(2)] = null);

(statearr_14629_16061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (45))){
var inst_14546 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14633_16062 = state_14556__$1;
(statearr_14633_16062[(2)] = inst_14546);

(statearr_14633_16062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (26))){
var inst_14490 = (state_14556[(27)]);
var inst_14542 = (state_14556[(2)]);
var inst_14543 = cljs.core.seq(inst_14490);
var state_14556__$1 = (function (){var statearr_14637 = state_14556;
(statearr_14637[(29)] = inst_14542);

return statearr_14637;
})();
if(inst_14543){
var statearr_14638_16066 = state_14556__$1;
(statearr_14638_16066[(1)] = (42));

} else {
var statearr_14639_16068 = state_14556__$1;
(statearr_14639_16068[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (16))){
var inst_14457 = (state_14556[(7)]);
var inst_14459 = cljs.core.chunked_seq_QMARK_(inst_14457);
var state_14556__$1 = state_14556;
if(inst_14459){
var statearr_14640_16069 = state_14556__$1;
(statearr_14640_16069[(1)] = (19));

} else {
var statearr_14641_16070 = state_14556__$1;
(statearr_14641_16070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (38))){
var inst_14535 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14642_16071 = state_14556__$1;
(statearr_14642_16071[(2)] = inst_14535);

(statearr_14642_16071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (30))){
var state_14556__$1 = state_14556;
var statearr_14643_16072 = state_14556__$1;
(statearr_14643_16072[(2)] = null);

(statearr_14643_16072[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (10))){
var inst_14436 = (state_14556[(13)]);
var inst_14438 = (state_14556[(17)]);
var inst_14446 = cljs.core._nth(inst_14436,inst_14438);
var inst_14447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14446,(0),null);
var inst_14448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14446,(1),null);
var state_14556__$1 = (function (){var statearr_14644 = state_14556;
(statearr_14644[(24)] = inst_14447);

return statearr_14644;
})();
if(cljs.core.truth_(inst_14448)){
var statearr_14645_16073 = state_14556__$1;
(statearr_14645_16073[(1)] = (13));

} else {
var statearr_14646_16074 = state_14556__$1;
(statearr_14646_16074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (18))){
var inst_14483 = (state_14556[(2)]);
var state_14556__$1 = state_14556;
var statearr_14647_16075 = state_14556__$1;
(statearr_14647_16075[(2)] = inst_14483);

(statearr_14647_16075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (42))){
var state_14556__$1 = state_14556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14556__$1,(45),dchan);
} else {
if((state_val_14557 === (37))){
var inst_14426 = (state_14556[(10)]);
var inst_14525 = (state_14556[(22)]);
var inst_14516 = (state_14556[(23)]);
var inst_14525__$1 = cljs.core.first(inst_14516);
var inst_14526 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14525__$1,inst_14426,done);
var state_14556__$1 = (function (){var statearr_14648 = state_14556;
(statearr_14648[(22)] = inst_14525__$1);

return statearr_14648;
})();
if(cljs.core.truth_(inst_14526)){
var statearr_14649_16076 = state_14556__$1;
(statearr_14649_16076[(1)] = (39));

} else {
var statearr_14650_16077 = state_14556__$1;
(statearr_14650_16077[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14557 === (8))){
var inst_14437 = (state_14556[(16)]);
var inst_14438 = (state_14556[(17)]);
var inst_14440 = (inst_14438 < inst_14437);
var inst_14441 = inst_14440;
var state_14556__$1 = state_14556;
if(cljs.core.truth_(inst_14441)){
var statearr_14651_16078 = state_14556__$1;
(statearr_14651_16078[(1)] = (10));

} else {
var statearr_14652_16079 = state_14556__$1;
(statearr_14652_16079[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13319__auto__ = null;
var cljs$core$async$mult_$_state_machine__13319__auto____0 = (function (){
var statearr_14653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14653[(0)] = cljs$core$async$mult_$_state_machine__13319__auto__);

(statearr_14653[(1)] = (1));

return statearr_14653;
});
var cljs$core$async$mult_$_state_machine__13319__auto____1 = (function (state_14556){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14556);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14654){var ex__13322__auto__ = e14654;
var statearr_14655_16080 = state_14556;
(statearr_14655_16080[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14556[(4)]))){
var statearr_14660_16082 = state_14556;
(statearr_14660_16082[(1)] = cljs.core.first((state_14556[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16083 = state_14556;
state_14556 = G__16083;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13319__auto__ = function(state_14556){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13319__auto____1.call(this,state_14556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13319__auto____0;
cljs$core$async$mult_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13319__auto____1;
return cljs$core$async$mult_$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14661 = f__13438__auto__();
(statearr_14661[(6)] = c__13437__auto___15970);

return statearr_14661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14663 = arguments.length;
switch (G__14663) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16086 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16086(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16093 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16093(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16094 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16094(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16095 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16095(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16096 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16096(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16098 = arguments.length;
var i__5770__auto___16100 = (0);
while(true){
if((i__5770__auto___16100 < len__5769__auto___16098)){
args__5775__auto__.push((arguments[i__5770__auto___16100]));

var G__16101 = (i__5770__auto___16100 + (1));
i__5770__auto___16100 = G__16101;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14670){
var map__14671 = p__14670;
var map__14671__$1 = cljs.core.__destructure_map(map__14671);
var opts = map__14671__$1;
var statearr_14672_16102 = state;
(statearr_14672_16102[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14673_16103 = state;
(statearr_14673_16103[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14674_16104 = state;
(statearr_14674_16104[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14666){
var G__14667 = cljs.core.first(seq14666);
var seq14666__$1 = cljs.core.next(seq14666);
var G__14668 = cljs.core.first(seq14666__$1);
var seq14666__$2 = cljs.core.next(seq14666__$1);
var G__14669 = cljs.core.first(seq14666__$2);
var seq14666__$3 = cljs.core.next(seq14666__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14667,G__14668,G__14669,seq14666__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14675 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14676){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14676 = meta14676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14677,meta14676__$1){
var self__ = this;
var _14677__$1 = this;
return (new cljs.core.async.t_cljs$core$async14675(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14676__$1));
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14677){
var self__ = this;
var _14677__$1 = this;
return self__.meta14676;
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14676","meta14676",-2044844835,null)], null);
}));

(cljs.core.async.t_cljs$core$async14675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14675");

(cljs.core.async.t_cljs$core$async14675.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14675.
 */
cljs.core.async.__GT_t_cljs$core$async14675 = (function cljs$core$async$__GT_t_cljs$core$async14675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14676){
return (new cljs.core.async.t_cljs$core$async14675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14676));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13437__auto___16113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14747){
var state_val_14748 = (state_14747[(1)]);
if((state_val_14748 === (7))){
var inst_14707 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
if(cljs.core.truth_(inst_14707)){
var statearr_14749_16114 = state_14747__$1;
(statearr_14749_16114[(1)] = (8));

} else {
var statearr_14750_16115 = state_14747__$1;
(statearr_14750_16115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (20))){
var inst_14700 = (state_14747[(7)]);
var state_14747__$1 = state_14747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14747__$1,(23),out,inst_14700);
} else {
if((state_val_14748 === (1))){
var inst_14683 = calc_state();
var inst_14684 = cljs.core.__destructure_map(inst_14683);
var inst_14685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14684,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14684,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14684,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14688 = inst_14683;
var state_14747__$1 = (function (){var statearr_14751 = state_14747;
(statearr_14751[(8)] = inst_14688);

(statearr_14751[(9)] = inst_14687);

(statearr_14751[(10)] = inst_14685);

(statearr_14751[(11)] = inst_14686);

return statearr_14751;
})();
var statearr_14753_16116 = state_14747__$1;
(statearr_14753_16116[(2)] = null);

(statearr_14753_16116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (24))){
var inst_14691 = (state_14747[(12)]);
var inst_14688 = inst_14691;
var state_14747__$1 = (function (){var statearr_14754 = state_14747;
(statearr_14754[(8)] = inst_14688);

return statearr_14754;
})();
var statearr_14755_16117 = state_14747__$1;
(statearr_14755_16117[(2)] = null);

(statearr_14755_16117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (4))){
var inst_14700 = (state_14747[(7)]);
var inst_14702 = (state_14747[(13)]);
var inst_14699 = (state_14747[(2)]);
var inst_14700__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14699,(0),null);
var inst_14701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14699,(1),null);
var inst_14702__$1 = (inst_14700__$1 == null);
var state_14747__$1 = (function (){var statearr_14756 = state_14747;
(statearr_14756[(14)] = inst_14701);

(statearr_14756[(7)] = inst_14700__$1);

(statearr_14756[(13)] = inst_14702__$1);

return statearr_14756;
})();
if(cljs.core.truth_(inst_14702__$1)){
var statearr_14757_16118 = state_14747__$1;
(statearr_14757_16118[(1)] = (5));

} else {
var statearr_14758_16119 = state_14747__$1;
(statearr_14758_16119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (15))){
var inst_14692 = (state_14747[(15)]);
var inst_14721 = (state_14747[(16)]);
var inst_14721__$1 = cljs.core.empty_QMARK_(inst_14692);
var state_14747__$1 = (function (){var statearr_14759 = state_14747;
(statearr_14759[(16)] = inst_14721__$1);

return statearr_14759;
})();
if(inst_14721__$1){
var statearr_14760_16120 = state_14747__$1;
(statearr_14760_16120[(1)] = (17));

} else {
var statearr_14761_16121 = state_14747__$1;
(statearr_14761_16121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (21))){
var inst_14691 = (state_14747[(12)]);
var inst_14688 = inst_14691;
var state_14747__$1 = (function (){var statearr_14762 = state_14747;
(statearr_14762[(8)] = inst_14688);

return statearr_14762;
})();
var statearr_14763_16122 = state_14747__$1;
(statearr_14763_16122[(2)] = null);

(statearr_14763_16122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (13))){
var inst_14714 = (state_14747[(2)]);
var inst_14715 = calc_state();
var inst_14688 = inst_14715;
var state_14747__$1 = (function (){var statearr_14764 = state_14747;
(statearr_14764[(8)] = inst_14688);

(statearr_14764[(17)] = inst_14714);

return statearr_14764;
})();
var statearr_14765_16125 = state_14747__$1;
(statearr_14765_16125[(2)] = null);

(statearr_14765_16125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (22))){
var inst_14741 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
var statearr_14766_16127 = state_14747__$1;
(statearr_14766_16127[(2)] = inst_14741);

(statearr_14766_16127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (6))){
var inst_14701 = (state_14747[(14)]);
var inst_14705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14701,change);
var state_14747__$1 = state_14747;
var statearr_14767_16128 = state_14747__$1;
(statearr_14767_16128[(2)] = inst_14705);

(statearr_14767_16128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (25))){
var state_14747__$1 = state_14747;
var statearr_14768_16129 = state_14747__$1;
(statearr_14768_16129[(2)] = null);

(statearr_14768_16129[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (17))){
var inst_14701 = (state_14747[(14)]);
var inst_14693 = (state_14747[(18)]);
var inst_14723 = (inst_14693.cljs$core$IFn$_invoke$arity$1 ? inst_14693.cljs$core$IFn$_invoke$arity$1(inst_14701) : inst_14693.call(null,inst_14701));
var inst_14724 = cljs.core.not(inst_14723);
var state_14747__$1 = state_14747;
var statearr_14769_16130 = state_14747__$1;
(statearr_14769_16130[(2)] = inst_14724);

(statearr_14769_16130[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (3))){
var inst_14745 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14747__$1,inst_14745);
} else {
if((state_val_14748 === (12))){
var state_14747__$1 = state_14747;
var statearr_14770_16131 = state_14747__$1;
(statearr_14770_16131[(2)] = null);

(statearr_14770_16131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (2))){
var inst_14688 = (state_14747[(8)]);
var inst_14691 = (state_14747[(12)]);
var inst_14691__$1 = cljs.core.__destructure_map(inst_14688);
var inst_14692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14691__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14691__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14691__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14747__$1 = (function (){var statearr_14771 = state_14747;
(statearr_14771[(18)] = inst_14693);

(statearr_14771[(15)] = inst_14692);

(statearr_14771[(12)] = inst_14691__$1);

return statearr_14771;
})();
return cljs.core.async.ioc_alts_BANG_(state_14747__$1,(4),inst_14694);
} else {
if((state_val_14748 === (23))){
var inst_14732 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
if(cljs.core.truth_(inst_14732)){
var statearr_14774_16133 = state_14747__$1;
(statearr_14774_16133[(1)] = (24));

} else {
var statearr_14775_16134 = state_14747__$1;
(statearr_14775_16134[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (19))){
var inst_14727 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
var statearr_14777_16135 = state_14747__$1;
(statearr_14777_16135[(2)] = inst_14727);

(statearr_14777_16135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (11))){
var inst_14701 = (state_14747[(14)]);
var inst_14711 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14701);
var state_14747__$1 = state_14747;
var statearr_14779_16136 = state_14747__$1;
(statearr_14779_16136[(2)] = inst_14711);

(statearr_14779_16136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (9))){
var inst_14701 = (state_14747[(14)]);
var inst_14718 = (state_14747[(19)]);
var inst_14692 = (state_14747[(15)]);
var inst_14718__$1 = (inst_14692.cljs$core$IFn$_invoke$arity$1 ? inst_14692.cljs$core$IFn$_invoke$arity$1(inst_14701) : inst_14692.call(null,inst_14701));
var state_14747__$1 = (function (){var statearr_14780 = state_14747;
(statearr_14780[(19)] = inst_14718__$1);

return statearr_14780;
})();
if(cljs.core.truth_(inst_14718__$1)){
var statearr_14781_16137 = state_14747__$1;
(statearr_14781_16137[(1)] = (14));

} else {
var statearr_14782_16138 = state_14747__$1;
(statearr_14782_16138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (5))){
var inst_14702 = (state_14747[(13)]);
var state_14747__$1 = state_14747;
var statearr_14783_16139 = state_14747__$1;
(statearr_14783_16139[(2)] = inst_14702);

(statearr_14783_16139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (14))){
var inst_14718 = (state_14747[(19)]);
var state_14747__$1 = state_14747;
var statearr_14784_16140 = state_14747__$1;
(statearr_14784_16140[(2)] = inst_14718);

(statearr_14784_16140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (26))){
var inst_14737 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
var statearr_14785_16141 = state_14747__$1;
(statearr_14785_16141[(2)] = inst_14737);

(statearr_14785_16141[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (16))){
var inst_14729 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
if(cljs.core.truth_(inst_14729)){
var statearr_14786_16142 = state_14747__$1;
(statearr_14786_16142[(1)] = (20));

} else {
var statearr_14787_16144 = state_14747__$1;
(statearr_14787_16144[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (10))){
var inst_14743 = (state_14747[(2)]);
var state_14747__$1 = state_14747;
var statearr_14788_16145 = state_14747__$1;
(statearr_14788_16145[(2)] = inst_14743);

(statearr_14788_16145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (18))){
var inst_14721 = (state_14747[(16)]);
var state_14747__$1 = state_14747;
var statearr_14789_16146 = state_14747__$1;
(statearr_14789_16146[(2)] = inst_14721);

(statearr_14789_16146[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14748 === (8))){
var inst_14700 = (state_14747[(7)]);
var inst_14709 = (inst_14700 == null);
var state_14747__$1 = state_14747;
if(cljs.core.truth_(inst_14709)){
var statearr_14790_16148 = state_14747__$1;
(statearr_14790_16148[(1)] = (11));

} else {
var statearr_14791_16149 = state_14747__$1;
(statearr_14791_16149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13319__auto__ = null;
var cljs$core$async$mix_$_state_machine__13319__auto____0 = (function (){
var statearr_14792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14792[(0)] = cljs$core$async$mix_$_state_machine__13319__auto__);

(statearr_14792[(1)] = (1));

return statearr_14792;
});
var cljs$core$async$mix_$_state_machine__13319__auto____1 = (function (state_14747){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14747);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14793){var ex__13322__auto__ = e14793;
var statearr_14794_16151 = state_14747;
(statearr_14794_16151[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14747[(4)]))){
var statearr_14795_16152 = state_14747;
(statearr_14795_16152[(1)] = cljs.core.first((state_14747[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16154 = state_14747;
state_14747 = G__16154;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13319__auto__ = function(state_14747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13319__auto____1.call(this,state_14747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13319__auto____0;
cljs$core$async$mix_$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13319__auto____1;
return cljs$core$async$mix_$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14796 = f__13438__auto__();
(statearr_14796[(6)] = c__13437__auto___16113);

return statearr_14796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16155 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16155(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16156 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16156(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16157 = (function() {
var G__16158 = null;
var G__16158__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16158__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16158 = function(p,v){
switch(arguments.length){
case 1:
return G__16158__1.call(this,p);
case 2:
return G__16158__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16158.cljs$core$IFn$_invoke$arity$1 = G__16158__1;
G__16158.cljs$core$IFn$_invoke$arity$2 = G__16158__2;
return G__16158;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14801 = arguments.length;
switch (G__14801) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16157(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16157(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14809 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14810){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14810 = meta14810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14811,meta14810__$1){
var self__ = this;
var _14811__$1 = this;
return (new cljs.core.async.t_cljs$core$async14809(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14810__$1));
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14811){
var self__ = this;
var _14811__$1 = this;
return self__.meta14810;
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14810","meta14810",-263022611,null)], null);
}));

(cljs.core.async.t_cljs$core$async14809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14809");

(cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14809.
 */
cljs.core.async.__GT_t_cljs$core$async14809 = (function cljs$core$async$__GT_t_cljs$core$async14809(ch,topic_fn,buf_fn,mults,ensure_mult,meta14810){
return (new cljs.core.async.t_cljs$core$async14809(ch,topic_fn,buf_fn,mults,ensure_mult,meta14810));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14804 = arguments.length;
switch (G__14804) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14802_SHARP_){
if(cljs.core.truth_((p1__14802_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14802_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14802_SHARP_.call(null,topic)))){
return p1__14802_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14802_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14809(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13437__auto___16161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14891){
var state_val_14892 = (state_14891[(1)]);
if((state_val_14892 === (7))){
var inst_14887 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14893_16163 = state_14891__$1;
(statearr_14893_16163[(2)] = inst_14887);

(statearr_14893_16163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (20))){
var state_14891__$1 = state_14891;
var statearr_14894_16168 = state_14891__$1;
(statearr_14894_16168[(2)] = null);

(statearr_14894_16168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (1))){
var state_14891__$1 = state_14891;
var statearr_14895_16169 = state_14891__$1;
(statearr_14895_16169[(2)] = null);

(statearr_14895_16169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (24))){
var inst_14870 = (state_14891[(7)]);
var inst_14879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14870);
var state_14891__$1 = state_14891;
var statearr_14896_16170 = state_14891__$1;
(statearr_14896_16170[(2)] = inst_14879);

(statearr_14896_16170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (4))){
var inst_14822 = (state_14891[(8)]);
var inst_14822__$1 = (state_14891[(2)]);
var inst_14823 = (inst_14822__$1 == null);
var state_14891__$1 = (function (){var statearr_14897 = state_14891;
(statearr_14897[(8)] = inst_14822__$1);

return statearr_14897;
})();
if(cljs.core.truth_(inst_14823)){
var statearr_14898_16171 = state_14891__$1;
(statearr_14898_16171[(1)] = (5));

} else {
var statearr_14899_16172 = state_14891__$1;
(statearr_14899_16172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (15))){
var inst_14864 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14900_16173 = state_14891__$1;
(statearr_14900_16173[(2)] = inst_14864);

(statearr_14900_16173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (21))){
var inst_14884 = (state_14891[(2)]);
var state_14891__$1 = (function (){var statearr_14901 = state_14891;
(statearr_14901[(9)] = inst_14884);

return statearr_14901;
})();
var statearr_14902_16174 = state_14891__$1;
(statearr_14902_16174[(2)] = null);

(statearr_14902_16174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (13))){
var inst_14846 = (state_14891[(10)]);
var inst_14848 = cljs.core.chunked_seq_QMARK_(inst_14846);
var state_14891__$1 = state_14891;
if(inst_14848){
var statearr_14903_16175 = state_14891__$1;
(statearr_14903_16175[(1)] = (16));

} else {
var statearr_14904_16176 = state_14891__$1;
(statearr_14904_16176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (22))){
var inst_14876 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14876)){
var statearr_14905_16177 = state_14891__$1;
(statearr_14905_16177[(1)] = (23));

} else {
var statearr_14906_16178 = state_14891__$1;
(statearr_14906_16178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (6))){
var inst_14872 = (state_14891[(11)]);
var inst_14822 = (state_14891[(8)]);
var inst_14870 = (state_14891[(7)]);
var inst_14870__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14822) : topic_fn.call(null,inst_14822));
var inst_14871 = cljs.core.deref(mults);
var inst_14872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14871,inst_14870__$1);
var state_14891__$1 = (function (){var statearr_14907 = state_14891;
(statearr_14907[(11)] = inst_14872__$1);

(statearr_14907[(7)] = inst_14870__$1);

return statearr_14907;
})();
if(cljs.core.truth_(inst_14872__$1)){
var statearr_14908_16182 = state_14891__$1;
(statearr_14908_16182[(1)] = (19));

} else {
var statearr_14909_16183 = state_14891__$1;
(statearr_14909_16183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (25))){
var inst_14881 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14910_16184 = state_14891__$1;
(statearr_14910_16184[(2)] = inst_14881);

(statearr_14910_16184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (17))){
var inst_14846 = (state_14891[(10)]);
var inst_14855 = cljs.core.first(inst_14846);
var inst_14856 = cljs.core.async.muxch_STAR_(inst_14855);
var inst_14857 = cljs.core.async.close_BANG_(inst_14856);
var inst_14858 = cljs.core.next(inst_14846);
var inst_14832 = inst_14858;
var inst_14833 = null;
var inst_14834 = (0);
var inst_14835 = (0);
var state_14891__$1 = (function (){var statearr_14911 = state_14891;
(statearr_14911[(12)] = inst_14835);

(statearr_14911[(13)] = inst_14857);

(statearr_14911[(14)] = inst_14834);

(statearr_14911[(15)] = inst_14832);

(statearr_14911[(16)] = inst_14833);

return statearr_14911;
})();
var statearr_14912_16190 = state_14891__$1;
(statearr_14912_16190[(2)] = null);

(statearr_14912_16190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (3))){
var inst_14889 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14891__$1,inst_14889);
} else {
if((state_val_14892 === (12))){
var inst_14866 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14913_16191 = state_14891__$1;
(statearr_14913_16191[(2)] = inst_14866);

(statearr_14913_16191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (2))){
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14891__$1,(4),ch);
} else {
if((state_val_14892 === (23))){
var state_14891__$1 = state_14891;
var statearr_14914_16192 = state_14891__$1;
(statearr_14914_16192[(2)] = null);

(statearr_14914_16192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (19))){
var inst_14872 = (state_14891[(11)]);
var inst_14822 = (state_14891[(8)]);
var inst_14874 = cljs.core.async.muxch_STAR_(inst_14872);
var state_14891__$1 = state_14891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14891__$1,(22),inst_14874,inst_14822);
} else {
if((state_val_14892 === (11))){
var inst_14846 = (state_14891[(10)]);
var inst_14832 = (state_14891[(15)]);
var inst_14846__$1 = cljs.core.seq(inst_14832);
var state_14891__$1 = (function (){var statearr_14915 = state_14891;
(statearr_14915[(10)] = inst_14846__$1);

return statearr_14915;
})();
if(inst_14846__$1){
var statearr_14916_16193 = state_14891__$1;
(statearr_14916_16193[(1)] = (13));

} else {
var statearr_14917_16194 = state_14891__$1;
(statearr_14917_16194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (9))){
var inst_14868 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14920_16195 = state_14891__$1;
(statearr_14920_16195[(2)] = inst_14868);

(statearr_14920_16195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (5))){
var inst_14829 = cljs.core.deref(mults);
var inst_14830 = cljs.core.vals(inst_14829);
var inst_14831 = cljs.core.seq(inst_14830);
var inst_14832 = inst_14831;
var inst_14833 = null;
var inst_14834 = (0);
var inst_14835 = (0);
var state_14891__$1 = (function (){var statearr_14921 = state_14891;
(statearr_14921[(12)] = inst_14835);

(statearr_14921[(14)] = inst_14834);

(statearr_14921[(15)] = inst_14832);

(statearr_14921[(16)] = inst_14833);

return statearr_14921;
})();
var statearr_14922_16196 = state_14891__$1;
(statearr_14922_16196[(2)] = null);

(statearr_14922_16196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (14))){
var state_14891__$1 = state_14891;
var statearr_14926_16197 = state_14891__$1;
(statearr_14926_16197[(2)] = null);

(statearr_14926_16197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (16))){
var inst_14846 = (state_14891[(10)]);
var inst_14850 = cljs.core.chunk_first(inst_14846);
var inst_14851 = cljs.core.chunk_rest(inst_14846);
var inst_14852 = cljs.core.count(inst_14850);
var inst_14832 = inst_14851;
var inst_14833 = inst_14850;
var inst_14834 = inst_14852;
var inst_14835 = (0);
var state_14891__$1 = (function (){var statearr_14928 = state_14891;
(statearr_14928[(12)] = inst_14835);

(statearr_14928[(14)] = inst_14834);

(statearr_14928[(15)] = inst_14832);

(statearr_14928[(16)] = inst_14833);

return statearr_14928;
})();
var statearr_14929_16201 = state_14891__$1;
(statearr_14929_16201[(2)] = null);

(statearr_14929_16201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (10))){
var inst_14835 = (state_14891[(12)]);
var inst_14834 = (state_14891[(14)]);
var inst_14832 = (state_14891[(15)]);
var inst_14833 = (state_14891[(16)]);
var inst_14840 = cljs.core._nth(inst_14833,inst_14835);
var inst_14841 = cljs.core.async.muxch_STAR_(inst_14840);
var inst_14842 = cljs.core.async.close_BANG_(inst_14841);
var inst_14843 = (inst_14835 + (1));
var tmp14923 = inst_14834;
var tmp14924 = inst_14832;
var tmp14925 = inst_14833;
var inst_14832__$1 = tmp14924;
var inst_14833__$1 = tmp14925;
var inst_14834__$1 = tmp14923;
var inst_14835__$1 = inst_14843;
var state_14891__$1 = (function (){var statearr_14930 = state_14891;
(statearr_14930[(12)] = inst_14835__$1);

(statearr_14930[(14)] = inst_14834__$1);

(statearr_14930[(15)] = inst_14832__$1);

(statearr_14930[(16)] = inst_14833__$1);

(statearr_14930[(17)] = inst_14842);

return statearr_14930;
})();
var statearr_14931_16202 = state_14891__$1;
(statearr_14931_16202[(2)] = null);

(statearr_14931_16202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (18))){
var inst_14861 = (state_14891[(2)]);
var state_14891__$1 = state_14891;
var statearr_14932_16203 = state_14891__$1;
(statearr_14932_16203[(2)] = inst_14861);

(statearr_14932_16203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14892 === (8))){
var inst_14835 = (state_14891[(12)]);
var inst_14834 = (state_14891[(14)]);
var inst_14837 = (inst_14835 < inst_14834);
var inst_14838 = inst_14837;
var state_14891__$1 = state_14891;
if(cljs.core.truth_(inst_14838)){
var statearr_14933_16204 = state_14891__$1;
(statearr_14933_16204[(1)] = (10));

} else {
var statearr_14934_16205 = state_14891__$1;
(statearr_14934_16205[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_14935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14935[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_14935[(1)] = (1));

return statearr_14935;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_14891){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14891);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e14936){var ex__13322__auto__ = e14936;
var statearr_14939_16206 = state_14891;
(statearr_14939_16206[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14891[(4)]))){
var statearr_14940_16207 = state_14891;
(statearr_14940_16207[(1)] = cljs.core.first((state_14891[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16211 = state_14891;
state_14891 = G__16211;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_14891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_14891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_14941 = f__13438__auto__();
(statearr_14941[(6)] = c__13437__auto___16161);

return statearr_14941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14943 = arguments.length;
switch (G__14943) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14949 = arguments.length;
switch (G__14949) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14953 = arguments.length;
switch (G__14953) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13437__auto___16220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_14996){
var state_val_14997 = (state_14996[(1)]);
if((state_val_14997 === (7))){
var state_14996__$1 = state_14996;
var statearr_14998_16222 = state_14996__$1;
(statearr_14998_16222[(2)] = null);

(statearr_14998_16222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (1))){
var state_14996__$1 = state_14996;
var statearr_15000_16223 = state_14996__$1;
(statearr_15000_16223[(2)] = null);

(statearr_15000_16223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (4))){
var inst_14957 = (state_14996[(7)]);
var inst_14956 = (state_14996[(8)]);
var inst_14959 = (inst_14957 < inst_14956);
var state_14996__$1 = state_14996;
if(cljs.core.truth_(inst_14959)){
var statearr_15001_16224 = state_14996__$1;
(statearr_15001_16224[(1)] = (6));

} else {
var statearr_15002_16225 = state_14996__$1;
(statearr_15002_16225[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (15))){
var inst_14982 = (state_14996[(9)]);
var inst_14987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14982);
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14996__$1,(17),out,inst_14987);
} else {
if((state_val_14997 === (13))){
var inst_14982 = (state_14996[(9)]);
var inst_14982__$1 = (state_14996[(2)]);
var inst_14983 = cljs.core.some(cljs.core.nil_QMARK_,inst_14982__$1);
var state_14996__$1 = (function (){var statearr_15003 = state_14996;
(statearr_15003[(9)] = inst_14982__$1);

return statearr_15003;
})();
if(cljs.core.truth_(inst_14983)){
var statearr_15004_16229 = state_14996__$1;
(statearr_15004_16229[(1)] = (14));

} else {
var statearr_15005_16230 = state_14996__$1;
(statearr_15005_16230[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (6))){
var state_14996__$1 = state_14996;
var statearr_15006_16231 = state_14996__$1;
(statearr_15006_16231[(2)] = null);

(statearr_15006_16231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (17))){
var inst_14989 = (state_14996[(2)]);
var state_14996__$1 = (function (){var statearr_15011 = state_14996;
(statearr_15011[(10)] = inst_14989);

return statearr_15011;
})();
var statearr_15012_16232 = state_14996__$1;
(statearr_15012_16232[(2)] = null);

(statearr_15012_16232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (3))){
var inst_14994 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14996__$1,inst_14994);
} else {
if((state_val_14997 === (12))){
var _ = (function (){var statearr_15013 = state_14996;
(statearr_15013[(4)] = cljs.core.rest((state_14996[(4)])));

return statearr_15013;
})();
var state_14996__$1 = state_14996;
var ex15009 = (state_14996__$1[(2)]);
var statearr_15014_16233 = state_14996__$1;
(statearr_15014_16233[(5)] = ex15009);


if((ex15009 instanceof Object)){
var statearr_15015_16234 = state_14996__$1;
(statearr_15015_16234[(1)] = (11));

(statearr_15015_16234[(5)] = null);

} else {
throw ex15009;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (2))){
var inst_14955 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14956 = cnt;
var inst_14957 = (0);
var state_14996__$1 = (function (){var statearr_15016 = state_14996;
(statearr_15016[(11)] = inst_14955);

(statearr_15016[(7)] = inst_14957);

(statearr_15016[(8)] = inst_14956);

return statearr_15016;
})();
var statearr_15017_16235 = state_14996__$1;
(statearr_15017_16235[(2)] = null);

(statearr_15017_16235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (11))){
var inst_14961 = (state_14996[(2)]);
var inst_14962 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14996__$1 = (function (){var statearr_15018 = state_14996;
(statearr_15018[(12)] = inst_14961);

return statearr_15018;
})();
var statearr_15019_16236 = state_14996__$1;
(statearr_15019_16236[(2)] = inst_14962);

(statearr_15019_16236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (9))){
var inst_14957 = (state_14996[(7)]);
var _ = (function (){var statearr_15021 = state_14996;
(statearr_15021[(4)] = cljs.core.cons((12),(state_14996[(4)])));

return statearr_15021;
})();
var inst_14968 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14957) : chs__$1.call(null,inst_14957));
var inst_14969 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14957) : done.call(null,inst_14957));
var inst_14970 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14968,inst_14969);
var ___$1 = (function (){var statearr_15022 = state_14996;
(statearr_15022[(4)] = cljs.core.rest((state_14996[(4)])));

return statearr_15022;
})();
var state_14996__$1 = state_14996;
var statearr_15023_16240 = state_14996__$1;
(statearr_15023_16240[(2)] = inst_14970);

(statearr_15023_16240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (5))){
var inst_14980 = (state_14996[(2)]);
var state_14996__$1 = (function (){var statearr_15024 = state_14996;
(statearr_15024[(13)] = inst_14980);

return statearr_15024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14996__$1,(13),dchan);
} else {
if((state_val_14997 === (14))){
var inst_14985 = cljs.core.async.close_BANG_(out);
var state_14996__$1 = state_14996;
var statearr_15025_16241 = state_14996__$1;
(statearr_15025_16241[(2)] = inst_14985);

(statearr_15025_16241[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (16))){
var inst_14992 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
var statearr_15026_16242 = state_14996__$1;
(statearr_15026_16242[(2)] = inst_14992);

(statearr_15026_16242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (10))){
var inst_14957 = (state_14996[(7)]);
var inst_14973 = (state_14996[(2)]);
var inst_14974 = (inst_14957 + (1));
var inst_14957__$1 = inst_14974;
var state_14996__$1 = (function (){var statearr_15027 = state_14996;
(statearr_15027[(14)] = inst_14973);

(statearr_15027[(7)] = inst_14957__$1);

return statearr_15027;
})();
var statearr_15028_16244 = state_14996__$1;
(statearr_15028_16244[(2)] = null);

(statearr_15028_16244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14997 === (8))){
var inst_14978 = (state_14996[(2)]);
var state_14996__$1 = state_14996;
var statearr_15029_16245 = state_14996__$1;
(statearr_15029_16245[(2)] = inst_14978);

(statearr_15029_16245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15030[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15030[(1)] = (1));

return statearr_15030;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_14996){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_14996);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15031){var ex__13322__auto__ = e15031;
var statearr_15032_16246 = state_14996;
(statearr_15032_16246[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_14996[(4)]))){
var statearr_15033_16247 = state_14996;
(statearr_15033_16247[(1)] = cljs.core.first((state_14996[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16248 = state_14996;
state_14996 = G__16248;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_14996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_14996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15034 = f__13438__auto__();
(statearr_15034[(6)] = c__13437__auto___16220);

return statearr_15034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15037 = arguments.length;
switch (G__15037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15069){
var state_val_15070 = (state_15069[(1)]);
if((state_val_15070 === (7))){
var inst_15049 = (state_15069[(7)]);
var inst_15048 = (state_15069[(8)]);
var inst_15048__$1 = (state_15069[(2)]);
var inst_15049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15048__$1,(0),null);
var inst_15050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15048__$1,(1),null);
var inst_15051 = (inst_15049__$1 == null);
var state_15069__$1 = (function (){var statearr_15071 = state_15069;
(statearr_15071[(7)] = inst_15049__$1);

(statearr_15071[(8)] = inst_15048__$1);

(statearr_15071[(9)] = inst_15050);

return statearr_15071;
})();
if(cljs.core.truth_(inst_15051)){
var statearr_15072_16255 = state_15069__$1;
(statearr_15072_16255[(1)] = (8));

} else {
var statearr_15073_16256 = state_15069__$1;
(statearr_15073_16256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (1))){
var inst_15038 = cljs.core.vec(chs);
var inst_15039 = inst_15038;
var state_15069__$1 = (function (){var statearr_15074 = state_15069;
(statearr_15074[(10)] = inst_15039);

return statearr_15074;
})();
var statearr_15075_16257 = state_15069__$1;
(statearr_15075_16257[(2)] = null);

(statearr_15075_16257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (4))){
var inst_15039 = (state_15069[(10)]);
var state_15069__$1 = state_15069;
return cljs.core.async.ioc_alts_BANG_(state_15069__$1,(7),inst_15039);
} else {
if((state_val_15070 === (6))){
var inst_15065 = (state_15069[(2)]);
var state_15069__$1 = state_15069;
var statearr_15076_16258 = state_15069__$1;
(statearr_15076_16258[(2)] = inst_15065);

(statearr_15076_16258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (3))){
var inst_15067 = (state_15069[(2)]);
var state_15069__$1 = state_15069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15069__$1,inst_15067);
} else {
if((state_val_15070 === (2))){
var inst_15039 = (state_15069[(10)]);
var inst_15041 = cljs.core.count(inst_15039);
var inst_15042 = (inst_15041 > (0));
var state_15069__$1 = state_15069;
if(cljs.core.truth_(inst_15042)){
var statearr_15080_16263 = state_15069__$1;
(statearr_15080_16263[(1)] = (4));

} else {
var statearr_15081_16264 = state_15069__$1;
(statearr_15081_16264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (11))){
var inst_15039 = (state_15069[(10)]);
var inst_15058 = (state_15069[(2)]);
var tmp15077 = inst_15039;
var inst_15039__$1 = tmp15077;
var state_15069__$1 = (function (){var statearr_15082 = state_15069;
(statearr_15082[(10)] = inst_15039__$1);

(statearr_15082[(11)] = inst_15058);

return statearr_15082;
})();
var statearr_15084_16265 = state_15069__$1;
(statearr_15084_16265[(2)] = null);

(statearr_15084_16265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (9))){
var inst_15049 = (state_15069[(7)]);
var state_15069__$1 = state_15069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15069__$1,(11),out,inst_15049);
} else {
if((state_val_15070 === (5))){
var inst_15063 = cljs.core.async.close_BANG_(out);
var state_15069__$1 = state_15069;
var statearr_15085_16266 = state_15069__$1;
(statearr_15085_16266[(2)] = inst_15063);

(statearr_15085_16266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (10))){
var inst_15061 = (state_15069[(2)]);
var state_15069__$1 = state_15069;
var statearr_15087_16268 = state_15069__$1;
(statearr_15087_16268[(2)] = inst_15061);

(statearr_15087_16268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15070 === (8))){
var inst_15039 = (state_15069[(10)]);
var inst_15049 = (state_15069[(7)]);
var inst_15048 = (state_15069[(8)]);
var inst_15050 = (state_15069[(9)]);
var inst_15053 = (function (){var cs = inst_15039;
var vec__15044 = inst_15048;
var v = inst_15049;
var c = inst_15050;
return (function (p1__15035_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15035_SHARP_);
});
})();
var inst_15054 = cljs.core.filterv(inst_15053,inst_15039);
var inst_15039__$1 = inst_15054;
var state_15069__$1 = (function (){var statearr_15088 = state_15069;
(statearr_15088[(10)] = inst_15039__$1);

return statearr_15088;
})();
var statearr_15090_16269 = state_15069__$1;
(statearr_15090_16269[(2)] = null);

(statearr_15090_16269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15093[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15093[(1)] = (1));

return statearr_15093;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15069){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15069);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15094){var ex__13322__auto__ = e15094;
var statearr_15095_16270 = state_15069;
(statearr_15095_16270[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15069[(4)]))){
var statearr_15096_16271 = state_15069;
(statearr_15096_16271[(1)] = cljs.core.first((state_15069[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16272 = state_15069;
state_15069 = G__16272;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15097 = f__13438__auto__();
(statearr_15097[(6)] = c__13437__auto___16250);

return statearr_15097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15099 = arguments.length;
switch (G__15099) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15124){
var state_val_15125 = (state_15124[(1)]);
if((state_val_15125 === (7))){
var inst_15106 = (state_15124[(7)]);
var inst_15106__$1 = (state_15124[(2)]);
var inst_15107 = (inst_15106__$1 == null);
var inst_15108 = cljs.core.not(inst_15107);
var state_15124__$1 = (function (){var statearr_15126 = state_15124;
(statearr_15126[(7)] = inst_15106__$1);

return statearr_15126;
})();
if(inst_15108){
var statearr_15127_16278 = state_15124__$1;
(statearr_15127_16278[(1)] = (8));

} else {
var statearr_15128_16279 = state_15124__$1;
(statearr_15128_16279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (1))){
var inst_15101 = (0);
var state_15124__$1 = (function (){var statearr_15129 = state_15124;
(statearr_15129[(8)] = inst_15101);

return statearr_15129;
})();
var statearr_15130_16280 = state_15124__$1;
(statearr_15130_16280[(2)] = null);

(statearr_15130_16280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (4))){
var state_15124__$1 = state_15124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15124__$1,(7),ch);
} else {
if((state_val_15125 === (6))){
var inst_15119 = (state_15124[(2)]);
var state_15124__$1 = state_15124;
var statearr_15131_16281 = state_15124__$1;
(statearr_15131_16281[(2)] = inst_15119);

(statearr_15131_16281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (3))){
var inst_15121 = (state_15124[(2)]);
var inst_15122 = cljs.core.async.close_BANG_(out);
var state_15124__$1 = (function (){var statearr_15136 = state_15124;
(statearr_15136[(9)] = inst_15121);

return statearr_15136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15124__$1,inst_15122);
} else {
if((state_val_15125 === (2))){
var inst_15101 = (state_15124[(8)]);
var inst_15103 = (inst_15101 < n);
var state_15124__$1 = state_15124;
if(cljs.core.truth_(inst_15103)){
var statearr_15137_16282 = state_15124__$1;
(statearr_15137_16282[(1)] = (4));

} else {
var statearr_15138_16284 = state_15124__$1;
(statearr_15138_16284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (11))){
var inst_15101 = (state_15124[(8)]);
var inst_15111 = (state_15124[(2)]);
var inst_15112 = (inst_15101 + (1));
var inst_15101__$1 = inst_15112;
var state_15124__$1 = (function (){var statearr_15139 = state_15124;
(statearr_15139[(10)] = inst_15111);

(statearr_15139[(8)] = inst_15101__$1);

return statearr_15139;
})();
var statearr_15140_16285 = state_15124__$1;
(statearr_15140_16285[(2)] = null);

(statearr_15140_16285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (9))){
var state_15124__$1 = state_15124;
var statearr_15145_16286 = state_15124__$1;
(statearr_15145_16286[(2)] = null);

(statearr_15145_16286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (5))){
var state_15124__$1 = state_15124;
var statearr_15150_16287 = state_15124__$1;
(statearr_15150_16287[(2)] = null);

(statearr_15150_16287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (10))){
var inst_15116 = (state_15124[(2)]);
var state_15124__$1 = state_15124;
var statearr_15151_16288 = state_15124__$1;
(statearr_15151_16288[(2)] = inst_15116);

(statearr_15151_16288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15125 === (8))){
var inst_15106 = (state_15124[(7)]);
var state_15124__$1 = state_15124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15124__$1,(11),out,inst_15106);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15154[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15154[(1)] = (1));

return statearr_15154;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15124){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15124);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15155){var ex__13322__auto__ = e15155;
var statearr_15156_16289 = state_15124;
(statearr_15156_16289[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15124[(4)]))){
var statearr_15157_16290 = state_15124;
(statearr_15157_16290[(1)] = cljs.core.first((state_15124[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16291 = state_15124;
state_15124 = G__16291;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15158 = f__13438__auto__();
(statearr_15158[(6)] = c__13437__auto___16275);

return statearr_15158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15185 = (function (f,ch,meta15164,_,fn1,meta15186){
this.f = f;
this.ch = ch;
this.meta15164 = meta15164;
this._ = _;
this.fn1 = fn1;
this.meta15186 = meta15186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15187,meta15186__$1){
var self__ = this;
var _15187__$1 = this;
return (new cljs.core.async.t_cljs$core$async15185(self__.f,self__.ch,self__.meta15164,self__._,self__.fn1,meta15186__$1));
}));

(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15187){
var self__ = this;
var _15187__$1 = this;
return self__.meta15186;
}));

(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15159_SHARP_){
var G__15201 = (((p1__15159_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15159_SHARP_) : self__.f.call(null,p1__15159_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15201) : f1.call(null,G__15201));
});
}));

(cljs.core.async.t_cljs$core$async15185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15164","meta15164",-246047895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15163","cljs.core.async/t_cljs$core$async15163",1217010963,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15186","meta15186",-1248668194,null)], null);
}));

(cljs.core.async.t_cljs$core$async15185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15185");

(cljs.core.async.t_cljs$core$async15185.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15185.
 */
cljs.core.async.__GT_t_cljs$core$async15185 = (function cljs$core$async$__GT_t_cljs$core$async15185(f,ch,meta15164,_,fn1,meta15186){
return (new cljs.core.async.t_cljs$core$async15185(f,ch,meta15164,_,fn1,meta15186));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15163 = (function (f,ch,meta15164){
this.f = f;
this.ch = ch;
this.meta15164 = meta15164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15165,meta15164__$1){
var self__ = this;
var _15165__$1 = this;
return (new cljs.core.async.t_cljs$core$async15163(self__.f,self__.ch,meta15164__$1));
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15165){
var self__ = this;
var _15165__$1 = this;
return self__.meta15164;
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15185(self__.f,self__.ch,self__.meta15164,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15203 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15203) : self__.f.call(null,G__15203));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15164","meta15164",-246047895,null)], null);
}));

(cljs.core.async.t_cljs$core$async15163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15163");

(cljs.core.async.t_cljs$core$async15163.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15163.
 */
cljs.core.async.__GT_t_cljs$core$async15163 = (function cljs$core$async$__GT_t_cljs$core$async15163(f,ch,meta15164){
return (new cljs.core.async.t_cljs$core$async15163(f,ch,meta15164));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15163(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15205 = (function (f,ch,meta15206){
this.f = f;
this.ch = ch;
this.meta15206 = meta15206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15207,meta15206__$1){
var self__ = this;
var _15207__$1 = this;
return (new cljs.core.async.t_cljs$core$async15205(self__.f,self__.ch,meta15206__$1));
}));

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15207){
var self__ = this;
var _15207__$1 = this;
return self__.meta15206;
}));

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15206","meta15206",-1174861081,null)], null);
}));

(cljs.core.async.t_cljs$core$async15205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15205");

(cljs.core.async.t_cljs$core$async15205.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15205.
 */
cljs.core.async.__GT_t_cljs$core$async15205 = (function cljs$core$async$__GT_t_cljs$core$async15205(f,ch,meta15206){
return (new cljs.core.async.t_cljs$core$async15205(f,ch,meta15206));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15205(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15224 = (function (p,ch,meta15225){
this.p = p;
this.ch = ch;
this.meta15225 = meta15225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15226,meta15225__$1){
var self__ = this;
var _15226__$1 = this;
return (new cljs.core.async.t_cljs$core$async15224(self__.p,self__.ch,meta15225__$1));
}));

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15226){
var self__ = this;
var _15226__$1 = this;
return self__.meta15225;
}));

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15225","meta15225",-1578689204,null)], null);
}));

(cljs.core.async.t_cljs$core$async15224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15224");

(cljs.core.async.t_cljs$core$async15224.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15224.
 */
cljs.core.async.__GT_t_cljs$core$async15224 = (function cljs$core$async$__GT_t_cljs$core$async15224(p,ch,meta15225){
return (new cljs.core.async.t_cljs$core$async15224(p,ch,meta15225));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15224(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15256 = arguments.length;
switch (G__15256) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15280){
var state_val_15281 = (state_15280[(1)]);
if((state_val_15281 === (7))){
var inst_15274 = (state_15280[(2)]);
var state_15280__$1 = state_15280;
var statearr_15295_16295 = state_15280__$1;
(statearr_15295_16295[(2)] = inst_15274);

(statearr_15295_16295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (1))){
var state_15280__$1 = state_15280;
var statearr_15296_16296 = state_15280__$1;
(statearr_15296_16296[(2)] = null);

(statearr_15296_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (4))){
var inst_15260 = (state_15280[(7)]);
var inst_15260__$1 = (state_15280[(2)]);
var inst_15261 = (inst_15260__$1 == null);
var state_15280__$1 = (function (){var statearr_15297 = state_15280;
(statearr_15297[(7)] = inst_15260__$1);

return statearr_15297;
})();
if(cljs.core.truth_(inst_15261)){
var statearr_15299_16297 = state_15280__$1;
(statearr_15299_16297[(1)] = (5));

} else {
var statearr_15300_16298 = state_15280__$1;
(statearr_15300_16298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (6))){
var inst_15260 = (state_15280[(7)]);
var inst_15265 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15260) : p.call(null,inst_15260));
var state_15280__$1 = state_15280;
if(cljs.core.truth_(inst_15265)){
var statearr_15302_16299 = state_15280__$1;
(statearr_15302_16299[(1)] = (8));

} else {
var statearr_15303_16300 = state_15280__$1;
(statearr_15303_16300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (3))){
var inst_15278 = (state_15280[(2)]);
var state_15280__$1 = state_15280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15280__$1,inst_15278);
} else {
if((state_val_15281 === (2))){
var state_15280__$1 = state_15280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15280__$1,(4),ch);
} else {
if((state_val_15281 === (11))){
var inst_15268 = (state_15280[(2)]);
var state_15280__$1 = state_15280;
var statearr_15306_16301 = state_15280__$1;
(statearr_15306_16301[(2)] = inst_15268);

(statearr_15306_16301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (9))){
var state_15280__$1 = state_15280;
var statearr_15309_16302 = state_15280__$1;
(statearr_15309_16302[(2)] = null);

(statearr_15309_16302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (5))){
var inst_15263 = cljs.core.async.close_BANG_(out);
var state_15280__$1 = state_15280;
var statearr_15310_16303 = state_15280__$1;
(statearr_15310_16303[(2)] = inst_15263);

(statearr_15310_16303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (10))){
var inst_15271 = (state_15280[(2)]);
var state_15280__$1 = (function (){var statearr_15314 = state_15280;
(statearr_15314[(8)] = inst_15271);

return statearr_15314;
})();
var statearr_15323_16304 = state_15280__$1;
(statearr_15323_16304[(2)] = null);

(statearr_15323_16304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15281 === (8))){
var inst_15260 = (state_15280[(7)]);
var state_15280__$1 = state_15280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15280__$1,(11),out,inst_15260);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15324 = [null,null,null,null,null,null,null,null,null];
(statearr_15324[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15324[(1)] = (1));

return statearr_15324;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15280){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15280);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15325){var ex__13322__auto__ = e15325;
var statearr_15326_16305 = state_15280;
(statearr_15326_16305[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15280[(4)]))){
var statearr_15327_16306 = state_15280;
(statearr_15327_16306[(1)] = cljs.core.first((state_15280[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16307 = state_15280;
state_15280 = G__16307;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15332 = f__13438__auto__();
(statearr_15332[(6)] = c__13437__auto___16294);

return statearr_15332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15335 = arguments.length;
switch (G__15335) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15402){
var state_val_15403 = (state_15402[(1)]);
if((state_val_15403 === (7))){
var inst_15398 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15404_16309 = state_15402__$1;
(statearr_15404_16309[(2)] = inst_15398);

(statearr_15404_16309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (20))){
var inst_15366 = (state_15402[(7)]);
var inst_15379 = (state_15402[(2)]);
var inst_15380 = cljs.core.next(inst_15366);
var inst_15352 = inst_15380;
var inst_15353 = null;
var inst_15354 = (0);
var inst_15355 = (0);
var state_15402__$1 = (function (){var statearr_15405 = state_15402;
(statearr_15405[(8)] = inst_15379);

(statearr_15405[(9)] = inst_15353);

(statearr_15405[(10)] = inst_15354);

(statearr_15405[(11)] = inst_15355);

(statearr_15405[(12)] = inst_15352);

return statearr_15405;
})();
var statearr_15406_16310 = state_15402__$1;
(statearr_15406_16310[(2)] = null);

(statearr_15406_16310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (1))){
var state_15402__$1 = state_15402;
var statearr_15407_16311 = state_15402__$1;
(statearr_15407_16311[(2)] = null);

(statearr_15407_16311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (4))){
var inst_15339 = (state_15402[(13)]);
var inst_15339__$1 = (state_15402[(2)]);
var inst_15340 = (inst_15339__$1 == null);
var state_15402__$1 = (function (){var statearr_15410 = state_15402;
(statearr_15410[(13)] = inst_15339__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15340)){
var statearr_15411_16312 = state_15402__$1;
(statearr_15411_16312[(1)] = (5));

} else {
var statearr_15412_16313 = state_15402__$1;
(statearr_15412_16313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (15))){
var state_15402__$1 = state_15402;
var statearr_15416_16314 = state_15402__$1;
(statearr_15416_16314[(2)] = null);

(statearr_15416_16314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (21))){
var state_15402__$1 = state_15402;
var statearr_15419_16315 = state_15402__$1;
(statearr_15419_16315[(2)] = null);

(statearr_15419_16315[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (13))){
var inst_15353 = (state_15402[(9)]);
var inst_15354 = (state_15402[(10)]);
var inst_15355 = (state_15402[(11)]);
var inst_15352 = (state_15402[(12)]);
var inst_15362 = (state_15402[(2)]);
var inst_15363 = (inst_15355 + (1));
var tmp15413 = inst_15353;
var tmp15414 = inst_15354;
var tmp15415 = inst_15352;
var inst_15352__$1 = tmp15415;
var inst_15353__$1 = tmp15413;
var inst_15354__$1 = tmp15414;
var inst_15355__$1 = inst_15363;
var state_15402__$1 = (function (){var statearr_15420 = state_15402;
(statearr_15420[(9)] = inst_15353__$1);

(statearr_15420[(14)] = inst_15362);

(statearr_15420[(10)] = inst_15354__$1);

(statearr_15420[(11)] = inst_15355__$1);

(statearr_15420[(12)] = inst_15352__$1);

return statearr_15420;
})();
var statearr_15421_16316 = state_15402__$1;
(statearr_15421_16316[(2)] = null);

(statearr_15421_16316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (22))){
var state_15402__$1 = state_15402;
var statearr_15422_16317 = state_15402__$1;
(statearr_15422_16317[(2)] = null);

(statearr_15422_16317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (6))){
var inst_15339 = (state_15402[(13)]);
var inst_15348 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15339) : f.call(null,inst_15339));
var inst_15349 = cljs.core.seq(inst_15348);
var inst_15352 = inst_15349;
var inst_15353 = null;
var inst_15354 = (0);
var inst_15355 = (0);
var state_15402__$1 = (function (){var statearr_15425 = state_15402;
(statearr_15425[(9)] = inst_15353);

(statearr_15425[(10)] = inst_15354);

(statearr_15425[(11)] = inst_15355);

(statearr_15425[(12)] = inst_15352);

return statearr_15425;
})();
var statearr_15426_16318 = state_15402__$1;
(statearr_15426_16318[(2)] = null);

(statearr_15426_16318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (17))){
var inst_15366 = (state_15402[(7)]);
var inst_15372 = cljs.core.chunk_first(inst_15366);
var inst_15373 = cljs.core.chunk_rest(inst_15366);
var inst_15374 = cljs.core.count(inst_15372);
var inst_15352 = inst_15373;
var inst_15353 = inst_15372;
var inst_15354 = inst_15374;
var inst_15355 = (0);
var state_15402__$1 = (function (){var statearr_15427 = state_15402;
(statearr_15427[(9)] = inst_15353);

(statearr_15427[(10)] = inst_15354);

(statearr_15427[(11)] = inst_15355);

(statearr_15427[(12)] = inst_15352);

return statearr_15427;
})();
var statearr_15428_16319 = state_15402__$1;
(statearr_15428_16319[(2)] = null);

(statearr_15428_16319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (3))){
var inst_15400 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15402__$1,inst_15400);
} else {
if((state_val_15403 === (12))){
var inst_15388 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15429_16320 = state_15402__$1;
(statearr_15429_16320[(2)] = inst_15388);

(statearr_15429_16320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (2))){
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15402__$1,(4),in$);
} else {
if((state_val_15403 === (23))){
var inst_15396 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15430_16326 = state_15402__$1;
(statearr_15430_16326[(2)] = inst_15396);

(statearr_15430_16326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (19))){
var inst_15383 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15431_16327 = state_15402__$1;
(statearr_15431_16327[(2)] = inst_15383);

(statearr_15431_16327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (11))){
var inst_15366 = (state_15402[(7)]);
var inst_15352 = (state_15402[(12)]);
var inst_15366__$1 = cljs.core.seq(inst_15352);
var state_15402__$1 = (function (){var statearr_15433 = state_15402;
(statearr_15433[(7)] = inst_15366__$1);

return statearr_15433;
})();
if(inst_15366__$1){
var statearr_15434_16329 = state_15402__$1;
(statearr_15434_16329[(1)] = (14));

} else {
var statearr_15435_16330 = state_15402__$1;
(statearr_15435_16330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (9))){
var inst_15390 = (state_15402[(2)]);
var inst_15391 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15402__$1 = (function (){var statearr_15436 = state_15402;
(statearr_15436[(15)] = inst_15390);

return statearr_15436;
})();
if(cljs.core.truth_(inst_15391)){
var statearr_15437_16331 = state_15402__$1;
(statearr_15437_16331[(1)] = (21));

} else {
var statearr_15438_16332 = state_15402__$1;
(statearr_15438_16332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (5))){
var inst_15342 = cljs.core.async.close_BANG_(out);
var state_15402__$1 = state_15402;
var statearr_15439_16334 = state_15402__$1;
(statearr_15439_16334[(2)] = inst_15342);

(statearr_15439_16334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (14))){
var inst_15366 = (state_15402[(7)]);
var inst_15368 = cljs.core.chunked_seq_QMARK_(inst_15366);
var state_15402__$1 = state_15402;
if(inst_15368){
var statearr_15440_16336 = state_15402__$1;
(statearr_15440_16336[(1)] = (17));

} else {
var statearr_15441_16337 = state_15402__$1;
(statearr_15441_16337[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (16))){
var inst_15386 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15442_16338 = state_15402__$1;
(statearr_15442_16338[(2)] = inst_15386);

(statearr_15442_16338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (10))){
var inst_15353 = (state_15402[(9)]);
var inst_15355 = (state_15402[(11)]);
var inst_15360 = cljs.core._nth(inst_15353,inst_15355);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15402__$1,(13),out,inst_15360);
} else {
if((state_val_15403 === (18))){
var inst_15366 = (state_15402[(7)]);
var inst_15377 = cljs.core.first(inst_15366);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15402__$1,(20),out,inst_15377);
} else {
if((state_val_15403 === (8))){
var inst_15354 = (state_15402[(10)]);
var inst_15355 = (state_15402[(11)]);
var inst_15357 = (inst_15355 < inst_15354);
var inst_15358 = inst_15357;
var state_15402__$1 = state_15402;
if(cljs.core.truth_(inst_15358)){
var statearr_15444_16339 = state_15402__$1;
(statearr_15444_16339[(1)] = (10));

} else {
var statearr_15446_16341 = state_15402__$1;
(statearr_15446_16341[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____0 = (function (){
var statearr_15448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15448[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__);

(statearr_15448[(1)] = (1));

return statearr_15448;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____1 = (function (state_15402){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15402);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15450){var ex__13322__auto__ = e15450;
var statearr_15451_16345 = state_15402;
(statearr_15451_16345[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15402[(4)]))){
var statearr_15452_16350 = state_15402;
(statearr_15452_16350[(1)] = cljs.core.first((state_15402[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16354 = state_15402;
state_15402 = G__16354;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__ = function(state_15402){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____1.call(this,state_15402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15453 = f__13438__auto__();
(statearr_15453[(6)] = c__13437__auto__);

return statearr_15453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));

return c__13437__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15456 = arguments.length;
switch (G__15456) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15477 = arguments.length;
switch (G__15477) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15508){
var state_val_15509 = (state_15508[(1)]);
if((state_val_15509 === (7))){
var inst_15502 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15514_16369 = state_15508__$1;
(statearr_15514_16369[(2)] = inst_15502);

(statearr_15514_16369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (1))){
var inst_15483 = null;
var state_15508__$1 = (function (){var statearr_15516 = state_15508;
(statearr_15516[(7)] = inst_15483);

return statearr_15516;
})();
var statearr_15518_16376 = state_15508__$1;
(statearr_15518_16376[(2)] = null);

(statearr_15518_16376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (4))){
var inst_15487 = (state_15508[(8)]);
var inst_15487__$1 = (state_15508[(2)]);
var inst_15488 = (inst_15487__$1 == null);
var inst_15489 = cljs.core.not(inst_15488);
var state_15508__$1 = (function (){var statearr_15522 = state_15508;
(statearr_15522[(8)] = inst_15487__$1);

return statearr_15522;
})();
if(inst_15489){
var statearr_15523_16383 = state_15508__$1;
(statearr_15523_16383[(1)] = (5));

} else {
var statearr_15524_16384 = state_15508__$1;
(statearr_15524_16384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (6))){
var state_15508__$1 = state_15508;
var statearr_15525_16385 = state_15508__$1;
(statearr_15525_16385[(2)] = null);

(statearr_15525_16385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (3))){
var inst_15504 = (state_15508[(2)]);
var inst_15506 = cljs.core.async.close_BANG_(out);
var state_15508__$1 = (function (){var statearr_15526 = state_15508;
(statearr_15526[(9)] = inst_15504);

return statearr_15526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15508__$1,inst_15506);
} else {
if((state_val_15509 === (2))){
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15508__$1,(4),ch);
} else {
if((state_val_15509 === (11))){
var inst_15487 = (state_15508[(8)]);
var inst_15496 = (state_15508[(2)]);
var inst_15483 = inst_15487;
var state_15508__$1 = (function (){var statearr_15527 = state_15508;
(statearr_15527[(10)] = inst_15496);

(statearr_15527[(7)] = inst_15483);

return statearr_15527;
})();
var statearr_15528_16386 = state_15508__$1;
(statearr_15528_16386[(2)] = null);

(statearr_15528_16386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (9))){
var inst_15487 = (state_15508[(8)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15508__$1,(11),out,inst_15487);
} else {
if((state_val_15509 === (5))){
var inst_15483 = (state_15508[(7)]);
var inst_15487 = (state_15508[(8)]);
var inst_15491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15487,inst_15483);
var state_15508__$1 = state_15508;
if(inst_15491){
var statearr_15530_16393 = state_15508__$1;
(statearr_15530_16393[(1)] = (8));

} else {
var statearr_15531_16394 = state_15508__$1;
(statearr_15531_16394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (10))){
var inst_15499 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15537_16395 = state_15508__$1;
(statearr_15537_16395[(2)] = inst_15499);

(statearr_15537_16395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (8))){
var inst_15483 = (state_15508[(7)]);
var tmp15529 = inst_15483;
var inst_15483__$1 = tmp15529;
var state_15508__$1 = (function (){var statearr_15541 = state_15508;
(statearr_15541[(7)] = inst_15483__$1);

return statearr_15541;
})();
var statearr_15543_16396 = state_15508__$1;
(statearr_15543_16396[(2)] = null);

(statearr_15543_16396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15547[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15547[(1)] = (1));

return statearr_15547;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15508){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15508);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15549){var ex__13322__auto__ = e15549;
var statearr_15550_16397 = state_15508;
(statearr_15550_16397[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15508[(4)]))){
var statearr_15555_16398 = state_15508;
(statearr_15555_16398[(1)] = cljs.core.first((state_15508[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16399 = state_15508;
state_15508 = G__16399;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15564 = f__13438__auto__();
(statearr_15564[(6)] = c__13437__auto___16368);

return statearr_15564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15566 = arguments.length;
switch (G__15566) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15608){
var state_val_15609 = (state_15608[(1)]);
if((state_val_15609 === (7))){
var inst_15604 = (state_15608[(2)]);
var state_15608__$1 = state_15608;
var statearr_15614_16402 = state_15608__$1;
(statearr_15614_16402[(2)] = inst_15604);

(statearr_15614_16402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (1))){
var inst_15570 = (new Array(n));
var inst_15571 = inst_15570;
var inst_15572 = (0);
var state_15608__$1 = (function (){var statearr_15619 = state_15608;
(statearr_15619[(7)] = inst_15572);

(statearr_15619[(8)] = inst_15571);

return statearr_15619;
})();
var statearr_15624_16403 = state_15608__$1;
(statearr_15624_16403[(2)] = null);

(statearr_15624_16403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (4))){
var inst_15575 = (state_15608[(9)]);
var inst_15575__$1 = (state_15608[(2)]);
var inst_15576 = (inst_15575__$1 == null);
var inst_15577 = cljs.core.not(inst_15576);
var state_15608__$1 = (function (){var statearr_15625 = state_15608;
(statearr_15625[(9)] = inst_15575__$1);

return statearr_15625;
})();
if(inst_15577){
var statearr_15627_16405 = state_15608__$1;
(statearr_15627_16405[(1)] = (5));

} else {
var statearr_15628_16406 = state_15608__$1;
(statearr_15628_16406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (15))){
var inst_15598 = (state_15608[(2)]);
var state_15608__$1 = state_15608;
var statearr_15629_16407 = state_15608__$1;
(statearr_15629_16407[(2)] = inst_15598);

(statearr_15629_16407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (13))){
var state_15608__$1 = state_15608;
var statearr_15633_16412 = state_15608__$1;
(statearr_15633_16412[(2)] = null);

(statearr_15633_16412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (6))){
var inst_15572 = (state_15608[(7)]);
var inst_15594 = (inst_15572 > (0));
var state_15608__$1 = state_15608;
if(cljs.core.truth_(inst_15594)){
var statearr_15634_16413 = state_15608__$1;
(statearr_15634_16413[(1)] = (12));

} else {
var statearr_15637_16414 = state_15608__$1;
(statearr_15637_16414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (3))){
var inst_15606 = (state_15608[(2)]);
var state_15608__$1 = state_15608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15608__$1,inst_15606);
} else {
if((state_val_15609 === (12))){
var inst_15571 = (state_15608[(8)]);
var inst_15596 = cljs.core.vec(inst_15571);
var state_15608__$1 = state_15608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15608__$1,(15),out,inst_15596);
} else {
if((state_val_15609 === (2))){
var state_15608__$1 = state_15608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15608__$1,(4),ch);
} else {
if((state_val_15609 === (11))){
var inst_15588 = (state_15608[(2)]);
var inst_15589 = (new Array(n));
var inst_15571 = inst_15589;
var inst_15572 = (0);
var state_15608__$1 = (function (){var statearr_15642 = state_15608;
(statearr_15642[(10)] = inst_15588);

(statearr_15642[(7)] = inst_15572);

(statearr_15642[(8)] = inst_15571);

return statearr_15642;
})();
var statearr_15643_16416 = state_15608__$1;
(statearr_15643_16416[(2)] = null);

(statearr_15643_16416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (9))){
var inst_15571 = (state_15608[(8)]);
var inst_15586 = cljs.core.vec(inst_15571);
var state_15608__$1 = state_15608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15608__$1,(11),out,inst_15586);
} else {
if((state_val_15609 === (5))){
var inst_15575 = (state_15608[(9)]);
var inst_15572 = (state_15608[(7)]);
var inst_15581 = (state_15608[(11)]);
var inst_15571 = (state_15608[(8)]);
var inst_15580 = (inst_15571[inst_15572] = inst_15575);
var inst_15581__$1 = (inst_15572 + (1));
var inst_15582 = (inst_15581__$1 < n);
var state_15608__$1 = (function (){var statearr_15649 = state_15608;
(statearr_15649[(11)] = inst_15581__$1);

(statearr_15649[(12)] = inst_15580);

return statearr_15649;
})();
if(cljs.core.truth_(inst_15582)){
var statearr_15653_16419 = state_15608__$1;
(statearr_15653_16419[(1)] = (8));

} else {
var statearr_15654_16420 = state_15608__$1;
(statearr_15654_16420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (14))){
var inst_15601 = (state_15608[(2)]);
var inst_15602 = cljs.core.async.close_BANG_(out);
var state_15608__$1 = (function (){var statearr_15658 = state_15608;
(statearr_15658[(13)] = inst_15601);

return statearr_15658;
})();
var statearr_15660_16424 = state_15608__$1;
(statearr_15660_16424[(2)] = inst_15602);

(statearr_15660_16424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (10))){
var inst_15592 = (state_15608[(2)]);
var state_15608__$1 = state_15608;
var statearr_15661_16425 = state_15608__$1;
(statearr_15661_16425[(2)] = inst_15592);

(statearr_15661_16425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15609 === (8))){
var inst_15581 = (state_15608[(11)]);
var inst_15571 = (state_15608[(8)]);
var tmp15655 = inst_15571;
var inst_15571__$1 = tmp15655;
var inst_15572 = inst_15581;
var state_15608__$1 = (function (){var statearr_15665 = state_15608;
(statearr_15665[(7)] = inst_15572);

(statearr_15665[(8)] = inst_15571__$1);

return statearr_15665;
})();
var statearr_15666_16426 = state_15608__$1;
(statearr_15666_16426[(2)] = null);

(statearr_15666_16426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15667[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15667[(1)] = (1));

return statearr_15667;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15608){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15608);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15668){var ex__13322__auto__ = e15668;
var statearr_15672_16433 = state_15608;
(statearr_15672_16433[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15608[(4)]))){
var statearr_15676_16434 = state_15608;
(statearr_15676_16434[(1)] = cljs.core.first((state_15608[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16439 = state_15608;
state_15608 = G__16439;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15680 = f__13438__auto__();
(statearr_15680[(6)] = c__13437__auto___16401);

return statearr_15680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15682 = arguments.length;
switch (G__15682) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13437__auto___16455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13438__auto__ = (function (){var switch__13317__auto__ = (function (state_15727){
var state_val_15728 = (state_15727[(1)]);
if((state_val_15728 === (7))){
var inst_15723 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15729_16456 = state_15727__$1;
(statearr_15729_16456[(2)] = inst_15723);

(statearr_15729_16456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (1))){
var inst_15683 = [];
var inst_15684 = inst_15683;
var inst_15685 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15727__$1 = (function (){var statearr_15730 = state_15727;
(statearr_15730[(7)] = inst_15685);

(statearr_15730[(8)] = inst_15684);

return statearr_15730;
})();
var statearr_15731_16457 = state_15727__$1;
(statearr_15731_16457[(2)] = null);

(statearr_15731_16457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (4))){
var inst_15688 = (state_15727[(9)]);
var inst_15688__$1 = (state_15727[(2)]);
var inst_15689 = (inst_15688__$1 == null);
var inst_15690 = cljs.core.not(inst_15689);
var state_15727__$1 = (function (){var statearr_15732 = state_15727;
(statearr_15732[(9)] = inst_15688__$1);

return statearr_15732;
})();
if(inst_15690){
var statearr_15733_16458 = state_15727__$1;
(statearr_15733_16458[(1)] = (5));

} else {
var statearr_15734_16459 = state_15727__$1;
(statearr_15734_16459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (15))){
var inst_15684 = (state_15727[(8)]);
var inst_15715 = cljs.core.vec(inst_15684);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(18),out,inst_15715);
} else {
if((state_val_15728 === (13))){
var inst_15710 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15735_16468 = state_15727__$1;
(statearr_15735_16468[(2)] = inst_15710);

(statearr_15735_16468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (6))){
var inst_15684 = (state_15727[(8)]);
var inst_15712 = inst_15684.length;
var inst_15713 = (inst_15712 > (0));
var state_15727__$1 = state_15727;
if(cljs.core.truth_(inst_15713)){
var statearr_15736_16470 = state_15727__$1;
(statearr_15736_16470[(1)] = (15));

} else {
var statearr_15737_16471 = state_15727__$1;
(statearr_15737_16471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (17))){
var inst_15720 = (state_15727[(2)]);
var inst_15721 = cljs.core.async.close_BANG_(out);
var state_15727__$1 = (function (){var statearr_15738 = state_15727;
(statearr_15738[(10)] = inst_15720);

return statearr_15738;
})();
var statearr_15739_16472 = state_15727__$1;
(statearr_15739_16472[(2)] = inst_15721);

(statearr_15739_16472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (3))){
var inst_15725 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15727__$1,inst_15725);
} else {
if((state_val_15728 === (12))){
var inst_15684 = (state_15727[(8)]);
var inst_15703 = cljs.core.vec(inst_15684);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(14),out,inst_15703);
} else {
if((state_val_15728 === (2))){
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(4),ch);
} else {
if((state_val_15728 === (11))){
var inst_15688 = (state_15727[(9)]);
var inst_15692 = (state_15727[(11)]);
var inst_15684 = (state_15727[(8)]);
var inst_15700 = inst_15684.push(inst_15688);
var tmp15740 = inst_15684;
var inst_15684__$1 = tmp15740;
var inst_15685 = inst_15692;
var state_15727__$1 = (function (){var statearr_15741 = state_15727;
(statearr_15741[(12)] = inst_15700);

(statearr_15741[(7)] = inst_15685);

(statearr_15741[(8)] = inst_15684__$1);

return statearr_15741;
})();
var statearr_15742_16473 = state_15727__$1;
(statearr_15742_16473[(2)] = null);

(statearr_15742_16473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (9))){
var inst_15685 = (state_15727[(7)]);
var inst_15696 = cljs.core.keyword_identical_QMARK_(inst_15685,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15727__$1 = state_15727;
var statearr_15743_16485 = state_15727__$1;
(statearr_15743_16485[(2)] = inst_15696);

(statearr_15743_16485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (5))){
var inst_15688 = (state_15727[(9)]);
var inst_15685 = (state_15727[(7)]);
var inst_15692 = (state_15727[(11)]);
var inst_15693 = (state_15727[(13)]);
var inst_15692__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15688) : f.call(null,inst_15688));
var inst_15693__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15692__$1,inst_15685);
var state_15727__$1 = (function (){var statearr_15744 = state_15727;
(statearr_15744[(11)] = inst_15692__$1);

(statearr_15744[(13)] = inst_15693__$1);

return statearr_15744;
})();
if(inst_15693__$1){
var statearr_15745_16492 = state_15727__$1;
(statearr_15745_16492[(1)] = (8));

} else {
var statearr_15746_16493 = state_15727__$1;
(statearr_15746_16493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (14))){
var inst_15688 = (state_15727[(9)]);
var inst_15692 = (state_15727[(11)]);
var inst_15705 = (state_15727[(2)]);
var inst_15706 = [];
var inst_15707 = inst_15706.push(inst_15688);
var inst_15684 = inst_15706;
var inst_15685 = inst_15692;
var state_15727__$1 = (function (){var statearr_15747 = state_15727;
(statearr_15747[(14)] = inst_15707);

(statearr_15747[(7)] = inst_15685);

(statearr_15747[(8)] = inst_15684);

(statearr_15747[(15)] = inst_15705);

return statearr_15747;
})();
var statearr_15748_16498 = state_15727__$1;
(statearr_15748_16498[(2)] = null);

(statearr_15748_16498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (16))){
var state_15727__$1 = state_15727;
var statearr_15749_16499 = state_15727__$1;
(statearr_15749_16499[(2)] = null);

(statearr_15749_16499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (10))){
var inst_15698 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
if(cljs.core.truth_(inst_15698)){
var statearr_15750_16500 = state_15727__$1;
(statearr_15750_16500[(1)] = (11));

} else {
var statearr_15751_16501 = state_15727__$1;
(statearr_15751_16501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (18))){
var inst_15717 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15752_16502 = state_15727__$1;
(statearr_15752_16502[(2)] = inst_15717);

(statearr_15752_16502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (8))){
var inst_15693 = (state_15727[(13)]);
var state_15727__$1 = state_15727;
var statearr_15753_16503 = state_15727__$1;
(statearr_15753_16503[(2)] = inst_15693);

(statearr_15753_16503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13319__auto__ = null;
var cljs$core$async$state_machine__13319__auto____0 = (function (){
var statearr_15754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15754[(0)] = cljs$core$async$state_machine__13319__auto__);

(statearr_15754[(1)] = (1));

return statearr_15754;
});
var cljs$core$async$state_machine__13319__auto____1 = (function (state_15727){
while(true){
var ret_value__13320__auto__ = (function (){try{while(true){
var result__13321__auto__ = switch__13317__auto__(state_15727);
if(cljs.core.keyword_identical_QMARK_(result__13321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13321__auto__;
}
break;
}
}catch (e15755){var ex__13322__auto__ = e15755;
var statearr_15756_16504 = state_15727;
(statearr_15756_16504[(2)] = ex__13322__auto__);


if(cljs.core.seq((state_15727[(4)]))){
var statearr_15757_16505 = state_15727;
(statearr_15757_16505[(1)] = cljs.core.first((state_15727[(4)])));

} else {
throw ex__13322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16508 = state_15727;
state_15727 = G__16508;
continue;
} else {
return ret_value__13320__auto__;
}
break;
}
});
cljs$core$async$state_machine__13319__auto__ = function(state_15727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13319__auto____1.call(this,state_15727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13319__auto____0;
cljs$core$async$state_machine__13319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13319__auto____1;
return cljs$core$async$state_machine__13319__auto__;
})()
})();
var state__13439__auto__ = (function (){var statearr_15758 = f__13438__auto__();
(statearr_15758[(6)] = c__13437__auto___16455);

return statearr_15758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13439__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
