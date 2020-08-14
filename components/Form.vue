<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Расчет чего то
        </h1>
        <p class="leading-relaxed mt-4">
          Для проведение вычислений заполните форму введите все необходимые данные и нажмите кнопку Расчитать
        </p>
      </div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Введите данные
        </h2>
        <input v-model="data.x" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" type="text">
        <input v-model="data.y" class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" type="text">
        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="sendForm">
          Расчитать
        </button>
        <p v-if="result" class="text-xs text-gray-500 mt-3">
          Результат вычислений: {{ result }}
        </p>
      </div>
    </div>
  </section>
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
