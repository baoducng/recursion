// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
//length of an object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    var result, temp, size, count =0;
    //if array
    if (Array.isArray(obj)){
        if (obj.length === 0){return '[]'}
        else{
            result = '[';
            for (var i =0; i < obj.length; i++){
                //feed the function back in here
                result += stringifyJSON(obj[i]);
                if ( i < obj.length - 1) {result += ','}
                }
            result += ']';
            return result;
        }
    }

    //if object
    else if (typeof obj === "object"){
        //write an function to check if object is null
        if (!obj){
            return 'null'
        }
        else{
            size = Object.size(obj);
            result = '{';

            for (var key in obj){
                if (typeof obj[key] === "function" || key === "undefined" ){ result += ''}
                else {result += ('"' + key + '":');
                result += (stringifyJSON(obj[key]));
                count ++;
                if(count < size){result += ','}}
            }
        result += '}';
        return result;
        }
    }

    //if number, string, undefined => easy
    else if (typeof obj === "number" || typeof obj === "boolean"){
        temp = obj.toString();
        return temp;
    }

    else if (typeof obj === "string"|| typeof obj === "undefined"){
        temp = '"' + obj + '"';
        return temp;
    }
};

