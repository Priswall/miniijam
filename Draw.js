function draw() {
	frames++;
	
	c.fillStyle = "rgb(255, 150, 150)";
	c.fillRect(0, 0, canvas.width, canvas.height);
	
	if(screen == "Game") {
		
		player.update();
		platforms.forEach((platform) => {
			platform.update();
			if(platform.id == "movingplatform") platform.move();
			platform.draw();
		})
		player.draw();
	}
	
	requestAnimationFrame(draw);
}

addEventListener("keydown", (e) => { keys[e.keyCode] = true; });
addEventListener("keyup", (e) => { keys[e.keyCode] = false; });
addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
addEventListener("resize", () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

var element = document.getElementById("loading");
element.parentNode.removeChild(element);
document.body.appendChild(canvas);
requestAnimationFrame(draw);