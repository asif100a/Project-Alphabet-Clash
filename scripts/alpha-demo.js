// function play() {
//     // Step-1: Hide The Home Screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
    
//     // Step-2: Playground Section
//     const playgroundScreen = document.getElementById('play-ground');
//     playgroundScreen.classList.remove('hidden');
    
// };


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
};