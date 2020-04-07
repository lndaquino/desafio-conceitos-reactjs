module.exports = {
    presets: [
        '@babel/preset-env', // converte o javascript mais moderno para um mais antigo de acordo com o que o ambiente suporta (só converte o q o ambiente não entede) - entende o ambiente q a aplicação vai ser executada e converte de acordo com o ambiente
        '@babel/preset-react' // adiciona as facilidades do react nessa conversão, convertendo o html dentro do javascript pro navegador entender
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};