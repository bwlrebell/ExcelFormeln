<style lang="scss">
  @import "./styles/colors";
  
  
  :global(*) {
    box-sizing: border-box;
  }
  
  :global(html) {
    height: 100vh;
  }

  :global(body) {
    @import "./styles/global";
    font-family:  $font-body;
    /* font-size: 10px; */

    max-width: 100vw;
    min-height: 100vh;

    margin: 0 auto;
    //padding: 2rem 1rem;

    line-height: 1.5;
    color: $grey-900;
    
    background: $green-700;
    background: radial-gradient(circle, $green-500 40%, $green-700 100%);
  }

  :global(.reason) {
    background: $grey-900;
    min-height: 100vh;
    border: 1px solid red;

    h1, h2, p {
      color: $white;
      max-width: 80%;
      margin: auto;
      padding: 1rem;
    }
  }
</style>
