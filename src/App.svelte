<script>
import Router from "svelte-spa-router";
import GlobalStyle from "./Components/GlobalStyle.svelte";
import Index from "./Components/Index.svelte";
import Page from "./Components/Page.svelte";

const routes = {
  "/" : Index,
  "/page" : Page
};

</script>

<GlobalStyle />
<Router {routes}/>
