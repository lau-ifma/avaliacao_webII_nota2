import express from 'express'
const router = express.Router()
import AlunoController from '../controllers/AlunoController.js'

/* Como estamos dentro de routes, "/" === "/aluno" */

router.get('/', AlunoController.index)
router.get('/cadastrar', AlunoController.cadastrar)
router.post('/salvar', AlunoController.salvar)

export default router
