const passwordinput = document.querySelector("#psw");
const showhidden = document.querySelector(".show");

showhidden.addEventListener("click", () => {
  if (passwordinput.type == "password") {
    passwordinput.type = "text";
    showhidden.classList.replace("bxs-hide", "bxs-show");
  } else {
    passwordinput.type = "password";
    showhidden.classList.replace("bxs-show", "bxs-hide");
    console.log("else");
  }
});
console.log("hellow");
