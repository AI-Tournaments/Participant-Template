let team;
onmessage = ()=>{
	onmessage = loadArenaData;
	postMessage(null); /** Dependencies load completed, http requests can be disabled after this point. */
}
function loadArenaData(messageEvent){ /** Initiated participant. */
	team = messageEvent.data.opponents.findIndex(opponent=>opponent===null);
	console.log(messageEvent.data.settings);
	console.log(messageEvent.data.opponents);
	onmessage = tock;
	if(messageEvent.data === ''){
		messageEvent.data.secret = null;
		postMessage(messageEvent.data); /** Data to participant.js siblings, if used by the arena. */
	}else{
		postMessage(null);
	}
}
function tock(messageEvent){ /** Round response. */
	postMessage('response');
}
