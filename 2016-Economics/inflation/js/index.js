//Sign of a number
Math.sig = function(n) { return n == 0 ? 0 : n > 0 ? 1 : -1; };

function getTransform(from, to)
{
  var A = [], i;
  for(i = 0; i < 4; i++)
  {
    A.push([from[i].x, from[i].y, 1, 0, 0, 0, -from[i].x * to[i].x, -from[i].y * to[i].x]);
    A.push([0, 0, 0, from[i].x, from[i].y, 1, -from[i].x * to[i].y, -from[i].y * to[i].y]);
  }
  var b = [];
  for(i = 0; i < 4; i++)
  {
    b.push(to[i].x);
    b.push(to[i].y);
  }
  //Uses numericjs to solve matrices equations
  //returns h knowing A and b where A.h = b
  var h = numeric.solve(A, b);
  //Column major representation
  return [[h[0], h[3], 0, h[6]],
          [h[1], h[4], 0, h[7]],
          [   0,    0, 1,    0],
          [h[2], h[5], 0,    1]];
}

function flatten(a)
{
  return a.reduce(function(a, b) { return a.concat(b); });
}

function applyTransform(elm, matrix)
{
  if(!elm) return;
  if(!matrix)
  {
    elm.style.transform = '';
  }
  else
  {
    elm.style.transform = 'matrix3d('+flatten(matrix).map(function(e){ return e.toFixed(20); }).join(',')+')';
  }
}

function getCell(row, col) { return document.getElementById('cell_'+row+'_'+col); }

var matrices;
//fill transform matrices
(function()
{
  
  // CHANGE THIS TO CHANGE "ZOOM" QUANTITY
  var f = 0.15;
  
  var first_cell = getCell(1,1),
      w = first_cell.offsetWidth,
      h = first_cell.offsetHeight,
      fw = f * w,
      fh = f * h;
  
  //The way to get matrices I was using at first
  
  /*var orig = [{x:0,y:0},{x:w,y:0},{x:w,y:h},{x:0,y:h}];
  matrices = [];
  matrices[-1] = [];
  matrices[-1][-1] = getTransform(orig, [{x: 0 ,y: 0 },{x:w   ,y: 0 },{x:w-fw,y:h-fh},{x:0  ,y:h   }]);
  matrices[-1][ 0] = getTransform(orig, [{x: 0 ,y: 0 },{x:w   ,y: 0 },{x:w+fw,y:h-fh},{x:-fw,y:h-fh}]);
  matrices[-1][ 1] = getTransform(orig, [{x: 0 ,y: 0 },{x:w   ,y: 0 },{x:w   ,y:h   },{x: fw,y:h-fh}]);
  matrices[ 0] = [];
  matrices[ 0][-1] = getTransform(orig, [{x: 0 ,y: 0 },{x:w-fw,y:-fh},{x:w-fw,y:h+fh},{x:0  ,y:h   }]);
  matrices[ 0][ 0] = getTransform(orig, [{x:-fw,y:-fh},{x:w+fw,y:-fh},{x:w+fw,y:h+fh},{x:-fw,y:h+fh}]);
  matrices[ 0][ 1] = getTransform(orig, [{x: fw,y:-fh},{x:w   ,y: 0 },{x:w   ,y:h   },{x: fw,y:h+fh}]);
  matrices[ 1] = [];
  matrices[ 1][-1] = getTransform(orig, [{x: 0 ,y: 0 },{x:w-fw,y: fh},{x:w   ,y:h   },{x:0  ,y:h   }]);
  matrices[ 1][ 0] = getTransform(orig, [{x:-fw,y: fh},{x:w+fw,y: fh},{x:w   ,y:h   },{x:0  ,y:h   }]);
  matrices[ 1][ 1] = getTransform(orig, [{x: fw,y: fh},{x:w   ,y: 0 },{x:w   ,y:h   },{x:0  ,y:h   }]);*/
  //return;
  
  
  //Longer and less understandable method
  //But looks way cooler

  //Original set of point
  function getOrig()
  {
    return [{x: 0, y: 0},
            {x: w, y: 0},
            {x: 0, y: h},
            {x: w, y: h}];
  }
  var orig = getOrig(),
      target;
  var i, j, k;
  matrices = [];
  for(j = -1; j <= 1; j++)
  {
    matrices[j] = [];
    for(i = -1; i <= 1; i++)
    {
      //Get a copy of orig
      target = getOrig();
      for(k = 0; k < 4; k++)
      {
        //Here is the magic
        target[k].x += fw * Math.sig(1 + j + (k>>1)) * Math.sig(2 - j - (k>>1)) * ((k%2) * (i + Math.sig(i + 1) * (1 - 2*i)) + (1 - k%2) * (2*i + 2 - Math.sig(i + 1) * 3));
        target[k].y += fh * Math.sig(1 + i + (k%2)) * Math.sig(2 - i - (k%2)) * ((k>>1) * (j + Math.sig(j + 1) * (1 - 2*j)) + (1 - (k>>1)) * (2*j + 2 - Math.sig(j + 1) * 3));
      }
      matrices[j][i] = getTransform(orig, target);
    }
  }
})();

Array.prototype.forEach.call(document.querySelectorAll('.cell'), function(e,i,a) {
  var id_parts = e.id.split('_'),
      row = +id_parts[1],
      col = +id_parts[2];
  e.addEventListener('mouseout', function(event) {
    //Cancel transform
    var i, j;
    for(j = -1; j <= 1; j++)
      for(i = -1; i <= 1; i++)
        applyTransform(getCell(row+j,col+i), null);
  }, false);
  e.addEventListener('mouseover', function(event){
    var i, j;
    for(j = -1; j <= 1; j++)
      for(i = -1; i <= 1; i++)
        applyTransform(getCell(row+j,col+i), matrices[j][i]);
  }, false);
});