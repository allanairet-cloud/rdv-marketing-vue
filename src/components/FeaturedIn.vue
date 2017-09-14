<template>
    <div>
        <div class="featured-fold is-hidden-mobile">
            <h3 class="featured-in">Featured In</h3>
            <div class="columns">
                <div class="column">
                    <img src="../assets/dailymail.png" alt="As featured on Daily Mail"/>
                </div>
                <div class="column">
                    <img src="../assets/buzfeed.png" alt="As featured on Buzz Feed"/>
                </div>
                <div class="column">
                    <img src="../assets/unilad.png" alt="As featured on Unilad"/>
                </div>
                <div class="column">
                    <img src="../assets/out.png" alt="As featured on OUT"/>
                </div>
                <div class="column">
                    <img src="../assets/ibtimes.png" alt="As featured on International Business Times"/>
                </div>
            </div>
        </div>
        <div class="video-fold is-hidden-mobile">
            <div class="explore-how-it-works">
                <div>Explore how it works<br/><a href="#" class="video-player"></a></div>
            </div>
        </div>
        <div class="video-fold is-hidden-desktop is-hidden-tablet">
            <div class="explore-how-it-works">
                <div>Explore how it works<br/><a href="#" class="video-player"></a></div>
            </div>
        </div>
        <div class="featured-fold is-hidden-desktop is-hidden-tablet">
            <h3 class="featured-in">Featured In</h3>
            <div class="columns is-mobile">
                <div class="column">
                    <img src="../assets/dailymail.png" alt="As featured on Daily Mail"/>
                </div>
                <div class="column">
                    <img src="../assets/buzfeed.png" alt="As featured on Buzz Feed"/>
                </div>
                <div class="column">
                    <img src="../assets/unilad.png" alt="As featured on Unilad"/>
                </div>
                <div class="column">
                    <img src="../assets/out.png" alt="As featured on OUT"/>
                </div>
                <div class="column">
                    <img src="../assets/ibtimes.png" alt="As featured on International Business Times"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FeaturedIn',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
    h3.featured-in{
        color: #A0A6AD;	
        font-size: 12px;	
        letter-spacing: 2px;	
        line-height: 14px;	
        text-align: center;
    }
    .featured-fold{
        background-color:#f9f9f9f9;
        padding-top:30px;
    }
    .featured-fold > .columns > .column{
        display:block;
        box-pack:center;
        box-align:center;
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;
    }
    .featured-fold > .columns > .column > img{
        vertical-align:middle;
    }
    @media (min-width: 0) {
        .explore-how-it-works{
            background-image:url('../assets/explore-iphone7.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #464646;
            height:234px;
            width:100%;
            display:-webkit-box;
            -webkit-box-pack:center;
            -webkit-box-align:center;
            color:#fff;
            font-size:28px;
            text-align:center;
        }
        .explore-how-it-works a.video-player{
            height:57px;
            width:57px;
            background-image:url('../assets/video-player-desktop.png');
            display:inline-block;
        }

    }
    @media (min-width: 414px) {
         .explore-how-it-works{
            background-image:url('../assets/explore-iphone7plus.jpg');
            height:259px;
            width:100%;
        }
    }
    @media (min-width: 576px) { 
       
    }
    @media (min-width: 768px) { 
         .explore-how-it-works{
            background-image:url('../assets/explore-desktop.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-color: #464646;
            height:600px;
            width:100%;
            font-size:38px;
        }
    }
    @media (min-width: 992px) { 

    }
    @media (min-width: 1200px) { 
    
      
    }
</style>