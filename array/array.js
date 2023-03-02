/* Array Literal
Array মূলত জাভাস্ক্রিপ্টের একটি ডেটাটাইপ। Array অবজেক্ট বা রেফারেন্স টাইপ ডেটা। জাভাস্ক্রিপ্টে অনেকগুলো ডেটা একসাথে রাখার জন্য সবচেয়ে বহুল ব্যবহৃত ডেটা স্ট্রাকচার হচ্ছে Array।
 */
/* Array initialise করার অনেক উপায় আছে। আমরা এখানে সবচেয়ে বেশি ব্যবহৃত ও সহজ উপায়টা নিয়ে আলোচনা করব। যা হচ্ছে Array Literal. [ ] মূলত এই থার্ড ব্র্যাকেটকেই Array লিটারাল বলে। যেহেতু Array নিজেই একটা ডেটাটাইপ, তাই Array একটি variable এ স্টোর করতে হয়। আমরা এখানে let, var, const যেকোনো কিছুই ব্যবহার করতে পারি। তবে আমরা যেহেতু শুধুমাত্র Array এর ভিতরের ডেটাগুলোই চেঞ্জ করি তাই আমরা const ব্যবহার করতে পারি। যেহেতু এ্যারে একটি রেফারেন্স টাইপ ডেটা, তাই আমরা এ্যারের ভিতরের ডেটা চেঞ্জ করলেও এর রেফারেন্স চেঞ্জ হবে না। তাই const ব্যবহারে কোনো সমস্যা নেই।

আমরা প্রথমে একটি ফাঁকা এ্যারে ইনিশিয়ালাইজ করি। */

const arr = [];
/* যেহেতু Array একটা অব্জেক্ট-টাইপ ডেটা, তাই এর সাথে কিছু মেথড আগে থেকেই বাইন্ড করে দেয়া আছে। এমনই একটা মেথড হচ্ছে length. এই মেথডের কাজ হচ্ছে Array'র মধ্যে কয়টি এলিমেন্ট বা আইটেম আছে তার সংখ্যা বের করা। */

console.log(arr.length); //0
/* যেহেতু এখন আমাদের arr নামের Array তে কোনোকিছুই নেই তাই এর length হচ্ছে 0. এখন যদি আমরা আমাদের Array তে কোনো ডেটা রাখতে চাই তাহলে আমাদের Array'র index টা access করতে হবে। যেহেতু Array'র ইনডেক্স 0 থেকে শুরু হয় তাই আমরা যদি এভাবে লিখি- */

arr[0]
/* এর মানে হল, আমরা এই arr নামের Array টার  0 নম্বর ইন্ডেক্সে যেই এলিমেন্টটা আছে সেটাতে access করতে চাচ্ছি। কিন্তু যখন আমরা এর ডান পাশে = সাইন দিয়ে রাইটে একটা ডেটা এসাইন করার চেস্টা করব, তখন জাভাস্ক্রিপ্ট কম্পাইলার বুঝে যাবে যে 0 নম্বর ইন্ডেক্সে যায় থাকুক না কেন আমরা এখন যেই ডেটা এসাইন করব 0 নম্বর ইন্ডেক্সে সেই ডেটাই রাখতে হবে।
 */
arr[0] = 1
//এমনভাবে যদি আমরা আরো ডেটা এসাইন করতে চাই-

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
/* এখন যদি আমরা length কল করি তাহলে দেখব যে এ্যারের length এখন 3.  এখন আমরা যদি ডিরেক্ট এ্যারেটা print করে দেখতে চাই তাহলে আমরা এরকম একটা রেজাল্ট পাব- */

