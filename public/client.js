$(function() {
  var data;
  function setData(data) {
    data = data;
  }
  function fetchData(){
    $.getJSON("/dev.json", function(data) {
      console.log( "success" );
      setData(data);
    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function(error) {
      console.log( "error" );
      console.log(error);
    })
    .always(function() {
      console.log( "complete" );
    });
  }
  
  var data = fetchData(); 
  console.log(data);
  
  $("#leftButton").click(function() {
    console.log(data);
    handleButtonClick
  });
  $("#middleButton").click(handleButtonClick);
  $("#rightButton").click(handleButtonClick);
  
  function handleButtonClick(){
    var screenId;
    screenId = $(this).data("next-screen");
    setUpPage(screenId)
  };
  
  function setUpPage(data, id){
    var content = data[id][content];
    console.log(content);
  };
  
})