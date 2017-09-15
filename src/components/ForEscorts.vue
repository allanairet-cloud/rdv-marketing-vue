<template>
    <div class="for-escorts-fold">
        <h3 class="is-hidden-tablet is-hidden-desktop outer-for">For Escorts</h3>
        <h2 class="is-hidden-tablet is-hidden-desktop outer-for">Looking for clients?</h2>
         <div class="columns">
            <div class="column is-half-desktop is-half-tablet for-escorts-points">
                <h3 class="is-hidden-mobile inner-for">For Clients</h3>
                <h2 class="is-hidden-mobile inner-for">Finding an Escort?</h2>
                <ul class="points">
                    <li>
                        <img src="../assets/safe-and-private-black.svg" alt="Rendevu is safe and private"/>
                        <strong>Safe and private</strong>
                        <p>
                        Appointments privately tracked in real time.<br/> Credit card required to book.
                        </p>
                    </li>
                    <li>
                        <img src="../assets/time.svg" alt="Payment Guaranteed"/>
                        <strong>No timewasters</strong>
                        <p>
                            Payment is guaranteed<br/>
                            Clients are verified.
                        </p>
                    </li>
                    <li>
                        <img src="../assets/realtime.svg" alt="Payment Guaranteed"/>
                        <strong>Realtime</strong>
                        <p>
                            Install the Rendevu app on your phone to update your real time availability<br/>
                            Clients will see exactly when they can book and can only then contact you.
                        </p>
                    </li>
                </ul>
                <div>
                <a class="button is-primary">Become an Escort</a>
                </div>
                <div class="iphone-for-clients is-hidden-desktop is-hidden-tablet"></div>
            </div>

             <div class="column is-hidden-mobile is-half-tablet is-half-desktop iphone-app">
                <img src="../assets/providers-app-tablet.png"/>
            </div>
        </div>
    </div>

</template>


<script>
export default {
  name: 'ForEscorts',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @media (min-width: 0) {
        .for-escorts-fold{
            background-image:url('../assets/looking-for-clients-bg-desktop.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-color: #f1f0f0;
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
            color: #3F434D;
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
            color: #3F434D;
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
        .for-escorts-points{
            text-align:center;
            margin-bottom:0;
            padding-bottom:0;
            padding-top:0;
            line-height:0;
        }
        .iphone-for-clients{
            background:url('../assets/escort-app-for-escorts-fold.svg') no-repeat transparent;
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
       
    }
    @media (min-width: 769px) {
        
        .for-escorts-fold{
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
        .for-escorts-points{
            padding-left:46px;
            text-align:left;
        }
        .for-escorts-points p{
            margin-left:40px;
        }
        .points strong{
            display:inline-block;
            margin-left:18px;
        }
        .iphone-for-clients{
            background:url('../assets/escort-app-for-escorts-fold.svg') no-repeat transparent;
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