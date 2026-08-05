const googleScriptUrl = "https://google.com";
let activeBetaType = "Beta"; 

let isBetaSent = false;
let isFeedbackSent = false;

function handleGlobalClick(e) {
    let target = e.target;
    
    // КЛИК ПО ТЕМНОМУ ФОНУ ВОКРУГ ОКНА
    if (target.id === "custom-beta-overlay" || target.id === "custom-feedback-overlay") {
        if (e.type !== "touchstart") { e.preventDefault(); e.stopPropagation(); closeAllCustomPopups(); return; }
        if (target.id === "custom-beta-overlay" && isBetaSent) { e.preventDefault(); e.stopPropagation(); closeAllCustomPopups(); return; }
        if (target.id === "custom-feedback-overlay" && isFeedbackSent) { e.preventDefault(); e.stopPropagation(); closeAllCustomPopups(); return; }
        return; 
    }

    // КЛИК ПО КРЕСТИКУ
    if (target.className === "close-popup-btn") {
        e.preventDefault(); e.stopPropagation(); closeAllCustomPopups(); return;
    }

    // СВЕРХБЫСТРЫЙ ПЕРЕХВАТ КНОПОК ПО ВАШИМ НОВЫМ ARIA ID ЛАТИНИЦЕЙ
    while (target && target !== document.body) {
        if (target.getAttribute) {
            const ariaId = target.getAttribute('id');

            // Кнопка беты Android
            if (ariaId === "android") {
                e.preventDefault(); e.stopPropagation(); activeBetaType = "Android Beta"; openBetaWindow(); return;
            }
            // Кнопка беты iOS
            if (ariaId === "ios") {
                e.preventDefault(); e.stopPropagation(); activeBetaType = "iOS Beta"; openBetaWindow(); return;
            }
            // Кнопка отзывов Feedback
            if (ariaId === "feedback") {
                e.preventDefault(); e.stopPropagation(); openFeedbackWindow(); return;
            }
            // Кнопка видео vdeo (Подгружает ролик из site-config.json в ваш плеер Framer)
            if (ariaId === "vdeo") {
                setTimeout(function() {
                    const framerIframe = document.querySelector('iframe[src*="youtube.com"]');
                    if (framerIframe && typeof siteConfig !== 'undefined' && siteConfig.app_video) {
                        framerIframe.src = "https://youtube.com" + siteConfig.app_video.youtubeId + "?autoplay=1";
                    }
                }, 50);
                return;
            }
            // Кнопки сторов get-ios и get-android (Код их полностью игнорирует!)
            if (ariaId === "get-ios" || ariaId === "get-android") return; 
        }
        target = target.parentNode;
    }
}

document.addEventListener("click", handleGlobalClick, true);
document.addEventListener("touchstart", handleGlobalClick, {passive: false, capture: true});

window.openBetaWindow = function() { 
    isBetaSent = false; 
    document.getElementById('custom-beta-overlay').querySelector('.custom-popup-box').innerHTML = `
        <button class="close-popup-btn" onclick="closeAllCustomPopups()">&times;</button>
        <h3 style="margin-top:5px; margin-bottom:10px; font-size:22px; color:inherit;">Join Beta Test</h3>
        <p style="opacity:0.7; font-size:14px; margin-bottom:20px; color:inherit;">Enter your e-mail to receive an invitation.</p>
        <input type="email" id="tester-email" placeholder="name@example.com">
        <button id="beta-submit-btn" onclick="sendBetaDataToGoogle()">Submit</button>
    `;
    document.getElementById('custom-beta-overlay').style.display = 'flex'; 
}

window.openFeedbackWindow = function() { 
    isFeedbackSent = false; 
    document.getElementById('custom-feedback-overlay').querySelector('.custom-popup-box').innerHTML = `
        <button class="close-popup-btn" onclick="closeAllCustomPopups()">&times;</button>
        <h3 style="margin-top:0; margin-bottom:10px; font-size:22px; color:inherit;">Share Your Thoughts</h3>
        <p style="opacity:0.7; font-size:14px; margin-bottom:20px; color:inherit;">We would love to hear your feedback or ideas!</p>
        <textarea id="feedback-message" placeholder="Type your wishes or review here..."></textarea>
        <button id="feedback-submit-btn" onclick="sendFeedbackDataToGoogle()">Send Feedback</button>
    `;
    document.getElementById('custom-feedback-overlay').style.display = 'flex'; 
}

