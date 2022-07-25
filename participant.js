let _team;
let _settings;
let _opponents;
onmessage = init => {
	_settings = init.settings;
	_opponents = init.opponents;
	_team = _opponents.findIndex(opponent=>opponent===null);
	onmessage = message => {
		if(message.type === 'Post'){
			postMessage('YOUR_RESPONSE');
		}
	}
}
