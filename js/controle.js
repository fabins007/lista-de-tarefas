function addTarefa() {
    const input = document.getElementById('inputTarefa');
    const main = document.getElementById('areaLista');   
    //pegar o valor digitado no input
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido 
    if(valorInput) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
        <div class="item-icone">
            
        </div>
        <div class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button class="delete" onclick="deleteItem(this)">Delete</button>
        </div>`;
        
        main.append(itemElement);
    } else {
        console.log('preencha o campo.')  
    }
} 