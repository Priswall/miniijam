var canvas = document.createElement("canvas");
canvas.width = 1050;
canvas.height = 600;
var c = canvas.getContext("2d");

function Vector(x, y) {
	this.x = x;
	this.y = y;
}

function Sprite(img, x, y, w, h) {
	this.pos = new Vector(x, y);
	this.size = new Vector(w, h);
	this.img = img;
}

var keys = [];
var mouse = new Vector(0, 0);
var cam = new Vector(0, 0);
var screen = "Menu";
var frames = 0;
var currentLVL = 0;
var currentCuscenePic = 0;
var levels = [];
var cutscenes = [];
var mouseClicked = false;
var mouseIsPressed = false;

var singing = new Audio();
singing.src = "sfx/singing.mp3";
var lost = new Audio();
lost.src = "sfx/Lost.mp3";
lost.volume = 0.5;
var sikirz = new Audio();
sikirz.src = "sfx/etK-Sikirz.mp3";

var startButton = new Image();
startButton.src = "gfx/startbutton.png";
var titlescreen = new Image();
titlescreen.src = "gfx/title screen.png";
var backgrounds = [
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image()
];
backgrounds[0].src = "gfx/backgrounds/backgroundgray.png";
backgrounds[1].src = "gfx/backgrounds/backgroundyellow.png";
backgrounds[2].src = "gfx/backgrounds/backgroundred.png";
backgrounds[3].src = "gfx/backgrounds/backgroundpurple.png";
backgrounds[4].src = "gfx/backgrounds/backgroundblue.png";

var cutSceneText = [
	"You're ready to go to your friend's house today. It's a bit far, but your parents trust you",
	"Before you leave, you hear them say \"Be careful and stay safe!\"",
	"\"I will!\" you tell them, eagerly setting off to go meet your friends",
	"Dusk is approaching quickly. You've only been in the woods during the day, so you rush to get there",
	"As you worry about the fading light, you forget where you was supposed to turn",
	"You're running out of time... and you're hopelessly lost",
	"",
	"",
	"",
	"",
	"You see a light swarm around your body, and...",
	"\"What's this?\" you wonder. \"Is this some king of amulet?\"",
	"You thank the forest for this gift, and despite your fears, you carry on",
	"Unknowingly, you carried a powerful object. \nBut the fear of darkness not only grew in you, but in the forest as well"
]

var monsterFrames = [
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image()
];
for(var i = 0; i < monsterFrames.length; i++) {
	monsterFrames[i].src = "gfx/character sprites/monster" + i + ".png";
}

var owo = new Image();
owo.src = "gfx/character sprites/owo.png";
var owocrying = new Image();
owocrying.src = "gfx/character sprites/owocrying.png";
var heart = new Image();
heart.src = "gfx/character sprites/heart.png";
var npcimg = new Image();
npcimg.src = "gfx/character sprites/npc.png";
var owowing = new Image();
owowing.src = "gfx/character sprites/owowing.png";
var owo2 = new Image();
owo2.src = "gfx/character sprites/owo2.png";
var singingPlatformimg = new Image();
singingPlatformimg.src = "gfx/environment sprites/platform.png";
var grass = new Image();
grass.src = "gfx/environment sprites/grassblock.png";

for(var i = 1; i < 14; i++) {
	cutscenes[i - 1] = new Image();
	cutscenes[i - 1].src = "gfx/cutscenes/" + i + ".png";
}

cutscenes[13] = new Image();
cutscenes[13].onload = function() {
	var script = document.createElement("script");
	script.src = "Transition.js";
	document.body.appendChild(script);
}
cutscenes[13].src = "gfx/cutscenes/14.png";
