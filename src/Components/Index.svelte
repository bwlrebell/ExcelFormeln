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


<div class="center-row">
  <img src="./Assets/analysis.svg" alt="Excel Illustration">
  <div class="white-box">
    <h1>Excel Formeln verstehen</h1>
    <textarea bind:value={input}></textarea>
    <pre>{text}</pre>
  </div>
</div>

<style lang="scss">
  @import "./styles/colors";
  
  .center-row {
    min-height: 100vh;
  }

  .white-box {
    background: $white;
    width: 60%;
    padding: 1rem;
    border-radius: 10px;
    border: 3px solid $blue-200;
    top: 25%;
    position: absolute;
  }


  @media (max-width: 900px) {
    .white-box {
      width: 75%;
    }
  }

  pre {
    border-radius: 5px;
  }

  img {
    max-width: 200px;
    max-height: 200px;
    top: 10%;
    position: fixed;
    margin: 0 auto;
    z-index: 1;
  }

  
</style>