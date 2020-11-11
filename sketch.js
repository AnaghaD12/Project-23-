
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper 
var ground
var b,ls,rs
var engine, world;
var groundSp;
var paperSp;
var bsp,lsp, rsp
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
	World.add(world, ground);

	paper = Bodies.circle(100, 640 , 5);
	World.add(world, paper);

	b = Bodies.rectangle(600,600,200,20);
	World.add(world, b);
	ls= Bodies.rectangle(700,600,200,20);
	World.add(world, ls);
	rs= Bodies.rectangle(700,600,200,20);
	World.add(world, rs);
	//Create the Bodies Here.
	


	
}


function draw() {
	Engine.run(engine);
groundSp = createSprite(ground.position.x,ground.position.y,800,10);
bsp = createSprite(b.position.x,b.position.y,200,20);
lsp=createSprite(ls.position.x,lside.position.y,200,20);
rsp=createSprite(rs.postition.x,rside.position.y,200,20);
paperSp = createSprite(paper.position.x,paper.position.y,5,5)
  rectMode(CENTER);
  background(0);
  keyPressed()
  drawSprites();

 

}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:85})
	}
}