window.onload = (event) => {
    let input = document.getElementById('inputTarefa');
    let btnAdd= document.getElementById('btn-add');
    let main = document.getElementById('areaLista');   

    btnAdd.addEventListener('click', this.addTarefa())
};

function addTarefa() {
    //pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio,nem nulo, nem indefinido 
    
    if(valorInput) {
        console.log('valor', valorInput);
        let novoItem = `<div class="item">
        <div class="item-icone">
        <img src="./css/dry-clean.png" width="13%" alt="icone">
        </div>
        <div class="item-nome"> Teste de Tarefas</div>
        <div class="item-botao">
        <button class="delete"> Delete <img src="./css/botao-apagar.png" width="15%"></button>
        </div>`;
        
        main.InnerHTML += novoItem;
        console.log('valor2', valorInput);
    } else {
        console.log('preencha o campo.')  
    }
} 
