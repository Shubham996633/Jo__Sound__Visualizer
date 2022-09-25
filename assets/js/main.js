'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}


const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




function fullScreen(theURL) {
    window.open(theURL, '', "width=1920, height=1080");
    }

const mustTry = document.querySelector('.must__try')

mustTry.innerHTML = `

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__1/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/1.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Spiral</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>


                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>


                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>



                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>


                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>


                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>


                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        <li class="scrollbar-item">
                        <a onclick=
                            'fullScreen("./assets/Resources/Visualizer Types/Visualizer__2/index.html");' class="card-title">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/2.png" width="400" height="470" loading="lazy"
                            alt="visualizer1" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            Visualizer <span class="span">Circle</span>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </a>
                        </li>

                        



                        

                    `


// const allReleased = document.querySelector('.all__released')

// allReleased.innerHTML = `
//                                 <li class="scrollbar-item">
//                                 <div class="featured-game-card">

//                                 <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
//                                     <img src="assets/img/1.png" width="450" height="600" loading="lazy"
//                                     alt="Just for Gamers" class="img-covers">
//                                 </figure>

//                                 <div class="card-content">

                                    

//                                     <span class="card-meta">
//                                     <i class='bx bxl-javascript'></i>

//                                     <span class="span">Based on JavaScript</span>
//                                     </span>

//                                 </div>

//                                 <div class="card-content-overlay">

                                    

//                                     <h3 class="h3">
//                                     <a onclick=
//                                     'fullScreen("./assets/Resources/Visualizer Types/Visualizer__1/index.html")' class="card-title">
//                                         Click Here to <span class="span">Play</span>
//                                     </a>
//                                     </h3>

//                                     <span class="card-meta">
                                    

                                   
//                                     </span>
                                    

//                                 </div>
                                
                                
//                                 </div>
//                                 </li>



//                                 <li class="scrollbar-item">
//                                 <div class="featured-game-card">

//                                 <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
//                                     <img src="assets/img/2.png" width="450" height="600" loading="lazy"
//                                     alt="Just for Gamers" class="img-covers">
//                                 </figure>

//                                 <div class="card-content">

                                    

//                                     <span class="card-meta">
//                                     <i class='bx bxl-javascript'></i>

//                                     <span class="span">Based on JavaScript</span>
//                                     </span>

//                                 </div>

//                                 <div class="card-content-overlay">

                                    

                                   

//                                     <span class="card-meta">
                                    

                                   
//                                     </span>

//                                 </div>

//                                 </div>
//                                 </li>


//                                 <li class="scrollbar-item">
//                                 <div class="featured-game-card">

//                                 <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
//                                     <img src="assets/img/3.png" width="450" height="600" loading="lazy"
//                                     alt="Just for Gamers" class="img-covers">
//                                 </figure>

//                                 <div class="card-content">

                                    

//                                     <span class="card-meta">
//                                     <i class='bx bxl-javascript'></i>

//                                     <span class="span">Based on JavaScript</span>
//                                     </span>

//                                 </div>

//                                 <div class="card-content-overlay">

                                    

//                                     <h3 class="h3">
//                                     <a onclick=
//                                     'fullScreen("./assets/Resources/Visualizer Types/Visualizer__3/index.html")' class="card-title">
//                                         Click Here to <span class="span">Play</span>
//                                     </a>
//                                     </h3>

//                                     <span class="card-meta">
                                    

                                   
//                                     </span>

//                                 </div>

//                                 </div>
//                                 </li>



//                                 <li class="scrollbar-item">
//                                 <div class="featured-game-card">

//                                 <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
//                                     <img src="assets/img/4.png" width="450" height="600" loading="lazy"
//                                     alt="Just for Gamers" class="img-covers">
//                                 </figure>

//                                 <div class="card-content">

                                    
                                   

//                                     <span class="card-meta">
//                                     <i class='bx bxl-javascript'></i>

//                                     <span class="span">Based on JavaScript</span>
//                                     </span>

//                                 </div>

//                                 <div class="card-content-overlay">

                                    

//                                     <h3 class="h3">
//                                     <a onclick=
//                                     'fullScreen("./assets/Resources/Visualizer Types/Visualizer__4/index.html")' class="card-title">
//                                         Click Here to <span class="span">Play</span>
//                                     </a>
//                                     </h3>

//                                     <span class="card-meta">
                                    

                                   
//                                     </span>

//                                 </div>

//                                 </div>
//                                 </li>

                              


//                         `


const letStart = document.querySelector('.letsStart')

letStart.addEventListener('click', startscroll)

function startscroll(){
    
    var offsets = document.getElementById("scrolltarget").offsetTop
       
    window.scroll(0,offsets);
    console.log('yo')
}