console.log(arr); // [1,2,3]
/* জাভাস্ক্রিপ্টে সকল Array'ই ডাইনামিক হওয়ায় আমাদের অন্যান্য প্রোগ্রামিং ল্যাংগুয়েজের মত Array'র length বা Array তে আমরা কয়টা এলিমেন্ট রাখতে চাই তা আগে থেকেই বলে দেয়া লাগে না। এইজন্য আমরা ইচ্ছা করলেই কিন্তু arr Array'র 99 নম্বর ইন্ডেক্সে কিছু এসাইন করতে পারব। এক্ষেত্রে Array'র লাস্ট ইনডেক্স পর্যন্ত এই Array'র জন্য জায়গা বরাদ্দ হয়ে যাবে। এখন আমরা যদি arr Array'র 99 ইন্ডেক্সে কোনো ডেটা রেখে arr Array টাকে console এ দেখতে চাই তাহলে আমরা দেখতে পাব যে, arr Array'র প্রথম তিনটি এলিমেন্ট হচ্ছে 1,2,3 এবং এরপর ৯৬ টি ফাঁকা জায়গা বরাদ্দ আছে এবং শেষ এলিমেন্ট হচ্ছে 100. খেয়াল করলে দেখা যাবে যে আমাদের Array তে মাত্র ৪টি এলিমেন্ট থাকা সত্ত্বেও আমাদের Array'র লেন্থ গিয়ে দাড়িয়েছে 100 তে। কারণ আমরা 99 নম্বর ইন্ডেক্সে 100 assign করেছিলাম। এই বিষয়টা কাজে লাগিয়ে কিন্তু আমরা কিছু useful কাজ করতে পারি। আমরা আমাদের arr এর লেন্থ খেয়াল করলে একটা সূত্র পাব- */

// Length = LastIndex + 1
//এই সূত্রকে আমরা একটু অন্যভাবে লিখলে পাব-

// LastIndex = Length - 1
/* এই সূত্রটা ব্যবহার করে আমরা অনেক পাওয়ারফুল কাজ করতে পারি। এবার আমরা একটু অন্য উদাহরণ নিয়ে কাজ করি। আমরা একটি empty Array'র পরিবর্তে এবার একটা ভ্যালুসমেত Array ইনিশিয়ালাইজ করি। */

const names = [
	'HM Nayem',
	'Shegufa Taranjum',
	'Shayaike Salvy',
	'Badhon Khan',
	'Sakib Al Islam'
];
//আমরা এই names এ্যারের length চেক করে দেখতে পারি।

console.log(names.length); // 5
//এখন যদি আমরা এই names এ্যারের সর্বশেষে আরেকটি আইটেম বা ডেটা রাখতে চাই তাহলে আমরা সহজভাবে যা করতে পারি-

names[5] = 'Asief Mahir';
//এখন যদি names Array টাকে আমরা console এ দেখি তাহলে দেখতে পারব names Array'র শেষ ভ্যালু হচ্ছে 'Asief Mahir'. যা এই Array ইনিশিয়ালাইজ করার সময় ছিল না।

console.log(names); 
 /*
 ['HM Nayem','Shegufa Taranjum',
  'Shayaike Salvy','Badhon Khan',
  'Sakib Al Islam','Asief Mahir']
*/
/* কিন্তু এভাবে Array তে কোনো ভ্যালু রাখা একটা সময় খুব বিরক্তিকর হয়ে উঠবে। কারণ এখন আমরা existing ভ্যালুগুলো গুণে গুনে শেষ ভ্যালুর পরবর্তী index এ নতুন ভ্যালু add করছি। কিন্তু যখন Array টা বড় হয়ে যাবে, তখন এভাবে গুণে গুণে Array তে এলিমেন্ট যোগ করাটা খুবই বিরক্তিকর হয়ে যাবে। এই সমস্যাটার সমধান করার জন্য আমরা একটু আগে যেই সূত্র বের করেছিলাম সেটা ব্যবহার করতে পারি। আমরা Array'র [ ] এই নোটেশনের মধ্যে একটি এক্সপ্রেশন লিখতে পারি। যেমন */

names[1+1]
/* এখন আমরা যদি এই ব্যাপারটাকে কাজে লাগিয়ে আমাদের সমস্যাটা সমাধান করতে চাই। তাহলে এমন একটা এক্সপ্রেশন লিখতে পারি [ ] নোটেশনের মধ্যে। এর আগে আমরা Array টাকে ইনশিয়ালাইজ করার সময় যেমনভাবে লিখেছিলাম তেমন রূপে ফিরিয়ে নিয়ে আসি। অর্থাৎ, নতুন করে এ্যাড করা 'Asief Mahir' আইটেমটা কেটে দিয়ে নিচের কোডটা লিখি- */

names[names.length] = 'Asief Mahir';
//এখন যদি আমরা names এ্যারেটাকে console এ run করি তাহলে দেখতে পারব -

console.log(names); 
/* ['HM Nayem','Shegufa Taranjum','Shayaike Salvy',
    'Badhon Khan','Sakib Al Islam','Asief Mahir']
*/
/* আমরা কিন্তু এবার আগে থেকে ইনডেক্স বলে না দিয়েও Array তে নতুন আইটেম add  করতে পারছি!  আমরা যদি এখন এই Array তে ম্যানুয়ালি আরো আইটেম যোগ করে তারপরও উপরের সূত্র ব্যবহার করে Array তে নতুন আইটেম যোগ করতে চাই তাও কিন্তু এটা সঠিকভাবেই কাজ করবে।
 */
