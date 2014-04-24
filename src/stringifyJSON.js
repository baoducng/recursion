// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    var result, temp;
    //if array
    if (Array.isArray(obj)){
        if (obj.length === 0){return '[]'}
        else{
            result = '[';
            for (var i =0; i < obj.length; i++){
                //feed the function back in here
                result.concat(stringifyJSON(obj[i]))
                }
            result.concat(']');
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

            result = '{';
            //process that property in the object, and then remove that property?
            //use splice to insert into the middle of the string.
            //delete the object
            for (var key in obj){
                result.concat('"' + key + '":');
                result.concat(stringifyJSON(obj[key]));
            }
        result.concat('}');
        return result;
        }
    }

    //if number, string, undefined => easy
    else if (typeof obj === "number" || typeof obj === "boolean"){
        temp = obj.toString();
        return temp;
    }
    /*
    else if (typeof obj === "boolean"){
        temp = obj.toString();
        return temp;
    }
    */
    else if (typeof obj === "string"|| typeof obj === "undefined"){
        temp = '"' + obj + '"';
        return temp;
    }
};

var test1 = Array.isArray([]);
var test = JSON.stringify('Hello World');
console.log(test1);