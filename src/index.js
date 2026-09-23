// src/index.js
// import path from 'node:path';
// // import fs from 'node:fs';

// const message = 'Hello world';

// console.log(message);

// const somePath = path.join('some_folder', 'some_file.txt');
// на macOS → 'some_folder/some_file.txt'
// на Windows → 'some_folder\\some_file.txt'

// абсолютний шлях до робочої директорії
// const pathToWorkDir = path.join(process.cwd());

// додаємо нові частини до шляху
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');

// macOS → /коренева_папка/some_folder/some_file.txt
// Windows → C:\\коренева_папка\\some_folder\\some_file.txt

// macOS
// console.log(path.parse('/home/user/dir/file.txt'));
/*
{
 root: '/',
 dir: '/home/user/dir',
 base: 'file.txt',
 ext: '.txt',
 name: 'file'
}
*/

// Windows
// console.log(path.parse('C:\\path\\dir\\file.txt'));
/*
{
 root: 'C:\\',
 dir: 'C:\\path\\dir',
 base: 'file.txt',
 ext: '.txt',
 name: 'file'
}
*/

// приклад без кодування
// const buffer = fs.readFileSync('file.txt');
// console.log(buffer); // <Buffer 48 65 6c 6c 6f ...>

// // приклад із кодуванням
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log('Вміст файлу:', data); // "Hello"

// import fs from 'node:fs/promises';

// // без кодування
// const buffer = await fs.readFile('file.txt');
// console.log(buffer); // <Buffer ... >

// // з кодуванням
// const data = await fs.readFile('file.txt', 'utf8');
// console.log('Вміст файлу:', data); // "Hello"

// import fs from 'node:fs';

// fs.writeFileSync('output.txt', 'Привіт з Node.js!', 'utf8');
// console.log('Дані успішно записані у файл.');

// import fs from 'node:fs/promises';
// await fs.writeFile('output.txt', 'Привіт з Node.js Async!', 'utf8');
// console.log('Дані успішно записані у файл.');

// import fs from 'node:fs/promises';

// await fs.appendFile('output.txt', '\nЩе один рядок', 'utf8');
// console.log('Дані успішно додані у файл.');

// import fs from 'node:fs/promises';

// function rename() {
//   setTimeout(async () => {
//     await fs.rename('output.txt', './src/output.txt');
//     console.log('Файл успішно перейменовано.');
//   }, 2000);
// }

// await fs.unlink('file.txt');
// console.log('Файл успішно видалено.');

// rename();
// import fs from 'node:fs/promises';

// const buffer = await fs.readFile('hello.txt');
// // якщо у файлі hello.txt був текст "Hello World!"

// console.log(buffer.toString('utf-8'));
// // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
