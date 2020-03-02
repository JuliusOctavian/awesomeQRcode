	let qrcode = new QRCode('qrcode', {
		width : 170,
		height : 170,
		colorDark: '#000'
	});

	let input = document.querySelector("input");

	input.onkeyup = function(){
		qrcode.makeCode(this.value);
	}
	input.oninput = function(){
		qrcode.makeCode(this.value);
	}
	input.onchange = function(){
		qrcode.makeCode(this.value);
	}


	browser.tabs.query({active:true,currentWindow:true})
	.then(function (tabs) {
		browser.runtime.sendMessage({greeting:"Hehe"}).then(res=>{
			if (!res.text) {
				input.value = tabs[0].url;
				qrcode.makeCode(input.value);
			}else {
				input.value = res.text;
				qrcode.makeCode(input.value);
			}
		}).catch(error=>{console.log(error)})
	})
	.catch((error) =>{
		console.error(error);
	});