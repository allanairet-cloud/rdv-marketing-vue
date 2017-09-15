<template>
<div>
  <Header>
    <MainNavigation></MainNavigation>
  </Header>
  <div class="container">
      <BookAnEscort></BookAnEscort>
      <FeaturedIn></FeaturedIn>
      <ForClients></ForClients>
      <ForEscorts></ForEscorts>
      <Testimonials></Testimonials>
      <ForAffiliates></ForAffiliates>
      <GetInTouch></GetInTouch>
      <MainFooter></MainFooter>
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
import GetInTouch from '@/components/GetInTouch'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'HomePage',
  components: {MainNavigation, BookAnEscort, FeaturedIn, ForClients, ForEscorts, ForAffiliates, Testimonials, GetInTouch, MainFooter},
  data () {
    return {
      msg: 'Rendevu: Secure, Safe and Sure'
    }
  }
}
</script>
<style scoped>
</style>