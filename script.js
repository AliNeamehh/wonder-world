fetch('https://www.world-wonders-api.org/v0/wonders')
    .then(response => response.json())
    .then(data => {
       
        displayWonders(data)
    })


//diplay the card dynamically 

function displayWonders(wonders) {
    console.log(wonders);
    const container = document.getElementById('Wonder-Container')
    wonders.forEach(wonder => {
        const wonderElement = document.createElement('div');
        wonderElement.className = 'wonder-card';
        wonderElement.innerHTML = `
         <h2>${wonder.name}</h2>
         <img src="${wonder.links.images[0]}" alt="${wonder.name}">
         <a href="detail.html?name=${encodeURI(wonder.name)}">  <button>More Details</button> </a>
        
          `;
        container.appendChild(wonderElement);


    })



}



