
let ContainerCreateBtn = document.querySelector('.header__left__creatContactContainer');
let oneContact = document.querySelector('.creatAction__oneContact');
let listContact = document.querySelector('.main__listContact');
let windowCreateContact = document.querySelector('.windowCreateContact');
let contactBtn = document.querySelector('.header__left__contacBtn');
let btnPlusLibelles = document.querySelector('.header__left__libelles__title__btnPlus');
let windowDark = document.querySelector('.windowDark');
let btnNothingLibelles = document.querySelectorAll('.modal__libelle__btnAction__nothing');
let saveLibelle = document.querySelector('.modal__createLibelle__btnAction__save');
const libelleName = document.querySelector('#newLibelle');
const modal__renameLibelle = document.querySelector('.modal__renameLibelle');
const modal__createLibelle = document.querySelector('.modal__createLibelle');
const modal__renameLibelle__btnAction__save = document.querySelector('.modal__renameLibelle__btnAction__save');


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
    modal__createLibelle.style.display = 'flex'
    windowDark.style.display = "flex";
}

function showModalRenameLibelles(libelleId) {
    windowDark.style.display = "flex";
    modal__renameLibelle.style.display = "flex"
    modal__renameLibelle__btnAction__save.addEventListener('click', function () {
        renameLibellePart2(libelleId)
    });
}

function hiddenModalLibelles() {
    windowDark.style.display = "none";
    modal__createLibelle.style.display = 'none'
    modal__renameLibelle.style.display = "none"
}

function createElement(type, properties = {}) {
    const element = document.createElement(type);
    Object.assign(element, properties);
    return element;
}

function createIcon(text, clickHandler) {
    return createElement('img', {
        src: text,
        onclick: clickHandler,
        alt : 'renommer icon'
    });
}


function createLibelle() {
    
    const libelleId = crypto.randomUUID();
    const libelles = document.querySelector('.header__left__libelles');

    const svg = document.createElement('img');
    svg.setAttribute('src','./assets/images/libelle.svg');
    svg.setAttribute('alt', "libellé icon");

    
    const span = document.createElement('span');
    span.textContent = libelleName.value

    const partie2 = document.createElement('div')
    partie2.classList.add("header__left__libelle__item__partie2", "flex", "spaceBetween", "alignItemCenter");

    const partie2__icon1 = createIcon('./assets/images/material-Icon/edit-icon.svg',function () {
        renameLibellePart1(libelleId);
    });
    partie2__icon1.classList.add('visibilityHidden','header__left__libelle__item__partie2__icon');

    const partie2__icon2 = document.createElement('img');
    partie2__icon2.classList.add('visibilityHidden','header__left__libelle__item__partie2__icon')
    partie2__icon2.setAttribute('src','./assets/images/material-Icon/delete-icon.svg');
    partie2__icon2.setAttribute('alt', "renommer icon");

    
    const libelleItem = document.createElement('div');
    libelleItem.classList.add('header__left__libelle__item','flex', 'alignItemCenter');
    libelleItem.setAttribute('id',libelleId);


    partie2.appendChild(span);
    libelleItem.append(svg, partie2, partie2__icon1, partie2__icon2);
    libelles.appendChild(libelleItem);
    hiddenModalLibelles()
}


function renameLibellePart1(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    const libelleOldName = libelleItem.querySelector('span');
    const oldLibelle = document.getElementById('oldLibelle')
    oldLibelle.value = libelleOldName.textContent;
    showModalRenameLibelles(libelleId)
}

function renameLibellePart2(libelleId) {
    const libelleItem = document.getElementById(libelleId);
    const libelleOldName = libelleItem.querySelector('span');
    const newName = document.getElementById('oldLibelle')
    libelleOldName.textContent = newName.value
    hiddenModalLibelles()  
}



ContainerCreateBtn.addEventListener('click',visibilityBtnCreateAction);
oneContact.addEventListener('click',OpenWindowsCreatContact);
contactBtn.addEventListener('click',OpenWindowsListContact);
btnPlusLibelles.addEventListener('click',showModalAddLibelles);
btnNothingLibelles[0].addEventListener('click',hiddenModalLibelles);
btnNothingLibelles[1].addEventListener('click',hiddenModalLibelles);
saveLibelle.addEventListener('click',createLibelle);



