(() => {

const text = `

My Dearest Sanju & Sravs❤️,

Looking back at everything, I know I haven't always been the easiest person to deal with.
There were times when I shut down, went quiet, or accidentally ignored you guys—and I’m truly sorry for those moments.
But what blows my mind is how you both never held it against me.
You understood me even when I didn't say a word, 
dragged me out of every tough situation, 
and somehow kept me sane with your ridiculous jokes. 
Seeing you both every single day is my absolute safe space. 
Thank you for being the sweetest, most patient, and most forgiving friends ever. 
I'd be completely lost without our chaotic trio! 🥹✨💖
konchem ekkuva anipisthundha...
but still thakkuve anipisthundhee na prema mundhuu...

🎂 Happy Friendship Day ❤️

With lots of love,
sonuu❤️

`;

const typing = document.getElementById("typingText");
const finalBtn = document.getElementById("finalBtn");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeWriter, 25);

    } else {

        gsap.to(finalBtn, {
            opacity: 1,
            duration: 1
        });

    }

}

function startLetter(){

    showScreen("letterPage");

    typing.innerHTML = "";
    i = 0;

    setTimeout(typeWriter, 500);

}


finalBtn.onclick = () => {
    showScreen("endingPage");
    showScreen("endingPage");

gsap.from("#endingTitle",{

    y:-80,
    opacity:0,
    duration:1.5

});
};
window.startLetter = startLetter;
})();