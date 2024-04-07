let horizontScroll = document.querySelector('.containerL');
let RightBtn = document.getElementById('RightBtn');
let LeftBtn = document.getElementById('LeftBtn');

RightBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft + 390,
        behavior: 'smooth'
    });
});

LeftBtn.addEventListener('click', () => {
    horizontScroll.scrollTo({
        left: horizontScroll.scrollLeft - 390,
        behavior: 'smooth'
    });
});
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }



// Получаем все кнопки курсов
const courseButtons = document.querySelectorAll('.btn');

// Добавляем обработчик события клика на каждую кнопку
courseButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Убираем класс .active у всех кнопок
        courseButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем класс .active к выбранной кнопке
        this.classList.add('active');

        // Здесь можно добавить код для отображения соответствующего курса
    });
});


