// note, expects "data/blogdata.js" to be loaded first.
document.addEventListener("DOMContentLoaded", function () {
    try {
        console.log("DOM is loaded!");

        // Blogs, show up to three
        const blogsContainer = document.getElementById("blogs-container");
        const blogsToShow = blogData.blogs.slice(0, 3);
        blogsToShow.forEach(blog => {
            const section = document.createElement("section");

            const header = document.createElement("h2");
            header.textContent = blog.name;
            section.appendChild(header);

            const img = document.createElement("img");
            img.src = blog.image;
            img.alt = blog.captain;
            section.appendChild(img);

            const ul = document.createElement("ul");

            const liCaptain = document.createElement("li");
            liCaptain.classList.add("captain");
            liCaptain.innerHTML = '<a href="#">' + blog.captain + '</a>';
            ul.appendChild(liCaptain);

            const liShip = document.createElement("li");
            liShip.classList.add("ship");
            liShip.innerHTML = '<a href="#">' + blog.ship_station + '</a>';
            ul.appendChild(liShip);

            section.appendChild(ul);

            // Create a table for the blog entries, show up to four
            const entriesTable = document.createElement("table");
            entriesTable.className = "blog-entries-table";

            const tableHeader = "<thead><tr><th>Stardate</th><th>Enterer</th><th>Entry</th></tr></thead>";
            entriesTable.innerHTML = tableHeader;

            const tableBody = document.createElement("tbody");

            const entriesToShow = blog.entries.slice(0, 4);
            entriesToShow.forEach(entry => {
                // Create a new row for each entry
                const row = document.createElement("tr");

                // Create cells and append them to the row
                const cellStardate = document.createElement("td");
                cellStardate.textContent = entry.stardate;

                const cellEnterer = document.createElement("td");
                cellEnterer.textContent = entry.enterer;

                const cellEntry = document.createElement("td");
                cellEntry.textContent = entry.entry;

                row.appendChild(cellStardate);
                row.appendChild(cellEnterer);
                row.appendChild(cellEntry);

                tableBody.appendChild(row);
            });

            entriesTable.appendChild(tableBody);
            section.appendChild(entriesTable);

            blogsContainer.appendChild(section);
            console.log("Blog is loaded!");
        });

        // Characters, show up to four
        const charactersContainer = document.getElementById("characters-container");
        const charactersToShow = blogData.characters.slice(0, 4);
        charactersToShow.forEach(character => {
            // Create an article element
            const article = document.createElement("article");

            // Create the image element
            const img = document.createElement("img");
            img.src = character.image;
            img.alt = character.name;

            // Create the name element
            const h3 = document.createElement("h3");
            h3.textContent = character.name;

            // Create the list element
            const ul = document.createElement("ul");

            // Add list items
            const liTitle = document.createElement("li");
            liTitle.className = "title";
            liTitle.textContent = character.title;
            ul.appendChild(liTitle);

            const liLocation = document.createElement("li");
            liLocation.className = "location";
            liLocation.textContent = character.location;
            ul.appendChild(liLocation);

            const liFyi = document.createElement("li");
            liFyi.className = "fyi";
            liFyi.textContent = character.notes;
            ul.appendChild(liFyi);

            const liQuote = document.createElement("li");
            liQuote.className = "quote";
            liQuote.textContent = character.quotes;
            ul.appendChild(liQuote);

            // Append all elements to the article
            article.appendChild(img);
            article.appendChild(h3);
            article.appendChild(ul);

            // Append the article to the characters container
            charactersContainer.appendChild(article);
            console.log("Character is loaded!");
        });

    } catch (error) {
        //#####
        const blogsContainer = document.getElementById("blogs-container");
        blogsContainer.innerHTML += String(error);
        console.error('Error loading blog data:', error);
    }
});
