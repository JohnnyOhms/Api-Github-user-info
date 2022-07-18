import * as v from "./js/varr.js"
import * as f from "./js/function.js"

v.form.addEventListener("submit", (e)=>{
    e.preventDefault();
    v.title.innerHTML = ""
    let user = v.input.value;
    if(user !== ""){
        f.getUser(user);
        f.overViewRepo(user);

    }else{
        v.alertParent.innerHTML =""
        let mssg = document.createElement("div")
            mssg.innerHTML =`
            <div class="alert alert-danger d-grid" role="alert">
                <p>Search a Username to Display</p>
            </div>
            `
            v.alertParent.appendChild(mssg) 
    }
})
window.onload = ()=>{
    firstChecked();
}

v.first_radio.addEventListener("click", firstChecked)

function firstChecked(){
    v.second_radio.style.color = "white"
    v.first_radio.style.color = "orangeRed"
}

v.second_radio.addEventListener("click", secondChecked)

function secondChecked (){
    v.first_radio.style.color = "white"
    v.second_radio.style.color = "orangeRed"
}