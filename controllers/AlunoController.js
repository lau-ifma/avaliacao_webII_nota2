import Aluno from "../models/Aluno.js";

class AlunoController {
    index = async (req, res) => {
        try {
            const alunos = await Aluno.findAll();
            res.render('aluno/index', { alunos });
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            res.status(500).send("Erro ao buscar alunos");
        }
    };

    cadastrar = (req, res) => {
        res.render('aluno/cadastro');
    };

    salvar = async (req, res) => {
        try {
            const { nome, telefone, email, nota } = req.body;
            
       
            const n = parseFloat(nota);
            const situacao = n >= 7 ? "Aprovado" : "Reprovado";

            const novo_aluno = {
                nome,
                telefone,
                email,
                nota: n, 
                situacao
            };

            await Aluno.create(novo_aluno);
            res.redirect('/aluno');
        } catch (error) {
            console.error("Erro ao salvar aluno:", error);
            res.status(500).send("Erro ao salvar aluno");
        }
    };
}

export default new AlunoController();
