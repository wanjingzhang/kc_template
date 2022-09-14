<template>
  <!-- 表格组合 -->
  <div class="title">
    <div class="title-1">Information Listed</div>
  </div>
  <el-collapse v-model="activeName" accordion class="collapseBox">
    <TableGroupVue
      v-for="{ gpName, gpId, gpList } in tableStore.table"
      :gpName="gpName"
      :gpId="gpId"
      :gpList="gpList"
    />
  </el-collapse>
</template>

<script lang="ts" setup>
import TableGroupVue from "./TableGroup.vue";
import { useTableStore } from "@/stores/contract";
const activeName = ref("1");
const tableStore = useTableStore();
</script>

<style scoped lang="less">
.title {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  &-1 {
    background-color: var(--vt-c-blue-light);
    color: var(--vt-c-white);
    font-size: 18px;
    line-height: 40px;
    height: 40px;
    width: 62%;
    text-align: center;
  }
}

.collapseBox {
  :deep(.el-collapse-item__header) {
    background-color: var(--vt-c-blue-light);
  }
  :deep(.el-input__wrapper) {
    box-shadow: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 146px;
  }
  :deep(.el-button) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 74px;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
  }
  :deep(.item-title + .el-icon) {
    color: var(--vt-c-white);
    position: absolute;
    left: 36%;
    top: 20px;
  }
}
</style>
