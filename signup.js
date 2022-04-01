document.querySelector("form").addEventListener("submit", mysignup);


userData = JSON.parse(localStorage.getItem("userCred")) || [];

function mysignup() {
    event.preventDefault();

    var userobj = {
           email: document.querySelector("#email").value,
           password: document.querySelector("#pass").value,
           username: document.querySelector("#user").value
    };

//    console.log(userobj)

   userData.push(userobj);
    console.log(userData);

    localStorage.setItem("userCred", JSON.stringify(userData));
}
