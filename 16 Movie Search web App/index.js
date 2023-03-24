// variabal
let apiurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let imagepath = "https://image.tmdb.org/t/p/w1280";
let searchurl = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let inputEl = document.getElementById("search");
let containerEl = document.getElementById("container")

const renderMovie = (data)=>{
containerEl.innerHTML = ""
data.forEach(item=>{
   containerEl.innerHTML += ` <div class="item">
      <img src="${imagepath + item.poster_path}" alt="">
      <div class="movie-text">
         <div class="tital-rating">
            <h2>${item.title}</h2> <span>${item.vote_average}</span>
         </div>
         <div class="overview">
            <h2>Overview:</h2>
            <p>${item.overview} </p>
         </div>
      </div>
   </div>  `
})
console.log("Done")
}

const fetchMovie = async () => {
   let response;
   if(inputEl.value.trim() == ""){
      response = await fetch(apiurl)
      console.log("input empty")
   }else{
      response = await fetch(searchurl+inputEl.value)
      console.log("input not empty")
   }
    let data= await response.json()
    renderMovie(data.results)
}
/// init call
fetchMovie()
inputEl.addEventListener("input", fetchMovie);