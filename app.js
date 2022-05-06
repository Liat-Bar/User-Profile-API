const firstName=document.querySelector("#firstName");
const lastName=document.querySelector("#lastName");
const email=document.querySelector("#email");
const lang=document.querySelector("#lang");
const btn=document.querySelector("#btn");
const profileCard=document.querySelector("#profileCard");

btn.addEventListener("click",()=>{
    fetch("/Fictitious-profile.json").then(response=>response.json()).then(data=>{showFictitiousProfile(data)})})

let showFictitiousProfile = (profile) =>{
    setTimeout(()=>{
        firstName.innerHTML += `${profile.firstName}`;
        lastName.innerHTML += `${profile.lastName}`;
        email.innerHTML += `${profile.email}`;
        profile.languages.forEach(languages=>{
            lang.innerHTML+=`${languages} <span style="font-weight:900;">, </span>`
        });
},300);
}