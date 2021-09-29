// TODO:
/*
    Need to use moment.js to display current time
    Time: 
        - Time is displayed at the top of the page. 
        - When hour passes, row is greyed out
        - When it is the current time, row is red 
        - All other future times, row is green
    
    Input: 
    When user types an input: 
        - Input is saved into the local files after user enters event and clicks save
        - When user refreshes page, it is saved and still there.
    
*/

// Display current time
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(today);

// When hour passes, row is greyed out

function timeInterval(){
    var time = moment().hour(); 
    $(".time-block").each(function (i)) { 
        if (this.)
    }
}


// when it is the current time, row is red 
// future times, row is green 

timeInterval();