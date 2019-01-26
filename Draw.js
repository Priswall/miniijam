function draw() {
	frames++;
	canvas.style.cursor = "default";

	c.fillStyle = "rgb(255, 150, 150)";
	c.fillRect(0, 0, canvas.width, canvas.height);

	if(screen == "Menu") {
		c.fillStyle = "rgb(200, 255, 255)";
		c.fillRect((canvas.width / 2) - 150, 300, 300, 100);
		c.fillStyle = "white"
		c.strokeStyle = "rgba(0, 0, 0, 0.2)";
		c.lineWidth = 1;
		c.font = "50px Arial";
		c.textAlign = "center";
		c.textBaseline = "middle";
		c.fillText("P L A Y", canvas.width / 2, 350);
		c.strokeText("P L A Y", canvas.width / 2, 350);
		c.font = "10px Arial";
		if(mouse.x > (canvas.width / 2) - 150 && mouse.x < (canvas.width / 2) + 150 && mouse.y > 300 && mouse.y < 400 && transition.transitioningState == 0) {
			canvas.style.cursor = "pointer";
			if(mouseClicked) {
				transition.onhalfway = function() { screen = "Intro"; };
				transition.transitioningState = 1;
			}
		}
	}
	else if(screen == "Intro") {
		c.drawImage(cutscenes[currentCuscenePic], 0, 0, 1050, 600);
		c.fillStyle = "rgba(100, 100, 100, 0.5)";
		c.fillRect(canvas.width - 90, 10, 75, 25);
		c.fillStyle = "white";
		c.fillText("Skip cutscene", canvas.width - 52.5, 22.5);

		if(mouse.x > canvas.width - 90 && mouse.x < canvas.width - 15 &&
		   mouse.y > 10 && mouse.y < 35 &&
	   	   transition.transitioningState == 0) {
			canvas.style.cursor = "pointer";
			if(mouseClicked) {
				transition.transitioningState = 1;
				transition.onhalfway = function() { screen = "Game" };
			}
		}
		if(mouseClicked && transition.transitioningState == 0) {
			transition.transitioningState = 1;
			if(currentCuscenePic < 14) {
				transition.onhalfway = function() { currentCuscenePic++; };
			} else {
				transition.onhalfway = function() { screen = "Game"; };
			}
		}
	}
	else if(screen == "Game") {
		if(!levels[currentLVL].loaded) levels[currentLVL].load();
		if(player.pos.x > levels[currentLVL].camXBounds.x &&
		   player.pos.x < levels[currentLVL].camXBounds.y)
	   		cam.x = -player.pos.x + (canvas.width / 2);
		if(player.pos.y > levels[currentLVL].camYBounds.x &&
		   player.pos.y < levels[currentLVL].camYBounds.y)
	   		cam.y = -player.pos.y + (canvas.height / 2);

		c.save();
		c.translate(cam.x, cam.y);
		player.update();
		levels[currentLVL].update();
		levels[currentLVL].draw();
		player.draw();
		c.restore();
	}

	c.fillStyle = "white";
	c.fillText((mouse.x - cam.x) + ", " + (mouse.y - cam.y), mouse.x, mouse.y - 10);
	transition.transition();
	mouseClicked = false;
	requestAnimationFrame(draw);
}

addEventListener("keydown", (e) => { keys[e.keyCode] = true; });
addEventListener("keyup", (e) => { keys[e.keyCode] = false; });
addEventListener("mousedown", (e) => {mouseIsPressed = true; mouseClicked = true;});
addEventListener("mouseup", (e) => {mouseIsPressed = false;});
addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

var element = document.getElementById("loading");
element.parentNode.removeChild(element);
document.body.appendChild(canvas);
requestAnimationFrame(draw);
