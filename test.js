//тест
function toggleTest() {
    var test = document.getElementById('test');
    if (test.style.display === 'none' || test.style.display === '') {
      test.style.display = 'block';
    } else {
      test.style.display = 'none';
    }
  }
  
  function revealAnswer(correctAnswerId) {
    var correctLabel = document.querySelector('label[for="' + correctAnswerId + '"]');
    correctLabel.style.color = 'green';
    var answerElement = document.getElementById('answer' + correctAnswerId.charAt(correctAnswerId.length - 1));
    answerElement.textContent = 'Правильный ответ: ' + correctLabel.textContent;
  }
  

  
  

  
  
  var currentQuestionIndex = 0;
  var questions = document.querySelectorAll('.question');
  
  function toggleTest() {
    var test = document.getElementById('test');
    if (test.style.display === 'none' || test.style.display === '') {
      test.style.display = 'block';
    } else {
      test.style.display = 'none';
    }
  }
  
  function showQuestion(index) {
    questions.forEach((question, i) => {
      if (i === index) {
        question.style.display = 'block';
      } else {
        question.style.display = 'none';
      }
    });
  }
  
  function prevQuestion() {
    currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
    showQuestion(currentQuestionIndex);
  }
  
  function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion(currentQuestionIndex);
  }
  
  showQuestion(currentQuestionIndex);
  
  
  
  
  
  function showResults() {
    var totalQuestions = 5;
    var answeredQuestions = 0;
    var correctAnswers = 0;
  
    for (var i = 1; i <= totalQuestions; i++) {
      var selectedAnswer = document.querySelector('input[name="question' + i + '"]:checked');
      if (selectedAnswer) {
        answeredQuestions++;
        var selectedAnswerId = selectedAnswer.id;
        var correctAnswerId = 'a' + i;
        if (selectedAnswerId === correctAnswerId) {
          correctAnswers++;
        }
      }
    }
  
    var results = document.getElementById('results');
    var grade;
  
    if (answeredQuestions === totalQuestions) {
      if (correctAnswers === totalQuestions) {
        grade = 'Отлично! Вы ответили правильно на все вопросы.';
      } else if (correctAnswers >= 3) {
        grade = 'Хорошо! Ваш результат: ' + correctAnswers + ' из ' + totalQuestions;
      } else {
        grade = 'Плохо. Ваш результат: ' + correctAnswers + ' из ' + totalQuestions + '. Вам стоит повторить материал.';
      }
      results.textContent = grade;
    } else {
      results.textContent = 'Вы не ответили на все вопросы. Пожалуйста, ответьте на все вопросы перед просмотром результатов.';
    }
  }
  
  function revealAnswer(correctAnswerId) {
    var correctLabel = document.querySelector('label[for="' + correctAnswerId + '"]');
    correctLabel.style.color = 'green';
  }
  
  function toggleTest() {
    var test = document.getElementById('test');
    if (test.style.display === 'none' || test.style.display === '') {
      test.style.display = 'block';
    } else {
      test.style.display = 'none';
    }
  }
  
  
  
  
  var currentQuestionIndex = 0;
  var questions = document.querySelectorAll('.question');
  var totalQuestions = questions.length;
  var progressContainer = document.querySelector('.progress-container');
  var navigationButtons = document.querySelector('.navigation-buttons');
  
  function toggleTest() {
    var test = document.getElementById('test');
    if (test.style.display === 'none' || test.style.display === '') {
      test.style.display = 'block';
      showQuestion(currentQuestionIndex);
      showArrows();
      updateProgress();
    } else {
      test.style.display = 'none';
    }
  }
  
  function showQuestion(index) {
    questions.forEach(function(question, i) {
      if (i === index) {
        question.style.display = 'block';
      } else {
        question.style.display = 'none';
      }
    });
    currentQuestionIndex = index;
    updateProgress();
  }
  
  function showArrows() {
    if (totalQuestions > 1) {
      navigationButtons.style.display = 'block';
    }
  }
  
  function updateProgress() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = totalQuestions;
  }
  

  function showNavigation() {
    var navigation = document.querySelector('.navigation-buttons');
    navigation.style.display = 'block';
  }
