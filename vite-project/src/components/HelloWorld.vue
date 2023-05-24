<!-- <script setup lang="ts">
// variable
const msg = 'Hello!'

// functions
function log() {
  console.log(msg)
}

</script>

<template>
  <button @click="log">{{ msg }}</button>
</template> -->
<!-- <script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is : {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
  background: #5317c2;
  color: rgb(223, 226, 7);
}
</style> -->
<script lang="ts">
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>