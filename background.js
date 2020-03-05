browser.contextMenus.create({
	id: "qrcode-text",
	title: "Encode selected text",
	contexts: ["selection"],
});

browser.contextMenus.create({
	id: "qrcode-link",
	title: "Encode selected link",
	contexts: ["link"],
});

browser.contextMenus.create({
	id: "qrcode-link-text",
	title: "Encode link text",
	contexts: ["link"],
});

var text = "";

// 判断右键菜单点击选项
browser.contextMenus.onClicked.addListener(function(info, tab) {
	switch (info.menuItemId) {
		case "qrcode-text":
			text = info.selectionText;
		break;
		case "qrcode-link":
			text = info.linkUrl;
		break;
		case "qrcode-link-text":
			text = info.linkText;
		break;
	}
	browser.browserAction.openPopup();
});


browser.runtime.onMessage.addListener(
	//request: message 
	//sender: this extension
	function(request,sender,callback) {
		console.log(request);
		console.log(sender);
		callback({text});
		text = undefined;
	});
