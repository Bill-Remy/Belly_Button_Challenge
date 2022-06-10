function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
 
// Function to build metadata from selected sample -
// called by optionChaned on drop down menu
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text("Sample ID: " + result.id);
      PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
      PANEL.append("h6").text("Gender:    " + result.gender);
      PANEL.append("h6").text("Age:       " + result.age);
      PANEL.append("h6").text("Location:  " + result.location);
      PANEL.append("h6").text("BBTYPE:    " + result.bbtype);
      PANEL.append("h6").text("WFREQ:     " + result.wfreq);
      
    });
  }  

function optionChanged(newSample) {
  console.log(newSample);
  
// Build metadata for the selected sample

  buildMetadata(newSample);
// Build the charts on the panel for the selected sample 
//  buildCharts(newSample);


}  
  init();