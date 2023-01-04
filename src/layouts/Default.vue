<template>
  <div>
    <header class="flex p-4 container mx-auto">
      <div class="flex-1 font-bold">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
      <nav class="flex-1 text-right">
        <a class="hover:underline p-2" href="https://drive.google.com/file/d/1CMq9C_pHaDIGWqdB5sCyI8SimYKthyjG/view" target="_blank">Resume</a>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
