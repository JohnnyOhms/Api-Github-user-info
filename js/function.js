import * as v from "./varr.js"

export async function getUser(user){
    try{
        let fetchData = await fetch(v.api.user + user)
        if (fetchData.status >=200 && fetchData.status <= 299) {
            let result = await fetchData.json();
            console.log(result);
            // checkNull(result);
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
    // checkNull(data);
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

function checkNull(target){
    if (target == null){
        return ""
    }
    return target;
    for(const value in target){
        if(target[value] == null){
            // return target[value] = " not Null"
            console.log(target[value]);
        }
        return target[value];
    }
}

export async function overViewRepo(user){
    let fetchData = await fetch(v.api.user + user + v.api.repos)
    if(fetchData.status >= 200  && fetchData.status <= 299){
        let result  = await fetchData.json()
        console.log(result);
        // checkNull(result)
        displayOverview(result)
        displayRepo(result)
        showContributionBoard(user);
    }else{
        return;
    }
}

function displayOverview(data){
    shuffleRepo(data);
    
    let overView;
    overView = data.map((repo)=>{
            return `<div class="border rounded p-3">
                        <span>
                            <a href="${repo.clone_url}" target="_blank" rel="noopener noreferrer">
                                ${repo.name}
                            </a>
                        </span>
                        <div class="des pt-2">
                            <p>${checkNull(repo.description)}</p>
                            <p class="">${repo.language}</p>
                            <i class="fa-regular fa-star"><span>${repo.stargazers_count}</span></i>
                        </div>
                    </div>`
    })
    v.overview.innerHTML = overView.slice(0, 4);
 
}

function displayRepo(data){
    let repos
    repos = data.map((repo)=>{
     
        return `<div class="border-top p-3">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="d-flex ">
                            <a href="${repo.clone_url}" target="_blank" rel="noopener noreferrer">
                                 ${repo.name}
                            </a>
                            <p class="public ms-4 border rounded-pill p-1">${repo.visibility}</P>
                        </span>
                        <p>${repo.description}</p>
                        <p class="">${repo.language}</p>
                    </div>

                    <div class="star">
                        <i class="fa-regular fa-star pt-5">${repo.stargazers_count}</i>
                    </div>
                </div>  
            </div>`
    })
    v.repo.innerHTML = repos;
    v.repo_count.innerHTML =`&nbsp;` + "(" + data.length + ")";

}

function showContributionBoard(user){
    v.contribution_bd.innerHTML = `
        <h3 class= "mb-3">Total contributions</h3>
        <img src="${v.api.contribution}${user}" alt="" class="img-fluid">
    `
}

function shuffleRepo(array){
    let currenIndex = array.length, randomIndex;
    while(currenIndex != 0){
        randomIndex = Math.floor(Math.random() * currenIndex)
        currenIndex --;

        [array[currenIndex], array[randomIndex]] = 
        [array[randomIndex], array[currenIndex]]
    }
    return array
}
