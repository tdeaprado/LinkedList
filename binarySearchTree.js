    class Node{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

class BinarySearchTree {
        
    constructor(){
     this.root = null;      
    }


    insert(val){

        var newNode = new Node (val);

        if (!this.root){
             this.root = newNode;
             return this;
            }
       else{
          var current = this.root;
        
            while (true){
                if (val === current.value) return undefined;

                if (newNode.value > current.value){
                    if (!current.right) {
                        current.right= newNode;
                        return this;
                    }else{
                        current = current.right;   
                    }
                
                }
                else{
                    if (!current.left) {
                        current.left= newNode;
                        return this;
                    
                    }else{
                        current = current.left;   
                    }
                }
            }

        }

    }

    Find(value){

        if(!this.root) return false;        
        var current = this.root;
        var found= false;

        while (current && !found)
        {
            if(value < current.value){
                  current = current.left;
            }else if (value > current.value){
                  current = current.right;
            } else{  
                  found = true;
            }   
        }
        if(!found) return undefined;
        return current;
     
    }

    BFS(){
        var data = [],
            queue = [],
            node = this.root;

            queue.push(this.root);
            while(queue.length){

                node = queue.shift();
                data.push(node.value);
                if(node.left) queue.push (node.left);
                if(node.right) queue.push (node.right);
            }

            return data;

    }

    DFSpreOrder(){

        var current = this.root;
        var visited = [];
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;      
    }

    DFSpostOrder(){

        var current = this.root;
        var visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);    
        }
        traverse(current);
        return visited;      
    }

    DFSinOrder(){

        var current = this.root;
        var visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value);    
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;      
    }



    
}


    





var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

var d1 = bst.BFS();
var d2= bst.DFSpreOrder();
var d3= bst.DFSpostOrder();
var d4= bst.DFSinOrder();
console.log(d1);
console.log (d2);
console.log(d3);
console.log(d4);

  ///    10
  //  6     15
  //3  8       20







