

// Display current time
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(today);

// When hour passes, row is greyed out
// when it is the current time, row is red 
// future times, row is green 

function timeInterval(){
    var currentTime = moment().hour(); 
    // Turn
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(blockTime)
        if (blockTime < currentTime) {

            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {

            $(this).addClass("present");
        }
        else {
         
            $(this).addClass("future");

        }

    })
  
    }
    
// When user wants to save their input    
var saveButton= $(".saveBtn"); 

var userEvents = [];
saveButton.on("click", function() { 
    
    
    var event = $(this).siblings('.description').val(); 
    var time = $(this).siblings('.hour').text();
    userEvents.push(time, event);
    localStorage.setItem("userEvents", JSON.stringify(userEvents));
    console.log(time)
    console.log(event);
})

// Displaying any saved events 
var storedEvents = JSON.parse(localStorage.getItem("userEvents")); 
    if (storedEvents !== null) { 
        userEvents = storedEvents;
        console.log(storedEvents)
    }



timeInterval();