window.addEventListener('keydown', function(e) {
    if (e.key === 'F5' || (e.key === 'r' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault(); // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === 'z' && (e.ctrlKey || e.metaKey)) && posAluno !== 175) {
        e.preventDefault();
        undo() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '1' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Inf() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '2' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Cav() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '3' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Art() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '4' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Eng() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '5' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Int() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '6' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Com() // Cancela o recarregamento da página
    }
});

window.addEventListener('keydown', function(e) {
    if ((e.key === '7' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        Mat() // Cancela o recarregamento da página
    }
});

let CtrlP = false
let MestraActivate = false

window.addEventListener('keydown', function(e) {
    if ((e.key === 'p' && (e.ctrlKey || e.metaKey)) && !MestraActivate) {
        e.preventDefault();
        if(CtrlP){
            alert('Tela de arma escolhida Ativada')
        }
        else{
            alert('Tela de arma escolhida Desativada')
        }
        CtrlP = !CtrlP
    }
});


document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi a barra de espaço
    if (event.code === 'Space' && MestraActivate) {
        // Evita que a página role para baixo (comportamento padrão do espaço)
        event.preventDefault();
        CloseMestra()
    }
});

const Mestra = document.querySelector('#Mestra') 

function ControlMestra(index){
    if (!CtrlP) {
        MestraActivate = true
        Mestra.classList.remove('OcultMestra')
        document.querySelector('#AluM').innerHTML = Alunos[posAluno][1]
        document.querySelector('#imgMestra').innerHTML = `<img src="imgG/${imgArmas[index]}G.png" alt="" id="imgM"></img>`
        document.querySelector('#ArmaM').innerHTML = nomeArmas[index].toUpperCase()
    }
}

function CloseMestra(){
    MestraActivate = false
    Mestra.classList.add('OcultMestra')
}

function abrirModal() {
    document.getElementById("modalAuto").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalAuto").style.display = "none";
    Undo.style.display = "none"
    Showtb = false
    BtnClass()
    for (let i = 0; i < 175; i++) {
            document.querySelector('.GeralClass').innerHTML += `<tr><th>${i}</th><th>${Alunos[i + 1][0]}
            </th><th>${Alunos[i + 1][1]}</th></tr>`            
        }
    btnClass.style.display = "none"
}

const imgArmas = [
    'infantaria',
    'cavalaria',
    'artilharia',
    'engenharia',
    'intendencia',
    'comunicacoes',
    'matbel',
]

const nomeArmas = [
    'Infantaria',
    'Cavalaria',
    'Artilharia',
    'Engenharia',
    'Intendência',
    'Comunicações',
    'Material Bélico',
]

let escolhasArmas = [[],[],[],[],[],[],[]]

const armas = [nomeArmas, imgArmas]
const alunoPos = document.querySelector('.PosAluno')
const tbCont = document.querySelector('#tbContainer')
const Undo = document.querySelector('#undo')
const txtUndo = document.querySelector('.txtUndo')
const btnClass = document.querySelector('#btnClass')

let posAluno = 0

