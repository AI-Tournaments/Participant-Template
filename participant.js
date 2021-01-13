let team;
onmessage = ()=>{ /** Initiate participant. */
	onmessage = tock;
	team = messageEvent.data.opponents.findIndex(opponent=>opponent===null);
	console.log(messageEvent.data.settings);
	console.log(messageEvent.data.opponents);
}
function tock(messageEvent){ /** Round response. */
	postMessage('response');
}
