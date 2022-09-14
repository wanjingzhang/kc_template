import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { data } from "@/data";
import axios from "@/api/axios";
export const useTableStore = defineStore("table", {
  state: () => ({
    table: data.gpData,
    office: "Shanghai",
    projectLeader: new Array(),
  }),
  getters: {},
  actions: {
    changeOffice(office: string) {
      try {
        // 获取项目经理列表
        axios
          .get(`/api/teamleaderbyoffice?officeid=${office}`, {})
          .then((response: { data: any }) => {
            let pjLeader = [
              ...response.data.map((item: any) => {
                return { label: item["teamleader"], value: item["teamleader"] };
              }),
            ];
            this.projectLeader = pjLeader;
          });
      } catch (err) {
        console.log(err);
      }

      this.office = office;
      let dt = data.gpData;
      let ndt: any = [];
      dt.map((gp: any, index: number) => {
        gp["gpList"].map((gp2: any, index2: number) => {
          gp2["team"]["name"] = office;
          dt[index]["gpList"][index2] = gp2;
        });
      });
      this.table = dt;
    },
  },
});
