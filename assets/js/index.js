
let ContainerCreateBtn = document.querySelector('.header__left__creatContactContainer');
let oneContact = document.querySelector('.creatAction__oneContact')
let listContact = document.querySelector('.main__listContact')
let windowCreateContact = document.querySelector('.windowCreateContact')
let contactBtn = document.querySelector('.header__left__contacBtn')
let btnPlusLibelles = document.querySelector('.header__left__libelles__title__btnPlus')



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

function showModalAddLibelles(params) {
    let windowDark = document.querySelector('.windowDark')
    windowDark.style.display = "flex";
}

function hiddenModalAddLibelles() {
    let windowDark = document.querySelector('.windowDark')
    windowDark.style.display = "none";
}


ContainerCreateBtn.addEventListener('click',visibilityBtnCreateAction);
oneContact.addEventListener('click',OpenWindowsCreatContact);
contactBtn.addEventListener('click',OpenWindowsListContact);
btnPlusLibelles.addEventListener('click',showModalAddLibelles);





//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914z"/></svg>