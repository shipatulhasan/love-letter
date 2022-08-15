document.getElementById('loveBtn').addEventListener('click',function(event){
    document.getElementById('heading').innerText = 'Heyyyyyyyyy, Babyyyyyyy'
    document.getElementById('latter').innerHTML = `
    <img src="./bears-cute.gif" alt="" srcset="">`
    const love = document.createElement('div')
    love.innerHTML = `
    <h5 class="fs-1 text-danger fw-bold">I love You <img class="img-fluid"style="width:50px ;height:50px;" src="./ed5a6203d1155e2dd836606521d8f189.png" alt=""></h5>`
    document.getElementById('card').appendChild(love)

    const btn = event.target
    btn.remove()
})