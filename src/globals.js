/* these will be either (preferably) specified or inferred */
export const categories = ["Sample.type", "Selection", "Location", "Sample.name", "Class", "Neoplastic"];
export const continuous = [
  "Total_reads",
  "Unique_reads",
  "Unique_reads_percent",
  "ERCC_reads",
  "Non_ERCC_reads",
  "ERCC_to_non_ERCC",
  "Genes_detected",
  "Multimapping_reads_percent",
  "Splice_sites_AT.AC",
  "Splice_sites_Annotated",
  "Splice_sites_GC.AG",
  "Splice_sites_GT.AG",
  "Splice_sites_non_canonical",
  "Splice_sites_total",
  "Unmapped_mismatch",
  "Unmapped_other",
  "Unmapped_short"
]

/* colors */
export const blue = "#4a90e2";
export const hcaBlue = "#1c7cc7";
export const lighterGrey = "rgb(245,245,245)";
export const lightGrey = "rgb(211,211,211)";
export const mediumGrey = "rgb(153,153,153)";
export const darkGrey = "rgb(102,102,102)";
export const darkerGrey = "rgb(51,51,51)";

export const brightBlue = "#4a90e2";
export const brightGreen = "#A2D729";
export const darkGreen = "#448C4D";

export const tiniestFontSize = 12;

export const bolder = 700;

export let API = {
  // prefix: "http://api.clustering.czi.technology/api/",
  prefix: "http://tabulamuris.cxg.czi.technology/api/",
  // prefix: "http://pbmc3k.cxg.czi.technology/api/",
  // prefix: "http://pbmc33k.cxg.czi.technology/api/",

  // prefix: "http://api-staging.clustering.czi.technology/api/",
  version: "v0.1/",
}

if (window.CELLXGENE && window.CELLXGENE.API) API = window.CELLXGENE.API;

export let datasetTitle = "";

if (window.CELLXGENE && window.CELLXGENE.datasetTitle) datasetTitle = window.CELLXGENE.datasetTitle;

export const accentFont = "Georgia,Times,Times New Roman,serif";
export const maxParagraphWidth = 600;
export const maxControlsWidth = 800;

export const graphMargin = {top: 20, right: 10, bottom: 30, left: 40};
export const graphWidth = 1440 /* window width */ - 410 /* sidebar */ - (15 + 15) /* left right padding */ /* but responsive */;
export const graphHeight = 500;

export const graphXScale = d3.scaleLinear()
  .domain([0, 1]) /* while this is the default for d3, our data is normalized so better to be explicit */
  .range([
    0 + graphMargin.left,
    graphWidth - graphMargin.right
  ]);

export const graphYScale = d3.scaleLinear()
  .domain([0, 1]) /* while this is the default for d3, our data is normalized so better to be explicit */
  .range([
    graphHeight - graphMargin.bottom,
    0 + graphMargin.top
  ]);
