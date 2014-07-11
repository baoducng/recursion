// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var currentNode = document.body;
  function checkNode(node){
    if (node.classList){
      if(node.classList.contains(className)){
        result.push(node);
      }
    }
    if (node.hasChildNodes()){
      for (var i =0; i < node.childNodes.length; i++){
        checkNode(node.childNodes[i]);
      }
    }
  }
  checkNode(currentNode);

  return result;
};
