var obj = {
  foo: "bar"
};
Object.freeze(obj);

var vm = new Vue({
  el: "#app",
  data: obj
});

var data = { a: 1 };
var vm = new Vue({
  el: "#example",
  data: data
});
console.log(vm.$data === data); //  ==>true
console.log(vm.$el === document.getElementById("example")); //  ==>true

//$watch是一个实例方法
vm.$watch("a", function(newValue, oldVvalue) {
    //这个回调将在 'vm.a' 改变后调用
});
