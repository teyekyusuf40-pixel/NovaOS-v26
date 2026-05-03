// Boot Süreci
setTimeout(() => {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
}, 4000); // 4 saniye sonra masaüstü açılır

function openApp(app) {
    const layer = document.getElementById('window-layer');
    let content = "";
    let title = "";

    if(app === 'nuriweb') {
        title = "NuriWeb - İnternet Gezgini";
        content = `
            <div style="display:flex; margin-bottom:10px;">
                <input type="text" id="url-bar" style="flex-grow:1" placeholder="Aratın veya URL girin...">
                <button onclick="alert('NuriWeb Sonuçları Getiriliyor...')">Git</button>
            </div>
            <iframe src="https://www.bing.com" style="width:100%; height:300px; border:none;"></iframe>
        `;
    } else if(app === 'explorer') {
        title = "Dosya Gezgini";
        content = "📁 Yerel Disk (C:)<br>📂 Kullanıcılar<br>📂 NovaOS_Sistem";
    } else if(app === 'settings') {
        title = "Ayarlar";
        content = `
            <button onclick="alert('Sistem Sıfırlanıyor...')">Sıfırla</button>
            <button onclick="location.reload()">Güncelle (v27 Yükleniyor)</button>
        `;
    }

    const win = document.createElement('div');
    win.className = 'window';
    win.innerHTML = `
        <div class="window-header"><span>${title}</span><button onclick="this.parentElement.parentElement.remove()">X</button></div>
        <div class="window-body">${content}</div>
    `;
    layer.appendChild(win);
}

// Saat
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);
