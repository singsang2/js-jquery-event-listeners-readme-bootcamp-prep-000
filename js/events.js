//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});

function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('p').on("click", function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
  $('input').on("keydown",function(e){
    if(e.key === "G"){
      alert("G was pressed!");
    }
    
  });
}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}