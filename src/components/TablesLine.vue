<template>
  <div class="item-content-line">
    <div class="item-content-line-left">
      {{ lineName }} <br />
      <div v-if="office.name">
        <a class="item-link" :href="office.link" target="_blank"
          >{{ office.name }}
          <img
            class="icon"
            alt="Reporting"
            src="@/assets/imgs/question.svg"
            width="16"
            height="16"
        /></a>
      </div>
    </div>
    <div class="item-content-line-right">
      <div class="item-content-line-right-column">
        <a class="item-link" :href="team?.link" target="_blank">{{
          getOffice(tableStore.office)
        }}</a>
      </div>
      <div class="item-content-line-right-column">
        <div class="item-group">
          <el-select
            v-model="leader"
            placeholder="Select"
            class="search-left-select"
            :loading="false"
          >
            <el-option
              v-for="item in tableStore.pjLeader"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button>Go</el-button>
        </div>
      </div>
      <div class="item-content-line-right-column">
        <div class="item-group">
          <el-select
            v-model="director"
            placeholder="Select"
            class="search-left-select"
          >
            <el-option
              v-for="item in tableStore.pjDirector"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button>Go</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTableStore } from "@/stores/contract";
const tableStore = useTableStore();

const {
  lineName,
  lineId,
  team,
  office,
  projectLeaderList,
  projectDirectorList,
} = withDefaults(
  defineProps<{
    lineName: string;
    lineId: string;
    team: any;
    office?: any;
    projectLeaderList: any[];
    projectDirectorList: any[];
  }>(),
  {
    lineName: "",
    lineId: "",
    team: { name: "", link: "" },
    office: { name: "", link: "" },
    projectLeaderList: () => [{ value: "", label: "" }],
    projectDirectorList: () => [{ value: "", label: "" }],
  }
);

const leader = ref("");
const director = ref("");
let officeOld = tableStore.office;

// 改变location时，需要刷新当前的数据
const getOffice = (str: string) => {
  if (officeOld != str) {
    leader.value = "";
    director.value = "";
    officeOld = str;
  }
  return str;
};
</script>

<style lang="less">
.collapseBox {
  .item {
    &-content {
      &-line {
        width: 100%;
        display: flex;
        flex-direction: row;
        color: var(--vt-c-gray-dark);
        font-size: 14px;
        height: 70px;
        border-bottom: 1px solid var(--vt-c-gray-border);
        &:nth-child(2*n) {
          background-color: var(--vt-c-gray-light);
        }
        &-left {
          width: 38%;
          text-align: left;
          padding: 10px 5px 10px 32px;
        }
        &-right {
          width: 62%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          &-column {
            display: flex;
            align-items: center;
            &:first-child {
              margin: 0 5%;
            }
          }
        }
      }
    }
    &-link {
      color: var(--vt-c-blue-light);
      .icon {
        vertical-align: middle;
      }
    }
    &-group {
      border-radius: var(--el-border-radius-base);
      border: 1px solid var(--vt-c-gray-light);
      :deep(.el-icon) {
        color: var(--vt-c-blue-light) !important;
      }
    }
  }
}
</style>
