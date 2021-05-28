//Display curent Day ,Date 
var today =moment().format('dddd,MMMM Do YYYY');
$("#currentDay").html(today);

//Console log the hour  you run the app
 var theHourNow = moment().format('H');
console.log(theHourNow);

//Time assignments AM ,PM

var morn9 = 9;var morn10 = 10;var morn11 = 11;
var noon = 12;
var noon1 = 13;var noon2 = 14;var noon3 = 15;var noon4 = 16;var noon5 = 17;

//The if else blocks decides the color code in the app : PAST time in grey ,future time in GREEN and PRESENT time in red
//There are individual blocks for each hour from 9-5


//Morning time zones starting 9am
if (theHourNow > morn9) {
    $("#nine-am").addClass("past");
} else if (theHourNow < morn9) {
    $("#nine-am").addClass("future");
} else  {
    $("#nine-am").addClass("present");
}

// 10 
if (theHourNow > morn10) {
    $("#ten-am").addClass("past");
} else if (theHourNow < morn10) {
    $("#ten-am").addClass("future");
} else  {
    $("#ten-am").addClass("present");
}

// 11 
if (theHourNow > morn11) {
    $("#eleven-am").addClass("past");
} else if (theHourNow < morn11) {
    $("#eleven-am").addClass("future");
} else {
    $("#eleven-am").addClass("present");
}

// 12 noon
if (theHourNow > noon) {
    $("#twelve-noon").addClass("past");
} else if (theHourNow < noon) {
    $("#twelve-noon").addClass("future");
} else{
    $("#twelve-noon").addClass("present");
}

// Afternoon starting 1 pm
if (theHourNow > noon1) {
    $("#one-pm").addClass("past");
} else if (theHourNow <noon1) {
    $("#one-pm").addClass("future");
} else   {
    $("#one-pm").addClass("present");
}

// 2 pm
if (theHourNow >noon2) {
    $("#two-pm").addClass("past");
} else if (theHourNow <noon2) {
    $("#two-pm").addClass("future");
} else {
    $("#two-pm").addClass("present");
}

// 3 pm
if (theHourNow >noon3) {
    $("#three-pm").addClass("past");
} else if (theHourNow <noon3) {
    $("#three-pm").addClass("future");
} else  {
    $("#three-pm").addClass("present");
}

// 4 pm
if (theHourNow >noon4) {
    $("#four-pm").addClass("past");
} else if (theHourNow <noon4) {
    $("#four-pm").addClass("future");
} else   {
    $("#four-pm").addClass("present");
}

// 5 pm
if (theHourNow >noon5) {
    $("#five-pm").addClass("past");
} else if (theHourNow <noon5) {
    $("#five-pm").addClass("future");
} else  {
    $("#five-pm").addClass("present");
}


//functions to set and get localStorage 
$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});

$(window).on('load', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});


