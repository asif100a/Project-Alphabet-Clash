// function play() {
//     // Step-1: Hide The Home Screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
    
//     // Step-2: Playground Section
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
    
// };


function handleKeyboardButtonPress(event) {
    const gamerPressed = event.key;
    // console.log('Gamer pressed:', gamerPressed);

    // Stop the Game if gamer pressed 'Esc'
    if(gamerPressed === 'Escape') {
        gameOver();
    };

    // get the expected to press
    const displayAlphabet = document.getElementById('display-alphabet');
    const targetAlphabet = displayAlphabet.innerText;
    const lowerCaseAlphabet = targetAlphabet.toLowerCase();
    // console.log('Gamer Pressed:', gamerPressed, 'target alphabet:', lowerCaseAlphabet);

    // get matched Alphabet
    if(gamerPressed === lowerCaseAlphabet) {

        const defaultScore = getTextElementValueById('default-score');
        const updatedScore = defaultScore + 1;
        setTextElementValueById('default-score', updatedScore);


        // -----------------------------------------------------
        // // get The Default Score number
        // const defaultScoreElement = document.getElementById('default-score');
        // const defaultScoreText = defaultScoreElement.innerText;
        // const defaultScoreInt = parseInt(defaultScoreText);
        // console.log(defaultScoreInt);

        // // Add new Score
        // const newScore = defaultScoreInt + 1;
        
        // // Update the Score
        // defaultScoreElement.innerText = newScore;

        // Start a new round
        removeBackgroundById(lowerCaseAlphabet);
        continueGame();
    }
    else{
        const defaultLife = getTextElementValueById('default-life');
        const updatedLife = defaultLife - 1;
        setTextElementValueById('default-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        };


        // ---------------------------------------------------------
        // console.log('You losed your life');
        // // Step-1: get the default life number
        // const defaultLifeElement = document.getElementById('default-life');
        // const defaultLifeText = defaultLifeElement.innerText;
        // const defaultLifeInt = parseInt(defaultLifeText);

        // // Step-2: Reduce the life count
        // const newLife = defaultLifeInt - 1;

        // // Step-3: Display the updated life count
        // defaultLifeElement.innerText = newLife;
    };
};
// Capture keyboard keypress
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // Step-1: Generate a random alphabet 
    const alphabet = getARendomAlphabet();

    // Step-2: Display the Random Alphabet
    const displayAlphabet = document.getElementById('display-alphabet');
    displayAlphabet.innerText = alphabet;

    // Step-3: Set Background color
    setBackgroundById(alphabet);
};

function play() {
    // Hide everything Show only the Playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // Reset score and life
    setTextElementValueById('default-life', 5);
    setTextElementValueById('default-score', 0);

    continueGame();
};

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Updated Final score
    // 1. get the 
    const lastScore = getTextElementValueById('default-score');
    setTextElementValueById('last-score', lastScore);

    // Clear the last selected Alphabet
    const displayAlphabet = getElementTextById('display-alphabet');
    removeBackgroundById(displayAlphabet);
};