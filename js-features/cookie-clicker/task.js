let count = 0;
let imgbtn = document.getElementById("cookie");
let disp = document.getElementById("clicker__counter");
 
imgbtn.onclick = function () {
count++;
disp.innerHTML = count;
    if (count % 2) {
        imgbtn.style.width = "230px";

    } else {
        imgbtn.style.width = "200px";
    }
}