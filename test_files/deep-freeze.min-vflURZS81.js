define(["require","exports","module"],function(e,t,n){n.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])}),t}}.bind(Object.create(null)));
//# sourceMappingURL=deep-freeze.min.js-vflUlnH8r.map