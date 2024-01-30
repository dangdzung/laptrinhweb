const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(even) {
    even.target.classList.toggle("fa-times");
    even.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
        menu.classList.remove("is-show");
        toggle.classList.remove("fa-times");
        toggle.classList.add("fa-bars");
    }
}
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

let refreshInterval = setInterval(() => {
    next.click();
}, 5000);
function showSlider() {
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    });
});

const link = document.querySelectorAll(".link");
link.forEach((item) => {
    item.addEventListener("click", function (e) {
        link.forEach((item) => {
            item.classList.remove("active");
        });
        e.target.classList.toggle("active");
    });
});
function creatNotification(
    title = "Welcome to notification",
    imgs = "https://myblogtime.com/wp-content/uploads/2020/08/Full-Stack-Web-Development-1.png",
    data = "Hãy sống mỗi ngày như là ngày cuối cùng của cuộc đời bạn."
) {
    const template = `<div class="noti">
    <img
        src="${imgs}"
        alt=""
        class="noti-image"
    />
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
            ${data}
        </p>
    </div>
</div>`;
    document.body.insertAdjacentHTML("afterbegin", template);
}
const randomImage = [
    "./asset/imgs/anh-1.webp",
    "./asset/imgs/anh-2.jpg",
    "./asset/imgs/anh-3.png",
    "./asset/imgs/anh-4.png",
    "./asset/imgs/anh-5.png",
];

const randomData = [
    "Tôi sẽ sống lâu ",
    "Welcome to my portfolio",
    "Tôi sẽ kiếm được rất nhiều tiền",
    "My name is Dũng",
    "I am frontend developer",
];
const randomDesc = [
    "Không có gì là không thể.",
    "Cái gì cũng có thể, nếu bạn đủ kiên nhẫn.",
    "Đừng ngừng mơ mộng. Ngủ say không mơ thì cuộc đời sẽ vô nghĩa.",
    "Sống là phải dám mơ mộng. Sở hữu một ước mơ cũng khá là tuyệt vời.",
    "Thành công không phải là chìa khóa mở cánh cửa hạnh phúc. Hạnh phúc là chìa khóa mở cánh cửa thành công.",
    "Cuộc sống không phải là đi tìm mình mà là đi tạo ra mình.",
    "Người khôn ngoan học từ kinh nghiệm của người khác, người thông minh học từ kinh nghiệm của mình, và người ngốc ngoan không học từ kinh nghiệm nào cả.",
    "Sự thành công là sản phẩm của sự kiên nhẫn, công sức và tham vọng.",
    "Khi bạn đặt mục tiêu cao cả và không bao giờ từ bỏ, bạn đã đang mở cửa vào cơ hội.",
    "Hãy sống mỗi ngày như là ngày cuối cùng của cuộc đời bạn.",
];
let lastTitle;
const timer = setInterval(function () {
    const item = document.querySelector(".noti");
    if (item) {
        item.parentNode.removeChild(item);
    }
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    const imgs = randomImage[Math.floor(Math.random() * randomImage.length)];
    const data = randomDesc[Math.floor(Math.random() * randomDesc.length)];
    if (lastTitle !== title) {
        creatNotification(title, imgs, data);
    }

    lastTitle = title;
}, 4000);
const button = document.querySelector(".button2");
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
  <div class="section-form">
            <div class="container">
                <div class="inner-wrap" id="container">
                    <div class="form-container sign-up">
                        <form action="" >
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
                            <input   type="email" placeholder="Email" />        
                            <div class="matkhau2">
                            <input  
                                type="password"
                                name="password"
                                id=""
                                placeholder="Enter your password"
                            />
                            <i class="fa fa-eye show_2"></i>
                        </div>
                            <button type="submit">Sign up</button>
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

                            <input   type="email" placeholder="Email" />
                            <div class="matkhau2">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>
            
                            <a href="">Forget Your Password</a>
                            <button type="submit">Sign In</button>
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
                                <button type="submit" class="hidden" id="login">
                                    Sign In
                                </button>
                            </div>
                            <div class="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <button type="submit" class="hidden" id="register">
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
    const togglePasswordIcons = document.querySelectorAll(".show_2");

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
// const modalClose = document.querySelector(".modal-close");

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

const template2 = `<div class="modal-2">
<div class="container">
    <div class="modal-content">
        <i class="fa fa-times modal-close__2"></i>
        <div class="section-form__2">
            <form action="" >
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

                <input   type="email" placeholder="Email" />
                <div class="matkhau">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>  
                <a href="">Forget Your Password</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</div>
</div>`;
const template3 = `<div class="modal-2">
<div class="container">
    <div class="modal-content">
        <i class="fa fa-times modal-close__2"></i>
        <div class="section-form__2">
            <form action="" >
                <h1>Sign up</h1>
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
                
                <input   type="text" placeholder="Your name" />
                <input   type="email" placeholder="Email" />
                <input   type="tel" placeholder="Your phone number">
                <div class="gender-selector">
                <label for="">Giới tính</label>
                <div class="gender-option">
                <input   type="radio" id="male" name="gender" value="male">
                <label for="male">Nam</label>
                </div>
                <div class="gender-option">
                <input   type="radio" id="female" name="gender" value="female">
                <label for="female">Nữ</label>
                </div>
                <div class="gender-option">
                <input   type="radio" id="other" name="gender" value="other">
                <label for="other">Khác</label>
                </div>
                </div>
           
                <div class="matkhau">
                <input  
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter your password"
                />
                <i class="fa fa-eye show_2"></i>
            </div>
            <div class="matkhau">
            <input  
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
            />
            <i class="fa fa-eye show_2"></i>
        </div>
                <a href="">Forget Your Password</a>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</div>
</div>`;

const button2 = document.querySelector(".button3");
button2.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template2);
    const togglePasswordIcons = document.querySelectorAll(".show_2");
    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
const modalClose__2 = document.querySelector(".modal-close__2");

document.body.addEventListener("click", function (event) {
    if (
        event.target.matches(".modal-close__2") ||
        event.target.closest(".modal-close__2")
    ) {
        const modal2 = event.target.closest(".modal-2");
        if (modal2) {
            modal2.parentNode.removeChild(modal2);
        }
    } else if (event.target.matches(".modal-2")) {
        event.target.parentNode.removeChild(event.target);
    }
});
const button3 = document.querySelector(".button4");
button3.addEventListener("click", function () {
    document.body.insertAdjacentHTML("beforeend", template3);

    const togglePasswordIcons = document.querySelectorAll(".show_2");

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            console.log("Toggle password icon clicked"); // Log để kiểm tra sự kiện click đã được kích hoạt

            const passwordInput = icon.previousElementSibling;

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    });
    const forms = document.querySelectorAll(".input-form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.elements["username"].value;
            if (!username) alert("Please enter your username");
        });
    });
});
// const modalClose__2 = document.querySelector(".modal-close__2");

document.body.addEventListener("click", function (event) {
    if (
        event.target.matches(".modal-close__2") ||
        event.target.closest(".modal-close__2")
    ) {
        const modal2 = event.target.closest(".modal-2");
        if (modal2) {
            modal2.parentNode.removeChild(modal2);
        }
    } else if (event.target.matches(".modal-2")) {
        event.target.parentNode.removeChild(event.target);
    }
});
const forms = document.querySelectorAll(".input-form");

forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = this.elements["username"].value;
        if (!username) alert("Please enter your username");
    });
});
