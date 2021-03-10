var restart_buttons = document.getElementsByClassName("restart-animation");
for(let i = 0; i < restart_buttons.length; i++) {
    restart_buttons[i].addEventListener("click", () => {
        var left_right_show = document.getElementsByClassName("left-right-show")[0];
        var right_left_show = document.getElementsByClassName("right-left-show")[0];
        var zoom_show = document.getElementsByClassName("zoom-show")[0];
        left_right_show.classList.remove("left-right-show");
        right_left_show.classList.remove("right-left-show");
        zoom_show.classList.remove("zoom-show");
        void left_right_show.offsetWidth;
        left_right_show.classList.add("left-right-show");
        right_left_show.classList.add("right-left-show");
        zoom_show.classList.add("zoom-show");
    });
}