// $(document).ready(function(){
//   $.getJSON('http://www.omdbapi.com/?apikey=4fd4c906&s=cyberpunk', function(d){
//     let data = d.Search
//     $.each(data, (i, e) => {
//       $('#items').append(`
//           <div class="card w-40 h-48 bg-white shadow rounded overflow-hidden ">
//               <img src="${e.Poster}" alt="" srcset="" class="h-full">
//           </div>
//       `)
//     })
//     $('#cover').prop('src', `${d.Search}`)
//   })
// })

var xhr = new XMLHttpRequest();

xhr.open('GET', 'public/data/data.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText)

    const items = document.getElementById('items')

      data.forEach(function (item) {
        var card = document.createElement('div');
        card.className = 'card w-40 h- bg-white shadow rounded overflow-scroll overflow-hidden';
        card.dataset.judul = item.judul
        card.dataset.video = item.video
      
        var image = document.createElement('img');
        image.src = item.gambar;
        image.className = 'h-full w-full rounded'
        image.alt = '';
      
        card.appendChild(image);
        items.appendChild(card);

        const modalContainer = document.querySelector('.modal-container')

        card.addEventListener('click', function(){
          modalContainer.style.display = 'block'
          modalContainer.innerHTML = `
            <div class="modal-box-outer" style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                <div class"modal-box-inner" style="width: 600px; background: #0a0a0a; border-radius: 4px; position: relative">
                    <div class="modal-navigation" style="width: 100%; display: flex; justify-content: space-between; position: absolute; left: 0; padding: 0 20px;">
                        <p></p>
                        <p style="color: #fff; z-index: 120; cursor: pointer;" id="close">x</p>
                    </div>
                    <div class="modal-video">
                        <video src="${card.dataset.video}" style="border-radius: 4px;" autoplay loop><video>
                    </div>
                    <div class="info" style="background: #0a0a0a; position: absolute; bottom: 0; width: 100%; border-radius: 4px;">
                        <div class="side-left">
                          <div class="left-val" style="padding: 10px 20px;">
                            <p style="font-size: 30px; color: #fff; font-weight: bold;">${card.dataset.judul}</p>
                          </div>
                        </div>
                        <div class="side-right">

                        </div>
                    </div>
                </div>
            </div>
          `
          const video = document.querySelector('.modal-box-outer .modal-box-inner .modal-video video')
          const close = document.getElementById('close')
              close.addEventListener('click', function(){
              modalContainer.style.display = 'none'
          })
        })
      })      
    }
  }

xhr.send();

const searchContainer = document.querySelector('.search-container')
const search = document.getElementById('search')
const searchBox = document.querySelector('.search-box')
let clicked = false

search.addEventListener('click', function(){
  if (clicked){
    searchBox.style.width = '0'
    clicked = false
  } else {
    searchBox.style.width = '200px'
    clicked = true
  }
  console.log(clicked)
})