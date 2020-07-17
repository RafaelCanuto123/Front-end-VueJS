import {http} from './config';

export default({
    listar:() => {
        return http.get('veiculos');
    },
    salvar:(veiculo) => {
        return http.post('veiculos',veiculo)
    },
    atualizar:(veiculo) => {
        return http.patch('veiculos/'+ veiculo.id,veiculo)
    },
    apagar:(veiculo) =>{
        console.log('chegou aqui!')
        return http.delete('veiculos/'+ veiculo)
    }
})