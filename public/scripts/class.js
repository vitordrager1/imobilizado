class Pessoa  {

    constructor(idPessoa, nomePessoa, idadePessoa, cpf) {
        this.idPessoa = idPessoa
        this.nomePessoa = nomePessoa
        this.idadePessoa = idadePessoa
        this.cpf = cpf
    }

    getIdPessoa(){
        return this.idPessoa;
    }

    getNomePessoa(){
        return this.nomePessoa;
    }

    getIdadePessoa(){
        return this.idadePessoa;
    }

    getCpf(){
        return this.cpf;
    }

    setNomePessoa(nomePessoa){
        return this.nomePessoa = nomePessoa;
    }

    setIdadePessoa(idadePessoa){
        return this.idadePessoa = idadePessoa;
    }

    setCpf(cpf){
        return this.cpf = cpf;
    }
}

class Funcionario extends Pessoa {

    constructor(idPessoa, idDepartamento, idCargo, dataAdmissao, senha){
        this.idPessoa = idPessoa
        this.idDepartamento = idDepartamento
        this.idCargo = idCargo
        this.dataAdmissao = dataAdmissao
        this.senha = senha
    }

    getIdPessoa(){
        return this.idPessoa;
    }

    getIdDepartamento(){
        return this.idDepartamento;
    }

    getIdCargo(){
        return this.idCargo;
    }

    getDataAdmissao(){
        return this.dataAdmissao;
    }

    getSenha(){
        return this.senha;
    }

    setIdDepartamento(idDepartamento){
        return this.idDepartamento = idDepartamento;
    }

    setIdCargo(idCargo){
        return this.idCargo = idCargo;
    }

    setDataAdmissao(dataAdmissao){
        return this.dataAdmissao = dataAdmissao;
    }

    setSenha(senha){
        return this.senha = senha;
    }
}

class Endereco{

    constructor(id, logradouro, numero, estado, idCidade, idPessoa){
        this.id = id
        this.logradouro = logradouro
        this.numero = numero
        this.estado = estado
        this.idCidade = idCidade
        this.idPessoa = idPessoa
    }

    getId(){
        return this.id;
    }

    getLogradradouro(){
        return this.logradouro;
    }

    getNumero(){
        return this.numero;
    }

    getEstado(){
        return this.estado;
    }
    
    getIdCidade(){
        return this.idCidade;
    }

    getIdPessoa(){
        return this.idPessoa;
    }

    setLogradouro(logradouro){
        return this.logradouro = logradouro;
    }

    setNumero(numero){
        return this.numero = numero;
    }

    setEstado(estado){
        return this.estado = estado;
    }

    setIdCidade(idCidade){
        return this.idCidade = idCidade;
    }

    setIdPessoa(idPessoa){
        return this.idPessoa = idPessoa;
    }
} 


class Cargo {

    constructor(id, nome) {
        this.id = id
        this.nome = nome
    }
    
    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setId(id){
        return this.id = id;
    }

    setNome(nome){
        return this.nome = nome
    }
}

class Departamento {

    constructor(id, nome) {
        this.id = id
        this.nome = nome
    }
    
    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setId(id){
        return this.id = id;
    }

    setNome(nome){
        return this.nome = nome
    }
}



class Imobilizado {

    constructor(plaqueta, descricao, idCategoria, numeroSerie, notaFiscal, dataCompra, valorCompra) {
        this.plaqueta = plaqueta
        this.descricao = descricao
        this.idCategoria = idCategoria
        this.numeroSerie = numeroSerie
        this.notaFiscal = notaFiscal
        this.dataCompra = dataCompra
        this.valorCompra = valorCompra
    }

    
    getPlaqueta(){
        return this.plaqueta;
    }

    getDescricao(){
        return this.descricao;
    }

    getIdCategoria(){
        return this.idCategoria;
    }

    getNumeroSerie(){
        return this.numeroSerie;
    }

    getNotaFiscal(){
        return this.notaFiscal;
    }
    
    getDataCompra(){
        return this.dataCompra;
    }

    getValorCompra(){
        return this.valorCompra;
    }

   
    
    setPlaqueta(plaqueta){
        return this.plaqueta = plaqueta;
    }

    setDescricao(descricao){
        return this.descricao = descricao
    }

    setIdCategoria(idCategoria){
        return this.idCategoria = idCategoria
    }

    setNumeroSerie(numeroSerie){
        return this.numeroSerie = numeroSerie
    }

    setNotaFiscal(notaFiscal){
        return this.notaFiscal = notaFiscal
    }

    setDataCompra(dataCompra){
        return this.dataCompra = dataCompra
    }

    setValorCompra(valorCompra){
        return this.valorCompra = valorCompra
    }

   
}

module.exports = {Pessoa, Funcionario, Endereco, Cargo, Departamento,Imobilizado};