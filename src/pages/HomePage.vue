<template>
  <div class="home-page">
    <header>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
    </header>

    <div class="content">
      <ToolsCard />
    </div>
   </div>
</template>

<script>
import ToolsCard from '../components/ToolsCard';

export default {
  name: 'HomePage',
  components: {
    ToolsCard
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home-page {
    max-width: 800px;
    margin: 0 auto;

    header {
      text-align: left;
      margin: 30px 0;
    }
  }

</style>