// names= [
//   'HM Nayem',
//   'Shegufa Taranjum',
//   'Shayaike Salvy',
//   'Badhon Khan',
//   'Sakib Al Islam',
//   'Mehedi Hasan',
//   'Asief Mahir',
// 	'Tamim Khan'
// ]

// names[names.length] = 'Saidur Rahman Setu';
// console.log(names); 
/*['HM Nayem', 'Shegufa Taranjum', 'Shayaike Salvy', 
   'Badhon Khan', 'Sakib Al Islam','Mehedi Hasan',
   'Asief Mahir','Tamim Khan','Saidur Rahman Setu']
*/
//অর্থাৎ আমরা এভাবে সবসময় কোনো Array'র শেষে নতুন আইটেম যোগ করতে পারব; Array'র length যাই হোক না কেন!



//Array constructor and factory pattern
/* আমরা ইতোমধ্যে দেখেছি কিভাবে Array Literal এর মাধ্যমে Array Initialise করতে হয়। এখন যদি প্রশ্ন করি, শুধুমাত্র একটা ভ্যারিয়াবলের ভিতরে এসাইন করে দিলে কিভাবে এটা Array হয়ে গেল? আসলে under the hood ব্যাপারটা ঠিক এরকম ঘটে।
 */
//const arr = new Array();
//অর্থাৎ Array Constructor দিয়ে arr নামের একটা Array'র অবজেক্ট ক্রিয়েট করলাম। যার মধ্যে Array constructor এর যত বৈশিষ্ট আছে সবকিছু পেয়ে গেল।

//Constructor এর মাধ্যমে initialise করা আর literal ব্যাবহার করে Array Initialisation এর মধ্যে কোনো পার্থক্য নেই।

//const arr = new Array();
// Equavilant To
//const arr = [];
/* তবে এই ক্ষেত্রে প্রোগ্রামারসরা Array Literal ব্যাবহার করতেই সাচ্ছন্দ্য বোধ করে। আর একটা ব্যাপার হচ্ছে যারা অন্যান্য জাভা বা সি প্লাস প্লাস এর মত প্রোগ্রামিং ল্যাঙ্গুয়েজ থেকে এসেছেন, তারা নিশ্চয়ই জানেন Array initialisation এর সময়ই এর লেন্থ সেট করে দিতে হয়। কিন্তু জাভাস্ক্রিপ্টে Array এর একটা বিশেষ বৈশিষ্ট হচ্ছে এটা Dynamic. অর্থাৎ যত খুশি তত ডেটা ইনসার্ট করতে পারি! মজার না বিষয়টা, অনেক মজার! কিন্তু একটা প্রব্লেম আছে এরকম অনেক সিচুয়েশন আসতে পারে যখন আমাদেরকে আগেই Array এর লেন্থটা সেট করে দেওয়া লাগতে পারে। যেমন ধরুন একটা ক্লাসে ৫০ জন Student থাকতে পারে এবং এটা নির্দিষ্ট। তাহলে? এই প্রব্লেমটা আমরা constructor এর সাহায্য নিতে পারি। এ ক্ষেত্রে Array’র লেন্থটা আমরা constructor এর মধ্যে পাস করে দিব। */

//const arr = new Array(5);
//console.log(arr) // prints [<5 empty items>]
/* অর্থাৎ এক্ষেত্রে পাঁচটা আইটেম এর জন্য আগে থেকেই জায়গা বরাদ্দ করে রাখলো। এখন যদি আমি চাই এই Array তে আরেকটা এক্সট্রা আইটেম পুশ করতে। তাহলে কি হবে? আমরা কি পারব করতে। হ্যাঁ আমরা পারব কারন array তো Dynamic ই থেকে যাচ্ছে। তবে আমরা যদি ৫ নাম্বার ইন্ডেক্স এ ডাটা পুশ করি তাহলে দেখা যাবেঃ */

//let arr[5] = “Stack Consultancy” // [<5 emty items>,”Stack Consultancy”];

