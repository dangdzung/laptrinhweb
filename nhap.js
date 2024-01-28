const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
  <div class="section-form">
            <div class="container">
                <div class="inner-wrap" id="container">
                    <div class="form-container sign-up">
                        <form action="">
                            <h1>Create Account</h1>
                            <div class="social-icons">
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-google-plus-g"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-facebook"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-github"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-linkedin-in"></i
                                ></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in">
                        <form action="">
                            <h1>Sign in</h1>
                            <div class="social-icons">
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-google-plus-g"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-facebook"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-github"></i
                                ></a>
                                <a class="icon-4" href=""
                                    ><i class="fa-brands fa-linkedin-in"></i
                                ></a>
                            </div>
                            <span>or use your email password</span>

                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="">Forget Your Password</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div class="toggle-container">
                        <div class="toggle-2">
                            <div class="toggle-panel toggle-left">
                                <h1>Welcome back</h1>
                                <p>
                                    Enter your personal details to use all of
                                    site features
                                </p>
                                <button class="hidden" id="login">
                                    Sign In
                                </button>
                            </div>
                            <div class="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <button class="hidden" id="register">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>`;
button.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template);
});
const modalClose = document.querySelector(".modal-close");

document.body.addEventListener("click", function (event) {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });
    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });

    if (event.target.matches(".modal-close")) {
        const modal = event.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (event.target.matches(".modal")) {
        event.target.parentNode.removeChild(event.target);
    }
});

// const container = document.getElementById("container");
// const registerBtn = document.getElementById("register");
// const loginBtn = document.getElementById("login");
// registerBtn.addEventListener("click", () => {
//     container.classList.add("active");
// });
// loginBtn.addEventListener("click", () => {
//     container.classList.remove("active");
// });
