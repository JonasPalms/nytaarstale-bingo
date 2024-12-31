<template>
  <h1>Velkommen til Hans Kongelige Højheds Nytårstale-Bingo 🤴🏻</h1>
  <h2>Identifér dem selv!</h2>
  <ul>
    <RouterLink v-for="name in names" :key="name" :to="`/${name.toLowerCase()}`">
      {{ name }}
    </RouterLink>
  </ul>

</template>
<script setup>
  const names = [
    'Paula',
    'Rasmus',
    'Frid',
    'Christine',
    'Jonas',
  ]
</script>
<style scoped>
h2 {
  text-align: center;
}

h1 {
  text-align: center;
  font-size: 2rem;

}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

}

a {
  text-decoration: none;
  color: inherit;
  background-color: var(--custom-color-brand);
  color: var(--custom-bg-color);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  min-width: 200px;
  text-align: center;
  font-weight: 900;
}
</style>