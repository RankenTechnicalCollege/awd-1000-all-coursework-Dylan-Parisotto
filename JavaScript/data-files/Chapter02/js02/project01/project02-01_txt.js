/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Dylan Parisotto
      Date:   7/29/2026

      Filename: project02-01_txt.js
 */

     function FahrenheitToCelsius(degree) {
            return (degree - 32) / 1.8;
     }

     function CelsiusToFahrenheit(degree) {
            return (degree * 1.8) +32;
     }

     document.getElementById("cValue").onchange = function() {
            var cDegree = document.getElementById("cValue").value;
            document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
     };

     document.getElementById("fValue").onchange = function() {
            var fDegree = document.getElementById("fValue").value;
            document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
     };