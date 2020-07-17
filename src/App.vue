<template>
  <div id="app">
    
    <nav>
    <div class="nav-wrapper" style="background-color:black;">
      <a href="#" class="brand-logo">Veículos</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Relação de Veí</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> -->
      </ul>
    </div>
  </nav>
  <div class="container">
    <div id="app">
    <form @submit.prevent="salvar" v-on:submit.prevent="checkForm">
      <label>Placa</label>
      <input type="text" placeholder="Placa" v-model="veiculo.placa">
      <label>Cidade</label>
      <input type="text" placeholder="Cidade" v-model="veiculo.cidade">
      <label>KM Atual</label>
      <input type="text" placeholder="KM Atual" v-model="veiculo.km_atual">
      <label>E-mail Proprietário</label>
      <input type="email" placeholder="E-mail Proprietário" v-model="veiculo.email_proprietario" id="email">
      <button class="btn btn-success">Salvar</button>     
    </form>
    <ul v-for="error in errors" :key="error" >{{errors}}</ul>
    </div>
  </div>
  
  <div class="container">
    <h3>Relação de veículos</h3>
    
    <table class="responsive-table">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Cidade</th>
          <th>KM Atual</th>
          <th>E-mail Proprietário</th>
          <th>Operações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="veiculo of veiculos" :key="veiculo.id">
          <td>{{veiculo.placa}}</td>
          <td>{{veiculo.cidade}}</td>
          <td>{{veiculo.km_atual}}</td>
          <td>{{veiculo.email_proprietario}}</td>
          <td>
            <button @click="editar(veiculo)" class="waves-effect waves-light btn-small" title="Editar"><i class="fa fa-edit"></i></button>
            <button @click="excluir(veiculo)" class="waves-effect waves-light btn-small red" title="Deletar"><i class="fa fa-remove"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>

import  veiculo from './services/veiculos'
import {http} from './services/config'
import Axios from 'axios'
export default {

  data(){
    return {
      veiculo: {
        id : '',
        placa : '',
        cidade : '',
        km_atual : '',
        email_proprietario : ''
        
      },
      veiculos : [],
      errors: [],
    }
  },

  mounted(){
    this.listar()
  },
  methods:{
   
    
    listar(){
      veiculo.listar().then(resposta => {
      this.veiculos = resposta.data
    })
    
    },
    salvar(){
      if(!this.veiculo.id){
        veiculo.salvar(this.veiculo).then(resposta => {
        this.veiculo = {}
        alert('Salvo com sucesso!')
        this.listar()
      })
      }else {
         veiculo.atualizar(this.veiculo).then(resposta => {
          this.veiculo = {}
          alert('Atualizado com sucesso!')
          this.listar()
      })

      }
      
    },
    editar(veiculo){
      this.veiculo = veiculo
    },
    excluir(veiculo){
      http.delete('https://dev-front-end-teste.sinersoft.com.br/veiculos/'+ veiculo.id).then(resposta => {
        alert('deletado com sucesso!')
        this.listar()
      })
      
    }
  }
}

</script>

<style>

</style>
