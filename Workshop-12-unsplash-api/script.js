const count = 10;
const apiKey = "xLUJlBVqPS529pYsZh3mtdcv9hbGg6gO1ekyK2Y3W2w";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const imageCountainer = document.getElementById("img-container");
let photoArrays = [];

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArrays = await response.json();
    displayImage();
  } catch (err) {
    console.log(err);
  }
}

function displayImage() {
  photoArrays.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("title", photo.alt_description);
    img.setAttribute("alt", photo.alt_description);

    item.appendChild(img);
    imageCountainer.appendChild(item);
  });
}
getPhotos();

window.addEventListener("scroll", () => {
  if (
    (window.innerHeight = window.screenY >= document.body.offsetHeight - 100)
  ) {
    // alert("Get image");
    getPhotos();
  }
});
