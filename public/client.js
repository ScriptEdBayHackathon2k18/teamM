 $(function() {
  console.log('hello world :o')
})
$("#optionone").click(function() {
  $("body").css("background-color", "#888888");
  
})
//option 1 makes it brighter
$("#optiontwo").click(function() {
  $("body").css("background-color", "#787878");
})
//option 2 makes it darker
var success = function(data) {
  console.log("here is the data", data);
}
var fetchData = function(){
  $.getJSON("/data.json", function(result) {
    console.log("getjson handler");
    console.log(result);
  });
}