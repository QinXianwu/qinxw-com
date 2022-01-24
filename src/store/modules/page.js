export default {
  namespaced: true,
  state: {
    name: "qinxw",
    showMenu: false,
  },
  mutations: {
    setShowMenu(state, value) {
      state.showMenu = value;
    },
  },
  actions: {},
};
