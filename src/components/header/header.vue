<template>
    <div>
      {{titleName}}
    </div>
</template>

<script>
export default {
  name: 'headerTab',
  props: {
    titleName: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "./header.styl";
</style>
