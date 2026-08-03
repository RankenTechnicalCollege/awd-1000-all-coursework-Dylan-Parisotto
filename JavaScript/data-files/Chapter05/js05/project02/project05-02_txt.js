"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Dylan Parisotto
      Date:   8/3/2026--------------------------------------------------

      Filename: project05-02.js
*/

var images = document.getElementsByTagName("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

for (var i = 0; i < images.length; i++) {
   images[i].onclick = function() {
      if (this.parentNode.id === "photo_bucket") {
         var newItem = document.createElement("li");
         photoList.appendChild(newItem);
         newItem.appendChild(this);
      } else {
         var oldItem = this.parentNode;
         photoBucket.appendChild(this);
         oldItem.parentNode.removeChild(oldItem);
      }
   };
}

