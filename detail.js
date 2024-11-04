const parms = new URLSearchParams(window.location.search);
const wonderName = parms.get('name');
console.log(wonderName);
fetch('https://www.world-wonders-api.org/v0/wonders')
  .then(response => response.json())
  .then(data => {
    console.log("API Data:", data);
    const filtered_wondered = data.filter(wonder => wonder.name.toLowerCase() === wonderName.toLowerCase())
    if (filtered_wondered) {
      displayDetail(filtered_wondered[0])
    }


  })
  .catch(error => console.log(error));

function displayDetail(wonder) {
  console.log(wonder);
  const detail_container = document.getElementById('container-detail');
  console.log("container", detail_container);
  detail_container.innerHTML = ` <h2 class="wonder-title">${wonder.name}</h2>
    <p class="wonder-summary">${wonder.summary}</p>
     <p><strong>Location:</strong> ${wonder.location}</p>
    <p><strong>Build Year:</strong> ${wonder.build_year}</p>
    <p><strong>Time Period:</strong> ${wonder.time_period}</p>
       <div class="slideshow-container">

   
     <div class="mySlides fade">
       <div class="numbertext">1 / 3</div>
    <img src="${wonder.links.images[0]}" style="width:100%">
      <div class="text">Caption Text</div>
     </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="${wonder.links.images[1]}" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="${wonder.links.images[2]}" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
    <div class="links">
      <a href="${wonder.links.wiki}" target="_blank"><i class="fa-brands fa-wikipedia-w"></i></a>
      <a href="${wonder.links.britannica}" target="_blank">Britannica</a>
      <a href="${wonder.links.google_maps}" target="_blank"><i class="fa-solid fa-map"></i></a>
      <a href="${wonder.links.trip_advisor}" target="_blank">TripAdvisor</a>
    </div>
    `;

}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


