function abs    (x)   { return Math.abs      (x)   }
function acos   (x)   { return Math.acos     (x)   }
function acosh  (x)   { return Math.acosh    (x)   }
function asin   (x)   { return Math.asin     (x)   }
function asinh  (x)   { return Math.asinh    (x)   }
function atan   (x)   { return Math.atan     (x)   }
function atan2  (x,n) { return Math.atan2    (x,n) }
function atanh  (x)   { return Math.atanh    (x)   }
function cos    (x)   { return Math.cos      (x)   }
function cosh   (x)   { return Math.cosh     (x)   }
function exp    (x)   { return Math.exp      (x)   }
function log    (x)   { return Math.log      (x)   }
function random (x)   { return Math.random   (x)   }
function sin    (x)   { return Math.sin      (x)   }
function sinh   (x)   { return Math.sinh     (x)   }
function sqrt   (x)   { return Math.sqrt     (x)   }
function tan    (x)   { return Math.tan      (x)   }
function tanh   (x)   { return Math.tanh     (x)   }

var PI = Math.PI;
var E = Math.E;

const img = new Image();   // Create new img element
img.src = "img/5.png";
var ectx;
var ctx;
function drawExc()
{
    ectx = document.getElementById("excepted").getContext("2d");
    ectx.drawImage(img, 0, 0,ectx.canvas.width,ectx.canvas.height);    
}

function Hash(string) 
{
    var tmp = string;
    string='';
    for(var i = 0; i < tmp.length; i++) 
    { 
        if(tmp[i] != ' ')
        {
            string += tmp[i];
        }
    }
    var hash = 0;
    if (string.length == 0) return hash;
    for (var x = 0; x <string.length; x++) 
    {
        ch = string.charCodeAt(x);
            hash = ((hash <<5) - hash) + ch;
            hash = hash & hash;
        }
    return hash;
}

function fun1(x) 
{
    return eval(document.getElementById("exprsn").value);  
}

function showAxes(ctx,axes) 
{
    var x0=axes.x0, w=ctx.canvas.width;
    var y0=axes.y0, h=ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(16,16,16)"; 
    ctx.moveTo(xmin,y0); 
    ctx.lineTo(w,y0);  // X axis
    ctx.moveTo(x0,0);    
    ctx.lineTo(x0,h);  // Y axis
    ctx.stroke();
}

function funGraph (ctx,axes,func,color,thick) 
{
    var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
    var iMax = Math.round((ctx.canvas.width - x0) / dx);
    var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;
    for (var i = iMin;i <= iMax;++i) 
    {
        xx = dx * i;
        yy = scale*.5 * func(xx / scale);
        if(i == iMin) ctx.moveTo(x0 + xx,y0 - yy);
        else ctx.lineTo(x0 + xx,y0 - yy);
    }
    ctx.stroke();
}

function draw()
{
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;

    var axes={};
    ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
    axes.scale = 15;                 // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(ctx,axes);
    funGraph(ctx,axes,fun1,"rgb(255,64,64)",2);
}

function checkHash()
{
    setTimeout(()=>{
        if(ctx.canvas.toDataURL() == ectx.canvas.toDataURL())
        {
            alert("А я всё думал когда же ты появишься!");
            window.location = "-1566774400.html";
        }
    },
    500);
}
