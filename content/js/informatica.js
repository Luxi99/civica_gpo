const viewportWidth = window.screen.width || document.documentElement.clientWidth;
const viewportHeight = window.screen.height || document.documentElement.clientHeight;

function getOffset(){
    return document.documentElement.scrollTop;
}

$(function(){
    console.log(viewportHeight + " " +  viewportWidth);

    setTimeout(function(){
        $('#arrow_down').removeClass("animate__fadeIn");
        $('#arrow_down').addClass("animate__bounce");
        $('#arrow_down').addClass("animate__infinite");
      }, 5000);
});

document.addEventListener(
    'scroll',
    (event) => {
        var position = (getOffset()*100)/($(document).height()-viewportHeight);
        document.getElementById("pageposition").style.right = String(100-position) + "%";
    }, 
    { passive: true }
);