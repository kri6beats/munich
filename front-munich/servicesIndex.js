async function getCars(){
    const res=await fetch("http://localhost:4000/productos");
    const resjson=await res.json();
    return resjson;
    }
    