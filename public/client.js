$(function() {
  console.log('hello world :o')
})
$("#option1").click(function() {
  $("body").css("background-color", "#888888");
})
//option 1 makes it brighter
$("#option2").click(function() {
  $("body").css("background-color", "#787878");
})
//option 2 makes it darker
$("#option3").click(function() {
  $("body").css("background-color", "#909090");
})
//option 3 makes it brighter