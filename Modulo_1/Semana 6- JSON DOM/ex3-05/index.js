//EX1
// - Crie uma função assíncrona que deve realizar o fetch do endereço do cep
// -- Utilize este endpoint: https://viacep.com.br/ws/01001000/json/ 
// -- Substitua o 01001000 pelo cep digitado no input
// -- Faça a chamada utilizando Fetch e aguarde o resultado
// -- Exiba o resultado no console.log
// - Adicione no button o evento de click para chamar a função criada.
//EX2
// Após implementar o Ex 3, vamos adicionar tratativas na função criada;
// - Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir modal de alerta (alert) informando que o campo precisa ser preenchido
// - Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido modal de alerta (alert) informando que o campo foi preenchido com um cep inválido
// - Em ambos os casos à cima não deve ser realizada a consulta na api de cep


const fetchApi = async () =>{
    let cep = document.getElementById('cep').value
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if(!response.ok){
        const err = await response.json();
        return alert("ocorreu o seguinte erro:", err.message);
    }else{
        const data = await response.json();
        return data
    }
}


const buscarCep = async() =>{
    let cep = document.getElementById('cep').value
    if(cep == ""){
        alert("O campo Cep deve ser preenchido")
    }else if(cep.length < 8){
        alert("Cep invalido")
    }else if(cep.length >= 9){
        alert("Cep invalido")
    }else{
        const data = await fetchApi()
        const resultado = document.getElementById('result');
        console.log(data)
        resultado.textContent = data.logradouro;
        
        }
}

