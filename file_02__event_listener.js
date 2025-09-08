console.log("working?");

// Alert user with a hello when hello button is clicked

/*  1. Select the hello button
    2. Add event listener to button
    3. Within event listener, we call alert to the hello
*/
// 1. Select the hello button
const helloBtn = document.querySelector("#hello");

// 2. Add event listener to button (takes in action/event and a callback function)
// helloBtn.addEventListener('click', function);

function helloHandler(event)
{
    console.log("helloHandler was called");
    alert("Hey, thanks for saying hello!");
}

helloBtn.addEventListener('click', helloHandler);