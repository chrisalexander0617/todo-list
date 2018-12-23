//Check off specific todos on click
//click on li in ul to perform the function
$('ul').on('click', 'li', function(){
 $(this).toggleClass('completed')
 });

//make span delete li on Click

//click on the span in ul to perform function
//not using li since li's are the changing element
//something they are or arent present
$('ul').on('click', 'span', function remove(){
  //fading out the clicked element
  //this parent is 'li'
  $(this).parent().fadeOut(function remove(){
    //completely removing the element (li)
    $(this).remove();
  });
  //stop the bubbling
  event.stopPropagation();
})

//click on X to delete todo
$("input[type='text']").keypress(function(e){
  //when the user press the enter key ('13')
  if(e.which === 13){
    //creating a var that holds the value of the text input
    var todoText = $(this).val();
    //clearing text input after enter
    $(this).val("")
    //create a new li and add to ul
    $('ul').append("<li><span><i class='far fa-minus-square'></i></span> " + todoText + "</li>")

  }

})

//hide the input
$('#flip').click(function hideInput(){
  $("input[type='text']").fadeToggle(function flip(){
    var flip = {transform: 'rotate(180deg)'}
  
  });

})
