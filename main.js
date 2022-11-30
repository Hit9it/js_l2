// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [];
arr[0]= 1;
arr[1]= 2;
arr[2]= 3;
arr[3]= 4;
arr[4]= 5;
arr[5]= 6;
arr[6]= 7;
arr[7]= 8;
arr[8]= 9;
arr[9]= 10;
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books1 = {
    title: 'title',
    pageCount: 1,
    genre: 'genre'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books2 = {
    title: 'title',
    pageCount: 1,
    genre: 'genre',
    authors: [
        {
            name: 'Dimooon',
            age: 1
        },
        {
            name: 'Adolph',
            age: 2
        },
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = []
user[0] = {
    name: 'a',
    username: 'b',
    password: 'c1'
}
console.log(user[0].password);

user[1] = {
    name: 'a',
    username: 'b',
    password: 'c2'
}
console.log(user[1].password);

user[2] = {
    name: 'a',
    username: 'b',
    password: 'c3'
}
console.log(user[2].password);

user[3] = {
    name: 'a',
    username: 'b',
    password: 'c14'
}
console.log(user[3].password);

user[4] = {
    name: 'a',
    username: 'b',
    password: 'c5'
}
console.log(user[4].password);

user[5] = {
    name: 'a',
    username: 'b',
    password: 'c6'
}
console.log(user[5].password);

user[6] = {
    name: 'a',
    username: 'b',
    password: 'c7'
}
console.log(user[6].password);

user[7] = {
    name: 'a',
    username: 'b',
    password: 'c8'
}
console.log(user[7].password);

user[8] = {
    name: 'a',
    username: 'b',
    password: 'c9'
}
console.log(user[8].password);

user[9] = {
    name: 'a',
    username: 'b',
    password: 'c0'
}
console.log(user[9].password);