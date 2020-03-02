browser.contextMenus.create({
	id: "qrcode-text",
	title: "Encode setected text",
	contexts: ["selection"],
});

browser.contextMenus.create({
	id: "qrcode-link",
	title: "Encode setected link",
	contexts: ["link"],
});

browser.contextMenus.create({
	id: "qrcode-link-text",
	title: "Encode link text",
	contexts: ["link"],
});

var text = "";

browser.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === "qrcode-text") {
		text = info.selectionText;
		// browser.browserAction.openPopup();
	}else if (info.menuItemId === "qrcode-link") {
		text = info.linkUrl;
		// browser.browserAction.openPopup();
	}else if (info.menuItemId === "qrcode-link-text"){
		text = info.linkText;
		// browser.browserAction.openPopup();
	}
	browser.browserAction.openPopup();
});

browser.runtime.onMessage.addListener(
	function(request,sender,callback) {
		callback({text});
		text = undefined;
	});
