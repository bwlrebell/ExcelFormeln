<script context="module">
// language settings
var languages = [
    ...(window.navigator.languages || []),
    window.navigator.language,
    window.navigator.browserLanguage,
    window.navigator.userLanguage,
    window.navigator.systemLanguage
  ];

var language = languages
  .filter(Boolean)
  .map(lang => lang.substr(0, 2))
  .find(lang => ["de"].includes(languages)) || "en";

let html = document.getElementsByTagName("html")[0];
html.setAttribute("lang", language);

let reason = document.getElementsByClassName("reason");
Array.from(reason).forEach(e => {
  if (e.lang === language) {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
});
</script>

<script>
import Prettifier from "./Components/Prettifier.svelte";
</script>


<Prettifier lang={language}/>
