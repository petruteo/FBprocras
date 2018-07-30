// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {file: "testScript.js"});
//  });

// MAIN

$("document").ready(() => {

    let divCounter = '<div style="border-radius: 5px; opacity: 0.75; background-color: red; font-size:10px; font-family: Verdana, Geneva, sans-serif; padding: 6px; text-align: center; color:white; position: fixed; top: 60; left: 0; z-index: 999; width: 100%; height: 70px; width: 125px"><div id="pretimer">I allow myself several minutes of procrastination </div><div id="timer" style="font-size:32px;">I allow myself several time of procrastination</div></div>';

    let allowMoreDiv = '<div style="filter:alpha(opacity=100); -moz-opacity:1; -khtml-opacity: 1; opacity: 1;  position: fixed; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);  background-color: red; font-size:20px; font-family: Verdana, Geneva, sans-serif;;">Click here to allow yourself another 10 minutes</div>';
    let overlayDiv = '<div id="overlay"><div  style=" position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity: 0.5; z-index: 10000;">' + allowMoreDiv + '</div></div>';

    $('body').prepend(divCounter);
    // console.log("yo, sunt pe facebook");
    var minutes = "01";

    chrome.storage.sync.get(['nrMinutes'], function (result) {
        minutes = result.nrMinutes;
    });
    document.getElementById('timer').innerHTML = minutes + ":" + 00;
    startTimer(minutes);

    function startTimer(m) {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m < 0) {
            // console.log('timer completed');
            // minutes = "05";
            allowMore();
            return true;
        };

        document.getElementById('timer').innerHTML =
            m + ":" + s;
        setTimeout(startTimer, 1000);
    };

    function allowMore() {
        $('#timer').prepend(overlayDiv);
        $(document).click(() => {

            console.log("overaly clicat");
            $("#overlay").remove();
            // $("#timer").text("10:00");
            document.getElementById('timer').innerHTML = "01" + ":" + 00;

            startTimer();
        });

        // $('#overlay').live("click", function () {
        //     $(this).fadeOut("slow", function () { $(this).remove() });

        // });

    };


    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
        if (sec < 0) { sec = "59" };
        return sec;
    }


});