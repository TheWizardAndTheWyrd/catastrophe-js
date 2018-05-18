(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'catastrophe-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'catastrophe-js'.");
    }
    root['catastrophe-js'] = factory(typeof this['catastrophe-js'] === 'undefined' ? {} : this['catastrophe-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var Unit = Kotlin.kotlin.Unit;
  var appendElement = Kotlin.kotlin.dom.appendElement_ldvnw0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Pair = Kotlin.kotlin.Pair;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  function main$lambda(closure$foldResult) {
    return function ($receiver) {
      appendText($receiver, 'Fold = ' + closure$foldResult);
      return Unit;
    };
  }
  function main$lambda_0(closure$cuspResult) {
    return function ($receiver) {
      appendText($receiver, 'Cusp = ' + closure$cuspResult);
      return Unit;
    };
  }
  function main$lambda_1(closure$swallowtailResult) {
    return function ($receiver) {
      appendText($receiver, 'Swallowtail = ' + closure$swallowtailResult);
      return Unit;
    };
  }
  function main$lambda_2(closure$butterflyResult) {
    return function ($receiver) {
      appendText($receiver, 'Butterfly = ' + closure$butterflyResult);
      return Unit;
    };
  }
  function main$lambda_3(closure$hyperbolicResult) {
    return function ($receiver) {
      appendText($receiver, 'Hyperbolic = ' + closure$hyperbolicResult);
      return Unit;
    };
  }
  function main$lambda_4(closure$ellipticResult) {
    return function ($receiver) {
      appendText($receiver, 'Elliptic = ' + closure$ellipticResult);
      return Unit;
    };
  }
  function main$lambda_5(closure$parabolicResult) {
    return function ($receiver) {
      appendText($receiver, 'Parabolic = ' + closure$parabolicResult);
      return Unit;
    };
  }
  function main$lambda_6(closure$resultMatrix) {
    return function ($receiver) {
      appendText($receiver, 'First Result Matrix value = ' + closure$resultMatrix.value);
      return Unit;
    };
  }
  function main$lambda_7(closure$stressResult0) {
    return function ($receiver) {
      appendText($receiver, 'Cusp Stress Result 0 = ' + closure$stressResult0);
      return Unit;
    };
  }
  function main$lambda_8(closure$resultAB, closure$i, closure$resultX) {
    return function ($receiver) {
      appendText($receiver, 'a=' + closure$resultAB.value.first[closure$i] + ', b=' + closure$resultAB.value.second[closure$i] + ', V=' + closure$resultX[closure$i]);
      return Unit;
    };
  }
  function main(args) {
    var foldResult = Fold_getInstance().v(1.0, 1.01);
    println('Fold catastrophe V=' + foldResult);
    var cuspResult = Cusp_getInstance().v(1.0, 1.0, 1.01);
    println('Cusp catastrophe V=' + cuspResult);
    var swallowtailResult = Swallowtail_getInstance().v(1.0, 1.0, 1.0, 1.01);
    println('Swallowtail catastrophe V=' + swallowtailResult);
    var butterflyResult = Butterfly_getInstance().v(1.0, 1.0, 1.0, 1.0, 1.01);
    println('Butterfly catastrophe V=' + butterflyResult);
    var hyperbolicResult = Hyperbolic_getInstance().v(1.0, 1.0, 1.0, 1.0, 1.01);
    println('Hyperbolic catastrophe V=' + hyperbolicResult);
    var ellipticResult = Elliptic_getInstance().v(1.0, 1.0, 1.0, 1.0, 1.01);
    println('Elliptic catastrophe V=' + ellipticResult);
    var parabolicResult = Parabolic_getInstance().v(1.0, 1.0, 1.0, 1.0, 1.01, 1.0);
    println('Parabolic catastrophe V=' + parabolicResult);
    var resultMatrix = testMatrix.createInstance();
    println('Result matrix value: ' + resultMatrix.value);
    resultMatrix.value.first[0] = 'Hello';
    resultMatrix.value.second[0] = 'World!';
    println('Result matrix value: ' + resultMatrix.value);
    var outputContainer = ensureNotNull(document.getElementById('outputContainer'));
    appendElement(outputContainer, 'p', main$lambda(foldResult));
    appendElement(outputContainer, 'p', main$lambda_0(cuspResult));
    appendElement(outputContainer, 'p', main$lambda_1(swallowtailResult));
    appendElement(outputContainer, 'p', main$lambda_2(butterflyResult));
    appendElement(outputContainer, 'p', main$lambda_3(hyperbolicResult));
    appendElement(outputContainer, 'p', main$lambda_4(ellipticResult));
    appendElement(outputContainer, 'p', main$lambda_5(parabolicResult));
    appendElement(outputContainer, 'p', main$lambda_6(resultMatrix));
    var stressBaseX = 0.02;
    var stressBaseA = calcA(stressBaseX);
    var stressBaseB = calcB(stressBaseX);
    var stressResult0 = Cusp_getInstance().v(stressBaseA, stressBaseB, stressBaseX);
    println('stressResult0: ' + stressResult0);
    appendElement(outputContainer, 'p', main$lambda_7(stressResult0));
    var resultAB = new ResultMatrix(0.0);
    var resultX = [];
    for (var i = 0; i <= 10; i++) {
      stressBaseX += 0.01;
      var a = calcA(stressBaseX);
      var b = calcB(stressBaseX);
      var temp = Cusp_getInstance().v(a, b, stressBaseX);
      resultAB.value.first[i] = a;
      resultAB.value.second[i] = b;
      resultX[i] = temp;
    }
    for (var i_0 = 0; i_0 <= 10; i_0++) {
      appendElement(outputContainer, 'p', main$lambda_8(resultAB, i_0, resultX));
      println('a=' + resultAB.value.first[i_0] + ', b=' + resultAB.value.second[i_0] + ', V=' + resultX[i_0]);
    }
  }
  var Math_0 = Math;
  function calcB(stressBaseX) {
    return -8 * Math_0.pow(stressBaseX, 3);
  }
  function calcA(stressBaseX) {
    return -6 * Math_0.pow(stressBaseX, 2);
  }
  function Butterfly() {
    Butterfly_instance = this;
  }
  Butterfly.prototype.v = function (a, b, c, d, x) {
    return Math_0.pow(x, 6) + a * Math_0.pow(x, 4) + b * Math_0.pow(x, 3) + c * Math_0.pow(x, 2) + d * x;
  };
  Butterfly.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Butterfly',
    interfaces: []
  };
  var Butterfly_instance = null;
  function Butterfly_getInstance() {
    if (Butterfly_instance === null) {
      new Butterfly();
    }
    return Butterfly_instance;
  }
  function Cusp() {
    Cusp_instance = this;
  }
  Cusp.prototype.v = function (a, b, x) {
    return Math_0.pow(x, 4) + a * Math_0.pow(x, 2) + b * x;
  };
  Cusp.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cusp',
    interfaces: []
  };
  var Cusp_instance = null;
  function Cusp_getInstance() {
    if (Cusp_instance === null) {
      new Cusp();
    }
    return Cusp_instance;
  }
  function Fold() {
    Fold_instance = this;
  }
  Fold.prototype.v = function (a, x) {
    return Math_0.pow(x, 3) + a * x;
  };
  Fold.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fold',
    interfaces: []
  };
  var Fold_instance = null;
  function Fold_getInstance() {
    if (Fold_instance === null) {
      new Fold();
    }
    return Fold_instance;
  }
  function Swallowtail() {
    Swallowtail_instance = this;
  }
  Swallowtail.prototype.v = function (a, b, c, x) {
    return Math_0.pow(x, 5) + a * Math_0.pow(x, 3) + b * Math_0.pow(x, 2) + c * x;
  };
  Swallowtail.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Swallowtail',
    interfaces: []
  };
  var Swallowtail_instance = null;
  function Swallowtail_getInstance() {
    if (Swallowtail_instance === null) {
      new Swallowtail();
    }
    return Swallowtail_instance;
  }
  function ResultMatrix(t) {
    this.t_0 = t;
    this.value = new Pair([], []);
  }
  ResultMatrix.prototype.createInstance = function () {
    return new ResultMatrix(this.t_0);
  };
  ResultMatrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResultMatrix',
    interfaces: []
  };
  var testMatrix;
  function Elliptic() {
    Elliptic_instance = this;
  }
  Elliptic.prototype.v = function (a, b, c, x, y) {
    return Math_0.pow(x, 3) / 3 - x * Math_0.pow(y, 2) + a * (Math_0.pow(x, 2) + Math_0.pow(y, 2)) + b * x + c * y;
  };
  Elliptic.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Elliptic',
    interfaces: []
  };
  var Elliptic_instance = null;
  function Elliptic_getInstance() {
    if (Elliptic_instance === null) {
      new Elliptic();
    }
    return Elliptic_instance;
  }
  function Hyperbolic() {
    Hyperbolic_instance = this;
  }
  Hyperbolic.prototype.v = function (a, b, c, x, y) {
    return Math_0.pow(x, 3) + Math_0.pow(y, 3) + a * x * y + b * x + c * y;
  };
  Hyperbolic.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Hyperbolic',
    interfaces: []
  };
  var Hyperbolic_instance = null;
  function Hyperbolic_getInstance() {
    if (Hyperbolic_instance === null) {
      new Hyperbolic();
    }
    return Hyperbolic_instance;
  }
  function Parabolic() {
    Parabolic_instance = this;
  }
  Parabolic.prototype.v = function (a, b, c, d, x, y) {
    return Math_0.pow(x, 2) * y + Math_0.pow(y, 4) + a * Math_0.pow(x, 2) + b * Math_0.pow(y, 2) + c * x + d * y;
  };
  Parabolic.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Parabolic',
    interfaces: []
  };
  var Parabolic_instance = null;
  function Parabolic_getInstance() {
    if (Parabolic_instance === null) {
      new Parabolic();
    }
    return Parabolic_instance;
  }
  _.demoValues = main;
  var package$catastrophe = _.catastrophe || (_.catastrophe = {});
  Object.defineProperty(package$catastrophe, 'Butterfly', {
    get: Butterfly_getInstance
  });
  Object.defineProperty(package$catastrophe, 'Cusp', {
    get: Cusp_getInstance
  });
  Object.defineProperty(package$catastrophe, 'Fold', {
    get: Fold_getInstance
  });
  Object.defineProperty(package$catastrophe, 'Swallowtail', {
    get: Swallowtail_getInstance
  });
  var package$model = package$catastrophe.model || (package$catastrophe.model = {});
  package$model.ResultMatrix = ResultMatrix;
  Object.defineProperty(package$model, 'testMatrix', {
    get: function () {
      return testMatrix;
    }
  });
  var package$umbilic = package$catastrophe.umbilic || (package$catastrophe.umbilic = {});
  Object.defineProperty(package$umbilic, 'Elliptic', {
    get: Elliptic_getInstance
  });
  Object.defineProperty(package$umbilic, 'Hyperbolic', {
    get: Hyperbolic_getInstance
  });
  Object.defineProperty(package$umbilic, 'Parabolic', {
    get: Parabolic_getInstance
  });
  testMatrix = new ResultMatrix(typeof kotlin_js_internal_StringCompanionObject);
  main([]);
  Kotlin.defineModule('catastrophe-js', _);
  return _;
}));

//# sourceMappingURL=catastrophe-js.js.map
