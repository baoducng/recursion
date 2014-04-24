// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    var result, temp;
    //use typeof
    //if object
    if (typeof obj === "object"){
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
        //write an function to check if object is null
    }
    //if array
    else if (typeof obj === "array"){
        result = '[';
        for (var i =0; i < obj.length; i++){
            //feed the function back in here
            result.concat(stringifyJSON(obj[i]))
        }
        result.concat(']');
        return result;
    }

    //if number, string, undefined => easy
    else if (typeof obj === "number"){
        temp = "'" + obj + "'";
        return temp;
    }
    else {// (typeof obj === "string" || typeof obj === "boolean" || typeof obj === "undefined"){
        temp = (typeof obj);
        return temp;
    }
};