let Alunos = [
    ['POS', 'Nº', 'NOME DE GUERRA'],
    [402, 'SCHINEIDER'], 
    [508, 'LUCAS MENDES'], 
    [104, 'LUCCA'],
    [101, 'MALDONADO'], 
    [102, 'MOTTA'], 
    [103, 'MENDES'],
    [107, 'OSTROWSKI'], 
    [108, 'ALMEIDA'], 
    [109, 'MALTEZ'], 
    [110, 'PARANHOS'],
    [111, 'MARINHO'], 
    [112, 'SANTANA'], 
    [113, 'SABINO'], 
    [114, 'FERES'], 
    [115, 'BRITO'],
    [116, 'PAIVA'], 
    [117, 'LIRA'], 
    [118, 'RIOS'], 
    [119, 'NEVES'], 
    [502, 'ISSHIKI'], 
    [120, 'PERES'],
    [121, 'MONTEIRO'], 
    [122, 'MASCARENHAS'], 
    [123, 'DEZERTO'], 
    [124, 'AZEVEDO'], 
    [125, 'RODRIGUES'],
    [126, 'LUCAS SANTOS'], 
    [127, 'PERILLO'], 
    [128, 'MORETTI'], 
    [129, 'LIMA'], 
    [130, 'MATIASI'],
    [201, 'TRINHAIN'], 
    [202, 'CAMILO'], 
    [203, 'AGRASSO'], 
    [204, 'FRANCO'], 
    [205, 'CASTRO'],
    [206, 'DELNERI'], 
    [501, 'BUENO'], 
    [207, 'COSTA'], 
    [208, 'FONSECA'], 
    [209, 'CRUZ'], 
    [210, 'SILVA LIMA'],
    [211, 'PINSKY'], 
    [212, 'REGO'], 
    [213, 'ARTHUR OLIVEIRA'], 
    [214, 'CHINEN'], 
    [215, 'LYMBERIS'],
    [216, 'GAMBOA'], 
    [217, 'VALERIO'], 
    [218, 'VAIRO'], 
    [219, 'G. SILVA'],
    [221, 'LUZO'], 
    [222, 'SOARES'],
    [223, 'ROSA'], 
    [224, 'MIGUEL OLIVEIRA'], 
    [225, 'SILVA'],
    [226, 'CESAR'], 
    [227, 'MOREIRA'], 
    [228, 'VIEIRA'], 
    [229, 'TAVANO'],
    [301, 'TEIXEIRA'], 
    [302, 'AIDAR'], 
    [303, 'GUSTAVO'], 
    [304, 'EVARISTO'], 
    [305, 'FERREIRA'],
    [307, 'LUNA'], 
    [308, 'GOY'], 
    [309, 'GENEROZO'], 
    [310, 'MATEUS'],
    [311, 'AMARAL'], 
    [312, 'GUILHERME MEVES'], 
    [313, 'FRANCISCHINI'], 
    [314, 'MOURA'], 
    [315, 'PINTON'],
    [316, 'SERRA'], 
    [317, 'FARIAS'], 
    [318, 'PASSOS'], 
    [319, 'PABLO'], 
    [320, 'LUPIANES'],
    [321, 'MIGUEL'], 
    [322, 'MARQUES'], 
    [323, 'MURILO'], 
    [324, 'DA SILVA'], 
    [325, 'MIRA'],
    [326, 'MAKHLOUF'], 
    [327, 'IWASSAKI'], 
    [328, 'DELGADO'], 
    [329, 'COELHO'],
    [401, 'BEZERRA'], 
    [403, 'ROCHE'], 
    [404, 'TISAKA'], 
    [405, 'PALACIO'],
    [406, 'ALENCAR'], 
    [407, 'DANIEL ALVES'], 
    [408, 'FAVARO'], 
    [409, 'PINESE'], 
    [410, 'OTAVIO LIMA'],
    [411, 'RIBEIRO'], 
    [412, 'PARIZOTTO'], 
    [413, 'MARGONI'], 
    [414, 'MEDEIROS'], 
    [415, 'PONTES'],
    [416, 'MAYER'], 
    [417, 'JOAO VITOR'], 
    [418, 'CARLOS'], 
    [419, 'ARAUJO'], 
    [420, 'MATIELLO'],
    [421, 'ALEXANDRE'], 
    [422, 'PAFFILE'], 
    [423, 'QUEIROZ'], 
    [424, 'CICOTI'], 
    [425, 'GOMES'],
    [426, 'FALCONI'], 
    [427, 'DE JESUS'], 
    [428, 'ZION'], 
    [429, 'DIAS'],
    [503, 'ISIDRO'], 
    [504, 'CANATO'], 
    [505, 'CAZOTTI'],
    [506, 'LASTRI'], 
    [507, 'MILAN'], 
    [509, 'RODRIGUEZ'], 
    [510, 'IADANZA'],
    [511, 'BARRIOS'], 
    [512, 'AMORIM'], 
    [513, 'MAGALHAES'], 
    [514, 'WENDELL'], 
    [515, 'GUEDES'],
    [516, 'SANTOS'], 
    [517, 'LOPES'], 
    [518, 'ABDALLA'], 
    [519, 'VICENTE'], 
    [520, 'BARBOSA'],
    [521, 'BIFULCO'], 
    [523, 'LAVOISIER'], 
    [524, 'NETO'], 
    [525, 'BUCHLER'],
    [526, 'GIULIANO'], 
    [527, 'FERFOGLIA'], 
    [528, 'DE SOUZA'], 
    [529, 'ALVES'],
    [601, 'BARRETO'], 
    [602, 'SANCHEZ'], 
    [603, 'R. SILVA'], 
    [604, 'LEONI'], 
    [605, 'MARTINS'],
    [606, 'CONSTANTINO'], 
    [607, 'OLIVEIRA'], 
    [608, 'GONCALVES'], 
    [609, 'KALIL'], 
    [610, 'TAYAR'],
    [611, 'COLADO'], 
    [612, 'MAIA'], 
    [613, 'LACERDA'], 
    [614, 'MORAIS'], 
    [615, 'TOSELLI'],
    [616, 'HANSER'], 
    [617, 'MELLO'], 
    [618, 'MARCOLINO'], 
    [619, 'RIKELME'], 
    [620, 'FERRAZ'],
    [621, 'BASTOS'], 
    [622, 'DANTAS'], 
    [623, 'BATISTA'], 
    [624, 'ANUNCIATO'], 
    [625, 'MACIEL'],
    [626, 'DE ALMEIDA'], 
    [627, 'ALBUQUERQUE'], 
    [628, 'FERNANDES'], 
    [629, 'BENVENUTO']
];

