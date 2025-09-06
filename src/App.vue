<script setup>
  import { ref } from 'vue';

  import SerachContacs from './components/SerachContacs.vue';
  import ListContacts from './components/ListContacts.vue';
  //
  import { getAllContacts } from './services/api.Contacs';
  import { useListaContacs } from './composables/useListaContacs';
  //states
  const { contacList } = useListaContacs()
  

  //let listContacts = getAllContacts()
  const tittle = 'Mi Agenda - Lista de Contactos'

  const clearList = (newList) => {
    contacList.value = newList
  }

  const filterListContact = (kword) => {
    if (kword.trim() === '') {
      contacList.value = getAllContacts()
    }
    contacList.value = contacList.value.filter(
      (contact) => {
        return contact.name.toLowerCase().includes(kword.toLowerCase())
      }
    )

  }
</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">  {{ tittle }} </h1>
    <serach-contacs
      @filterContact="filterListContact"/>

    <list-contacts 
      title="Lista de Resultados"/>

      <div>
        <button 
        class="bg-blue-500 py-1.5 px-5"
        @click="clearList()"
        >Limpiar</button>
      </div>
  </div>
</template>

