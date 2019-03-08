"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Gabriel Hernandez
   Date: 3/6/19  

   Filename:   ph_clock.js     

*/
// track the number of minutes left to submit ticket order
var minsLeft = 0;
//track thenumber of seconds left within each minute
var secsLeft = 15;
//store the number of seconds left to submit ticket order
var timeLeft = minsLeft * 60 + secsLeft;






/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
