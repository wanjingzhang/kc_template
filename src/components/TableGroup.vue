<template>
  <el-collapse-item :title="gpName" :name="gpId" class="item">
    <template #title>
      <div class="item-title">
        <div class="item-title-left">
          <img
            class="icon"
            :alt="gpName"
            :src="getImg(gpId)"
            width="20"
            height="20"
          />{{ gpName }}
        </div>
        <div class="item-title-right">
          <div>By office</div>
          <div>By Project Leader</div>
          <div>By Project Director</div>
        </div>
      </div>
    </template>
    <div>
      <div class="item-content">
        <!-- 行数据 -->
        <TablesLineVue
          v-for="{
            lineName,
            lineId,
            team,
            office,
            pjLeader,
            projectDirectorList,
          } in gpLines"
          :lineName="lineName"
          :lineId="lineId"
          :team="team"
          :office="office"
          :pjLeader="pjLeader"
          :projectDirectorList="projectDirectorList"
        ></TablesLineVue>
      </div>
    </div>
  </el-collapse-item>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import TablesLineVue from "./TablesLine.vue";
// 大组的数据
type ContractGroup = {
  gpName: string;
  gpId: string;
  gpList: any[];
};
const props = withDefaults(defineProps<ContractGroup>(), {
  gpName: "子组件默认值",
  gpId: "abc",
  gpList: () => [],
});

const { gpName, gpId, gpList } = props;

// 小组的数据
type ContractGroupLine = {
  lineName: string;
  lineId: string;
  team: string;
  office: string;
  pjLeader: any[];
  projectDirectorList: any[];
};
// 加载默认的数据列表
const gpLines = gpList;
// 获取图片
const getImg = (name: string) => {
  const path = `/src/assets/imgs/icon1-${name}.svg`;
  const modules: any = import.meta.glob("/src/assets/imgs/*", { eager: true }); // 批量导入
  return modules[path].default;
};
</script>
<style lang="less">
.item {
  width: 100%;
  &-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: var(--vt-c-white);
    &-left {
      width: 38%;
      text-align: left;
      .icon {
        vertical-align: middle;
        margin: 0 6px 0 14px;
      }
    }
    &-right {
      width: 62%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
}
</style>