window.closeAllCustomPopups = function() {
    document.getElementById('custom-beta-overlay').style.display = 'none';
    document.getElementById('custom-feedback-overlay').style.display = 'none';
    const escEvent = new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, code: 'Escape', which: 27, bubbles: true, cancelable: true });
    document.dispatchEvent(escEvent);
}

window.sendBetaDataToGoogle = function() {
    const emailInput = document.getElementById('tester-email');
    if (!emailInput || !emailInput.value) { alert("Please enter a valid email"); return; }
    const btn = document.getElementById('beta-submit-btn');
    btn.disabled = true; btn.textContent = "Sending...";

    fetch(googleScriptUrl + "?email=" + encodeURIComponent(emailInput.value) + "&type=" + encodeURIComponent(activeBetaType), { method: 'GET' })
    .then(() => {
        isBetaSent = true; 
        document.querySelector('#custom-beta-overlay .custom-popup-box').innerHTML = `
            <div style="text-align:center; padding:20px 10px;">
                <h3 style="color:green; margin-top:0; font-size:24px;">✨ Successfully Sent!</h3>
                <p style="font-size:15px; opacity:0.8; margin-bottom:0;">We will contact you shortly.</p>
                <p style="font-size:12px; opacity:0.3; margin-top:20px;">(Tap anywhere to close)</p>
            </div>`;
        setTimeout(closeAllCustomPopups, 3000); 
    })
    .catch(() => { 
        isBetaSent = true;
        document.querySelector('#custom-beta-overlay .custom-popup-box').innerHTML = `
            <div style="text-align:center; padding:20px 10px;">
                <h3 style="color:green; margin-top:0; font-size:24px;">✨ Successfully Sent!</h3>
                <p style="font-size:15px; opacity:0.8; margin-bottom:0;">We will contact you shortly.</p>
                <p style="font-size:12px; opacity:0.3; margin-top:20px;">(Tap anywhere to close)</p>
            </div>`;
        setTimeout(closeAllCustomPopups, 3000);
    });
}

window.sendFeedbackDataToGoogle = function() {
    const msgInput = document.getElementById('feedback-message');
    if (!msgInput || !msgInput.value.trim()) { alert("Please type your feedback message"); return; }
    const btn = document.getElementById('feedback-submit-btn');
    btn.disabled = true; btn.textContent = "Sending...";

    fetch(googleScriptUrl + "?message=" + encodeURIComponent(msgInput.value) + "&type=Feedback", { method: 'GET' })
    .then(() => {
        isFeedbackSent = true; 
        document.querySelector('#custom-feedback-overlay .custom-popup-box').innerHTML = `
            <div style="text-align:center; padding:20px 10px;">
                <h3 style="color:green; margin-top:0; font-size:24px;">✨ Thank you!</h3>
                <p style="font-size:15px; opacity:0.8; margin-bottom:0;">Your thoughts have been saved successfully.</p>
                <p style="font-size:12px; opacity:0.3; margin-top:20px;">(Tap anywhere to close)</p>
            </div>`;
        setTimeout(closeAllCustomPopups, 3000);
    })
    .catch(() => {
        isFeedbackSent = true;
        document.querySelector('#custom-feedback-overlay .custom-popup-box').innerHTML = `
            <div style="text-align:center; padding:20px 10px;">
                <h3 style="color:green; margin-top:0; font-size:24px;">✨ Thank you!</h3>
                <p style="font-size:15px; opacity:0.8; margin-bottom:0;">Your thoughts have been saved successfully.</p>
                <p style="font-size:12px; opacity:0.3; margin-top:20px;">(Tap anywhere to close)</p>
            </div>`;
        setTimeout(closeAllCustomPopups, 3000);
    });
}
