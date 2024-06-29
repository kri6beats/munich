const cards=document.getElementById("card-container");
function createCards(productos){
    for(let i=0;i<productos.length;i++){
        const producto=productos[i];
        const newCard=document.createElement("div");
        newCard.classList.add("card-product");
        newCard.innerHTML=`
       <div class="card">
                <b></b>
                <img src="${producto.IMAGEN}" alt="imagen">
                <div class="content">
                    <div class="title">
                        ${producto.NOMBRE}
                        <span>$${producto.PRECIO}</span>
                    </div>
                    <div class="description">${producto.DESCRIPCION}</div>
                    <div class="history">${producto.HISTORIA}</div>
                    
                </div>
            </div>

        `

        cards.appendChild(newCard);
    }
}
getCars().then(car=>{

    createCards(car);
})

