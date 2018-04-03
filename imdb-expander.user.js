// ==UserScript==
// @name         IMDb FAQ Expander
// @version      1.2
// @description  Adds a button to expand all questions on an IMBd FAQ page
// @match        *://*.imdb.com/title/*/faq*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-end
// ==/UserScript==

function init() {
    $( document ).ready(function() {
        $("#faq-answered").before("<div style='text-align: right'><button id='expand-all' class='ebtn'>Expand all</button></div>");
        $("#expand-all").click( function(){
            var $this = $(this);
            var label = $this.text();
            if ( label === "Expand all" ){
                $(".ipl-expander.faq-question").addClass("ipl-expander--expanded");
                $(".ipl-hideable-container").addClass("ipl-hideable-container--shown").removeClass( "ipl-hideable-container--hidden" );
                $this.text("Close all");
            } else {
                $(".ipl-expander.faq-question").removeClass("ipl-expander--expanded");
                $(".ipl-hideable-container").removeClass("ipl-hideable-container--shown").addClass( "ipl-hideable-container--hidden" );
                $this.text("Expand all");
            }
        });
    });
}

init();

(function() {
    var head;
    var style;

    head = document.getElementsByTagName("head")[0];
    style = document.createElement("style");
    style.type = "text/css";

    var eButton = ".ebtn { background-color: #D0D0D0; border: none; color: #222; padding: 5px 10px; text-align: center; text-decoration: none; display: inline-block; font-size: 13px; border-style: solid; border-width: 0.5px; }";

    style.innerHTML = eButton;
    head.appendChild(style);
})();
