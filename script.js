document.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor((Math.random() * 20) + 1);
  var randomBackground = randomNumber + ".jpg";
  console.log(randomNumber);

  document.querySelector("div#picture").style.backgroundImage = "url(src/a/" + randomBackground + ")";
  document.querySelector("div.background").style.backgroundImage = "url(src/a/" + randomBackground + ")";
});
$('bar').on('keydown', function(keyPress) {
    var input = $('input[name="text_input"]');

    if(!input.is(':focus') &&  keyPress.key.match(/^[0-9a-zA-Z]+$/)) {
        input.focus();
        input.val(input.val()+keyPress.key);
    }

});