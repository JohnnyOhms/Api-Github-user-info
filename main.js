import * as v from "./js/varr.js"
import * as f from "./js/function.js"

v.form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let user = v.input.value;
    if(user !== ""){
        f.getUser(user);

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