/* তবে এক্ষেত্রে দেখা যাবে ঐ প্রথমে আমরা যে 5 টা আইটেম এর জন্য জায়গা বরাদ্দ করেছিলাম সেই শেল্গুলো খালিই রয়ে গেছে। অবশ্য এটা আমরা Array literal ব্যাবহার করেও করতে পারতাম! তবে initialise stage এই আমরা সেট করে দিতে পারতাম না, এর সর্বচ্চ লেন্থটা কত হওয়া উচিত। তবে চাইলে আমরা constructor pattern এর মাধ্যমে Array literal মত Data ইনসার্ট করতে পারি।

এবার আমরা শিখব factory pattern ব্যাবহার করে কিভাবে আমরা Array Initialise করব। constructor pattern থেকে এক্ষেত্রে মুল difference টা হচ্ছে,  factory pattern এর ক্ষেত্রে আমাদের new keyword টা ব্যাবহার করা লাগছে না, এর বাইরে এদের মধ্যে কোনো difference নেই। */

//let arr = Array(5)
//console.log(arr) // prints [<5 empty items>]

////arr[5] = “Stack Consultancy is hundred percent free”
//console.log(arr) // prints [<5 empty items>, ‘Stack Consultancy is hundred percent free’]

let arr2 = Array(1,2,3)
console.log(arr2) //prints [1,2,3]


//Array Traverse
/* আচ্ছা আমাদের Array কেন ব্যাবহার করা লাগবে? আমরা কি পারতাম না অনেকগুলো ভ্যারিয়াবল নিয়ে তার মধ্যে ডাটা গুলোকে রাখতে! হ্যাঁ আমরা পারতাম, কিন্তু এক্ষেত্রে ডেটা ম্যানেজ করা অনেক difficult হয়ে যেত। কিন্তু আমরা যদি আইটেম গুলোকে Array’র মধ্যে রাখি, তাহলে খুব সহজেই ডেটাগুলোকে ম্যানেজ করতে পারব। Array’র এরকম একটা use case হচ্ছে Array Traversing। ইনডেক্স ধরে ধরে খুব সহজেই আমরা Array Traversing করেতে পারি। এক্ষেত্রে অবশ্য আমাদের for loop এর সাহায্য নিতে হবে। */

//let arr = [1,2 ,3,4,5]

/* for( let i = 0 ; i < arr.length ; i++ ) {
	console.log(arr[i]) // prints 1  2  3  4  5
} */
/* অনেকগুলো ভ্যারিয়াবলের ভিতরে ডেটাগুলোকে রাখলে, এভাবে খুব সহজে traverse করতে পারতাম না। আবার যদি Array’র ভিতর যে কয়টা এলিমেন্ট আছে, সেওগুলির যোগফল আমরা জানতে চাই। সেটাও আমরা খুব সহজেই করতে পারব। শুধুমাত্র একটা এক্সট্রা একটা ভ্যারিয়াবল লাগবে শুধু যোগফলটাকে রাখার জন্য। */

// let arr = [1,2 ,3,4,5]
// let sum = 0;

// for( let i = 0 ; i < arr.length ; i++ ) {
// 	sum += arr[i]
// } //

//console.log(sum) // prints 15
//এবং খুব সহজেই আইটেমগুলোর Average বের করতে পারি।

//Let avg = sum/arr.length // prints 5
/* এবার একটু অন্যভাবে চিন্তা করা যাক। একটা Array থেকে কিভাবে আমারা Largest item টা জানতে পারি। ধরুন আমাদের কাছে একটা Array আছে। তার মধ্যে অনেকগুলো random number আছে। এখন আমাদের টাস্ক হচ্ছে ওখান থেকে আমাদের Largest item’টা খুজে বের করা।
 */
//let arrR = [33 , 1 , 100 , 45 , 689 , 2 , 3 , 98 , 999, 120 , 43 , 1001]
//এই Array’র Largest item টা কত হবে? 1001, সুন্দর! কিন্তু কোড দিয়ে আমাদেরকে সেটা বের করতে হবে!

let arrR = [33 , 1 , 100 , 45 , 689 , 2 , 3 , 98 , 999, 120 , 43 , 1001]
let largestNumber = arr[0]
//ইনিশিয়াল স্টেজে আমরা arr এর প্রথম আইটেমটাকে Largest Number ধরে নিলাম।

for( let i = 1 ; i < arrR.length ; i++ ) {
	if(arrR[i]  > largestNumber){
	      largestNumber = arrR[i]
	}
} 
console.log(largestNumber) //prints 1001


