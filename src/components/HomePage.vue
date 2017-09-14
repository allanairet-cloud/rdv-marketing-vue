<template>
<div>
  <MainNavigation></MainNavigation>
  <div class="container">

      <BookAnEscort></BookAnEscort>
      <FeaturedIn></FeaturedIn>
      <ForClients></ForClients>
      <ForEscorts></ForEscorts>
      <Testimonials></Testimonials>
      
      <ForAffiliates></ForAffiliates>
  </div>
</div>
</template>
<script>
import BookAnEscort from '@/components/BookAnEscort'
import MainNavigation from '@/components/MainNavigation'
import FeaturedIn from '@/components/FeaturedIn'
import ForClients from '@/components/ForClients'
import ForEscorts from '@/components/ForEscorts'
import ForAffiliates from '@/components/ForAffiliates'
import Testimonials from '@/components/Testimonials'

export default {
  name: 'HomePage',
  components: {MainNavigation, BookAnEscort, FeaturedIn, ForClients, ForEscorts, ForAffiliates, Testimonials},
  data () {
    return {
      msg: 'Rendevu: Secure, Safe and Sure'
    }
  }
}
</script>
<style scoped>
</style>