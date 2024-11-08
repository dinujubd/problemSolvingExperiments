class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  
  const reverse = function(head) {
    var prev = null;
    var curr = head;
    while(curr) {   
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
  
    return prev;
  };


  module.exports = {
      Node,
      reverse,
  }
  
  