<script setup lang="ts"> 
  import HeaderVue from './components/Header.vue';
  import SearchBar from './components/SearchBar.vue';
  import Tables from './components/Tables.vue';
  
  </script>
  
  <template>  
    <HeaderVue />
    <div class="content">
      <SearchBar />
      <Tables />
    </div>  
  </template>
  <style scoped lang="less"> 
  
  </style>
  <style scoped> 
  @media (min-width: 1024px) { }
  </style>