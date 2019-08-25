$(function(){
    //==================================================================================Slider==================================================================================
    
    
   $('#slider').slider({
    value: 100,
    min: 0,
    max: 200,
    slide: function(event, ui){
        $('#amount').val('TK:' + ui.value);
    }
   });
    $('#demoPrice').val('TK:' + $('#slider').slider('value'));
  
//====================================================================================================== price slider =======================================
    
    var price = $('.state');
   var slider = $('#priceslider');
    
   slider.slider({
       range: true,
       min: 0, 
       max: 100,
       values: [10, 20],
       slide: function(event, ui){
           price.html(ui.values[0] + '-' + ui.values[1]);
       }
   });
    
   price.html(slider.slider("values", 0) + '-' + slider.slider("values", 1)); 
    
    
//==========================================================================img opacity===========================================
    
var opacityBody = $('.imgstate');
   var slider = $('.imgopacitySlider');
   
   slider.slider({
       min: 0,
       max: 100,
       value: 100,
       slide: custom
   });
    
    function custom(){
        var imgOpacity = slider.slider('value');
        
       $('.img').css({
            opacity: imgOpacity / 100,
        });
        
    opacityBody.html(imgOpacity/100);
    
    }
    
    
//============================================================================dragable==============================================================
    $('.innerdiv').draggable({
       containment: 'parent',
       cursor: "move",
       stack: "innerdiv",
   });
    
   $('.innerdiv').mousedown(function(){
      var maxZindex = 0;
      $(this).siblings('.innerdiv').each(function(){
          var currentZindex = Number($(this).css("z-index"));
          maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
      });
       
       $(this).css("z-index", maxZindex + 1);
   });
    
    
//=============================================================================================================================================
    $('.all li').draggable({
       helper: "clone",
       revert: "invalid",
       cursor: 'move',
   });
    
    $('.myfrontend').droppable({
        accept: 'li[data-value="fontend"]',
        activate: function(event, ui){
            $(this).addClass('custom');
        },
        deactivate: function(event, ui){
            $(this).removeClass('custom');
        },
        drop: function(event, ui){
            $('.myfrontend').append(ui.draggable);
        }
    });
    
    $('.mybackend').droppable({
        accept: 'li[data-value="backend"]',
        drop: function(event, ui){
            $('.mybackend').append(ui.draggable);
        },
        activate : function(event, ui){
            $(this).addClass('custom');
        },
        deactivate: function(event, ui){
            $(this).removeClass('custom');
        }
    });

//=====================================================================================selectable=============================================
    
    $('.selectNav').selectable();

//=================================================================================sortable========================================================
    
     $('.myselectNav').sortable({
        axis: "y",
        placeholder: '.widgetPalce',
    });
  
//==================================================================================datepicker=============================================================
    
    
$('#date').datepicker({
       changeMonth: true,
       changeYear: true,
       dateFormat: 'dd/mm/yy',
       showOn: 'both',
       buttonText: "BDate",
   });
 
var technology = [
'html','css', 'javaScript', 'php', 'mysql', 'wordpress', 'bootstrap', 'jquery', 'react', 'es6'
];
    
    $('#catagory').autocomplete({
        source: technology,
        minLength: 2,
    });


    
//================================================================================= tabs and accordion ============================ ==================================
    
    $('.tabs').tabs();
    $('.accordion').accordion();

    
});


    