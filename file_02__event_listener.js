console.log("working?");

// CLICK EVENT START
// Alert user with a hello when hello button is clicked

/*  1. Select the hello button
    2. Add event listener to button
    3. Within event listener, we call alert to the hello
*/
// 1. Select the hello button
const helloBtn = document.querySelector("#hello");

// 2. Add event listener to button (takes in action/event and a callback function)
// helloBtn.addEventListener('click', function);

// 'click' is the event being passed into the helloHandler function
function helloHandler(event)
{
    console.log("helloHandler was called");
    // alert("Hey, thanks for saying hello!");
    console.log("current target: ", event.currentTarget);
    console.log("target: ", event.target);
    // Stops any parent events from firing
    // event.stopPropagation();
}

helloBtn.addEventListener('click', helloHandler);
// Arrow Function long
/*
    const helloHandler = (event) =>
    {
        console.log("helloHandler was called");
        alert("Hey, thanks for saying hello!"); 
    }
*/
// helloBtn.addEventListener('click', helloHandler)

// Arrow Function short
// helloBtn.addEventListener('click', (event) => alert("HEYYY!!!"));

// CLICK EVENT END



// MOUSE EVENT START
const mouseOver = document.querySelector(".mouse-over");

// Arrow Function
// mouseOver.addEventListener('mouseover', (event) => alert("You moused over me!"));

// Regular Function
// mousever is the event being passed into the mouseOverEvent function
function mouseOverEvent(event)
{
    // alert("You moused over me with regular function!");
    console.log("event", event);
    event.currentTarget.textContent = "Moused Over";
    // Can find currentTarget by enabling debugger in Chrome DevTools (Sources > open js page > set breakpoint > hover over function and a dropdown will appear > find currentTarget)
}

function mouseOutEvent(event)
{
    console.log("mouseout", event);
    event.currentTarget.textContent = "Mouse Out";
}

mouseOver.addEventListener('mouseover', mouseOverEvent);
mouseOver.addEventListener("mouseout", mouseOutEvent);

// MOUSE EVENT END


// target vs currentTarget
// When you click in main, whare the logs that fire off and what happens?
const mainElement = document.querySelector("main");

function clickMain(event)
{
    // This main event can be stopped if stopPropagation is applied to child event (helloHandler)
    console.log("Clicked in main, main event handler fired");
    console.log("current target: ", event.currentTarget);
    console.log("target: ", event.target);
}

mainElement.addEventListener('click', clickMain);