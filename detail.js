const parms =new URLSearchParams(window.location.search);
const wonderName=parms.get('name');
console.log(wonderName);
fetch('https://www.world-wonders-api.org/v0/wonders')
 .then(response => response.json())
 .then(data=>{
     console.log("API Data:", data);
     const filtered_wondered=data.filter(wonder => wonder.name.toLowerCase() === wonderName.toLowerCase())
     console.log(filtered_wondered);
     
 })

 function displayDetail(data){
    
 }
