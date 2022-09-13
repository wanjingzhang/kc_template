<template>
    <!-- 内容部分-搜索 -->
    <div class="search">
        <div class="search-left">
            Project status checking 
            <el-select v-model="office" placeholder="Shanghai" class="search-left-select" v-on:change="changeOffice">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
            Office
        </div>
        <div class="search-right">
            <el-input v-model="data.searchTxt" placeholder="Please enter project name or no.">
                <template #append>
                    <el-button >For viewing</el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive,nextTick  } from 'vue'
import {useTableStore} from '@/stores/contract' 
const tableStore = useTableStore();
const office = ref('Beijing')
const options = [
  {
    value: 'Shanghai',
    label: 'Shanghai',
  }, 
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'HongKong',
    label: 'HongKong',
  }, 
]
const data = reactive({searchTxt:''})
const changeOffice = (off:string)=>{  
    nextTick(()=>{  
        tableStore.changeOffice(office.value)
    })
} 
tableStore.changeOffice(office.value)
</script>

<style scoped lang="less">
.search{display: flex; flex-direction: row;justify-content: space-between;margin-top:20px;
    height: 30px;line-height: 30px;color:var(--vt-c-gray-dark);font-size: 14px;
    &-left{margin:0 40px 0 10px;
        &-select{margin:0 10px;width:140px;}
    }
    &-right{
        flex:1; 
    }
}
</style>