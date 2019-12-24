<script>
  let input = "=SVERWEIS(A1; A4:A8; 1; FALSCH)";
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
    <textarea bind:value={input}></textarea>
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

  pre {
    border-radius: 5px;
  }

  
</style>