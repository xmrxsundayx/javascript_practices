var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                          [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                          [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                          [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                          [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                          [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                          [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                          [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                          [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                          [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
  var dojoDiv = document.querySelector("#the-dojo");
  var xBox
  var yBox


function render(theDojo) {
  var result = [];
  for(var x=0; x<theDojo.length; x++) {
    for(var y=0; y<theDojo[x].length; y++) {
      result += `<button class="tatami" onclick="howMany(${y}, ${x}, this)"></button>`;
    }
    xBox = result.x
    yBox = result.y
  }
  return result;
}

function howMany(x, y, element) {
  tl = theDojo[y-1]
      ?theDojo[y-1][x-1]
      ?theDojo[y-1][x-1] :0 
      :0;

  t = theDojo[y-1]
      ?theDojo[y-1][x]
      :0;

  tr =theDojo[y-1]
      ?theDojo[y-1][x+1]
      ?theDojo[y-1][x+1] :0 
      :0;

  r = theDojo[y][x+1]||0

  br =theDojo[y+1]
      ?theDojo[y+1][x+1]
      ?theDojo[y+1][x+1] :0 
      :0;

  b= theDojo[y+1]
      ?theDojo[y+1][x]
      :0;

  bl =theDojo[y+1]
      ?theDojo[y+1][x-1]
      ?theDojo[y+1][x-1] :0 
      :0;

  l = theDojo[y][x-1]||0



  console.dir({tl, t, tr, r, br, b, bl, l, x, y})
  totalNinja = tl+t+ tr+ r+ br+ b+ bl+ l
  console.log(totalNinja)
  element.innerText=totalNinja
  } 

var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
console.table(theDojo);
 
dojoDiv.innerHTML = render(theDojo);    

