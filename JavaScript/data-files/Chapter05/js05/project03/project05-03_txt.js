"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Dylan Parisotto
      Date:   8/3/2026

      Filename: project05-03_txt.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
   if (n.nodeName === heading) {
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      n.insertBefore(anchor, n.firstChild);a

      let listItem = document.createElement("li");
      let link = document.createElement("a");
      listItem.appendChild(link);

      link.textContent = n.textContent;
      link.href = "#doclink" + headingCount;

      toc.appendChild(listItem);

      headingCount++;
   }
}

