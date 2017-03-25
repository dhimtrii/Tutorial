var Stack = function () {
    this.top = null;
    this.size = 0;
}

var Node = function(data) {
    this.data = data;
    this.previous = null;
}


Stack.prototype.push = function(data) {
    var node = new Node(data);
    
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
}


Stack.prototype.pop = function() {
    temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
}





//Another Implementation
/*
*   Stack implementation in JavaScript
*/

function Stack(){
    this.top = null;
    this.count = 0;

    this.GetCount = function(){
        return this.count;
    }

    this.GetTop = function(){
        return this.top;
    }

    this.Push = function(data){
        var node = {
            data : data,
            next : null
        }

        node.next = this.top;
        this.top = node;

        this.count++;
    }

    this.Peek = function(){
        if(this.top === null){
            return null;
        }else{
            return this.top.data;
        }
    }

    this.Pop = function(){
        if(this.top === null){
            return null;
        }else{
            var out = this.top;
            this.top = this.top.next;
            if(this.count>0){
                this.count--;
            }

            return out.data;
        }
    }

    this.DisplayAll = function(){
        if(this.top === null){
            return null;
        }else{
            var arr = new Array();

            var current = this.top;
            //console.log(current);
            for(var i = 0;i<this.count;i++){
                arr[i] = current.data;
                current = current.next;
            }

            return arr;
        }
    }
}