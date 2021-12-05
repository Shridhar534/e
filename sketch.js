var hen,henImage,b1,b2,b3,b4,ctrl,back1,back2,back3
var gs1=1,gs2=2
var gameState=1
var box
var wall1,wall2,wall3,wall4,wall5,wall6

function preload(){
  henImage2 = loadImage("2.png")
  henImage4 = loadImage("4.png")
  henImage1 = loadImage("1.png")
  henImage3 = loadImage("3.png")
  bgImage1 = loadImage("bg1.png")
  bgImage2 = loadImage("bg2.png")
  ctrlImg = loadImage("control.png")
}

function setup(){
  createCanvas(600,600)

  b1=createSprite(99,461,25,25)
  b2=createSprite(145,506,25,25)
  b3=createSprite(98,555,25,25)
  b4=createSprite(53,509,25,25)

  wall1 = createSprite(109,400,300,5) 
  wall2 = createSprite(300,540,600,5)
  wall3 = createSprite(250,200,5,400)
  wall4 = createSprite(337,340,5,380)
  wall5 = createSprite(450,30,600,5)
  wall6 = createSprite(490,150,300,5) 

  back1=createSprite(300,300)
  back1.addImage("back1",bgImage1)
  back1.scale=1.8

  back2=createSprite(300,300)
  back2.addImage("back2",bgImage2)
  back2.scale=0.6
  back2.visible=false
  
  ctrl=createSprite(100,515,10,10)
  ctrl.addImage("ctrl",ctrlImg)
  ctrl.scale=0.3

  hen=createSprite(20,500,50,50)
  hen.addImage("hen",henImage2)
  hen.scale=0.2
 
  box = createSprite(599,87,50,50)
  box.visible=false

}

function draw(){
background("white")
//hen.isStatic=false;

hen.collide(wall1)
hen.collide(wall2)
hen.collide(wall3)
hen.collide(wall4)
hen.collide(wall5)
hen.collide(wall6)



  if(keyDown("up_Arrow")){
    hen.position.y=hen.position.y-8
    hen.addImage("hen",henImage2)
    }
  
 if(keyDown("down_Arrow")){
    hen.position.y=hen.position.y+8
    hen.addImage("hen",henImage4)
      }
  
  if(keyDown("right_Arrow")){
    hen.position.x=hen.position.x+8
    hen.addImage("hen",henImage1)
    }    
  if(keyDown("left_Arrow")){
    hen.position.x=hen.position.x-8
    hen.addImage("hen",henImage3)
    }
 //---------------------------------------------------------------------------------------------------------*/
if(mousePressedOver(b1)){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2)
}

if(mousePressedOver(b2)){
  hen.position.x=hen.position.x+8
  hen.addImage("hen",henImage1)
}

if(mousePressedOver(b3)){
  hen.position.y=hen.position.y+8
  hen.addImage("hen",henImage4)
}

if(mousePressedOver(b4)){
  hen.position.x=hen.position.x-8
  hen.addImage("hen",henImage3)
}
//-------------------------------------------------------------------------------------------------------------------------//
if(touches.length>0){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2) 
  touches=[]
}

    
    if (hen.isTouching(box)){
      back1.visible=false 
      back2.visible=true
      hen.x=1
      hen.y=249
      box.destroy()
      wall6.destroy()
      wall5.destroy()
      wall4.destroy()
      wall3.destroy()
      wall2.destroy()
      wall1.destroy()

      gameState = gs2

      
    }
    
    console.log(mouseX,mouseY)
   // console.log(wall1.x)
  drawSprites()
}


