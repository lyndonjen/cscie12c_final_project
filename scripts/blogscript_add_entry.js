// Note, expects "data/blogdata.js" to be loaded first.
document.addEventListener("DOMContentLoaded", function () {
    try {
        console.log("DOM is loaded!");

        // Populate the blog dropdown
        const blogSelect = document.getElementById('blog');
        blogData.blogs.forEach(blog => {
            const option = document.createElement("option");
            option.value = blog.name;
            option.textContent = blog.name;
            blogSelect.appendChild(option);
        });

        // Logic for Add Entry form
        document.getElementById('blog-entry-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Gather form data
            const blogName = document.getElementById('blog').value;
            const stardate = document.getElementById('stardate').value;
            const enterer = document.getElementById('enterer').value;
            const entry = document.getElementById('entry').value;

            // Find the selected blog and add the new entry at the head of the entries list
            const selectedBlog = blogData.blogs.find(b => b.name === blogName);
            if (selectedBlog) {
                selectedBlog.entries.unshift({
                    stardate: stardate,
                    enterer: enterer,
                    entry: entry
                });
            }

            // Save the updated blogData back to localStorage
            localStorage.setItem("blogData", JSON.stringify(blogData));

            // Clear the form
            event.target.reset();
        });

        // Logic for Reset link
        const reset_link = document.getElementById('reset-link');
        reset_link.addEventListener('click', function (event) {
            // Reset blogData to blogDataInitial
            blogData = blogDataInitial;
            localStorage.setItem('blogData', JSON.stringify(blogData));
        });
    } catch (error) {
        console.error('Error:', error);
    }
});
