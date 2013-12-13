// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var $seeAnswers;
    $seeAnswers = $('#seeAnswers');
    $seeAnswers.css({
      opacity: "0"
    });
    return $(document).on('click', '#addAnswer', function(e) {
      var val;
      e.preventDefault();
      val = $('#answerPrompt').serialize();
      $('#answerFuture').val('');
      $('#answerGoals').val('');
      return $.get('/sendanswer', val, function(data) {
        $seeAnswers.css({
          opacity: "1"
        });
        $('#success').addClass("show");
        return setTimeout(function() { $("#success").removeClass("show"); }, 3000 );;
      });
    });
  });

}).call(this);