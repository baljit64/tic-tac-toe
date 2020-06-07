var restart = document.querySelector("#button");
restart.addEventListener('click',clearboard);
var squares=document.querySelectorAll("td");
function clearboard(){
  for(var i=0;i< squares.length;i++){
    squares[i].textContent='';
  }
}
function mark(){
  if (this.textContent==='')
  {
    this.textContent='x';
  }
  else if (this.textContent==='x')
  {
    this.textContent='o';
  }
  else if (this.textContent==='o')
  {
    this.textContent='';
  }else{
    this.textContent='';
  }



}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",mark);
}
