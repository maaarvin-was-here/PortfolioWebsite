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
    [canvasWidth/3.5, 125], //2
    [canvasWidth - canvasWidth/3.5, 125], //3
    [canvasWidth/6.5, 250], //4
    [canvasWidth/2.75, 250], //5
    [canvasWidth - canvasWidth/2.75, 250], //6
    [canvasWidth - canvasWidth/6.5, 250], //7
    [canvasWidth/12, 400], //8
    [canvasWidth/5, 400], //9
    [canvasWidth/3.25, 400], //10
    [canvasWidth/2.4, 400], //11
    [canvasWidth - canvasWidth/2.4, 400], //12
    [canvasWidth - canvasWidth/3.25, 400], //13
    [canvasWidth - canvasWidth/5, 400], //14
    [canvasWidth - canvasWidth/12, 400] //15

];

// ctx.arc(x coord, y coord, radius, start angle, end angle)

function loadcanvas(){
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
        numberOfNodes = 1;

        for(i = 0; i < 16; i++){
            nodeArray[i] = null;
        }
        root = createNode(1, numberOfNodes);

    
    
        connectNodes(ctx, root);
        drawTree(ctx, root);
        
        statusText.innerHTML = "Root Node Initialized";
    }
}


class Node {
    constructor(id, number){
        this.id = id;
        this.left = null;
        this.right = null;
        this.x = nodeCoordinates[id - 1][0];
        this.y = nodeCoordinates[id - 1][1];
        this.number = number;
        
        this.radius = 30;
        
        if(id > 7){
            this.isLeaf = true;
        } else {
            this.isLeaf = false;
        }
    }

    leftButton(x, y){
        if(x > this.x || x < this.x - 30){
            return false;
        }
        if(y < this.y || y > this.y + 30){
            return false;
        }
        return true;
    }
    
    rightButton(x, y){
        if(x > this.x + 30 || x < this.x){
            return false;
        }
        if(y < this.y || y > this.y + 30){
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
        drawLeftQuarter(ctx, currentNode.id - 1);
    } else {
        drawTree(ctx, currentNode.left);
    }
    
    
    if (currentNode.right == null){
        drawRightQuarter(ctx, currentNode.id - 1);
    } else {
        drawTree(ctx, currentNode.right);
    }
}

function drawLeftQuarter(ctx, n){
    ctx.moveTo((nodeCoordinates[n][0] - 30),(nodeCoordinates[n][1]));
    ctx.lineTo((nodeCoordinates[n][0]),(nodeCoordinates[n][1]));
    
    ctx.moveTo((nodeCoordinates[n][0]), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0]), nodeCoordinates[n][1] + 30);
    
    ctx.stroke();
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "12px Trebuchet MS";
    ctx.fillText("L", nodeCoordinates[n][0] - 15, nodeCoordinates[n][1] + 18);
}

function drawRightQuarter(ctx, n){
    ctx.moveTo((nodeCoordinates[n][0] + 30),(nodeCoordinates[n][1]));
    ctx.lineTo((nodeCoordinates[n][0]),(nodeCoordinates[n][1]));
    
    ctx.moveTo((nodeCoordinates[n][0]), nodeCoordinates[n][1]);
    ctx.lineTo((nodeCoordinates[n][0]), nodeCoordinates[n][1] + 30);
    
    ctx.stroke();
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = "12px Trebuchet MS";
    ctx.fillText("R", nodeCoordinates[n][0] + 10, nodeCoordinates[n][1] + 18);
}

