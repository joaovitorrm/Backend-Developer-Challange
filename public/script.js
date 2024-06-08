const keyword = document.querySelector("#keyword");

function getAmazonResults() {
    // Start the rotate loading animation with css
    document.querySelector(".submit-image").classList.add("animated");
    var xhttp = new XMLHttpRequest();
    // Sets the response as a json
    xhttp.responseType = "json";    
    xhttp.onreadystatechange = function() {
        // If the response returns disable the rotating animation
        if (this.readyState == 4) {            
            document.querySelector(".submit-image").classList.remove("animated");
        }
        // When it returns with a status 200 it create the html elements using the data 
        if (this.readyState == 4 && this.status == 200) {
            if (Object.values(this.response).length == 0) {
                document.querySelector("#products-container-grid").innerHTML = "<h3>Error with the request try again later</h3>";
            } else {
                // Empties the main grid
            document.querySelector("#products-container-grid").innerHTML = "";
            for (let div in this.response) {
                // Creating elements, giving classes, setting values and appending into the parents
                const parentContainer = document.createElement("div");
                parentContainer.classList.add("product-container");

                const imageDiv = document.createElement("div");
                imageDiv.classList.add("image-container");

                const image = document.createElement("img");
                image.src = this.response[div].img;
                
                const description = document.createElement("div");
                description.classList.add("description");

                const name = document.createElement("span");
                name.innerHTML = this.response[div].name;

                const stars = document.createElement("div");
                stars.classList.add("stars-div");
                stars.innerHTML = this.response[div].stars;

                const rating = document.createElement("div");
                rating.classList.add("rating-div");
                rating.innerHTML = this.response[div].rating;

                imageDiv.append(image);
                description.append(name, stars, rating);

                parentContainer.append(imageDiv, description);
                document.querySelector("#products-container-grid").appendChild(parentContainer);                
                }
            }
            
        }
    };
    // Makes a request to the back end with the keyword inside the input text
    xhttp.open("GET", `/AmazonResult/${keyword.value}`, true);
    xhttp.send();

    // Prevent page update with return false
    return false;
}