const path = require('path');

module.exports = {
   entry: ['babel-polyfill', './src/app.js'],
   devtool: 'inline-source-map',


   output: {
     filename: 'app.js',
     path: path.resolve(__dirname, 'dist'),
    //  clean: true,
   },
   optimization: {
		// We no not want to minimize our code.
		minimize: false
	},

   module: {

    rules:[
// css style loader 
      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

// babel loader
{
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: ['babel-loader']
},

// assest loader
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ]
    }
 };