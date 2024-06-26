let questions = [
    {
      question: '1. What does HTML stand for?',
      answer: 'Hyper Text Markup Language',
      options: [
        'Hyper Text Preprocessor',
        'Hyper Text Markup Language',
        'Hyper Text Multiple Language',
        'Hyper Tool Multi Language',
      ],
    },
    {
      question: '2. What does CSS stand for?',
      answer: 'Cascading Style Sheet',
      options: [
        'Common Style Sheet',
        'Colorful Style Sheet',
        'Computer Style Sheet',
        'Cascading Style Sheet',
      ],
    },
    {
      question: '3. What does PHP stand for?',
      answer: 'Hypertext Preprocessor',
      options: [
        'Hypertext Preprocessor',
        'Hypertext Programming',
        'Hypertext Preprogramming',
        'Hometext Preprocessor',
      ],
    },
    {
      question: '4. What does SQL stand for?',
      answer: 'Structured Query Language',
      options: [
        'Stylish Question Language',
        'Stylesheet Query Language',
        'Statement Question Language',
        'Structured Query Language',
      ],
    },
    {
      question: '5. What does XML stand for?',
      answer: 'eXtensible Markup Language',
      options: [
        'eXtensible Markup Language',
        'eXecutable Multiple Language',
        'eXTra Multi-Program Language',
        'eXamine Multiple Language',
      ],
    },
]





let quiz = document.getElementById("window");
 let btn = document.getElementById("nextBtn");
 let count = 0;
 let userA = 0;

if(typeof questions !== 'undefined' && questions.length >0 ){
  quiz.classList.remove("hidden");
  ShowQuetions(count);
}

function ShowQuetions(index){
  const title = document.getElementById("question");
 const list = document.getElementById("butList");
  let doneQue = document.getElementById("done");

  title.innerHTML = `${questions[index].question}`;
  list.innerHTML = '';
  questions[index].options.forEach(item => {
     const text =  `<button id="btn" class="btn">${item}</button>`;
       list.insertAdjacentHTML("beforeend", text);
  });


  doneQue.innerHTML = `${index + 1} of ${questions.length} Questions`;


  const options = list.querySelectorAll(".btn");
  
  options.forEach(item =>  item.setAttribute("onclick", "CorrectFunc(this)"));
}

function CorrectFunc(answer){

  const userAnswer = answer.textContent.trim();
  const correctAnswer = questions[count].answer;
  const correctIcon = `<span>&#10004;</span>`;
  const incorrectIcon = `<span>&#9940</span>`;
 btn.classList.remove("hidden");

     const options = document.querySelectorAll("#butList .btn");
  options.forEach(option => {
    option.classList.add("disable")});

  if(userAnswer == correctAnswer){
    userA +=1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend",correctIcon);
    

    // options.forEach(item => {
    //   addEventListener('click', ()=>{
    //     item.classList.add("no-hover");
    //   })
    }
    
  else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", incorrectIcon);
    btn.classList.remove("hidden");
    options.forEach(item => {
    if(item.textContent == correctAnswer ){
    setTimeout(() => {item.classList.add("correct");
      item.insertAdjacentHTML( "beforeend",correctIcon)},
      200); 
        }
    }, 
    );
   
   }
  
}


btn.addEventListener('click', NextQue);  

function NextQue(){
  let lastPage = document.getElementById("lastPage");
  let correctQue = document.getElementById("correct-que-count");
  count++;
    if(count<questions.length){
      btn.classList.add("hidden");
  ShowQuetions(count);
    }
    // const options = document.querySelectorAll("#butList .btn");

    if((count) == questions.length )
      {
    lastPage.classList.remove("hidden");
    quiz.classList.add("hidden");
  correctQue.innerHTML = `You got ${userA} out of ${questions.length}`;
  return;
    }
}


