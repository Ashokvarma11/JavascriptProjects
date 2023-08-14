const quizData1 = [
  // Question 1
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: "H2O"
  },
  // Question 2
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  // Question 3
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  // Question 4
  {
    question: "What is the largest organ in the human body?",
    options: ["Brain", "Liver", "Heart", "Skin"],
    correctAnswer: "Skin"
  },
  // Question 5
  {
    question: "In which country would you find the Eiffel Tower?",
    options: ["Italy", "France", "Spain", "Germany"],
    correctAnswer: "France"
  },
  // Question 6
  {
    question: "Which scientist is best known for his theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    correctAnswer: "Albert Einstein"
  },
  // Question 7
  {
    question: "What is the symbol for the chemical element gold?",
    options: ["Au", "Go", "Ag", "Gd"],
    correctAnswer: "Au"
  },
  // Question 8
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "George Orwell"],
    correctAnswer: "F. Scott Fitzgerald"
  },
  // Question 9
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  // Question 10
  {
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "H2O", "CO2", "O"],
    correctAnswer: "O"
  },
  // Add more questions here...
];

let i = 0
let count=0
let div = document.getElementById("div")
let h3=document.createElement("h3")
let p=document.getElementById('question')
p.textContent=`${i+1} of 10 question`
if(i>10){
  p.textContent=""
}
h3.textContent = quizData1[0].question
div.append(h3)
for (let j = 0; j < quizData1[0].options.length; j++) {
  let but = document.createElement("button")
  but.textContent = quizData1[0].options[j]
  but.addEventListener('click', function () {
    if (but.textContent == quizData1[0].correctAnswer) {
      but.style.backgroundColor = "green"
    }
    else {
      console.log(quizData1[0].correctAnswer)
      but.style.backgroundColor = "red"
    }
  })
  div.append(but)
}

let myInterval = setInterval(function() {
  i++
  if(i<10){
  p.textContent=`${i+1} of 10 question`
  div.textContent = ""
  h3 = document.createElement("h3")
  div.append(h3)
  h3.textContent = quizData1[i].question
  for (let j = 0; j < quizData1[i].options.length; j++) {
    let but = document.createElement("button")
    but.textContent = quizData1[i].options[j]
    but.addEventListener('click', function () {
      if (but.textContent == quizData1[i].correctAnswer) {
        but.style.backgroundColor = "green"
      }
      else {
        console.log(quizData1[i].correctAnswer)
        but.style.backgroundColor = "red"
        console.log(i)
      }
    })
    div.append(but)
  }
}
else{
  let over=document.createElement('p')
  over.textContent="Your quiz is over"
}

},5000)



let time=document.getElementById("time")
let j=29
countInterval=setInterval(function(){
  if(i<10){
  time.textContent=`Time left : ${j}`
  time.style.color="red"
  j--
  if(j==-1){
    j=29

  }
}
},1000)


// next.addEventListener('click',function(){
//   j=29
//   i++
//   p.textContent=`${i} of 10 question`
//   div.textContent = ""
//   h3 = document.createElement("h3")
//   div.append(h3)
//   h3.textContent = quizData1[i].question
//   for (let j = 0; j < quizData1[i].options.length; j++) {
//     let but = document.createElement("button")
//     but.textContent = quizData1[i].options[j]
//     but.addEventListener('click', function () {
//       if (but.textContent == quizData1[i - 1].correctAnswer) {
//         but.style.backgroundColor = "green"
//       }
//       else {
//         console.log(quizData1[i - 1].correctAnswer)
//         but.style.backgroundColor = "red"
//         console.log(i)
//       }
//     })
//     div.append(but)

// })


// let i=0
// let h1=document.createElement("h1")
// let div=document.createElement("div")
// setInterval(function(){
//   div.innerHTML=""
//   setInterval(function(){
//     function count(j){
//       h1.innerHTML=""
//       h1.innerHTML=j
//       document.body.append(h1)
//       j--
//       if(j>0){
//         count(j)
//       }
//     }
//     count(30)

//   },3000)
  
//   let question=document.createElement("h1")
//   question.textContent=quizData1[i].question
//   div.append(question)
//   for(let j=0;j<quizData1[i].options.length;j++){
//     let options=document.createElement("button")
//     options.textContent=quizData1[i].options[j]
//     div.append(options)
//   }
//   document.body.append(div)
  
//   i++
// },5000)



