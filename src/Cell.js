class Cell{
    
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = this.x * w;
        this.height = this.y * w; 
        this.visited = false;
        this.neighbors = [];
        this.walls = {
            top: true,
            right: true,
            bot: true, 
            left: true,
        }
    }

    render(){
        strokeWeight(3);
        stroke(0);
        if(this.walls.top){

            line(this.width  , this.height  , this.width+w, this.height);
        }
        if(this.walls.right){

            line(this.width+w, this.height, this.width + w,this.height+w);
        }
        if(this.walls.bot){

            line(this.width+w, this.height + w, this.width, this.height+w);
        }
        if(this.walls.left){

            line(this.width  , this.height+w, this.width, this.height);
        }

        if(this.visited){
            noStroke();
            fill(61, 52, 235, 80);
            rect(this.width, this.height, w, w);
        }
    }

    checkNeighbors(){
        this.neighbors = [];
        let top = cells[this.index(this.x, this.y-1)];
        let right = cells[this.index(this.x + 1, this.y)];
        let bot = cells[this.index(this.x, this.y+1)];
        let left = cells[this.index(this.x - 1, this.y)];

        if(top && !top.visited){
            this.neighbors.push(top);
        }
        if(right && !right.visited){
            this.neighbors.push(right);
        }
        if(bot && !bot.visited){
            this.neighbors.push(bot);
        }
        if(left && !left.visited){
            this.neighbors.push(left);
        }

        if(this.neighbors.length > 0){
            let rdm = floor(random(0, this.neighbors.length));
            return this.neighbors[rdm];
        }else{
            return undefined;
        }

    }


    index(x, y){

        if(x < 0 || y < 0 || x > cols -1 ||  y > rows-1){
            return -1; 
        }
        return x + y * cols;
    }

    head() {
        noStroke();
        fill(255, 0, 38, 130);
        rect(this.width, this.height, w, w);
    
      }


}