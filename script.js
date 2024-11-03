fetch('https://www.world-wonders-api.org/v0/wonders')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayWonders(data)
    })
   

//diplay the card dynamically 

function displayWonders(wonders) {
    console.log(wonders);
    const container = document.getElementById('Wonder-Container')
    wonders.forEach(wonder => {
        console.log(wonder);
        const wonderElement = document.createElement('div');
        wonderElement.className = 'wonder-card';
        wonderElement.innerHTML = `
         <h2>${wonder.name}</h2>
         <img src="${wonder.links.images[0]}" alt="${wonder.name}">
         <button>give me more detais</button>
          `;
          container.appendChild(wonderElement);

    })

  

}



