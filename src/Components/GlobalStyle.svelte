<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }
  
  :global(body) {
    @import "./styles/colors";
    @import "./styles/global";

    font-family:  $font-body;
    /* font-size: 10px; */

    max-width: 80vw;
    min-height: 100vh;

    margin: 0 auto;
    //padding: 2rem 1rem;

    line-height: 1.5;
    color: $grey-900;
    
    background: $green-700;
    background: radial-gradient(circle, $green-500 40%, $green-700 100%);
  }
</style>
