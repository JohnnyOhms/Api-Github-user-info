import * as v from "./varr.js"

export async function getUser(user){
    try{
        let fetchData = await fetch(v.api.user + user)
        if (fetchData.status >=200 && fetchData.status <= 299) {
            let result = await fetchData.json();
            console.log(result);
            displayProfile(result)   
        }else{
            v.alertParent.innerHTML =""
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
    let Display;
    displayProfile.innerHTML = `
        <div class="Profile mt-4 m-5">
        <img src="image.jpg" class="img-thumbnail rounded-circle" alt="img">
        <div class="username d-flex justify-content-start mt-5">
            <h1 class="">${}</h1>
        </div>
        <div class="login d-flex justify-content-start mt-3">
            <h3 class="">${}</h3>
        </div>
        <div class="bio d-flex justify-content-start mt-3">
            <p class="">Software engineer. Frontend web development</p>
        </div>

        <!-- view profile btn-->
        <div class="view-profile d-grid">
            <a href="#" target="_blank" class="btn btn-outline-secondary p-3 my-3" style="font-size:12px;font-weight:600;">View on Github</a>
        </div>
        <!--  -->
        <div class="followers d-flex justify-content-start">
            <p id="follwers">7 followers. </p>
            <p id="following">14 following </p>
        </div>
        <div class="d-flex justify-content-start">
            <p id="location"><i class="fa-solid fa-location-dot"></i> Uyo, Nigeria</p>
        </div>
        <div class="d-flex justify-content-start">
            <p id="blog"><i class="fa-solid fa-link"></i> https://Google.com</p>
        </div>
        <div class="d-flex justify-content-start">
            <P id="twitter"><i class="fa-brands fa-twitter"></i>@Chinweikejohn22</P>
        </div>
    </div> 
    `
}
