module.exports = function reverse (n) {
    n = n.toString();
    console.log(n);
    n = n.split('');
     console.log(n);
    n = n.reverse();
     console.log(n);
     let res = "";
    for(let i = 0;i<n.length;i++){
      res+=n[i];
    }
     
    return parseInt(res);
}
