
// pos 
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;


// array
var questions = [
  {
      question: "How many horses are on each team in a polo match?",
      a: "9",
      b: "8",
      c: "6",
      d: "4",
      answer: "D"
    },
  {
      question: "What is 12 x 4?",
      a: "21",
      b: "27",
      c: "48",
      d: "96",
      answer: "C"
    },
  {
      question: "Where is the tallest building in the world located?",
      a: "Dubai",
      b: "Hongkong",
      c: "USA",
      answer: "A"
    },
  {
      question: " What is the capital of Canada?",
      a: "Beijing",
      b: "Kathmandu",
      c: "Ottawa",
      d: "Dhaka",
      answer: "C"
    },

     {
      question: "When do you have the best energy?",
      a: "6am-12pm",
      b: "12pm-6pm",
      c: "6pm-Midnight",
      d: "1pm-5am",
      answer: "C"
    }
  ];
// getElementById function	
function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }

  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;


  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";

  // display the answer options
  
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}
//event listener to call renderQuestion 
window.addEventListener("load", renderQuestion);