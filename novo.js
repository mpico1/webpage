
let dot1 = [];
let dot2 = [];
let dot3 = [];
let g1 = [];
let lives1 = [];
let lives2 = [];
let lives3 = [];
let place = 25;
let placeInc = 0.1;
let grap;
let date = 1;
function setup() {
    
    createCanvas(1200, 800);
    
    ellipse(10,10,10,10);
    grap = createGraphics(1200,400);
    
    //background(255);
    iniciarDots(0,20,1,dot1);
    //iniciarDots(400,20,0.5,dot2);
    //iniciarDots(800,40,1,dot3);

}


function draw(){
    
    grap.background(255);
    image(grap,0,400);
    
    ellipse(10,10,10,10);
    beforeLoop(g1);
    //beforeLoop(g2);
    //beforeLoop(g3);
    Loop(g1,dot1);
    //Loop(g2,);
    //Loop(g3,);

}

function iniciarDots(xoff,espaço,velocidade,dot){
    for(let k = espaço; k < 400; k+=espaço){
        for(let i = espaço+xoff; i< 400; i+=espaço){
          dot.push(new Dot(i,k,xoff,0,velocidade));
        }
      } 
      dot[40].inf = 0.4;
}

function beforeLoop(grafico){
    grap.background(255);
    grafico[0] =0;
    grafico[1] =0;
    grafico[2] =0;
    grafico[3] =0;
}
function Loop(grafico,dot){
    for(let j = 0; j < dot.length; j++){
        dot[j].show();
        dot[j].move();
        dot[j].Time();
        if(dot[j].inf == 0){
            grafico[0] ++;
        }
        if(dot[j].inf == 1){
            grafico[1] ++;
        }
        if(dot[j].inf == 2){
            grafico[2] ++;
        }
        if(dot[j].inf == 3){
            grafico[3] ++;
        }

        if(dot[j].inf == 1){
            for(let i = 0; i < dot.length; i++){
                if(dot[i].inf == 0){
                let dist = sqrt(sq(dot[i].x-dot[j].x)+sq(dot[i].y-dot[j].y));
                let prob = random(100);
                    if(dist < 10){
                        dot[i].inf = 0.4;
                    }
                }
            }
        }
    }
    
}

function DesenharGráfico(){


}



class Dot{
    constructor(x,y,xoff,infetado,velocidade){
        this.vel = velocidade;
        this.xoff = xoff;
        this.x = x+xoff;
        this.y = y;
        this.xn = random(10000);
        this.yn = random(10000);
        this.infetado = infetado;
      
    }
    Time(lotado, probDeMorrer){
        this.prob2 = random(100);
        if(this.infetado == 0.4){

          this.time = 1000;
          this.infetado = 0.5;
        }
        this.time -= 1;
        if(this.time == 750){
        this.infetado = 1
        }
        if(this.time == 0){
            this.morte(lotado, probDeMorrer);
        }
        }
    
      
        
      
    show() {
      
      grap.noStroke();
      if(this.infetado == 0){
        grap.fill(0,0,0);
      }
      if(this.infetado == 0.5){
        grap.fill	(255,159,88);
      }
      if(this.infetado == 1){
        grap.fill(255,0,0);
      }
      if(this.infetado == 2){
          grap.fill(0,255,0);
      } 
      if(this.infetado == 3){
        
        grap.fill(100,100,100,0);
      }
      
      grap.ellipse(this.x,this.y,10,10);
    }  
    move() {
      this.xn +=0.01;
      this.yn += 0.01;
      this.x +=map(noise(this.xn),0,1,-this.vel,this.vel);
      this.y +=map(noise(this.yn),0,1,-this.vel,this.vel);
      if(this.x < 0+xoff){
        this.x=400;
      }
      if(this.x > 400+xoff){
        this.x =0;
      }
       if(this.y < 0){
        this.y=400;
      }
      if(this.y > 400){
        this.y= 0;
      }
      if(this.infetado == 3){
        this.x = 10;
        this.y = 10;
      }
    }

    morte(lotado, probDeMorrer){
        if(probDeMorrer > lotado){
            this.infetado = 3;
        }
        else{
            this.infetado = 2
        }
    }
  }