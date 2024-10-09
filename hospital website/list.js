var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");



selectField.onclick = function() {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}


for(Option of options) {
    Option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }

}

