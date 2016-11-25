function NextGen(cells) {
    this.height = cells.length;
    this.width = cells[0].length;
    this.cells = cells;
}

NextGen.prototype.step = function() {
    let boardArray = [];
    for (let h = 0; h < this.height; h++) {
        let currentRow = [];
        for (let w = 0; w < this.width; w++) {
            currentRow.push(this.isAlive(w, h));
        }
        boardArray.push(currentRow);
    }
    return boardArray;
};

NextGen.prototype.inBounds = function(height, width) {
    return this.cells[height] !== undefined && this.cells[width] !== undefined;
};

NextGen.prototype.isAlive = function(width, height) {
    let currentElementStatus = this.cells[height][width];
    let counter = 0;
    for (var h = -1; h < 2; h++) {
        for(var w = -1; w < 2; w++) {
            if (!(h === 0 && w === 0) && this.inBounds((height + h), (width + w))) {
                var elementRow = this.cells[height + h];
                var element = elementRow[width + w];
                if (element === 1) {
                    counter++;
                }
            }
        }
    }

    if (currentElementStatus === 1) {
        if (counter > 1 && counter < 4) {
            return 1;
        }
    } else {
        if (counter === 3) {
            return 1;
        }
    }
    return 0;
};

function nextGen(cells) {
    if (cells.length === 0) {
        return [];
    }
    const theNextGen = new NextGen(cells);
    return theNextGen.step();
}


const cells = [[0,0,0],[1,1,1],[0,0,0]];
console.log(nextGen(cells));
