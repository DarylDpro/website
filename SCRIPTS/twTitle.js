let characterIndex = 0;

let titleNames = ["‎", "d", "da", "dar", "darl", "darli", "darlie", "darli", "darl", "dar", "da", "d"];

window.updateTitleName = function () {
    document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
}

setInterval(() => {
    window.updateTitleName()
}, 450);