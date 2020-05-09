const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[22,33,23,32];

//previous than es6
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

//hazard situation
const allAges2=[ages,ages2,5,ages3];
console.log(allAges2);

//es6 three dots
const allAges3=[...ages, ...ages2, 5, ...ages3];
console.log(allAges3);

const business=650;
const minister=450;
const secretary= 250;
const balance=[100,200,700,500,400];
const maximum=Math.max(business,minister,secretary);
console.log(maximum);
const maximumArr=Math.max(...balance);
console.log(maximumArr);