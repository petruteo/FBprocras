// function handleSubtmit() {
//     // document.getElementById('timer').innerHTML = "kjhjfgjhagefjhhfae";
//     console.log("din popup js");
// };

// document.getElementById("demo").innerHTML = "aa111abbb JS simplu";

$("#1234").html("123");

$("#timeToSave").change(function () {
    var minutesRead = "dededa";
    minutesRead = $("#timeToSave").val();
    $("#timeEntered").html(minutesRead + " minutes");
    // chrome.storage.sync.set({ nrMinutes: minutes }, function () { });
});

$("#butonDeSubmit").click(() => {
    $("#butonDeSubmit").text("Done. Closing window...");

    setTimeout(function () { window.close(); }, 3000);



});