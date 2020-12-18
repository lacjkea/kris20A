let games = "https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/page_detail?_embed&per_page=20&_fields[]=title&_fields[]=_links";

window.addEventListener("DOMContentLoaded", getGames);

// fetch all of our data
function getGames() {
  fetch(games)
    .then(res => res.json())
    .then(processData);
}

// start to divide the data
function processData(data) {
  // console.log("here are the games");
  //  console.log(data);
  data.forEach(retrieveSingleGame);
}

// call in each single game and do magical things
function retrieveSingleGame(gameDivision) {
  console.log(gameDivision._embedded["wp:term"][0][0].slug);
  // console.log("hey game");

  const template = document.querySelector("#games").content;
  const clone = template.cloneNode(true);
  //console.log(clone.querySelector('.box_container').classList);
  clone.querySelector('.box_container').classList.add(gameDivision._embedded["wp:term"][0][0].slug);

  const title = clone.querySelector("h2");
  title.textContent = gameDivision.title.rendered;
  const images = gameDivision._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  clone.querySelector("img").src = images;

  // append child
  document.querySelector("main").appendChild(clone);

}


//filters
let categories = document.querySelectorAll(".categories button");
//console.log(categories);

categories.forEach(btn => btn.addEventListener('click', filterData));

//categories.forEach(btn => {
//  addEventListener("click", (e) => {
//    fetch("https://mariajalmeida.com/KEA/2nd_semester/weco_play/wp-json/wp/v2/categories")
//      .then(res => res.json())
//      .then(showCategory);
//
//    //triggers all btns
//
//    console.log(btn);
//
//    //  if(btn.classList.contains("active")){
//    //         btn.classList.remove("active")
//    //      }else{
//    //          btn.classList.add("active")
//    //      }
//  });
//});

function filterData(e) {
  console.log(e.target.id);
  const allBoxes = document.querySelectorAll('.box_container');
  allBoxes.forEach(box => box.classList.add("hide"));
  document.querySelectorAll('.arts').forEach(showItem => showItem.classList.remove("hide"));

}

function showCategory(subject) {
  //console.log("Category listing");
  subject.forEach(cat => {
    //            console.log("Subject listener");

    // console.log(cat.slug);
  })

}
