onmessage = init => {
	const _settings = init.settings;
	const _opponents = init.opponents;
	const _team = _opponents.findIndex(opponent=>opponent===null);
	onmessage = message => {
		if(message.type === 'Post'){
			postMessage('YOUR_RESPONSE');
		}
	}
}
