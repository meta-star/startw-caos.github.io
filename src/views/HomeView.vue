<template>
  <div>
    <div class="relative overflow-hidden bg-white z-0">
      <div
        class="
          mt-10
          mx-auto
          py-10
          max-w-7xl
          px-4
          sm:mt-12 sm:px-6
          md:mt-16
          lg:mt-20 lg:px-8
          xl:mt-28
        "
      >
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
            <span class="block text-teal-600 xl:inline mb-5 lg:mb-0">caOS</span>
            <span class="block xl:inline">為使用者提供友善的 IoT 操作體驗</span>
          </h1>
          <p class="mt-3 text-base text-gray-500">
            caOS 不只是一個作業系統，更是一個專注於 IoT 生態的平台。
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <button
                  class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-teal-700
                bg-teal-100
                hover:bg-teal-200
                md:py-4 md:text-lg md:px-10
              "
              >
                立即安裝
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
            :src="require('@/assets/images/brands/caos.svg')"
            alt="caOS Platform"
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full py-20 md:py-36 lg:py-32 xl:py-28"
            style="object-fit:fill;"
        />
      </div>
    </div>
    <div
        class="mt-10 h-14 bg-gradient-to-r from-teal-500 to-fuchsia-500"
    ></div>
    <div
        class="
        mt-10
        mx-auto
        py-10
        max-w-7xl
        px-4
        sm:mt-12 sm:px-6
        md:mt-16
        lg:mt-20 lg:px-8
        xl:mt-28
      "
    >
      <div class="sm:text-center lg:text-right">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">基於開放原始碼力量的</span>
          <span class="block text-teal-600 xl:inline">好用 &amp; 自由</span>
          <span class="block xl:inline">的 IoT 平台</span>
        </h1>
        <p class="mt-3 text-base text-gray-500">
          你願意協助我們嗎？這裡這裡，這裡是我們的所有專案的列表，歡迎加入我們的行列來協助這項專案的發展
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <button
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-teal-600
                hover:bg-teal-700
                md:py-4 md:text-lg md:px-10
              "
              @click="goGitHub"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goGitHub() {
      window.open("https://github.com/startw-caos")
    }
  }
};
</script>
