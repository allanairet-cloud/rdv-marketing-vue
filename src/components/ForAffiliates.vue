<template>
    <div class="for-affiliates">
        <collapse accordion is-fullwidth>
            <collapse-item title="Components">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
            </collapse-item>
            <collapse-item title="Elements">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
            </collapse-item>
            <collapse-item title="Nests" selected>
            <collapse>
                <collapse-item title="Nest Child" selected>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
                </collapse-item>
            </collapse>
            </collapse-item>
        </collapse>
    </div>
</template>

<script>
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'
export default {
  name: 'ForAffiliates',
  components: {
    Collapse,
    CollapseItem
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>