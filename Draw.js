function draw() {
	frames++;

	c.fillStyle = "rgb(255, 150, 150)";
	c.fillRect(0, 0, canvas.width, canvas.height);

	if(screen == "Game") {
		if(!levels[currentLVL].loaded) levels[currentLVL].load();
		if(player.pos.x > levels[currentLVL].camXBounds.x &&
		   player.pos.x < levels[currentLVL].camXBounds.y)
	   		cam.x = -player.pos.x + (canvas.width / 2);
		if(player.pos.y > levels[currentLVL].camYBounds.x &&
		   player.pos.y < levels[currentLVL].camYBounds.y)
	   		cam.y = -player.pos.y + (canvas.height / 2);

		c.save();
		c.translate(cam.x, cam.y);
		player.draw();
		player.update();

		levels[currentLVL].platforms.forEach((platform) => {
			platform.draw();
			platform.update();
			if(platform.id == "movingplatform") platform.move();
		})

		levels[currentLVL].monsters.forEach((monster) => {
			monster.draw();
			monster.update();
		})
		c.restore();
	}

	c.fillStyle = "white";
	c.fillText((mouse.x - cam.x) + ", " + (mouse.y - cam.y), mouse.x, mouse.y - 10);
	requestAnimationFrame(draw);
}

addEventListener("keydown", (e) => { keys[e.keyCode] = true; });
addEventListener("keyup", (e) => { keys[e.keyCode] = false; });
addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

var element = document.getElementById("loading");
element.parentNode.removeChild(element);
document.body.appendChild(canvas);
requestAnimationFrame(draw);
