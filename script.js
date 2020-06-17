// Code goes here

var app = angular.module("yourAppName", []);
		app.controller("myNoteCtrl",['$scope', function($scope) {
		var svgElements = $("#Screenshot").find('svg');
//replace all svgs with a temp canvas
svgElements.each(function () {
    var canvas, xml;

    canvas = document.createElement("canvas");
    canvas.className = "screenShotTempCanvas";
    //convert SVG into a XML string
    xml = (new XMLSerializer()).serializeToString(this);

    // Removing the name space as IE throws an error
    xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '');

    //draw the SVG onto a canvas
    canvg(canvas, xml);
    $(canvas).insertAfter(this);
    //hide the SVG element
    this.className = "tempHide";
    $(this).hide();
});
			$scope.save  = function(){
			setTimeout(()=>{html2canvas($("#Screenshot"), {
			  logging: true,
        profile: true,
        useCORS: true,
        allowTaint: true,
			 	onrendered: function(canvas) {
          var a = document.createElement('a');
          // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          a.download = 'screenshot.jpg';
          a.click();
			 	}
			 });
			},100);
				 
    };

 }]);