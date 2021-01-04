let team;
onmessage = messageEvent => { /** Arena init. */
	team = messageEvent.data.opponents.findIndex(opponent=>opponent===null);
	console.log(messageEvent.data.settings);
	console.log(messageEvent.data.opponents);
	onmessage = tock;
	postMessage(null);
}
function tock(messageEvent){ /** Round response. */
	postMessage('response');
}
