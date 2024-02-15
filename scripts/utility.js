function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
};

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};

function setBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
};

function removeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
};

function getARendomAlphabet() {
    // get Alphabet in an array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSingle = alphabetString.split('');
    
    // get A rendom index from 0-25
    const rendomNumbers = Math.random() * 25;
    const indexNumber = Math.round(rendomNumbers);

    const alphabet = alphabetSingle[indexNumber];
    return alphabet;
};