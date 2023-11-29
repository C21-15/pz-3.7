// 1. Завдання з селекторами
$('p').text('Змінений текст');
$('#task1').addClass('highlight');
$('li').addClass('highlight list-item');

// 2. Завдання зі змінами стилів
$('.highlight').css('color', 'red');
$('.list-item').css('background-color', 'lightgray');

// 3. Завдання з анімацією
$('.highlight').fadeIn(1000); // або використайте slideDown()

// 4. Завдання на зміну вмісту
$('#task1 p:last-child').text('Новий останній текст');

// 5. Додаткове завдання
$('body').append('<button id="deleteListItems">Видалити елементи з класом list-item</button>');

$('#deleteListItems').on('click', function() {
    $('.list-item').remove();
});
