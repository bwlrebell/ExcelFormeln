<script context="module">
// language settings
var languages = [
    ...(window.navigator.languages || []),
    window.navigator.language,
    window.navigator.browserLanguage,
    window.navigator.userLanguage,
    window.navigator.systemLanguage
  ];

let lang = languages
  .filter(Boolean)
  .map(lang => lang.substr(0, 2))
  .find(lang => ["de"].includes(lang)) || "en";

let html = document.getElementsByTagName("html")[0];
html.setAttribute("lang", lang);

let reason = document.getElementsByClassName(`reason`)
Array.from(reason).forEach(e => {
  if (e.lang === lang) {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
});
</script>

<script>
import GlobalStyle from "./Components/GlobalStyle.svelte";
import Prettifier from "./Components/Prettifier.svelte";
</script>

<GlobalStyle />
<Prettifier lang={lang}/>
