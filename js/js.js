//
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

 
// validate text fields

  function validateform(){
      
    inputvalue = document.getElementById("name").value;
    inputvalueemail = document.getElementById("Email").value;
    inputvaluemensaje = document.getElementById("mensaje").value;

    console.log(inputvalue.length)
    if( inputvalue.length <1)
       document.getElementById("invalidname").style.display="block"
    else
       document.getElementById("invalidname").style.display="none"

    if( inputvalueemail.length <1)
    document.getElementById("invalidemail").style.display="block"
    else
    document.getElementById("invalidemail").style.display="none"

    if( inputvaluemensaje.length <1)
    document.getElementById("invalidmensaje").style.display="block"
    else
    document.getElementById("invalidmensaje").style.display="none"

   
  }
