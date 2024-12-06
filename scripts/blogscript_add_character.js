// note, expects "data/blogdata.js" to be loaded first.
document.addEventListener("DOMContentLoaded", function () {
    try {
        console.log("DOM is loaded!");

        document.getElementById('blog-character-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Gather form data
            const name = document.getElementById('name').value;
            const title = document.getElementById('title').value;
            const location = document.getElementById('location').value;
            const notes = document.getElementById('notes').value;
            const quotes = document.getElementById('quotes').value;
            const image = document.getElementById('image').value;

            // Add the new character to the front of the Characters
            blogData.characters.unshift({
                name: name,
                title: title,
                location: location,
                notes: notes,
                quotes: quotes,
                image: image
            });

            // Save the updated blogData back to localStorage
            localStorage.setItem('blogData', JSON.stringify(blogData));

            // Clear the form
            event.target.reset();
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
