const path = require("path")

module.exports = {

    entry:{
        app:path.resolve(__dirname,"redux-demo/main.js")
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"redux-demo")
    },
    resolve:{
        extensions:[".css",".js",".jsx"]
    },
    module:{
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["@babel/preset-env","@babel/preset-react"],plugins:["@babel/plugin-transform-react-jsx"]}},
            {test:/\.jsx$/,loader:"babel-loader",query:{presets:["@babel/preset-env","@babel/preset-react"],plugins:["@babel/plugin-transform-react-jsx"]}}
        ]
    }
}
