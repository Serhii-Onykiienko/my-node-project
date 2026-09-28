import { Router } from 'express';
import {
  getStudents,
  getStudentById,
} from '../controllers/studentsController.js';

const router = Router();

//? GET /students — список усіх студентів

router.get('/students', getStudents);

//? GET /students/:studentId — один студент за id

router.get('/students/:studentId', getStudentById);

export default router;
