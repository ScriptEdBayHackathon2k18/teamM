$(function() {
  var data;
  function setData(d) {
    data = d;
  }
  function fetchData(){
    
    $.getJSON("/data.json", function(data) {
      console.log( "success" );
      setData(data);
      setUpPage(data[0]);
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
  
  fetchData(); 
   
  $("#leftButton").click(handleButtonClick);
  $("#middleButton").click(handleButtonClick);
  $("#rightButton").click(handleButtonClick);
  
  function handleButtonClick(){
    var screenId;
    screenId = $(this).data("next-screen");
    console.log(data[screenId]);
    setUpPage(data[screenId]);
  };
  
  function setUpPage(screen){
    var content = screen.content;
    $("#content").html(content);
    console.log("hey");
    $("#leftbutton").data("next-screen", screen.options.leftbutton.link_id);
    $("#leftbutton").text(screen.options.leftbutton.text);
    console.log("no");
    if(screen.options.middlebutton){
      $("#middlebutton").data("next-screen", screen.options.middlebutton.link_id);
      $("#middlebutton").text(screen.options.middlebutton.text);
    }
    if(screen.options.rightbutton){    
        $("#rightbutton").data("next-screen", screen.options.rightbutton.link_id);
        $("#rightbutton").text(screen.options.rightbutton.text);
    }
  };
  
})