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
  var getCallableRef = Kotlin.getCallableRef;
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
  function main$lambda_9(closure$resultSigma6d3) {
    return function ($receiver) {
      appendText($receiver, 'Sigma for 6d3 = ' + closure$resultSigma6d3);
      return Unit;
    };
  }
  function main$lambda_10(closure$resultSigma3d6) {
    return function ($receiver) {
      appendText($receiver, 'Sigma for 3d6 = ' + closure$resultSigma3d6);
      return Unit;
    };
  }
  function main(args) {
    var foldResult = Fold_getInstance().v(0.054054054048649, 3 / 10.0);
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
    var resultSigma6d3 = (new XdYStandardDeviation()).getSigma_lu1900$(6.0, 3.0);
    println('resultSigma6d3: ' + resultSigma6d3);
    appendElement(outputContainer, 'p', main$lambda_9(resultSigma6d3));
    var resultSigma3d6 = (new XdYStandardDeviation()).getSigma_lu1900$(3.0, 6.0);
    println('resultSigma3d6: ' + resultSigma3d6);
    appendElement(outputContainer, 'p', main$lambda_10(resultSigma3d6));
    var commonSigmasForXdY = new XdYStandardDeviation();
    println('commonSigmasForXdY: ' + commonSigmasForXdY);
    println('Calculating useful and interesting standard deviations for XdY...');
    commonSigmasForXdY.populateStandardDeviations();
    println(getCallableRef('populateStandardDeviations', function ($receiver) {
      return $receiver.populateStandardDeviations(), Unit;
    }.bind(null, commonSigmasForXdY)).toString() + ' is complete.');
    commonSigmasForXdY.printCommonDicePoolStandardDeviations();
    var commonMeansForXdY = new XdYStandardDeviation();
    println('commonMeansForXdY: ' + commonMeansForXdY);
    println('Calculating useful and interesting standard average rolls for XdY...');
    commonMeansForXdY.populateStandardMeans();
    println(getCallableRef('populateStandardMeans', function ($receiver) {
      return $receiver.populateStandardMeans(), Unit;
    }.bind(null, commonMeansForXdY)).toString() + ' is complete.');
    commonMeansForXdY.printCommonDicePoolStandardMeans();
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
  function CumulativeStandardDeviation() {
    this.n_0 = 0;
    this.sum_0 = 0.0;
    this.sum2_0 = 0.0;
  }
  CumulativeStandardDeviation.prototype.getNextSigma_14dthe$ = function (x) {
    this.n_0 = this.n_0 + 1 | 0;
    this.sum_0 += x;
    this.sum2_0 += x * x;
    return Math.sqrt(this.sum2_0 / this.n_0 - this.sum_0 * this.sum_0 / this.n_0 / this.n_0);
  };
  CumulativeStandardDeviation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CumulativeStandardDeviation',
    interfaces: []
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function XdYStandardDeviation() {
    this.commonDicePoolStandardDeviations_0 = LinkedHashMap_init();
    this.commonDicePoolStandardMeans_0 = LinkedHashMap_init();
  }
  XdYStandardDeviation.prototype.getSigma_lu1900$ = function (x, y) {
    return Math.sqrt(x * (Math.pow(y, 2.0) - 1) / 12);
  };
  XdYStandardDeviation.prototype.populateStandardDeviations = function () {
    var $receiver = this.commonDicePoolStandardDeviations_0;
    var value = this.getSigma_lu1900$(1.0, 6.0);
    $receiver.put_xwzc9p$('1d6', value);
    var $receiver_0 = this.commonDicePoolStandardDeviations_0;
    var value_0 = this.getSigma_lu1900$(2.0, 6.0);
    $receiver_0.put_xwzc9p$('2d6', value_0);
    var $receiver_1 = this.commonDicePoolStandardDeviations_0;
    var value_1 = this.getSigma_lu1900$(3.0, 6.0);
    $receiver_1.put_xwzc9p$('3d6', value_1);
    var $receiver_2 = this.commonDicePoolStandardDeviations_0;
    var value_2 = this.getSigma_lu1900$(4.0, 6.0);
    $receiver_2.put_xwzc9p$('4d6', value_2);
    var $receiver_3 = this.commonDicePoolStandardDeviations_0;
    var value_3 = this.getSigma_lu1900$(5.0, 6.0);
    $receiver_3.put_xwzc9p$('5d6', value_3);
    var $receiver_4 = this.commonDicePoolStandardDeviations_0;
    var value_4 = this.getSigma_lu1900$(6.0, 6.0);
    $receiver_4.put_xwzc9p$('6d6', value_4);
    var $receiver_5 = this.commonDicePoolStandardDeviations_0;
    var value_5 = this.getSigma_lu1900$(7.0, 6.0);
    $receiver_5.put_xwzc9p$('7d6', value_5);
    var $receiver_6 = this.commonDicePoolStandardDeviations_0;
    var value_6 = this.getSigma_lu1900$(8.0, 6.0);
    $receiver_6.put_xwzc9p$('8d6', value_6);
  };
  XdYStandardDeviation.prototype.printCommonDicePoolStandardDeviations = function () {
    var tmp$;
    tmp$ = this.commonDicePoolStandardDeviations_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element.key + ' has a standard deviation of: ' + element.value);
    }
  };
  XdYStandardDeviation.prototype.getMean_lu1900$ = function (x, y) {
    return Math.floor(x * (y + 1) / 2);
  };
  XdYStandardDeviation.prototype.populateStandardMeans = function () {
    var $receiver = this.commonDicePoolStandardMeans_0;
    var value = this.getMean_lu1900$(1.0, 6.0);
    $receiver.put_xwzc9p$('1d6', value);
    var $receiver_0 = this.commonDicePoolStandardMeans_0;
    var value_0 = this.getMean_lu1900$(2.0, 6.0);
    $receiver_0.put_xwzc9p$('2d6', value_0);
    var $receiver_1 = this.commonDicePoolStandardMeans_0;
    var value_1 = this.getMean_lu1900$(3.0, 6.0);
    $receiver_1.put_xwzc9p$('3d6', value_1);
    var $receiver_2 = this.commonDicePoolStandardMeans_0;
    var value_2 = this.getMean_lu1900$(4.0, 6.0);
    $receiver_2.put_xwzc9p$('4d6', value_2);
    var $receiver_3 = this.commonDicePoolStandardMeans_0;
    var value_3 = this.getMean_lu1900$(4.0, 6.0);
    $receiver_3.put_xwzc9p$('5d6', value_3);
    var $receiver_4 = this.commonDicePoolStandardMeans_0;
    var value_4 = this.getMean_lu1900$(4.0, 6.0);
    $receiver_4.put_xwzc9p$('6d6', value_4);
    var $receiver_5 = this.commonDicePoolStandardMeans_0;
    var value_5 = this.getMean_lu1900$(4.0, 6.0);
    $receiver_5.put_xwzc9p$('7d6', value_5);
    var $receiver_6 = this.commonDicePoolStandardMeans_0;
    var value_6 = this.getMean_lu1900$(4.0, 6.0);
    $receiver_6.put_xwzc9p$('8d6', value_6);
  };
  XdYStandardDeviation.prototype.printCommonDicePoolStandardMeans = function () {
    var tmp$;
    tmp$ = this.commonDicePoolStandardMeans_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      println(element.key + ' has an average roll of: ' + element.value);
    }
  };
  XdYStandardDeviation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XdYStandardDeviation',
    interfaces: []
  };
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
  var package$statistics = package$catastrophe.statistics || (package$catastrophe.statistics = {});
  package$statistics.CumulativeStandardDeviation = CumulativeStandardDeviation;
  package$statistics.XdYStandardDeviation = XdYStandardDeviation;
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