/* Update Array Elements
জাভাস্ক্রিপ্টে আমরা একই Array এর মধ্যে মধ্যে ভিন্ন ভিন্ন টাইপের ডেটা রাখতে পারি, যা অন্যান্য অনেক ল্যাঙ্গুয়েজেই অসম্ভব। নিচের উদাহরণটি লক্ষ করা যাক-
 */
function getTen() {
	return 10;
};

////const arr = [10, 'Ten', true, getTen, { ten: 10 }, [10, 10]];
//console.log(arr); // [ 10, 'Ten', true, [Function: getTen], { ten: 10 }, [ 10, 10 ] ]
/* যদিও জাভাস্ক্রিপ্টে Array তে বিভিন্ন টাইপের ডেটা একসাথে রাখা যায়, তারপরও এভাবে ডেটা রাখাটা গুড প্র্যাক্টিস না। আমরা একটা নির্দিষ্ট টাইপের ডেটার একটি Array তে রাখার চেস্টা করব। যেমন আমরা যদি একটা অবজেক্টের Array বানাতে চাই তাহলে নিচের মত কোড লিখতে পারি-
 */
const favChannels = [
	{ name: 'Stack Learner', url: 'https://youtube.com/stacklearner' },
	{ name: 'JS Bangladesh', url: 'https://youtube.com/jsbangladesh' },
	{ name: 'Traversy Media', url: 'https://youtube.com/techguyweb' },
	{ name: 'Wes Bos', url: 'https://youtube.com/wesbos' },
];
//আবার আমরা যদি অনেকগুলো ফাংশন রেফারেন্স রাখার জন্য এ্যারে বানাতে চাই তাহলে নিচের মত কোড লিখতে পারি-

// Array of Functions
/* const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod]; */
//আমরা কিন্তু এখন ইচ্ছে করলেই দুইটি ভ্যারিয়েবলের জন্য সবগুলো ফাংশন একসাথে কল করতে পারি। এজন্য আমাদের একটা ফর লুপ চালাতে হবে-

// Loop and call all functions from array
/* const funcs = [sum, sub, times, div, mod];
const a = 10,
	b = 20;
for (let i = 0; i < funcs.length; i++) {
	const result = funcs[i](a, b);
	console.log(`[${funcs[i].name}] Result = ${result}`);
} */

// [sum] Result = 30
// [sub] Result = -10
// [times] Result = 200
// [div] Result = 0.5
// [mod] Result = 10
//আমরা কিন্তু ইচ্ছে করলেই Array এর Array বানাতে পারি। এসব এ্যারেকে মাল্টি-ডাইমেনশনাল এ্যারে বলা হয়। যেমনঃ

// Array of Arrays - Multi Dimensional Array
/* const pointTable = [
	[0, 0],
	[3, 5],
	[5, 7],
	[10, 23],
]; */
/* এখন আমরা এই মাল্টিডাইমেনশনাল এ্যারেকে দুইভাবে ট্রাভার্স করতে পারি- One Dimensional Traverse এবং Two Dimensional Traverse. প্রথমে আমরা One Dimensional Traverse এর ব্যাপারটা দেখি - 
 */
// One Dimensional Traverse
/* for (let i = 0; i < pointTable.length; i++) {
	 console.log(`Point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);
} */

// Point 0 - x=0 and y=0  
// Point 1 - x=3 and y=5  
// Point 2 - x=5 and y=7  
// Point 3 - x=10 and y=23 
//উপরের ফর লুপে i হচ্ছে প্রতিটা ইন্ডিভিজুয়্যাল এ্যারে।

//এখন আমরা Two Dimensional Traverse এর উদাহরন দেখি-

