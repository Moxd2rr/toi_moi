const questionElement = document.getElementById('question');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const valentineImage = document.getElementById('valentineImage');
const confettiContainer = document.getElementById('confettiContainer');

const phrases = [
    "Es-tu sûre ?",
    "yihhh j'ai ratééeee !!!",
    "Réfléchis bien !",
    "Ne sois pas timide !",
    "Allez, dis oui !",
    "Tu vas regretter !",
    "Dernière chance !",
    "Je t'aime !"
];

let clickCount = 0;

noButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount < phrases.length) {
        questionElement.textContent = phrases[clickCount];
    } else {
        questionElement.textContent = "Bon, d'accord...";
    }
    yesButton.style.transform = `scale(${1 + clickCount * 0.2})`;
});

yesButton.addEventListener('click', () => {
    questionElement.textContent = "Youpi ! Tu es ma Valentine ! 💖";
    valentineImage.src = "decoratif-love-you-typographie-police-ludique-fond-blanc-illustration_1090394-65554.webp";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    createConfetti();
    const music = document.getElementById('backgroundMusic');
    music.play();
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
}