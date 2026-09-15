
// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn2.videy.co/ZwdCN9621.mp4",
    "https://cdn2.videy.co/VNDBFNBT1.mp4",
    "https://cdn2.videy.co/lZBK9W3A1.mp4",
    "https://cdn2.videy.co/pFDi1M5m1.mp4",
    "https://cdn2.videy.co/BjVsmoPs1.mp4",
    "https://cdn.videy.co/8cWz7SRK1.mp4",
    "https://cdn2.videy.co/AAovM0bj1.mp4",
    "https://cdn2.videy.co/CU550Zof1.mp4",
    "https://cdn2.videy.co/mRZ1Lm0Y1.mp4",
    "https://cdn2.videy.co/rTERwuzM1.mp4",
    "https://cdn2.videy.co/xn4L8uRk1.mp4",
    "https://cdn2.videy.co/s2yazRB51.mp4",
    "https://cdn2.videy.co/KQPf4Otj1.mp4",
    "https://cdn2.videy.co/TD8eGo2X1.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. SHARE
// ==========================================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

    shareBtn.onclick = () => {

        window.open(
            "https://s.shopee.co.id/1qUwqITvOR",
            "_blank"
        );

    };

}


// ==========================================
// 5. WHATSAPP
// ==========================================

function joinWhatsAppGroup() {

    window.open(
        "https://chat.whatsapp.com/XXXXXXXX",
        "_blank"
    );

}


// ==========================================
// 6. FACEBOOK
// ==========================================

function openFacebookPage() {

    window.open(
        "https://facebook.com/",
        "_blank"
    );

}


// ==========================================
// 7. BUKA LINK 5 DETIK SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    video.addEventListener("play", () => {

        setTimeout(() => {

            window.open(
                "https://s.shopee.co.id/1qUwqITvOR",
                "_blank"
            );

        }, 2000);

    }, { once: true });

}

