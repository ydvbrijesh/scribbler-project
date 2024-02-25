var deleteContainer = document.querySelector('.delete-container');

// Show delete container when delete icon is clicked
document.querySelectorAll('.delete-icon').forEach(item => {
    item.addEventListener('click', event => {
        deleteContainer.style.display = 'block';
    });
});

document.querySelector('.no-button').addEventListener('click', function() {
    deleteContainer.style.display = 'none';
});

document.querySelectorAll('.delete-icon').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.delete-container').style.display = 'block';
        document.querySelector('.delete-overlay').style.display = 'block';
    });
});

document.querySelectorAll('.yes-button, .no-button').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.delete-container').style.display = 'none';
        document.querySelector('.delete-overlay').style.display = 'none';
    });
});

document.querySelectorAll(".edit-button").forEach(item =>{
    item.addEventListener('click',event=>{
        window.location.href = "../html/post.html";
    })
})



document.addEventListener("DOMContentLoaded", function() {
    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-icon');
    
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelector('.delete-overlay').style.display = 'block';
            
            const postContainer = button.closest('.post-container');
            
            // Yes button event listener
            document.querySelector('.yes-button').addEventListener('click', function() {
                postContainer.remove();
                document.querySelector('.delete-overlay').style.display = 'none';
            });
            
            document.querySelector('.no-button').addEventListener('click', function() {
                document.querySelector('.delete-overlay').style.display = 'none';
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const editIcons = document.querySelectorAll('.edit-button');

    editIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const postContainer = icon.closest('.post-container');
            const postTitle = postContainer.querySelector('.title-section p').textContent;
            const postContent = postContainer.querySelector('.description-section p').textContent;
            const authorName = postContainer.querySelector('.author-info p').textContent;

            // Redirect to post.html with query parameters
            window.location.href = `post.html?title=${encodeURIComponent(postTitle)}&content=${encodeURIComponent(postContent)}&author=${encodeURIComponent(authorName)}`;
        });
    });
});


