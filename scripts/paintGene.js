window.onload = function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const gene = urlParams.get("gene");
  const compact = urlParams.get("compact");

  if(compact === "1") {
    var temp1 = document.getElementsByClassName("container")[0].childNodes[0];
    temp1.style.gridTemplateColumns = '[left-sidebar-start] 0px [left-sidebar-end graph-start] auto [graph-end right-sidebar-start] 400px [right-sidebar-end]';
    temp1.style.minWidth = "800px";

    document.getElementsByClassName("bp3-button-group").forEach(element => element.style.visibility="hidden");
    document.getElementsByClassName("bp3-popover-wrapper").forEach(element => element.style.visibility="hidden");
    document.getElementsByClassName("bp3-heading").forEach(element => element.style.visibility="hidden");
    document.getElementsByClassName("bp3-intent-primary").forEach(element => element.style.visibility="hidden");
  }
  
  if(gene != null) {
    document.getElementsByClassName("bp3-button").forEach(element => {
      var id = element.getAttribute("data-testid");
      if(id === "colorby-" + gene) {
        element.click();
      }
    });
    document.getElementsByClassName("bp3-button").forEach(element => {
      var id = element.getAttribute("data-testid");
      if(id === "maximize-" + gene) {
        element.click();
      }
    });

  }
};
