// Автоматически генерируем стили для адаптивных окон беты и отзывов
const popupStyles = document.createElement('style');
popupStyles.innerHTML = `
  #custom-beta-overlay, #custom-feedback-overlay {
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(5px); z-index: 9999999;
    pointer-events: auto;
  }
  
  /* ИСПРАВЛЕННЫЙ СТИЛЬ ПЛАШКИ ДЛЯ ИДЕАЛЬНОГО ЦЕНТРИРОВАНИЯ НА ПК И СМАРТФОНАХ */
  .custom-popup-box {
    position: fixed !important; 
    top: 50% !important; 
    left: 50% !important;
    transform: translate(-50%, -50%) !important; /* Намертво держит центр на ПК */
    background: #FFF5F5 !important; color: #4A2C22 !important;
    padding: 35px 25px 25px 25px; border-radius: 16px; 
    width: 380px !important; 
    max-width: 88% !important;
    box-shadow: 0 12px 40px rgba(143, 33, 0, 0.25); text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    box-sizing: border-box !important; border: 1px solid rgba(143, 33, 0, 0.1); 
    pointer-events: auto;
  }

  /* СПЕЦИАЛЬНОЕ СВЕРХЖЕСТКОЕ ЛЕКАРСТВО ДЛЯ МОБИЛЬНЫХ БРАУЗЕРОВ ANDROID И IPHONE */
  /* Когда ширина экрана меньше 768px, мы выключаем капризные проценты и центрируем плашку через viewport-ширину */
  @media screen and (max-width: 768px), screen and (max-device-width: 768px) {
    .custom-popup-box {
      top: 25% !important; /* Приподнимаем чуть выше центра, чтобы выезжающая клавиатура Android ничего не перекрывала */
      left: 4vw !important; /* Жесткий микро-отступ слева от физического края стекла телефона */
      transform: none !important; /* Отменяем translate, который на Android сбоит при вызове клавиатуры */
      width: 92vw !important; /* Плашка займет ровно 92% от реального стекла телефона */
      max-width: 92vw !important;
      padding: 45px 20px 30px 20px !important;
      margin: 0 auto !important;
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
