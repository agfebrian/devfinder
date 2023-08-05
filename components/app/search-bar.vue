<template>
  <layouts-card
    class="flex items-center gap-2 px-[10px] py-[9.5px] shadow-app shadow-[#4660bb33] dark:shadow-none md:gap-6"
  >
    <div class="flex flex-1 items-center pl-4 md:pl-[22px]">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hidden md:block"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6087 0C4.7591 0 0 4.74609 0 10.5797C0 16.4133 4.75915 21.1594 10.6087 21.1594C13.2162 21.1594 15.6071 20.2163 17.4563 18.6542L22.575 23.747C22.7449 23.9157 22.9664 24 23.1884 24C23.4118 24 23.635 23.9145 23.8049 23.7438C24.1435 23.4032 24.142 22.8527 23.8017 22.5139L18.6893 17.4274C20.2652 15.5807 21.2174 13.189 21.2174 10.5797C21.2174 4.74609 16.4582 0 10.6087 0ZM16.9346 16.7705C18.5071 15.1744 19.4782 12.9879 19.4782 10.5797C19.4782 5.70488 15.4994 1.73908 10.6087 1.73908C5.71794 1.73908 1.73913 5.70488 1.73913 10.5797C1.73913 15.4542 5.71794 19.4203 10.6087 19.4203C13.0163 19.4203 15.2029 18.4591 16.8027 16.9016C16.8211 16.879 16.8407 16.8571 16.8617 16.836C16.885 16.8125 16.9094 16.7907 16.9346 16.7705Z"
          fill="#0079FF"
        />
      </svg>
      <svg
        width="21"
        height="20"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="block md:hidden"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6087 0C4.7591 0 0 4.74609 0 10.5797C0 16.4133 4.75915 21.1594 10.6087 21.1594C13.2162 21.1594 15.6071 20.2163 17.4563 18.6542L22.575 23.747C22.7449 23.9157 22.9664 24 23.1884 24C23.4118 24 23.635 23.9145 23.8049 23.7438C24.1435 23.4032 24.142 22.8527 23.8017 22.5139L18.6893 17.4274C20.2652 15.5807 21.2174 13.189 21.2174 10.5797C21.2174 4.74609 16.4582 0 10.6087 0ZM16.9346 16.7705C18.5071 15.1744 19.4782 12.9879 19.4782 10.5797C19.4782 5.70488 15.4994 1.73908 10.6087 1.73908C5.71794 1.73908 1.73913 5.70488 1.73913 10.5797C1.73913 15.4542 5.71794 19.4203 10.6087 19.4203C13.0163 19.4203 15.2029 18.4591 16.8027 16.9016C16.8211 16.879 16.8407 16.8571 16.8617 16.836C16.885 16.8125 16.9094 16.7907 16.9346 16.7705Z"
          fill="#0079FF"
        />
      </svg>
      <input
        name="search"
        id="search"
        type="text"
        ref="inputSearch"
        :value="modelValue"
        @keyup.enter="onClick"
        placeholder="Search GitHub username..."
        class="ml-[9px] flex-1 bg-transparent text-[13px] font-normal text-app-grey-2 caret-app-primary outline-none focus:text-app-grey-5 focus:dark:text-white sm:ml-6 sm:text-lg"
      />
      <p
        v-if="status == 'error'"
        class="hidden pl-2 text-[15px] font-bold text-app-red md:block"
      >
        No Results
      </p>
    </div>
    <button
      @click="onClick"
      class="flex h-[46px] w-[84px] items-center justify-center rounded-[10px] bg-app-primary px-4 text-sm font-bold text-white transition hover:bg-app-primary-hover active:bg-app-primary-hover sm:h-[50px] sm:w-[106px] sm:px-0 sm:text-base"
    >
      Search
    </button>
  </layouts-card>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  status: string;
}

defineProps<Props>();
const emits = defineEmits<{
  (e: "handleClick", query: string): void;
}>();

const inputSearch = ref<HTMLInputElement>();
const onClick = () => {
  emits("handleClick", inputSearch.value!.value);
};

onMounted(() => inputSearch.value!.focus());
</script>
