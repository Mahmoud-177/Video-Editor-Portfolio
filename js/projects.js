const vidBtns = document.querySelectorAll(".show-video")
const videos = document.querySelectorAll(".vid-projects > div")
const vidClose = document.querySelectorAll(".vidClose")

vidBtns.forEach((vidBtn) => {
    vidBtn.addEventListener("click", _ => {
        overlay.classList.add("shown")
        let num = vidBtn.getAttribute("data-num");
        videos[num - 1].classList.add("shown")
        const shownVideo = document.querySelector(".vid-projects .shown video");
        if (shownVideo) {
            shownVideo.play();
        }
    })
})
vidClose.forEach((close) => {
    close.addEventListener("click", _ => {
        const shownVideo = document.querySelector(".vid-projects .shown video");
        if (shownVideo) {
            shownVideo.pause();
            shownVideo.currentTime = 0; // يرجعه لأول الفيديو
        }
        videos.forEach((video) => {video.classList.remove("shown")})
        overlay.classList.remove("shown")
    })
})