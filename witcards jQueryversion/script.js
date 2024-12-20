class User {
    constructor(level, imageURL, points, name, description, color){
        this.level = level;
        this.imageURL = imageURL;
        this.points = points ;
        this.name = name;
        this.description =description;
        this.color = color;
    }
}

let suzana = new User (20 ,'https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png',3200,'suzana','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc','red') 
let zahra = new User (15 ,'https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png',3100,'zahra','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc','blue') 
let chisom = new User (10 ,'https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png',3000,'chisom','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc','yellow') 
let olena = new User (9 ,'https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png',2200,'olena','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc','pink') 
let femi = new User (8 ,'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',2000,'suzana','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusc','purple') 


let users = []
users.push(suzana)
users.push(zahra)
users.push(chisom)
users.push(olena)
users.push(femi)

function addUserToDOM(user){
//get the card container
const $cardContainer =$('#card-container');

// append a user card to the cardcontainer

 let cardHTML = `<div class="card">
<div  class="left-info" style ="--background-color:${user.color};">
   <div>
       <p id="user-level">Level ${user.level}</p>
   </div>
   <div>
      <img src=${user.imageURL} alt="male avatar with beard" />

   </div>
   <div>
      <p id="user-points-${user.name}">${user.points} points</p>
   </div>
    <!--control button-->
   <div class="flex-wrap full-width">

      <!-- decrement button-->
      <div>
          <button class = "plus-minus-button" onclick="decrementPoints('${user.name}')">-</button>
      </div>
      <div>
          <button class="plus-minus-button" onclick="incrementPoints('${user.name}')">+</button>
      </div>
   </div>
   

</div>
<div class="right-info">
     <header>
        <h1>${user.name}</h1>
     </header>
     <div>
       <p id="user-description">${user.description}
            </p>

     </div>
     <div class="linkedin-link">
        <a href="#">
         <i class="fa fa-linkedin-square"></i>
        </a>
    </div>
   
</div>



</div>`
$cardContainer.append(cardHTML)
}

function renderUserToDOM(user){
    
    $("#card-container").empty()
    //render to dom
    for (user of users) {
        addUserToDOM(user)
    }
}
renderUserToDOM(users)


function incrementPoints(userName){
    //find the user in the array
   const user = users.find((user)=>user.name === userName)
   console.log(user)
   //increase user points
   user.points += 1;
   //update the DOM with the new points
   const $pointsLabel =$(`#user-points-${user.name}`)
   $pointsLabel.text(`${user.points} points`) 
}
function decrementPoints(userName){
    const user = users.find((user)=>user.name === userName)
    user.points -= 1;
    const $valueInDOM = $(`#user-points-${user.name}`)
    $valueInDOM.text(`${user.points} points`)
}
// sort users
// users.sort((a,b)=>(a.name > b.name)? 1:-1)

function sortUsers(){
    let property = document.getElementById("sortBy").value ;
    console.log(property)
    users.sort((a,b)=>(a[property] > b[property])? 1:-1)
    renderUserToDOM(users)
}