let myForm = document.querySelector("#myForm");
let input = document.querySelector("#username");

let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  getData();
});

async function getData() {
  try {
    let username = input.value;
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    console.log(data);

    scriptToHTML(data);
  } catch (error) {
    console.log(error);
  }
}

function scriptToHTML(data) {
  mainDiv.innerHTML = "";

  let avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  avatar.style.borderRadius = "50%";

  let div = document.createElement("div");
  div.innerHTML = `
  <h1>Name: ${data.name}</h1>
  <h1>Followers: ${data.followers}</h1>
  <h1>Location: ${data.location}</h1>
  
  `;

  mainDiv.appendChild(avatar);
  mainDiv.appendChild(div);
}
