

console.log("loading script file");


function createUserProfile(e) {

    document.querySelector('#profileForm');
}

//e.preventDefault();
//console.log(e);
//document.querySelector('#profileForm').reset();


async function loadOptions() {

}
loadOptions();




//const nameInput

console.log("loading script file?");

document
  .querySelector("#btnCreateProfile")
  .addEventListener("click", createUserProfile);

function createUserProfile(e) {
  e.preventDefault();
  // document.querySelector('#profileForm');

  //todo: defensive programming...check if nothing is there... 
  //if(!nameInput)...
  const nameInput = document.querySelector("#nameInput").value;
  const favoriteElement = document.querySelector("#favoriteInput");
  const commentInput = document.querySelector("#commentInput").value;
const sessionProfile = {

  user: {
    name: nameInput,
    comment: commentInput
  },

  selection: {
    id: favoriteElement.value,
    name: favoriteElement.options[favoriteElement.selectedndex].text
  },

  api: {
    value: apiData.someProperty
  }

};
    const dogPicValue = fetch("https://dog.ceo/api/breeds/image/random ");
    console.log('dogPicValue ', dogPicValue);

    //dogPicValue.message 


  const userData = {
    name: nameInput,
    favorite: favoriteInput,
    comment: commentInput,
    dogpic: dogPicValue 
  };

  console.log('userData object ', userData);
}

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