const choice = {
    'rock': "assests/rock.png",
    'paper': "assests/papel.png",
    'scissors': "assests/secior.png"

}



function changeRhandImage() {
    let index = 0;
    const inputs = ['rock', 'paper', 'scissors'];
    
    setInterval(() => {
        let Rvalue = Math.floor(Math.random() * inputs.length)
        const rand = inputs[Rvalue]
        document.getElementById("RandomImage").src = choice[rand];
        
       
    }, 850); 
}


window.onload = function() {
    changeRhandImage();
};

function gertuser(input) {
    // let input = document.querySelector(".options")

    const optionC = document.querySelector(".hand");
    const resPage = document.querySelector(".resultPage");
    optionC.style.display = "none"
    resPage.classList.remove("hidden")
    resPage.classList.add("flex-col")
    console.log(input)
    document.getElementById('userChoice').src = choice[input]

    console.log('User Input:', input);


    getcp(input);

}
function getcp(userInput) {
    const inputs = ['rock', 'paper', 'scissors'];
    let Rvalue = Math.floor(Math.random() * inputs.length)
    const rand = inputs[Rvalue]


    refree(userInput, rand);
}

function refree(userInput, cpInput) {


    if (userInput === cpInput) {
        setres("IT'S A DRAW", cpInput);
    }
    else if (userInput === 'scissors' && cpInput === 'paper') {
        setres("YOU WIN..!", cpInput);
    }
    else if (userInput === 'paper' && cpInput === 'rock') {
        setres("YOU WIN..!", cpInput);
    }
    else if (userInput === 'rock' && cpInput === 'scissors') {
        setres("YOU WIN..!", cpInput);
    }
    else if (userInput === 'paper' && cpInput === 'scissors') {
        setres("YOU LOSE.!", cpInput);
    }
    else if (userInput === 'rock' && cpInput === 'paper') {
        setres("YOU LOSE.!", cpInput);
    }
    else if (userInput === 'scissors' && cpInput === 'rock') {
        setres("YOU LOSE.!", cpInput);
    }
    else {
        setres("Invalid input", "no Played");
    }

}
function setres(res, cpInput) {

    document.getElementById('computerChoice').src = choice[cpInput]
    document.getElementById('resText').innerHTML = res
}
function restart(){
    const optionC = document.querySelector(".hand");
    const resPage = document.querySelector(".resultPage");
    optionC.style.display="flex"
    
    resPage.classList.add("hidden");

}



