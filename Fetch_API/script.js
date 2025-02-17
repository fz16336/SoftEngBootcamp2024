const URL = "https://dummyjson.com/posts";
const containerDiv = document.getElementById("container");
const loadingH2 = document.createElement("h2");
loadingH2.textContent = "Loading...";

containerDiv.appendChild(loadingH2);

fetch(URL)
    .then(response => response.json())
    .then(data => {
        containerDiv.removeChild(loadingH2);
        console.log(data);
        // const dataStringified = JSON.stringify(data, null, 2);
        // containerDiv.innerHTML = dataStringified;
        data.posts.forEach(post => {
            const postDiv = document.createElement("div");
            const titleH2 = document.createElement("h2");
            const bodyP = document.createElement("p");

            titleH2.textContent = post.title;
            bodyP.textContent = post.body; 

            postDiv.appendChild(titleH2);
            postDiv.appendChild(bodyP);

            containerDiv.appendChild(postDiv);
        });
}).catch(error => console.error(error));