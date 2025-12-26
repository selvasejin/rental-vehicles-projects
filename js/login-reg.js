function login_reg() {
  document.getElementById("login-reg").innerHTML =
   `
        <div class="login-reg" >
            <div id="form_inside" class="form_inside" active="form_login()">
            <h3>
                <a id="form_login" onclick="form_login()" style="border-bottom: 1px solid rgba(30, 41, 59, 1);">Login</a> / <a id="form_register" onclick="form_register()">Register</a>
            </h3>
        <input type="email" placeholder="Email">
        <br><br>
        <input type="password" placeholder="Password">
        <button type="submit" onclick="form_login_sucess()">Login</button>
        </div>
        </div>  
    `;
}

function form_login() {
  document.getElementById("form_inside").innerHTML = `
        <h3>
            <a id="form_login" onclick="form_login()" style="border-bottom: 1px solid rgba(30, 41, 59, 1);">Login</a> / <a id="form_register" onclick="form_register()">Register</a>
        </h3>
        <input type="email" placeholder="Email">
        <br></br>
        <input type="password" placeholder="Password">
        <button type="submit" onclick="form_login_sucess()">Login</button>
    `;
}

function form_register() {
  document.getElementById("form_inside").innerHTML =
   `
        <h3>
            <a id="form_login" onclick="form_login()">Login</a> / <a id="form_register" onclick="form_register()" style="border-bottom: 1px solid rgba(30, 41, 59, 1);">Register</a>
        </h3>
        <label>Full Name</label>
        <input type="text" placeholder="Name" id="name">

        <label>Email</label>
        <input type="email" placeholder="Email" id="email">
        <span id="emailspan"><span>
        <label>Password</label>
        <input type="password" placeholder="Password" id="pwd">
        <span id="pwdspan"><span>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="cpwd">
        <span id="cpwdspan"><span>
        <button type="submit" onclick="form_register_sucess()">Register</button>
    `;
}
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let namePattern = /^[A-Za-z ]{3,}$/;
let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.])(?!.*\s).{8,20}$/;


function form_register_sucess() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pwd").value;
  let confirmpassword = document.getElementById("cpwd").value;

  let valid = true;

  if (!namePattern.test(name)) {
    alert("Enter a valid name (minimum 3 letters)");
    valid = false;
  }
  if (!emailPattern.test(email)) {
    document.getElementById("emailspan").innerText ="Enter valid email format (example: xyz@abc.com)";
    valid = false;
  }
  if (!passwordPattern.test(password)) {
    document.getElementById("pwdspan").innerHTML = `
      <ul>
        <li>8-20 characters</li>
        <li>1 uppercase letter, special character, lowercase letter, digit</li>
        <li>No spaces</li>
      </ul>
    `;
    valid = false;
  }
  if (password !== confirmpassword) {
    document.getElementById("cpwdspan").innerText ="Confirm password does not match";
    valid = false;
  }
  if (valid) {
    localStorage.setItem("profileId","registered")
    alert(`Hi ${name}, your account was created successfully`);
    window.location.reload();
  }
}

function form_login_sucess(){
  localStorage.setItem("profileId","registered")
  alert("Login Sucessfull")
  window.location.reload();
}

document.getElementById("year").textContent = new Date().getFullYear();
if (!localStorage.getItem("profileId")) {
  localStorage.setItem("profileId", "notregistered");
}

const profile = document.getElementById("navigation");
const profileId = localStorage.getItem("profileId");

if (profileId === "registered") {
  profile.innerHTML = `
    <img src="boy profile.png" alt=" ">
  `
} else {
  profile.innerHTML = `
    <a class="login navigation" onclick="login_reg()">Login/Register</a>
  `;
}


