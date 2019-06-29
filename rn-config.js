module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-native-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
