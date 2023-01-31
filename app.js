const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const box = document.querySelector(".box");
const par = document.querySelector(".par")
 hak = 0
button.addEventListener("click", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf&units=metric`
  )
    .then((res) => res.json())
    .then((data) => myfunction(data));

    hak++

    if(hak>3){
      button.type="sumbit"
    }
   

});

let myfunction = (data) => {
  console.log(data);
  input.value=""  
  

  let { weather } = data;
  let { icon } = weather[0];

  if(input.value==`${data.name}`){
    const p= document.createElement("p")
    p.innerText = "lütfen"
    par.appendChild(p)
  }

  box.innerHTML += `
<div class="card " style="height:auto ;width: 14rem;">
  <div class="aa d-flex justify-content-evenly align-items-center">
  
    
    <div class="div1 list-group-item"><p class="h4 mt-1 card-title w-auto">${data.name} <sup>${data.sys.country}</sup></p></div>
    <h2 class=" list-group-item">${data.main.temp.toFixed(0)}°C</h2>
  </div>
  <div class="div1 d-flex justify-content-around align-items-center"><div class="list-group-item text-capitalize">${data.weather[0].description}</div><img class="w-25" src="https://openweathermap.org/img/wn/${icon}.png" class="card-img-top" alt="..."></div>
  <div class="d-flex div">

    <li class="list-group-item text-capitalize date">${new Date()}</li>
  
  </div>
  </div>
        
`
};

input.addEventListener("keydown", (d) => {
  if (d.keyCode === 13) {
    button.click();
    d.preventDefault();
    
    if(hak>3){
      button.type="sumbit"
    }
    
  }
});

window.onload = () => {
  input.focus();
};


//<div class="list-group-item">Feels: ${data.main.feels_like.toFixed(0)}°C</div>