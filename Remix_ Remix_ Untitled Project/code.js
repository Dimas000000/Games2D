var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["58d6d9f8-8349-4431-b088-7afa698cdd3e","7048bd26-da13-4f1a-974d-e96776dfdd99","f07199b3-c1f6-491a-8a74-8f2eba1a1863","e8ec089a-302d-4b9c-b9ff-9778aad52396","2c079a03-7ef1-41ea-81ac-e1621a8dbcdd","8210ff31-da73-4a01-b765-90308d0f1b1a","97d0b38d-7649-45d2-ac23-4a00cadf1bb5","8697730f-b6f9-4714-a876-e02842890afc","015bcad5-0b10-4609-b2b7-387008a779db","6c61ba30-80aa-4aca-874f-47e296412be9","b77eaaee-e2cf-463c-b355-3d16b790f269"],"propsByKey":{"58d6d9f8-8349-4431-b088-7afa698cdd3e":{"name":"red","sourceUrl":null,"frameSize":{"x":10,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"BBup3gRFyPv9I2TZwOzJUP5h_7SVJhK1","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":15},"rootRelativePath":"assets/58d6d9f8-8349-4431-b088-7afa698cdd3e.png"},"7048bd26-da13-4f1a-974d-e96776dfdd99":{"name":"blue","sourceUrl":null,"frameSize":{"x":10,"y":15},"frameCount":1,"looping":true,"frameDelay":5,"version":"0ggv9d6ZMv0A25iW5gzHW60hwLSoHi1H","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":15},"rootRelativePath":"assets/7048bd26-da13-4f1a-974d-e96776dfdd99.png"},"f07199b3-c1f6-491a-8a74-8f2eba1a1863":{"name":"red_down","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":2,"looping":true,"frameDelay":5,"version":"bNtbmBPtxAHsKp4GbvpLApwQc2284Wtd","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":16},"rootRelativePath":"assets/f07199b3-c1f6-491a-8a74-8f2eba1a1863.png"},"e8ec089a-302d-4b9c-b9ff-9778aad52396":{"name":"blue_down","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":2,"looping":true,"frameDelay":5,"version":"nO2xrY4_AgFsLg0vGL12znmjCOAix9NY","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":16},"rootRelativePath":"assets/e8ec089a-302d-4b9c-b9ff-9778aad52396.png"},"2c079a03-7ef1-41ea-81ac-e1621a8dbcdd":{"name":"red_up","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":2,"looping":true,"frameDelay":5,"version":"HdXsODwyx3g4bJZaULFIjegWOl27Jnpz","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":16},"rootRelativePath":"assets/2c079a03-7ef1-41ea-81ac-e1621a8dbcdd.png"},"8210ff31-da73-4a01-b765-90308d0f1b1a":{"name":"blue_up","sourceUrl":null,"frameSize":{"x":12,"y":16},"frameCount":2,"looping":true,"frameDelay":5,"version":"1Vdf9QXb5s9oo_Tx_5Vql0_xknuQcnTE","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":16},"rootRelativePath":"assets/8210ff31-da73-4a01-b765-90308d0f1b1a.png"},"97d0b38d-7649-45d2-ac23-4a00cadf1bb5":{"name":"red_right","sourceUrl":null,"frameSize":{"x":9,"y":16},"frameCount":4,"looping":true,"frameDelay":5,"version":"v7YZlOhBxhX2HYoFFnEOmb_sNbFumy6t","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":32},"rootRelativePath":"assets/97d0b38d-7649-45d2-ac23-4a00cadf1bb5.png"},"8697730f-b6f9-4714-a876-e02842890afc":{"name":"blue_right","sourceUrl":null,"frameSize":{"x":9,"y":16},"frameCount":4,"looping":true,"frameDelay":5,"version":"dNWD9yd90kc0oix8q.OfGHIs7owMhpQO","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":32},"rootRelativePath":"assets/8697730f-b6f9-4714-a876-e02842890afc.png"},"015bcad5-0b10-4609-b2b7-387008a779db":{"name":"red_left","sourceUrl":null,"frameSize":{"x":9,"y":16},"frameCount":4,"looping":true,"frameDelay":5,"version":"ScNJuDhD3tKIH_tZgG3jr4aeXZaIWsRp","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":32},"rootRelativePath":"assets/015bcad5-0b10-4609-b2b7-387008a779db.png"},"6c61ba30-80aa-4aca-874f-47e296412be9":{"name":"blue_left","sourceUrl":null,"frameSize":{"x":9,"y":16},"frameCount":4,"looping":true,"frameDelay":5,"version":"ka6A0aNPfwkMc9dIfBA4cXo1nLiDx4B6","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":32},"rootRelativePath":"assets/6c61ba30-80aa-4aca-874f-47e296412be9.png"},"b77eaaee-e2cf-463c-b355-3d16b790f269":{"name":"eightball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0g3OdHzUFOX2YJG_syVQcF2OsFD9taIo/category_sports/eightball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ponto1 = 0;
var ponto2 = 0;

var area1 = createSprite(25, 375);
area1.scale = 0.5;
area1.shapeColor = rgb(255, 150, 150);

var area2 = createSprite(375, 25);
area2.scale = 0.5;
area2.shapeColor = rgb(150, 150, 255);

var gameState = "inicio";

var player1 = createSprite(25, 375);
player1.setAnimation("red");
player1.scale = 2;

var player2 = createSprite(375, 25);
player2.setAnimation("blue");
player2.scale = 2;

var enemy1 = createSprite(200,200,13,13);
enemy1.shapeColor = "black";
enemy1.velocityY = 11;

var enemy2 = createSprite(250,200,13,13);
enemy2.shapeColor = "black";
enemy2.velocityY = -10;

var enemy3 = createSprite(300,200,13,13);
enemy3.shapeColor = "black";
enemy3.velocityY = 12;

var enemy4 = createSprite(350,200,13,13);
enemy4.shapeColor = "black";
enemy4.velocityY = -10;

var enemy5 = createSprite(150,200,13,13);
enemy5.shapeColor = "black";
enemy5.velocityY = -13;

var enemy6 = createSprite(100,200,13,13);
enemy6.shapeColor = "black";
enemy6.velocityY = 10;

var enemy7 = createSprite(50,200,13,13);
enemy7.shapeColor = "black";
enemy7.velocityY = -11;

var enemy8 = createSprite(200,200,13,13);
enemy8.shapeColor = "black";
enemy8.velocityX = 10;

var enemy9 = createSprite(200,200,13,13);
enemy9.shapeColor = "black";
enemy9.velocityX = -10;

createEdgeSprites()

function draw(){
  background(rgb(188, 253, 108));
  
  enemy1.bounceOff(edges);
  
  enemy2.bounceOff(edges);
  
  enemy3.bounceOff(edges);
  
  enemy4.bounceOff(edges);
  
  enemy5.bounceOff(edges);
  
  enemy6.bounceOff(edges);
  
  enemy7.bounceOff(edges);
  
  enemy8.bounceOff(edges);
  
  enemy9.bounceOff(edges);
  
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  
  if(player1.isTouching(enemy1)||player1.isTouching(enemy2)||player1.isTouching(enemy3)||player1.isTouching(enemy4)||player1.isTouching(enemy5)||player1.isTouching(enemy6)||player1.isTouching(enemy7)||player1.isTouching(enemy8)||player1.isTouching(enemy9)){
    player1.x = 25;
    player1.y = 375;
  }
  
  if(player2.isTouching(enemy1)||player2.isTouching(enemy2)||player2.isTouching(enemy3)||player2.isTouching(enemy4)||player2.isTouching(enemy5)||player2.isTouching(enemy6)||player2.isTouching(enemy7)||player2.isTouching(enemy8)||player2.isTouching(enemy9)){
    player2.x = 375;
    player2.y = 25;
  }
  
  if(player1.isTouching(area2)){
    ponto1 += 1;
    player1.x = 25;
    player1.y = 375;
  }
  
  if(player2.isTouching(area1)){
    ponto2 += 1;
    player2.x = 375;
    player2.y = 25;
  }
  
  if(gameState == "inicio"){
    fill("black");
    textSize(15);
    text("chegue até a outra cor para fazer ponto", 10, 20);
    text("use as teclas w, a, s, d, para mover o vermelho", 10, 40);
    text("e as setas para mover o azul", 10, 60);
    textSize(20);
    text("clique na tela para começar", 10, 180);
    
  }
  
  if(gameState == "gameplay"){
    
    textSize(40);
    fill("red");
    text(ponto1, 15, 350);
    
    fill("blue");
    text(ponto2, 365, 80);
   
   if(keyDown("w")){
      player1.setAnimation("red_up");
      player1.y -= 2;
    }
    
    if(keyDown("s")){
      player1.setAnimation("red_down");
      player1.y += 2;
    }
    
    if(keyDown("d")){
      player1.setAnimation("red_right");
      player1.x += 2;
    }
    
    if(keyDown("a")){
      player1.setAnimation("red_left");
      player1.x -= 2;
    }
    
    if(keyDown("up")){
      player2.setAnimation("blue_up");
      player2.y -= 2;
    }
    
    if(keyDown("down")){
      player2.setAnimation("blue_down");
      player2.y += 2;
    }
    
    if(keyDown("right")){
      player2.setAnimation("blue_right");
      player2.x += 2;
    }
    
    if(keyDown("left")){
      player2.setAnimation("blue_left");
      player2.x -= 2;
    }
    
    if(keyDown("t")){
      player2.setAnimation("blue_up");
      player2.y -= 2;
    }
    
    if(keyDown("g")){
      player2.setAnimation("blue_down");
      player2.y += 2;
    }
    
    if(keyDown("h")){
      player2.setAnimation("blue_right");
      player2.x += 2;
    }
    
    if(keyDown("f")){
      player2.setAnimation("blue_left");
      player2.x -= 2;
    }
  }
  
  drawSprites();
}

function mousePressed(){
if(gameState == "inicio"){
  gameState = "gameplay";
 }  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
