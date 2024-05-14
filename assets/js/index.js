
let ContainerCreateBtn = document.querySelector('.header__left__creatContactContainer');
let oneContact = document.querySelector('.creatAction__oneContact');
let listContact = document.querySelector('.main__listContact');
let windowCreateContact = document.querySelector('.windowCreateContact');
let contactBtn = document.querySelector('.header__left__contacBtn');
let btnPlusLibelles = document.querySelector('.header__left__libelles__title__btnPlus');
let windowDark = document.querySelector('.windowDark');
let btnNothingLibelles = document.querySelector('.modal__createLibelle__btnAction__nothing');
let saveLibelle = document.querySelector('.modal__createLibelle__btnAction__save');


function visibilityBtnCreateAction() {
    const creatAction = document.querySelector('.creatAction');
    if (creatAction.style.display === "block") {
        creatAction.style.display= "none";
        return
    }
    creatAction.style.display = "block"
}


function OpenWindowsCreatContact() {
    listContact.style.display = 'none';
    windowCreateContact.style.display = 'block';
}


function OpenWindowsListContact() {
    listContact.style.display = 'block';
    windowCreateContact.style.display = 'none'; 
}

function showModalAddLibelles() {
    windowDark.style.display = "flex";
}

function hiddenModalAddLibelles() {
    windowDark.style.display = "none";
}


function createLibelle() {
    
    const libelles = document.querySelector('.header__left__libelles');
    const libelleName = document.querySelector('#newLibelle');


    const svg = document.createElement('img');
    svg.setAttribute('src','./assets/images/libelle.svg');
    svg.setAttribute('alt', "libellé icon");

    
    const span = document.createElement('span');
    span.textContent = libelleName.value

    
    const libelleItem = document.createElement('div');
    libelleItem.className = 'header__left__libelle__item';


    libelleItem.append(svg, span);
    libelles.appendChild(libelleItem);
    hiddenModalAddLibelles()
}


ContainerCreateBtn.addEventListener('click',visibilityBtnCreateAction);
oneContact.addEventListener('click',OpenWindowsCreatContact);
contactBtn.addEventListener('click',OpenWindowsListContact);
btnPlusLibelles.addEventListener('click',showModalAddLibelles);
btnNothingLibelles.addEventListener('click',hiddenModalAddLibelles);
saveLibelle.addEventListener('click',createLibelle);