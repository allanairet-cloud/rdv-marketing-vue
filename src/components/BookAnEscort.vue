<template>
    <div class="book-an-escort-fold">
        <div class="columns is-mobile escort-row">
            <div class="column is-half-tablet is-9-mobile is-two-thirds-desktop">
                <section class="hero">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title secure-safe-and-sur">
                                Secure, Safe and Sure.
                            </h1>
                            <h2 class="subtitle">
                            The most secure and safe place to book your escort
                            </h2>
                        </div>

                        <a class="button is-primary">Book an Escort</a>
                        <div class="looking-for-clients-tablet">
                            <p>Looking for new clients? <a href="#">Become an Escort today</a></p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="column is-half-tablet is-3-mobile is-one-third-desktop rendevu-app">   
                
                <div class="app"></div>           
                
            </div>
            
        </div>
        <div class="looking-for-clients">
            <p>Looking for new clients? <a href="#">Become an Escort today</a></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BookAnEscort',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hero{
    text-align:left;
}
.is-primary, .is-primary:visited{
    border-radius: 2px;	
    background-color: #25DAC3;
    padding:18px 16px;
    line-height:24px;
    text-transform:uppercase;
}
.escort-row{
    margin-top:1em;
}
a{
    color:#3f8fec;
}
@media (min-width: 0) {
    .app{
        background:url(../assets/iphone-silver-mobile.png) no-repeat transparent;
        height:280px;
        position:absolute;
        width:100%;
        background-position:-25px 0;
    }
    .rendevu-app{
        overflow:visible;
        position:relative;
    }
    .book-an-escort-fold .looking-for-clients{
        font-size:12px;
    }
    .secure-safe-and-sur {
        color: #3F434D;	
        font-size: 32px;	
        font-weight: normal;	
        letter-spacing: -1px;	
        line-height: 38px;
        margin-bottom:1em;
    }
    .rendevu-app img{
        position:absolute;
        height:244px;
        width:122px;  
        max-width:122px;   
    }
    
    .escort-row{
        text-align:left;
        margin-bottom:0;
    }
     .subtitle {	
        color: #A0A6AD; 
        font-size: 16px;
        line-height: 24px;
    }
    .escort-row{
        background-position:0, 0;
    }
    .looking-for-clients{
        margin-top:2em;
        margin-bottom:2em;
    }
     .looking-for-clients-tablet{
        display:none;
    }
}
@media (min-width: 576px) { 
    .app{
        left:30px;
    }
    .escort-row .column{
        padding-bottom:0;
    }
    .secure-safe-and-sur {
        color: #3F434D;	
        font-size: 32px;	
        font-weight: 300;	
        letter-spacing: -1px;	
        line-height: 38px;
        margin-bottom:47px;
        margin-top:85px;
    }
}
@media (min-width: 768px) { 
   .app{
        background:url(../assets/iphone-silver.png) no-repeat transparent;
        height:710px;
        width:400px;
        position:absolute;
        left:-250px;
        top:-30px
    }
    .subtitle{
        margin-bottom:48px;
    }
     .escort-row{
        height:710px;
    }
    .looking-for-clients{
        display:none;
    }
    .looking-for-clients-tablet{
        display:block;
        color: #A0A6AD; 
    }
    .is-primary{
        margin-bottom:36px;
    }
}
@media (min-width: 992px) { 

}
@media (min-width: 1200px) { 
   
    .secure-safe-and-sur {		
        color: #3F434D;	
        font-size: 50px;	
        font-weight: 300;	
        letter-spacing: -1px;	
        line-height: 38px;
        margin-bottom:1em;

    }
    .rendevu-app img{
        width:294px;
        height:590px;
        max-width:294px;
        position:absolute;
    }
    .subtitle {	
        color: #A0A6AD; 
        font-size: 16px;
        line-height: 24px;
    }
}



</style>