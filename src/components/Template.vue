<template>

</template>

<script>
export default {
  name: 'template',
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