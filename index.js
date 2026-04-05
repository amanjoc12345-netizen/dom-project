let heading = document.getElementById("main-heading");
heading.innerText = 'Fruit World';

heading.style.color = "orange";

let headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = "green";

headerDiv.style.borderBottom = "5px solid orange";

let basketHeading =
    document.getElementById("basket-heading");
basketHeading.style.color = "green";

let thanksDiv = document.getElementById("thanks");

let para = document.createElement("p");
para.textContent = "Please visit us again";

thanksDiv.appendChild(para);
