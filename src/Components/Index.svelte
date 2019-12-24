<script>
  let input;
  let text = `
  = SVERWEIS (
    A1; 
    A4:A8; 
    1; 
    FALSCH
  )
  `
</script>


<div class="center">
  <div class="white-box">
    <h1>Excel Formeln verstehen</h1>
    <input type="text" bind:value={input} placeholder="=SVERWEIS(A1; A4:A8; 1; FALSCH)"/>
    <pre>{text}</pre>
  </div>
</div>

<style lang="scss">
  @import "./styles/colors";
  
  .center {
    min-height: 100vh;
  }

  .white-box {
    background: $white;
    width: 70%;
    padding: 1rem;
    border-radius: 10px;
    border: 3px solid $blue-200;
  }

  
</style>