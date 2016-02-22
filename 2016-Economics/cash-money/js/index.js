TweenMax.set(".line", {drawSVG:0, alpha:0});
TweenMax.set(".curved-line", {drawSVG:0, alpha:0});

var tl = new TimelineMax({repeat:-1, yoyo:true, delay:0.5, repeatDelay:2.5});
tl.to(".curved-line", 3, {drawSVG:"true", ease:Expo.easeInOut}, "curved");
tl.to(".curved-line", 1, {alpha:1, ease:Quad.easeInOut}, "curved");
tl.to(".line", 1, {drawSVG:"100%", ease:Expo.easeInOut}, "line");
tl.to(".line", 0.5, {alpha:1, ease:Quad.easeInOut}, "line");
tl.play();