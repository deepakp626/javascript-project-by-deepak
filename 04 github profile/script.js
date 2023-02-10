////  variabal
let profileEl =document.getElementById("profileDiv")
let notprofileEl = document.getElementById("notprofile")
let inputIdEl = document.getElementById('searchHere')
let searchBtnEl = document.getElementById('searchBtn')
let imageEl = document.getElementById('avatarimg')
let nameEl = document.getElementById('name')
let idEl = document.getElementById('id')
let profile_link_El = document.getElementById('profile_link')
let bioEl = document.getElementById('bio')
let followersEl = document.getElementById("followers")
let followingsEl = document.getElementById("followings")
let ReposEl = document.getElementById("Repos")

//// api url
let api_url =  "https://api.github.com/users/"


const updateProfile = async ()=>{
   let search_person_id = inputIdEl.value
   let result = await fetch('https://api.github.com/users/'+`${search_person_id}`);
   result = await result.json()
   if(result.message == "Not Found"){
       notprofileEl.classList.remove("hide")
       profileEl.classList.add("hide")
        return 
   }else{
       /// unhide profile div
       profileEl.classList.remove("hide")
       notprofileEl.classList.add("hide")
   }

   imageEl.src = result.avatar_url
   nameEl.textContent = result.name
   idEl.textContent = "@"+result.login
   profile_link_El.setAttribute("href",result.html_url) 
   console.log(profile_link_El.getAttribute("href")) 
   bioEl.textContent = result.bio
   followersEl.textContent= result.followers
   followingsEl.textContent= result.following
   ReposEl.textContent = result.public_repos


   // console all data
   console.log(result.avatar_url)
   console.log(result.name)
   console.log(result.login)
   console.log(result.html_url)
   console.log(result.bio)
   console.log(result.followers)
   console.log(result.following)
   console.log(result.public_repos)
}
searchBtnEl.addEventListener('click',updateProfile);