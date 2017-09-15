<template>
    <div class="for-clients-fold">
        <h3 class="is-hidden-tablet is-hidden-desktop outer-for">For Clients</h3>
        <h2 class="is-hidden-tablet is-hidden-desktop outer-for">Finding an Escort?</h2>

        <div class="columns">
            <div class="column is-half-desktop is-half-tablet for-clients-points">
                <h3 class="is-hidden-mobile inner-for">For Clients</h3>
                <h2 class="is-hidden-mobile inner-for">Finding an Escort?</h2>

                <ul class="points">
                    <li>
                        <img src="../assets/safe-and-private.svg" alt="Rendevu is safe and private"/>
                        <strong>Safe and private</strong>
                        <p>
                        Credit card required to book<br/>
                        Appointments privately tracked in real time.
                        </p>
                    </li>
                    <li>
                        <img src="../assets/simple-process.svg" alt="Book available escorts in 10 clicks"/>
                        <strong>Simple Process</strong>
                        <p>
                            Book available escorts in 10 clicks<br/>
                            Guaranteed confirmation within 5 minutes.
                        </p>
                    </li>
                    <li>
                        <img src="../assets/secure-and-discreet.svg" alt="Rendevu is secure and discreet"/>
                        <strong>Secure and discreet</strong>
                        <p>
                            Client data is removed after appointment<br/>
                            Cash can be paid at time of appointment instead of card charge.
                        </p>
                    </li>
                </ul>
                <div>
                    <a class="button is-primary" v-bind:href="clientApp">Book an Escort</a>
                </div>
                <div class="iphone-for-clients is-hidden-desktop is-hidden-tablet"></div>
            </div>
            <div class="column is-hidden-mobile is-half-tablet is-half-desktop  iphone-app">
                <img src="../assets/iphone-for-clients-tablet-desktop.png"/>
            </div>
        </div>
       
    </div>

</template>


<script>
export default {
  name: 'ForClients',
  data () {
    return {
      msg: '',
      clientApp: process.env.CLIENT_APP + '/?utm_source=rdv-marketing&utm_campaign=desktop-170421&utm_medium=button'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media (min-width: 0) {
        .for-clients-fold{
            background-image:url('../assets/jamie-street-319048-desktop.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #464646;
            width:100%;
            text-align:left;
        }
        h3{
            color: #25DAC3;	
            font-size: 12px;	
            letter-spacing: 2px;	
            line-height: 14px;
            text-align:center;
            padding-top:37px;
            margin-bottom:16px;
            text-transform:uppercase;
        }
        h2{
            color: #FFFFFF;
            font-size: 28px;	
            font-weight: 300;	
            line-height: 34px;
            text-align:center;
            margin-bottom:40px;
        }
        .points{
            color:#fff;
            padding-left:15px;
            padding-right:12px;
            text-align:left;
            line-height:24px;
        }
        .points li{
            margin-bottom:34px;
            color: #A0A6AD;
        }
        .points li:last-child{
            margin-bottom:0;
        }
        .points strong{
            color:#fff;
            display:block;
            font-size:21px;
            line-height:32px;
        }
        .is-primary{
            border-radius: 2px;	
            background-color: #25DAC3;
            margin-top:45px;
            padding:18px 16px;
            line-height:24px;
            text-transform:uppercase;
        }
        .for-clients-points{
            text-align:center;
            margin-bottom:0;
            padding-bottom:0;
            padding-top:0;
            line-height:0;
        }
        .iphone-for-clients{
            background:url('../assets/iphone-for-clients.png') no-repeat transparent;
            width:320px;
            height:337px;
            display:inline-block;
            clear:both;
            
        }
        .columns:last-child{
            margin-bottom:0;
        }
       
    }
    @media (min-width: 414px) {
       
    }
    @media (min-width: 576px) { 
       .outer-for{
           text-align:center;
       }
       .for-clients-fold{
            height:auto;
            text-align:left;
        }
    }
    @media (min-width: 769px) {
        
        .for-clients-fold{
            height:773px;
            text-align:left;
        }
         h3{
            text-align:left;
            margin-bottom:auto;
         } 
         h2{
             text-align:left;
             font-size:38px;
         }
        .for-clients-points{
            padding-left:46px;
            text-align:left;
        }
        .for-clients-points p{
            margin-left:40px;
        }
        .points strong{
            display:inline-block;
            margin-left:18px;
        }
        .iphone-for-clients{
            background:url('../assets/iphone-for-clients-tablet-desktop.png') no-repeat transparent;
            width:320px;
            height:337px;
            display:inline-block;
        }
        .iphone-app{
            vertical-align:text-top;
            display:-webkit-box;
            -webkit-box-pack:top;
            -webkit-box-align:middle;
            position:relative;
        }
        .iphone-app img{
            position:absolute;
            top:-10px
        }
        .is-primary{
            margin-left:60px;
        }
        
    }
    @media (min-width: 992px) { 

    }
    @media (min-width: 1200px) { 
    
      
    }
</style>