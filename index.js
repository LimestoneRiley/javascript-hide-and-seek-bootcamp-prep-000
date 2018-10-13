
function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget(){
 return document.getElementById('nested').querySelector('.target'); 
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list');
  
  for (let i=0; i < lis.length; i++){
   lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n ).toString();
   }
}

function deepestChild(){
  const parent = document.getElementById('grand-node').querySelectorAll('div');
  var child;
  for (let i = 0; i < parent.length; i++){
    child = parent[i];
  }
  return (child);
}