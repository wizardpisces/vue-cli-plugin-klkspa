/**
 * 加载svg图标文件，svg-sprite-loader生成svg sprites
 */
const svgFiles = require.context('@/assets/svg-icon', false, /.svg$/);
svgFiles.keys().map(svgFiles);