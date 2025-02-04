
import { FLOAT } from "sequelize"
import Aluno from "../models/Aluno.js"

class AlunoController {
    index = async (req, res) => {
        let alunos = await Aluno.findAll()
        res.render('aluno/index', { alunos: alunos })
    }

    cadastrar = (req, res) => {
        res.render('aluno/cadastro')
    }

    salvar = async (req, res) => {
        const { nome, telefone, email, nota} = req.body;
        const situacao = await nota

        const novo_aluno = {
            nome: nome,
            telefone: telefone,
            email: email,
            nota: nota,
            situacao: situacao
        }
        Aluno.create(novo_aluno).then(() => {
            res.redirect('/aluno')
        })
    }
}

export default new AlunoController()
