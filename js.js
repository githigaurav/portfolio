// submittng contact form
document.getElementById("submit").addEventListener("click", (e) => {

// prevent page refresh
  e.preventDefault();

// input field validation
   const check = checkInputField()
// if all good then execute further
   if(check!=="empty"){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('textarea').value;

    document.getElementById("form_data").style.display = "none";
    document.getElementById("formLoading").style.display = "block";

    const person = {
        name: name,
        email: email,
        text: textarea
    };


    fetch('https://nodeemail.onrender.com/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    }).then(response => {
        return response.json()
    }).then((data) => {
 
        if (data.message === "Email has been sent successfully") {

            document.getElementById("formLoading").style.display = "none";
            document.getElementById("emailSent").style.display = "block"

            setTimeout(() => {
                document.getElementById("emailSent").style.display = "none"
                document.getElementById("form_data").style.display = "block";
                name.value = "";
                email.value = "";
                textarea.value = ""
            }, 2000)


        } else{
            document.getElementById("form_data").style.display = "blcok";
            document.getElementById("formLoading").style.display = "none";
        }
    }).catch(error => { 
          console.log(error);
    });

   }else{    
    document.getElementById("formLoading").style.display = "none";
    document.getElementById("form_data").style.display = "block";
   }
    

});


document.getElementById("goAbout").addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.getElementById("aboutme");
    target.style.opacity = "1";
    target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("goProject").addEventListener("click", function (event) {
    event.preventDefault(); 
    var target = document.getElementById("project");
    target.style.opacity = "1";
    target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("homeProject").addEventListener("click", function (event) {
  event.preventDefault(); 
  var target = document.getElementById("project");
  target.style.opacity = "1";
  target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("goContact").addEventListener("click", function (event) {
    event.preventDefault(); 
    var target = document.getElementById("contact");
    target.style.opacity = "1";
    target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("goHome").addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.getElementById("home");
    target.style.opacity = "1";
    target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("nav-brand").addEventListener("click", function (event) {
    event.preventDefault(); 
    var target = document.getElementById("home");
    target.style.opacity = "1";
    target.scrollIntoView({behavior: "smooth", block: "start"});
});

document.getElementById("ctaContact").addEventListener("click", function (event) {
  event.preventDefault(); 
  var target = document.getElementById("contact");
  target.style.opacity = "1";
  target.scrollIntoView({behavior: "smooth", block: "start"});
});
// navigation menu
document.getElementById("menuicon").addEventListener('click', () => {
 
    const menu = document.getElementById("showme")
    if (menu.style.display !== "block") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
  
})

function hideMobileMenu() {
    const menu = document.getElementById("showme");
    menu.style.display = "none";
}

window.addEventListener('resize', () => {
    const menu = document.getElementById("showme");
    const screenWidth = window.innerWidth;
    if (screenWidth > 1440) {
      menu.style.display = "none";
    }
  });
// clearing input fields if refresh
window.addEventListener('load', function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('textarea').value = '';
  });

function checkInputField() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('textarea').value;
  
    // Clear error messages
    document.getElementById("nameerr").innerHTML = "";
    document.getElementById("emailerr").innerHTML = "";
    document.getElementById("msgerr").innerHTML = "";
  
    let hasError = false;
  
    // Check if the name field is empty
    if (name.trim() === '') {
      document.getElementById("nameerr").innerHTML = "Name required";
      hasError = true;
    }
  
    // Check if the email field is empty or has invalid format
    if (email.trim() === '') {
      document.getElementById("emailerr").innerHTML = "Email required";
      hasError = true;
    } else {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailerr").innerHTML = "Invalid email format";
        hasError = true;
      }
    }
  
    // Check if the textarea field is empty
    if (textarea.trim() === '') {
      document.getElementById("msgerr").innerHTML = "Message required";
      hasError = true;
    }
  
    if (hasError) {
      return "empty";
    } else {
      return "valid";
    }
  }
  
  
  