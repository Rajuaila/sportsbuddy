const firebaseConfig = {
    apiKey: "AIzaSyD26o1zRiQj2EvHqeb9sr6NGt_wrQcl0Ug",
    authDomain: "nimble-yen-409711.firebaseapp.com",
    databaseURL: "https://nimble-yen-409711-default-rtdb.firebaseio.com",
    projectId: "nimble-yen-409711",
    storageBucket: "nimble-yen-409711.appspot.com",
    messagingSenderId: "136522270698",
    appId: "1:136522270698:web:ab303e1e9dc29d44275493",
    measurementId: "G-9207FNDP1N"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  


let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

adminPage.addEventListener("click",()=>{
    document.getElementById("userHeading").style.display = 'none';
    document.getElementById("admintext").style.display = 'none';
    document.getElementById("adminHeading").style.display = 'block';
    document.getElementById("usertext").style.display = 'block';

})

userPage.addEventListener("click",()=>{
    document.getElementById("userHeading").style.display = 'block';
    document.getElementById("admintext").style.display = 'block';
    document.getElementById("adminHeading").style.display = 'none';
    document.getElementById("usertext").style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function () {
    var signupButton = document.querySelector('.signup-box .clkbtn');
    var loginButton = document.querySelector(".login-box .clkbtn");
    signupButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm password').value;

        if (password !== confirmPassword) {
            document.querySelectorAll('.signup-box .ele').forEach(function(input) {
                input.value = '';
            });
            alert('Passwords do not match. Please try again.');

            return false; 
        }
        auth.createUserWithEmailAndPassword(email, password,)
        .then((userCredential) => {
          // Registration successful
          console.log("created"+userCredential.password)
     alert("Registerd successfully Pls Login in");
     
        })
        .catch((error) => {
          // Handle registration errors
          console.error('Registration error:', error.message);
        });

        localStorage.setItem("loginCred",JSON.stringify({"Name":name,"email":email,"password":password}));
        alert("You have register Successfully, Click on login to login");
        
    });
    loginButton.addEventListener('click',()=>{
        var email = document.getElementById('loginemail').value;
        var password = document.getElementById('loginpassword').value;
        
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Registration successful
    alert("successfully logged in");
    window.location.href="homePage.html";
    console.log("logged in"+userCredential);
    })

.catch((error) => {
  // Handle registration errors
  console.error('Registration error:', error.message);
});
    });
});
