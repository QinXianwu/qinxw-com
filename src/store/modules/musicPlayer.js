import api from "@/api/module";

export default {
  namespaced: true,
  state: {
    showPlayer: false, // 是否显示播放器
    musicUrl: "", // 音频url
    musicUrlMap: null, // 音频list
    isPlay: false, // 是否播放
    lyrics1: "感受停在我发端的指尖", // 歌词1
    lyrics2: "如何瞬间冻结时间", // 歌词2
    posterImgUrl:
      "https://y.qq.com/music/photo_new/T001R500x500M000001fNHEf1SFEFN.jpg", // 海报url
  },
  mutations: {
    SET_SHOW_PLAYER(state, data) {
      state.showPlayer = data;
    },
    SET_MUSIC_URL(state, data) {
      state.musicUrl = data;
    },
    SET_MUSICURL_MAP(state, data) {
      state.musicUrlMap = data;
    },
    SET_IS_PLAY(state, data) {
      state.isPlay = data;
    },
    SET_LYRICS1(state, data) {
      state.lyrics1 = data;
    },
    SET_LYRICS2(state, data) {
      state.lyrics2 = data;
    },
    SET_POSTER_IMG_URL(state, data) {
      state.posterImgUrl = data;
    },
  },
  actions: {
    async GetMusicList({ commit, state }, isRefresh) {
      if (state.musicUrlMap?.length > 0 && !isRefresh) return;
      // eslint-disable-next-line no-unused-vars
      const res = await api.MuXiaoGuo.GetYiYan();
      const musicUrlMap = [
        "http://music.163.com/song/media/outer/url?id=65766.mp3",
        "http://m801.music.126.net/20220105214028/859757b4e52a4a1f7cdf8067d1486fea/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11983356173/ed2f/6024/be41/2dc456563c5f9c9535b75ecb066c0325.mp3",
        "http://music.163.com/song/media/outer/url?id=66285.mp3",
      ];
      commit("SET_MUSICURL_MAP", musicUrlMap);
      commit("SET_MUSIC_URL", musicUrlMap[0]);
      return musicUrlMap;
    },
  },
};
