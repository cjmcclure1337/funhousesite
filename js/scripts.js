$(function() {
    $(".carousel").carousel( {interval:4000, cycle=true}); 
});


var currentGlaze = "ebony";
var currentItem = "mug";

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

const selectionEl = document.querySelector("select[id=potType]");
selectionEl.onclick = function() {
    if(selectionEl.value !== currentItem) {
        currentItem = selectionEl.value;
        document.getElementById("shopImg").src = "img/shopItems/" + currentItem + currentGlaze + ".webp";
    }
}