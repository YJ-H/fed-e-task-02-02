export default {
  input: 'src/index.js',// 入口
  output: { // 输出
    file: "dist/bundle.js",// 输出文件
    format: "iife" // 采用格式
  }
}

//使用 rollup --config 来使用配置文件