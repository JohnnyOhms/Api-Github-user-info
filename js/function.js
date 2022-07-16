import * as v from "./varr.js"

export async function getUser(user){
    try{
        let fetchData = await fetch(v.api.user + user)
        if (fetchData.status >=200 && fetchData.status <= 299) {
            let result = await fetchData.json();
            console.log(result);
            displayProfile(result);

        }else{
            v.alertParent.innerHTML =""
            v.profileDetails.innerHTML =""
            let mssg = document.createElement("div")
                mssg.innerHTML =`
                <div class="alert alert-danger d-grid" role="alert">
                    <p>Invalid Input Characters</p>
                </div>
                `
                v.alertParent.appendChild(mssg) 
            }
    }catch(err){
        console.log(err)
    }
}

function displayProfile(data){
    let display;

    display = `
        <div class="Profile mt-4 m-5">
        <img src="${data.avatar_url}" class="img-thumbnail rounded-circle" alt="img">
        <div class="username d-flex justify-content-start mt-5">
            <h1 class="">${data.name}</h1>
        </div>
        <div class="login d-flex justify-content-start mt-3">
            <h3 class="">${data.login}</h3>
        </div>
        <div class="bio d-flex justify-content-start mt-3">
            <p class="">${checkNull(data.bio)}</p>
        </div>

        <div class="view-profile d-grid">
            <a href="${data.html_url}" target="_blank" class="btn btn-outline-secondary p-3 my-3" style="font-size:12px;font-weight:600;">View on Github</a>
        </div>
        <div class="followers d-flex justify-content-start">
            <p id="follwers">${data.followers} follwers</p>
            <p id="following">&nbsp${data.following} following</p>
        </div>
        <div class="d-flex justify-content-start">
            <p id="location"><i class="fa-solid fa-location-dot"></i>&nbsp${data.location}</p>
        </div>
        <div class="d-flex justify-content-start">
            <p id="blog"><i class="fa-solid fa-link"></i>${data.blog}</p>
        </div>
        <div class="d-flex justify-content-start">
            <P id="twitter"><i class="fa-brands fa-twitter"></i>${data.twitter_username}</P>
        </div>
    </div> 
    `
    v.profileDetails.innerHTML = display;
    v.alertParent.innerHTML = ""
}

function checkNull(value){
    if (value == null){
        return ""
    }
    return value;
}

export async function overViewRepo(user){
    let fetchData = await fetch(v.api.user + user + v.api.repos)
    if(fetchData.status >= 200  && fetchData.status <= 299){
        let result  = await fetchData.json()
        console.log(result);
        displayOverview(result)
    }else{
        return;
    }
}


