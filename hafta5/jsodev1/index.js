function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDate();

    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    day = updateTime(day)
    month = updateTime(month)
    year = updateTime(year)
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + "\n" + day + "/" + month + "/" + year;
    var t = setTimeout(function() { currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

function popupName() {
    let a = window.prompt("Hoşgeldiniz. İsminizi girin :")
    document.getElementById("name").innerText = a;
}

popupName();
currentTime();