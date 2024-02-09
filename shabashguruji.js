var authorized = ["pagalbeats.blogspot.com", "probusiness-websitedevelopers.blogspot.com", "www.studentvisa24.com"];
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
