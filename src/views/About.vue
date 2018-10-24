<!-- HTML Goes here -->
<template>
  <div>
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="card">
      <app-members></app-members>
      <div>DevLee</div>
      <div>MattL019</div>
      <div>Rejam</div>
      <div>Banhbaovy</div>
      <div>Novajumper</div>
    </div>
  </div>

</template>

<!-- JavaScript goes here -->
<script>

export default {
  data: function() {
    return {
      title: 'About Us'
    }
  }
}
</script>

<!-- CSS goes here. 'scoped' attribute means the CSS will 
be applied to this component only. -->
<style scoped>
h1 {
  text-align: center;
}

</style>