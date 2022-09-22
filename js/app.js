// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6- 
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7- 
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8- 
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9- 
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}

const screen = document.querySelector('#screen img');

document.querySelector('#one').addEventListener('click', changeChannel);
document.querySelector('#two').addEventListener('click', changeChannel);
document.querySelector('#three').addEventListener('click', changeChannel);
document.querySelector('#four').addEventListener('click', changeChannel);
document.querySelector('#five').addEventListener('click', changeChannel);
document.querySelector('#six').addEventListener('click', changeChannel);
document.querySelector('#seven').addEventListener('click', changeChannel);
document.querySelector('#eight').addEventListener('click', changeChannel);
document.querySelector('#nine').addEventListener('click', changeChannel);

// function changeChannel(event) {
//   if (event.target.id === 'one') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
//   } else if (event.target.id === 'two') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
//   } else if (event.target.id === 'three') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
//   } else if (event.target.id === 'four') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
//   } else if (event.target.id === 'five') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
//   } else if (event.target.id === 'six') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
//   } else if (event.target.id === 'seven') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
//   } else if (event.target.id === 'eight') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
//   } else if (event.target.id === 'nine') {
//     screen.src =
//       'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
//   } 
// }

document.querySelector('#screen img').src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';


function changeChannel(event) {

    let clickedButton = event.target.id;

    switch(clickedButton){
        case 'one': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
        break;
        case 'two': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
        break;
        case 'three': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
        break;
        case 'four': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
        break;
        case 'five': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
        break;
        case 'six': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
        break;
        case 'seven': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
        break;
        case 'eight': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
        break;
        case 'nine': screen.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
        break;
    }
}