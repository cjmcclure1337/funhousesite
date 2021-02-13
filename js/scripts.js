$(function() {
    $(".carousel").carousel( {interval:4000}); 
    $("#aboutCarouselPrev").click(function(){
        $(".carousel").carousel("prev");
    })
    $("#aboutCarouselNext").click(function(){
        $(".carousel").carousel("next");
    })
});


var currentGlaze = "ebony";
var currentItem = "mug";

//On the Shop page, listens for a change to the radio (glaze selector) and updates the picture if needed
const radioEl = document.querySelector("div[id=glazeRadio]");
radioEl.onclick = function() {
    const glazes = document.querySelectorAll("input[name=glazeType]");
    var selectedValue;
    for (const rb of glazes) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    
    if (currentGlaze !== selectedValue){
        currentGlaze = selectedValue;
        document.getElementById("shopImg").src = "img/shopItems/" + currentItem + currentGlaze + ".webp";
    }
}

//On the Shop page, listens for a change to the select object (pot type selector) and updates the picture if needed
const selectionEl = document.querySelector("select[id=potType]");
selectionEl.onclick = function() {
    if(selectionEl.value !== currentItem) {
        currentItem = selectionEl.value;
        document.getElementById("shopImg").src = "img/shopItems/" + currentItem + currentGlaze + ".webp";
    }
}

