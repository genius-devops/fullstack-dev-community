/**
    * jQuery code is easy to identify because it makes frequent use of a function named
    * $(). Here is what the debug() function used previously looks like when rewritten to usejQuery:
    */
function debug(msg) {
    var log = $("#debuglog"); // Find the element to display msg in.
    if (log.length == 0) { // If it doesn't exist yet, create it...
    log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
    log.appendTo(document.body); // and insert it at the end of the body.
    }
    log.append($("<pre/>").text(msg)); // Wrap msg in <pre> and append to log.
   }

