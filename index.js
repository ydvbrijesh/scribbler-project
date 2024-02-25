// Get the modal
var signUpModal = document.getElementById("myModal");
var signInModal = document.getElementById("myModal2");
var createModal = document.querySelector(".create-modal");

// Get the buttons that open the modals
var signUpButton = document.getElementById("signup-button");
var signInButton = document.getElementById("signin-button");
var createButton = document.querySelector(".create-post");

// Get the <span> elements that close the modals
var spanSignUp = document.querySelector(".sign-up-heading .close");
var spanSignIn = document.querySelector(".sign-in-heading .close");
var spanCreate = document.querySelector(".create-content .close");

// Function to open SignUp modal
signUpButton.addEventListener("click", function() {
  signUpModal.style.display = "block";
});

// Function to close SignUp modal
spanSignUp.addEventListener("click", function() {
  signUpModal.style.display = "none";
});

// Function to open SignIn modal
signInButton.addEventListener("click", function() {
  signInModal.style.display = "block";
});

// Function to close SignIn modal
spanSignIn.addEventListener("click", function() {
  signInModal.style.display = "none";
});

// Function to open Create Post modal
createButton.addEventListener("click", function() {
  createModal.style.display = "block";
});

// Function to close Create Post modal
spanCreate.addEventListener("click", function() {
  createModal.style.display = "none";
});

// Get the sign-up link element
var signUpLink = document.getElementById("signup-link");

// Function to open Sign Up modal from Sign In modal
signUpLink.addEventListener("click", function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == signUpModal || event.target == signInModal || event.target == createModal) {
    signUpModal.style.display = "none";
    signInModal.style.display = "none";
    createModal.style.display = "none";
  }
});

// Linking to all post  button
var allPostButton = document.getElementById("all-post-button")
allPostButton.addEventListener("click",function(){
  window.location.href = "./html/postslist.html";
})

