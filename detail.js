const parms =new URLSearchParams(window.location.search);
const wonderName=parms.get('name');
console.log(wonderName);
fetch('https://www.world-wonders-api.org/v0/wonders')
 .then(response => response.json())
 .then(data=>{
     console.log("API Data:", data);
     const filtered_wondered=data.filter(wonder => wonder.name.toLowerCase() === wonderName.toLowerCase())
    if(filtered_wondered){
        displayDetail(filtered_wondered[0])
    }
    
     
 })
 .catch(error=>console.log(error));

 function displayDetail(wonder){
    console.log(wonder);
    const detail_container=document.getElementById('container-detail');
    console.log("container" ,detail_container);
    detail_container.innerHTML=` <h2 class="wonder-title">${wonder.name}</h2>
    <p class="wonder-summary">${wonder.summary}</p>
     <p><strong>Location:</strong> ${wonder.location}</p>
    <p><strong>Build Year:</strong> ${wonder.build_year}</p>
    <p><strong>Time Period:</strong> ${wonder.time_period}</p>
    <div class="links">
      <a href="${wonder.links.wiki}" target="_blank">Wikipedia</a>
      <a href="${wonder.links.britannica}" target="_blank">Britannica</a>
      <a href="${wonder.links.google_maps}" target="_blank">Google Maps</a>
      <a href="${wonder.links.trip_advisor}" target="_blank">TripAdvisor</a>
    </div>
    `;

 }
