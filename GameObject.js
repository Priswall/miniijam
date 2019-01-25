function gameObject(x, y, id, sprites) {
	this.pos = new Vector(x, y);
	this.id = id;
	this.sprites = sprites;
}

var script = document.createElement("script");
script.src = "Player.js";
document.body.appendChild(script);