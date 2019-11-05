var Logger = require('./index')

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, 
  {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, 
  {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];

const template = [
    {id: 'name', title: 'Name'},
    {id: 'surname', title: 'Surname'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
]

var item = new Logger();
// item.read('data.csv');
// item.write(data, template);

//1 letter 2 bytes
// item.readPartly('data.csv', 24);
item.append('out.csv', 'asynchronous mfka');