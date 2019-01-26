function Transition() {
    this.frames = 0;
    this.onhalfway = null;
    this.transitioningState = 0;

    this.transition = function () {
        if(this.transitioningState == 1) {
            this.frames += 5;
            if(this.frames >= 255) {
                this.onhalfway();
                this.transitioningState = 2;
            }
        }
        if(this.transitioningState == 2) {
            this.frames -= 5;
            if(this.frames <= 0) {
                this.frames = 0;
                this.transitioningState = 0;
            }
        }
        c.fillStyle = "rgba(255, 255, 255, " + this.frames / 255 + ")";
        c.fillRect(0, 0, canvas.width, canvas.height);
    };
};
var transition = new Transition();

var script = document.createElement("script");
script.src = "Level.js";
document.body.appendChild(script);
