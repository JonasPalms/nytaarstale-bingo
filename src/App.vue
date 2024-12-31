<script setup>
import { onMounted, ref, provide } from 'vue'
import { supabase } from './supabase'

// const session = ref(null)
// provide('session', session)

// onMounted(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     session.value = data.session
//   })

//   supabase.auth.onAuthStateChange((_, _session) => {
//     session.value = _session
//   })
// })
</script>

<template>
  <div class="container">
    <RouterView  />
  </div> 
</template>