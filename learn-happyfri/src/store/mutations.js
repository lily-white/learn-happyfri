const INITIALIZE_DATA = 'INITIALIZE_DATA';
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMEMBER_ANSWER = 'REMEMBER_ANSWER';

export default {
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},

	[REMEMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},

	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	}
}