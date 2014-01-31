$(function() {

  $("input").focus(function () {
    $(this).prev("label").css("font-weight", "bold");
    $(this).css("background", "cyan");
  });

  $("div").hover(function () {
    $(this).children("input").css({"border-color": "blue", "border-width": "1px", "border-style": "solid"});
  });


  $("input.noun-input" ).blur(function() {
    var noun_input = $("input.noun-input").val();
    $('.noun').text(noun_input);
  });

  $("input.plural-noun-input").blur(function() {
    var plural_noun_input = $("input.plural-noun-input").val();
    $('.plural-noun').text(plural_noun_input);
  });

  $("input.verb-input").blur(function() {
    var verb_input = $("input.verb-input").val();
    $('.verb').text(verb_input);
  });

  $("input.adjective-input").blur(function() {
    var adjective_input = $("input.adjective-input").val();
    $('.adjective').text(adjective_input);
  });

  $("input.currency-input").blur(function() {
    var currency_input = "Bitcoins";
    $('.currency').text(currency_input);
  });

  $("input.womans-name-input").blur(function() {
    var womans_name_input = $("input.womans-name-input").val();
    $('.womans-name').text(womans_name_input);
  });

  $("input.street-name-input").blur(function() {
    var street_name_input = $("input.street-name-input").val();
    $('.street').text(street_name_input);
  });

  $("input.country-input").blur(function() {
    var country_input = $("input.country-input").val();
    $('.state').text(country_input);
  });

  $("input.broadway-musical-input").blur(function() {
    var broadway_musical_input = $("input.broadway-musical-input").val();
    $('.musical').text(broadway_musical_input);
  });

  $("input.two-digit-number-input").blur(function() {
    var two_digit_number_input = $("input.two-digit-number-input").val();
    $('.number').text(two_digit_number_input);
  });


});


