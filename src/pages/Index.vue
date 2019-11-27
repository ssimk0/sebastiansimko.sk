<template>
  <Layout>

    <div class="lg:p-20 md:p-10 p-5">
      <p class="text-3xl lg:pl-20 font-light md:pl-10 pl-5 text-center md:text-left">
        I'm experienced full-stack web developer.
      </p>
      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-1/2 lg:pl-20 leading-loose md:pl-10 text-center md:text-left pb-10 md:pb-0">
          <h4 class="text-uppercase text-gray-400 text-sm pb-5 tracking-widest-xl">NETWORK</h4>
          <ul class="text-sm">
            <li><a href="mailto:contact@sebastiansimko.sk" >contact@sebastiansimko.sk</a></li>
            <li><a href="https://www.linkedin.com/in/sebastian-simko-2bb63bb7/">LinkedIn</a></li>
            <li><a href="https://github.com/ssimk0">Github</a></li>
            <li><a href="https://twitter.com/sebastiansimko">Twitter</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right lg:pr-20 leading-loose md:pr-10">
          <h4 class="text-uppercase text-gray-400 text-sm pb-5 tracking-widest-xl">SKILLS & FOCUS</h4>
          <ul class="text-sm">
            <li>Javascript in modern application</li>
            <li>GO lang in web application</li>
            <li>Docker & Kubernetes</li>
            <li>Python</li>
            <li>Modern PHP</li>
            <li>Automation Processes</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap pt-10">
        <div class="w-full md:w-1/2 text-center md:text-left lg:pl-20 leading-loose md:pl-10 pb-10 md:pb-0">
          <h4 class="text-uppercase text-gray-400 text-sm pb-5 tracking-widest-xl">EXPERIENCE</h4>
          <ul class="text-sm">
            <li><a href="https://en.wikipedia.org/wiki/Opera_Solutions" target="_blank">Opera solution</a></li>
            <li><a href="https://www.wirecard.com/making-payments" target="_blank">Wirecard</a></li>
            <li><a href="https://affinityanalytics.com/" target="_blank">Affinity Analytics</a></li>
            <li><a href="https://domcek.org" target="_blank">Domcek (Volunteer work)</a></li>
            <li><a href="https://adaptiware.company" target="_blank">Adaptiware</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right lg:pr-20 leading-loose md:pr-10">
          <h4 class="text-uppercase text-gray-400 text-sm pb-5 tracking-widest-xl">GOALS</h4>
          <ul class="text-sm">
            <li>Master the known languages</li>
            <li>Master the Kubernetes</li>
            <li>Find new ways to apply automation</li>
            <li>Became the architect level of developer</li>
          </ul>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
