const colorChange = document.querySelector('.color');
const content = document.querySelectorAll('.content');
const number = document.querySelectorAll('.number');
const title = document.querySelectorAll('.title');
const red = document.querySelectorAll('.red');
const body = document.querySelector('body');

function nightDayHandler(self) {

    if (self.value === 'night') {
        body.style.backgroundImage = 'url("img_night.jpg")';
        body.style.backgroundSize = 'initial';
        self.value = 'day';
        setColor1('white');
        setColor2('white');
        setColor3('rgba(0, 0, 0, 0)');
        setColor4('rgba(0, 0, 0, 0)');
        setColor5('rgba(0, 0, 0, 0)');
        setColor6('white');
        setColor7('rgba(0, 0, 0, 0)');
        setColor8('white');
    } else if (self.value === 'day') {
        body.style.backgroundImage = 'url("img_day.jpg")';
        body.style.backgroundSize = 'initial';
        self.value = 'night';
        setColor1('#2DB400');
        setColor2('rgb(85, 50, 0)');
        setColor3('white');
        setColor4('white');
        setColor5('white');
        setColor6('rgb(248, 166, 72)');
        setColor7('white');
        setColor8('#CD2E57');
    }
}

function setColor1(color1) {

    for (let c1 = 0; c1 < content.length; c1++) {
        content[c1].style.color = color1;
    }
}

function setColor2(color2) {
    
    for (let c2 = 0; c2 < number.length; c2++) {
        number[c2].style.color = color2;
    } 
}

function setColor3(color3) {
    
    for (let c3 = 0; c3 < content.length; c3++) {
        content[c3].style.backgroundColor = color3;
    }
}

function setColor4(color4) {
    
    for (let c4 = 0; c4 < number.length; c4++) {
        number[c4].style.backgroundColor = color4;
    } 
}

function setColor5(color5) {
    
    for (let c5 = 0; c5 < title.length; c5++) {
        title[c5].style.backgroundColor = color5;
    }
}

function setColor6(color6) {
    
    for (let c6 = 0; c6 < title.length; c6++) {
        title[c6].style.color = color6;
    }
}

function setColor7(color7) {
    
    for (let c7 = 0; c7 < red.length; c7++) {
        red[c7].style.backgroundColor = color7;
    }
}

function setColor8(color8) {

    for (let c8 = 0; c8 < red.length; c8++) {
        red[c8].style.color = color8;
    }
}