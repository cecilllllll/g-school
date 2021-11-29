
function colorChange() {
  var color = ["#ffffff", "#FF8299", "#FF8C00", "#FFFF00", "#50BCDF", "#BFFF00"];
  var num = Math.floor(Math.random() * color.length);
  var bodyTag = document.getElementById("all");
  bodyTag.style.backgroundColor = color[num];
}