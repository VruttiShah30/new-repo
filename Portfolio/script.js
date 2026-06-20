// Typing Effect

const text =
"Frontend Developer | MERN Stack Learner";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById(
            "typing-text"
        ).innerHTML += text.charAt(i);

        i++;

        setTimeout(
            typingEffect,
            80
        );
    }
}

typingEffect();


// Scroll Reveal Animation

const cards =
document.querySelectorAll(
'.glass-card'
);

window.addEventListener(
'scroll',
()=>{

cards.forEach(card=>{

const top =
card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity="1";

card.style.transform=
"translateY(0)";
}
});
});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
".7s ease";
});