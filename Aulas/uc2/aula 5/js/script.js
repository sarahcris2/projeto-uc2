// funçao que captura os dados do formulario e exibe via document.write
function exibirDados(){
// captura os valores dos inputs
let nome = document.getElementById('nome').value;
let tel = document.getElementById('movel').value;
let email = document.getElementById('correio').value;

// usando document.write para exibir os dados na pagina
document.write('<h2>dados recebidos:</h2>');
document.write('<p><strong>Nome:</strong>'+ nome +'</p>')
document.write('<p><strong>Telefone:</strong>'+ tel +'</p>')
document.write('<p><strong>E-mail:</strong>'+ email +'</p>')
}