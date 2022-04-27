const viewportWidth = window.screen.width || document.documentElement.clientWidth;
const viewportHeight = window.screen.height || document.documentElement.clientHeight;

var container = document.querySelector("html");

container.addEventListener("touchstart", startTouch, { passive: false });
container.addEventListener("touchmove", moveTouch, { passive: false });

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
var position = 0;

function getOffset(){
    return document.documentElement.scrollTop;
}

function getSection(){
    if(viewportWidth<768){
        var offset=document.documentElement.scrollTop;
        var section = offset/viewportHeight;
        console.log(section);
        return section;
    }
}

function setNavbar(section){
    switch(section) {
        case 0:
            if($(".nav_dot").hasClass("border-black")){
                $(".nav_dot").removeClass("border-black");
            }
            $('.nav_dot').removeClass("bg-black");
            $('.nav_dot:eq('+0+')').addClass("bg-white");
            break;
        case 1:
            
            $(".nav_dot").addClass("border-black");
            $('.nav_dot').removeClass("bg-white");
            $('.nav_dot:eq('+1+')').addClass("bg-black");
            break;
        /*case 2:
            if(!($(".nav_dot").hasClass("border-black"))){
                $(".nav_dot").addClass("border-black");
            }
            $('.nav_dot').removeClass("bg-black");
            $('.nav_dot').removeClass("bg-white");
            $('.nav_dot:eq('+2+')').addClass("bg-black");
            break;
        case 3:
            if(!($(".nav_dot").hasClass("border-black"))){
                $(".nav_dot").addClass("border-black");
            }
            $('.nav_dot').removeClass("bg-black");
            $('.nav_dot').removeClass("bg-white");
            $('.nav_dot:eq('+3+')').addClass("bg-black");
            break;*/
    }
}

$(function(){
    position = getSection();
    setNavbar(getSection());
    console.log(viewportHeight + " " +  viewportWidth);

    setTimeout(function(){
        $('#arrow_down').removeClass("animate__fadeIn");
        $('#arrow_down').addClass("animate__bounce");
        $('#arrow_down').addClass("animate__infinite");
      }, 5000);
});

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {
    if(initialX === null){return;}
    if(initialY === null){return;}

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) < Math.abs(diffY)) {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
            position += (position<1) ? 1:0;

            window.scroll(0, document.getElementById("section_"+String(position)).offsetTop);
            console.log("section_"+String(position));
            setNavbar(position);
        } else {
            // swiped down
            position -= (position>0) ? 1:0;

            window.scroll(0, document.getElementById("section_"+String(position)).offsetTop);
            console.log("section_"+String(position));
            setNavbar(position);
        } 
    } else {
         // sliding horizontally
        if (diffX > 0) {
            // swiped left
            console.log("swiped left");
            } else {
            // swiped right
            console.log("swiped right");
        }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}