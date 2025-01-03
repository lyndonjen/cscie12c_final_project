// Note, expects "data/blogdata.js" to be loaded first.
document.addEventListener("DOMContentLoaded", function () {
    try {
        console.log("DOM is loaded!");

        // Logic for Add Character form
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

        // Logic for Reset link
        const reset_link = document.getElementById("reset_link");
        reset_link.addEventListener("click", function () {
            // Reset blogData to blogDataInitial
            blogData = blogDataInitial;
            localStorage.setItem('blogData', JSON.stringify(blogData));
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
