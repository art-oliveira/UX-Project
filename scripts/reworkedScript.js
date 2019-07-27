//selects the target for the function and sets it to activate on hover
$("#hemo").hover(function() {
  //determines what to show when the cursor is over the specified element
  $(this)
    .css("cursor", "pointer")
    .attr(
      "title",
      "HemoTypeSC™ is a rapid test kit for the determination of hemoglobin type in whole blood. "
    );
});

//repeated for each logo
$("#RapidBac").hover(function() {
  $(this)
    .css("cursor", "pointer")
    .attr(
      "title",
      "RapidBac™ is the first point-of-care immunoassay test kit for the direct detection of Gram-negative bacteria in urine."
    );
});

$("#RapidBacVet").hover(function() {
  $(this)
    .css("cursor", "pointer")
    .attr(
      "title",
      "RapidBac™Vet is a lateral flow immunoassay for the detection of Gram-positive and Gram-negative bacteria in urine for veterinary services."
    );
});

$("#watersafe").hover(function() {
  $(this)
    .css("cursor", "pointer")
    .attr(
      "title",
      "WaterSafe lets you test your own drinking water for ten harmful contaminants."
    );
});

$("#mabs").hover(function() {
  $(this)
    .css("cursor", "pointer")
    .attr(
      "title",
      "SLRC's EAP™ -Derived Monoclonal Antibodies are available as research-use-only reagents."
    );
});
