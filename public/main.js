const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open"); // Assuming you have an open button
const closeButton = document.getElementById("close"); // Assuming you have a close button

// open menu
function openMenu() {
    mobileMenu.style.display = "flex";
    openButton.style.display = "none";
    closeButton.style.display = "block";
}
function closeMenu() {
    mobileMenu.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
}

// Event listener for "back-to-top" button click
document.querySelector('.back-to-top').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// swiper js
var swiperOptions2 = {
    loop: true,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    speed: 4000,
    freeModeMomentum: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);



// open modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function openModal1() {
    const modal1 = document.getElementById('modal1');
    modal1.style.display = 'flex';
}
function closeModal1() {
    const modal1 = document.getElementById('modal1');
    modal1.style.display = 'none';
}


var player;

function openPopup(videoId) {
    var modal = document.getElementById("popup");
    var videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "https://www.youtube.com/embed/" + videoId;
    modal.style.display = "block";
    player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
// Called when the YouTube player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Close the modal
function closePopup() {
    var modal = document.getElementById("popup");
    var videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "";
    modal.style.display = "none";
}
