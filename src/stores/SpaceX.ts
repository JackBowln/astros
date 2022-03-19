import { defineStore } from "pinia"
import { SpaceXApi } from "@/services/index"
import type { Launch } from '../types/launch';

export type RootState = {
  launchesData: Launch[]
}

export const useSpaceX = defineStore({
  id: "launches",
  state: () =>
    ({
      launchesData: [],
    } as RootState),
  actions: {
    async fetchLaunches() {
      try {
        const api = SpaceXApi.getInstance()
        this.launchesData = await api.getLaunches()
      } catch (error) {
        // showTooltip(error)
        // let the form component display the error
        return error
      }
    },
  },
})
