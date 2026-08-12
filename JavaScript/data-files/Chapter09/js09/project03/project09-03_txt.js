"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if (localStorage.sbloggerVisit) {
   let storedLastDate = localStorage.sbloggerVisit;
   lastVisitDate.textContent = storedLastDate;
   let lastDate = new Date(storedLastDate);

   for (let i = 0; i < articleDates.length; i++) {
      let articleDate = new Date(articleDates[i].textContent);
      if (articleDate > lastDate) {
         articleDates[i].innerHTML += " <strong>new</strong>";
      }
   }
} else {
   lastVisitDate.textContent = "Welcome to SBlogger!";

   for (let i = 0; i < articleDates.length; i++) {
      articleDates[i].innerHTML += " <strong>new</strong>";
   }
}

let currentDate = new Date("9/12/2024");
localStorage.sbloggerVisit = currentDate.toLocaleDateString();