margem = 175 - Alunos.length + 1
for (let i = 0; i < margem; i++) {
    Alunos.push(['000','DESLIGADO'])
}


const card = `
<div class="card" id="Arma%%%">
</div>
`
function att(arma, index, origem = 'do'){
    if(posAluno < 175){
        alunoPos.innerHTML = 
        posAluno !== 174?`<h1>ESCOLHA: ${posAluno + 1}º Lugar Al ${Alunos[posAluno + 1][0]} - ${Alunos[posAluno + 1][1]} </h1>
            <br><h3>PRÓXIMO: ${posAluno + 2}º Lugar Al ${Alunos[posAluno + 2][0]} - ${Alunos[posAluno + 2][1]}</h3>`
            :`<h1>ESCOLHA: ${posAluno + 1}º Lugar Al ${Alunos[posAluno + 1][0]} - ${Alunos[posAluno + 1][1]} </h1>`
        }
        else{
            alunoPos.innerHTML = '<h1>Escolhas Finalizadas!</h1>'
        }
        if(posAluno != 0 && origem !== 'undo'){
            Undo.style.display = "inline"
            escolhasArmas[index].push(posAluno)
        }

        arma.innerHTML = `
        <div id="X" class="Y">
            <img src="img/X.png" alt="X" class="Ximg"/>
        </div>
        <div class="txtCard">
            <h3 class="NomeArma">
                ${armas[0][index]}
            </h3>
        </div>
        <div class="imgCard">
            <img src="img/${armas[1][index]}.png" alt="Brasão de ${armas[0][index]}" class="imgArma"/>
        </div>
        <div id="Progress" class="progBar${index}"></div>
        <div class="vagas">
            <p class="pNumero">${25-escolhasArmas[index].length}</p>
            <p class="pButton">Vagas Restantes</p>
        </div>
        `

        if(25-escolhasArmas[index].length === 0){
            arma.classList.remove('card')
            arma.classList.add('disable')


            document.querySelectorAll('#X')[index].classList.remove('Y')
            document.querySelectorAll('#X')[index].classList.add('X')

        }
        if(posAluno == 175){
            abrirModal();
        } 
        gerarTbClass()
    }
    const cardContainer = document.querySelector('#cards')
    
    for (let i = 0; i < nomeArmas.length; i++) {
        cardContainer.innerHTML += card.replaceAll('%%%', i+1)
        att(document.querySelector(`#Arma${i+1}`), i)
    }
    
    
    function gerarTbClass(){

        tbCont.innerHTML =`
        <h1>Classificação</h1>
        <br>
        <div id="GeralClass">
            <table class="GeralClass"><thead>
                <tr><th>POS</th><th>Nº</th><th>NOME DE GUERRA</th></tr></thead><tbody></tbody>
                </table>
            </div>`

        const tabela = document.querySelector('.GeralClass')

        for (let i = 0; i < (Alunos.length - posAluno - 1); i++) {
            tabela.innerHTML += `<tr><th>${posAluno + i + 1}</th><th>${Alunos[posAluno + i + 1][0]}
            </th><th>${Alunos[posAluno + i + 1][1]}</th></tr>`            
        }

    }




    const infantaria = document.querySelector('#Arma1')
    infantaria.addEventListener("click", Inf)
    const cavalaria = document.querySelector('#Arma2')
    cavalaria.addEventListener("click", Cav)
    const artilharia = document.querySelector('#Arma3')
    artilharia.addEventListener("click", Art)
    const engenharia = document.querySelector('#Arma4')
    engenharia.addEventListener("click", Eng)
    const comunicacoes = document.querySelector('#Arma6')
    comunicacoes.addEventListener("click", Com)
    const matbel = document.querySelector('#Arma7')
    matbel.addEventListener("click", Mat)
    const intendencia = document.querySelector('#Arma5')
    intendencia.addEventListener("click", Int)
    
    const ObjArma = [infantaria, cavalaria, artilharia, engenharia, intendencia, comunicacoes, matbel]

