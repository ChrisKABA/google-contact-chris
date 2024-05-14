
let ContainerCreateBtn = document.querySelector('.header__left__creatContactContainer');
let oneContact = document.querySelector('.creatAction__oneContact');
let listContact = document.querySelector('.main__listContact')
let windowCreateContact = document.querySelector('.windowCreateContact')
let contactBtn = document.querySelector('.header__left__contacBtn')
let btnPlusLibelles = document.querySelector('.header__left__libelles__title__btnPlus')
let windowDark = document.querySelector('.windowDark')
let btnNothingLibelles = document.querySelector('.modal__createLibelle__btnAction__nothing')
let saveLibelle = document.querySelector('.modal__createLibelle__btnAction__save')


function visibilityBtnCreateAction() {
    let creatAction = document.querySelector('.creatAction');
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

//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16z"/></svg>


function createLibelle() {
    
    const libelles = document.querySelector('.header__left__libelles');
    const libelleName = document.querySelector('#newLibelle');

    const svg = document.createElement('img');
    svg.scr = "./../images/libelle.svg"
    svg.setAttribute('alt', "libelle icon")
    
    const span = document.createElement('span');
    span.textContent = libelleName.value

    
    const libelleItem = document.createElement('div');
    libelleItem.className = 'header__left__libelle__item';


    libelleItem.append(svg, span);
    libelles.appendChild(libelleItem);
}


ContainerCreateBtn.addEventListener('click',visibilityBtnCreateAction);
oneContact.addEventListener('click',OpenWindowsCreatContact);
contactBtn.addEventListener('click',OpenWindowsListContact);
btnPlusLibelles.addEventListener('click',showModalAddLibelles);
btnNothingLibelles.addEventListener('click',hiddenModalAddLibelles);
saveLibelle.addEventListener('click',createLibelle)








//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914z"/></svg>