import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { data } from "@/data";
import axios from "@/api/axios";
// https://crm.11rem.com/newdashboard
export const useTableStore = defineStore("table", {
  state: () => ({
    table: data.gpData,
    office: "Shanghai",
  }),
  getters: {},
  actions: {
    changeOffice(office: string) {
      try {
        axios
          .get(`/api/teamleaderbyoffice?officeid=${office}`, {})
          .then((response: { data: any }) => {
            console.log(response.data);
            console.log("请求成功！");
          });
      } catch (err) {
        console.log(err);
      } finally {
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
      console.log(ndt);
    },
  },
});
