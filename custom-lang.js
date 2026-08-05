<!--/////////////////////////////////////////////////////////////////////////////////////-->
	<!-- 1. СТИЛИ И ВНЕШНИЙ ВИД КНОПКИ С ГЛОБУСОМ -->
<!-- 1. СТИЛИ И ВНЕШНИЙ ВИД КНОПКИ С ГЛОБУСОМ -->
<style>
  #custom-lang-btn {
    position: fixed; top: 20px; right: 20px; z-index: 999999;
    padding: 10px 16px; border-radius: 24px; background: #ffffff; color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12); cursor: pointer; border: 1px solid rgba(0,0,0,0.08);
  }
  #custom-lang-dropdown {
    display: none; position: fixed; top: 70px; right: 20px; z-index: 999999;
    background: #ffffff; border-radius: 12px; padding: 8px; width: 170px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.08);
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  #custom-lang-dropdown a, #custom-lang-dropdown button {
    display: block; width: 100%; padding: 10px; border: none; background: none; text-align: left;
    font-size: 14px; font-weight: 500; cursor: pointer; border-radius: 6px; color: #000 !important;
    text-decoration: none !important; box-sizing: border-box;
  }
  #custom-lang-dropdown a:hover, #custom-lang-dropdown button:hover { background: #f5f5f7; }
</style>

<!-- ВИЗУАЛЬНЫЕ ЭЛЕМЕНТЫ КНОПКИ И МЕНЮ -->
<div id="custom-lang-btn" onclick="toggleLangMenu()">Language 🌐</div>

<div id="custom-lang-dropdown">
  <!-- ВНИМАНИЕ: Замените 'https://github.io' на реальный чистый адрес вашего сайта -->
  
  <!-- Ссылка на ваш готовый ручной русский сайт -->
  <a href="https://planalife.app/ru" onclick="toggleLangMenu()">Русский 🇷🇺</a>
  
  <!-- Прямая ссылка-шлюз на автоперевод текущего сайта на Испанский -->
  <a href="https://translate.google.com/translate?sl=en&tl=es&u=https://planalife.app" onclick="toggleLangMenu()">Español 🇪🇸</a>
  
  <!-- Прямая ссылка-шлюз на автоперевод текущего сайта на Немецкий -->
  <a href="https://translate.google.com/translate?sl=en&tl=de&u=https://planalife.app" onclick="toggleLangMenu()">Deutsch 🇩🇪</a>
	<!-- НОВЫЕ ЯЗЫКИ (Автоперевод включен по умолчанию) -->
  <!-- Иврит (Языковой код: he) -->
  <a href="https://translate.google.com/translate?sl=en&tl=he&u=https://planalife.app" onclick="toggleLangMenu()">עברית 🇮🇱</a>

  <!-- Японский (Языковой код: ja) -->
  <a href="https://translate.google.com/translate?sl=en&tl=ja&u=https://planalife.app" onclick="toggleLangMenu()">日本語 🇯🇵</a>

  <!-- Французский (Языковой код: fr) -->
  <a href="https://translate.google.com/translate?sl=en&tl=fr&u=https://planalife.app" onclick="toggleLangMenu()">Français 🇫🇷</a>
</div>

<!-- 2. СКРИПТ УПРАВЛЕНИЯ ГИБРИДНЫМ ПЕРЕВОДОМ -->
<!-- 2. СКРИПТ УПРАВЛЕНИЯ ГИБРИДНЫМ ПЕРЕВОДОМ (РАБОЧАЯ ГИБРИДНАЯ ВЕРСИЯ) -->
<script type="text/javascript">
// Функция открытия и закрытия меню при клике на кнопку Language
function toggleLangMenu() {
    const menu = document.getElementById('custom-lang-dropdown');
    if (menu.style.display === 'block') {
        menu.style.opacity = '0';
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    } else {
        menu.style.display = 'block';
        setTimeout(() => { menu.style.opacity = '1'; }, 10);
    }
}

// Логика выбора языка (Новый гарантированный метод)
function selectLangAction(langCode, manualUrl) {
    // Закрываем меню
    document.getElementById('custom-lang-dropdown').style.display = 'none';

    if (manualUrl && manualUrl !== "") {
        // ЕСЛИ ССЫЛКА ЕСТЬ: Уводим на вашу качественную ручную страницу
        window.location.href = manualUrl;
    } else {
        // ЕСЛИ ССЫЛКИ НЕТ: Берем текущую ссылку на ваш сайт и открываем её через официальный безопасный шлюз перевода Google
        const currentUrl = window.location.href.split('#')[0]; // Берем чистый URL сайта
        
        // Создаем официальную прямую ссылку на автоперевод этой страницы
        const googleTranslateUrl = "https://google.com" + langCode + "&u=" + encodeURIComponent(currentUrl);
        
        // Открываем переведенный сайт прямо в этой же вкладке
        window.location.href = googleTranslateUrl;
    }
}
</script>
