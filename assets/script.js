

// Display current time
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(today);

// When hour passes, row is greyed out
// when it is the current time, row is red 
// future times, row is green 

function timeInterval(){
    var currentTime = moment().hour(); 

    // splits the string and returns the number 
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


saveButton.on("click", function() { 
    
    
    var event = $(this).siblings('.description').val(); 
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, event);
    console.log(time)
    console.log(event);
})

    // Log in each event for each hour 
    
    var hour9= $("#hour-9 .description")
    hour9.val(localStorage.getItem("hour-9"))

    var hour10= $("#hour-10 .description")
    hour10.val(localStorage.getItem("hour-10"))

    var hour11= $("#hour-11 .description")
    hour11.val(localStorage.getItem("hour-11"))

    var hour12= $("#hour-12 .description")
    hour10.val(localStorage.getItem("hour-12"))

    var hour13= $("#hour-13 .description")
    hour13.val(localStorage.getItem("hour-13"))

    var hour14= $("#hour-14 .description")
    hour14.val(localStorage.getItem("hour-14"))

    var hour15= $("#hour-15 .description")
    hour15.val(localStorage.getItem("hour-15"))

    var hour16= $("#hour-16 .description")
    hour16.val(localStorage.getItem("hour-16"))

    var hour17= $("#hour-17 .description")
    hour17.val(localStorage.getItem("hour-17"))

timeInterval();