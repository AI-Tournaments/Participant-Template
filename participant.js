let _team;
let _settings;
let _opponents;
ParticipantHelper.init = (settings, opponents) => {
	_team = opponents.findIndex(opponent=>opponent===null);
	_settings = settings;
	_opponents = opponents;
	console.log(_settings);
	console.log(_opponents);
}
ParticipantHelper.onmessage = (data, type) => {
	if(type === 'post'){
		ParticipantHelper.respond('Round response');
	}
}
