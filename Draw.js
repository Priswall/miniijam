function draw() {
	frames++;
	canvas.style.cursor = "default";

	if(screen == "Menu") {
		c.drawImage(titlescreen, 0, 0, 1050, 600);
		c.drawImage(startButton, (canvas.width / 2) - 150, 300);
		if(mouse.x > (canvas.width / 2) - 150 && mouse.x < (canvas.width / 2) + 150 && mouse.y > 300 && mouse.y < 400 && transition.transitioningState == 0) {
			canvas.style.cursor = "pointer";
			if(mouseClicked) {
				transition.onhalfway = function() { screen = "Intro"; };
				transition.transitioningState = 1;
			}
		}
	}
	else if(screen == "Intro") {
		c.textAlign = "center";
		c.drawImage(cutscenes[currentCuscenePic], 0, 0, 1050, 600);
		c.fillStyle = "rgba(100, 100, 100, 0.5)";
		c.fillRect(canvas.width - 90, 10, 75, 25);
		c.fillStyle = "white";
		c.font = "10px Arial";
		c.fillText("Skip cutscene", canvas.width - 52.5, 22.5);
		c.font = "20px Arial";
		c.fillText(cutSceneText[currentCuscenePic], canvas.width / 2, canvas.height - 40);

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
			if(currentCuscenePic < 13) {
				transition.onhalfway = function() { currentCuscenePic++; };
			} else {
				transition.onhalfway = function() { screen = "Game"; };
			}
		}
	}
	else if(screen == "Game") {
		if(lost.currentTime == 0) lost.play();
		c.drawImage(backgrounds[levels[currentLVL].bgid], 0, 0, 1050, 600);

		if(!levels[currentLVL].loaded) levels[currentLVL].load();
		if(levels[currentLVL].canMoveX)
	   		cam.x = -player.pos.x + (canvas.width / 2);
		if(levels[currentLVL].canMoveY)
	   		cam.y = -player.pos.y + (canvas.height / 2);
		if(-cam.x < levels[currentLVL].camXBounds.x - (canvas.width / 2))
			cam.x = -(levels[currentLVL].camXBounds.x - (canvas.width / 2));
		if(-cam.x > levels[currentLVL].camXBounds.y - (canvas.width / 2))
			cam.x = -(levels[currentLVL].camXBounds.y - (canvas.width / 2));
		if(-cam.y < levels[currentLVL].camYBounds.x - (canvas.height / 2))
			cam.y = -(levels[currentLVL].camYBounds.x - (canvas.height / 2));
		if(-cam.y > levels[currentLVL].camYBounds.y - (canvas.height / 2))
			cam.y = -(levels[currentLVL].camYBounds.y - (canvas.height / 2));

		c.save();
		c.translate(cam.x, cam.y);
		if(!player.iscrying) player.update();
		levels[currentLVL].update();
		levels[currentLVL].draw();
		player.draw();
		c.restore();
	} else if(screen == "Ending")

	c.fillText("ClockbeatAdelony87 - Lost", 0, 0);
	c.fillText("etK - Sikirz", 0, 0);

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
