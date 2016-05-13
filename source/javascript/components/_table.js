// Table Component Interaction

var $tableExpand = $('.table__expand'),
    $tableRow = $('.table__row'),
    $tableRowActive = ('table__row--active'),
    $tableHidden = $('.table__hidden'),
    $tableHiddenActive = 'table__hidden--active';

$tableExpand.on('click', function (event) {
  event.preventDefault();

  $(this).parent($tableRow).toggleClass($tableRowActive);
  $(this).parent($tableRow).next($tableHidden).toggleClass($tableHiddenActive);

  if($tableRow.hasClass($tableRowActive)) {
    $(this).parent($tableRow).next($tableHidden).attr('aria-hidden', 'false');
  } else {
    $(this).parent($tableRow).next($tableHidden).attr('aria-hidden', 'true');
  };
})