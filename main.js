var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var colorChange = document.querySelector('.color');
var content = document.querySelectorAll('.content');
var number = document.querySelectorAll('.number');
var title = document.querySelectorAll('.title');
var sidebarBtn = document.querySelector('.sidebarBtn');
var sidebarBtnImage = document.querySelector('.sidebarBtnImage');
var sidebar = document.querySelector('.sidebar');
var dayNightImage = document.querySelectorAll('.dayNightImage');
var items = document.querySelectorAll('.question');

function openCloseAnswer() {
    const answerId = this.id.replace('que', 'ans');

    if(document.getElementById(answerId).style.display === 'block') {
        document.getElementById(answerId).style.display = 'none';
        document.getElementById(this.id + '-toggle').textContent = '+';
    } else {
        document.getElementById(answerId).style.display = 'block';
        document.getElementById(this.id + '-toggle').textContent = '-';
    }
}

  items.forEach(item => item.addEventListener('click', openCloseAnswer));

function nightDayHandler(self) {

    var body = document.querySelector('body');

    if (self.value === 'night') {
        body.style.backgroundImage = 'url("img_night.jpg")';
        body.style.backgroundSize = 'cover';
        colorChange.innerText = ('🤞ㅤㅤ야간모드ㅤㅤ🤞');
        self.value = 'day';
        setColor1('white');
        setColor2('white');
        setColor3('rgba(0, 0, 0, 0)');
        setColor4('rgba(0, 0, 0, 0)');
        setColor5('rgba(0, 0, 0, 0)');
        setColor6('white');
    } else {
        body.style.backgroundImage = 'url("img_day.jpg")';
        body.style.backgroundSize = 'cover';
        colorChange.innerText = ('🤞ㅤㅤ주간모드ㅤㅤ🤞');
        self.value = 'night';
        setColor1('#2DB400');
        setColor2('rgb(85, 50, 0)');
        setColor3('white');
        setColor4('white');
        setColor5('white');
        setColor6('rgb(248, 166, 72)');
    }
}

function setColor1(color1) {

    for (var c1 = 0; c1 < content.length; c1++) {
        content[c1].style.color = color1;
    }
}

function setColor2(color2) {
    
    for (var c2 = 0; c2 < number.length; c2++) {
        number[c2].style.color = color2;
    } 
}

function setColor3(color3) {
    
    for (var c3 = 0; c3 < content.length; c3++) {
        content[c3].style.backgroundColor = color3;
    }
}

function setColor4(color4) {
    
    for (var c4 = 0; c4 < number.length; c4++) {
        number[c4].style.backgroundColor = color4;
    } 
}

function setColor5(color5) {
    
    for (var c5 = 0; c5 < title.length; c5++) {
        title[c5].style.backgroundColor = color5;
    }
}

function setColor6(color6) {
    
    for (var c6 = 0; c6 < title.length; c6++) {
        title[c6].style.color = color6;
    }
}


sidebarBtn.addEventListener('click', () => {

    sidebar.classList.toggle('active');
    sidebarBtn.classList.toggle('toggle');

    if(sidebar.classList.length == 2) {
        sidebarBtnImage.src = 'left.svg';
    } else {
        sidebarBtnImage.src = 'right.svg';
    };
});