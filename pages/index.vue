<template>
  <layouts-container class="py-[104px]">
    <app-header class="mb-9" />
    <app-search-bar v-model="query" @handle-click="handleSearch" />
    <layouts-card class="mt-6 flex gap-[37px] px-12 py-11">
      <div class="h-[177px] w-[177px] rounded-full bg-slate-400"></div>
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <h3 class="text-[27px] font-bold text-app-grey-4 dark:text-white">
            The Octocat
          </h3>
          <p class="text-[15px] font-normal text-app-grey-1 dark:text-white">
            Joined 25 Jan 2011
          </p>
        </div>
        <p class="mt-[2px] text-base font-normal text-app-primary">@octocat</p>
        <p
          class="mt-[20px] text-[15px] font-normal leading-[25px] text-app-grey-1 dark:text-white/95"
        >
          This profile has no bio
        </p>
        <div
          class="mb-[37px] mt-8 grid grid-cols-3 rounded-[10px] bg-app-light px-8 pb-[17px] pt-[15px] dark:bg-app-dark"
        >
          <div>
            <p class="text-[13px] font-normal text-app-grey-1 dark:text-white">
              Repos
            </p>
            <h3
              class="text-[22px] font-bold uppercase text-app-grey-4 dark:text-white"
            >
              8
            </h3>
          </div>
          <div>
            <p class="text-[13px] font-normal text-app-grey-1 dark:text-white">
              Followers
            </p>
            <h3
              class="text-[22px] font-bold uppercase text-app-grey-4 dark:text-white"
            >
              3938
            </h3>
          </div>
          <div>
            <p class="text-[13px] font-normal text-app-grey-1 dark:text-white">
              Following
            </p>
            <h3
              class="text-[22px] font-bold uppercase text-app-grey-4 dark:text-white"
            >
              9
            </h3>
          </div>
        </div>
        <div class="flex gap-[62px]">
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-location :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                San Francisco
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-link :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                https://github.blog
              </p>
            </div>
          </div>
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-twitter :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                Not Available
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-building :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                @github
              </p>
            </div>
          </div>
        </div>
      </div>
    </layouts-card>
  </layouts-container>
</template>

<script setup lang="ts">
const theme = useTheme();
const query = ref<string>("");
const handleSearch = (query: string) => {
  alert(query);
};
</script>
