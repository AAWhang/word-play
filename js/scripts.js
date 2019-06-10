$(document).ready(function() {
  $("#userWords").submit(function(event) {

    var userSentence = $("#userSentence1").val();
    alert(userSentence);
    var userWord = userSentence.split(' ');
    alert(userWord[2]);
    var lettersLong = [];
    userWord.forEach(function(str) {
      if (str.length >= 3) {
        lettersLong.push(str);
      }
    });
    // Needed ti add (' ') to create a way to remove commas and add spaces.
    alert(lettersLong);
    lettersLong.reverse(' ');
    var completedSentenceFunction = lettersLong.join(' ');
    alert(completedSentenceFunction);
    $("#sentenceEdit").append("<p>" + userSentence + " " + completedSentenceFunction + "</p>");

    event.preventDefault();
  });
});
