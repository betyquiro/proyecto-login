function validate(){
   var username = document.getElementById("username").value;
   var password= document.getElementById("password").value;
   if (username == 'pepe' && password == 'pepe'){
       window.location = "./html/resultado_ok.html";
   } else {
       window.location = "./html/resultado_error.html";
   }
}