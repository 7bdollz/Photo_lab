const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const content = document.querySelector("#content");
searchBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" 
          fill="currentColor"/>
  </svg>`;

const search = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    content.innerHTML = "";
    data.hits.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.previewURL;
      content.appendChild(img);
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

searchBtn.addEventListener("click", () => {
  const searched = searchInput.value;
  const url = `https://pixabay.com/api/?key=52883795-cb713ca2704b54e7ce8112362&q=${searched}&image_type=photo`;
  search(url);
  searchInput.value = "";
});

searchInput.addEventListener("search", () => {
  const searched = searchInput.value;
  const url = `https://pixabay.com/api/?key=52883795-cb713ca2704b54e7ce8112362&q=${searched}&image_type=photo`;
  search(url);
  searchInput.value = "";
});

// just to load some default images on page looad
content.textContent = "use the search bar on the right to search for images";
