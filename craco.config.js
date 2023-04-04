// const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias")
const polkadotDevOptions = require("@polkadot/dev/config/babel-config-webpack.cjs")
const webpack = require("webpack")
// const plugins = require("@polkadot/dev/config/babel-plugins.cjs")
// const presets = require("@polkadot/dev/config/babel-presets.cjs")

module.exports = {
  output: {
    libraryTarget: "umd",
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from jsconfig
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],

  babel: {
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: [
      "@babel/plugin-proposal-logical-assignment-operators",
      "babel-plugin-styled-components",
    ],
  },
  webpack: {
    configure: {
      // entry: {
      // fallback: "./src/fallback.ts",
      // "web-runner": "./src/webRunner.ts",
      // },
      resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          path: require.resolve("path-browserify"),
          stream: require.resolve("stream-browserify"),
          os: require.resolve("os-browserify/browser"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          assert: require.resolve("assert"),
          buffer: require.resolve("buffer"),
          zlib: false,
          url: false,
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
      },
      module: {
        rules: [
          {
            exclude:
              /(node_modules\/(?!(@equilab|@subwallet|@polkadot\/rpc-core)).*)/,
            test: /\.(js|cjs|ts|tsx)$/,
            use: [
              {
                loader: require.resolve("babel-loader"),
                options: polkadotDevOptions,
              },
            ],
          },
          {
            test: /\.(m?js|c?js)/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: [
              /\.svg$/,
              /\.bmp$/,
              /\.gif$/,
              /\.jpe?g$/,
              /\.png$/,
              /\.woff2?$/,
            ],
            use: [
              {
                loader: require.resolve("url-loader"),
                options: {
                  esModule: false,
                  limit: 10000,
                  name: "static/[name].[ext]",
                },
              },
            ],
          },
        ],
      },
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
  },
}
