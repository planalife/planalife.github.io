// ========================================================
// 1. ВАШИ РОДНЫЕ СТИЛИ КНОПКИ И МЕНЮ (ИЗ БЛОКНОТА)
// ========================================================
// 1. УВЕЛИЧЕННЫЕ СТИЛИ КНОПКИ И МЕНЮ (В 2 РАЗА ПО ВЫСОТЕ, В 1.5 ПО ШИРИНЕ)
const langStyles = document.createElement('style');
langStyles.innerHTML = `
  #custom-lang-btn {
    position: fixed !important; top: 20px !important; right: 20px !important; z-index: 999999 !important;
    /* Высота увеличена в 2 раза (с 10px до 20px), ширина в 1.5 раза (с 16px до 24px) */
    padding: 20px 28px !important; 
    border-radius: 32px !important; background: #ffffff !important; color: #1d19e6 !important;
    /* Крупный, четкий шрифт */
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important; font-size: 22px !important; font-weight: 660 !important;
    box-shadow: 0 6px 24px rgba(0,0,0,0.15) !important; cursor: pointer !important; border: 1px solid rgba(0,0,0,0.08) !important;
    transition: transform 0.1s ease;
  }
  #custom-lang-btn:active { transform: scale(0.97); }

  #custom-lang-dropdown {
    display: none; position: fixed !important; top: 90px !important; right: 20px !important; z-index: 999999 !important;
    background: #ffffff !important; border-radius: 16px !important; padding: 12px !important; 
    /* Ширина меню увеличена почти в 2 раза (с 170px до 280px) */
    width: 300px !important; 
    box-shadow: 0 8px 30px rgba(0,0,0,0.18) !important; border: 1px solid rgba(0,0,0,0.08) !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
    transition: opacity 0.2s ease; opacity: 0;
  }
  
  /* Увеличенные строки выбора языков внутри меню */
  #custom-lang-dropdown a, #custom-lang-dropdown button {
    display: block !important; width: 100% !important; 
    /* Просторные отступы внутри строк меню */
    padding: 16px 12px !important; 
    border: none !important; background: none !important; text-align: left !important;
    font-size: 22px !important; font-weight: 500 !important; cursor: pointer !important; border-radius: 8px !important; color: #000 !important;
    text-decoration: none !important; box-sizing: border-box !important;
    margin-bottom: 4px !important;
  }
  #custom-lang-dropdown a:last-child { margin-bottom: 0 !important; }
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
