console.log("working");

const formElement = document.querySelector("form");

// prevent default prevents the default action from occuring that the browser has for that element

function preventDefault(event)
{
    event.preventDefault();
    console.log("we prevented bad things");

    // currentTarget and target
    const experienceInput = event.currentTarget.elements.experience;
    console.log("form submitted");
    console.log("Experience input: ", experienceInput);
    console.log("Experience Input Value: ", experienceInput.value);

   console.log("Is experience text valid? ", validateExperience(experienceInput.value));

   if (!validateExperience(experienceInput.value))
   {
    alert("Your experience is invalid");
   }
}
formElement.addEventListener("submit", preventDefault);

// return true or false
function validateExperience(text)
{
    // Does this have a particular value on it
    if (text.toLowerCase().includes("window"))
    {
        return false;
    }
    else
    {
        return true;
    }
}

// this leads to form processing and submitting the form data