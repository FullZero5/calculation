<template>
  <div class="w-full bg-grey-lighter h-screen flex flex-col justify-center">
    <div class="w-64 mx-auto bg-white shadow-md rounded p-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darkest font-bold mb-2" for="x">Х</label>
        <input v-model="data.x" class="shadow border rounded w-full p-2 text-xs text-grey-darker" type="number">
      </div>
      <div class="mb-4">
        <label class="block text-grey-darkest font-bold mb-2" for="y">Y </label>
        <input v-model="data.y" class="shadow border rounded w-full p-2 text-xs text-grey-darker mb-3" type="number">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue text-xs text-white font-bold py-2 px-4 rounded" @click="sendForm">
          Отправить
        </button>
      </div>
    </div>
    <p v-if="result" class="text-grey text-xs text-center">
      Результат вычислений: {{ result }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      data: {
        x: 1,
        y: 2
      },
      result: null
    }
  },
  methods: {
    async sendForm () {
      try {
        const response = await fetch('/api/calculations', {
          method: 'POST',
          body: JSON.stringify(this.data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.result = await response.json()
      } catch (error) {
        console.error('Ошибка:', error)
      }
    }
  }
}
</script>

<style>
.bg-blue {
  background-color: blue;
  color: white;
}
</style>
