
let createBtn = document.querySelector('.header__left__creatContact')

function visibilityBtnCreateAction() {
    let creatAction = document.querySelector('.creatAction');
    if (creatAction.style.display === "block") {
        creatAction.style.display= "none";
        return
    }
    creatAction.style.display = "block"
}

function name(params) {
    
}

createBtn.addEventListener('click',visibilityBtnCreateAction)