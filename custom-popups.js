// Автоматически генерируем стили для адаптивных окон беты и отзывов
const popupStyles = document.createElement('style');
popupStyles.innerHTML = `
  #custom-beta-overlay, #custom-feedback-overlay {
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(5px); z-index: 9999999;
    
    /* НА ПК: Элементы будут выравниваться строго по центру экрана */
    display: none; align-items: center; justify-content: center;
    box-sizing: border-box !important;
  }
  
  /* БАЗОВЫЙ СТИЛЬ ПЛАШКИ ДЛЯ КОМПЬЮТЕРОВ (По центру) */
  .custom-popup-box {
    background: #FFF5F5 !important; color: #4A2C22 !important;
    padding: 35px 30px 25px 30px; border-radius: 16px; 
    width: 420px !important; max-width: 90% !important;
    box-shadow: 0 12px 40px rgba(143, 33, 0, 0.25); text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    box-sizing: border-box !important; border: 1px solid rgba(143, 33, 0, 0.1); 
    pointer-events: auto; position: relative !important;
  }

  /* СВЕРХЖЕСТКОЕ ЛЕКАРСТВО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ ANDROID И IPHONE */
  @media screen and (max-width: 768px), screen and (max-device-width: 768px) {
    /* Перестраиваем фон-контейнер: прижимаем плашку наверх и ЖЕСТКО к левому краю */
    #custom-beta-overlay, #custom-feedback-overlay {
      align-items: flex-start !important; 
      justify-content: flex-start !important;
      /* Создаем идеальные симметричные рамки слева и справа по 15 пикселей от краев стекла */
      padding: 30px 15px 30px 15px !important; 
    }
    
    .custom-popup-box {
      /* Полностью убираем любые координаты и сдвиги, которые Android ломал при вызове клавиатуры */
      top: 0 !important; left: 0 !important; transform: none !important;
      
      /* Жестко заставляем плашку занять ВСЮ доступную ширину внутри наших рамок */
      width: 100% !important; 
      max-width: 100% !important;
      
      padding: 50px 20px 35px 20px !important;
      border-radius: 16px !important;
    }
  }

  .custom-popup-box input, .custom-popup-box textarea {
    width: 100% !important; padding: 12px !important; border: 1px solid rgba(143,33,0,0.2) !important;
    border-radius: 8px !important; margin-bottom: 15px !important; box-sizing: border-box !important;
    background: #ffffff !important; color: #000000 !important; font-size: 16px !important; font-family: inherit;
  }
  .custom-popup-box textarea { height: 110px !important; resize: none !important; }
  .custom-popup-box button {
    width: 100% !important; padding: 12px !important; background: #8F2100 !important; 
    color: #ffffff !important; border: none !important; border-radius: 8px !important;
    font-weight: bold !important; cursor: pointer; font-family: inherit;
  }
  .close-popup-btn {
    position: absolute !important; top: 12px !important; right: 12px !important;
    width: 28px !important; height: 28px !important; min-width: 28px !important; max-width: 28px !important;
    background: rgba(143, 33, 0, 0.08) !important; border: none !important; border-radius: 50% !important;
    font-size: 18px !important; line-height: 26px !important; cursor: pointer !important; 
    color: #8F2100 !important; padding: 0 !important; display: flex !important; 
    align-items: center; justify-content: center; z-index: 10000000 !important;
  }
`;
document.head.appendChild(popupStyles);

// Автоматически создаем каркас Окна Беты
const betaOverlay = document.createElement('div');
betaOverlay.id = 'custom-beta-overlay';
betaOverlay.innerHTML = '<div class="custom-popup-box"></div>';
document.body.appendChild(betaOverlay);

// Автоматически создаем каркас Окна Отзывов
const feedbackOverlay = document.createElement('div');
feedbackOverlay.id = 'custom-feedback-overlay';
feedbackOverlay.innerHTML = '<div class="custom-popup-box"></div>';
document.body.appendChild(feedbackOverlay);
