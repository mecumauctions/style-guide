// Alert Component Interaction

var $alert = $('.alert'),
    $alertTrigger = $('.alert__icon-trigger');

$alertTrigger.on('click', function (event) {
  var $alertDismissed = 'alert--dismissed',
      $alertHidden =    'alert--hidden';

  event.preventDefault();

  $(this).parent($alert).addClass($alertDismissed);
  $(this).parent($alert).delay(500).queue(function () {
    $(this).addClass($alertHidden)
  });
});