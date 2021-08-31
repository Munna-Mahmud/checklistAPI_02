//৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 


const url='https://jsonplaceholder.typicode.com/photos'
fetch(url)
.then (res=> res.json())
.then(data => displayData(data))


const displayData =photos =>{
    const clickResult=document.getElementById('show-photo')

    for(const photo of photos){
        const div=document.createElement('div');
    // console.log(photos)

    div.classList.add('col-md-3','my-3');
    div.innerHTML=`
    <div class="card mt-4"  style="width: 18rem;" >
           <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
      <div  class="card-body">
           <p class="card-text">${photo.title}</p>
      </div>
   </div>
    `;
    clickResult.appendChild(div)
}
}


