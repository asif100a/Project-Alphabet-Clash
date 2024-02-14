// function play() {
//     // Step-1: Hide The Home Screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
    
//     // Step-2: Playground Section
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
    
// };


function continueGame() {
    // Step-1: Generate a random alphabet 
    const alphabet = getARendomAlphabet();
    console.log('Random Alphabet:', alphabet);
};

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
};