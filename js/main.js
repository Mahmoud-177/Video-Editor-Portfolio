const body = document.body
const themeToggle = document.getElementById("themeToggle")
const themeIcon = themeToggle.querySelector("i")

const currentTheme = localStorage.getItem("theme")
if(currentTheme === 'light'){
    body.classList.add('light')
    themeIcon.classList.replace('fa-moon', 'fa-sun')
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme')
    if(body.classList.contains('light-theme')){
        themeIcon.classList.replace('fa-moon', 'fa-sun')
        // localStorage.setItem('theme','light')
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon')
        // localStorage.setItem('theme','dark')
    }
})

const sectionTitles = document.querySelectorAll('.section-title');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
        });
}, {
    threshold: 0.5 // تبدأ الانميشن لما يظهر نص العنصر
});

sectionTitles.forEach(title => {
    observer.observe(title);
});

const menuBtns = document.querySelectorAll('.menuBtn')
const sideBar = document.getElementById('sideBar')
const overlay = document.getElementById('overlay')

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        sideBar.classList.toggle('shown')
        body.classList.toggle('disabled')
        overlay.classList.toggle('shown')
    })
})
overlay.addEventListener('click', () => {
    sideBar.classList.remove('shown');
    overlay.classList.remove('shown');
    body.classList.remove('disabled');
    navLinksBtn.classList.remove("clicked")
    navLinks.classList.remove("active")
    const shownVideo = document.querySelector(".vid-projects .shown video");
    if (shownVideo) {
        shownVideo.pause();
        shownVideo.currentTime = 0; // يرجعه لأول الفيديو
    }
    videos.forEach((video) => {video.classList.remove("shown")})
});

const navLinksBtn = document.getElementById("nav")
const navLinks = document.querySelector('.nav-links-bar')

navLinksBtn.addEventListener("click" , _ => {
    navLinks.classList.toggle("active")
    navLinksBtn.classList.toggle("clicked")
    overlay.classList.toggle('shown')
})

const scroller = document.querySelector(".scroller")
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight 

window.addEventListener("scroll", _ => {
    let scrollTop = document.documentElement.scrollTop
    scroller.style.width = `${(scrollTop / height) * 100}%`
})