function searchItems() {
    // Obtém o valor digitado na barra de pesquisa
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase(); // Converte para maiúsculo para facilitar a comparação
    
    // Obtém a lista de itens
    let ul = document.getElementById("itemList");
    let li = ul.getElementsByTagName('li');
    
    // Loop por todos os itens da lista
    for (let i = 0; i < li.length; i++) {
        let item = li[i];
        let textValue = item.textContent || item.innerText;
        
        // Se o item contém o texto digitado, mostra-o, senão, esconde-o
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}


// Definindo variáveis para armazenar o caminho das imagens
let rubiImagem = "imagens/rubi.png";
let safiraImagem = "imagens/safira.png";
let esmeraldaImagem = "imagens/esmeralda.png";
let perolaImagem = "imagens/perola.png";
let turmalinaImagem = "imagens/turmalina.png";

// Agora você pode usar essas variáveis em seu código HTML
