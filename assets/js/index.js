
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