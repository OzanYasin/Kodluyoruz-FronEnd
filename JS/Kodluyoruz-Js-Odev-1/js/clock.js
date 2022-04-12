// Prompt userName START

let userName = prompt("İsminizi Girin Lütfen")

let greeting = document.querySelector("#greeting")
let clock = document.getElementById("myClock")

if (userName.length === 0) {
    greeting.innerHTML = "Misafir";
}
else {
    greeting.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
};

// Prompt userName END

// Saat : Dakika : Saniye ve Gün Function START

function updateTime () {
    let date = new Date();

    let hour = formatTime(date.getHours());
    let minute = formatTime(date.getMinutes());
    let second = formatTime(date.getSeconds());
    let day = date.getDay();

    // Günlerin rakam olarak gözükmemesi için case olarak günlere göre dönüş alacağız.

    switch (day) {
        case 1:
            day = "Pazartesi"
            break
        case 2:
            day = "Salı"
            break
        case 3:
            day = "Çarşamba"
            break
        case 4:
            day = "Perşembe"
            break
        case 5:
            day = "Cuma"
            break
        case 6:
            day = "Cumartesi"
            break
        case 7:
            day = "Pazar"
            break
    }

    clock.innerHTML = `${hour} : ${minute} : ${second}  ${day}`
}

function formatTime(time) {
    if (time < 10) {
        return "0" + time ;
    }
    return time;
}

setInterval(updateTime, 1000);

   // Saat : Dakika : Saniye ve Gün Function END