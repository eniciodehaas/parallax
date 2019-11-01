const verwerkScrollEvent = () => {
    let scrollWaarde = this.pageYOffset;
    console.log(scrollWaarde);
    pasDeel2Aan(scrollWaarde);

    pasNavigatieAan(scrollWaarde);

    pasProgressieAan(scrollWaarde);
}

window.addEventListener('scroll', verwerkScrollEvent);
const documentHeight    = document.body.offsetHeight;
const viewportHeight    = window.innerHeight;
let nav                 = document.getElementById('nav')
let laatsteScrollWaarde = 0;
console.log(documentHeight);

const pasNavigatieAan = (value) => {
    if (value < laatsteScrollWaarde) {
        console.log("naar boven");
        nav.style.top = 0;
    } else {
        console.log("naar beneden");
        nav.style.top = '-100%';
    }
    laatsteScrollWaarde = value;
}

const pasDeel2Aan = (value) => {
    document.getElementsByClassName('deel--2')[0].style.backgroundPositionY = -value/2 + 'px';
    if (value > 400) {
        let tussenruimte = value-400;
        document.getElementsByClassName('deel__span--links')[0].style.marginLeft = -tussenruimte/2 + 'px';
        document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = tussenruimte + 'px';
    } else {
        document.getElementsByClassName('deel__span--links')[0].style.marginLeft = 0;
        document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = 0;
    }
}

// change progress
const pasProgressieAan = (value) => {
    let voortgang = value * 100 / (documentHeight - viewportHeight);
    document.getElementById('progressBar').style.width = voortgang + '%';
}