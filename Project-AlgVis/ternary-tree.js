var canvas = document.getElementById('graphcanvas');
var statusText = document.getElementById('status-paragraph');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var nodeArray = [];
var numberOfNodes = 1;

var root;

var openlist = [];
var closedlist = [];

var nodeCoordinates = [
    [canvasWidth/2, 50], //1
    
    [canvasWidth/5, 200], //2
    [canvasWidth/2, 200], //3
    [canvasWidth - canvasWidth/5, 200], //4
    
    [canvasWidth/9.4, 400], //5
    [canvasWidth/5, 400], //6
    [canvasWidth/3.4, 400], //7
    
    [canvasWidth/2.45, 400], //8
    [canvasWidth/2, 400], //9
    [canvasWidth - canvasWidth/2.45, 400], //12
    
    [canvasWidth - canvasWidth/3.4, 400], //13
    [canvasWidth - canvasWidth/5, 400], //14
    [canvasWidth - canvasWidth/9.5, 400] //15

];

// ctx.arc(x coord, y coord, radius, start angle, end angle)

function loadcanvas(){
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
        numberOfNodes = 1;

        for(i = 0; i < 14; i++){
            nodeArray[i] = null;
        }
        root = createNode(1, numberOfNodes);

        drawTreeTest(ctx);
    
        //connectNodes(ctx, root);
        //drawTree(ctx, root);
        
        statusText.innerHTML = "Root Node Initialized";
    }
}

function drawTreeTest(ctx){
    for(i = 0; i < nodeCoordinates.length; i++){
        ctx.fillStyle = 'rgb(225, 175, 238)';
        ctx.beginPath();
        ctx.arc((nodeCoordinates[i][0]), nodeCoordinates[i][1], 30, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

class Node {
    constructor(id, number){
        this.id = id;
        this.left = null;
        this.middle = null;
        this.right = null;
        this.x = nodeCoordinates[id - 1][0];
        this.y = nodeCoordinates[id - 1][1];
        this.number = number;
        
        this.radius = 30;
        
        if(id > 4){
            this.isLeaf = true;
        } else {
            this.isLeaf = false;
        }
    }

    leftButton(x, y){
        if(x > this.x - 10 || x < this.x - 30){
            return false;
        }
        if(y < this.y || y > this.y + 27){
            return false;
        }
        return true;
    }
    
    middleButton(x, y){
        if(x > this.x + 10 || x < this.x - 10){
            return false;
        }
        if(y < this.y || y > this.y + 30){
            return false;
        }
        return true;
    }
    
    rightButton(x, y){
        if(x > this.x + 30 || x < this.x + 10){
            return false;
        }
        if(y < this.y || y > this.y + 27){
            return false;
        }
        return true;
    }
}

function createNode(id, number){
    var temp_node = new Node(id, number);
    nodeArray[id] = temp_node;
    return temp_node;
}

function drawTree(ctx, node){
    var currentNode = node;

    ctx.fillStyle = 'rgb(225, 175, 238)';
    ctx.beginPath();
    ctx.arc((nodeCoordinates[currentNode.id - 1][0]), nodeCoordinates[currentNode.id - 1][1], 30, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    
    
    if(node.isLeaf){
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.font = "18px Trebuchet MS";
        ctx.fillText(currentNode.number, nodeCoordinates[currentNode.id - 1][0] - 5, nodeCoordinates[currentNode.id - 1][1] + 7);
        return;
    }
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "18px Trebuchet MS";
    ctx.fillText(currentNode.number, nodeCoordinates[currentNode.id - 1][0] - 5, nodeCoordinates[currentNode.id - 1][1] - 8);
    
    if (currentNode.left == null){
        drawLeftSlice(ctx, currentNode.id - 1);
    } else {
        drawTree(ctx, currentNode.left);
    }
    
    if (currentNode.middle == null){
        drawCenterSlice(ctx, currentNode.id - 1);
    } else {
        drawTree(ctx, currentNode.middle);
    }
    
    if (currentNode.right == null){
        drawRightSlice(ctx, currentNode.id - 1);
    } else {
        drawTree(ctx, currentNode.right);
    }
}

function drawCenterSlice(ctx, n){
    ctx.moveTo((nodeCoordinates[n][0] - 10),(nodeCoordinates[n][1]));
    ctx.lineTo((nodeCoordinates[n][0] + 10),(nodeCoordinates[n][1]));
    
    ctx.moveTo((nodeCoordinates[n][0] - 10), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0] - 10), nodeCoordinates[n][1] + 27);
    
    ctx.moveTo((nodeCoordinates[n][0] + 10), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0] + 10), nodeCoordinates[n][1] + 27);
    
    ctx.stroke();
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "12px Trebuchet MS";
    ctx.fillText("M", nodeCoordinates[n][0] - 4, nodeCoordinates[n][1] + 20);
}

