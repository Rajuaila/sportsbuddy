

document.addEventListener('DOMContentLoaded', function() {
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

// adminPage.addEventListener("click",()=>{
//     document.getElementById("userHeading").style.display = 'none';
//     document.getElementById("admintext").style.display = 'none';
//     document.getElementById("adminHeading").style.display = 'block';
//     document.getElementById("usertext").style.display = 'block';

// })

// userPage.addEventListener("click",()=>{
//     document.getElementById("userHeading").style.display = 'block';
//     document.getElementById("admintext").style.display = 'block';
//     document.getElementById("adminHeading").style.display = 'none';
//     document.getElementById("usertext").style.display = 'none';
// })

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


        localStorage.setItem("loginCred",JSON.stringify({"Name":name,"email":email,"password":password}));
        alert("You have register Successfully, Click on login to login");
        
    });
    loginButton.addEventListener('click',()=>{
        console.log("jihuyffudfu");
        var email = document.getElementById('loginemail').value;
        var password = document.getElementById('loginpassword').value;
        let loginDet = JSON.parse(localStorage.getItem("loginCred"));
        if(loginDet.email == email && loginDet.password == password){
            document.getElementById('container').style.display = 'none';
            document.getElementById('background-div').style.display = 'none';
            let data = JSON.parse(localStorage.getItem('events'));
            let container = document.getElementById('EventContent');
            container.innerHTML = '';
            if (data.length === 0) {
                const emptyMessage = document.createElement('p');
                emptyMessage.textContent = 'Upcoming events are currently empty.';
                
                const addButton = document.createElement('button');
                addButton.textContent = 'Add Event';
                addButton.onclick = function() {
                  displayEventForm();
                };
                
                container.appendChild(emptyMessage);
                container.appendChild(addButton);
            } else {
            data.forEach(event => {
                const eventDiv = document.createElement('div');
                const addButton = document.createElement('button');
                addButton.textContent = 'Add Event';
                addButton.onclick = function() {
                  displayEventForm();
                };
                
                container.appendChild(addButton);
                eventDiv.classList.add('event');
            
                const htmlContent = `
                  <h2>${event.title}</h2>
                  <p>Place:</strong> ${event.place}</p>
                  <p>Time:</strong> ${event.time}</p>
                  <p>Location:</strong> ${event.location}</p>
                `;
            
                // Set the inner HTML of the event div.
                eventDiv.innerHTML = htmlContent;
            
                // Append the event div to the container.
                container.appendChild(eventDiv);
              });
            }

        }else{
            document.querySelectorAll('.login-box .ele').forEach(function(input) {
                input.value = '';
            });
            alert('Passwords do not match. Please try again.');
            return false; 
        }
    })


    let loginbtn = document.getElementById('loginbtn');
    loginbtn.addEventListener('click',()=>{
        console.log("object");
        document.getElementById('container').style.display = 'block';
        document.getElementById('background-div').style.backgroundImage = 'none';
    })
});



function displayEventForm() {
    const container = document.getElementById('EventContent');
    container.innerHTML = `
      <form id="event-form">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
  
        <label for="place">Place:</label>
        <input type="text" id="place" name="place" required>
  
        <label for="time">Time:</label>
        <input type="text" id="time" name="time" required>
  
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required>
  
        <button type="submit">Save Event</button>
      </form>
    `;
  
    document.getElementById('event-form').onsubmit = function(e) {
      e.preventDefault();
  
      // Create new event object
      const newEvent = {
        title: e.target.title.value,
        place: e.target.place.value,
        time: e.target.time.value,
        location: e.target.location.value
      };
  
      // Save to localStorage
      let currentData = JSON.parse(localStorage.getItem('events')) || [];
      currentData.push(newEvent);
      localStorage.setItem('events', JSON.stringify(currentData));
  
      // Display updated list of events
      displayEvents(currentData);
    };
  }

  function displayEvents(data) {
    const container = document.getElementById('EventContent');
    container.innerHTML = '';
  
    const addButton = document.createElement('button');
                addButton.textContent = 'Add Event';
                addButton.onclick = function() {
                  displayEventForm();
                };
                
                container.appendChild(addButton);
    if (data.length === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'Upcoming events are currently empty.';
      
      const addButton = document.createElement('button');
      addButton.textContent = 'Add Event';
      addButton.onclick = function() {
        displayEventForm();
      };
      
      container.appendChild(emptyMessage);
      container.appendChild(addButton);
    } else {
      data.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
  
        const htmlContent = `
          <h2>${event.title}</h2>
          <p><strong>Place:</strong> ${event.place}</p>
          <p><strong>Time:</strong> ${event.time}</p>
          <p><strong>Location:</strong> ${event.location}</p>
        `;
        
        eventDiv.innerHTML = htmlContent;
        container.appendChild(eventDiv);
      });
    }
  }
  