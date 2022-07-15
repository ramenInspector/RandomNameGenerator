var name1 = [
  "Jam",
  "Mar",
  "Rob",
  "Pat",
  "Joh",
  "Jenn",
  "Mich",
  "Lind",
  "Dav",
  "Eliz",
  "Will",
  "Barb",
  "Rich",
  "Sus",
  "Jos",
  "Jess",
  "Thom",
  "Sar",
  "Charl",
  "Kar",
  "Christ",
  "Lis",
  "Dan",
  "Nanc",
  "Matth",
  "Bett",
  "Anth",
  "Marg",
  "M",
  "Sand",
  "Just",
  "Don",
  "Ashl",
  "Stev",
  "Kimb",
  "P",
  "Em",
  "Andr",
  "Donn",
  "Josh",
  "Muh",
  "Enz",
  "In",
  "Man",
  "Hug",
  "Fel",
  "R",
];

var name2 = [
  "es",
  "y",
  "ert",
  "ricia",
  "n",
  "ifer",
  "hael",
  "a",
  "id",
  "abeth",
  "iam",
  "ara",
  "ard",
  "an",
  "eph",
  "ica",
  "as",
  "ah",
  "es",
  "en",
  "opher",
  "iel",
  "ew",
  "ony",
  "aret",
  "ark",
  "ra",
  "in",
  "ald",
  "ey",
  "erly",
  "aul",
  "ily",
  "ua",
  "elle",
  "ammad",
  "o",
  "on",
  "ix",
  "ick",
];

var num = 0;

var N1;
var N2;

var rectran;

var flash;

var flashAlph = 0;

function preload() {
  soundFormats("wav");
  flash = loadSound("camera");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  N1 = random(name1);
  N2 = random(name2);
  textSize(40);
  textAlign(CENTER);
  textFont("Roboto Slab");
}

function draw() {
  background(random(40, 45));

  rectran = random(0, windowWidth);

  textAlign(CENTER);

  textSize(20);
  fill(90);
  text("Click screen to generate name.", windowWidth / 2, 30);

  textSize(40);
  fill(220);
  text(N1 + N2, windowWidth / 2, windowHeight / 2);

  textAlign(RIGHT);
  fill(90);
  text(num, windowWidth - 40, windowHeight - 45);

  textAlign(CENTER);
  fill(0);
  rect(rectran, 0, random(0, 2), windowHeight);
  circle(random(0, windowWidth), random(0, windowHeight), random(0, 5));

  fill(255, 255, 255, flashAlph);
  rect(0, 0, windowWidth, windowHeight);

  flashAlph -= 15;
}

function mouseClicked() {
  N1 = random(name1);
  N2 = random(name2);
  flashAlph = 255;
  flash.play();
  num++;
}

function keyPressed() {
  if (keyCode == 32) {
    N1 = random(name1);
    N2 = random(name2);
    flashAlph = 255;
    flash.play();
    num++;
  }
}
