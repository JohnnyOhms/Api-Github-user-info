import * as v from "./js/varr.js"
import * as f from "./js/function.js"

v.form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let user = v.input.value;
    
    f.getUser(user);
})