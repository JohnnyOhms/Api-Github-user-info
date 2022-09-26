(()=>{"use strict";const e=document.getElementById("title"),n=document.getElementById("user-search"),t=document.querySelector(".form"),i=document.querySelector(".profile-details"),l=document.querySelector(".content-overview"),r=document.querySelector(".overview"),s=document.querySelector(".content-repo"),a=document.getElementById("repo-count"),o=document.querySelector(".contribution-bd"),c=(document.querySelector(".alert"),document.querySelector(".alert-parent")),d=document.querySelector(".first-radio"),u=document.querySelector(".second-radio"),f="https://api.github.com/users/",p="/repos",m="https://ghchart.rshah.org/";async function v(e){try{let n=await fetch(f+e);if(n.status>=200&&n.status<=299){let e=await n.json();console.log(e),function(e){let n;n=`\n        <div class="Profile mt-4 m-5">\n        <img src="${e.avatar_url}" class="img-thumbnail rounded-circle" alt="img">\n        <div class="username d-flex justify-content-start mt-5">\n            <h1 class="">${e.name}</h1>\n        </div>\n        <div class="login d-flex justify-content-start mt-3">\n            <h3 class="">${e.login}</h3>\n        </div>\n        <div class="bio d-flex justify-content-start mt-3">\n            <p class="">${g(e.bio)}</p>\n        </div>\n\n        <div class="view-profile d-grid">\n            <a href="${e.html_url}" target="_blank" class="btn btn-outline-secondary p-3 my-3" style="font-size:12px;font-weight:600;">View on Github</a>\n        </div>\n        <div class="followers d-flex justify-content-start">\n            <p id="follwers">${e.followers} follwers</p>\n            <p id="following">&nbsp${e.following} following</p>\n        </div>\n        <div class="d-flex justify-content-start">\n            <p id="location"><i class="fa-solid fa-location-dot"></i>&nbsp${e.location}</p>\n        </div>\n        <div class="d-flex justify-content-start">\n            <p id="blog"><i class="fa-solid fa-link"></i>${e.blog}</p>\n        </div>\n        <div class="d-flex justify-content-start">\n            <P id="twitter"><i class="fa-brands fa-twitter"></i>${e.twitter_username}</P>\n        </div>\n    </div> \n    `,i.innerHTML=n,c.innerHTML=""}(e)}else{c.innerHTML="",i.innerHTML="",l.innerHTML="",s.innerHTML="",o.innerHTML="",a.innerHTML="";let e=document.createElement("div");e.innerHTML='\n                <div class="alert alert-danger d-grid" role="alert">\n                    <p>Invalid Input Characters</p>\n                </div>\n                ',c.appendChild(e)}}catch(e){console.log(e)}}function g(e){return null==e?"":e}async function h(e){let n=await fetch(f+e+p);if(n.status>=200&&n.status<=299){let t=await n.json();console.log(t),function(e){let n;(function(e){let n,t=e.length;for(;0!=t;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]]})(e),n=e.map((e=>`<div class="border rounded p-3">\n                        <span>\n                            <a href="${e.clone_url}" target="_blank" rel="noopener noreferrer">\n                                ${e.name}\n                            </a>\n                        </span>\n                        <div class="des pt-2">\n                            <p>${g(e.description)}</p>\n                            <p class="">${e.language}</p>\n                            <i class="fa-regular fa-star"><span>${e.stargazers_count}</span></i>\n                        </div>\n                    </div>`)),r.innerHTML=n.slice(0,3);let t=document.createElement("h3");t.innerHTML="Overview",r.insertBefore(t,r.firstChild)}(t),function(e){let n;n=e.map((e=>` <div class="border-top p-3">\n                <div class="d-flex justify-content-between">\n                    <div>\n                        <span class="d-flex ">\n                            <a href="${e.clone_url}" target="_blank" rel="noopener noreferrer">\n                                 ${e.name}\n                            </a>\n                            <p class="public ms-4 border rounded-pill p-1">${e.visibility}</P>\n                        </span>\n                        <p>${e.description}</p>\n                        <p class="">${e.language}</p>\n                    </div>\n\n                    <div class="star">\n                        <i class="fa-regular fa-star pt-5">${e.stargazers_count}</i>\n                    </div>\n                </div>  \n            </div>`));let t=document.createElement("h3");t.innerHTML="Repositories",s.innerHTML=n,s.insertBefore(t,s.firstChild),a.innerHTML="&nbsp;("+e.length+")"}(t),function(e){o.innerHTML=`\n        <h3 class= "mb-3">Total contributions</h3>\n        <img src="${m}${e}" alt="" class="img-fluid">\n    `}(e)}}function y(){u.style.color="white",d.style.color="orangeRed"}t.addEventListener("submit",(t=>{t.preventDefault(),e.innerHTML="";let i=n.value;if(""!==i)v(i),h(i);else{c.innerHTML="";let e=document.createElement("div");e.innerHTML='\n            <div class="alert alert-danger d-grid" role="alert">\n                <p>Search a Username to Display</p>\n            </div>\n            ',c.appendChild(e)}})),window.onload=()=>{y()},d.addEventListener("click",y),u.addEventListener("click",(function(){d.style.color="white",u.style.color="orangeRed"})),console.log("webpack")})();