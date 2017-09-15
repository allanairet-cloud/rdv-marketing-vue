<template>
<div class="main-footer">
    <div class="columns">
        <div class="column is-1 is-hidden-mobile"></div>
        <div class="column is-10">
            <div class="columns is-mobile">
                <div class="column rendevu">
                    <img src="../assets/footer-rendevu.png" alt="Rendevu"/>
                </div>
                <div class="column social">
                    <img src="../assets/icons8-twitter.png" alt="Rendevu" height="23" width="23"/>
                </div>
            </div>
            <p>
                Copyright &copy; 2017 Rendevu Pty Ltd.<br/>
                All Rights Reserved.
            </p>
        
        </div>
        <div class="column is-1 is-hidden-mobile"></div>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'Footer',
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
        .main-footer{
            padding-top:50px;
            padding-bottom:48px;
            padding-left:15px;
            padding-right:15px;
        }
        .main-footer .column{
            padding-top:0;
        }
        .main-footer p{
            font-size: 12px;	
            font-weight: 500;	
            line-height: 18px;	
            text-align: center;
        }
        .rendevu{
            text-align:left;
        }
        .social{
            text-align:right!important;
        }
        .social img{
            margin-right:18px;
            margin-top:10px;
        }
        .horiz-line{
            height: 2px;	
            border: 1px solid #EEEEEE;
            margin-left:15px;
        }
    }
    @media (min-width: 414px) {

    }
    @media (min-width: 576px) { 
       
    }
    @media (min-width: 768px) { 

    }
    @media (min-width: 992px) { 

    }
    @media (min-width: 1200px) { 
    
      
    }
</style>