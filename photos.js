//৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 


const url = 'https://jsonplaceholder.typicode.com/photos'
fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))

const displayData = photos => {
    const clickResult = document.getElementById('show-photo')

    for (const photo of photos) {
        const div = document.createElement('div');
        // console.log(photos)

        div.classList.add('col-md-3', 'my-3');
        div.innerHTML = `
    <div class="card mt-4" onclick="userClick(${photo.id})" style="width: 18rem;" >
           <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
      <div  class="card-body">
           <p class="card-text">${photo.title}</p>
      </div>
   </div>
    `;
        clickResult.appendChild(div)
    }
};

// after click see the detail 

const userClick =deatilsId =>{
    // console.log(deatilsId)
    const url = `https://jsonplaceholder.typicode.com/photos/${deatilsId}`
    fetch(url)
    .then(res => res.json())
    .then(data => showdata(data))

    const photoDetails= document.getElementById('photos-detail');
    //clear
    photoDetails.innerHTML="";
    window.scrollTo(0,40)
     const showdata = details =>{
         console.log(details)

         const div =document.createElement('div');
         div.classList.add('row')
         div.innerHTML=`
         <div class="card mb-3 col-md-7">
         <img src="${details.url}" class="card-img-top" alt="...">
     </div>
     <div class="card mb-3 col-md-5" style="max-width: 540px;">
         <div class="row g-0">
             <div class="col-md-4">
             <img src="${details.thumbnailUrl}" class="img-fluid rounded-start" alt="...">
             </div>
             <div class="col-md-8">
             <div class="card-body">
                 <p class="card-text">Title Of Photo: ${details.title}</p>
             </div>
             </div>
         </div>
     </div>
     `;
     photoDetails.appendChild(div)
     }
};