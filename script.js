const body = document.querySelector('body')
const loader = document.querySelector('.nig')
const burger = document.querySelector('i')
const menu = document.querySelector('.menu')
const nav = document.querySelectorAll('.menu a')
const close = document.querySelector('.menu i')

setTimeout(() => {
    body.classList.remove('hidden')
    loader.style.opacity = '0'
    setTimeout(() => {
        loader.style.display = 'none'
    }, 300)
}, 2000);

burger.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
})

close.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
})

nav.forEach((c) => {
    c.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)'
    })
})


// ВАЖНО !!!!!!!!!!!!!!!!!!!!!!!!!
// чтобы взять токен бота через botFather создаем бот
// IDchat скркз бот - userinfo bot



document.getElementById('tgForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Отключить стандартное поведение формы

    // Параметры Telegram
    const botToken = 'ВАШ_ТОКЕН_БОТА'; // Укажите токен вашего бота
    const chatId = 'ВАШ_CHAT_ID'; // Укажите ID чата, куда нужно отправить сообщение

    // Собрать данные из формы
    const formData = new FormData(this);
    let message = 'Новое сообщение из формы:\n';
    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    // URL для отправки сообщения
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Отправить запрос
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при отправке сообщения в Telegram');
            }
            return response.json();
        })
        .then(data => {
            console.log('Сообщение отправлено:', data);
            alert('Сообщение успешно отправлено!');
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке сообщения.');
        });
});
