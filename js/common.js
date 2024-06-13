AOS.init();

$(function(){
    $(".wrap-5 .btn").click(function(){
        
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $(".wrap-5 .all").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $(".wrap-5 .all").fadeOut(0);
            $(".wrap-5 .website").fadeIn();
        }
        else if( $(this).text()=="Branding" ){
            $(".wrap-5 .all").fadeOut(0);
            $(".wrap-5 .branding").fadeIn();
        }
    });

    $(".accordion a").click(function(e){
        e.preventDefault();
        if( $(this).hasClass("active")==false ){
            $(".accordion a").removeClass("active"); 
            $(this).addClass("active"); 
            $(".accordion p").slideUp();
            $(this).next("p").slideDown();
        }   
        // else{
        //     $(this).removeClass("active");
        //     $(this).next("p").slideUp();
        // }
    });

    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });

    if( screen.width<768 ){
        $(".collapse a").click(function(){
            $(".menu").removeClass("active");
            $(".collapse").slideUp();
        })
    }

    $(".banner button,.banner a").click(function(e){
        e.preventDefault();
        
        $(".banner video").css({opacity:1});
        $(".banner .flex").fadeOut();
        $(".banner video").trigger("play");
        document.querySelector(".banner video").play();
    });

    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("html,body").css({'overflow-y':'hidden'});
        $("body").append(`<div class="popover"></div>`);
        $(".popover").append($(".hiddenform").html());

        function hide_popup(){
            $(".overlay,.popover").remove();
            $("html,body").css({'overflow-y':'visible'});
        }

        $(".popover .close").click(hide_popup);
        $(window).keyup(function(e){
            if(e.which==27){ hide_popup() }
        });
    });

    //plugins

    $(".reviews").bxSlider({
        auto:true,
        controls:false,
        pause:5000,
        autoHover:true
    });

})