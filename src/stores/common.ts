import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        isShowHeader: false,
        isEnableSearch: false,
        isEnableNote: false,
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
        },
        enableNote(value: boolean) {
            this.isEnableNote = !value
        },
        disableNote() {
            this.isEnableNote = false
        }
    },
})
