const cardContainer = document.getElementById('container');

let javascriptQuestions = [
    {
        question: 'what are the 6 primitive data types?',
        answer: 'strings, numbers, booleans, null, undefined, bigint, symbol'
    },
    {
        question: 'what are logical comparison operators',
        answer: '||, &&, >, !'
    },
    {
        question: 'What is a conditional statement',
        answer: 'an if or else/if statement'
    },
    {
        question: 'how would you describe a function?',
        answer: 'a reusable block of code that perform a specific task, they must be called in order to execute'
    },
    {
        question: 'what are parameters?',
        answer: 'Parameters give a name to the data to be passed into the function(x,y,z), arguments then give the paramaters their values(7,"hello",true)'
    },
    {
        question: 'what is scope',
        answer: 'scope is the accessibility of variables(global vs local)'
    },
    {
        question: 'what are methods',
        answer: 'actions that can be perfomed on an object example.upperCase()'
    },
    {
        question: 'what is the difference between let,const, and var',
        answer: 'Variables declared by let are only available inside the block where they are defined.Variables declared by var are available throughout the function in which they are declared'
    },
    {
        question: 'what is a fetch request',
        answer: 'fetch() is a method to request data from a server'
    },
    {
        question: 'What is an API',
        answer: 'Application Programming Interfaces, a means for 2 software components to communicate with another'
    },
    {
        question: 'What are some ways to refer to an html element through JS',
        answer: 'document.getElementById("example"), document.querySelectorAll(".container"), getElementsByClassName("example")'
    },
    {
        question: 'what is an event listener',
        answer: 'a way for a user to interact, it can be a click,button, hover etc'
    },
    {
        question: 'what are some ways to add an attribute to a value',
        answer: 'element.dataset.state = "animate" or element.setAttribute("data-state", "animate");'
    },
    {  
         question: 'What is node',
        answer: 'Nodejs allows Javascript code to run outside the browser'
    },
    {  
         question: 'what is the "this" keyword in JS',
        answer: '"this" refers to the current object, it is commonly used in constructors to assign values to object properties' 
    },
    {  
         question: ' what are some feature of javascript',
        answer: 'lightweight,cross-platform compatible,opensource, OOP, back and front end'
    },
    {  
         question: 'difference between let and var ',
        answer: 'let is block scoped, can\'t redeclare variables, hoisting does not occur. Var is function scoped, allows you to redeclare variables,hoisting'
    },
    {  
         question: 'What is DOM',
        answer: '(Document Object Model) defineds the HTML element as on object'
    },
    {  
         question: 'Difference between attributes and Property',
        answer: 'Attributes - provide more details on an element like ID, type Property - value assigned to the property like type = "text" or value = "name"'
    },
    {  
         question: 'Is JS single threaded',
        answer: 'This means code is read one line at a time'
    },


]



for (let i = 0; i < javascriptQuestions.length; i++) {
    const card = document.createElement('div');
    card.setAttribute("id","card")
    console.log("hello")
    let cardQuestion = document.createElement("h2")
    let cardAnswers = document.createElement("h5")
    
    cardQuestion.textContent = javascriptQuestions[i].question
    cardAnswers.textContent=javascriptQuestions[i].answer
    cardAnswers.setAttribute("id","hidden")
    
    card.append(cardQuestion)
    card.append(cardAnswers)
    cardContainer.append(card)

    card.addEventListener("click", function() {
       let answerVisibilty = cardAnswers.getAttribute('id')
        
       if (answerVisibilty === "hidden") {
        cardAnswers.setAttribute("id","visible")
       } else {
        cardAnswers.setAttribute("id","hidden")
       }
        
       
      });

}


// go over event delegation tonight