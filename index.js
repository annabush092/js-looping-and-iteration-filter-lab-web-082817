// Code your solution in this file
function findMatching(driverArray, namestr) {
  return driverArray.filter(
    function(name){
      return name.toLowerCase() === namestr.toLowerCase();
    }
  )
}

function fuzzyMatch(driverArray, beginwith) {
  return driverArray.filter(
    function(name){
      return name.startsWith(beginwith);
    }
  )
}

function matchName(driverObjectArray, str) {
  return driverObjectArray.filter(
    function(obj){
        return obj['name'] === str;
    }
  )
}
