import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
    //region [Header]
    const isShowHeader = ref(false)
    function onShowHeader() {
        isShowHeader.value = true
    }
    function onHideHeader() {
        isShowHeader.value = false
    }
    //#endregion
    //region [Search]
    const isEnableSearch = ref(false)
    function enableSearch() {
        isEnableSearch.value = true
    }
    function disableSearch() {
        isEnableSearch.value = false
    }
    //#endregion

    return {
        isShowHeader,
        onShowHeader,
        onHideHeader,
        isEnableSearch,
        enableSearch,
        disableSearch
    }
})