function Inf(){
    if(25-escolhasArmas[0].length < 1){
        infantaria.removeEventListener(Inf)
    }
    posAluno++
    ControlMestra(0)
    att(infantaria, 0)
    ProgressBar(0)
}
function Cav(){
    if(25-escolhasArmas[1].length < 1){
        cavalaria.removeEventListener(Cav)
    }
    posAluno++
    ControlMestra(1)
    att(cavalaria, 1)
    ProgressBar(1)
}
function Art(){
    if(25-escolhasArmas[2].length < 1){
        artilharia.removeEventListener(Art)
    }
    posAluno++
    ControlMestra(2)
    att(artilharia, 2)
    ProgressBar(2)
}
function Eng(){
    if(25-escolhasArmas[3].length < 1){
        engenharia.removeEventListener(Eng)
    }
    posAluno++
    ControlMestra(3)
    att(engenharia, 3)
    ProgressBar(3)
}
function Com(){
    if(25-escolhasArmas[5].length < 1){
        comunicacoes.removeEventListener(Com)
    }
    posAluno++
    ControlMestra(5)
    att(comunicacoes, 5)
    ProgressBar(5)
}
function Mat(){
    if(25-escolhasArmas[6].length < 1){
        matbel.removeEventListener(Mat)
    }
    posAluno++
    ControlMestra(6)
    att(matbel, 6)
    ProgressBar(6)
}
function Int(){
    if(25-escolhasArmas[4].length < 1){
        intendencia.removeEventListener(Int)
    }
    posAluno++
    ControlMestra(4)
    att(intendencia, 4)
    ProgressBar(4)
}

document.querySelector("#modalTry").addEventListener("click", verArma)

function attTbArma(arma, index){
    arma.innerHTML = `
    <div class="txtCard">
            <h3 class="NomeArma">
                ${armas[0][index]}
            </h3>
        </div>
        <div class="tbAlu_Arma">
            <table class="tbArma" id="tb${index}"><thead>
            <tr><th>POS</th><th>Nº</th><th>NOME DE GUERRA</th></tr></thead><tbody id="tb${armas[1][index]}"></tbody>
            </table>
        </div>`
        const Alu = arma.querySelector(`#tb${armas[1][index]}`)
        Alu.innerHTML += `

        function ProgressBar(index){
    const porcent = 25 - armas[index].length        }
`
        for(i = 0; i < escolhasArmas[index].length; i++){
            Alu.innerHTML += `<tr><th>${escolhasArmas[index][i]}</th><th>${Number(String(index + 1) + Alunos[escolhasArmas[index][i]][0])}</th><th>${Alunos[escolhasArmas[index][i]][1]}</th></tr>`
        }
        arma.classList.remove('disable')
        arma.classList.add('card1')
        arma.innerHTML += `
        <div id="download${index}" class="down" onclick="exportExcel(${index})"><img src="img/download.png" alt="download" class="imgDown"/></div>
        `
}


