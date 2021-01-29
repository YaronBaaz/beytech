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
          $('nav').css("height","75px")
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
    
    

    /*  */

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".course");

  /*console.log("top: " +pageTop)
  console.log("botton: " + pageBottom)
  console.log(tags.length)*/

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } /*else {
      $(tag).removeClass("visible");
    }*/
  }
});





/* Jumbotron */

const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(run, 4000);

/* Text on middle */
const text = "LyTech Tutoring";
const h1 = document.getElementById("h1")

let index = 0;
let end = 0;

function writeText() {

   
    h1.innerText = text.slice(0, index) ;
    if (end == 0){
    index++;}
    
   

    if (index > text.length +44) {
        end = 1;}

        if (end == 1){
         index--;
        }
        if (index == 1){
          end = 0;
        }
    
}

setInterval(writeText, 100);


