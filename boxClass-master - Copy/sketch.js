const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground1;

function setup() {
    var canvas = createCanvas(1350, 650);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(width/2, 630, width, 15);
    box1 = new Box(200, 450, 25);

	packageBox_1= new ground(835,470,30,300)
	packageBox_2= new ground(1000,605,300,30)
	packageBox_3= new ground(1165,470,30,300)
	
    Engine.run(engine);

}

function draw() {
    background(0);
    
    box1.display();
    ground1.display();
    box1.keyPressed();
    packageBox_1.display();
    packageBox_2.display();
    packageBox_3.display();
}
