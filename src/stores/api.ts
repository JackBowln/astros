import { defineStore } from "pinia"
import { MainApi } from "@/services/index"
import type { Countries } from '../types';

export type RootState = {
  data: Countries.RootObject[]
}

export const useApi = defineStore({
  id: "launches",
  state: () =>
    ({
      data: [],
    } as RootState),
  actions: {
    async fetchLaunches() {
      try {
        const api = MainApi.getInstance()
        this.data = await api.getCountries()
      } catch (error) {
        // showTooltip(error)
        // let the form component display the error
        console.error(error)
        return error
      }
    },
  },
})
