var vm = new Vue({
  el: "#app",
  data: {
    rawHtml: "<span style='color:red'>This should be red.</span>",
    isButtonDisabled: false, //null undefined false | true
    number:5,
    ok:false,
    message:"Hello Vue！",
    id:5
  }
});