//-----------------------------------------------------------------------------//
playing = false
appeared_questions = []
score = 0
count = 0
correct_answers = ["New Delhi","Rhopalocera","5,778 K","21.1111","Junko Tabei","Gujarat","1920","hydrochloric acid","Venus","28 inches"]
document.querySelector(".start").onclick = function(){
  if(playing == true){
    location.reload()
  }else{
    playing = true
    document.querySelector(".question").style.height = "auto"
    document.querySelector(".start").innerHTML = "Reset Game"
    genrandom()
  }
}

//-----------------------------------------------------------------------------//
for(i=1;i<5;i++){
  document.querySelector('.mcq'+i).onclick = function(){
    if(correct_answers.includes(this.innerHTML)){
      document.querySelector(".correct_box").style.display = "block"
      setTimeout(hide_correct,300)
      score = score + 1
    }
    var option = this. getAttribute('class')
    colorOption(option)
    setTimeout(getToOriginal, 300);

    function getToOriginal(){
      document.querySelector("."+option).style.backgroundColor = "white"
      document.querySelector("."+option).style.color = "black"
    }

    document.querySelector("#score").innerHTML = score
    count = count + 1
    if(count == (questions.length)){
      gameOver();
    }
    setTimeout(genrandom, 500);
  }
}
//---------------------------------------------------------------------------- //

function genrandom(){

  ran_q = Math.floor(Math.random()*(questions.length))
  if(appeared_questions.includes(ran_q)){
    genrandom();
  }else{
    appeared_questions.push(ran_q)
  }
  document.querySelector(".question").innerHTML = questions[ran_q].question
  document.querySelector(".mcq1").innerHTML = questions[ran_q].m1
  document.querySelector(".mcq2").innerHTML = questions[ran_q].m2
  document.querySelector(".mcq3").innerHTML = questions[ran_q].m3
  document.querySelector(".mcq4").innerHTML = questions[ran_q].m4
}

//----------------------------------------------------------------------//

function gameOver(){
  document.querySelector(".question").innerHTML = ""
  document.querySelector(".mcq1").innerHTML = ""
  document.querySelector(".mcq2").innerHTML = ""
  document.querySelector(".mcq3").innerHTML = ""
  document.querySelector(".mcq4").innerHTML = ""
  document.querySelector(".question").style.height = "100px"
  if(score >= 8 ){
    document.querySelector(".gameOver").style.backgroundColor = "#5FD068"
  }
  else if(score >= 3 && score < 8){
    document.querySelector(".gameOver").style.backgroundColor = "#F24C4C"
  }else{
    document.querySelector(".gameOver").style.backgroundColor = "red"
  }
  document.querySelector(".gameOver").style.display = "block"
  document.querySelector("#score-game-over").innerHTML = score
}

//----------------------------------------------------------------------//


function colorOption(option){
  // console.log(option);
  document.querySelector("."+option).style.backgroundColor = "#413F42"
  document.querySelector("."+option).style.color = "white"
}

function hide_correct(){
  document.querySelector(".correct_box").style.display = "none"
}





questions = [
  {
    question: "What is the capital of India?",
    m1: "Banglore",
    m2: "Delhi",
    m3: "New Delhi",
    m4: "Hyderabad"
  },
  {
    question: "What is the scientific name of a butterfly?",
    m1: "Formicidae",
    m2: "Rhopalocera",
    m3: "Coleoptera",
    m4: "Apis"
  },
  {
    question: "How hot is the surface of the sun?",
    m1: "69,300 K",
    m2: "1,223 K",
    m3: "12,130 K",
    m4: "5,778 K"
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    m1: "21.1111",
    m2: "20",
    m3: "18.8889",
    m4: "158"
  },
  {
    question: "The first woman to climb mount Everest was  ",
    m1: "Marie Jose perec",
    m2: "Florence Griffith Joyner",
    m3: "Junko Tabei",
    m4: "Jackie Joyner Kersee"
  },
  {
    question: "Which among the following states produces 60% Salt of India?",
    m1: "Rajasthan",
    m2: "Odisha",
    m3: "Gujarat",
    m4: "Maharashtra"
  },
  {
    question: "India first took part in the Olympic Games in the year",
    m1: "1920",
    m2: "1928",
    m3: "1972",
    m4: "1974"
  },
  {
    question: "The Acid in gastric juice is",
    m1: "Acetic acid",
    m2: "Nitric acid",
    m3: "Hydrochloric acid",
    m4: "Sulphuric acid"
  },
  {
    question: "Which among the following planets is smaller in size than the Earth?",
    m1: "Neptune",
    m2: "Venus",
    m3: "Saturn",
    m4: "Uranus"
  },
  {
    question: "What is the length of each stump in cricket?",
    m1: "28 inches",
    m2: "32 inches",
    m3: "2 ft",
    m4: "2 ½ ft"
  }
]
