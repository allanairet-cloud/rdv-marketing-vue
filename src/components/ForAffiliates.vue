<template>
    <div class="for-affiliates">
       <div class="columns">
        <div class="column is-three-quarters-desktop">
          <h3>For Affiliates</h3>
          <h2>Rendevu provides significant &amp; ongoing revenue for affiliates</h2>
          <p>Rendevu charges clients a platform fee, included in the appointment fee, when clients make a booking.</p>
          <p>Rendevu will split the platform fee for any booking with the affiliate(s) who initially referred the escort or the client.</p>
          <p>Clients pay the fee for the convenience and certainty delivered through true availability, verified profiles, immediately confirmed bookings, live appointment tracking and flexibility of payment.</p>
          <button class="accordion" @click="talkingAbout=!talkingAbout"><span class='number-bullet'>1.</span> How much are we talking about?</button>
          <transition name="bounce">
            <div class="panel" v-if="talkingAbout">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </transition>

            <button class="accordion" @click="launch=!launch"><span class='number-bullet'>2.</span> Introducing the launch bonus</button>
            <transition name="bounce">
              <div class="panel" v-if="launch">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </transition>

            <button class="accordion" @click="howItWorks=!howItWorks"><span class='number-bullet'>3.</span> How does it work?</button>
            <transition name="bounce">
              <div class="panel" v-if="howItWorks">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </transition>
            <div>
                <a class="button is-primary">Become an Affiliate</a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ForAffiliates',
  data () {
    return {
      msg: '',
      launch: false,
      talkingAbout: true,
      howItWorks: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media (min-width: 0) {
        .for-affiliates{
          padding-left:15px;
          padding-right:12px;
          background:url(../assets/for-affiliates-background.png) no-repeat transparent;
          background-position: right center;
          background-repeat: no-repeat;
          background-color: #FFF;
          padding-bottom:36px;
        }
        h3{
            color: #A0A6AD;	
            font-size: 12px;	
            letter-spacing: 2px;	
            line-height: 18px;
            text-align:center;
            padding-top:37px;
            margin-bottom:16px;
            text-transform:uppercase;
        }
        h2{
            color: #3F434D;
            font-size: 28px;	
            font-weight: 300;	
            line-height: 34px;
            text-align:center;
            margin-bottom:40px;
            text-align:left;
        }
        p{
          font-size: 16px;
          color: #A0A6AD;
          line-height: 24px;
          text-align:left;
          margin-bottom:35px;
        }

        button.accordion {
            background-color: transparent;
            color: #444;
            cursor: pointer;
            padding: 15px 0;
            width: 100%;
            text-align: left;
            border: none;
            outline: none;
            transition: 0.4s;
            border-bottom: 1px solid #E0E0E0;
            font-size: 16px;	
            font-weight: 500;	
            line-height: 18px;
        }

        button.accordion:active {
          background-color:transparent;
        }

     
        div.panel {
            background-color: transparent;
        }

        div.panel p:last-child{
          margin-bottom:0;
        }

        div.panel p:first-child{
          margin-top:10px;
        }

        .number-bullet{
          border-radius: 13px;
          border:1px solid black;
          background-color:white;
          height:26px;
          width:26px;
          line-height:26px;
          text-align:center;
          display:inline-block;
          margin-right:11px;
        }

          .is-primary{
            border-radius: 2px;	
            background-color: #25DAC3;
            margin-top:45px;
            padding:18px 16px;
            line-height:24px;
            text-transform:uppercase;
        }
    }

    @media (min-width: 414px) {
       
    }
    @media (min-width: 576px) { 
       .for-affiliates{
         padding-bottom:90px;
       }
    }
    @media (min-width: 768px) {
       .for-affiliates{
         padding-left:60px;
         padding-right:60px;
         text-align:left;
       }
        h3{
          color: #A0A6AD;	
          font-size: 12px;	
          letter-spacing: 2px;	
          line-height: 18px;
          padding-top:37px;
          margin-bottom:20px;
          text-align:left;
      }
      h2{
          color: #3F434D;
          font-size: 38px;	
          font-weight: 300;	
          line-height: 34px;
          margin-bottom:64px;
          text-align:left;
      }
    }
</style>