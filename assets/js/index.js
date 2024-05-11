
let createBtn = document.querySelector('.header__left__creatContact');
let select = document.getElementById("select");

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

// function changes() {

//     let select_s = select.style;
     
//     switch(select.selectedIndex) {
     
//     case 0 :
//     select_s.background = "url('./assets/images/Flag_of_the_Democratic_Republic_of_the_Congo.svg.png') no-repeat";
//     break;
     
//     case 1 :
//     select_s.background = "url('image2.ext') no-repeat";
//     break;
     
//     case 2 :
//     select_s.background = "url('image3.ext') no-repeat";
//     break;
     
//     case 3 :
//     select_s.background = "url('image4.ext') no-repeat";
//     break;
     
//     default:
//     select_s.background = "none";
//     break;
//     }
// }

// select.addEventListener('change',changes)

//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
//<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914z"/></svg>