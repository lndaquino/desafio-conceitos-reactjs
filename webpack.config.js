const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada
    output: { // arquivo de saída
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, //arquivos que terminam com js
                exclude: /node_modules/, //exclui a pasta node_modules
                use: {
                    loader: 'babel-loader', // toda vez q for precisar um arquivo javascript q não estiver na node_modules converte com o babel-loader
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'}, // vai pegar o css e intetar dentro do html
                    { loader: 'css-loader'}, // lê o arquivo css e ver as importações que temos lá dentro
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g|jfif)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};