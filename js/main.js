console.log(window.innerWidth)


    console.log("working")
    $(document).ready(function(){
           
      $(window).scroll(function(){
        if(window.innerWidth > 450){
            if($(window).scrollTop()>150){
          
                $('nav').css({"height": "60px", "transition": "height 0.5s ease 0s"})
                
                $('#logopic').css({"width": "45px", "transition": "width 1s ease 0s"})
                $('#logotext').css({"font-size": "22px", "transition": "font-size 1s ease 0s"})
                $('li').css({"font-size": "15px", "transition": "font-size 1s ease 0s"})
                $('.dropdown-content').css({"height": "160px", "transition": "height 0.5s ease 0s"})
                $('.side').css("height","30px")
                $('.side2').css("top","90px")
                $('#dropside-element').css({"font-size": "14px", "top":"-9px"})
                $('#dropside-element2').css({"font-size": "14px", "top":"-9px"})
                
                
              }else{
                $('nav').css("height","65px")
                $('#logopic').css("width", "65px")
                $('#logotext').css("font-size", "30px")
                $('li').css("font-size", "18px")
                $('.dropdown-content').css("height", "200px")
                $('.side').css("height","45px")
                $('#dropside-element').css({"font-size": "16px", "top":"-7px"})
                $('#dropside-element2').css({"font-size": "16px", "top":"-7px"})
              
              }
      }
    
      });
    
    });
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        

        return check;
        
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
                
            }
            
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
           
            
        }
        
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        
        $(thisAlert).addClass('alert-validate');
        
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        
        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);

const submit= document.getElementById("contact100-form-btn");



submit.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const nameval = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    if (email == "" || nameval == "" || message == ""){
    
    }
    else{var myText = "Application Submitted.";
    alert (myText);}
    
});
