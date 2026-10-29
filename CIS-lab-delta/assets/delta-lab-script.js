



const nameInput = document.querySelector("#nameInput").value;
  const favoriteElement = document.querySelector("#favoriteInput");
  const commentInput = document.querySelector("#commentInput").value;
  const userStuff = document.querySelector("#profileForm");
const profileDisplay = document.querySelector("#profileDisplay");


// create pofile 

  
  
function showprofile(userData){

  profileDisplay.innerHTML = `${userData.name} likes ${userData.favorite} and says ${userData.comment}`;

  //on html, create an img with an id
  // here, query select that id
  //then set the .src property = to that of userData.dogPic
  console.log('userData.dogPic ', userData.dogPic); 
  document.querySelector("#dogPic").src = userData.dogPic;

}

userStuff.addEventListener("submit", async(event) => {
  event.preventDefault();

    console.log('aer we here');   
    console.log(await dogPic()); 
    const dogPicValue = await dogPic();
    
  const userData = {
   name: document.querySelector("#nameInput").value,
   favorite: document.querySelector("#favoriteInput").value,
   comment: document.querySelector("#commentInput").value,
   dogPic: dogPicValue 
  };

  console.log('userData object ', userData);
  const json = JSON.stringify(userData);

 sessionStorage.setItem("userData", json);

 const saved = JSON.parse(sessionStorage.getItem("userData"));

  showprofile(saved);

 

});

async function dogPic() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random ");
    const data = await response.json();
    console.log('dogPicValue ', data.message);
    return data.message; 

  }
// async function loadDogImage(){
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");

//   if (!response.ok) {
//     throw new Error("Could not load dog image");
//   }
//   const data = await response.json();
//   document.querySelector("#dogPic").src = data.message;
// }

async function loadOptions() {
  const response = await fetch("data/options.json");

  if (!response.ok) {
    throw new Error("Could not load local JSON");
  }

  const data = await response.json();
   
  console.log("json data: ", data);

  const favorite = document.querySelector("#favoriteInput");
  let newOption;

  
  data.forEach((choice) => {
    newOption = new Option(choice.name, choice.id);
    favorite.appendChild(newOption);
  });
}
loadOptions();

