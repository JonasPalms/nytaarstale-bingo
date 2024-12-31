<template>
  <template v-if="!winnerFound">
    <h1>Her er din plade, {{ firstName }}</h1>
    <div class="board">
      <label v-for="word in words" class="cell"><input type="checkbox" :value="word" v-model="checkedWords" />{{ word }}</label>
    </div>
    <h3>Resultat: {{ checkedWords.length }} / {{ words.length }}</h3>
  </template>
    <div v-else class="winner">
      <h1>Jaaaaaaa, du har vundet! 🎉</h1>
      <button @click="reset()">Spil igen</button>
    </div>
</template>

<script setup>
import { ref, watch, computed, onBeforeUnmount } from 'vue'
import JSConfetti from 'js-confetti'


const { name } = defineProps({
  name: String
})

const reset = () => {
  checkedWords.value = []
  winnerFound.value = false
}

const firstName = name[0].toUpperCase() + name.slice(1)

const jsConfetti = new JSConfetti()

const checkedWords = ref([])

const winnerFound = ref(false)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  watch(checkedWords, async () => {
    if (checkedWords.value.length === words.value.length) {
      await wait(400)
      winnerFound.value = true
      while (winnerFound.value) {
        await jsConfetti.addConfetti({
          emojis: ['🎉', '🍾', '🤴🏻'],
          confettiRadius: 15,
          confettiNumber: 80,
        })
      }
    }
  })

  const possibleWords = {
    rasmus:[
    'Mod',
    'Tid',
    'Tak',
    'Nærhed',
    'Kære',
    'Modige',
    'Sympati',
    'Mary',
    'Jul'
  ], frid: [
    'Styrke',
    'Danske',
    'Nytænkning',
    'Rigsfællesskabet',
    'Opløfte',
    'Europa',
    'Samarbejde',
    'Vigtigt',
    'Bal'
  ], jonas: [
    'Hverdagen',
    'Erfaringer',
    'Opløfte',
    'Ung',
    'Nytænkning',
    'Leve',
    'Eftertanke',
    'Alvor',
    'Uro'
  ], paula: [
    'Bæredygtig',
    'Savn',
    'Alvor',
    'Forår',
    'Ønske',
    'Hjælpe',
    'Nuet',
    'Ukraine',
    'År'
  ], christine: [
    'Betænksom',
    'Hjertelig',
    'Benytter',
    'Huske',
    'Opløfte',
    'Frihed',
    'Hilsner',
    'Mod',
    'Christian'
  ]}
  
  const words = computed(() => possibleWords[name])

  onBeforeUnmount(() => {
    reset()
  })

</script>
<style scoped>
h1,
h2,
h3 {
  text-align: center;
}

.winner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    text-decoration: none;
    color: var(--custom-bg-color);
    padding: 1rem 2rem;
    font-weight: 600;
    background-color: var(--custom-color-brand);
  }
}

.board {
  display: grid;
  grid-gap: 4px;
  color: var(--custom-color-brand);
  grid-template-rows: repeat(9, 1fr);
}

@media only screen and (min-width: 60em) {

  /* 960px */
  .board {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}

label {
  color: var(--custom-color-brand);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;


}

input[type='checkbox'] {
  display: none;
  appearance: none;
  padding: 0;
  border: none;
  width: 0;
  height: 0;
}

label:has(input[type='checkbox']:checked) {
  background-color: var(--custom-color-brand);
  color: var(--custom-bg-color);
}

.cell {
  border: 1px solid var(--custom-color-brand);
  font-size: 2rem;
  height: 65px;
}
</style>
