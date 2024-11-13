module.exports = {
  presets: ["@babel/preset-env"],
  ignore: ["**/*.svg"], // Ignore SVG files from being processed
  compact: false, // Prevent deoptimizing large files
};
