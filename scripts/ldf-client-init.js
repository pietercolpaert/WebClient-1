/*! @license ©2014 Ruben Verborgh - Multimedia Lab / iMinds / Ghent University */
/** Initialization code for the LDF client. */

jQuery(function ($) {
  // Initialize the client
  var ldfConfig = { prefixes: prefixes },
      ldfUI = new LinkedDataFragmentsClientUI($('.ldf-client'), ldfConfig);
  ldfUI.activate();

  // Load the example queries
  $.getJSON('queries.json', function (queries) {
    var $queries = $('.queries'), $query = $('.query');
    $queries.append(queries.map(function (query) {
      return $('<option>', { value: query.sparql, title: query.sparql, text: query.name });
    }));
    $queries.change(function () { $query.val($queries.val()); });
    // Load an example query if the query field is empty
    if ($query.val() === '')
      $queries.change();
  });

  // Allow start fragment selection
  var $startFragment = $('.startFragment');
  $startFragment.change(function () { ldfUI.config.startFragment = $startFragment.val(); });
  $startFragment.change();
  $startFragment.children().each(function () { this.title = this.value; });
});
