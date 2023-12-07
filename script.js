let burguer = document.querySelector(".burguer_nav");
let nav = document.querySelector('.nav__menu');
let appen = document.querySelector('.appen');
let header = document.querySelector('header');


window.addEventListener("resize", (e) => {
    if (e.target.innerWidth >= 720) {
        cleanSpecialClass();
        nav.classList.remove('variant');
        appen.style.display = 'none';
    }
});

burguer.addEventListener("click", function () {
    let navClList = [...nav.classList];
    if (navClList.includes('variant')) {
        nav.classList.remove('variant');
        appen.style.display = 'none';
    }
    else {
        nav.classList.add('variant');
        appen.style.display = 'block';
        header.style.position = "absolute";
    };
});

window.addEventListener("scroll", function () {
    let scrlY = window.scrollY;
    if (scrlY >= 250 && [...nav.classList].includes('variant')) {
        nav.classList.add('special');
        appen.classList.add('special');
        header.classList.add('special');
        header.style['background-color'] = 'hsl(194, 90%, 60%)';
    }
    else {
        cleanSpecialClass();
    }

    if (window.scrollX >= 720) {
        cleanSpecialClass();
    }
});

function cleanSpecialClass () {
    header.style['background-color'] = 'transparent';
    nav.classList.remove('special');
    appen.classList.remove('special');
    header.classList.remove('special');
}

