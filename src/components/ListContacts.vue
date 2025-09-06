<script setup>
    import { computed, watch, watchEffect } from 'vue';
    //import
    import { useListaContacs } from '../composables/useListaContacs';
    import BtnDelete from './Btn.Delete.vue';
    //props
   const props = defineProps({
        title: {
            type: String,
            defaul: 'Lista'
        },
   })
   //states composables
   const { contacList, msjEmpy, showEmpy } = useListaContacs()

   //watchers
   //watch(contacList, (newValue, oldValue) => {
    //console.log(newValue, oldValue)
    //showEmpy('No se encontro resultados')
   //})

   watchEffect(() => {
    console.log(contacList.value)
    showEmpy('No se encontro resultados')
   })

   //methods
   const totalRecompesa = computed(() => {
    return contacList.value.reduce(
        (accumulator, contact) => accumulator + contact.recompensa, 0
        )
   })

   const totalRecompesas = () => {
        return contacList.value.reduce(
            (accumulator, contact) => accumulator + contact.recompensa, 0
        )
   }
</script>

<template>
    <div class="m-6">
        <h3 class="text-xl my-3"> {{ title }}- {{ totalRecompesa }}</h3>
      <table class="table-fixed">
        <thead>
          <th>Foto</th>
          <th>Nombres</th>
          <th>Numero</th>
          <th>Correo</th>
          <th>Accion</th>
        </thead>
        <tbody>
          <tr v-for="contact in contacList">
            <td class="p-3 border-b-2">{{ contact.id }}</td>
            <td class="p-3 border-b-2">{{ contact.name }}</td>
            <td class="p-3 border-b-2">{{ contact.phone }}</td>
            <td class="p-3 border-b-2">{{ contact.email }}</td>
            <td class="flex items-center">
              <a href="#" class="py-2 px-4 mx-2 bg-purple-800 rounded-full">Editar</a>
              <BtnDelete />
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-red-800"> {{ msjEmpy }}</p>
    </div>
</template>





