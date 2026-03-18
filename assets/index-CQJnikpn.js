function w2(n,
a) {
  for(var s = 0; s < a.length; s++) {
    const r = a[s];
    if(typeof r != "string" &&  ! Array.isArray(r)) {
      for(const l in r) if(l !== "default" &&  ! (l in n)) {
        const f = Object.getOwnPropertyDescriptor(r,
        l);
        f && Object.defineProperty(n,
        l,
        f.get ? f:  {
          enumerable:  ! 0,
          get: () => r[l]
        })
      }
    }
  }
  return Object.freeze(Object.defineProperty(n,
  Symbol.toStringTag,
   {
    value: "Module"
  }))
}(function() {
  const a = document.createElement("link").relList;
  if(a && a.supports && a.supports("modulepreload")) return;
  for(const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l =>  {
    for(const f of l) if(f.type === "childList") for(const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
  }).observe(document,
   {
    childList:  ! 0,
    subtree:  ! 0
  });
  function s(l) {
    const f =  {
    };
    return l.integrity && (f.integrity = l.integrity),
    l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy),
    l.crossOrigin === "use-credentials" ? f.credentials = "include": l.crossOrigin === "anonymous" ? f.credentials = "omit": f.credentials = "same-origin",
    f
  }
  function r(l) {
    if(l.ep) return;
    l.ep =  ! 0;
    const f = s(l);
    fetch(l.href,
    f)
  }
})();
function u0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n,
  "default") ? n.default: n
}
var vf =  {
  exports:  {
  }
},
wo =  {
};
var oy;
function A2() {
  if(oy) return wo;
  oy = 1;
  var n = Symbol.for("react.transitional.element"),
  a = Symbol.for("react.fragment");
  function s(r,
  l,
  f) {
    var d = null;
    if(f !== void 0 && (d = "" + f),
    l.key !== void 0 && (d = "" + l.key),
    "key" in l) {
      f =  {
      };
      for(var h in l) h !== "key" && (f[h] = l[h])
    }
    else f = l;
    return l = f.ref,
     {
      $$typeof: n,
      type: r,
      key: d,
      ref: l !== void 0 ? l: null,
      props: f
    }
  }
  return wo.Fragment = a,
  wo.jsx = s,
  wo.jsxs = s,
  wo
}
var ry;
function T2() {
  return ry || (ry = 1,
  vf.exports = A2()),
  vf.exports
}
var x = T2(),
xf =  {
  exports:  {
  }
},
gt =  {
};
var ly;
function C2() {
  if(ly) return gt;
  ly = 1;
  var n = Symbol.for("react.transitional.element"),
  a = Symbol.for("react.portal"),
  s = Symbol.for("react.fragment"),
  r = Symbol.for("react.strict_mode"),
  l = Symbol.for("react.profiler"),
  f = Symbol.for("react.consumer"),
  d = Symbol.for("react.context"),
  h = Symbol.for("react.forward_ref"),
  g = Symbol.for("react.suspense"),
  m = Symbol.for("react.memo"),
  v = Symbol.for("react.lazy"),
  p = Symbol.for("react.activity"),
  E = Symbol.iterator;
  function w(R) {
    return R === null || typeof R != "object" ? null: (R = E && R[E] || R["@@iterator"],
    typeof R == "function" ? R: null)
  }
  var M =  {
    isMounted: function() {
      return ! 1
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  },
  A = Object.assign,
  C =  {
  };
  function D(R,
  Y,
  P) {
    this.props = R,
    this.context = Y,
    this.refs = C,
    this.updater = P || M
  }
  D.prototype.isReactComponent =  {
  },
  D.prototype.setState = function(R,
  Y) {
    if(typeof R != "object" && typeof R != "function" && R != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this,
    R,
    Y,
    "setState")
  },
  D.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this,
    R,
    "forceUpdate")
  };
  function B() {
  }
  B.prototype = D.prototype;
  function L(R,
  Y,
  P) {
    this.props = R,
    this.context = Y,
    this.refs = C,
    this.updater = P || M
  }
  var q = L.prototype = new B;
  q.constructor = L,
  A(q,
  D.prototype),
  q.isPureReactComponent =  ! 0;
  var Q = Array.isArray;
  function $() {
  }
  var F =  {
    H: null,
    A: null,
    T: null,
    S: null
  },
  X = Object.prototype.hasOwnProperty;
  function rt(R,
  Y,
  P) {
    var W = P.ref;
    return {
      $$typeof: n,
      type: R,
      key: Y,
      ref: W !== void 0 ? W: null,
      props: P
    }
  }
  function tt(R,
  Y) {
    return rt(R.type,
    Y,
    R.props)
  }
  function mt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === n
  }
  function pt(R) {
    var Y =  {
      "=": "=0",
      ":": "=2"
    };
    return "$" + R.replace(/[=:]/g,
    function(P) {
      return Y[P]
    })
  }
  var Rt = /\/+/g;
  function Nt(R,
  Y) {
    return typeof R == "object" && R !== null && R.key != null ? pt("" + R.key): Y.toString(36)
  }
  function yt(R) {
    switch(R.status) {
      case "fulfilled": return R.value;
      case "rejected": throw R.reason;
      default: switch(typeof R.status == "string" ? R.then($,
      $): (R.status = "pending",
      R.then(function(Y) {
        R.status === "pending" && (R.status = "fulfilled",
        R.value = Y)
      },
      function(Y) {
        R.status === "pending" && (R.status = "rejected",
        R.reason = Y)
      })),
      R.status) {
        case "fulfilled": return R.value;
        case "rejected": throw R.reason
      }
    }
    throw R
  }
  function O(R,
  Y,
  P,
  W,
  I) {
    var ct = typeof R;
    (ct === "undefined" || ct === "boolean") && (R = null);
    var ot =  ! 1;
    if(R === null) ot =  ! 0;
    else switch(ct) {
      case "bigint": case "string": case "number": ot =  ! 0;
      break;
      case "object": switch(R.$$typeof) {
        case n: case a: ot =  ! 0;
        break;
        case v: return ot = R._init,
        O(ot(R._payload),
        Y,
        P,
        W,
        I)
      }
    }
    if(ot) return I = I(R),
    ot = W === "" ? "." + Nt(R,
    0): W,
    Q(I) ? (P = "",
    ot != null && (P = ot.replace(Rt,
    "$&/") + "/"),
    O(I,
    Y,
    P,
    "",
    function(Ee) {
      return Ee
    })): I != null && (mt(I) && (I = tt(I,
    P + (I.key == null || R && R.key === I.key ? "": ("" + I.key).replace(Rt,
    "$&/") + "/") + ot)),
    Y.push(I)),
    1;
    ot = 0;
    var vt = W === "" ? ".": W + ":";
    if(Q(R)) for(var Mt = 0; Mt < R.length; Mt++) W = R[Mt],
    ct = vt + Nt(W,
    Mt),
    ot += O(W,
    Y,
    P,
    ct,
    I);
    else if(Mt = w(R),
    typeof Mt == "function") for(R = Mt.call(R),
    Mt = 0;
     ! (W = R.next()).done;
    ) W = W.value,
    ct = vt + Nt(W,
    Mt++),
    ot += O(W,
    Y,
    P,
    ct,
    I);
    else if(ct === "object") {
      if(typeof R.then == "function") return O(yt(R),
      Y,
      P,
      W,
      I);
      throw Y = String(R),
      Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}": Y) + "). If you meant to render a collection of children, use an array instead.")
    }
    return ot
  }
  function Z(R,
  Y,
  P) {
    if(R == null) return R;
    var W = [],
    I = 0;
    return O(R,
    W,
    "",
    "",
    function(ct) {
      return Y.call(P,
      ct,
      I++)
    }),
    W
  }
  function H(R) {
    if(R._status ===  - 1) {
      var Y = R._result;
      Y = Y(),
      Y.then(function(P) {
        (R._status === 0 || R._status ===  - 1) && (R._status = 1,
        R._result = P)
      },
      function(P) {
        (R._status === 0 || R._status ===  - 1) && (R._status = 2,
        R._result = P)
      }),
      R._status ===  - 1 && (R._status = 0,
      R._result = Y)
    }
    if(R._status === 1) return R._result.default;
    throw R._result
  }
  var ut = typeof reportError == "function" ? reportError: function(R) {
    if(typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error",
       {
        bubbles:  ! 0,
        cancelable:  ! 0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message): String(R),
        error: R
      });
      if( ! window.dispatchEvent(Y)) return
    }
    else if(typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException",
      R);
      return
    }
    console.error(R)
  },
  dt =  {
    map: Z,
    forEach: function(R,
    Y,
    P) {
      Z(R,
      function() {
        Y.apply(this,
        arguments)
      },
      P)
    },
    count: function(R) {
      var Y = 0;
      return Z(R,
      function() {
        Y++
      }),
      Y
    },
    toArray: function(R) {
      return Z(R,
      function(Y) {
        return Y
      }) || []
    },
    only: function(R) {
      if( ! mt(R)) throw Error("React.Children.only expected to receive a single React element child.");
      return R
    }
  };
  return gt.Activity = p,
  gt.Children = dt,
  gt.Component = D,
  gt.Fragment = s,
  gt.Profiler = l,
  gt.PureComponent = L,
  gt.StrictMode = r,
  gt.Suspense = g,
  gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F,
  gt.__COMPILER_RUNTIME =  {
    __proto__: null,
    c: function(R) {
      return F.H.useMemoCache(R)
    }
  },
  gt.cache = function(R) {
    return function() {
      return R.apply(null,
      arguments)
    }
  },
  gt.cacheSignal = function() {
    return null
  },
  gt.cloneElement = function(R,
  Y,
  P) {
    if(R == null) throw Error("The argument must be a React element, but you passed " + R + ".");
    var W = A( {
    },
    R.props),
    I = R.key;
    if(Y != null) for(ct in Y.key !== void 0 && (I = "" + Y.key),
    Y) ! X.call(Y,
    ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && Y.ref === void 0 || (W[ct] = Y[ct]);
    var ct = arguments.length - 2;
    if(ct === 1) W.children = P;
    else if(1 < ct) {
      for(var ot = Array(ct),
      vt = 0;
      vt < ct;
      vt++) ot[vt] = arguments[vt + 2];
      W.children = ot
    }
    return rt(R.type,
    I,
    W)
  },
  gt.createContext = function(R) {
    return R =  {
      $$typeof: d,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    },
    R.Provider = R,
    R.Consumer =  {
      $$typeof: f,
      _context: R
    },
    R
  },
  gt.createElement = function(R,
  Y,
  P) {
    var W,
    I =  {
    },
    ct = null;
    if(Y != null) for(W in Y.key !== void 0 && (ct = "" + Y.key),
    Y) X.call(Y,
    W) && W !== "key" && W !== "__self" && W !== "__source" && (I[W] = Y[W]);
    var ot = arguments.length - 2;
    if(ot === 1) I.children = P;
    else if(1 < ot) {
      for(var vt = Array(ot),
      Mt = 0;
      Mt < ot;
      Mt++) vt[Mt] = arguments[Mt + 2];
      I.children = vt
    }
    if(R && R.defaultProps) for(W in ot = R.defaultProps,
    ot) I[W] === void 0 && (I[W] = ot[W]);
    return rt(R,
    ct,
    I)
  },
  gt.createRef = function() {
    return {
      current: null
    }
  },
  gt.forwardRef = function(R) {
    return {
      $$typeof: h,
      render: R
    }
  },
  gt.isValidElement = mt,
  gt.lazy = function(R) {
    return {
      $$typeof: v,
      _payload:  {
        _status:  - 1,
        _result: R
      },
      _init: H
    }
  },
  gt.memo = function(R,
  Y) {
    return {
      $$typeof: m,
      type: R,
      compare: Y === void 0 ? null: Y
    }
  },
  gt.startTransition = function(R) {
    var Y = F.T,
    P =  {
    };
    F.T = P;
    try {
      var W = R(),
      I = F.S;
      I !== null && I(P,
      W),
      typeof W == "object" && W !== null && typeof W.then == "function" && W.then($,
      ut)
    }
    catch(ct) {
      ut(ct)
    }
    finally {
      Y !== null && P.types !== null && (Y.types = P.types),
      F.T = Y
    }
  },
  gt.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh()
  },
  gt.use = function(R) {
    return F.H.use(R)
  },
  gt.useActionState = function(R,
  Y,
  P) {
    return F.H.useActionState(R,
    Y,
    P)
  },
  gt.useCallback = function(R,
  Y) {
    return F.H.useCallback(R,
    Y)
  },
  gt.useContext = function(R) {
    return F.H.useContext(R)
  },
  gt.useDebugValue = function() {
  },
  gt.useDeferredValue = function(R,
  Y) {
    return F.H.useDeferredValue(R,
    Y)
  },
  gt.useEffect = function(R,
  Y) {
    return F.H.useEffect(R,
    Y)
  },
  gt.useEffectEvent = function(R) {
    return F.H.useEffectEvent(R)
  },
  gt.useId = function() {
    return F.H.useId()
  },
  gt.useImperativeHandle = function(R,
  Y,
  P) {
    return F.H.useImperativeHandle(R,
    Y,
    P)
  },
  gt.useInsertionEffect = function(R,
  Y) {
    return F.H.useInsertionEffect(R,
    Y)
  },
  gt.useLayoutEffect = function(R,
  Y) {
    return F.H.useLayoutEffect(R,
    Y)
  },
  gt.useMemo = function(R,
  Y) {
    return F.H.useMemo(R,
    Y)
  },
  gt.useOptimistic = function(R,
  Y) {
    return F.H.useOptimistic(R,
    Y)
  },
  gt.useReducer = function(R,
  Y,
  P) {
    return F.H.useReducer(R,
    Y,
    P)
  },
  gt.useRef = function(R) {
    return F.H.useRef(R)
  },
  gt.useState = function(R) {
    return F.H.useState(R)
  },
  gt.useSyncExternalStore = function(R,
  Y,
  P) {
    return F.H.useSyncExternalStore(R,
    Y,
    P)
  },
  gt.useTransition = function() {
    return F.H.useTransition()
  },
  gt.version = "19.2.3",
  gt
}
var cy;
function Dd() {
  return cy || (cy = 1,
  xf.exports = C2()),
  xf.exports
}
var S = Dd();
const J = u0(S),
jd = w2( {
  __proto__: null,
  default: J
},
[S]);
var bf =  {
  exports:  {
  }
},
Ao =  {
},
Sf =  {
  exports:  {
  }
},
Ef =  {
};
var uy;
function M2() {
  return uy || (uy = 1,
  (function(n) {
    function a(O,
    Z) {
      var H = O.length;
      O.push(Z);
      t: for(; 0 < H; ) {
        var ut = H - 1 >>> 1,
        dt = O[ut];
        if(0 < l(dt,
        Z)) O[ut] = Z,
        O[H] = dt,
        H = ut;
        else break t
      }
    }
    function s(O) {
      return O.length === 0 ? null: O[0]
    }
    function r(O) {
      if(O.length === 0) return null;
      var Z = O[0],
      H = O.pop();
      if(H !== Z) {
        O[0] = H;
        t: for(var ut = 0,
        dt = O.length,
        R = dt >>> 1; ut < R; ) {
          var Y = 2 * (ut + 1) - 1,
          P = O[Y],
          W = Y + 1,
          I = O[W];
          if(0 > l(P,
          H)) W < dt && 0 > l(I,
          P) ? (O[ut] = I,
          O[W] = H,
          ut = W): (O[ut] = P,
          O[Y] = H,
          ut = Y);
          else if(W < dt && 0 > l(I,
          H)) O[ut] = I,
          O[W] = H,
          ut = W;
          else break t
        }
      }
      return Z
    }
    function l(O,
    Z) {
      var H = O.sortIndex - Z.sortIndex;
      return H !== 0 ? H: O.id - Z.id
    }
    if(n.unstable_now = void 0,
    typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      n.unstable_now = function() {
        return f.now()
      }
    }
    else {
      var d = Date,
      h = d.now();
      n.unstable_now = function() {
        return d.now() - h
      }
    }
    var g = [],
    m = [],
    v = 1,
    p = null,
    E = 3,
    w =  ! 1,
    M =  ! 1,
    A =  ! 1,
    C =  ! 1,
    D = typeof setTimeout == "function" ? setTimeout: null,
    B = typeof clearTimeout == "function" ? clearTimeout: null,
    L = typeof setImmediate < "u" ? setImmediate: null;
    function q(O) {
      for(var Z = s(m);
      Z !== null;
      ) {
        if(Z.callback === null) r(m);
        else if(Z.startTime <= O) r(m),
        Z.sortIndex = Z.expirationTime,
        a(g,
        Z);
        else break;
        Z = s(m)
      }
    }
    function Q(O) {
      if(A =  ! 1,
      q(O),
       ! M) if(s(g) !== null) M =  ! 0,
      $ || ($ =  ! 0,
      pt());
      else {
        var Z = s(m);
        Z !== null && yt(Q,
        Z.startTime - O)
      }
    }
    var $ =  ! 1,
    F =  - 1,
    X = 5,
    rt =  - 1;
    function tt() {
      return C ?  ! 0:  ! (n.unstable_now() - rt < X)
    }
    function mt() {
      if(C =  ! 1,
      $) {
        var O = n.unstable_now();
        rt = O;
        var Z =  ! 0;
        try {
          t:  {
            M =  ! 1,
            A && (A =  ! 1,
            B(F),
            F =  - 1),
            w =  ! 0;
            var H = E;
            try {
              e:  {
                for(q(O),
                p = s(g);
                p !== null &&  ! (p.expirationTime > O && tt());
                ) {
                  var ut = p.callback;
                  if(typeof ut == "function") {
                    p.callback = null,
                    E = p.priorityLevel;
                    var dt = ut(p.expirationTime <= O);
                    if(O = n.unstable_now(),
                    typeof dt == "function") {
                      p.callback = dt,
                      q(O),
                      Z =  ! 0;
                      break e
                    }
                    p === s(g) && r(g),
                    q(O)
                  }
                  else r(g);
                  p = s(g)
                }
                if(p !== null) Z =  ! 0;
                else {
                  var R = s(m);
                  R !== null && yt(Q,
                  R.startTime - O),
                  Z =  ! 1
                }
              }
              break t
            }
            finally {
              p = null,
              E = H,
              w =  ! 1
            }
            Z = void 0
          }
        }
        finally {
          Z ? pt(): $ =  ! 1
        }
      }
    }
    var pt;
    if(typeof L == "function") pt = function() {
      L(mt)
    };
    else if(typeof MessageChannel < "u") {
      var Rt = new MessageChannel,
      Nt = Rt.port2;
      Rt.port1.onmessage = mt,
      pt = function() {
        Nt.postMessage(null)
      }
    }
    else pt = function() {
      D(mt,
      0)
    };
    function yt(O,
    Z) {
      F = D(function() {
        O(n.unstable_now())
      },
      Z)
    }
    n.unstable_IdlePriority = 5,
    n.unstable_ImmediatePriority = 1,
    n.unstable_LowPriority = 4,
    n.unstable_NormalPriority = 3,
    n.unstable_Profiling = null,
    n.unstable_UserBlockingPriority = 2,
    n.unstable_cancelCallback = function(O) {
      O.callback = null
    },
    n.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"): X = 0 < O ? Math.floor(1e3 / O): 5
    },
    n.unstable_getCurrentPriorityLevel = function() {
      return E
    },
    n.unstable_next = function(O) {
      switch(E) {
        case 1: case 2: case 3: var Z = 3;
        break;
        default: Z = E
      }
      var H = E;
      E = Z;
      try {
        return O()
      }
      finally {
        E = H
      }
    },
    n.unstable_requestPaint = function() {
      C =  ! 0
    },
    n.unstable_runWithPriority = function(O,
    Z) {
      switch(O) {
        case 1: case 2: case 3: case 4: case 5: break;
        default: O = 3
      }
      var H = E;
      E = O;
      try {
        return Z()
      }
      finally {
        E = H
      }
    },
    n.unstable_scheduleCallback = function(O,
    Z,
    H) {
      var ut = n.unstable_now();
      switch(typeof H == "object" && H !== null ? (H = H.delay,
      H = typeof H == "number" && 0 < H ? ut + H: ut): H = ut,
      O) {
        case 1: var dt =  - 1;
        break;
        case 2: dt = 250;
        break;
        case 5: dt = 1073741823;
        break;
        case 4: dt = 1e4;
        break;
        default: dt = 5e3
      }
      return dt = H + dt,
      O =  {
        id: v++,
        callback: Z,
        priorityLevel: O,
        startTime: H,
        expirationTime: dt,
        sortIndex:  - 1
      },
      H > ut ? (O.sortIndex = H,
      a(m,
      O),
      s(g) === null && O === s(m) && (A ? (B(F),
      F =  - 1): A =  ! 0,
      yt(Q,
      H - ut))): (O.sortIndex = dt,
      a(g,
      O),
      M || w || (M =  ! 0,
      $ || ($ =  ! 0,
      pt()))),
      O
    },
    n.unstable_shouldYield = tt,
    n.unstable_wrapCallback = function(O) {
      var Z = E;
      return function() {
        var H = E;
        E = Z;
        try {
          return O.apply(this,
          arguments)
        }
        finally {
          E = H
        }
      }
    }
  })(Ef)),
  Ef
}
var fy;
function R2() {
  return fy || (fy = 1,
  Sf.exports = M2()),
  Sf.exports
}
var wf =  {
  exports:  {
  }
},
Se =  {
};
var dy;
function N2() {
  if(dy) return Se;
  dy = 1;
  var n = Dd();
  function a(g) {
    var m = "https://react.dev/errors/" + g;
    if(1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for(var v = 2; v < arguments.length; v++) m += "&args[]=" + encodeURIComponent(arguments[v])
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function s() {
  }
  var r =  {
    d:  {
      f: s,
      r: function() {
        throw Error(a(522))
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  },
  l = Symbol.for("react.portal");
  function f(g,
  m,
  v) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3]: null;
    return {
      $$typeof: l,
      key: p == null ? null: "" + p,
      children: g,
      containerInfo: m,
      implementation: v
    }
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g,
  m) {
    if(g === "font") return "";
    if(typeof m == "string") return m === "use-credentials" ? m: ""
  }
  return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
  Se.createPortal = function(g,
  m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2]: null;
    if( ! m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(a(299));
    return f(g,
    m,
    null,
    v)
  },
  Se.flushSync = function(g) {
    var m = d.T,
    v = r.p;
    try {
      if(d.T = null,
      r.p = 2,
      g) return g()
    }
    finally {
      d.T = m,
      r.p = v,
      r.d.f()
    }
  },
  Se.preconnect = function(g,
  m) {
    typeof g == "string" && (m ? (m = m.crossOrigin,
    m = typeof m == "string" ? m === "use-credentials" ? m: "": void 0): m = null,
    r.d.C(g,
    m))
  },
  Se.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g)
  },
  Se.preinit = function(g,
  m) {
    if(typeof g == "string" && m && typeof m.as == "string") {
      var v = m.as,
      p = h(v,
      m.crossOrigin),
      E = typeof m.integrity == "string" ? m.integrity: void 0,
      w = typeof m.fetchPriority == "string" ? m.fetchPriority: void 0;
      v === "style" ? r.d.S(g,
      typeof m.precedence == "string" ? m.precedence: void 0,
       {
        crossOrigin: p,
        integrity: E,
        fetchPriority: w
      }): v === "script" && r.d.X(g,
       {
        crossOrigin: p,
        integrity: E,
        fetchPriority: w,
        nonce: typeof m.nonce == "string" ? m.nonce: void 0
      })
    }
  },
  Se.preinitModule = function(g,
  m) {
    if(typeof g == "string") if(typeof m == "object" && m !== null) {
      if(m.as == null || m.as === "script") {
        var v = h(m.as,
        m.crossOrigin);
        r.d.M(g,
         {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity: void 0,
          nonce: typeof m.nonce == "string" ? m.nonce: void 0
        })
      }
    }
    else m == null && r.d.M(g)
  },
  Se.preload = function(g,
  m) {
    if(typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as,
      p = h(v,
      m.crossOrigin);
      r.d.L(g,
      v,
       {
        crossOrigin: p,
        integrity: typeof m.integrity == "string" ? m.integrity: void 0,
        nonce: typeof m.nonce == "string" ? m.nonce: void 0,
        type: typeof m.type == "string" ? m.type: void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority: void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy: void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet: void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes: void 0,
        media: typeof m.media == "string" ? m.media: void 0
      })
    }
  },
  Se.preloadModule = function(g,
  m) {
    if(typeof g == "string") if(m) {
      var v = h(m.as,
      m.crossOrigin);
      r.d.m(g,
       {
        as: typeof m.as == "string" && m.as !== "script" ? m.as: void 0,
        crossOrigin: v,
        integrity: typeof m.integrity == "string" ? m.integrity: void 0
      })
    }
    else r.d.m(g)
  },
  Se.requestFormReset = function(g) {
    r.d.r(g)
  },
  Se.unstable_batchedUpdates = function(g,
  m) {
    return g(m)
  },
  Se.useFormState = function(g,
  m,
  v) {
    return d.H.useFormState(g,
    m,
    v)
  },
  Se.useFormStatus = function() {
    return d.H.useHostTransitionStatus()
  },
  Se.version = "19.2.3",
  Se
}
var hy;
function f0() {
  if(hy) return wf.exports;
  hy = 1;
  function n() {
    if( ! (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
    }
    catch(a) {
      console.error(a)
    }
  }
  return n(),
  wf.exports = N2(),
  wf.exports
}
var my;
function D2() {
  if(my) return Ao;
  my = 1;
  var n = R2(),
  a = Dd(),
  s = f0();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if(1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for(var i = 2; i < arguments.length; i++) e += "&args[]=" + encodeURIComponent(arguments[i])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function l(t) {
    return ! ( ! t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }
  function f(t) {
    var e = t,
    i = t;
    if(t.alternate) for(; e.return; ) e = e.return;
    else {
      t = e;
      do e = t,
      (e.flags & 4098) !== 0 && (i = e.return),
      t = e.return;
      while(t)
    }
    return e.tag === 3 ? i: null
  }
  function d(t) {
    if(t.tag === 13) {
      var e = t.memoizedState;
      if(e === null && (t = t.alternate,
      t !== null && (e = t.memoizedState)),
      e !== null) return e.dehydrated
    }
    return null
  }
  function h(t) {
    if(t.tag === 31) {
      var e = t.memoizedState;
      if(e === null && (t = t.alternate,
      t !== null && (e = t.memoizedState)),
      e !== null) return e.dehydrated
    }
    return null
  }
  function g(t) {
    if(f(t) !== t) throw Error(r(188))
  }
  function m(t) {
    var e = t.alternate;
    if( ! e) {
      if(e = f(t),
      e === null) throw Error(r(188));
      return e !== t ? null: t
    }
    for(var i = t,
    o = e; ; ) {
      var c = i.return;
      if(c === null) break;
      var u = c.alternate;
      if(u === null) {
        if(o = c.return,
        o !== null) {
          i = o;
          continue
        }
        break
      }
      if(c.child === u.child) {
        for(u = c.child; u; ) {
          if(u === i) return g(c),
          t;
          if(u === o) return g(c),
          e;
          u = u.sibling
        }
        throw Error(r(188))
      }
      if(i.return !== o.return) i = c,
      o = u;
      else {
        for(var y =  ! 1,
        b = c.child; b; ) {
          if(b === i) {
            y =  ! 0,
            i = c,
            o = u;
            break
          }
          if(b === o) {
            y =  ! 0,
            o = c,
            i = u;
            break
          }
          b = b.sibling
        }
        if( ! y) {
          for(b = u.child; b; ) {
            if(b === i) {
              y =  ! 0,
              i = u,
              o = c;
              break
            }
            if(b === o) {
              y =  ! 0,
              o = u,
              i = c;
              break
            }
            b = b.sibling
          }
          if( ! y) throw Error(r(189))
        }
      }
      if(i.alternate !== o) throw Error(r(190))
    }
    if(i.tag !== 3) throw Error(r(188));
    return i.stateNode.current === i ? t: e
  }
  function v(t) {
    var e = t.tag;
    if(e === 5 || e === 26 || e === 27 || e === 6) return t;
    for(t = t.child; t !== null; ) {
      if(e = v(t),
      e !== null) return e;
      t = t.sibling
    }
    return null
  }
  var p = Object.assign,
  E = Symbol.for("react.element"),
  w = Symbol.for("react.transitional.element"),
  M = Symbol.for("react.portal"),
  A = Symbol.for("react.fragment"),
  C = Symbol.for("react.strict_mode"),
  D = Symbol.for("react.profiler"),
  B = Symbol.for("react.consumer"),
  L = Symbol.for("react.context"),
  q = Symbol.for("react.forward_ref"),
  Q = Symbol.for("react.suspense"),
  $ = Symbol.for("react.suspense_list"),
  F = Symbol.for("react.memo"),
  X = Symbol.for("react.lazy"),
  rt = Symbol.for("react.activity"),
  tt = Symbol.for("react.memo_cache_sentinel"),
  mt = Symbol.iterator;
  function pt(t) {
    return t === null || typeof t != "object" ? null: (t = mt && t[mt] || t["@@iterator"],
    typeof t == "function" ? t: null)
  }
  var Rt = Symbol.for("react.client.reference");
  function Nt(t) {
    if(t == null) return null;
    if(typeof t == "function") return t.$$typeof === Rt ? null: t.displayName || t.name || null;
    if(typeof t == "string") return t;
    switch(t) {
      case A: return "Fragment";
      case D: return "Profiler";
      case C: return "StrictMode";
      case Q: return "Suspense";
      case $: return "SuspenseList";
      case rt: return "Activity"
    }
    if(typeof t == "object") switch(t.$$typeof) {
      case M: return "Portal";
      case L: return t.displayName || "Context";
      case B: return(t._context.displayName || "Context") + ".Consumer";
      case q: var e = t.render;
      return t = t.displayName,
      t || (t = e.displayName || e.name || "",
      t = t !== "" ? "ForwardRef(" + t + ")": "ForwardRef"),
      t;
      case F: return e = t.displayName || null,
      e !== null ? e: Nt(t.type) || "Memo";
      case X: e = t._payload,
      t = t._init;
      try {
        return Nt(t(e))
      }
      catch {
      }
    }
    return null
  }
  var yt = Array.isArray,
  O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Z = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  H =  {
    pending:  ! 1,
    data: null,
    method: null,
    action: null
  },
  ut = [],
  dt =  - 1;
  function R(t) {
    return {
      current: t
    }
  }
  function Y(t) {
    0 > dt || (t.current = ut[dt],
    ut[dt] = null,
    dt--)
  }
  function P(t,
  e) {
    dt++,
    ut[dt] = t.current,
    t.current = e
  }
  var W = R(null),
  I = R(null),
  ct = R(null),
  ot = R(null);
  function vt(t,
  e) {
    switch(P(ct,
    e),
    P(I,
    t),
    P(W,
    null),
    e.nodeType) {
      case 9: case 11: t = (t = e.documentElement) && (t = t.namespaceURI) ? Ng(t): 0;
      break;
      default: if(t = e.tagName,
      e = e.namespaceURI) e = Ng(e),
      t = Dg(e,
      t);
      else switch(t) {
        case "svg": t = 1;
        break;
        case "math": t = 2;
        break;
        default: t = 0
      }
    }
    Y(W),
    P(W,
    t)
  }
  function Mt() {
    Y(W),
    Y(I),
    Y(ct)
  }
  function Ee(t) {
    t.memoizedState !== null && P(ot,
    t);
    var e = W.current,
    i = Dg(e,
    t.type);
    e !== i && (P(I,
    t),
    P(W,
    i))
  }
  function Pe(t) {
    I.current === t && (Y(W),
    Y(I)),
    ot.current === t && (Y(ot),
    xo._currentValue = H)
  }
  var we,
  Qo;
  function fn(t) {
    if(we === void 0) try {
      throw Error()
    }
    catch(i) {
      var e = i.stack.trim().match(/\n( *(at )?)/);
      we = e && e[1] || "",
      Qo =  - 1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)":  - 1 < i.stack.indexOf("@") ? "@unknown:0:0": ""
    }
    return `
` + we + t + Qo
  }
  var Ms =  ! 1;
  function Si(t,
  e) {
    if( ! t || Ms) return "";
    Ms =  ! 0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o =  {
        DetermineComponentFrameRoot: function() {
          try {
            if(e) {
              var K = function() {
                throw Error()
              };
              if(Object.defineProperty(K.prototype,
              "props",
               {
                set: function() {
                  throw Error()
                }
              }),
              typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K,
                  [])
                }
                catch(k) {
                  var V = k
                }
                Reflect.construct(t,
                [],
                K)
              }
              else {
                try {
                  K.call()
                }
                catch(k) {
                  V = k
                }
                t.call(K.prototype)
              }
            }
            else {
              try {
                throw Error()
              }
              catch(k) {
                V = k
              }(K = t()) && typeof K.catch == "function" && K.catch(function() {
              })
            }
          }
          catch(k) {
            if(k && V && typeof k.stack == "string") return[k.stack,
            V.stack]
          }
          return[null,
          null]
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,
      "name");
      c && c.configurable && Object.defineProperty(o.DetermineComponentFrameRoot,
      "name",
       {
        value: "DetermineComponentFrameRoot"
      });
      var u = o.DetermineComponentFrameRoot(),
      y = u[0],
      b = u[1];
      if(y && b) {
        var T = y.split(`
`),
        _ = b.split(`
`);
        for(c = o = 0; o < T.length &&  ! T[o].includes("DetermineComponentFrameRoot");
        ) o++;
        for(; c < _.length &&  ! _[c].includes("DetermineComponentFrameRoot");
        ) c++;
        if(o === T.length || c === _.length) for(o = T.length - 1,
        c = _.length - 1; 1 <= o && 0 <= c && T[o] !== _[c]; ) c--;
        for(; 1 <= o && 0 <= c; o--,
        c--) if(T[o] !== _[c]) {
          if(o !== 1 || c !== 1) do if(o--,
          c--,
          0 > c || T[o] !== _[c]) {
            var U = `
` + T[o].replace(" at new ",
            " at ");
            return t.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>",
            t.displayName)),
            U
          }
          while(1 <= o && 0 <= c);
          break
        }
      }
    }
    finally {
      Ms =  ! 1,
      Error.prepareStackTrace = i
    }
    return(i = t ? t.displayName || t.name: "") ? fn(i): ""
  }
  function Pa(t,
  e) {
    switch(t.tag) {
      case 26: case 27: case 5: return fn(t.type);
      case 16: return fn("Lazy");
      case 13: return t.child !== e && e !== null ? fn("Suspense Fallback"): fn("Suspense");
      case 19: return fn("SuspenseList");
      case 0: case 15: return Si(t.type,
       ! 1);
      case 11: return Si(t.type.render,
       ! 1);
      case 1: return Si(t.type,
       ! 0);
      case 31: return fn("Activity");
      default: return ""
    }
  }
  function Rs(t) {
    try {
      var e = "",
      i = null;
      do e += Pa(t,
      i),
      i = t,
      t = t.return;
      while(t);
      return e
    }
    catch(o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack
    }
  }
  var Ye = Object.prototype.hasOwnProperty,
  Ns = n.unstable_scheduleCallback,
  Ds = n.unstable_cancelCallback,
  Ae = n.unstable_shouldYield,
  oa = n.unstable_requestPaint,
  Te = n.unstable_now,
  sc = n.unstable_getCurrentPriorityLevel,
  Ya = n.unstable_ImmediatePriority,
  Wo = n.unstable_UserBlockingPriority,
  Ga = n.unstable_NormalPriority,
  js = n.unstable_LowPriority,
  Ln = n.unstable_IdlePriority,
  Jo = n.log,
  ra = n.unstable_setDisableYieldValue,
  qa = null,
  Ce = null;
  function dn(t) {
    if(typeof Jo == "function" && ra(t),
    Ce && typeof Ce.setStrictMode == "function") try {
      Ce.setStrictMode(qa,
      t)
    }
    catch {
    }
  }
  var xe = Math.clz32 ? Math.clz32: Sn,
  oc = Math.log,
  Os = Math.LN2;
  function Sn(t) {
    return t >>>= 0,
    t === 0 ? 32: 31 - (oc(t) / Os | 0) | 0
  }
  var Ei = 256,
  wi = 262144,
  Xa = 4194304;
  function En(t) {
    var e = t & 42;
    if(e !== 0) return e;
    switch(t &  - t) {
      case 1: return 1;
      case 2: return 2;
      case 4: return 4;
      case 8: return 8;
      case 16: return 16;
      case 32: return 32;
      case 64: return 64;
      case 128: return 128;
      case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: return t & 261888;
      case 262144: case 524288: case 1048576: case 2097152: return t & 3932160;
      case 4194304: case 8388608: case 16777216: case 33554432: return t & 62914560;
      case 67108864: return 67108864;
      case 134217728: return 134217728;
      case 268435456: return 268435456;
      case 536870912: return 536870912;
      case 1073741824: return 0;
      default: return t
    }
  }
  function ht(t,
  e,
  i) {
    var o = t.pendingLanes;
    if(o === 0) return 0;
    var c = 0,
    u = t.suspendedLanes,
    y = t.pingedLanes;
    t = t.warmLanes;
    var b = o & 134217727;
    return b !== 0 ? (o = b & ~ u,
    o !== 0 ? c = En(o): (y &= b,
    y !== 0 ? c = En(y): i || (i = b & ~ t,
    i !== 0 && (c = En(i))))): (b = o & ~ u,
    b !== 0 ? c = En(b): y !== 0 ? c = En(y): i || (i = o & ~ t,
    i !== 0 && (c = En(i)))),
    c === 0 ? 0: e !== 0 && e !== c && (e & u) === 0 && (u = c &  - c,
    i = e &  - e,
    u >= i || u === 32 && (i & 4194048) !== 0) ? e: c
  }
  function Xt(t,
  e) {
    return(t.pendingLanes & ~(t.suspendedLanes & ~ t.pingedLanes) & e) === 0
  }
  function ce(t,
  e) {
    switch(t) {
      case 1: case 2: case 4: case 8: case 64: return e + 250;
      case 16: case 32: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return e + 5e3;
      case 4194304: case 8388608: case 16777216: case 33554432: return - 1;
      case 67108864: case 134217728: case 268435456: case 536870912: case 1073741824: return - 1;
      default: return - 1
    }
  }
  function be() {
    var t = Xa;
    return Xa <<= 1,
    (Xa & 62914560) === 0 && (Xa = 4194304),
    t
  }
  function la(t) {
    for(var e = [],
    i = 0; 31 > i; i++) e.push(t);
    return e
  }
  function Ft(t,
  e) {
    t.pendingLanes |= e,
    e !== 268435456 && (t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.warmLanes = 0)
  }
  function De(t,
  e,
  i,
  o,
  c,
  u) {
    var y = t.pendingLanes;
    t.pendingLanes = i,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.warmLanes = 0,
    t.expiredLanes &= i,
    t.entangledLanes &= i,
    t.errorRecoveryDisabledLanes &= i,
    t.shellSuspendCounter = 0;
    var b = t.entanglements,
    T = t.expirationTimes,
    _ = t.hiddenUpdates;
    for(i = y & ~ i; 0 < i; ) {
      var U = 31 - xe(i),
      K = 1 << U;
      b[U] = 0,
      T[U] =  - 1;
      var V = _[U];
      if(V !== null) for(_[U] = null,
      U = 0; U < V.length; U++) {
        var k = V[U];
        k !== null && (k.lane &=  - 536870913)
      }
      i &= ~ K
    }
    o !== 0 && Ka(t,
    o,
    0),
    u !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(y & ~ e))
  }
  function Ka(t,
  e,
  i) {
    t.pendingLanes |= e,
    t.suspendedLanes &= ~ e;
    var o = 31 - xe(e);
    t.entangledLanes |= e,
    t.entanglements[o] = t.entanglements[o] | 1073741824 | i & 261930
  }
  function je(t,
  e) {
    var i = t.entangledLanes |= e;
    for(t = t.entanglements; i; ) {
      var o = 31 - xe(i),
      c = 1 << o;
      c & e | t[o] & e && (t[o] |= e),
      i &= ~ c
    }
  }
  function Oe(t,
  e) {
    var i = e &  - e;
    return i = (i & 42) !== 0 ? 1: Ai(i),
    (i & (t.suspendedLanes | e)) !== 0 ? 0: i
  }
  function Ai(t) {
    switch(t) {
      case 2: t = 1;
      break;
      case 8: t = 4;
      break;
      case 32: t = 16;
      break;
      case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: t = 128;
      break;
      case 268435456: t = 134217728;
      break;
      default: t = 0
    }
    return t
  }
  function hn(t) {
    return t &=  - t,
    2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32: 268435456: 8: 2
  }
  function rc() {
    var t = Z.p;
    return t !== 0 ? t: (t = window.event,
    t === void 0 ? 32: Ig(t.type))
  }
  function ph(t,
  e) {
    var i = Z.p;
    try {
      return Z.p = t,
      e()
    }
    finally {
      Z.p = i
    }
  }
  var ca = Math.random().toString(36).slice(2),
  de = "__reactFiber$" + ca,
  ze = "__reactProps$" + ca,
  Ti = "__reactContainer$" + ca,
  lc = "__reactEvents$" + ca,
  db = "__reactListeners$" + ca,
  hb = "__reactHandles$" + ca,
  gh = "__reactResources$" + ca,
  zs = "__reactMarker$" + ca;
  function cc(t) {
    delete t[de],
    delete t[ze],
    delete t[lc],
    delete t[db],
    delete t[hb]
  }
  function Ci(t) {
    var e = t[de];
    if(e) return e;
    for(var i = t.parentNode; i; ) {
      if(e = i[Ti] || i[de]) {
        if(i = e.alternate,
        e.child !== null || i !== null && i.child !== null) for(t = Bg(t);
        t !== null;
        ) {
          if(i = t[de]) return i;
          t = Bg(t)
        }
        return e
      }
      t = i,
      i = t.parentNode
    }
    return null
  }
  function Mi(t) {
    if(t = t[de] || t[Ti]) {
      var e = t.tag;
      if(e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
    }
    return null
  }
  function _s(t) {
    var e = t.tag;
    if(e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33))
  }
  function Ri(t) {
    var e = t[gh];
    return e || (e = t[gh] =  {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }),
    e
  }
  function ue(t) {
    t[zs] =  ! 0
  }
  var yh = new Set,
  vh =  {
  };
  function Fa(t,
  e) {
    Ni(t,
    e),
    Ni(t + "Capture",
    e)
  }
  function Ni(t,
  e) {
    for(vh[t] = e,
    t = 0; t < e.length; t++) yh.add(e[t])
  }
  var mb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
  xh =  {
  },
  bh =  {
  };
  function pb(t) {
    return Ye.call(bh,
    t) ?  ! 0: Ye.call(xh,
    t) ?  ! 1: mb.test(t) ? bh[t] =  ! 0: (xh[t] =  ! 0,
     ! 1)
  }
  function $o(t,
  e,
  i) {
    if(pb(e)) if(i === null) t.removeAttribute(e);
    else {
      switch(typeof i) {
        case "undefined": case "function": case "symbol": t.removeAttribute(e);
        return;
        case "boolean": var o = e.toLowerCase().slice(0,
        5);
        if(o !== "data-" && o !== "aria-") {
          t.removeAttribute(e);
          return
        }
      }
      t.setAttribute(e,
      "" + i)
    }
  }
  function Io(t,
  e,
  i) {
    if(i === null) t.removeAttribute(e);
    else {
      switch(typeof i) {
        case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(e);
        return
      }
      t.setAttribute(e,
      "" + i)
    }
  }
  function Vn(t,
  e,
  i,
  o) {
    if(o === null) t.removeAttribute(i);
    else {
      switch(typeof o) {
        case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(i);
        return
      }
      t.setAttributeNS(e,
      i,
      "" + o)
    }
  }
  function Je(t) {
    switch(typeof t) {
      case "bigint": case "boolean": case "number": case "string": case "undefined": return t;
      case "object": return t;
      default: return ""
    }
  }
  function Sh(t) {
    var e = t.type;
    return(t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
  }
  function gb(t,
  e,
  i) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype,
    e);
    if( ! t.hasOwnProperty(e) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get,
      u = o.set;
      return Object.defineProperty(t,
      e,
       {
        configurable:  ! 0,
        get: function() {
          return c.call(this)
        },
        set: function(y) {
          i = "" + y,
          u.call(this,
          y)
        }
      }),
      Object.defineProperty(t,
      e,
       {
        enumerable: o.enumerable
      }),
       {
        getValue: function() {
          return i
        },
        setValue: function(y) {
          i = "" + y
        },
        stopTracking: function() {
          t._valueTracker = null,
          delete t[e]
        }
      }
    }
  }
  function uc(t) {
    if( ! t._valueTracker) {
      var e = Sh(t) ? "checked": "value";
      t._valueTracker = gb(t,
      e,
      "" + t[e])
    }
  }
  function Eh(t) {
    if( ! t) return ! 1;
    var e = t._valueTracker;
    if( ! e) return ! 0;
    var i = e.getValue(),
    o = "";
    return t && (o = Sh(t) ? t.checked ? "true": "false": t.value),
    t = o,
    t !== i ? (e.setValue(t),
     ! 0):  ! 1
  }
  function tr(t) {
    if(t = t || (typeof document < "u" ? document: void 0),
    typeof t > "u") return null;
    try {
      return t.activeElement || t.body
    }
    catch {
      return t.body
    }
  }
  var yb = /[\n"\\]/g;
  function $e(t) {
    return t.replace(yb,
    function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " "
    })
  }
  function fc(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b) {
    t.name = "",
    y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y: t.removeAttribute("type"),
    e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Je(e)): t.value !== "" + Je(e) && (t.value = "" + Je(e)): y !== "submit" && y !== "reset" || t.removeAttribute("value"),
    e != null ? dc(t,
    y,
    Je(e)): i != null ? dc(t,
    y,
    Je(i)): o != null && t.removeAttribute("value"),
    c == null && u != null && (t.defaultChecked =  !  ! u),
    c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"),
    b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Je(b): t.removeAttribute("name")
  }
  function wh(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b) {
    if(u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
    e != null || i != null) {
      if( ! (u !== "submit" && u !== "reset" || e != null)) {
        uc(t);
        return
      }
      i = i != null ? "" + Je(i): "",
      e = e != null ? "" + Je(e): i,
      b || e === t.value || (t.value = e),
      t.defaultValue = e
    }
    o = o ?? c,
    o = typeof o != "function" && typeof o != "symbol" &&  !  ! o,
    t.checked = b ? t.checked:  !  ! o,
    t.defaultChecked =  !  ! o,
    y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y),
    uc(t)
  }
  function dc(t,
  e,
  i) {
    e === "number" && tr(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i)
  }
  function Di(t,
  e,
  i,
  o) {
    if(t = t.options,
    e) {
      e =  {
      };
      for(var c = 0; c < i.length; c++) e["$" + i[c]] =  ! 0;
      for(i = 0; i < t.length; i++) c = e.hasOwnProperty("$" + t[i].value),
      t[i].selected !== c && (t[i].selected = c),
      c && o && (t[i].defaultSelected =  ! 0)
    }
    else {
      for(i = "" + Je(i),
      e = null,
      c = 0;
      c < t.length;
      c++) {
        if(t[c].value === i) {
          t[c].selected =  ! 0,
          o && (t[c].defaultSelected =  ! 0);
          return
        }
        e !== null || t[c].disabled || (e = t[c])
      }
      e !== null && (e.selected =  ! 0)
    }
  }
  function Ah(t,
  e,
  i) {
    if(e != null && (e = "" + Je(e),
    e !== t.value && (t.value = e),
    i == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return
    }
    t.defaultValue = i != null ? "" + Je(i): ""
  }
  function Th(t,
  e,
  i,
  o) {
    if(e == null) {
      if(o != null) {
        if(i != null) throw Error(r(92));
        if(yt(o)) {
          if(1 < o.length) throw Error(r(93));
          o = o[0]
        }
        i = o
      }
      i == null && (i = ""),
      e = i
    }
    i = Je(e),
    t.defaultValue = i,
    o = t.textContent,
    o === i && o !== "" && o !== null && (t.value = o),
    uc(t)
  }
  function ji(t,
  e) {
    if(e) {
      var i = t.firstChild;
      if(i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = e;
        return
      }
    }
    t.textContent = e
  }
  var vb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Ch(t,
  e,
  i) {
    var o = e.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? t.setProperty(e,
    ""): e === "float" ? t.cssFloat = "": t[e] = "": o ? t.setProperty(e,
    i): typeof i != "number" || i === 0 || vb.has(e) ? e === "float" ? t.cssFloat = i: t[e] = ("" + i).trim(): t[e] = i + "px"
  }
  function Mh(t,
  e,
  i) {
    if(e != null && typeof e != "object") throw Error(r(62));
    if(t = t.style,
    i != null) {
      for(var o in i) ! i.hasOwnProperty(o) || e != null && e.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o,
      ""): o === "float" ? t.cssFloat = "": t[o] = "");
      for(var c in e) o = e[c],
      e.hasOwnProperty(c) && i[c] !== o && Ch(t,
      c,
      o)
    }
    else for(var u in e) e.hasOwnProperty(u) && Ch(t,
    u,
    e[u])
  }
  function hc(t) {
    if(t.indexOf("-") ===  - 1) return ! 1;
    switch(t) {
      case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return ! 1;
      default: return ! 0
    }
  }
  var xb = new Map([["acceptCharset",
  "accept-charset"],
  ["htmlFor",
  "for"],
  ["httpEquiv",
  "http-equiv"],
  ["crossOrigin",
  "crossorigin"],
  ["accentHeight",
  "accent-height"],
  ["alignmentBaseline",
  "alignment-baseline"],
  ["arabicForm",
  "arabic-form"],
  ["baselineShift",
  "baseline-shift"],
  ["capHeight",
  "cap-height"],
  ["clipPath",
  "clip-path"],
  ["clipRule",
  "clip-rule"],
  ["colorInterpolation",
  "color-interpolation"],
  ["colorInterpolationFilters",
  "color-interpolation-filters"],
  ["colorProfile",
  "color-profile"],
  ["colorRendering",
  "color-rendering"],
  ["dominantBaseline",
  "dominant-baseline"],
  ["enableBackground",
  "enable-background"],
  ["fillOpacity",
  "fill-opacity"],
  ["fillRule",
  "fill-rule"],
  ["floodColor",
  "flood-color"],
  ["floodOpacity",
  "flood-opacity"],
  ["fontFamily",
  "font-family"],
  ["fontSize",
  "font-size"],
  ["fontSizeAdjust",
  "font-size-adjust"],
  ["fontStretch",
  "font-stretch"],
  ["fontStyle",
  "font-style"],
  ["fontVariant",
  "font-variant"],
  ["fontWeight",
  "font-weight"],
  ["glyphName",
  "glyph-name"],
  ["glyphOrientationHorizontal",
  "glyph-orientation-horizontal"],
  ["glyphOrientationVertical",
  "glyph-orientation-vertical"],
  ["horizAdvX",
  "horiz-adv-x"],
  ["horizOriginX",
  "horiz-origin-x"],
  ["imageRendering",
  "image-rendering"],
  ["letterSpacing",
  "letter-spacing"],
  ["lightingColor",
  "lighting-color"],
  ["markerEnd",
  "marker-end"],
  ["markerMid",
  "marker-mid"],
  ["markerStart",
  "marker-start"],
  ["overlinePosition",
  "overline-position"],
  ["overlineThickness",
  "overline-thickness"],
  ["paintOrder",
  "paint-order"],
  ["panose-1",
  "panose-1"],
  ["pointerEvents",
  "pointer-events"],
  ["renderingIntent",
  "rendering-intent"],
  ["shapeRendering",
  "shape-rendering"],
  ["stopColor",
  "stop-color"],
  ["stopOpacity",
  "stop-opacity"],
  ["strikethroughPosition",
  "strikethrough-position"],
  ["strikethroughThickness",
  "strikethrough-thickness"],
  ["strokeDasharray",
  "stroke-dasharray"],
  ["strokeDashoffset",
  "stroke-dashoffset"],
  ["strokeLinecap",
  "stroke-linecap"],
  ["strokeLinejoin",
  "stroke-linejoin"],
  ["strokeMiterlimit",
  "stroke-miterlimit"],
  ["strokeOpacity",
  "stroke-opacity"],
  ["strokeWidth",
  "stroke-width"],
  ["textAnchor",
  "text-anchor"],
  ["textDecoration",
  "text-decoration"],
  ["textRendering",
  "text-rendering"],
  ["transformOrigin",
  "transform-origin"],
  ["underlinePosition",
  "underline-position"],
  ["underlineThickness",
  "underline-thickness"],
  ["unicodeBidi",
  "unicode-bidi"],
  ["unicodeRange",
  "unicode-range"],
  ["unitsPerEm",
  "units-per-em"],
  ["vAlphabetic",
  "v-alphabetic"],
  ["vHanging",
  "v-hanging"],
  ["vIdeographic",
  "v-ideographic"],
  ["vMathematical",
  "v-mathematical"],
  ["vectorEffect",
  "vector-effect"],
  ["vertAdvY",
  "vert-adv-y"],
  ["vertOriginX",
  "vert-origin-x"],
  ["vertOriginY",
  "vert-origin-y"],
  ["wordSpacing",
  "word-spacing"],
  ["writingMode",
  "writing-mode"],
  ["xmlnsXlink",
  "xmlns:xlink"],
  ["xHeight",
  "x-height"]]),
  bb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function er(t) {
    return bb.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')": t
  }
  function Bn() {
  }
  var mc = null;
  function pc(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode: t
  }
  var Oi = null,
  zi = null;
  function Rh(t) {
    var e = Mi(t);
    if(e && (t = e.stateNode)) {
      var i = t[ze] || null;
      t: switch(t = e.stateNode,
      e.type) {
        case "input": if(fc(t,
        i.value,
        i.defaultValue,
        i.defaultValue,
        i.checked,
        i.defaultChecked,
        i.type,
        i.name),
        e = i.name,
        i.type === "radio" && e != null) {
          for(i = t; i.parentNode; ) i = i.parentNode;
          for(i = i.querySelectorAll('input[name="' + $e("" + e) + '"][type="radio"]'),
          e = 0;
          e < i.length;
          e++) {
            var o = i[e];
            if(o !== t && o.form === t.form) {
              var c = o[ze] || null;
              if( ! c) throw Error(r(90));
              fc(o,
              c.value,
              c.defaultValue,
              c.defaultValue,
              c.checked,
              c.defaultChecked,
              c.type,
              c.name)
            }
          }
          for(e = 0; e < i.length; e++) o = i[e],
          o.form === t.form && Eh(o)
        }
        break t;
        case "textarea": Ah(t,
        i.value,
        i.defaultValue);
        break t;
        case "select": e = i.value,
        e != null && Di(t,
         !  ! i.multiple,
        e,
         ! 1)
      }
    }
  }
  var gc =  ! 1;
  function Nh(t,
  e,
  i) {
    if(gc) return t(e,
    i);
    gc =  ! 0;
    try {
      var o = t(e);
      return o
    }
    finally {
      if(gc =  ! 1,
      (Oi !== null || zi !== null) && (Yr(),
      Oi && (e = Oi,
      t = zi,
      zi = Oi = null,
      Rh(e),
      t))) for(e = 0; e < t.length; e++) Rh(t[e])
    }
  }
  function Ls(t,
  e) {
    var i = t.stateNode;
    if(i === null) return null;
    var o = i[ze] || null;
    if(o === null) return null;
    i = o[e];
    t: switch(e) {
      case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (o =  ! o.disabled) || (t = t.type,
      o =  ! (t === "button" || t === "input" || t === "select" || t === "textarea")),
      t =  ! o;
      break t;
      default: t =  ! 1
    }
    if(t) return null;
    if(i && typeof i != "function") throw Error(r(231,
    e,
    typeof i));
    return i
  }
  var kn =  ! (typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  yc =  ! 1;
  if(kn) try {
    var Vs =  {
    };
    Object.defineProperty(Vs,
    "passive",
     {
      get: function() {
        yc =  ! 0
      }
    }),
    window.addEventListener("test",
    Vs,
    Vs),
    window.removeEventListener("test",
    Vs,
    Vs)
  }
  catch {
    yc =  ! 1
  }
  var ua = null,
  vc = null,
  nr = null;
  function Dh() {
    if(nr) return nr;
    var t,
    e = vc,
    i = e.length,
    o,
    c = "value" in ua ? ua.value: ua.textContent,
    u = c.length;
    for(t = 0; t < i && e[t] === c[t]; t++);
    var y = i - t;
    for(o = 1; o <= y && e[i - o] === c[u - o]; o++);
    return nr = c.slice(t,
    1 < o ? 1 - o: void 0)
  }
  function ar(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)): t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t: 0
  }
  function ir() {
    return ! 0
  }
  function jh() {
    return ! 1
  }
  function _e(t) {
    function e(i,
    o,
    c,
    u,
    y) {
      this._reactName = i,
      this._targetInst = c,
      this.type = o,
      this.nativeEvent = u,
      this.target = y,
      this.currentTarget = null;
      for(var b in t) t.hasOwnProperty(b) && (i = t[b],
      this[b] = i ? i(u): u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented: u.returnValue ===  ! 1) ? ir: jh,
      this.isPropagationStopped = jh,
      this
    }
    return p(e.prototype,
     {
      preventDefault: function() {
        this.defaultPrevented =  ! 0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault(): typeof i.returnValue != "unknown" && (i.returnValue =  ! 1),
        this.isDefaultPrevented = ir)
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation(): typeof i.cancelBubble != "unknown" && (i.cancelBubble =  ! 0),
        this.isPropagationStopped = ir)
      },
      persist: function() {
      },
      isPersistent: ir
    }),
    e
  }
  var Za =  {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  sr = _e(Za),
  Bs = p( {
  },
  Za,
   {
    view: 0,
    detail: 0
  }),
  Sb = _e(Bs),
  xc,
  bc,
  ks,
  or = p( {
  },
  Bs,
   {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement: t.fromElement: t.relatedTarget
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX: (t !== ks && (ks && t.type === "mousemove" ? (xc = t.screenX - ks.screenX,
      bc = t.screenY - ks.screenY): bc = xc = 0,
      ks = t),
      xc)
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY: bc
    }
  }),
  Oh = _e(or),
  Eb = p( {
  },
  or,
   {
    dataTransfer: 0
  }),
  wb = _e(Eb),
  Ab = p( {
  },
  Bs,
   {
    relatedTarget: 0
  }),
  Sc = _e(Ab),
  Tb = p( {
  },
  Za,
   {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Cb = _e(Tb),
  Mb = p( {
  },
  Za,
   {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData: window.clipboardData
    }
  }),
  Rb = _e(Mb),
  Nb = p( {
  },
  Za,
   {
    data: 0
  }),
  zh = _e(Nb),
  Db =  {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  jb =  {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Ob =  {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function zb(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t): (t = Ob[t]) ?  !  ! e[t]:  ! 1
  }
  function Ec() {
    return zb
  }
  var _b = p( {
  },
  Bs,
   {
    key: function(t) {
      if(t.key) {
        var e = Db[t.key] || t.key;
        if(e !== "Unidentified") return e
      }
      return t.type === "keypress" ? (t = ar(t),
      t === 13 ? "Enter": String.fromCharCode(t)): t.type === "keydown" || t.type === "keyup" ? jb[t.keyCode] || "Unidentified": ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ec,
    charCode: function(t) {
      return t.type === "keypress" ? ar(t): 0
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode: 0
    },
    which: function(t) {
      return t.type === "keypress" ? ar(t): t.type === "keydown" || t.type === "keyup" ? t.keyCode: 0
    }
  }),
  Lb = _e(_b),
  Vb = p( {
  },
  or,
   {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  _h = _e(Vb),
  Bb = p( {
  },
  Bs,
   {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ec
  }),
  kb = _e(Bb),
  Ub = p( {
  },
  Za,
   {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hb = _e(Ub),
  Pb = p( {
  },
  or,
   {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX: "wheelDeltaX" in t ?  - t.wheelDeltaX: 0
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY: "wheelDeltaY" in t ?  - t.wheelDeltaY: "wheelDelta" in t ?  - t.wheelDelta: 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Yb = _e(Pb),
  Gb = p( {
  },
  Za,
   {
    newState: 0,
    oldState: 0
  }),
  qb = _e(Gb),
  Xb = [9,
  13,
  27,
  32],
  wc = kn && "CompositionEvent" in window,
  Us = null;
  kn && "documentMode" in document && (Us = document.documentMode);
  var Kb = kn && "TextEvent" in window &&  ! Us,
  Lh = kn && ( ! wc || Us && 8 < Us && 11 >= Us),
  Vh = " ",
  Bh =  ! 1;
  function kh(t,
  e) {
    switch(t) {
      case "keyup": return Xb.indexOf(e.keyCode) !==  - 1;
      case "keydown": return e.keyCode !== 229;
      case "keypress": case "mousedown": case "focusout": return ! 0;
      default: return ! 1
    }
  }
  function Uh(t) {
    return t = t.detail,
    typeof t == "object" && "data" in t ? t.data: null
  }
  var _i =  ! 1;
  function Fb(t,
  e) {
    switch(t) {
      case "compositionend": return Uh(e);
      case "keypress": return e.which !== 32 ? null: (Bh =  ! 0,
      Vh);
      case "textInput": return t = e.data,
      t === Vh && Bh ? null: t;
      default: return null
    }
  }
  function Zb(t,
  e) {
    if(_i) return t === "compositionend" ||  ! wc && kh(t,
    e) ? (t = Dh(),
    nr = vc = ua = null,
    _i =  ! 1,
    t): null;
    switch(t) {
      case "paste": return null;
      case "keypress": if( ! (e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if(e.char && 1 < e.char.length) return e.char;
        if(e.which) return String.fromCharCode(e.which)
      }
      return null;
      case "compositionend": return Lh && e.locale !== "ko" ? null: e.data;
      default: return null
    }
  }
  var Qb =  {
    color:  ! 0,
    date:  ! 0,
    datetime:  ! 0,
    "datetime-local":  ! 0,
    email:  ! 0,
    month:  ! 0,
    number:  ! 0,
    password:  ! 0,
    range:  ! 0,
    search:  ! 0,
    tel:  ! 0,
    text:  ! 0,
    time:  ! 0,
    url:  ! 0,
    week:  ! 0
  };
  function Hh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ?  !  ! Qb[t.type]: e === "textarea"
  }
  function Ph(t,
  e,
  i,
  o) {
    Oi ? zi ? zi.push(o): zi = [o]: Oi = o,
    e = Qr(e,
    "onChange"),
    0 < e.length && (i = new sr("onChange",
    "change",
    null,
    i,
    o),
    t.push( {
      event: i,
      listeners: e
    }))
  }
  var Hs = null,
  Ps = null;
  function Wb(t) {
    wg(t,
    0)
  }
  function rr(t) {
    var e = _s(t);
    if(Eh(e)) return t
  }
  function Yh(t,
  e) {
    if(t === "change") return e
  }
  var Gh =  ! 1;
  if(kn) {
    var Ac;
    if(kn) {
      var Tc = "oninput" in document;
      if( ! Tc) {
        var qh = document.createElement("div");
        qh.setAttribute("oninput",
        "return;"),
        Tc = typeof qh.oninput == "function"
      }
      Ac = Tc
    }
    else Ac =  ! 1;
    Gh = Ac && ( ! document.documentMode || 9 < document.documentMode)
  }
  function Xh() {
    Hs && (Hs.detachEvent("onpropertychange",
    Kh),
    Ps = Hs = null)
  }
  function Kh(t) {
    if(t.propertyName === "value" && rr(Ps)) {
      var e = [];
      Ph(e,
      Ps,
      t,
      pc(t)),
      Nh(Wb,
      e)
    }
  }
  function Jb(t,
  e,
  i) {
    t === "focusin" ? (Xh(),
    Hs = e,
    Ps = i,
    Hs.attachEvent("onpropertychange",
    Kh)): t === "focusout" && Xh()
  }
  function $b(t) {
    if(t === "selectionchange" || t === "keyup" || t === "keydown") return rr(Ps)
  }
  function Ib(t,
  e) {
    if(t === "click") return rr(e)
  }
  function tS(t,
  e) {
    if(t === "input" || t === "change") return rr(e)
  }
  function eS(t,
  e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
  }
  var Ge = typeof Object.is == "function" ? Object.is: eS;
  function Ys(t,
  e) {
    if(Ge(t,
    e)) return ! 0;
    if(typeof t != "object" || t === null || typeof e != "object" || e === null) return ! 1;
    var i = Object.keys(t),
    o = Object.keys(e);
    if(i.length !== o.length) return ! 1;
    for(o = 0; o < i.length; o++) {
      var c = i[o];
      if( ! Ye.call(e,
      c) ||  ! Ge(t[c],
      e[c])) return ! 1
    }
    return ! 0
  }
  function Fh(t) {
    for(; t && t.firstChild; ) t = t.firstChild;
    return t
  }
  function Zh(t,
  e) {
    var i = Fh(t);
    t = 0;
    for(var o; i; ) {
      if(i.nodeType === 3) {
        if(o = t + i.textContent.length,
        t <= e && o >= e) return {
          node: i,
          offset: e - t
        };
        t = o
      }
      t:  {
        for(; i; ) {
          if(i.nextSibling) {
            i = i.nextSibling;
            break t
          }
          i = i.parentNode
        }
        i = void 0
      }
      i = Fh(i)
    }
  }
  function Qh(t,
  e) {
    return t && e ? t === e ?  ! 0: t && t.nodeType === 3 ?  ! 1: e && e.nodeType === 3 ? Qh(t,
    e.parentNode): "contains" in t ? t.contains(e): t.compareDocumentPosition ?  !  ! (t.compareDocumentPosition(e) & 16):  ! 1:  ! 1
  }
  function Wh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView: window;
    for(var e = tr(t.document);
    e instanceof t.HTMLIFrameElement;
    ) {
      try {
        var i = typeof e.contentWindow.location.href == "string"
      }
      catch {
        i =  ! 1
      }
      if(i) t = e.contentWindow;
      else break;
      e = tr(t.document)
    }
    return e
  }
  function Cc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
  }
  var nS = kn && "documentMode" in document && 11 >= document.documentMode,
  Li = null,
  Mc = null,
  Gs = null,
  Rc =  ! 1;
  function Jh(t,
  e,
  i) {
    var o = i.window === i ? i.document: i.nodeType === 9 ? i: i.ownerDocument;
    Rc || Li == null || Li !== tr(o) || (o = Li,
    "selectionStart" in o && Cc(o) ? o =  {
      start: o.selectionStart,
      end: o.selectionEnd
    }: (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
    o =  {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }),
    Gs && Ys(Gs,
    o) || (Gs = o,
    o = Qr(Mc,
    "onSelect"),
    0 < o.length && (e = new sr("onSelect",
    "select",
    null,
    e,
    i),
    t.push( {
      event: e,
      listeners: o
    }),
    e.target = Li)))
  }
  function Qa(t,
  e) {
    var i =  {
    };
    return i[t.toLowerCase()] = e.toLowerCase(),
    i["Webkit" + t] = "webkit" + e,
    i["Moz" + t] = "moz" + e,
    i
  }
  var Vi =  {
    animationend: Qa("Animation",
    "AnimationEnd"),
    animationiteration: Qa("Animation",
    "AnimationIteration"),
    animationstart: Qa("Animation",
    "AnimationStart"),
    transitionrun: Qa("Transition",
    "TransitionRun"),
    transitionstart: Qa("Transition",
    "TransitionStart"),
    transitioncancel: Qa("Transition",
    "TransitionCancel"),
    transitionend: Qa("Transition",
    "TransitionEnd")
  },
  Nc =  {
  },
  $h =  {
  };
  kn && ($h = document.createElement("div").style,
  "AnimationEvent" in window || (delete Vi.animationend.animation,
  delete Vi.animationiteration.animation,
  delete Vi.animationstart.animation),
  "TransitionEvent" in window || delete Vi.transitionend.transition);
  function Wa(t) {
    if(Nc[t]) return Nc[t];
    if( ! Vi[t]) return t;
    var e = Vi[t],
    i;
    for(i in e) if(e.hasOwnProperty(i) && i in $h) return Nc[t] = e[i];
    return t
  }
  var Ih = Wa("animationend"),
  tm = Wa("animationiteration"),
  em = Wa("animationstart"),
  aS = Wa("transitionrun"),
  iS = Wa("transitionstart"),
  sS = Wa("transitioncancel"),
  nm = Wa("transitionend"),
  am = new Map,
  Dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Dc.push("scrollEnd");
  function mn(t,
  e) {
    am.set(t,
    e),
    Fa(e,
    [t])
  }
  var lr = typeof reportError == "function" ? reportError: function(t) {
    if(typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error",
       {
        bubbles:  ! 0,
        cancelable:  ! 0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message): String(t),
        error: t
      });
      if( ! window.dispatchEvent(e)) return
    }
    else if(typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException",
      t);
      return
    }
    console.error(t)
  },
  Ie = [],
  Bi = 0,
  jc = 0;
  function cr() {
    for(var t = Bi,
    e = jc = Bi = 0; e < t; ) {
      var i = Ie[e];
      Ie[e++] = null;
      var o = Ie[e];
      Ie[e++] = null;
      var c = Ie[e];
      Ie[e++] = null;
      var u = Ie[e];
      if(Ie[e++] = null,
      o !== null && c !== null) {
        var y = o.pending;
        y === null ? c.next = c: (c.next = y.next,
        y.next = c),
        o.pending = c
      }
      u !== 0 && im(i,
      c,
      u)
    }
  }
  function ur(t,
  e,
  i,
  o) {
    Ie[Bi++] = t,
    Ie[Bi++] = e,
    Ie[Bi++] = i,
    Ie[Bi++] = o,
    jc |= o,
    t.lanes |= o,
    t = t.alternate,
    t !== null && (t.lanes |= o)
  }
  function Oc(t,
  e,
  i,
  o) {
    return ur(t,
    e,
    i,
    o),
    fr(t)
  }
  function Ja(t,
  e) {
    return ur(t,
    null,
    null,
    e),
    fr(t)
  }
  function im(t,
  e,
  i) {
    t.lanes |= i;
    var o = t.alternate;
    o !== null && (o.lanes |= i);
    for(var c =  ! 1,
    u = t.return; u !== null; ) u.childLanes |= i,
    o = u.alternate,
    o !== null && (o.childLanes |= i),
    u.tag === 22 && (t = u.stateNode,
    t === null || t._visibility & 1 || (c =  ! 0)),
    t = u,
    u = u.return;
    return t.tag === 3 ? (u = t.stateNode,
    c && e !== null && (c = 31 - xe(i),
    t = u.hiddenUpdates,
    o = t[c],
    o === null ? t[c] = [e]: o.push(e),
    e.lane = i | 536870912),
    u): null
  }
  function fr(t) {
    if(50 < fo) throw fo = 0,
    Pu = null,
    Error(r(185));
    for(var e = t.return; e !== null; ) t = e,
    e = t.return;
    return t.tag === 3 ? t.stateNode: null
  }
  var ki =  {
  };
  function oS(t,
  e,
  i,
  o) {
    this.tag = t,
    this.key = i,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.refCleanup = this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = o,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
  }
  function qe(t,
  e,
  i,
  o) {
    return new oS(t,
    e,
    i,
    o)
  }
  function zc(t) {
    return t = t.prototype,
     ! ( ! t ||  ! t.isReactComponent)
  }
  function Un(t,
  e) {
    var i = t.alternate;
    return i === null ? (i = qe(t.tag,
    e,
    t.key,
    t.mode),
    i.elementType = t.elementType,
    i.type = t.type,
    i.stateNode = t.stateNode,
    i.alternate = t,
    t.alternate = i): (i.pendingProps = e,
    i.type = t.type,
    i.flags = 0,
    i.subtreeFlags = 0,
    i.deletions = null),
    i.flags = t.flags & 65011712,
    i.childLanes = t.childLanes,
    i.lanes = t.lanes,
    i.child = t.child,
    i.memoizedProps = t.memoizedProps,
    i.memoizedState = t.memoizedState,
    i.updateQueue = t.updateQueue,
    e = t.dependencies,
    i.dependencies = e === null ? null:  {
      lanes: e.lanes,
      firstContext: e.firstContext
    },
    i.sibling = t.sibling,
    i.index = t.index,
    i.ref = t.ref,
    i.refCleanup = t.refCleanup,
    i
  }
  function sm(t,
  e) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0,
    t.lanes = e,
    t.child = null,
    t.subtreeFlags = 0,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.updateQueue = null,
    t.dependencies = null,
    t.stateNode = null): (t.childLanes = i.childLanes,
    t.lanes = i.lanes,
    t.child = i.child,
    t.subtreeFlags = 0,
    t.deletions = null,
    t.memoizedProps = i.memoizedProps,
    t.memoizedState = i.memoizedState,
    t.updateQueue = i.updateQueue,
    t.type = i.type,
    e = i.dependencies,
    t.dependencies = e === null ? null:  {
      lanes: e.lanes,
      firstContext: e.firstContext
    }),
    t
  }
  function dr(t,
  e,
  i,
  o,
  c,
  u) {
    var y = 0;
    if(o = t,
    typeof t == "function") zc(t) && (y = 1);
    else if(typeof t == "string") y = f2(t,
    i,
    W.current) ? 26: t === "html" || t === "head" || t === "body" ? 27: 5;
    else t: switch(t) {
      case rt: return t = qe(31,
      i,
      e,
      c),
      t.elementType = rt,
      t.lanes = u,
      t;
      case A: return $a(i.children,
      c,
      u,
      e);
      case C: y = 8,
      c |= 24;
      break;
      case D: return t = qe(12,
      i,
      e,
      c | 2),
      t.elementType = D,
      t.lanes = u,
      t;
      case Q: return t = qe(13,
      i,
      e,
      c),
      t.elementType = Q,
      t.lanes = u,
      t;
      case $: return t = qe(19,
      i,
      e,
      c),
      t.elementType = $,
      t.lanes = u,
      t;
      default: if(typeof t == "object" && t !== null) switch(t.$$typeof) {
        case L: y = 10;
        break t;
        case B: y = 9;
        break t;
        case q: y = 11;
        break t;
        case F: y = 14;
        break t;
        case X: y = 16,
        o = null;
        break t
      }
      y = 29,
      i = Error(r(130,
      t === null ? "null": typeof t,
      "")),
      o = null
    }
    return e = qe(y,
    i,
    e,
    c),
    e.elementType = t,
    e.type = o,
    e.lanes = u,
    e
  }
  function $a(t,
  e,
  i,
  o) {
    return t = qe(7,
    t,
    o,
    e),
    t.lanes = i,
    t
  }
  function _c(t,
  e,
  i) {
    return t = qe(6,
    t,
    null,
    e),
    t.lanes = i,
    t
  }
  function om(t) {
    var e = qe(18,
    null,
    null,
    0);
    return e.stateNode = t,
    e
  }
  function Lc(t,
  e,
  i) {
    return e = qe(4,
    t.children !== null ? t.children: [],
    t.key,
    e),
    e.lanes = i,
    e.stateNode =  {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    },
    e
  }
  var rm = new WeakMap;
  function tn(t,
  e) {
    if(typeof t == "object" && t !== null) {
      var i = rm.get(t);
      return i !== void 0 ? i: (e =  {
        value: t,
        source: e,
        stack: Rs(e)
      },
      rm.set(t,
      e),
      e)
    }
    return {
      value: t,
      source: e,
      stack: Rs(e)
    }
  }
  var Ui = [],
  Hi = 0,
  hr = null,
  qs = 0,
  en = [],
  nn = 0,
  fa = null,
  wn = 1,
  An = "";
  function Hn(t,
  e) {
    Ui[Hi++] = qs,
    Ui[Hi++] = hr,
    hr = t,
    qs = e
  }
  function lm(t,
  e,
  i) {
    en[nn++] = wn,
    en[nn++] = An,
    en[nn++] = fa,
    fa = t;
    var o = wn;
    t = An;
    var c = 32 - xe(o) - 1;
    o &= ~(1 << c),
    i += 1;
    var u = 32 - xe(e) + c;
    if(30 < u) {
      var y = c - c % 5;
      u = (o & (1 << y) - 1).toString(32),
      o >>= y,
      c -= y,
      wn = 1 << 32 - xe(e) + c | i << c | o,
      An = u + t
    }
    else wn = 1 << u | i << c | o,
    An = t
  }
  function Vc(t) {
    t.return !== null && (Hn(t,
    1),
    lm(t,
    1,
    0))
  }
  function Bc(t) {
    for(; t === hr; ) hr = Ui[-- Hi],
    Ui[Hi] = null,
    qs = Ui[-- Hi],
    Ui[Hi] = null;
    for(; t === fa; ) fa = en[-- nn],
    en[nn] = null,
    An = en[-- nn],
    en[nn] = null,
    wn = en[-- nn],
    en[nn] = null
  }
  function cm(t,
  e) {
    en[nn++] = wn,
    en[nn++] = An,
    en[nn++] = fa,
    wn = e.id,
    An = e.overflow,
    fa = t
  }
  var he = null,
  Pt = null,
  Ct =  ! 1,
  da = null,
  an =  ! 1,
  kc = Error(r(519));
  function ha(t) {
    var e = Error(r(418,
    1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text": "HTML",
    ""));
    throw Xs(tn(e,
    t)),
    kc
  }
  function um(t) {
    var e = t.stateNode,
    i = t.type,
    o = t.memoizedProps;
    switch(e[de] = t,
    e[ze] = o,
    i) {
      case "dialog": wt("cancel",
      e),
      wt("close",
      e);
      break;
      case "iframe": case "object": case "embed": wt("load",
      e);
      break;
      case "video": case "audio": for(i = 0; i < mo.length; i++) wt(mo[i],
      e);
      break;
      case "source": wt("error",
      e);
      break;
      case "img": case "image": case "link": wt("error",
      e),
      wt("load",
      e);
      break;
      case "details": wt("toggle",
      e);
      break;
      case "input": wt("invalid",
      e),
      wh(e,
      o.value,
      o.defaultValue,
      o.checked,
      o.defaultChecked,
      o.type,
      o.name,
       ! 0);
      break;
      case "select": wt("invalid",
      e);
      break;
      case "textarea": wt("invalid",
      e),
      Th(e,
      o.value,
      o.defaultValue,
      o.children)
    }
    i = o.children,
    typeof i != "string" && typeof i != "number" && typeof i != "bigint" || e.textContent === "" + i || o.suppressHydrationWarning ===  ! 0 || Mg(e.textContent,
    i) ? (o.popover != null && (wt("beforetoggle",
    e),
    wt("toggle",
    e)),
    o.onScroll != null && wt("scroll",
    e),
    o.onScrollEnd != null && wt("scrollend",
    e),
    o.onClick != null && (e.onclick = Bn),
    e =  ! 0): e =  ! 1,
    e || ha(t,
     ! 0)
  }
  function fm(t) {
    for(he = t.return; he; ) switch(he.tag) {
      case 5: case 31: case 13: an =  ! 1;
      return;
      case 27: case 3: an =  ! 0;
      return;
      default: he = he.return
    }
  }
  function Pi(t) {
    if(t !== he) return ! 1;
    if( ! Ct) return fm(t),
    Ct =  ! 0,
     ! 1;
    var e = t.tag,
    i;
    if((i = e !== 3 && e !== 27) && ((i = e === 5) && (i = t.type,
    i =  ! (i !== "form" && i !== "button") || nf(t.type,
    t.memoizedProps)),
    i =  ! i),
    i && Pt && ha(t),
    fm(t),
    e === 13) {
      if(t = t.memoizedState,
      t = t !== null ? t.dehydrated: null,
       ! t) throw Error(r(317));
      Pt = Vg(t)
    }
    else if(e === 31) {
      if(t = t.memoizedState,
      t = t !== null ? t.dehydrated: null,
       ! t) throw Error(r(317));
      Pt = Vg(t)
    }
    else e === 27 ? (e = Pt,
    Ma(t.type) ? (t = lf,
    lf = null,
    Pt = t): Pt = e): Pt = he ? on(t.stateNode.nextSibling): null;
    return ! 0
  }
  function Ia() {
    Pt = he = null,
    Ct =  ! 1
  }
  function Uc() {
    var t = da;
    return t !== null && (ke === null ? ke = t: ke.push.apply(ke,
    t),
    da = null),
    t
  }
  function Xs(t) {
    da === null ? da = [t]: da.push(t)
  }
  var Hc = R(null),
  ti = null,
  Pn = null;
  function ma(t,
  e,
  i) {
    P(Hc,
    e._currentValue),
    e._currentValue = i
  }
  function Yn(t) {
    t._currentValue = Hc.current,
    Y(Hc)
  }
  function Pc(t,
  e,
  i) {
    for(; t !== null; ) {
      var o = t.alternate;
      if((t.childLanes & e) !== e ? (t.childLanes |= e,
      o !== null && (o.childLanes |= e)): o !== null && (o.childLanes & e) !== e && (o.childLanes |= e),
      t === i) break;
      t = t.return
    }
  }
  function Yc(t,
  e,
  i,
  o) {
    var c = t.child;
    for(c !== null && (c.return = t);
    c !== null;
    ) {
      var u = c.dependencies;
      if(u !== null) {
        var y = c.child;
        u = u.firstContext;
        t: for(; u !== null; ) {
          var b = u;
          u = c;
          for(var T = 0; T < e.length; T++) if(b.context === e[T]) {
            u.lanes |= i,
            b = u.alternate,
            b !== null && (b.lanes |= i),
            Pc(u.return,
            i,
            t),
            o || (y = null);
            break t
          }
          u = b.next
        }
      }
      else if(c.tag === 18) {
        if(y = c.return,
        y === null) throw Error(r(341));
        y.lanes |= i,
        u = y.alternate,
        u !== null && (u.lanes |= i),
        Pc(y,
        i,
        t),
        y = null
      }
      else y = c.child;
      if(y !== null) y.return = c;
      else for(y = c; y !== null; ) {
        if(y === t) {
          y = null;
          break
        }
        if(c = y.sibling,
        c !== null) {
          c.return = y.return,
          y = c;
          break
        }
        y = y.return
      }
      c = y
    }
  }
  function Yi(t,
  e,
  i,
  o) {
    t = null;
    for(var c = e,
    u =  ! 1; c !== null; ) {
      if( ! u) {
        if((c.flags & 524288) !== 0) u =  ! 0;
        else if((c.flags & 262144) !== 0) break
      }
      if(c.tag === 10) {
        var y = c.alternate;
        if(y === null) throw Error(r(387));
        if(y = y.memoizedProps,
        y !== null) {
          var b = c.type;
          Ge(c.pendingProps.value,
          y.value) || (t !== null ? t.push(b): t = [b])
        }
      }
      else if(c === ot.current) {
        if(y = c.alternate,
        y === null) throw Error(r(387));
        y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(xo): t = [xo])
      }
      c = c.return
    }
    t !== null && Yc(e,
    t,
    i,
    o),
    e.flags |= 262144
  }
  function mr(t) {
    for(t = t.firstContext; t !== null; ) {
      if( ! Ge(t.context._currentValue,
      t.memoizedValue)) return ! 0;
      t = t.next
    }
    return ! 1
  }
  function ei(t) {
    ti = t,
    Pn = null,
    t = t.dependencies,
    t !== null && (t.firstContext = null)
  }
  function me(t) {
    return dm(ti,
    t)
  }
  function pr(t,
  e) {
    return ti === null && ei(t),
    dm(t,
    e)
  }
  function dm(t,
  e) {
    var i = e._currentValue;
    if(e =  {
      context: e,
      memoizedValue: i,
      next: null
    },
    Pn === null) {
      if(t === null) throw Error(r(308));
      Pn = e,
      t.dependencies =  {
        lanes: 0,
        firstContext: e
      },
      t.flags |= 524288
    }
    else Pn = Pn.next = e;
    return i
  }
  var rS = typeof AbortController < "u" ? AbortController: function() {
    var t = [],
    e = this.signal =  {
      aborted:  ! 1,
      addEventListener: function(i,
      o) {
        t.push(o)
      }
    };
    this.abort = function() {
      e.aborted =  ! 0,
      t.forEach(function(i) {
        return i()
      })
    }
  },
  lS = n.unstable_scheduleCallback,
  cS = n.unstable_NormalPriority,
  ee =  {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gc() {
    return {
      controller: new rS,
      data: new Map,
      refCount: 0
    }
  }
  function Ks(t) {
    t.refCount--,
    t.refCount === 0 && lS(cS,
    function() {
      t.controller.abort()
    })
  }
  var Fs = null,
  qc = 0,
  Gi = 0,
  qi = null;
  function uS(t,
  e) {
    if(Fs === null) {
      var i = Fs = [];
      qc = 0,
      Gi = Fu(),
      qi =  {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o)
        }
      }
    }
    return qc++,
    e.then(hm,
    hm),
    e
  }
  function hm() {
    if(-- qc === 0 && Fs !== null) {
      qi !== null && (qi.status = "fulfilled");
      var t = Fs;
      Fs = null,
      Gi = 0,
      qi = null;
      for(var e = 0; e < t.length; e++)(0,
      t[e])()
    }
  }
  function fS(t,
  e) {
    var i = [],
    o =  {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        i.push(c)
      }
    };
    return t.then(function() {
      o.status = "fulfilled",
      o.value = e;
      for(var c = 0; c < i.length; c++)(0,
      i[c])(e)
    },
    function(c) {
      for(o.status = "rejected",
      o.reason = c,
      c = 0; c < i.length; c++)(0,
      i[c])(void 0)
    }),
    o
  }
  var mm = O.S;
  O.S = function(t,
  e) {
    Jp = Te(),
    typeof e == "object" && e !== null && typeof e.then == "function" && uS(t,
    e),
    mm !== null && mm(t,
    e)
  };
  var ni = R(null);
  function Xc() {
    var t = ni.current;
    return t !== null ? t: kt.pooledCache
  }
  function gr(t,
  e) {
    e === null ? P(ni,
    ni.current): P(ni,
    e.pool)
  }
  function pm() {
    var t = Xc();
    return t === null ? null:  {
      parent: ee._currentValue,
      pool: t
    }
  }
  var Xi = Error(r(460)),
  Kc = Error(r(474)),
  yr = Error(r(542)),
  vr =  {
    then: function() {
    }
  };
  function gm(t) {
    return t = t.status,
    t === "fulfilled" || t === "rejected"
  }
  function ym(t,
  e,
  i) {
    switch(i = t[i],
    i === void 0 ? t.push(e): i !== e && (e.then(Bn,
    Bn),
    e = i),
    e.status) {
      case "fulfilled": return e.value;
      case "rejected": throw t = e.reason,
      xm(t),
      t;
      default: if(typeof e.status == "string") e.then(Bn,
      Bn);
      else {
        if(t = kt,
        t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
        t = e,
        t.status = "pending",
        t.then(function(o) {
          if(e.status === "pending") {
            var c = e;
            c.status = "fulfilled",
            c.value = o
          }
        },
        function(o) {
          if(e.status === "pending") {
            var c = e;
            c.status = "rejected",
            c.reason = o
          }
        })
      }
      switch(e.status) {
        case "fulfilled": return e.value;
        case "rejected": throw t = e.reason,
        xm(t),
        t
      }
      throw ii = e,
      Xi
    }
  }
  function ai(t) {
    try {
      var e = t._init;
      return e(t._payload)
    }
    catch(i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (ii = i,
      Xi): i
    }
  }
  var ii = null;
  function vm() {
    if(ii === null) throw Error(r(459));
    var t = ii;
    return ii = null,
    t
  }
  function xm(t) {
    if(t === Xi || t === yr) throw Error(r(483))
  }
  var Ki = null,
  Zs = 0;
  function xr(t) {
    var e = Zs;
    return Zs += 1,
    Ki === null && (Ki = []),
    ym(Ki,
    t,
    e)
  }
  function Qs(t,
  e) {
    e = e.props.ref,
    t.ref = e !== void 0 ? e: null
  }
  function br(t,
  e) {
    throw e.$$typeof === E ? Error(r(525)): (t = Object.prototype.toString.call(e),
    Error(r(31,
    t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}": t)))
  }
  function bm(t) {
    function e(j,
    N) {
      if(t) {
        var z = j.deletions;
        z === null ? (j.deletions = [N],
        j.flags |= 16): z.push(N)
      }
    }
    function i(j,
    N) {
      if( ! t) return null;
      for(; N !== null; ) e(j,
      N),
      N = N.sibling;
      return null
    }
    function o(j) {
      for(var N = new Map; j !== null; ) j.key !== null ? N.set(j.key,
      j): N.set(j.index,
      j),
      j = j.sibling;
      return N
    }
    function c(j,
    N) {
      return j = Un(j,
      N),
      j.index = 0,
      j.sibling = null,
      j
    }
    function u(j,
    N,
    z) {
      return j.index = z,
      t ? (z = j.alternate,
      z !== null ? (z = z.index,
      z < N ? (j.flags |= 67108866,
      N): z): (j.flags |= 67108866,
      N)): (j.flags |= 1048576,
      N)
    }
    function y(j) {
      return t && j.alternate === null && (j.flags |= 67108866),
      j
    }
    function b(j,
    N,
    z,
    G) {
      return N === null || N.tag !== 6 ? (N = _c(z,
      j.mode,
      G),
      N.return = j,
      N): (N = c(N,
      z),
      N.return = j,
      N)
    }
    function T(j,
    N,
    z,
    G) {
      var lt = z.type;
      return lt === A ? U(j,
      N,
      z.props.children,
      G,
      z.key): N !== null && (N.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === X && ai(lt) === N.type) ? (N = c(N,
      z.props),
      Qs(N,
      z),
      N.return = j,
      N): (N = dr(z.type,
      z.key,
      z.props,
      null,
      j.mode,
      G),
      Qs(N,
      z),
      N.return = j,
      N)
    }
    function _(j,
    N,
    z,
    G) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== z.containerInfo || N.stateNode.implementation !== z.implementation ? (N = Lc(z,
      j.mode,
      G),
      N.return = j,
      N): (N = c(N,
      z.children || []),
      N.return = j,
      N)
    }
    function U(j,
    N,
    z,
    G,
    lt) {
      return N === null || N.tag !== 7 ? (N = $a(z,
      j.mode,
      G,
      lt),
      N.return = j,
      N): (N = c(N,
      z),
      N.return = j,
      N)
    }
    function K(j,
    N,
    z) {
      if(typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = _c("" + N,
      j.mode,
      z),
      N.return = j,
      N;
      if(typeof N == "object" && N !== null) {
        switch(N.$$typeof) {
          case w: return z = dr(N.type,
          N.key,
          N.props,
          null,
          j.mode,
          z),
          Qs(z,
          N),
          z.return = j,
          z;
          case M: return N = Lc(N,
          j.mode,
          z),
          N.return = j,
          N;
          case X: return N = ai(N),
          K(j,
          N,
          z)
        }
        if(yt(N) || pt(N)) return N = $a(N,
        j.mode,
        z,
        null),
        N.return = j,
        N;
        if(typeof N.then == "function") return K(j,
        xr(N),
        z);
        if(N.$$typeof === L) return K(j,
        pr(j,
        N),
        z);
        br(j,
        N)
      }
      return null
    }
    function V(j,
    N,
    z,
    G) {
      var lt = N !== null ? N.key: null;
      if(typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return lt !== null ? null: b(j,
      N,
      "" + z,
      G);
      if(typeof z == "object" && z !== null) {
        switch(z.$$typeof) {
          case w: return z.key === lt ? T(j,
          N,
          z,
          G): null;
          case M: return z.key === lt ? _(j,
          N,
          z,
          G): null;
          case X: return z = ai(z),
          V(j,
          N,
          z,
          G)
        }
        if(yt(z) || pt(z)) return lt !== null ? null: U(j,
        N,
        z,
        G,
        null);
        if(typeof z.then == "function") return V(j,
        N,
        xr(z),
        G);
        if(z.$$typeof === L) return V(j,
        N,
        pr(j,
        z),
        G);
        br(j,
        z)
      }
      return null
    }
    function k(j,
    N,
    z,
    G,
    lt) {
      if(typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return j = j.get(z) || null,
      b(N,
      j,
      "" + G,
      lt);
      if(typeof G == "object" && G !== null) {
        switch(G.$$typeof) {
          case w: return j = j.get(G.key === null ? z: G.key) || null,
          T(N,
          j,
          G,
          lt);
          case M: return j = j.get(G.key === null ? z: G.key) || null,
          _(N,
          j,
          G,
          lt);
          case X: return G = ai(G),
          k(j,
          N,
          z,
          G,
          lt)
        }
        if(yt(G) || pt(G)) return j = j.get(z) || null,
        U(N,
        j,
        G,
        lt,
        null);
        if(typeof G.then == "function") return k(j,
        N,
        z,
        xr(G),
        lt);
        if(G.$$typeof === L) return k(j,
        N,
        z,
        pr(N,
        G),
        lt);
        br(N,
        G)
      }
      return null
    }
    function et(j,
    N,
    z,
    G) {
      for(var lt = null,
      Dt = null,
      st = N,
      bt = N = 0,
      Tt = null; st !== null && bt < z.length; bt++) {
        st.index > bt ? (Tt = st,
        st = null): Tt = st.sibling;
        var jt = V(j,
        st,
        z[bt],
        G);
        if(jt === null) {
          st === null && (st = Tt);
          break
        }
        t && st && jt.alternate === null && e(j,
        st),
        N = u(jt,
        N,
        bt),
        Dt === null ? lt = jt: Dt.sibling = jt,
        Dt = jt,
        st = Tt
      }
      if(bt === z.length) return i(j,
      st),
      Ct && Hn(j,
      bt),
      lt;
      if(st === null) {
        for(; bt < z.length; bt++) st = K(j,
        z[bt],
        G),
        st !== null && (N = u(st,
        N,
        bt),
        Dt === null ? lt = st: Dt.sibling = st,
        Dt = st);
        return Ct && Hn(j,
        bt),
        lt
      }
      for(st = o(st);
      bt < z.length;
      bt++) Tt = k(st,
      j,
      bt,
      z[bt],
      G),
      Tt !== null && (t && Tt.alternate !== null && st.delete(Tt.key === null ? bt: Tt.key),
      N = u(Tt,
      N,
      bt),
      Dt === null ? lt = Tt: Dt.sibling = Tt,
      Dt = Tt);
      return t && st.forEach(function(Oa) {
        return e(j,
        Oa)
      }),
      Ct && Hn(j,
      bt),
      lt
    }
    function ft(j,
    N,
    z,
    G) {
      if(z == null) throw Error(r(151));
      for(var lt = null,
      Dt = null,
      st = N,
      bt = N = 0,
      Tt = null,
      jt = z.next();
      st !== null &&  ! jt.done;
      bt++,
      jt = z.next()) {
        st.index > bt ? (Tt = st,
        st = null): Tt = st.sibling;
        var Oa = V(j,
        st,
        jt.value,
        G);
        if(Oa === null) {
          st === null && (st = Tt);
          break
        }
        t && st && Oa.alternate === null && e(j,
        st),
        N = u(Oa,
        N,
        bt),
        Dt === null ? lt = Oa: Dt.sibling = Oa,
        Dt = Oa,
        st = Tt
      }
      if(jt.done) return i(j,
      st),
      Ct && Hn(j,
      bt),
      lt;
      if(st === null) {
        for(;  ! jt.done; bt++,
        jt = z.next()) jt = K(j,
        jt.value,
        G),
        jt !== null && (N = u(jt,
        N,
        bt),
        Dt === null ? lt = jt: Dt.sibling = jt,
        Dt = jt);
        return Ct && Hn(j,
        bt),
        lt
      }
      for(st = o(st);
       ! jt.done;
      bt++,
      jt = z.next()) jt = k(st,
      j,
      bt,
      jt.value,
      G),
      jt !== null && (t && jt.alternate !== null && st.delete(jt.key === null ? bt: jt.key),
      N = u(jt,
      N,
      bt),
      Dt === null ? lt = jt: Dt.sibling = jt,
      Dt = jt);
      return t && st.forEach(function(E2) {
        return e(j,
        E2)
      }),
      Ct && Hn(j,
      bt),
      lt
    }
    function Bt(j,
    N,
    z,
    G) {
      if(typeof z == "object" && z !== null && z.type === A && z.key === null && (z = z.props.children),
      typeof z == "object" && z !== null) {
        switch(z.$$typeof) {
          case w: t:  {
            for(var lt = z.key; N !== null; ) {
              if(N.key === lt) {
                if(lt = z.type,
                lt === A) {
                  if(N.tag === 7) {
                    i(j,
                    N.sibling),
                    G = c(N,
                    z.props.children),
                    G.return = j,
                    j = G;
                    break t
                  }
                }
                else if(N.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === X && ai(lt) === N.type) {
                  i(j,
                  N.sibling),
                  G = c(N,
                  z.props),
                  Qs(G,
                  z),
                  G.return = j,
                  j = G;
                  break t
                }
                i(j,
                N);
                break
              }
              else e(j,
              N);
              N = N.sibling
            }
            z.type === A ? (G = $a(z.props.children,
            j.mode,
            G,
            z.key),
            G.return = j,
            j = G): (G = dr(z.type,
            z.key,
            z.props,
            null,
            j.mode,
            G),
            Qs(G,
            z),
            G.return = j,
            j = G)
          }
          return y(j);
          case M: t:  {
            for(lt = z.key; N !== null; ) {
              if(N.key === lt) if(N.tag === 4 && N.stateNode.containerInfo === z.containerInfo && N.stateNode.implementation === z.implementation) {
                i(j,
                N.sibling),
                G = c(N,
                z.children || []),
                G.return = j,
                j = G;
                break t
              }
              else {
                i(j,
                N);
                break
              }
              else e(j,
              N);
              N = N.sibling
            }
            G = Lc(z,
            j.mode,
            G),
            G.return = j,
            j = G
          }
          return y(j);
          case X: return z = ai(z),
          Bt(j,
          N,
          z,
          G)
        }
        if(yt(z)) return et(j,
        N,
        z,
        G);
        if(pt(z)) {
          if(lt = pt(z),
          typeof lt != "function") throw Error(r(150));
          return z = lt.call(z),
          ft(j,
          N,
          z,
          G)
        }
        if(typeof z.then == "function") return Bt(j,
        N,
        xr(z),
        G);
        if(z.$$typeof === L) return Bt(j,
        N,
        pr(j,
        z),
        G);
        br(j,
        z)
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
      N !== null && N.tag === 6 ? (i(j,
      N.sibling),
      G = c(N,
      z),
      G.return = j,
      j = G): (i(j,
      N),
      G = _c(z,
      j.mode,
      G),
      G.return = j,
      j = G),
      y(j)): i(j,
      N)
    }
    return function(j,
    N,
    z,
    G) {
      try {
        Zs = 0;
        var lt = Bt(j,
        N,
        z,
        G);
        return Ki = null,
        lt
      }
      catch(st) {
        if(st === Xi || st === yr) throw st;
        var Dt = qe(29,
        st,
        null,
        j.mode);
        return Dt.lanes = G,
        Dt.return = j,
        Dt
      }
    }
  }
  var si = bm( ! 0),
  Sm = bm( ! 1),
  pa =  ! 1;
  function Fc(t) {
    t.updateQueue =  {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared:  {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }
  function Zc(t,
  e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue =  {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    })
  }
  function ga(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }
  function ya(t,
  e,
  i) {
    var o = t.updateQueue;
    if(o === null) return null;
    if(o = o.shared,
    (Ot & 2) !== 0) {
      var c = o.pending;
      return c === null ? e.next = e: (e.next = c.next,
      c.next = e),
      o.pending = e,
      e = fr(t),
      im(t,
      null,
      i),
      e
    }
    return ur(t,
    o,
    e,
    i),
    fr(t)
  }
  function Ws(t,
  e,
  i) {
    if(e = e.updateQueue,
    e !== null && (e = e.shared,
    (i & 4194048) !== 0)) {
      var o = e.lanes;
      o &= t.pendingLanes,
      i |= o,
      e.lanes = i,
      je(t,
      i)
    }
  }
  function Qc(t,
  e) {
    var i = t.updateQueue,
    o = t.alternate;
    if(o !== null && (o = o.updateQueue,
    i === o)) {
      var c = null,
      u = null;
      if(i = i.firstBaseUpdate,
      i !== null) {
        do {
          var y =  {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          u === null ? c = u = y: u = u.next = y,
          i = i.next
        }
        while(i !== null);
        u === null ? c = u = e: u = u.next = e
      }
      else c = u = e;
      i =  {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: o.shared,
        callbacks: o.callbacks
      },
      t.updateQueue = i;
      return
    }
    t = i.lastBaseUpdate,
    t === null ? i.firstBaseUpdate = e: t.next = e,
    i.lastBaseUpdate = e
  }
  var Wc =  ! 1;
  function Js() {
    if(Wc) {
      var t = qi;
      if(t !== null) throw t
    }
  }
  function $s(t,
  e,
  i,
  o) {
    Wc =  ! 1;
    var c = t.updateQueue;
    pa =  ! 1;
    var u = c.firstBaseUpdate,
    y = c.lastBaseUpdate,
    b = c.shared.pending;
    if(b !== null) {
      c.shared.pending = null;
      var T = b,
      _ = T.next;
      T.next = null,
      y === null ? u = _: y.next = _,
      y = T;
      var U = t.alternate;
      U !== null && (U = U.updateQueue,
      b = U.lastBaseUpdate,
      b !== y && (b === null ? U.firstBaseUpdate = _: b.next = _,
      U.lastBaseUpdate = T))
    }
    if(u !== null) {
      var K = c.baseState;
      y = 0,
      U = _ = T = null,
      b = u;
      do {
        var V = b.lane &  - 536870913,
        k = V !== b.lane;
        if(k ? (At & V) === V: (o & V) === V) {
          V !== 0 && V === Gi && (Wc =  ! 0),
          U !== null && (U = U.next =  {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t:  {
            var et = t,
            ft = b;
            V = e;
            var Bt = i;
            switch(ft.tag) {
              case 1: if(et = ft.payload,
              typeof et == "function") {
                K = et.call(Bt,
                K,
                V);
                break t
              }
              K = et;
              break t;
              case 3: et.flags = et.flags &  - 65537 | 128;
              case 0: if(et = ft.payload,
              V = typeof et == "function" ? et.call(Bt,
              K,
              V): et,
              V == null) break t;
              K = p( {
              },
              K,
              V);
              break t;
              case 2: pa =  ! 0
            }
          }
          V = b.callback,
          V !== null && (t.flags |= 64,
          k && (t.flags |= 8192),
          k = c.callbacks,
          k === null ? c.callbacks = [V]: k.push(V))
        }
        else k =  {
          lane: V,
          tag: b.tag,
          payload: b.payload,
          callback: b.callback,
          next: null
        },
        U === null ? (_ = U = k,
        T = K): U = U.next = k,
        y |= V;
        if(b = b.next,
        b === null) {
          if(b = c.shared.pending,
          b === null) break;
          k = b,
          b = k.next,
          k.next = null,
          c.lastBaseUpdate = k,
          c.shared.pending = null
        }
      }
      while( ! 0);
      U === null && (T = K),
      c.baseState = T,
      c.firstBaseUpdate = _,
      c.lastBaseUpdate = U,
      u === null && (c.shared.lanes = 0),
      Ea |= y,
      t.lanes = y,
      t.memoizedState = K
    }
  }
  function Em(t,
  e) {
    if(typeof t != "function") throw Error(r(191,
    t));
    t.call(e)
  }
  function wm(t,
  e) {
    var i = t.callbacks;
    if(i !== null) for(t.callbacks = null,
    t = 0; t < i.length; t++) Em(i[t],
    e)
  }
  var Fi = R(null),
  Sr = R(0);
  function Am(t,
  e) {
    t = Jn,
    P(Sr,
    t),
    P(Fi,
    e),
    Jn = t | e.baseLanes
  }
  function Jc() {
    P(Sr,
    Jn),
    P(Fi,
    Fi.current)
  }
  function $c() {
    Jn = Sr.current,
    Y(Fi),
    Y(Sr)
  }
  var Xe = R(null),
  sn = null;
  function va(t) {
    var e = t.alternate;
    P($t,
    $t.current & 1),
    P(Xe,
    t),
    sn === null && (e === null || Fi.current !== null || e.memoizedState !== null) && (sn = t)
  }
  function Ic(t) {
    P($t,
    $t.current),
    P(Xe,
    t),
    sn === null && (sn = t)
  }
  function Tm(t) {
    t.tag === 22 ? (P($t,
    $t.current),
    P(Xe,
    t),
    sn === null && (sn = t)): xa()
  }
  function xa() {
    P($t,
    $t.current),
    P(Xe,
    Xe.current)
  }
  function Ke(t) {
    Y(Xe),
    sn === t && (sn = null),
    Y($t)
  }
  var $t = R(0);
  function Er(t) {
    for(var e = t; e !== null; ) {
      if(e.tag === 13) {
        var i = e.memoizedState;
        if(i !== null && (i = i.dehydrated,
        i === null || of(i) || rf(i))) return e
      }
      else if(e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if((e.flags & 128) !== 0) return e
      }
      else if(e.child !== null) {
        e.child.return = e,
        e = e.child;
        continue
      }
      if(e === t) break;
      for(; e.sibling === null; ) {
        if(e.return === null || e.return === t) return null;
        e = e.return
      }
      e.sibling.return = e.return,
      e = e.sibling
    }
    return null
  }
  var Gn = 0,
  xt = null,
  Lt = null,
  ne = null,
  wr =  ! 1,
  Zi =  ! 1,
  oi =  ! 1,
  Ar = 0,
  Is = 0,
  Qi = null,
  dS = 0;
  function Qt() {
    throw Error(r(321))
  }
  function tu(t,
  e) {
    if(e === null) return ! 1;
    for(var i = 0; i < e.length && i < t.length; i++) if( ! Ge(t[i],
    e[i])) return ! 1;
    return ! 0
  }
  function eu(t,
  e,
  i,
  o,
  c,
  u) {
    return Gn = u,
    xt = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    O.H = t === null || t.memoizedState === null ? lp: gu,
    oi =  ! 1,
    u = i(o,
    c),
    oi =  ! 1,
    Zi && (u = Mm(e,
    i,
    o,
    c)),
    Cm(t),
    u
  }
  function Cm(t) {
    O.H = no;
    var e = Lt !== null && Lt.next !== null;
    if(Gn = 0,
    ne = Lt = xt = null,
    wr =  ! 1,
    Is = 0,
    Qi = null,
    e) throw Error(r(300));
    t === null || ae || (t = t.dependencies,
    t !== null && mr(t) && (ae =  ! 0))
  }
  function Mm(t,
  e,
  i,
  o) {
    xt = t;
    var c = 0;
    do {
      if(Zi && (Qi = null),
      Is = 0,
      Zi =  ! 1,
      25 <= c) throw Error(r(301));
      if(c += 1,
      ne = Lt = null,
      t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null,
        u.events = null,
        u.stores = null,
        u.memoCache != null && (u.memoCache.index = 0)
      }
      O.H = cp,
      u = e(i,
      o)
    }
    while(Zi);
    return u
  }
  function hS() {
    var t = O.H,
    e = t.useState()[0];
    return e = typeof e.then == "function" ? to(e): e,
    t = t.useState()[0],
    (Lt !== null ? Lt.memoizedState: null) !== t && (xt.flags |= 1024),
    e
  }
  function nu() {
    var t = Ar !== 0;
    return Ar = 0,
    t
  }
  function au(t,
  e,
  i) {
    e.updateQueue = t.updateQueue,
    e.flags &=  - 2053,
    t.lanes &= ~ i
  }
  function iu(t) {
    if(wr) {
      for(t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null),
        t = t.next
      }
      wr =  ! 1
    }
    Gn = 0,
    ne = Lt = xt = null,
    Zi =  ! 1,
    Is = Ar = 0,
    Qi = null
  }
  function Me() {
    var t =  {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ne === null ? xt.memoizedState = ne = t: ne = ne.next = t,
    ne
  }
  function It() {
    if(Lt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState: null
    }
    else t = Lt.next;
    var e = ne === null ? xt.memoizedState: ne.next;
    if(e !== null) ne = e,
    Lt = t;
    else {
      if(t === null) throw xt.alternate === null ? Error(r(467)): Error(r(310));
      Lt = t,
      t =  {
        memoizedState: Lt.memoizedState,
        baseState: Lt.baseState,
        baseQueue: Lt.baseQueue,
        queue: Lt.queue,
        next: null
      },
      ne === null ? xt.memoizedState = ne = t: ne = ne.next = t
    }
    return ne
  }
  function Tr() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }
  function to(t) {
    var e = Is;
    return Is += 1,
    Qi === null && (Qi = []),
    t = ym(Qi,
    t,
    e),
    e = xt,
    (ne === null ? e.memoizedState: ne.next) === null && (e = e.alternate,
    O.H = e === null || e.memoizedState === null ? lp: gu),
    t
  }
  function Cr(t) {
    if(t !== null && typeof t == "object") {
      if(typeof t.then == "function") return to(t);
      if(t.$$typeof === L) return me(t)
    }
    throw Error(r(438,
    String(t)))
  }
  function su(t) {
    var e = null,
    i = xt.updateQueue;
    if(i !== null && (e = i.memoCache),
    e == null) {
      var o = xt.alternate;
      o !== null && (o = o.updateQueue,
      o !== null && (o = o.memoCache,
      o != null && (e =  {
        data: o.data.map(function(c) {
          return c.slice()
        }),
        index: 0
      })))
    }
    if(e == null && (e =  {
      data: [],
      index: 0
    }),
    i === null && (i = Tr(),
    xt.updateQueue = i),
    i.memoCache = e,
    i = e.data[e.index],
    i === void 0) for(i = e.data[e.index] = Array(t),
    o = 0;
    o < t;
    o++) i[o] = tt;
    return e.index++,
    i
  }
  function qn(t,
  e) {
    return typeof e == "function" ? e(t): e
  }
  function Mr(t) {
    var e = It();
    return ou(e,
    Lt,
    t)
  }
  function ou(t,
  e,
  i) {
    var o = t.queue;
    if(o === null) throw Error(r(311));
    o.lastRenderedReducer = i;
    var c = t.baseQueue,
    u = o.pending;
    if(u !== null) {
      if(c !== null) {
        var y = c.next;
        c.next = u.next,
        u.next = y
      }
      e.baseQueue = c = u,
      o.pending = null
    }
    if(u = t.baseState,
    c === null) t.memoizedState = u;
    else {
      e = c.next;
      var b = y = null,
      T = null,
      _ = e,
      U =  ! 1;
      do {
        var K = _.lane &  - 536870913;
        if(K !== _.lane ? (At & K) === K: (Gn & K) === K) {
          var V = _.revertLane;
          if(V === 0) T !== null && (T = T.next =  {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }),
          K === Gi && (U =  ! 0);
          else if((Gn & V) === V) {
            _ = _.next,
            V === Gi && (U =  ! 0);
            continue
          }
          else K =  {
            lane: 0,
            revertLane: _.revertLane,
            gesture: null,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          },
          T === null ? (b = T = K,
          y = u): T = T.next = K,
          xt.lanes |= V,
          Ea |= V;
          K = _.action,
          oi && i(u,
          K),
          u = _.hasEagerState ? _.eagerState: i(u,
          K)
        }
        else V =  {
          lane: K,
          revertLane: _.revertLane,
          gesture: _.gesture,
          action: _.action,
          hasEagerState: _.hasEagerState,
          eagerState: _.eagerState,
          next: null
        },
        T === null ? (b = T = V,
        y = u): T = T.next = V,
        xt.lanes |= K,
        Ea |= K;
        _ = _.next
      }
      while(_ !== null && _ !== e);
      if(T === null ? y = u: T.next = b,
       ! Ge(u,
      t.memoizedState) && (ae =  ! 0,
      U && (i = qi,
      i !== null))) throw i;
      t.memoizedState = u,
      t.baseState = y,
      t.baseQueue = T,
      o.lastRenderedState = u
    }
    return c === null && (o.lanes = 0),
    [t.memoizedState,
    o.dispatch]
  }
  function ru(t) {
    var e = It(),
    i = e.queue;
    if(i === null) throw Error(r(311));
    i.lastRenderedReducer = t;
    var o = i.dispatch,
    c = i.pending,
    u = e.memoizedState;
    if(c !== null) {
      i.pending = null;
      var y = c = c.next;
      do u = t(u,
      y.action),
      y = y.next;
      while(y !== c);
      Ge(u,
      e.memoizedState) || (ae =  ! 0),
      e.memoizedState = u,
      e.baseQueue === null && (e.baseState = u),
      i.lastRenderedState = u
    }
    return[u,
    o]
  }
  function Rm(t,
  e,
  i) {
    var o = xt,
    c = It(),
    u = Ct;
    if(u) {
      if(i === void 0) throw Error(r(407));
      i = i()
    }
    else i = e();
    var y =  ! Ge((Lt || c).memoizedState,
    i);
    if(y && (c.memoizedState = i,
    ae =  ! 0),
    c = c.queue,
    uu(jm.bind(null,
    o,
    c,
    t),
    [t]),
    c.getSnapshot !== e || y || ne !== null && ne.memoizedState.tag & 1) {
      if(o.flags |= 2048,
      Wi(9,
       {
        destroy: void 0
      },
      Dm.bind(null,
      o,
      c,
      i,
      e),
      null),
      kt === null) throw Error(r(349));
      u || (Gn & 127) !== 0 || Nm(o,
      e,
      i)
    }
    return i
  }
  function Nm(t,
  e,
  i) {
    t.flags |= 16384,
    t =  {
      getSnapshot: e,
      value: i
    },
    e = xt.updateQueue,
    e === null ? (e = Tr(),
    xt.updateQueue = e,
    e.stores = [t]): (i = e.stores,
    i === null ? e.stores = [t]: i.push(t))
  }
  function Dm(t,
  e,
  i,
  o) {
    e.value = i,
    e.getSnapshot = o,
    Om(e) && zm(t)
  }
  function jm(t,
  e,
  i) {
    return i(function() {
      Om(e) && zm(t)
    })
  }
  function Om(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var i = e();
      return ! Ge(t,
      i)
    }
    catch {
      return ! 0
    }
  }
  function zm(t) {
    var e = Ja(t,
    2);
    e !== null && Ue(e,
    t,
    2)
  }
  function lu(t) {
    var e = Me();
    if(typeof t == "function") {
      var i = t;
      if(t = i(),
      oi) {
        dn( ! 0);
        try {
          i()
        }
        finally {
          dn( ! 1)
        }
      }
    }
    return e.memoizedState = e.baseState = t,
    e.queue =  {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: t
    },
    e
  }
  function _m(t,
  e,
  i,
  o) {
    return t.baseState = i,
    ou(t,
    Lt,
    typeof o == "function" ? o: qn)
  }
  function mS(t,
  e,
  i,
  o,
  c) {
    if(Dr(t)) throw Error(r(485));
    if(t = e.action,
    t !== null) {
      var u =  {
        payload: c,
        action: t,
        next: null,
        isTransition:  ! 0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          u.listeners.push(y)
        }
      };
      O.T !== null ? i( ! 0): u.isTransition =  ! 1,
      o(u),
      i = e.pending,
      i === null ? (u.next = e.pending = u,
      Lm(e,
      u)): (u.next = i.next,
      e.pending = i.next = u)
    }
  }
  function Lm(t,
  e) {
    var i = e.action,
    o = e.payload,
    c = t.state;
    if(e.isTransition) {
      var u = O.T,
      y =  {
      };
      O.T = y;
      try {
        var b = i(c,
        o),
        T = O.S;
        T !== null && T(y,
        b),
        Vm(t,
        e,
        b)
      }
      catch(_) {
        cu(t,
        e,
        _)
      }
      finally {
        u !== null && y.types !== null && (u.types = y.types),
        O.T = u
      }
    }
    else try {
      u = i(c,
      o),
      Vm(t,
      e,
      u)
    }
    catch(_) {
      cu(t,
      e,
      _)
    }
  }
  function Vm(t,
  e,
  i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(o) {
      Bm(t,
      e,
      o)
    },
    function(o) {
      return cu(t,
      e,
      o)
    }): Bm(t,
    e,
    i)
  }
  function Bm(t,
  e,
  i) {
    e.status = "fulfilled",
    e.value = i,
    km(e),
    t.state = i,
    e = t.pending,
    e !== null && (i = e.next,
    i === e ? t.pending = null: (i = i.next,
    e.next = i,
    Lm(t,
    i)))
  }
  function cu(t,
  e,
  i) {
    var o = t.pending;
    if(t.pending = null,
    o !== null) {
      o = o.next;
      do e.status = "rejected",
      e.reason = i,
      km(e),
      e = e.next;
      while(e !== o)
    }
    t.action = null
  }
  function km(t) {
    t = t.listeners;
    for(var e = 0; e < t.length; e++)(0,
    t[e])()
  }
  function Um(t,
  e) {
    return e
  }
  function Hm(t,
  e) {
    if(Ct) {
      var i = kt.formState;
      if(i !== null) {
        t:  {
          var o = xt;
          if(Ct) {
            if(Pt) {
              e:  {
                for(var c = Pt,
                u = an; c.nodeType !== 8; ) {
                  if( ! u) {
                    c = null;
                    break e
                  }
                  if(c = on(c.nextSibling),
                  c === null) {
                    c = null;
                    break e
                  }
                }
                u = c.data,
                c = u === "F!" || u === "F" ? c: null
              }
              if(c) {
                Pt = on(c.nextSibling),
                o = c.data === "F!";
                break t
              }
            }
            ha(o)
          }
          o =  ! 1
        }
        o && (e = i[0])
      }
    }
    return i = Me(),
    i.memoizedState = i.baseState = e,
    o =  {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Um,
      lastRenderedState: e
    },
    i.queue = o,
    i = sp.bind(null,
    xt,
    o),
    o.dispatch = i,
    o = lu( ! 1),
    u = pu.bind(null,
    xt,
     ! 1,
    o.queue),
    o = Me(),
    c =  {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    },
    o.queue = c,
    i = mS.bind(null,
    xt,
    c,
    u,
    i),
    c.dispatch = i,
    o.memoizedState = t,
    [e,
    i,
     ! 1]
  }
  function Pm(t) {
    var e = It();
    return Ym(e,
    Lt,
    t)
  }
  function Ym(t,
  e,
  i) {
    if(e = ou(t,
    e,
    Um)[0],
    t = Mr(qn)[0],
    typeof e == "object" && e !== null && typeof e.then == "function") try {
      var o = to(e)
    }
    catch(y) {
      throw y === Xi ? yr: y
    }
    else o = e;
    e = It();
    var c = e.queue,
    u = c.dispatch;
    return i !== e.memoizedState && (xt.flags |= 2048,
    Wi(9,
     {
      destroy: void 0
    },
    pS.bind(null,
    c,
    i),
    null)),
    [o,
    u,
    t]
  }
  function pS(t,
  e) {
    t.action = e
  }
  function Gm(t) {
    var e = It(),
    i = Lt;
    if(i !== null) return Ym(e,
    i,
    t);
    It(),
    e = e.memoizedState,
    i = It();
    var o = i.queue.dispatch;
    return i.memoizedState = t,
    [e,
    o,
     ! 1]
  }
  function Wi(t,
  e,
  i,
  o) {
    return t =  {
      tag: t,
      create: i,
      deps: o,
      inst: e,
      next: null
    },
    e = xt.updateQueue,
    e === null && (e = Tr(),
    xt.updateQueue = e),
    i = e.lastEffect,
    i === null ? e.lastEffect = t.next = t: (o = i.next,
    i.next = t,
    t.next = o,
    e.lastEffect = t),
    t
  }
  function qm() {
    return It().memoizedState
  }
  function Rr(t,
  e,
  i,
  o) {
    var c = Me();
    xt.flags |= t,
    c.memoizedState = Wi(1 | e,
     {
      destroy: void 0
    },
    i,
    o === void 0 ? null: o)
  }
  function Nr(t,
  e,
  i,
  o) {
    var c = It();
    o = o === void 0 ? null: o;
    var u = c.memoizedState.inst;
    Lt !== null && o !== null && tu(o,
    Lt.memoizedState.deps) ? c.memoizedState = Wi(e,
    u,
    i,
    o): (xt.flags |= t,
    c.memoizedState = Wi(1 | e,
    u,
    i,
    o))
  }
  function Xm(t,
  e) {
    Rr(8390656,
    8,
    t,
    e)
  }
  function uu(t,
  e) {
    Nr(2048,
    8,
    t,
    e)
  }
  function gS(t) {
    xt.flags |= 4;
    var e = xt.updateQueue;
    if(e === null) e = Tr(),
    xt.updateQueue = e,
    e.events = [t];
    else {
      var i = e.events;
      i === null ? e.events = [t]: i.push(t)
    }
  }
  function Km(t) {
    var e = It().memoizedState;
    return gS( {
      ref: e,
      nextImpl: t
    }),
    function() {
      if((Ot & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0,
      arguments)
    }
  }
  function Fm(t,
  e) {
    return Nr(4,
    2,
    t,
    e)
  }
  function Zm(t,
  e) {
    return Nr(4,
    4,
    t,
    e)
  }
  function Qm(t,
  e) {
    if(typeof e == "function") {
      t = t();
      var i = e(t);
      return function() {
        typeof i == "function" ? i(): e(null)
      }
    }
    if(e != null) return t = t(),
    e.current = t,
    function() {
      e.current = null
    }
  }
  function Wm(t,
  e,
  i) {
    i = i != null ? i.concat([t]): null,
    Nr(4,
    4,
    Qm.bind(null,
    e,
    t),
    i)
  }
  function fu() {
  }
  function Jm(t,
  e) {
    var i = It();
    e = e === void 0 ? null: e;
    var o = i.memoizedState;
    return e !== null && tu(e,
    o[1]) ? o[0]: (i.memoizedState = [t,
    e],
    t)
  }
  function $m(t,
  e) {
    var i = It();
    e = e === void 0 ? null: e;
    var o = i.memoizedState;
    if(e !== null && tu(e,
    o[1])) return o[0];
    if(o = t(),
    oi) {
      dn( ! 0);
      try {
        t()
      }
      finally {
        dn( ! 1)
      }
    }
    return i.memoizedState = [o,
    e],
    o
  }
  function du(t,
  e,
  i) {
    return i === void 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e: (t.memoizedState = i,
    t = Ip(),
    xt.lanes |= t,
    Ea |= t,
    i)
  }
  function Im(t,
  e,
  i,
  o) {
    return Ge(i,
    e) ? i: Fi.current !== null ? (t = du(t,
    i,
    o),
    Ge(t,
    e) || (ae =  ! 0),
    t): (Gn & 42) === 0 || (Gn & 1073741824) !== 0 && (At & 261930) === 0 ? (ae =  ! 0,
    t.memoizedState = i): (t = Ip(),
    xt.lanes |= t,
    Ea |= t,
    e)
  }
  function tp(t,
  e,
  i,
  o,
  c) {
    var u = Z.p;
    Z.p = u !== 0 && 8 > u ? u: 8;
    var y = O.T,
    b =  {
    };
    O.T = b,
    pu(t,
     ! 1,
    e,
    i);
    try {
      var T = c(),
      _ = O.S;
      if(_ !== null && _(b,
      T),
      T !== null && typeof T == "object" && typeof T.then == "function") {
        var U = fS(T,
        o);
        eo(t,
        e,
        U,
        Qe(t))
      }
      else eo(t,
      e,
      o,
      Qe(t))
    }
    catch(K) {
      eo(t,
      e,
       {
        then: function() {
        },
        status: "rejected",
        reason: K
      },
      Qe())
    }
    finally {
      Z.p = u,
      y !== null && b.types !== null && (y.types = b.types),
      O.T = y
    }
  }
  function yS() {
  }
  function hu(t,
  e,
  i,
  o) {
    if(t.tag !== 5) throw Error(r(476));
    var c = ep(t).queue;
    tp(t,
    c,
    e,
    H,
    i === null ? yS: function() {
      return np(t),
      i(o)
    })
  }
  function ep(t) {
    var e = t.memoizedState;
    if(e !== null) return e;
    e =  {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue:  {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: H
      },
      next: null
    };
    var i =  {
    };
    return e.next =  {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue:  {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: i
      },
      next: null
    },
    t.memoizedState = e,
    t = t.alternate,
    t !== null && (t.memoizedState = e),
    e
  }
  function np(t) {
    var e = ep(t);
    e.next === null && (e = t.alternate.memoizedState),
    eo(t,
    e.next.queue,
     {
    },
    Qe())
  }
  function mu() {
    return me(xo)
  }
  function ap() {
    return It().memoizedState
  }
  function ip() {
    return It().memoizedState
  }
  function vS(t) {
    for(var e = t.return; e !== null; ) {
      switch(e.tag) {
        case 24: case 3: var i = Qe();
        t = ga(i);
        var o = ya(e,
        t,
        i);
        o !== null && (Ue(o,
        e,
        i),
        Ws(o,
        e,
        i)),
        e =  {
          cache: Gc()
        },
        t.payload = e;
        return
      }
      e = e.return
    }
  }
  function xS(t,
  e,
  i) {
    var o = Qe();
    i =  {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState:  ! 1,
      eagerState: null,
      next: null
    },
    Dr(t) ? op(e,
    i): (i = Oc(t,
    e,
    i,
    o),
    i !== null && (Ue(i,
    t,
    o),
    rp(i,
    e,
    o)))
  }
  function sp(t,
  e,
  i) {
    var o = Qe();
    eo(t,
    e,
    i,
    o)
  }
  function eo(t,
  e,
  i,
  o) {
    var c =  {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState:  ! 1,
      eagerState: null,
      next: null
    };
    if(Dr(t)) op(e,
    c);
    else {
      var u = t.alternate;
      if(t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
      u !== null)) try {
        var y = e.lastRenderedState,
        b = u(y,
        i);
        if(c.hasEagerState =  ! 0,
        c.eagerState = b,
        Ge(b,
        y)) return ur(t,
        e,
        c,
        0),
        kt === null && cr(),
         ! 1
      }
      catch {
      }
      if(i = Oc(t,
      e,
      c,
      o),
      i !== null) return Ue(i,
      t,
      o),
      rp(i,
      e,
      o),
       ! 0
    }
    return ! 1
  }
  function pu(t,
  e,
  i,
  o) {
    if(o =  {
      lane: 2,
      revertLane: Fu(),
      gesture: null,
      action: o,
      hasEagerState:  ! 1,
      eagerState: null,
      next: null
    },
    Dr(t)) {
      if(e) throw Error(r(479))
    }
    else e = Oc(t,
    i,
    o,
    2),
    e !== null && Ue(e,
    t,
    2)
  }
  function Dr(t) {
    var e = t.alternate;
    return t === xt || e !== null && e === xt
  }
  function op(t,
  e) {
    Zi = wr =  ! 0;
    var i = t.pending;
    i === null ? e.next = e: (e.next = i.next,
    i.next = e),
    t.pending = e
  }
  function rp(t,
  e,
  i) {
    if((i & 4194048) !== 0) {
      var o = e.lanes;
      o &= t.pendingLanes,
      i |= o,
      e.lanes = i,
      je(t,
      i)
    }
  }
  var no =  {
    readContext: me,
    use: Cr,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useLayoutEffect: Qt,
    useInsertionEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    useHostTransitionStatus: Qt,
    useFormState: Qt,
    useActionState: Qt,
    useOptimistic: Qt,
    useMemoCache: Qt,
    useCacheRefresh: Qt
  };
  no.useEffectEvent = Qt;
  var lp =  {
    readContext: me,
    use: Cr,
    useCallback: function(t,
    e) {
      return Me().memoizedState = [t,
      e === void 0 ? null: e],
      t
    },
    useContext: me,
    useEffect: Xm,
    useImperativeHandle: function(t,
    e,
    i) {
      i = i != null ? i.concat([t]): null,
      Rr(4194308,
      4,
      Qm.bind(null,
      e,
      t),
      i)
    },
    useLayoutEffect: function(t,
    e) {
      return Rr(4194308,
      4,
      t,
      e)
    },
    useInsertionEffect: function(t,
    e) {
      Rr(4,
      2,
      t,
      e)
    },
    useMemo: function(t,
    e) {
      var i = Me();
      e = e === void 0 ? null: e;
      var o = t();
      if(oi) {
        dn( ! 0);
        try {
          t()
        }
        finally {
          dn( ! 1)
        }
      }
      return i.memoizedState = [o,
      e],
      o
    },
    useReducer: function(t,
    e,
    i) {
      var o = Me();
      if(i !== void 0) {
        var c = i(e);
        if(oi) {
          dn( ! 0);
          try {
            i(e)
          }
          finally {
            dn( ! 1)
          }
        }
      }
      else c = e;
      return o.memoizedState = o.baseState = c,
      t =  {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: c
      },
      o.queue = t,
      t = t.dispatch = xS.bind(null,
      xt,
      t),
      [o.memoizedState,
      t]
    },
    useRef: function(t) {
      var e = Me();
      return t =  {
        current: t
      },
      e.memoizedState = t
    },
    useState: function(t) {
      t = lu(t);
      var e = t.queue,
      i = sp.bind(null,
      xt,
      e);
      return e.dispatch = i,
      [t.memoizedState,
      i]
    },
    useDebugValue: fu,
    useDeferredValue: function(t,
    e) {
      var i = Me();
      return du(i,
      t,
      e)
    },
    useTransition: function() {
      var t = lu( ! 1);
      return t = tp.bind(null,
      xt,
      t.queue,
       ! 0,
       ! 1),
      Me().memoizedState = t,
      [ ! 1,
      t]
    },
    useSyncExternalStore: function(t,
    e,
    i) {
      var o = xt,
      c = Me();
      if(Ct) {
        if(i === void 0) throw Error(r(407));
        i = i()
      }
      else {
        if(i = e(),
        kt === null) throw Error(r(349));
        (At & 127) !== 0 || Nm(o,
        e,
        i)
      }
      c.memoizedState = i;
      var u =  {
        value: i,
        getSnapshot: e
      };
      return c.queue = u,
      Xm(jm.bind(null,
      o,
      u,
      t),
      [t]),
      o.flags |= 2048,
      Wi(9,
       {
        destroy: void 0
      },
      Dm.bind(null,
      o,
      u,
      i,
      e),
      null),
      i
    },
    useId: function() {
      var t = Me(),
      e = kt.identifierPrefix;
      if(Ct) {
        var i = An,
        o = wn;
        i = (o & ~(1 << 32 - xe(o) - 1)).toString(32) + i,
        e = "_" + e + "R_" + i,
        i = Ar++,
        0 < i && (e += "H" + i.toString(32)),
        e += "_"
      }
      else i = dS++,
      e = "_" + e + "r_" + i.toString(32) + "_";
      return t.memoizedState = e
    },
    useHostTransitionStatus: mu,
    useFormState: Hm,
    useActionState: Hm,
    useOptimistic: function(t) {
      var e = Me();
      e.memoizedState = e.baseState = t;
      var i =  {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = i,
      e = pu.bind(null,
      xt,
       ! 0,
      i),
      i.dispatch = e,
      [t,
      e]
    },
    useMemoCache: su,
    useCacheRefresh: function() {
      return Me().memoizedState = vS.bind(null,
      xt)
    },
    useEffectEvent: function(t) {
      var e = Me(),
      i =  {
        impl: t
      };
      return e.memoizedState = i,
      function() {
        if((Ot & 2) !== 0) throw Error(r(440));
        return i.impl.apply(void 0,
        arguments)
      }
    }
  },
  gu =  {
    readContext: me,
    use: Cr,
    useCallback: Jm,
    useContext: me,
    useEffect: uu,
    useImperativeHandle: Wm,
    useInsertionEffect: Fm,
    useLayoutEffect: Zm,
    useMemo: $m,
    useReducer: Mr,
    useRef: qm,
    useState: function() {
      return Mr(qn)
    },
    useDebugValue: fu,
    useDeferredValue: function(t,
    e) {
      var i = It();
      return Im(i,
      Lt.memoizedState,
      t,
      e)
    },
    useTransition: function() {
      var t = Mr(qn)[0],
      e = It().memoizedState;
      return[typeof t == "boolean" ? t: to(t),
      e]
    },
    useSyncExternalStore: Rm,
    useId: ap,
    useHostTransitionStatus: mu,
    useFormState: Pm,
    useActionState: Pm,
    useOptimistic: function(t,
    e) {
      var i = It();
      return _m(i,
      Lt,
      t,
      e)
    },
    useMemoCache: su,
    useCacheRefresh: ip
  };
  gu.useEffectEvent = Km;
  var cp =  {
    readContext: me,
    use: Cr,
    useCallback: Jm,
    useContext: me,
    useEffect: uu,
    useImperativeHandle: Wm,
    useInsertionEffect: Fm,
    useLayoutEffect: Zm,
    useMemo: $m,
    useReducer: ru,
    useRef: qm,
    useState: function() {
      return ru(qn)
    },
    useDebugValue: fu,
    useDeferredValue: function(t,
    e) {
      var i = It();
      return Lt === null ? du(i,
      t,
      e): Im(i,
      Lt.memoizedState,
      t,
      e)
    },
    useTransition: function() {
      var t = ru(qn)[0],
      e = It().memoizedState;
      return[typeof t == "boolean" ? t: to(t),
      e]
    },
    useSyncExternalStore: Rm,
    useId: ap,
    useHostTransitionStatus: mu,
    useFormState: Gm,
    useActionState: Gm,
    useOptimistic: function(t,
    e) {
      var i = It();
      return Lt !== null ? _m(i,
      Lt,
      t,
      e): (i.baseState = t,
      [t,
      i.queue.dispatch])
    },
    useMemoCache: su,
    useCacheRefresh: ip
  };
  cp.useEffectEvent = Km;
  function yu(t,
  e,
  i,
  o) {
    e = t.memoizedState,
    i = i(o,
    e),
    i = i == null ? e: p( {
    },
    e,
    i),
    t.memoizedState = i,
    t.lanes === 0 && (t.updateQueue.baseState = i)
  }
  var vu =  {
    enqueueSetState: function(t,
    e,
    i) {
      t = t._reactInternals;
      var o = Qe(),
      c = ga(o);
      c.payload = e,
      i != null && (c.callback = i),
      e = ya(t,
      c,
      o),
      e !== null && (Ue(e,
      t,
      o),
      Ws(e,
      t,
      o))
    },
    enqueueReplaceState: function(t,
    e,
    i) {
      t = t._reactInternals;
      var o = Qe(),
      c = ga(o);
      c.tag = 1,
      c.payload = e,
      i != null && (c.callback = i),
      e = ya(t,
      c,
      o),
      e !== null && (Ue(e,
      t,
      o),
      Ws(e,
      t,
      o))
    },
    enqueueForceUpdate: function(t,
    e) {
      t = t._reactInternals;
      var i = Qe(),
      o = ga(i);
      o.tag = 2,
      e != null && (o.callback = e),
      e = ya(t,
      o,
      i),
      e !== null && (Ue(e,
      t,
      i),
      Ws(e,
      t,
      i))
    }
  };
  function up(t,
  e,
  i,
  o,
  c,
  u,
  y) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o,
    u,
    y): e.prototype && e.prototype.isPureReactComponent ?  ! Ys(i,
    o) ||  ! Ys(c,
    u):  ! 0
  }
  function fp(t,
  e,
  i,
  o) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(i,
    o),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(i,
    o),
    e.state !== t && vu.enqueueReplaceState(e,
    e.state,
    null)
  }
  function ri(t,
  e) {
    var i = e;
    if("ref" in e) {
      i =  {
      };
      for(var o in e) o !== "ref" && (i[o] = e[o])
    }
    if(t = t.defaultProps) {
      i === e && (i = p( {
      },
      i));
      for(var c in t) i[c] === void 0 && (i[c] = t[c])
    }
    return i
  }
  function dp(t) {
    lr(t)
  }
  function hp(t) {
    console.error(t)
  }
  function mp(t) {
    lr(t)
  }
  function jr(t,
  e) {
    try {
      var i = t.onUncaughtError;
      i(e.value,
       {
        componentStack: e.stack
      })
    }
    catch(o) {
      setTimeout(function() {
        throw o
      })
    }
  }
  function pp(t,
  e,
  i) {
    try {
      var o = t.onCaughtError;
      o(i.value,
       {
        componentStack: i.stack,
        errorBoundary: e.tag === 1 ? e.stateNode: null
      })
    }
    catch(c) {
      setTimeout(function() {
        throw c
      })
    }
  }
  function xu(t,
  e,
  i) {
    return i = ga(i),
    i.tag = 3,
    i.payload =  {
      element: null
    },
    i.callback = function() {
      jr(t,
      e)
    },
    i
  }
  function gp(t) {
    return t = ga(t),
    t.tag = 3,
    t
  }
  function yp(t,
  e,
  i,
  o) {
    var c = i.type.getDerivedStateFromError;
    if(typeof c == "function") {
      var u = o.value;
      t.payload = function() {
        return c(u)
      },
      t.callback = function() {
        pp(e,
        i,
        o)
      }
    }
    var y = i.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      pp(e,
      i,
      o),
      typeof c != "function" && (wa === null ? wa = new Set([this]): wa.add(this));
      var b = o.stack;
      this.componentDidCatch(o.value,
       {
        componentStack: b !== null ? b: ""
      })
    })
  }
  function bS(t,
  e,
  i,
  o,
  c) {
    if(i.flags |= 32768,
    o !== null && typeof o == "object" && typeof o.then == "function") {
      if(e = i.alternate,
      e !== null && Yi(e,
      i,
      c,
       ! 0),
      i = Xe.current,
      i !== null) {
        switch(i.tag) {
          case 31: case 13: return sn === null ? Gr(): i.alternate === null && Wt === 0 && (Wt = 3),
          i.flags &=  - 257,
          i.flags |= 65536,
          i.lanes = c,
          o === vr ? i.flags |= 16384: (e = i.updateQueue,
          e === null ? i.updateQueue = new Set([o]): e.add(o),
          qu(t,
          o,
          c)),
           ! 1;
          case 22: return i.flags |= 65536,
          o === vr ? i.flags |= 16384: (e = i.updateQueue,
          e === null ? (e =  {
            transitions: null,
            markerInstances: null,
            retryQueue: new Set([o])
          },
          i.updateQueue = e): (i = e.retryQueue,
          i === null ? e.retryQueue = new Set([o]): i.add(o)),
          qu(t,
          o,
          c)),
           ! 1
        }
        throw Error(r(435,
        i.tag))
      }
      return qu(t,
      o,
      c),
      Gr(),
       ! 1
    }
    if(Ct) return e = Xe.current,
    e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
    e.flags |= 65536,
    e.lanes = c,
    o !== kc && (t = Error(r(422),
     {
      cause: o
    }),
    Xs(tn(t,
    i)))): (o !== kc && (e = Error(r(423),
     {
      cause: o
    }),
    Xs(tn(e,
    i))),
    t = t.current.alternate,
    t.flags |= 65536,
    c &=  - c,
    t.lanes |= c,
    o = tn(o,
    i),
    c = xu(t.stateNode,
    o,
    c),
    Qc(t,
    c),
    Wt !== 4 && (Wt = 2)),
     ! 1;
    var u = Error(r(520),
     {
      cause: o
    });
    if(u = tn(u,
    i),
    uo === null ? uo = [u]: uo.push(u),
    Wt !== 4 && (Wt = 2),
    e === null) return ! 0;
    o = tn(o,
    i),
    i = e;
    do {
      switch(i.tag) {
        case 3: return i.flags |= 65536,
        t = c &  - c,
        i.lanes |= t,
        t = xu(i.stateNode,
        o,
        t),
        Qc(i,
        t),
         ! 1;
        case 1: if(e = i.type,
        u = i.stateNode,
        (i.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (wa === null ||  ! wa.has(u)))) return i.flags |= 65536,
        c &=  - c,
        i.lanes |= c,
        c = gp(c),
        yp(c,
        t,
        i,
        o),
        Qc(i,
        c),
         ! 1
      }
      i = i.return
    }
    while(i !== null);
    return ! 1
  }
  var bu = Error(r(461)),
  ae =  ! 1;
  function pe(t,
  e,
  i,
  o) {
    e.child = t === null ? Sm(e,
    null,
    i,
    o): si(e,
    t.child,
    i,
    o)
  }
  function vp(t,
  e,
  i,
  o,
  c) {
    i = i.render;
    var u = e.ref;
    if("ref" in o) {
      var y =  {
      };
      for(var b in o) b !== "ref" && (y[b] = o[b])
    }
    else y = o;
    return ei(e),
    o = eu(t,
    e,
    i,
    y,
    u,
    c),
    b = nu(),
    t !== null &&  ! ae ? (au(t,
    e,
    c),
    Xn(t,
    e,
    c)): (Ct && b && Vc(e),
    e.flags |= 1,
    pe(t,
    e,
    o,
    c),
    e.child)
  }
  function xp(t,
  e,
  i,
  o,
  c) {
    if(t === null) {
      var u = i.type;
      return typeof u == "function" &&  ! zc(u) && u.defaultProps === void 0 && i.compare === null ? (e.tag = 15,
      e.type = u,
      bp(t,
      e,
      u,
      o,
      c)): (t = dr(i.type,
      null,
      o,
      e,
      e.mode,
      c),
      t.ref = e.ref,
      t.return = e,
      e.child = t)
    }
    if(u = t.child,
     ! Ru(t,
    c)) {
      var y = u.memoizedProps;
      if(i = i.compare,
      i = i !== null ? i: Ys,
      i(y,
      o) && t.ref === e.ref) return Xn(t,
      e,
      c)
    }
    return e.flags |= 1,
    t = Un(u,
    o),
    t.ref = e.ref,
    t.return = e,
    e.child = t
  }
  function bp(t,
  e,
  i,
  o,
  c) {
    if(t !== null) {
      var u = t.memoizedProps;
      if(Ys(u,
      o) && t.ref === e.ref) if(ae =  ! 1,
      e.pendingProps = o = u,
      Ru(t,
      c))(t.flags & 131072) !== 0 && (ae =  ! 0);
      else return e.lanes = t.lanes,
      Xn(t,
      e,
      c)
    }
    return Su(t,
    e,
    i,
    o,
    c)
  }
  function Sp(t,
  e,
  i,
  o) {
    var c = o.children,
    u = t !== null ? t.memoizedState: null;
    if(t === null && e.stateNode === null && (e.stateNode =  {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }),
    o.mode === "hidden") {
      if((e.flags & 128) !== 0) {
        if(u = u !== null ? u.baseLanes | i: i,
        t !== null) {
          for(o = e.child = t.child,
          c = 0; o !== null; ) c = c | o.lanes | o.childLanes,
          o = o.sibling;
          o = c & ~ u
        }
        else o = 0,
        e.child = null;
        return Ep(t,
        e,
        u,
        i,
        o)
      }
      if((i & 536870912) !== 0) e.memoizedState =  {
        baseLanes: 0,
        cachePool: null
      },
      t !== null && gr(e,
      u !== null ? u.cachePool: null),
      u !== null ? Am(e,
      u): Jc(),
      Tm(e);
      else return o = e.lanes = 536870912,
      Ep(t,
      e,
      u !== null ? u.baseLanes | i: i,
      i,
      o)
    }
    else u !== null ? (gr(e,
    u.cachePool),
    Am(e,
    u),
    xa(),
    e.memoizedState = null): (t !== null && gr(e,
    null),
    Jc(),
    xa());
    return pe(t,
    e,
    c,
    i),
    e.child
  }
  function ao(t,
  e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode =  {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }),
    e.sibling
  }
  function Ep(t,
  e,
  i,
  o,
  c) {
    var u = Xc();
    return u = u === null ? null:  {
      parent: ee._currentValue,
      pool: u
    },
    e.memoizedState =  {
      baseLanes: i,
      cachePool: u
    },
    t !== null && gr(e,
    null),
    Jc(),
    Tm(e),
    t !== null && Yi(t,
    e,
    o,
     ! 0),
    e.childLanes = c,
    null
  }
  function Or(t,
  e) {
    return e = _r( {
      mode: e.mode,
      children: e.children
    },
    t.mode),
    e.ref = t.ref,
    t.child = e,
    e.return = t,
    e
  }
  function wp(t,
  e,
  i) {
    return si(e,
    t.child,
    null,
    i),
    t = Or(e,
    e.pendingProps),
    t.flags |= 2,
    Ke(e),
    e.memoizedState = null,
    t
  }
  function SS(t,
  e,
  i) {
    var o = e.pendingProps,
    c = (e.flags & 128) !== 0;
    if(e.flags &=  - 129,
    t === null) {
      if(Ct) {
        if(o.mode === "hidden") return t = Or(e,
        o),
        e.lanes = 536870912,
        ao(null,
        t);
        if(Ic(e),
        (t = Pt) ? (t = Lg(t,
        an),
        t = t !== null && t.data === "&" ? t: null,
        t !== null && (e.memoizedState =  {
          dehydrated: t,
          treeContext: fa !== null ?  {
            id: wn,
            overflow: An
          }: null,
          retryLane: 536870912,
          hydrationErrors: null
        },
        i = om(t),
        i.return = e,
        e.child = i,
        he = e,
        Pt = null)): t = null,
        t === null) throw ha(e);
        return e.lanes = 536870912,
        null
      }
      return Or(e,
      o)
    }
    var u = t.memoizedState;
    if(u !== null) {
      var y = u.dehydrated;
      if(Ic(e),
      c) if(e.flags & 256) e.flags &=  - 257,
      e = wp(t,
      e,
      i);
      else if(e.memoizedState !== null) e.child = t.child,
      e.flags |= 128,
      e = null;
      else throw Error(r(558));
      else if(ae || Yi(t,
      e,
      i,
       ! 1),
      c = (i & t.childLanes) !== 0,
      ae || c) {
        if(o = kt,
        o !== null && (y = Oe(o,
        i),
        y !== 0 && y !== u.retryLane)) throw u.retryLane = y,
        Ja(t,
        y),
        Ue(o,
        t,
        y),
        bu;
        Gr(),
        e = wp(t,
        e,
        i)
      }
      else t = u.treeContext,
      Pt = on(y.nextSibling),
      he = e,
      Ct =  ! 0,
      da = null,
      an =  ! 1,
      t !== null && cm(e,
      t),
      e = Or(e,
      o),
      e.flags |= 4096;
      return e
    }
    return t = Un(t.child,
     {
      mode: o.mode,
      children: o.children
    }),
    t.ref = e.ref,
    e.child = t,
    t.return = e,
    t
  }
  function zr(t,
  e) {
    var i = e.ref;
    if(i === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if(typeof i != "function" && typeof i != "object") throw Error(r(284));
      (t === null || t.ref !== i) && (e.flags |= 4194816)
    }
  }
  function Su(t,
  e,
  i,
  o,
  c) {
    return ei(e),
    i = eu(t,
    e,
    i,
    o,
    void 0,
    c),
    o = nu(),
    t !== null &&  ! ae ? (au(t,
    e,
    c),
    Xn(t,
    e,
    c)): (Ct && o && Vc(e),
    e.flags |= 1,
    pe(t,
    e,
    i,
    c),
    e.child)
  }
  function Ap(t,
  e,
  i,
  o,
  c,
  u) {
    return ei(e),
    e.updateQueue = null,
    i = Mm(e,
    o,
    i,
    c),
    Cm(t),
    o = nu(),
    t !== null &&  ! ae ? (au(t,
    e,
    u),
    Xn(t,
    e,
    u)): (Ct && o && Vc(e),
    e.flags |= 1,
    pe(t,
    e,
    i,
    u),
    e.child)
  }
  function Tp(t,
  e,
  i,
  o,
  c) {
    if(ei(e),
    e.stateNode === null) {
      var u = ki,
      y = i.contextType;
      typeof y == "object" && y !== null && (u = me(y)),
      u = new i(o,
      u),
      e.memoizedState = u.state !== null && u.state !== void 0 ? u.state: null,
      u.updater = vu,
      e.stateNode = u,
      u._reactInternals = e,
      u = e.stateNode,
      u.props = o,
      u.state = e.memoizedState,
      u.refs =  {
      },
      Fc(e),
      y = i.contextType,
      u.context = typeof y == "object" && y !== null ? me(y): ki,
      u.state = e.memoizedState,
      y = i.getDerivedStateFromProps,
      typeof y == "function" && (yu(e,
      i,
      y,
      o),
      u.state = e.memoizedState),
      typeof i.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state,
      typeof u.componentWillMount == "function" && u.componentWillMount(),
      typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
      y !== u.state && vu.enqueueReplaceState(u,
      u.state,
      null),
      $s(e,
      o,
      u,
      c),
      Js(),
      u.state = e.memoizedState),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308),
      o =  ! 0
    }
    else if(t === null) {
      u = e.stateNode;
      var b = e.memoizedProps,
      T = ri(i,
      b);
      u.props = T;
      var _ = u.context,
      U = i.contextType;
      y = ki,
      typeof U == "object" && U !== null && (y = me(U));
      var K = i.getDerivedStateFromProps;
      U = typeof K == "function" || typeof u.getSnapshotBeforeUpdate == "function",
      b = e.pendingProps !== b,
      U || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || _ !== y) && fp(e,
      u,
      o,
      y),
      pa =  ! 1;
      var V = e.memoizedState;
      u.state = V,
      $s(e,
      o,
      u,
      c),
      Js(),
      _ = e.memoizedState,
      b || V !== _ || pa ? (typeof K == "function" && (yu(e,
      i,
      K,
      o),
      _ = e.memoizedState),
      (T = pa || up(e,
      i,
      T,
      o,
      V,
      _,
      y)) ? (U || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
      typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308)): (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
      e.memoizedProps = o,
      e.memoizedState = _),
      u.props = o,
      u.state = _,
      u.context = y,
      o = T): (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
      o =  ! 1)
    }
    else {
      u = e.stateNode,
      Zc(t,
      e),
      y = e.memoizedProps,
      U = ri(i,
      y),
      u.props = U,
      K = e.pendingProps,
      V = u.context,
      _ = i.contextType,
      T = ki,
      typeof _ == "object" && _ !== null && (T = me(_)),
      b = i.getDerivedStateFromProps,
      (_ = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== K || V !== T) && fp(e,
      u,
      o,
      T),
      pa =  ! 1,
      V = e.memoizedState,
      u.state = V,
      $s(e,
      o,
      u,
      c),
      Js();
      var k = e.memoizedState;
      y !== K || V !== k || pa || t !== null && t.dependencies !== null && mr(t.dependencies) ? (typeof b == "function" && (yu(e,
      i,
      b,
      o),
      k = e.memoizedState),
      (U = pa || up(e,
      i,
      U,
      o,
      V,
      k,
      T) || t !== null && t.dependencies !== null && mr(t.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(o,
      k,
      T),
      typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(o,
      k,
      T)),
      typeof u.componentDidUpdate == "function" && (e.flags |= 4),
      typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)): (typeof u.componentDidUpdate != "function" || y === t.memoizedProps && V === t.memoizedState || (e.flags |= 4),
      typeof u.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024),
      e.memoizedProps = o,
      e.memoizedState = k),
      u.props = o,
      u.state = k,
      u.context = T,
      o = U): (typeof u.componentDidUpdate != "function" || y === t.memoizedProps && V === t.memoizedState || (e.flags |= 4),
      typeof u.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024),
      o =  ! 1)
    }
    return u = o,
    zr(t,
    e),
    o = (e.flags & 128) !== 0,
    u || o ? (u = e.stateNode,
    i = o && typeof i.getDerivedStateFromError != "function" ? null: u.render(),
    e.flags |= 1,
    t !== null && o ? (e.child = si(e,
    t.child,
    null,
    c),
    e.child = si(e,
    null,
    i,
    c)): pe(t,
    e,
    i,
    c),
    e.memoizedState = u.state,
    t = e.child): t = Xn(t,
    e,
    c),
    t
  }
  function Cp(t,
  e,
  i,
  o) {
    return Ia(),
    e.flags |= 256,
    pe(t,
    e,
    i,
    o),
    e.child
  }
  var Eu =  {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function wu(t) {
    return {
      baseLanes: t,
      cachePool: pm()
    }
  }
  function Au(t,
  e,
  i) {
    return t = t !== null ? t.childLanes & ~ i: 0,
    e && (t |= Ze),
    t
  }
  function Mp(t,
  e,
  i) {
    var o = e.pendingProps,
    c =  ! 1,
    u = (e.flags & 128) !== 0,
    y;
    if((y = u) || (y = t !== null && t.memoizedState === null ?  ! 1: ($t.current & 2) !== 0),
    y && (c =  ! 0,
    e.flags &=  - 129),
    y = (e.flags & 32) !== 0,
    e.flags &=  - 33,
    t === null) {
      if(Ct) {
        if(c ? va(e): xa(),
        (t = Pt) ? (t = Lg(t,
        an),
        t = t !== null && t.data !== "&" ? t: null,
        t !== null && (e.memoizedState =  {
          dehydrated: t,
          treeContext: fa !== null ?  {
            id: wn,
            overflow: An
          }: null,
          retryLane: 536870912,
          hydrationErrors: null
        },
        i = om(t),
        i.return = e,
        e.child = i,
        he = e,
        Pt = null)): t = null,
        t === null) throw ha(e);
        return rf(t) ? e.lanes = 32: e.lanes = 536870912,
        null
      }
      var b = o.children;
      return o = o.fallback,
      c ? (xa(),
      c = e.mode,
      b = _r( {
        mode: "hidden",
        children: b
      },
      c),
      o = $a(o,
      c,
      i,
      null),
      b.return = e,
      o.return = e,
      b.sibling = o,
      e.child = b,
      o = e.child,
      o.memoizedState = wu(i),
      o.childLanes = Au(t,
      y,
      i),
      e.memoizedState = Eu,
      ao(null,
      o)): (va(e),
      Tu(e,
      b))
    }
    var T = t.memoizedState;
    if(T !== null && (b = T.dehydrated,
    b !== null)) {
      if(u) e.flags & 256 ? (va(e),
      e.flags &=  - 257,
      e = Cu(t,
      e,
      i)): e.memoizedState !== null ? (xa(),
      e.child = t.child,
      e.flags |= 128,
      e = null): (xa(),
      b = o.fallback,
      c = e.mode,
      o = _r( {
        mode: "visible",
        children: o.children
      },
      c),
      b = $a(b,
      c,
      i,
      null),
      b.flags |= 2,
      o.return = e,
      b.return = e,
      o.sibling = b,
      e.child = o,
      si(e,
      t.child,
      null,
      i),
      o = e.child,
      o.memoizedState = wu(i),
      o.childLanes = Au(t,
      y,
      i),
      e.memoizedState = Eu,
      e = ao(null,
      o));
      else if(va(e),
      rf(b)) {
        if(y = b.nextSibling && b.nextSibling.dataset,
        y) var _ = y.dgst;
        y = _,
        o = Error(r(419)),
        o.stack = "",
        o.digest = y,
        Xs( {
          value: o,
          source: null,
          stack: null
        }),
        e = Cu(t,
        e,
        i)
      }
      else if(ae || Yi(t,
      e,
      i,
       ! 1),
      y = (i & t.childLanes) !== 0,
      ae || y) {
        if(y = kt,
        y !== null && (o = Oe(y,
        i),
        o !== 0 && o !== T.retryLane)) throw T.retryLane = o,
        Ja(t,
        o),
        Ue(y,
        t,
        o),
        bu;
        of(b) || Gr(),
        e = Cu(t,
        e,
        i)
      }
      else of(b) ? (e.flags |= 192,
      e.child = t.child,
      e = null): (t = T.treeContext,
      Pt = on(b.nextSibling),
      he = e,
      Ct =  ! 0,
      da = null,
      an =  ! 1,
      t !== null && cm(e,
      t),
      e = Tu(e,
      o.children),
      e.flags |= 4096);
      return e
    }
    return c ? (xa(),
    b = o.fallback,
    c = e.mode,
    T = t.child,
    _ = T.sibling,
    o = Un(T,
     {
      mode: "hidden",
      children: o.children
    }),
    o.subtreeFlags = T.subtreeFlags & 65011712,
    _ !== null ? b = Un(_,
    b): (b = $a(b,
    c,
    i,
    null),
    b.flags |= 2),
    b.return = e,
    o.return = e,
    o.sibling = b,
    e.child = o,
    ao(null,
    o),
    o = e.child,
    b = t.child.memoizedState,
    b === null ? b = wu(i): (c = b.cachePool,
    c !== null ? (T = ee._currentValue,
    c = c.parent !== T ?  {
      parent: T,
      pool: T
    }: c): c = pm(),
    b =  {
      baseLanes: b.baseLanes | i,
      cachePool: c
    }),
    o.memoizedState = b,
    o.childLanes = Au(t,
    y,
    i),
    e.memoizedState = Eu,
    ao(t.child,
    o)): (va(e),
    i = t.child,
    t = i.sibling,
    i = Un(i,
     {
      mode: "visible",
      children: o.children
    }),
    i.return = e,
    i.sibling = null,
    t !== null && (y = e.deletions,
    y === null ? (e.deletions = [t],
    e.flags |= 16): y.push(t)),
    e.child = i,
    e.memoizedState = null,
    i)
  }
  function Tu(t,
  e) {
    return e = _r( {
      mode: "visible",
      children: e
    },
    t.mode),
    e.return = t,
    t.child = e
  }
  function _r(t,
  e) {
    return t = qe(22,
    t,
    null,
    e),
    t.lanes = 0,
    t
  }
  function Cu(t,
  e,
  i) {
    return si(e,
    t.child,
    null,
    i),
    t = Tu(e,
    e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
  }
  function Rp(t,
  e,
  i) {
    t.lanes |= e;
    var o = t.alternate;
    o !== null && (o.lanes |= e),
    Pc(t.return,
    e,
    i)
  }
  function Mu(t,
  e,
  i,
  o,
  c,
  u) {
    var y = t.memoizedState;
    y === null ? t.memoizedState =  {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: c,
      treeForkCount: u
    }: (y.isBackwards = e,
    y.rendering = null,
    y.renderingStartTime = 0,
    y.last = o,
    y.tail = i,
    y.tailMode = c,
    y.treeForkCount = u)
  }
  function Np(t,
  e,
  i) {
    var o = e.pendingProps,
    c = o.revealOrder,
    u = o.tail;
    o = o.children;
    var y = $t.current,
    b = (y & 2) !== 0;
    if(b ? (y = y & 1 | 2,
    e.flags |= 128): y &= 1,
    P($t,
    y),
    pe(t,
    e,
    o,
    i),
    o = Ct ? qs: 0,
     ! b && t !== null && (t.flags & 128) !== 0) t: for(t = e.child; t !== null; ) {
      if(t.tag === 13) t.memoizedState !== null && Rp(t,
      i,
      e);
      else if(t.tag === 19) Rp(t,
      i,
      e);
      else if(t.child !== null) {
        t.child.return = t,
        t = t.child;
        continue
      }
      if(t === e) break t;
      for(; t.sibling === null; ) {
        if(t.return === null || t.return === e) break t;
        t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
    }
    switch(c) {
      case "forwards": for(i = e.child,
      c = null; i !== null; ) t = i.alternate,
      t !== null && Er(t) === null && (c = i),
      i = i.sibling;
      i = c,
      i === null ? (c = e.child,
      e.child = null): (c = i.sibling,
      i.sibling = null),
      Mu(e,
       ! 1,
      c,
      i,
      u,
      o);
      break;
      case "backwards": case "unstable_legacy-backwards": for(i = null,
      c = e.child,
      e.child = null; c !== null; ) {
        if(t = c.alternate,
        t !== null && Er(t) === null) {
          e.child = c;
          break
        }
        t = c.sibling,
        c.sibling = i,
        i = c,
        c = t
      }
      Mu(e,
       ! 0,
      i,
      null,
      u,
      o);
      break;
      case "together": Mu(e,
       ! 1,
      null,
      null,
      void 0,
      o);
      break;
      default: e.memoizedState = null
    }
    return e.child
  }
  function Xn(t,
  e,
  i) {
    if(t !== null && (e.dependencies = t.dependencies),
    Ea |= e.lanes,
    (i & e.childLanes) === 0) if(t !== null) {
      if(Yi(t,
      e,
      i,
       ! 1),
      (i & e.childLanes) === 0) return null
    }
    else return null;
    if(t !== null && e.child !== t.child) throw Error(r(153));
    if(e.child !== null) {
      for(t = e.child,
      i = Un(t,
      t.pendingProps),
      e.child = i,
      i.return = e;
      t.sibling !== null;
      ) t = t.sibling,
      i = i.sibling = Un(t,
      t.pendingProps),
      i.return = e;
      i.sibling = null
    }
    return e.child
  }
  function Ru(t,
  e) {
    return(t.lanes & e) !== 0 ?  ! 0: (t = t.dependencies,
     !  ! (t !== null && mr(t)))
  }
  function ES(t,
  e,
  i) {
    switch(e.tag) {
      case 3: vt(e,
      e.stateNode.containerInfo),
      ma(e,
      ee,
      t.memoizedState.cache),
      Ia();
      break;
      case 27: case 5: Ee(e);
      break;
      case 4: vt(e,
      e.stateNode.containerInfo);
      break;
      case 10: ma(e,
      e.type,
      e.memoizedProps.value);
      break;
      case 31: if(e.memoizedState !== null) return e.flags |= 128,
      Ic(e),
      null;
      break;
      case 13: var o = e.memoizedState;
      if(o !== null) return o.dehydrated !== null ? (va(e),
      e.flags |= 128,
      null): (i & e.child.childLanes) !== 0 ? Mp(t,
      e,
      i): (va(e),
      t = Xn(t,
      e,
      i),
      t !== null ? t.sibling: null);
      va(e);
      break;
      case 19: var c = (t.flags & 128) !== 0;
      if(o = (i & e.childLanes) !== 0,
      o || (Yi(t,
      e,
      i,
       ! 1),
      o = (i & e.childLanes) !== 0),
      c) {
        if(o) return Np(t,
        e,
        i);
        e.flags |= 128
      }
      if(c = e.memoizedState,
      c !== null && (c.rendering = null,
      c.tail = null,
      c.lastEffect = null),
      P($t,
      $t.current),
      o) break;
      return null;
      case 22: return e.lanes = 0,
      Sp(t,
      e,
      i,
      e.pendingProps);
      case 24: ma(e,
      ee,
      t.memoizedState.cache)
    }
    return Xn(t,
    e,
    i)
  }
  function Dp(t,
  e,
  i) {
    if(t !== null) if(t.memoizedProps !== e.pendingProps) ae =  ! 0;
    else {
      if( ! Ru(t,
      i) && (e.flags & 128) === 0) return ae =  ! 1,
      ES(t,
      e,
      i);
      ae = (t.flags & 131072) !== 0
    }
    else ae =  ! 1,
    Ct && (e.flags & 1048576) !== 0 && lm(e,
    qs,
    e.index);
    switch(e.lanes = 0,
    e.tag) {
      case 16: t:  {
        var o = e.pendingProps;
        if(t = ai(e.elementType),
        e.type = t,
        typeof t == "function") zc(t) ? (o = ri(t,
        o),
        e.tag = 1,
        e = Tp(null,
        e,
        t,
        o,
        i)): (e.tag = 0,
        e = Su(null,
        e,
        t,
        o,
        i));
        else {
          if(t != null) {
            var c = t.$$typeof;
            if(c === q) {
              e.tag = 11,
              e = vp(null,
              e,
              t,
              o,
              i);
              break t
            }
            else if(c === F) {
              e.tag = 14,
              e = xp(null,
              e,
              t,
              o,
              i);
              break t
            }
          }
          throw e = Nt(t) || t,
          Error(r(306,
          e,
          ""))
        }
      }
      return e;
      case 0: return Su(t,
      e,
      e.type,
      e.pendingProps,
      i);
      case 1: return o = e.type,
      c = ri(o,
      e.pendingProps),
      Tp(t,
      e,
      o,
      c,
      i);
      case 3: t:  {
        if(vt(e,
        e.stateNode.containerInfo),
        t === null) throw Error(r(387));
        o = e.pendingProps;
        var u = e.memoizedState;
        c = u.element,
        Zc(t,
        e),
        $s(e,
        o,
        null,
        i);
        var y = e.memoizedState;
        if(o = y.cache,
        ma(e,
        ee,
        o),
        o !== u.cache && Yc(e,
        [ee],
        i,
         ! 0),
        Js(),
        o = y.element,
        u.isDehydrated) if(u =  {
          element: o,
          isDehydrated:  ! 1,
          cache: y.cache
        },
        e.updateQueue.baseState = u,
        e.memoizedState = u,
        e.flags & 256) {
          e = Cp(t,
          e,
          o,
          i);
          break t
        }
        else if(o !== c) {
          c = tn(Error(r(424)),
          e),
          Xs(c),
          e = Cp(t,
          e,
          o,
          i);
          break t
        }
        else for(t = e.stateNode.containerInfo,
        t.nodeType === 9 ? t = t.body: t = t.nodeName === "HTML" ? t.ownerDocument.body: t,
        Pt = on(t.firstChild),
        he = e,
        Ct =  ! 0,
        da = null,
        an =  ! 0,
        i = Sm(e,
        null,
        o,
        i),
        e.child = i;
        i;
        ) i.flags = i.flags &  - 3 | 4096,
        i = i.sibling;
        else {
          if(Ia(),
          o === c) {
            e = Xn(t,
            e,
            i);
            break t
          }
          pe(t,
          e,
          o,
          i)
        }
        e = e.child
      }
      return e;
      case 26: return zr(t,
      e),
      t === null ? (i = Pg(e.type,
      null,
      e.pendingProps,
      null)) ? e.memoizedState = i: Ct || (i = e.type,
      t = e.pendingProps,
      o = Wr(ct.current).createElement(i),
      o[de] = e,
      o[ze] = t,
      ge(o,
      i,
      t),
      ue(o),
      e.stateNode = o): e.memoizedState = Pg(e.type,
      t.memoizedProps,
      e.pendingProps,
      t.memoizedState),
      null;
      case 27: return Ee(e),
      t === null && Ct && (o = e.stateNode = kg(e.type,
      e.pendingProps,
      ct.current),
      he = e,
      an =  ! 0,
      c = Pt,
      Ma(e.type) ? (lf = c,
      Pt = on(o.firstChild)): Pt = c),
      pe(t,
      e,
      e.pendingProps.children,
      i),
      zr(t,
      e),
      t === null && (e.flags |= 4194304),
      e.child;
      case 5: return t === null && Ct && ((c = o = Pt) && (o = $S(o,
      e.type,
      e.pendingProps,
      an),
      o !== null ? (e.stateNode = o,
      he = e,
      Pt = on(o.firstChild),
      an =  ! 1,
      c =  ! 0): c =  ! 1),
      c || ha(e)),
      Ee(e),
      c = e.type,
      u = e.pendingProps,
      y = t !== null ? t.memoizedProps: null,
      o = u.children,
      nf(c,
      u) ? o = null: y !== null && nf(c,
      y) && (e.flags |= 32),
      e.memoizedState !== null && (c = eu(t,
      e,
      hS,
      null,
      null,
      i),
      xo._currentValue = c),
      zr(t,
      e),
      pe(t,
      e,
      o,
      i),
      e.child;
      case 6: return t === null && Ct && ((t = i = Pt) && (i = IS(i,
      e.pendingProps,
      an),
      i !== null ? (e.stateNode = i,
      he = e,
      Pt = null,
      t =  ! 0): t =  ! 1),
      t || ha(e)),
      null;
      case 13: return Mp(t,
      e,
      i);
      case 4: return vt(e,
      e.stateNode.containerInfo),
      o = e.pendingProps,
      t === null ? e.child = si(e,
      null,
      o,
      i): pe(t,
      e,
      o,
      i),
      e.child;
      case 11: return vp(t,
      e,
      e.type,
      e.pendingProps,
      i);
      case 7: return pe(t,
      e,
      e.pendingProps,
      i),
      e.child;
      case 8: return pe(t,
      e,
      e.pendingProps.children,
      i),
      e.child;
      case 12: return pe(t,
      e,
      e.pendingProps.children,
      i),
      e.child;
      case 10: return o = e.pendingProps,
      ma(e,
      e.type,
      o.value),
      pe(t,
      e,
      o.children,
      i),
      e.child;
      case 9: return c = e.type._context,
      o = e.pendingProps.children,
      ei(e),
      c = me(c),
      o = o(c),
      e.flags |= 1,
      pe(t,
      e,
      o,
      i),
      e.child;
      case 14: return xp(t,
      e,
      e.type,
      e.pendingProps,
      i);
      case 15: return bp(t,
      e,
      e.type,
      e.pendingProps,
      i);
      case 19: return Np(t,
      e,
      i);
      case 31: return SS(t,
      e,
      i);
      case 22: return Sp(t,
      e,
      i,
      e.pendingProps);
      case 24: return ei(e),
      o = me(ee),
      t === null ? (c = Xc(),
      c === null && (c = kt,
      u = Gc(),
      c.pooledCache = u,
      u.refCount++,
      u !== null && (c.pooledCacheLanes |= i),
      c = u),
      e.memoizedState =  {
        parent: o,
        cache: c
      },
      Fc(e),
      ma(e,
      ee,
      c)): ((t.lanes & i) !== 0 && (Zc(t,
      e),
      $s(e,
      null,
      null,
      i),
      Js()),
      c = t.memoizedState,
      u = e.memoizedState,
      c.parent !== o ? (c =  {
        parent: o,
        cache: o
      },
      e.memoizedState = c,
      e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = c),
      ma(e,
      ee,
      o)): (o = u.cache,
      ma(e,
      ee,
      o),
      o !== c.cache && Yc(e,
      [ee],
      i,
       ! 0))),
      pe(t,
      e,
      e.pendingProps.children,
      i),
      e.child;
      case 29: throw e.pendingProps
    }
    throw Error(r(156,
    e.tag))
  }
  function Kn(t) {
    t.flags |= 4
  }
  function Nu(t,
  e,
  i,
  o,
  c) {
    if((e = (t.mode & 32) !== 0) && (e =  ! 1),
    e) {
      if(t.flags |= 16777216,
      (c & 335544128) === c) if(t.stateNode.complete) t.flags |= 8192;
      else if(ag()) t.flags |= 8192;
      else throw ii = vr,
      Kc
    }
    else t.flags &=  - 16777217
  }
  function jp(t,
  e) {
    if(e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &=  - 16777217;
    else if(t.flags |= 16777216,
     ! Kg(e)) if(ag()) t.flags |= 8192;
    else throw ii = vr,
    Kc
  }
  function Lr(t,
  e) {
    e !== null && (t.flags |= 4),
    t.flags & 16384 && (e = t.tag !== 22 ? be(): 536870912,
    t.lanes |= e,
    ts |= e)
  }
  function io(t,
  e) {
    if( ! Ct) switch(t.tailMode) {
      case "hidden": e = t.tail;
      for(var i = null; e !== null; ) e.alternate !== null && (i = e),
      e = e.sibling;
      i === null ? t.tail = null: i.sibling = null;
      break;
      case "collapsed": i = t.tail;
      for(var o = null; i !== null; ) i.alternate !== null && (o = i),
      i = i.sibling;
      o === null ? e || t.tail === null ? t.tail = null: t.tail.sibling = null: o.sibling = null
    }
  }
  function Yt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
    i = 0,
    o = 0;
    if(e) for(var c = t.child; c !== null; ) i |= c.lanes | c.childLanes,
    o |= c.subtreeFlags & 65011712,
    o |= c.flags & 65011712,
    c.return = t,
    c = c.sibling;
    else for(c = t.child; c !== null; ) i |= c.lanes | c.childLanes,
    o |= c.subtreeFlags,
    o |= c.flags,
    c.return = t,
    c = c.sibling;
    return t.subtreeFlags |= o,
    t.childLanes = i,
    e
  }
  function wS(t,
  e,
  i) {
    var o = e.pendingProps;
    switch(Bc(e),
    e.tag) {
      case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return Yt(e),
      null;
      case 1: return Yt(e),
      null;
      case 3: return i = e.stateNode,
      o = null,
      t !== null && (o = t.memoizedState.cache),
      e.memoizedState.cache !== o && (e.flags |= 2048),
      Yn(ee),
      Mt(),
      i.pendingContext && (i.context = i.pendingContext,
      i.pendingContext = null),
      (t === null || t.child === null) && (Pi(e) ? Kn(e): t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
      Uc())),
      Yt(e),
      null;
      case 26: var c = e.type,
      u = e.memoizedState;
      return t === null ? (Kn(e),
      u !== null ? (Yt(e),
      jp(e,
      u)): (Yt(e),
      Nu(e,
      c,
      null,
      o,
      i))): u ? u !== t.memoizedState ? (Kn(e),
      Yt(e),
      jp(e,
      u)): (Yt(e),
      e.flags &=  - 16777217): (t = t.memoizedProps,
      t !== o && Kn(e),
      Yt(e),
      Nu(e,
      c,
      t,
      o,
      i)),
      null;
      case 27: if(Pe(e),
      i = ct.current,
      c = e.type,
      t !== null && e.stateNode != null) t.memoizedProps !== o && Kn(e);
      else {
        if( ! o) {
          if(e.stateNode === null) throw Error(r(166));
          return Yt(e),
          null
        }
        t = W.current,
        Pi(e) ? um(e): (t = kg(c,
        o,
        i),
        e.stateNode = t,
        Kn(e))
      }
      return Yt(e),
      null;
      case 5: if(Pe(e),
      c = e.type,
      t !== null && e.stateNode != null) t.memoizedProps !== o && Kn(e);
      else {
        if( ! o) {
          if(e.stateNode === null) throw Error(r(166));
          return Yt(e),
          null
        }
        if(u = W.current,
        Pi(e)) um(e);
        else {
          var y = Wr(ct.current);
          switch(u) {
            case 1: u = y.createElementNS("http://www.w3.org/2000/svg",
            c);
            break;
            case 2: u = y.createElementNS("http://www.w3.org/1998/Math/MathML",
            c);
            break;
            default: switch(c) {
              case "svg": u = y.createElementNS("http://www.w3.org/2000/svg",
              c);
              break;
              case "math": u = y.createElementNS("http://www.w3.org/1998/Math/MathML",
              c);
              break;
              case "script": u = y.createElement("div"),
              u.innerHTML = "<script><\/script>",
              u = u.removeChild(u.firstChild);
              break;
              case "select": u = typeof o.is == "string" ? y.createElement("select",
               {
                is: o.is
              }): y.createElement("select"),
              o.multiple ? u.multiple =  ! 0: o.size && (u.size = o.size);
              break;
              default: u = typeof o.is == "string" ? y.createElement(c,
               {
                is: o.is
              }): y.createElement(c)
            }
          }
          u[de] = e,
          u[ze] = o;
          t: for(y = e.child; y !== null; ) {
            if(y.tag === 5 || y.tag === 6) u.appendChild(y.stateNode);
            else if(y.tag !== 4 && y.tag !== 27 && y.child !== null) {
              y.child.return = y,
              y = y.child;
              continue
            }
            if(y === e) break t;
            for(; y.sibling === null; ) {
              if(y.return === null || y.return === e) break t;
              y = y.return
            }
            y.sibling.return = y.return,
            y = y.sibling
          }
          e.stateNode = u;
          t: switch(ge(u,
          c,
          o),
          c) {
            case "button": case "input": case "select": case "textarea": o =  !  ! o.autoFocus;
            break t;
            case "img": o =  ! 0;
            break t;
            default: o =  ! 1
          }
          o && Kn(e)
        }
      }
      return Yt(e),
      Nu(e,
      e.type,
      t === null ? null: t.memoizedProps,
      e.pendingProps,
      i),
      null;
      case 6: if(t && e.stateNode != null) t.memoizedProps !== o && Kn(e);
      else {
        if(typeof o != "string" && e.stateNode === null) throw Error(r(166));
        if(t = ct.current,
        Pi(e)) {
          if(t = e.stateNode,
          i = e.memoizedProps,
          o = null,
          c = he,
          c !== null) switch(c.tag) {
            case 27: case 5: o = c.memoizedProps
          }
          t[de] = e,
          t =  !  ! (t.nodeValue === i || o !== null && o.suppressHydrationWarning ===  ! 0 || Mg(t.nodeValue,
          i)),
          t || ha(e,
           ! 0)
        }
        else t = Wr(t).createTextNode(o),
        t[de] = e,
        e.stateNode = t
      }
      return Yt(e),
      null;
      case 31: if(i = e.memoizedState,
      t === null || t.memoizedState !== null) {
        if(o = Pi(e),
        i !== null) {
          if(t === null) {
            if( ! o) throw Error(r(318));
            if(t = e.memoizedState,
            t = t !== null ? t.dehydrated: null,
             ! t) throw Error(r(557));
            t[de] = e
          }
          else Ia(),
          (e.flags & 128) === 0 && (e.memoizedState = null),
          e.flags |= 4;
          Yt(e),
          t =  ! 1
        }
        else i = Uc(),
        t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i),
        t =  ! 0;
        if( ! t) return e.flags & 256 ? (Ke(e),
        e): (Ke(e),
        null);
        if((e.flags & 128) !== 0) throw Error(r(558))
      }
      return Yt(e),
      null;
      case 13: if(o = e.memoizedState,
      t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
        if(c = Pi(e),
        o !== null && o.dehydrated !== null) {
          if(t === null) {
            if( ! c) throw Error(r(318));
            if(c = e.memoizedState,
            c = c !== null ? c.dehydrated: null,
             ! c) throw Error(r(317));
            c[de] = e
          }
          else Ia(),
          (e.flags & 128) === 0 && (e.memoizedState = null),
          e.flags |= 4;
          Yt(e),
          c =  ! 1
        }
        else c = Uc(),
        t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c),
        c =  ! 0;
        if( ! c) return e.flags & 256 ? (Ke(e),
        e): (Ke(e),
        null)
      }
      return Ke(e),
      (e.flags & 128) !== 0 ? (e.lanes = i,
      e): (i = o !== null,
      t = t !== null && t.memoizedState !== null,
      i && (o = e.child,
      c = null,
      o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool),
      u = null,
      o.memoizedState !== null && o.memoizedState.cachePool !== null && (u = o.memoizedState.cachePool.pool),
      u !== c && (o.flags |= 2048)),
      i !== t && i && (e.child.flags |= 8192),
      Lr(e,
      e.updateQueue),
      Yt(e),
      null);
      case 4: return Mt(),
      t === null && Ju(e.stateNode.containerInfo),
      Yt(e),
      null;
      case 10: return Yn(e.type),
      Yt(e),
      null;
      case 19: if(Y($t),
      o = e.memoizedState,
      o === null) return Yt(e),
      null;
      if(c = (e.flags & 128) !== 0,
      u = o.rendering,
      u === null) if(c) io(o,
       ! 1);
      else {
        if(Wt !== 0 || t !== null && (t.flags & 128) !== 0) for(t = e.child; t !== null; ) {
          if(u = Er(t),
          u !== null) {
            for(e.flags |= 128,
            io(o,
             ! 1),
            t = u.updateQueue,
            e.updateQueue = t,
            Lr(e,
            t),
            e.subtreeFlags = 0,
            t = i,
            i = e.child;
            i !== null;
            ) sm(i,
            t),
            i = i.sibling;
            return P($t,
            $t.current & 1 | 2),
            Ct && Hn(e,
            o.treeForkCount),
            e.child
          }
          t = t.sibling
        }
        o.tail !== null && Te() > Hr && (e.flags |= 128,
        c =  ! 0,
        io(o,
         ! 1),
        e.lanes = 4194304)
      }
      else {
        if( ! c) if(t = Er(u),
        t !== null) {
          if(e.flags |= 128,
          c =  ! 0,
          t = t.updateQueue,
          e.updateQueue = t,
          Lr(e,
          t),
          io(o,
           ! 0),
          o.tail === null && o.tailMode === "hidden" &&  ! u.alternate &&  ! Ct) return Yt(e),
          null
        }
        else 2 * Te() - o.renderingStartTime > Hr && i !== 536870912 && (e.flags |= 128,
        c =  ! 0,
        io(o,
         ! 1),
        e.lanes = 4194304);
        o.isBackwards ? (u.sibling = e.child,
        e.child = u): (t = o.last,
        t !== null ? t.sibling = u: e.child = u,
        o.last = u)
      }
      return o.tail !== null ? (t = o.tail,
      o.rendering = t,
      o.tail = t.sibling,
      o.renderingStartTime = Te(),
      t.sibling = null,
      i = $t.current,
      P($t,
      c ? i & 1 | 2: i & 1),
      Ct && Hn(e,
      o.treeForkCount),
      t): (Yt(e),
      null);
      case 22: case 23: return Ke(e),
      $c(),
      o = e.memoizedState !== null,
      t !== null ? t.memoizedState !== null !== o && (e.flags |= 8192): o && (e.flags |= 8192),
      o ? (i & 536870912) !== 0 && (e.flags & 128) === 0 && (Yt(e),
      e.subtreeFlags & 6 && (e.flags |= 8192)): Yt(e),
      i = e.updateQueue,
      i !== null && Lr(e,
      i.retryQueue),
      i = null,
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
      o = null,
      e.memoizedState !== null && e.memoizedState.cachePool !== null && (o = e.memoizedState.cachePool.pool),
      o !== i && (e.flags |= 2048),
      t !== null && Y(ni),
      null;
      case 24: return i = null,
      t !== null && (i = t.memoizedState.cache),
      e.memoizedState.cache !== i && (e.flags |= 2048),
      Yn(ee),
      Yt(e),
      null;
      case 25: return null;
      case 30: return null
    }
    throw Error(r(156,
    e.tag))
  }
  function AS(t,
  e) {
    switch(Bc(e),
    e.tag) {
      case 1: return t = e.flags,
      t & 65536 ? (e.flags = t &  - 65537 | 128,
      e): null;
      case 3: return Yn(ee),
      Mt(),
      t = e.flags,
      (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t &  - 65537 | 128,
      e): null;
      case 26: case 27: case 5: return Pe(e),
      null;
      case 31: if(e.memoizedState !== null) {
        if(Ke(e),
        e.alternate === null) throw Error(r(340));
        Ia()
      }
      return t = e.flags,
      t & 65536 ? (e.flags = t &  - 65537 | 128,
      e): null;
      case 13: if(Ke(e),
      t = e.memoizedState,
      t !== null && t.dehydrated !== null) {
        if(e.alternate === null) throw Error(r(340));
        Ia()
      }
      return t = e.flags,
      t & 65536 ? (e.flags = t &  - 65537 | 128,
      e): null;
      case 19: return Y($t),
      null;
      case 4: return Mt(),
      null;
      case 10: return Yn(e.type),
      null;
      case 22: case 23: return Ke(e),
      $c(),
      t !== null && Y(ni),
      t = e.flags,
      t & 65536 ? (e.flags = t &  - 65537 | 128,
      e): null;
      case 24: return Yn(ee),
      null;
      case 25: return null;
      default: return null
    }
  }
  function Op(t,
  e) {
    switch(Bc(e),
    e.tag) {
      case 3: Yn(ee),
      Mt();
      break;
      case 26: case 27: case 5: Pe(e);
      break;
      case 4: Mt();
      break;
      case 31: e.memoizedState !== null && Ke(e);
      break;
      case 13: Ke(e);
      break;
      case 19: Y($t);
      break;
      case 10: Yn(e.type);
      break;
      case 22: case 23: Ke(e),
      $c(),
      t !== null && Y(ni);
      break;
      case 24: Yn(ee)
    }
  }
  function so(t,
  e) {
    try {
      var i = e.updateQueue,
      o = i !== null ? i.lastEffect: null;
      if(o !== null) {
        var c = o.next;
        i = c;
        do {
          if((i.tag & t) === t) {
            o = void 0;
            var u = i.create,
            y = i.inst;
            o = u(),
            y.destroy = o
          }
          i = i.next
        }
        while(i !== c)
      }
    }
    catch(b) {
      _t(e,
      e.return,
      b)
    }
  }
  function ba(t,
  e,
  i) {
    try {
      var o = e.updateQueue,
      c = o !== null ? o.lastEffect: null;
      if(c !== null) {
        var u = c.next;
        o = u;
        do {
          if((o.tag & t) === t) {
            var y = o.inst,
            b = y.destroy;
            if(b !== void 0) {
              y.destroy = void 0,
              c = e;
              var T = i,
              _ = b;
              try {
                _()
              }
              catch(U) {
                _t(c,
                T,
                U)
              }
            }
          }
          o = o.next
        }
        while(o !== u)
      }
    }
    catch(U) {
      _t(e,
      e.return,
      U)
    }
  }
  function zp(t) {
    var e = t.updateQueue;
    if(e !== null) {
      var i = t.stateNode;
      try {
        wm(e,
        i)
      }
      catch(o) {
        _t(t,
        t.return,
        o)
      }
    }
  }
  function _p(t,
  e,
  i) {
    i.props = ri(t.type,
    t.memoizedProps),
    i.state = t.memoizedState;
    try {
      i.componentWillUnmount()
    }
    catch(o) {
      _t(t,
      e,
      o)
    }
  }
  function oo(t,
  e) {
    try {
      var i = t.ref;
      if(i !== null) {
        switch(t.tag) {
          case 26: case 27: case 5: var o = t.stateNode;
          break;
          case 30: o = t.stateNode;
          break;
          default: o = t.stateNode
        }
        typeof i == "function" ? t.refCleanup = i(o): i.current = o
      }
    }
    catch(c) {
      _t(t,
      e,
      c)
    }
  }
  function Tn(t,
  e) {
    var i = t.ref,
    o = t.refCleanup;
    if(i !== null) if(typeof o == "function") try {
      o()
    }
    catch(c) {
      _t(t,
      e,
      c)
    }
    finally {
      t.refCleanup = null,
      t = t.alternate,
      t != null && (t.refCleanup = null)
    }
    else if(typeof i == "function") try {
      i(null)
    }
    catch(c) {
      _t(t,
      e,
      c)
    }
    else i.current = null
  }
  function Lp(t) {
    var e = t.type,
    i = t.memoizedProps,
    o = t.stateNode;
    try {
      t: switch(e) {
        case "button": case "input": case "select": case "textarea": i.autoFocus && o.focus();
        break t;
        case "img": i.src ? o.src = i.src: i.srcSet && (o.srcset = i.srcSet)
      }
    }
    catch(c) {
      _t(t,
      t.return,
      c)
    }
  }
  function Du(t,
  e,
  i) {
    try {
      var o = t.stateNode;
      KS(o,
      t.type,
      i,
      e),
      o[ze] = e
    }
    catch(c) {
      _t(t,
      t.return,
      c)
    }
  }
  function Vp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ma(t.type) || t.tag === 4
  }
  function ju(t) {
    t: for(; ; ) {
      for(; t.sibling === null; ) {
        if(t.return === null || Vp(t.return)) return null;
        t = t.return
      }
      for(t.sibling.return = t.return,
      t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if(t.tag === 27 && Ma(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t,
        t = t.child
      }
      if( ! (t.flags & 2)) return t.stateNode
    }
  }
  function Ou(t,
  e,
  i) {
    var o = t.tag;
    if(o === 5 || o === 6) t = t.stateNode,
    e ? (i.nodeType === 9 ? i.body: i.nodeName === "HTML" ? i.ownerDocument.body: i).insertBefore(t,
    e): (e = i.nodeType === 9 ? i.body: i.nodeName === "HTML" ? i.ownerDocument.body: i,
    e.appendChild(t),
    i = i._reactRootContainer,
    i != null || e.onclick !== null || (e.onclick = Bn));
    else if(o !== 4 && (o === 27 && Ma(t.type) && (i = t.stateNode,
    e = null),
    t = t.child,
    t !== null)) for(Ou(t,
    e,
    i),
    t = t.sibling;
    t !== null;
    ) Ou(t,
    e,
    i),
    t = t.sibling
  }
  function Vr(t,
  e,
  i) {
    var o = t.tag;
    if(o === 5 || o === 6) t = t.stateNode,
    e ? i.insertBefore(t,
    e): i.appendChild(t);
    else if(o !== 4 && (o === 27 && Ma(t.type) && (i = t.stateNode),
    t = t.child,
    t !== null)) for(Vr(t,
    e,
    i),
    t = t.sibling;
    t !== null;
    ) Vr(t,
    e,
    i),
    t = t.sibling
  }
  function Bp(t) {
    var e = t.stateNode,
    i = t.memoizedProps;
    try {
      for(var o = t.type,
      c = e.attributes; c.length; ) e.removeAttributeNode(c[0]);
      ge(e,
      o,
      i),
      e[de] = t,
      e[ze] = i
    }
    catch(u) {
      _t(t,
      t.return,
      u)
    }
  }
  var Fn =  ! 1,
  ie =  ! 1,
  zu =  ! 1,
  kp = typeof WeakSet == "function" ? WeakSet: Set,
  fe = null;
  function TS(t,
  e) {
    if(t = t.containerInfo,
    tf = al,
    t = Wh(t),
    Cc(t)) {
      if("selectionStart" in t) var i =  {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t:  {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var o = i.getSelection && i.getSelection();
        if(o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var c = o.anchorOffset,
          u = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType,
            u.nodeType
          }
          catch {
            i = null;
            break t
          }
          var y = 0,
          b =  - 1,
          T =  - 1,
          _ = 0,
          U = 0,
          K = t,
          V = null;
          e: for(; ; ) {
            for(var k; K !== i || c !== 0 && K.nodeType !== 3 || (b = y + c),
            K !== u || o !== 0 && K.nodeType !== 3 || (T = y + o),
            K.nodeType === 3 && (y += K.nodeValue.length),
            (k = K.firstChild) !== null;
            ) V = K,
            K = k;
            for(; ; ) {
              if(K === t) break e;
              if(V === i && ++ _ === c && (b = y),
              V === u && ++ U === o && (T = y),
              (k = K.nextSibling) !== null) break;
              K = V,
              V = K.parentNode
            }
            K = k
          }
          i = b ===  - 1 || T ===  - 1 ? null:  {
            start: b,
            end: T
          }
        }
        else i = null
      }
      i = i ||  {
        start: 0,
        end: 0
      }
    }
    else i = null;
    for(ef =  {
      focusedElem: t,
      selectionRange: i
    },
    al =  ! 1,
    fe = e; fe !== null; ) if(e = fe,
    t = e.child,
    (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e,
    fe = t;
    else for(; fe !== null; ) {
      switch(e = fe,
      u = e.alternate,
      t = e.flags,
      e.tag) {
        case 0: if((t & 4) !== 0 && (t = e.updateQueue,
        t = t !== null ? t.events: null,
        t !== null)) for(i = 0; i < t.length; i++) c = t[i],
        c.ref.impl = c.nextImpl;
        break;
        case 11: case 15: break;
        case 1: if((t & 1024) !== 0 && u !== null) {
          t = void 0,
          i = e,
          c = u.memoizedProps,
          u = u.memoizedState,
          o = i.stateNode;
          try {
            var et = ri(i.type,
            c);
            t = o.getSnapshotBeforeUpdate(et,
            u),
            o.__reactInternalSnapshotBeforeUpdate = t
          }
          catch(ft) {
            _t(i,
            i.return,
            ft)
          }
        }
        break;
        case 3: if((t & 1024) !== 0) {
          if(t = e.stateNode.containerInfo,
          i = t.nodeType,
          i === 9) sf(t);
          else if(i === 1) switch(t.nodeName) {
            case "HEAD": case "HTML": case "BODY": sf(t);
            break;
            default: t.textContent = ""
          }
        }
        break;
        case 5: case 26: case 27: case 6: case 4: case 17: break;
        default: if((t & 1024) !== 0) throw Error(r(163))
      }
      if(t = e.sibling,
      t !== null) {
        t.return = e.return,
        fe = t;
        break
      }
      fe = e.return
    }
  }
  function Up(t,
  e,
  i) {
    var o = i.flags;
    switch(i.tag) {
      case 0: case 11: case 15: Qn(t,
      i),
      o & 4 && so(5,
      i);
      break;
      case 1: if(Qn(t,
      i),
      o & 4) if(t = i.stateNode,
      e === null) try {
        t.componentDidMount()
      }
      catch(y) {
        _t(i,
        i.return,
        y)
      }
      else {
        var c = ri(i.type,
        e.memoizedProps);
        e = e.memoizedState;
        try {
          t.componentDidUpdate(c,
          e,
          t.__reactInternalSnapshotBeforeUpdate)
        }
        catch(y) {
          _t(i,
          i.return,
          y)
        }
      }
      o & 64 && zp(i),
      o & 512 && oo(i,
      i.return);
      break;
      case 3: if(Qn(t,
      i),
      o & 64 && (t = i.updateQueue,
      t !== null)) {
        if(e = null,
        i.child !== null) switch(i.child.tag) {
          case 27: case 5: e = i.child.stateNode;
          break;
          case 1: e = i.child.stateNode
        }
        try {
          wm(t,
          e)
        }
        catch(y) {
          _t(i,
          i.return,
          y)
        }
      }
      break;
      case 27: e === null && o & 4 && Bp(i);
      case 26: case 5: Qn(t,
      i),
      e === null && o & 4 && Lp(i),
      o & 512 && oo(i,
      i.return);
      break;
      case 12: Qn(t,
      i);
      break;
      case 31: Qn(t,
      i),
      o & 4 && Yp(t,
      i);
      break;
      case 13: Qn(t,
      i),
      o & 4 && Gp(t,
      i),
      o & 64 && (t = i.memoizedState,
      t !== null && (t = t.dehydrated,
      t !== null && (i = _S.bind(null,
      i),
      t2(t,
      i))));
      break;
      case 22: if(o = i.memoizedState !== null || Fn,
       ! o) {
        e = e !== null && e.memoizedState !== null || ie,
        c = Fn;
        var u = ie;
        Fn = o,
        (ie = e) &&  ! u ? Wn(t,
        i,
        (i.subtreeFlags & 8772) !== 0): Qn(t,
        i),
        Fn = c,
        ie = u
      }
      break;
      case 30: break;
      default: Qn(t,
      i)
    }
  }
  function Hp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Hp(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && cc(e)),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
  }
  var Kt = null,
  Le =  ! 1;
  function Zn(t,
  e,
  i) {
    for(i = i.child; i !== null; ) Pp(t,
    e,
    i),
    i = i.sibling
  }
  function Pp(t,
  e,
  i) {
    if(Ce && typeof Ce.onCommitFiberUnmount == "function") try {
      Ce.onCommitFiberUnmount(qa,
      i)
    }
    catch {
    }
    switch(i.tag) {
      case 26: ie || Tn(i,
      e),
      Zn(t,
      e,
      i),
      i.memoizedState ? i.memoizedState.count--: i.stateNode && (i = i.stateNode,
      i.parentNode.removeChild(i));
      break;
      case 27: ie || Tn(i,
      e);
      var o = Kt,
      c = Le;
      Ma(i.type) && (Kt = i.stateNode,
      Le =  ! 1),
      Zn(t,
      e,
      i),
      go(i.stateNode),
      Kt = o,
      Le = c;
      break;
      case 5: ie || Tn(i,
      e);
      case 6: if(o = Kt,
      c = Le,
      Kt = null,
      Zn(t,
      e,
      i),
      Kt = o,
      Le = c,
      Kt !== null) if(Le) try {
        (Kt.nodeType === 9 ? Kt.body: Kt.nodeName === "HTML" ? Kt.ownerDocument.body: Kt).removeChild(i.stateNode)
      }
      catch(u) {
        _t(i,
        e,
        u)
      }
      else try {
        Kt.removeChild(i.stateNode)
      }
      catch(u) {
        _t(i,
        e,
        u)
      }
      break;
      case 18: Kt !== null && (Le ? (t = Kt,
      zg(t.nodeType === 9 ? t.body: t.nodeName === "HTML" ? t.ownerDocument.body: t,
      i.stateNode),
      ls(t)): zg(Kt,
      i.stateNode));
      break;
      case 4: o = Kt,
      c = Le,
      Kt = i.stateNode.containerInfo,
      Le =  ! 0,
      Zn(t,
      e,
      i),
      Kt = o,
      Le = c;
      break;
      case 0: case 11: case 14: case 15: ba(2,
      i,
      e),
      ie || ba(4,
      i,
      e),
      Zn(t,
      e,
      i);
      break;
      case 1: ie || (Tn(i,
      e),
      o = i.stateNode,
      typeof o.componentWillUnmount == "function" && _p(i,
      e,
      o)),
      Zn(t,
      e,
      i);
      break;
      case 21: Zn(t,
      e,
      i);
      break;
      case 22: ie = (o = ie) || i.memoizedState !== null,
      Zn(t,
      e,
      i),
      ie = o;
      break;
      default: Zn(t,
      e,
      i)
    }
  }
  function Yp(t,
  e) {
    if(e.memoizedState === null && (t = e.alternate,
    t !== null && (t = t.memoizedState,
    t !== null))) {
      t = t.dehydrated;
      try {
        ls(t)
      }
      catch(i) {
        _t(e,
        e.return,
        i)
      }
    }
  }
  function Gp(t,
  e) {
    if(e.memoizedState === null && (t = e.alternate,
    t !== null && (t = t.memoizedState,
    t !== null && (t = t.dehydrated,
    t !== null)))) try {
      ls(t)
    }
    catch(i) {
      _t(e,
      e.return,
      i)
    }
  }
  function CS(t) {
    switch(t.tag) {
      case 31: case 13: case 19: var e = t.stateNode;
      return e === null && (e = t.stateNode = new kp),
      e;
      case 22: return t = t.stateNode,
      e = t._retryCache,
      e === null && (e = t._retryCache = new kp),
      e;
      default: throw Error(r(435,
      t.tag))
    }
  }
  function Br(t,
  e) {
    var i = CS(t);
    e.forEach(function(o) {
      if( ! i.has(o)) {
        i.add(o);
        var c = LS.bind(null,
        t,
        o);
        o.then(c,
        c)
      }
    })
  }
  function Ve(t,
  e) {
    var i = e.deletions;
    if(i !== null) for(var o = 0; o < i.length; o++) {
      var c = i[o],
      u = t,
      y = e,
      b = y;
      t: for(; b !== null; ) {
        switch(b.tag) {
          case 27: if(Ma(b.type)) {
            Kt = b.stateNode,
            Le =  ! 1;
            break t
          }
          break;
          case 5: Kt = b.stateNode,
          Le =  ! 1;
          break t;
          case 3: case 4: Kt = b.stateNode.containerInfo,
          Le =  ! 0;
          break t
        }
        b = b.return
      }
      if(Kt === null) throw Error(r(160));
      Pp(u,
      y,
      c),
      Kt = null,
      Le =  ! 1,
      u = c.alternate,
      u !== null && (u.return = null),
      c.return = null
    }
    if(e.subtreeFlags & 13886) for(e = e.child; e !== null; ) qp(e,
    t),
    e = e.sibling
  }
  var pn = null;
  function qp(t,
  e) {
    var i = t.alternate,
    o = t.flags;
    switch(t.tag) {
      case 0: case 11: case 14: case 15: Ve(e,
      t),
      Be(t),
      o & 4 && (ba(3,
      t,
      t.return),
      so(3,
      t),
      ba(5,
      t,
      t.return));
      break;
      case 1: Ve(e,
      t),
      Be(t),
      o & 512 && (ie || i === null || Tn(i,
      i.return)),
      o & 64 && Fn && (t = t.updateQueue,
      t !== null && (o = t.callbacks,
      o !== null && (i = t.shared.hiddenCallbacks,
      t.shared.hiddenCallbacks = i === null ? o: i.concat(o))));
      break;
      case 26: var c = pn;
      if(Ve(e,
      t),
      Be(t),
      o & 512 && (ie || i === null || Tn(i,
      i.return)),
      o & 4) {
        var u = i !== null ? i.memoizedState: null;
        if(o = t.memoizedState,
        i === null) if(o === null) if(t.stateNode === null) {
          t:  {
            o = t.type,
            i = t.memoizedProps,
            c = c.ownerDocument || c;
            e: switch(o) {
              case "title": u = c.getElementsByTagName("title")[0],
              ( ! u || u[zs] || u[de] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = c.createElement(o),
              c.head.insertBefore(u,
              c.querySelector("head > title"))),
              ge(u,
              o,
              i),
              u[de] = t,
              ue(u),
              o = u;
              break t;
              case "link": var y = qg("link",
              "href",
              c).get(o + (i.href || ""));
              if(y) {
                for(var b = 0; b < y.length; b++) if(u = y[b],
                u.getAttribute("href") === (i.href == null || i.href === "" ? null: i.href) && u.getAttribute("rel") === (i.rel == null ? null: i.rel) && u.getAttribute("title") === (i.title == null ? null: i.title) && u.getAttribute("crossorigin") === (i.crossOrigin == null ? null: i.crossOrigin)) {
                  y.splice(b,
                  1);
                  break e
                }
              }
              u = c.createElement(o),
              ge(u,
              o,
              i),
              c.head.appendChild(u);
              break;
              case "meta": if(y = qg("meta",
              "content",
              c).get(o + (i.content || ""))) {
                for(b = 0; b < y.length; b++) if(u = y[b],
                u.getAttribute("content") === (i.content == null ? null: "" + i.content) && u.getAttribute("name") === (i.name == null ? null: i.name) && u.getAttribute("property") === (i.property == null ? null: i.property) && u.getAttribute("http-equiv") === (i.httpEquiv == null ? null: i.httpEquiv) && u.getAttribute("charset") === (i.charSet == null ? null: i.charSet)) {
                  y.splice(b,
                  1);
                  break e
                }
              }
              u = c.createElement(o),
              ge(u,
              o,
              i),
              c.head.appendChild(u);
              break;
              default: throw Error(r(468,
              o))
            }
            u[de] = t,
            ue(u),
            o = u
          }
          t.stateNode = o
        }
        else Xg(c,
        t.type,
        t.stateNode);
        else t.stateNode = Gg(c,
        o,
        t.memoizedProps);
        else u !== o ? (u === null ? i.stateNode !== null && (i = i.stateNode,
        i.parentNode.removeChild(i)): u.count--,
        o === null ? Xg(c,
        t.type,
        t.stateNode): Gg(c,
        o,
        t.memoizedProps)): o === null && t.stateNode !== null && Du(t,
        t.memoizedProps,
        i.memoizedProps)
      }
      break;
      case 27: Ve(e,
      t),
      Be(t),
      o & 512 && (ie || i === null || Tn(i,
      i.return)),
      i !== null && o & 4 && Du(t,
      t.memoizedProps,
      i.memoizedProps);
      break;
      case 5: if(Ve(e,
      t),
      Be(t),
      o & 512 && (ie || i === null || Tn(i,
      i.return)),
      t.flags & 32) {
        c = t.stateNode;
        try {
          ji(c,
          "")
        }
        catch(et) {
          _t(t,
          t.return,
          et)
        }
      }
      o & 4 && t.stateNode != null && (c = t.memoizedProps,
      Du(t,
      c,
      i !== null ? i.memoizedProps: c)),
      o & 1024 && (zu =  ! 0);
      break;
      case 6: if(Ve(e,
      t),
      Be(t),
      o & 4) {
        if(t.stateNode === null) throw Error(r(162));
        o = t.memoizedProps,
        i = t.stateNode;
        try {
          i.nodeValue = o
        }
        catch(et) {
          _t(t,
          t.return,
          et)
        }
      }
      break;
      case 3: if(Ir = null,
      c = pn,
      pn = Jr(e.containerInfo),
      Ve(e,
      t),
      pn = c,
      Be(t),
      o & 4 && i !== null && i.memoizedState.isDehydrated) try {
        ls(e.containerInfo)
      }
      catch(et) {
        _t(t,
        t.return,
        et)
      }
      zu && (zu =  ! 1,
      Xp(t));
      break;
      case 4: o = pn,
      pn = Jr(t.stateNode.containerInfo),
      Ve(e,
      t),
      Be(t),
      pn = o;
      break;
      case 12: Ve(e,
      t),
      Be(t);
      break;
      case 31: Ve(e,
      t),
      Be(t),
      o & 4 && (o = t.updateQueue,
      o !== null && (t.updateQueue = null,
      Br(t,
      o)));
      break;
      case 13: Ve(e,
      t),
      Be(t),
      t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Ur = Te()),
      o & 4 && (o = t.updateQueue,
      o !== null && (t.updateQueue = null,
      Br(t,
      o)));
      break;
      case 22: c = t.memoizedState !== null;
      var T = i !== null && i.memoizedState !== null,
      _ = Fn,
      U = ie;
      if(Fn = _ || c,
      ie = U || T,
      Ve(e,
      t),
      ie = U,
      Fn = _,
      Be(t),
      o & 8192) t: for(e = t.stateNode,
      e._visibility = c ? e._visibility &  - 2: e._visibility | 1,
      c && (i === null || T || Fn || ie || li(t)),
      i = null,
      e = t;
      ;
      ) {
        if(e.tag === 5 || e.tag === 26) {
          if(i === null) {
            T = i = e;
            try {
              if(u = T.stateNode,
              c) y = u.style,
              typeof y.setProperty == "function" ? y.setProperty("display",
              "none",
              "important"): y.display = "none";
              else {
                b = T.stateNode;
                var K = T.memoizedProps.style,
                V = K != null && K.hasOwnProperty("display") ? K.display: null;
                b.style.display = V == null || typeof V == "boolean" ? "": ("" + V).trim()
              }
            }
            catch(et) {
              _t(T,
              T.return,
              et)
            }
          }
        }
        else if(e.tag === 6) {
          if(i === null) {
            T = e;
            try {
              T.stateNode.nodeValue = c ? "": T.memoizedProps
            }
            catch(et) {
              _t(T,
              T.return,
              et)
            }
          }
        }
        else if(e.tag === 18) {
          if(i === null) {
            T = e;
            try {
              var k = T.stateNode;
              c ? _g(k,
               ! 0): _g(T.stateNode,
               ! 1)
            }
            catch(et) {
              _t(T,
              T.return,
              et)
            }
          }
        }
        else if((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
          e.child.return = e,
          e = e.child;
          continue
        }
        if(e === t) break t;
        for(; e.sibling === null; ) {
          if(e.return === null || e.return === t) break t;
          i === e && (i = null),
          e = e.return
        }
        i === e && (i = null),
        e.sibling.return = e.return,
        e = e.sibling
      }
      o & 4 && (o = t.updateQueue,
      o !== null && (i = o.retryQueue,
      i !== null && (o.retryQueue = null,
      Br(t,
      i))));
      break;
      case 19: Ve(e,
      t),
      Be(t),
      o & 4 && (o = t.updateQueue,
      o !== null && (t.updateQueue = null,
      Br(t,
      o)));
      break;
      case 30: break;
      case 21: break;
      default: Ve(e,
      t),
      Be(t)
    }
  }
  function Be(t) {
    var e = t.flags;
    if(e & 2) {
      try {
        for(var i,
        o = t.return; o !== null; ) {
          if(Vp(o)) {
            i = o;
            break
          }
          o = o.return
        }
        if(i == null) throw Error(r(160));
        switch(i.tag) {
          case 27: var c = i.stateNode,
          u = ju(t);
          Vr(t,
          u,
          c);
          break;
          case 5: var y = i.stateNode;
          i.flags & 32 && (ji(y,
          ""),
          i.flags &=  - 33);
          var b = ju(t);
          Vr(t,
          b,
          y);
          break;
          case 3: case 4: var T = i.stateNode.containerInfo,
          _ = ju(t);
          Ou(t,
          _,
          T);
          break;
          default: throw Error(r(161))
        }
      }
      catch(U) {
        _t(t,
        t.return,
        U)
      }
      t.flags &=  - 3
    }
    e & 4096 && (t.flags &=  - 4097)
  }
  function Xp(t) {
    if(t.subtreeFlags & 1024) for(t = t.child; t !== null; ) {
      var e = t;
      Xp(e),
      e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
      t = t.sibling
    }
  }
  function Qn(t,
  e) {
    if(e.subtreeFlags & 8772) for(e = e.child; e !== null; ) Up(t,
    e.alternate,
    e),
    e = e.sibling
  }
  function li(t) {
    for(t = t.child; t !== null; ) {
      var e = t;
      switch(e.tag) {
        case 0: case 11: case 14: case 15: ba(4,
        e,
        e.return),
        li(e);
        break;
        case 1: Tn(e,
        e.return);
        var i = e.stateNode;
        typeof i.componentWillUnmount == "function" && _p(e,
        e.return,
        i),
        li(e);
        break;
        case 27: go(e.stateNode);
        case 26: case 5: Tn(e,
        e.return),
        li(e);
        break;
        case 22: e.memoizedState === null && li(e);
        break;
        case 30: li(e);
        break;
        default: li(e)
      }
      t = t.sibling
    }
  }
  function Wn(t,
  e,
  i) {
    for(i = i && (e.subtreeFlags & 8772) !== 0,
    e = e.child;
    e !== null;
    ) {
      var o = e.alternate,
      c = t,
      u = e,
      y = u.flags;
      switch(u.tag) {
        case 0: case 11: case 15: Wn(c,
        u,
        i),
        so(4,
        u);
        break;
        case 1: if(Wn(c,
        u,
        i),
        o = u,
        c = o.stateNode,
        typeof c.componentDidMount == "function") try {
          c.componentDidMount()
        }
        catch(_) {
          _t(o,
          o.return,
          _)
        }
        if(o = u,
        c = o.updateQueue,
        c !== null) {
          var b = o.stateNode;
          try {
            var T = c.shared.hiddenCallbacks;
            if(T !== null) for(c.shared.hiddenCallbacks = null,
            c = 0; c < T.length; c++) Em(T[c],
            b)
          }
          catch(_) {
            _t(o,
            o.return,
            _)
          }
        }
        i && y & 64 && zp(u),
        oo(u,
        u.return);
        break;
        case 27: Bp(u);
        case 26: case 5: Wn(c,
        u,
        i),
        i && o === null && y & 4 && Lp(u),
        oo(u,
        u.return);
        break;
        case 12: Wn(c,
        u,
        i);
        break;
        case 31: Wn(c,
        u,
        i),
        i && y & 4 && Yp(c,
        u);
        break;
        case 13: Wn(c,
        u,
        i),
        i && y & 4 && Gp(c,
        u);
        break;
        case 22: u.memoizedState === null && Wn(c,
        u,
        i),
        oo(u,
        u.return);
        break;
        case 30: break;
        default: Wn(c,
        u,
        i)
      }
      e = e.sibling
    }
  }
  function _u(t,
  e) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
    t = null,
    e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
    t !== i && (t != null && t.refCount++,
    i != null && Ks(i))
  }
  function Lu(t,
  e) {
    t = null,
    e.alternate !== null && (t = e.alternate.memoizedState.cache),
    e = e.memoizedState.cache,
    e !== t && (e.refCount++,
    t != null && Ks(t))
  }
  function gn(t,
  e,
  i,
  o) {
    if(e.subtreeFlags & 10256) for(e = e.child; e !== null; ) Kp(t,
    e,
    i,
    o),
    e = e.sibling
  }
  function Kp(t,
  e,
  i,
  o) {
    var c = e.flags;
    switch(e.tag) {
      case 0: case 11: case 15: gn(t,
      e,
      i,
      o),
      c & 2048 && so(9,
      e);
      break;
      case 1: gn(t,
      e,
      i,
      o);
      break;
      case 3: gn(t,
      e,
      i,
      o),
      c & 2048 && (t = null,
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      e = e.memoizedState.cache,
      e !== t && (e.refCount++,
      t != null && Ks(t)));
      break;
      case 12: if(c & 2048) {
        gn(t,
        e,
        i,
        o),
        t = e.stateNode;
        try {
          var u = e.memoizedProps,
          y = u.id,
          b = u.onPostCommit;
          typeof b == "function" && b(y,
          e.alternate === null ? "mount": "update",
          t.passiveEffectDuration,
           - 0)
        }
        catch(T) {
          _t(e,
          e.return,
          T)
        }
      }
      else gn(t,
      e,
      i,
      o);
      break;
      case 31: gn(t,
      e,
      i,
      o);
      break;
      case 13: gn(t,
      e,
      i,
      o);
      break;
      case 23: break;
      case 22: u = e.stateNode,
      y = e.alternate,
      e.memoizedState !== null ? u._visibility & 2 ? gn(t,
      e,
      i,
      o): ro(t,
      e): u._visibility & 2 ? gn(t,
      e,
      i,
      o): (u._visibility |= 2,
      Ji(t,
      e,
      i,
      o,
      (e.subtreeFlags & 10256) !== 0 ||  ! 1)),
      c & 2048 && _u(y,
      e);
      break;
      case 24: gn(t,
      e,
      i,
      o),
      c & 2048 && Lu(e.alternate,
      e);
      break;
      default: gn(t,
      e,
      i,
      o)
    }
  }
  function Ji(t,
  e,
  i,
  o,
  c) {
    for(c = c && ((e.subtreeFlags & 10256) !== 0 ||  ! 1),
    e = e.child;
    e !== null;
    ) {
      var u = t,
      y = e,
      b = i,
      T = o,
      _ = y.flags;
      switch(y.tag) {
        case 0: case 11: case 15: Ji(u,
        y,
        b,
        T,
        c),
        so(8,
        y);
        break;
        case 23: break;
        case 22: var U = y.stateNode;
        y.memoizedState !== null ? U._visibility & 2 ? Ji(u,
        y,
        b,
        T,
        c): ro(u,
        y): (U._visibility |= 2,
        Ji(u,
        y,
        b,
        T,
        c)),
        c && _ & 2048 && _u(y.alternate,
        y);
        break;
        case 24: Ji(u,
        y,
        b,
        T,
        c),
        c && _ & 2048 && Lu(y.alternate,
        y);
        break;
        default: Ji(u,
        y,
        b,
        T,
        c)
      }
      e = e.sibling
    }
  }
  function ro(t,
  e) {
    if(e.subtreeFlags & 10256) for(e = e.child; e !== null; ) {
      var i = t,
      o = e,
      c = o.flags;
      switch(o.tag) {
        case 22: ro(i,
        o),
        c & 2048 && _u(o.alternate,
        o);
        break;
        case 24: ro(i,
        o),
        c & 2048 && Lu(o.alternate,
        o);
        break;
        default: ro(i,
        o)
      }
      e = e.sibling
    }
  }
  var lo = 8192;
  function $i(t,
  e,
  i) {
    if(t.subtreeFlags & lo) for(t = t.child; t !== null; ) Fp(t,
    e,
    i),
    t = t.sibling
  }
  function Fp(t,
  e,
  i) {
    switch(t.tag) {
      case 26: $i(t,
      e,
      i),
      t.flags & lo && t.memoizedState !== null && d2(i,
      pn,
      t.memoizedState,
      t.memoizedProps);
      break;
      case 5: $i(t,
      e,
      i);
      break;
      case 3: case 4: var o = pn;
      pn = Jr(t.stateNode.containerInfo),
      $i(t,
      e,
      i),
      pn = o;
      break;
      case 22: t.memoizedState === null && (o = t.alternate,
      o !== null && o.memoizedState !== null ? (o = lo,
      lo = 16777216,
      $i(t,
      e,
      i),
      lo = o): $i(t,
      e,
      i));
      break;
      default: $i(t,
      e,
      i)
    }
  }
  function Zp(t) {
    var e = t.alternate;
    if(e !== null && (t = e.child,
    t !== null)) {
      e.child = null;
      do e = t.sibling,
      t.sibling = null,
      t = e;
      while(t !== null)
    }
  }
  function co(t) {
    var e = t.deletions;
    if((t.flags & 16) !== 0) {
      if(e !== null) for(var i = 0; i < e.length; i++) {
        var o = e[i];
        fe = o,
        Wp(o,
        t)
      }
      Zp(t)
    }
    if(t.subtreeFlags & 10256) for(t = t.child; t !== null; ) Qp(t),
    t = t.sibling
  }
  function Qp(t) {
    switch(t.tag) {
      case 0: case 11: case 15: co(t),
      t.flags & 2048 && ba(9,
      t,
      t.return);
      break;
      case 3: co(t);
      break;
      case 12: co(t);
      break;
      case 22: var e = t.stateNode;
      t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &=  - 3,
      kr(t)): co(t);
      break;
      default: co(t)
    }
  }
  function kr(t) {
    var e = t.deletions;
    if((t.flags & 16) !== 0) {
      if(e !== null) for(var i = 0; i < e.length; i++) {
        var o = e[i];
        fe = o,
        Wp(o,
        t)
      }
      Zp(t)
    }
    for(t = t.child; t !== null; ) {
      switch(e = t,
      e.tag) {
        case 0: case 11: case 15: ba(8,
        e,
        e.return),
        kr(e);
        break;
        case 22: i = e.stateNode,
        i._visibility & 2 && (i._visibility &=  - 3,
        kr(e));
        break;
        default: kr(e)
      }
      t = t.sibling
    }
  }
  function Wp(t,
  e) {
    for(; fe !== null; ) {
      var i = fe;
      switch(i.tag) {
        case 0: case 11: case 15: ba(8,
        i,
        e);
        break;
        case 23: case 22: if(i.memoizedState !== null && i.memoizedState.cachePool !== null) {
          var o = i.memoizedState.cachePool.pool;
          o != null && o.refCount++
        }
        break;
        case 24: Ks(i.memoizedState.cache)
      }
      if(o = i.child,
      o !== null) o.return = i,
      fe = o;
      else t: for(i = t; fe !== null; ) {
        o = fe;
        var c = o.sibling,
        u = o.return;
        if(Hp(o),
        o === i) {
          fe = null;
          break t
        }
        if(c !== null) {
          c.return = u,
          fe = c;
          break t
        }
        fe = u
      }
    }
  }
  var MS =  {
    getCacheForType: function(t) {
      var e = me(ee),
      i = e.data.get(t);
      return i === void 0 && (i = t(),
      e.data.set(t,
      i)),
      i
    },
    cacheSignal: function() {
      return me(ee).controller.signal
    }
  },
  RS = typeof WeakMap == "function" ? WeakMap: Map,
  Ot = 0,
  kt = null,
  Et = null,
  At = 0,
  zt = 0,
  Fe = null,
  Sa =  ! 1,
  Ii =  ! 1,
  Vu =  ! 1,
  Jn = 0,
  Wt = 0,
  Ea = 0,
  ci = 0,
  Bu = 0,
  Ze = 0,
  ts = 0,
  uo = null,
  ke = null,
  ku =  ! 1,
  Ur = 0,
  Jp = 0,
  Hr = 1 / 0,
  Pr = null,
  wa = null,
  oe = 0,
  Aa = null,
  es = null,
  $n = 0,
  Uu = 0,
  Hu = null,
  $p = null,
  fo = 0,
  Pu = null;
  function Qe() {
    return(Ot & 2) !== 0 && At !== 0 ? At &  - At: O.T !== null ? Fu(): rc()
  }
  function Ip() {
    if(Ze === 0) if((At & 536870912) === 0 || Ct) {
      var t = wi;
      wi <<= 1,
      (wi & 3932160) === 0 && (wi = 262144),
      Ze = t
    }
    else Ze = 536870912;
    return t = Xe.current,
    t !== null && (t.flags |= 32),
    Ze
  }
  function Ue(t,
  e,
  i) {
    (t === kt && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (ns(t,
    0),
    Ta(t,
    At,
    Ze,
     ! 1)),
    Ft(t,
    i),
    ((Ot & 2) === 0 || t !== kt) && (t === kt && ((Ot & 2) === 0 && (ci |= i),
    Wt === 4 && Ta(t,
    At,
    Ze,
     ! 1)),
    Cn(t))
  }
  function tg(t,
  e,
  i) {
    if((Ot & 6) !== 0) throw Error(r(327));
    var o =  ! i && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Xt(t,
    e),
    c = o ? jS(t,
    e): Gu(t,
    e,
     ! 0),
    u = o;
    do {
      if(c === 0) {
        Ii &&  ! o && Ta(t,
        e,
        0,
         ! 1);
        break
      }
      else {
        if(i = t.current.alternate,
        u &&  ! NS(i)) {
          c = Gu(t,
          e,
           ! 1),
          u =  ! 1;
          continue
        }
        if(c === 2) {
          if(u = e,
          t.errorRecoveryDisabledLanes & u) var y = 0;
          else y = t.pendingLanes &  - 536870913,
          y = y !== 0 ? y: y & 536870912 ? 536870912: 0;
          if(y !== 0) {
            e = y;
            t:  {
              var b = t;
              c = uo;
              var T = b.current.memoizedState.isDehydrated;
              if(T && (ns(b,
              y).flags |= 256),
              y = Gu(b,
              y,
               ! 1),
              y !== 2) {
                if(Vu &&  ! T) {
                  b.errorRecoveryDisabledLanes |= u,
                  ci |= u,
                  c = 4;
                  break t
                }
                u = ke,
                ke = c,
                u !== null && (ke === null ? ke = u: ke.push.apply(ke,
                u))
              }
              c = y
            }
            if(u =  ! 1,
            c !== 2) continue
          }
        }
        if(c === 1) {
          ns(t,
          0),
          Ta(t,
          e,
          0,
           ! 0);
          break
        }
        t:  {
          switch(o = t,
          u = c,
          u) {
            case 0: case 1: throw Error(r(345));
            case 4: if((e & 4194048) !== e) break;
            case 6: Ta(o,
            e,
            Ze,
             ! Sa);
            break t;
            case 2: ke = null;
            break;
            case 3: case 5: break;
            default: throw Error(r(329))
          }
          if((e & 62914560) === e && (c = Ur + 300 - Te(),
          10 < c)) {
            if(Ta(o,
            e,
            Ze,
             ! Sa),
            ht(o,
            0,
             ! 0) !== 0) break t;
            $n = e,
            o.timeoutHandle = jg(eg.bind(null,
            o,
            i,
            ke,
            Pr,
            ku,
            e,
            Ze,
            ci,
            ts,
            Sa,
            u,
            "Throttled",
             - 0,
            0),
            c);
            break t
          }
          eg(o,
          i,
          ke,
          Pr,
          ku,
          e,
          Ze,
          ci,
          ts,
          Sa,
          u,
          null,
           - 0,
          0)
        }
      }
      break
    }
    while( ! 0);
    Cn(t)
  }
  function eg(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b,
  T,
  _,
  U,
  K,
  V,
  k) {
    if(t.timeoutHandle =  - 1,
    K = e.subtreeFlags,
    K & 8192 || (K & 16785408) === 16785408) {
      K =  {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages:  ! 0,
        waitingForViewTransition:  ! 1,
        unsuspend: Bn
      },
      Fp(e,
      u,
      K);
      var et = (u & 62914560) === u ? Ur - Te(): (u & 4194048) === u ? Jp - Te(): 0;
      if(et = h2(K,
      et),
      et !== null) {
        $n = u,
        t.cancelPendingCommit = et(cg.bind(null,
        t,
        e,
        u,
        i,
        o,
        c,
        y,
        b,
        T,
        U,
        K,
        null,
        V,
        k)),
        Ta(t,
        u,
        y,
         ! _);
        return
      }
    }
    cg(t,
    e,
    u,
    i,
    o,
    c,
    y,
    b,
    T)
  }
  function NS(t) {
    for(var e = t; ; ) {
      var i = e.tag;
      if((i === 0 || i === 11 || i === 15) && e.flags & 16384 && (i = e.updateQueue,
      i !== null && (i = i.stores,
      i !== null))) for(var o = 0; o < i.length; o++) {
        var c = i[o],
        u = c.getSnapshot;
        c = c.value;
        try {
          if( ! Ge(u(),
          c)) return ! 1
        }
        catch {
          return ! 1
        }
      }
      if(i = e.child,
      e.subtreeFlags & 16384 && i !== null) i.return = e,
      e = i;
      else {
        if(e === t) break;
        for(; e.sibling === null; ) {
          if(e.return === null || e.return === t) return ! 0;
          e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
      }
    }
    return ! 0
  }
  function Ta(t,
  e,
  i,
  o) {
    e &= ~ Bu,
    e &= ~ ci,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~ e,
    o && (t.warmLanes |= e),
    o = t.expirationTimes;
    for(var c = e; 0 < c; ) {
      var u = 31 - xe(c),
      y = 1 << u;
      o[u] =  - 1,
      c &= ~ y
    }
    i !== 0 && Ka(t,
    i,
    e)
  }
  function Yr() {
    return(Ot & 6) === 0 ? (ho(0),
     ! 1):  ! 0
  }
  function Yu() {
    if(Et !== null) {
      if(zt === 0) var t = Et.return;
      else t = Et,
      Pn = ti = null,
      iu(t),
      Ki = null,
      Zs = 0,
      t = Et;
      for(; t !== null; ) Op(t.alternate,
      t),
      t = t.return;
      Et = null
    }
  }
  function ns(t,
  e) {
    var i = t.timeoutHandle;
    i !==  - 1 && (t.timeoutHandle =  - 1,
    QS(i)),
    i = t.cancelPendingCommit,
    i !== null && (t.cancelPendingCommit = null,
    i()),
    $n = 0,
    Yu(),
    kt = t,
    Et = i = Un(t.current,
    null),
    At = e,
    zt = 0,
    Fe = null,
    Sa =  ! 1,
    Ii = Xt(t,
    e),
    Vu =  ! 1,
    ts = Ze = Bu = ci = Ea = Wt = 0,
    ke = uo = null,
    ku =  ! 1,
    (e & 8) !== 0 && (e |= e & 32);
    var o = t.entangledLanes;
    if(o !== 0) for(t = t.entanglements,
    o &= e; 0 < o; ) {
      var c = 31 - xe(o),
      u = 1 << c;
      e |= t[c],
      o &= ~ u
    }
    return Jn = e,
    cr(),
    i
  }
  function ng(t,
  e) {
    xt = null,
    O.H = no,
    e === Xi || e === yr ? (e = vm(),
    zt = 3): e === Kc ? (e = vm(),
    zt = 4): zt = e === bu ? 8: e !== null && typeof e == "object" && typeof e.then == "function" ? 6: 1,
    Fe = e,
    Et === null && (Wt = 1,
    jr(t,
    tn(e,
    t.current)))
  }
  function ag() {
    var t = Xe.current;
    return t === null ?  ! 0: (At & 4194048) === At ? sn === null: (At & 62914560) === At || (At & 536870912) !== 0 ? t === sn:  ! 1
  }
  function ig() {
    var t = O.H;
    return O.H = no,
    t === null ? no: t
  }
  function sg() {
    var t = O.A;
    return O.A = MS,
    t
  }
  function Gr() {
    Wt = 4,
    Sa || (At & 4194048) !== At && Xe.current !== null || (Ii =  ! 0),
    (Ea & 134217727) === 0 && (ci & 134217727) === 0 || kt === null || Ta(kt,
    At,
    Ze,
     ! 1)
  }
  function Gu(t,
  e,
  i) {
    var o = Ot;
    Ot |= 2;
    var c = ig(),
    u = sg();
    (kt !== t || At !== e) && (Pr = null,
    ns(t,
    e)),
    e =  ! 1;
    var y = Wt;
    t: do try {
      if(zt !== 0 && Et !== null) {
        var b = Et,
        T = Fe;
        switch(zt) {
          case 8: Yu(),
          y = 6;
          break t;
          case 3: case 2: case 9: case 6: Xe.current === null && (e =  ! 0);
          var _ = zt;
          if(zt = 0,
          Fe = null,
          as(t,
          b,
          T,
          _),
          i && Ii) {
            y = 0;
            break t
          }
          break;
          default: _ = zt,
          zt = 0,
          Fe = null,
          as(t,
          b,
          T,
          _)
        }
      }
      DS(),
      y = Wt;
      break
    }
    catch(U) {
      ng(t,
      U)
    }
    while( ! 0);
    return e && t.shellSuspendCounter++,
    Pn = ti = null,
    Ot = o,
    O.H = c,
    O.A = u,
    Et === null && (kt = null,
    At = 0,
    cr()),
    y
  }
  function DS() {
    for(; Et !== null; ) og(Et)
  }
  function jS(t,
  e) {
    var i = Ot;
    Ot |= 2;
    var o = ig(),
    c = sg();
    kt !== t || At !== e ? (Pr = null,
    Hr = Te() + 500,
    ns(t,
    e)): Ii = Xt(t,
    e);
    t: do try {
      if(zt !== 0 && Et !== null) {
        e = Et;
        var u = Fe;
        e: switch(zt) {
          case 1: zt = 0,
          Fe = null,
          as(t,
          e,
          u,
          1);
          break;
          case 2: case 9: if(gm(u)) {
            zt = 0,
            Fe = null,
            rg(e);
            break
          }
          e = function() {
            zt !== 2 && zt !== 9 || kt !== t || (zt = 7),
            Cn(t)
          },
          u.then(e,
          e);
          break t;
          case 3: zt = 7;
          break t;
          case 4: zt = 5;
          break t;
          case 7: gm(u) ? (zt = 0,
          Fe = null,
          rg(e)): (zt = 0,
          Fe = null,
          as(t,
          e,
          u,
          7));
          break;
          case 5: var y = null;
          switch(Et.tag) {
            case 26: y = Et.memoizedState;
            case 5: case 27: var b = Et;
            if(y ? Kg(y): b.stateNode.complete) {
              zt = 0,
              Fe = null;
              var T = b.sibling;
              if(T !== null) Et = T;
              else {
                var _ = b.return;
                _ !== null ? (Et = _,
                qr(_)): Et = null
              }
              break e
            }
          }
          zt = 0,
          Fe = null,
          as(t,
          e,
          u,
          5);
          break;
          case 6: zt = 0,
          Fe = null,
          as(t,
          e,
          u,
          6);
          break;
          case 8: Yu(),
          Wt = 6;
          break t;
          default: throw Error(r(462))
        }
      }
      OS();
      break
    }
    catch(U) {
      ng(t,
      U)
    }
    while( ! 0);
    return Pn = ti = null,
    O.H = o,
    O.A = c,
    Ot = i,
    Et !== null ? 0: (kt = null,
    At = 0,
    cr(),
    Wt)
  }
  function OS() {
    for(; Et !== null &&  ! Ae();
    ) og(Et)
  }
  function og(t) {
    var e = Dp(t.alternate,
    t,
    Jn);
    t.memoizedProps = t.pendingProps,
    e === null ? qr(t): Et = e
  }
  function rg(t) {
    var e = t,
    i = e.alternate;
    switch(e.tag) {
      case 15: case 0: e = Ap(i,
      e,
      e.pendingProps,
      e.type,
      void 0,
      At);
      break;
      case 11: e = Ap(i,
      e,
      e.pendingProps,
      e.type.render,
      e.ref,
      At);
      break;
      case 5: iu(e);
      default: Op(i,
      e),
      e = Et = sm(e,
      Jn),
      e = Dp(i,
      e,
      Jn)
    }
    t.memoizedProps = t.pendingProps,
    e === null ? qr(t): Et = e
  }
  function as(t,
  e,
  i,
  o) {
    Pn = ti = null,
    iu(e),
    Ki = null,
    Zs = 0;
    var c = e.return;
    try {
      if(bS(t,
      c,
      e,
      i,
      At)) {
        Wt = 1,
        jr(t,
        tn(i,
        t.current)),
        Et = null;
        return
      }
    }
    catch(u) {
      if(c !== null) throw Et = c,
      u;
      Wt = 1,
      jr(t,
      tn(i,
      t.current)),
      Et = null;
      return
    }
    e.flags & 32768 ? (Ct || o === 1 ? t =  ! 0: Ii || (At & 536870912) !== 0 ? t =  ! 1: (Sa = t =  ! 0,
    (o === 2 || o === 9 || o === 3 || o === 6) && (o = Xe.current,
    o !== null && o.tag === 13 && (o.flags |= 16384))),
    lg(e,
    t)): qr(e)
  }
  function qr(t) {
    var e = t;
    do {
      if((e.flags & 32768) !== 0) {
        lg(e,
        Sa);
        return
      }
      t = e.return;
      var i = wS(e.alternate,
      e,
      Jn);
      if(i !== null) {
        Et = i;
        return
      }
      if(e = e.sibling,
      e !== null) {
        Et = e;
        return
      }
      Et = e = t
    }
    while(e !== null);
    Wt === 0 && (Wt = 5)
  }
  function lg(t,
  e) {
    do {
      var i = AS(t.alternate,
      t);
      if(i !== null) {
        i.flags &= 32767,
        Et = i;
        return
      }
      if(i = t.return,
      i !== null && (i.flags |= 32768,
      i.subtreeFlags = 0,
      i.deletions = null),
       ! e && (t = t.sibling,
      t !== null)) {
        Et = t;
        return
      }
      Et = t = i
    }
    while(t !== null);
    Wt = 6,
    Et = null
  }
  function cg(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b,
  T) {
    t.cancelPendingCommit = null;
    do Xr();
    while(oe !== 0);
    if((Ot & 6) !== 0) throw Error(r(327));
    if(e !== null) {
      if(e === t.current) throw Error(r(177));
      if(u = e.lanes | e.childLanes,
      u |= jc,
      De(t,
      i,
      u,
      y,
      b,
      T),
      t === kt && (Et = kt = null,
      At = 0),
      es = e,
      Aa = t,
      $n = i,
      Uu = u,
      Hu = c,
      $p = o,
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
      t.callbackPriority = 0,
      VS(Ga,
      function() {
        return mg(),
        null
      })): (t.callbackNode = null,
      t.callbackPriority = 0),
      o = (e.flags & 13878) !== 0,
      (e.subtreeFlags & 13878) !== 0 || o) {
        o = O.T,
        O.T = null,
        c = Z.p,
        Z.p = 2,
        y = Ot,
        Ot |= 4;
        try {
          TS(t,
          e,
          i)
        }
        finally {
          Ot = y,
          Z.p = c,
          O.T = o
        }
      }
      oe = 1,
      ug(),
      fg(),
      dg()
    }
  }
  function ug() {
    if(oe === 1) {
      oe = 0;
      var t = Aa,
      e = es,
      i = (e.flags & 13878) !== 0;
      if((e.subtreeFlags & 13878) !== 0 || i) {
        i = O.T,
        O.T = null;
        var o = Z.p;
        Z.p = 2;
        var c = Ot;
        Ot |= 4;
        try {
          qp(e,
          t);
          var u = ef,
          y = Wh(t.containerInfo),
          b = u.focusedElem,
          T = u.selectionRange;
          if(y !== b && b && b.ownerDocument && Qh(b.ownerDocument.documentElement,
          b)) {
            if(T !== null && Cc(b)) {
              var _ = T.start,
              U = T.end;
              if(U === void 0 && (U = _),
              "selectionStart" in b) b.selectionStart = _,
              b.selectionEnd = Math.min(U,
              b.value.length);
              else {
                var K = b.ownerDocument || document,
                V = K && K.defaultView || window;
                if(V.getSelection) {
                  var k = V.getSelection(),
                  et = b.textContent.length,
                  ft = Math.min(T.start,
                  et),
                  Bt = T.end === void 0 ? ft: Math.min(T.end,
                  et);
                   ! k.extend && ft > Bt && (y = Bt,
                  Bt = ft,
                  ft = y);
                  var j = Zh(b,
                  ft),
                  N = Zh(b,
                  Bt);
                  if(j && N && (k.rangeCount !== 1 || k.anchorNode !== j.node || k.anchorOffset !== j.offset || k.focusNode !== N.node || k.focusOffset !== N.offset)) {
                    var z = K.createRange();
                    z.setStart(j.node,
                    j.offset),
                    k.removeAllRanges(),
                    ft > Bt ? (k.addRange(z),
                    k.extend(N.node,
                    N.offset)): (z.setEnd(N.node,
                    N.offset),
                    k.addRange(z))
                  }
                }
              }
            }
            for(K = [],
            k = b; k = k.parentNode; ) k.nodeType === 1 && K.push( {
              element: k,
              left: k.scrollLeft,
              top: k.scrollTop
            });
            for(typeof b.focus == "function" && b.focus(),
            b = 0;
            b < K.length;
            b++) {
              var G = K[b];
              G.element.scrollLeft = G.left,
              G.element.scrollTop = G.top
            }
          }
          al =  !  ! tf,
          ef = tf = null
        }
        finally {
          Ot = c,
          Z.p = o,
          O.T = i
        }
      }
      t.current = e,
      oe = 2
    }
  }
  function fg() {
    if(oe === 2) {
      oe = 0;
      var t = Aa,
      e = es,
      i = (e.flags & 8772) !== 0;
      if((e.subtreeFlags & 8772) !== 0 || i) {
        i = O.T,
        O.T = null;
        var o = Z.p;
        Z.p = 2;
        var c = Ot;
        Ot |= 4;
        try {
          Up(t,
          e.alternate,
          e)
        }
        finally {
          Ot = c,
          Z.p = o,
          O.T = i
        }
      }
      oe = 3
    }
  }
  function dg() {
    if(oe === 4 || oe === 3) {
      oe = 0,
      oa();
      var t = Aa,
      e = es,
      i = $n,
      o = $p;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? oe = 5: (oe = 0,
      es = Aa = null,
      hg(t,
      t.pendingLanes));
      var c = t.pendingLanes;
      if(c === 0 && (wa = null),
      hn(i),
      e = e.stateNode,
      Ce && typeof Ce.onCommitFiberRoot == "function") try {
        Ce.onCommitFiberRoot(qa,
        e,
        void 0,
        (e.current.flags & 128) === 128)
      }
      catch {
      }
      if(o !== null) {
        e = O.T,
        c = Z.p,
        Z.p = 2,
        O.T = null;
        try {
          for(var u = t.onRecoverableError,
          y = 0; y < o.length; y++) {
            var b = o[y];
            u(b.value,
             {
              componentStack: b.stack
            })
          }
        }
        finally {
          O.T = e,
          Z.p = c
        }
      }($n & 3) !== 0 && Xr(),
      Cn(t),
      c = t.pendingLanes,
      (i & 261930) !== 0 && (c & 42) !== 0 ? t === Pu ? fo++: (fo = 0,
      Pu = t): fo = 0,
      ho(0)
    }
  }
  function hg(t,
  e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
    e != null && (t.pooledCache = null,
    Ks(e)))
  }
  function Xr() {
    return ug(),
    fg(),
    dg(),
    mg()
  }
  function mg() {
    if(oe !== 5) return ! 1;
    var t = Aa,
    e = Uu;
    Uu = 0;
    var i = hn($n),
    o = O.T,
    c = Z.p;
    try {
      Z.p = 32 > i ? 32: i,
      O.T = null,
      i = Hu,
      Hu = null;
      var u = Aa,
      y = $n;
      if(oe = 0,
      es = Aa = null,
      $n = 0,
      (Ot & 6) !== 0) throw Error(r(331));
      var b = Ot;
      if(Ot |= 4,
      Qp(u.current),
      Kp(u,
      u.current,
      y,
      i),
      Ot = b,
      ho(0,
       ! 1),
      Ce && typeof Ce.onPostCommitFiberRoot == "function") try {
        Ce.onPostCommitFiberRoot(qa,
        u)
      }
      catch {
      }
      return ! 0
    }
    finally {
      Z.p = c,
      O.T = o,
      hg(t,
      e)
    }
  }
  function pg(t,
  e,
  i) {
    e = tn(i,
    e),
    e = xu(t.stateNode,
    e,
    2),
    t = ya(t,
    e,
    2),
    t !== null && (Ft(t,
    2),
    Cn(t))
  }
  function _t(t,
  e,
  i) {
    if(t.tag === 3) pg(t,
    t,
    i);
    else for(; e !== null; ) {
      if(e.tag === 3) {
        pg(e,
        t,
        i);
        break
      }
      else if(e.tag === 1) {
        var o = e.stateNode;
        if(typeof e.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (wa === null ||  ! wa.has(o))) {
          t = tn(i,
          t),
          i = gp(2),
          o = ya(e,
          i,
          2),
          o !== null && (yp(i,
          o,
          e,
          t),
          Ft(o,
          2),
          Cn(o));
          break
        }
      }
      e = e.return
    }
  }
  function qu(t,
  e,
  i) {
    var o = t.pingCache;
    if(o === null) {
      o = t.pingCache = new RS;
      var c = new Set;
      o.set(e,
      c)
    }
    else c = o.get(e),
    c === void 0 && (c = new Set,
    o.set(e,
    c));
    c.has(i) || (Vu =  ! 0,
    c.add(i),
    t = zS.bind(null,
    t,
    e,
    i),
    e.then(t,
    t))
  }
  function zS(t,
  e,
  i) {
    var o = t.pingCache;
    o !== null && o.delete(e),
    t.pingedLanes |= t.suspendedLanes & i,
    t.warmLanes &= ~ i,
    kt === t && (At & i) === i && (Wt === 4 || Wt === 3 && (At & 62914560) === At && 300 > Te() - Ur ? (Ot & 2) === 0 && ns(t,
    0): Bu |= i,
    ts === At && (ts = 0)),
    Cn(t)
  }
  function gg(t,
  e) {
    e === 0 && (e = be()),
    t = Ja(t,
    e),
    t !== null && (Ft(t,
    e),
    Cn(t))
  }
  function _S(t) {
    var e = t.memoizedState,
    i = 0;
    e !== null && (i = e.retryLane),
    gg(t,
    i)
  }
  function LS(t,
  e) {
    var i = 0;
    switch(t.tag) {
      case 31: case 13: var o = t.stateNode,
      c = t.memoizedState;
      c !== null && (i = c.retryLane);
      break;
      case 19: o = t.stateNode;
      break;
      case 22: o = t.stateNode._retryCache;
      break;
      default: throw Error(r(314))
    }
    o !== null && o.delete(e),
    gg(t,
    i)
  }
  function VS(t,
  e) {
    return Ns(t,
    e)
  }
  var Kr = null,
  is = null,
  Xu =  ! 1,
  Fr =  ! 1,
  Ku =  ! 1,
  Ca = 0;
  function Cn(t) {
    t !== is && t.next === null && (is === null ? Kr = is = t: is = is.next = t),
    Fr =  ! 0,
    Xu || (Xu =  ! 0,
    kS())
  }
  function ho(t,
  e) {
    if( ! Ku && Fr) {
      Ku =  ! 0;
      do for(var i =  ! 1,
      o = Kr; o !== null; ) {
        if(t !== 0) {
          var c = o.pendingLanes;
          if(c === 0) var u = 0;
          else {
            var y = o.suspendedLanes,
            b = o.pingedLanes;
            u = (1 << 31 - xe(42 | t) + 1) - 1,
            u &= c & ~(y & ~ b),
            u = u & 201326741 ? u & 201326741 | 1: u ? u | 2: 0
          }
          u !== 0 && (i =  ! 0,
          bg(o,
          u))
        }
        else u = At,
        u = ht(o,
        o === kt ? u: 0,
        o.cancelPendingCommit !== null || o.timeoutHandle !==  - 1),
        (u & 3) === 0 || Xt(o,
        u) || (i =  ! 0,
        bg(o,
        u));
        o = o.next
      }
      while(i);
      Ku =  ! 1
    }
  }
  function BS() {
    yg()
  }
  function yg() {
    Fr = Xu =  ! 1;
    var t = 0;
    Ca !== 0 && ZS() && (t = Ca);
    for(var e = Te(),
    i = null,
    o = Kr;
    o !== null;
    ) {
      var c = o.next,
      u = vg(o,
      e);
      u === 0 ? (o.next = null,
      i === null ? Kr = c: i.next = c,
      c === null && (is = i)): (i = o,
      (t !== 0 || (u & 3) !== 0) && (Fr =  ! 0)),
      o = c
    }
    oe !== 0 && oe !== 5 || ho(t),
    Ca !== 0 && (Ca = 0)
  }
  function vg(t,
  e) {
    for(var i = t.suspendedLanes,
    o = t.pingedLanes,
    c = t.expirationTimes,
    u = t.pendingLanes &  - 62914561; 0 < u; ) {
      var y = 31 - xe(u),
      b = 1 << y,
      T = c[y];
      T ===  - 1 ? ((b & i) === 0 || (b & o) !== 0) && (c[y] = ce(b,
      e)): T <= e && (t.expiredLanes |= b),
      u &= ~ b
    }
    if(e = kt,
    i = At,
    i = ht(t,
    t === e ? i: 0,
    t.cancelPendingCommit !== null || t.timeoutHandle !==  - 1),
    o = t.callbackNode,
    i === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && Ds(o),
    t.callbackNode = null,
    t.callbackPriority = 0;
    if((i & 3) === 0 || Xt(t,
    i)) {
      if(e = i &  - i,
      e === t.callbackPriority) return e;
      switch(o !== null && Ds(o),
      hn(i)) {
        case 2: case 8: i = Wo;
        break;
        case 32: i = Ga;
        break;
        case 268435456: i = Ln;
        break;
        default: i = Ga
      }
      return o = xg.bind(null,
      t),
      i = Ns(i,
      o),
      t.callbackPriority = e,
      t.callbackNode = i,
      e
    }
    return o !== null && o !== null && Ds(o),
    t.callbackPriority = 2,
    t.callbackNode = null,
    2
  }
  function xg(t,
  e) {
    if(oe !== 0 && oe !== 5) return t.callbackNode = null,
    t.callbackPriority = 0,
    null;
    var i = t.callbackNode;
    if(Xr() && t.callbackNode !== i) return null;
    var o = At;
    return o = ht(t,
    t === kt ? o: 0,
    t.cancelPendingCommit !== null || t.timeoutHandle !==  - 1),
    o === 0 ? null: (tg(t,
    o,
    e),
    vg(t,
    Te()),
    t.callbackNode != null && t.callbackNode === i ? xg.bind(null,
    t): null)
  }
  function bg(t,
  e) {
    if(Xr()) return null;
    tg(t,
    e,
     ! 0)
  }
  function kS() {
    WS(function() {
      (Ot & 6) !== 0 ? Ns(Ya,
      BS): yg()
    })
  }
  function Fu() {
    if(Ca === 0) {
      var t = Gi;
      t === 0 && (t = Ei,
      Ei <<= 1,
      (Ei & 261888) === 0 && (Ei = 256)),
      Ca = t
    }
    return Ca
  }
  function Sg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null: typeof t == "function" ? t: er("" + t)
  }
  function Eg(t,
  e) {
    var i = e.ownerDocument.createElement("input");
    return i.name = e.name,
    i.value = e.value,
    t.id && i.setAttribute("form",
    t.id),
    e.parentNode.insertBefore(i,
    e),
    t = new FormData(t),
    i.parentNode.removeChild(i),
    t
  }
  function US(t,
  e,
  i,
  o,
  c) {
    if(e === "submit" && i && i.stateNode === c) {
      var u = Sg((c[ze] || null).action),
      y = o.submitter;
      y && (e = (e = y[ze] || null) ? Sg(e.formAction): y.getAttribute("formAction"),
      e !== null && (u = e,
      y = null));
      var b = new sr("action",
      "action",
      null,
      o,
      c);
      t.push( {
        event: b,
        listeners: [ {
          instance: null,
          listener: function() {
            if(o.defaultPrevented) {
              if(Ca !== 0) {
                var T = y ? Eg(c,
                y): new FormData(c);
                hu(i,
                 {
                  pending:  ! 0,
                  data: T,
                  method: c.method,
                  action: u
                },
                null,
                T)
              }
            }
            else typeof u == "function" && (b.preventDefault(),
            T = y ? Eg(c,
            y): new FormData(c),
            hu(i,
             {
              pending:  ! 0,
              data: T,
              method: c.method,
              action: u
            },
            u,
            T))
          },
          currentTarget: c
        }]
      })
    }
  }
  for(var Zu = 0; Zu < Dc.length; Zu++) {
    var Qu = Dc[Zu],
    HS = Qu.toLowerCase(),
    PS = Qu[0].toUpperCase() + Qu.slice(1);
    mn(HS,
    "on" + PS)
  }
  mn(Ih,
  "onAnimationEnd"),
  mn(tm,
  "onAnimationIteration"),
  mn(em,
  "onAnimationStart"),
  mn("dblclick",
  "onDoubleClick"),
  mn("focusin",
  "onFocus"),
  mn("focusout",
  "onBlur"),
  mn(aS,
  "onTransitionRun"),
  mn(iS,
  "onTransitionStart"),
  mn(sS,
  "onTransitionCancel"),
  mn(nm,
  "onTransitionEnd"),
  Ni("onMouseEnter",
  ["mouseout",
  "mouseover"]),
  Ni("onMouseLeave",
  ["mouseout",
  "mouseover"]),
  Ni("onPointerEnter",
  ["pointerout",
  "pointerover"]),
  Ni("onPointerLeave",
  ["pointerout",
  "pointerover"]),
  Fa("onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")),
  Fa("onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
  Fa("onBeforeInput",
  ["compositionend",
  "keypress",
  "textInput",
  "paste"]),
  Fa("onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")),
  Fa("onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
  Fa("onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  YS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));
  function wg(t,
  e) {
    e = (e & 4) !== 0;
    for(var i = 0; i < t.length; i++) {
      var o = t[i],
      c = o.event;
      o = o.listeners;
      t:  {
        var u = void 0;
        if(e) for(var y = o.length - 1; 0 <= y; y--) {
          var b = o[y],
          T = b.instance,
          _ = b.currentTarget;
          if(b = b.listener,
          T !== u && c.isPropagationStopped()) break t;
          u = b,
          c.currentTarget = _;
          try {
            u(c)
          }
          catch(U) {
            lr(U)
          }
          c.currentTarget = null,
          u = T
        }
        else for(y = 0; y < o.length; y++) {
          if(b = o[y],
          T = b.instance,
          _ = b.currentTarget,
          b = b.listener,
          T !== u && c.isPropagationStopped()) break t;
          u = b,
          c.currentTarget = _;
          try {
            u(c)
          }
          catch(U) {
            lr(U)
          }
          c.currentTarget = null,
          u = T
        }
      }
    }
  }
  function wt(t,
  e) {
    var i = e[lc];
    i === void 0 && (i = e[lc] = new Set);
    var o = t + "__bubble";
    i.has(o) || (Ag(e,
    t,
    2,
     ! 1),
    i.add(o))
  }
  function Wu(t,
  e,
  i) {
    var o = 0;
    e && (o |= 4),
    Ag(i,
    t,
    o,
    e)
  }
  var Zr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ju(t) {
    if( ! t[Zr]) {
      t[Zr] =  ! 0,
      yh.forEach(function(i) {
        i !== "selectionchange" && (YS.has(i) || Wu(i,
         ! 1,
        t),
        Wu(i,
         ! 0,
        t))
      });
      var e = t.nodeType === 9 ? t: t.ownerDocument;
      e === null || e[Zr] || (e[Zr] =  ! 0,
      Wu("selectionchange",
       ! 1,
      e))
    }
  }
  function Ag(t,
  e,
  i,
  o) {
    switch(Ig(e)) {
      case 2: var c = g2;
      break;
      case 8: c = y2;
      break;
      default: c = hf
    }
    i = c.bind(null,
    e,
    i,
    t),
    c = void 0,
     ! yc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (c =  ! 0),
    o ? c !== void 0 ? t.addEventListener(e,
    i,
     {
      capture:  ! 0,
      passive: c
    }): t.addEventListener(e,
    i,
     ! 0): c !== void 0 ? t.addEventListener(e,
    i,
     {
      passive: c
    }): t.addEventListener(e,
    i,
     ! 1)
  }
  function $u(t,
  e,
  i,
  o,
  c) {
    var u = o;
    if((e & 1) === 0 && (e & 2) === 0 && o !== null) t: for(; ; ) {
      if(o === null) return;
      var y = o.tag;
      if(y === 3 || y === 4) {
        var b = o.stateNode.containerInfo;
        if(b === c) break;
        if(y === 4) for(y = o.return; y !== null; ) {
          var T = y.tag;
          if((T === 3 || T === 4) && y.stateNode.containerInfo === c) return;
          y = y.return
        }
        for(; b !== null; ) {
          if(y = Ci(b),
          y === null) return;
          if(T = y.tag,
          T === 5 || T === 6 || T === 26 || T === 27) {
            o = u = y;
            continue t
          }
          b = b.parentNode
        }
      }
      o = o.return
    }
    Nh(function() {
      var _ = u,
      U = pc(i),
      K = [];
      t:  {
        var V = am.get(t);
        if(V !== void 0) {
          var k = sr,
          et = t;
          switch(t) {
            case "keypress": if(ar(i) === 0) break t;
            case "keydown": case "keyup": k = Lb;
            break;
            case "focusin": et = "focus",
            k = Sc;
            break;
            case "focusout": et = "blur",
            k = Sc;
            break;
            case "beforeblur": case "afterblur": k = Sc;
            break;
            case "click": if(i.button === 2) break t;
            case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": k = Oh;
            break;
            case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": k = wb;
            break;
            case "touchcancel": case "touchend": case "touchmove": case "touchstart": k = kb;
            break;
            case Ih: case tm: case em: k = Cb;
            break;
            case nm: k = Hb;
            break;
            case "scroll": case "scrollend": k = Sb;
            break;
            case "wheel": k = Yb;
            break;
            case "copy": case "cut": case "paste": k = Rb;
            break;
            case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": k = _h;
            break;
            case "toggle": case "beforetoggle": k = qb
          }
          var ft = (e & 4) !== 0,
          Bt =  ! ft && (t === "scroll" || t === "scrollend"),
          j = ft ? V !== null ? V + "Capture": null: V;
          ft = [];
          for(var N = _,
          z; N !== null; ) {
            var G = N;
            if(z = G.stateNode,
            G = G.tag,
            G !== 5 && G !== 26 && G !== 27 || z === null || j === null || (G = Ls(N,
            j),
            G != null && ft.push(po(N,
            G,
            z))),
            Bt) break;
            N = N.return
          }
          0 < ft.length && (V = new k(V,
          et,
          null,
          i,
          U),
          K.push( {
            event: V,
            listeners: ft
          }))
        }
      }
      if((e & 7) === 0) {
        t:  {
          if(V = t === "mouseover" || t === "pointerover",
          k = t === "mouseout" || t === "pointerout",
          V && i !== mc && (et = i.relatedTarget || i.fromElement) && (Ci(et) || et[Ti])) break t;
          if((k || V) && (V = U.window === U ? U: (V = U.ownerDocument) ? V.defaultView || V.parentWindow: window,
          k ? (et = i.relatedTarget || i.toElement,
          k = _,
          et = et ? Ci(et): null,
          et !== null && (Bt = f(et),
          ft = et.tag,
          et !== Bt || ft !== 5 && ft !== 27 && ft !== 6) && (et = null)): (k = null,
          et = _),
          k !== et)) {
            if(ft = Oh,
            G = "onMouseLeave",
            j = "onMouseEnter",
            N = "mouse",
            (t === "pointerout" || t === "pointerover") && (ft = _h,
            G = "onPointerLeave",
            j = "onPointerEnter",
            N = "pointer"),
            Bt = k == null ? V: _s(k),
            z = et == null ? V: _s(et),
            V = new ft(G,
            N + "leave",
            k,
            i,
            U),
            V.target = Bt,
            V.relatedTarget = z,
            G = null,
            Ci(U) === _ && (ft = new ft(j,
            N + "enter",
            et,
            i,
            U),
            ft.target = z,
            ft.relatedTarget = Bt,
            G = ft),
            Bt = G,
            k && et) e:  {
              for(ft = GS,
              j = k,
              N = et,
              z = 0,
              G = j; G; G = ft(G)) z++;
              G = 0;
              for(var lt = N; lt; lt = ft(lt)) G++;
              for(; 0 < z - G; ) j = ft(j),
              z--;
              for(; 0 < G - z; ) N = ft(N),
              G--;
              for(; z--; ) {
                if(j === N || N !== null && j === N.alternate) {
                  ft = j;
                  break e
                }
                j = ft(j),
                N = ft(N)
              }
              ft = null
            }
            else ft = null;
            k !== null && Tg(K,
            V,
            k,
            ft,
             ! 1),
            et !== null && Bt !== null && Tg(K,
            Bt,
            et,
            ft,
             ! 0)
          }
        }
        t:  {
          if(V = _ ? _s(_): window,
          k = V.nodeName && V.nodeName.toLowerCase(),
          k === "select" || k === "input" && V.type === "file") var Dt = Yh;
          else if(Hh(V)) if(Gh) Dt = tS;
          else {
            Dt = $b;
            var st = Jb
          }
          else k = V.nodeName,
           ! k || k.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? _ && hc(_.elementType) && (Dt = Yh): Dt = Ib;
          if(Dt && (Dt = Dt(t,
          _))) {
            Ph(K,
            Dt,
            i,
            U);
            break t
          }
          st && st(t,
          V,
          _),
          t === "focusout" && _ && V.type === "number" && _.memoizedProps.value != null && dc(V,
          "number",
          V.value)
        }
        switch(st = _ ? _s(_): window,
        t) {
          case "focusin": (Hh(st) || st.contentEditable === "true") && (Li = st,
          Mc = _,
          Gs = null);
          break;
          case "focusout": Gs = Mc = Li = null;
          break;
          case "mousedown": Rc =  ! 0;
          break;
          case "contextmenu": case "mouseup": case "dragend": Rc =  ! 1,
          Jh(K,
          i,
          U);
          break;
          case "selectionchange": if(nS) break;
          case "keydown": case "keyup": Jh(K,
          i,
          U)
        }
        var bt;
        if(wc) t:  {
          switch(t) {
            case "compositionstart": var Tt = "onCompositionStart";
            break t;
            case "compositionend": Tt = "onCompositionEnd";
            break t;
            case "compositionupdate": Tt = "onCompositionUpdate";
            break t
          }
          Tt = void 0
        }
        else _i ? kh(t,
        i) && (Tt = "onCompositionEnd"): t === "keydown" && i.keyCode === 229 && (Tt = "onCompositionStart");
        Tt && (Lh && i.locale !== "ko" && (_i || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && _i && (bt = Dh()): (ua = U,
        vc = "value" in ua ? ua.value: ua.textContent,
        _i =  ! 0)),
        st = Qr(_,
        Tt),
        0 < st.length && (Tt = new zh(Tt,
        t,
        null,
        i,
        U),
        K.push( {
          event: Tt,
          listeners: st
        }),
        bt ? Tt.data = bt: (bt = Uh(i),
        bt !== null && (Tt.data = bt)))),
        (bt = Kb ? Fb(t,
        i): Zb(t,
        i)) && (Tt = Qr(_,
        "onBeforeInput"),
        0 < Tt.length && (st = new zh("onBeforeInput",
        "beforeinput",
        null,
        i,
        U),
        K.push( {
          event: st,
          listeners: Tt
        }),
        st.data = bt)),
        US(K,
        t,
        _,
        i,
        U)
      }
      wg(K,
      e)
    })
  }
  function po(t,
  e,
  i) {
    return {
      instance: t,
      listener: e,
      currentTarget: i
    }
  }
  function Qr(t,
  e) {
    for(var i = e + "Capture",
    o = []; t !== null; ) {
      var c = t,
      u = c.stateNode;
      if(c = c.tag,
      c !== 5 && c !== 26 && c !== 27 || u === null || (c = Ls(t,
      i),
      c != null && o.unshift(po(t,
      c,
      u)),
      c = Ls(t,
      e),
      c != null && o.push(po(t,
      c,
      u))),
      t.tag === 3) return o;
      t = t.return
    }
    return[]
  }
  function GS(t) {
    if(t === null) return null;
    do t = t.return;
    while(t && t.tag !== 5 && t.tag !== 27);
    return t || null
  }
  function Tg(t,
  e,
  i,
  o,
  c) {
    for(var u = e._reactName,
    y = []; i !== null && i !== o; ) {
      var b = i,
      T = b.alternate,
      _ = b.stateNode;
      if(b = b.tag,
      T !== null && T === o) break;
      b !== 5 && b !== 26 && b !== 27 || _ === null || (T = _,
      c ? (_ = Ls(i,
      u),
      _ != null && y.unshift(po(i,
      _,
      T))): c || (_ = Ls(i,
      u),
      _ != null && y.push(po(i,
      _,
      T)))),
      i = i.return
    }
    y.length !== 0 && t.push( {
      event: e,
      listeners: y
    })
  }
  var qS = /\r\n?/g,
  XS = /\u0000|\uFFFD/g;
  function Cg(t) {
    return(typeof t == "string" ? t: "" + t).replace(qS,
    `
`).replace(XS,
    "")
  }
  function Mg(t,
  e) {
    return e = Cg(e),
    Cg(t) === e
  }
  function Vt(t,
  e,
  i,
  o,
  c,
  u) {
    switch(i) {
      case "children": typeof o == "string" ? e === "body" || e === "textarea" && o === "" || ji(t,
      o): (typeof o == "number" || typeof o == "bigint") && e !== "body" && ji(t,
      "" + o);
      break;
      case "className": Io(t,
      "class",
      o);
      break;
      case "tabIndex": Io(t,
      "tabindex",
      o);
      break;
      case "dir": case "role": case "viewBox": case "width": case "height": Io(t,
      i,
      o);
      break;
      case "style": Mh(t,
      o,
      u);
      break;
      case "data": if(e !== "object") {
        Io(t,
        "data",
        o);
        break
      }
      case "src": case "href": if(o === "" && (e !== "a" || i !== "href")) {
        t.removeAttribute(i);
        break
      }
      if(o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
        t.removeAttribute(i);
        break
      }
      o = er("" + o),
      t.setAttribute(i,
      o);
      break;
      case "action": case "formAction": if(typeof o == "function") {
        t.setAttribute(i,
        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break
      }
      else typeof u == "function" && (i === "formAction" ? (e !== "input" && Vt(t,
      e,
      "name",
      c.name,
      c,
      null),
      Vt(t,
      e,
      "formEncType",
      c.formEncType,
      c,
      null),
      Vt(t,
      e,
      "formMethod",
      c.formMethod,
      c,
      null),
      Vt(t,
      e,
      "formTarget",
      c.formTarget,
      c,
      null)): (Vt(t,
      e,
      "encType",
      c.encType,
      c,
      null),
      Vt(t,
      e,
      "method",
      c.method,
      c,
      null),
      Vt(t,
      e,
      "target",
      c.target,
      c,
      null)));
      if(o == null || typeof o == "symbol" || typeof o == "boolean") {
        t.removeAttribute(i);
        break
      }
      o = er("" + o),
      t.setAttribute(i,
      o);
      break;
      case "onClick": o != null && (t.onclick = Bn);
      break;
      case "onScroll": o != null && wt("scroll",
      t);
      break;
      case "onScrollEnd": o != null && wt("scrollend",
      t);
      break;
      case "dangerouslySetInnerHTML": if(o != null) {
        if(typeof o != "object" ||  ! ("__html" in o)) throw Error(r(61));
        if(i = o.__html,
        i != null) {
          if(c.children != null) throw Error(r(60));
          t.innerHTML = i
        }
      }
      break;
      case "multiple": t.multiple = o && typeof o != "function" && typeof o != "symbol";
      break;
      case "muted": t.muted = o && typeof o != "function" && typeof o != "symbol";
      break;
      case "suppressContentEditableWarning": case "suppressHydrationWarning": case "defaultValue": case "defaultChecked": case "innerHTML": case "ref": break;
      case "autoFocus": break;
      case "xlinkHref": if(o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
        t.removeAttribute("xlink:href");
        break
      }
      i = er("" + o),
      t.setAttributeNS("http://www.w3.org/1999/xlink",
      "xlink:href",
      i);
      break;
      case "contentEditable": case "spellCheck": case "draggable": case "value": case "autoReverse": case "externalResourcesRequired": case "focusable": case "preserveAlpha": o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i,
      "" + o): t.removeAttribute(i);
      break;
      case "inert": case "allowFullScreen": case "async": case "autoPlay": case "controls": case "default": case "defer": case "disabled": case "disablePictureInPicture": case "disableRemotePlayback": case "formNoValidate": case "hidden": case "loop": case "noModule": case "noValidate": case "open": case "playsInline": case "readOnly": case "required": case "reversed": case "scoped": case "seamless": case "itemScope": o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i,
      ""): t.removeAttribute(i);
      break;
      case "capture": case "download": o ===  ! 0 ? t.setAttribute(i,
      ""): o !==  ! 1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i,
      o): t.removeAttribute(i);
      break;
      case "cols": case "rows": case "size": case "span": o != null && typeof o != "function" && typeof o != "symbol" &&  ! isNaN(o) && 1 <= o ? t.setAttribute(i,
      o): t.removeAttribute(i);
      break;
      case "rowSpan": case "start": o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(i): t.setAttribute(i,
      o);
      break;
      case "popover": wt("beforetoggle",
      t),
      wt("toggle",
      t),
      $o(t,
      "popover",
      o);
      break;
      case "xlinkActuate": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:actuate",
      o);
      break;
      case "xlinkArcrole": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:arcrole",
      o);
      break;
      case "xlinkRole": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:role",
      o);
      break;
      case "xlinkShow": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:show",
      o);
      break;
      case "xlinkTitle": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:title",
      o);
      break;
      case "xlinkType": Vn(t,
      "http://www.w3.org/1999/xlink",
      "xlink:type",
      o);
      break;
      case "xmlBase": Vn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:base",
      o);
      break;
      case "xmlLang": Vn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:lang",
      o);
      break;
      case "xmlSpace": Vn(t,
      "http://www.w3.org/XML/1998/namespace",
      "xml:space",
      o);
      break;
      case "is": $o(t,
      "is",
      o);
      break;
      case "innerText": case "textContent": break;
      default: ( ! (2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = xb.get(i) || i,
      $o(t,
      i,
      o))
    }
  }
  function Iu(t,
  e,
  i,
  o,
  c,
  u) {
    switch(i) {
      case "style": Mh(t,
      o,
      u);
      break;
      case "dangerouslySetInnerHTML": if(o != null) {
        if(typeof o != "object" ||  ! ("__html" in o)) throw Error(r(61));
        if(i = o.__html,
        i != null) {
          if(c.children != null) throw Error(r(60));
          t.innerHTML = i
        }
      }
      break;
      case "children": typeof o == "string" ? ji(t,
      o): (typeof o == "number" || typeof o == "bigint") && ji(t,
      "" + o);
      break;
      case "onScroll": o != null && wt("scroll",
      t);
      break;
      case "onScrollEnd": o != null && wt("scrollend",
      t);
      break;
      case "onClick": o != null && (t.onclick = Bn);
      break;
      case "suppressContentEditableWarning": case "suppressHydrationWarning": case "innerHTML": case "ref": break;
      case "innerText": case "textContent": break;
      default: if( ! vh.hasOwnProperty(i)) t:  {
        if(i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"),
        e = i.slice(2,
        c ? i.length - 7: void 0),
        u = t[ze] || null,
        u = u != null ? u[i]: null,
        typeof u == "function" && t.removeEventListener(e,
        u,
        c),
        typeof o == "function")) {
          typeof u != "function" && u !== null && (i in t ? t[i] = null: t.hasAttribute(i) && t.removeAttribute(i)),
          t.addEventListener(e,
          o,
          c);
          break t
        }
        i in t ? t[i] = o: o ===  ! 0 ? t.setAttribute(i,
        ""): $o(t,
        i,
        o)
      }
    }
  }
  function ge(t,
  e,
  i) {
    switch(e) {
      case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break;
      case "img": wt("error",
      t),
      wt("load",
      t);
      var o =  ! 1,
      c =  ! 1,
      u;
      for(u in i) if(i.hasOwnProperty(u)) {
        var y = i[u];
        if(y != null) switch(u) {
          case "src": o =  ! 0;
          break;
          case "srcSet": c =  ! 0;
          break;
          case "children": case "dangerouslySetInnerHTML": throw Error(r(137,
          e));
          default: Vt(t,
          e,
          u,
          y,
          i,
          null)
        }
      }
      c && Vt(t,
      e,
      "srcSet",
      i.srcSet,
      i,
      null),
      o && Vt(t,
      e,
      "src",
      i.src,
      i,
      null);
      return;
      case "input": wt("invalid",
      t);
      var b = u = y = c = null,
      T = null,
      _ = null;
      for(o in i) if(i.hasOwnProperty(o)) {
        var U = i[o];
        if(U != null) switch(o) {
          case "name": c = U;
          break;
          case "type": y = U;
          break;
          case "checked": T = U;
          break;
          case "defaultChecked": _ = U;
          break;
          case "value": u = U;
          break;
          case "defaultValue": b = U;
          break;
          case "children": case "dangerouslySetInnerHTML": if(U != null) throw Error(r(137,
          e));
          break;
          default: Vt(t,
          e,
          o,
          U,
          i,
          null)
        }
      }
      wh(t,
      u,
      b,
      T,
      _,
      y,
      c,
       ! 1);
      return;
      case "select": wt("invalid",
      t),
      o = y = u = null;
      for(c in i) if(i.hasOwnProperty(c) && (b = i[c],
      b != null)) switch(c) {
        case "value": u = b;
        break;
        case "defaultValue": y = b;
        break;
        case "multiple": o = b;
        default: Vt(t,
        e,
        c,
        b,
        i,
        null)
      }
      e = u,
      i = y,
      t.multiple =  !  ! o,
      e != null ? Di(t,
       !  ! o,
      e,
       ! 1): i != null && Di(t,
       !  ! o,
      i,
       ! 0);
      return;
      case "textarea": wt("invalid",
      t),
      u = c = o = null;
      for(y in i) if(i.hasOwnProperty(y) && (b = i[y],
      b != null)) switch(y) {
        case "value": o = b;
        break;
        case "defaultValue": c = b;
        break;
        case "children": u = b;
        break;
        case "dangerouslySetInnerHTML": if(b != null) throw Error(r(91));
        break;
        default: Vt(t,
        e,
        y,
        b,
        i,
        null)
      }
      Th(t,
      o,
      c,
      u);
      return;
      case "option": for(T in i) i.hasOwnProperty(T) && (o = i[T],
      o != null) && (T === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol": Vt(t,
      e,
      T,
      o,
      i,
      null));
      return;
      case "dialog": wt("beforetoggle",
      t),
      wt("toggle",
      t),
      wt("cancel",
      t),
      wt("close",
      t);
      break;
      case "iframe": case "object": wt("load",
      t);
      break;
      case "video": case "audio": for(o = 0; o < mo.length; o++) wt(mo[o],
      t);
      break;
      case "image": wt("error",
      t),
      wt("load",
      t);
      break;
      case "details": wt("toggle",
      t);
      break;
      case "embed": case "source": case "link": wt("error",
      t),
      wt("load",
      t);
      case "area": case "base": case "br": case "col": case "hr": case "keygen": case "meta": case "param": case "track": case "wbr": case "menuitem": for(_ in i) if(i.hasOwnProperty(_) && (o = i[_],
      o != null)) switch(_) {
        case "children": case "dangerouslySetInnerHTML": throw Error(r(137,
        e));
        default: Vt(t,
        e,
        _,
        o,
        i,
        null)
      }
      return;
      default: if(hc(e)) {
        for(U in i) i.hasOwnProperty(U) && (o = i[U],
        o !== void 0 && Iu(t,
        e,
        U,
        o,
        i,
        void 0));
        return
      }
    }
    for(b in i) i.hasOwnProperty(b) && (o = i[b],
    o != null && Vt(t,
    e,
    b,
    o,
    i,
    null))
  }
  function KS(t,
  e,
  i,
  o) {
    switch(e) {
      case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break;
      case "input": var c = null,
      u = null,
      y = null,
      b = null,
      T = null,
      _ = null,
      U = null;
      for(k in i) {
        var K = i[k];
        if(i.hasOwnProperty(k) && K != null) switch(k) {
          case "checked": break;
          case "value": break;
          case "defaultValue": T = K;
          default: o.hasOwnProperty(k) || Vt(t,
          e,
          k,
          null,
          o,
          K)
        }
      }
      for(var V in o) {
        var k = o[V];
        if(K = i[V],
        o.hasOwnProperty(V) && (k != null || K != null)) switch(V) {
          case "type": u = k;
          break;
          case "name": c = k;
          break;
          case "checked": _ = k;
          break;
          case "defaultChecked": U = k;
          break;
          case "value": y = k;
          break;
          case "defaultValue": b = k;
          break;
          case "children": case "dangerouslySetInnerHTML": if(k != null) throw Error(r(137,
          e));
          break;
          default: k !== K && Vt(t,
          e,
          V,
          k,
          o,
          K)
        }
      }
      fc(t,
      y,
      b,
      T,
      _,
      U,
      u,
      c);
      return;
      case "select": k = y = b = V = null;
      for(u in i) if(T = i[u],
      i.hasOwnProperty(u) && T != null) switch(u) {
        case "value": break;
        case "multiple": k = T;
        default: o.hasOwnProperty(u) || Vt(t,
        e,
        u,
        null,
        o,
        T)
      }
      for(c in o) if(u = o[c],
      T = i[c],
      o.hasOwnProperty(c) && (u != null || T != null)) switch(c) {
        case "value": V = u;
        break;
        case "defaultValue": b = u;
        break;
        case "multiple": y = u;
        default: u !== T && Vt(t,
        e,
        c,
        u,
        o,
        T)
      }
      e = b,
      i = y,
      o = k,
      V != null ? Di(t,
       !  ! i,
      V,
       ! 1):  !  ! o !=  !  ! i && (e != null ? Di(t,
       !  ! i,
      e,
       ! 0): Di(t,
       !  ! i,
      i ? []: "",
       ! 1));
      return;
      case "textarea": k = V = null;
      for(b in i) if(c = i[b],
      i.hasOwnProperty(b) && c != null &&  ! o.hasOwnProperty(b)) switch(b) {
        case "value": break;
        case "children": break;
        default: Vt(t,
        e,
        b,
        null,
        o,
        c)
      }
      for(y in o) if(c = o[y],
      u = i[y],
      o.hasOwnProperty(y) && (c != null || u != null)) switch(y) {
        case "value": V = c;
        break;
        case "defaultValue": k = c;
        break;
        case "children": break;
        case "dangerouslySetInnerHTML": if(c != null) throw Error(r(91));
        break;
        default: c !== u && Vt(t,
        e,
        y,
        c,
        o,
        u)
      }
      Ah(t,
      V,
      k);
      return;
      case "option": for(var et in i) V = i[et],
      i.hasOwnProperty(et) && V != null &&  ! o.hasOwnProperty(et) && (et === "selected" ? t.selected =  ! 1: Vt(t,
      e,
      et,
      null,
      o,
      V));
      for(T in o) V = o[T],
      k = i[T],
      o.hasOwnProperty(T) && V !== k && (V != null || k != null) && (T === "selected" ? t.selected = V && typeof V != "function" && typeof V != "symbol": Vt(t,
      e,
      T,
      V,
      o,
      k));
      return;
      case "img": case "link": case "area": case "base": case "br": case "col": case "embed": case "hr": case "keygen": case "meta": case "param": case "source": case "track": case "wbr": case "menuitem": for(var ft in i) V = i[ft],
      i.hasOwnProperty(ft) && V != null &&  ! o.hasOwnProperty(ft) && Vt(t,
      e,
      ft,
      null,
      o,
      V);
      for(_ in o) if(V = o[_],
      k = i[_],
      o.hasOwnProperty(_) && V !== k && (V != null || k != null)) switch(_) {
        case "children": case "dangerouslySetInnerHTML": if(V != null) throw Error(r(137,
        e));
        break;
        default: Vt(t,
        e,
        _,
        V,
        o,
        k)
      }
      return;
      default: if(hc(e)) {
        for(var Bt in i) V = i[Bt],
        i.hasOwnProperty(Bt) && V !== void 0 &&  ! o.hasOwnProperty(Bt) && Iu(t,
        e,
        Bt,
        void 0,
        o,
        V);
        for(U in o) V = o[U],
        k = i[U],
         ! o.hasOwnProperty(U) || V === k || V === void 0 && k === void 0 || Iu(t,
        e,
        U,
        V,
        o,
        k);
        return
      }
    }
    for(var j in i) V = i[j],
    i.hasOwnProperty(j) && V != null &&  ! o.hasOwnProperty(j) && Vt(t,
    e,
    j,
    null,
    o,
    V);
    for(K in o) V = o[K],
    k = i[K],
     ! o.hasOwnProperty(K) || V === k || V == null && k == null || Vt(t,
    e,
    K,
    V,
    o,
    k)
  }
  function Rg(t) {
    switch(t) {
      case "css": case "script": case "font": case "img": case "image": case "input": case "link": return ! 0;
      default: return ! 1
    }
  }
  function FS() {
    if(typeof performance.getEntriesByType == "function") {
      for(var t = 0,
      e = 0,
      i = performance.getEntriesByType("resource"),
      o = 0;
      o < i.length;
      o++) {
        var c = i[o],
        u = c.transferSize,
        y = c.initiatorType,
        b = c.duration;
        if(u && b && Rg(y)) {
          for(y = 0,
          b = c.responseEnd,
          o += 1; o < i.length; o++) {
            var T = i[o],
            _ = T.startTime;
            if(_ > b) break;
            var U = T.transferSize,
            K = T.initiatorType;
            U && Rg(K) && (T = T.responseEnd,
            y += U * (T < b ? 1: (b - _) / (T - _)))
          }
          if(-- o,
          e += 8 * (u + y) / (c.duration / 1e3),
          t++,
          10 < t) break
        }
      }
      if(0 < t) return e / t / 1e6
    }
    return navigator.connection && (t = navigator.connection.downlink,
    typeof t == "number") ? t: 5
  }
  var tf = null,
  ef = null;
  function Wr(t) {
    return t.nodeType === 9 ? t: t.ownerDocument
  }
  function Ng(t) {
    switch(t) {
      case "http://www.w3.org/2000/svg": return 1;
      case "http://www.w3.org/1998/Math/MathML": return 2;
      default: return 0
    }
  }
  function Dg(t,
  e) {
    if(t === 0) switch(e) {
      case "svg": return 1;
      case "math": return 2;
      default: return 0
    }
    return t === 1 && e === "foreignObject" ? 0: t
  }
  function nf(t,
  e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
  }
  var af = null;
  function ZS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === af ?  ! 1: (af = t,
     ! 0): (af = null,
     ! 1)
  }
  var jg = typeof setTimeout == "function" ? setTimeout: void 0,
  QS = typeof clearTimeout == "function" ? clearTimeout: void 0,
  Og = typeof Promise == "function" ? Promise: void 0,
  WS = typeof queueMicrotask == "function" ? queueMicrotask: typeof Og < "u" ? function(t) {
    return Og.resolve(null).then(t).catch(JS)
  }: jg;
  function JS(t) {
    setTimeout(function() {
      throw t
    })
  }
  function Ma(t) {
    return t === "head"
  }
  function zg(t,
  e) {
    var i = e,
    o = 0;
    do {
      var c = i.nextSibling;
      if(t.removeChild(i),
      c && c.nodeType === 8) if(i = c.data,
      i === "/$" || i === "/&") {
        if(o === 0) {
          t.removeChild(c),
          ls(e);
          return
        }
        o--
      }
      else if(i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") o++;
      else if(i === "html") go(t.ownerDocument.documentElement);
      else if(i === "head") {
        i = t.ownerDocument.head,
        go(i);
        for(var u = i.firstChild; u; ) {
          var y = u.nextSibling,
          b = u.nodeName;
          u[zs] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || i.removeChild(u),
          u = y
        }
      }
      else i === "body" && go(t.ownerDocument.body);
      i = c
    }
    while(i);
    ls(e)
  }
  function _g(t,
  e) {
    var i = t;
    t = 0;
    do {
      var o = i.nextSibling;
      if(i.nodeType === 1 ? e ? (i._stashedDisplay = i.style.display,
      i.style.display = "none"): (i.style.display = i._stashedDisplay || "",
      i.getAttribute("style") === "" && i.removeAttribute("style")): i.nodeType === 3 && (e ? (i._stashedText = i.nodeValue,
      i.nodeValue = ""): i.nodeValue = i._stashedText || ""),
      o && o.nodeType === 8) if(i = o.data,
      i === "/$") {
        if(t === 0) break;
        t--
      }
      else i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || t++;
      i = o
    }
    while(i)
  }
  function sf(t) {
    var e = t.firstChild;
    for(e && e.nodeType === 10 && (e = e.nextSibling);
    e;
    ) {
      var i = e;
      switch(e = e.nextSibling,
      i.nodeName) {
        case "HTML": case "HEAD": case "BODY": sf(i),
        cc(i);
        continue;
        case "SCRIPT": case "STYLE": continue;
        case "LINK": if(i.rel.toLowerCase() === "stylesheet") continue
      }
      t.removeChild(i)
    }
  }
  function $S(t,
  e,
  i,
  o) {
    for(; t.nodeType === 1; ) {
      var c = i;
      if(t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if( ! o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
      }
      else if(o) {
        if( ! t[zs]) switch(e) {
          case "meta": if( ! t.hasAttribute("itemprop")) break;
          return t;
          case "link": if(u = t.getAttribute("rel"),
          u === "stylesheet" && t.hasAttribute("data-precedence")) break;
          if(u !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null: c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null: c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null: c.title)) break;
          return t;
          case "style": if(t.hasAttribute("data-precedence")) break;
          return t;
          case "script": if(u = t.getAttribute("src"),
          (u !== (c.src == null ? null: c.src) || t.getAttribute("type") !== (c.type == null ? null: c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null: c.crossOrigin)) && u && t.hasAttribute("async") &&  ! t.hasAttribute("itemprop")) break;
          return t;
          default: return t
        }
      }
      else if(e === "input" && t.type === "hidden") {
        var u = c.name == null ? null: "" + c.name;
        if(c.type === "hidden" && t.getAttribute("name") === u) return t
      }
      else return t;
      if(t = on(t.nextSibling),
      t === null) break
    }
    return null
  }
  function IS(t,
  e,
  i) {
    if(e === "") return null;
    for(; t.nodeType !== 3; ) if((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&  ! i || (t = on(t.nextSibling),
    t === null)) return null;
    return t
  }
  function Lg(t,
  e) {
    for(; t.nodeType !== 8; ) if((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&  ! e || (t = on(t.nextSibling),
    t === null)) return null;
    return t
  }
  function of(t) {
    return t.data === "$?" || t.data === "$~"
  }
  function rf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
  }
  function t2(t,
  e) {
    var i = t.ownerDocument;
    if(t.data === "$~") t._reactRetry = e;
    else if(t.data !== "$?" || i.readyState !== "loading") e();
    else {
      var o = function() {
        e(),
        i.removeEventListener("DOMContentLoaded",
        o)
      };
      i.addEventListener("DOMContentLoaded",
      o),
      t._reactRetry = o
    }
  }
  function on(t) {
    for(; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if(e === 1 || e === 3) break;
      if(e === 8) {
        if(e = t.data,
        e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if(e === "/$" || e === "/&") return null
      }
    }
    return t
  }
  var lf = null;
  function Vg(t) {
    t = t.nextSibling;
    for(var e = 0; t; ) {
      if(t.nodeType === 8) {
        var i = t.data;
        if(i === "/$" || i === "/&") {
          if(e === 0) return on(t.nextSibling);
          e--
        }
        else i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || e++
      }
      t = t.nextSibling
    }
    return null
  }
  function Bg(t) {
    t = t.previousSibling;
    for(var e = 0; t; ) {
      if(t.nodeType === 8) {
        var i = t.data;
        if(i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if(e === 0) return t;
          e--
        }
        else i !== "/$" && i !== "/&" || e++
      }
      t = t.previousSibling
    }
    return null
  }
  function kg(t,
  e,
  i) {
    switch(e = Wr(i),
    t) {
      case "html": if(t = e.documentElement,
       ! t) throw Error(r(452));
      return t;
      case "head": if(t = e.head,
       ! t) throw Error(r(453));
      return t;
      case "body": if(t = e.body,
       ! t) throw Error(r(454));
      return t;
      default: throw Error(r(451))
    }
  }
  function go(t) {
    for(var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    cc(t)
  }
  var rn = new Map,
  Ug = new Set;
  function Jr(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode(): t.nodeType === 9 ? t: t.ownerDocument
  }
  var In = Z.d;
  Z.d =  {
    f: e2,
    r: n2,
    D: a2,
    C: i2,
    L: s2,
    m: o2,
    X: l2,
    S: r2,
    M: c2
  };
  function e2() {
    var t = In.f(),
    e = Yr();
    return t || e
  }
  function n2(t) {
    var e = Mi(t);
    e !== null && e.tag === 5 && e.type === "form" ? np(e): In.r(t)
  }
  var ss = typeof document > "u" ? null: document;
  function Hg(t,
  e,
  i) {
    var o = ss;
    if(o && typeof e == "string" && e) {
      var c = $e(e);
      c = 'link[rel="' + t + '"][href="' + c + '"]',
      typeof i == "string" && (c += '[crossorigin="' + i + '"]'),
      Ug.has(c) || (Ug.add(c),
      t =  {
        rel: t,
        crossOrigin: i,
        href: e
      },
      o.querySelector(c) === null && (e = o.createElement("link"),
      ge(e,
      "link",
      t),
      ue(e),
      o.head.appendChild(e)))
    }
  }
  function a2(t) {
    In.D(t),
    Hg("dns-prefetch",
    t,
    null)
  }
  function i2(t,
  e) {
    In.C(t,
    e),
    Hg("preconnect",
    t,
    e)
  }
  function s2(t,
  e,
  i) {
    In.L(t,
    e,
    i);
    var o = ss;
    if(o && t && e) {
      var c = 'link[rel="preload"][as="' + $e(e) + '"]';
      e === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + $e(i.imageSrcSet) + '"]',
      typeof i.imageSizes == "string" && (c += '[imagesizes="' + $e(i.imageSizes) + '"]')): c += '[href="' + $e(t) + '"]';
      var u = c;
      switch(e) {
        case "style": u = os(t);
        break;
        case "script": u = rs(t)
      }
      rn.has(u) || (t = p( {
        rel: "preload",
        href: e === "image" && i && i.imageSrcSet ? void 0: t,
        as: e
      },
      i),
      rn.set(u,
      t),
      o.querySelector(c) !== null || e === "style" && o.querySelector(yo(u)) || e === "script" && o.querySelector(vo(u)) || (e = o.createElement("link"),
      ge(e,
      "link",
      t),
      ue(e),
      o.head.appendChild(e)))
    }
  }
  function o2(t,
  e) {
    In.m(t,
    e);
    var i = ss;
    if(i && t) {
      var o = e && typeof e.as == "string" ? e.as: "script",
      c = 'link[rel="modulepreload"][as="' + $e(o) + '"][href="' + $e(t) + '"]',
      u = c;
      switch(o) {
        case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": u = rs(t)
      }
      if( ! rn.has(u) && (t = p( {
        rel: "modulepreload",
        href: t
      },
      e),
      rn.set(u,
      t),
      i.querySelector(c) === null)) {
        switch(o) {
          case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": if(i.querySelector(vo(u))) return
        }
        o = i.createElement("link"),
        ge(o,
        "link",
        t),
        ue(o),
        i.head.appendChild(o)
      }
    }
  }
  function r2(t,
  e,
  i) {
    In.S(t,
    e,
    i);
    var o = ss;
    if(o && t) {
      var c = Ri(o).hoistableStyles,
      u = os(t);
      e = e || "default";
      var y = c.get(u);
      if( ! y) {
        var b =  {
          loading: 0,
          preload: null
        };
        if(y = o.querySelector(yo(u))) b.loading = 5;
        else {
          t = p( {
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          },
          i),
          (i = rn.get(u)) && cf(t,
          i);
          var T = y = o.createElement("link");
          ue(T),
          ge(T,
          "link",
          t),
          T._p = new Promise(function(_,
          U) {
            T.onload = _,
            T.onerror = U
          }),
          T.addEventListener("load",
          function() {
            b.loading |= 1
          }),
          T.addEventListener("error",
          function() {
            b.loading |= 2
          }),
          b.loading |= 4,
          $r(y,
          e,
          o)
        }
        y =  {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: b
        },
        c.set(u,
        y)
      }
    }
  }
  function l2(t,
  e) {
    In.X(t,
    e);
    var i = ss;
    if(i && t) {
      var o = Ri(i).hoistableScripts,
      c = rs(t),
      u = o.get(c);
      u || (u = i.querySelector(vo(c)),
      u || (t = p( {
        src: t,
        async:  ! 0
      },
      e),
      (e = rn.get(c)) && uf(t,
      e),
      u = i.createElement("script"),
      ue(u),
      ge(u,
      "link",
      t),
      i.head.appendChild(u)),
      u =  {
        type: "script",
        instance: u,
        count: 1,
        state: null
      },
      o.set(c,
      u))
    }
  }
  function c2(t,
  e) {
    In.M(t,
    e);
    var i = ss;
    if(i && t) {
      var o = Ri(i).hoistableScripts,
      c = rs(t),
      u = o.get(c);
      u || (u = i.querySelector(vo(c)),
      u || (t = p( {
        src: t,
        async:  ! 0,
        type: "module"
      },
      e),
      (e = rn.get(c)) && uf(t,
      e),
      u = i.createElement("script"),
      ue(u),
      ge(u,
      "link",
      t),
      i.head.appendChild(u)),
      u =  {
        type: "script",
        instance: u,
        count: 1,
        state: null
      },
      o.set(c,
      u))
    }
  }
  function Pg(t,
  e,
  i,
  o) {
    var c = (c = ct.current) ? Jr(c): null;
    if( ! c) throw Error(r(446));
    switch(t) {
      case "meta": case "title": return null;
      case "style": return typeof i.precedence == "string" && typeof i.href == "string" ? (e = os(i.href),
      i = Ri(c).hoistableStyles,
      o = i.get(e),
      o || (o =  {
        type: "style",
        instance: null,
        count: 0,
        state: null
      },
      i.set(e,
      o)),
      o):  {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
      case "link": if(i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
        t = os(i.href);
        var u = Ri(c).hoistableStyles,
        y = u.get(t);
        if(y || (c = c.ownerDocument || c,
        y =  {
          type: "stylesheet",
          instance: null,
          count: 0,
          state:  {
            loading: 0,
            preload: null
          }
        },
        u.set(t,
        y),
        (u = c.querySelector(yo(t))) &&  ! u._p && (y.instance = u,
        y.state.loading = 5),
        rn.has(t) || (i =  {
          rel: "preload",
          as: "style",
          href: i.href,
          crossOrigin: i.crossOrigin,
          integrity: i.integrity,
          media: i.media,
          hrefLang: i.hrefLang,
          referrerPolicy: i.referrerPolicy
        },
        rn.set(t,
        i),
        u || u2(c,
        t,
        i,
        y.state))),
        e && o === null) throw Error(r(528,
        ""));
        return y
      }
      if(e && o !== null) throw Error(r(529,
      ""));
      return null;
      case "script": return e = i.async,
      i = i.src,
      typeof i == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = rs(i),
      i = Ri(c).hoistableScripts,
      o = i.get(e),
      o || (o =  {
        type: "script",
        instance: null,
        count: 0,
        state: null
      },
      i.set(e,
      o)),
      o):  {
        type: "void",
        instance: null,
        count: 0,
        state: null
      };
      default: throw Error(r(444,
      t))
    }
  }
  function os(t) {
    return 'href="' + $e(t) + '"'
  }
  function yo(t) {
    return 'link[rel="stylesheet"][' + t + "]"
  }
  function Yg(t) {
    return p( {
    },
    t,
     {
      "data-precedence": t.precedence,
      precedence: null
    })
  }
  function u2(t,
  e,
  i,
  o) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? o.loading = 1: (e = t.createElement("link"),
    o.preload = e,
    e.addEventListener("load",
    function() {
      return o.loading |= 1
    }),
    e.addEventListener("error",
    function() {
      return o.loading |= 2
    }),
    ge(e,
    "link",
    i),
    ue(e),
    t.head.appendChild(e))
  }
  function rs(t) {
    return '[src="' + $e(t) + '"]'
  }
  function vo(t) {
    return "script[async]" + t
  }
  function Gg(t,
  e,
  i) {
    if(e.count++,
    e.instance === null) switch(e.type) {
      case "style": var o = t.querySelector('style[data-href~="' + $e(i.href) + '"]');
      if(o) return e.instance = o,
      ue(o),
      o;
      var c = p( {
      },
      i,
       {
        "data-href": i.href,
        "data-precedence": i.precedence,
        href: null,
        precedence: null
      });
      return o = (t.ownerDocument || t).createElement("style"),
      ue(o),
      ge(o,
      "style",
      c),
      $r(o,
      i.precedence,
      t),
      e.instance = o;
      case "stylesheet": c = os(i.href);
      var u = t.querySelector(yo(c));
      if(u) return e.state.loading |= 4,
      e.instance = u,
      ue(u),
      u;
      o = Yg(i),
      (c = rn.get(c)) && cf(o,
      c),
      u = (t.ownerDocument || t).createElement("link"),
      ue(u);
      var y = u;
      return y._p = new Promise(function(b,
      T) {
        y.onload = b,
        y.onerror = T
      }),
      ge(u,
      "link",
      o),
      e.state.loading |= 4,
      $r(u,
      i.precedence,
      t),
      e.instance = u;
      case "script": return u = rs(i.src),
      (c = t.querySelector(vo(u))) ? (e.instance = c,
      ue(c),
      c): (o = i,
      (c = rn.get(u)) && (o = p( {
      },
      i),
      uf(o,
      c)),
      t = t.ownerDocument || t,
      c = t.createElement("script"),
      ue(c),
      ge(c,
      "link",
      o),
      t.head.appendChild(c),
      e.instance = c);
      case "void": return null;
      default: throw Error(r(443,
      e.type))
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (o = e.instance,
    e.state.loading |= 4,
    $r(o,
    i.precedence,
    t));
    return e.instance
  }
  function $r(t,
  e,
  i) {
    for(var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
    c = o.length ? o[o.length - 1]: null,
    u = c,
    y = 0;
    y < o.length;
    y++) {
      var b = o[y];
      if(b.dataset.precedence === e) u = b;
      else if(u !== c) break
    }
    u ? u.parentNode.insertBefore(t,
    u.nextSibling): (e = i.nodeType === 9 ? i.head: i,
    e.insertBefore(t,
    e.firstChild))
  }
  function cf(t,
  e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.title == null && (t.title = e.title)
  }
  function uf(t,
  e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.integrity == null && (t.integrity = e.integrity)
  }
  var Ir = null;
  function qg(t,
  e,
  i) {
    if(Ir === null) {
      var o = new Map,
      c = Ir = new Map;
      c.set(i,
      o)
    }
    else c = Ir,
    o = c.get(i),
    o || (o = new Map,
    c.set(i,
    o));
    if(o.has(t)) return o;
    for(o.set(t,
    null),
    i = i.getElementsByTagName(t),
    c = 0;
    c < i.length;
    c++) {
      var u = i[c];
      if( ! (u[zs] || u[de] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = u.getAttribute(e) || "";
        y = t + y;
        var b = o.get(y);
        b ? b.push(u): o.set(y,
        [u])
      }
    }
    return o
  }
  function Xg(t,
  e,
  i) {
    t = t.ownerDocument || t,
    t.head.insertBefore(i,
    e === "title" ? t.querySelector("head > title"): null)
  }
  function f2(t,
  e,
  i) {
    if(i === 1 || e.itemProp != null) return ! 1;
    switch(t) {
      case "meta": case "title": return ! 0;
      case "style": if(typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
      return ! 0;
      case "link": if(typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
      return e.rel === "stylesheet" ? (t = e.disabled,
      typeof e.precedence == "string" && t == null):  ! 0;
      case "script": if(e.async && typeof e.async != "function" && typeof e.async != "symbol" &&  ! e.onLoad &&  ! e.onError && e.src && typeof e.src == "string") return ! 0
    }
    return ! 1
  }
  function Kg(t) {
    return ! (t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }
  function d2(t,
  e,
  i,
  o) {
    if(i.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !==  ! 1) && (i.state.loading & 4) === 0) {
      if(i.instance === null) {
        var c = os(o.href),
        u = e.querySelector(yo(c));
        if(u) {
          e = u._p,
          e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
          t = tl.bind(t),
          e.then(t,
          t)),
          i.state.loading |= 4,
          i.instance = u,
          ue(u);
          return
        }
        u = e.ownerDocument || e,
        o = Yg(o),
        (c = rn.get(c)) && cf(o,
        c),
        u = u.createElement("link"),
        ue(u);
        var y = u;
        y._p = new Promise(function(b,
        T) {
          y.onload = b,
          y.onerror = T
        }),
        ge(u,
        "link",
        o),
        i.instance = u
      }
      t.stylesheets === null && (t.stylesheets = new Map),
      t.stylesheets.set(i,
      e),
      (e = i.state.preload) && (i.state.loading & 3) === 0 && (t.count++,
      i = tl.bind(t),
      e.addEventListener("load",
      i),
      e.addEventListener("error",
      i))
    }
  }
  var ff = 0;
  function h2(t,
  e) {
    return t.stylesheets && t.count === 0 && nl(t,
    t.stylesheets),
    0 < t.count || 0 < t.imgCount ? function(i) {
      var o = setTimeout(function() {
        if(t.stylesheets && nl(t,
        t.stylesheets),
        t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null,
          u()
        }
      },
      6e4 + e);
      0 < t.imgBytes && ff === 0 && (ff = 62500 * FS());
      var c = setTimeout(function() {
        if(t.waitingForImages =  ! 1,
        t.count === 0 && (t.stylesheets && nl(t,
        t.stylesheets),
        t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null,
          u()
        }
      },
      (t.imgBytes > ff ? 50: 800) + e);
      return t.unsuspend = i,
      function() {
        t.unsuspend = null,
        clearTimeout(o),
        clearTimeout(c)
      }
    }: null
  }
  function tl() {
    if(this.count--,
    this.count === 0 && (this.imgCount === 0 ||  ! this.waitingForImages)) {
      if(this.stylesheets) nl(this,
      this.stylesheets);
      else if(this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null,
        t()
      }
    }
  }
  var el = null;
  function nl(t,
  e) {
    t.stylesheets = null,
    t.unsuspend !== null && (t.count++,
    el = new Map,
    e.forEach(m2,
    t),
    el = null,
    tl.call(t))
  }
  function m2(t,
  e) {
    if( ! (e.state.loading & 4)) {
      var i = el.get(t);
      if(i) var o = i.get(null);
      else {
        i = new Map,
        el.set(t,
        i);
        for(var c = t.querySelectorAll("link[data-precedence],style[data-precedence]"),
        u = 0;
        u < c.length;
        u++) {
          var y = c[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (i.set(y.dataset.precedence,
          y),
          o = y)
        }
        o && i.set(null,
        o)
      }
      c = e.instance,
      y = c.getAttribute("data-precedence"),
      u = i.get(y) || o,
      u === o && i.set(null,
      c),
      i.set(y,
      c),
      this.count++,
      o = tl.bind(this),
      c.addEventListener("load",
      o),
      c.addEventListener("error",
      o),
      u ? u.parentNode.insertBefore(c,
      u.nextSibling): (t = t.nodeType === 9 ? t.head: t,
      t.insertBefore(c,
      t.firstChild)),
      e.state.loading |= 4
    }
  }
  var xo =  {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function p2(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b,
  T) {
    this.tag = 1,
    this.containerInfo = t,
    this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle =  - 1,
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
    this.callbackPriority = 0,
    this.expirationTimes = la( - 1),
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = la(0),
    this.hiddenUpdates = la(null),
    this.identifierPrefix = o,
    this.onUncaughtError = c,
    this.onCaughtError = u,
    this.onRecoverableError = y,
    this.pooledCache = null,
    this.pooledCacheLanes = 0,
    this.formState = T,
    this.incompleteTransitions = new Map
  }
  function Fg(t,
  e,
  i,
  o,
  c,
  u,
  y,
  b,
  T,
  _,
  U,
  K) {
    return t = new p2(t,
    e,
    i,
    y,
    T,
    _,
    U,
    K,
    b),
    e = 1,
    u ===  ! 0 && (e |= 24),
    u = qe(3,
    null,
    null,
    e),
    t.current = u,
    u.stateNode = t,
    e = Gc(),
    e.refCount++,
    t.pooledCache = e,
    e.refCount++,
    u.memoizedState =  {
      element: o,
      isDehydrated: i,
      cache: e
    },
    Fc(u),
    t
  }
  function Zg(t) {
    return t ? (t = ki,
    t): ki
  }
  function Qg(t,
  e,
  i,
  o,
  c,
  u) {
    c = Zg(c),
    o.context === null ? o.context = c: o.pendingContext = c,
    o = ga(e),
    o.payload =  {
      element: i
    },
    u = u === void 0 ? null: u,
    u !== null && (o.callback = u),
    i = ya(t,
    o,
    e),
    i !== null && (Ue(i,
    t,
    e),
    Ws(i,
    t,
    e))
  }
  function Wg(t,
  e) {
    if(t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < e ? i: e
    }
  }
  function df(t,
  e) {
    Wg(t,
    e),
    (t = t.alternate) && Wg(t,
    e)
  }
  function Jg(t) {
    if(t.tag === 13 || t.tag === 31) {
      var e = Ja(t,
      67108864);
      e !== null && Ue(e,
      t,
      67108864),
      df(t,
      67108864)
    }
  }
  function $g(t) {
    if(t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Ai(e);
      var i = Ja(t,
      e);
      i !== null && Ue(i,
      t,
      e),
      df(t,
      e)
    }
  }
  var al =  ! 0;
  function g2(t,
  e,
  i,
  o) {
    var c = O.T;
    O.T = null;
    var u = Z.p;
    try {
      Z.p = 2,
      hf(t,
      e,
      i,
      o)
    }
    finally {
      Z.p = u,
      O.T = c
    }
  }
  function y2(t,
  e,
  i,
  o) {
    var c = O.T;
    O.T = null;
    var u = Z.p;
    try {
      Z.p = 8,
      hf(t,
      e,
      i,
      o)
    }
    finally {
      Z.p = u,
      O.T = c
    }
  }
  function hf(t,
  e,
  i,
  o) {
    if(al) {
      var c = mf(o);
      if(c === null) $u(t,
      e,
      o,
      il,
      i),
      ty(t,
      o);
      else if(x2(c,
      t,
      e,
      i,
      o)) o.stopPropagation();
      else if(ty(t,
      o),
      e & 4 &&  - 1 < v2.indexOf(t)) {
        for(; c !== null; ) {
          var u = Mi(c);
          if(u !== null) switch(u.tag) {
            case 3: if(u = u.stateNode,
            u.current.memoizedState.isDehydrated) {
              var y = En(u.pendingLanes);
              if(y !== 0) {
                var b = u;
                for(b.pendingLanes |= 2,
                b.entangledLanes |= 2; y; ) {
                  var T = 1 << 31 - xe(y);
                  b.entanglements[1] |= T,
                  y &= ~ T
                }
                Cn(u),
                (Ot & 6) === 0 && (Hr = Te() + 500,
                ho(0))
              }
            }
            break;
            case 31: case 13: b = Ja(u,
            2),
            b !== null && Ue(b,
            u,
            2),
            Yr(),
            df(u,
            2)
          }
          if(u = mf(o),
          u === null && $u(t,
          e,
          o,
          il,
          i),
          u === c) break;
          c = u
        }
        c !== null && o.stopPropagation()
      }
      else $u(t,
      e,
      o,
      null,
      i)
    }
  }
  function mf(t) {
    return t = pc(t),
    pf(t)
  }
  var il = null;
  function pf(t) {
    if(il = null,
    t = Ci(t),
    t !== null) {
      var e = f(t);
      if(e === null) t = null;
      else {
        var i = e.tag;
        if(i === 13) {
          if(t = d(e),
          t !== null) return t;
          t = null
        }
        else if(i === 31) {
          if(t = h(e),
          t !== null) return t;
          t = null
        }
        else if(i === 3) {
          if(e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo: null;
          t = null
        }
        else e !== t && (t = null)
      }
    }
    return il = t,
    null
  }
  function Ig(t) {
    switch(t) {
      case "beforetoggle": case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "toggle": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 2;
      case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 8;
      case "message": switch(sc()) {
        case Ya: return 2;
        case Wo: return 8;
        case Ga: case js: return 32;
        case Ln: return 268435456;
        default: return 32
      }
      default: return 32
    }
  }
  var gf =  ! 1,
  Ra = null,
  Na = null,
  Da = null,
  bo = new Map,
  So = new Map,
  ja = [],
  v2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function ty(t,
  e) {
    switch(t) {
      case "focusin": case "focusout": Ra = null;
      break;
      case "dragenter": case "dragleave": Na = null;
      break;
      case "mouseover": case "mouseout": Da = null;
      break;
      case "pointerover": case "pointerout": bo.delete(e.pointerId);
      break;
      case "gotpointercapture": case "lostpointercapture": So.delete(e.pointerId)
    }
  }
  function Eo(t,
  e,
  i,
  o,
  c,
  u) {
    return t === null || t.nativeEvent !== u ? (t =  {
      blockedOn: e,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: u,
      targetContainers: [c]
    },
    e !== null && (e = Mi(e),
    e !== null && Jg(e)),
    t): (t.eventSystemFlags |= o,
    e = t.targetContainers,
    c !== null && e.indexOf(c) ===  - 1 && e.push(c),
    t)
  }
  function x2(t,
  e,
  i,
  o,
  c) {
    switch(e) {
      case "focusin": return Ra = Eo(Ra,
      t,
      e,
      i,
      o,
      c),
       ! 0;
      case "dragenter": return Na = Eo(Na,
      t,
      e,
      i,
      o,
      c),
       ! 0;
      case "mouseover": return Da = Eo(Da,
      t,
      e,
      i,
      o,
      c),
       ! 0;
      case "pointerover": var u = c.pointerId;
      return bo.set(u,
      Eo(bo.get(u) || null,
      t,
      e,
      i,
      o,
      c)),
       ! 0;
      case "gotpointercapture": return u = c.pointerId,
      So.set(u,
      Eo(So.get(u) || null,
      t,
      e,
      i,
      o,
      c)),
       ! 0
    }
    return ! 1
  }
  function ey(t) {
    var e = Ci(t.target);
    if(e !== null) {
      var i = f(e);
      if(i !== null) {
        if(e = i.tag,
        e === 13) {
          if(e = d(i),
          e !== null) {
            t.blockedOn = e,
            ph(t.priority,
            function() {
              $g(i)
            });
            return
          }
        }
        else if(e === 31) {
          if(e = h(i),
          e !== null) {
            t.blockedOn = e,
            ph(t.priority,
            function() {
              $g(i)
            });
            return
          }
        }
        else if(e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo: null;
          return
        }
      }
    }
    t.blockedOn = null
  }
  function sl(t) {
    if(t.blockedOn !== null) return ! 1;
    for(var e = t.targetContainers; 0 < e.length; ) {
      var i = mf(t.nativeEvent);
      if(i === null) {
        i = t.nativeEvent;
        var o = new i.constructor(i.type,
        i);
        mc = o,
        i.target.dispatchEvent(o),
        mc = null
      }
      else return e = Mi(i),
      e !== null && Jg(e),
      t.blockedOn = i,
       ! 1;
      e.shift()
    }
    return ! 0
  }
  function ny(t,
  e,
  i) {
    sl(t) && i.delete(e)
  }
  function b2() {
    gf =  ! 1,
    Ra !== null && sl(Ra) && (Ra = null),
    Na !== null && sl(Na) && (Na = null),
    Da !== null && sl(Da) && (Da = null),
    bo.forEach(ny),
    So.forEach(ny)
  }
  function ol(t,
  e) {
    t.blockedOn === e && (t.blockedOn = null,
    gf || (gf =  ! 0,
    n.unstable_scheduleCallback(n.unstable_NormalPriority,
    b2)))
  }
  var rl = null;
  function ay(t) {
    rl !== t && (rl = t,
    n.unstable_scheduleCallback(n.unstable_NormalPriority,
    function() {
      rl === t && (rl = null);
      for(var e = 0; e < t.length; e += 3) {
        var i = t[e],
        o = t[e + 1],
        c = t[e + 2];
        if(typeof o != "function") {
          if(pf(o || i) === null) continue;
          break
        }
        var u = Mi(i);
        u !== null && (t.splice(e,
        3),
        e -= 3,
        hu(u,
         {
          pending:  ! 0,
          data: c,
          method: i.method,
          action: o
        },
        o,
        c))
      }
    }))
  }
  function ls(t) {
    function e(T) {
      return ol(T,
      t)
    }
    Ra !== null && ol(Ra,
    t),
    Na !== null && ol(Na,
    t),
    Da !== null && ol(Da,
    t),
    bo.forEach(e),
    So.forEach(e);
    for(var i = 0; i < ja.length; i++) {
      var o = ja[i];
      o.blockedOn === t && (o.blockedOn = null)
    }
    for(; 0 < ja.length && (i = ja[0],
    i.blockedOn === null);
    ) ey(i),
    i.blockedOn === null && ja.shift();
    if(i = (t.ownerDocument || t).$$reactFormReplay,
    i != null) for(o = 0; o < i.length; o += 3) {
      var c = i[o],
      u = i[o + 1],
      y = c[ze] || null;
      if(typeof u == "function") y || ay(i);
      else if(y) {
        var b = null;
        if(u && u.hasAttribute("formAction")) {
          if(c = u,
          y = u[ze] || null) b = y.formAction;
          else if(pf(c) !== null) continue
        }
        else b = y.action;
        typeof b == "function" ? i[o + 1] = b: (i.splice(o,
        3),
        o -= 3),
        ay(i)
      }
    }
  }
  function iy() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept( {
        handler: function() {
          return new Promise(function(y) {
            return c = y
          })
        },
        focusReset: "manual",
        scroll: "manual"
      })
    }
    function e() {
      c !== null && (c(),
      c = null),
      o || setTimeout(i,
      20)
    }
    function i() {
      if( ! o &&  ! navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url,
         {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if(typeof navigation == "object") {
      var o =  ! 1,
      c = null;
      return navigation.addEventListener("navigate",
      t),
      navigation.addEventListener("navigatesuccess",
      e),
      navigation.addEventListener("navigateerror",
      e),
      setTimeout(i,
      100),
      function() {
        o =  ! 0,
        navigation.removeEventListener("navigate",
        t),
        navigation.removeEventListener("navigatesuccess",
        e),
        navigation.removeEventListener("navigateerror",
        e),
        c !== null && (c(),
        c = null)
      }
    }
  }
  function yf(t) {
    this._internalRoot = t
  }
  ll.prototype.render = yf.prototype.render = function(t) {
    var e = this._internalRoot;
    if(e === null) throw Error(r(409));
    var i = e.current,
    o = Qe();
    Qg(i,
    o,
    t,
    e,
    null,
    null)
  },
  ll.prototype.unmount = yf.prototype.unmount = function() {
    var t = this._internalRoot;
    if(t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Qg(t.current,
      2,
      null,
      t,
      null,
      null),
      Yr(),
      e[Ti] = null
    }
  };
  function ll(t) {
    this._internalRoot = t
  }
  ll.prototype.unstable_scheduleHydration = function(t) {
    if(t) {
      var e = rc();
      t =  {
        blockedOn: null,
        target: t,
        priority: e
      };
      for(var i = 0; i < ja.length && e !== 0 && e < ja[i].priority; i++);
      ja.splice(i,
      0,
      t),
      i === 0 && ey(t)
    }
  };
  var sy = a.version;
  if(sy !== "19.2.3") throw Error(r(527,
  sy,
  "19.2.3"));
  Z.findDOMNode = function(t) {
    var e = t._reactInternals;
    if(e === void 0) throw typeof t.render == "function" ? Error(r(188)): (t = Object.keys(t).join(","),
    Error(r(268,
    t)));
    return t = m(e),
    t = t !== null ? v(t): null,
    t = t === null ? null: t.stateNode,
    t
  };
  var S2 =  {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3"
  };
  if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if( ! cl.isDisabled && cl.supportsFiber) try {
      qa = cl.inject(S2),
      Ce = cl
    }
    catch {
    }
  }
  return Ao.createRoot = function(t,
  e) {
    if( ! l(t)) throw Error(r(299));
    var i =  ! 1,
    o = "",
    c = dp,
    u = hp,
    y = mp;
    return e != null && (e.unstable_strictMode ===  ! 0 && (i =  ! 0),
    e.identifierPrefix !== void 0 && (o = e.identifierPrefix),
    e.onUncaughtError !== void 0 && (c = e.onUncaughtError),
    e.onCaughtError !== void 0 && (u = e.onCaughtError),
    e.onRecoverableError !== void 0 && (y = e.onRecoverableError)),
    e = Fg(t,
    1,
     ! 1,
    null,
    null,
    i,
    o,
    null,
    c,
    u,
    y,
    iy),
    t[Ti] = e.current,
    Ju(t),
    new yf(e)
  },
  Ao.hydrateRoot = function(t,
  e,
  i) {
    if( ! l(t)) throw Error(r(299));
    var o =  ! 1,
    c = "",
    u = dp,
    y = hp,
    b = mp,
    T = null;
    return i != null && (i.unstable_strictMode ===  ! 0 && (o =  ! 0),
    i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
    i.onUncaughtError !== void 0 && (u = i.onUncaughtError),
    i.onCaughtError !== void 0 && (y = i.onCaughtError),
    i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
    i.formState !== void 0 && (T = i.formState)),
    e = Fg(t,
    1,
     ! 0,
    e,
    i ?? null,
    o,
    c,
    T,
    u,
    y,
    b,
    iy),
    e.context = Zg(null),
    i = e.current,
    o = Qe(),
    o = Ai(o),
    c = ga(o),
    c.callback = null,
    ya(i,
    c,
    o),
    i = o,
    e.current.lanes = i,
    Ft(e,
    i),
    Cn(e),
    t[Ti] = e.current,
    Ju(t),
    new ll(e)
  },
  Ao.version = "19.2.3",
  Ao
}
var py;
function j2() {
  if(py) return bf.exports;
  py = 1;
  function n() {
    if( ! (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
    }
    catch(a) {
      console.error(a)
    }
  }
  return n(),
  bf.exports = D2(),
  bf.exports
}
var O2 = j2();
var gy = "popstate";
function yy(n) {
  return typeof n == "object" && n != null && "pathname" in n && "search" in n && "hash" in n && "state" in n && "key" in n
}
function z2(n =  {
}) {
  function a(r,
  l) {
    let f = l.state ?. masked,
     {
      pathname: d,
      search: h,
      hash: g
    }
     = f || r.location;
    return If("",
     {
      pathname: d,
      search: h,
      hash: g
    },
    l.state && l.state.usr || null,
    l.state && l.state.key || "default",
    f ?  {
      pathname: r.location.pathname,
      search: r.location.search,
      hash: r.location.hash
    }: void 0)
  }
  function s(r,
  l) {
    return typeof l == "string" ? l: _o(l)
  }
  return L2(a,
  s,
  null,
  n)
}
function Zt(n,
a) {
  if(n ===  ! 1 || n === null || typeof n > "u") throw new Error(a)
}
function zn(n,
a) {
  if( ! n) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a)
    }
    catch {
    }
  }
}
function _2() {
  return Math.random().toString(36).substring(2,
  10)
}
function vy(n,
a) {
  return {
    usr: n.state,
    key: n.key,
    idx: a,
    masked: n.unstable_mask ?  {
      pathname: n.pathname,
      search: n.search,
      hash: n.hash
    }: void 0
  }
}
function If(n,
a,
s = null,
r,
l) {
  return {
    pathname: typeof n == "string" ? n: n.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? bs(a): a,
    state: s,
    key: a && a.key || r || _2(),
    unstable_mask: l
  }
}
function _o( {
  pathname: n = "/",
  search: a = "",
  hash: s = ""
}) {
  return a && a !== "?" && (n += a.charAt(0) === "?" ? a: "?" + a),
  s && s !== "#" && (n += s.charAt(0) === "#" ? s: "#" + s),
  n
}
function bs(n) {
  let a =  {
  };
  if(n) {
    let s = n.indexOf("#");
    s >= 0 && (a.hash = n.substring(s),
    n = n.substring(0,
    s));
    let r = n.indexOf("?");
    r >= 0 && (a.search = n.substring(r),
    n = n.substring(0,
    r)),
    n && (a.pathname = n)
  }
  return a
}
function L2(n,
a,
s,
r =  {
}) {
  let {
    window: l = document.defaultView,
    v5Compat: f =  ! 1
  }
   = r,
  d = l.history,
  h = "POP",
  g = null,
  m = v();
  m == null && (m = 0,
  d.replaceState( {
    ...d.state,
    idx: m
  },
  ""));
  function v() {
    return(d.state ||  {
      idx: null
    }).idx
  }
  function p() {
    h = "POP";
    let C = v(),
    D = C == null ? null: C - m;
    m = C,
    g && g( {
      action: h,
      location: A.location,
      delta: D
    })
  }
  function E(C,
  D) {
    h = "PUSH";
    let B = yy(C) ? C: If(A.location,
    C,
    D);
    m = v() + 1;
    let L = vy(B,
    m),
    q = A.createHref(B.unstable_mask || B);
    try {
      d.pushState(L,
      "",
      q)
    }
    catch(Q) {
      if(Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
      l.location.assign(q)
    }
    f && g && g( {
      action: h,
      location: A.location,
      delta: 1
    })
  }
  function w(C,
  D) {
    h = "REPLACE";
    let B = yy(C) ? C: If(A.location,
    C,
    D);
    m = v();
    let L = vy(B,
    m),
    q = A.createHref(B.unstable_mask || B);
    d.replaceState(L,
    "",
    q),
    f && g && g( {
      action: h,
      location: A.location,
      delta: 0
    })
  }
  function M(C) {
    return V2(C)
  }
  let A =  {
    get action() {
      return h
    },
    get location() {
      return n(l,
      d)
    },
    listen(C) {
      if(g) throw new Error("A history only accepts one active listener");
      return l.addEventListener(gy,
      p),
      g = C,
      () =>  {
        l.removeEventListener(gy,
        p),
        g = null
      }
    },
    createHref(C) {
      return a(l,
      C)
    },
    createURL: M,
    encodeLocation(C) {
      let D = M(C);
      return {
        pathname: D.pathname,
        search: D.search,
        hash: D.hash
      }
    },
    push: E,
    replace: w,
    go(C) {
      return d.go(C)
    }
  };
  return A
}
function V2(n,
a =  ! 1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin: window.location.href),
  Zt(s,
  "No window.location.(origin|href) available to create URL");
  let r = typeof n == "string" ? n: _o(n);
  return r = r.replace(/ $/,
  "%20"),
   ! a && r.startsWith("//") && (r = s + r),
  new URL(r,
  s)
}
function d0(n,
a,
s = "/") {
  return B2(n,
  a,
  s,
   ! 1)
}
function B2(n,
a,
s,
r) {
  let l = typeof a == "string" ? bs(a): a,
  f = na(l.pathname || "/",
  s);
  if(f == null) return null;
  let d = h0(n);
  k2(d);
  let h = null;
  for(let g = 0; h == null && g < d.length; ++ g) {
    let m = Q2(f);
    h = F2(d[g],
    m,
    r)
  }
  return h
}
function h0(n,
a = [],
s = [],
r = "",
l =  ! 1) {
  let f = (d,
  h,
  g = l,
  m) =>  {
    let v =  {
      relativePath: m === void 0 ? d.path || "": m,
      caseSensitive: d.caseSensitive ===  ! 0,
      childrenIndex: h,
      route: d
    };
    if(v.relativePath.startsWith("/")) {
      if( ! v.relativePath.startsWith(r) && g) return;
      Zt(v.relativePath.startsWith(r),
      `Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
      v.relativePath = v.relativePath.slice(r.length)
    }
    let p = jn([r,
    v.relativePath]),
    E = s.concat(v);
    d.children && d.children.length > 0 && (Zt(d.index !==  ! 0,
    `Index routes must not have child routes. Please remove all child routes from route path "${p}".`),
    h0(d.children,
    a,
    E,
    p,
    g)),
     ! (d.path == null &&  ! d.index) && a.push( {
      path: p,
      score: X2(p,
      d.index),
      routesMeta: E
    })
  };
  return n.forEach((d,
  h) =>  {
    if(d.path === "" ||  ! d.path ?. includes("?")) f(d,
    h);
    else for(let g of m0(d.path)) f(d,
    h,
     ! 0,
    g)
  }),
  a
}
function m0(n) {
  let a = n.split("/");
  if(a.length === 0) return[];
  let[s,
  ...r] = a,
  l = s.endsWith("?"),
  f = s.replace(/\?$/,
  "");
  if(r.length === 0) return l ? [f,
  ""]: [f];
  let d = m0(r.join("/")),
  h = [];
  return h.push(...d.map(g => g === "" ? f: [f,
  g].join("/"))),
  l && h.push(...d),
  h.map(g => n.startsWith("/") && g === "" ? "/": g)
}
function k2(n) {
  n.sort((a,
  s) => a.score !== s.score ? s.score - a.score: K2(a.routesMeta.map(r => r.childrenIndex),
  s.routesMeta.map(r => r.childrenIndex)))
}
var U2 = /^:[\w-]+$/,
H2 = 3,
P2 = 2,
Y2 = 1,
G2 = 10,
q2 =  - 2,
xy = n => n === "*";
function X2(n,
a) {
  let s = n.split("/"),
  r = s.length;
  return s.some(xy) && (r += q2),
  a && (r += P2),
  s.filter(l =>  ! xy(l)).reduce((l,
  f) => l + (U2.test(f) ? H2: f === "" ? Y2: G2),
  r)
}
function K2(n,
a) {
  return n.length === a.length && n.slice(0,
   - 1).every((r,
  l) => r === a[l]) ? n[n.length - 1] - a[a.length - 1]: 0
}
function F2(n,
a,
s =  ! 1) {
  let {
    routesMeta: r
  }
   = n,
  l =  {
  },
  f = "/",
  d = [];
  for(let h = 0; h < r.length; ++ h) {
    let g = r[h],
    m = h === r.length - 1,
    v = f === "/" ? a: a.slice(f.length) || "/",
    p = Vl( {
      path: g.relativePath,
      caseSensitive: g.caseSensitive,
      end: m
    },
    v),
    E = g.route;
    if( ! p && m && s &&  ! r[r.length - 1].route.index && (p = Vl( {
      path: g.relativePath,
      caseSensitive: g.caseSensitive,
      end:  ! 1
    },
    v)),
     ! p) return null;
    Object.assign(l,
    p.params),
    d.push( {
      params: l,
      pathname: jn([f,
      p.pathname]),
      pathnameBase: I2(jn([f,
      p.pathnameBase])),
      route: E
    }),
    p.pathnameBase !== "/" && (f = jn([f,
    p.pathnameBase]))
  }
  return d
}
function Vl(n,
a) {
  typeof n == "string" && (n =  {
    path: n,
    caseSensitive:  ! 1,
    end:  ! 0
  });
  let[s,
  r] = Z2(n.path,
  n.caseSensitive,
  n.end),
  l = a.match(s);
  if( ! l) return null;
  let f = l[0],
  d = f.replace(/(.)\/+$/,
  "$1"),
  h = l.slice(1);
  return {
    params: r.reduce((m,
     {
      paramName: v,
      isOptional: p
    },
    E) =>  {
      if(v === "*") {
        let M = h[E] || "";
        d = f.slice(0,
        f.length - M.length).replace(/(.)\/+$/,
        "$1")
      }
      const w = h[E];
      return p &&  ! w ? m[v] = void 0: m[v] = (w || "").replace(/%2F/g,
      "/"),
      m
    },
     {
    }),
    pathname: f,
    pathnameBase: d,
    pattern: n
  }
}
function Z2(n,
a =  ! 1,
s =  ! 0) {
  zn(n === "*" ||  ! n.endsWith("*") || n.endsWith("/*"),
  `Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);
  let r = [],
  l = "^" + n.replace(/\/*\*?$/,
  "").replace(/^\/*/,
  "/").replace(/[\\.*+^${}|()[\]]/g,
  "\\$&").replace(/\/:([\w-]+)(\?)?/g,
  (d,
  h,
  g,
  m,
  v) =>  {
    if(r.push( {
      paramName: h,
      isOptional: g != null
    }),
    g) {
      let p = v.charAt(m + d.length);
      return p && p !== "/" ? "/([^\\/]*)": "(?:/([^\\/]*))?"
    }
    return "/([^\\/]+)"
  }).replace(/\/([\w-]+)\?(\/|$)/g,
  "(/$1)?$2");
  return n.endsWith("*") ? (r.push( {
    paramName: "*"
  }),
  l += n === "*" || n === "/*" ? "(.*)$": "(?:\\/(.+)|\\/*)$"): s ? l += "\\/*$": n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"),
  [new RegExp(l,
  a ? void 0: "i"),
  r]
}
function Q2(n) {
  try {
    return n.split("/").map(a => decodeURIComponent(a).replace(/\//g,
    "%2F")).join("/")
  }
  catch(a) {
    return zn( ! 1,
    `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),
    n
  }
}
function na(n,
a) {
  if(a === "/") return n;
  if( ! n.toLowerCase().startsWith(a.toLowerCase())) return null;
  let s = a.endsWith("/") ? a.length - 1: a.length,
  r = n.charAt(s);
  return r && r !== "/" ? null: n.slice(s) || "/"
}
var W2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function J2(n,
a = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: l = ""
  }
   = typeof n == "string" ? bs(n): n,
  f;
  return s ? (s = s.replace(/\/\/+/g,
  "/"),
  s.startsWith("/") ? f = by(s.substring(1),
  "/"): f = by(s,
  a)): f = a,
   {
    pathname: f,
    search: tE(r),
    hash: eE(l)
  }
}
function by(n,
a) {
  let s = a.replace(/\/+$/,
  "").split("/");
  return n.split("/").forEach(l =>  {
    l === ".." ? s.length > 1 && s.pop(): l !== "." && s.push(l)
  }),
  s.length > 1 ? s.join("/"): "/"
}
function Af(n,
a,
s,
r) {
  return `Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function $2(n) {
  return n.filter((a,
  s) => s === 0 || a.route.path && a.route.path.length > 0)
}
function p0(n) {
  let a = $2(n);
  return a.map((s,
  r) => r === a.length - 1 ? s.pathname: s.pathnameBase)
}
function Od(n,
a,
s,
r =  ! 1) {
  let l;
  typeof n == "string" ? l = bs(n): (l =  {
    ...n
  },
  Zt( ! l.pathname ||  ! l.pathname.includes("?"),
  Af("?",
  "pathname",
  "search",
  l)),
  Zt( ! l.pathname ||  ! l.pathname.includes("#"),
  Af("#",
  "pathname",
  "hash",
  l)),
  Zt( ! l.search ||  ! l.search.includes("#"),
  Af("#",
  "search",
  "hash",
  l)));
  let f = n === "" || l.pathname === "",
  d = f ? "/": l.pathname,
  h;
  if(d == null) h = s;
  else {
    let p = a.length - 1;
    if( ! r && d.startsWith("..")) {
      let E = d.split("/");
      for(; E[0] === ".."; ) E.shift(),
      p -= 1;
      l.pathname = E.join("/")
    }
    h = p >= 0 ? a[p]: "/"
  }
  let g = J2(l,
  h),
  m = d && d !== "/" && d.endsWith("/"),
  v = (f || d === ".") && s.endsWith("/");
  return ! g.pathname.endsWith("/") && (m || v) && (g.pathname += "/"),
  g
}
var jn = n => n.join("/").replace(/\/\/+/g,
"/"),
I2 = n => n.replace(/\/+$/,
"").replace(/^\/*/,
"/"),
tE = n =>  ! n || n === "?" ? "": n.startsWith("?") ? n: "?" + n,
eE = n =>  ! n || n === "#" ? "": n.startsWith("#") ? n: "#" + n,
nE = class {
  constructor(n,
  a,
  s,
  r =  ! 1) {
    this.status = n,
    this.statusText = a || "",
    this.internal = r,
    s instanceof Error ? (this.data = s.toString(),
    this.error = s): this.data = s
  }
};
function aE(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n
}
function iE(n) {
  return n.map(a => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,
  "/") || "/"
}
var g0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function y0(n,
a) {
  let s = n;
  if(typeof s != "string" ||  ! W2.test(s)) return {
    absoluteURL: void 0,
    isExternal:  ! 1,
    to: s
  };
  let r = s,
  l =  ! 1;
  if(g0) try {
    let f = new URL(window.location.href),
    d = s.startsWith("//") ? new URL(f.protocol + s): new URL(s),
    h = na(d.pathname,
    a);
    d.origin === f.origin && h != null ? s = h + d.search + d.hash: l =  ! 0
  }
  catch {
    zn( ! 1,
    `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
  }
  return {
    absoluteURL: r,
    isExternal: l,
    to: s
  }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var v0 = ["POST",
"PUT",
"PATCH",
"DELETE"];
new Set(v0);
var sE = ["GET",
...v0];
new Set(sE);
var Ss = S.createContext(null);
Ss.displayName = "DataRouter";
var Ql = S.createContext(null);
Ql.displayName = "DataRouterState";
var oE = S.createContext( ! 1),
x0 = S.createContext( {
  isTransitioning:  ! 1
});
x0.displayName = "ViewTransition";
var rE = S.createContext(new Map);
rE.displayName = "Fetchers";
var lE = S.createContext(null);
lE.displayName = "Await";
var un = S.createContext(null);
un.displayName = "Navigation";
var Po = S.createContext(null);
Po.displayName = "Location";
var aa = S.createContext( {
  outlet: null,
  matches: [],
  isDataRoute:  ! 1
});
aa.displayName = "Route";
var zd = S.createContext(null);
zd.displayName = "RouteError";
var b0 = "REACT_ROUTER_ERROR",
cE = "REDIRECT",
uE = "ROUTE_ERROR_RESPONSE";
function fE(n) {
  if(n.startsWith(`${b0}:${cE}:{`)) try {
    let a = JSON.parse(n.slice(28));
    if(typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean") return a
  }
  catch {
  }
}
function dE(n) {
  if(n.startsWith(`${b0}:${uE}:{`)) try {
    let a = JSON.parse(n.slice(40));
    if(typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string") return new nE(a.status,
    a.statusText,
    a.data)
  }
  catch {
  }
}
function hE(n,
 {
  relative: a
}
 =  {
}) {
  Zt(Yo(),
  "useHref() may be used only in the context of a <Router> component.");
  let {
    basename: s,
    navigator: r
  }
   = S.useContext(un),
   {
    hash: l,
    pathname: f,
    search: d
  }
   = Go(n,
   {
    relative: a
  }),
  h = f;
  return s !== "/" && (h = f === "/" ? s: jn([s,
  f])),
  r.createHref( {
    pathname: h,
    search: d,
    hash: l
  })
}
function Yo() {
  return S.useContext(Po) != null
}
function ia() {
  return Zt(Yo(),
  "useLocation() may be used only in the context of a <Router> component."),
  S.useContext(Po).location
}
var S0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function E0(n) {
  S.useContext(un).static || S.useLayoutEffect(n)
}
function mE() {
  let {
    isDataRoute: n
  }
   = S.useContext(aa);
  return n ? ME(): pE()
}
function pE() {
  Zt(Yo(),
  "useNavigate() may be used only in the context of a <Router> component.");
  let n = S.useContext(Ss),
   {
    basename: a,
    navigator: s
  }
   = S.useContext(un),
   {
    matches: r
  }
   = S.useContext(aa),
   {
    pathname: l
  }
   = ia(),
  f = JSON.stringify(p0(r)),
  d = S.useRef( ! 1);
  return E0(() =>  {
    d.current =  ! 0
  }),
  S.useCallback((g,
  m =  {
  }) =>  {
    if(zn(d.current,
    S0),
     ! d.current) return;
    if(typeof g == "number") {
      s.go(g);
      return
    }
    let v = Od(g,
    JSON.parse(f),
    l,
    m.relative === "path");
    n == null && a !== "/" && (v.pathname = v.pathname === "/" ? a: jn([a,
    v.pathname])),
    (m.replace ? s.replace: s.push)(v,
    m.state,
    m)
  },
  [a,
  s,
  f,
  l,
  n])
}
S.createContext(null);
function Go(n,
 {
  relative: a
}
 =  {
}) {
  let {
    matches: s
  }
   = S.useContext(aa),
   {
    pathname: r
  }
   = ia(),
  l = JSON.stringify(p0(s));
  return S.useMemo(() => Od(n,
  JSON.parse(l),
  r,
  a === "path"),
  [n,
  l,
  r,
  a])
}
function gE(n,
a) {
  return w0(n,
  a)
}
function w0(n,
a,
s) {
  Zt(Yo(),
  "useRoutes() may be used only in the context of a <Router> component.");
  let {
    navigator: r
  }
   = S.useContext(un),
   {
    matches: l
  }
   = S.useContext(aa),
  f = l[l.length - 1],
  d = f ? f.params:  {
  },
  h = f ? f.pathname: "/",
  g = f ? f.pathnameBase: "/",
  m = f && f.route;
   {
    let C = m && m.path || "";
    T0(h,
     ! m || C.endsWith("*") || C.endsWith("*?"),
    `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)
  }
  let v = ia(),
  p;
  if(a) {
    let C = typeof a == "string" ? bs(a): a;
    Zt(g === "/" || C.pathname ?. startsWith(g),
    `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`),
    p = C
  }
  else p = v;
  let E = p.pathname || "/",
  w = E;
  if(g !== "/") {
    let C = g.replace(/^\//,
    "").split("/");
    w = "/" + E.replace(/^\//,
    "").split("/").slice(C.length).join("/")
  }
  let M = d0(n,
   {
    pathname: w
  });
  zn(m || M != null,
  `No routes matched location "${p.pathname}${p.search}${p.hash}" `),
  zn(M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
  `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let A = SE(M && M.map(C => Object.assign( {
  },
  C,
   {
    params: Object.assign( {
    },
    d,
    C.params),
    pathname: jn([g,
    r.encodeLocation ? r.encodeLocation(C.pathname.replace(/\?/g,
    "%3F").replace(/#/g,
    "%23")).pathname: C.pathname]),
    pathnameBase: C.pathnameBase === "/" ? g: jn([g,
    r.encodeLocation ? r.encodeLocation(C.pathnameBase.replace(/\?/g,
    "%3F").replace(/#/g,
    "%23")).pathname: C.pathnameBase])
  })),
  l,
  s);
  return a && A ? S.createElement(Po.Provider,
   {
    value:  {
      location:  {
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default",
        unstable_mask: void 0,
        ...p
      },
      navigationType: "POP"
    }
  },
  A): A
}
function yE() {
  let n = CE(),
  a = aE(n) ? `${n.status} ${n.statusText}`: n instanceof Error ? n.message: JSON.stringify(n),
  s = n instanceof Error ? n.stack: null,
  r = "rgba(200,200,200, 0.5)",
  l =  {
    padding: "0.5rem",
    backgroundColor: r
  },
  f =  {
    padding: "2px 4px",
    backgroundColor: r
  },
  d = null;
  return console.error("Error handled by React Router default ErrorBoundary:",
  n),
  d = S.createElement(S.Fragment,
  null,
  S.createElement("p",
  null,
  "💿 Hey developer 👋"),
  S.createElement("p",
  null,
  "You can provide a way better UX than this when your app throws errors by providing your own ",
  S.createElement("code",
   {
    style: f
  },
  "ErrorBoundary"),
  " or",
  " ",
  S.createElement("code",
   {
    style: f
  },
  "errorElement"),
  " prop on your route.")),
  S.createElement(S.Fragment,
  null,
  S.createElement("h2",
  null,
  "Unexpected Application Error!"),
  S.createElement("h3",
   {
    style:  {
      fontStyle: "italic"
    }
  },
  a),
  s ? S.createElement("pre",
   {
    style: l
  },
  s): null,
  d)
}
var vE = S.createElement(yE,
null),
A0 = class extends S.Component {
  constructor(n) {
    super(n),
    this.state =  {
      location: n.location,
      revalidation: n.revalidation,
      error: n.error
    }
  }
  static getDerivedStateFromError(n) {
    return {
      error: n
    }
  }
  static getDerivedStateFromProps(n,
  a) {
    return a.location !== n.location || a.revalidation !== "idle" && n.revalidation === "idle" ?  {
      error: n.error,
      location: n.location,
      revalidation: n.revalidation
    }:  {
      error: n.error !== void 0 ? n.error: a.error,
      location: a.location,
      revalidation: n.revalidation || a.revalidation
    }
  }
  componentDidCatch(n,
  a) {
    this.props.onError ? this.props.onError(n,
    a): console.error("React Router caught the following error during render",
    n)
  }
  render() {
    let n = this.state.error;
    if(this.context && typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
      const s = dE(n.digest);
      s && (n = s)
    }
    let a = n !== void 0 ? S.createElement(aa.Provider,
     {
      value: this.props.routeContext
    },
    S.createElement(zd.Provider,
     {
      value: n,
      children: this.props.component
    })): this.props.children;
    return this.context ? S.createElement(xE,
     {
      error: n
    },
    a): a
  }
};
A0.contextType = oE;
var Tf = new WeakMap;
function xE( {
  children: n,
  error: a
}) {
  let {
    basename: s
  }
   = S.useContext(un);
  if(typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let r = fE(a.digest);
    if(r) {
      let l = Tf.get(a);
      if(l) throw l;
      let f = y0(r.location,
      s);
      if(g0 &&  ! Tf.get(a)) if(f.isExternal || r.reloadDocument) window.location.href = f.absoluteURL || f.to;
      else {
        const d = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(f.to,
         {
          replace: r.replace
        }));
        throw Tf.set(a,
        d),
        d
      }
      return S.createElement("meta",
       {
        httpEquiv: "refresh",
        content: `0;url=${f.absoluteURL||f.to}`
      })
    }
  }
  return n
}
function bE( {
  routeContext: n,
  match: a,
  children: s
}) {
  let r = S.useContext(Ss);
  return r && r.static && r.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = a.route.id),
  S.createElement(aa.Provider,
   {
    value: n
  },
  s)
}
function SE(n,
a = [],
s) {
  let r = s ?. state;
  if(n == null) {
    if( ! r) return null;
    if(r.errors) n = r.matches;
    else if(a.length === 0 &&  ! r.initialized && r.matches.length > 0) n = r.matches;
    else return null
  }
  let l = n,
  f = r ?. errors;
  if(f != null) {
    let v = l.findIndex(p => p.route.id && f ?. [p.route.id] !== void 0);
    Zt(v >= 0,
    `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
    l = l.slice(0,
    Math.min(l.length,
    v + 1))
  }
  let d =  ! 1,
  h =  - 1;
  if(s && r) {
    d = r.renderFallback;
    for(let v = 0; v < l.length; v++) {
      let p = l[v];
      if((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (h = v),
      p.route.id) {
        let {
          loaderData: E,
          errors: w
        }
         = r,
        M = p.route.loader &&  ! E.hasOwnProperty(p.route.id) && ( ! w || w[p.route.id] === void 0);
        if(p.route.lazy || M) {
          s.isStatic && (d =  ! 0),
          h >= 0 ? l = l.slice(0,
          h + 1): l = [l[0]];
          break
        }
      }
    }
  }
  let g = s ?. onError,
  m = r && g ? (v,
  p) =>  {
    g(v,
     {
      location: r.location,
      params: r.matches ?. [0] ?. params ??  {
      },
      unstable_pattern: iE(r.matches),
      errorInfo: p
    })
  }: void 0;
  return l.reduceRight((v,
  p,
  E) =>  {
    let w,
    M =  ! 1,
    A = null,
    C = null;
    r && (w = f && p.route.id ? f[p.route.id]: void 0,
    A = p.route.errorElement || vE,
    d && (h < 0 && E === 0 ? (T0("route-fallback",
     ! 1,
    "No `HydrateFallback` element provided to render during initial hydration"),
    M =  ! 0,
    C = null): h === E && (M =  ! 0,
    C = p.route.hydrateFallbackElement || null)));
    let D = a.concat(l.slice(0,
    E + 1)),
    B = () =>  {
      let L;
      return w ? L = A: M ? L = C: p.route.Component ? L = S.createElement(p.route.Component,
      null): p.route.element ? L = p.route.element: L = v,
      S.createElement(bE,
       {
        match: p,
        routeContext:  {
          outlet: v,
          matches: D,
          isDataRoute: r != null
        },
        children: L
      })
    };
    return r && (p.route.ErrorBoundary || p.route.errorElement || E === 0) ? S.createElement(A0,
     {
      location: r.location,
      revalidation: r.revalidation,
      component: A,
      error: w,
      children: B(),
      routeContext:  {
        outlet: null,
        matches: D,
        isDataRoute:  ! 0
      },
      onError: m
    }): B()
  },
  null)
}
function _d(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function EE(n) {
  let a = S.useContext(Ss);
  return Zt(a,
  _d(n)),
  a
}
function wE(n) {
  let a = S.useContext(Ql);
  return Zt(a,
  _d(n)),
  a
}
function AE(n) {
  let a = S.useContext(aa);
  return Zt(a,
  _d(n)),
  a
}
function Ld(n) {
  let a = AE(n),
  s = a.matches[a.matches.length - 1];
  return Zt(s.route.id,
  `${n} can only be used on routes that contain a unique "id"`),
  s.route.id
}
function TE() {
  return Ld("useRouteId")
}
function CE() {
  let n = S.useContext(zd),
  a = wE("useRouteError"),
  s = Ld("useRouteError");
  return n !== void 0 ? n: a.errors ?. [s]
}
function ME() {
  let {
    router: n
  }
   = EE("useNavigate"),
  a = Ld("useNavigate"),
  s = S.useRef( ! 1);
  return E0(() =>  {
    s.current =  ! 0
  }),
  S.useCallback(async(l,
  f =  {
  }) =>  {
    zn(s.current,
    S0),
    s.current && (typeof l == "number" ? await n.navigate(l): await n.navigate(l,
     {
      fromRouteId: a,
      ...f
    }))
  },
  [n,
  a])
}
var Sy =  {
};
function T0(n,
a,
s) {
   ! a &&  ! Sy[n] && (Sy[n] =  ! 0,
  zn( ! 1,
  s))
}
S.memo(RE);
function RE( {
  routes: n,
  future: a,
  state: s,
  isStatic: r,
  onError: l
}) {
  return w0(n,
  void 0,
   {
    state: s,
    isStatic: r,
    onError: l
  })
}
function wl(n) {
  Zt( ! 1,
  "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function NE( {
  basename: n = "/",
  children: a = null,
  location: s,
  navigationType: r = "POP",
  navigator: l,
  static: f =  ! 1,
  unstable_useTransitions: d
}) {
  Zt( ! Yo(),
  "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let h = n.replace(/^\/*/,
  "/"),
  g = S.useMemo(() => ( {
    basename: h,
    navigator: l,
    static: f,
    unstable_useTransitions: d,
    future:  {
    }
  }),
  [h,
  l,
  f,
  d]);
  typeof s == "string" && (s = bs(s));
  let {
    pathname: m = "/",
    search: v = "",
    hash: p = "",
    state: E = null,
    key: w = "default",
    unstable_mask: M
  }
   = s,
  A = S.useMemo(() =>  {
    let C = na(m,
    h);
    return C == null ? null:  {
      location:  {
        pathname: C,
        search: v,
        hash: p,
        state: E,
        key: w,
        unstable_mask: M
      },
      navigationType: r
    }
  },
  [h,
  m,
  v,
  p,
  E,
  w,
  r,
  M]);
  return zn(A != null,
  `<Router basename="${h}"> is not able to match the URL "${m}${v}${p}" because it does not start with the basename, so the <Router> won't render anything.`),
  A == null ? null: S.createElement(un.Provider,
   {
    value: g
  },
  S.createElement(Po.Provider,
   {
    children: a,
    value: A
  }))
}
function DE( {
  children: n,
  location: a
}) {
  return gE(td(n),
  a)
}
function td(n,
a = []) {
  let s = [];
  return S.Children.forEach(n,
  (r,
  l) =>  {
    if( ! S.isValidElement(r)) return;
    let f = [...a,
    l];
    if(r.type === S.Fragment) {
      s.push.apply(s,
      td(r.props.children,
      f));
      return
    }
    Zt(r.type === wl,
    `[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
    Zt( ! r.props.index ||  ! r.props.children,
    "An index route cannot have child routes.");
    let d =  {
      id: r.props.id || f.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      middleware: r.props.middleware,
      loader: r.props.loader,
      action: r.props.action,
      hydrateFallbackElement: r.props.hydrateFallbackElement,
      HydrateFallback: r.props.HydrateFallback,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.hasErrorBoundary ===  ! 0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (d.children = td(r.props.children,
    f)),
    s.push(d)
  }),
  s
}
var Al = "get",
Tl = "application/x-www-form-urlencoded";
function Wl(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement
}
function jE(n) {
  return Wl(n) && n.tagName.toLowerCase() === "button"
}
function OE(n) {
  return Wl(n) && n.tagName.toLowerCase() === "form"
}
function zE(n) {
  return Wl(n) && n.tagName.toLowerCase() === "input"
}
function _E(n) {
  return !  ! (n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function LE(n,
a) {
  return n.button === 0 && ( ! a || a === "_self") &&  ! _E(n)
}
var ul = null;
function VE() {
  if(ul === null) try {
    new FormData(document.createElement("form"),
    0),
    ul =  ! 1
  }
  catch {
    ul =  ! 0
  }
  return ul
}
var BE = new Set(["application/x-www-form-urlencoded",
"multipart/form-data",
"text/plain"]);
function Cf(n) {
  return n != null &&  ! BE.has(n) ? (zn( ! 1,
  `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tl}"`),
  null): n
}
function kE(n,
a) {
  let s,
  r,
  l,
  f,
  d;
  if(OE(n)) {
    let h = n.getAttribute("action");
    r = h ? na(h,
    a): null,
    s = n.getAttribute("method") || Al,
    l = Cf(n.getAttribute("enctype")) || Tl,
    f = new FormData(n)
  }
  else if(jE(n) || zE(n) && (n.type === "submit" || n.type === "image")) {
    let h = n.form;
    if(h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let g = n.getAttribute("formaction") || h.getAttribute("action");
    if(r = g ? na(g,
    a): null,
    s = n.getAttribute("formmethod") || h.getAttribute("method") || Al,
    l = Cf(n.getAttribute("formenctype")) || Cf(h.getAttribute("enctype")) || Tl,
    f = new FormData(h,
    n),
     ! VE()) {
      let {
        name: m,
        type: v,
        value: p
      }
       = n;
      if(v === "image") {
        let E = m ? `${m}.`: "";
        f.append(`${E}x`,
        "0"),
        f.append(`${E}y`,
        "0")
      }
      else m && f.append(m,
      p)
    }
  }
  else {
    if(Wl(n)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    s = Al,
    r = null,
    l = Tl,
    d = n
  }
  return f && l === "text/plain" && (d = f,
  f = void 0),
   {
    action: r,
    method: s.toLowerCase(),
    encType: l,
    formData: f,
    body: d
  }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vd(n,
a) {
  if(n ===  ! 1 || n === null || typeof n > "u") throw new Error(a)
}
function UE(n,
a,
s,
r) {
  let l = typeof n == "string" ? new URL(n,
  typeof window > "u" ? "server://singlefetch/": window.location.origin): n;
  return s ? l.pathname.endsWith("/") ? l.pathname = `${l.pathname}_.${r}`: l.pathname = `${l.pathname}.${r}`: l.pathname === "/" ? l.pathname = `_root.${r}`: a && na(l.pathname,
  a) === "/" ? l.pathname = `${a.replace(/\/$/,"")}/_root.${r}`: l.pathname = `${l.pathname.replace(/\/$/,"")}.${r}`,
  l
}
async function HE(n,
a) {
  if(n.id in a) return a[n.id];
  try {
    let s = await import(n.module);
    return a[n.id] = s,
    s
  }
  catch(s) {
    return console.error(`Error loading route module \`${n.module}\`, reloading page...`),
    console.error(s),
    window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
    window.location.reload(),
    new Promise(() =>  {
    })
  }
}
function PE(n) {
  return n == null ?  ! 1: n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string": typeof n.rel == "string" && typeof n.href == "string"
}
async function YE(n,
a,
s) {
  let r = await Promise.all(n.map(async l =>  {
    let f = a.routes[l.route.id];
    if(f) {
      let d = await HE(f,
      s);
      return d.links ? d.links(): []
    }
    return[]
  }));
  return KE(r.flat(1).filter(PE).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ?  {
    ...l,
    rel: "prefetch",
    as: "style"
  }:  {
    ...l,
    rel: "prefetch"
  }))
}
function Ey(n,
a,
s,
r,
l,
f) {
  let d = (g,
  m) => s[m] ? g.route.id !== s[m].route.id:  ! 0,
  h = (g,
  m) => s[m].pathname !== g.pathname || s[m].route.path ?. endsWith("*") && s[m].params["*"] !== g.params["*"];
  return f === "assets" ? a.filter((g,
  m) => d(g,
  m) || h(g,
  m)): f === "data" ? a.filter((g,
  m) =>  {
    let v = r.routes[g.route.id];
    if( ! v ||  ! v.hasLoader) return ! 1;
    if(d(g,
    m) || h(g,
    m)) return ! 0;
    if(g.route.shouldRevalidate) {
      let p = g.route.shouldRevalidate( {
        currentUrl: new URL(l.pathname + l.search + l.hash,
        window.origin),
        currentParams: s[0] ?. params ||  {
        },
        nextUrl: new URL(n,
        window.origin),
        nextParams: g.params,
        defaultShouldRevalidate:  ! 0
      });
      if(typeof p == "boolean") return p
    }
    return ! 0
  }): []
}
function GE(n,
a,
 {
  includeHydrateFallback: s
}
 =  {
}) {
  return qE(n.map(r =>  {
    let l = a.routes[r.route.id];
    if( ! l) return[];
    let f = [l.module];
    return l.clientActionModule && (f = f.concat(l.clientActionModule)),
    l.clientLoaderModule && (f = f.concat(l.clientLoaderModule)),
    s && l.hydrateFallbackModule && (f = f.concat(l.hydrateFallbackModule)),
    l.imports && (f = f.concat(l.imports)),
    f
  }).flat(1))
}
function qE(n) {
  return[...new Set(n)]
}
function XE(n) {
  let a =  {
  },
  s = Object.keys(n).sort();
  for(let r of s) a[r] = n[r];
  return a
}
function KE(n,
a) {
  let s = new Set;
  return new Set(a),
  n.reduce((r,
  l) =>  {
    let f = JSON.stringify(XE(l));
    return s.has(f) || (s.add(f),
    r.push( {
      key: f,
      link: l
    })),
    r
  },
  [])
}
function C0() {
  let n = S.useContext(Ss);
  return Vd(n,
  "You must render this element inside a <DataRouterContext.Provider> element"),
  n
}
function FE() {
  let n = S.useContext(Ql);
  return Vd(n,
  "You must render this element inside a <DataRouterStateContext.Provider> element"),
  n
}
var Bd = S.createContext(void 0);
Bd.displayName = "FrameworkContext";
function M0() {
  let n = S.useContext(Bd);
  return Vd(n,
  "You must render this element inside a <HydratedRouter> element"),
  n
}
function ZE(n,
a) {
  let s = S.useContext(Bd),
  [r,
  l] = S.useState( ! 1),
  [f,
  d] = S.useState( ! 1),
   {
    onFocus: h,
    onBlur: g,
    onMouseEnter: m,
    onMouseLeave: v,
    onTouchStart: p
  }
   = a,
  E = S.useRef(null);
  S.useEffect(() =>  {
    if(n === "render" && d( ! 0),
    n === "viewport") {
      let A = D =>  {
        D.forEach(B =>  {
          d(B.isIntersecting)
        })
      },
      C = new IntersectionObserver(A,
       {
        threshold: .5
      });
      return E.current && C.observe(E.current),
      () =>  {
        C.disconnect()
      }
    }
  },
  [n]),
  S.useEffect(() =>  {
    if(r) {
      let A = setTimeout(() =>  {
        d( ! 0)
      },
      100);
      return() =>  {
        clearTimeout(A)
      }
    }
  },
  [r]);
  let w = () =>  {
    l( ! 0)
  },
  M = () =>  {
    l( ! 1),
    d( ! 1)
  };
  return s ? n !== "intent" ? [f,
  E,
   {
  }]: [f,
  E,
   {
    onFocus: To(h,
    w),
    onBlur: To(g,
    M),
    onMouseEnter: To(m,
    w),
    onMouseLeave: To(v,
    M),
    onTouchStart: To(p,
    w)
  }]: [ ! 1,
  E,
   {
  }]
}
function To(n,
a) {
  return s =>  {
    n && n(s),
    s.defaultPrevented || a(s)
  }
}
function QE( {
  page: n,
  ...a
}) {
  let {
    router: s
  }
   = C0(),
  r = S.useMemo(() => d0(s.routes,
  n,
  s.basename),
  [s.routes,
  n,
  s.basename]);
  return r ? S.createElement(JE,
   {
    page: n,
    matches: r,
    ...a
  }): null
}
function WE(n) {
  let {
    manifest: a,
    routeModules: s
  }
   = M0(),
  [r,
  l] = S.useState([]);
  return S.useEffect(() =>  {
    let f =  ! 1;
    return YE(n,
    a,
    s).then(d =>  {
      f || l(d)
    }),
    () =>  {
      f =  ! 0
    }
  },
  [n,
  a,
  s]),
  r
}
function JE( {
  page: n,
  matches: a,
  ...s
}) {
  let r = ia(),
   {
    future: l,
    manifest: f,
    routeModules: d
  }
   = M0(),
   {
    basename: h
  }
   = C0(),
   {
    loaderData: g,
    matches: m
  }
   = FE(),
  v = S.useMemo(() => Ey(n,
  a,
  m,
  f,
  r,
  "data"),
  [n,
  a,
  m,
  f,
  r]),
  p = S.useMemo(() => Ey(n,
  a,
  m,
  f,
  r,
  "assets"),
  [n,
  a,
  m,
  f,
  r]),
  E = S.useMemo(() =>  {
    if(n === r.pathname + r.search + r.hash) return[];
    let A = new Set,
    C =  ! 1;
    if(a.forEach(B =>  {
      let L = f.routes[B.route.id];
       ! L ||  ! L.hasLoader || ( ! v.some(q => q.route.id === B.route.id) && B.route.id in g && d[B.route.id] ?. shouldRevalidate || L.hasClientLoader ? C =  ! 0: A.add(B.route.id))
    }),
    A.size === 0) return[];
    let D = UE(n,
    h,
    l.unstable_trailingSlashAwareDataRequests,
    "data");
    return C && A.size > 0 && D.searchParams.set("_routes",
    a.filter(B => A.has(B.route.id)).map(B => B.route.id).join(",")),
    [D.pathname + D.search]
  },
  [h,
  l.unstable_trailingSlashAwareDataRequests,
  g,
  r,
  f,
  v,
  a,
  n,
  d]),
  w = S.useMemo(() => GE(p,
  f),
  [p,
  f]),
  M = WE(p);
  return S.createElement(S.Fragment,
  null,
  E.map(A => S.createElement("link",
   {
    key: A,
    rel: "prefetch",
    as: "fetch",
    href: A,
    ...s
  })),
  w.map(A => S.createElement("link",
   {
    key: A,
    rel: "modulepreload",
    href: A,
    ...s
  })),
  M.map(( {
    key: A,
    link: C
  }) => S.createElement("link",
   {
    key: A,
    nonce: s.nonce,
    ...C,
    crossOrigin: C.crossOrigin ?? s.crossOrigin
  })))
}
function $E(...n) {
  return a =>  {
    n.forEach(s =>  {
      typeof s == "function" ? s(a): s != null && (s.current = a)
    })
  }
}
var IE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  IE && (window.__reactRouterVersion = "7.13.1")
}
catch {
}
function createHashHistory(win) {
  win = win || window;
  function getHashLocation() {
    var hash = win.location.hash || "#/";
    var path = hash.slice(1) || "/";
    var qIdx = path.indexOf("?");
    var search = "",
    pathname = path;
    if(qIdx >= 0) {
      pathname = path.slice(0,
      qIdx);
      search = path.slice(qIdx);
    }
    return If("",
     {
      pathname: pathname,
      search: search,
      hash: ""
    },
    null,
    "default");
  }
  var listeners = [];
  var action = "POP";
  var location = getHashLocation();
  function listen(fn) {
    listeners.push(fn);
    return function() {
      listeners = listeners.filter(function(f) {
        return f !== fn;
      });
    };
  }
  function handleHashChange() {
    location = getHashLocation();
    action = "POP";
    listeners.forEach(function(fn) {
      fn( {
        action: action,
        location: location,
        delta: null
      });
    });
  }
  win.addEventListener("hashchange",
  handleHashChange);
  function createHref(to) {
    var path = typeof to === "string" ? to: _o(to);
    return win.location.pathname + win.location.search + "#" + path;
  }
  function push(to,
  state) {
    var path = typeof to === "string" ? to: _o(to);
    win.location.hash = "#" + path;
    location = getHashLocation();
    action = "PUSH";
    listeners.forEach(function(fn) {
      fn( {
        action: action,
        location: location,
        delta: 1
      });
    });
  }
  function replace(to,
  state) {
    var path = typeof to === "string" ? to: _o(to);
    var href = win.location.pathname + win.location.search + "#" + path;
    win.history.replaceState(null,
    "",
    href);
    location = getHashLocation();
    action = "REPLACE";
    listeners.forEach(function(fn) {
      fn( {
        action: action,
        location: location,
        delta: 0
      });
    });
  }
  function go(delta) {
    win.history.go(delta);
  }
  return {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    listen: listen,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    encodeLocation: function(to) {
      return to;
    },
  };
}
function tw( {
  basename: n,
  children: a,
  unstable_useTransitions: s,
  window: r
}) {
  let l = S.useRef();
  l.current == null && (l.current = createHashHistory(r));
  let f = l.current,
  [d,
  h] = S.useState( {
    action: f.action,
    location: f.location
  }),
  g = S.useCallback(m =>  {
    s ===  ! 1 ? h(m): S.startTransition(() => h(m))
  },
  [s]);
  return S.useLayoutEffect(() => f.listen(g),
  [f,
  g]),
  S.createElement(NE,
   {
    basename: n,
    children: a,
    location: d.location,
    navigationType: d.action,
    navigator: f,
    unstable_useTransitions: s
  })
}
var R0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
ea = S.forwardRef(function( {
  onClick: a,
  discover: s = "render",
  prefetch: r = "none",
  relative: l,
  reloadDocument: f,
  replace: d,
  unstable_mask: h,
  state: g,
  target: m,
  to: v,
  preventScrollReset: p,
  viewTransition: E,
  unstable_defaultShouldRevalidate: w,
  ...M
},
A) {
  let {
    basename: C,
    navigator: D,
    unstable_useTransitions: B
  }
   = S.useContext(un),
  L = typeof v == "string" && R0.test(v),
  q = y0(v,
  C);
  v = q.to;
  let Q = hE(v,
   {
    relative: l
  }),
  $ = ia(),
  F = null;
  if(h) {
    let yt = Od(h,
    [],
    $.unstable_mask ? $.unstable_mask.pathname: "/",
     ! 0);
    C !== "/" && (yt.pathname = yt.pathname === "/" ? C: jn([C,
    yt.pathname])),
    F = D.createHref(yt)
  }
  let[X,
  rt,
  tt] = ZE(r,
  M),
  mt = iw(v,
   {
    replace: d,
    unstable_mask: h,
    state: g,
    target: m,
    preventScrollReset: p,
    relative: l,
    viewTransition: E,
    unstable_defaultShouldRevalidate: w,
    unstable_useTransitions: B
  });
  function pt(yt) {
    a && a(yt),
    yt.defaultPrevented || mt(yt)
  }
  let Rt =  ! (q.isExternal || f),
  Nt = S.createElement("a",
   {
    ...M,
    ...tt,
    href: (Rt ? F: void 0) || q.absoluteURL || Q,
    onClick: Rt ? pt: a,
    ref: $E(A,
    rt),
    target: m,
    "data-discover":  ! L && s === "render" ? "true": void 0
  });
  return X &&  ! L ? S.createElement(S.Fragment,
  null,
  Nt,
  S.createElement(QE,
   {
    page: Q
  })): Nt
});
ea.displayName = "Link";
var ew = S.forwardRef(function( {
  "aria-current": a = "page",
  caseSensitive: s =  ! 1,
  className: r = "",
  end: l =  ! 1,
  style: f,
  to: d,
  viewTransition: h,
  children: g,
  ...m
},
v) {
  let p = Go(d,
   {
    relative: m.relative
  }),
  E = ia(),
  w = S.useContext(Ql),
   {
    navigator: M,
    basename: A
  }
   = S.useContext(un),
  C = w != null && cw(p) && h ===  ! 0,
  D = M.encodeLocation ? M.encodeLocation(p).pathname: p.pathname,
  B = E.pathname,
  L = w && w.navigation && w.navigation.location ? w.navigation.location.pathname: null;
  s || (B = B.toLowerCase(),
  L = L ? L.toLowerCase(): null,
  D = D.toLowerCase()),
  L && A && (L = na(L,
  A) || L);
  const q = D !== "/" && D.endsWith("/") ? D.length - 1: D.length;
  let Q = B === D ||  ! l && B.startsWith(D) && B.charAt(q) === "/",
  $ = L != null && (L === D ||  ! l && L.startsWith(D) && L.charAt(D.length) === "/"),
  F =  {
    isActive: Q,
    isPending: $,
    isTransitioning: C
  },
  X = Q ? a: void 0,
  rt;
  typeof r == "function" ? rt = r(F): rt = [r,
  Q ? "active": null,
  $ ? "pending": null,
  C ? "transitioning": null].filter(Boolean).join(" ");
  let tt = typeof f == "function" ? f(F): f;
  return S.createElement(ea,
   {
    ...m,
    "aria-current": X,
    className: rt,
    ref: v,
    style: tt,
    to: d,
    viewTransition: h
  },
  typeof g == "function" ? g(F): g)
});
ew.displayName = "NavLink";
var nw = S.forwardRef(( {
  discover: n = "render",
  fetcherKey: a,
  navigate: s,
  reloadDocument: r,
  replace: l,
  state: f,
  method: d = Al,
  action: h,
  onSubmit: g,
  relative: m,
  preventScrollReset: v,
  viewTransition: p,
  unstable_defaultShouldRevalidate: E,
  ...w
},
M) =>  {
  let {
    unstable_useTransitions: A
  }
   = S.useContext(un),
  C = rw(),
  D = lw(h,
   {
    relative: m
  }),
  B = d.toLowerCase() === "get" ? "get": "post",
  L = typeof h == "string" && R0.test(h),
  q = Q =>  {
    if(g && g(Q),
    Q.defaultPrevented) return;
    Q.preventDefault();
    let $ = Q.nativeEvent.submitter,
    F = $ ?. getAttribute("formmethod") || d,
    X = () => C($ || Q.currentTarget,
     {
      fetcherKey: a,
      method: F,
      navigate: s,
      replace: l,
      state: f,
      relative: m,
      preventScrollReset: v,
      viewTransition: p,
      unstable_defaultShouldRevalidate: E
    });
    A && s !==  ! 1 ? S.startTransition(() => X()): X()
  };
  return S.createElement("form",
   {
    ref: M,
    method: B,
    action: D,
    onSubmit: r ? g: q,
    ...w,
    "data-discover":  ! L && n === "render" ? "true": void 0
  })
});
nw.displayName = "Form";
function aw(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function N0(n) {
  let a = S.useContext(Ss);
  return Zt(a,
  aw(n)),
  a
}
function iw(n,
 {
  target: a,
  replace: s,
  unstable_mask: r,
  state: l,
  preventScrollReset: f,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: m
}
 =  {
}) {
  let v = mE(),
  p = ia(),
  E = Go(n,
   {
    relative: d
  });
  return S.useCallback(w =>  {
    if(LE(w,
    a)) {
      w.preventDefault();
      let M = s !== void 0 ? s: _o(p) === _o(E),
      A = () => v(n,
       {
        replace: M,
        unstable_mask: r,
        state: l,
        preventScrollReset: f,
        relative: d,
        viewTransition: h,
        unstable_defaultShouldRevalidate: g
      });
      m ? S.startTransition(() => A()): A()
    }
  },
  [p,
  v,
  E,
  s,
  r,
  l,
  a,
  n,
  f,
  d,
  h,
  g,
  m])
}
var sw = 0,
ow = () => `__${String(++sw)}__`;
function rw() {
  let {
    router: n
  }
   = N0("useSubmit"),
   {
    basename: a
  }
   = S.useContext(un),
  s = TE(),
  r = n.fetch,
  l = n.navigate;
  return S.useCallback(async(f,
  d =  {
  }) =>  {
    let {
      action: h,
      method: g,
      encType: m,
      formData: v,
      body: p
    }
     = kE(f,
    a);
    if(d.navigate ===  ! 1) {
      let E = d.fetcherKey || ow();
      await r(E,
      s,
      d.action || h,
       {
        unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
        preventScrollReset: d.preventScrollReset,
        formData: v,
        body: p,
        formMethod: d.method || g,
        formEncType: d.encType || m,
        flushSync: d.flushSync
      })
    }
    else await l(d.action || h,
     {
      unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
      preventScrollReset: d.preventScrollReset,
      formData: v,
      body: p,
      formMethod: d.method || g,
      formEncType: d.encType || m,
      replace: d.replace,
      state: d.state,
      fromRouteId: s,
      flushSync: d.flushSync,
      viewTransition: d.viewTransition
    })
  },
  [r,
  l,
  a,
  s])
}
function lw(n,
 {
  relative: a
}
 =  {
}) {
  let {
    basename: s
  }
   = S.useContext(un),
  r = S.useContext(aa);
  Zt(r,
  "useFormAction must be used inside a RouteContext");
  let[l] = r.matches.slice( - 1),
  f =  {
    ...Go(n || ".",
     {
      relative: a
    })
  },
  d = ia();
  if(n == null) {
    f.search = d.search;
    let h = new URLSearchParams(f.search),
    g = h.getAll("index");
    if(g.some(v => v === "")) {
      h.delete("index"),
      g.filter(p => p).forEach(p => h.append("index",
      p));
      let v = h.toString();
      f.search = v ? `?${v}`: ""
    }
  }
  return( ! n || n === ".") && l.route.index && (f.search = f.search ? f.search.replace(/^\?/,
  "?index&"): "?index"),
  s !== "/" && (f.pathname = f.pathname === "/" ? s: jn([s,
  f.pathname])),
  _o(f)
}
function cw(n,
 {
  relative: a
}
 =  {
}) {
  let s = S.useContext(x0);
  Zt(s != null,
  "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let {
    basename: r
  }
   = N0("useViewTransitionState"),
  l = Go(n,
   {
    relative: a
  });
  if( ! s.isTransitioning) return ! 1;
  let f = na(s.currentLocation.pathname,
  r) || s.currentLocation.pathname,
  d = na(s.nextLocation.pathname,
  r) || s.nextLocation.pathname;
  return Vl(l.pathname,
  d) != null || Vl(l.pathname,
  f) != null
}
var D0 = f0();
const j0 = u0(D0);
const uw = n => n.replace(/([a-z0-9])([A-Z])/g,
"$1-$2").toLowerCase(),
fw = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g,
(a,
s,
r) => r ? r.toUpperCase(): s.toLowerCase()),
wy = n =>  {
  const a = fw(n);
  return a.charAt(0).toUpperCase() + a.slice(1)
},
O0 = (...n) => n.filter((a,
s,
r) =>  !  ! a && a.trim() !== "" && r.indexOf(a) === s).join(" ").trim(),
dw = n =>  {
  for(const a in n) if(a.startsWith("aria-") || a === "role" || a === "title") return ! 0
};
var hw =  {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const mw = S.forwardRef(( {
  color: n = "currentColor",
  size: a = 24,
  strokeWidth: s = 2,
  absoluteStrokeWidth: r,
  className: l = "",
  children: f,
  iconNode: d,
  ...h
},
g) => S.createElement("svg",
 {
  ref: g,
  ...hw,
  width: a,
  height: a,
  stroke: n,
  strokeWidth: r ? Number(s) * 24 / Number(a): s,
  className: O0("lucide",
  l),
  ... ! f &&  ! dw(h) &&  {
    "aria-hidden": "true"
  },
  ...h
},
[...d.map(([m,
v]) => S.createElement(m,
v)),
...Array.isArray(f) ? f: [f]]));
const Ht = (n,
a) =>  {
  const s = S.forwardRef(( {
    className: r,
    ...l
  },
  f) => S.createElement(mw,
   {
    ref: f,
    iconNode: a,
    className: O0(`lucide-${uw(wy(n))}`,
    `lucide-${n}`,
    r),
    ...l
  }));
  return s.displayName = wy(n),
  s
};
const pw = [["path",
 {
  d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
  key: "1yiouv"
}],
["circle",
 {
  cx: "12",
  cy: "8",
  r: "6",
  key: "1vp47v"
}]],
gw = Ht("award",
pw);
const yw = [["path",
 {
  d: "M12 7v14",
  key: "1akyts"
}],
["path",
 {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  key: "ruj8y"
}]],
vw = Ht("book-open",
yw);
const xw = [["path",
 {
  d: "M12 10h.01",
  key: "1nrarc"
}],
["path",
 {
  d: "M12 14h.01",
  key: "1etili"
}],
["path",
 {
  d: "M12 6h.01",
  key: "1vi96p"
}],
["path",
 {
  d: "M16 10h.01",
  key: "1m94wz"
}],
["path",
 {
  d: "M16 14h.01",
  key: "1gbofw"
}],
["path",
 {
  d: "M16 6h.01",
  key: "1x0f13"
}],
["path",
 {
  d: "M8 10h.01",
  key: "19clt8"
}],
["path",
 {
  d: "M8 14h.01",
  key: "6423bh"
}],
["path",
 {
  d: "M8 6h.01",
  key: "1dz90k"
}],
["path",
 {
  d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
  key: "cabbwy"
}],
["rect",
 {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2",
  key: "1uxh74"
}]],
bw = Ht("building",
xw);
const Sw = [["path",
 {
  d: "M8 2v4",
  key: "1cmpym"
}],
["path",
 {
  d: "M16 2v4",
  key: "4m81vk"
}],
["rect",
 {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}],
["path",
 {
  d: "M3 10h18",
  key: "8toen8"
}],
["path",
 {
  d: "m9 16 2 2 4-4",
  key: "19s6y9"
}]],
Ew = Ht("calendar-check",
Sw);
const ww = [["path",
 {
  d: "M21.801 10A10 10 0 1 1 17 3.335",
  key: "yps3ct"
}],
["path",
 {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]],
Ay = Ht("circle-check-big",
ww);
const Aw = [["circle",
 {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}],
["path",
 {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]],
Tw = Ht("circle-check",
Aw);
const Cw = [["rect",
 {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}],
["path",
 {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}],
["path",
 {
  d: "M12 11h4",
  key: "1jrz19"
}],
["path",
 {
  d: "M12 16h4",
  key: "n85exb"
}],
["path",
 {
  d: "M8 11h.01",
  key: "1dfujw"
}],
["path",
 {
  d: "M8 16h.01",
  key: "18s6g9"
}]],
Mw = Ht("clipboard-list",
Cw);
const Rw = [["rect",
 {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "ynyp8z"
}],
["line",
 {
  x1: "2",
  x2: "22",
  y1: "10",
  y2: "10",
  key: "1b3vmo"
}]],
Nw = Ht("credit-card",
Rw);
const Dw = [["path",
 {
  d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
  key: "1nclc0"
}],
["circle",
 {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]],
jw = Ht("eye",
Dw);
const Ow = [["path",
 {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  key: "1jg4f8"
}]],
zw = Ht("facebook",
Ow);
const _w = [["path",
 {
  d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
  key: "1oefj6"
}],
["path",
 {
  d: "M14 2v5a1 1 0 0 0 1 1h5",
  key: "wfsgrz"
}],
["path",
 {
  d: "M10 9H8",
  key: "b1mrlr"
}],
["path",
 {
  d: "M16 13H8",
  key: "t4e002"
}],
["path",
 {
  d: "M16 17H8",
  key: "z1uh3a"
}]],
z0 = Ht("file-text",
_w);
const Lw = [["path",
 {
  d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
  key: "j76jl0"
}],
["path",
 {
  d: "M22 10v6",
  key: "1lu8f3"
}],
["path",
 {
  d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
  key: "1r8lef"
}]],
Ty = Ht("graduation-cap",
Lw);
const Vw = [["path",
 {
  d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
  key: "mvr1a0"
}]],
Bw = Ht("heart",
Vw);
const kw = [["circle",
 {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}],
["path",
 {
  d: "M12 16v-4",
  key: "1dtifu"
}],
["path",
 {
  d: "M12 8h.01",
  key: "e9boi3"
}]],
Uw = Ht("info",
kw);
const Hw = [["rect",
 {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5",
  key: "2e1cvw"
}],
["path",
 {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
  key: "9exkf1"
}],
["line",
 {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5",
  key: "r4j83e"
}]],
Pw = Ht("instagram",
Hw);
const Yw = [["path",
 {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]],
Gw = Ht("loader-circle",
Yw);
const qw = [["path",
 {
  d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
  key: "132q7q"
}],
["rect",
 {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2",
  key: "izxlao"
}]],
_0 = Ht("mail",
qw);
const Xw = [["path",
 {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}],
["circle",
 {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]],
L0 = Ht("map-pin",
Xw);
const Kw = [["path",
 {
  d: "M4 5h16",
  key: "1tepv9"
}],
["path",
 {
  d: "M4 12h16",
  key: "1lakjw"
}],
["path",
 {
  d: "M4 19h16",
  key: "1djgab"
}]],
Fw = Ht("menu",
Kw);
const Zw = [["path",
 {
  d: "m15 9-6 6",
  key: "1uzhvr"
}],
["path",
 {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
  key: "2d38gg"
}],
["path",
 {
  d: "m9 9 6 6",
  key: "z0biqf"
}]],
Qw = Ht("octagon-x",
Zw);
const Ww = [["path",
 {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]],
ed = Ht("phone",
Ww);
const Jw = [["circle",
 {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}],
["circle",
 {
  cx: "12",
  cy: "12",
  r: "6",
  key: "1vlfrh"
}],
["circle",
 {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]],
$w = Ht("target",
Jw);
const Iw = [["path",
 {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
  key: "wmoenq"
}],
["path",
 {
  d: "M12 9v4",
  key: "juzpu7"
}],
["path",
 {
  d: "M12 17h.01",
  key: "p32p05"
}]],
tA = Ht("triangle-alert",
Iw);
const eA = [["path",
 {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}],
["path",
 {
  d: "M16 3.128a4 4 0 0 1 0 7.744",
  key: "16gr8j"
}],
["path",
 {
  d: "M22 21v-2a4 4 0 0 0-3-3.87",
  key: "kshegd"
}],
["circle",
 {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]],
nA = Ht("users",
eA);
const aA = [["path",
 {
  d: "M18 6 6 18",
  key: "1bl5f8"
}],
["path",
 {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]],
iA = Ht("x",
aA);
const sA = [["path",
 {
  d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
  key: "1q2vi4"
}],
["path",
 {
  d: "m10 15 5-3-5-3z",
  key: "1jp15x"
}]],
oA = Ht("youtube",
sA);
var rA = (n,
a,
s,
r,
l,
f,
d,
h) =>  {
  let g = document.documentElement,
  m = ["light",
  "dark"];
  function v(w) {
    (Array.isArray(n) ? n: [n]).forEach(M =>  {
      let A = M === "class",
      C = A && f ? l.map(D => f[D] || D): l;
      A ? (g.classList.remove(...C),
      g.classList.add(f && f[w] ? f[w]: w)): g.setAttribute(M,
      w)
    }),
    p(w)
  }
  function p(w) {
    h && m.includes(w) && (g.style.colorScheme = w)
  }
  function E() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light"
  }
  if(r) v(r);
  else try {
    let w = localStorage.getItem(a) || s,
    M = d && w === "system" ? E(): w;
    v(M)
  }
  catch {
  }
},
lA = S.createContext(void 0),
cA =  {
  setTheme: n =>  {
  },
  themes: []
},
uA = () =>  {
  var n;
  return(n = S.useContext(lA)) != null ? n: cA
};
S.memo(( {
  forcedTheme: n,
  storageKey: a,
  attribute: s,
  enableSystem: r,
  enableColorScheme: l,
  defaultTheme: f,
  value: d,
  themes: h,
  nonce: g,
  scriptProps: m
}) =>  {
  let v = JSON.stringify([s,
  a,
  f,
  n,
  h,
  d,
  r,
  l]).slice(1,
   - 1);
  return S.createElement("script",
   {
    ...m,
    suppressHydrationWarning:  ! 0,
    nonce: typeof window > "u" ? g: "",
    dangerouslySetInnerHTML:  {
      __html: `(${rA.toString()})(${v})`
    }
  })
});
function fA(n) {
  if(typeof document > "u") return;
  let a = document.head || document.getElementsByTagName("head")[0],
  s = document.createElement("style");
  s.type = "text/css",
  a.appendChild(s),
  s.styleSheet ? s.styleSheet.cssText = n: s.appendChild(document.createTextNode(n))
}
const dA = n =>  {
  switch(n) {
    case "success": return pA;
    case "info": return yA;
    case "warning": return gA;
    case "error": return vA;
    default: return null
  }
},
hA = Array(12).fill(0),
mA = ( {
  visible: n,
  className: a
}) => J.createElement("div",
 {
  className: ["sonner-loading-wrapper",
  a].filter(Boolean).join(" "),
  "data-visible": n
},
J.createElement("div",
 {
  className: "sonner-spinner"
},
hA.map((s,
r) => J.createElement("div",
 {
  className: "sonner-loading-bar",
  key: `spinner-bar-${r}`
})))),
pA = J.createElement("svg",
 {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
},
J.createElement("path",
 {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})),
gA = J.createElement("svg",
 {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
},
J.createElement("path",
 {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})),
yA = J.createElement("svg",
 {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
},
J.createElement("path",
 {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})),
vA = J.createElement("svg",
 {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
},
J.createElement("path",
 {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})),
xA = J.createElement("svg",
 {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
},
J.createElement("line",
 {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}),
J.createElement("line",
 {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})),
bA = () =>  {
  const[n,
  a] = J.useState(document.hidden);
  return J.useEffect(() =>  {
    const s = () =>  {
      a(document.hidden)
    };
    return document.addEventListener("visibilitychange",
    s),
    () => window.removeEventListener("visibilitychange",
    s)
  },
  []),
  n
};
let nd = 1;
class SA {
  constructor() {
    this.subscribe = a => (this.subscribers.push(a),
    () =>  {
      const s = this.subscribers.indexOf(a);
      this.subscribers.splice(s,
      1)
    }),
    this.publish = a =>  {
      this.subscribers.forEach(s => s(a))
    },
    this.addToast = a =>  {
      this.publish(a),
      this.toasts = [...this.toasts,
      a]
    },
    this.create = a =>  {
      var s;
      const {
        message: r,
        ...l
      }
       = a,
      f = typeof a ?. id == "number" || ((s = a.id) == null ? void 0: s.length) > 0 ? a.id: nd++,
      d = this.toasts.find(g => g.id === f),
      h = a.dismissible === void 0 ?  ! 0: a.dismissible;
      return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
      d ? this.toasts = this.toasts.map(g => g.id === f ? (this.publish( {
        ...g,
        ...a,
        id: f,
        title: r
      }),
       {
        ...g,
        ...a,
        id: f,
        dismissible: h,
        title: r
      }): g): this.addToast( {
        title: r,
        ...l,
        dismissible: h,
        id: f
      }),
      f
    },
    this.dismiss = a => (a ? (this.dismissedToasts.add(a),
    requestAnimationFrame(() => this.subscribers.forEach(s => s( {
      id: a,
      dismiss:  ! 0
    })))): this.toasts.forEach(s =>  {
      this.subscribers.forEach(r => r( {
        id: s.id,
        dismiss:  ! 0
      }))
    }),
    a),
    this.message = (a,
    s) => this.create( {
      ...s,
      message: a
    }),
    this.error = (a,
    s) => this.create( {
      ...s,
      message: a,
      type: "error"
    }),
    this.success = (a,
    s) => this.create( {
      ...s,
      type: "success",
      message: a
    }),
    this.info = (a,
    s) => this.create( {
      ...s,
      type: "info",
      message: a
    }),
    this.warning = (a,
    s) => this.create( {
      ...s,
      type: "warning",
      message: a
    }),
    this.loading = (a,
    s) => this.create( {
      ...s,
      type: "loading",
      message: a
    }),
    this.promise = (a,
    s) =>  {
      if( ! s) return;
      let r;
      s.loading !== void 0 && (r = this.create( {
        ...s,
        promise: a,
        type: "loading",
        message: s.loading,
        description: typeof s.description != "function" ? s.description: void 0
      }));
      const l = Promise.resolve(a instanceof Function ? a(): a);
      let f = r !== void 0,
      d;
      const h = l.then(async m =>  {
        if(d = ["resolve",
        m],
        J.isValidElement(m)) f =  ! 1,
        this.create( {
          id: r,
          type: "default",
          message: m
        });
        else if(wA(m) &&  ! m.ok) {
          f =  ! 1;
          const p = typeof s.error == "function" ? await s.error(`HTTP error! status: ${m.status}`): s.error,
          E = typeof s.description == "function" ? await s.description(`HTTP error! status: ${m.status}`): s.description,
          M = typeof p == "object" &&  ! J.isValidElement(p) ? p:  {
            message: p
          };
          this.create( {
            id: r,
            type: "error",
            description: E,
            ...M
          })
        }
        else if(m instanceof Error) {
          f =  ! 1;
          const p = typeof s.error == "function" ? await s.error(m): s.error,
          E = typeof s.description == "function" ? await s.description(m): s.description,
          M = typeof p == "object" &&  ! J.isValidElement(p) ? p:  {
            message: p
          };
          this.create( {
            id: r,
            type: "error",
            description: E,
            ...M
          })
        }
        else if(s.success !== void 0) {
          f =  ! 1;
          const p = typeof s.success == "function" ? await s.success(m): s.success,
          E = typeof s.description == "function" ? await s.description(m): s.description,
          M = typeof p == "object" &&  ! J.isValidElement(p) ? p:  {
            message: p
          };
          this.create( {
            id: r,
            type: "success",
            description: E,
            ...M
          })
        }
      }).catch(async m =>  {
        if(d = ["reject",
        m],
        s.error !== void 0) {
          f =  ! 1;
          const v = typeof s.error == "function" ? await s.error(m): s.error,
          p = typeof s.description == "function" ? await s.description(m): s.description,
          w = typeof v == "object" &&  ! J.isValidElement(v) ? v:  {
            message: v
          };
          this.create( {
            id: r,
            type: "error",
            description: p,
            ...w
          })
        }
      }).finally(() =>  {
        f && (this.dismiss(r),
        r = void 0),
        s.finally == null || s.finally.call(s)
      }),
      g = () => new Promise((m,
      v) => h.then(() => d[0] === "reject" ? v(d[1]): m(d[1])).catch(v));
      return typeof r != "string" && typeof r != "number" ?  {
        unwrap: g
      }: Object.assign(r,
       {
        unwrap: g
      })
    },
    this.custom = (a,
    s) =>  {
      const r = s ?. id || nd++;
      return this.create( {
        jsx: a(r),
        id: r,
        ...s
      }),
      r
    },
    this.getActiveToasts = () => this.toasts.filter(a =>  ! this.dismissedToasts.has(a.id)),
    this.subscribers = [],
    this.toasts = [],
    this.dismissedToasts = new Set
  }
}
const He = new SA,
EA = (n,
a) =>  {
  const s = a ?. id || nd++;
  return He.addToast( {
    title: n,
    ...a,
    id: s
  }),
  s
},
wA = n => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number",
AA = EA,
TA = () => He.toasts,
CA = () => He.getActiveToasts(),
MA = Object.assign(AA,
 {
  success: He.success,
  info: He.info,
  warning: He.warning,
  error: He.error,
  custom: He.custom,
  message: He.message,
  promise: He.promise,
  dismiss: He.dismiss,
  loading: He.loading
},
 {
  getHistory: TA,
  getToasts: CA
});
fA("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function fl(n) {
  return n.label !== void 0
}
const RA = 3,
NA = "24px",
DA = "16px",
Cy = 4e3,
jA = 356,
OA = 14,
zA = 45,
_A = 200;
function Mn(...n) {
  return n.filter(Boolean).join(" ")
}
function LA(n) {
  const[a,
  s] = n.split("-"),
  r = [];
  return a && r.push(a),
  s && r.push(s),
  r
}
const VA = n =>  {
  var a,
  s,
  r,
  l,
  f,
  d,
  h,
  g,
  m;
  const {
    invert: v,
    toast: p,
    unstyled: E,
    interacting: w,
    setHeights: M,
    visibleToasts: A,
    heights: C,
    index: D,
    toasts: B,
    expanded: L,
    removeToast: q,
    defaultRichColors: Q,
    closeButton: $,
    style: F,
    cancelButtonStyle: X,
    actionButtonStyle: rt,
    className: tt = "",
    descriptionClassName: mt = "",
    duration: pt,
    position: Rt,
    gap: Nt,
    expandByDefault: yt,
    classNames: O,
    icons: Z,
    closeButtonAriaLabel: H = "Close toast"
  }
   = n,
  [ut,
  dt] = J.useState(null),
  [R,
  Y] = J.useState(null),
  [P,
  W] = J.useState( ! 1),
  [I,
  ct] = J.useState( ! 1),
  [ot,
  vt] = J.useState( ! 1),
  [Mt,
  Ee] = J.useState( ! 1),
  [Pe,
  we] = J.useState( ! 1),
  [Qo,
  fn] = J.useState(0),
  [Ms,
  Si] = J.useState(0),
  Pa = J.useRef(p.duration || pt || Cy),
  Rs = J.useRef(null),
  Ye = J.useRef(null),
  Ns = D === 0,
  Ds = D + 1 <= A,
  Ae = p.type,
  oa = p.dismissible !==  ! 1,
  Te = p.className || "",
  sc = p.descriptionClassName || "",
  Ya = J.useMemo(() => C.findIndex(ht => ht.toastId === p.id) || 0,
  [C,
  p.id]),
  Wo = J.useMemo(() =>  {
    var ht;
    return(ht = p.closeButton) != null ? ht: $
  },
  [p.closeButton,
  $]),
  Ga = J.useMemo(() => p.duration || pt || Cy,
  [p.duration,
  pt]),
  js = J.useRef(0),
  Ln = J.useRef(0),
  Jo = J.useRef(0),
  ra = J.useRef(null),
  [qa,
  Ce] = Rt.split("-"),
  dn = J.useMemo(() => C.reduce((ht,
  Xt,
  ce) => ce >= Ya ? ht: ht + Xt.height,
  0),
  [C,
  Ya]),
  xe = bA(),
  oc = p.invert || v,
  Os = Ae === "loading";
  Ln.current = J.useMemo(() => Ya * Nt + dn,
  [Ya,
  dn]),
  J.useEffect(() =>  {
    Pa.current = Ga
  },
  [Ga]),
  J.useEffect(() =>  {
    W( ! 0)
  },
  []),
  J.useEffect(() =>  {
    const ht = Ye.current;
    if(ht) {
      const Xt = ht.getBoundingClientRect().height;
      return Si(Xt),
      M(ce => [ {
        toastId: p.id,
        height: Xt,
        position: p.position
      },
      ...ce]),
      () => M(ce => ce.filter(be => be.toastId !== p.id))
    }
  },
  [M,
  p.id]),
  J.useLayoutEffect(() =>  {
    if( ! P) return;
    const ht = Ye.current,
    Xt = ht.style.height;
    ht.style.height = "auto";
    const ce = ht.getBoundingClientRect().height;
    ht.style.height = Xt,
    Si(ce),
    M(be => be.find(Ft => Ft.toastId === p.id) ? be.map(Ft => Ft.toastId === p.id ?  {
      ...Ft,
      height: ce
    }: Ft): [ {
      toastId: p.id,
      height: ce,
      position: p.position
    },
    ...be])
  },
  [P,
  p.title,
  p.description,
  M,
  p.id,
  p.jsx,
  p.action,
  p.cancel]);
  const Sn = J.useCallback(() =>  {
    ct( ! 0),
    fn(Ln.current),
    M(ht => ht.filter(Xt => Xt.toastId !== p.id)),
    setTimeout(() =>  {
      q(p)
    },
    _A)
  },
  [p,
  q,
  M,
  Ln]);
  J.useEffect(() =>  {
    if(p.promise && Ae === "loading" || p.duration === 1 / 0 || p.type === "loading") return;
    let ht;
    return L || w || xe ? (() =>  {
      if(Jo.current < js.current) {
        const be = new Date().getTime() - js.current;
        Pa.current = Pa.current - be
      }
      Jo.current = new Date().getTime()
    })(): Pa.current !== 1 / 0 && (js.current = new Date().getTime(),
    ht = setTimeout(() =>  {
      p.onAutoClose == null || p.onAutoClose.call(p,
      p),
      Sn()
    },
    Pa.current)),
    () => clearTimeout(ht)
  },
  [L,
  w,
  p,
  Ae,
  xe,
  Sn]),
  J.useEffect(() =>  {
    p.delete && (Sn(),
    p.onDismiss == null || p.onDismiss.call(p,
    p))
  },
  [Sn,
  p.delete]);
  function Ei() {
    var ht;
    if(Z ?. loading) {
      var Xt;
      return J.createElement("div",
       {
        className: Mn(O ?. loader,
        p == null || (Xt = p.classNames) == null ? void 0: Xt.loader,
        "sonner-loader"),
        "data-visible": Ae === "loading"
      },
      Z.loading)
    }
    return J.createElement(mA,
     {
      className: Mn(O ?. loader,
      p == null || (ht = p.classNames) == null ? void 0: ht.loader),
      visible: Ae === "loading"
    })
  }
  const wi = p.icon || Z ?. [Ae] || dA(Ae);
  var Xa,
  En;
  return J.createElement("li",
   {
    tabIndex: 0,
    ref: Ye,
    className: Mn(tt,
    Te,
    O ?. toast,
    p == null || (a = p.classNames) == null ? void 0: a.toast,
    O ?. default,
    O ?. [Ae],
    p == null || (s = p.classNames) == null ? void 0: s[Ae]),
    "data-sonner-toast": "",
    "data-rich-colors": (Xa = p.richColors) != null ? Xa: Q,
    "data-styled":  ! (p.jsx || p.unstyled || E),
    "data-mounted": P,
    "data-promise":  !  ! p.promise,
    "data-swiped": Pe,
    "data-removed": I,
    "data-visible": Ds,
    "data-y-position": qa,
    "data-x-position": Ce,
    "data-index": D,
    "data-front": Ns,
    "data-swiping": ot,
    "data-dismissible": oa,
    "data-type": Ae,
    "data-invert": oc,
    "data-swipe-out": Mt,
    "data-swipe-direction": R,
    "data-expanded":  !  ! (L || yt && P),
    "data-testid": p.testId,
    style:  {
      "--index": D,
      "--toasts-before": D,
      "--z-index": B.length - D,
      "--offset": `${I?Qo:Ln.current}px`,
      "--initial-height": yt ? "auto": `${Ms}px`,
      ...F,
      ...p.style
    },
    onDragEnd: () =>  {
      vt( ! 1),
      dt(null),
      ra.current = null
    },
    onPointerDown: ht =>  {
      ht.button !== 2 && (Os ||  ! oa || (Rs.current = new Date,
      fn(Ln.current),
      ht.target.setPointerCapture(ht.pointerId),
      ht.target.tagName !== "BUTTON" && (vt( ! 0),
      ra.current =  {
        x: ht.clientX,
        y: ht.clientY
      })))
    },
    onPointerUp: () =>  {
      var ht,
      Xt,
      ce;
      if(Mt ||  ! oa) return;
      ra.current = null;
      const be = Number(((ht = Ye.current) == null ? void 0: ht.style.getPropertyValue("--swipe-amount-x").replace("px",
      "")) || 0),
      la = Number(((Xt = Ye.current) == null ? void 0: Xt.style.getPropertyValue("--swipe-amount-y").replace("px",
      "")) || 0),
      Ft = new Date().getTime() - ((ce = Rs.current) == null ? void 0: ce.getTime()),
      De = ut === "x" ? be: la,
      Ka = Math.abs(De) / Ft;
      if(Math.abs(De) >= zA || Ka > .11) {
        fn(Ln.current),
        p.onDismiss == null || p.onDismiss.call(p,
        p),
        Y(ut === "x" ? be > 0 ? "right": "left": la > 0 ? "down": "up"),
        Sn(),
        Ee( ! 0);
        return
      }
      else {
        var je,
        Oe;
        (je = Ye.current) == null || je.style.setProperty("--swipe-amount-x",
        "0px"),
        (Oe = Ye.current) == null || Oe.style.setProperty("--swipe-amount-y",
        "0px")
      }
      we( ! 1),
      vt( ! 1),
      dt(null)
    },
    onPointerMove: ht =>  {
      var Xt,
      ce,
      be;
      if( ! ra.current ||  ! oa || ((Xt = window.getSelection()) == null ? void 0: Xt.toString().length) > 0) return;
      const Ft = ht.clientY - ra.current.y,
      De = ht.clientX - ra.current.x;
      var Ka;
      const je = (Ka = n.swipeDirections) != null ? Ka: LA(Rt);
       ! ut && (Math.abs(De) > 1 || Math.abs(Ft) > 1) && dt(Math.abs(De) > Math.abs(Ft) ? "x": "y");
      let Oe =  {
        x: 0,
        y: 0
      };
      const Ai = hn => 1 / (1.5 + Math.abs(hn) / 20);
      if(ut === "y") {
        if(je.includes("top") || je.includes("bottom")) if(je.includes("top") && Ft < 0 || je.includes("bottom") && Ft > 0) Oe.y = Ft;
        else {
          const hn = Ft * Ai(Ft);
          Oe.y = Math.abs(hn) < Math.abs(Ft) ? hn: Ft
        }
      }
      else if(ut === "x" && (je.includes("left") || je.includes("right"))) if(je.includes("left") && De < 0 || je.includes("right") && De > 0) Oe.x = De;
      else {
        const hn = De * Ai(De);
        Oe.x = Math.abs(hn) < Math.abs(De) ? hn: De
      }(Math.abs(Oe.x) > 0 || Math.abs(Oe.y) > 0) && we( ! 0),
      (ce = Ye.current) == null || ce.style.setProperty("--swipe-amount-x",
      `${Oe.x}px`),
      (be = Ye.current) == null || be.style.setProperty("--swipe-amount-y",
      `${Oe.y}px`)
    }
  },
  Wo &&  ! p.jsx && Ae !== "loading" ? J.createElement("button",
   {
    "aria-label": H,
    "data-disabled": Os,
    "data-close-button":  ! 0,
    onClick: Os ||  ! oa ? () =>  {
    }: () =>  {
      Sn(),
      p.onDismiss == null || p.onDismiss.call(p,
      p)
    },
    className: Mn(O ?. closeButton,
    p == null || (r = p.classNames) == null ? void 0: r.closeButton)
  },
  (En = Z ?. close) != null ? En: xA): null,
  (Ae || p.icon || p.promise) && p.icon !== null && (Z ?. [Ae] !== null || p.icon) ? J.createElement("div",
   {
    "data-icon": "",
    className: Mn(O ?. icon,
    p == null || (l = p.classNames) == null ? void 0: l.icon)
  },
  p.promise || p.type === "loading" &&  ! p.icon ? p.icon || Ei(): null,
  p.type !== "loading" ? wi: null): null,
  J.createElement("div",
   {
    "data-content": "",
    className: Mn(O ?. content,
    p == null || (f = p.classNames) == null ? void 0: f.content)
  },
  J.createElement("div",
   {
    "data-title": "",
    className: Mn(O ?. title,
    p == null || (d = p.classNames) == null ? void 0: d.title)
  },
  p.jsx ? p.jsx: typeof p.title == "function" ? p.title(): p.title),
  p.description ? J.createElement("div",
   {
    "data-description": "",
    className: Mn(mt,
    sc,
    O ?. description,
    p == null || (h = p.classNames) == null ? void 0: h.description)
  },
  typeof p.description == "function" ? p.description(): p.description): null),
  J.isValidElement(p.cancel) ? p.cancel: p.cancel && fl(p.cancel) ? J.createElement("button",
   {
    "data-button":  ! 0,
    "data-cancel":  ! 0,
    style: p.cancelButtonStyle || X,
    onClick: ht =>  {
      fl(p.cancel) && oa && (p.cancel.onClick == null || p.cancel.onClick.call(p.cancel,
      ht),
      Sn())
    },
    className: Mn(O ?. cancelButton,
    p == null || (g = p.classNames) == null ? void 0: g.cancelButton)
  },
  p.cancel.label): null,
  J.isValidElement(p.action) ? p.action: p.action && fl(p.action) ? J.createElement("button",
   {
    "data-button":  ! 0,
    "data-action":  ! 0,
    style: p.actionButtonStyle || rt,
    onClick: ht =>  {
      fl(p.action) && (p.action.onClick == null || p.action.onClick.call(p.action,
      ht),
       ! ht.defaultPrevented && Sn())
    },
    className: Mn(O ?. actionButton,
    p == null || (m = p.classNames) == null ? void 0: m.actionButton)
  },
  p.action.label): null)
};
function My() {
  if(typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" ||  ! n ? window.getComputedStyle(document.documentElement).direction: n
}
function BA(n,
a) {
  const s =  {
  };
  return[n,
  a].forEach((r,
  l) =>  {
    const f = l === 1,
    d = f ? "--mobile-offset": "--offset",
    h = f ? DA: NA;
    function g(m) {
      ["top",
      "right",
      "bottom",
      "left"].forEach(v =>  {
        s[`${d}-${v}`] = typeof m == "number" ? `${m}px`: m
      })
    }
    typeof r == "number" || typeof r == "string" ? g(r): typeof r == "object" ? ["top",
    "right",
    "bottom",
    "left"].forEach(m =>  {
      r[m] === void 0 ? s[`${d}-${m}`] = h: s[`${d}-${m}`] = typeof r[m] == "number" ? `${r[m]}px`: r[m]
    }): g(h)
  }),
  s
}
const kA = J.forwardRef(function(a,
s) {
  const {
    id: r,
    invert: l,
    position: f = "bottom-right",
    hotkey: d = ["altKey",
    "KeyT"],
    expand: h,
    closeButton: g,
    className: m,
    offset: v,
    mobileOffset: p,
    theme: E = "light",
    richColors: w,
    duration: M,
    style: A,
    visibleToasts: C = RA,
    toastOptions: D,
    dir: B = My(),
    gap: L = OA,
    icons: q,
    containerAriaLabel: Q = "Notifications"
  }
   = a,
  [$,
  F] = J.useState([]),
  X = J.useMemo(() => r ? $.filter(P => P.toasterId === r): $.filter(P =>  ! P.toasterId),
  [$,
  r]),
  rt = J.useMemo(() => Array.from(new Set([f].concat(X.filter(P => P.position).map(P => P.position)))),
  [X,
  f]),
  [tt,
  mt] = J.useState([]),
  [pt,
  Rt] = J.useState( ! 1),
  [Nt,
  yt] = J.useState( ! 1),
  [O,
  Z] = J.useState(E !== "system" ? E: typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light"),
  H = J.useRef(null),
  ut = d.join("+").replace(/Key/g,
  "").replace(/Digit/g,
  ""),
  dt = J.useRef(null),
  R = J.useRef( ! 1),
  Y = J.useCallback(P =>  {
    F(W =>  {
      var I;
      return(I = W.find(ct => ct.id === P.id)) != null && I.delete || He.dismiss(P.id),
      W.filter(( {
        id: ct
      }) => ct !== P.id)
    })
  },
  []);
  return J.useEffect(() => He.subscribe(P =>  {
    if(P.dismiss) {
      requestAnimationFrame(() =>  {
        F(W => W.map(I => I.id === P.id ?  {
          ...I,
          delete:  ! 0
        }: I))
      });
      return
    }
    setTimeout(() =>  {
      j0.flushSync(() =>  {
        F(W =>  {
          const I = W.findIndex(ct => ct.id === P.id);
          return I !==  - 1 ? [...W.slice(0,
          I),
           {
            ...W[I],
            ...P
          },
          ...W.slice(I + 1)]: [P,
          ...W]
        })
      })
    })
  }),
  [$]),
  J.useEffect(() =>  {
    if(E !== "system") {
      Z(E);
      return
    }
    if(E === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Z("dark"): Z("light")),
    typeof window > "u") return;
    const P = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      P.addEventListener("change",
      ( {
        matches: W
      }) =>  {
        Z(W ? "dark": "light")
      })
    }
    catch {
      P.addListener(( {
        matches: I
      }) =>  {
        try {
          Z(I ? "dark": "light")
        }
        catch(ct) {
          console.error(ct)
        }
      })
    }
  },
  [E]),
  J.useEffect(() =>  {
    $.length <= 1 && Rt( ! 1)
  },
  [$]),
  J.useEffect(() =>  {
    const P = W =>  {
      var I;
      if(d.every(vt => W[vt] || W.code === vt)) {
        var ot;
        Rt( ! 0),
        (ot = H.current) == null || ot.focus()
      }
      W.code === "Escape" && (document.activeElement === H.current || (I = H.current) != null && I.contains(document.activeElement)) && Rt( ! 1)
    };
    return document.addEventListener("keydown",
    P),
    () => document.removeEventListener("keydown",
    P)
  },
  [d]),
  J.useEffect(() =>  {
    if(H.current) return() =>  {
      dt.current && (dt.current.focus( {
        preventScroll:  ! 0
      }),
      dt.current = null,
      R.current =  ! 1)
    }
  },
  [H.current]),
  J.createElement("section",
   {
    ref: s,
    "aria-label": `${Q} ${ut}`,
    tabIndex:  - 1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning:  ! 0
  },
  rt.map((P,
  W) =>  {
    var I;
    const[ct,
    ot] = P.split("-");
    return X.length ? J.createElement("ol",
     {
      key: P,
      dir: B === "auto" ? My(): B,
      tabIndex:  - 1,
      ref: H,
      className: m,
      "data-sonner-toaster":  ! 0,
      "data-sonner-theme": O,
      "data-y-position": ct,
      "data-x-position": ot,
      style:  {
        "--front-toast-height": `${((I=tt[0])==null?void 0:I.height)||0}px`,
        "--width": `${jA}px`,
        "--gap": `${L}px`,
        ...A,
        ...BA(v,
        p)
      },
      onBlur: vt =>  {
        R.current &&  ! vt.currentTarget.contains(vt.relatedTarget) && (R.current =  ! 1,
        dt.current && (dt.current.focus( {
          preventScroll:  ! 0
        }),
        dt.current = null))
      },
      onFocus: vt =>  {
        vt.target instanceof HTMLElement && vt.target.dataset.dismissible === "false" || R.current || (R.current =  ! 0,
        dt.current = vt.relatedTarget)
      },
      onMouseEnter: () => Rt( ! 0),
      onMouseMove: () => Rt( ! 0),
      onMouseLeave: () =>  {
        Nt || Rt( ! 1)
      },
      onDragEnd: () => Rt( ! 1),
      onPointerDown: vt =>  {
        vt.target instanceof HTMLElement && vt.target.dataset.dismissible === "false" || yt( ! 0)
      },
      onPointerUp: () => yt( ! 1)
    },
    X.filter(vt =>  ! vt.position && W === 0 || vt.position === P).map((vt,
    Mt) =>  {
      var Ee,
      Pe;
      return J.createElement(VA,
       {
        key: vt.id,
        icons: q,
        index: Mt,
        toast: vt,
        defaultRichColors: w,
        duration: (Ee = D ?. duration) != null ? Ee: M,
        className: D ?. className,
        descriptionClassName: D ?. descriptionClassName,
        invert: l,
        visibleToasts: C,
        closeButton: (Pe = D ?. closeButton) != null ? Pe: g,
        interacting: Nt,
        position: P,
        style: D ?. style,
        unstyled: D ?. unstyled,
        classNames: D ?. classNames,
        cancelButtonStyle: D ?. cancelButtonStyle,
        actionButtonStyle: D ?. actionButtonStyle,
        closeButtonAriaLabel: D ?. closeButtonAriaLabel,
        removeToast: Y,
        toasts: X.filter(we => we.position == vt.position),
        heights: tt.filter(we => we.position == vt.position),
        setHeights: mt,
        expandByDefault: h,
        gap: L,
        expanded: pt,
        swipeDirections: a.swipeDirections
      })
    })): null
  }))
}),
UA = ( {
  ...n
}) =>  {
  const {
    theme: a = "system"
  }
   = uA();
  return x.jsx(kA,
   {
    "code-path": "src/components/ui/sonner.tsx:15:5",
    theme: a,
    className: "toaster group",
    icons:  {
      success: x.jsx(Tw,
       {
        "code-path": "src/components/ui/sonner.tsx:19:18",
        className: "size-4"
      }),
      info: x.jsx(Uw,
       {
        "code-path": "src/components/ui/sonner.tsx:20:15",
        className: "size-4"
      }),
      warning: x.jsx(tA,
       {
        "code-path": "src/components/ui/sonner.tsx:21:18",
        className: "size-4"
      }),
      error: x.jsx(Qw,
       {
        "code-path": "src/components/ui/sonner.tsx:22:16",
        className: "size-4"
      }),
      loading: x.jsx(Gw,
       {
        "code-path": "src/components/ui/sonner.tsx:23:18",
        className: "size-4 animate-spin"
      })
    },
    style:  {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",
      "--border-radius": "var(--radius)"
    },
    ...n
  })
},
V0 = S.createContext( {
});
function HA(n) {
  const a = S.useRef(null);
  return a.current === null && (a.current = n()),
  a.current
}
const PA = typeof window < "u",
YA = PA ? S.useLayoutEffect: S.useEffect,
kd = S.createContext(null);
function Ud(n,
a) {
  n.indexOf(a) ===  - 1 && n.push(a)
}
function Bl(n,
a) {
  const s = n.indexOf(a);
  s >  - 1 && n.splice(s,
  1)
}
const _n = (n,
a,
s) => s > a ? a: s < n ? n: s;
let Hd = () =>  {
};
const ka =  {
},
B0 = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function k0(n) {
  return typeof n == "object" && n !== null
}
const U0 = n => /^0[^.\s]+$/u.test(n);
function H0(n) {
  let a;
  return() => (a === void 0 && (a = n()),
  a)
}
const cn = n => n,
GA = (n,
a) => s => a(n(s)),
qo = (...n) => n.reduce(GA),
Lo = (n,
a,
s) =>  {
  const r = a - n;
  return r === 0 ? 1: (s - n) / r
};
class Pd {
  constructor() {
    this.subscriptions = []
  }
  add(a) {
    return Ud(this.subscriptions,
    a),
    () => Bl(this.subscriptions,
    a)
  }
  notify(a,
  s,
  r) {
    const l = this.subscriptions.length;
    if(l) if(l === 1) this.subscriptions[0](a,
    s,
    r);
    else for(let f = 0; f < l; f++) {
      const d = this.subscriptions[f];
      d && d(a,
      s,
      r)
    }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const We = n => n * 1e3,
ln = n => n / 1e3;
function P0(n,
a) {
  return a ? n * (1e3 / a): 0
}
const Y0 = (n,
a,
s) => (((1 - 3 * s + 3 * a) * n + (3 * s - 6 * a)) * n + 3 * a) * n,
qA = 1e-7,
XA = 12;
function KA(n,
a,
s,
r,
l) {
  let f,
  d,
  h = 0;
  do d = a + (s - a) / 2,
  f = Y0(d,
  r,
  l) - n,
  f > 0 ? s = d: a = d;
  while(Math.abs(f) > qA && ++ h < XA);
  return d
}
function Xo(n,
a,
s,
r) {
  if(n === a && s === r) return cn;
  const l = f => KA(f,
  0,
  1,
  n,
  s);
  return f => f === 0 || f === 1 ? f: Y0(l(f),
  a,
  r)
}
const G0 = n => a => a <= .5 ? n(2 * a) / 2: (2 - n(2 * (1 - a))) / 2,
q0 = n => a => 1 - n(1 - a),
X0 = Xo(.33,
1.53,
.69,
.99),
Yd = q0(X0),
K0 = G0(Yd),
F0 = n => n >= 1 ? 1: (n *= 2) < 1 ? .5 * Yd(n): .5 * (2 - Math.pow(2,
 - 10 * (n - 1))),
Gd = n => 1 - Math.sin(Math.acos(n)),
Z0 = q0(Gd),
Q0 = G0(Gd),
FA = Xo(.42,
0,
1,
1),
ZA = Xo(0,
0,
.58,
1),
W0 = Xo(.42,
0,
.58,
1),
QA = n => Array.isArray(n) && typeof n[0] != "number",
J0 = n => Array.isArray(n) && typeof n[0] == "number",
WA =  {
  linear: cn,
  easeIn: FA,
  easeInOut: W0,
  easeOut: ZA,
  circIn: Gd,
  circInOut: Q0,
  circOut: Z0,
  backIn: Yd,
  backInOut: K0,
  backOut: X0,
  anticipate: F0
},
JA = n => typeof n == "string",
Ry = n =>  {
  if(J0(n)) {
    Hd(n.length === 4);
    const[a,
    s,
    r,
    l] = n;
    return Xo(a,
    s,
    r,
    l)
  }
  else if(JA(n)) return WA[n];
  return n
},
dl = ["setup",
"read",
"resolveKeyframes",
"preUpdate",
"update",
"preRender",
"render",
"postRender"];
function $A(n,
a) {
  let s = new Set,
  r = new Set,
  l =  ! 1,
  f =  ! 1;
  const d = new WeakSet;
  let h =  {
    delta: 0,
    timestamp: 0,
    isProcessing:  ! 1
  };
  function g(v) {
    d.has(v) && (m.schedule(v),
    n()),
    v(h)
  }
  const m =  {
    schedule: (v,
    p =  ! 1,
    E =  ! 1) =>  {
      const M = E && l ? s: r;
      return p && d.add(v),
      M.add(v),
      v
    },
    cancel: v =>  {
      r.delete(v),
      d.delete(v)
    },
    process: v =>  {
      if(h = v,
      l) {
        f =  ! 0;
        return
      }
      l =  ! 0;
      const p = s;
      s = r,
      r = p,
      s.forEach(g),
      s.clear(),
      l =  ! 1,
      f && (f =  ! 1,
      m.process(v))
    }
  };
  return m
}
const IA = 40;
function $0(n,
a) {
  let s =  ! 1,
  r =  ! 0;
  const l =  {
    delta: 0,
    timestamp: 0,
    isProcessing:  ! 1
  },
  f = () => s =  ! 0,
  d = dl.reduce((L,
  q) => (L[q] = $A(f),
  L),
   {
  }),
   {
    setup: h,
    read: g,
    resolveKeyframes: m,
    preUpdate: v,
    update: p,
    preRender: E,
    render: w,
    postRender: M
  }
   = d,
  A = () =>  {
    const L = ka.useManualTiming,
    q = L ? l.timestamp: performance.now();
    s =  ! 1,
    L || (l.delta = r ? 1e3 / 60: Math.max(Math.min(q - l.timestamp,
    IA),
    1)),
    l.timestamp = q,
    l.isProcessing =  ! 0,
    h.process(l),
    g.process(l),
    m.process(l),
    v.process(l),
    p.process(l),
    E.process(l),
    w.process(l),
    M.process(l),
    l.isProcessing =  ! 1,
    s && a && (r =  ! 1,
    n(A))
  },
  C = () =>  {
    s =  ! 0,
    r =  ! 0,
    l.isProcessing || n(A)
  };
  return {
    schedule: dl.reduce((L,
    q) =>  {
      const Q = d[q];
      return L[q] = ($,
      F =  ! 1,
      X =  ! 1) => (s || C(),
      Q.schedule($,
      F,
      X)),
      L
    },
     {
    }),
    cancel: L =>  {
      for(let q = 0; q < dl.length; q++) d[dl[q]].cancel(L)
    },
    state: l,
    steps: d
  }
}
const {
  schedule: Ut,
  cancel: Ua,
  state: ye,
  steps: Mf
}
 = $0(typeof requestAnimationFrame < "u" ? requestAnimationFrame: cn,
 ! 0);
let Cl;
function tT() {
  Cl = void 0
}
const Re =  {
  now: () => (Cl === void 0 && Re.set(ye.isProcessing || ka.useManualTiming ? ye.timestamp: performance.now()),
  Cl),
  set: n =>  {
    Cl = n,
    queueMicrotask(tT)
  }
},
I0 = n => a => typeof a == "string" && a.startsWith(n),
tx = I0("--"),
eT = I0("var(--"),
qd = n => eT(n) ? nT.test(n.split("/*")[0].trim()):  ! 1,
nT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ny(n) {
  return typeof n != "string" ?  ! 1: n.split("/*")[0].includes("var(--")
}
const Es =  {
  test: n => typeof n == "number",
  parse: parseFloat,
  transform: n => n
},
Vo =  {
  ...Es,
  transform: n => _n(0,
  1,
  n)
},
hl =  {
  ...Es,
  default: 1
},
No = n => Math.round(n * 1e5) / 1e5,
Xd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function aT(n) {
  return n == null
}
const iT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
Kd = (n,
a) => s =>  !  ! (typeof s == "string" && iT.test(s) && s.startsWith(n) || a &&  ! aT(s) && Object.prototype.hasOwnProperty.call(s,
a)),
ex = (n,
a,
s) => r =>  {
  if(typeof r != "string") return r;
  const[l,
  f,
  d,
  h] = r.match(Xd);
  return {
    [n]: parseFloat(l),
    [a]: parseFloat(f),
    [s]: parseFloat(d),
    alpha: h !== void 0 ? parseFloat(h): 1
  }
},
sT = n => _n(0,
255,
n),
Rf =  {
  ...Es,
  transform: n => Math.round(sT(n))
},
hi =  {
  test: Kd("rgb",
  "red"),
  parse: ex("red",
  "green",
  "blue"),
  transform: ( {
    red: n,
    green: a,
    blue: s,
    alpha: r = 1
  }) => "rgba(" + Rf.transform(n) + ", " + Rf.transform(a) + ", " + Rf.transform(s) + ", " + No(Vo.transform(r)) + ")"
};
function oT(n) {
  let a = "",
  s = "",
  r = "",
  l = "";
  return n.length > 5 ? (a = n.substring(1,
  3),
  s = n.substring(3,
  5),
  r = n.substring(5,
  7),
  l = n.substring(7,
  9)): (a = n.substring(1,
  2),
  s = n.substring(2,
  3),
  r = n.substring(3,
  4),
  l = n.substring(4,
  5),
  a += a,
  s += s,
  r += r,
  l += l),
   {
    red: parseInt(a,
    16),
    green: parseInt(s,
    16),
    blue: parseInt(r,
    16),
    alpha: l ? parseInt(l,
    16) / 255: 1
  }
}
const ad =  {
  test: Kd("#"),
  parse: oT,
  transform: hi.transform
},
Ko = n => ( {
  test: a => typeof a == "string" && a.endsWith(n) && a.split(" ").length === 1,
  parse: parseFloat,
  transform: a => `${a}${n}`
}),
_a = Ko("deg"),
On = Ko("%"),
it = Ko("px"),
rT = Ko("vh"),
lT = Ko("vw"),
Dy =  {
  ...On,
  parse: n => On.parse(n) / 100,
  transform: n => On.transform(n * 100)
},
ms =  {
  test: Kd("hsl",
  "hue"),
  parse: ex("hue",
  "saturation",
  "lightness"),
  transform: ( {
    hue: n,
    saturation: a,
    lightness: s,
    alpha: r = 1
  }) => "hsla(" + Math.round(n) + ", " + On.transform(No(a)) + ", " + On.transform(No(s)) + ", " + No(Vo.transform(r)) + ")"
},
se =  {
  test: n => hi.test(n) || ad.test(n) || ms.test(n),
  parse: n => hi.test(n) ? hi.parse(n): ms.test(n) ? ms.parse(n): ad.parse(n),
  transform: n => typeof n == "string" ? n: n.hasOwnProperty("red") ? hi.transform(n): ms.transform(n),
  getAnimatableNone: n =>  {
    const a = se.parse(n);
    return a.alpha = 0,
    se.transform(a)
  }
},
cT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function uT(n) {
  return isNaN(n) && typeof n == "string" && (n.match(Xd) ?. length || 0) + (n.match(cT) ?. length || 0) > 0
}
const nx = "number",
ax = "color",
fT = "var",
dT = "var(",
jy = "${}",
hT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function vs(n) {
  const a = n.toString(),
  s = [],
  r =  {
    color: [],
    number: [],
    var: []
  },
  l = [];
  let f = 0;
  const h = a.replace(hT,
  g => (se.test(g) ? (r.color.push(f),
  l.push(ax),
  s.push(se.parse(g))): g.startsWith(dT) ? (r.var.push(f),
  l.push(fT),
  s.push(g)): (r.number.push(f),
  l.push(nx),
  s.push(parseFloat(g))),
  ++ f,
  jy)).split(jy);
  return {
    values: s,
    split: h,
    indexes: r,
    types: l
  }
}
function mT(n) {
  return vs(n).values
}
function ix( {
  split: n,
  types: a
}) {
  const s = n.length;
  return r =>  {
    let l = "";
    for(let f = 0; f < s; f++) if(l += n[f],
    r[f] !== void 0) {
      const d = a[f];
      d === nx ? l += No(r[f]): d === ax ? l += se.transform(r[f]): l += r[f]
    }
    return l
  }
}
function pT(n) {
  return ix(vs(n))
}
const gT = n => typeof n == "number" ? 0: se.test(n) ? se.getAnimatableNone(n): n,
yT = (n,
a) => typeof n == "number" ? a ?. trim().endsWith("/") ? n: 0: gT(n);
function vT(n) {
  const a = vs(n);
  return ix(a)(a.values.map((r,
  l) => yT(r,
  a.split[l])))
}
const xn =  {
  test: uT,
  parse: mT,
  createTransformer: pT,
  getAnimatableNone: vT
};
function Nf(n,
a,
s) {
  return s < 0 && (s += 1),
  s > 1 && (s -= 1),
  s < 1 / 6 ? n + (a - n) * 6 * s: s < 1 / 2 ? a: s < 2 / 3 ? n + (a - n) * (2 / 3 - s) * 6: n
}
function xT( {
  hue: n,
  saturation: a,
  lightness: s,
  alpha: r
}) {
  n /= 360,
  a /= 100,
  s /= 100;
  let l = 0,
  f = 0,
  d = 0;
  if( ! a) l = f = d = s;
  else {
    const h = s < .5 ? s * (1 + a): s + a - s * a,
    g = 2 * s - h;
    l = Nf(g,
    h,
    n + 1 / 3),
    f = Nf(g,
    h,
    n),
    d = Nf(g,
    h,
    n - 1 / 3)
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(f * 255),
    blue: Math.round(d * 255),
    alpha: r
  }
}
function kl(n,
a) {
  return s => s > 0 ? a: n
}
const qt = (n,
a,
s) => n + (a - n) * s,
Df = (n,
a,
s) =>  {
  const r = n * n,
  l = s * (a * a - r) + r;
  return l < 0 ? 0: Math.sqrt(l)
},
bT = [ad,
hi,
ms],
ST = n => bT.find(a => a.test(n));
function Oy(n) {
  const a = ST(n);
  if( ! a) return ! 1;
  let s = a.parse(n);
  return a === ms && (s = xT(s)),
  s
}
const zy = (n,
a) =>  {
  const s = Oy(n),
  r = Oy(a);
  if( ! s ||  ! r) return kl(n,
  a);
  const l =  {
    ...s
  };
  return f => (l.red = Df(s.red,
  r.red,
  f),
  l.green = Df(s.green,
  r.green,
  f),
  l.blue = Df(s.blue,
  r.blue,
  f),
  l.alpha = qt(s.alpha,
  r.alpha,
  f),
  hi.transform(l))
},
id = new Set(["none",
"hidden"]);
function ET(n,
a) {
  return id.has(n) ? s => s <= 0 ? n: a: s => s >= 1 ? a: n
}
function wT(n,
a) {
  return s => qt(n,
  a,
  s)
}
function Fd(n) {
  return typeof n == "number" ? wT: typeof n == "string" ? qd(n) ? kl: se.test(n) ? zy: CT: Array.isArray(n) ? sx: typeof n == "object" ? se.test(n) ? zy: AT: kl
}
function sx(n,
a) {
  const s = [...n],
  r = s.length,
  l = n.map((f,
  d) => Fd(f)(f,
  a[d]));
  return f =>  {
    for(let d = 0; d < r; d++) s[d] = l[d](f);
    return s
  }
}
function AT(n,
a) {
  const s =  {
    ...n,
    ...a
  },
  r =  {
  };
  for(const l in s) n[l] !== void 0 && a[l] !== void 0 && (r[l] = Fd(n[l])(n[l],
  a[l]));
  return l =>  {
    for(const f in r) s[f] = r[f](l);
    return s
  }
}
function TT(n,
a) {
  const s = [],
  r =  {
    color: 0,
    var: 0,
    number: 0
  };
  for(let l = 0; l < a.values.length; l++) {
    const f = a.types[l],
    d = n.indexes[f][r[f]],
    h = n.values[d] ?? 0;
    s[l] = h,
    r[f]++
  }
  return s
}
const CT = (n,
a) =>  {
  const s = xn.createTransformer(a),
  r = vs(n),
  l = vs(a);
  return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r.indexes.number.length >= l.indexes.number.length ? id.has(n) &&  ! l.values.length || id.has(a) &&  ! r.values.length ? ET(n,
  a): qo(sx(TT(r,
  l),
  l.values),
  s): kl(n,
  a)
};
function ox(n,
a,
s) {
  return typeof n == "number" && typeof a == "number" && typeof s == "number" ? qt(n,
  a,
  s): Fd(n)(n,
  a)
}
const MT = n =>  {
  const a = ( {
    timestamp: s
  }) => n(s);
  return {
    start: (s =  ! 0) => Ut.update(a,
    s),
    stop: () => Ua(a),
    now: () => ye.isProcessing ? ye.timestamp: Re.now()
  }
},
rx = (n,
a,
s = 10) =>  {
  let r = "";
  const l = Math.max(Math.round(a / s),
  2);
  for(let f = 0; f < l; f++) r += Math.round(n(f / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0,r.length-2)})`
},
Ul = 2e4;
function Zd(n) {
  let a = 0;
  const s = 50;
  let r = n.next(a);
  for(;  ! r.done && a < Ul; ) a += s,
  r = n.next(a);
  return a >= Ul ? 1 / 0: a
}
function RT(n,
a = 100,
s) {
  const r = s( {
    ...n,
    keyframes: [0,
    a]
  }),
  l = Math.min(Zd(r),
  Ul);
  return {
    type: "keyframes",
    ease: f => r.next(l * f).value / a,
    duration: ln(l)
  }
}
const Jt =  {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed:  {
    granular: .01,
    default: 2
  },
  restDelta:  {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
};
function sd(n,
a) {
  return n * Math.sqrt(1 - a * a)
}
const NT = 12;
function DT(n,
a,
s) {
  let r = s;
  for(let l = 1; l < NT; l++) r = r - n(r) / a(r);
  return r
}
const jf = .001;
function jT( {
  duration: n = Jt.duration,
  bounce: a = Jt.bounce,
  velocity: s = Jt.velocity,
  mass: r = Jt.mass
}) {
  let l,
  f,
  d = 1 - a;
  d = _n(Jt.minDamping,
  Jt.maxDamping,
  d),
  n = _n(Jt.minDuration,
  Jt.maxDuration,
  ln(n)),
  d < 1 ? (l = m =>  {
    const v = m * d,
    p = v * n,
    E = v - s,
    w = sd(m,
    d),
    M = Math.exp( - p);
    return jf - E / w * M
  },
  f = m =>  {
    const p = m * d * n,
    E = p * s + s,
    w = Math.pow(d,
    2) * Math.pow(m,
    2) * n,
    M = Math.exp( - p),
    A = sd(Math.pow(m,
    2),
    d);
    return( - l(m) + jf > 0 ?  - 1: 1) * ((E - w) * M) / A
  }): (l = m =>  {
    const v = Math.exp( - m * n),
    p = (m - s) * n + 1;
    return - jf + v * p
  },
  f = m =>  {
    const v = Math.exp( - m * n),
    p = (s - m) * (n * n);
    return v * p
  });
  const h = 5 / n,
  g = DT(l,
  f,
  h);
  if(n = We(n),
  isNaN(g)) return {
    stiffness: Jt.stiffness,
    damping: Jt.damping,
    duration: n
  };
   {
    const m = Math.pow(g,
    2) * r;
    return {
      stiffness: m,
      damping: d * 2 * Math.sqrt(r * m),
      duration: n
    }
  }
}
const OT = ["duration",
"bounce"],
zT = ["stiffness",
"damping",
"mass"];
function _y(n,
a) {
  return a.some(s => n[s] !== void 0)
}
function _T(n) {
  let a =  {
    velocity: Jt.velocity,
    stiffness: Jt.stiffness,
    damping: Jt.damping,
    mass: Jt.mass,
    isResolvedFromDuration:  ! 1,
    ...n
  };
  if( ! _y(n,
  zT) && _y(n,
  OT)) if(a.velocity = 0,
  n.visualDuration) {
    const s = n.visualDuration,
    r = 2 * Math.PI / (s * 1.2),
    l = r * r,
    f = 2 * _n(.05,
    1,
    1 - (n.bounce || 0)) * Math.sqrt(l);
    a =  {
      ...a,
      mass: Jt.mass,
      stiffness: l,
      damping: f
    }
  }
  else {
    const s = jT( {
      ...n,
      velocity: 0
    });
    a =  {
      ...a,
      ...s,
      mass: Jt.mass
    },
    a.isResolvedFromDuration =  ! 0
  }
  return a
}
function Hl(n = Jt.visualDuration,
a = Jt.bounce) {
  const s = typeof n != "object" ?  {
    visualDuration: n,
    keyframes: [0,
    1],
    bounce: a
  }: n;
  let {
    restSpeed: r,
    restDelta: l
  }
   = s;
  const f = s.keyframes[0],
  d = s.keyframes[s.keyframes.length - 1],
  h =  {
    done:  ! 1,
    value: f
  },
   {
    stiffness: g,
    damping: m,
    mass: v,
    duration: p,
    velocity: E,
    isResolvedFromDuration: w
  }
   = _T( {
    ...s,
    velocity:  - ln(s.velocity || 0)
  }),
  M = E || 0,
  A = m / (2 * Math.sqrt(g * v)),
  C = d - f,
  D = ln(Math.sqrt(g / v)),
  B = Math.abs(C) < 5;
  r || (r = B ? Jt.restSpeed.granular: Jt.restSpeed.default),
  l || (l = B ? Jt.restDelta.granular: Jt.restDelta.default);
  let L,
  q,
  Q,
  $,
  F,
  X;
  if(A < 1) Q = sd(D,
  A),
  $ = (M + A * D * C) / Q,
  L = tt =>  {
    const mt = Math.exp( - A * D * tt);
    return d - mt * ($ * Math.sin(Q * tt) + C * Math.cos(Q * tt))
  },
  F = A * D * $ + C * Q,
  X = A * D * C - $ * Q,
  q = tt => Math.exp( - A * D * tt) * (F * Math.sin(Q * tt) + X * Math.cos(Q * tt));
  else if(A === 1) {
    L = mt => d - Math.exp( - D * mt) * (C + (M + D * C) * mt);
    const tt = M + D * C;
    q = mt => Math.exp( - D * mt) * (D * tt * mt - M)
  }
  else {
    const tt = D * Math.sqrt(A * A - 1);
    L = Nt =>  {
      const yt = Math.exp( - A * D * Nt),
      O = Math.min(tt * Nt,
      300);
      return d - yt * ((M + A * D * C) * Math.sinh(O) + tt * C * Math.cosh(O)) / tt
    };
    const mt = (M + A * D * C) / tt,
    pt = A * D * mt - C * tt,
    Rt = A * D * C - mt * tt;
    q = Nt =>  {
      const yt = Math.exp( - A * D * Nt),
      O = Math.min(tt * Nt,
      300);
      return yt * (pt * Math.sinh(O) + Rt * Math.cosh(O))
    }
  }
  const rt =  {
    calculatedDuration: w && p || null,
    velocity: tt => We(q(tt)),
    next: tt =>  {
      if( ! w && A < 1) {
        const pt = Math.exp( - A * D * tt),
        Rt = Math.sin(Q * tt),
        Nt = Math.cos(Q * tt),
        yt = d - pt * ($ * Rt + C * Nt),
        O = We(pt * (F * Rt + X * Nt));
        return h.done = Math.abs(O) <= r && Math.abs(d - yt) <= l,
        h.value = h.done ? d: yt,
        h
      }
      const mt = L(tt);
      if(w) h.done = tt >= p;
      else {
        const pt = We(q(tt));
        h.done = Math.abs(pt) <= r && Math.abs(d - mt) <= l
      }
      return h.value = h.done ? d: mt,
      h
    },
    toString: () =>  {
      const tt = Math.min(Zd(rt),
      Ul),
      mt = rx(pt => rt.next(tt * pt).value,
      tt,
      30);
      return tt + "ms " + mt
    },
    toTransition: () =>  {
    }
  };
  return rt
}
Hl.applyToOptions = n =>  {
  const a = RT(n,
  100,
  Hl);
  return n.ease = a.ease,
  n.duration = We(a.duration),
  n.type = "keyframes",
  n
};
const LT = 5;
function lx(n,
a,
s) {
  const r = Math.max(a - LT,
  0);
  return P0(s - n(r),
  a - r)
}
function od( {
  keyframes: n,
  velocity: a = 0,
  power: s = .8,
  timeConstant: r = 325,
  bounceDamping: l = 10,
  bounceStiffness: f = 500,
  modifyTarget: d,
  min: h,
  max: g,
  restDelta: m = .5,
  restSpeed: v
}) {
  const p = n[0],
  E =  {
    done:  ! 1,
    value: p
  },
  w = X => h !== void 0 && X < h || g !== void 0 && X > g,
  M = X => h === void 0 ? g: g === void 0 || Math.abs(h - X) < Math.abs(g - X) ? h: g;
  let A = s * a;
  const C = p + A,
  D = d === void 0 ? C: d(C);
  D !== C && (A = D - p);
  const B = X =>  - A * Math.exp( - X / r),
  L = X => D + B(X),
  q = X =>  {
    const rt = B(X),
    tt = L(X);
    E.done = Math.abs(rt) <= m,
    E.value = E.done ? D: tt
  };
  let Q,
  $;
  const F = X =>  {
    w(E.value) && (Q = X,
    $ = Hl( {
      keyframes: [E.value,
      M(E.value)],
      velocity: lx(L,
      X,
      E.value),
      damping: l,
      stiffness: f,
      restDelta: m,
      restSpeed: v
    }))
  };
  return F(0),
   {
    calculatedDuration: null,
    next: X =>  {
      let rt =  ! 1;
      return ! $ && Q === void 0 && (rt =  ! 0,
      q(X),
      F(X)),
      Q !== void 0 && X >= Q ? $.next(X - Q): ( ! rt && q(X),
      E)
    }
  }
}
function VT(n,
a,
s) {
  const r = [],
  l = s || ka.mix || ox,
  f = n.length - 1;
  for(let d = 0; d < f; d++) {
    let h = l(n[d],
    n[d + 1]);
    if(a) {
      const g = Array.isArray(a) ? a[d] || cn: a;
      h = qo(g,
      h)
    }
    r.push(h)
  }
  return r
}
function BT(n,
a,
 {
  clamp: s =  ! 0,
  ease: r,
  mixer: l
}
 =  {
}) {
  const f = n.length;
  if(Hd(f === a.length),
  f === 1) return() => a[0];
  if(f === 2 && a[0] === a[1]) return() => a[1];
  const d = n[0] === n[1];
  n[0] > n[f - 1] && (n = [...n].reverse(),
  a = [...a].reverse());
  const h = VT(a,
  r,
  l),
  g = h.length,
  m = v =>  {
    if(d && v < n[0]) return a[0];
    let p = 0;
    if(g > 1) for(; p < n.length - 2 &&  ! (v < n[p + 1]);
    p++);
    const E = Lo(n[p],
    n[p + 1],
    v);
    return h[p](E)
  };
  return s ? v => m(_n(n[0],
  n[f - 1],
  v)): m
}
function kT(n,
a) {
  const s = n[n.length - 1];
  for(let r = 1; r <= a; r++) {
    const l = Lo(0,
    a,
    r);
    n.push(qt(s,
    1,
    l))
  }
}
function UT(n) {
  const a = [0];
  return kT(a,
  n.length - 1),
  a
}
function HT(n,
a) {
  return n.map(s => s * a)
}
function PT(n,
a) {
  return n.map(() => a || W0).splice(0,
  n.length - 1)
}
function Do( {
  duration: n = 300,
  keyframes: a,
  times: s,
  ease: r = "easeInOut"
}) {
  const l = QA(r) ? r.map(Ry): Ry(r),
  f =  {
    done:  ! 1,
    value: a[0]
  },
  d = HT(s && s.length === a.length ? s: UT(a),
  n),
  h = BT(d,
  a,
   {
    ease: Array.isArray(l) ? l: PT(a,
    l)
  });
  return {
    calculatedDuration: n,
    next: g => (f.value = h(g),
    f.done = g >= n,
    f)
  }
}
const YT = n => n !== null;
function Jl(n,
 {
  repeat: a,
  repeatType: s = "loop"
},
r,
l = 1) {
  const f = n.filter(YT),
  h = l < 0 || a && s !== "loop" && a % 2 === 1 ? 0: f.length - 1;
  return ! h || r === void 0 ? f[h]: r
}
const GT =  {
  decay: od,
  inertia: od,
  tween: Do,
  keyframes: Do,
  spring: Hl
};
function cx(n) {
  typeof n.type == "string" && (n.type = GT[n.type])
}
class Qd {
  constructor() {
    this.updateFinished()
  }
  get finished() {
    return this._finished
  }
  updateFinished() {
    this._finished = new Promise(a =>  {
      this.resolve = a
    })
  }
  notifyFinished() {
    this.resolve()
  }
  then(a,
  s) {
    return this.finished.then(a,
    s)
  }
}
const qT = n => n / 100;
class Pl extends Qd {
  constructor(a) {
    super(),
    this.state = "idle",
    this.startTime = null,
    this.isStopped =  ! 1,
    this.currentTime = 0,
    this.holdTime = null,
    this.playbackSpeed = 1,
    this.delayState =  {
      done:  ! 1,
      value: void 0
    },
    this.stop = () =>  {
      const {
        motionValue: s
      }
       = this.options;
      s && s.updatedAt !== Re.now() && this.tick(Re.now()),
      this.isStopped =  ! 0,
      this.state !== "idle" && (this.teardown(),
      this.options.onStop ?. ())
    },
    this.options = a,
    this.initAnimation(),
    this.play(),
    a.autoplay ===  ! 1 && this.pause()
  }
  initAnimation() {
    const {
      options: a
    }
     = this;
    cx(a);
    const {
      type: s = Do,
      repeat: r = 0,
      repeatDelay: l = 0,
      repeatType: f,
      velocity: d = 0
    }
     = a;
    let {
      keyframes: h
    }
     = a;
    const g = s || Do;
    g !== Do && typeof h[0] != "number" && (this.mixKeyframes = qo(qT,
    ox(h[0],
    h[1])),
    h = [0,
    100]);
    const m = g( {
      ...a,
      keyframes: h
    });
    f === "mirror" && (this.mirroredGenerator = g( {
      ...a,
      keyframes: [...h].reverse(),
      velocity:  - d
    })),
    m.calculatedDuration === null && (m.calculatedDuration = Zd(m));
    const {
      calculatedDuration: v
    }
     = m;
    this.calculatedDuration = v,
    this.resolvedDuration = v + l,
    this.totalDuration = this.resolvedDuration * (r + 1) - l,
    this.generator = m
  }
  updateTime(a) {
    const s = Math.round(a - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime: this.currentTime = s
  }
  tick(a,
  s =  ! 1) {
    const {
      generator: r,
      totalDuration: l,
      mixKeyframes: f,
      mirroredGenerator: d,
      resolvedDuration: h,
      calculatedDuration: g
    }
     = this;
    if(this.startTime === null) return r.next(0);
    const {
      delay: m = 0,
      keyframes: v,
      repeat: p,
      repeatType: E,
      repeatDelay: w,
      type: M,
      onUpdate: A,
      finalKeyframe: C
    }
     = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime,
    a): this.speed < 0 && (this.startTime = Math.min(a - l / this.speed,
    this.startTime)),
    s ? this.currentTime = a: this.updateTime(a);
    const D = this.currentTime - m * (this.playbackSpeed >= 0 ? 1:  - 1),
    B = this.playbackSpeed >= 0 ? D < 0: D > l;
    this.currentTime = Math.max(D,
    0),
    this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let L = this.currentTime,
    q = r;
    if(p) {
      const X = Math.min(this.currentTime,
      l) / h;
      let rt = Math.floor(X),
      tt = X % 1;
       ! tt && X >= 1 && (tt = 1),
      tt === 1 && rt--,
      rt = Math.min(rt,
      p + 1),
      rt % 2 && (E === "reverse" ? (tt = 1 - tt,
      w && (tt -= w / h)): E === "mirror" && (q = d)),
      L = _n(0,
      1,
      tt) * h
    }
    let Q;
    B ? (this.delayState.value = v[0],
    Q = this.delayState): Q = q.next(L),
    f &&  ! B && (Q.value = f(Q.value));
    let {
      done: $
    }
     = Q;
     ! B && g !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= l: this.currentTime <= 0);
    const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
    return F && M !== od && (Q.value = Jl(v,
    this.options,
    C,
    this.speed)),
    A && A(Q.value),
    F && this.finish(),
    Q
  }
  then(a,
  s) {
    return this.finished.then(a,
    s)
  }
  get duration() {
    return ln(this.calculatedDuration)
  }
  get iterationDuration() {
    const {
      delay: a = 0
    }
     = this.options ||  {
    };
    return this.duration + ln(a)
  }
  get time() {
    return ln(this.currentTime)
  }
  set time(a) {
    a = We(a),
    this.currentTime = a,
    this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = a: this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
    this.driver ? this.driver.start( ! 1): (this.startTime = 0,
    this.state = "paused",
    this.holdTime = a,
    this.tick(a))
  }
  getGeneratorVelocity() {
    const a = this.currentTime;
    if(a <= 0) return this.options.velocity || 0;
    if(this.generator.velocity) return this.generator.velocity(a);
    const s = this.generator.next(a).value;
    return lx(r => this.generator.next(r).value,
    a,
    s)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(a) {
    const s = this.playbackSpeed !== a;
    s && this.driver && this.updateTime(Re.now()),
    this.playbackSpeed = a,
    s && this.driver && (this.time = ln(this.currentTime))
  }
  play() {
    if(this.isStopped) return;
    const {
      driver: a = MT,
      startTime: s
    }
     = this.options;
    this.driver || (this.driver = a(l => this.tick(l))),
    this.options.onPlay ?. ();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(),
    this.startTime = r): this.holdTime !== null ? this.startTime = r - this.holdTime: this.startTime || (this.startTime = s ?? r),
    this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
    this.holdTime = null,
    this.state = "running",
    this.driver.start()
  }
  pause() {
    this.state = "paused",
    this.updateTime(Re.now()),
    this.holdTime = this.currentTime
  }
  complete() {
    this.state !== "running" && this.play(),
    this.state = "finished",
    this.holdTime = null
  }
  finish() {
    this.notifyFinished(),
    this.teardown(),
    this.state = "finished",
    this.options.onComplete ?. ()
  }
  cancel() {
    this.holdTime = null,
    this.startTime = 0,
    this.tick(0),
    this.teardown(),
    this.options.onCancel ?. ()
  }
  teardown() {
    this.state = "idle",
    this.stopDriver(),
    this.startTime = this.holdTime = null
  }
  stopDriver() {
    this.driver && (this.driver.stop(),
    this.driver = void 0)
  }
  sample(a) {
    return this.startTime = 0,
    this.tick(a,
     ! 0)
  }
  attachTimeline(a) {
    return this.options.allowFlatten && (this.options.type = "keyframes",
    this.options.ease = "linear",
    this.initAnimation()),
    this.driver ?. stop(),
    a.observe(this)
  }
}
function XT(n) {
  for(let a = 1; a < n.length; a++) n[a] ?? (n[a] = n[a - 1])
}
const mi = n => n * 180 / Math.PI,
rd = n =>  {
  const a = mi(Math.atan2(n[1],
  n[0]));
  return ld(a)
},
KT =  {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: rd,
  rotateZ: rd,
  skewX: n => mi(Math.atan(n[1])),
  skewY: n => mi(Math.atan(n[2])),
  skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
},
ld = n => (n = n % 360,
n < 0 && (n += 360),
n),
Ly = rd,
Vy = n => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
By = n => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
FT =  {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Vy,
  scaleY: By,
  scale: n => (Vy(n) + By(n)) / 2,
  rotateX: n => ld(mi(Math.atan2(n[6],
  n[5]))),
  rotateY: n => ld(mi(Math.atan2( - n[2],
  n[0]))),
  rotateZ: Ly,
  rotate: Ly,
  skewX: n => mi(Math.atan(n[4])),
  skewY: n => mi(Math.atan(n[1])),
  skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function cd(n) {
  return n.includes("scale") ? 1: 0
}
function ud(n,
a) {
  if( ! n || n === "none") return cd(a);
  const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r,
  l;
  if(s) r = FT,
  l = s;
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = KT,
    l = h
  }
  if( ! l) return cd(a);
  const f = r[a],
  d = l[1].split(",").map(QT);
  return typeof f == "function" ? f(d): d[f]
}
const ZT = (n,
a) =>  {
  const {
    transform: s = "none"
  }
   = getComputedStyle(n);
  return ud(s,
  a)
};
function QT(n) {
  return parseFloat(n.trim())
}
const ws = ["transformPerspective",
"x",
"y",
"z",
"translateX",
"translateY",
"translateZ",
"scale",
"scaleX",
"scaleY",
"rotate",
"rotateX",
"rotateY",
"rotateZ",
"skew",
"skewX",
"skewY"],
As = new Set(ws),
ky = n => n === Es || n === it,
WT = new Set(["x",
"y",
"z"]),
JT = ws.filter(n =>  ! WT.has(n));
function $T(n) {
  const a = [];
  return JT.forEach(s =>  {
    const r = n.getValue(s);
    r !== void 0 && (a.push([s,
    r.get()]),
    r.set(s.startsWith("scale") ? 1: 0))
  }),
  a
}
const Va =  {
  width: ( {
    x: n
  },
   {
    paddingLeft: a = "0",
    paddingRight: s = "0",
    boxSizing: r
  }) =>  {
    const l = n.max - n.min;
    return r === "border-box" ? l: l - parseFloat(a) - parseFloat(s)
  },
  height: ( {
    y: n
  },
   {
    paddingTop: a = "0",
    paddingBottom: s = "0",
    boxSizing: r
  }) =>  {
    const l = n.max - n.min;
    return r === "border-box" ? l: l - parseFloat(a) - parseFloat(s)
  },
  top: (n,
   {
    top: a
  }) => parseFloat(a),
  left: (n,
   {
    left: a
  }) => parseFloat(a),
  bottom: ( {
    y: n
  },
   {
    top: a
  }) => parseFloat(a) + (n.max - n.min),
  right: ( {
    x: n
  },
   {
    left: a
  }) => parseFloat(a) + (n.max - n.min),
  x: (n,
   {
    transform: a
  }) => ud(a,
  "x"),
  y: (n,
   {
    transform: a
  }) => ud(a,
  "y")
};
Va.translateX = Va.x;
Va.translateY = Va.y;
const pi = new Set;
let fd =  ! 1,
dd =  ! 1,
hd =  ! 1;
function ux() {
  if(dd) {
    const n = Array.from(pi).filter(r => r.needsMeasurement),
    a = new Set(n.map(r => r.element)),
    s = new Map;
    a.forEach(r =>  {
      const l = $T(r);
      l.length && (s.set(r,
      l),
      r.render())
    }),
    n.forEach(r => r.measureInitialState()),
    a.forEach(r =>  {
      r.render();
      const l = s.get(r);
      l && l.forEach(([f,
      d]) =>  {
        r.getValue(f) ?. set(d)
      })
    }),
    n.forEach(r => r.measureEndState()),
    n.forEach(r =>  {
      r.suspendedScrollY !== void 0 && window.scrollTo(0,
      r.suspendedScrollY)
    })
  }
  dd =  ! 1,
  fd =  ! 1,
  pi.forEach(n => n.complete(hd)),
  pi.clear()
}
function fx() {
  pi.forEach(n =>  {
    n.readKeyframes(),
    n.needsMeasurement && (dd =  ! 0)
  })
}
function IT() {
  hd =  ! 0,
  fx(),
  ux(),
  hd =  ! 1
}
class Wd {
  constructor(a,
  s,
  r,
  l,
  f,
  d =  ! 1) {
    this.state = "pending",
    this.isAsync =  ! 1,
    this.needsMeasurement =  ! 1,
    this.unresolvedKeyframes = [...a],
    this.onComplete = s,
    this.name = r,
    this.motionValue = l,
    this.element = f,
    this.isAsync = d
  }
  scheduleResolve() {
    this.state = "scheduled",
    this.isAsync ? (pi.add(this),
    fd || (fd =  ! 0,
    Ut.read(fx),
    Ut.resolveKeyframes(ux))): (this.readKeyframes(),
    this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: s,
      element: r,
      motionValue: l
    }
     = this;
    if(a[0] === null) {
      const f = l ?. get(),
      d = a[a.length - 1];
      if(f !== void 0) a[0] = f;
      else if(r && s) {
        const h = r.readValue(s,
        d);
        h != null && (a[0] = h)
      }
      a[0] === void 0 && (a[0] = d),
      l && f === void 0 && l.set(a[0])
    }
    XT(a)
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(a =  ! 1) {
    this.state = "complete",
    this.onComplete(this.unresolvedKeyframes,
    this.finalKeyframe,
    a),
    pi.delete(this)
  }
  cancel() {
    this.state === "scheduled" && (pi.delete(this),
    this.state = "pending")
  }
  resume() {
    this.state === "pending" && this.scheduleResolve()
  }
}
const tC = n => n.startsWith("--");
function dx(n,
a,
s) {
  tC(a) ? n.style.setProperty(a,
  s): n.style[a] = s
}
const eC =  {
};
function hx(n,
a) {
  const s = H0(n);
  return() => eC[a] ?? s()
}
const nC = hx(() => window.ScrollTimeline !== void 0,
"scrollTimeline"),
mx = hx(() =>  {
  try {
    document.createElement("div").animate( {
      opacity: 0
    },
     {
      easing: "linear(0, 1)"
    })
  }
  catch {
    return ! 1
  }
  return ! 0
},
"linearEasing"),
Ro = ([n,
a,
s,
r]) => `cubic-bezier(${n}, ${a}, ${s}, ${r})`,
Uy =  {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ro([0,
  .65,
  .55,
  1]),
  circOut: Ro([.55,
  0,
  1,
  .45]),
  backIn: Ro([.31,
  .01,
  .66,
   - .59]),
  backOut: Ro([.33,
  1.53,
  .69,
  .99])
};
function px(n,
a) {
  if(n) return typeof n == "function" ? mx() ? rx(n,
  a): "ease-out": J0(n) ? Ro(n): Array.isArray(n) ? n.map(s => px(s,
  a) || Uy.easeOut): Uy[n]
}
function aC(n,
a,
s,
 {
  delay: r = 0,
  duration: l = 300,
  repeat: f = 0,
  repeatType: d = "loop",
  ease: h = "easeOut",
  times: g
}
 =  {
},
m = void 0) {
  const v =  {
    [a]: s
  };
  g && (v.offset = g);
  const p = px(h,
  l);
  Array.isArray(p) && (v.easing = p);
  const E =  {
    delay: r,
    duration: l,
    easing: Array.isArray(p) ? "linear": p,
    fill: "both",
    iterations: f + 1,
    direction: d === "reverse" ? "alternate": "normal"
  };
  return m && (E.pseudoElement = m),
  n.animate(v,
  E)
}
function gx(n) {
  return typeof n == "function" && "applyToOptions" in n
}
function iC( {
  type: n,
  ...a
}) {
  return gx(n) && mx() ? n.applyToOptions(a): (a.duration ?? (a.duration = 300),
  a.ease ?? (a.ease = "easeOut"),
  a)
}
class yx extends Qd {
  constructor(a) {
    if(super(),
    this.finishedTime = null,
    this.isStopped =  ! 1,
    this.manualStartTime = null,
     ! a) return;
    const {
      element: s,
      name: r,
      keyframes: l,
      pseudoElement: f,
      allowFlatten: d =  ! 1,
      finalKeyframe: h,
      onComplete: g
    }
     = a;
    this.isPseudoElement =  !  ! f,
    this.allowFlatten = d,
    this.options = a,
    Hd(typeof a.type != "string");
    const m = iC(a);
    this.animation = aC(s,
    r,
    l,
    m,
    f),
    m.autoplay ===  ! 1 && this.animation.pause(),
    this.animation.onfinish = () =>  {
      if(this.finishedTime = this.time,
       ! f) {
        const v = Jl(l,
        this.options,
        h,
        this.speed);
        this.updateMotionValue && this.updateMotionValue(v),
        dx(s,
        r,
        v),
        this.animation.cancel()
      }
      g ?. (),
      this.notifyFinished()
    }
  }
  play() {
    this.isStopped || (this.manualStartTime = null,
    this.animation.play(),
    this.state === "finished" && this.updateFinished())
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.finish ?. ()
  }
  cancel() {
    try {
      this.animation.cancel()
    }
    catch {
    }
  }
  stop() {
    if(this.isStopped) return;
    this.isStopped =  ! 0;
    const {
      state: a
    }
     = this;
    a === "idle" || a === "finished" || (this.updateMotionValue ? this.updateMotionValue(): this.commitStyles(),
    this.isPseudoElement || this.cancel())
  }
  commitStyles() {
    const a = this.options ?. element;
     ! this.isPseudoElement && a ?. isConnected && this.animation.commitStyles ?. ()
  }
  get duration() {
    const a = this.animation.effect ?. getComputedTiming ?. ().duration || 0;
    return ln(Number(a))
  }
  get iterationDuration() {
    const {
      delay: a = 0
    }
     = this.options ||  {
    };
    return this.duration + ln(a)
  }
  get time() {
    return ln(Number(this.animation.currentTime) || 0)
  }
  set time(a) {
    const s = this.finishedTime !== null;
    this.manualStartTime = null,
    this.finishedTime = null,
    this.animation.currentTime = We(a),
    s && this.animation.pause()
  }
  get speed() {
    return this.animation.playbackRate
  }
  set speed(a) {
    a < 0 && (this.finishedTime = null),
    this.animation.playbackRate = a
  }
  get state() {
    return this.finishedTime !== null ? "finished": this.animation.playState
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime)
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a
  }
  attachTimeline( {
    timeline: a,
    rangeStart: s,
    rangeEnd: r,
    observe: l
  }) {
    return this.allowFlatten && this.animation.effect ?. updateTiming( {
      easing: "linear"
    }),
    this.animation.onfinish = null,
    a && nC() ? (this.animation.timeline = a,
    s && (this.animation.rangeStart = s),
    r && (this.animation.rangeEnd = r),
    cn): l(this)
  }
}
const vx =  {
  anticipate: F0,
  backInOut: K0,
  circInOut: Q0
};
function sC(n) {
  return n in vx
}
function oC(n) {
  typeof n.ease == "string" && sC(n.ease) && (n.ease = vx[n.ease])
}
const Of = 10;
class rC extends yx {
  constructor(a) {
    oC(a),
    cx(a),
    super(a),
    a.startTime !== void 0 && a.autoplay !==  ! 1 && (this.startTime = a.startTime),
    this.options = a
  }
  updateMotionValue(a) {
    const {
      motionValue: s,
      onUpdate: r,
      onComplete: l,
      element: f,
      ...d
    }
     = this.options;
    if( ! s) return;
    if(a !== void 0) {
      s.set(a);
      return
    }
    const h = new Pl( {
      ...d,
      autoplay:  ! 1
    }),
    g = Math.max(Of,
    Re.now() - this.startTime),
    m = _n(0,
    Of,
    g - Of),
    v = h.sample(g).value,
     {
      name: p
    }
     = this.options;
    f && p && dx(f,
    p,
    v),
    s.setWithVelocity(h.sample(Math.max(0,
    g - m)).value,
    v,
    m),
    h.stop()
  }
}
const Hy = (n,
a) => a === "zIndex" ?  ! 1:  !  ! (typeof n == "number" || Array.isArray(n) || typeof n == "string" && (xn.test(n) || n === "0") &&  ! n.startsWith("url("));
function lC(n) {
  const a = n[0];
  if(n.length === 1) return ! 0;
  for(let s = 0; s < n.length; s++) if(n[s] !== a) return ! 0
}
function cC(n,
a,
s,
r) {
  const l = n[0];
  if(l === null) return ! 1;
  if(a === "display" || a === "visibility") return ! 0;
  const f = n[n.length - 1],
  d = Hy(l,
  a),
  h = Hy(f,
  a);
  return ! d ||  ! h ?  ! 1: lC(n) || (s === "spring" || gx(s)) && r
}
function md(n) {
  n.duration = 0,
  n.type = "keyframes"
}
const xx = new Set(["opacity",
"clipPath",
"filter",
"transform"]),
uC = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function fC(n) {
  for(let a = 0; a < n.length; a++) if(typeof n[a] == "string" && uC.test(n[a])) return ! 0;
  return ! 1
}
const dC = new Set(["color",
"backgroundColor",
"outlineColor",
"fill",
"stroke",
"borderColor",
"borderTopColor",
"borderRightColor",
"borderBottomColor",
"borderLeftColor"]),
hC = H0(() => Object.hasOwnProperty.call(Element.prototype,
"animate"));
function mC(n) {
  const {
    motionValue: a,
    name: s,
    repeatDelay: r,
    repeatType: l,
    damping: f,
    type: d,
    keyframes: h
  }
   = n;
  if( ! (a ?. owner ?. current instanceof HTMLElement)) return ! 1;
  const {
    onUpdate: m,
    transformTemplate: v
  }
   = a.owner.getProps();
  return hC() && s && (xx.has(s) || dC.has(s) && fC(h)) && (s !== "transform" ||  ! v) &&  ! m &&  ! r && l !== "mirror" && f !== 0 && d !== "inertia"
}
const pC = 40;
class gC extends Qd {
  constructor( {
    autoplay: a =  ! 0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: l = 0,
    repeatDelay: f = 0,
    repeatType: d = "loop",
    keyframes: h,
    name: g,
    motionValue: m,
    element: v,
    ...p
  }) {
    super(),
    this.stop = () =>  {
      this._animation && (this._animation.stop(),
      this.stopTimeline ?. ()),
      this.keyframeResolver ?. cancel()
    },
    this.createdAt = Re.now();
    const E =  {
      autoplay: a,
      delay: s,
      type: r,
      repeat: l,
      repeatDelay: f,
      repeatType: d,
      name: g,
      motionValue: m,
      element: v,
      ...p
    },
    w = v ?. KeyframeResolver || Wd;
    this.keyframeResolver = new w(h,
    (M,
    A,
    C) => this.onKeyframesResolved(M,
    A,
    E,
     ! C),
    g,
    m,
    v),
    this.keyframeResolver ?. scheduleResolve()
  }
  onKeyframesResolved(a,
  s,
  r,
  l) {
    this.keyframeResolver = void 0;
    const {
      name: f,
      type: d,
      velocity: h,
      delay: g,
      isHandoff: m,
      onUpdate: v
    }
     = r;
    this.resolvedAt = Re.now();
    let p =  ! 0;
    cC(a,
    f,
    d,
    h) || (p =  ! 1,
    (ka.instantAnimations ||  ! g) && v ?. (Jl(a,
    r,
    s)),
    a[0] = a[a.length - 1],
    md(r),
    r.repeat = 0);
    const w =  {
      startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > pC ? this.resolvedAt: this.createdAt: this.createdAt: void 0,
      finalKeyframe: s,
      ...r,
      keyframes: a
    },
    M = p &&  ! m && mC(w),
    A = w.motionValue ?. owner ?. current;
    let C;
    if(M) try {
      C = new rC( {
        ...w,
        element: A
      })
    }
    catch {
      C = new Pl(w)
    }
    else C = new Pl(w);
    C.finished.then(() =>  {
      this.notifyFinished()
    }).catch(cn),
    this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline),
    this.pendingTimeline = void 0),
    this._animation = C
  }
  get finished() {
    return this._animation ? this.animation.finished: this._finished
  }
  then(a,
  s) {
    return this.finished.finally(a).then(() =>  {
    })
  }
  get animation() {
    return this._animation || (this.keyframeResolver ?. resume(),
    IT()),
    this._animation
  }
  get duration() {
    return this.animation.duration
  }
  get iterationDuration() {
    return this.animation.iterationDuration
  }
  get time() {
    return this.animation.time
  }
  set time(a) {
    this.animation.time = a
  }
  get speed() {
    return this.animation.speed
  }
  get state() {
    return this.animation.state
  }
  set speed(a) {
    this.animation.speed = a
  }
  get startTime() {
    return this.animation.startTime
  }
  attachTimeline(a) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(a): this.pendingTimeline = a,
    () => this.stop()
  }
  play() {
    this.animation.play()
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.complete()
  }
  cancel() {
    this._animation && this.animation.cancel(),
    this.keyframeResolver ?. cancel()
  }
}
function bx(n,
a,
s,
r = 0,
l = 1) {
  const f = Array.from(n).sort((m,
  v) => m.sortNodePosition(v)).indexOf(a),
  d = n.size,
  h = (d - 1) * r;
  return typeof s == "function" ? s(f,
  d): l === 1 ? f * r: h - f * r
}
const yC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function vC(n) {
  const a = yC.exec(n);
  if( ! a) return[,
  ];
  const[,
  s,
  r,
  l] = a;
  return[`--${s??r}`,
  l]
}
function Sx(n,
a,
s = 1) {
  const[r,
  l] = vC(n);
  if( ! r) return;
  const f = window.getComputedStyle(a).getPropertyValue(r);
  if(f) {
    const d = f.trim();
    return B0(d) ? parseFloat(d): d
  }
  return qd(l) ? Sx(l,
  a,
  s + 1): l
}
const xC =  {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
},
bC = n => ( {
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550): 30,
  restSpeed: 10
}),
SC =  {
  type: "keyframes",
  duration: .8
},
EC =  {
  type: "keyframes",
  ease: [.25,
  .1,
  .35,
  1],
  duration: .3
},
wC = (n,
 {
  keyframes: a
}) => a.length > 2 ? SC: As.has(n) ? n.startsWith("scale") ? bC(a[1]): xC: EC;
function Ex(n,
a) {
  if(n ?. inherit && a) {
    const {
      inherit: s,
      ...r
    }
     = n;
    return {
      ...a,
      ...r
    }
  }
  return n
}
function Jd(n,
a) {
  const s = n ?. [a] ?? n ?. default ?? n;
  return s !== n ? Ex(s,
  n): s
}
const AC = new Set(["when",
"delay",
"delayChildren",
"staggerChildren",
"staggerDirection",
"repeat",
"repeatType",
"repeatDelay",
"from",
"elapsed"]);
function TC(n) {
  for(const a in n) if( ! AC.has(a)) return ! 0;
  return ! 1
}
const $d = (n,
a,
s,
r =  {
},
l,
f) => d =>  {
  const h = Jd(r,
  n) ||  {
  },
  g = h.delay || r.delay || 0;
  let {
    elapsed: m = 0
  }
   = r;
  m = m - We(g);
  const v =  {
    keyframes: Array.isArray(s) ? s: [null,
    s],
    ease: "easeOut",
    velocity: a.getVelocity(),
    ...h,
    delay:  - m,
    onUpdate: E =>  {
      a.set(E),
      h.onUpdate && h.onUpdate(E)
    },
    onComplete: () =>  {
      d(),
      h.onComplete && h.onComplete()
    },
    name: n,
    motionValue: a,
    element: f ? void 0: l
  };
  TC(h) || Object.assign(v,
  wC(n,
  v)),
  v.duration && (v.duration = We(v.duration)),
  v.repeatDelay && (v.repeatDelay = We(v.repeatDelay)),
  v.from !== void 0 && (v.keyframes[0] = v.from);
  let p =  ! 1;
  if((v.type ===  ! 1 || v.duration === 0 &&  ! v.repeatDelay) && (md(v),
  v.delay === 0 && (p =  ! 0)),
  (ka.instantAnimations || ka.skipAnimations || l ?. shouldSkipAnimations) && (p =  ! 0,
  md(v),
  v.delay = 0),
  v.allowFlatten =  ! h.type &&  ! h.ease,
  p &&  ! f && a.get() !== void 0) {
    const E = Jl(v.keyframes,
    h);
    if(E !== void 0) {
      Ut.update(() =>  {
        v.onUpdate(E),
        v.onComplete()
      });
      return
    }
  }
  return h.isSync ? new Pl(v): new gC(v)
};
function Py(n) {
  const a = [ {
  },
   {
  }];
  return n ?. values.forEach((s,
  r) =>  {
    a[0][r] = s.get(),
    a[1][r] = s.getVelocity()
  }),
  a
}
function Id(n,
a,
s,
r) {
  if(typeof a == "function") {
    const[l,
    f] = Py(r);
    a = a(s !== void 0 ? s: n.custom,
    l,
    f)
  }
  if(typeof a == "string" && (a = n.variants && n.variants[a]),
  typeof a == "function") {
    const[l,
    f] = Py(r);
    a = a(s !== void 0 ? s: n.custom,
    l,
    f)
  }
  return a
}
function gi(n,
a,
s) {
  const r = n.getProps();
  return Id(r,
  a,
  s !== void 0 ? s: r.custom,
  n)
}
const wx = new Set(["width",
"height",
"top",
"left",
"right",
"bottom",
...ws]),
Yy = 30,
CC = n =>  ! isNaN(parseFloat(n));
class MC {
  constructor(a,
  s =  {
  }) {
    this.canTrackVelocity = null,
    this.events =  {
    },
    this.updateAndNotify = r =>  {
      const l = Re.now();
      if(this.updatedAt !== l && this.setPrevFrameValue(),
      this.prev = this.current,
      this.setCurrent(r),
      this.current !== this.prev && (this.events.change ?. notify(this.current),
      this.dependents)) for(const f of this.dependents) f.dirty()
    },
    this.hasAnimated =  ! 1,
    this.setCurrent(a),
    this.owner = s.owner
  }
  setCurrent(a) {
    this.current = a,
    this.updatedAt = Re.now(),
    this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = CC(this.current))
  }
  setPrevFrameValue(a = this.current) {
    this.prevFrameValue = a,
    this.prevUpdatedAt = this.updatedAt
  }
  onChange(a) {
    return this.on("change",
    a)
  }
  on(a,
  s) {
    this.events[a] || (this.events[a] = new Pd);
    const r = this.events[a].add(s);
    return a === "change" ? () =>  {
      r(),
      Ut.read(() =>  {
        this.events.change.getSize() || this.stop()
      })
    }: r
  }
  clearListeners() {
    for(const a in this.events) this.events[a].clear()
  }
  attach(a,
  s) {
    this.passiveEffect = a,
    this.stopPassiveEffect = s
  }
  set(a) {
    this.passiveEffect ? this.passiveEffect(a,
    this.updateAndNotify): this.updateAndNotify(a)
  }
  setWithVelocity(a,
  s,
  r) {
    this.set(s),
    this.prev = void 0,
    this.prevFrameValue = a,
    this.prevUpdatedAt = this.updatedAt - r
  }
  jump(a,
  s =  ! 0) {
    this.updateAndNotify(a),
    this.prev = a,
    this.prevUpdatedAt = this.prevFrameValue = void 0,
    s && this.stop(),
    this.stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
    this.events.change ?. notify(this.current)
  }
  addDependent(a) {
    this.dependents || (this.dependents = new Set),
    this.dependents.add(a)
  }
  removeDependent(a) {
    this.dependents && this.dependents.delete(a)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const a = Re.now();
    if( ! this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > Yy) return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt,
    Yy);
    return P0(parseFloat(this.current) - parseFloat(this.prevFrameValue),
    s)
  }
  start(a) {
    return this.stop(),
    new Promise(s =>  {
      this.hasAnimated =  ! 0,
      this.animation = a(s),
      this.events.animationStart && this.events.animationStart.notify()
    }).then(() =>  {
      this.events.animationComplete && this.events.animationComplete.notify(),
      this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(),
    this.events.animationCancel && this.events.animationCancel.notify()),
    this.clearAnimation()
  }
  isAnimating() {
    return !  ! this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.dependents ?. clear(),
    this.events.destroy ?. notify(),
    this.clearListeners(),
    this.stop(),
    this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function xs(n,
a) {
  return new MC(n,
  a)
}
const pd = n => Array.isArray(n);
function RC(n,
a,
s) {
  n.hasValue(a) ? n.getValue(a).set(s): n.addValue(a,
  xs(s))
}
function NC(n) {
  return pd(n) ? n[n.length - 1] || 0: n
}
function DC(n,
a) {
  const s = gi(n,
  a);
  let {
    transitionEnd: r =  {
    },
    transition: l =  {
    },
    ...f
  }
   = s ||  {
  };
  f =  {
    ...f,
    ...r
  };
  for(const d in f) {
    const h = NC(f[d]);
    RC(n,
    d,
    h)
  }
}
const ve = n =>  !  ! (n && n.getVelocity);
function jC(n) {
  return !  ! (ve(n) && n.add)
}
function gd(n,
a) {
  const s = n.getValue("willChange");
  if(jC(s)) return s.add(a);
  if( ! s && ka.WillChange) {
    const r = new ka.WillChange("auto");
    n.addValue("willChange",
    r),
    r.add(a)
  }
}
function th(n) {
  return n.replace(/([A-Z])/g,
  a => `-${a.toLowerCase()}`)
}
const OC = "framerAppearId",
Ax = "data-" + th(OC);
function Tx(n) {
  return n.props[Ax]
}
function zC( {
  protectedKeys: n,
  needsAnimating: a
},
s) {
  const r = n.hasOwnProperty(s) && a[s] !==  ! 0;
  return a[s] =  ! 1,
  r
}
function Cx(n,
a,
 {
  delay: s = 0,
  transitionOverride: r,
  type: l
}
 =  {
}) {
  let {
    transition: f,
    transitionEnd: d,
    ...h
  }
   = a;
  const g = n.getDefaultTransition();
  f = f ? Ex(f,
  g): g;
  const m = f ?. reduceMotion;
  r && (f = r);
  const v = [],
  p = l && n.animationState && n.animationState.getState()[l];
  for(const E in h) {
    const w = n.getValue(E,
    n.latestValues[E] ?? null),
    M = h[E];
    if(M === void 0 || p && zC(p,
    E)) continue;
    const A =  {
      delay: s,
      ...Jd(f ||  {
      },
      E)
    },
    C = w.get();
    if(C !== void 0 &&  ! w.isAnimating() &&  ! Array.isArray(M) && M === C &&  ! A.velocity) {
      Ut.update(() => w.set(M));
      continue
    }
    let D =  ! 1;
    if(window.MotionHandoffAnimation) {
      const q = Tx(n);
      if(q) {
        const Q = window.MotionHandoffAnimation(q,
        E,
        Ut);
        Q !== null && (A.startTime = Q,
        D =  ! 0)
      }
    }
    gd(n,
    E);
    const B = m ?? n.shouldReduceMotion;
    w.start($d(E,
    w,
    M,
    B && wx.has(E) ?  {
      type:  ! 1
    }: A,
    n,
    D));
    const L = w.animation;
    L && v.push(L)
  }
  if(d) {
    const E = () => Ut.update(() =>  {
      d && DC(n,
      d)
    });
    v.length ? Promise.all(v).then(E): E()
  }
  return v
}
function yd(n,
a,
s =  {
}) {
  const r = gi(n,
  a,
  s.type === "exit" ? n.presenceContext ?. custom: void 0);
  let {
    transition: l = n.getDefaultTransition() ||  {
    }
  }
   = r ||  {
  };
  s.transitionOverride && (l = s.transitionOverride);
  const f = r ? () => Promise.all(Cx(n,
  r,
  s)): () => Promise.resolve(),
  d = n.variantChildren && n.variantChildren.size ? (g = 0) =>  {
    const {
      delayChildren: m = 0,
      staggerChildren: v,
      staggerDirection: p
    }
     = l;
    return _C(n,
    a,
    g,
    m,
    v,
    p,
    s)
  }: () => Promise.resolve(),
   {
    when: h
  }
   = l;
  if(h) {
    const[g,
    m] = h === "beforeChildren" ? [f,
    d]: [d,
    f];
    return g().then(() => m())
  }
  else return Promise.all([f(),
  d(s.delay)])
}
function _C(n,
a,
s = 0,
r = 0,
l = 0,
f = 1,
d) {
  const h = [];
  for(const g of n.variantChildren) g.notify("AnimationStart",
  a),
  h.push(yd(g,
  a,
   {
    ...d,
    delay: s + (typeof r == "function" ? 0: r) + bx(n.variantChildren,
    g,
    r,
    l,
    f)
  }).then(() => g.notify("AnimationComplete",
  a)));
  return Promise.all(h)
}
function LC(n,
a,
s =  {
}) {
  n.notify("AnimationStart",
  a);
  let r;
  if(Array.isArray(a)) {
    const l = a.map(f => yd(n,
    f,
    s));
    r = Promise.all(l)
  }
  else if(typeof a == "string") r = yd(n,
  a,
  s);
  else {
    const l = typeof a == "function" ? gi(n,
    a,
    s.custom): a;
    r = Promise.all(Cx(n,
    l,
    s))
  }
  return r.then(() =>  {
    n.notify("AnimationComplete",
    a)
  })
}
const VC =  {
  test: n => n === "auto",
  parse: n => n
},
Mx = n => a => a.test(n),
Rx = [Es,
it,
On,
_a,
lT,
rT,
VC],
Gy = n => Rx.find(Mx(n));
function BC(n) {
  return typeof n == "number" ? n === 0: n !== null ? n === "none" || n === "0" || U0(n):  ! 0
}
const kC = new Set(["brightness",
"contrast",
"saturate",
"opacity"]);
function UC(n) {
  const[a,
  s] = n.slice(0,
   - 1).split("(");
  if(a === "drop-shadow") return n;
  const[r] = s.match(Xd) || [];
  if( ! r) return n;
  const l = s.replace(r,
  "");
  let f = kC.has(a) ? 1: 0;
  return r !== s && (f *= 100),
  a + "(" + f + l + ")"
}
const HC = /\b([a-z-]*)\(.*?\)/gu,
vd =  {
  ...xn,
  getAnimatableNone: n =>  {
    const a = n.match(HC);
    return a ? a.map(UC).join(" "): n
  }
},
xd =  {
  ...xn,
  getAnimatableNone: n =>  {
    const a = xn.parse(n);
    return xn.createTransformer(n)(a.map(r => typeof r == "number" ? 0: typeof r == "object" ?  {
      ...r,
      alpha: 1
    }: r))
  }
},
qy =  {
  ...Es,
  transform: Math.round
},
PC =  {
  rotate: _a,
  rotateX: _a,
  rotateY: _a,
  rotateZ: _a,
  scale: hl,
  scaleX: hl,
  scaleY: hl,
  scaleZ: hl,
  skew: _a,
  skewX: _a,
  skewY: _a,
  distance: it,
  translateX: it,
  translateY: it,
  translateZ: it,
  x: it,
  y: it,
  z: it,
  perspective: it,
  transformPerspective: it,
  opacity: Vo,
  originX: Dy,
  originY: Dy,
  originZ: it
},
eh =  {
  borderWidth: it,
  borderTopWidth: it,
  borderRightWidth: it,
  borderBottomWidth: it,
  borderLeftWidth: it,
  borderRadius: it,
  borderTopLeftRadius: it,
  borderTopRightRadius: it,
  borderBottomRightRadius: it,
  borderBottomLeftRadius: it,
  width: it,
  maxWidth: it,
  height: it,
  maxHeight: it,
  top: it,
  right: it,
  bottom: it,
  left: it,
  inset: it,
  insetBlock: it,
  insetBlockStart: it,
  insetBlockEnd: it,
  insetInline: it,
  insetInlineStart: it,
  insetInlineEnd: it,
  padding: it,
  paddingTop: it,
  paddingRight: it,
  paddingBottom: it,
  paddingLeft: it,
  paddingBlock: it,
  paddingBlockStart: it,
  paddingBlockEnd: it,
  paddingInline: it,
  paddingInlineStart: it,
  paddingInlineEnd: it,
  margin: it,
  marginTop: it,
  marginRight: it,
  marginBottom: it,
  marginLeft: it,
  marginBlock: it,
  marginBlockStart: it,
  marginBlockEnd: it,
  marginInline: it,
  marginInlineStart: it,
  marginInlineEnd: it,
  fontSize: it,
  backgroundPositionX: it,
  backgroundPositionY: it,
  ...PC,
  zIndex: qy,
  fillOpacity: Vo,
  strokeOpacity: Vo,
  numOctaves: qy
},
YC =  {
  ...eh,
  color: se,
  backgroundColor: se,
  outlineColor: se,
  fill: se,
  stroke: se,
  borderColor: se,
  borderTopColor: se,
  borderRightColor: se,
  borderBottomColor: se,
  borderLeftColor: se,
  filter: vd,
  WebkitFilter: vd,
  mask: xd,
  WebkitMask: xd
},
Nx = n => YC[n],
GC = new Set([vd,
xd]);
function Dx(n,
a) {
  let s = Nx(n);
  return GC.has(s) || (s = xn),
  s.getAnimatableNone ? s.getAnimatableNone(a): void 0
}
const qC = new Set(["auto",
"none",
"0"]);
function XC(n,
a,
s) {
  let r = 0,
  l;
  for(; r < n.length &&  ! l; ) {
    const f = n[r];
    typeof f == "string" &&  ! qC.has(f) && vs(f).values.length && (l = n[r]),
    r++
  }
  if(l && s) for(const f of a) n[f] = Dx(s,
  l)
}
class KC extends Wd {
  constructor(a,
  s,
  r,
  l,
  f) {
    super(a,
    s,
    r,
    l,
    f,
     ! 0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      element: s,
      name: r
    }
     = this;
    if( ! s ||  ! s.current) return;
    super.readKeyframes();
    for(let v = 0; v < a.length; v++) {
      let p = a[v];
      if(typeof p == "string" && (p = p.trim(),
      qd(p))) {
        const E = Sx(p,
        s.current);
        E !== void 0 && (a[v] = E),
        v === a.length - 1 && (this.finalKeyframe = p)
      }
    }
    if(this.resolveNoneKeyframes(),
     ! wx.has(r) || a.length !== 2) return;
    const[l,
    f] = a,
    d = Gy(l),
    h = Gy(f),
    g = Ny(l),
    m = Ny(f);
    if(g !== m && Va[r]) {
      this.needsMeasurement =  ! 0;
      return
    }
    if(d !== h) if(ky(d) && ky(h)) for(let v = 0; v < a.length; v++) {
      const p = a[v];
      typeof p == "string" && (a[v] = parseFloat(p))
    }
    else Va[r] && (this.needsMeasurement =  ! 0)
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: s
    }
     = this,
    r = [];
    for(let l = 0; l < a.length; l++)(a[l] === null || BC(a[l])) && r.push(l);
    r.length && XC(a,
    r,
    s)
  }
  measureInitialState() {
    const {
      element: a,
      unresolvedKeyframes: s,
      name: r
    }
     = this;
    if( ! a ||  ! a.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
    this.measuredOrigin = Va[r](a.measureViewportBox(),
    window.getComputedStyle(a.current)),
    s[0] = this.measuredOrigin;
    const l = s[s.length - 1];
    l !== void 0 && a.getValue(r,
    l).jump(l,
     ! 1)
  }
  measureEndState() {
    const {
      element: a,
      name: s,
      unresolvedKeyframes: r
    }
     = this;
    if( ! a ||  ! a.current) return;
    const l = a.getValue(s);
    l && l.jump(this.measuredOrigin,
     ! 1);
    const f = r.length - 1,
    d = r[f];
    r[f] = Va[s](a.measureViewportBox(),
    window.getComputedStyle(a.current)),
    d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
    this.removedTransforms ?. length && this.removedTransforms.forEach(([h,
    g]) =>  {
      a.getValue(h).set(g)
    }),
    this.resolveNoneKeyframes()
  }
}
function jx(n,
a,
s) {
  if(n == null) return[];
  if(n instanceof EventTarget) return[n];
  if(typeof n == "string") {
    let r = document;
    const l = s ?. [n] ?? r.querySelectorAll(n);
    return l ? Array.from(l): []
  }
  return Array.from(n).filter(r => r != null)
}
const Ox = (n,
a) => a && typeof n == "number" ? a.transform(n): n;
function FC(n) {
  return k0(n) && "offsetHeight" in n &&  ! ("ownerSVGElement" in n)
}
const {
  schedule: nh
}
 = $0(queueMicrotask,
 ! 1),
vn =  {
  x:  ! 1,
  y:  ! 1
};
function zx() {
  return vn.x || vn.y
}
function ZC(n) {
  return n === "x" || n === "y" ? vn[n] ? null: (vn[n] =  ! 0,
  () =>  {
    vn[n] =  ! 1
  }): vn.x || vn.y ? null: (vn.x = vn.y =  ! 0,
  () =>  {
    vn.x = vn.y =  ! 1
  })
}
function _x(n,
a) {
  const s = jx(n),
  r = new AbortController,
  l =  {
    passive:  ! 0,
    ...a,
    signal: r.signal
  };
  return[s,
  l,
  () => r.abort()]
}
function QC(n) {
  return ! (n.pointerType === "touch" || zx())
}
function WC(n,
a,
s =  {
}) {
  const[r,
  l,
  f] = _x(n,
  s);
  return r.forEach(d =>  {
    let h =  ! 1,
    g =  ! 1,
    m;
    const v = () =>  {
      d.removeEventListener("pointerleave",
      M)
    },
    p = C =>  {
      m && (m(C),
      m = void 0),
      v()
    },
    E = C =>  {
      h =  ! 1,
      window.removeEventListener("pointerup",
      E),
      window.removeEventListener("pointercancel",
      E),
      g && (g =  ! 1,
      p(C))
    },
    w = () =>  {
      h =  ! 0,
      window.addEventListener("pointerup",
      E,
      l),
      window.addEventListener("pointercancel",
      E,
      l)
    },
    M = C =>  {
      if(C.pointerType !== "touch") {
        if(h) {
          g =  ! 0;
          return
        }
        p(C)
      }
    },
    A = C =>  {
      if( ! QC(C)) return;
      g =  ! 1;
      const D = a(d,
      C);
      typeof D == "function" && (m = D,
      d.addEventListener("pointerleave",
      M,
      l))
    };
    d.addEventListener("pointerenter",
    A,
    l),
    d.addEventListener("pointerdown",
    w,
    l)
  }),
  f
}
const Lx = (n,
a) => a ? n === a ?  ! 0: Lx(n,
a.parentElement):  ! 1,
ah = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0: n.isPrimary !==  ! 1,
JC = new Set(["BUTTON",
"INPUT",
"SELECT",
"TEXTAREA",
"A"]);
function $C(n) {
  return JC.has(n.tagName) || n.isContentEditable ===  ! 0
}
const IC = new Set(["INPUT",
"SELECT",
"TEXTAREA"]);
function t3(n) {
  return IC.has(n.tagName) || n.isContentEditable ===  ! 0
}
const Ml = new WeakSet;
function Xy(n) {
  return a =>  {
    a.key === "Enter" && n(a)
  }
}
function zf(n,
a) {
  n.dispatchEvent(new PointerEvent("pointer" + a,
   {
    isPrimary:  ! 0,
    bubbles:  ! 0
  }))
}
const e3 = (n,
a) =>  {
  const s = n.currentTarget;
  if( ! s) return;
  const r = Xy(() =>  {
    if(Ml.has(s)) return;
    zf(s,
    "down");
    const l = Xy(() =>  {
      zf(s,
      "up")
    }),
    f = () => zf(s,
    "cancel");
    s.addEventListener("keyup",
    l,
    a),
    s.addEventListener("blur",
    f,
    a)
  });
  s.addEventListener("keydown",
  r,
  a),
  s.addEventListener("blur",
  () => s.removeEventListener("keydown",
  r),
  a)
};
function Ky(n) {
  return ah(n) &&  ! zx()
}
const Fy = new WeakSet;
function n3(n,
a,
s =  {
}) {
  const[r,
  l,
  f] = _x(n,
  s),
  d = h =>  {
    const g = h.currentTarget;
    if( ! Ky(h) || Fy.has(h)) return;
    Ml.add(g),
    s.stopPropagation && Fy.add(h);
    const m = a(g,
    h),
    v = (w,
    M) =>  {
      window.removeEventListener("pointerup",
      p),
      window.removeEventListener("pointercancel",
      E),
      Ml.has(g) && Ml.delete(g),
      Ky(w) && typeof m == "function" && m(w,
       {
        success: M
      })
    },
    p = w =>  {
      v(w,
      g === window || g === document || s.useGlobalTarget || Lx(g,
      w.target))
    },
    E = w =>  {
      v(w,
       ! 1)
    };
    window.addEventListener("pointerup",
    p,
    l),
    window.addEventListener("pointercancel",
    E,
    l)
  };
  return r.forEach(h =>  {
    (s.useGlobalTarget ? window: h).addEventListener("pointerdown",
    d,
    l),
    FC(h) && (h.addEventListener("focus",
    m => e3(m,
    l)),
     ! $C(h) &&  ! h.hasAttribute("tabindex") && (h.tabIndex = 0))
  }),
  f
}
function ih(n) {
  return k0(n) && "ownerSVGElement" in n
}
const Rl = new WeakMap;
let Nl;
const Vx = (n,
a,
s) => (r,
l) => l && l[0] ? l[0][n + "Size"]: ih(r) && "getBBox" in r ? r.getBBox()[a]: r[s],
a3 = Vx("inline",
"width",
"offsetWidth"),
i3 = Vx("block",
"height",
"offsetHeight");
function s3( {
  target: n,
  borderBoxSize: a
}) {
  Rl.get(n) ?. forEach(s =>  {
    s(n,
     {
      get width() {
        return a3(n,
        a)
      },
      get height() {
        return i3(n,
        a)
      }
    })
  })
}
function o3(n) {
  n.forEach(s3)
}
function r3() {
  typeof ResizeObserver > "u" || (Nl = new ResizeObserver(o3))
}
function l3(n,
a) {
  Nl || r3();
  const s = jx(n);
  return s.forEach(r =>  {
    let l = Rl.get(r);
    l || (l = new Set,
    Rl.set(r,
    l)),
    l.add(a),
    Nl ?. observe(r)
  }),
  () =>  {
    s.forEach(r =>  {
      const l = Rl.get(r);
      l ?. delete(a),
      l ?. size || Nl ?. unobserve(r)
    })
  }
}
const Dl = new Set;
let ps;
function c3() {
  ps = () =>  {
    const n =  {
      get width() {
        return window.innerWidth
      },
      get height() {
        return window.innerHeight
      }
    };
    Dl.forEach(a => a(n))
  },
  window.addEventListener("resize",
  ps)
}
function u3(n) {
  return Dl.add(n),
  ps || c3(),
  () =>  {
    Dl.delete(n),
     ! Dl.size && typeof ps == "function" && (window.removeEventListener("resize",
    ps),
    ps = void 0)
  }
}
function Zy(n,
a) {
  return typeof n == "function" ? u3(n): l3(n,
  a)
}
function f3(n) {
  return ih(n) && n.tagName === "svg"
}
const d3 = [...Rx,
se,
xn],
h3 = n => d3.find(Mx(n)),
Qy = () => ( {
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}),
gs = () => ( {
  x: Qy(),
  y: Qy()
}),
Wy = () => ( {
  min: 0,
  max: 0
}),
le = () => ( {
  x: Wy(),
  y: Wy()
}),
m3 = new WeakMap;
function $l(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function"
}
function Bo(n) {
  return typeof n == "string" || Array.isArray(n)
}
const sh = ["animate",
"whileInView",
"whileFocus",
"whileHover",
"whileTap",
"whileDrag",
"exit"],
oh = ["initial",
...sh];
function Il(n) {
  return $l(n.animate) || oh.some(a => Bo(n[a]))
}
function Bx(n) {
  return !  ! (Il(n) || n.variants)
}
function p3(n,
a,
s) {
  for(const r in a) {
    const l = a[r],
    f = s[r];
    if(ve(l)) n.addValue(r,
    l);
    else if(ve(f)) n.addValue(r,
    xs(l,
     {
      owner: n
    }));
    else if(f !== l) if(n.hasValue(r)) {
      const d = n.getValue(r);
      d.liveStyle ===  ! 0 ? d.jump(l): d.hasAnimated || d.set(l)
    }
    else {
      const d = n.getStaticValue(r);
      n.addValue(r,
      xs(d !== void 0 ? d: l,
       {
        owner: n
      }))
    }
  }
  for(const r in s) a[r] === void 0 && n.removeValue(r);
  return a
}
const bd =  {
  current: null
},
kx =  {
  current:  ! 1
},
g3 = typeof window < "u";
function y3() {
  if(kx.current =  ! 0,
   !  ! g3) if(window.matchMedia) {
    const n = window.matchMedia("(prefers-reduced-motion)"),
    a = () => bd.current = n.matches;
    n.addEventListener("change",
    a),
    a()
  }
  else bd.current =  ! 1
}
const Jy = ["AnimationStart",
"AnimationComplete",
"Update",
"BeforeLayoutMeasure",
"LayoutMeasure",
"LayoutAnimationStart",
"LayoutAnimationComplete"];
let Yl =  {
};
function Ux(n) {
  Yl = n
}
function v3() {
  return Yl
}
class x3 {
  scrapeMotionValuesFromProps(a,
  s,
  r) {
    return {
    }
  }
  constructor( {
    parent: a,
    props: s,
    presenceContext: r,
    reducedMotionConfig: l,
    skipAnimations: f,
    blockInitialAnimation: d,
    visualState: h
  },
  g =  {
  }) {
    this.current = null,
    this.children = new Set,
    this.isVariantNode =  ! 1,
    this.isControllingVariants =  ! 1,
    this.shouldReduceMotion = null,
    this.shouldSkipAnimations =  ! 1,
    this.values = new Map,
    this.KeyframeResolver = Wd,
    this.features =  {
    },
    this.valueSubscriptions = new Map,
    this.prevMotionValues =  {
    },
    this.hasBeenMounted =  ! 1,
    this.events =  {
    },
    this.propEventSubscriptions =  {
    },
    this.notifyUpdate = () => this.notify("Update",
    this.latestValues),
    this.render = () =>  {
      this.current && (this.triggerBuild(),
      this.renderInstance(this.current,
      this.renderState,
      this.props.style,
      this.projection))
    },
    this.renderScheduledAt = 0,
    this.scheduleRender = () =>  {
      const w = Re.now();
      this.renderScheduledAt < w && (this.renderScheduledAt = w,
      Ut.render(this.render,
       ! 1,
       ! 0))
    };
    const {
      latestValues: m,
      renderState: v
    }
     = h;
    this.latestValues = m,
    this.baseTarget =  {
      ...m
    },
    this.initialValues = s.initial ?  {
      ...m
    }:  {
    },
    this.renderState = v,
    this.parent = a,
    this.props = s,
    this.presenceContext = r,
    this.depth = a ? a.depth + 1: 0,
    this.reducedMotionConfig = l,
    this.skipAnimationsConfig = f,
    this.options = g,
    this.blockInitialAnimation =  !  ! d,
    this.isControllingVariants = Il(s),
    this.isVariantNode = Bx(s),
    this.isVariantNode && (this.variantChildren = new Set),
    this.manuallyAnimateOnMount =  !  ! (a && a.current);
    const {
      willChange: p,
      ...E
    }
     = this.scrapeMotionValuesFromProps(s,
     {
    },
    this);
    for(const w in E) {
      const M = E[w];
      m[w] !== void 0 && ve(M) && M.set(m[w])
    }
  }
  mount(a) {
    if(this.hasBeenMounted) for(const s in this.initialValues) this.values.get(s) ?. jump(this.initialValues[s]),
    this.latestValues[s] = this.initialValues[s];
    this.current = a,
    m3.set(a,
    this),
    this.projection &&  ! this.projection.instance && this.projection.mount(a),
    this.parent && this.isVariantNode &&  ! this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
    this.values.forEach((s,
    r) => this.bindToMotionValue(r,
    s)),
    this.reducedMotionConfig === "never" ? this.shouldReduceMotion =  ! 1: this.reducedMotionConfig === "always" ? this.shouldReduceMotion =  ! 0: (kx.current || y3(),
    this.shouldReduceMotion = bd.current),
    this.shouldSkipAnimations = this.skipAnimationsConfig ??  ! 1,
    this.parent ?. addChild(this),
    this.update(this.props,
    this.presenceContext),
    this.hasBeenMounted =  ! 0
  }
  unmount() {
    this.projection && this.projection.unmount(),
    Ua(this.notifyUpdate),
    Ua(this.render),
    this.valueSubscriptions.forEach(a => a()),
    this.valueSubscriptions.clear(),
    this.removeFromVariantTree && this.removeFromVariantTree(),
    this.parent ?. removeChild(this);
    for(const a in this.events) this.events[a].clear();
    for(const a in this.features) {
      const s = this.features[a];
      s && (s.unmount(),
      s.isMounted =  ! 1)
    }
    this.current = null
  }
  addChild(a) {
    this.children.add(a),
    this.enteringChildren ?? (this.enteringChildren = new Set),
    this.enteringChildren.add(a)
  }
  removeChild(a) {
    this.children.delete(a),
    this.enteringChildren && this.enteringChildren.delete(a)
  }
  bindToMotionValue(a,
  s) {
    if(this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
    s.accelerate && xx.has(a) && this.current instanceof HTMLElement) {
      const {
        factory: d,
        keyframes: h,
        times: g,
        ease: m,
        duration: v
      }
       = s.accelerate,
      p = new yx( {
        element: this.current,
        name: a,
        keyframes: h,
        times: g,
        ease: m,
        duration: We(v)
      }),
      E = d(p);
      this.valueSubscriptions.set(a,
      () =>  {
        E(),
        p.cancel()
      });
      return
    }
    const r = As.has(a);
    r && this.onBindTransform && this.onBindTransform();
    const l = s.on("change",
    d =>  {
      this.latestValues[a] = d,
      this.props.onUpdate && Ut.preRender(this.notifyUpdate),
      r && this.projection && (this.projection.isTransformDirty =  ! 0),
      this.scheduleRender()
    });
    let f;
    typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this,
    a,
    s)),
    this.valueSubscriptions.set(a,
    () =>  {
      l(),
      f && f(),
      s.owner && s.stop()
    })
  }
  sortNodePosition(a) {
    return ! this.current ||  ! this.sortInstanceNodePosition || this.type !== a.type ? 0: this.sortInstanceNodePosition(this.current,
    a.current)
  }
  updateFeatures() {
    let a = "animation";
    for(a in Yl) {
      const s = Yl[a];
      if( ! s) continue;
      const {
        isEnabled: r,
        Feature: l
      }
       = s;
      if( ! this.features[a] && l && r(this.props) && (this.features[a] = new l(this)),
      this.features[a]) {
        const f = this.features[a];
        f.isMounted ? f.update(): (f.mount(),
        f.isMounted =  ! 0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState,
    this.latestValues,
    this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current,
    this.props): le()
  }
  getStaticValue(a) {
    return this.latestValues[a]
  }
  setStaticValue(a,
  s) {
    this.latestValues[a] = s
  }
  update(a,
  s) {
    (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
    this.prevProps = this.props,
    this.props = a,
    this.prevPresenceContext = this.presenceContext,
    this.presenceContext = s;
    for(let r = 0; r < Jy.length; r++) {
      const l = Jy[r];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](),
      delete this.propEventSubscriptions[l]);
      const f = "on" + l,
      d = a[f];
      d && (this.propEventSubscriptions[l] = this.on(l,
      d))
    }
    this.prevMotionValues = p3(this,
    this.scrapeMotionValuesFromProps(a,
    this.prevProps ||  {
    },
    this),
    this.prevMotionValues),
    this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a]: void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this: this.parent ? this.parent.getClosestVariantNode(): void 0
  }
  addVariantChild(a) {
    const s = this.getClosestVariantNode();
    if(s) return s.variantChildren && s.variantChildren.add(a),
    () => s.variantChildren.delete(a)
  }
  addValue(a,
  s) {
    const r = this.values.get(a);
    s !== r && (r && this.removeValue(a),
    this.bindToMotionValue(a,
    s),
    this.values.set(a,
    s),
    this.latestValues[a] = s.get())
  }
  removeValue(a) {
    this.values.delete(a);
    const s = this.valueSubscriptions.get(a);
    s && (s(),
    this.valueSubscriptions.delete(a)),
    delete this.latestValues[a],
    this.removeValueFromRenderState(a,
    this.renderState)
  }
  hasValue(a) {
    return this.values.has(a)
  }
  getValue(a,
  s) {
    if(this.props.values && this.props.values[a]) return this.props.values[a];
    let r = this.values.get(a);
    return r === void 0 && s !== void 0 && (r = xs(s === null ? void 0: s,
     {
      owner: this
    }),
    this.addValue(a,
    r)),
    r
  }
  readValue(a,
  s) {
    let r = this.latestValues[a] !== void 0 ||  ! this.current ? this.latestValues[a]: this.getBaseTargetFromProps(this.props,
    a) ?? this.readValueFromInstance(this.current,
    a,
    this.options);
    return r != null && (typeof r == "string" && (B0(r) || U0(r)) ? r = parseFloat(r):  ! h3(r) && xn.test(s) && (r = Dx(a,
    s)),
    this.setBaseTarget(a,
    ve(r) ? r.get(): r)),
    ve(r) ? r.get(): r
  }
  setBaseTarget(a,
  s) {
    this.baseTarget[a] = s
  }
  getBaseTarget(a) {
    const {
      initial: s
    }
     = this.props;
    let r;
    if(typeof s == "string" || typeof s == "object") {
      const f = Id(this.props,
      s,
      this.presenceContext ?. custom);
      f && (r = f[a])
    }
    if(s && r !== void 0) return r;
    const l = this.getBaseTargetFromProps(this.props,
    a);
    return l !== void 0 &&  ! ve(l) ? l: this.initialValues[a] !== void 0 && r === void 0 ? void 0: this.baseTarget[a]
  }
  on(a,
  s) {
    return this.events[a] || (this.events[a] = new Pd),
    this.events[a].add(s)
  }
  notify(a,
  ...s) {
    this.events[a] && this.events[a].notify(...s)
  }
  scheduleRenderMicrotask() {
    nh.render(this.render)
  }
}
class Hx extends x3 {
  constructor() {
    super(...arguments),
    this.KeyframeResolver = KC
  }
  sortInstanceNodePosition(a,
  s) {
    return a.compareDocumentPosition(s) & 2 ? 1:  - 1
  }
  getBaseTargetFromProps(a,
  s) {
    const r = a.style;
    return r ? r[s]: void 0
  }
  removeValueFromRenderState(a,
   {
    vars: s,
    style: r
  }) {
    delete s[a],
    delete r[a]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(),
    delete this.childSubscription);
    const {
      children: a
    }
     = this.props;
    ve(a) && (this.childSubscription = a.on("change",
    s =>  {
      this.current && (this.current.textContent = `${s}`)
    }))
  }
}
class Ha {
  constructor(a) {
    this.isMounted =  ! 1,
    this.node = a
  }
  update() {
  }
}
function Px( {
  top: n,
  left: a,
  right: s,
  bottom: r
}) {
  return {
    x:  {
      min: a,
      max: s
    },
    y:  {
      min: n,
      max: r
    }
  }
}
function b3( {
  x: n,
  y: a
}) {
  return {
    top: a.min,
    right: n.max,
    bottom: a.max,
    left: n.min
  }
}
function S3(n,
a) {
  if( ! a) return n;
  const s = a( {
    x: n.left,
    y: n.top
  }),
  r = a( {
    x: n.right,
    y: n.bottom
  });
  return {
    top: s.y,
    left: s.x,
    bottom: r.y,
    right: r.x
  }
}
function _f(n) {
  return n === void 0 || n === 1
}
function Sd( {
  scale: n,
  scaleX: a,
  scaleY: s
}) {
  return ! _f(n) ||  ! _f(a) ||  ! _f(s)
}
function di(n) {
  return Sd(n) || Yx(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function Yx(n) {
  return $y(n.x) || $y(n.y)
}
function $y(n) {
  return n && n !== "0%"
}
function Gl(n,
a,
s) {
  const r = n - s,
  l = a * r;
  return s + l
}
function Iy(n,
a,
s,
r,
l) {
  return l !== void 0 && (n = Gl(n,
  l,
  r)),
  Gl(n,
  s,
  r) + a
}
function Ed(n,
a = 0,
s = 1,
r,
l) {
  n.min = Iy(n.min,
  a,
  s,
  r,
  l),
  n.max = Iy(n.max,
  a,
  s,
  r,
  l)
}
function Gx(n,
 {
  x: a,
  y: s
}) {
  Ed(n.x,
  a.translate,
  a.scale,
  a.originPoint),
  Ed(n.y,
  s.translate,
  s.scale,
  s.originPoint)
}
const tv = .999999999999,
ev = 1.0000000000001;
function E3(n,
a,
s,
r =  ! 1) {
  const l = s.length;
  if( ! l) return;
  a.x = a.y = 1;
  let f,
  d;
  for(let h = 0; h < l; h++) {
    f = s[h],
    d = f.projectionDelta;
    const {
      visualElement: g
    }
     = f.options;
    g && g.props.style && g.props.style.display === "contents" || (r && f.options.layoutScroll && f.scroll && f !== f.root && (Nn(n.x,
     - f.scroll.offset.x),
    Nn(n.y,
     - f.scroll.offset.y)),
    d && (a.x *= d.x.scale,
    a.y *= d.y.scale,
    Gx(n,
    d)),
    r && di(f.latestValues) && jl(n,
    f.latestValues,
    f.layout ?. layoutBox))
  }
  a.x < ev && a.x > tv && (a.x = 1),
  a.y < ev && a.y > tv && (a.y = 1)
}
function Nn(n,
a) {
  n.min += a,
  n.max += a
}
function nv(n,
a,
s,
r,
l = .5) {
  const f = qt(n.min,
  n.max,
  l);
  Ed(n,
  a,
  s,
  f,
  r)
}
function av(n,
a) {
  return typeof n == "string" ? parseFloat(n) / 100 * (a.max - a.min): n
}
function jl(n,
a,
s) {
  const r = s ?? n;
  nv(n.x,
  av(a.x,
  r.x),
  a.scaleX,
  a.scale,
  a.originX),
  nv(n.y,
  av(a.y,
  r.y),
  a.scaleY,
  a.scale,
  a.originY)
}
function qx(n,
a) {
  return Px(S3(n.getBoundingClientRect(),
  a))
}
function w3(n,
a,
s) {
  const r = qx(n,
  s),
   {
    scroll: l
  }
   = a;
  return l && (Nn(r.x,
  l.offset.x),
  Nn(r.y,
  l.offset.y)),
  r
}
const A3 =  {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
},
T3 = ws.length;
function C3(n,
a,
s) {
  let r = "",
  l =  ! 0;
  for(let f = 0; f < T3; f++) {
    const d = ws[f],
    h = n[d];
    if(h === void 0) continue;
    let g =  ! 0;
    if(typeof h == "number") g = h === (d.startsWith("scale") ? 1: 0);
    else {
      const m = parseFloat(h);
      g = d.startsWith("scale") ? m === 1: m === 0
    }
    if( ! g || s) {
      const m = Ox(h,
      eh[d]);
      if( ! g) {
        l =  ! 1;
        const v = A3[d] || d;
        r += `${v}(${m}) `
      }
      s && (a[d] = m)
    }
  }
  return r = r.trim(),
  s ? r = s(a,
  l ? "": r): l && (r = "none"),
  r
}
function rh(n,
a,
s) {
  const {
    style: r,
    vars: l,
    transformOrigin: f
  }
   = n;
  let d =  ! 1,
  h =  ! 1;
  for(const g in a) {
    const m = a[g];
    if(As.has(g)) {
      d =  ! 0;
      continue
    }
    else if(tx(g)) {
      l[g] = m;
      continue
    }
    else {
      const v = Ox(m,
      eh[g]);
      g.startsWith("origin") ? (h =  ! 0,
      f[g] = v): r[g] = v
    }
  }
  if(a.transform || (d || s ? r.transform = C3(a,
  n.transform,
  s): r.transform && (r.transform = "none")),
  h) {
    const {
      originX: g = "50%",
      originY: m = "50%",
      originZ: v = 0
    }
     = f;
    r.transformOrigin = `${g} ${m} ${v}`
  }
}
function Xx(n,
 {
  style: a,
  vars: s
},
r,
l) {
  const f = n.style;
  let d;
  for(d in a) f[d] = a[d];
  l ?. applyProjectionStyles(f,
  r);
  for(d in s) f.setProperty(d,
  s[d])
}
function iv(n,
a) {
  return a.max === a.min ? 0: n / (a.max - a.min) * 100
}
const Co =  {
  correct: (n,
  a) =>  {
    if( ! a.target) return n;
    if(typeof n == "string") if(it.test(n)) n = parseFloat(n);
    else return n;
    const s = iv(n,
    a.target.x),
    r = iv(n,
    a.target.y);
    return `${s}% ${r}%`
  }
},
M3 =  {
  correct: (n,
   {
    treeScale: a,
    projectionDelta: s
  }) =>  {
    const r = n,
    l = xn.parse(n);
    if(l.length > 5) return r;
    const f = xn.createTransformer(n),
    d = typeof l[0] != "number" ? 1: 0,
    h = s.x.scale * a.x,
    g = s.y.scale * a.y;
    l[0 + d] /= h,
    l[1 + d] /= g;
    const m = qt(h,
    g,
    .5);
    return typeof l[2 + d] == "number" && (l[2 + d] /= m),
    typeof l[3 + d] == "number" && (l[3 + d] /= m),
    f(l)
  }
},
wd =  {
  borderRadius:  {
    ...Co,
    applyTo: ["borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"]
  },
  borderTopLeftRadius: Co,
  borderTopRightRadius: Co,
  borderBottomLeftRadius: Co,
  borderBottomRightRadius: Co,
  boxShadow: M3
};
function Kx(n,
 {
  layout: a,
  layoutId: s
}) {
  return As.has(n) || n.startsWith("origin") || (a || s !== void 0) && ( !  ! wd[n] || n === "opacity")
}
function lh(n,
a,
s) {
  const r = n.style,
  l = a ?. style,
  f =  {
  };
  if( ! r) return f;
  for(const d in r)(ve(r[d]) || l && ve(l[d]) || Kx(d,
  n) || s ?. getValue(d) ?. liveStyle !== void 0) && (f[d] = r[d]);
  return f
}
function R3(n) {
  return window.getComputedStyle(n)
}
class N3 extends Hx {
  constructor() {
    super(...arguments),
    this.type = "html",
    this.renderInstance = Xx
  }
  readValueFromInstance(a,
  s) {
    if(As.has(s)) return this.projection ?. isProjecting ? cd(s): ZT(a,
    s);
     {
      const r = R3(a),
      l = (tx(s) ? r.getPropertyValue(s): r[s]) || 0;
      return typeof l == "string" ? l.trim(): l
    }
  }
  measureInstanceViewportBox(a,
   {
    transformPagePoint: s
  }) {
    return qx(a,
    s)
  }
  build(a,
  s,
  r) {
    rh(a,
    s,
    r.transformTemplate)
  }
  scrapeMotionValuesFromProps(a,
  s,
  r) {
    return lh(a,
    s,
    r)
  }
}
const D3 =  {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
},
j3 =  {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function O3(n,
a,
s = 1,
r = 0,
l =  ! 0) {
  n.pathLength = 1;
  const f = l ? D3: j3;
  n[f.offset] = `${-r}`,
  n[f.array] = `${a} ${s}`
}
const z3 = ["offsetDistance",
"offsetPath",
"offsetRotate",
"offsetAnchor"];
function Fx(n,
 {
  attrX: a,
  attrY: s,
  attrScale: r,
  pathLength: l,
  pathSpacing: f = 1,
  pathOffset: d = 0,
  ...h
},
g,
m,
v) {
  if(rh(n,
  h,
  m),
  g) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return
  }
  n.attrs = n.style,
  n.style =  {
  };
  const {
    attrs: p,
    style: E
  }
   = n;
  p.transform && (E.transform = p.transform,
  delete p.transform),
  (E.transform || p.transformOrigin) && (E.transformOrigin = p.transformOrigin ?? "50% 50%",
  delete p.transformOrigin),
  E.transform && (E.transformBox = v ?. transformBox ?? "fill-box",
  delete p.transformBox);
  for(const w of z3) p[w] !== void 0 && (E[w] = p[w],
  delete p[w]);
  a !== void 0 && (p.x = a),
  s !== void 0 && (p.y = s),
  r !== void 0 && (p.scale = r),
  l !== void 0 && O3(p,
  l,
  f,
  d,
   ! 1)
}
const Zx = new Set(["baseFrequency",
"diffuseConstant",
"kernelMatrix",
"kernelUnitLength",
"keySplines",
"keyTimes",
"limitingConeAngle",
"markerHeight",
"markerWidth",
"numOctaves",
"targetX",
"targetY",
"surfaceScale",
"specularConstant",
"specularExponent",
"stdDeviation",
"tableValues",
"viewBox",
"gradientTransform",
"pathLength",
"startOffset",
"textLength",
"lengthAdjust"]),
Qx = n => typeof n == "string" && n.toLowerCase() === "svg";
function _3(n,
a,
s,
r) {
  Xx(n,
  a,
  void 0,
  r);
  for(const l in a.attrs) n.setAttribute(Zx.has(l) ? l: th(l),
  a.attrs[l])
}
function Wx(n,
a,
s) {
  const r = lh(n,
  a,
  s);
  for(const l in n) if(ve(n[l]) || ve(a[l])) {
    const f = ws.indexOf(l) !==  - 1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1): l;
    r[f] = n[l]
  }
  return r
}
class L3 extends Hx {
  constructor() {
    super(...arguments),
    this.type = "svg",
    this.isSVGTag =  ! 1,
    this.measureInstanceViewportBox = le
  }
  getBaseTargetFromProps(a,
  s) {
    return a[s]
  }
  readValueFromInstance(a,
  s) {
    if(As.has(s)) {
      const r = Nx(s);
      return r && r.default || 0
    }
    return s = Zx.has(s) ? s: th(s),
    a.getAttribute(s)
  }
  scrapeMotionValuesFromProps(a,
  s,
  r) {
    return Wx(a,
    s,
    r)
  }
  build(a,
  s,
  r) {
    Fx(a,
    s,
    this.isSVGTag,
    r.transformTemplate,
    r.style)
  }
  renderInstance(a,
  s,
  r,
  l) {
    _3(a,
    s,
    r,
    l)
  }
  mount(a) {
    this.isSVGTag = Qx(a.tagName),
    super.mount(a)
  }
}
const V3 = oh.length;
function Jx(n) {
  if( ! n) return;
  if( ! n.isControllingVariants) {
    const s = n.parent ? Jx(n.parent) ||  {
    }:  {
    };
    return n.props.initial !== void 0 && (s.initial = n.props.initial),
    s
  }
  const a =  {
  };
  for(let s = 0; s < V3; s++) {
    const r = oh[s],
    l = n.props[r];
    (Bo(l) || l ===  ! 1) && (a[r] = l)
  }
  return a
}
function $x(n,
a) {
  if( ! Array.isArray(a)) return ! 1;
  const s = a.length;
  if(s !== n.length) return ! 1;
  for(let r = 0; r < s; r++) if(a[r] !== n[r]) return ! 1;
  return ! 0
}
const B3 = [...sh].reverse(),
k3 = sh.length;
function U3(n) {
  return a => Promise.all(a.map(( {
    animation: s,
    options: r
  }) => LC(n,
  s,
  r)))
}
function H3(n) {
  let a = U3(n),
  s = sv(),
  r =  ! 0,
  l =  ! 1;
  const f = m => (v,
  p) =>  {
    const E = gi(n,
    p,
    m === "exit" ? n.presenceContext ?. custom: void 0);
    if(E) {
      const {
        transition: w,
        transitionEnd: M,
        ...A
      }
       = E;
      v =  {
        ...v,
        ...A,
        ...M
      }
    }
    return v
  };
  function d(m) {
    a = m(n)
  }
  function h(m) {
    const {
      props: v
    }
     = n,
    p = Jx(n.parent) ||  {
    },
    E = [],
    w = new Set;
    let M =  {
    },
    A = 1 / 0;
    for(let D = 0; D < k3; D++) {
      const B = B3[D],
      L = s[B],
      q = v[B] !== void 0 ? v[B]: p[B],
      Q = Bo(q),
      $ = B === m ? L.isActive: null;
      $ ===  ! 1 && (A = D);
      let F = q === p[B] && q !== v[B] && Q;
      if(F && (r || l) && n.manuallyAnimateOnMount && (F =  ! 1),
      L.protectedKeys =  {
        ...M
      },
       ! L.isActive && $ === null ||  ! q &&  ! L.prevProp || $l(q) || typeof q == "boolean") continue;
      if(B === "exit" && L.isActive && $ !==  ! 0) {
        L.prevResolvedValues && (M =  {
          ...M,
          ...L.prevResolvedValues
        });
        continue
      }
      const X = P3(L.prevProp,
      q);
      let rt = X || B === m && L.isActive &&  ! F && Q || D > A && Q,
      tt =  ! 1;
      const mt = Array.isArray(q) ? q: [q];
      let pt = mt.reduce(f(B),
       {
      });
      $ ===  ! 1 && (pt =  {
      });
      const {
        prevResolvedValues: Rt =  {
        }
      }
       = L,
      Nt =  {
        ...Rt,
        ...pt
      },
      yt = H =>  {
        rt =  ! 0,
        w.has(H) && (tt =  ! 0,
        w.delete(H)),
        L.needsAnimating[H] =  ! 0;
        const ut = n.getValue(H);
        ut && (ut.liveStyle =  ! 1)
      };
      for(const H in Nt) {
        const ut = pt[H],
        dt = Rt[H];
        if(M.hasOwnProperty(H)) continue;
        let R =  ! 1;
        pd(ut) && pd(dt) ? R =  ! $x(ut,
        dt): R = ut !== dt,
        R ? ut != null ? yt(H): w.add(H): ut !== void 0 && w.has(H) ? yt(H): L.protectedKeys[H] =  ! 0
      }
      L.prevProp = q,
      L.prevResolvedValues = pt,
      L.isActive && (M =  {
        ...M,
        ...pt
      }),
      (r || l) && n.blockInitialAnimation && (rt =  ! 1);
      const O = F && X;
      rt && ( ! O || tt) && E.push(...mt.map(H =>  {
        const ut =  {
          type: B
        };
        if(typeof H == "string" && (r || l) &&  ! O && n.manuallyAnimateOnMount && n.parent) {
          const {
            parent: dt
          }
           = n,
          R = gi(dt,
          H);
          if(dt.enteringChildren && R) {
            const {
              delayChildren: Y
            }
             = R.transition ||  {
            };
            ut.delay = bx(dt.enteringChildren,
            n,
            Y)
          }
        }
        return {
          animation: H,
          options: ut
        }
      }))
    }
    if(w.size) {
      const D =  {
      };
      if(typeof v.initial != "boolean") {
        const B = gi(n,
        Array.isArray(v.initial) ? v.initial[0]: v.initial);
        B && B.transition && (D.transition = B.transition)
      }
      w.forEach(B =>  {
        const L = n.getBaseTarget(B),
        q = n.getValue(B);
        q && (q.liveStyle =  ! 0),
        D[B] = L ?? null
      }),
      E.push( {
        animation: D
      })
    }
    let C =  !  ! E.length;
    return r && (v.initial ===  ! 1 || v.initial === v.animate) &&  ! n.manuallyAnimateOnMount && (C =  ! 1),
    r =  ! 1,
    l =  ! 1,
    C ? a(E): Promise.resolve()
  }
  function g(m,
  v) {
    if(s[m].isActive === v) return Promise.resolve();
    n.variantChildren ?. forEach(E => E.animationState ?. setActive(m,
    v)),
    s[m].isActive = v;
    const p = h(m);
    for(const E in s) s[E].protectedKeys =  {
    };
    return p
  }
  return {
    animateChanges: h,
    setActive: g,
    setAnimateFunction: d,
    getState: () => s,
    reset: () =>  {
      s = sv(),
      l =  ! 0
    }
  }
}
function P3(n,
a) {
  return typeof a == "string" ? a !== n: Array.isArray(a) ?  ! $x(a,
  n):  ! 1
}
function ui(n =  ! 1) {
  return {
    isActive: n,
    protectedKeys:  {
    },
    needsAnimating:  {
    },
    prevResolvedValues:  {
    }
  }
}
function sv() {
  return {
    animate: ui( ! 0),
    whileInView: ui(),
    whileHover: ui(),
    whileTap: ui(),
    whileDrag: ui(),
    whileFocus: ui(),
    exit: ui()
  }
}
function Ad(n,
a) {
  n.min = a.min,
  n.max = a.max
}
function yn(n,
a) {
  Ad(n.x,
  a.x),
  Ad(n.y,
  a.y)
}
function ov(n,
a) {
  n.translate = a.translate,
  n.scale = a.scale,
  n.originPoint = a.originPoint,
  n.origin = a.origin
}
const Ix = 1e-4,
Y3 = 1 - Ix,
G3 = 1 + Ix,
t1 = .01,
q3 = 0 - t1,
X3 = 0 + t1;
function Ne(n) {
  return n.max - n.min
}
function K3(n,
a,
s) {
  return Math.abs(n - a) <= s
}
function rv(n,
a,
s,
r = .5) {
  n.origin = r,
  n.originPoint = qt(a.min,
  a.max,
  n.origin),
  n.scale = Ne(s) / Ne(a),
  n.translate = qt(s.min,
  s.max,
  n.origin) - n.originPoint,
  (n.scale >= Y3 && n.scale <= G3 || isNaN(n.scale)) && (n.scale = 1),
  (n.translate >= q3 && n.translate <= X3 || isNaN(n.translate)) && (n.translate = 0)
}
function jo(n,
a,
s,
r) {
  rv(n.x,
  a.x,
  s.x,
  r ? r.originX: void 0),
  rv(n.y,
  a.y,
  s.y,
  r ? r.originY: void 0)
}
function lv(n,
a,
s,
r = 0) {
  const l = r ? qt(s.min,
  s.max,
  r): s.min;
  n.min = l + a.min,
  n.max = n.min + Ne(a)
}
function F3(n,
a,
s,
r) {
  lv(n.x,
  a.x,
  s.x,
  r ?. x),
  lv(n.y,
  a.y,
  s.y,
  r ?. y)
}
function cv(n,
a,
s,
r = 0) {
  const l = r ? qt(s.min,
  s.max,
  r): s.min;
  n.min = a.min - l,
  n.max = n.min + Ne(a)
}
function ql(n,
a,
s,
r) {
  cv(n.x,
  a.x,
  s.x,
  r ?. x),
  cv(n.y,
  a.y,
  s.y,
  r ?. y)
}
function uv(n,
a,
s,
r,
l) {
  return n -= a,
  n = Gl(n,
  1 / s,
  r),
  l !== void 0 && (n = Gl(n,
  1 / l,
  r)),
  n
}
function Z3(n,
a = 0,
s = 1,
r = .5,
l,
f = n,
d = n) {
  if(On.test(a) && (a = parseFloat(a),
  a = qt(d.min,
  d.max,
  a / 100) - d.min),
  typeof a != "number") return;
  let h = qt(f.min,
  f.max,
  r);
  n === f && (h -= a),
  n.min = uv(n.min,
  a,
  s,
  h,
  l),
  n.max = uv(n.max,
  a,
  s,
  h,
  l)
}
function fv(n,
a,
[s,
r,
l],
f,
d) {
  Z3(n,
  a[s],
  a[r],
  a[l],
  a.scale,
  f,
  d)
}
const Q3 = ["x",
"scaleX",
"originX"],
W3 = ["y",
"scaleY",
"originY"];
function dv(n,
a,
s,
r) {
  fv(n.x,
  a,
  Q3,
  s ? s.x: void 0,
  r ? r.x: void 0),
  fv(n.y,
  a,
  W3,
  s ? s.y: void 0,
  r ? r.y: void 0)
}
function hv(n) {
  return n.translate === 0 && n.scale === 1
}
function e1(n) {
  return hv(n.x) && hv(n.y)
}
function mv(n,
a) {
  return n.min === a.min && n.max === a.max
}
function J3(n,
a) {
  return mv(n.x,
  a.x) && mv(n.y,
  a.y)
}
function pv(n,
a) {
  return Math.round(n.min) === Math.round(a.min) && Math.round(n.max) === Math.round(a.max)
}
function n1(n,
a) {
  return pv(n.x,
  a.x) && pv(n.y,
  a.y)
}
function gv(n) {
  return Ne(n.x) / Ne(n.y)
}
function yv(n,
a) {
  return n.translate === a.translate && n.scale === a.scale && n.originPoint === a.originPoint
}
function Rn(n) {
  return[n("x"),
  n("y")]
}
function $3(n,
a,
s) {
  let r = "";
  const l = n.x.translate / a.x,
  f = n.y.translate / a.y,
  d = s ?. z || 0;
  if((l || f || d) && (r = `translate3d(${l}px, ${f}px, ${d}px) `),
  (a.x !== 1 || a.y !== 1) && (r += `scale(${1/a.x}, ${1/a.y}) `),
  s) {
    const {
      transformPerspective: m,
      rotate: v,
      rotateX: p,
      rotateY: E,
      skewX: w,
      skewY: M
    }
     = s;
    m && (r = `perspective(${m}px) ${r}`),
    v && (r += `rotate(${v}deg) `),
    p && (r += `rotateX(${p}deg) `),
    E && (r += `rotateY(${E}deg) `),
    w && (r += `skewX(${w}deg) `),
    M && (r += `skewY(${M}deg) `)
  }
  const h = n.x.scale * a.x,
  g = n.y.scale * a.y;
  return(h !== 1 || g !== 1) && (r += `scale(${h}, ${g})`),
  r || "none"
}
const a1 = ["borderTopLeftRadius",
"borderTopRightRadius",
"borderBottomLeftRadius",
"borderBottomRightRadius"],
I3 = a1.length,
vv = n => typeof n == "string" ? parseFloat(n): n,
xv = n => typeof n == "number" || it.test(n);
function tM(n,
a,
s,
r,
l,
f) {
  l ? (n.opacity = qt(0,
  s.opacity ?? 1,
  eM(r)),
  n.opacityExit = qt(a.opacity ?? 1,
  0,
  nM(r))): f && (n.opacity = qt(a.opacity ?? 1,
  s.opacity ?? 1,
  r));
  for(let d = 0; d < I3; d++) {
    const h = a1[d];
    let g = bv(a,
    h),
    m = bv(s,
    h);
    if(g === void 0 && m === void 0) continue;
    g || (g = 0),
    m || (m = 0),
    g === 0 || m === 0 || xv(g) === xv(m) ? (n[h] = Math.max(qt(vv(g),
    vv(m),
    r),
    0),
    (On.test(m) || On.test(g)) && (n[h] += "%")): n[h] = m
  }(a.rotate || s.rotate) && (n.rotate = qt(a.rotate || 0,
  s.rotate || 0,
  r))
}
function bv(n,
a) {
  return n[a] !== void 0 ? n[a]: n.borderRadius
}
const eM = i1(0,
.5,
Z0),
nM = i1(.5,
.95,
cn);
function i1(n,
a,
s) {
  return r => r < n ? 0: r > a ? 1: s(Lo(n,
  a,
  r))
}
function aM(n,
a,
s) {
  const r = ve(n) ? n: xs(n);
  return r.start($d("",
  r,
  a,
  s)),
  r.animation
}
function ko(n,
a,
s,
r =  {
  passive:  ! 0
}) {
  return n.addEventListener(a,
  s,
  r),
  () => n.removeEventListener(a,
  s)
}
const iM = (n,
a) => n.depth - a.depth;
class sM {
  constructor() {
    this.children = [],
    this.isDirty =  ! 1
  }
  add(a) {
    Ud(this.children,
    a),
    this.isDirty =  ! 0
  }
  remove(a) {
    Bl(this.children,
    a),
    this.isDirty =  ! 0
  }
  forEach(a) {
    this.isDirty && this.children.sort(iM),
    this.isDirty =  ! 1,
    this.children.forEach(a)
  }
}
function oM(n,
a) {
  const s = Re.now(),
  r = ( {
    timestamp: l
  }) =>  {
    const f = l - s;
    f >= a && (Ua(r),
    n(f - a))
  };
  return Ut.setup(r,
   ! 0),
  () => Ua(r)
}
function Ol(n) {
  return ve(n) ? n.get(): n
}
class rM {
  constructor() {
    this.members = []
  }
  add(a) {
    Ud(this.members,
    a);
    for(let s = this.members.length - 1; s >= 0; s--) {
      const r = this.members[s];
      if(r === a || r === this.lead || r === this.prevLead) continue;
      const l = r.instance;
      ( ! l || l.isConnected ===  ! 1) &&  ! r.snapshot && (Bl(this.members,
      r),
      r.unmount())
    }
    a.scheduleRender()
  }
  remove(a) {
    if(Bl(this.members,
    a),
    a === this.prevLead && (this.prevLead = void 0),
    a === this.lead) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s)
    }
  }
  relegate(a) {
    for(let s = this.members.indexOf(a) - 1;
    s >= 0;
    s--) {
      const r = this.members[s];
      if(r.isPresent !==  ! 1 && r.instance ?. isConnected !==  ! 1) return this.promote(r),
       ! 0
    }
    return ! 1
  }
  promote(a,
  s) {
    const r = this.lead;
    if(a !== r && (this.prevLead = r,
    this.lead = a,
    a.show(),
    r)) {
      r.updateSnapshot(),
      a.scheduleRender();
      const {
        layoutDependency: l
      }
       = r.options,
       {
        layoutDependency: f
      }
       = a.options;
      (l === void 0 || l !== f) && (a.resumeFrom = r,
      s && (r.preserveOpacity =  ! 0),
      r.snapshot && (a.snapshot = r.snapshot,
      a.snapshot.latestValues = r.animationValues || r.latestValues),
      a.root ?. isUpdating && (a.isLayoutDirty =  ! 0)),
      a.options.crossfade ===  ! 1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(a =>  {
      a.options.onExitComplete ?. (),
      a.resumingFrom ?. options.onExitComplete ?. ()
    })
  }
  scheduleRender() {
    this.members.forEach(a => a.instance && a.scheduleRender( ! 1))
  }
  removeLeadSnapshot() {
    this.lead ?. snapshot && (this.lead.snapshot = void 0)
  }
}
const zl =  {
  hasAnimatedSinceResize:  ! 0,
  hasEverUpdated:  ! 1
},
Lf = ["",
"X",
"Y",
"Z"],
lM = 1e3;
let cM = 0;
function Vf(n,
a,
s,
r) {
  const {
    latestValues: l
  }
   = a;
  l[n] && (s[n] = l[n],
  a.setStaticValue(n,
  0),
  r && (r[n] = 0))
}
function s1(n) {
  if(n.hasCheckedOptimisedAppear =  ! 0,
  n.root === n) return;
  const {
    visualElement: a
  }
   = n.options;
  if( ! a) return;
  const s = Tx(a);
  if(window.MotionHasOptimisedAnimation(s,
  "transform")) {
    const {
      layout: l,
      layoutId: f
    }
     = n.options;
    window.MotionCancelOptimisedAnimation(s,
    "transform",
    Ut,
     ! (l || f))
  }
  const {
    parent: r
  }
   = n;
  r &&  ! r.hasCheckedOptimisedAppear && s1(r)
}
function o1( {
  attachResizeListener: n,
  defaultParent: a,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: l
}) {
  return class {
    constructor(d =  {
    },
    h = a ?. ()) {
      this.id = cM++,
      this.animationId = 0,
      this.animationCommitId = 0,
      this.children = new Set,
      this.options =  {
      },
      this.isTreeAnimating =  ! 1,
      this.isAnimationBlocked =  ! 1,
      this.isLayoutDirty =  ! 1,
      this.isProjectionDirty =  ! 1,
      this.isSharedProjectionDirty =  ! 1,
      this.isTransformDirty =  ! 1,
      this.updateManuallyBlocked =  ! 1,
      this.updateBlockedByResize =  ! 1,
      this.isUpdating =  ! 1,
      this.isSVG =  ! 1,
      this.needsReset =  ! 1,
      this.shouldResetTransform =  ! 1,
      this.hasCheckedOptimisedAppear =  ! 1,
      this.treeScale =  {
        x: 1,
        y: 1
      },
      this.eventHandlers = new Map,
      this.hasTreeAnimated =  ! 1,
      this.layoutVersion = 0,
      this.updateScheduled =  ! 1,
      this.scheduleUpdate = () => this.update(),
      this.projectionUpdateScheduled =  ! 1,
      this.checkUpdateFailed = () =>  {
        this.isUpdating && (this.isUpdating =  ! 1,
        this.clearAllSnapshots())
      },
      this.updateProjection = () =>  {
        this.projectionUpdateScheduled =  ! 1,
        this.nodes.forEach(dM),
        this.nodes.forEach(vM),
        this.nodes.forEach(xM),
        this.nodes.forEach(hM)
      },
      this.resolvedRelativeTargetAt = 0,
      this.linkedParentVersion = 0,
      this.hasProjected =  ! 1,
      this.isVisible =  ! 0,
      this.animationProgress = 0,
      this.sharedNodes = new Map,
      this.latestValues = d,
      this.root = h ? h.root || h: this,
      this.path = h ? [...h.path,
      h]: [],
      this.parent = h,
      this.depth = h ? h.depth + 1: 0;
      for(let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform =  ! 0;
      this.root === this && (this.nodes = new sM)
    }
    addEventListener(d,
    h) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d,
      new Pd),
      this.eventHandlers.get(d).add(h)
    }
    notifyListeners(d,
    ...h) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...h)
    }
    hasListeners(d) {
      return this.eventHandlers.has(d)
    }
    mount(d) {
      if(this.instance) return;
      this.isSVG = ih(d) &&  ! f3(d),
      this.instance = d;
      const {
        layoutId: h,
        layout: g,
        visualElement: m
      }
       = this.options;
      if(m &&  ! m.current && m.mount(d),
      this.root.nodes.add(this),
      this.parent && this.parent.children.add(this),
      this.root.hasTreeAnimated && (g || h) && (this.isLayoutDirty =  ! 0),
      n) {
        let v,
        p = 0;
        const E = () => this.root.updateBlockedByResize =  ! 1;
        Ut.read(() =>  {
          p = window.innerWidth
        }),
        n(d,
        () =>  {
          const w = window.innerWidth;
          w !== p && (p = w,
          this.root.updateBlockedByResize =  ! 0,
          v && v(),
          v = oM(E,
          250),
          zl.hasAnimatedSinceResize && (zl.hasAnimatedSinceResize =  ! 1,
          this.nodes.forEach(wv)))
        })
      }
      h && this.root.registerSharedNode(h,
      this),
      this.options.animate !==  ! 1 && m && (h || g) && this.addEventListener("didUpdate",
      ( {
        delta: v,
        hasLayoutChanged: p,
        hasRelativeLayoutChanged: E,
        layout: w
      }) =>  {
        if(this.isTreeAnimationBlocked()) {
          this.target = void 0,
          this.relativeTarget = void 0;
          return
        }
        const M = this.options.transition || m.getDefaultTransition() || AM,
         {
          onLayoutAnimationStart: A,
          onLayoutAnimationComplete: C
        }
         = m.getProps(),
        D =  ! this.targetLayout ||  ! n1(this.targetLayout,
        w),
        B =  ! p && E;
        if(this.options.layoutRoot || this.resumeFrom || B || p && (D ||  ! this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom,
          this.resumingFrom.resumingFrom = void 0);
          const L =  {
            ...Jd(M,
            "layout"),
            onPlay: A,
            onComplete: C
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0,
          L.type =  ! 1),
          this.startAnimation(L),
          this.setAnimationOrigin(v,
          B)
        }
        else p || wv(this),
        this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(),
      this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
      this.parent && this.parent.children.delete(this),
      this.instance = void 0,
      this.eventHandlers.clear(),
      Ua(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked =  ! 0
    }
    unblockUpdate() {
      this.updateManuallyBlocked =  ! 1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() ||  ! 1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating =  ! 0,
      this.nodes && this.nodes.forEach(bM),
      this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: d
      }
       = this.options;
      return d && d.getProps().transformTemplate
    }
    willUpdate(d =  ! 0) {
      if(this.root.hasTreeAnimated =  ! 0,
      this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if(window.MotionCancelOptimisedAnimation &&  ! this.hasCheckedOptimisedAppear && s1(this),
       ! this.root.isUpdating && this.root.startUpdate(),
      this.isLayoutDirty) return;
      this.isLayoutDirty =  ! 0;
      for(let v = 0; v < this.path.length; v++) {
        const p = this.path[v];
        p.shouldResetTransform =  ! 0,
        (typeof p.latestValues.x == "string" || typeof p.latestValues.y == "string") && (p.isLayoutDirty =  ! 0),
        p.updateScroll("snapshot"),
        p.options.layoutRoot && p.willUpdate( ! 1)
      }
      const {
        layoutId: h,
        layout: g
      }
       = this.options;
      if(h === void 0 &&  ! g) return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues,
      ""): void 0,
      this.updateSnapshot(),
      d && this.notifyListeners("willUpdate")
    }
    update() {
      if(this.updateScheduled =  ! 1,
      this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(),
        this.updateBlockedByResize =  ! 1,
        this.clearAllSnapshots(),
        g && this.nodes.forEach(pM),
        this.nodes.forEach(Sv);
        return
      }
      if(this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ev);
        return
      }
      this.animationCommitId = this.animationId,
      this.isUpdating ? (this.isUpdating =  ! 1,
      this.nodes.forEach(gM),
      this.nodes.forEach(yM),
      this.nodes.forEach(uM),
      this.nodes.forEach(fM)): this.nodes.forEach(Ev),
      this.clearAllSnapshots();
      const h = Re.now();
      ye.delta = _n(0,
      1e3 / 60,
      h - ye.timestamp),
      ye.timestamp = h,
      ye.isProcessing =  ! 0,
      Mf.update.process(ye),
      Mf.preRender.process(ye),
      Mf.render.process(ye),
      ye.isProcessing =  ! 1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled =  ! 0,
      nh.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(mM),
      this.sharedNodes.forEach(SM)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled =  ! 0,
      Ut.preRender(this.updateProjection,
       ! 1,
       ! 0))
    }
    scheduleCheckAfterUnmount() {
      Ut.postRender(() =>  {
        this.isLayoutDirty ? this.root.didUpdate(): this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot ||  ! this.instance || (this.snapshot = this.measure(),
      this.snapshot &&  ! Ne(this.snapshot.measuredBox.x) &&  ! Ne(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
    }
    updateLayout() {
      if( ! this.instance || (this.updateScroll(),
       ! (this.options.alwaysMeasureLayout && this.isLead()) &&  ! this.isLayoutDirty)) return;
      if(this.resumeFrom &&  ! this.resumeFrom.instance) for(let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure( ! 1),
      this.layoutVersion++,
      this.layoutCorrected || (this.layoutCorrected = le()),
      this.isLayoutDirty =  ! 1,
      this.projectionDelta = void 0,
      this.notifyListeners("measure",
      this.layout.layoutBox);
      const {
        visualElement: h
      }
       = this.options;
      h && h.notify("LayoutMeasure",
      this.layout.layoutBox,
      d ? d.layoutBox: void 0)
    }
    updateScroll(d = "measure") {
      let h =  !  ! (this.options.layoutScroll && this.instance);
      if(this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h =  ! 1),
      h && this.instance) {
        const g = r(this.instance);
        this.scroll =  {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot: g
        }
      }
    }
    resetTransform() {
      if( ! l) return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
      h = this.projectionDelta &&  ! e1(this.projectionDelta),
      g = this.getTransformTemplate(),
      m = g ? g(this.latestValues,
      ""): void 0,
      v = m !== this.prevTransformTemplateValue;
      d && this.instance && (h || di(this.latestValues) || v) && (l(this.instance,
      m),
      this.shouldResetTransform =  ! 1,
      this.scheduleRender())
    }
    measure(d =  ! 0) {
      const h = this.measurePageBox();
      let g = this.removeElementScroll(h);
      return d && (g = this.removeTransform(g)),
      TM(g),
       {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: g,
        latestValues:  {
        },
        source: this.id
      }
    }
    measurePageBox() {
      const {
        visualElement: d
      }
       = this.options;
      if( ! d) return le();
      const h = d.measureViewportBox();
      if( ! (this.scroll ?. wasRoot || this.path.some(CM))) {
        const {
          scroll: m
        }
         = this.root;
        m && (Nn(h.x,
        m.offset.x),
        Nn(h.y,
        m.offset.y))
      }
      return h
    }
    removeElementScroll(d) {
      const h = le();
      if(yn(h,
      d),
      this.scroll ?. wasRoot) return h;
      for(let g = 0; g < this.path.length; g++) {
        const m = this.path[g],
         {
          scroll: v,
          options: p
        }
         = m;
        m !== this.root && v && p.layoutScroll && (v.wasRoot && yn(h,
        d),
        Nn(h.x,
        v.offset.x),
        Nn(h.y,
        v.offset.y))
      }
      return h
    }
    applyTransform(d,
    h =  ! 1,
    g) {
      const m = g || le();
      yn(m,
      d);
      for(let v = 0; v < this.path.length; v++) {
        const p = this.path[v];
         ! h && p.options.layoutScroll && p.scroll && p !== p.root && (Nn(m.x,
         - p.scroll.offset.x),
        Nn(m.y,
         - p.scroll.offset.y)),
        di(p.latestValues) && jl(m,
        p.latestValues,
        p.layout ?. layoutBox)
      }
      return di(this.latestValues) && jl(m,
      this.latestValues,
      this.layout ?. layoutBox),
      m
    }
    removeTransform(d) {
      const h = le();
      yn(h,
      d);
      for(let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if( ! di(m.latestValues)) continue;
        let v;
        m.instance && (Sd(m.latestValues) && m.updateSnapshot(),
        v = le(),
        yn(v,
        m.measurePageBox())),
        dv(h,
        m.latestValues,
        m.snapshot ?. layoutBox,
        v)
      }
      return di(this.latestValues) && dv(h,
      this.latestValues),
      h
    }
    setTargetDelta(d) {
      this.targetDelta = d,
      this.root.scheduleUpdateProjection(),
      this.isProjectionDirty =  ! 0
    }
    setOptions(d) {
      this.options =  {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade:  ! 0
      }
    }
    clearMeasurements() {
      this.scroll = void 0,
      this.layout = void 0,
      this.snapshot = void 0,
      this.prevTransformTemplateValue = void 0,
      this.targetDelta = void 0,
      this.target = void 0,
      this.isLayoutDirty =  ! 1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta( ! 0)
    }
    resolveTargetDelta(d =  ! 1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
      this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const g =  !  ! this.resumingFrom || this !== h;
      if( ! (d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ?. isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: v,
        layoutId: p
      }
       = this.options;
      if( ! this.layout ||  ! (v || p)) return;
      this.resolvedRelativeTargetAt = ye.timestamp;
      const E = this.getClosestProjectingParent();
      E && this.linkedParentVersion !== E.layoutVersion &&  ! E.options.layoutRoot && this.removeRelativeTarget(),
       ! this.targetDelta &&  ! this.relativeTarget && (this.options.layoutAnchor !==  ! 1 && E && E.layout ? this.createRelativeTarget(E,
      this.layout.layoutBox,
      E.layout.layoutBox): this.removeRelativeTarget()),
       ! ( ! this.relativeTarget &&  ! this.targetDelta) && (this.target || (this.target = le(),
      this.targetWithTransforms = le()),
      this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
      F3(this.target,
      this.relativeTarget,
      this.relativeParent.target,
      this.options.layoutAnchor || void 0)): this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox,
       ! 1,
      this.target): yn(this.target,
      this.layout.layoutBox),
      Gx(this.target,
      this.targetDelta)): yn(this.target,
      this.layout.layoutBox),
      this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget =  ! 1,
      this.options.layoutAnchor !==  ! 1 && E &&  !  ! E.resumingFrom ==  !  ! this.resumingFrom &&  ! E.options.layoutScroll && E.target && this.animationProgress !== 1 ? this.createRelativeTarget(E,
      this.target,
      E.target): this.relativeParent = this.relativeTarget = void 0))
    }
    getClosestProjectingParent() {
      if( ! ( ! this.parent || Sd(this.parent.latestValues) || Yx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent: this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !  ! ((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    createRelativeTarget(d,
    h,
    g) {
      this.relativeParent = d,
      this.linkedParentVersion = d.layoutVersion,
      this.forceRelativeParentToResolveTarget(),
      this.relativeTarget = le(),
      this.relativeTargetOrigin = le(),
      ql(this.relativeTargetOrigin,
      h,
      g,
      this.options.layoutAnchor || void 0),
      yn(this.relativeTarget,
      this.relativeTargetOrigin)
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0
    }
    calcProjection() {
      const d = this.getLead(),
      h =  !  ! this.resumingFrom || this !== d;
      let g =  ! 0;
      if((this.isProjectionDirty || this.parent ?. isProjectionDirty) && (g =  ! 1),
      h && (this.isSharedProjectionDirty || this.isTransformDirty) && (g =  ! 1),
      this.resolvedRelativeTargetAt === ye.timestamp && (g =  ! 1),
      g) return;
      const {
        layout: m,
        layoutId: v
      }
       = this.options;
      if(this.isTreeAnimating =  !  ! (this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
      this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
       ! this.layout ||  ! (m || v)) return;
      yn(this.layoutCorrected,
      this.layout.layoutBox);
      const p = this.treeScale.x,
      E = this.treeScale.y;
      E3(this.layoutCorrected,
      this.treeScale,
      this.path,
      h),
      d.layout &&  ! d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
      d.targetWithTransforms = le());
      const {
        target: w
      }
       = d;
      if( ! w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(),
        this.scheduleRender());
        return
      }
       ! this.projectionDelta ||  ! this.prevProjectionDelta ? this.createProjectionDeltas(): (ov(this.prevProjectionDelta.x,
      this.projectionDelta.x),
      ov(this.prevProjectionDelta.y,
      this.projectionDelta.y)),
      jo(this.projectionDelta,
      this.layoutCorrected,
      w,
      this.latestValues),
      (this.treeScale.x !== p || this.treeScale.y !== E ||  ! yv(this.projectionDelta.x,
      this.prevProjectionDelta.x) ||  ! yv(this.projectionDelta.y,
      this.prevProjectionDelta.y)) && (this.hasProjected =  ! 0,
      this.scheduleRender(),
      this.notifyListeners("projectionUpdate",
      w))
    }
    hide() {
      this.isVisible =  ! 1
    }
    show() {
      this.isVisible =  ! 0
    }
    scheduleRender(d =  ! 0) {
      if(this.options.visualElement ?. scheduleRender(),
      d) {
        const h = this.getStack();
        h && h.scheduleRender()
      }
      this.resumingFrom &&  ! this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = gs(),
      this.projectionDelta = gs(),
      this.projectionDeltaWithTransform = gs()
    }
    setAnimationOrigin(d,
    h =  ! 1) {
      const g = this.snapshot,
      m = g ? g.latestValues:  {
      },
      v =  {
        ...this.latestValues
      },
      p = gs();
      ( ! this.relativeParent ||  ! this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
      this.attemptToResolveRelativeTarget =  ! h;
      const E = le(),
      w = g ? g.source: void 0,
      M = this.layout ? this.layout.source: void 0,
      A = w !== M,
      C = this.getStack(),
      D =  ! C || C.members.length <= 1,
      B =  !  ! (A &&  ! D && this.options.crossfade ===  ! 0 &&  ! this.path.some(wM));
      this.animationProgress = 0;
      let L;
      this.mixTargetDelta = q =>  {
        const Q = q / 1e3;
        Av(p.x,
        d.x,
        Q),
        Av(p.y,
        d.y,
        Q),
        this.setTargetDelta(p),
        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ql(E,
        this.layout.layoutBox,
        this.relativeParent.layout.layoutBox,
        this.options.layoutAnchor || void 0),
        EM(this.relativeTarget,
        this.relativeTargetOrigin,
        E,
        Q),
        L && J3(this.relativeTarget,
        L) && (this.isProjectionDirty =  ! 1),
        L || (L = le()),
        yn(L,
        this.relativeTarget)),
        A && (this.animationValues = v,
        tM(v,
        m,
        this.latestValues,
        Q,
        B,
        D)),
        this.root.scheduleUpdateProjection(),
        this.scheduleRender(),
        this.animationProgress = Q
      },
      this.mixTargetDelta(this.options.layoutRoot ? 1e3: 0)
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"),
      this.currentAnimation ?. stop(),
      this.resumingFrom ?. currentAnimation ?. stop(),
      this.pendingAnimation && (Ua(this.pendingAnimation),
      this.pendingAnimation = void 0),
      this.pendingAnimation = Ut.update(() =>  {
        zl.hasAnimatedSinceResize =  ! 0,
        this.motionValue || (this.motionValue = xs(0)),
        this.motionValue.jump(0,
         ! 1),
        this.currentAnimation = aM(this.motionValue,
        [0,
        1e3],
         {
          ...d,
          velocity: 0,
          isSync:  ! 0,
          onUpdate: h =>  {
            this.mixTargetDelta(h),
            d.onUpdate && d.onUpdate(h)
          },
          onStop: () =>  {
          },
          onComplete: () =>  {
            d.onComplete && d.onComplete(),
            this.completeAnimation()
          }
        }),
        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
        this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
      this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(),
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
      this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(lM),
      this.currentAnimation.stop()),
      this.completeAnimation()
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: h,
        target: g,
        layout: m,
        latestValues: v
      }
       = d;
      if( ! ( ! h ||  ! g ||  ! m)) {
        if(this !== d && this.layout && m && r1(this.options.animationType,
        this.layout.layoutBox,
        m.layoutBox)) {
          g = this.target || le();
          const p = Ne(this.layout.layoutBox.x);
          g.x.min = d.target.x.min,
          g.x.max = g.x.min + p;
          const E = Ne(this.layout.layoutBox.y);
          g.y.min = d.target.y.min,
          g.y.max = g.y.min + E
        }
        yn(h,
        g),
        jl(h,
        v),
        jo(this.projectionDeltaWithTransform,
        this.layoutCorrected,
        h,
        v)
      }
    }
    registerSharedNode(d,
    h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d,
      new rM),
      this.sharedNodes.get(d).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote( {
        transition: m ? m.transition: void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h): void 0
      })
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this:  ! 0
    }
    getLead() {
      const {
        layoutId: d
      }
       = this.options;
      return d ? this.getStack() ?. lead || this: this
    }
    getPrevLead() {
      const {
        layoutId: d
      }
       = this.options;
      return d ? this.getStack() ?. prevLead: void 0
    }
    getStack() {
      const {
        layoutId: d
      }
       = this.options;
      if(d) return this.root.sharedNodes.get(d)
    }
    promote( {
      needsReset: d,
      transition: h,
      preserveFollowOpacity: g
    }
     =  {
    }) {
      const m = this.getStack();
      m && m.promote(this,
      g),
      d && (this.projectionDelta = void 0,
      this.needsReset =  ! 0),
      h && this.setOptions( {
        transition: h
      })
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this):  ! 1
    }
    resetSkewAndRotation() {
      const {
        visualElement: d
      }
       = this.options;
      if( ! d) return;
      let h =  ! 1;
      const {
        latestValues: g
      }
       = d;
      if((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (h =  ! 0),
       ! h) return;
      const m =  {
      };
      g.z && Vf("z",
      d,
      m,
      this.animationValues);
      for(let v = 0; v < Lf.length; v++) Vf(`rotate${Lf[v]}`,
      d,
      m,
      this.animationValues),
      Vf(`skew${Lf[v]}`,
      d,
      m,
      this.animationValues);
      d.render();
      for(const v in m) d.setStaticValue(v,
      m[v]),
      this.animationValues && (this.animationValues[v] = m[v]);
      d.scheduleRender()
    }
    applyProjectionStyles(d,
    h) {
      if( ! this.instance || this.isSVG) return;
      if( ! this.isVisible) {
        d.visibility = "hidden";
        return
      }
      const g = this.getTransformTemplate();
      if(this.needsReset) {
        this.needsReset =  ! 1,
        d.visibility = "",
        d.opacity = "",
        d.pointerEvents = Ol(h ?. pointerEvents) || "",
        d.transform = g ? g(this.latestValues,
        ""): "none";
        return
      }
      const m = this.getLead();
      if( ! this.projectionDelta ||  ! this.layout ||  ! m.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity: 1,
        d.pointerEvents = Ol(h ?. pointerEvents) || ""),
        this.hasProjected &&  ! di(this.latestValues) && (d.transform = g ? g( {
        },
        ""): "none",
        this.hasProjected =  ! 1);
        return
      }
      d.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let p = $3(this.projectionDeltaWithTransform,
      this.treeScale,
      v);
      g && (p = g(v,
      p)),
      d.transform = p;
      const {
        x: E,
        y: w
      }
       = this.projectionDelta;
      d.transformOrigin = `${E.origin*100}% ${w.origin*100}% 0`,
      m.animationValues ? d.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1: this.preserveOpacity ? this.latestValues.opacity: v.opacityExit: d.opacity = m === this ? v.opacity !== void 0 ? v.opacity: "": v.opacityExit !== void 0 ? v.opacityExit: 0;
      for(const M in wd) {
        if(v[M] === void 0) continue;
        const {
          correct: A,
          applyTo: C,
          isCSSVariable: D
        }
         = wd[M],
        B = p === "none" ? v[M]: A(v[M],
        m);
        if(C) {
          const L = C.length;
          for(let q = 0; q < L; q++) d[C[q]] = B
        }
        else D ? this.options.visualElement.renderState.vars[M] = B: d[M] = B
      }
      this.options.layoutId && (d.pointerEvents = m === this ? Ol(h ?. pointerEvents) || "": "none")
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(d => d.currentAnimation ?. stop()),
      this.root.nodes.forEach(Sv),
      this.root.sharedNodes.clear()
    }
  }
}
function uM(n) {
  n.updateLayout()
}
function fM(n) {
  const a = n.resumeFrom ?. snapshot || n.snapshot;
  if(n.isLead() && n.layout && a && n.hasListeners("didUpdate")) {
    const {
      layoutBox: s,
      measuredBox: r
    }
     = n.layout,
     {
      animationType: l
    }
     = n.options,
    f = a.source !== n.layout.source;
    if(l === "size") Rn(v =>  {
      const p = f ? a.measuredBox[v]: a.layoutBox[v],
      E = Ne(p);
      p.min = s[v].min,
      p.max = p.min + E
    });
    else if(l === "x" || l === "y") {
      const v = l === "x" ? "y": "x";
      Ad(f ? a.measuredBox[v]: a.layoutBox[v],
      s[v])
    }
    else r1(l,
    a.layoutBox,
    s) && Rn(v =>  {
      const p = f ? a.measuredBox[v]: a.layoutBox[v],
      E = Ne(s[v]);
      p.max = p.min + E,
      n.relativeTarget &&  ! n.currentAnimation && (n.isProjectionDirty =  ! 0,
      n.relativeTarget[v].max = n.relativeTarget[v].min + E)
    });
    const d = gs();
    jo(d,
    s,
    a.layoutBox);
    const h = gs();
    f ? jo(h,
    n.applyTransform(r,
     ! 0),
    a.measuredBox): jo(h,
    s,
    a.layoutBox);
    const g =  ! e1(d);
    let m =  ! 1;
    if( ! n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if(v &&  ! v.resumeFrom) {
        const {
          snapshot: p,
          layout: E
        }
         = v;
        if(p && E) {
          const w = n.options.layoutAnchor || void 0,
          M = le();
          ql(M,
          a.layoutBox,
          p.layoutBox,
          w);
          const A = le();
          ql(A,
          s,
          E.layoutBox,
          w),
          n1(M,
          A) || (m =  ! 0),
          v.options.layoutRoot && (n.relativeTarget = A,
          n.relativeTargetOrigin = M,
          n.relativeParent = v)
        }
      }
    }
    n.notifyListeners("didUpdate",
     {
      layout: s,
      snapshot: a,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: m
    })
  }
  else if(n.isLead()) {
    const {
      onExitComplete: s
    }
     = n.options;
    s && s()
  }
  n.options.transition = void 0
}
function dM(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
  n.isSharedProjectionDirty || (n.isSharedProjectionDirty =  !  ! (n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
  n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function hM(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty =  ! 1
}
function mM(n) {
  n.clearSnapshot()
}
function Sv(n) {
  n.clearMeasurements()
}
function pM(n) {
  n.isLayoutDirty =  ! 0,
  n.updateLayout()
}
function Ev(n) {
  n.isLayoutDirty =  ! 1
}
function gM(n) {
  n.isAnimationBlocked && n.layout &&  ! n.isLayoutDirty && (n.snapshot = n.layout,
  n.isLayoutDirty =  ! 0)
}
function yM(n) {
  const {
    visualElement: a
  }
   = n.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
  n.resetTransform()
}
function wv(n) {
  n.finishAnimation(),
  n.targetDelta = n.relativeTarget = n.target = void 0,
  n.isProjectionDirty =  ! 0
}
function vM(n) {
  n.resolveTargetDelta()
}
function xM(n) {
  n.calcProjection()
}
function bM(n) {
  n.resetSkewAndRotation()
}
function SM(n) {
  n.removeLeadSnapshot()
}
function Av(n,
a,
s) {
  n.translate = qt(a.translate,
  0,
  s),
  n.scale = qt(a.scale,
  1,
  s),
  n.origin = a.origin,
  n.originPoint = a.originPoint
}
function Tv(n,
a,
s,
r) {
  n.min = qt(a.min,
  s.min,
  r),
  n.max = qt(a.max,
  s.max,
  r)
}
function EM(n,
a,
s,
r) {
  Tv(n.x,
  a.x,
  s.x,
  r),
  Tv(n.y,
  a.y,
  s.y,
  r)
}
function wM(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0
}
const AM =  {
  duration: .45,
  ease: [.4,
  0,
  .1,
  1]
},
Cv = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
Mv = Cv("applewebkit/") &&  ! Cv("chrome/") ? Math.round: cn;
function Rv(n) {
  n.min = Mv(n.min),
  n.max = Mv(n.max)
}
function TM(n) {
  Rv(n.x),
  Rv(n.y)
}
function r1(n,
a,
s) {
  return n === "position" || n === "preserve-aspect" &&  ! K3(gv(a),
  gv(s),
  .2)
}
function CM(n) {
  return n !== n.root && n.scroll ?. wasRoot
}
const MM = o1( {
  attachResizeListener: (n,
  a) => ko(n,
  "resize",
  a),
  measureScroll: () => ( {
    x: document.documentElement.scrollLeft || document.body ?. scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body ?. scrollTop || 0
  }),
  checkIsScrollRoot: () =>  ! 0
}),
Bf =  {
  current: void 0
},
l1 = o1( {
  measureScroll: n => ( {
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () =>  {
    if( ! Bf.current) {
      const n = new MM( {
      });
      n.mount(window),
      n.setOptions( {
        layoutScroll:  ! 0
      }),
      Bf.current = n
    }
    return Bf.current
  },
  resetTransform: (n,
  a) =>  {
    n.style.transform = a !== void 0 ? a: "none"
  },
  checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
}),
c1 = S.createContext( {
  transformPagePoint: n => n,
  isStatic:  ! 1,
  reducedMotion: "never"
});
function RM(n =  ! 0) {
  const a = S.useContext(kd);
  if(a === null) return[ ! 0,
  null];
  const {
    isPresent: s,
    onExitComplete: r,
    register: l
  }
   = a,
  f = S.useId();
  S.useEffect(() =>  {
    if(n) return l(f)
  },
  [n]);
  const d = S.useCallback(() => n && r && r(f),
  [f,
  r,
  n]);
  return ! s && r ? [ ! 1,
  d]: [ ! 0]
}
const u1 = S.createContext( {
  strict:  ! 1
}),
Nv =  {
  animation: ["animate",
  "variants",
  "whileHover",
  "whileTap",
  "exit",
  "whileInView",
  "whileFocus",
  "whileDrag"],
  exit: ["exit"],
  drag: ["drag",
  "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover",
  "onHoverStart",
  "onHoverEnd"],
  tap: ["whileTap",
  "onTap",
  "onTapStart",
  "onTapCancel"],
  pan: ["onPan",
  "onPanStart",
  "onPanSessionStart",
  "onPanEnd"],
  inView: ["whileInView",
  "onViewportEnter",
  "onViewportLeave"],
  layout: ["layout",
  "layoutId"]
};
let Dv =  ! 1;
function NM() {
  if(Dv) return;
  const n =  {
  };
  for(const a in Nv) n[a] =  {
    isEnabled: s => Nv[a].some(r =>  !  ! s[r])
  };
  Ux(n),
  Dv =  ! 0
}
function f1() {
  return NM(),
  v3()
}
function DM(n) {
  const a = f1();
  for(const s in n) a[s] =  {
    ...a[s],
    ...n[s]
  };
  Ux(a)
}
const jM = new Set(["animate",
"exit",
"variants",
"initial",
"style",
"values",
"variants",
"transition",
"transformTemplate",
"custom",
"inherit",
"onBeforeLayoutMeasure",
"onAnimationStart",
"onAnimationComplete",
"onUpdate",
"onDragStart",
"onDrag",
"onDragEnd",
"onMeasureDragConstraints",
"onDirectionLock",
"onDragTransitionEnd",
"_dragX",
"_dragY",
"onHoverStart",
"onHoverEnd",
"onViewportEnter",
"onViewportLeave",
"globalTapTarget",
"propagate",
"ignoreStrict",
"viewport"]);
function Xl(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || jM.has(n)
}
let d1 = n =>  ! Xl(n);
function OM(n) {
  typeof n == "function" && (d1 = a => a.startsWith("on") ?  ! Xl(a): n(a))
}
try {
  OM(require("@emotion/is-prop-valid").default)
}
catch {
}
function zM(n,
a,
s) {
  const r =  {
  };
  for(const l in n) l === "values" && typeof n.values == "object" || ve(n[l]) || (d1(l) || s ===  ! 0 && Xl(l) ||  ! a &&  ! Xl(l) || n.draggable && l.startsWith("onDrag")) && (r[l] = n[l]);
  return r
}
const tc = S.createContext( {
});
function _M(n,
a) {
  if(Il(n)) {
    const {
      initial: s,
      animate: r
    }
     = n;
    return {
      initial: s ===  ! 1 || Bo(s) ? s: void 0,
      animate: Bo(r) ? r: void 0
    }
  }
  return n.inherit !==  ! 1 ? a:  {
  }
}
function LM(n) {
  const {
    initial: a,
    animate: s
  }
   = _M(n,
  S.useContext(tc));
  return S.useMemo(() => ( {
    initial: a,
    animate: s
  }),
  [jv(a),
  jv(s)])
}
function jv(n) {
  return Array.isArray(n) ? n.join(" "): n
}
const ch = () => ( {
  style:  {
  },
  transform:  {
  },
  transformOrigin:  {
  },
  vars:  {
  }
});
function h1(n,
a,
s) {
  for(const r in a) ! ve(a[r]) &&  ! Kx(r,
  s) && (n[r] = a[r])
}
function VM( {
  transformTemplate: n
},
a) {
  return S.useMemo(() =>  {
    const s = ch();
    return rh(s,
    a,
    n),
    Object.assign( {
    },
    s.vars,
    s.style)
  },
  [a])
}
function BM(n,
a) {
  const s = n.style ||  {
  },
  r =  {
  };
  return h1(r,
  s,
  n),
  Object.assign(r,
  VM(n,
  a)),
  r
}
function kM(n,
a) {
  const s =  {
  },
  r = BM(n,
  a);
  return n.drag && n.dragListener !==  ! 1 && (s.draggable =  ! 1,
  r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
  r.touchAction = n.drag ===  ! 0 ? "none": `pan-${n.drag==="x"?"y":"x"}`),
  n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
  s.style = r,
  s
}
const m1 = () => ( {
  ...ch(),
  attrs:  {
  }
});
function UM(n,
a,
s,
r) {
  const l = S.useMemo(() =>  {
    const f = m1();
    return Fx(f,
    a,
    Qx(r),
    n.transformTemplate,
    n.style),
     {
      ...f.attrs,
      style:  {
        ...f.style
      }
    }
  },
  [a]);
  if(n.style) {
    const f =  {
    };
    h1(f,
    n.style,
    n),
    l.style =  {
      ...f,
      ...l.style
    }
  }
  return l
}
const HM = ["animate",
"circle",
"defs",
"desc",
"ellipse",
"g",
"image",
"line",
"filter",
"marker",
"mask",
"metadata",
"path",
"pattern",
"polygon",
"polyline",
"rect",
"stop",
"switch",
"symbol",
"svg",
"text",
"tspan",
"use",
"view"];
function uh(n) {
  return typeof n != "string" || n.includes("-") ?  ! 1:  !  ! (HM.indexOf(n) >  - 1 || /[A-Z]/u.test(n))
}
function PM(n,
a,
s,
 {
  latestValues: r
},
l,
f =  ! 1,
d) {
  const g = (d ?? uh(n) ? UM: kM)(a,
  r,
  l,
  n),
  m = zM(a,
  typeof n == "string",
  f),
  v = n !== S.Fragment ?  {
    ...m,
    ...g,
    ref: s
  }:  {
  },
   {
    children: p
  }
   = a,
  E = S.useMemo(() => ve(p) ? p.get(): p,
  [p]);
  return S.createElement(n,
   {
    ...v,
    children: E
  })
}
function YM( {
  scrapeMotionValuesFromProps: n,
  createRenderState: a
},
s,
r,
l) {
  return {
    latestValues: GM(s,
    r,
    l,
    n),
    renderState: a()
  }
}
function GM(n,
a,
s,
r) {
  const l =  {
  },
  f = r(n,
   {
  });
  for(const E in f) l[E] = Ol(f[E]);
  let {
    initial: d,
    animate: h
  }
   = n;
  const g = Il(n),
  m = Bx(n);
  a && m &&  ! g && n.inherit !==  ! 1 && (d === void 0 && (d = a.initial),
  h === void 0 && (h = a.animate));
  let v = s ? s.initial ===  ! 1:  ! 1;
  v = v || d ===  ! 1;
  const p = v ? h: d;
  if(p && typeof p != "boolean" &&  ! $l(p)) {
    const E = Array.isArray(p) ? p: [p];
    for(let w = 0; w < E.length; w++) {
      const M = Id(n,
      E[w]);
      if(M) {
        const {
          transitionEnd: A,
          transition: C,
          ...D
        }
         = M;
        for(const B in D) {
          let L = D[B];
          if(Array.isArray(L)) {
            const q = v ? L.length - 1: 0;
            L = L[q]
          }
          L !== null && (l[B] = L)
        }
        for(const B in A) l[B] = A[B]
      }
    }
  }
  return l
}
const p1 = n => (a,
s) =>  {
  const r = S.useContext(tc),
  l = S.useContext(kd),
  f = () => YM(n,
  a,
  r,
  l);
  return s ? f(): HA(f)
},
qM = p1( {
  scrapeMotionValuesFromProps: lh,
  createRenderState: ch
}),
XM = p1( {
  scrapeMotionValuesFromProps: Wx,
  createRenderState: m1
}),
KM = Symbol.for("motionComponentSymbol");
function FM(n,
a,
s) {
  const r = S.useRef(s);
  S.useInsertionEffect(() =>  {
    r.current = s
  });
  const l = S.useRef(null);
  return S.useCallback(f =>  {
    f && n.onMount ?. (f);
    const d = r.current;
    if(typeof d == "function") if(f) {
      const h = d(f);
      typeof h == "function" && (l.current = h)
    }
    else l.current ? (l.current(),
    l.current = null): d(f);
    else d && (d.current = f);
    a && (f ? a.mount(f): a.unmount())
  },
  [a])
}
const g1 = S.createContext( {
});
function hs(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n,
  "current")
}
function ZM(n,
a,
s,
r,
l,
f) {
  const {
    visualElement: d
  }
   = S.useContext(tc),
  h = S.useContext(u1),
  g = S.useContext(kd),
  m = S.useContext(c1),
  v = m.reducedMotion,
  p = m.skipAnimations,
  E = S.useRef(null),
  w = S.useRef( ! 1);
  r = r || h.renderer,
   ! E.current && r && (E.current = r(n,
   {
    visualState: a,
    parent: d,
    props: s,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial ===  ! 1:  ! 1,
    reducedMotionConfig: v,
    skipAnimations: p,
    isSVG: f
  }),
  w.current && E.current && (E.current.manuallyAnimateOnMount =  ! 0));
  const M = E.current,
  A = S.useContext(g1);
  M &&  ! M.projection && l && (M.type === "html" || M.type === "svg") && QM(E.current,
  s,
  l,
  A);
  const C = S.useRef( ! 1);
  S.useInsertionEffect(() =>  {
    M && C.current && M.update(s,
    g)
  });
  const D = s[Ax],
  B = S.useRef( !  ! D && typeof window < "u" &&  ! window.MotionHandoffIsComplete ?. (D) && window.MotionHasOptimisedAnimation ?. (D));
  return YA(() =>  {
    w.current =  ! 0,
    M && (C.current =  ! 0,
    window.MotionIsMounted =  ! 0,
    M.updateFeatures(),
    M.scheduleRenderMicrotask(),
    B.current && M.animationState && M.animationState.animateChanges())
  }),
  S.useEffect(() =>  {
    M && ( ! B.current && M.animationState && M.animationState.animateChanges(),
    B.current && (queueMicrotask(() =>  {
      window.MotionHandoffMarkAsComplete ?. (D)
    }),
    B.current =  ! 1),
    M.enteringChildren = void 0)
  }),
  M
}
function QM(n,
a,
s,
r) {
  const {
    layoutId: l,
    layout: f,
    drag: d,
    dragConstraints: h,
    layoutScroll: g,
    layoutRoot: m,
    layoutAnchor: v,
    layoutCrossfade: p
  }
   = a;
  n.projection = new s(n.latestValues,
  a["data-framer-portal-id"] ? void 0: y1(n.parent)),
  n.projection.setOptions( {
    layoutId: l,
    layout: f,
    alwaysMeasureLayout:  !  ! d || h && hs(h),
    visualElement: n,
    animationType: typeof f == "string" ? f: "both",
    initialPromotionConfig: r,
    crossfade: p,
    layoutScroll: g,
    layoutRoot: m,
    layoutAnchor: v
  })
}
function y1(n) {
  if(n) return n.options.allowProjection !==  ! 1 ? n.projection: y1(n.parent)
}
function kf(n,
 {
  forwardMotionProps: a =  ! 1,
  type: s
}
 =  {
},
r,
l) {
  r && DM(r);
  const f = s ? s === "svg": uh(n),
  d = f ? XM: qM;
  function h(m,
  v) {
    let p;
    const E =  {
      ...S.useContext(c1),
      ...m,
      layoutId: WM(m)
    },
     {
      isStatic: w
    }
     = E,
    M = LM(m),
    A = d(m,
    w);
    if( ! w && typeof window < "u") {
      JM();
      const C = $M(E);
      p = C.MeasureLayout,
      M.visualElement = ZM(n,
      A,
      E,
      l,
      C.ProjectionNode,
      f)
    }
    return x.jsxs(tc.Provider,
     {
      value: M,
      children: [p && M.visualElement ? x.jsx(p,
       {
        visualElement: M.visualElement,
        ...E
      }): null,
      PM(n,
      m,
      FM(A,
      M.visualElement,
      v),
      A,
      w,
      a,
      f)]
    })
  }
  h.displayName = `motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;
  const g = S.forwardRef(h);
  return g[KM] = n,
  g
}
function WM( {
  layoutId: n
}) {
  const a = S.useContext(V0).id;
  return a && n !== void 0 ? a + "-" + n: n
}
function JM(n,
a) {
  S.useContext(u1).strict
}
function $M(n) {
  const a = f1(),
   {
    drag: s,
    layout: r
  }
   = a;
  if( ! s &&  ! r) return {
  };
  const l =  {
    ...s,
    ...r
  };
  return {
    MeasureLayout: s ?. isEnabled(n) || r ?. isEnabled(n) ? l.MeasureLayout: void 0,
    ProjectionNode: l.ProjectionNode
  }
}
function IM(n,
a) {
  if(typeof Proxy > "u") return kf;
  const s = new Map,
  r = (f,
  d) => kf(f,
  d,
  n,
  a),
  l = (f,
  d) => r(f,
  d);
  return new Proxy(l,
   {
    get: (f,
    d) => d === "create" ? r: (s.has(d) || s.set(d,
    kf(d,
    void 0,
    n,
    a)),
    s.get(d))
  })
}
const tR = (n,
a) => a.isSVG ?? uh(n) ? new L3(a): new N3(a,
 {
  allowProjection: n !== S.Fragment
});
class eR extends Ha {
  constructor(a) {
    super(a),
    a.animationState || (a.animationState = H3(a))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: a
    }
     = this.node.getProps();
    $l(a) && (this.unmountControls = a.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: a
    }
     = this.node.getProps(),
     {
      animate: s
    }
     = this.node.prevProps ||  {
    };
    a !== s && this.updateAnimationControlsSubscription()
  }
  unmount() {
    this.node.animationState.reset(),
    this.unmountControls ?. ()
  }
}
let nR = 0;
class aR extends Ha {
  constructor() {
    super(...arguments),
    this.id = nR++,
    this.isExitComplete =  ! 1
  }
  update() {
    if( ! this.node.presenceContext) return;
    const {
      isPresent: a,
      onExitComplete: s
    }
     = this.node.presenceContext,
     {
      isPresent: r
    }
     = this.node.prevPresenceContext ||  {
    };
    if( ! this.node.animationState || a === r) return;
    if(a && r ===  ! 1) {
      if(this.isExitComplete) {
        const {
          initial: f,
          custom: d
        }
         = this.node.getProps();
        if(typeof f == "string") {
          const h = gi(this.node,
          f,
          d);
          if(h) {
            const {
              transition: g,
              transitionEnd: m,
              ...v
            }
             = h;
            for(const p in v) this.node.getValue(p) ?. jump(v[p])
          }
        }
        this.node.animationState.reset(),
        this.node.animationState.animateChanges()
      }
      else this.node.animationState.setActive("exit",
       ! 1);
      this.isExitComplete =  ! 1;
      return
    }
    const l = this.node.animationState.setActive("exit",
     ! a);
    s &&  ! a && l.then(() =>  {
      this.isExitComplete =  ! 0,
      s(this.id)
    })
  }
  mount() {
    const {
      register: a,
      onExitComplete: s
    }
     = this.node.presenceContext ||  {
    };
    s && s(this.id),
    a && (this.unmount = a(this.id))
  }
  unmount() {
  }
}
const iR =  {
  animation:  {
    Feature: eR
  },
  exit:  {
    Feature: aR
  }
};
function Fo(n) {
  return {
    point:  {
      x: n.pageX,
      y: n.pageY
    }
  }
}
const sR = n => a => ah(a) && n(a,
Fo(a));
function Oo(n,
a,
s,
r) {
  return ko(n,
  a,
  sR(s),
  r)
}
const v1 = ( {
  current: n
}) => n ? n.ownerDocument.defaultView: null,
Ov = (n,
a) => Math.abs(n - a);
function oR(n,
a) {
  const s = Ov(n.x,
  a.x),
  r = Ov(n.y,
  a.y);
  return Math.sqrt(s ** 2 + r ** 2)
}
const zv = new Set(["auto",
"scroll"]);
class x1 {
  constructor(a,
  s,
   {
    transformPagePoint: r,
    contextWindow: l = window,
    dragSnapToOrigin: f =  ! 1,
    distanceThreshold: d = 3,
    element: h
  }
   =  {
  }) {
    if(this.startEvent = null,
    this.lastMoveEvent = null,
    this.lastMoveEventInfo = null,
    this.lastRawMoveEventInfo = null,
    this.handlers =  {
    },
    this.contextWindow = window,
    this.scrollPositions = new Map,
    this.removeScrollListeners = null,
    this.onElementScroll = w =>  {
      this.handleScroll(w.target)
    },
    this.onWindowScroll = () =>  {
      this.handleScroll(window)
    },
    this.updatePoint = () =>  {
      if( ! (this.lastMoveEvent && this.lastMoveEventInfo)) return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ml(this.lastRawMoveEventInfo,
      this.transformPagePoint));
      const w = Uf(this.lastMoveEventInfo,
      this.history),
      M = this.startEvent !== null,
      A = oR(w.offset,
       {
        x: 0,
        y: 0
      }) >= this.distanceThreshold;
      if( ! M &&  ! A) return;
      const {
        point: C
      }
       = w,
       {
        timestamp: D
      }
       = ye;
      this.history.push( {
        ...C,
        timestamp: D
      });
      const {
        onStart: B,
        onMove: L
      }
       = this.handlers;
      M || (B && B(this.lastMoveEvent,
      w),
      this.startEvent = this.lastMoveEvent),
      L && L(this.lastMoveEvent,
      w)
    },
    this.handlePointerMove = (w,
    M) =>  {
      this.lastMoveEvent = w,
      this.lastRawMoveEventInfo = M,
      this.lastMoveEventInfo = ml(M,
      this.transformPagePoint),
      Ut.update(this.updatePoint,
       ! 0)
    },
    this.handlePointerUp = (w,
    M) =>  {
      this.end();
      const {
        onEnd: A,
        onSessionEnd: C,
        resumeAnimation: D
      }
       = this.handlers;
      if((this.dragSnapToOrigin ||  ! this.startEvent) && D && D(),
       ! (this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const B = Uf(w.type === "pointercancel" ? this.lastMoveEventInfo: ml(M,
      this.transformPagePoint),
      this.history);
      this.startEvent && A && A(w,
      B),
      C && C(w,
      B)
    },
     ! ah(a)) return;
    this.dragSnapToOrigin = f,
    this.handlers = s,
    this.transformPagePoint = r,
    this.distanceThreshold = d,
    this.contextWindow = l || window;
    const g = Fo(a),
    m = ml(g,
    this.transformPagePoint),
     {
      point: v
    }
     = m,
     {
      timestamp: p
    }
     = ye;
    this.history = [ {
      ...v,
      timestamp: p
    }];
    const {
      onSessionStart: E
    }
     = s;
    E && E(a,
    Uf(m,
    this.history)),
    this.removeListeners = qo(Oo(this.contextWindow,
    "pointermove",
    this.handlePointerMove),
    Oo(this.contextWindow,
    "pointerup",
    this.handlePointerUp),
    Oo(this.contextWindow,
    "pointercancel",
    this.handlePointerUp)),
    h && this.startScrollTracking(h)
  }
  startScrollTracking(a) {
    let s = a.parentElement;
    for(; s; ) {
      const r = getComputedStyle(s);
      (zv.has(r.overflowX) || zv.has(r.overflowY)) && this.scrollPositions.set(s,
       {
        x: s.scrollLeft,
        y: s.scrollTop
      }),
      s = s.parentElement
    }
    this.scrollPositions.set(window,
     {
      x: window.scrollX,
      y: window.scrollY
    }),
    window.addEventListener("scroll",
    this.onElementScroll,
     {
      capture:  ! 0
    }),
    window.addEventListener("scroll",
    this.onWindowScroll),
    this.removeScrollListeners = () =>  {
      window.removeEventListener("scroll",
      this.onElementScroll,
       {
        capture:  ! 0
      }),
      window.removeEventListener("scroll",
      this.onWindowScroll)
    }
  }
  handleScroll(a) {
    const s = this.scrollPositions.get(a);
    if( ! s) return;
    const r = a === window,
    l = r ?  {
      x: window.scrollX,
      y: window.scrollY
    }:  {
      x: a.scrollLeft,
      y: a.scrollTop
    },
    f =  {
      x: l.x - s.x,
      y: l.y - s.y
    };
    f.x === 0 && f.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x,
    this.lastMoveEventInfo.point.y += f.y): this.history.length > 0 && (this.history[0].x -= f.x,
    this.history[0].y -= f.y),
    this.scrollPositions.set(a,
    l),
    Ut.update(this.updatePoint,
     ! 0))
  }
  updateHandlers(a) {
    this.handlers = a
  }
  end() {
    this.removeListeners && this.removeListeners(),
    this.removeScrollListeners && this.removeScrollListeners(),
    this.scrollPositions.clear(),
    Ua(this.updatePoint)
  }
}
function ml(n,
a) {
  return a ?  {
    point: a(n.point)
  }: n
}
function _v(n,
a) {
  return {
    x: n.x - a.x,
    y: n.y - a.y
  }
}
function Uf( {
  point: n
},
a) {
  return {
    point: n,
    delta: _v(n,
    b1(a)),
    offset: _v(n,
    rR(a)),
    velocity: lR(a,
    .1)
  }
}
function rR(n) {
  return n[0]
}
function b1(n) {
  return n[n.length - 1]
}
function lR(n,
a) {
  if(n.length < 2) return {
    x: 0,
    y: 0
  };
  let s = n.length - 1,
  r = null;
  const l = b1(n);
  for(; s >= 0 && (r = n[s],
   ! (l.timestamp - r.timestamp > We(a)));
  ) s--;
  if( ! r) return {
    x: 0,
    y: 0
  };
  r === n[0] && n.length > 2 && l.timestamp - r.timestamp > We(a) * 2 && (r = n[1]);
  const f = ln(l.timestamp - r.timestamp);
  if(f === 0) return {
    x: 0,
    y: 0
  };
  const d =  {
    x: (l.x - r.x) / f,
    y: (l.y - r.y) / f
  };
  return d.x === 1 / 0 && (d.x = 0),
  d.y === 1 / 0 && (d.y = 0),
  d
}
function cR(n,
 {
  min: a,
  max: s
},
r) {
  return a !== void 0 && n < a ? n = r ? qt(a,
  n,
  r.min): Math.max(n,
  a): s !== void 0 && n > s && (n = r ? qt(s,
  n,
  r.max): Math.min(n,
  s)),
  n
}
function Lv(n,
a,
s) {
  return {
    min: a !== void 0 ? n.min + a: void 0,
    max: s !== void 0 ? n.max + s - (n.max - n.min): void 0
  }
}
function uR(n,
 {
  top: a,
  left: s,
  bottom: r,
  right: l
}) {
  return {
    x: Lv(n.x,
    s,
    l),
    y: Lv(n.y,
    a,
    r)
  }
}
function Vv(n,
a) {
  let s = a.min - n.min,
  r = a.max - n.max;
  return a.max - a.min < n.max - n.min && ([s,
  r] = [r,
  s]),
   {
    min: s,
    max: r
  }
}
function fR(n,
a) {
  return {
    x: Vv(n.x,
    a.x),
    y: Vv(n.y,
    a.y)
  }
}
function dR(n,
a) {
  let s = .5;
  const r = Ne(n),
  l = Ne(a);
  return l > r ? s = Lo(a.min,
  a.max - r,
  n.min): r > l && (s = Lo(n.min,
  n.max - l,
  a.min)),
  _n(0,
  1,
  s)
}
function hR(n,
a) {
  const s =  {
  };
  return a.min !== void 0 && (s.min = a.min - n.min),
  a.max !== void 0 && (s.max = a.max - n.min),
  s
}
const Td = .35;
function mR(n = Td) {
  return n ===  ! 1 ? n = 0: n ===  ! 0 && (n = Td),
   {
    x: Bv(n,
    "left",
    "right"),
    y: Bv(n,
    "top",
    "bottom")
  }
}
function Bv(n,
a,
s) {
  return {
    min: kv(n,
    a),
    max: kv(n,
    s)
  }
}
function kv(n,
a) {
  return typeof n == "number" ? n: n[a] || 0
}
const pR = new WeakMap;
class gR {
  constructor(a) {
    this.openDragLock = null,
    this.isDragging =  ! 1,
    this.currentDirection = null,
    this.originPoint =  {
      x: 0,
      y: 0
    },
    this.constraints =  ! 1,
    this.hasMutatedConstraints =  ! 1,
    this.elastic = le(),
    this.latestPointerEvent = null,
    this.latestPanInfo = null,
    this.visualElement = a
  }
  start(a,
   {
    snapToCursor: s =  ! 1,
    distanceThreshold: r
  }
   =  {
  }) {
    const {
      presenceContext: l
    }
     = this.visualElement;
    if(l && l.isPresent ===  ! 1) return;
    const f = p =>  {
      s && this.snapToCursor(Fo(p).point),
      this.stopAnimation()
    },
    d = (p,
    E) =>  {
      const {
        drag: w,
        dragPropagation: M,
        onDragStart: A
      }
       = this.getProps();
      if(w &&  ! M && (this.openDragLock && this.openDragLock(),
      this.openDragLock = ZC(w),
       ! this.openDragLock)) return;
      this.latestPointerEvent = p,
      this.latestPanInfo = E,
      this.isDragging =  ! 0,
      this.currentDirection = null,
      this.resolveConstraints(),
      this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked =  ! 0,
      this.visualElement.projection.target = void 0),
      Rn(D =>  {
        let B = this.getAxisMotionValue(D).get() || 0;
        if(On.test(B)) {
          const {
            projection: L
          }
           = this.visualElement;
          if(L && L.layout) {
            const q = L.layout.layoutBox[D];
            q && (B = Ne(q) * (parseFloat(B) / 100))
          }
        }
        this.originPoint[D] = B
      }),
      A && Ut.update(() => A(p,
      E),
       ! 1,
       ! 0),
      gd(this.visualElement,
      "transform");
      const {
        animationState: C
      }
       = this.visualElement;
      C && C.setActive("whileDrag",
       ! 0)
    },
    h = (p,
    E) =>  {
      this.latestPointerEvent = p,
      this.latestPanInfo = E;
      const {
        dragPropagation: w,
        dragDirectionLock: M,
        onDirectionLock: A,
        onDrag: C
      }
       = this.getProps();
      if( ! w &&  ! this.openDragLock) return;
      const {
        offset: D
      }
       = E;
      if(M && this.currentDirection === null) {
        this.currentDirection = vR(D),
        this.currentDirection !== null && A && A(this.currentDirection);
        return
      }
      this.updateAxis("x",
      E.point,
      D),
      this.updateAxis("y",
      E.point,
      D),
      this.visualElement.render(),
      C && Ut.update(() => C(p,
      E),
       ! 1,
       ! 0)
    },
    g = (p,
    E) =>  {
      this.latestPointerEvent = p,
      this.latestPanInfo = E,
      this.stop(p,
      E),
      this.latestPointerEvent = null,
      this.latestPanInfo = null
    },
    m = () =>  {
      const {
        dragSnapToOrigin: p
      }
       = this.getProps();
      (p || this.constraints) && this.startAnimation( {
        x: 0,
        y: 0
      })
    },
     {
      dragSnapToOrigin: v
    }
     = this.getProps();
    this.panSession = new x1(a,
     {
      onSessionStart: f,
      onStart: d,
      onMove: h,
      onSessionEnd: g,
      resumeAnimation: m
    },
     {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: v1(this.visualElement),
      element: this.visualElement.current
    })
  }
  stop(a,
  s) {
    const r = a || this.latestPointerEvent,
    l = s || this.latestPanInfo,
    f = this.isDragging;
    if(this.cancel(),
     ! f ||  ! l ||  ! r) return;
    const {
      velocity: d
    }
     = l;
    this.startAnimation(d);
    const {
      onDragEnd: h
    }
     = this.getProps();
    h && Ut.postRender(() => h(r,
    l))
  }
  cancel() {
    this.isDragging =  ! 1;
    const {
      projection: a,
      animationState: s
    }
     = this.visualElement;
    a && (a.isAnimationBlocked =  ! 1),
    this.endPanSession();
    const {
      dragPropagation: r
    }
     = this.getProps();
     ! r && this.openDragLock && (this.openDragLock(),
    this.openDragLock = null),
    s && s.setActive("whileDrag",
     ! 1)
  }
  endPanSession() {
    this.panSession && this.panSession.end(),
    this.panSession = void 0
  }
  updateAxis(a,
  s,
  r) {
    const {
      drag: l
    }
     = this.getProps();
    if( ! r ||  ! pl(a,
    l,
    this.currentDirection)) return;
    const f = this.getAxisMotionValue(a);
    let d = this.originPoint[a] + r[a];
    this.constraints && this.constraints[a] && (d = cR(d,
    this.constraints[a],
    this.elastic[a])),
    f.set(d)
  }
  resolveConstraints() {
    const {
      dragConstraints: a,
      dragElastic: s
    }
     = this.getProps(),
    r = this.visualElement.projection &&  ! this.visualElement.projection.layout ? this.visualElement.projection.measure( ! 1): this.visualElement.projection ?. layout,
    l = this.constraints;
    a && hs(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()): a && r ? this.constraints = uR(r.layoutBox,
    a): this.constraints =  ! 1,
    this.elastic = mR(s),
    l !== this.constraints &&  ! hs(a) && r && this.constraints &&  ! this.hasMutatedConstraints && Rn(f =>  {
      this.constraints !==  ! 1 && this.getAxisMotionValue(f) && (this.constraints[f] = hR(r.layoutBox[f],
      this.constraints[f]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: a,
      onMeasureDragConstraints: s
    }
     = this.getProps();
    if( ! a ||  ! hs(a)) return ! 1;
    const r = a.current,
     {
      projection: l
    }
     = this.visualElement;
    if( ! l ||  ! l.layout) return ! 1;
    const f = w3(r,
    l.root,
    this.visualElement.getTransformPagePoint());
    let d = fR(l.layout.layoutBox,
    f);
    if(s) {
      const h = s(b3(d));
      this.hasMutatedConstraints =  !  ! h,
      h && (d = Px(h))
    }
    return d
  }
  startAnimation(a) {
    const {
      drag: s,
      dragMomentum: r,
      dragElastic: l,
      dragTransition: f,
      dragSnapToOrigin: d,
      onDragTransitionEnd: h
    }
     = this.getProps(),
    g = this.constraints ||  {
    },
    m = Rn(v =>  {
      if( ! pl(v,
      s,
      this.currentDirection)) return;
      let p = g && g[v] ||  {
      };
      (d ===  ! 0 || d === v) && (p =  {
        min: 0,
        max: 0
      });
      const E = l ? 200: 1e6,
      w = l ? 40: 1e7,
      M =  {
        type: "inertia",
        velocity: r ? a[v]: 0,
        bounceStiffness: E,
        bounceDamping: w,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...f,
        ...p
      };
      return this.startAxisValueAnimation(v,
      M)
    });
    return Promise.all(m).then(h)
  }
  startAxisValueAnimation(a,
  s) {
    const r = this.getAxisMotionValue(a);
    return gd(this.visualElement,
    a),
    r.start($d(a,
    r,
    0,
    s,
    this.visualElement,
     ! 1))
  }
  stopAnimation() {
    Rn(a => this.getAxisMotionValue(a).stop())
  }
  getAxisMotionValue(a) {
    const s = `_drag${a.toUpperCase()}`,
    r = this.visualElement.getProps(),
    l = r[s];
    return l || this.visualElement.getValue(a,
    (r.initial ? r.initial[a]: void 0) || 0)
  }
  snapToCursor(a) {
    Rn(s =>  {
      const {
        drag: r
      }
       = this.getProps();
      if( ! pl(s,
      r,
      this.currentDirection)) return;
      const {
        projection: l
      }
       = this.visualElement,
      f = this.getAxisMotionValue(s);
      if(l && l.layout) {
        const {
          min: d,
          max: h
        }
         = l.layout.layoutBox[s],
        g = f.get() || 0;
        f.set(a[s] - qt(d,
        h,
        .5) + g)
      }
    })
  }
  scalePositionWithinConstraints() {
    if( ! this.visualElement.current) return;
    const {
      drag: a,
      dragConstraints: s
    }
     = this.getProps(),
     {
      projection: r
    }
     = this.visualElement;
    if( ! hs(s) ||  ! r ||  ! this.constraints) return;
    this.stopAnimation();
    const l =  {
      x: 0,
      y: 0
    };
    Rn(d =>  {
      const h = this.getAxisMotionValue(d);
      if(h && this.constraints !==  ! 1) {
        const g = h.get();
        l[d] = dR( {
          min: g,
          max: g
        },
        this.constraints[d])
      }
    });
    const {
      transformTemplate: f
    }
     = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f( {
    },
    ""): "none",
    r.root && r.root.updateScroll(),
    r.updateLayout(),
    this.constraints =  ! 1,
    this.resolveConstraints(),
    Rn(d =>  {
      if( ! pl(d,
      a,
      null)) return;
      const h = this.getAxisMotionValue(d),
       {
        min: g,
        max: m
      }
       = this.constraints[d];
      h.set(qt(g,
      m,
      l[d]))
    }),
    this.visualElement.render()
  }
  addListeners() {
    if( ! this.visualElement.current) return;
    pR.set(this.visualElement,
    this);
    const a = this.visualElement.current,
    s = Oo(a,
    "pointerdown",
    m =>  {
      const {
        drag: v,
        dragListener: p =  ! 0
      }
       = this.getProps(),
      E = m.target,
      w = E !== a && t3(E);
      v && p &&  ! w && this.start(m)
    });
    let r;
    const l = () =>  {
      const {
        dragConstraints: m
      }
       = this.getProps();
      hs(m) && m.current && (this.constraints = this.resolveRefConstraints(),
      r || (r = yR(a,
      m.current,
      () => this.scalePositionWithinConstraints())))
    },
     {
      projection: f
    }
     = this.visualElement,
    d = f.addEventListener("measure",
    l);
    f &&  ! f.layout && (f.root && f.root.updateScroll(),
    f.updateLayout()),
    Ut.read(l);
    const h = ko(window,
    "resize",
    () => this.scalePositionWithinConstraints()),
    g = f.addEventListener("didUpdate",
    (( {
      delta: m,
      hasLayoutChanged: v
    }) =>  {
      this.isDragging && v && (Rn(p =>  {
        const E = this.getAxisMotionValue(p);
        E && (this.originPoint[p] += m[p].translate,
        E.set(E.get() + m[p].translate))
      }),
      this.visualElement.render())
    }));
    return() =>  {
      h(),
      s(),
      d(),
      g && g(),
      r && r()
    }
  }
  getProps() {
    const a = this.visualElement.getProps(),
     {
      drag: s =  ! 1,
      dragDirectionLock: r =  ! 1,
      dragPropagation: l =  ! 1,
      dragConstraints: f =  ! 1,
      dragElastic: d = Td,
      dragMomentum: h =  ! 0
    }
     = a;
    return {
      ...a,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: f,
      dragElastic: d,
      dragMomentum: h
    }
  }
}
function Uv(n) {
  let a =  ! 0;
  return() =>  {
    if(a) {
      a =  ! 1;
      return
    }
    n()
  }
}
function yR(n,
a,
s) {
  const r = Zy(n,
  Uv(s)),
  l = Zy(a,
  Uv(s));
  return() =>  {
    r(),
    l()
  }
}
function pl(n,
a,
s) {
  return(a ===  ! 0 || a === n) && (s === null || s === n)
}
function vR(n,
a = 10) {
  let s = null;
  return Math.abs(n.y) > a ? s = "y": Math.abs(n.x) > a && (s = "x"),
  s
}
class xR extends Ha {
  constructor(a) {
    super(a),
    this.removeGroupControls = cn,
    this.removeListeners = cn,
    this.controls = new gR(a)
  }
  mount() {
    const {
      dragControls: a
    }
     = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
    this.removeListeners = this.controls.addListeners() || cn
  }
  update() {
    const {
      dragControls: a
    }
     = this.node.getProps(),
     {
      dragControls: s
    }
     = this.node.prevProps ||  {
    };
    a !== s && (this.removeGroupControls(),
    a && (this.removeGroupControls = a.subscribe(this.controls)))
  }
  unmount() {
    this.removeGroupControls(),
    this.removeListeners(),
    this.controls.isDragging || this.controls.endPanSession()
  }
}
const Hf = n => (a,
s) =>  {
  n && Ut.update(() => n(a,
  s),
   ! 1,
   ! 0)
};
class bR extends Ha {
  constructor() {
    super(...arguments),
    this.removePointerDownListener = cn
  }
  onPointerDown(a) {
    this.session = new x1(a,
    this.createPanHandlers(),
     {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: v1(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: s,
      onPan: r,
      onPanEnd: l
    }
     = this.node.getProps();
    return {
      onSessionStart: Hf(a),
      onStart: Hf(s),
      onMove: Hf(r),
      onEnd: (f,
      d) =>  {
        delete this.session,
        l && Ut.postRender(() => l(f,
        d))
      }
    }
  }
  mount() {
    this.removePointerDownListener = Oo(this.node.current,
    "pointerdown",
    a => this.onPointerDown(a))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(),
    this.session && this.session.end()
  }
}
let Pf =  ! 1;
class SR extends S.Component {
  componentDidMount() {
    const {
      visualElement: a,
      layoutGroup: s,
      switchLayoutGroup: r,
      layoutId: l
    }
     = this.props,
     {
      projection: f
    }
     = a;
    f && (s.group && s.group.add(f),
    r && r.register && l && r.register(f),
    Pf && f.root.didUpdate(),
    f.addEventListener("animationComplete",
    () =>  {
      this.safeToRemove()
    }),
    f.setOptions( {
      ...f.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })),
    zl.hasEverUpdated =  ! 0
  }
  getSnapshotBeforeUpdate(a) {
    const {
      layoutDependency: s,
      visualElement: r,
      drag: l,
      isPresent: f
    }
     = this.props,
     {
      projection: d
    }
     = r;
    return d && (d.isPresent = f,
    a.layoutDependency !== s && d.setOptions( {
      ...d.options,
      layoutDependency: s
    }),
    Pf =  ! 0,
    l || a.layoutDependency !== s || s === void 0 || a.isPresent !== f ? d.willUpdate(): this.safeToRemove(),
    a.isPresent !== f && (f ? d.promote(): d.relegate() || Ut.postRender(() =>  {
      const h = d.getStack();
      ( ! h ||  ! h.members.length) && this.safeToRemove()
    }))),
    null
  }
  componentDidUpdate() {
    const {
      visualElement: a,
      layoutAnchor: s
    }
     = this.props,
     {
      projection: r
    }
     = a;
    r && (r.options.layoutAnchor = s,
    r.root.didUpdate(),
    nh.postRender(() =>  {
       ! r.currentAnimation && r.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: a,
      layoutGroup: s,
      switchLayoutGroup: r
    }
     = this.props,
     {
      projection: l
    }
     = a;
    Pf =  ! 0,
    l && (l.scheduleCheckAfterUnmount(),
    s && s.group && s.group.remove(l),
    r && r.deregister && r.deregister(l))
  }
  safeToRemove() {
    const {
      safeToRemove: a
    }
     = this.props;
    a && a()
  }
  render() {
    return null
  }
}
function S1(n) {
  const[a,
  s] = RM(),
  r = S.useContext(V0);
  return x.jsx(SR,
   {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(g1),
    isPresent: a,
    safeToRemove: s
  })
}
const ER =  {
  pan:  {
    Feature: bR
  },
  drag:  {
    Feature: xR,
    ProjectionNode: l1,
    MeasureLayout: S1
  }
};
function Hv(n,
a,
s) {
  const {
    props: r
  }
   = n;
  n.animationState && r.whileHover && n.animationState.setActive("whileHover",
  s === "Start");
  const l = "onHover" + s,
  f = r[l];
  f && Ut.postRender(() => f(a,
  Fo(a)))
}
class wR extends Ha {
  mount() {
    const {
      current: a
    }
     = this.node;
    a && (this.unmount = WC(a,
    (s,
    r) => (Hv(this.node,
    r,
    "Start"),
    l => Hv(this.node,
    l,
    "End"))))
  }
  unmount() {
  }
}
class AR extends Ha {
  constructor() {
    super(...arguments),
    this.isActive =  ! 1
  }
  onFocus() {
    let a =  ! 1;
    try {
      a = this.node.current.matches(":focus-visible")
    }
    catch {
      a =  ! 0
    }
     ! a ||  ! this.node.animationState || (this.node.animationState.setActive("whileFocus",
     ! 0),
    this.isActive =  ! 0)
  }
  onBlur() {
     ! this.isActive ||  ! this.node.animationState || (this.node.animationState.setActive("whileFocus",
     ! 1),
    this.isActive =  ! 1)
  }
  mount() {
    this.unmount = qo(ko(this.node.current,
    "focus",
    () => this.onFocus()),
    ko(this.node.current,
    "blur",
    () => this.onBlur()))
  }
  unmount() {
  }
}
function Pv(n,
a,
s) {
  const {
    props: r
  }
   = n;
  if(n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState && r.whileTap && n.animationState.setActive("whileTap",
  s === "Start");
  const l = "onTap" + (s === "End" ? "": s),
  f = r[l];
  f && Ut.postRender(() => f(a,
  Fo(a)))
}
class TR extends Ha {
  mount() {
    const {
      current: a
    }
     = this.node;
    if( ! a) return;
    const {
      globalTapTarget: s,
      propagate: r
    }
     = this.node.props;
    this.unmount = n3(a,
    (l,
    f) => (Pv(this.node,
    f,
    "Start"),
    (d,
     {
      success: h
    }) => Pv(this.node,
    d,
    h ? "End": "Cancel")),
     {
      useGlobalTarget: s,
      stopPropagation: r ?. tap ===  ! 1
    })
  }
  unmount() {
  }
}
const Cd = new WeakMap,
Yf = new WeakMap,
CR = n =>  {
  const a = Cd.get(n.target);
  a && a(n)
},
MR = n =>  {
  n.forEach(CR)
};
function RR( {
  root: n,
  ...a
}) {
  const s = n || document;
  Yf.has(s) || Yf.set(s,
   {
  });
  const r = Yf.get(s),
  l = JSON.stringify(a);
  return r[l] || (r[l] = new IntersectionObserver(MR,
   {
    root: n,
    ...a
  })),
  r[l]
}
function NR(n,
a,
s) {
  const r = RR(a);
  return Cd.set(n,
  s),
  r.observe(n),
  () =>  {
    Cd.delete(n),
    r.unobserve(n)
  }
}
const DR =  {
  some: 0,
  all: 1
};
class jR extends Ha {
  constructor() {
    super(...arguments),
    this.hasEnteredView =  ! 1,
    this.isInView =  ! 1
  }
  startObserver() {
    this.stopObserver ?. ();
    const {
      viewport: a =  {
      }
    }
     = this.node.getProps(),
     {
      root: s,
      margin: r,
      amount: l = "some",
      once: f
    }
     = a,
    d =  {
      root: s ? s.current: void 0,
      rootMargin: r,
      threshold: typeof l == "number" ? l: DR[l]
    },
    h = g =>  {
      const {
        isIntersecting: m
      }
       = g;
      if(this.isInView === m || (this.isInView = m,
      f &&  ! m && this.hasEnteredView)) return;
      m && (this.hasEnteredView =  ! 0),
      this.node.animationState && this.node.animationState.setActive("whileInView",
      m);
      const {
        onViewportEnter: v,
        onViewportLeave: p
      }
       = this.node.getProps(),
      E = m ? v: p;
      E && E(g)
    };
    this.stopObserver = NR(this.node.current,
    d,
    h)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if(typeof IntersectionObserver > "u") return;
    const {
      props: a,
      prevProps: s
    }
     = this.node;
    ["amount",
    "margin",
    "root"].some(OR(a,
    s)) && this.startObserver()
  }
  unmount() {
    this.stopObserver ?. (),
    this.hasEnteredView =  ! 1,
    this.isInView =  ! 1
  }
}
function OR( {
  viewport: n =  {
  }
},
 {
  viewport: a =  {
  }
}
 =  {
}) {
  return s => n[s] !== a[s]
}
const zR =  {
  inView:  {
    Feature: jR
  },
  tap:  {
    Feature: TR
  },
  focus:  {
    Feature: AR
  },
  hover:  {
    Feature: wR
  }
},
_R =  {
  layout:  {
    ProjectionNode: l1,
    MeasureLayout: S1
  }
},
LR =  {
  ...iR,
  ...zR,
  ...ER,
  ..._R
},
te = IM(LR,
tR);
function Yv(n,
a) {
  if(typeof n == "function") return n(a);
  n != null && (n.current = a)
}
function ec(...n) {
  return a =>  {
    let s =  ! 1;
    const r = n.map(l =>  {
      const f = Yv(l,
      a);
      return ! s && typeof f == "function" && (s =  ! 0),
      f
    });
    if(s) return() =>  {
      for(let l = 0; l < r.length; l++) {
        const f = r[l];
        typeof f == "function" ? f(): Yv(n[l],
        null)
      }
    }
  }
}
function bi(...n) {
  return S.useCallback(ec(...n),
  n)
}
var VR = Symbol.for("react.lazy"),
Kl = jd[" use ".trim().toString()];
function BR(n) {
  return typeof n == "object" && n !== null && "then" in n
}
function E1(n) {
  return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === VR && "_payload" in n && BR(n._payload)
}
function kR(n) {
  const a = HR(n),
  s = S.forwardRef((r,
  l) =>  {
    let {
      children: f,
      ...d
    }
     = r;
    E1(f) && typeof Kl == "function" && (f = Kl(f._payload));
    const h = S.Children.toArray(f),
    g = h.find(YR);
    if(g) {
      const m = g.props.children,
      v = h.map(p => p === g ? S.Children.count(m) > 1 ? S.Children.only(null): S.isValidElement(m) ? m.props.children: null: p);
      return x.jsx(a,
       {
        ...d,
        ref: l,
        children: S.isValidElement(m) ? S.cloneElement(m,
        void 0,
        v): null
      })
    }
    return x.jsx(a,
     {
      ...d,
      ref: l,
      children: f
    })
  });
  return s.displayName = `${n}.Slot`,
  s
}
var UR = kR("Slot");
function HR(n) {
  const a = S.forwardRef((s,
  r) =>  {
    let {
      children: l,
      ...f
    }
     = s;
    if(E1(l) && typeof Kl == "function" && (l = Kl(l._payload)),
    S.isValidElement(l)) {
      const d = qR(l),
      h = GR(f,
      l.props);
      return l.type !== S.Fragment && (h.ref = r ? ec(r,
      d): d),
      S.cloneElement(l,
      h)
    }
    return S.Children.count(l) > 1 ? S.Children.only(null): null
  });
  return a.displayName = `${n}.SlotClone`,
  a
}
var PR = Symbol("radix.slottable");
function YR(n) {
  return S.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === PR
}
function GR(n,
a) {
  const s =  {
    ...a
  };
  for(const r in a) {
    const l = n[r],
    f = a[r];
    /^on[A-Z]/.test(r) ? l && f ? s[r] = (...h) =>  {
      const g = f(...h);
      return l(...h),
      g
    }: l && (s[r] = l): r === "style" ? s[r] =  {
      ...l,
      ...f
    }: r === "className" && (s[r] = [l,
    f].filter(Boolean).join(" "))
  }
  return {
    ...n,
    ...s
  }
}
function qR(n) {
  let a = Object.getOwnPropertyDescriptor(n.props,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning;
  return s ? n.ref: (a = Object.getOwnPropertyDescriptor(n,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning,
  s ? n.props.ref: n.props.ref || n.ref)
}
function w1(n) {
  var a,
  s,
  r = "";
  if(typeof n == "string" || typeof n == "number") r += n;
  else if(typeof n == "object") if(Array.isArray(n)) {
    var l = n.length;
    for(a = 0; a < l; a++) n[a] && (s = w1(n[a])) && (r && (r += " "),
    r += s)
  }
  else for(s in n) n[s] && (r && (r += " "),
  r += s);
  return r
}
function A1() {
  for(var n,
  a,
  s = 0,
  r = "",
  l = arguments.length; s < l; s++)(n = arguments[s]) && (a = w1(n)) && (r && (r += " "),
  r += a);
  return r
}
const Gv = n => typeof n == "boolean" ? `${n}`: n === 0 ? "0": n,
qv = A1,
XR = (n,
a) => s =>  {
  var r;
  if(a ?. variants == null) return qv(n,
  s ?. class,
  s ?. className);
  const {
    variants: l,
    defaultVariants: f
  }
   = a,
  d = Object.keys(l).map(m =>  {
    const v = s ?. [m],
    p = f ?. [m];
    if(v === null) return null;
    const E = Gv(v) || Gv(p);
    return l[m][E]
  }),
  h = s && Object.entries(s).reduce((m,
  v) =>  {
    let[p,
    E] = v;
    return E === void 0 || (m[p] = E),
    m
  },
   {
  }),
  g = a == null || (r = a.compoundVariants) === null || r === void 0 ? void 0: r.reduce((m,
  v) =>  {
    let {
      class: p,
      className: E,
      ...w
    }
     = v;
    return Object.entries(w).every(M =>  {
      let[A,
      C] = M;
      return Array.isArray(C) ? C.includes( {
        ...f,
        ...h
      }
      [A]):  {
        ...f,
        ...h
      }
      [A] === C
    }) ? [...m,
    p,
    E]: m
  },
  []);
  return qv(n,
  d,
  g,
  s ?. class,
  s ?. className)
},
KR = (n,
a) =>  {
  const s = new Array(n.length + a.length);
  for(let r = 0; r < n.length; r++) s[r] = n[r];
  for(let r = 0; r < a.length; r++) s[n.length + r] = a[r];
  return s
},
FR = (n,
a) => ( {
  classGroupId: n,
  validator: a
}),
T1 = (n = new Map,
a = null,
s) => ( {
  nextPart: n,
  validators: a,
  classGroupId: s
}),
Fl = "-",
Xv = [],
ZR = "arbitrary..",
QR = n =>  {
  const a = JR(n),
   {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: r
  }
   = n;
  return {
    getClassGroupId: d =>  {
      if(d.startsWith("[") && d.endsWith("]")) return WR(d);
      const h = d.split(Fl),
      g = h[0] === "" && h.length > 1 ? 1: 0;
      return C1(h,
      g,
      a)
    },
    getConflictingClassGroupIds: (d,
    h) =>  {
      if(h) {
        const g = r[d],
        m = s[d];
        return g ? m ? KR(m,
        g): g: m || Xv
      }
      return s[d] || Xv
    }
  }
},
C1 = (n,
a,
s) =>  {
  if(n.length - a === 0) return s.classGroupId;
  const l = n[a],
  f = s.nextPart.get(l);
  if(f) {
    const m = C1(n,
    a + 1,
    f);
    if(m) return m
  }
  const d = s.validators;
  if(d === null) return;
  const h = a === 0 ? n.join(Fl): n.slice(a).join(Fl),
  g = d.length;
  for(let m = 0; m < g; m++) {
    const v = d[m];
    if(v.validator(h)) return v.classGroupId
  }
},
WR = n => n.slice(1,
 - 1).indexOf(":") ===  - 1 ? void 0: (() =>  {
  const a = n.slice(1,
   - 1),
  s = a.indexOf(":"),
  r = a.slice(0,
  s);
  return r ? ZR + r: void 0
})(),
JR = n =>  {
  const {
    theme: a,
    classGroups: s
  }
   = n;
  return $R(s,
  a)
},
$R = (n,
a) =>  {
  const s = T1();
  for(const r in n) {
    const l = n[r];
    fh(l,
    s,
    r,
    a)
  }
  return s
},
fh = (n,
a,
s,
r) =>  {
  const l = n.length;
  for(let f = 0; f < l; f++) {
    const d = n[f];
    IR(d,
    a,
    s,
    r)
  }
},
IR = (n,
a,
s,
r) =>  {
  if(typeof n == "string") {
    t5(n,
    a,
    s);
    return
  }
  if(typeof n == "function") {
    e5(n,
    a,
    s,
    r);
    return
  }
  n5(n,
  a,
  s,
  r)
},
t5 = (n,
a,
s) =>  {
  const r = n === "" ? a: M1(a,
  n);
  r.classGroupId = s
},
e5 = (n,
a,
s,
r) =>  {
  if(a5(n)) {
    fh(n(r),
    a,
    s,
    r);
    return
  }
  a.validators === null && (a.validators = []),
  a.validators.push(FR(s,
  n))
},
n5 = (n,
a,
s,
r) =>  {
  const l = Object.entries(n),
  f = l.length;
  for(let d = 0; d < f; d++) {
    const[h,
    g] = l[d];
    fh(g,
    M1(a,
    h),
    s,
    r)
  }
},
M1 = (n,
a) =>  {
  let s = n;
  const r = a.split(Fl),
  l = r.length;
  for(let f = 0; f < l; f++) {
    const d = r[f];
    let h = s.nextPart.get(d);
    h || (h = T1(),
    s.nextPart.set(d,
    h)),
    s = h
  }
  return s
},
a5 = n => "isThemeGetter" in n && n.isThemeGetter ===  ! 0,
i5 = n =>  {
  if(n < 1) return {
    get: () =>  {
    },
    set: () =>  {
    }
  };
  let a = 0,
  s = Object.create(null),
  r = Object.create(null);
  const l = (f,
  d) =>  {
    s[f] = d,
    a++,
    a > n && (a = 0,
    r = s,
    s = Object.create(null))
  };
  return {
    get(f) {
      let d = s[f];
      if(d !== void 0) return d;
      if((d = r[f]) !== void 0) return l(f,
      d),
      d
    },
    set(f,
    d) {
      f in s ? s[f] = d: l(f,
      d)
    }
  }
},
Md = "!",
Kv = ":",
s5 = [],
Fv = (n,
a,
s,
r,
l) => ( {
  modifiers: n,
  hasImportantModifier: a,
  baseClassName: s,
  maybePostfixModifierPosition: r,
  isExternal: l
}),
o5 = n =>  {
  const {
    prefix: a,
    experimentalParseClassName: s
  }
   = n;
  let r = l =>  {
    const f = [];
    let d = 0,
    h = 0,
    g = 0,
    m;
    const v = l.length;
    for(let A = 0; A < v; A++) {
      const C = l[A];
      if(d === 0 && h === 0) {
        if(C === Kv) {
          f.push(l.slice(g,
          A)),
          g = A + 1;
          continue
        }
        if(C === "/") {
          m = A;
          continue
        }
      }
      C === "[" ? d++: C === "]" ? d--: C === "(" ? h++: C === ")" && h--
    }
    const p = f.length === 0 ? l: l.slice(g);
    let E = p,
    w =  ! 1;
    p.endsWith(Md) ? (E = p.slice(0,
     - 1),
    w =  ! 0): p.startsWith(Md) && (E = p.slice(1),
    w =  ! 0);
    const M = m && m > g ? m - g: void 0;
    return Fv(f,
    w,
    E,
    M)
  };
  if(a) {
    const l = a + Kv,
    f = r;
    r = d => d.startsWith(l) ? f(d.slice(l.length)): Fv(s5,
     ! 1,
    d,
    void 0,
     ! 0)
  }
  if(s) {
    const l = r;
    r = f => s( {
      className: f,
      parseClassName: l
    })
  }
  return r
},
r5 = n =>  {
  const a = new Map;
  return n.orderSensitiveModifiers.forEach((s,
  r) =>  {
    a.set(s,
    1e6 + r)
  }),
  s =>  {
    const r = [];
    let l = [];
    for(let f = 0; f < s.length; f++) {
      const d = s[f],
      h = d[0] === "[",
      g = a.has(d);
      h || g ? (l.length > 0 && (l.sort(),
      r.push(...l),
      l = []),
      r.push(d)): l.push(d)
    }
    return l.length > 0 && (l.sort(),
    r.push(...l)),
    r
  }
},
l5 = n => ( {
  cache: i5(n.cacheSize),
  parseClassName: o5(n),
  sortModifiers: r5(n),
  ...QR(n)
}),
c5 = /\s+/,
u5 = (n,
a) =>  {
  const {
    parseClassName: s,
    getClassGroupId: r,
    getConflictingClassGroupIds: l,
    sortModifiers: f
  }
   = a,
  d = [],
  h = n.trim().split(c5);
  let g = "";
  for(let m = h.length - 1; m >= 0; m -= 1) {
    const v = h[m],
     {
      isExternal: p,
      modifiers: E,
      hasImportantModifier: w,
      baseClassName: M,
      maybePostfixModifierPosition: A
    }
     = s(v);
    if(p) {
      g = v + (g.length > 0 ? " " + g: g);
      continue
    }
    let C =  !  ! A,
    D = r(C ? M.substring(0,
    A): M);
    if( ! D) {
      if( ! C) {
        g = v + (g.length > 0 ? " " + g: g);
        continue
      }
      if(D = r(M),
       ! D) {
        g = v + (g.length > 0 ? " " + g: g);
        continue
      }
      C =  ! 1
    }
    const B = E.length === 0 ? "": E.length === 1 ? E[0]: f(E).join(":"),
    L = w ? B + Md: B,
    q = L + D;
    if(d.indexOf(q) >  - 1) continue;
    d.push(q);
    const Q = l(D,
    C);
    for(let $ = 0; $ < Q.length; ++ $) {
      const F = Q[$];
      d.push(L + F)
    }
    g = v + (g.length > 0 ? " " + g: g)
  }
  return g
},
f5 = (...n) =>  {
  let a = 0,
  s,
  r,
  l = "";
  for(; a < n.length; )(s = n[a++]) && (r = R1(s)) && (l && (l += " "),
  l += r);
  return l
},
R1 = n =>  {
  if(typeof n == "string") return n;
  let a,
  s = "";
  for(let r = 0; r < n.length; r++) n[r] && (a = R1(n[r])) && (s && (s += " "),
  s += a);
  return s
},
d5 = (n,
...a) =>  {
  let s,
  r,
  l,
  f;
  const d = g =>  {
    const m = a.reduce((v,
    p) => p(v),
    n());
    return s = l5(m),
    r = s.cache.get,
    l = s.cache.set,
    f = h,
    h(g)
  },
  h = g =>  {
    const m = r(g);
    if(m) return m;
    const v = u5(g,
    s);
    return l(g,
    v),
    v
  };
  return f = d,
  (...g) => f(f5(...g))
},
h5 = [],
re = n =>  {
  const a = s => s[n] || h5;
  return a.isThemeGetter =  ! 0,
  a
},
N1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
D1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
m5 = /^\d+\/\d+$/,
p5 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
g5 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
y5 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
v5 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
x5 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
cs = n => m5.test(n),
St = n =>  !  ! n &&  ! Number.isNaN(Number(n)),
za = n =>  !  ! n && Number.isInteger(Number(n)),
Gf = n => n.endsWith("%") && St(n.slice(0,
 - 1)),
ta = n => p5.test(n),
b5 = () =>  ! 0,
S5 = n => g5.test(n) &&  ! y5.test(n),
j1 = () =>  ! 1,
E5 = n => v5.test(n),
w5 = n => x5.test(n),
A5 = n =>  ! nt(n) &&  ! at(n),
T5 = n => Ts(n,
_1,
j1),
nt = n => N1.test(n),
fi = n => Ts(n,
L1,
S5),
qf = n => Ts(n,
D5,
St),
Zv = n => Ts(n,
O1,
j1),
C5 = n => Ts(n,
z1,
w5),
gl = n => Ts(n,
V1,
E5),
at = n => D1.test(n),
Mo = n => Cs(n,
L1),
M5 = n => Cs(n,
j5),
Qv = n => Cs(n,
O1),
R5 = n => Cs(n,
_1),
N5 = n => Cs(n,
z1),
yl = n => Cs(n,
V1,
 ! 0),
Ts = (n,
a,
s) =>  {
  const r = N1.exec(n);
  return r ? r[1] ? a(r[1]): s(r[2]):  ! 1
},
Cs = (n,
a,
s =  ! 1) =>  {
  const r = D1.exec(n);
  return r ? r[1] ? a(r[1]): s:  ! 1
},
O1 = n => n === "position" || n === "percentage",
z1 = n => n === "image" || n === "url",
_1 = n => n === "length" || n === "size" || n === "bg-size",
L1 = n => n === "length",
D5 = n => n === "number",
j5 = n => n === "family-name",
V1 = n => n === "shadow",
O5 = () =>  {
  const n = re("color"),
  a = re("font"),
  s = re("text"),
  r = re("font-weight"),
  l = re("tracking"),
  f = re("leading"),
  d = re("breakpoint"),
  h = re("container"),
  g = re("spacing"),
  m = re("radius"),
  v = re("shadow"),
  p = re("inset-shadow"),
  E = re("text-shadow"),
  w = re("drop-shadow"),
  M = re("blur"),
  A = re("perspective"),
  C = re("aspect"),
  D = re("ease"),
  B = re("animate"),
  L = () => ["auto",
  "avoid",
  "all",
  "avoid-page",
  "page",
  "left",
  "right",
  "column"],
  q = () => ["center",
  "top",
  "bottom",
  "left",
  "right",
  "top-left",
  "left-top",
  "top-right",
  "right-top",
  "bottom-right",
  "right-bottom",
  "bottom-left",
  "left-bottom"],
  Q = () => [...q(),
  at,
  nt],
  $ = () => ["auto",
  "hidden",
  "clip",
  "visible",
  "scroll"],
  F = () => ["auto",
  "contain",
  "none"],
  X = () => [at,
  nt,
  g],
  rt = () => [cs,
  "full",
  "auto",
  ...X()],
  tt = () => [za,
  "none",
  "subgrid",
  at,
  nt],
  mt = () => ["auto",
   {
    span: ["full",
    za,
    at,
    nt]
  },
  za,
  at,
  nt],
  pt = () => [za,
  "auto",
  at,
  nt],
  Rt = () => ["auto",
  "min",
  "max",
  "fr",
  at,
  nt],
  Nt = () => ["start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
  "stretch",
  "baseline",
  "center-safe",
  "end-safe"],
  yt = () => ["start",
  "end",
  "center",
  "stretch",
  "center-safe",
  "end-safe"],
  O = () => ["auto",
  ...X()],
  Z = () => [cs,
  "auto",
  "full",
  "dvw",
  "dvh",
  "lvw",
  "lvh",
  "svw",
  "svh",
  "min",
  "max",
  "fit",
  ...X()],
  H = () => [n,
  at,
  nt],
  ut = () => [...q(),
  Qv,
  Zv,
   {
    position: [at,
    nt]
  }],
  dt = () => ["no-repeat",
   {
    repeat: ["",
    "x",
    "y",
    "space",
    "round"]
  }],
  R = () => ["auto",
  "cover",
  "contain",
  R5,
  T5,
   {
    size: [at,
    nt]
  }],
  Y = () => [Gf,
  Mo,
  fi],
  P = () => ["",
  "none",
  "full",
  m,
  at,
  nt],
  W = () => ["",
  St,
  Mo,
  fi],
  I = () => ["solid",
  "dashed",
  "dotted",
  "double"],
  ct = () => ["normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"],
  ot = () => [St,
  Gf,
  Qv,
  Zv],
  vt = () => ["",
  "none",
  M,
  at,
  nt],
  Mt = () => ["none",
  St,
  at,
  nt],
  Ee = () => ["none",
  St,
  at,
  nt],
  Pe = () => [St,
  at,
  nt],
  we = () => [cs,
  "full",
  ...X()];
  return {
    cacheSize: 500,
    theme:  {
      animate: ["spin",
      "ping",
      "pulse",
      "bounce"],
      aspect: ["video"],
      blur: [ta],
      breakpoint: [ta],
      color: [b5],
      container: [ta],
      "drop-shadow": [ta],
      ease: ["in",
      "out",
      "in-out"],
      font: [A5],
      "font-weight": ["thin",
      "extralight",
      "light",
      "normal",
      "medium",
      "semibold",
      "bold",
      "extrabold",
      "black"],
      "inset-shadow": [ta],
      leading: ["none",
      "tight",
      "snug",
      "normal",
      "relaxed",
      "loose"],
      perspective: ["dramatic",
      "near",
      "normal",
      "midrange",
      "distant",
      "none"],
      radius: [ta],
      shadow: [ta],
      spacing: ["px",
      St],
      text: [ta],
      "text-shadow": [ta],
      tracking: ["tighter",
      "tight",
      "normal",
      "wide",
      "wider",
      "widest"]
    },
    classGroups:  {
      aspect: [ {
        aspect: ["auto",
        "square",
        cs,
        nt,
        at,
        C]
      }],
      container: ["container"],
      columns: [ {
        columns: [St,
        nt,
        at,
        h]
      }],
      "break-after": [ {
        "break-after": L()
      }],
      "break-before": [ {
        "break-before": L()
      }],
      "break-inside": [ {
        "break-inside": ["auto",
        "avoid",
        "avoid-page",
        "avoid-column"]
      }],
      "box-decoration": [ {
        "box-decoration": ["slice",
        "clone"]
      }],
      box: [ {
        box: ["border",
        "content"]
      }],
      display: ["block",
      "inline-block",
      "inline",
      "flex",
      "inline-flex",
      "table",
      "inline-table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row-group",
      "table-row",
      "flow-root",
      "grid",
      "inline-grid",
      "contents",
      "list-item",
      "hidden"],
      sr: ["sr-only",
      "not-sr-only"],
      float: [ {
        float: ["right",
        "left",
        "none",
        "start",
        "end"]
      }],
      clear: [ {
        clear: ["left",
        "right",
        "both",
        "none",
        "start",
        "end"]
      }],
      isolation: ["isolate",
      "isolation-auto"],
      "object-fit": [ {
        object: ["contain",
        "cover",
        "fill",
        "none",
        "scale-down"]
      }],
      "object-position": [ {
        object: Q()
      }],
      overflow: [ {
        overflow: $()
      }],
      "overflow-x": [ {
        "overflow-x": $()
      }],
      "overflow-y": [ {
        "overflow-y": $()
      }],
      overscroll: [ {
        overscroll: F()
      }],
      "overscroll-x": [ {
        "overscroll-x": F()
      }],
      "overscroll-y": [ {
        "overscroll-y": F()
      }],
      position: ["static",
      "fixed",
      "absolute",
      "relative",
      "sticky"],
      inset: [ {
        inset: rt()
      }],
      "inset-x": [ {
        "inset-x": rt()
      }],
      "inset-y": [ {
        "inset-y": rt()
      }],
      start: [ {
        start: rt()
      }],
      end: [ {
        end: rt()
      }],
      top: [ {
        top: rt()
      }],
      right: [ {
        right: rt()
      }],
      bottom: [ {
        bottom: rt()
      }],
      left: [ {
        left: rt()
      }],
      visibility: ["visible",
      "invisible",
      "collapse"],
      z: [ {
        z: [za,
        "auto",
        at,
        nt]
      }],
      basis: [ {
        basis: [cs,
        "full",
        "auto",
        h,
        ...X()]
      }],
      "flex-direction": [ {
        flex: ["row",
        "row-reverse",
        "col",
        "col-reverse"]
      }],
      "flex-wrap": [ {
        flex: ["nowrap",
        "wrap",
        "wrap-reverse"]
      }],
      flex: [ {
        flex: [St,
        cs,
        "auto",
        "initial",
        "none",
        nt]
      }],
      grow: [ {
        grow: ["",
        St,
        at,
        nt]
      }],
      shrink: [ {
        shrink: ["",
        St,
        at,
        nt]
      }],
      order: [ {
        order: [za,
        "first",
        "last",
        "none",
        at,
        nt]
      }],
      "grid-cols": [ {
        "grid-cols": tt()
      }],
      "col-start-end": [ {
        col: mt()
      }],
      "col-start": [ {
        "col-start": pt()
      }],
      "col-end": [ {
        "col-end": pt()
      }],
      "grid-rows": [ {
        "grid-rows": tt()
      }],
      "row-start-end": [ {
        row: mt()
      }],
      "row-start": [ {
        "row-start": pt()
      }],
      "row-end": [ {
        "row-end": pt()
      }],
      "grid-flow": [ {
        "grid-flow": ["row",
        "col",
        "dense",
        "row-dense",
        "col-dense"]
      }],
      "auto-cols": [ {
        "auto-cols": Rt()
      }],
      "auto-rows": [ {
        "auto-rows": Rt()
      }],
      gap: [ {
        gap: X()
      }],
      "gap-x": [ {
        "gap-x": X()
      }],
      "gap-y": [ {
        "gap-y": X()
      }],
      "justify-content": [ {
        justify: [...Nt(),
        "normal"]
      }],
      "justify-items": [ {
        "justify-items": [...yt(),
        "normal"]
      }],
      "justify-self": [ {
        "justify-self": ["auto",
        ...yt()]
      }],
      "align-content": [ {
        content: ["normal",
        ...Nt()]
      }],
      "align-items": [ {
        items: [...yt(),
         {
          baseline: ["",
          "last"]
        }]
      }],
      "align-self": [ {
        self: ["auto",
        ...yt(),
         {
          baseline: ["",
          "last"]
        }]
      }],
      "place-content": [ {
        "place-content": Nt()
      }],
      "place-items": [ {
        "place-items": [...yt(),
        "baseline"]
      }],
      "place-self": [ {
        "place-self": ["auto",
        ...yt()]
      }],
      p: [ {
        p: X()
      }],
      px: [ {
        px: X()
      }],
      py: [ {
        py: X()
      }],
      ps: [ {
        ps: X()
      }],
      pe: [ {
        pe: X()
      }],
      pt: [ {
        pt: X()
      }],
      pr: [ {
        pr: X()
      }],
      pb: [ {
        pb: X()
      }],
      pl: [ {
        pl: X()
      }],
      m: [ {
        m: O()
      }],
      mx: [ {
        mx: O()
      }],
      my: [ {
        my: O()
      }],
      ms: [ {
        ms: O()
      }],
      me: [ {
        me: O()
      }],
      mt: [ {
        mt: O()
      }],
      mr: [ {
        mr: O()
      }],
      mb: [ {
        mb: O()
      }],
      ml: [ {
        ml: O()
      }],
      "space-x": [ {
        "space-x": X()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [ {
        "space-y": X()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [ {
        size: Z()
      }],
      w: [ {
        w: [h,
        "screen",
        ...Z()]
      }],
      "min-w": [ {
        "min-w": [h,
        "screen",
        "none",
        ...Z()]
      }],
      "max-w": [ {
        "max-w": [h,
        "screen",
        "none",
        "prose",
         {
          screen: [d]
        },
        ...Z()]
      }],
      h: [ {
        h: ["screen",
        "lh",
        ...Z()]
      }],
      "min-h": [ {
        "min-h": ["screen",
        "lh",
        "none",
        ...Z()]
      }],
      "max-h": [ {
        "max-h": ["screen",
        "lh",
        ...Z()]
      }],
      "font-size": [ {
        text: ["base",
        s,
        Mo,
        fi]
      }],
      "font-smoothing": ["antialiased",
      "subpixel-antialiased"],
      "font-style": ["italic",
      "not-italic"],
      "font-weight": [ {
        font: [r,
        at,
        qf]
      }],
      "font-stretch": [ {
        "font-stretch": ["ultra-condensed",
        "extra-condensed",
        "condensed",
        "semi-condensed",
        "normal",
        "semi-expanded",
        "expanded",
        "extra-expanded",
        "ultra-expanded",
        Gf,
        nt]
      }],
      "font-family": [ {
        font: [M5,
        nt,
        a]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums",
      "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums",
      "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions",
      "stacked-fractions"],
      tracking: [ {
        tracking: [l,
        at,
        nt]
      }],
      "line-clamp": [ {
        "line-clamp": [St,
        "none",
        at,
        qf]
      }],
      leading: [ {
        leading: [f,
        ...X()]
      }],
      "list-image": [ {
        "list-image": ["none",
        at,
        nt]
      }],
      "list-style-position": [ {
        list: ["inside",
        "outside"]
      }],
      "list-style-type": [ {
        list: ["disc",
        "decimal",
        "none",
        at,
        nt]
      }],
      "text-alignment": [ {
        text: ["left",
        "center",
        "right",
        "justify",
        "start",
        "end"]
      }],
      "placeholder-color": [ {
        placeholder: H()
      }],
      "text-color": [ {
        text: H()
      }],
      "text-decoration": ["underline",
      "overline",
      "line-through",
      "no-underline"],
      "text-decoration-style": [ {
        decoration: [...I(),
        "wavy"]
      }],
      "text-decoration-thickness": [ {
        decoration: [St,
        "from-font",
        "auto",
        at,
        fi]
      }],
      "text-decoration-color": [ {
        decoration: H()
      }],
      "underline-offset": [ {
        "underline-offset": [St,
        "auto",
        at,
        nt]
      }],
      "text-transform": ["uppercase",
      "lowercase",
      "capitalize",
      "normal-case"],
      "text-overflow": ["truncate",
      "text-ellipsis",
      "text-clip"],
      "text-wrap": [ {
        text: ["wrap",
        "nowrap",
        "balance",
        "pretty"]
      }],
      indent: [ {
        indent: X()
      }],
      "vertical-align": [ {
        align: ["baseline",
        "top",
        "middle",
        "bottom",
        "text-top",
        "text-bottom",
        "sub",
        "super",
        at,
        nt]
      }],
      whitespace: [ {
        whitespace: ["normal",
        "nowrap",
        "pre",
        "pre-line",
        "pre-wrap",
        "break-spaces"]
      }],
      break: [ {
        break: ["normal",
        "words",
        "all",
        "keep"]
      }],
      wrap: [ {
        wrap: ["break-word",
        "anywhere",
        "normal"]
      }],
      hyphens: [ {
        hyphens: ["none",
        "manual",
        "auto"]
      }],
      content: [ {
        content: ["none",
        at,
        nt]
      }],
      "bg-attachment": [ {
        bg: ["fixed",
        "local",
        "scroll"]
      }],
      "bg-clip": [ {
        "bg-clip": ["border",
        "padding",
        "content",
        "text"]
      }],
      "bg-origin": [ {
        "bg-origin": ["border",
        "padding",
        "content"]
      }],
      "bg-position": [ {
        bg: ut()
      }],
      "bg-repeat": [ {
        bg: dt()
      }],
      "bg-size": [ {
        bg: R()
      }],
      "bg-image": [ {
        bg: ["none",
         {
          linear: [ {
            to: ["t",
            "tr",
            "r",
            "br",
            "b",
            "bl",
            "l",
            "tl"]
          },
          za,
          at,
          nt],
          radial: ["",
          at,
          nt],
          conic: [za,
          at,
          nt]
        },
        N5,
        C5]
      }],
      "bg-color": [ {
        bg: H()
      }],
      "gradient-from-pos": [ {
        from: Y()
      }],
      "gradient-via-pos": [ {
        via: Y()
      }],
      "gradient-to-pos": [ {
        to: Y()
      }],
      "gradient-from": [ {
        from: H()
      }],
      "gradient-via": [ {
        via: H()
      }],
      "gradient-to": [ {
        to: H()
      }],
      rounded: [ {
        rounded: P()
      }],
      "rounded-s": [ {
        "rounded-s": P()
      }],
      "rounded-e": [ {
        "rounded-e": P()
      }],
      "rounded-t": [ {
        "rounded-t": P()
      }],
      "rounded-r": [ {
        "rounded-r": P()
      }],
      "rounded-b": [ {
        "rounded-b": P()
      }],
      "rounded-l": [ {
        "rounded-l": P()
      }],
      "rounded-ss": [ {
        "rounded-ss": P()
      }],
      "rounded-se": [ {
        "rounded-se": P()
      }],
      "rounded-ee": [ {
        "rounded-ee": P()
      }],
      "rounded-es": [ {
        "rounded-es": P()
      }],
      "rounded-tl": [ {
        "rounded-tl": P()
      }],
      "rounded-tr": [ {
        "rounded-tr": P()
      }],
      "rounded-br": [ {
        "rounded-br": P()
      }],
      "rounded-bl": [ {
        "rounded-bl": P()
      }],
      "border-w": [ {
        border: W()
      }],
      "border-w-x": [ {
        "border-x": W()
      }],
      "border-w-y": [ {
        "border-y": W()
      }],
      "border-w-s": [ {
        "border-s": W()
      }],
      "border-w-e": [ {
        "border-e": W()
      }],
      "border-w-t": [ {
        "border-t": W()
      }],
      "border-w-r": [ {
        "border-r": W()
      }],
      "border-w-b": [ {
        "border-b": W()
      }],
      "border-w-l": [ {
        "border-l": W()
      }],
      "divide-x": [ {
        "divide-x": W()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [ {
        "divide-y": W()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [ {
        border: [...I(),
        "hidden",
        "none"]
      }],
      "divide-style": [ {
        divide: [...I(),
        "hidden",
        "none"]
      }],
      "border-color": [ {
        border: H()
      }],
      "border-color-x": [ {
        "border-x": H()
      }],
      "border-color-y": [ {
        "border-y": H()
      }],
      "border-color-s": [ {
        "border-s": H()
      }],
      "border-color-e": [ {
        "border-e": H()
      }],
      "border-color-t": [ {
        "border-t": H()
      }],
      "border-color-r": [ {
        "border-r": H()
      }],
      "border-color-b": [ {
        "border-b": H()
      }],
      "border-color-l": [ {
        "border-l": H()
      }],
      "divide-color": [ {
        divide: H()
      }],
      "outline-style": [ {
        outline: [...I(),
        "none",
        "hidden"]
      }],
      "outline-offset": [ {
        "outline-offset": [St,
        at,
        nt]
      }],
      "outline-w": [ {
        outline: ["",
        St,
        Mo,
        fi]
      }],
      "outline-color": [ {
        outline: H()
      }],
      shadow: [ {
        shadow: ["",
        "none",
        v,
        yl,
        gl]
      }],
      "shadow-color": [ {
        shadow: H()
      }],
      "inset-shadow": [ {
        "inset-shadow": ["none",
        p,
        yl,
        gl]
      }],
      "inset-shadow-color": [ {
        "inset-shadow": H()
      }],
      "ring-w": [ {
        ring: W()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [ {
        ring: H()
      }],
      "ring-offset-w": [ {
        "ring-offset": [St,
        fi]
      }],
      "ring-offset-color": [ {
        "ring-offset": H()
      }],
      "inset-ring-w": [ {
        "inset-ring": W()
      }],
      "inset-ring-color": [ {
        "inset-ring": H()
      }],
      "text-shadow": [ {
        "text-shadow": ["none",
        E,
        yl,
        gl]
      }],
      "text-shadow-color": [ {
        "text-shadow": H()
      }],
      opacity: [ {
        opacity: [St,
        at,
        nt]
      }],
      "mix-blend": [ {
        "mix-blend": [...ct(),
        "plus-darker",
        "plus-lighter"]
      }],
      "bg-blend": [ {
        "bg-blend": ct()
      }],
      "mask-clip": [ {
        "mask-clip": ["border",
        "padding",
        "content",
        "fill",
        "stroke",
        "view"]
      },
      "mask-no-clip"],
      "mask-composite": [ {
        mask: ["add",
        "subtract",
        "intersect",
        "exclude"]
      }],
      "mask-image-linear-pos": [ {
        "mask-linear": [St]
      }],
      "mask-image-linear-from-pos": [ {
        "mask-linear-from": ot()
      }],
      "mask-image-linear-to-pos": [ {
        "mask-linear-to": ot()
      }],
      "mask-image-linear-from-color": [ {
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-color": [ {
        "mask-linear-to": H()
      }],
      "mask-image-t-from-pos": [ {
        "mask-t-from": ot()
      }],
      "mask-image-t-to-pos": [ {
        "mask-t-to": ot()
      }],
      "mask-image-t-from-color": [ {
        "mask-t-from": H()
      }],
      "mask-image-t-to-color": [ {
        "mask-t-to": H()
      }],
      "mask-image-r-from-pos": [ {
        "mask-r-from": ot()
      }],
      "mask-image-r-to-pos": [ {
        "mask-r-to": ot()
      }],
      "mask-image-r-from-color": [ {
        "mask-r-from": H()
      }],
      "mask-image-r-to-color": [ {
        "mask-r-to": H()
      }],
      "mask-image-b-from-pos": [ {
        "mask-b-from": ot()
      }],
      "mask-image-b-to-pos": [ {
        "mask-b-to": ot()
      }],
      "mask-image-b-from-color": [ {
        "mask-b-from": H()
      }],
      "mask-image-b-to-color": [ {
        "mask-b-to": H()
      }],
      "mask-image-l-from-pos": [ {
        "mask-l-from": ot()
      }],
      "mask-image-l-to-pos": [ {
        "mask-l-to": ot()
      }],
      "mask-image-l-from-color": [ {
        "mask-l-from": H()
      }],
      "mask-image-l-to-color": [ {
        "mask-l-to": H()
      }],
      "mask-image-x-from-pos": [ {
        "mask-x-from": ot()
      }],
      "mask-image-x-to-pos": [ {
        "mask-x-to": ot()
      }],
      "mask-image-x-from-color": [ {
        "mask-x-from": H()
      }],
      "mask-image-x-to-color": [ {
        "mask-x-to": H()
      }],
      "mask-image-y-from-pos": [ {
        "mask-y-from": ot()
      }],
      "mask-image-y-to-pos": [ {
        "mask-y-to": ot()
      }],
      "mask-image-y-from-color": [ {
        "mask-y-from": H()
      }],
      "mask-image-y-to-color": [ {
        "mask-y-to": H()
      }],
      "mask-image-radial": [ {
        "mask-radial": [at,
        nt]
      }],
      "mask-image-radial-from-pos": [ {
        "mask-radial-from": ot()
      }],
      "mask-image-radial-to-pos": [ {
        "mask-radial-to": ot()
      }],
      "mask-image-radial-from-color": [ {
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-color": [ {
        "mask-radial-to": H()
      }],
      "mask-image-radial-shape": [ {
        "mask-radial": ["circle",
        "ellipse"]
      }],
      "mask-image-radial-size": [ {
        "mask-radial": [ {
          closest: ["side",
          "corner"],
          farthest: ["side",
          "corner"]
        }]
      }],
      "mask-image-radial-pos": [ {
        "mask-radial-at": q()
      }],
      "mask-image-conic-pos": [ {
        "mask-conic": [St]
      }],
      "mask-image-conic-from-pos": [ {
        "mask-conic-from": ot()
      }],
      "mask-image-conic-to-pos": [ {
        "mask-conic-to": ot()
      }],
      "mask-image-conic-from-color": [ {
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-color": [ {
        "mask-conic-to": H()
      }],
      "mask-mode": [ {
        mask: ["alpha",
        "luminance",
        "match"]
      }],
      "mask-origin": [ {
        "mask-origin": ["border",
        "padding",
        "content",
        "fill",
        "stroke",
        "view"]
      }],
      "mask-position": [ {
        mask: ut()
      }],
      "mask-repeat": [ {
        mask: dt()
      }],
      "mask-size": [ {
        mask: R()
      }],
      "mask-type": [ {
        "mask-type": ["alpha",
        "luminance"]
      }],
      "mask-image": [ {
        mask: ["none",
        at,
        nt]
      }],
      filter: [ {
        filter: ["",
        "none",
        at,
        nt]
      }],
      blur: [ {
        blur: vt()
      }],
      brightness: [ {
        brightness: [St,
        at,
        nt]
      }],
      contrast: [ {
        contrast: [St,
        at,
        nt]
      }],
      "drop-shadow": [ {
        "drop-shadow": ["",
        "none",
        w,
        yl,
        gl]
      }],
      "drop-shadow-color": [ {
        "drop-shadow": H()
      }],
      grayscale: [ {
        grayscale: ["",
        St,
        at,
        nt]
      }],
      "hue-rotate": [ {
        "hue-rotate": [St,
        at,
        nt]
      }],
      invert: [ {
        invert: ["",
        St,
        at,
        nt]
      }],
      saturate: [ {
        saturate: [St,
        at,
        nt]
      }],
      sepia: [ {
        sepia: ["",
        St,
        at,
        nt]
      }],
      "backdrop-filter": [ {
        "backdrop-filter": ["",
        "none",
        at,
        nt]
      }],
      "backdrop-blur": [ {
        "backdrop-blur": vt()
      }],
      "backdrop-brightness": [ {
        "backdrop-brightness": [St,
        at,
        nt]
      }],
      "backdrop-contrast": [ {
        "backdrop-contrast": [St,
        at,
        nt]
      }],
      "backdrop-grayscale": [ {
        "backdrop-grayscale": ["",
        St,
        at,
        nt]
      }],
      "backdrop-hue-rotate": [ {
        "backdrop-hue-rotate": [St,
        at,
        nt]
      }],
      "backdrop-invert": [ {
        "backdrop-invert": ["",
        St,
        at,
        nt]
      }],
      "backdrop-opacity": [ {
        "backdrop-opacity": [St,
        at,
        nt]
      }],
      "backdrop-saturate": [ {
        "backdrop-saturate": [St,
        at,
        nt]
      }],
      "backdrop-sepia": [ {
        "backdrop-sepia": ["",
        St,
        at,
        nt]
      }],
      "border-collapse": [ {
        border: ["collapse",
        "separate"]
      }],
      "border-spacing": [ {
        "border-spacing": X()
      }],
      "border-spacing-x": [ {
        "border-spacing-x": X()
      }],
      "border-spacing-y": [ {
        "border-spacing-y": X()
      }],
      "table-layout": [ {
        table: ["auto",
        "fixed"]
      }],
      caption: [ {
        caption: ["top",
        "bottom"]
      }],
      transition: [ {
        transition: ["",
        "all",
        "colors",
        "opacity",
        "shadow",
        "transform",
        "none",
        at,
        nt]
      }],
      "transition-behavior": [ {
        transition: ["normal",
        "discrete"]
      }],
      duration: [ {
        duration: [St,
        "initial",
        at,
        nt]
      }],
      ease: [ {
        ease: ["linear",
        "initial",
        D,
        at,
        nt]
      }],
      delay: [ {
        delay: [St,
        at,
        nt]
      }],
      animate: [ {
        animate: ["none",
        B,
        at,
        nt]
      }],
      backface: [ {
        backface: ["hidden",
        "visible"]
      }],
      perspective: [ {
        perspective: [A,
        at,
        nt]
      }],
      "perspective-origin": [ {
        "perspective-origin": Q()
      }],
      rotate: [ {
        rotate: Mt()
      }],
      "rotate-x": [ {
        "rotate-x": Mt()
      }],
      "rotate-y": [ {
        "rotate-y": Mt()
      }],
      "rotate-z": [ {
        "rotate-z": Mt()
      }],
      scale: [ {
        scale: Ee()
      }],
      "scale-x": [ {
        "scale-x": Ee()
      }],
      "scale-y": [ {
        "scale-y": Ee()
      }],
      "scale-z": [ {
        "scale-z": Ee()
      }],
      "scale-3d": ["scale-3d"],
      skew: [ {
        skew: Pe()
      }],
      "skew-x": [ {
        "skew-x": Pe()
      }],
      "skew-y": [ {
        "skew-y": Pe()
      }],
      transform: [ {
        transform: [at,
        nt,
        "",
        "none",
        "gpu",
        "cpu"]
      }],
      "transform-origin": [ {
        origin: Q()
      }],
      "transform-style": [ {
        transform: ["3d",
        "flat"]
      }],
      translate: [ {
        translate: we()
      }],
      "translate-x": [ {
        "translate-x": we()
      }],
      "translate-y": [ {
        "translate-y": we()
      }],
      "translate-z": [ {
        "translate-z": we()
      }],
      "translate-none": ["translate-none"],
      accent: [ {
        accent: H()
      }],
      appearance: [ {
        appearance: ["none",
        "auto"]
      }],
      "caret-color": [ {
        caret: H()
      }],
      "color-scheme": [ {
        scheme: ["normal",
        "dark",
        "light",
        "light-dark",
        "only-dark",
        "only-light"]
      }],
      cursor: [ {
        cursor: ["auto",
        "default",
        "pointer",
        "wait",
        "text",
        "move",
        "help",
        "not-allowed",
        "none",
        "context-menu",
        "progress",
        "cell",
        "crosshair",
        "vertical-text",
        "alias",
        "copy",
        "no-drop",
        "grab",
        "grabbing",
        "all-scroll",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "nw-resize",
        "se-resize",
        "sw-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "zoom-in",
        "zoom-out",
        at,
        nt]
      }],
      "field-sizing": [ {
        "field-sizing": ["fixed",
        "content"]
      }],
      "pointer-events": [ {
        "pointer-events": ["auto",
        "none"]
      }],
      resize: [ {
        resize: ["none",
        "",
        "y",
        "x"]
      }],
      "scroll-behavior": [ {
        scroll: ["auto",
        "smooth"]
      }],
      "scroll-m": [ {
        "scroll-m": X()
      }],
      "scroll-mx": [ {
        "scroll-mx": X()
      }],
      "scroll-my": [ {
        "scroll-my": X()
      }],
      "scroll-ms": [ {
        "scroll-ms": X()
      }],
      "scroll-me": [ {
        "scroll-me": X()
      }],
      "scroll-mt": [ {
        "scroll-mt": X()
      }],
      "scroll-mr": [ {
        "scroll-mr": X()
      }],
      "scroll-mb": [ {
        "scroll-mb": X()
      }],
      "scroll-ml": [ {
        "scroll-ml": X()
      }],
      "scroll-p": [ {
        "scroll-p": X()
      }],
      "scroll-px": [ {
        "scroll-px": X()
      }],
      "scroll-py": [ {
        "scroll-py": X()
      }],
      "scroll-ps": [ {
        "scroll-ps": X()
      }],
      "scroll-pe": [ {
        "scroll-pe": X()
      }],
      "scroll-pt": [ {
        "scroll-pt": X()
      }],
      "scroll-pr": [ {
        "scroll-pr": X()
      }],
      "scroll-pb": [ {
        "scroll-pb": X()
      }],
      "scroll-pl": [ {
        "scroll-pl": X()
      }],
      "snap-align": [ {
        snap: ["start",
        "end",
        "center",
        "align-none"]
      }],
      "snap-stop": [ {
        snap: ["normal",
        "always"]
      }],
      "snap-type": [ {
        snap: ["none",
        "x",
        "y",
        "both"]
      }],
      "snap-strictness": [ {
        snap: ["mandatory",
        "proximity"]
      }],
      touch: [ {
        touch: ["auto",
        "none",
        "manipulation"]
      }],
      "touch-x": [ {
        "touch-pan": ["x",
        "left",
        "right"]
      }],
      "touch-y": [ {
        "touch-pan": ["y",
        "up",
        "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [ {
        select: ["none",
        "text",
        "all",
        "auto"]
      }],
      "will-change": [ {
        "will-change": ["auto",
        "scroll",
        "contents",
        "transform",
        at,
        nt]
      }],
      fill: [ {
        fill: ["none",
        ...H()]
      }],
      "stroke-w": [ {
        stroke: [St,
        Mo,
        fi,
        qf]
      }],
      stroke: [ {
        stroke: ["none",
        ...H()]
      }],
      "forced-color-adjust": [ {
        "forced-color-adjust": ["auto",
        "none"]
      }]
    },
    conflictingClassGroups:  {
      overflow: ["overflow-x",
      "overflow-y"],
      overscroll: ["overscroll-x",
      "overscroll-y"],
      inset: ["inset-x",
      "inset-y",
      "start",
      "end",
      "top",
      "right",
      "bottom",
      "left"],
      "inset-x": ["right",
      "left"],
      "inset-y": ["top",
      "bottom"],
      flex: ["basis",
      "grow",
      "shrink"],
      gap: ["gap-x",
      "gap-y"],
      p: ["px",
      "py",
      "ps",
      "pe",
      "pt",
      "pr",
      "pb",
      "pl"],
      px: ["pr",
      "pl"],
      py: ["pt",
      "pb"],
      m: ["mx",
      "my",
      "ms",
      "me",
      "mt",
      "mr",
      "mb",
      "ml"],
      mx: ["mr",
      "ml"],
      my: ["mt",
      "mb"],
      size: ["w",
      "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal",
      "fvn-slashed-zero",
      "fvn-figure",
      "fvn-spacing",
      "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display",
      "overflow"],
      rounded: ["rounded-s",
      "rounded-e",
      "rounded-t",
      "rounded-r",
      "rounded-b",
      "rounded-l",
      "rounded-ss",
      "rounded-se",
      "rounded-ee",
      "rounded-es",
      "rounded-tl",
      "rounded-tr",
      "rounded-br",
      "rounded-bl"],
      "rounded-s": ["rounded-ss",
      "rounded-es"],
      "rounded-e": ["rounded-se",
      "rounded-ee"],
      "rounded-t": ["rounded-tl",
      "rounded-tr"],
      "rounded-r": ["rounded-tr",
      "rounded-br"],
      "rounded-b": ["rounded-br",
      "rounded-bl"],
      "rounded-l": ["rounded-tl",
      "rounded-bl"],
      "border-spacing": ["border-spacing-x",
      "border-spacing-y"],
      "border-w": ["border-w-x",
      "border-w-y",
      "border-w-s",
      "border-w-e",
      "border-w-t",
      "border-w-r",
      "border-w-b",
      "border-w-l"],
      "border-w-x": ["border-w-r",
      "border-w-l"],
      "border-w-y": ["border-w-t",
      "border-w-b"],
      "border-color": ["border-color-x",
      "border-color-y",
      "border-color-s",
      "border-color-e",
      "border-color-t",
      "border-color-r",
      "border-color-b",
      "border-color-l"],
      "border-color-x": ["border-color-r",
      "border-color-l"],
      "border-color-y": ["border-color-t",
      "border-color-b"],
      translate: ["translate-x",
      "translate-y",
      "translate-none"],
      "translate-none": ["translate",
      "translate-x",
      "translate-y",
      "translate-z"],
      "scroll-m": ["scroll-mx",
      "scroll-my",
      "scroll-ms",
      "scroll-me",
      "scroll-mt",
      "scroll-mr",
      "scroll-mb",
      "scroll-ml"],
      "scroll-mx": ["scroll-mr",
      "scroll-ml"],
      "scroll-my": ["scroll-mt",
      "scroll-mb"],
      "scroll-p": ["scroll-px",
      "scroll-py",
      "scroll-ps",
      "scroll-pe",
      "scroll-pt",
      "scroll-pr",
      "scroll-pb",
      "scroll-pl"],
      "scroll-px": ["scroll-pr",
      "scroll-pl"],
      "scroll-py": ["scroll-pt",
      "scroll-pb"],
      touch: ["touch-x",
      "touch-y",
      "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers:  {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*",
    "**",
    "after",
    "backdrop",
    "before",
    "details-content",
    "file",
    "first-letter",
    "first-line",
    "marker",
    "placeholder",
    "selection"]
  }
},
z5 = d5(O5);
function Zo(...n) {
  return z5(A1(n))
}
const _5 = XR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
 {
  variants:  {
    variant:  {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size:  {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants:  {
    variant: "default",
    size: "default"
  }
});
function zo( {
  className: n,
  variant: a = "default",
  size: s = "default",
  asChild: r =  ! 1,
  ...l
}) {
  const f = r ? UR: "button";
  return x.jsx(f,
   {
    "code-path": "src/components/ui/button.tsx:52:5",
    "data-slot": "button",
    "data-variant": a,
    "data-size": s,
    className: Zo(_5( {
      variant: a,
      size: s,
      className: n
    })),
    ...l
  })
}
function Ba(n,
a,
 {
  checkForDefaultPrevented: s =  ! 0
}
 =  {
}) {
  return function(l) {
    if(n ?. (l),
    s ===  ! 1 ||  ! l.defaultPrevented) return a ?. (l)
  }
}
function L5(n,
a) {
  const s = S.createContext(a),
  r = f =>  {
    const {
      children: d,
      ...h
    }
     = f,
    g = S.useMemo(() => h,
    Object.values(h));
    return x.jsx(s.Provider,
     {
      value: g,
      children: d
    })
  };
  r.displayName = n + "Provider";
  function l(f) {
    const d = S.useContext(s);
    if(d) return d;
    if(a !== void 0) return a;
    throw new Error(`\`${f}\` must be used within \`${n}\``)
  }
  return[r,
  l]
}
function V5(n,
a = []) {
  let s = [];
  function r(f,
  d) {
    const h = S.createContext(d),
    g = s.length;
    s = [...s,
    d];
    const m = p =>  {
      const {
        scope: E,
        children: w,
        ...M
      }
       = p,
      A = E ?. [n] ?. [g] || h,
      C = S.useMemo(() => M,
      Object.values(M));
      return x.jsx(A.Provider,
       {
        value: C,
        children: w
      })
    };
    m.displayName = f + "Provider";
    function v(p,
    E) {
      const w = E ?. [n] ?. [g] || h,
      M = S.useContext(w);
      if(M) return M;
      if(d !== void 0) return d;
      throw new Error(`\`${p}\` must be used within \`${f}\``)
    }
    return[m,
    v]
  }
  const l = () =>  {
    const f = s.map(d => S.createContext(d));
    return function(h) {
      const g = h ?. [n] || f;
      return S.useMemo(() => ( {
        [`__scope${n}`]:  {
          ...h,
          [n]: g
        }
      }),
      [h,
      g])
    }
  };
  return l.scopeName = n,
  [r,
  B5(l,
  ...a)]
}
function B5(...n) {
  const a = n[0];
  if(n.length === 1) return a;
  const s = () =>  {
    const r = n.map(l => ( {
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function(f) {
      const d = r.reduce((h,
       {
        useScope: g,
        scopeName: m
      }) =>  {
        const p = g(f)[`__scope${m}`];
        return {
          ...h,
          ...p
        }
      },
       {
      });
      return S.useMemo(() => ( {
        [`__scope${a.scopeName}`]: d
      }),
      [d])
    }
  };
  return s.scopeName = a.scopeName,
  s
}
var Uo = globalThis ?. document ? S.useLayoutEffect: () =>  {
},
k5 = jd[" useId ".trim().toString()] || (() =>  {
}),
U5 = 0;
function Xf(n) {
  const[a,
  s] = S.useState(k5());
  return Uo(() =>  {
    s(r => r ?? String(U5++))
  },
  [n]),
  n || (a ? `radix-${a}`: "")
}
var H5 = jd[" useInsertionEffect ".trim().toString()] || Uo;
function P5( {
  prop: n,
  defaultProp: a,
  onChange: s = () =>  {
  },
  caller: r
}) {
  const[l,
  f,
  d] = Y5( {
    defaultProp: a,
    onChange: s
  }),
  h = n !== void 0,
  g = h ? n: l;
   {
    const v = S.useRef(n !== void 0);
    S.useEffect(() =>  {
      const p = v.current;
      p !== h && console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
      v.current = h
    },
    [h,
    r])
  }
  const m = S.useCallback(v =>  {
    if(h) {
      const p = G5(v) ? v(n): v;
      p !== n && d.current ?. (p)
    }
    else f(v)
  },
  [h,
  n,
  f,
  d]);
  return[g,
  m]
}
function Y5( {
  defaultProp: n,
  onChange: a
}) {
  const[s,
  r] = S.useState(n),
  l = S.useRef(s),
  f = S.useRef(a);
  return H5(() =>  {
    f.current = a
  },
  [a]),
  S.useEffect(() =>  {
    l.current !== s && (f.current ?. (s),
    l.current = s)
  },
  [s,
  l]),
  [s,
  r,
  f]
}
function G5(n) {
  return typeof n == "function"
}
function q5(n) {
  const a = X5(n),
  s = S.forwardRef((r,
  l) =>  {
    const {
      children: f,
      ...d
    }
     = r,
    h = S.Children.toArray(f),
    g = h.find(F5);
    if(g) {
      const m = g.props.children,
      v = h.map(p => p === g ? S.Children.count(m) > 1 ? S.Children.only(null): S.isValidElement(m) ? m.props.children: null: p);
      return x.jsx(a,
       {
        ...d,
        ref: l,
        children: S.isValidElement(m) ? S.cloneElement(m,
        void 0,
        v): null
      })
    }
    return x.jsx(a,
     {
      ...d,
      ref: l,
      children: f
    })
  });
  return s.displayName = `${n}.Slot`,
  s
}
function X5(n) {
  const a = S.forwardRef((s,
  r) =>  {
    const {
      children: l,
      ...f
    }
     = s;
    if(S.isValidElement(l)) {
      const d = Q5(l),
      h = Z5(f,
      l.props);
      return l.type !== S.Fragment && (h.ref = r ? ec(r,
      d): d),
      S.cloneElement(l,
      h)
    }
    return S.Children.count(l) > 1 ? S.Children.only(null): null
  });
  return a.displayName = `${n}.SlotClone`,
  a
}
var K5 = Symbol("radix.slottable");
function F5(n) {
  return S.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === K5
}
function Z5(n,
a) {
  const s =  {
    ...a
  };
  for(const r in a) {
    const l = n[r],
    f = a[r];
    /^on[A-Z]/.test(r) ? l && f ? s[r] = (...h) =>  {
      const g = f(...h);
      return l(...h),
      g
    }: l && (s[r] = l): r === "style" ? s[r] =  {
      ...l,
      ...f
    }: r === "className" && (s[r] = [l,
    f].filter(Boolean).join(" "))
  }
  return {
    ...n,
    ...s
  }
}
function Q5(n) {
  let a = Object.getOwnPropertyDescriptor(n.props,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning;
  return s ? n.ref: (a = Object.getOwnPropertyDescriptor(n,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning,
  s ? n.props.ref: n.props.ref || n.ref)
}
var W5 = ["a",
"button",
"div",
"form",
"h2",
"h3",
"img",
"input",
"label",
"li",
"nav",
"ol",
"p",
"select",
"span",
"svg",
"ul"],
sa = W5.reduce((n,
a) =>  {
  const s = q5(`Primitive.${a}`),
  r = S.forwardRef((l,
  f) =>  {
    const {
      asChild: d,
      ...h
    }
     = l,
    g = d ? s: a;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] =  ! 0),
    x.jsx(g,
     {
      ...h,
      ref: f
    })
  });
  return r.displayName = `Primitive.${a}`,
   {
    ...n,
    [a]: r
  }
},
 {
});
function J5(n,
a) {
  n && D0.flushSync(() => n.dispatchEvent(a))
}
function Ho(n) {
  const a = S.useRef(n);
  return S.useEffect(() =>  {
    a.current = n
  }),
  S.useMemo(() => (...s) => a.current ?. (...s),
  [])
}
function $5(n,
a = globalThis ?. document) {
  const s = Ho(n);
  S.useEffect(() =>  {
    const r = l =>  {
      l.key === "Escape" && s(l)
    };
    return a.addEventListener("keydown",
    r,
     {
      capture:  ! 0
    }),
    () => a.removeEventListener("keydown",
    r,
     {
      capture:  ! 0
    })
  },
  [s,
  a])
}
var I5 = "DismissableLayer",
Rd = "dismissableLayer.update",
t4 = "dismissableLayer.pointerDownOutside",
e4 = "dismissableLayer.focusOutside",
Wv,
B1 = S.createContext( {
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}),
k1 = S.forwardRef((n,
a) =>  {
  const {
    disableOutsidePointerEvents: s =  ! 1,
    onEscapeKeyDown: r,
    onPointerDownOutside: l,
    onFocusOutside: f,
    onInteractOutside: d,
    onDismiss: h,
    ...g
  }
   = n,
  m = S.useContext(B1),
  [v,
  p] = S.useState(null),
  E = v ?. ownerDocument ?? globalThis ?. document,
  [,
  w] = S.useState( {
  }),
  M = bi(a,
  F => p(F)),
  A = Array.from(m.layers),
  [C] = [...m.layersWithOutsidePointerEventsDisabled].slice( - 1),
  D = A.indexOf(C),
  B = v ? A.indexOf(v):  - 1,
  L = m.layersWithOutsidePointerEventsDisabled.size > 0,
  q = B >= D,
  Q = i4(F =>  {
    const X = F.target,
    rt = [...m.branches].some(tt => tt.contains(X));
     ! q || rt || (l ?. (F),
    d ?. (F),
    F.defaultPrevented || h ?. ())
  },
  E),
  $ = s4(F =>  {
    const X = F.target;
    [...m.branches].some(tt => tt.contains(X)) || (f ?. (F),
    d ?. (F),
    F.defaultPrevented || h ?. ())
  },
  E);
  return $5(F =>  {
    B === m.layers.size - 1 && (r ?. (F),
     ! F.defaultPrevented && h && (F.preventDefault(),
    h()))
  },
  E),
  S.useEffect(() =>  {
    if(v) return s && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Wv = E.body.style.pointerEvents,
    E.body.style.pointerEvents = "none"),
    m.layersWithOutsidePointerEventsDisabled.add(v)),
    m.layers.add(v),
    Jv(),
    () =>  {
      s && m.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Wv)
    }
  },
  [v,
  E,
  s,
  m]),
  S.useEffect(() => () =>  {
    v && (m.layers.delete(v),
    m.layersWithOutsidePointerEventsDisabled.delete(v),
    Jv())
  },
  [v,
  m]),
  S.useEffect(() =>  {
    const F = () => w( {
    });
    return document.addEventListener(Rd,
    F),
    () => document.removeEventListener(Rd,
    F)
  },
  []),
  x.jsx(sa.div,
   {
    ...g,
    ref: M,
    style:  {
      pointerEvents: L ? q ? "auto": "none": void 0,
      ...n.style
    },
    onFocusCapture: Ba(n.onFocusCapture,
    $.onFocusCapture),
    onBlurCapture: Ba(n.onBlurCapture,
    $.onBlurCapture),
    onPointerDownCapture: Ba(n.onPointerDownCapture,
    Q.onPointerDownCapture)
  })
});
k1.displayName = I5;
var n4 = "DismissableLayerBranch",
a4 = S.forwardRef((n,
a) =>  {
  const s = S.useContext(B1),
  r = S.useRef(null),
  l = bi(a,
  r);
  return S.useEffect(() =>  {
    const f = r.current;
    if(f) return s.branches.add(f),
    () =>  {
      s.branches.delete(f)
    }
  },
  [s.branches]),
  x.jsx(sa.div,
   {
    ...n,
    ref: l
  })
});
a4.displayName = n4;
function i4(n,
a = globalThis ?. document) {
  const s = Ho(n),
  r = S.useRef( ! 1),
  l = S.useRef(() =>  {
  });
  return S.useEffect(() =>  {
    const f = h =>  {
      if(h.target &&  ! r.current) {
        let g = function() {
          U1(t4,
          s,
          m,
           {
            discrete:  ! 0
          })
        };
        const m =  {
          originalEvent: h
        };
        h.pointerType === "touch" ? (a.removeEventListener("click",
        l.current),
        l.current = g,
        a.addEventListener("click",
        l.current,
         {
          once:  ! 0
        })): g()
      }
      else a.removeEventListener("click",
      l.current);
      r.current =  ! 1
    },
    d = window.setTimeout(() =>  {
      a.addEventListener("pointerdown",
      f)
    },
    0);
    return() =>  {
      window.clearTimeout(d),
      a.removeEventListener("pointerdown",
      f),
      a.removeEventListener("click",
      l.current)
    }
  },
  [a,
  s]),
   {
    onPointerDownCapture: () => r.current =  ! 0
  }
}
function s4(n,
a = globalThis ?. document) {
  const s = Ho(n),
  r = S.useRef( ! 1);
  return S.useEffect(() =>  {
    const l = f =>  {
      f.target &&  ! r.current && U1(e4,
      s,
       {
        originalEvent: f
      },
       {
        discrete:  ! 1
      })
    };
    return a.addEventListener("focusin",
    l),
    () => a.removeEventListener("focusin",
    l)
  },
  [a,
  s]),
   {
    onFocusCapture: () => r.current =  ! 0,
    onBlurCapture: () => r.current =  ! 1
  }
}
function Jv() {
  const n = new CustomEvent(Rd);
  document.dispatchEvent(n)
}
function U1(n,
a,
s,
 {
  discrete: r
}) {
  const l = s.originalEvent.target,
  f = new CustomEvent(n,
   {
    bubbles:  ! 1,
    cancelable:  ! 0,
    detail: s
  });
  a && l.addEventListener(n,
  a,
   {
    once:  ! 0
  }),
  r ? J5(l,
  f): l.dispatchEvent(f)
}
var Kf = "focusScope.autoFocusOnMount",
Ff = "focusScope.autoFocusOnUnmount",
$v =  {
  bubbles:  ! 1,
  cancelable:  ! 0
},
o4 = "FocusScope",
H1 = S.forwardRef((n,
a) =>  {
  const {
    loop: s =  ! 1,
    trapped: r =  ! 1,
    onMountAutoFocus: l,
    onUnmountAutoFocus: f,
    ...d
  }
   = n,
  [h,
  g] = S.useState(null),
  m = Ho(l),
  v = Ho(f),
  p = S.useRef(null),
  E = bi(a,
  A => g(A)),
  w = S.useRef( {
    paused:  ! 1,
    pause() {
      this.paused =  ! 0
    },
    resume() {
      this.paused =  ! 1
    }
  }).current;
  S.useEffect(() =>  {
    if(r) {
      let A = function(L) {
        if(w.paused ||  ! h) return;
        const q = L.target;
        h.contains(q) ? p.current = q: La(p.current,
         {
          select:  ! 0
        })
      },
      C = function(L) {
        if(w.paused ||  ! h) return;
        const q = L.relatedTarget;
        q !== null && (h.contains(q) || La(p.current,
         {
          select:  ! 0
        }))
      },
      D = function(L) {
        if(document.activeElement === document.body) for(const Q of L) Q.removedNodes.length > 0 && La(h)
      };
      document.addEventListener("focusin",
      A),
      document.addEventListener("focusout",
      C);
      const B = new MutationObserver(D);
      return h && B.observe(h,
       {
        childList:  ! 0,
        subtree:  ! 0
      }),
      () =>  {
        document.removeEventListener("focusin",
        A),
        document.removeEventListener("focusout",
        C),
        B.disconnect()
      }
    }
  },
  [r,
  h,
  w.paused]),
  S.useEffect(() =>  {
    if(h) {
      t0.add(w);
      const A = document.activeElement;
      if( ! h.contains(A)) {
        const D = new CustomEvent(Kf,
        $v);
        h.addEventListener(Kf,
        m),
        h.dispatchEvent(D),
        D.defaultPrevented || (r4(d4(P1(h)),
         {
          select:  ! 0
        }),
        document.activeElement === A && La(h))
      }
      return() =>  {
        h.removeEventListener(Kf,
        m),
        setTimeout(() =>  {
          const D = new CustomEvent(Ff,
          $v);
          h.addEventListener(Ff,
          v),
          h.dispatchEvent(D),
          D.defaultPrevented || La(A ?? document.body,
           {
            select:  ! 0
          }),
          h.removeEventListener(Ff,
          v),
          t0.remove(w)
        },
        0)
      }
    }
  },
  [h,
  m,
  v,
  w]);
  const M = S.useCallback(A =>  {
    if( ! s &&  ! r || w.paused) return;
    const C = A.key === "Tab" &&  ! A.altKey &&  ! A.ctrlKey &&  ! A.metaKey,
    D = document.activeElement;
    if(C && D) {
      const B = A.currentTarget,
      [L,
      q] = l4(B);
      L && q ?  ! A.shiftKey && D === q ? (A.preventDefault(),
      s && La(L,
       {
        select:  ! 0
      })): A.shiftKey && D === L && (A.preventDefault(),
      s && La(q,
       {
        select:  ! 0
      })): D === B && A.preventDefault()
    }
  },
  [s,
  r,
  w.paused]);
  return x.jsx(sa.div,
   {
    tabIndex:  - 1,
    ...d,
    ref: E,
    onKeyDown: M
  })
});
H1.displayName = o4;
function r4(n,
 {
  select: a =  ! 1
}
 =  {
}) {
  const s = document.activeElement;
  for(const r of n) if(La(r,
   {
    select: a
  }),
  document.activeElement !== s) return
}
function l4(n) {
  const a = P1(n),
  s = Iv(a,
  n),
  r = Iv(a.reverse(),
  n);
  return[s,
  r]
}
function P1(n) {
  const a = [],
  s = document.createTreeWalker(n,
  NodeFilter.SHOW_ELEMENT,
   {
    acceptNode: r =>  {
      const l = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || l ? NodeFilter.FILTER_SKIP: r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP
    }
  });
  for(; s.nextNode();
  ) a.push(s.currentNode);
  return a
}
function Iv(n,
a) {
  for(const s of n) if( ! c4(s,
   {
    upTo: a
  })) return s
}
function c4(n,
 {
  upTo: a
}) {
  if(getComputedStyle(n).visibility === "hidden") return ! 0;
  for(; n; ) {
    if(a !== void 0 && n === a) return ! 1;
    if(getComputedStyle(n).display === "none") return ! 0;
    n = n.parentElement
  }
  return ! 1
}
function u4(n) {
  return n instanceof HTMLInputElement && "select" in n
}
function La(n,
 {
  select: a =  ! 1
}
 =  {
}) {
  if(n && n.focus) {
    const s = document.activeElement;
    n.focus( {
      preventScroll:  ! 0
    }),
    n !== s && u4(n) && a && n.select()
  }
}
var t0 = f4();
function f4() {
  let n = [];
  return {
    add(a) {
      const s = n[0];
      a !== s && s ?. pause(),
      n = e0(n,
      a),
      n.unshift(a)
    },
    remove(a) {
      n = e0(n,
      a),
      n[0] ?. resume()
    }
  }
}
function e0(n,
a) {
  const s = [...n],
  r = s.indexOf(a);
  return r !==  - 1 && s.splice(r,
  1),
  s
}
function d4(n) {
  return n.filter(a => a.tagName !== "A")
}
var h4 = "Portal",
Y1 = S.forwardRef((n,
a) =>  {
  const {
    container: s,
    ...r
  }
   = n,
  [l,
  f] = S.useState( ! 1);
  Uo(() => f( ! 0),
  []);
  const d = s || l && globalThis ?. document ?. body;
  return d ? j0.createPortal(x.jsx(sa.div,
   {
    ...r,
    ref: a
  }),
  d): null
});
Y1.displayName = h4;
function m4(n,
a) {
  return S.useReducer((s,
  r) => a[s][r] ?? s,
  n)
}
var nc = n =>  {
  const {
    present: a,
    children: s
  }
   = n,
  r = p4(a),
  l = typeof s == "function" ? s( {
    present: r.isPresent
  }): S.Children.only(s),
  f = bi(r.ref,
  g4(l));
  return typeof s == "function" || r.isPresent ? S.cloneElement(l,
   {
    ref: f
  }): null
};
nc.displayName = "Presence";
function p4(n) {
  const[a,
  s] = S.useState(),
  r = S.useRef(null),
  l = S.useRef(n),
  f = S.useRef("none"),
  d = n ? "mounted": "unmounted",
  [h,
  g] = m4(d,
   {
    mounted:  {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended:  {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted:  {
      MOUNT: "mounted"
    }
  });
  return S.useEffect(() =>  {
    const m = vl(r.current);
    f.current = h === "mounted" ? m: "none"
  },
  [h]),
  Uo(() =>  {
    const m = r.current,
    v = l.current;
    if(v !== n) {
      const E = f.current,
      w = vl(m);
      n ? g("MOUNT"): w === "none" || m ?. display === "none" ? g("UNMOUNT"): g(v && E !== w ? "ANIMATION_OUT": "UNMOUNT"),
      l.current = n
    }
  },
  [n,
  g]),
  Uo(() =>  {
    if(a) {
      let m;
      const v = a.ownerDocument.defaultView ?? window,
      p = w =>  {
        const A = vl(r.current).includes(CSS.escape(w.animationName));
        if(w.target === a && A && (g("ANIMATION_END"),
         ! l.current)) {
          const C = a.style.animationFillMode;
          a.style.animationFillMode = "forwards",
          m = v.setTimeout(() =>  {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = C)
          })
        }
      },
      E = w =>  {
        w.target === a && (f.current = vl(r.current))
      };
      return a.addEventListener("animationstart",
      E),
      a.addEventListener("animationcancel",
      p),
      a.addEventListener("animationend",
      p),
      () =>  {
        v.clearTimeout(m),
        a.removeEventListener("animationstart",
        E),
        a.removeEventListener("animationcancel",
        p),
        a.removeEventListener("animationend",
        p)
      }
    }
    else g("ANIMATION_END")
  },
  [a,
  g]),
   {
    isPresent: ["mounted",
    "unmountSuspended"].includes(h),
    ref: S.useCallback(m =>  {
      r.current = m ? getComputedStyle(m): null,
      s(m)
    },
    [])
  }
}
function vl(n) {
  return n ?. animationName || "none"
}
function g4(n) {
  let a = Object.getOwnPropertyDescriptor(n.props,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning;
  return s ? n.ref: (a = Object.getOwnPropertyDescriptor(n,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning,
  s ? n.props.ref: n.props.ref || n.ref)
}
var Zf = 0;
function y4() {
  S.useEffect(() =>  {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin",
    n[0] ?? n0()),
    document.body.insertAdjacentElement("beforeend",
    n[1] ?? n0()),
    Zf++,
    () =>  {
      Zf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(a => a.remove()),
      Zf--
    }
  },
  [])
}
function n0() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard",
  ""),
  n.tabIndex = 0,
  n.style.outline = "none",
  n.style.opacity = "0",
  n.style.position = "fixed",
  n.style.pointerEvents = "none",
  n
}
var Dn = function() {
  return Dn = Object.assign || function(a) {
    for(var s,
    r = 1,
    l = arguments.length; r < l; r++) {
      s = arguments[r];
      for(var f in s) Object.prototype.hasOwnProperty.call(s,
      f) && (a[f] = s[f])
    }
    return a
  },
  Dn.apply(this,
  arguments)
};
function G1(n,
a) {
  var s =  {
  };
  for(var r in n) Object.prototype.hasOwnProperty.call(n,
  r) && a.indexOf(r) < 0 && (s[r] = n[r]);
  if(n != null && typeof Object.getOwnPropertySymbols == "function") for(var l = 0,
  r = Object.getOwnPropertySymbols(n);
  l < r.length;
  l++) a.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n,
  r[l]) && (s[r[l]] = n[r[l]]);
  return s
}
function v4(n,
a,
s) {
  if(s || arguments.length === 2) for(var r = 0,
  l = a.length,
  f; r < l; r++)(f ||  ! (r in a)) && (f || (f = Array.prototype.slice.call(a,
  0,
  r)),
  f[r] = a[r]);
  return n.concat(f || Array.prototype.slice.call(a))
}
var _l = "right-scroll-bar-position",
Ll = "width-before-scroll-bar",
x4 = "with-scroll-bars-hidden",
b4 = "--removed-body-scroll-bar-size";
function Qf(n,
a) {
  return typeof n == "function" ? n(a): n && (n.current = a),
  n
}
function S4(n,
a) {
  var s = S.useState(function() {
    return {
      value: n,
      callback: a,
      facade:  {
        get current() {
          return s.value
        },
        set current(r) {
          var l = s.value;
          l !== r && (s.value = r,
          s.callback(r,
          l))
        }
      }
    }
  })[0];
  return s.callback = a,
  s.facade
}
var E4 = typeof window < "u" ? S.useLayoutEffect: S.useEffect,
a0 = new WeakMap;
function w4(n,
a) {
  var s = S4(null,
  function(r) {
    return n.forEach(function(l) {
      return Qf(l,
      r)
    })
  });
  return E4(function() {
    var r = a0.get(s);
    if(r) {
      var l = new Set(r),
      f = new Set(n),
      d = s.current;
      l.forEach(function(h) {
        f.has(h) || Qf(h,
        null)
      }),
      f.forEach(function(h) {
        l.has(h) || Qf(h,
        d)
      })
    }
    a0.set(s,
    n)
  },
  [n]),
  s
}
function A4(n) {
  return n
}
function T4(n,
a) {
  a === void 0 && (a = A4);
  var s = [],
  r =  ! 1,
  l =  {
    read: function() {
      if(r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return s.length ? s[s.length - 1]: n
    },
    useMedium: function(f) {
      var d = a(f,
      r);
      return s.push(d),
      function() {
        s = s.filter(function(h) {
          return h !== d
        })
      }
    },
    assignSyncMedium: function(f) {
      for(r =  ! 0; s.length; ) {
        var d = s;
        s = [],
        d.forEach(f)
      }
      s =  {
        push: function(h) {
          return f(h)
        },
        filter: function() {
          return s
        }
      }
    },
    assignMedium: function(f) {
      r =  ! 0;
      var d = [];
      if(s.length) {
        var h = s;
        s = [],
        h.forEach(f),
        d = s
      }
      var g = function() {
        var v = d;
        d = [],
        v.forEach(f)
      },
      m = function() {
        return Promise.resolve().then(g)
      };
      m(),
      s =  {
        push: function(v) {
          d.push(v),
          m()
        },
        filter: function(v) {
          return d = d.filter(v),
          s
        }
      }
    }
  };
  return l
}
function C4(n) {
  n === void 0 && (n =  {
  });
  var a = T4(null);
  return a.options = Dn( {
    async:  ! 0,
    ssr:  ! 1
  },
  n),
  a
}
var q1 = function(n) {
  var a = n.sideCar,
  s = G1(n,
  ["sideCar"]);
  if( ! a) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = a.read();
  if( ! r) throw new Error("Sidecar medium not found");
  return S.createElement(r,
  Dn( {
  },
  s))
};
q1.isSideCarExport =  ! 0;
function M4(n,
a) {
  return n.useMedium(a),
  q1
}
var X1 = C4(),
Wf = function() {
},
ac = S.forwardRef(function(n,
a) {
  var s = S.useRef(null),
  r = S.useState( {
    onScrollCapture: Wf,
    onWheelCapture: Wf,
    onTouchMoveCapture: Wf
  }),
  l = r[0],
  f = r[1],
  d = n.forwardProps,
  h = n.children,
  g = n.className,
  m = n.removeScrollBar,
  v = n.enabled,
  p = n.shards,
  E = n.sideCar,
  w = n.noRelative,
  M = n.noIsolation,
  A = n.inert,
  C = n.allowPinchZoom,
  D = n.as,
  B = D === void 0 ? "div": D,
  L = n.gapMode,
  q = G1(n,
  ["forwardProps",
  "children",
  "className",
  "removeScrollBar",
  "enabled",
  "shards",
  "sideCar",
  "noRelative",
  "noIsolation",
  "inert",
  "allowPinchZoom",
  "as",
  "gapMode"]),
  Q = E,
  $ = w4([s,
  a]),
  F = Dn(Dn( {
  },
  q),
  l);
  return S.createElement(S.Fragment,
  null,
  v && S.createElement(Q,
   {
    sideCar: X1,
    removeScrollBar: m,
    shards: p,
    noRelative: w,
    noIsolation: M,
    inert: A,
    setCallbacks: f,
    allowPinchZoom:  !  ! C,
    lockRef: s,
    gapMode: L
  }),
  d ? S.cloneElement(S.Children.only(h),
  Dn(Dn( {
  },
  F),
   {
    ref: $
  })): S.createElement(B,
  Dn( {
  },
  F,
   {
    className: g,
    ref: $
  }),
  h))
});
ac.defaultProps =  {
  enabled:  ! 0,
  removeScrollBar:  ! 0,
  inert:  ! 1
};
ac.classNames =  {
  fullWidth: Ll,
  zeroRight: _l
};
var R4 = function() {
  if(typeof __webpack_nonce__ < "u") return __webpack_nonce__
};
function N4() {
  if( ! document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var a = R4();
  return a && n.setAttribute("nonce",
  a),
  n
}
function D4(n,
a) {
  n.styleSheet ? n.styleSheet.cssText = a: n.appendChild(document.createTextNode(a))
}
function j4(n) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(n)
}
var O4 = function() {
  var n = 0,
  a = null;
  return {
    add: function(s) {
      n == 0 && (a = N4()) && (D4(a,
      s),
      j4(a)),
      n++
    },
    remove: function() {
      n--,
       ! n && a && (a.parentNode && a.parentNode.removeChild(a),
      a = null)
    }
  }
},
z4 = function() {
  var n = O4();
  return function(a,
  s) {
    S.useEffect(function() {
      return n.add(a),
      function() {
        n.remove()
      }
    },
    [a && s])
  }
},
K1 = function() {
  var n = z4(),
  a = function(s) {
    var r = s.styles,
    l = s.dynamic;
    return n(r,
    l),
    null
  };
  return a
},
_4 =  {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
},
Jf = function(n) {
  return parseInt(n || "",
  10) || 0
},
L4 = function(n) {
  var a = window.getComputedStyle(document.body),
  s = a[n === "padding" ? "paddingLeft": "marginLeft"],
  r = a[n === "padding" ? "paddingTop": "marginTop"],
  l = a[n === "padding" ? "paddingRight": "marginRight"];
  return[Jf(s),
  Jf(r),
  Jf(l)]
},
V4 = function(n) {
  if(n === void 0 && (n = "margin"),
  typeof window > "u") return _4;
  var a = L4(n),
  s = document.documentElement.clientWidth,
  r = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0,
    r - s + a[2] - a[0])
  }
},
B4 = K1(),
ys = "data-scroll-locked",
k4 = function(n,
a,
s,
r) {
  var l = n.left,
  f = n.top,
  d = n.right,
  h = n.gap;
  return s === void 0 && (s = "margin"),
  `
  .`.concat(x4,
  ` {
   overflow: hidden `).concat(r,
  `;
   padding-right: `).concat(h,
  "px ").concat(r,
  `;
  }
  body[`).concat(ys,
  `] {
    overflow: hidden `).concat(r,
  `;
    overscroll-behavior: contain;
    `).concat([a && "position: relative ".concat(r,
  ";"),
  s === "margin" && `
    padding-left: `.concat(l,
  `px;
    padding-top: `).concat(f,
  `px;
    padding-right: `).concat(d,
  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h,
  "px ").concat(r,
  `;
    `),
  s === "padding" && "padding-right: ".concat(h,
  "px ").concat(r,
  ";")].filter(Boolean).join(""),
  `
  }

  .`).concat(_l,
  ` {
    right: `).concat(h,
  "px ").concat(r,
  `;
  }

  .`).concat(Ll,
  ` {
    margin-right: `).concat(h,
  "px ").concat(r,
  `;
  }

  .`).concat(_l,
  " .").concat(_l,
  ` {
    right: 0 `).concat(r,
  `;
  }

  .`).concat(Ll,
  " .").concat(Ll,
  ` {
    margin-right: 0 `).concat(r,
  `;
  }

  body[`).concat(ys,
  `] {
    `).concat(b4,
  ": ").concat(h,
  `px;
  }
`)
},
i0 = function() {
  var n = parseInt(document.body.getAttribute(ys) || "0",
  10);
  return isFinite(n) ? n: 0
},
U4 = function() {
  S.useEffect(function() {
    return document.body.setAttribute(ys,
    (i0() + 1).toString()),
    function() {
      var n = i0() - 1;
      n <= 0 ? document.body.removeAttribute(ys): document.body.setAttribute(ys,
      n.toString())
    }
  },
  [])
},
H4 = function(n) {
  var a = n.noRelative,
  s = n.noImportant,
  r = n.gapMode,
  l = r === void 0 ? "margin": r;
  U4();
  var f = S.useMemo(function() {
    return V4(l)
  },
  [l]);
  return S.createElement(B4,
   {
    styles: k4(f,
     ! a,
    l,
    s ? "": "!important")
  })
},
Nd =  ! 1;
if(typeof window < "u") try {
  var xl = Object.defineProperty( {
  },
  "passive",
   {
    get: function() {
      return Nd =  ! 0,
       ! 0
    }
  });
  window.addEventListener("test",
  xl,
  xl),
  window.removeEventListener("test",
  xl,
  xl)
}
catch {
  Nd =  ! 1
}
var us = Nd ?  {
  passive:  ! 1
}:  ! 1,
P4 = function(n) {
  return n.tagName === "TEXTAREA"
},
F1 = function(n,
a) {
  if( ! (n instanceof Element)) return ! 1;
  var s = window.getComputedStyle(n);
  return s[a] !== "hidden" &&  ! (s.overflowY === s.overflowX &&  ! P4(n) && s[a] === "visible")
},
Y4 = function(n) {
  return F1(n,
  "overflowY")
},
G4 = function(n) {
  return F1(n,
  "overflowX")
},
s0 = function(n,
a) {
  var s = a.ownerDocument,
  r = a;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var l = Z1(n,
    r);
    if(l) {
      var f = Q1(n,
      r),
      d = f[1],
      h = f[2];
      if(d > h) return ! 0
    }
    r = r.parentNode
  }
  while(r && r !== s.body);
  return ! 1
},
q4 = function(n) {
  var a = n.scrollTop,
  s = n.scrollHeight,
  r = n.clientHeight;
  return[a,
  s,
  r]
},
X4 = function(n) {
  var a = n.scrollLeft,
  s = n.scrollWidth,
  r = n.clientWidth;
  return[a,
  s,
  r]
},
Z1 = function(n,
a) {
  return n === "v" ? Y4(a): G4(a)
},
Q1 = function(n,
a) {
  return n === "v" ? q4(a): X4(a)
},
K4 = function(n,
a) {
  return n === "h" && a === "rtl" ?  - 1: 1
},
F4 = function(n,
a,
s,
r,
l) {
  var f = K4(n,
  window.getComputedStyle(a).direction),
  d = f * r,
  h = s.target,
  g = a.contains(h),
  m =  ! 1,
  v = d > 0,
  p = 0,
  E = 0;
  do {
    if( ! h) break;
    var w = Q1(n,
    h),
    M = w[0],
    A = w[1],
    C = w[2],
    D = A - C - f * M;
    (M || D) && Z1(n,
    h) && (p += D,
    E += M);
    var B = h.parentNode;
    h = B && B.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? B.host: B
  }
  while( ! g && h !== document.body || g && (a.contains(h) || a === h));
  return(v && Math.abs(p) < 1 ||  ! v && Math.abs(E) < 1) && (m =  ! 0),
  m
},
bl = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX,
  n.changedTouches[0].clientY]: [0,
  0]
},
o0 = function(n) {
  return[n.deltaX,
  n.deltaY]
},
r0 = function(n) {
  return n && "current" in n ? n.current: n
},
Z4 = function(n,
a) {
  return n[0] === a[0] && n[1] === a[1]
},
Q4 = function(n) {
  return `
  .block-interactivity-`.concat(n,
  ` {pointer-events: none;}
  .allow-interactivity-`).concat(n,
  ` {pointer-events: all;}
`)
},
W4 = 0,
fs = [];
function J4(n) {
  var a = S.useRef([]),
  s = S.useRef([0,
  0]),
  r = S.useRef(),
  l = S.useState(W4++)[0],
  f = S.useState(K1)[0],
  d = S.useRef(n);
  S.useEffect(function() {
    d.current = n
  },
  [n]),
  S.useEffect(function() {
    if(n.inert) {
      document.body.classList.add("block-interactivity-".concat(l));
      var A = v4([n.lockRef.current],
      (n.shards || []).map(r0),
       ! 0).filter(Boolean);
      return A.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(l))
      }),
      function() {
        document.body.classList.remove("block-interactivity-".concat(l)),
        A.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(l))
        })
      }
    }
  },
  [n.inert,
  n.lockRef.current,
  n.shards]);
  var h = S.useCallback(function(A,
  C) {
    if("touches" in A && A.touches.length === 2 || A.type === "wheel" && A.ctrlKey) return ! d.current.allowPinchZoom;
    var D = bl(A),
    B = s.current,
    L = "deltaX" in A ? A.deltaX: B[0] - D[0],
    q = "deltaY" in A ? A.deltaY: B[1] - D[1],
    Q,
    $ = A.target,
    F = Math.abs(L) > Math.abs(q) ? "h": "v";
    if("touches" in A && F === "h" && $.type === "range") return ! 1;
    var X = window.getSelection(),
    rt = X && X.anchorNode,
    tt = rt ? rt === $ || rt.contains($):  ! 1;
    if(tt) return ! 1;
    var mt = s0(F,
    $);
    if( ! mt) return ! 0;
    if(mt ? Q = F: (Q = F === "v" ? "h": "v",
    mt = s0(F,
    $)),
     ! mt) return ! 1;
    if( ! r.current && "changedTouches" in A && (L || q) && (r.current = Q),
     ! Q) return ! 0;
    var pt = r.current || Q;
    return F4(pt,
    C,
    A,
    pt === "h" ? L: q)
  },
  []),
  g = S.useCallback(function(A) {
    var C = A;
    if( ! ( ! fs.length || fs[fs.length - 1] !== f)) {
      var D = "deltaY" in C ? o0(C): bl(C),
      B = a.current.filter(function(Q) {
        return Q.name === C.type && (Q.target === C.target || C.target === Q.shadowParent) && Z4(Q.delta,
        D)
      })[0];
      if(B && B.should) {
        C.cancelable && C.preventDefault();
        return
      }
      if( ! B) {
        var L = (d.current.shards || []).map(r0).filter(Boolean).filter(function(Q) {
          return Q.contains(C.target)
        }),
        q = L.length > 0 ? h(C,
        L[0]):  ! d.current.noIsolation;
        q && C.cancelable && C.preventDefault()
      }
    }
  },
  []),
  m = S.useCallback(function(A,
  C,
  D,
  B) {
    var L =  {
      name: A,
      delta: C,
      target: D,
      should: B,
      shadowParent: $4(D)
    };
    a.current.push(L),
    setTimeout(function() {
      a.current = a.current.filter(function(q) {
        return q !== L
      })
    },
    1)
  },
  []),
  v = S.useCallback(function(A) {
    s.current = bl(A),
    r.current = void 0
  },
  []),
  p = S.useCallback(function(A) {
    m(A.type,
    o0(A),
    A.target,
    h(A,
    n.lockRef.current))
  },
  []),
  E = S.useCallback(function(A) {
    m(A.type,
    bl(A),
    A.target,
    h(A,
    n.lockRef.current))
  },
  []);
  S.useEffect(function() {
    return fs.push(f),
    n.setCallbacks( {
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: E
    }),
    document.addEventListener("wheel",
    g,
    us),
    document.addEventListener("touchmove",
    g,
    us),
    document.addEventListener("touchstart",
    v,
    us),
    function() {
      fs = fs.filter(function(A) {
        return A !== f
      }),
      document.removeEventListener("wheel",
      g,
      us),
      document.removeEventListener("touchmove",
      g,
      us),
      document.removeEventListener("touchstart",
      v,
      us)
    }
  },
  []);
  var w = n.removeScrollBar,
  M = n.inert;
  return S.createElement(S.Fragment,
  null,
  M ? S.createElement(f,
   {
    styles: Q4(l)
  }): null,
  w ? S.createElement(H4,
   {
    noRelative: n.noRelative,
    gapMode: n.gapMode
  }): null)
}
function $4(n) {
  for(var a = null; n !== null; ) n instanceof ShadowRoot && (a = n.host,
  n = n.host),
  n = n.parentNode;
  return a
}
const I4 = M4(X1,
J4);
var W1 = S.forwardRef(function(n,
a) {
  return S.createElement(ac,
  Dn( {
  },
  n,
   {
    ref: a,
    sideCar: I4
  }))
});
W1.classNames = ac.classNames;
var tN = function(n) {
  if(typeof document > "u") return null;
  var a = Array.isArray(n) ? n[0]: n;
  return a.ownerDocument.body
},
ds = new WeakMap,
Sl = new WeakMap,
El =  {
},
$f = 0,
J1 = function(n) {
  return n && (n.host || J1(n.parentNode))
},
eN = function(n,
a) {
  return a.map(function(s) {
    if(n.contains(s)) return s;
    var r = J1(s);
    return r && n.contains(r) ? r: (console.error("aria-hidden",
    s,
    "in not contained inside",
    n,
    ". Doing nothing"),
    null)
  }).filter(function(s) {
    return !  ! s
  })
},
nN = function(n,
a,
s,
r) {
  var l = eN(a,
  Array.isArray(n) ? n: [n]);
  El[s] || (El[s] = new WeakMap);
  var f = El[s],
  d = [],
  h = new Set,
  g = new Set(l),
  m = function(p) {
     ! p || h.has(p) || (h.add(p),
    m(p.parentNode))
  };
  l.forEach(m);
  var v = function(p) {
     ! p || g.has(p) || Array.prototype.forEach.call(p.children,
    function(E) {
      if(h.has(E)) v(E);
      else try {
        var w = E.getAttribute(r),
        M = w !== null && w !== "false",
        A = (ds.get(E) || 0) + 1,
        C = (f.get(E) || 0) + 1;
        ds.set(E,
        A),
        f.set(E,
        C),
        d.push(E),
        A === 1 && M && Sl.set(E,
         ! 0),
        C === 1 && E.setAttribute(s,
        "true"),
        M || E.setAttribute(r,
        "true")
      }
      catch(D) {
        console.error("aria-hidden: cannot operate on ",
        E,
        D)
      }
    })
  };
  return v(a),
  h.clear(),
  $f++,
  function() {
    d.forEach(function(p) {
      var E = ds.get(p) - 1,
      w = f.get(p) - 1;
      ds.set(p,
      E),
      f.set(p,
      w),
      E || (Sl.has(p) || p.removeAttribute(r),
      Sl.delete(p)),
      w || p.removeAttribute(s)
    }),
    $f--,
    $f || (ds = new WeakMap,
    ds = new WeakMap,
    Sl = new WeakMap,
    El =  {
    })
  }
},
aN = function(n,
a,
s) {
  s === void 0 && (s = "data-aria-hidden");
  var r = Array.from(Array.isArray(n) ? n: [n]),
  l = tN(n);
  return l ? (r.push.apply(r,
  Array.from(l.querySelectorAll("[aria-live], script"))),
  nN(r,
  l,
  s,
  "aria-hidden")): function() {
    return null
  }
};
function iN(n) {
  const a = sN(n),
  s = S.forwardRef((r,
  l) =>  {
    const {
      children: f,
      ...d
    }
     = r,
    h = S.Children.toArray(f),
    g = h.find(rN);
    if(g) {
      const m = g.props.children,
      v = h.map(p => p === g ? S.Children.count(m) > 1 ? S.Children.only(null): S.isValidElement(m) ? m.props.children: null: p);
      return x.jsx(a,
       {
        ...d,
        ref: l,
        children: S.isValidElement(m) ? S.cloneElement(m,
        void 0,
        v): null
      })
    }
    return x.jsx(a,
     {
      ...d,
      ref: l,
      children: f
    })
  });
  return s.displayName = `${n}.Slot`,
  s
}
function sN(n) {
  const a = S.forwardRef((s,
  r) =>  {
    const {
      children: l,
      ...f
    }
     = s;
    if(S.isValidElement(l)) {
      const d = cN(l),
      h = lN(f,
      l.props);
      return l.type !== S.Fragment && (h.ref = r ? ec(r,
      d): d),
      S.cloneElement(l,
      h)
    }
    return S.Children.count(l) > 1 ? S.Children.only(null): null
  });
  return a.displayName = `${n}.SlotClone`,
  a
}
var oN = Symbol("radix.slottable");
function rN(n) {
  return S.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === oN
}
function lN(n,
a) {
  const s =  {
    ...a
  };
  for(const r in a) {
    const l = n[r],
    f = a[r];
    /^on[A-Z]/.test(r) ? l && f ? s[r] = (...h) =>  {
      const g = f(...h);
      return l(...h),
      g
    }: l && (s[r] = l): r === "style" ? s[r] =  {
      ...l,
      ...f
    }: r === "className" && (s[r] = [l,
    f].filter(Boolean).join(" "))
  }
  return {
    ...n,
    ...s
  }
}
function cN(n) {
  let a = Object.getOwnPropertyDescriptor(n.props,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning;
  return s ? n.ref: (a = Object.getOwnPropertyDescriptor(n,
  "ref") ?. get,
  s = a && "isReactWarning" in a && a.isReactWarning,
  s ? n.props.ref: n.props.ref || n.ref)
}
var ic = "Dialog",
[$1] = V5(ic),
[uN,
bn] = $1(ic),
I1 = n =>  {
  const {
    __scopeDialog: a,
    children: s,
    open: r,
    defaultOpen: l,
    onOpenChange: f,
    modal: d =  ! 0
  }
   = n,
  h = S.useRef(null),
  g = S.useRef(null),
  [m,
  v] = P5( {
    prop: r,
    defaultProp: l ??  ! 1,
    onChange: f,
    caller: ic
  });
  return x.jsx(uN,
   {
    scope: a,
    triggerRef: h,
    contentRef: g,
    contentId: Xf(),
    titleId: Xf(),
    descriptionId: Xf(),
    open: m,
    onOpenChange: v,
    onOpenToggle: S.useCallback(() => v(p =>  ! p),
    [v]),
    modal: d,
    children: s
  })
};
I1.displayName = ic;
var tb = "DialogTrigger",
eb = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    ...r
  }
   = n,
  l = bn(tb,
  s),
  f = bi(a,
  l.triggerRef);
  return x.jsx(sa.button,
   {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": l.open,
    "aria-controls": l.contentId,
    "data-state": mh(l.open),
    ...r,
    ref: f,
    onClick: Ba(n.onClick,
    l.onOpenToggle)
  })
});
eb.displayName = tb;
var dh = "DialogPortal",
[fN,
nb] = $1(dh,
 {
  forceMount: void 0
}),
ab = n =>  {
  const {
    __scopeDialog: a,
    forceMount: s,
    children: r,
    container: l
  }
   = n,
  f = bn(dh,
  a);
  return x.jsx(fN,
   {
    scope: a,
    forceMount: s,
    children: S.Children.map(r,
    d => x.jsx(nc,
     {
      present: s || f.open,
      children: x.jsx(Y1,
       {
        asChild:  ! 0,
        container: l,
        children: d
      })
    }))
  })
};
ab.displayName = dh;
var Zl = "DialogOverlay",
ib = S.forwardRef((n,
a) =>  {
  const s = nb(Zl,
  n.__scopeDialog),
   {
    forceMount: r = s.forceMount,
    ...l
  }
   = n,
  f = bn(Zl,
  n.__scopeDialog);
  return f.modal ? x.jsx(nc,
   {
    present: r || f.open,
    children: x.jsx(hN,
     {
      ...l,
      ref: a
    })
  }): null
});
ib.displayName = Zl;
var dN = iN("DialogOverlay.RemoveScroll"),
hN = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    ...r
  }
   = n,
  l = bn(Zl,
  s);
  return x.jsx(W1,
   {
    as: dN,
    allowPinchZoom:  ! 0,
    shards: [l.contentRef],
    children: x.jsx(sa.div,
     {
      "data-state": mh(l.open),
      ...r,
      ref: a,
      style:  {
        pointerEvents: "auto",
        ...r.style
      }
    })
  })
}),
xi = "DialogContent",
sb = S.forwardRef((n,
a) =>  {
  const s = nb(xi,
  n.__scopeDialog),
   {
    forceMount: r = s.forceMount,
    ...l
  }
   = n,
  f = bn(xi,
  n.__scopeDialog);
  return x.jsx(nc,
   {
    present: r || f.open,
    children: f.modal ? x.jsx(mN,
     {
      ...l,
      ref: a
    }): x.jsx(pN,
     {
      ...l,
      ref: a
    })
  })
});
sb.displayName = xi;
var mN = S.forwardRef((n,
a) =>  {
  const s = bn(xi,
  n.__scopeDialog),
  r = S.useRef(null),
  l = bi(a,
  s.contentRef,
  r);
  return S.useEffect(() =>  {
    const f = r.current;
    if(f) return aN(f)
  },
  []),
  x.jsx(ob,
   {
    ...n,
    ref: l,
    trapFocus: s.open,
    disableOutsidePointerEvents:  ! 0,
    onCloseAutoFocus: Ba(n.onCloseAutoFocus,
    f =>  {
      f.preventDefault(),
      s.triggerRef.current ?. focus()
    }),
    onPointerDownOutside: Ba(n.onPointerDownOutside,
    f =>  {
      const d = f.detail.originalEvent,
      h = d.button === 0 && d.ctrlKey ===  ! 0;
      (d.button === 2 || h) && f.preventDefault()
    }),
    onFocusOutside: Ba(n.onFocusOutside,
    f => f.preventDefault())
  })
}),
pN = S.forwardRef((n,
a) =>  {
  const s = bn(xi,
  n.__scopeDialog),
  r = S.useRef( ! 1),
  l = S.useRef( ! 1);
  return x.jsx(ob,
   {
    ...n,
    ref: a,
    trapFocus:  ! 1,
    disableOutsidePointerEvents:  ! 1,
    onCloseAutoFocus: f =>  {
      n.onCloseAutoFocus ?. (f),
      f.defaultPrevented || (r.current || s.triggerRef.current ?. focus(),
      f.preventDefault()),
      r.current =  ! 1,
      l.current =  ! 1
    },
    onInteractOutside: f =>  {
      n.onInteractOutside ?. (f),
      f.defaultPrevented || (r.current =  ! 0,
      f.detail.originalEvent.type === "pointerdown" && (l.current =  ! 0));
      const d = f.target;
      s.triggerRef.current ?. contains(d) && f.preventDefault(),
      f.detail.originalEvent.type === "focusin" && l.current && f.preventDefault()
    }
  })
}),
ob = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    trapFocus: r,
    onOpenAutoFocus: l,
    onCloseAutoFocus: f,
    ...d
  }
   = n,
  h = bn(xi,
  s),
  g = S.useRef(null),
  m = bi(a,
  g);
  return y4(),
  x.jsxs(x.Fragment,
   {
    children: [x.jsx(H1,
     {
      asChild:  ! 0,
      loop:  ! 0,
      trapped: r,
      onMountAutoFocus: l,
      onUnmountAutoFocus: f,
      children: x.jsx(k1,
       {
        role: "dialog",
        id: h.contentId,
        "aria-describedby": h.descriptionId,
        "aria-labelledby": h.titleId,
        "data-state": mh(h.open),
        ...d,
        ref: m,
        onDismiss: () => h.onOpenChange( ! 1)
      })
    }),
    x.jsxs(x.Fragment,
     {
      children: [x.jsx(vN,
       {
        titleId: h.titleId
      }),
      x.jsx(bN,
       {
        contentRef: g,
        descriptionId: h.descriptionId
      })]
    })]
  })
}),
hh = "DialogTitle",
gN = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    ...r
  }
   = n,
  l = bn(hh,
  s);
  return x.jsx(sa.h2,
   {
    id: l.titleId,
    ...r,
    ref: a
  })
});
gN.displayName = hh;
var rb = "DialogDescription",
yN = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    ...r
  }
   = n,
  l = bn(rb,
  s);
  return x.jsx(sa.p,
   {
    id: l.descriptionId,
    ...r,
    ref: a
  })
});
yN.displayName = rb;
var lb = "DialogClose",
cb = S.forwardRef((n,
a) =>  {
  const {
    __scopeDialog: s,
    ...r
  }
   = n,
  l = bn(lb,
  s);
  return x.jsx(sa.button,
   {
    type: "button",
    ...r,
    ref: a,
    onClick: Ba(n.onClick,
    () => l.onOpenChange( ! 1))
  })
});
cb.displayName = lb;
function mh(n) {
  return n ? "open": "closed"
}
var ub = "DialogTitleWarning",
[aD,
fb] = L5(ub,
 {
  contentName: xi,
  titleName: hh,
  docsSlug: "dialog"
}),
vN = ( {
  titleId: n
}) =>  {
  const a = fb(ub),
  s = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
  return S.useEffect(() =>  {
    n && (document.getElementById(n) || console.error(s))
  },
  [s,
  n]),
  null
},
xN = "DialogDescriptionWarning",
bN = ( {
  contentRef: n,
  descriptionId: a
}) =>  {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fb(xN).contentName}}.`;
  return S.useEffect(() =>  {
    const l = n.current ?. getAttribute("aria-describedby");
    a && l && (document.getElementById(a) || console.warn(r))
  },
  [r,
  n,
  a]),
  null
},
SN = I1,
EN = eb,
wN = ab,
AN = ib,
TN = sb,
CN = cb;
function MN( {
  ...n
}) {
  return x.jsx(SN,
   {
    "code-path": "src/components/ui/sheet.tsx:8:10",
    "data-slot": "sheet",
    ...n
  })
}
function RN( {
  ...n
}) {
  return x.jsx(EN,
   {
    "code-path": "src/components/ui/sheet.tsx:14:10",
    "data-slot": "sheet-trigger",
    ...n
  })
}
function NN( {
  ...n
}) {
  return x.jsx(wN,
   {
    "code-path": "src/components/ui/sheet.tsx:26:10",
    "data-slot": "sheet-portal",
    ...n
  })
}
function DN( {
  className: n,
  ...a
}) {
  return x.jsx(AN,
   {
    "code-path": "src/components/ui/sheet.tsx:34:5",
    "data-slot": "sheet-overlay",
    className: Zo("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
    n),
    ...a
  })
}
function jN( {
  className: n,
  children: a,
  side: s = "right",
  ...r
}) {
  return x.jsxs(NN,
   {
    "code-path": "src/components/ui/sheet.tsx:54:5",
    children: [x.jsx(DN,
     {
      "code-path": "src/components/ui/sheet.tsx:55:7"
    }),
    x.jsxs(TN,
     {
      "code-path": "src/components/ui/sheet.tsx:56:7",
      "data-slot": "sheet-content",
      className: Zo("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
      s === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
      s === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      s === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
      s === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
      n),
      ...r,
      children: [a,
      x.jsxs(CN,
       {
        "code-path": "src/components/ui/sheet.tsx:73:9",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
        children: [x.jsx(iA,
         {
          "code-path": "src/components/ui/sheet.tsx:74:11",
          className: "size-4"
        }),
        x.jsx("span",
         {
          "code-path": "src/components/ui/sheet.tsx:75:11",
          className: "sr-only",
          children: "Close"
        })]
      })]
    })]
  })
}
const l0 = [ {
  label: "Home",
  href: "/"
},
 {
  label: "About",
  href: "/about"
},
 {
  label: "Admissions",
  href: "/admissions"
}];
function ON() {
  const[n,
  a] = S.useState( ! 1),
  s = ia(),
  r = l => l === "/" ? s.pathname === "/": s.pathname.startsWith(l);
  return x.jsx(te.header,
   {
    "code-path": "src/components/layout/Header.tsx:24:5",
    initial:  {
      opacity: 0,
      y:  - 20
    },
    animate:  {
      opacity: 1,
      y: 0
    },
    transition:  {
      duration: .3
    },
    className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-border",
    children: x.jsx("div",
     {
      "code-path": "src/components/layout/Header.tsx:30:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: x.jsxs("div",
       {
        "code-path": "src/components/layout/Header.tsx:31:9",
        className: "flex items-center justify-between h-16",
        children: [x.jsxs(ea,
         {
          "code-path": "src/components/layout/Header.tsx:33:11",
          to: "/",
          className: "flex items-center gap-2 group",
          children: [x.jsx("div",
           {
            "code-path": "src/components/layout/Header.tsx:34:13",
            className: "w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105",
            children: x.jsx("img",
             {
              "code-path": "src/components/layout/Header.tsx:35:15",
              src: "/images/icon.png",
              alt: "OLLTC icon",
              className: "w-6 h-6"
            })
          }),
          x.jsxs("div",
           {
            "code-path": "src/components/layout/Header.tsx:37:13",
            className: "hidden sm:block",
            children: [x.jsx("span",
             {
              "code-path": "src/components/layout/Header.tsx:38:15",
              className: "text-sm font-semibold text-primary leading-tight block",
              children: "Our Lady of Lourdes"
            }),
            x.jsx("span",
             {
              "code-path": "src/components/layout/Header.tsx:41:15",
              className: "text-xs text-muted-foreground leading-tight block",
              children: "Technological College Inc."
            })]
          })]
        }),
        x.jsx("nav",
         {
          "code-path": "src/components/layout/Header.tsx:48:11",
          className: "hidden md:flex items-center gap-8",
          children: l0.map(l => x.jsx(ea,
           {
            "code-path": "src/components/layout/Header.tsx:50:15",
            to: l.href,
            className: `text-sm font-medium transition-colors duration-200 ${r(l.href)?"text-primary":"text-muted-foreground hover:text-primary"}`,
            children: l.label
          },
          l.label))
        }),
        x.jsx("div",
         {
          "code-path": "src/components/layout/Header.tsx:65:11",
          className: "hidden md:block",
          children: x.jsx(zo,
           {
            "code-path": "src/components/layout/Header.tsx:66:13",
            asChild:  ! 0,
            className: "bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 hover:scale-[1.02]",
            children: x.jsx(ea,
             {
              "code-path": "src/components/layout/Header.tsx:70:15",
              to: "/admissions",
              children: "Apply Now"
            })
          })
        }),
        x.jsxs(MN,
         {
          "code-path": "src/components/layout/Header.tsx:75:11",
          open: n,
          onOpenChange: a,
          children: [x.jsx(RN,
           {
            "code-path": "src/components/layout/Header.tsx:76:13",
            asChild:  ! 0,
            className: "md:hidden",
            children: x.jsx(zo,
             {
              "code-path": "src/components/layout/Header.tsx:77:15",
              variant: "ghost",
              size: "icon",
              children: x.jsx(Fw,
               {
                "code-path": "src/components/layout/Header.tsx:78:17",
                className: "w-6 h-6"
              })
            })
          }),
          x.jsx(jN,
           {
            "code-path": "src/components/layout/Header.tsx:81:13",
            side: "right",
            className: "w-[280px] sm:w-[350px]",
            children: x.jsxs("div",
             {
              "code-path": "src/components/layout/Header.tsx:82:15",
              className: "flex flex-col gap-6 mt-8",
              children: [x.jsxs(ea,
               {
                "code-path": "src/components/layout/Header.tsx:83:17",
                to: "/",
                className: "flex items-center gap-2",
                onClick: () => a( ! 1),
                children: [x.jsx("div",
                 {
                  "code-path": "src/components/layout/Header.tsx:84:19",
                  className: "w-10 h-10 bg-primary rounded-lg flex items-center justify-center",
                  children: x.jsx(Ty,
                   {
                    "code-path": "src/components/layout/Header.tsx:85:21",
                    className: "w-6 h-6 text-white"
                  })
                }),
                x.jsxs("div",
                 {
                  "code-path": "src/components/layout/Header.tsx:87:19",
                  children: [x.jsx("span",
                   {
                    "code-path": "src/components/layout/Header.tsx:88:21",
                    className: "text-sm font-semibold text-primary leading-tight block",
                    children: "Our Lady of Lourdes"
                  }),
                  x.jsx("span",
                   {
                    "code-path": "src/components/layout/Header.tsx:91:21",
                    className: "text-xs text-muted-foreground leading-tight block",
                    children: "Technological College Inc."
                  })]
                })]
              }),
              x.jsx("nav",
               {
                "code-path": "src/components/layout/Header.tsx:96:17",
                className: "flex flex-col gap-4",
                children: l0.map(l => x.jsx(ea,
                 {
                  "code-path": "src/components/layout/Header.tsx:98:21",
                  to: l.href,
                  onClick: () => a( ! 1),
                  className: `text-lg font-medium transition-colors duration-200 py-2 ${r(l.href)?"text-primary":"text-foreground hover:text-primary"}`,
                  children: l.label
                },
                l.label))
              }),
              x.jsx(zo,
               {
                "code-path": "src/components/layout/Header.tsx:112:17",
                asChild:  ! 0,
                className: "bg-primary hover:bg-primary/90 text-white font-semibold w-full",
                children: x.jsx(ea,
                 {
                  "code-path": "src/components/layout/Header.tsx:116:19",
                  to: "/admissions",
                  onClick: () => a( ! 1),
                  children: "Apply Now"
                })
              })]
            })
          })]
        })]
      })
    })
  })
}
function zN() {
  return x.jsx("footer",
   {
    "code-path": "src/components/layout/Footer.tsx:3:5",
    className: "bg-primary-dark py-6 border-t border-white/10",
    children: x.jsx("div",
     {
      "code-path": "src/components/layout/Footer.tsx:4:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: x.jsx("p",
       {
        "code-path": "src/components/layout/Footer.tsx:5:9",
        className: "text-center text-white/80 text-sm",
        children: "© 2026 Our Lady of Lourdes Technological College Inc. All rights reserved."
      })
    })
  })
}
function _N() {
  return x.jsxs("section",
   {
    "code-path": "src/components/sections/HeroSection.tsx:7:5",
    className: "relative min-h-[500px] md:min-h-[600px] flex items-center pt-16",
    children: [x.jsxs("div",
     {
      "code-path": "src/components/sections/HeroSection.tsx:9:7",
      className: "absolute inset-0 z-0",
      children: [x.jsx("img",
       {
        "code-path": "src/components/sections/HeroSection.tsx:10:9",
        src: "./images/hero-bg.jpg",
        alt: "School building",
        className: "w-full h-full object-cover"
      }),
      x.jsx("div",
       {
        "code-path": "src/components/sections/HeroSection.tsx:15:9",
        className: "absolute inset-0 bg-primary/75"
      })]
    }),
    x.jsx("div",
     {
      "code-path": "src/components/sections/HeroSection.tsx:19:7",
      className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
      children: x.jsxs(te.div,
       {
        "code-path": "src/components/sections/HeroSection.tsx:20:9",
        initial: "hidden",
        animate: "visible",
        variants:  {
          hidden:  {
          },
          visible:  {
            transition:  {
              staggerChildren: .1
            }
          }
        },
        className: "max-w-2xl",
        children: [x.jsx(te.h1,
         {
          "code-path": "src/components/sections/HeroSection.tsx:33:11",
          variants:  {
            hidden:  {
              opacity: 0,
              y: 20
            },
            visible:  {
              opacity: 1,
              y: 0,
              transition:  {
                duration: .5,
                ease: [.4,
                0,
                .2,
                1]
              }
            }
          },
          className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",
          children: "Shaping Future Leaders Today"
        }),
        x.jsx(te.p,
         {
          "code-path": "src/components/sections/HeroSection.tsx:46:11",
          variants:  {
            hidden:  {
              opacity: 0,
              y: 20
            },
            visible:  {
              opacity: 1,
              y: 0,
              transition:  {
                duration: .5,
                ease: [.4,
                0,
                .2,
                1]
              }
            }
          },
          className: "text-lg md:text-xl text-white/90 mb-8 max-w-xl",
          children: "Empowering students through quality education and innovative learning experiences"
        }),
        x.jsx(te.div,
         {
          "code-path": "src/components/sections/HeroSection.tsx:59:11",
          variants:  {
            hidden:  {
              opacity: 0,
              y: 20
            },
            visible:  {
              opacity: 1,
              y: 0,
              transition:  {
                duration: .5,
                ease: [.4,
                0,
                .2,
                1]
              }
            }
          },
          children: x.jsx(zo,
           {
            "code-path": "src/components/sections/HeroSection.tsx:69:13",
            asChild:  ! 0,
            size: "lg",
            className: "bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base transition-all duration-200 hover:scale-[1.02]",
            children: x.jsx(ea,
             {
              "code-path": "src/components/sections/HeroSection.tsx:74:15",
              to: "/admissions",
              children: "Apply Now"
            })
          })
        })]
      })
    })]
  })
}
function Gt( {
  children: n,
  delay: a = 0,
  duration: s = .5,
  direction: r = "up",
  className: l = "",
  once: f =  ! 0
}) {
  const d =  {
    up:  {
      y: 30
    },
    down:  {
      y:  - 30
    },
    left:  {
      x: 30
    },
    right:  {
      x:  - 30
    },
    none:  {
    }
  };
  return x.jsx(te.div,
   {
    "code-path": "src/components/animations/FadeIn.tsx:30:5",
    initial:  {
      opacity: 0,
      ...d[r]
    },
    whileInView:  {
      opacity: 1,
      x: 0,
      y: 0
    },
    viewport:  {
      once: f,
      amount: .2
    },
    transition:  {
      duration: s,
      delay: a,
      ease: [.4,
      0,
      .2,
      1]
    },
    className: l,
    children: n
  })
}
function LN() {
  return x.jsx("section",
   {
    "code-path": "src/components/sections/WelcomeSection.tsx:5:5",
    id: "about",
    className: "py-16 md:py-24 bg-white",
    children: x.jsx("div",
     {
      "code-path": "src/components/sections/WelcomeSection.tsx:6:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: x.jsxs("div",
       {
        "code-path": "src/components/sections/WelcomeSection.tsx:7:9",
        className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
        children: [x.jsx(Gt,
         {
          "code-path": "src/components/sections/WelcomeSection.tsx:9:11",
          direction: "left",
          className: "order-2 md:order-1",
          children: x.jsx("div",
           {
            "code-path": "src/components/sections/WelcomeSection.tsx:10:13",
            className: "relative overflow-hidden rounded-lg group",
            children: x.jsx("img",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:11:15",
              src: "./images/welcome.jpg",
              alt: "School classroom",
              className: "w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            })
          })
        }),
        x.jsx(Gt,
         {
          "code-path": "src/components/sections/WelcomeSection.tsx:20:11",
          direction: "right",
          delay: .2,
          className: "order-1 md:order-2",
          children: x.jsxs("div",
           {
            "code-path": "src/components/sections/WelcomeSection.tsx:21:13",
            className: "space-y-4",
            children: [x.jsx("h2",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:22:15",
              className: "text-3xl md:text-4xl font-bold text-primary",
              children: "Welcome to Our Lady of Lourdes Technological College"
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:25:15",
              className: "text-muted-foreground font-medium",
              children: "Dear Students and Parents,"
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:28:15",
              className: "text-foreground leading-relaxed",
              children: "It is with great pride and enthusiasm that I welcome you to Our Lady of Lourdes Technological College Inc. As an institution committed to academic excellence and holistic development, we strive to provide our students with the best possible education and preparation for their future careers."
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:34:15",
              className: "text-foreground leading-relaxed",
              children: "Our dedicated faculty and state-of-the-art facilities ensure that every student receives personalized attention and opportunities to excel in their chosen fields. We believe in nurturing not just intelligent minds, but also compassionate hearts and strong character."
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:40:15",
              className: "text-foreground leading-relaxed font-medium",
              children: "Together, let us shape the future leaders of tomorrow."
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WelcomeSection.tsx:43:15",
              className: "text-primary font-semibold italic",
              children: "- Dr. Maria Santos, School Principal"
            })]
          })
        })]
      })
    })
  })
}
function yi( {
  children: n,
  staggerDelay: a = .1,
  className: s = "",
  once: r =  ! 0
}) {
  return x.jsx(te.div,
   {
    "code-path": "src/components/animations/StaggerContainer.tsx:18:5",
    initial: "hidden",
    whileInView: "visible",
    viewport:  {
      once: r,
      amount: .2
    },
    variants:  {
      hidden:  {
      },
      visible:  {
        transition:  {
          staggerChildren: a
        }
      }
    },
    className: s,
    children: n
  })
}
function vi( {
  children: n,
  className: a = ""
}) {
  return x.jsx(te.div,
   {
    "code-path": "src/components/animations/StaggerContainer.tsx:45:5",
    variants:  {
      hidden:  {
        opacity: 0,
        y: 20
      },
      visible:  {
        opacity: 1,
        y: 0,
        transition:  {
          duration: .5,
          ease: [.4,
          0,
          .2,
          1]
        }
      }
    },
    className: a,
    children: n
  })
}
const VN = [ {
  icon: vw,
  title: "Quality Education",
  description: "Comprehensive curriculum designed to meet international standards"
},
 {
  icon: nA,
  title: "Expert Faculty",
  description: "Highly qualified and experienced teachers dedicated to student success"
},
 {
  icon: bw,
  title: "Modern Facilities",
  description: "State-of-the-art classrooms, laboratories, and learning spaces"
},
 {
  icon: gw,
  title: "Excellence Record",
  description: "Proven track record of academic achievements and student success"
}];
function BN() {
  return x.jsx("section",
   {
    "code-path": "src/components/sections/WhyChooseUsSection.tsx:31:5",
    className: "py-16 md:py-24 bg-secondary",
    children: x.jsxs("div",
     {
      "code-path": "src/components/sections/WhyChooseUsSection.tsx:32:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [x.jsx(Gt,
       {
        "code-path": "src/components/sections/WhyChooseUsSection.tsx:33:9",
        className: "text-center mb-12",
        children: x.jsx("h2",
         {
          "code-path": "src/components/sections/WhyChooseUsSection.tsx:34:11",
          className: "text-3xl md:text-4xl font-bold text-primary",
          children: "Why Choose Us"
        })
      }),
      x.jsx(yi,
       {
        "code-path": "src/components/sections/WhyChooseUsSection.tsx:39:9",
        staggerDelay: .1,
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: VN.map(n => x.jsx(vi,
         {
          "code-path": "src/components/sections/WhyChooseUsSection.tsx:44:13",
          children: x.jsxs(te.div,
           {
            "code-path": "src/components/sections/WhyChooseUsSection.tsx:45:15",
            whileHover:  {
              y:  - 4
            },
            transition:  {
              duration: .3,
              ease: [.4,
              0,
              .2,
              1]
            },
            className: "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full",
            children: [x.jsx("div",
             {
              "code-path": "src/components/sections/WhyChooseUsSection.tsx:50:17",
              className: "w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4",
              children: x.jsx(n.icon,
               {
                "code-path": "src/components/sections/WhyChooseUsSection.tsx:51:19",
                className: "w-7 h-7 text-primary"
              })
            }),
            x.jsx("h3",
             {
              "code-path": "src/components/sections/WhyChooseUsSection.tsx:53:17",
              className: "text-lg font-semibold text-foreground mb-2",
              children: n.title
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/WhyChooseUsSection.tsx:56:17",
              className: "text-sm text-muted-foreground leading-relaxed",
              children: n.description
            })]
          })
        },
        n.title))
      })]
    })
  })
}
const kN = [ {
  title: "Elementary",
  subtitle: "Grades 1-6"
},
 {
  title: "Junior High",
  subtitle: "Grades 7-10"
},
 {
  title: "Senior High",
  subtitle: "Grades 11-12"
},
 {
  title: "College",
  subtitle: "Bachelor Programs"
}];
function UN() {
  return x.jsx("section",
   {
    "code-path": "src/components/sections/ProgramsSection.tsx:26:5",
    id: "admissions",
    className: "py-16 md:py-24 bg-white",
    children: x.jsxs("div",
     {
      "code-path": "src/components/sections/ProgramsSection.tsx:27:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [x.jsx(Gt,
       {
        "code-path": "src/components/sections/ProgramsSection.tsx:28:9",
        className: "text-center mb-12",
        children: x.jsx("h2",
         {
          "code-path": "src/components/sections/ProgramsSection.tsx:29:11",
          className: "text-3xl md:text-4xl font-bold text-primary",
          children: "Programs Offered"
        })
      }),
      x.jsx(yi,
       {
        "code-path": "src/components/sections/ProgramsSection.tsx:34:9",
        staggerDelay: .1,
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: kN.map(n => x.jsx(vi,
         {
          "code-path": "src/components/sections/ProgramsSection.tsx:39:13",
          children: x.jsxs(te.div,
           {
            "code-path": "src/components/sections/ProgramsSection.tsx:40:15",
            whileHover:  {
              y:  - 4,
              borderColor: "#1E40AF"
            },
            transition:  {
              duration: .3,
              ease: [.4,
              0,
              .2,
              1]
            },
            className: "bg-white border-2 border-secondary rounded-lg p-8 text-center hover:shadow-md transition-all duration-300 cursor-pointer",
            children: [x.jsx("h3",
             {
              "code-path": "src/components/sections/ProgramsSection.tsx:45:17",
              className: "text-xl font-semibold text-primary mb-2",
              children: n.title
            }),
            x.jsx("p",
             {
              "code-path": "src/components/sections/ProgramsSection.tsx:48:17",
              className: "text-muted-foreground",
              children: n.subtitle
            })]
          })
        },
        n.title))
      })]
    })
  })
}
const HN = [ {
  name: "Library",
  image: "./images/library.jpg"
},
 {
  name: "Culinary Lab",
  image: "./images/culinary.jpg"
},
 {
  name: "Computer Lab",
  image: "./images/computer.jpg"
},
 {
  name: "Gymnasium",
  image: "./images/gymnasium.jpg"
}];
function PN() {
  return x.jsx("section",
   {
    "code-path": "src/components/sections/FacilitiesSection.tsx:26:5",
    className: "py-16 md:py-24 bg-white",
    children: x.jsxs("div",
     {
      "code-path": "src/components/sections/FacilitiesSection.tsx:27:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [x.jsx(Gt,
       {
        "code-path": "src/components/sections/FacilitiesSection.tsx:28:9",
        className: "text-center mb-12",
        children: x.jsx("h2",
         {
          "code-path": "src/components/sections/FacilitiesSection.tsx:29:11",
          className: "text-3xl md:text-4xl font-bold text-primary",
          children: "Our Facilities"
        })
      }),
      x.jsx(yi,
       {
        "code-path": "src/components/sections/FacilitiesSection.tsx:34:9",
        staggerDelay: .1,
        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: HN.map(n => x.jsx(vi,
         {
          "code-path": "src/components/sections/FacilitiesSection.tsx:39:13",
          children: x.jsxs(te.div,
           {
            "code-path": "src/components/sections/FacilitiesSection.tsx:40:15",
            whileHover:  {
              y:  - 4
            },
            transition:  {
              duration: .3,
              ease: [.4,
              0,
              .2,
              1]
            },
            className: "group relative overflow-hidden rounded-lg cursor-pointer",
            children: [x.jsx("div",
             {
              "code-path": "src/components/sections/FacilitiesSection.tsx:45:17",
              className: "aspect-[4/3] overflow-hidden",
              children: x.jsx("img",
               {
                "code-path": "src/components/sections/FacilitiesSection.tsx:46:19",
                src: n.image,
                alt: n.name,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              })
            }),
            x.jsx("div",
             {
              "code-path": "src/components/sections/FacilitiesSection.tsx:52:17",
              className: "absolute bottom-0 left-0 right-0 bg-primary/90 py-3 px-4 transition-transform duration-300 group-hover:translate-y-0",
              children: x.jsx("p",
               {
                "code-path": "src/components/sections/FacilitiesSection.tsx:53:19",
                className: "text-white font-semibold text-center",
                children: n.name
              })
            })]
          })
        },
        n.name))
      })]
    })
  })
}
function YN() {
  return x.jsx("section",
   {
    "code-path": "src/components/sections/ContactSection.tsx:7:5",
    className: "py-16 md:py-20 bg-primary-dark",
    children: x.jsx("div",
     {
      "code-path": "src/components/sections/ContactSection.tsx:8:7",
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: x.jsxs("div",
       {
        "code-path": "src/components/sections/ContactSection.tsx:9:9",
        className: "grid md:grid-cols-3 gap-10 md:gap-12",
        children: [x.jsx(Gt,
         {
          "code-path": "src/components/sections/ContactSection.tsx:11:11",
          direction: "up",
          delay: 0,
          children: x.jsxs("div",
           {
            "code-path": "src/components/sections/ContactSection.tsx:12:13",
            children: [x.jsx("h3",
             {
              "code-path": "src/components/sections/ContactSection.tsx:13:15",
              className: "text-xl font-bold text-white mb-6",
              children: "Contact Us"
            }),
            x.jsxs("ul",
             {
              "code-path": "src/components/sections/ContactSection.tsx:14:15",
              className: "space-y-4",
              children: [x.jsxs("li",
               {
                "code-path": "src/components/sections/ContactSection.tsx:15:17",
                className: "flex items-center gap-3 text-white/90",
                children: [x.jsx(ed,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:16:19",
                  className: "w-5 h-5 flex-shrink-0"
                }),
                x.jsx("span",
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:17:19",
                  children: "+63 912 345 6789"
                })]
              }),
              x.jsxs("li",
               {
                "code-path": "src/components/sections/ContactSection.tsx:19:17",
                className: "flex items-center gap-3 text-white/90",
                children: [x.jsx(ed,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:20:19",
                  className: "w-5 h-5 flex-shrink-0"
                }),
                x.jsx("span",
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:21:19",
                  children: "+63 987 654 3210"
                })]
              }),
              x.jsxs("li",
               {
                "code-path": "src/components/sections/ContactSection.tsx:23:17",
                className: "flex items-center gap-3 text-white/90",
                children: [x.jsx(_0,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:24:19",
                  className: "w-5 h-5 flex-shrink-0"
                }),
                x.jsx("span",
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:25:19",
                  children: "info@olltci.edu.ph"
                })]
              })]
            })]
          })
        }),
        x.jsx(Gt,
         {
          "code-path": "src/components/sections/ContactSection.tsx:32:11",
          direction: "up",
          delay: .1,
          children: x.jsxs("div",
           {
            "code-path": "src/components/sections/ContactSection.tsx:33:13",
            children: [x.jsx("h3",
             {
              "code-path": "src/components/sections/ContactSection.tsx:34:15",
              className: "text-xl font-bold text-white mb-6",
              children: "Location"
            }),
            x.jsxs("div",
             {
              "code-path": "src/components/sections/ContactSection.tsx:35:15",
              className: "flex items-start gap-3 text-white/90",
              children: [x.jsx(L0,
               {
                "code-path": "src/components/sections/ContactSection.tsx:36:17",
                className: "w-5 h-5 flex-shrink-0 mt-0.5"
              }),
              x.jsxs("address",
               {
                "code-path": "src/components/sections/ContactSection.tsx:37:17",
                className: "not-italic",
                children: ["123 Education Avenue,",
                x.jsx("br",
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:38:40"
                }),
                "Lourdes District,",
                x.jsx("br",
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:39:36"
                }),
                "Metro Manila, Philippines 1000"]
              })]
            })]
          })
        }),
        x.jsx(Gt,
         {
          "code-path": "src/components/sections/ContactSection.tsx:47:11",
          direction: "up",
          delay: .2,
          children: x.jsxs("div",
           {
            "code-path": "src/components/sections/ContactSection.tsx:48:13",
            children: [x.jsx("h3",
             {
              "code-path": "src/components/sections/ContactSection.tsx:49:15",
              className: "text-xl font-bold text-white mb-6",
              children: "Follow Us"
            }),
            x.jsxs("div",
             {
              "code-path": "src/components/sections/ContactSection.tsx:50:15",
              className: "flex gap-4",
              children: [x.jsx(te.a,
               {
                "code-path": "src/components/sections/ContactSection.tsx:51:17",
                href: "https://facebook.com",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover:  {
                  scale: 1.1
                },
                whileTap:  {
                  scale: .95
                },
                className: "w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary-dark transition-colors duration-200",
                children: x.jsx(zw,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:59:19",
                  className: "w-5 h-5"
                })
              }),
              x.jsx(te.a,
               {
                "code-path": "src/components/sections/ContactSection.tsx:61:17",
                href: "https://instagram.com",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover:  {
                  scale: 1.1
                },
                whileTap:  {
                  scale: .95
                },
                className: "w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary-dark transition-colors duration-200",
                children: x.jsx(Pw,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:69:19",
                  className: "w-5 h-5"
                })
              }),
              x.jsx(te.a,
               {
                "code-path": "src/components/sections/ContactSection.tsx:71:17",
                href: "https://youtube.com",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover:  {
                  scale: 1.1
                },
                whileTap:  {
                  scale: .95
                },
                className: "w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary-dark transition-colors duration-200",
                children: x.jsx(oA,
                 {
                  "code-path": "src/components/sections/ContactSection.tsx:79:19",
                  className: "w-5 h-5"
                })
              })]
            })]
          })
        })]
      })
    })
  })
}
function GN() {
  return x.jsxs("div",
   {
    "code-path": "src/pages/HomePage.tsx:10:5",
    className: "min-h-screen bg-background",
    children: [x.jsx(_N,
     {
      "code-path": "src/pages/HomePage.tsx:11:7"
    }),
    x.jsx(LN,
     {
      "code-path": "src/pages/HomePage.tsx:12:7"
    }),
    x.jsx(BN,
     {
      "code-path": "src/pages/HomePage.tsx:13:7"
    }),
    x.jsx(UN,
     {
      "code-path": "src/pages/HomePage.tsx:14:7"
    }),
    x.jsx(PN,
     {
      "code-path": "src/pages/HomePage.tsx:15:7"
    }),
    x.jsx(YN,
     {
      "code-path": "src/pages/HomePage.tsx:16:7"
    })]
  })
}
const qN = ["Excellence",
"Integrity",
"Innovation",
"Compassion",
"Service"],
XN = [ {
  title: "Elementary",
  description: "Grades 1-6: Building strong foundations in core subjects with emphasis on values education and character development."
},
 {
  title: "Junior High School",
  description: "Grades 7-10: Comprehensive curriculum preparing students for senior high school with focus on critical thinking and problem-solving."
}],
KN = [ {
  title: "STEM",
  description: "Science, Technology, Engineering, and Mathematics track for future scientists and engineers."
},
 {
  title: "ABM",
  description: "Accountancy, Business, and Management track for aspiring entrepreneurs and business leaders."
},
 {
  title: "HUMSS",
  description: "Humanities and Social Sciences track for future lawyers, teachers, and social workers."
},
 {
  title: "ICT",
  description: "Information and Communications Technology track for future IT professionals and programmers."
}],
FN = [ {
  code: "BSHM",
  name: "Bachelor of Science in Hospitality Management"
},
 {
  code: "BSIT",
  name: "Bachelor of Science in Information Technology"
},
 {
  code: "BSCrim",
  name: "Bachelor of Science in Criminology"
},
 {
  code: "BSBA",
  name: "Bachelor of Science in Business Administration"
},
 {
  code: "BSED",
  name: "Bachelor of Secondary Education"
}],
ZN = [ {
  name: "Gymnasium",
  image: "./images/gymnasium.jpg",
  description: "A multi-purpose gymnasium for sports activities, physical education classes, and school events, promoting health and wellness among students."
},
 {
  name: "Library",
  image: "./images/library.jpg",
  description: "Our extensive library houses over 10,000 books, journals, and digital resources, providing students with a wealth of knowledge across all disciplines."
},
 {
  name: "Culinary Lab",
  image: "./images/culinary.jpg",
  description: "State-of-the-art culinary facilities equipped with professional-grade equipment for our Hospitality Management students to hone their cooking skills."
},
 {
  name: "Computer Labs",
  image: "./images/computer.jpg",
  description: "Modern computer laboratories with high-speed internet and the latest software, perfect for IT and business students to develop their technical skills."
}];
function QN() {
  return x.jsxs("div",
   {
    "code-path": "src/pages/AboutPage.tsx:77:5",
    className: "min-h-screen bg-background pt-16",
    children: [x.jsx("section",
     {
      "code-path": "src/pages/AboutPage.tsx:79:7",
      className: "bg-primary py-16 md:py-24",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AboutPage.tsx:80:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [x.jsx(te.h1,
         {
          "code-path": "src/pages/AboutPage.tsx:81:11",
          initial:  {
            opacity: 0,
            y: 20
          },
          animate:  {
            opacity: 1,
            y: 0
          },
          transition:  {
            duration: .5
          },
          className: "text-4xl md:text-5xl font-bold text-white mb-6",
          children: "About Our School"
        }),
        x.jsx(te.p,
         {
          "code-path": "src/pages/AboutPage.tsx:89:11",
          initial:  {
            opacity: 0,
            y: 20
          },
          animate:  {
            opacity: 1,
            y: 0
          },
          transition:  {
            duration: .5,
            delay: .1
          },
          className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto",
          children: "Discover our rich history, guiding principles, and comprehensive academic programs"
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AboutPage.tsx:101:7",
      className: "py-16 md:py-24 bg-white",
      children: x.jsx("div",
       {
        "code-path": "src/pages/AboutPage.tsx:102:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: x.jsxs("div",
         {
          "code-path": "src/pages/AboutPage.tsx:103:11",
          className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
          children: [x.jsx(Gt,
           {
            "code-path": "src/pages/AboutPage.tsx:104:13",
            direction: "left",
            children: x.jsx("div",
             {
              "code-path": "src/pages/AboutPage.tsx:105:15",
              className: "relative overflow-hidden rounded-lg",
              children: x.jsx("img",
               {
                "code-path": "src/pages/AboutPage.tsx:106:17",
                src: "./images/welcome.jpg",
                alt: "Students in classroom",
                className: "w-full h-[300px] md:h-[400px] object-cover"
              })
            })
          }),
          x.jsx(Gt,
           {
            "code-path": "src/pages/AboutPage.tsx:113:13",
            direction: "right",
            delay: .2,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AboutPage.tsx:114:15",
              className: "space-y-4",
              children: [x.jsx("h2",
               {
                "code-path": "src/pages/AboutPage.tsx:115:17",
                className: "text-3xl md:text-4xl font-bold text-primary",
                children: "Our History"
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AboutPage.tsx:118:17",
                className: "text-foreground leading-relaxed",
                children: "Founded in 1995, Our Lady of Lourdes Technological College Inc. has been a beacon of educational excellence in the Philippines for nearly three decades. What started as a small elementary school with just 50 students has grown into a comprehensive educational institution serving over 2,000 students."
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AboutPage.tsx:121:17",
                className: "text-foreground leading-relaxed",
                children: "Our commitment to providing quality education rooted in Christian values has remained steadfast throughout our journey. We have continually evolved our programs and facilities to meet the changing needs of modern education while maintaining our core mission of developing well-rounded individuals."
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AboutPage.tsx:124:17",
                className: "text-foreground leading-relaxed",
                children: "Today, we stand proud as one of the leading technological colleges in the region, with a strong track record of academic achievements and successful alumni making positive contributions to society."
              })]
            })
          })]
        })
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AboutPage.tsx:134:7",
      className: "py-16 md:py-24 bg-secondary",
      children: x.jsx("div",
       {
        "code-path": "src/pages/AboutPage.tsx:135:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: x.jsxs("div",
         {
          "code-path": "src/pages/AboutPage.tsx:136:11",
          className: "grid md:grid-cols-3 gap-8",
          children: [x.jsx(Gt,
           {
            "code-path": "src/pages/AboutPage.tsx:138:13",
            delay: 0,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AboutPage.tsx:139:15",
              className: "bg-white rounded-lg p-8 text-center shadow-sm h-full",
              children: [x.jsx("div",
               {
                "code-path": "src/pages/AboutPage.tsx:140:17",
                className: "w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6",
                children: x.jsx(jw,
                 {
                  "code-path": "src/pages/AboutPage.tsx:141:19",
                  className: "w-8 h-8 text-primary"
                })
              }),
              x.jsx("h3",
               {
                "code-path": "src/pages/AboutPage.tsx:143:17",
                className: "text-2xl font-bold text-primary mb-4",
                children: "Vision"
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AboutPage.tsx:144:17",
                className: "text-foreground leading-relaxed",
                children: "To be a leading educational institution that nurtures globally competitive, morally upright, and socially responsible individuals who contribute meaningfully to nation-building."
              })]
            })
          }),
          x.jsx(Gt,
           {
            "code-path": "src/pages/AboutPage.tsx:151:13",
            delay: .1,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AboutPage.tsx:152:15",
              className: "bg-white rounded-lg p-8 text-center shadow-sm h-full",
              children: [x.jsx("div",
               {
                "code-path": "src/pages/AboutPage.tsx:153:17",
                className: "w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6",
                children: x.jsx($w,
                 {
                  "code-path": "src/pages/AboutPage.tsx:154:19",
                  className: "w-8 h-8 text-primary"
                })
              }),
              x.jsx("h3",
               {
                "code-path": "src/pages/AboutPage.tsx:156:17",
                className: "text-2xl font-bold text-primary mb-4",
                children: "Mission"
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AboutPage.tsx:157:17",
                className: "text-foreground leading-relaxed",
                children: "To provide quality education through innovative teaching methods, state-of-the-art facilities, and values-based learning experiences that empower students to achieve their full potential."
              })]
            })
          }),
          x.jsx(Gt,
           {
            "code-path": "src/pages/AboutPage.tsx:164:13",
            delay: .2,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AboutPage.tsx:165:15",
              className: "bg-white rounded-lg p-8 shadow-sm h-full",
              children: [x.jsx("div",
               {
                "code-path": "src/pages/AboutPage.tsx:166:17",
                className: "w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6",
                children: x.jsx(Bw,
                 {
                  "code-path": "src/pages/AboutPage.tsx:167:19",
                  className: "w-8 h-8 text-primary"
                })
              }),
              x.jsx("h3",
               {
                "code-path": "src/pages/AboutPage.tsx:169:17",
                className: "text-2xl font-bold text-primary mb-4 text-center",
                children: "Core Values"
              }),
              x.jsx("ul",
               {
                "code-path": "src/pages/AboutPage.tsx:170:17",
                className: "space-y-2",
                children: qN.map(n => x.jsxs("li",
                 {
                  "code-path": "src/pages/AboutPage.tsx:172:21",
                  className: "flex items-center gap-3",
                  children: [x.jsx("div",
                   {
                    "code-path": "src/pages/AboutPage.tsx:173:23",
                    className: "w-2 h-2 bg-primary rounded-full"
                  }),
                  x.jsx("span",
                   {
                    "code-path": "src/pages/AboutPage.tsx:174:23",
                    className: "text-foreground",
                    children: n
                  })]
                },
                n))
              })]
            })
          })]
        })
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AboutPage.tsx:185:7",
      className: "py-16 md:py-24 bg-white",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AboutPage.tsx:186:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AboutPage.tsx:187:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AboutPage.tsx:188:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Academic Programs"
          })
        }),
        x.jsxs("div",
         {
          "code-path": "src/pages/AboutPage.tsx:194:11",
          className: "mb-12",
          children: [x.jsx("h3",
           {
            "code-path": "src/pages/AboutPage.tsx:195:13",
            className: "text-2xl font-bold text-primary mb-6",
            children: "Basic Education"
          }),
          x.jsx("div",
           {
            "code-path": "src/pages/AboutPage.tsx:196:13",
            className: "space-y-4",
            children: XN.map(n => x.jsx(Gt,
             {
              "code-path": "src/pages/AboutPage.tsx:198:17",
              children: x.jsxs("div",
               {
                "code-path": "src/pages/AboutPage.tsx:199:19",
                className: "border-l-4 border-primary pl-6 py-2",
                children: [x.jsx("h4",
                 {
                  "code-path": "src/pages/AboutPage.tsx:200:21",
                  className: "text-xl font-semibold text-primary mb-2",
                  children: n.title
                }),
                x.jsx("p",
                 {
                  "code-path": "src/pages/AboutPage.tsx:201:21",
                  className: "text-muted-foreground",
                  children: n.description
                })]
              })
            },
            n.title))
          })]
        }),
        x.jsxs("div",
         {
          "code-path": "src/pages/AboutPage.tsx:209:11",
          className: "mb-12",
          children: [x.jsx("h3",
           {
            "code-path": "src/pages/AboutPage.tsx:210:13",
            className: "text-2xl font-bold text-primary mb-6",
            children: "Senior High School Strands"
          }),
          x.jsx(yi,
           {
            "code-path": "src/pages/AboutPage.tsx:211:13",
            staggerDelay: .1,
            className: "grid sm:grid-cols-2 gap-4",
            children: KN.map(n => x.jsx(vi,
             {
              "code-path": "src/pages/AboutPage.tsx:213:17",
              children: x.jsxs("div",
               {
                "code-path": "src/pages/AboutPage.tsx:214:19",
                className: "bg-secondary rounded-lg p-6",
                children: [x.jsx("h4",
                 {
                  "code-path": "src/pages/AboutPage.tsx:215:21",
                  className: "text-lg font-semibold text-primary mb-2",
                  children: n.title
                }),
                x.jsx("p",
                 {
                  "code-path": "src/pages/AboutPage.tsx:216:21",
                  className: "text-sm text-muted-foreground",
                  children: n.description
                })]
              })
            },
            n.title))
          })]
        }),
        x.jsxs("div",
         {
          "code-path": "src/pages/AboutPage.tsx:224:11",
          children: [x.jsx("h3",
           {
            "code-path": "src/pages/AboutPage.tsx:225:13",
            className: "text-2xl font-bold text-primary mb-6",
            children: "College Programs"
          }),
          x.jsx(yi,
           {
            "code-path": "src/pages/AboutPage.tsx:226:13",
            staggerDelay: .1,
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
            children: FN.map(n => x.jsx(vi,
             {
              "code-path": "src/pages/AboutPage.tsx:228:17",
              children: x.jsxs(te.div,
               {
                "code-path": "src/pages/AboutPage.tsx:229:19",
                whileHover:  {
                  scale: 1.02
                },
                className: "bg-primary rounded-lg p-6 text-center text-white",
                children: [x.jsx("h4",
                 {
                  "code-path": "src/pages/AboutPage.tsx:233:21",
                  className: "text-xl font-bold mb-1",
                  children: n.code
                }),
                x.jsx("p",
                 {
                  "code-path": "src/pages/AboutPage.tsx:234:21",
                  className: "text-sm text-white/90",
                  children: n.name
                })]
              })
            },
            n.code))
          })]
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AboutPage.tsx:244:7",
      className: "py-16 md:py-24 bg-secondary",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AboutPage.tsx:245:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AboutPage.tsx:246:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AboutPage.tsx:247:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Our Facilities"
          })
        }),
        x.jsx(yi,
         {
          "code-path": "src/pages/AboutPage.tsx:252:11",
          staggerDelay: .15,
          className: "grid md:grid-cols-2 gap-8",
          children: ZN.map(n => x.jsx(vi,
           {
            "code-path": "src/pages/AboutPage.tsx:254:15",
            children: x.jsxs(te.div,
             {
              "code-path": "src/pages/AboutPage.tsx:255:17",
              whileHover:  {
                y:  - 4
              },
              className: "bg-white rounded-lg overflow-hidden shadow-sm",
              children: [x.jsx("div",
               {
                "code-path": "src/pages/AboutPage.tsx:259:19",
                className: "aspect-video overflow-hidden",
                children: x.jsx("img",
                 {
                  "code-path": "src/pages/AboutPage.tsx:260:21",
                  src: n.image,
                  alt: n.name,
                  className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                })
              }),
              x.jsxs("div",
               {
                "code-path": "src/pages/AboutPage.tsx:266:19",
                className: "p-6",
                children: [x.jsx("h3",
                 {
                  "code-path": "src/pages/AboutPage.tsx:267:21",
                  className: "text-xl font-bold text-primary mb-3",
                  children: n.name
                }),
                x.jsx("p",
                 {
                  "code-path": "src/pages/AboutPage.tsx:268:21",
                  className: "text-muted-foreground leading-relaxed",
                  children: n.description
                })]
              })]
            })
          },
          n.name))
        })]
      })
    })]
  })
}
function c0( {
  className: n,
  type: a,
  ...s
}) {
  return x.jsx("input",
   {
    "code-path": "src/components/ui/input.tsx:7:5",
    type: a,
    "data-slot": "input",
    className: Zo("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    n),
    ...s
  })
}
function WN( {
  className: n,
  ...a
}) {
  return x.jsx("textarea",
   {
    "code-path": "src/components/ui/textarea.tsx:7:5",
    "data-slot": "textarea",
    className: Zo("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    n),
    ...a
  })
}
const JN = [ {
  title: "Birth Certificate (PSA Copy)",
  description: "Original or certified true copy"
},
 {
  title: "Report Card / Form 138",
  description: "From previous school attended"
},
 {
  title: "Certificate of Good Moral Character",
  description: "From previous school"
},
 {
  title: "2x2 ID Photos",
  description: "4 pieces, recent with white background"
},
 {
  title: "Transcript of Records",
  description: "For college applicants and transferees"
}],
$N = ["Must have completed the required grade level from the previous school",
"Must pass the entrance examination (for college applicants)",
"Must submit complete requirements before the deadline",
"Must attend the orientation for new students and parents",
"Must be of good moral character and willing to abide by school rules"],
IN = [ {
  number: "1",
  icon: z0,
  title: "Submit Requirements",
  description: "Prepare and submit all required documents to the Registrar's Office"
},
 {
  number: "2",
  icon: Mw,
  title: "Fill Up Forms",
  description: "Complete enrollment forms and provide accurate information"
},
 {
  number: "3",
  icon: Nw,
  title: "Pay Registration Fee",
  description: "Process payment at the Cashier's Office or through authorized channels"
},
 {
  number: "4",
  icon: Ew,
  title: "Confirmation",
  description: "Receive enrollment confirmation and class schedule",
  isLast:  ! 0
}];
function tD() {
  const[n,
  a] = S.useState( {
    name: "",
    email: "",
    message: ""
  }),
  s = r =>  {
    r.preventDefault(),
    MA.success("Message sent successfully! We will get back to you soon."),
    a( {
      name: "",
      email: "",
      message: ""
    })
  };
  return x.jsxs("div",
   {
    "code-path": "src/pages/AdmissionsPage.tsx:69:5",
    className: "min-h-screen bg-background pt-16",
    children: [x.jsx("section",
     {
      "code-path": "src/pages/AdmissionsPage.tsx:71:7",
      className: "bg-primary py-16 md:py-24",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AdmissionsPage.tsx:72:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [x.jsx(te.h1,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:73:11",
          initial:  {
            opacity: 0,
            y: 20
          },
          animate:  {
            opacity: 1,
            y: 0
          },
          transition:  {
            duration: .5
          },
          className: "text-4xl md:text-5xl font-bold text-white mb-6",
          children: "Admissions"
        }),
        x.jsx(te.p,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:81:11",
          initial:  {
            opacity: 0,
            y: 20
          },
          animate:  {
            opacity: 1,
            y: 0
          },
          transition:  {
            duration: .5,
            delay: .1
          },
          className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto",
          children: "Start your journey with us today. We're here to guide you through every step of the enrollment process."
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AdmissionsPage.tsx:93:7",
      className: "py-16 md:py-24 bg-white",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AdmissionsPage.tsx:94:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:95:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AdmissionsPage.tsx:96:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Admission Requirements"
          })
        }),
        x.jsxs("div",
         {
          "code-path": "src/pages/AdmissionsPage.tsx:101:11",
          className: "grid md:grid-cols-2 gap-12",
          children: [x.jsx(Gt,
           {
            "code-path": "src/pages/AdmissionsPage.tsx:103:13",
            direction: "left",
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:104:15",
              children: [x.jsx("h3",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:105:17",
                className: "text-2xl font-bold text-primary mb-6",
                children: "Required Documents"
              }),
              x.jsx("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:106:17",
                className: "space-y-4",
                children: JN.map(r => x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:108:21",
                  className: "flex items-start gap-4",
                  children: [x.jsx("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:109:23",
                    className: "w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0",
                    children: x.jsx(z0,
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:110:25",
                      className: "w-5 h-5 text-primary"
                    })
                  }),
                  x.jsxs("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:112:23",
                    children: [x.jsx("h4",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:113:25",
                      className: "font-semibold text-foreground",
                      children: r.title
                    }),
                    x.jsx("p",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:114:25",
                      className: "text-sm text-muted-foreground",
                      children: r.description
                    })]
                  })]
                },
                r.title))
              })]
            })
          }),
          x.jsx(Gt,
           {
            "code-path": "src/pages/AdmissionsPage.tsx:123:13",
            direction: "right",
            delay: .2,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:124:15",
              children: [x.jsx("h3",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:125:17",
                className: "text-2xl font-bold text-primary mb-6",
                children: "Qualifications"
              }),
              x.jsx("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:126:17",
                className: "space-y-4",
                children: $N.map(r => x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:128:21",
                  className: "flex items-start gap-4",
                  children: [x.jsx("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:129:23",
                    className: "w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0",
                    children: x.jsx(Ay,
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:130:25",
                      className: "w-5 h-5 text-primary"
                    })
                  }),
                  x.jsx("p",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:132:23",
                    className: "text-foreground pt-2",
                    children: r
                  })]
                },
                r))
              })]
            })
          })]
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AdmissionsPage.tsx:143:7",
      className: "py-16 md:py-24 bg-secondary",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AdmissionsPage.tsx:144:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:145:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AdmissionsPage.tsx:146:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Enrollment Process"
          })
        }),
        x.jsx(yi,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:151:11",
          staggerDelay: .15,
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: IN.map(r => x.jsx(vi,
           {
            "code-path": "src/pages/AdmissionsPage.tsx:153:15",
            children: x.jsxs(te.div,
             {
              "code-path": "src/pages/AdmissionsPage.tsx:154:17",
              whileHover:  {
                y:  - 4
              },
              className: "bg-white rounded-lg p-6 text-center shadow-sm h-full",
              children: [x.jsx("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:158:19",
                className: `w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${r.isLast?"bg-green-100":"bg-primary"}`,
                children: r.isLast ? x.jsx(Ay,
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:160:23",
                  className: "w-8 h-8 text-green-600"
                }): x.jsx(r.icon,
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:162:23",
                  className: "w-8 h-8 text-white"
                })
              }),
              x.jsx("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:165:19",
                className: `w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold ${r.isLast?"bg-green-500":"bg-primary"}`,
                children: r.number
              }),
              x.jsx("h3",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:168:19",
                className: "text-lg font-bold text-primary mb-2",
                children: r.title
              }),
              x.jsx("p",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:169:19",
                className: "text-sm text-muted-foreground",
                children: r.description
              })]
            })
          },
          r.number))
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AdmissionsPage.tsx:178:7",
      className: "py-16 md:py-24 bg-white",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AdmissionsPage.tsx:179:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:180:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AdmissionsPage.tsx:181:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Tuition Fees"
          })
        }),
        x.jsx(Gt,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:186:11",
          children: x.jsxs("div",
           {
            "code-path": "src/pages/AdmissionsPage.tsx:187:13",
            className: "max-w-md mx-auto bg-primary rounded-lg p-8 text-white text-center",
            children: [x.jsx("h3",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:188:15",
              className: "text-xl font-semibold mb-4",
              children: "Monthly Tuition"
            }),
            x.jsx("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:189:15",
              className: "text-5xl font-bold mb-2",
              children: "₱1,750"
            }),
            x.jsx("p",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:190:15",
              className: "text-white/80 mb-6",
              children: "per month"
            }),
            x.jsx("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:191:15",
              className: "border-t border-white/20 pt-4 mb-4",
              children: x.jsxs("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:192:17",
                className: "flex justify-between items-center",
                children: [x.jsx("span",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:193:19",
                  className: "text-white/80",
                  children: "Down Payment:"
                }),
                x.jsx("span",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:194:19",
                  className: "text-2xl font-bold",
                  children: "₱500"
                })]
              })
            }),
            x.jsxs("ul",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:197:15",
              className: "text-left text-sm text-white/80 space-y-2",
              children: [x.jsx("li",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:198:17",
                children: "* Down payment is required upon enrollment"
              }),
              x.jsx("li",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:199:17",
                children: "* Monthly payment scheme available for the remaining balance"
              }),
              x.jsx("li",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:200:17",
                children: "* Note: Tuition fees may vary depending on the grade level and program. Additional fees for laboratory, library, and other school services apply. Please contact the Accounting Office for detailed breakdown."
              })]
            })]
          })
        })]
      })
    }),
    x.jsx("section",
     {
      "code-path": "src/pages/AdmissionsPage.tsx:208:7",
      className: "py-16 md:py-24 bg-secondary",
      children: x.jsxs("div",
       {
        "code-path": "src/pages/AdmissionsPage.tsx:209:9",
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [x.jsx(Gt,
         {
          "code-path": "src/pages/AdmissionsPage.tsx:210:11",
          className: "text-center mb-12",
          children: x.jsx("h2",
           {
            "code-path": "src/pages/AdmissionsPage.tsx:211:13",
            className: "text-3xl md:text-4xl font-bold text-primary",
            children: "Get in Touch"
          })
        }),
        x.jsxs("div",
         {
          "code-path": "src/pages/AdmissionsPage.tsx:216:11",
          className: "grid md:grid-cols-2 gap-12",
          children: [x.jsx(Gt,
           {
            "code-path": "src/pages/AdmissionsPage.tsx:218:13",
            direction: "left",
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:219:15",
              className: "bg-white rounded-lg p-8 shadow-sm",
              children: [x.jsx("h3",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:220:17",
                className: "text-xl font-bold text-primary mb-6",
                children: "Send us a Message"
              }),
              x.jsxs("form",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:221:17",
                onSubmit: s,
                className: "space-y-4",
                children: [x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:222:19",
                  children: [x.jsx("label",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:223:21",
                    className: "block text-sm font-medium text-foreground mb-2",
                    children: "Name"
                  }),
                  x.jsx(c0,
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:224:21",
                    type: "text",
                    value: n.name,
                    onChange: r => a( {
                      ...n,
                      name: r.target.value
                    }),
                    required:  ! 0,
                    className: "w-full"
                  })]
                }),
                x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:232:19",
                  children: [x.jsx("label",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:233:21",
                    className: "block text-sm font-medium text-foreground mb-2",
                    children: "Email"
                  }),
                  x.jsx(c0,
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:234:21",
                    type: "email",
                    value: n.email,
                    onChange: r => a( {
                      ...n,
                      email: r.target.value
                    }),
                    required:  ! 0,
                    className: "w-full"
                  })]
                }),
                x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:242:19",
                  children: [x.jsx("label",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:243:21",
                    className: "block text-sm font-medium text-foreground mb-2",
                    children: "Message"
                  }),
                  x.jsx(WN,
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:244:21",
                    value: n.message,
                    onChange: r => a( {
                      ...n,
                      message: r.target.value
                    }),
                    required:  ! 0,
                    rows: 4,
                    className: "w-full"
                  })]
                }),
                x.jsx(zo,
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:252:19",
                  type: "submit",
                  className: "w-full bg-primary hover:bg-primary/90 text-white font-semibold",
                  children: "Submit"
                })]
              })]
            })
          }),
          x.jsx(Gt,
           {
            "code-path": "src/pages/AdmissionsPage.tsx:260:13",
            direction: "right",
            delay: .2,
            children: x.jsxs("div",
             {
              "code-path": "src/pages/AdmissionsPage.tsx:261:15",
              className: "space-y-8",
              children: [x.jsxs("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:262:17",
                children: [x.jsx("h3",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:263:19",
                  className: "text-xl font-bold text-primary mb-6",
                  children: "Visit Us"
                }),
                x.jsxs("div",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:264:19",
                  className: "space-y-4",
                  children: [x.jsxs("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:265:21",
                    className: "flex items-start gap-4",
                    children: [x.jsx("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:266:23",
                      className: "w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0",
                      children: x.jsx(L0,
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:267:25",
                        className: "w-5 h-5 text-primary"
                      })
                    }),
                    x.jsxs("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:269:23",
                      children: [x.jsx("h4",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:270:25",
                        className: "font-semibold text-foreground",
                        children: "Address"
                      }),
                      x.jsx("p",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:271:25",
                        className: "text-muted-foreground",
                        children: "123 Education Avenue, Lourdes District, Metro Manila, Philippines 1000"
                      })]
                    })]
                  }),
                  x.jsxs("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:274:21",
                    className: "flex items-start gap-4",
                    children: [x.jsx("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:275:23",
                      className: "w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0",
                      children: x.jsx(ed,
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:276:25",
                        className: "w-5 h-5 text-primary"
                      })
                    }),
                    x.jsxs("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:278:23",
                      children: [x.jsx("h4",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:279:25",
                        className: "font-semibold text-foreground",
                        children: "Phone Numbers"
                      }),
                      x.jsx("p",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:280:25",
                        className: "text-muted-foreground",
                        children: "+63 912 345 6789"
                      }),
                      x.jsx("p",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:281:25",
                        className: "text-muted-foreground",
                        children: "+63 987 654 3210"
                      })]
                    })]
                  }),
                  x.jsxs("div",
                   {
                    "code-path": "src/pages/AdmissionsPage.tsx:284:21",
                    className: "flex items-start gap-4",
                    children: [x.jsx("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:285:23",
                      className: "w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0",
                      children: x.jsx(_0,
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:286:25",
                        className: "w-5 h-5 text-primary"
                      })
                    }),
                    x.jsxs("div",
                     {
                      "code-path": "src/pages/AdmissionsPage.tsx:288:23",
                      children: [x.jsx("h4",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:289:25",
                        className: "font-semibold text-foreground",
                        children: "Email"
                      }),
                      x.jsx("p",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:290:25",
                        className: "text-muted-foreground",
                        children: "info@olltci.edu.ph"
                      }),
                      x.jsx("p",
                       {
                        "code-path": "src/pages/AdmissionsPage.tsx:291:25",
                        className: "text-muted-foreground",
                        children: "admissions@olltci.edu.ph"
                      })]
                    })]
                  })]
                })]
              }),
              x.jsx("div",
               {
                "code-path": "src/pages/AdmissionsPage.tsx:298:17",
                className: "rounded-lg overflow-hidden shadow-sm",
                children: x.jsx("iframe",
                 {
                  "code-path": "src/pages/AdmissionsPage.tsx:299:19",
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8023!2d121.0333!3d14.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM0JzAwLjAiTiAxMjHCsDAyJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1609459200000!5m2!1sen!2sph",
                  width: "100%",
                  height: "250",
                  style:  {
                    border: 0
                  },
                  allowFullScreen:  ! 0,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  title: "School Location"
                })
              })]
            })
          })]
        })]
      })
    })]
  })
}
function eD() {
  return x.jsx(tw,
   {
    "code-path": "src/App.tsx:11:5",
    children: x.jsxs("div",
     {
      "code-path": "src/App.tsx:12:7",
      className: "min-h-screen bg-background",
      children: [x.jsx(ON,
       {
        "code-path": "src/App.tsx:13:9"
      }),
      x.jsx("main",
       {
        "code-path": "src/App.tsx:14:9",
        children: x.jsxs(DE,
         {
          "code-path": "src/App.tsx:15:11",
          children: [x.jsx(wl,
           {
            "code-path": "src/App.tsx:16:13",
            path: "/",
            element: x.jsx(GN,
             {
              "code-path": "src/App.tsx:16:38"
            })
          }),
          x.jsx(wl,
           {
            "code-path": "src/App.tsx:17:13",
            path: "/about",
            element: x.jsx(QN,
             {
              "code-path": "src/App.tsx:17:43"
            })
          }),
          x.jsx(wl,
           {
            "code-path": "src/App.tsx:18:13",
            path: "/admissions",
            element: x.jsx(tD,
             {
              "code-path": "src/App.tsx:18:48"
            })
          })]
        })
      }),
      x.jsx(zN,
       {
        "code-path": "src/App.tsx:21:9"
      }),
      x.jsx(UA,
       {
        "code-path": "src/App.tsx:22:9",
        position: "top-center"
      })]
    })
  })
}
O2.createRoot(document.getElementById("root")).render(x.jsx(S.StrictMode,
 {
  "code-path": "src/main.tsx:7:3",
  children: x.jsx(eD,
   {
    "code-path": "src/main.tsx:8:5"
  })
}));
