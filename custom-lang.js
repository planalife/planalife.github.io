// ========================================================
// 1. ВАШИ РОДНЫЕ СТИЛИ КНОПКИ И МЕНЮ (ИЗ БЛОКНОТА)
const langStyles = document.createElement('style');
langStyles.innerHTML = `
  #custom-lang-btn {
    position: fixed !important; top: 20px !important; right: 20px !important; z-index: 999999 !important;
    padding: 10px 16px !important; border-radius: 24px !important; background: #ffffff !important; color: #000000 !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important; font-size: 14px !important; font-weight: 600 !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12) !important; cursor: pointer !important; border: 1px solid rgba(0,0,0,0.08) !important;
  }
  #custom-lang-dropdown {
    display: none; position: fixed !important; top: 70px !important; right: 20px !important; z-index: 999999 !important;
    background: #ffffff !important; border-radius: 12px !important; padding: 8px !important; width: 170px !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important; border: 1px solid rgba(0,0,0,0.08) !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
    transition: opacity 0.2s ease; opacity: 0;
  }
  #custom-lang-dropdown a, #custom-lang-dropdown button {
    display: block !important; width: 100% !important; padding: 10px !important; border: none !important; background: none !important; text-align: left !important;
    font-size: 14px !important; font-weight: 500 !important; cursor: pointer !important; border-radius: 6px !important; color: #000 !important;
    text-decoration: none !important; box-sizing: border-box !important;
  }
  #custom-lang-dropdown a:hover, #custom-lang-dropdown button:hover { background: #f5f5f7 !important; }
`;
document.head.appendChild(langStyles);

// ========================================================
// 2. ВАШИ РОДНЫЕ ВИЗУАЛЬНЫЕ ЭЛЕМЕНТЫ (ИЗ БЛОКНОТА)
const langBtn = document.createElement('div');
langBtn.id = 'custom-lang-btn';
langBtn.innerHTML = 'Language 🌐';
langBtn.setAttribute('onclick', 'toggleLangMenu()');
document.body.appendChild(langBtn);

const langDropdown = document.createElement('div');
langDropdown.id = 'custom-lang-dropdown';
langDropdown.innerHTML = `
  <a href="https://planalife.app/ru" onclick="toggleLangMenu()">Русский 🇷🇺</a>
  <a href="https://translate.google.com/translate?sl=en&tl=es&u=https://planalife.app" onclick="toggleLangMenu()">Español 🇪🇸</a>
  <a href="https://translate.google.com/translate?sl=en&tl=de&u=https://planalife.app" onclick="toggleLangMenu()">Deutsch 🇩🇪</a>
  <a href="https://translate.google.com/translate?sl=en&tl=he&u=https://planalife.app" onclick="toggleLangMenu()">עברית 🇮🇱</a>
  <a href="https://translate.google.com/translate?sl=en&tl=ja&u=https://planalife.app" onclick="toggleLangMenu()">日本語 🇯🇵</a>
  <a href="https://translate.google.com/translate?sl=en&tl=fr&u=https://planalife.app" onclick="toggleLangMenu()">Français 🇫🇷</a>
`;
document.body.appendChild(langDropdown);

// ========================================================
// 3. ВАША РОДНАЯ СКРИПТОВАЯ ЛОГИКА (ИЗ БЛОКНОТА)
window.toggleLangMenu = function() {
    const menu = document.getElementById('custom-lang-dropdown');
    if (!menu) return;
    if (menu.style.display === 'block') {
        menu.style.opacity = '0';
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    } else {
        menu.style.display = 'block';
        setTimeout(() => { menu.style.opacity = '1'; }, 10);
    }
};

window.selectLangAction = function(langCode, manualUrl) {
    const menu = document.getElementById('custom-lang-dropdown');
    if (menu) menu.style.display = 'none';

    if (manualUrl && manualUrl !== "") {
        window.location.href = manualUrl;
    } else {
        const currentUrl = window.location.href.split('#')[0];
        const googleTranslateUrl = "https://google.com" + langCode + "&u=" + encodeURIComponent(currentUrl);
        window.location.href = googleTranslateUrl;
    }
};

// Дополнительное удобство: закрываем меню, если кликнули в любое пустое место сайта
document.addEventListener('click', function(e) {
    const menu = document.getElementById('custom-lang-dropdown');
    const btn = document.getElementById('custom-lang-btn');
    if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.opacity = '0';
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    }
});
