"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Dylan Parisotto
      Date:   8/4/2026

      Filename: project06-01.js
*/

var submitButton = document.getElementById("submitButton");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {
   pwd.setCustomValidity("");
   pwd2.setCustomValidity("");

   if (!pwd.validity.valid) {
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
   } else if (pwd.value !== pwd2.value) {
      pwd2.setCustomValidity("Your passwords must match");
   }
});

