//your JS code here. If required.
/*  your css code here. If applicable */
const targetElement = document.getElementById('level');

let level = 0;

for (let current = targetElement; current != null; current = current.parentElement) {
    level++;
}

alert("The level of the element is: " + level);