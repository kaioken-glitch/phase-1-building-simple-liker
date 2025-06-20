// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal');
errorModal.className = 'hidden';

const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    /* 
    mimicServerCall is a function that simulates a server call and we invoke it
    here
    */ 
    mimicServerCall()
      .then(() => {
        // If the server call is successful, toggle the heart state
        // between empty and full heart
        // and add or remove the 'activated-heart' class accordingly
        heart.classList.remove('hidden');
        
        // Toggle the heart state
        // If the heart is empty, change it to full and vice versa
        // Also, add or remove the 'activated-heart' class
        heart.innerText = heart.innerText === FULL_HEART ? EMPTY_HEART : FULL_HEART;
        // If the heart is empty, change it to full and vice versa
        // Also, add or remove the 'activated-heart' class
        // This is a more concise way to toggle the heart state
        // and manage the class
        //if (heart.innerText === EMPTY_HEART) {
        //  heart.innerText = FULL_HEART;
        //  heart.classList.add('activated-heart');
        //} else {
        //  heart.innerText = EMPTY_HEART;
        //  heart.classList.remove('activated-heart');
        //}
      })
      .catch(error => {
        errorModal.className = '';
        errorModal.innerText = error;
        setTimeout(() => {
          errorModal.className = 'hidden';
        }, 3000);
      });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
