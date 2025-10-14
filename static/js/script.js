const products = [
    {
        title: "camera",
        description: "To take pic",
        price: 20000,
        img: "camer.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "Mobile ",
        description: "To paly game",
        price: 20000,
        img: "mobile.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "Pro",
        description: "To show big screen",
        price: 20000,
        img: "pro.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "Samsung mobile",
        description: "To use camera",
        price: 20000,
        img: "s24.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "TV",
        description: "To see movie in big screen",
        price: 20000,
        img: "tv.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "TWS",
        description: "Enjoy the sound",
        price: 20000,
        img: "tws.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "vivo",
        description: "Enjoy mobile",
        price: 20000,
        img: "vivo.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: "vr",
        description: "Enjoy vr ",
        price: 20000,
        img: "vr.jpg",
        discount: 40000,
        off: 50
    },
    {
        title: 'Pilgrim',
        description: 'Advanced Hari Growth Serum',
        price: 297,
        img: 'serum.webp',
        discount: 400,
        off: 50
    },
    {
        title: 'Nerf 2.0',
        description: 'Elite 2.0 Commander',
        price: 917,
        img: 'gun.jpeg',
        discount: 1500,
        off: 50
    },
    {
        title: 'COSCO',
        description: 'Robona pro football',
        price: 645,
        img: 'football.jpeg',
        discount: 1000,
        off: 50
    },

];
const container = document.querySelector(".row");

products.forEach((product, index) => {
    const col = document.createElement('div')
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3'
    col.innerHTML = `
         <div class="card">
            <img src="static/img/product/${product.img}" class="card-img-top imgs">
              <div class="card-body">
                  <h5 class="card-title"> ${product.title} </h5>
                    <p class="card-text">${product.description} </p>
                    <p><del><span style="color: gray;">Rs:${product.discount}</span></del
                    <small><sup style="color:red">${product.off}%</sup></small>
                    <strong style="color: black; text-decoration: none;> <span style="color: black; text-decoration: none;"> Rs:${product.price}</span></p>
                        <button class=" btn btn-secondary text-light" data-index = "${index}">Add to cart</button>
                </div>
         </div>
    `
    container.appendChild(col);
});