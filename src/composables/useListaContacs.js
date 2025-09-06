import { ref } from 'vue'

import { getAllContacts } from '../services/api.Contacs'

const contacList = ref(getAllContacts())

export function useListaContacs() {

    const msjEmpy = ref('')
    //methods
    const showEmpy = (msj) => {
        if (contacList.value.length < 1) {
            msjEmpy.value = msj
        } else {
            msjEmpy.value = ''
        }
    }

    return {
        contacList,
        msjEmpy,
        showEmpy
    }
}       