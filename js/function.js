import * as v from "./varr.js"

export async function getUser(user){
    try{
        let fetchData = await fetch(v.api.user + user)
        let result = await fetchData.json();
        console.log(result);
    }catch(err){
        // v.alert.classList.remove("hide")
        let mssg = document.createElement("div")
        mssg.innerHTML =`
        <div class="alert alert-danger d-grid" role="alert">
            <p>Search a Username to Display</p>
        </div>
        `
        v.section.appendChild(mssg)

    }
}
