var Board = function (columns, rows) {
  
    var board = [];
    var group = game.add.group();
    
    for (var y=0; y<rows; y++) {
        var row = [];
 
        for (var x=0; x<columns; x++) {
            var tile = new Tile(x, y, group);
            row.push(tile);
        }
        
        board.push(row);
    }
    
    this.moveTo = function (x, y) {
      group.x = x;
      group.y = y;
    };
    
    var getRandomTile = function () {
        var randomRow = Math.floor(Math.random()*rows);
        var randomColumn = Math.floor(Math.random()*columns);

        var tile = board[randomRow][randomColumn];
        return tile;
    };
    
    var setMines = function () {
        var tile = getRandomTile();
        
        for (var i=0; i<mines; i++) {
            while(tile.getValue() == tile.states.MINE) {
                tile = getRandomTile();
            }
            
            tile.setValue(tile.states.MINE);
        } 
    };
}
