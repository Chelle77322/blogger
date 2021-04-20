const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const userEL = document.querySelector("#username-input-signup");
    const passEL = document.querySelector("#password-input-signup");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: userEL.value,
        password: passEL.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/new-post");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);