import { Router } from 'express';
import {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  patchStudent,
} from '../controllers/studentsController.js';
import { celebrate } from 'celebrate';
import {
  createStudentSchema,
  getStudentsSchema,
  updateStudentSchema,
} from '../validations/studentsValidation.js';
import { studentIdParamSchema } from '../validations/studentsValidation.js';

const router = Router();

//? GET /students — список усіх студентів

router.get('/students', celebrate(getStudentsSchema), getStudents);

//? GET /students/:studentId — один студент за id

router.get(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  getStudentById,
);

//? POST створення студента

router.post('/students', celebrate(createStudentSchema), createStudent);

//? DELETE видалення студента

router.delete(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  deleteStudent,
);

//? PATCH редагування студента

router.patch(
  '/students/:studentId',
  celebrate(updateStudentSchema),
  patchStudent,
);

export default router;
