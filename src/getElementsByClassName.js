// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var results = [];
   function getClass(nodeList){
     var childList = nodeList.children;
     childList.forEach(function(node) {
     //1st level body check
      // **Here, only include the element if Array#every is true,
      // **where you give Array#every a function that does your
      // classList.contains on the name for that iteration
      if(node.classList  && node.classList.contains(className)){
        results.push(node);
      }

      //has children, recurse
      if(node.children) {
        results = results.concat(getClass(node));
      }
    });
   }
   getClass(document.body);
   return results;
  
};
