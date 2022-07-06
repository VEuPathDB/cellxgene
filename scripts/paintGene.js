window.onload = function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const gene = urlParams.get("gene");
  const compact = urlParams.get("compact");

  if(compact === "1") {
    var temp1 = document.getElementsByClassName("container")[0].childNodes[0];
    temp1.style.gridTemplateColumns = '[left-sidebar-start] 0px [left-sidebar-end graph-start] auto [graph-end right-sidebar-start] 400px [right-sidebar-end]';
    temp1.style.minWidth = "800px";

    Array.prototype.forEach.call(document.getElementsByClassName("bp3-button-group"), function(element) { element.style.visibility="hidden" });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-popover-wrapper"), function(element) { element.style.visibility="hidden" });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-heading"), function(element) { element.style.visibility="hidden" });
    Array.prototype.forEach.call(document.getElementsByClassName("bp3-intent-primary"), function(element) { element.style.visibility="hidden" });
  }
  
  if(gene != null) {

    var els = document.getElementsByClassName("bp3-button");
    Array.prototype.forEach.call(els, function(element) {
      var id = element.getAttribute("data-testid");
      if(id === "colorby-" + gene) {
        element.click();
      }
    });

    Array.prototype.forEach.call(els, function(element) {
      var id = element.getAttribute("data-testid");
      if(id === "maximize-" + gene) {
        element.click();
      }
    });

  }
};
