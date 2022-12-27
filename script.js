const cardContainer = document.getElementById('cards');

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
        answer: 'document.getElementById("example"),document.querySelectorAll(".container"),getElementsByClassName("example")'
    },
    {
        question: 'what is an event listener',
        answer: 'a way for a user to interact, it can be a click,button, hover etc'
    },
    {
        question: 'what are some ways to add an attribute to a value',
        answer: 'element.dataset.state = "animate" or element.setAttribute("data-state", "animate");'
    },
]



for (let i = 0; i < javascriptQuestions.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    
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







// const cardContainer = document.querySelector('.card-container');

// const data = [
//     {
//         title: 'Card 1',
//         content: 'Content for Card 1'
//     },
//     {
//         title: 'Card 2',
//         content: 'Content for Card 2'
//     },
//     {
//         title: 'Card 3',
//         content: 'Content for Card 3'
//     }
// ];

// for (let i = 0; i < data.length; i++) {
//     const card = document.createElement('div');
//     card.classList.add('card');

//     const cardTitle = document.createElement('h2');
//     cardTitle.textContent = data[i].title;

//     const cardContent = document.createElement('p');
//     cardContent.textContent = data[i].content;

//     card.appendChild(cardTitle);
//     card.appendChild(cardContent);
//     cardContainer.appendChild(card);
// }

// go over event delegation tonight