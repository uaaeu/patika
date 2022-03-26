document.getElementById("myName").innerText = prompt("Adınız nedir?");

function showTime(){
    let date = new Date();
    let d = date.toLocaleDateString("tr-TR", { weekday: 'long' });
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + d;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();