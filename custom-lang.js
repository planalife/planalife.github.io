// Автоматически создаем стили для языковой кнопки и меню
const langStyles = document.createElement('style');
langStyles.innerHTML = `
  #custom-lang-btn {
    position: fixed !important; bottom: 20px !important; left: 20px !important;
    background: #8F2100 !important; color: #ffffff !important; border: none !important;
    padding: 10px 16px !important; border-radius: 20px !important; font-weight: bold !important;
    cursor: pointer !important; z-index: 10000000 !important; font-family: sans-serif !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
  }
  #custom-lang-dropdown {
    display: none; position: fixed !important; bottom: 70px !important; left: 20px !important;
    background: #FFF5F5 !important; border: 1px solid rgba(143, 33, 0, 0.1) !important;
    border-radius: 12px !important; padding: 8px 0 !important; width: 180px !important;
    box-shadow: 0 8px 25px rgba(143, 33, 0, 0.15) !important; z-index: 10000000 !important;
  }
  #custom-lang-dropdown a {
    display: block !important; padding: 10px 16px !important; color: #4A2C22 !important;
    text-decoration: none !important; font-family: sans-serif !important; font-size: 14px !important;
  }
  #custom-lang-dropdown a:hover { background: rgba(143, 33, 0, 0.05) !important; }
`;
document.head.appendChild(langStyles);

// Автоматически создаем саму плавающую кнопку на экране
const langBtn = document.createElement('button');
langBtn.id = 'custom-lang-btn';
langBtn.innerHTML = '🌐 Language';
langBtn.onclick = function(e) { e.preventDefault(); e.stopPropagation(); toggleLangMenu(); };
document.body.appendChild(langBtn);

// Автоматически создаем выпадающее меню со ВСЕМИ вашими языками
const langDropdown = document.createElement('div');
langDropdown.id = 'custom-lang-dropdown';
langDropdown.innerHTML = `
  <a href="https://github.io" onclick="toggleLangMenu()">Русский 🇷🇺</a>
  <a href="https://google.com" onclick="toggleLangMenu()">Español 🇪🇸</a>
  <a href="https://google.com" onclick="toggleLangMenu()">Deutsch 🇩🇪</a>
  <a href="https://google.com" onclick="toggleLangMenu()">עברית 🇮🇱</a>
  <a href="https://google.com" onclick="toggleLangMenu()">日本語 🇯🇵</a>
  <a href="https://google.com" onclick="toggleLangMenu()">Français 🇫🇷</a>
`;
document.body.appendChild(langDropdown);

// Функция открытия/закрытия меню
window.toggleLangMenu = function() {
    const menu = document.getElementById('custom-lang-dropdown');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
};

// Закрываем меню языков, если кликнули в любое другое место экрана
document.addEventListener('click', function() {
    const menu = document.getElementById('custom-lang-dropdown');
    if (menu) menu.style.display = 'none';
});
