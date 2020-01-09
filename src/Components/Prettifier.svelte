<script>
  import { onMount } from "svelte";
  import formatFormula from "../Helpers/formula.js";
  
  export let lang = "de";
  
  let input = '=VLOOKUP(A1; A4:A8; (1+1)/14; FALSCH) + CONCAT(X; Y+"abc")';
  let text = formatFormula(input, lang);
  let block;

  let handleButtonGo = () => {
    text = formatFormula(input, lang);
    block.innerHTML = text;
    hljs.highlightBlock(block);
  }

  onMount(() => handleButtonGo());
</script>


<div class="center-row">
  <img src="./Assets/analysis.svg" alt="Excel Illustration">
  <div class="white-box">
  {#if lang==="de"}
    <h1>Excel Formeln verstehen</h1>
  {:else}
    <h1>Excel Formula Prettifier</h1>
  {/if}
    <textarea bind:value={input}></textarea>
    <div class="row">
      <button type="button" id="go" on:click={handleButtonGo}>Go</button>
      <select id="lang" name="lang" bind:value={lang}>
        <option value="de">de</option>
        <option value="en">en</option>
      </select>
    </div>
    <pre><code class="excel" bind:this={block}></code></pre>
  </div>
</div>

<style lang="scss">
  @import "./styles/colors.scss";
  
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

  code {
    border-radius: 5px;
  }

  img {
    max-width: 200px;
    max-height: 200px;
    top: 10%;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
  }

  @media (max-height: 600px) {
    img {
      top: 5%;
      max-width: 150px;
      max-height: 150px;
    }
  }
  
  .row {
    display: flex;
    justify-content: left;

    #go {
      background: $green-700;
      border: 1px solid $green-700;
    }

    select {
      margin: auto 1rem;
      width: 70px;
    }
  }
</style>