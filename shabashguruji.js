var authorized = [
    "kinwatliveblog.blogspot.com",
    "lokbharatihindi.blogspot.com",
    "RSGiikwad.blogspot.com",
    "dnyaneshwarpatil.blogspot.com",
    "shabbasguru.blogspot.com",
    "vidyaughormadekute.blogspot.com",
    "httseduexpert.blogspot.com",
    "kondbadhumale.blogspot.com",
    "lgbadne78.blogspot.com",
    "shivajigangle.blogspot.com",
    "vdtsmprs.blogspot.com",
    "sanjaysawalesir.blogspot.com",
    "nivruttigode777.blogspot.com",
    "languageedgeblog.blogspot.com",
    "vinodkumarmane358.blogspot.com",
    "vdtsmprs.blogspot.com",
    "anjalikhandzode.blogspot.com",
    "diamondeducare.blogspot.com",
    "rsgiikwad.blogspot.com",
    "adityarajinfotech.blogspot.com",
    "httseduexpert.blogspot.com",
    "yashuikey.blogspot.com",
    "vmguruji.blogspot.com",
    "diwakarbaviskar.blogspot.com",
    "rajkumarchanne26.blogspot.com",
    "blogofenglishforjuniorcollege.blogspot.com",
    "vaishusamudre.blogspot.com",
    "palkhedkar69.blogspot.com",
    "anjumam123.blogspot.com",
    "Aapalishala.blogspot.com",
    "rajendrabedwal.blogspot.com",
    "pagalbeats.blogspot.com",
    "mungekarsatish.blogspot.com"
];
var RequestUrl = location.hostname;
if($.inArray(RequestUrl, authorized) > -1) {
$(".main").attr('style', 'visibility: visible;');
      $(".slider .widget").addClass("slide");
        $(".space").insertAfter(".slider .widget:last-child");
        $(".area").insertAfter(".slider .space");
      $("#main-services .widget").addClass("element");
        $("#course-section .widget").addClass("element3");
        $("#countdown-timer .widget:first-child").addClass("countdown-container");
        $("#countdown-timer #ContactForm2").addClass("contact-form");
        $("#exams-list .widget").addClass("card6");
        $("#top-categories .widget").addClass("element-41");
      
      $(".slider").attr('style', 'visibility: visible;');
    $("#main-services").attr('style', 'visibility: visible;');
    $(".container3").attr('style', 'visibility: visible;');
    $(".section-4").attr('style', 'visibility: visible;');
    $("#footer-area").attr('style', 'visibility: visible;');
  
      }
    
    else{
     $("head").remove();
    }
