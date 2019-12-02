const w = 40;
let cols, rows;
let cells = []; 
let stack = [];
let current; 


function setup(){

    text('word', 10, 30);
    createCanvas(800, 800);
    cols = floor(width/w);
    rows = floor(height/w);

    for(let y=0; y < rows; y++){
        for(let x = 0; x<cols; x++){
            let cell = new Cell(x, y);
            cells.push(cell);
        }
    }

    current = cells[0];
}
function reset(){
  cells = []; 
  stack = [];
  current = '';
  setup() 
}

function keyTyped(){
  if(key ===  'n'){
    reset();
  }
}

function draw(){
    background(120);
    // frameRate(5);
    for(let i = 0; i< cells.length; i++){
        cells[i].render();
    }
    current.visited = true;
    current.head();

    let next = current.checkNeighbors();
    if(next){
        next.visited = true;

        stack.push(current);

        removeWalls(current, next);

        current = next;
    }else if (stack.length > 0){
      current = stack.pop();
    }
}

function removeWalls(a, b) {
    let x = a.x - b.x;
    if (x === 1) {
      a.walls.left = false;
      b.walls.right = false;
    } else if (x === -1) {
      a.walls.right = false;
      b.walls.left = false;
    }
    let y = a.y - b.y;
    if (y === 1) {
      a.walls.top = false;
      b.walls.bot = false;
    } else if (y === -1) {
      a.walls.bot = false;
      b.walls.top = false;
    }
}



