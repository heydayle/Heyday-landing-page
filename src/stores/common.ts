import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        isShowHeader: false,
        isEnableSearch: false,
    }),
    actions: {
        onShowHeader() {
            this.isShowHeader = true
        },
        onHideHeader() {
            this.isShowHeader = false
        },
        enableSearch() {
            this.isEnableSearch = true
        },
        disableSearch() {
            this.isEnableSearch = false
        }
    },
})
