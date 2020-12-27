onmessage = messageEvent => { /** Arena init. */
	console.log(messageEvent.data.settings);
	console.log(messageEvent.data.opponents);
	onmessage = tock;
	postMessage(null);
}
function tock(messageEvent){ /** Round response. */
	postMessage('response');
}