function exportExcel(index){
    const stringsSubs = [
        ['</tr>', '<tr>', '</th>', '<th>', 'thead', '</tbody>', 'table', '/', '<','>', 'class="tbArma"', `id="tb${index}"`, 'tbody', `id="tb${imgArmas[index]}"`],
        [`
`, '', ';', '', '', '', '', '','', '', 'ALUNOS CURSO DE', `${nomeArmas[index].toUpperCase()} - 2026`, '', '']
    ]

    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(`tb${index}`);

    let formatTable = tableSelect.outerHTML.replace(/ /g, '%20')
    for (let i = 0; i < stringsSubs[0].length; i++) {
        formatTable = formatTable.replaceAll(stringsSubs[0][i], stringsSubs[1][i])
    }

    var tableHTML = formatTable


    // Especificando o nome do arquivo
    filename = `Alunos_${armas[0][index].toUpperCase()}_2026.xls`;
    
    // Criando o elemento para download do arquivo
    downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
      
    // Criando o link do arquivo
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    // Setando o nome do arquivo
    downloadLink.download = filename;
    //Acionando a função
    downloadLink.click();
    }

function verArma(){
    fecharModal()
    for (let index = 0; index < 7; index++) {
        attTbArma(ObjArma[index], index)
    }
}

txtUndo.addEventListener("click", undo)
btnClass.addEventListener("click", BtnClass)

let Showtb = false
function BtnClass(){
    Showtb = !Showtb
    if (Showtb) {
        tbCont.style.display = "unset"
        btnClass.innerHTML = '<h3>Ocultar Classificação</h3>'
    }
    else{
        btnClass.innerHTML = '<h3>Mostrar Classificação</h3>'
        tbCont.style.display = "none"
    }
}

function undo(){
    for(index = 0; index < 7; index++){
        if(escolhasArmas[index][escolhasArmas[index].length - 1] == posAluno) {
            escolhasArmas[index].pop()
            posAluno--
            if(posAluno == 0){
                Undo.style.display = "none"
            }
            if(escolhasArmas[index].length == 24){
                ObjArma[index].classList.remove('disable')
                ObjArma[index].classList.add('card')
            }
            att(ObjArma[index], index, 'undo')
            ProgressBar(index)  
            break
        }
    }

}


function ProgressBar(index){
    let porcent = 0
    porcent = Math.round(escolhasArmas[index].length / 25 * 100)

    const element = document.querySelector(`.progBar${index}`)
    let stringColor = ''
    for(i = 0; i < 100; i++){
        stringColor += ', '
        if(porcent){
            stringColor += 'red'
            porcent--
        }
        else{
            stringColor += 'white'    
        }
    }
    element.style.background = `linear-gradient(to right ${stringColor})`
}


console.log(`Guia de Atalhos - Início PFA, CPOR/SP 2026

Por padrão f5 e CTRL + R estão bloqueados, caso precise recarregar a página utilize o botão do navegador.

Atalhos:
Espaço - Pular tela "Arma Escolhida"
Ctrl + 1 - Escolher Infantaria
Ctrl + 2 - Escolher Cavalaria
Ctrl + 3 - Escolher Artilharia
Ctrl + 4 - Escolher Engenharia
Ctrl + 5 - Escolher Intendência
Ctrl + 6 - Escolher Comunicações
Ctrl + 7 - Escolher Material Bélico
Ctrl + Z - Desfazer Escolha 
Ctrl + P - Bloquear/Desbloquear tela "Arma Escolhida"
`)