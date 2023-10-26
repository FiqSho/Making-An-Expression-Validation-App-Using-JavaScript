// Get the elements
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');




// Add click event listeners to the options


option1.addEventListener('click', () => {
    let userInput=prompt("Enter Your Email: ")

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(userInput)) {
            alert("Email Valid");
           
        } else {
            alert("Invalid Email");
        }
    
});
option2.addEventListener('click', () => {
    let userInput=prompt("Enter Your Phone Number: ")

    const phoneNumberRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    if (phoneNumberRegex.test(userInput)) {
        alert("Phone Number Valid");
        
    } else {
        alert("Invalid Phone Number");
        

    }
});
option3.addEventListener('click', () => {
    let userInput=prompt("Enter Your Post Code: ")

    const phoneNumberRegex = /^\d{4}$/;
    if (phoneNumberRegex.test(userInput)) {
        alert("Post Code Valid");
    } else {
        alert("Invalid Post Code");
    }
    
});



