export default {
  namespaced: true,
  state: {
    showPlayer: false, // 是否显示播放器
    musicUrl: "", // 音频url
    musicUrlMap: [
      // 音频list
      "http://music.163.com/song/media/outer/url?id=65766.mp3",
      "http://m801.music.126.net/20220105214028/859757b4e52a4a1f7cdf8067d1486fea/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11983356173/ed2f/6024/be41/2dc456563c5f9c9535b75ecb066c0325.mp3",
      "http://music.163.com/song/media/outer/url?id=66285.mp3",
    ],
    isPlay: false, // 是否播放
    lyrics1: "感受停在我发端的指尖", // 歌词1
    lyrics2: "如何瞬间冻结时间", // 歌词2
    posterImgUrl:
      "https://y.qq.com/music/photo_new/T001R500x500M000001fNHEf1SFEFN.jpg", // 海报url
  },
  mutations: {
    setShowPlayer(state, data) {
      state.showPlayer = data;
    },
    setMusicUrl(state, data) {
      state.musicUrl = data;
    },
    setMusicUrlMap(state, data) {
      state.musicUrlMap = data;
    },
    setIsPlay(state, data) {
      state.isPlay = data;
    },
    setLyrics1(state, data) {
      state.lyrics1 = data;
    },
    setLyrics2(state, data) {
      state.lyrics2 = data;
    },
    setPosterImgUrl(state, data) {
      state.posterImgUrl = data;
    },
  },
  actions: {},
};