// for (let i = 0; i < pointTable.length; i++) {
// 	for (let j = 0; j < pointTable[i].length; j++) {
// 		console.log(`Points [${i}, ${j}] = ${pointTable[i][j]}`);
// 	}
// }
// Points [0, 0] = 0   
// Points [0, 1] = 0   
// Points [1, 0] = 3   
// Points [1, 1] = 5   
// Points [2, 0] = 5   
// Points [2, 1] = 7   
// Points [3, 0] = 10  
// Points [3, 1] = 23
/* এখন অনেকেই বলতে পারেন যে আমরা তো one dimensional way তেই Array'র Array ট্রাভার্স করতে পারছি, তাহলে দুইটা for loop ব্যবহার করার দরকার টা কী? One dimension এর উদাহরণে খেয়াল করলেই আমরা দেখতে পারব যে ঐ লুপে আমরা প্রতিটা ইনডিভিজুয়্যাল Array কে i দিয়ে access করতে পারছি, কিন্তু এই ইনডিভিজুয়্যাল Array'র সব এলিমেন্টগুলোকে আমাদের ম্যানুয়্যালি ইনডেক্স ধরে ধরে access করতে হচ্ছে। আমরা যদি pointTable Array'র ভেতরের প্রথম Array তে নতুন একটা আইটেম যোগ করি তাহলে কিন্তু আমাদের এই for loop টা access করতে পারবে না।

অপরদিকে ২য় ক্ষেত্রে আমরা pointTable  Array'র ভেতরের প্রতিটা Arrayর প্রত্যেকটা ইনডিভিজুয়্যাল এলিমেন্টকে ডাইনামিকভাবে access করছি। তাই আমরা ভেতরের যেকোনো Array তে কোনো আইটেম যোগ করলে বা কোনো আইটেম রিমুভ করলেও আমরা ডাইনামিক্যালি access করাতে আমাদের loop ঠিকভাবেই কাজ করবে।

আমরা two dimensional traverse ব্যবহার করে  ম্যাট্রিক্সের যোগের একটা উদাহরণ দেখে ফেলি! */

// Matrix Example
const matrixA = [
	[1, 3],
	[1, 0],
	[1, 2],
];

const matrixB = [
	[0, 0],
	[7, 5],
	[2, 1],
];

const matrixSum = (matrixA, matrixB) => {
	const result = [];
	for (let i = 0; i < matrixA.length; i++) {
		const row = [];
		for (let j = 0; j < matrixA[i].length; j++) {
			row.push(matrixA[i][j] + matrixB[i][j]);
		}
		result.push(row);
	}
	return result;
};

const matrixC = matrixSum(matrixA, matrixB);
//console.log(matrixC); // [ [ 1, 3 ], [ 8, 5 ], [ 3, 3 ] ]
/* আমরা প্রথমে matrixA এবং matrixB নামের দুইটি ম্যাট্রিক্স নিয়েছি। এরপর এই দুটো ম্যাট্রিক্স যোগ করার জন্য একটি ফাংশন লিখেছি matrixSum নামের। আমরা ফাইনাল রেজাল্ট রাখার জন্য প্রথম লুপের বাইরে result নামক একটি ফাঁকা Array ইনিশিয়ালাইজ করেছি। এরপর আমরা two dimensional way তে দুটি ম্যাট্রিক্সের Array কে ট্রাভার্স করে রেজাল্ট Array তে মানগুলো push method দ্বারা result Array তে যোগ করেছি। শেষে আপডেটেড result Array টা আমরা রিটার্ন করেছি।
 */


 /*  two matrix addition */

 const numA= [
	 [1,2,4,5,6],
	 [22,33,44,5,0],
	 [33,32,3,4,5]
	 
 ];
 const numB =[
	 [10,20,30,0,9],
	 [0,11,22,44,1],
	 [7,7,66,5,4]
 ];
function matrixAdd(A,B){
	let result1=[]
	 for(let i =0; i< numA.length;i++){
	const add=[]
	 for(j= 0; j< numA[i].length;j++){
	 add.push(numA[i][j] + numB[i][j])

	 }
	 result1.push(add)
	
 }
  return result1
}

var res= matrixAdd(numA,numB)
//console.log(res)


/* task new for getting only number elements IMPERATIVE WAY */

let combArray=[1,2,3,true,undefined,4,false,6,7,'',8,'text',9,10]

let count =0

for(let i=0; i< combArray.length; i++){

	for(let j=i; j< combArray.length -1; j++){
		if(!combArray[j] || typeof combArray[j] !== 'number' ){
			combArray[j] = combArray[j +1]
			combArray[j +1] = undefined 
		}
	}

	if(combArray[i] === undefined){
	count++
}
}
combArray.length -= count 

console.log(combArray)
 /* 

 [
  1, 2, 3,  4, 6,
  7, 8, 9, 10
]
 
*/
/* task new for getting only number elements DECLARATIVE WAY */


let combArray1=[1,2,3,true,undefined,4,false,6,7,'',8,'text',9,10]

const filterArr= combArray1.filter((v)=> typeof v === 'number')

console.log(filterArr);
/* 
[
  1, 2, 3,  4, 6,
  7, 8, 9, 10
]

*/