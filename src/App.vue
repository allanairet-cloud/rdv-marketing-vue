<template>
  <div id="app" class="section">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{
  overflow-x:hidden;
}
#app {
  font-family:  proxima-nova-regular	;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top:0;
}
*{
  font-family: proxima-nova-regular;
}

@font-face {
    font-family: proxima-nova-regular;
    src: url("/static/fonts/proximanova-webfont.eot");
    src: url("/static/fonts/proximanova-webfont.eot?#iefix") format("embedded-opentype"), url("/static/fonts/proximanova-webfont.woff2") format("woff2"), url("/static/fonts/proximanova-webfont.woff") format("woff"), url("/static/fonts/proximanova-webfont.ttf") format("truetype"), url("/static/fonts/proximanova-webfont.svg#proxima-nova-regular") format("svg");
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: proxima-nova-bold;
    src: url("/static/fonts/proximanova-bold-webfont.eot");
    src: url("/static/fonts/proximanova-bold-webfont.eot?#iefix") format("embedded-opentype"), url("/static/fonts/proximanova-bold-webfont.woff2") format("woff2"), url("/static/fonts/proximanova-bold-webfont.woff") format("woff"), url("/static/fonts/proximanova-bold-webfont.ttf") format("truetype"), url("/static/fonts/proximanova-bold-webfont.svg#proxima-nova-bold") format("svg");
    font-weight: 400;
    font-style: normal;
}

</style>
