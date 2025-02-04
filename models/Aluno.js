import banco from "../config/banco.js";

const Aluno = banco.sequelize.define('alunos', {
    id: {
        type: banco.Sequelize.INTEGER,  
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: banco.Sequelize.STRING(150)
    },
    telefone: {
        type: banco.Sequelize.STRING(20)
    },
    email: {
        type: banco.Sequelize.STRING(150),
        unique: true,
        allowNull: false
    },
    nota: {
        type: banco.Sequelize.FLOAT,
    },
    situacao: {
        type: banco.Sequelize.STRING(20)
    }
})

export default Aluno