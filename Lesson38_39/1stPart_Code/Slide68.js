<!DOCTYPE html>
<html>
<body>
<p>This example demonstrates the difference between bubbling and capturing when adding event listeners.</p>

<div id="myDiv">
  <p id="myP">Click this paragraph, I am Bubbling.</p>
</div><br>
<div id="myDiv2">
  <p id="myP2">Click this paragraph, I am Capturing.</p>
</div>

<script>
document.getElementById("myP").addEventListener("click", function() {
    alert("You clicked the P element!");
}, false);
document.getElementById("myDiv").addEventListener("click", function() {
    alert("You clicked the DIV element - Bubbling!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the P element!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the DIV element! - Capturing");
}, true);
</script>
</body>
</html>
