import { UserState, UserInfo, UserId } from './type';

import { MutationTree} from 'vuex';

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';

const state: UserState = {
    user_list : [],
};

const mutations: MutationTree<UserState> = {
    [ADD_USER](state, payload: UserInfo) {
        state.user_list.push(payload);
    },
    [DELETE_USER](state, payload: UserId) {
        state.user_list = state.user_list.filter((user) => {
            return user.id !== payload;
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
