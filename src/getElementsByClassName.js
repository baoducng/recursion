// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var result = [];
  var currentNode = document.body;
  var storage;

    function checkNode(node){
        if (node.classList){ //added this here because of the undefined error (cannot called contains of undefined)
            if(node.classList.contains(className)){result.push(node)}
            if (node.hasChildNodes()){
                storage = node.childNodes;
                for (var i =0; i < storage.length; i++){
                    console.log(storage[i]);
                    checkNode(storage[i]);//recursion Q: is the storage variable affected in this case during recursion? does it get overide?
                }
            }
        }
    }
    checkNode(currentNode);
    return result;
};





/*
 function check(node){
 if (node.hasChildNodes()){ //see if they have childNode.
 storage = node.childNodes;
 //go through all the childNode
 console.log(storage);
 for (var i = 0; i < storage.length; i++){
 // look at classList
 if (storage[i].classList){ //i did this because i was getting the undefined error
 //check if className is in classlist
 //console.log(storage[i].classList);
 //console.log(storage[i].classList.contains(className));//nothing contains className?
 if (storage[i].classList.contains(className)){//problem with contains.
 result.push(storage[i]);
 }
 check(storage[i]);
 }
 }
 }
 }
 check(currentNode);
 */
