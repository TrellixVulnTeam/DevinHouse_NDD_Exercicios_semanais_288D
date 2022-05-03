

let consular = document.getElementById('consultar')

const fetchApi = async () =>{
    let uf = document.getElementById('uf').value
    let rua = document.getElementById('rua').value
    let cidade = document.getElementById('cidade').value
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`)
    if(!response.ok){
        const err = await response.json();
        return alert("ocorreu o seguinte erro:", err.message);
    }else{
        const data = await response.json();
        console.log(data)
        return data
        
    }

}

const buscarCep = async() =>{
    const data = await fetchApi()

}


consular.addEventListener('click',buscarCep)
