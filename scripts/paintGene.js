window.addEventListener("load", function() {
  console.log("In event listener");
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const gene = urlParams.get("gene");
  const compact = urlParams.get("compact");

  if(compact === "1") {
    console.log("In compact");
    var temp1 = document.getElementsByClassName("container")[0].childNodes[0];
    temp1.style.gridTemplateColumns = '[left-sidebar-start] 0px [left-sidebar-end graph-start] auto [graph-end right-sidebar-start] 400px [right-sidebar-end]';
    temp1.style.minWidth = "800px";

    Array.prototype.forEach.call(document.getElementsByClassName("bp3-button-group"), function(element) { console.log(element); element.style.visibility="hidden"; });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-popover-wrapper"), function(element) { console.log(element); element.style.visibility="hidden"; });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-heading"), function(element) { console.log(element); element.style.visibility="hidden"; });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-intent-primary"), function(element) { console.log(element); element.style.visibility="hidden"; });
  }
  
  if(gene != null) {
    console.log("Gene declared");
    var els = document.getElementsByClassName("bp3-button");
    Array.prototype.forEach.call(els, function(element) {
      var id = element.getAttribute("data-testid");
      if(id === "colorby-" + gene) {
        console.log("Testid");
        console.log(element);
        element.click();
      }
    });

    Array.prototype.forEach.call(els, function(element) {
      var id = element.getAttribute("data-testid");
      if(id === "maximize-" + gene) {
        console.log("Maximise");
        console.log(element);
        element.click();
      }
    });

  }
});
