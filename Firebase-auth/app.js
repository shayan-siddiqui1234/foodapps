function onSignup() {
    // get input values
    var fullname = document.getElementById("fullname")
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var Address = document.getElementById("Address")
    var Age = document.getElementById("Age")
    var MobileNumber = document.getElementById("MobileNumber")
    var message = document.getElementById("message");

    var user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
        Address: Address.value,
        Age: Age.value,
        MobileNumber: MobileNumber.value
        

    }

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    message.innerHTML = "Signup Successfull "
    setTimeout(() => {
        message.innerHTML = "";
        location.href = "login.html";
    }, 3000);

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message.innerHTML =  errorMessage
    setTimeout(() => {
        message.innerHTML = "";
        
    }, 2000);
    // console.log(errorCode)
    // console.log(errorMessage)
    // ..
  });

    // var users = JSON.parse(localStorage.getItem("users")) || [];
    // // get indx
    // var userIdx = users.findIndex(function (val) {
    //     return val.email.toLowerCase() === user.email.toLowerCase()
    // });

    // if (userIdx === -1 ) {
    //     // this user is not exist
    //     users.push(user);
    //     // store in storage
    //     localStorage.setItem("users", JSON.stringify(users));
    //     // redirect to login page
    //     location.href = "login.html";
    // } else {
    //     message.innerHTML = user.email + " use in another account";
    // }
    // clear state

    // setTimeout(() => {
    //     message.innerHTML = "";
    //     location.href = "login.html";
    // }, 2000);


    // console.log(user);


}

// function onLogin() {
//     // get input values
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     var message = document.getElementById("message");

//     var user = {
//         email: email.value,
//         password: password.value,
//     }

//     var users = JSON.parse(localStorage.getItem("users")) || [];
//     // get indx
//     var currentUser = users.find(function (val) {
//         return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
//     });

//     if (currentUser) {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//         // user login
//         location.href = "index.html";
//     } else {
      
//         message.innerHTML = "Invalid credentials";
//     }
//     // clear state
//     setTimeout(() => {
//         message.innerHTML = "";
//     }, 2000);
// }


function onlogin(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("successfully login")
    console.log(user);
    window.location= "index.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
  
  }

// function onLogout() {
//     var message = document.getElementById("message");
//     localStorage.removeItem("user");
//     // message.innerHTML = "Good Bye.!";
//     // clear state
//     setTimeout(() => {
//         location.href = "login.html";
//     }, 1000);
// }

function getCurrentUser() {
    var detial = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = user.email;

}

var list = document.getElementById("list");

function getDetail() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    if (title != "" && description != "") {
        var li = document.createElement("li");
        li.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="image/bbb.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
  </div>
</div>
    `;
        list.appendChild(li);
        document.getElementsByClassName("center")[0].children[1].value = ""
        document.getElementsByClassName("target")[0].children[1].value = "";

    } else {
        alert("Please Enter Right Information! ")
    }


}



















































































