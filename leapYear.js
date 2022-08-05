//// declare function

function leapYear(year) {

    if (year % 4 == 0 || year % 100 != 0 || year % 400 == 0) {
        console.log('Year is leapYear');
    }

    else {
        console.log('Year is not leapYear');
    }

}

// called function
let vlaue = 2004;
leapYear(vlaue);