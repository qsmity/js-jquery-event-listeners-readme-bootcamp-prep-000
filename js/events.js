//define functions here

$(document).ready(function(){

// call functions here

});

var getIt = function(){
$('p').on("click", function(){
  alert ('hey!')
})
}

var frameIt = function(){
  $('img').on('load', function(){
    img.classList.add("tasty")
  })
}
var pressIt = function(){
  $('input').on('keydown', function(){
    if (keydown.which == 71){
      alert('g was pressed')
    }
})
}
  
var submitIt = function(){
  
}