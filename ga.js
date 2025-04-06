async function getData() {
    try {
        document.getElementById("loader").style.display = "flex"; 
        document.getElementById("container").style.display = "none";
        let response = await fetch("https://cobalt-ninth-approval.glitch.me/tourism");
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        let result = await response.json();
        // console.log(result)

        localStorage.setItem("recipes", JSON.stringify(result.places));
        displayData(result.places);
    } catch (err) {
        console.error(err);
    } 


        // Ensure `places` is an array
    //     if (!Array.isArray(result.places)) {
    //         throw new Error("Invalid data format: 'places' is not an array");
    //     }

    //     console.log("Fetched Places:", result.places);
    //     displayData(result.places);

    // } catch (err) {
    //     console.error(err);
    // }


function displayData(places) {
    container.innerHTML = ""; // Clear previous content

    places.forEach(obj => {
        let { id,images, name, description, country,place } = obj;
        console.log(obj);

        let item = document.createElement("div"); // Create a new div for each item
        item.className = "item";
        item.innerHTML = `
          <img src="${images}" alt="${name} Image 1" width="200" height="150">
          
                        <p><strong>${place}</strong></p>
            <p>${description}</p>
      
               <button onclick='getMoreData(${JSON.stringify(id)})'>See More</button> 
        `;

        // Append to container (not places)
        container.appendChild(item);
    });
      
    setTimeout(() => {  
        document.getElementById("loader").style.display = "none"; 
        document.getElementById("container").style.display = "grid";
    }, 2000);
}  

}


function getMoreData(id) {
    window.location.href = `./home1.html?id=${(id)}`;
}

getData();

