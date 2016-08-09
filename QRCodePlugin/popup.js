function getCurrentTabUrl(callback) {
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs) {
		var tab = tabs[0];
		var url = tab.url;

		console.assert(typeof url == 'string', 'tab的url要是字符串');
		callback(url);
	});
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTabUrl(function(url) {
		var option = {width:200, height:200, correctLevel:0};
		option.text = url;
		jQuery('#output').qrcode(option);
	});
});

