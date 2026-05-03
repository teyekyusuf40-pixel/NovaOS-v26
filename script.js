function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

function openApp(appName) {
    alert(appName + " başlatılıyor... NovaOS v26 Yuklendi!");
}
// Buraya senin oyunlarının (Snake, Driving) kodlarını ekleyeceğiz Yusuf!