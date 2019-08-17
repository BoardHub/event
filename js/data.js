
var spreadSheetKey = '1cLT9FD2ffQkHzgXKGxGBM7Skk8ID_INF76X_DsOZAqg';

getSheetData(spreadSheetKey, 1, function(result) {
	sections = result.data;
	sections = convertRowsToObj(sections);

	getSheetData(spreadSheetKey, 2, function(result) {
		charts = result.data;
		charts = convertRowsToObj(charts);
		onDataLoaded();
	});
});