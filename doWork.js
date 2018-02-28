 
self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'average':
      var result = calculateAverage(data); 
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);



function calculateAverage (oData) {
	var aData = oData.data;
	var sum = 0;
	aData.forEach(function (iElement) {
		sum += iElement;
	});
	return sum / aData.length;
}
