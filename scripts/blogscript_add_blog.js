// Note, expects "data/blogdata.js" to be loaded first.
document.addEventListener("DOMContentLoaded", function () {
    try {
        console.log("DOM is loaded!");

        // Logic for Add Blog form
        document.getElementById('blog-blog-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Gather form data
            const name = document.getElementById('name').value;
            const captain = document.getElementById('captain').value;
            const ship_station = document.getElementById('ship_station').value;
            const image = document.getElementById('image').value;

            // Add the new blog to the front of the Blogs, note empty entries
            blogData.blogs.unshift({
                name: name,
                captain: captain,
                ship_station: ship_station,
                image: image,
                entries: []
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
