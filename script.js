let nextBtn=document.querySelector(".nextBtn")
let prevBtn=document.querySelector(".prevBtn");
let page=1;
let pageSize=50;
const nextPage=()=>{
  page=page+1; 
  fetchData(page);
}
const prevPage=()=>{
  page=page-1;
 
  fetchData(page);
}
const home=()=>{
  page=1;
  fetchData(page);
}



const fetchData=(page)=>{
  let response=fetch(`https://picsum.photos/v2/list?page=${page}&limit=${pageSize}`);
response.then((v)=>{
    return v.json();
}).then((v)=>{
    
    ihtml=""
    v.forEach(element => {
        ihtml+=` 
        <div class="card mx-2 my-2" style="width: 22rem;">
                <img src="${element.download_url}" class="card-img-top" style="max-height: 200px; object-fit: cover;" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${Number.parseInt(element.id)+1}.Author [ ${element.author} ]</h5>
                  <p class="card-text">Width: ${element.width}px</p>
                  <p class="card-text">Height:${element.height}px</p>
                  <a  target="_blank" href="${element.download_url}" class="btn btn-primary">Full View</a>
                </div>
              </div> `
            });
            cardContainer.innerHTML=ihtml;
})
}
fetchData(page);