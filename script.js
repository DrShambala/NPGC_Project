document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".hover-video");

    videos.forEach(video => {
        const posterSrc = video.getAttribute("poster"); // Store the initial poster

        video.addEventListener("mouseenter", function () {
            // Remove poster (thumbnail)
            video.removeAttribute("poster");
            // Play video
            video.play();
        });

        video.addEventListener("mouseleave", function () {
            // Pause video and reset to the start
            video.pause();
            video.currentTime = 0;
            
        });
    });
});
