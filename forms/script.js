$(document).ready(function(){

     $("#loginForm").submit(function(event){
        event.preventDefault()

       let $username= $("#username").val()
       console.log($username)
       let $email = $("#email").val()
       let $emailpattern = 
       console.log($emailpattern.text("$email"))
       if(!$emailpattern.test($email)
     })





})