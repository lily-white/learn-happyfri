const INITIALIZE_DATA = 'INITIALIZE_DATA';

export default {
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
}