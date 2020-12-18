
 const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Body = Matter.Body;
 const Render = Matter.render;

 var engine, world, ground , part1 ,part2, part3, paperball ,dustbinImg; 
 
 function preload(){
   dustbinImg = loadImage("images/dustbin.png");
 }

 function setup() { 
   createCanvas(1200,400);
    engine = Engine.create(); 
    world = engine.world; 

    //making dustbin
    part1 = new Dustbin(1000,370,320,20);
    part2 = new Dustbin(850,320,20,80);
    part3 = new Dustbin(1150,320,20,80);

    //making ground
    ground = new Ground(600,390,1200,20);

    //making paper ball
    paperball = new Paper(300,380,40);

    /*var render = Render.create(
      { element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
    */
    } 
    
    function draw() { 
      background("black"); 
      Engine.update(engine); 

     part1.display();
     part2.display();
     part3.display();
     
     ground.display();

     paperball.display();

     imageMode(CENTER);
     image(dustbinImg,1035,240,290,290);

    }

    function keyPressed(){
      
      if(keyCode === RIGHT_ARROW){

        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:300,y:-300})
 
      }
 
    }

