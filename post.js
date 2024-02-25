document.addEventListener('DOMContentLoaded', function () {
    // Get the like button and like count elements
    const likeButton = document.querySelector('.like-button button');
    const likeCount = document.querySelector('.like-count');
    var likeText = document.getElementById('like-text');

    // Variable to store the like count
    var likes = 0;
    if(likes === 0){
        likeCount.textContent = "Be the first person to like this!";
    }

    likeButton.addEventListener('click', function() {
        likes++;

        likeCount.textContent = likes === 1 ? '1 person likes this' : `${likes} people like this`;
        likeText.textContent = ' Liked';
        
    });

    // Get reference to the comment input field and the comment button
    const commentInput = document.getElementById('comment-input');
    const commentButton = document.getElementById('comment-button');

    // Get reference to the comment area
    const commentArea = document.getElementById('comment-area');

    commentButton.addEventListener('click', function() {
        const commentText = commentInput.value.trim();

        if (commentText) {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentArea.prepend(newComment);
            commentInput.value = '';

            // Show or hide the comment area section based on comments presence
            if (commentArea.children.length === 0) {
                commentArea.style.display = 'none';
            } else {
                commentArea.style.display = 'block';
                commentArea.style.padding = '10px';
            }
        }
    });

    // Check if there are no comments initially and hide the comment area section
    if (commentArea.children.length === 0) {
        commentArea.style.display = 'none';
    } else {
        commentArea.style.padding = '10px';
    }

    // Edit Button functionality
    const editBtn = document.querySelector('.edit-button');
    editBtn.addEventListener('click', function () {
        const postTitle = document.querySelector('.title-author h2');
        const postText = document.querySelector('.content p');

        if (editBtn.textContent.includes('Edit')) {
            // Enter Edit Mode
            postTitle.contentEditable = true;
            postText.contentEditable = true;
            postTitle.style.border = '2px solid #ff69b4';
            postText.style.border = '2px solid #ff69b4';
            editBtn.innerHTML = 'Save <i class="fa-solid fa-save fa-xs"></i>';
        } else {
            // Exit Edit Mode and Save Changes
            postTitle.contentEditable = false;
            postText.contentEditable = false;
            postTitle.style.border = '2px solid transparent';
            postText.style.border = '2px solid transparent';
            editBtn.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square fa-xs"></i>';
        }
    });

    // Retrieving post details from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postTitle = urlParams.get('title');
    const postContent = urlParams.get('content');
    const authorName = urlParams.get('author');

    // Set the title, content, and author name of the post
    const postTitleElement = document.querySelector('.title-author h2');
    const postTextElement = document.querySelector('.content p');
    const authorInfo = document.querySelector('.author-info p');

    postTitleElement.textContent = postTitle;
    postTextElement.textContent = postContent;
    authorInfo.textContent = authorName;
});
