const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const userEL = document.querySelector("#username-input-login");
    const passEL = document.querySelector("#password-input-login");
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: userEL.value,
        password: passEL.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);