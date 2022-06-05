<script setup>
const title = ref('Hello World')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="html { background-color: rgb(17 24 39); }" />
    </Head>

<TopBar />
    <slot />

<Footer />
  </div>
</template>
