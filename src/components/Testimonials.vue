<template>
    <div class="testimonials">
       <h3>Don't just take our word for it</h3>
       <h2>What everyone has to say</h2>
       <div class="owl-carousel is-desktop">
            <div class="testimonial">
                <img src="../assets/ibt-testimonial.svg" />
                <p>This could change the game for sex workers in Australia and the U.K</p>
                <div class="columns is-mobile is-gapless author-social">
                    <div class="column author is-10">
                        Intl. Business Times
                    </div>
                    <div class="column social-icon is-2">
                        <img src="../assets/icons8-twitter.png" alt="Intl. Business Times"/>
                    </div>
                </div>
             </div>
            <div class="testimonial">
                <img src="../assets/ibt-testimonial.svg" />
                <p>This could change the game for sex workers in Australia and the U.K</p>
                <div class="columns is-mobile is-gapless author-social">
                    <div class="column author is-10">
                        Intl. Business Times
                    </div>
                    <div class="column social-icon is-2">
                        <img src="../assets/icons8-twitter.png" alt="Intl. Business Times"/>
                    </div>
                </div>
             </div>
              <div class="testimonial">
                <img src="../assets/ibt-testimonial.svg" />
                <p>This could change the game for sex workers in Australia and the U.K</p>
                <div class="columns is-mobile is-gapless author-social">
                    <div class="column author is-10">
                        Intl. Business Times
                    </div>
                    <div class="column social-icon is-2">
                        <img src="../assets/icons8-twitter.png" alt="Intl. Business Times"/>
                    </div>
                </div>
             </div>
              <div class="testimonial">
                <img src="../assets/ibt-testimonial.svg" />
                <p>This could change the game for sex workers in Australia and the U.K</p>
                <div class="columns is-mobile is-gapless author-social">
                    <div class="column author is-10">
                        Intl. Business Times
                    </div>
                    <div class="column social-icon is-2">
                        <img src="../assets/icons8-twitter.png" alt="Intl. Business Times"/>
                    </div>
                </div>
             </div>
       </div>
    </div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
export default {
  name: 'template',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    window.$(document).ready(() => {
      window.$('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: false,
        margin: 10,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          }
        }
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .testimonials{
        background-color:#f7f7f7;
    }
    .testimonial{
        border-radius: 2px;	
        background-color: #FFFFFF;	
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3);
    }

    @media (min-width: 0) {

        .owl-item{
            width:100%!important;
            
        }
        .testimonials{
            padding-bottom:58px;
        }
        .testimonial{
            height:180px;
            text-align:center;
            margin-left:35px!important;
            margin-right:35px!important;
            padding:14px;
            position:relative;
        }
        .author-social{
            position:absolute;
            bottom:0;
            width:100%;
        }
        .testimonial .author{
            text-align:left;
            font-size:10px;
            font-weight: 600;
            line-height: 14px;
            color: #A0A6AD;
        }
        .testimonial p{
            color: #3F434D;	
            font-size: 16px;	
            line-height: 23px;
        }
        .testimonial img{
            height:auto;
            width:auto;
            display:inline;
        }
        h3{
            color: #A0A6AD;	
            font-size: 12px;	
            letter-spacing: 2px;	
            line-height: 18px;
            text-align:center;
            padding-top:37px;
            margin-bottom:16px;
        }
        h2{
            color: #3F434D;
            font-size: 28px;	
            font-weight: 300;	
            line-height: 34px;
            text-align:center;
            margin-bottom:40px;
        }
    }

    @media (min-width: 414px) {
       
    }
    @media (min-width: 576px) { 
       
    }
    @media (min-width: 768px) {
         h3{
            color: #A0A6AD;	
            font-size: 12px;	
            letter-spacing: 2px;	
            line-height: 18px;
            text-align:center;
            padding-top:37px;
            margin-bottom:20px;
        }
        h2{
            color: #3F434D;
            font-size: 38px;	
            font-weight: 300;	
            line-height: 34px;
            text-align:center;
            margin-bottom:64px;
        }
        .testimonials{
           padding-bottom:160px;
        }
    }

</style>