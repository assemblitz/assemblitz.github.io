function Error(name, line){
    this.verbose = name;
    this.line = line;
}

Error.prototype.toString = function(){
    return "Error: "+this.verbose + ". Line " + this.line;
}

function Stack(cap) {
    this.cap = cap;
    this.stack = [];

    this.push = function(e) {
        if (stack.length + 1 > cap) {
            return new Error('Stack Overflow');
        } else {
            this.stack.push(e);
        }
    }

    this.pop = function(e) {
        if (stack.length == 0) {
            return new Error('Empty Stack');
        } else {
            return this.stack.pop();
        }
    }

    this.peek = function() {
        if (stack.length == 0) {
            return new Error('Stack Empty');
        } else {
            return this.stack[stack.length - 1];
        }
    }

    this.size = function(){
        return this.stack.length;
    }
}

function Command(line, command) {
    this.line = line;
    this.params = [];
    var tokens = command.split(' ');
    this.name = tokens[0];
    for (var i = 1; i < tokens.length; i++){
        if (tokens[i].length > 0) {
            this.params.push(tokens[i]);
        }
    }

    this.command = this.name +" "+ this.params.join(' ');
    this.num_of_params = function(){
        this.params.length;
    }
}

Command.prototype.toString = function() {
    return this.line +": " + this.command;
}