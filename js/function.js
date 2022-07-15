import * as v from "./varr.js"

export async function getUser(user){
    try{
        let fetchData = await fetch(v.api.user + user)
        if (fetchData.status >=200 && fetchData <= 299) {
            let result = await fetchData.json();
            console.log(result);
            displayProfile(result)   
        }else{
            v.alertParent.innerHTML =""
            let mssg = document.createElement("div")
                mssg.innerHTML =`
                <div class="alert alert-danger d-grid" role="alert">
                    <p>Search a Username to Display</p>
                </div>
                `
                v.alertParent.appendChild(mssg)       }
    }catch(err){
        console.log(err)
    }
}


