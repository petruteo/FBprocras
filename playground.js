var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$("document").ready(() => {
var nume = $("h1:first");
nume.css("border", "8px solid red");    
topCard = $(".pv-top-card-v2-section__info");
topCard.append('<button type="button" style="background-color: #4CAF50; border: none; color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;">Click Me!</button>');
topCard.on("click", () => console.log("buton apasat"));
// var company = $(".pv-entity__secondary-title:first");
var company = $(".ember-view:first");

company.css("border", "18px solid green"); 
console.log("LINK",company.attr('href'));
console.log("NUME",nume.val());



});