<template>
  <layouts-container class="py-[104px]">
    <app-header class="mb-9" />
    <app-search-bar
      v-model="query"
      :status="status"
      @handle-click="handleSearch"
    />
    <layouts-card
      class="mt-6 flex gap-[37px] px-12 py-11 shadow-app shadow-[#4660bb33] dark:shadow-none"
      v-if="status == 'success'"
    >
      <img
        v-if="user.avatar_url"
        class="h-[177px] w-[177px] rounded-full"
        :src="user.avatar_url"
        :alt="user.name || 'avatar'"
        width="177"
        height="177"
      />
      <div v-else class="h-[177px] w-[177px] rounded-full bg-app-grey-1"></div>
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <h3 class="text-[27px] font-bold text-app-grey-4 dark:text-white">
            {{ user.name || "Not Available" }}
          </h3>
          <p class="text-[15px] font-normal text-app-grey-1 dark:text-white">
            Joined {{ dayjs(user.created_at).format("DD MMM YYYY") }}
          </p>
        </div>
        <p class="mt-[2px] text-base font-normal text-app-primary">
          @{{ user.login }}
        </p>
        <p
          class="mt-[20px] text-[15px] font-normal leading-[25px] text-app-grey-1 dark:text-white/95"
        >
          {{ user.bio || "Not Available" }}
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
              {{ user.public_repos }}
            </h3>
          </div>
          <div>
            <p class="text-[13px] font-normal text-app-grey-1 dark:text-white">
              Followers
            </p>
            <h3
              class="text-[22px] font-bold uppercase text-app-grey-4 dark:text-white"
            >
              {{ user.followers }}
            </h3>
          </div>
          <div>
            <p class="text-[13px] font-normal text-app-grey-1 dark:text-white">
              Following
            </p>
            <h3
              class="text-[22px] font-bold uppercase text-app-grey-4 dark:text-white"
            >
              {{ user.following }}
            </h3>
          </div>
        </div>
        <div class="flex gap-[62px]">
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-location :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                {{ user.location || "Not Available" }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-link :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                {{ user.blog || "Not Available" }}
              </p>
            </div>
          </div>
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-twitter :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                {{ user.twitter_name || "Not Available" }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-building :color-mode="theme as any" />
              <p class="text-sm font-normal text-app-grey-2 dark:text-white">
                {{ user.company || "Not Available" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </layouts-card>
  </layouts-container>
</template>

<script setup lang="ts">
interface User {
  avatar_url: string | null;
  name: string | null;
  login: string | null;
  bio: string | null | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_name: string | null;
  company: string | null;
  created_at: string | null;
}

const theme = useTheme();
const dayjs = useDayjs();

const query = ref<string>("octocat");
const user = ref<User>({} as User);
const status = ref<string>("");
const handleSearch = async (text: string) => {
  query.value = text;
  const { data, status: statusFetching } = await fetchUsers(text);
  status.value = statusFetching.value;
  user.value = data.value as User;
};

const config = useRuntimeConfig();
const fetchUsers = async (query: string) => {
  const { data, status } = await useFetch(
    `${config.public.apiBase}/users/${query}`,
  );
  return { data, status };
};

onMounted(async () => {
  await nextTick();
  await handleSearch(query.value);
});
</script>
