const form = document.querySelector('#form-capsula');
const lsita = document.querySelector('#lista');
const aviso = document.querySelector('#aviso');

let capsulas = [
    {
        id: 1,
        autor: 'Marcos Vinicius',
        titulo: ' Para mim em 2030',
        mensagem: 'Espera ter ganhado na Mega Sena',
        abre_em: '2030-01-01T00:00:00Z'
    },
    {
        id: 2,
        autor: 'Professor',
        titulo: 'Bem-vindos'
        mensagem: 'Esta cápsula já foi aberta',
        abre_em: '2020-01-01T00:00:00Z'
    }
];

function calcularContagem(datafura) {
    const diferenca = new Date(datafutura) - new Date();
    if (diferenca <=0) {
        return null;
    }
    const dias = Math.floor(diference / (1000 * 60 * 60* 24));
    const horas = Math.floor(diference / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    return `${dias}d ${horas}h ${minutos}min`;
}

function desenhar() {
    lista.innerHTML = '';
    for (const c of capsulas) {
        const contagem = calcularContagem(c.abre_em);

        const artigo = document.createElement('article');
        artigo.className = contagem ? 'capsula trancada' : 'capsula aberta';

        const titulo = document.createElement('h3');
        titulo.textContent = (contagem ? '' : '') + c.titulo;
        
        const autor = document.createElement('small')
        autor.textContent = 'por' + c.autor;

        const corpo = document.createElement('p');
        if (contagem) {
            corpo.className = 'contagem';
            corpo.textContent = 'Abre em' + contagem;
        } else {
            corpo.textContent = c.mensagem;
        }

        artigo.append(titulo, autor, corpo);
        lista.append(artigo)
    }
}

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const abreEm = new Date(form.abre_em.value);
    iif (abreEm <= new Date()) {
        aviso.textContent = 'Escola uma data no futuro';
    }

    capsulas.unshift ({
        id: Date.now
    })
})