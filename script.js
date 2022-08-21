
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let answer5 = document.getElementById("answer5");

let question = document.getElementsByClassName("question");

function show1() {
  if(answer1.style.display === "none") {
    answer1.style.display = "flex";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
  }
  else{
    answer1.style.display = "none"
  }
}

function show2() {
  if(answer2.style.display === "none") {
    answer2.style.display = "flex";
    answer1.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
  }
  else{
    answer2.style.display = "none"
  }
}

function show3() {
  if(answer3.style.display === "none") {
    answer3.style.display = "flex";
    answer2.style.display = "none";
    answer1.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
  }
  else{
    answer3.style.display = "none"
  }
}

function show4() {
  if(answer4.style.display === "none") {
    answer4.style.display = "flex";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer1.style.display = "none";
    answer5.style.display = "none";
  }
  else{
    answer4.style.display = "none"
  }
}

function show5() {
  if(answer5.style.display === "none") {
    answer5.style.display = "flex";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer1.style.display = "none";
  }
  else{
    answer5.style.display = "none"
  }
}