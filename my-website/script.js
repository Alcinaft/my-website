document.addEventListener('DOMContentLoaded', () => {
    // Находим элемент, который будет использоваться для копирования
    const clickableText = document.querySelector('.clickable-text');

    // Добавляем обработчик клика
    clickableText.addEventListener('click', function() {
        const hiddenTextToCopy = "как ты  ";
        copyToClipboard(hiddenTextToCopy);

       
    });

    // Функция для копирования текста в буфер обмена
    function copyToClipboard(text) {
        const tempElement = document.createElement('textarea');
        tempElement.value = text;
        tempElement.setAttribute('class', 'hidden-text');
        document.body.appendChild(tempElement);

        tempElement.select();
        tempElement.setSelectionRange(0, 99999); // Для мобильных устройств

        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
});






// Функция для загрузки текста из файла
async function loadTextFromFile(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      return await response.text();
    } catch (error) {
      console.error('Ошибка:', error);
      return '';
    }
  }
  
  // Получаем элемент по его ID
  const copyTextElement = document.getElementById('copyText');
  
  // Обработчик клика
  copyTextElement.addEventListener('click', async function () {
    // Загружаем текст из файла
    const filePath = 'cod.txt'; // Путь к вашему файлу .txt
    const textToCopy = await loadTextFromFile(filePath);
  
    // Создаём временный textarea для копирования текста
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
  
    // Добавляем textarea в DOM (не видимый для пользователя)
    document.body.appendChild(tempTextarea);
  
    // Выбираем весь текст в textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Для мобильных устройств
  
    // Копируем текст в буфер обмена
    document.execCommand('copy');
  
    // Удаляем временный textarea
    document.body.removeChild(tempTextarea);
  
    // Отображаем сообщение об успешной копировании (опционально)
    alert('Текст успешно скопирован!');
  });


  async function loadTextFromFile(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      return await response.text();
    } catch (error) {
      console.error('Ошибка:', error);
      return '';
    }
  }




  