canvas.addEventListener('click', e => {
    var x = e.offsetX,
        y = e.offsetY;
    
    ctx = canvas.getContext('2d');
    
    for(i = 0; i < nodeArray.length; i++){
        if(nodeArray[i] != null){
            temp = nodeArray[i].leftButton(x, y);
            if(temp && nodeArray[i].left == null && !nodeArray[i].isLeaf){
                nodeArray[i].left = createNode((2 * nodeArray[i].id), numberOfNodes += 1);
                
                statusText.innerHTML = "New node added as left child of node " + nodeArray[i].number;
            }
            temp2 = nodeArray[i].rightButton(x, y);
            if(temp2 && nodeArray[i].right == null && !nodeArray[i].isLeaf){
                nodeArray[i].right = createNode((2 * nodeArray[i].id) + 1, numberOfNodes += 1);
                statusText.innerHTML = "New node added as right child of node " + nodeArray[i].number;
            }        
        } 
    }
    if(numberOfNodes == 15){
        statusText.innerHTML = "No nodes left to add, click 'clear' to reset the tree";
    }
});

canvas.addEventListener('mousemove', e => {
    var x = e.offsetX,
        y = e.offsetY;
    
    temp = false;
    temp2 = false;
    ctx = canvas.getContext('2d');
    
    for(i = 0; i < nodeArray.length; i++){
        if(nodeArray[i] != null){
            temp = nodeArray[i].leftButton(x, y);

            if(temp && nodeArray[i].left == null && !nodeArray[i].isLeaf){
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.arc(nodeArray[i].x, nodeArray[i].y, 40, (1/2) * Math.PI, Math.PI);
                ctx.stroke();
                break;
            }
            temp2 = nodeArray[i].rightButton(x, y);
            if(temp2 && nodeArray[i].right == null && !nodeArray[i].isLeaf){
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.beginPath();
                ctx.arc(nodeArray[i].x, nodeArray[i].y, 40, 0, (1/2) * Math.PI);
                ctx.stroke();
                break;
            }
        }
    }
    if(temp == false && temp2 == false){
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
    
    if(currentNode.right != null){
        ctx.beginPath();
        ctx.moveTo(nodeCoordinates[currentNode.id - 1][0], nodeCoordinates[currentNode.id - 1][1]);
        ctx.lineTo(nodeCoordinates[(2 * currentNode.id)][0], nodeCoordinates[(2 * currentNode.id)][1]);
        ctx.stroke();
        connectNodes(ctx, currentNode.right);
    }
}




loadcanvas(); // go to loadcanvas


/*ctx.arc(canvasWidth/3.5, 125, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/3.5, 125, 30, 0, 2*Math.PI);

    ctx.arc(canvasWidth/6.5, 250, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth/2.75, 250, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/6.5, 250, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/2.75, 250, 30, 0, 2*Math.PI);
    
    ctx.arc(canvasWidth/12, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth/5, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth/3.25, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth/2.4, 400, 30, 0, 2*Math.PI);
    
    ctx.arc(canvasWidth - canvasWidth/12, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/5, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/3.25, 400, 30, 0, 2*Math.PI);
    ctx.arc(canvasWidth - canvasWidth/2.4, 400, 30, 0, 2*Math.PI);
    */

/*

function stepForward(){
    if (currentNode < numberOfNodes || (currentNode == 1 && numberOfNodes == 1)){
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            
            connectNodes(ctx);
            drawTree(ctx);
            
            if (openlist.length > 0){   //while open list is not empty
                
                currentNode = openlist.shift();                
                
                var c1 = getLeftChild(currentNode);     //get first child
                var c2 = getRightChild(currentNode);    //get second child
                
                closedlist.push(currentNode);   //push current node to closed list
                closedListObject.innerHTML = closedlist.join();
                
                var newopennodes = "No nodes";
                
                if (c1 != -1){
                    openlist.push(c1);  //push first child to open list
                    newopennodes = c1.toString();
                }
                if (c2 != -1){
                    openlist.push(c2);  //push second child to open list
                    newopennodes += " and " + c2;
                }
                
                
                statusText.innerHTML = currentNode + " moved to CLOSED — " + newopennodes + " moved to OPEN";
                
                openListObject.innerHTML = openlist.join();
            } 
            if (numberOfNodes == 1){
                numberOfNodes--;
            }
        }  
    } else {
        statusText.innerHTML = "Enter new number of nodes to start over";
    }
}

*/
