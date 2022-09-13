<template>
    <!-- 头部组件 -->
    <header class="header">
      <div class="header-left"> 
        <img alt="Vue logo" class="logo" src="@/assets/imgs/icon1.svg" width="42" height="42" /> 
        <div class="header-left-title">Contract Accounting</div>
      </div>
      <div class="header-right"> 
        <el-button class="header-right-btn" type="primary">Basic Search</el-button> 
        <div class="header-right-link"><a href="#" target="_blank">Advanced Search</a></div>
      </div>
    </header>
</template>

<style scoped lang="less">
.header{display: flex; flex-direction: row;justify-content: space-between;height:44px;padding: 0 10px;border-bottom:1px solid var(--vt-c-gray-border);
    &-left{display: flex; flex-direction: row;
        &-title{font-size: 18px;color:var(--vt-c-gray-dark);line-height: 44px;margin-left: 10px;}
    }
    &-right{display: flex; flex-direction: row;align-items: center;
        &-btn{background-color: var(--vt-c-blue-light);}
        &-link{
          a{color:var(--vt-c-blue-light);font-size: 14px;line-height: 44px;margin-left: 10px;}
        }
    }
} 
</style>