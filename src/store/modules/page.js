import switchTheme_LightUrl from "../../assets/image/switchTheme-Light.png";
import switchTheme_DarkUrl from "../../assets/image/switchTheme-Dark.png";

export default {
  namespaced: true,
  state: {
    name: "qinxw",
    showMenu: false,
    themeTitle: "浅色", // 深色 | 浅色(默认)
    switchTheme: true, // 深色 | 浅色(默认)
    switchThemeUrl: switchTheme_LightUrl,
  },
  mutations: {
    setShowMenu(state, value) {
      state.showMenu = value;
    },
    setThemeTitle(state, value) {
      state.themeTitle = value;
    },
    setSwitchTheme(state, value) {
      state.switchTheme = value;
    },
    setSwitchThemeUrl(state) {
      state.switchThemeUrl = state.switchTheme
        ? switchTheme_LightUrl
        : switchTheme_DarkUrl;
    },
  },
  actions: {},
};
