//১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 


const person= {
    name: 'miju ahmed',
    id: 102,
    color: 'white',
    isGood: true,
    adress: 'dinajpur',
    Job :{
    company: 'table xi',
    salary: 5000,
    position: 'manager',
    },
    books:[' kamila', 'camila', ' namila', 'rumila'],
     method:function (){
      return this.name;
  }
    
}
const result=person.method()
console.log(result)



// maruf code 

// const student = {
//     stuInfo: {
//         name: "Md Rocky",
//         gpa: 4.00,
//         year: "3rd Semister"
//     },
//     subject: [ 'Mathmatics', 'Physics','English','Bangla'],
//     educationBill: function(  ){
//         return this.stuInfo;
//     }

// };
// const studentInfo= student.educationBill();
// console.log(studentInfo); // eita diye ekta full properti retunr koralam



//২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 



//৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 


const shunno = () =>{
    return 89;
}

//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
 const devided= (div) =>{
     return div / 7;
 }
console.log(devided(49))

//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const multi= (para1, para2) => {
    return (para1 + para2) / 2;
}
console.log(multi(10, 10))


//৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const number =[12, 63, 345, 45, 98, 64, 90]
const result= number.map(number => number /7)
console.log(result)

//৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
// array is one kind of object which is high level and list object 
// map is a new arary which is create after doing somethig with an previous array
//filter is alomost similet to the map but if it return true then it will be create a new array otherwise nothing 
// find hocce amkta array er modhe first er tar sogge mile jabe oitai retuin korbe mane find er condition mile gele r ki 



//৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const student = {
        name: "Md Rocky",
        gpa: 4.00,
        year: "3rd Semister"
    }

    const { name, gpa:balance, year}=student;
console.log(name)
console.log(balance)
console.log(year)