function drawLeftSlice(ctx, n){
    ctx.moveTo((nodeCoordinates[n][0] - 30),(nodeCoordinates[n][1]));
    ctx.lineTo((nodeCoordinates[n][0] - 10),(nodeCoordinates[n][1]));
    
    ctx.moveTo((nodeCoordinates[n][0] - 10), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0] - 10), nodeCoordinates[n][1] + 27);
    
    ctx.stroke();
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "12px Trebuchet MS";
    ctx.fillText("L", nodeCoordinates[n][0] - 22, nodeCoordinates[n][1] + 15);
}

function drawRightSlice(ctx, n){
    ctx.moveTo((nodeCoordinates[n][0] + 30),(nodeCoordinates[n][1]));
    ctx.lineTo((nodeCoordinates[n][0] + 10),(nodeCoordinates[n][1]));
    
    ctx.moveTo((nodeCoordinates[n][0] + 10), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0] + 10), nodeCoordinates[n][1] + 27);
    
    ctx.stroke();
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "12px Trebuchet MS";
    ctx.fillText("R", nodeCoordinates[n][0] + 15, nodeCoordinates[n][1] + 15);
}


canvas.addEventListener('click', e => {
    var x = e.offsetX,
        y = e.offsetY;
    
    ctx = canvas.getContext('2d');
    
    for(i = 0; i < nodeArray.length; i++){
        if(nodeArray[i] != null){
            temp = nodeArray[i].leftButton(x, y);
            if(temp && nodeArray[i].left == null && !nodeArray[i].isLeaf){
                nodeArray[i].left = createNode((3 * nodeArray[i].id) - 1, numberOfNodes += 1);
                
                statusText.innerHTML = "New node added as left child of node " + nodeArray[i].number;
            }
            temp2 = nodeArray[i].middleButton(x, y);
            if(temp2 && nodeArray[i].middle == null && !nodeArray[i].isLeaf){
                nodeArray[i].middle = createNode((3 * nodeArray[i].id), numberOfNodes += 1);
                statusText.innerHTML = "New node added as middle child of node " + nodeArray[i].number;
            }
            
            temp3 = nodeArray[i].rightButton(x, y);
            if(temp3 && nodeArray[i].right == null && !nodeArray[i].isLeaf){
                nodeArray[i].right = createNode((3* nodeArray[i].id) + 1, numberOfNodes += 1);
                statusText.innerHTML = "New node added as right child of node " + nodeArray[i].number;
            }
        
        } 
    }
    if(numberOfNodes == 13){
        statusText.innerHTML = "No nodes left to add, click 'clear' to reset the tree";
    }
});

canvas.addEventListener('mousemove', e => {
    var x = e.offsetX,
        y = e.offsetY;
    
    temp = false;
    temp2 = false;
    temp3 = false;
    ctx = canvas.getContext('2d');
    
    for(i = 0; i < nodeArray.length; i++){
        if(nodeArray[i] != null){
            temp = nodeArray[i].leftButton(x, y);
            if(temp && nodeArray[i].left == null && !nodeArray[i].isLeaf){
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.arc(nodeArray[i].x, nodeArray[i].y, 40, (2/3) * Math.PI, Math.PI);
                ctx.stroke();
                break;
            }
            temp2 = nodeArray[i].middleButton(x, y);
            if(temp2 && nodeArray[i].middle == null && !nodeArray[i].isLeaf){
                
                console.log("middle");
                
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.arc(nodeArray[i].x, nodeArray[i].y, 40, (1/3) * Math.PI, (2/3) * Math.PI);
                ctx.stroke();
                break;
                
            }
            
            temp3 = nodeArray[i].rightButton(x, y);
            if(temp3 && nodeArray[i].right == null && !nodeArray[i].isLeaf){
                console.log("right");
                
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.arc(nodeArray[i].x, nodeArray[i].y, 40, 0, (1/3) * Math.PI);
                ctx.stroke();
                break;
            }
        }
    }
    if(temp == false && temp2 == false && temp3 == false){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); 
    }
    connectNodes(ctx, root);
    drawTree(ctx, root);
    
});

function connectNodes(ctx, node){
    var currentNode = node;
    
    if(node.isLeaf){
        return;
    }
    
    if(currentNode.left != null){
        ctx.beginPath();
        ctx.moveTo(currentNode.x, currentNode.y);
        ctx.lineTo(currentNode.left.x, currentNode.left.y);
        ctx.stroke();
        connectNodes(ctx, currentNode.left);
    }
    
    if(currentNode.middle != null){
        ctx.beginPath();
        ctx.moveTo(currentNode.x, currentNode.y);
        ctx.lineTo(currentNode.middle.x, currentNode.middle.y);
        ctx.stroke();
        connectNodes(ctx, currentNode.middle);
    }
    
    if(currentNode.right != null){
        ctx.beginPath();
        ctx.moveTo(nodeCoordinates[currentNode.id - 1][0], nodeCoordinates[currentNode.id - 1][1]);
        ctx.lineTo(currentNode.right.x, currentNode.right.y);
        ctx.stroke();
        connectNodes(ctx, currentNode.right);
    }
}




loadcanvas();