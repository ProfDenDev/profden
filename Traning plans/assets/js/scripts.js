const teacher = [{
	id: 1,
	fNameT: 'Purohit',
	lNameT: 'Suryansh',
	skile : 'yoga and meditation expert',
	img: './img/teacher_1.jpg',
	facebook: '',
	twiter: '',
	instagram: '',
	lin: '',
},

{	id: 2,
	fNameT: 'Shweta',
	lNameT: 'Rao',
	skile : 'Ashtanga yoga',
	img: './img/teacher_2.jpg',
	facebook: '',
	twiter: '',
	instagram: '',
	lin: '',},

{
	id: 3,
	fNameT: 'Arjun',
	lNameT: 'Kohli',
	skile : 'Kickboxing',
	img: './img/teacher_3.jpg',
	facebook: '',
	twiter: '',
	instagram: '',
	lin: '',


}


];

console.log(teacher);

// const t1 =  (teacher[0].fNameT) + ' ' + (teacher[0].lNameT);
// console.log(t1);

// const t2 =  (teacher[1].fNameT) + ' ' + (teacher[1].lNameT);
// console.log(t2, (teacher[1].skile));

const s = [];
for (i = 0; i < teacher.length; i++)
	{
	s[i] = (teacher[i].fNameT) + ' ' + (teacher[i].lNameT);

			console.log('s', i, '-', s[i], 'skil ', (teacher[i].skile));

	
};
	