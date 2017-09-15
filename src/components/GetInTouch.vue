<template>
    <div class="get-in-touch">
        <h3>We'd love to hear from you</h3>
        <h2>Get in touch</h2>
        <form>
            <div class="columns">
                <div class="column is-2 is-hidden-mobile"></div>
                <div class="column is-8">
                    <div class="columns">
                        <div class="column is-half-tablet is-half-desktop">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Your Name" v-model="name">
                                </div>
                            </div>
                        </div>
                        <div class="column is-half-tablet is-half-desktop">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="tel" placeholder="Your Number" v-model="mobile">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="email" placeholder="Your Email" v-model="email">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <div class="control">
                                    <textarea class="textarea" placeholder="Your Message" v-model="message"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns submit">
                        <div class="column">
                            <div class="field">
                                <button class="button is-primary" @click.prevent="send">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-2 is-hidden-mobile"></div>    
            </div>
            
        </form>
            
    </div>
</template>

<script>
export default {
  name: 'GetInTouch',
  data () {
    return {
      msg: '',
      name: '',
      email: '',
      mobile: '',
      message: ''
    }
  },
  methods: {
    send () {
      window.Intercom('update', {'name': this.name})
      window.Intercom('showNewMessage', this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ::-webkit-input-placeholder {
    text-transform: uppercase;
    }

    :-moz-placeholder { 
    text-transform: uppercase;
    }

    ::-moz-placeholder {  
    text-transform: uppercase;
    }

    :-ms-input-placeholder { 
    text-transform: uppercase;
    }
    @media (min-width: 0) {
        .get-in-touch{
            background-color:#f7f7f7;
            padding-bottom:45px;
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
        }
        form{
            padding-left:15px;
            padding-right:15px;
        }
        .input, .textarea{
            font-size: 12px;	
            font-weight: 500;	
            letter-spacing: 2px;	
            line-height: 14px;
            color: #3F434D;
            border-radius: 2px;	
            background-color: #FFFFFF;
            border-color:#fff;
            border:none;	
            padding:21px 15px;
            padding-top:21px;
            padding-bottom:21px;
            box-shadow:none;

        }
        .input:focus, .textarea:focus{
            box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
            border-color:#fff;
        }
        .is-primary, .is-primary:hover{
            border-radius: 2px;	
            background-color: #25DAC3;
            padding:18px 53px;
            text-transform:uppercase;
            margin-bottom:10px;
            height:auto
        }
    }
    @media (min-width: 414px) {

    }
    @media (min-width: 576px) { 
       
    }
    @media (min-width: 769px) { 
        .get-in-touch{
            padding-bottom:93px;
        }
        .submit{
            text-align:left;
        }
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
        .is-primary, .is-primary:hover{
            padding:18px 18px;
        }
    }
    @media (min-width: 992px) { 

    }
    @media (min-width: 1200px) { 
         .get-in-touch{
            text-align:left;
         }
      
    }
</style>