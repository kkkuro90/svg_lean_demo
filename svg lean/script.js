document.addEventListener("DOMContentLoaded", function() {
  const campaignSelector = document.getElementById('campaign');
  const backgroundSvg = document.getElementById('background-svg');
  const interfaceSvg = document.getElementById('interface-svg');
  const descriptionSvg = document.getElementById('description-svg');

  // Цветовые палитры для кампаний
  const colorPalettes = {
    rosseti: {
      background: 'rgb(0, 153, 204)', 
      interface: 'rgb(0, 86, 152)', 
      description: '#FFFFFF', 
    },
    rosneft: {
      background: 'rgb(0, 0, 0)', 
      interface: 'rgb(255, 102, 0)', 
      description: '#000000', 
    },
    gazprom: {
      background: 'rgb(0, 86, 152)', 
      interface: 'rgb(0, 153, 204)', 
      description: '#FFFFFF', 
    },
  };

  // Функция для изменения цветов
  function updateColors(campaign) {
    const colors = colorPalettes[campaign];

    // Изменение цвета фона
    backgroundSvg.style.color = colors.background;

    // Изменение цвета интерфейса
    interfaceSvg.style.color = colors.interface;

    // Изменение цвета описания
    descriptionSvg.style.filter = `brightness(0) saturate(100%) invert(1) sepia(1) saturate(10000%) hue-rotate(${colors.description})`;
  }

  // Обработчик изменения выбора кампании
  campaignSelector.addEventListener('change', function() {
    const selectedCampaign = campaignSelector.value;
    updateColors(selectedCampaign);
  });

  // Установка начальных цветов (по умолчанию Россети)
  updateColors('rosseti');
});