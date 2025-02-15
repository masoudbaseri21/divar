$(document).ready(function(){
    $(".karaj-box").click(function(){
        $(".karaj-jQ-box").slideToggle();
        $(".Categories-jQ").slideUp();
        $(".My-divar-jQ").slideUp();
    })
    // 
    $(".Categories-box").click(function(){
        $(".Categories-jQ").slideToggle();
        $(".karaj-jQ-box").slideUp();
        $(".My-divar-jQ").slideUp();
    })
    // 
    $(".REAL-ESTATES").mouseover(function(){
        $(".Real-estates-jQ-mouse-over").show();
        $(".CAR-jQ-mouse-over").hide();
        $(".DIGITALS-jQ").hide();
    })
    $(".REAL-ESTATES").mouseout(function(){
        $(".Real-estates-jQ-mouse-over").hide();
    })
    // 
    $(".CARS").mouseover(function(){
        $(".CAR-jQ-mouse-over").show();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".DIGITALS-jQ").hide();
    })
    $(".CARS").mouseout(function(){
        $(".CAR-jQ-mouse-over").hide();
    })
    // 
    $(".DIGITALS-1").mouseover(function(){
        $(".DIGITALS-jQ").show();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".DIGITALS-1").mouseout(function(){
        $(".DIGITALS-jQ").hide();
    })
    // 
    $(".HOME-KITCHEN-jQ").mouseover(function(){
        $(".HOME-KITCHEN").show();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".HOME-KITCHEN-jQ").mouseout(function(){
        $(".HOME-KITCHEN").hide();
    })
    // 
    $(".Services-jQ").mouseover(function(){
        $(".Services-mouse-over").show();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".Services-jQ").mouseout(function(){
        $(".Services-mouse-over").hide();
    })
    // 
    $(".personal-items-jQ").mouseover(function(){
        $(".personal-items-mouseover").show();
        $(".Services-mouse-over").hide();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
        $(".Entertainment-and-leisure-mouseover-jQ").hide();
    })
    $(".Services-jQ").mouseout(function(){
        $(".personal-items-mouseover").hide();
    })
    // 
    $(".Entertainment-and-leisure-jQ").mouseover(function(){
        $(".Entertainment-and-leisure-mouseover-jQ").show();
        $(".personal-items-mouseover").hide();
        $(".Services-mouse-over").hide();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".Entertainment-and-leisure-jQ").mouseout(function(){
        $(".Entertainment-and-leisure-mouseover-jQ").hide();
    })
    //
    $(".social-jQ").mouseover(function(){
        $(".social-mouseover-jQ").show();
        $(".Entertainment-and-leisure-mouseover-jQ").hide();
        $(".personal-items-mouseover").hide();
        $(".Services-mouse-over").hide();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".social-jQ").mouseout(function(){
        $(".social-mouseover-jQ").hide();
    })
    // 
    $(".Industrial-equipment-jQ").mouseover(function(){
        $(".Industrial-equipment-mouseover-jQ").show();
        $(".social-mouseover-jQ").hide();
        $(".Entertainment-and-leisure-mouseover-jQ").hide();
        $(".personal-items-mouseover").hide();
        $(".Services-mouse-over").hide();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".Industrial-equipment-jQ").mouseout(function(){
        $(".Industrial-equipment-mouseover-jQ").hide();
    })
    // 
    $(".Recruitment-and-employment-jQ").mouseover(function(){
        $(".Recruitment-and-employment-mouseover-jQ").show();
        $(".Industrial-equipment-mouseover-jQ").hide();
        $(".social-mouseover-jQ").hide();
        $(".Entertainment-and-leisure-mouseover-jQ").hide();
        $(".personal-items-mouseover").hide();
        $(".Services-mouse-over").hide();
        $(".HOME-KITCHEN").hide();
        $(".DIGITALS-jQ").hide();
        $(".Real-estates-jQ-mouse-over").hide();
        $(".CAR-jQ-mouse-over").hide();
    })
    $(".Recruitment-and-employment-jQ").mouseout(function(){
        $(".Recruitment-and-employment-mouseover-jQ").hide();
    })
    // 
    $(".my-divar-box").click(function(){
        $(".My-divar-jQ").slideToggle();
        $(".Categories-jQ").slideUp();
        $(".karaj-jQ-box").slideUp();
    })
    // 
    // 
    // 
    // 
    $(".button-modal").on("click",function(e) {
        $(".modal-container-fluid").addClass("active");
    })
    $(".modal-close").on("click" , function (e){
        $(".modal-container-fluid").removeClass("active");
    })
    // 
    // 
    // 
    $(".location-box-jQ").click(function(){
        $(".location-box").slideToggle("fast");
        var state= $(".fa").hasClass('fa-down');
        if(state){
            $('.fa-down').remove();
            $('.location-box-jQ').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-up fa-up"></i>');
        }
        else{
            $('.location-box-jQ').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-down fa-down"></i>');
            $('.fa-up').remove();

        }
    })
    $(".price-box").click(function(){
        $(".price-box-jQ").slideToggle("fast");
        var state= $(".fa").hasClass('fa-down-price');
        if(state){
            $('.fa-down-price').remove();
            $('.price-box').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-up fa-up-price"></i>');
        }
        else{
            $('.price-box').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-down fa-down-price"></i>');
            $('.fa-up-price').remove();
            
        }

    })

    // $(".fa-down-price").click(function(){
        
    // })
    // $(".fa-up-price").click(function(){
    //     $(".fa-up-price").hide();
    //     $(".fa-down-price").show();
    // })
    // 
    // /
    // 
    $(".Ad-status").click(function(){
        $(".Ad-status-jQ").slideToggle("fast");
        var state= $(".fa").hasClass('fa-down-ads');
        if(state){
            $('.fa-down-ads').remove();
            $('.Ad-status').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-up fa-up-ads"></i>');
        }
        else{
            $('.Ad-status').prepend(' <i style="color: #9b9b9b;" class="fa fa-angle-down fa-down-ads"></i>');
            $('.fa-up-ads').remove();

        }
    })
    // 
    // 
    // 
    $(".location-box").on("click",function(e) {
        $(".modal-2-container-fluid").addClass("active");
    })
    $(".modal-2-close").on("click" , function (e){
        $(".modal-2-container-fluid").removeClass("active");
    })
    // 
    // 
    // 
    $(".fa-down").click(function(){
        $(".fa-down").hide();
        $(".fa-up").show();
    })
    $(".fa-up").click(function(){
        $(".fa-up").hide();
        $(".fa-down").show();
    })
    // 
    // 
    
    // 
    $(".fa-down-ads").click(function(){
        $(".fa-down-ads").hide();
        $(".fa-up-ads").show();
    })
    $(".fa-up-ads").click(function(){
        $(".fa-up-ads").hide();
        $(".fa-down-ads").show();
    })
    // 
    // menu-down-price
    $(".menu-down-price").click(function(){
        $(".menu-down-price").hide();
        $(".menu-up-price").show();
    })
    $(".menu-up-price").click(function(){
        $(".menu-up-price").hide();
        $(".menu-down-price").show();
    })
    // menu-down-price-2
    // $(".menu-down-price-2").click(function(){
    //     $(".menu-down-price-2").hide();
    //     $(".menu-up-price-2").show();
    // })
    // $(".menu-up-price-2").click(function(){
    //     $(".menu-up-price-2").hide();
    //     $(".menu-down-price-2").show();
    // })
    // price-select-jQ
    $(".price-select-jQ").click(function(){
        $(".slidtoggle-for-price").slideToggle();
        $(".slidtoggle-for-price-2").slideUp();
    })
    // price-select-jQ-2
    $(".price-select-jQ-2").click(function(){
        $(".slidtoggle-for-price-2").slideToggle();
        $(".slidtoggle-for-price").slideUp();
        $(".menu-down-price-2").hide();
        // $(".menu-up-price-2").show(); 
        var n=$('.menu-up-price-2').hasClass();
        if(n){
            $('.menu-up-price-2').removeClass();
        }
        else{
            $('.menu-down-price-2').addClass();
        }
    })
})