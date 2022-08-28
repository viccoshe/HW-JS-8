let lang = document.querySelector('html');
lang.setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let title = document.createElement('title');
title.innerHTML = 'Call to Action';
document.head.appendChild(title);

//css
let style = document.createElement('style');
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}
.section-wrapper {
    height: 880px;
    background-color: #fff;
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.section-wrapper .title {
    margin: 122px auto 10px;
    Width: 354px;
    font-family: 'Arvo', sans-serif, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #212121;
}

.section-wrapper .text {
    margin: 10px auto 55px auto;
    font-family: 'OpenSans', sans-serif, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 26px;
    align-items: center;
    text-align: center;
    color: #9FA3A7;
}

.section-wrapper .main-block {
    max-width: 800px;
    width: 100%;
    max-height: 480px;
    height: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
}

.section-wrapper .main-block .main-block_freelance,
.section-wrapper .main-block .main-block_studio {
    width: 400px;
    height: 480px;
}

.section-wrapper .main-block .main-block_freelance {
    border: 1px solid #E8E9ED;
    background-color: #fff;
}
.section-wrapper .main-block .main-block_studio {
    border: 1px solid #8F75BE;
    background: #8F75BE;
}

.section-wrapper .main-block .main-block_freelance .suptitle,
.section-wrapper .main-block .main-block_studio .suptitle {
    font-family: 'Montserrat', sans-serif, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    font-size: 12px;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 2.4px;
    color: #9FA3A7;
    max-width: 107px;
    width: 100%;
    margin: 81px auto 19px;
}

.section-wrapper .main-block .main-block_freelance .title,
.section-wrapper .main-block .main-block_studio .title {
    max-width: 210px;
    width: 100%;
    margin: 0 auto 25px auto;
    line-height: 46px;
    text-align: center;
}

.section-wrapper .main-block .main-block_freelance .text,
.section-wrapper .main-block .main-block_studio .text {
    max-width: 210px;
    width: 100%;
    margin: 0 auto 52px auto;
    align-items: center;
}

.section-wrapper .main-block .main-block_freelance .button,
.section-wrapper .main-block .main-block_studio .button  {
    border: 3px solid #FFC80A;
    border-radius: 30px;;
    width: 147px;
    height: 46px;
    background-color: #fff;
    margin: 0 auto 93px auto;
}

.section-wrapper .main-block .main-block_freelance .button-span,
.section-wrapper .main-block .main-block_studio .button-span {
    font-family: 'Montserrat', sans-serif, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 12px;
    color: #212121;
    font-weight: bold;
    margin-top: 15px;
    display: flex;
    align-items:center;
    justify-content: center;
    text-align: center;
    letter-spacing: 2.4px;
    color: #212121;
}

.section-wrapper .main-block .main-block_studio .suptitle {
    color: #FFC80A;
}
.section-wrapper .main-block .main-block_studio .title,
.section-wrapper .main-block .main-block_studio .button-span,
.section-wrapper .main-block .main-block_studio .text {
    color: #fff;
}
.section-wrapper .main-block .main-block_studio .button {
    background: #8F75BE;
}
 
@font-face {
    font-family: "Montserrat";
    src: url("fonts/Montserrat-VariableFont_wght.ttf");
    font-style: normal;
    font-weight: normal;
}

@font-face {
    font-family: "Arvo";
    src: url("fonts/Arvo.ttf");
    font-style: normal;
    font-weight: normal;
}
`;
document.head.appendChild(style);



let section = document.createElement('div');
section.setAttribute('class', 'section-wrapper');
document.body.appendChild(section);

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Option';
h2.setAttribute('class', 'title');
section.appendChild(h2);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.setAttribute('class', 'text');
section.appendChild(p);

let mainBlock = document.createElement('div');
mainBlock.setAttribute('class', 'main-block');
section.appendChild(mainBlock);

//div class = main-block_freelance
let freelanceBlock = document.createElement('div');
freelanceBlock.setAttribute('class', 'main-block_freelance');
mainBlock.appendChild(freelanceBlock);

let supTitle = document.createElement('p');
supTitle.setAttribute('class', 'suptitle');
supTitle.innerHTML = 'FREELANCER';
freelanceBlock.appendChild(supTitle);

let blockTitle = document.createElement('h2');
blockTitle.setAttribute('class', 'title');
blockTitle.innerHTML = 'Initially designed to';
freelanceBlock.appendChild(blockTitle);

let subText = document.createElement('p');
subText.setAttribute('class', 'text');
subText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
freelanceBlock.appendChild(subText);

let button = document.createElement('div');
button.setAttribute('class', 'button');
freelanceBlock.appendChild(button);

let span = document.createElement('span');
span.setAttribute('class', 'button-span');
span.innerHTML = 'START HERE';
button.appendChild(span);

//div class = main-block_studio
let studioBlock = freelanceBlock.cloneNode(true);
mainBlock.appendChild(studioBlock);
studioBlock.classList.remove('main-block_freelance');
studioBlock.classList.add('main-block_studio');
let studioSubtext = document.querySelector('.main-block_studio').querySelector('.suptitle');
studioSubtext.classList.add('studio-suptext');
let studioTitle = document.querySelector('.main-block_studio').querySelector('.title');
studioTitle.classList.add('studio-title');
let studioSubText = document.querySelector('.main-block_studio').querySelector('.text');
studioSubText.classList.add('studio-subtext');
let studioButton = document.querySelector('.main-block_studio').querySelector('.button');
studioButton.classList.add('studio-button');
let studioSpan = document.querySelector('.main-block_studio').querySelector('.button').querySelector('.button-span');;
studioSpan.classList.add('studio-span');


















