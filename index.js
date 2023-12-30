class Game {
    static matrix = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    static me = 1
    static you = 2
    static step = true
    constructor(){
        this.add()
    }

    add() {
        document.body.innerHTML = ""
        let container = document.createElement('div')
        container.id = "game"
        let matrix = Game.matrix;
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                let div = document.createElement('div');
                div.className = 'item'
                if(matrix[i][j]==2){
                    div.innerHTML="O"
                }else if(matrix[i][j]==1){
                    div.innerHTML = "X"
                }
                div.onclick = function() {
                    if(Game.step){
                        this.innerHTML = 'X';
                        Game.matrix[i][j] = Game.me
                        Game.step = false
                        this.steps()
                    }
                }.bind(this);
                container.append(div)
            }
        }
        document.body.append(container)
    }

    steps() {
        let matrix = Game.matrix;
        let temp = [];
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                if(matrix[i][j]==0) {
                    temp.push({i:i,j:j});
                }
            }
        }
        let n = Math.floor(Math.random()*temp.length);
        if(temp.length>0){
            Game.matrix[temp[n].i][temp[n].j] = 2;
            Game.step=true
            this.checkWinner();
            this.add();
        }else {
            Game.matrix = [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
            this.add();
        }
    }

    checkWinner() {
        let matrix = Game.matrix;
        let temp = []
        // glxavor ankuynagic
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix.length;j++){
                if(i==j) {
                    temp.push(matrix[i][j])
                }
            }
        }
        let t = temp.every(x=>x ==1)
        if(t) {
            alert('Win X')
            return;
        }
        t = temp.every(x=>x ==2)
        if(t) {
            alert('Win O')
            return;
        }
        temp = []
        // horizonakan 
        outlooper:
        for(let i=0;i<matrix.length;i++){
            let t = []
            for(let j=0;j<matrix[i].length;j++){
                t.push(matrix[i][j])
            }
            temp.push(t);
        }
        for(let i=0;i<temp.length;i++){
            if(temp[i].every(x=>x===1)){
                alert('Win X');
                return;
            }else if(temp[i].every(x=>x===2)){
                alert('Win O');
                return;
            }
        }
        // uxahayac stugum 
        temp = []
        for(let i=0;i<matrix.length;i++){
            let t = []
            for(let j=0;j<matrix[i].length;j++){
                t.push(matrix[j][i])
            }
            temp.push(t)
        }
        for(let i=0;i<temp.length;i++){
            if(temp[i].every(x=>x===1)){
                alert('Win X')
                return;
            }else if(temp[i].every(x=>x===2)){
                alert('Win O')
                return;
            }
        }
        // ojandak ankyunagic
        temp = [] 
        for(let i=0;i<matrix.length;i++){
            temp.push(matrix[i][matrix.length-i-1]);
        }
        if(temp.every(x=>x===1)){
            alert('Win X');
            return;
        }else if(temp.every(x=>x===2)){
            alert('Win O');
            return;
        }
    }
}

let obj = new Game()
