var author;
var quote;

function getQuote() {
    $.ajax({
      type: 'GET',
      url: 'https://talaikis.com/api/quotes/random/',
      success: function(data){
        author = data["author"];
        quote = data["quote"];
        $(".author-text").html("-" + " " + author);
        $(".quote").html('"' + quote + '"');
        $(".author-text").fadeIn('slow');
        $(".quote").fadeIn('slow');
      
    }});
}
   
$(document).ready(function() {
    getQuote();
    $(".new-quote-btn").on("click", function() {
        $(".author-text").fadeOut('slow');
        $(".quote").fadeOut('slow', function(){
          getQuote();
        });
    });
    $("#twitter").on("click", function(){
        window.open('https://twitter.com/intent/tweet?' + "text=" + quote + " - " + author);
    });
  });
