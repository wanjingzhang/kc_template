import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { data } from "@/data";

export const useTableStore = defineStore("table", {
  state: () => ({
    table: data.gpData,
    office: "Shanghai",
  }),
  getters: {},
  actions: {
    changeOffice(office: string) {
      fetch(`/api/teamleaderbyoffice?officeid=${office}`, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            res.text();
          }
          console.log(res);
        })
        .then((data) => {
          console.log(data);
        });

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
      console.log(ndt);
    },
  },
});
