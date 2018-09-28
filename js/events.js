//define functions here

$(document).ready(function(){

// call functions here
getIt();

});

function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').get
  })
}

function pressIt(){
  $('input').on("keydown",function(e){
    if(e.key === "G"){
      alert("G was pressed!");
    }
    
  });
}

function submitIt(){
  $('submit').on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}