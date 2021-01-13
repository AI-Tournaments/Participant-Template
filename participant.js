let team;
onmessage = ()=>{
	onmessage = tock;
	team = messageEvent.data.opponents.findIndex(opponent=>opponent===null);
	console.log(messageEvent.data.settings);
	console.log(messageEvent.data.opponents);
}
function tock(messageEvent){
	console.log(messageEvent.data.value);
	if(messageEvent.data.type === 'post'){
		postMessage('Round response');
	}
}
