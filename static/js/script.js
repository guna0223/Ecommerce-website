const products = [
    {
        title: "camera",
        description: "To take pic",
        price: 20000,
        img: "camer.jpg"
    },
    {
        title: "Mobile ",
        description: "To paly game",
        price: 20000,
        img: "mobile.jpg"
    },
    {
        title: "Pro",
        description: "To show big screen",
        price: 20000,
        img: "pro.jpg"
    },
    {
        title: "Samsung mobile",
        description: "To use camera",
        price: 20000,
        img: "s24.jpg"
    },
    {
        title: "TV",
        description: "To see movie in big screen",
        price: 20000,
        img: "tv.jpg"
    },
    {
        title: "TWS",
        description: "Enjoy the sound",
        price: 20000,
        img: "tws.jpg"
    },
    {
        title: "vivo",
        description: "Enjoy mobile",
        price: 20000,
        img: "vivo.jpg"
    },
    {
        title: "vr",
        description: "Enjoy vr ",
        price: 20000,
        img: "vr.jpg"
    },
    {
        title: 'Pilgrim',
        description: 'Advanced Hari Growth Serum',
        price: 297,
        img: 'serum.webp'
    },
    {
        title:'Nerf 2.0',
        description:'Elite 2.0 Commander',
        price:917, 
        img:'gun.jpeg',
    }

]
const container = document.querySelector(".row")

products.forEach(product => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3'
    col.innerHTML = `
         <div class="card">
            <img src="static/img/product/${product.img}" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title"> ${product.title} </h5>
                    <p class="card-text">${product.description} </p>
                     <strong><p style="color: black;"> ₹ ${product.price}</p></strong>
                        <button class=" btn btn-secondary text-light">Add to cart</button>
                </div>
         </div>
    `
    container.appendChild(col);
});


