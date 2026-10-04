import { Student } from '../models/student.js';
import createHttpError from 'http-errors';

//? GET Отримати список усіх студентів

export const getStudents = async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  console.log(req.query);

  const skip = (page - 1) * perPage;

  const studentsQuery = Student.find();

  const [totalItems, students] = await Promise.all([
    studentsQuery.clone().countDocuments(),
    studentsQuery.skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  res.status(200).json({ page, perPage, totalItems, totalPages, students });
};

//? GET Отримати одного студента за id

export const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findById(studentId);

  // if (!student) {
  //   return res.status(404).json({ message: 'Student not found' });
  // }

  //? Додаємо базову обробку помилки замість res.status(404)

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};

//? POST Створюємо студента

export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

//? DELETE Видаляємо студента

export const deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findOneAndDelete({ _id: studentId });
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }
  res.status(200).json(student);
};

//? PATCH Редагування студента

export const patchStudent = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findOneAndUpdate({ _id: studentId }, req.body, {
    returnDocument: 'after',
  });

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};
