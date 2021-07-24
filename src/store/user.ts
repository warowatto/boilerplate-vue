import { StoreNameSpaces } from '@/types/store/index.type';
import { UserStoreType } from '@/types/store/user.type';
import { Module, MutationTree } from 'vuex';

const inital: UserStoreType = {
  name: 'test',
};

const mutation: MutationTree<UserStoreType> = {
  setName(state, name: string) {
    state.name = name;
  },
};

const namespace: Module<UserStoreType, StoreNameSpaces> = {
  namespaced: true,
  state: inital,
  mutations: mutation,
};

export default namespace;
