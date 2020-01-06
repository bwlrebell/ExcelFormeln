<script>
import Router from "svelte-spa-router";
import GlobalStyle from "./Components/GlobalStyle.svelte";
import Prettifier from "./Components/Prettifier.svelte";
import Page from "./Components/Page.svelte";

const routes = {
  "/" : Prettifier,
  "/page" : Page
};

</script>

<GlobalStyle />
<Router {routes}/>
