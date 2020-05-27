const form = document.querySelector(`#text-form`);


// Using the same logic for the upper and lower text
const urlInput = document.querySelector(`#img`);
const upperTextInput = document.querySelector(`#upper-text`);
const lowerTextInput = document.querySelector(`#lower-text`);




form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    allMemesDiv = document.getElementById("allMemes");


    const memeDiv = document.createElement("div");
    memeDiv.setAttribute("id", "meme");
    const image = document.createElement("IMG");
    image.setAttribute("id", "image");
    const upperText = document.createElement("h2");
    upperText.setAttribute("id", "upperText");
    const lowerText = document.createElement("h2");
    lowerText.setAttribute("id", "lowerText");


    allMemesDiv.appendChild(memeDiv);
    memeDiv.appendChild(image);
    memeDiv.appendChild(upperText);
    memeDiv.appendChild(lowerText);


    image.src = urlInput.value;
    upperText.innerText = upperTextInput.value;
    lowerText.innerText = lowerTextInput.value;


    urlInput.value = ``;
    upperTextInput.value = ``;
    lowerTextInput.value = ``;
});


const del = document.querySelector(`#allMemes`);

del.addEventListener(`click`, function(e) {
    e.target.parentElement.remove();
})