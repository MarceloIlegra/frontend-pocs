$(function(){
  $("#login-form").click(function(event){
    event.preventDefault();
    if($("#exampleInputEmail1").val() === "admin" && $("#exampleInputPassword1").val() === "admin"){
      alert("logado");
    } else {
      alert("Usuario invalido. Tente admin");
    }
  });
})
