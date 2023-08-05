<template>
  <layouts-container class="py-[31px] md:py-[104px]">
    <app-header class="mb-9" />
    <app-search-bar
      v-model="query"
      :status="status"
      @handle-click="handleSearch"
    />
    <p
      v-if="status == 'error'"
      class="mt-4 block text-center text-[15px] font-bold text-app-red md:mt-6 md:hidden"
    >
      No Results
    </p>
    <layouts-card
      class="mt-4 flex flex-col px-6 py-11 shadow-app shadow-[#4660bb33] dark:shadow-none md:mt-6 md:px-12"
      v-if="status == 'success'"
    >
      <!-- head -->
      <div class="flex gap-5 md:gap-[37px]">
        <img
          v-if="user.avatar_url"
          class="h-[70px] w-[70px] rounded-full md:h-[117px] md:w-[117px]"
          :src="user.avatar_url"
          :alt="user.name || 'avatar'"
          width="177"
          height="177"
        />
        <div
          v-else
          class="h-[70px] w-[70px] rounded-full bg-app-grey-1 md:h-[117px] md:w-[117px]"
        ></div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-bold leading-[30px] text-app-grey-4 dark:text-white md:text-[27px]"
            >
              {{ user.name || "Not Available" }}
            </h3>
            <p
              class="hidden text-[15px] font-normal text-app-grey-1 dark:text-white md:block"
            >
              Joined {{ dayjs(user.created_at).format("DD MMM YYYY") }}
            </p>
          </div>
          <p
            class="mt-[2px] text-[13px] font-normal text-app-primary md:text-base"
          >
            @{{ user.login }}
          </p>
          <p
            class="mt-1 block text-[13px] font-normal text-app-grey-1 dark:text-white md:hidden md:text-[15px]"
          >
            Joined {{ dayjs(user.created_at).format("DD MMM YYYY") }}
          </p>
          <p
            class="mt-[20px] hidden text-[15px] font-normal leading-[25px] text-app-grey-2 dark:text-white/95 md:block"
          >
            {{ user.bio || "Not Available" }}
          </p>
        </div>
      </div>
      <!-- content -->
      <div
        class="ml-auto mt-[24px] flex w-full max-w-[480px] flex-col gap-[23px] md:mt-[21px] md:gap-[32px]"
      >
        <p
          class="block text-[13px] font-normal leading-[25px] text-app-grey-2 dark:text-white/95 md:hidden md:text-[15px]"
        >
          {{ user.bio || "Not Available" }}
        </p>
        <div
          class="grid grid-cols-3 rounded-[10px] bg-app-light px-8 pb-[17px] pt-[15px] dark:bg-app-dark"
        >
          <div>
            <p
              class="text-center text-[11px] font-normal text-app-grey-1 dark:text-white md:text-left md:text-[13px]"
            >
              Repos
            </p>
            <h3
              class="text-center text-base font-bold uppercase text-app-grey-4 dark:text-white md:text-left md:text-[22px]"
            >
              {{ user.public_repos }}
            </h3>
          </div>
          <div>
            <p
              class="text-center text-[11px] font-normal text-app-grey-1 dark:text-white md:text-left md:text-[13px]"
            >
              Followers
            </p>
            <h3
              class="text-center text-base font-bold uppercase text-app-grey-4 dark:text-white md:text-left md:text-[22px]"
            >
              {{ user.followers }}
            </h3>
          </div>
          <div>
            <p
              class="text-center text-[11px] font-normal text-app-grey-1 dark:text-white md:text-left md:text-[13px]"
            >
              Following
            </p>
            <h3
              class="text-center text-base font-bold uppercase text-app-grey-4 dark:text-white md:text-left md:text-[22px]"
            >
              {{ user.following }}
            </h3>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:gap-[62px]">
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-location
                :color-mode="theme as any"
                :disabled="user.location ? false : true"
              />
              <p
                :class="[
                  user.location
                    ? 'text-app-grey-2 dark:text-white'
                    : 'text-app-disabled-light dark:text-app-disabled-dark',
                  'text-[13px] font-normal md:text-sm',
                ]"
              >
                {{ user.location || "Not Available" }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-link
                :color-mode="theme as any"
                :disabled="user.blog ? false : true"
              />
              <p
                :class="[
                  user.blog
                    ? 'text-app-grey-2 dark:text-white'
                    : 'text-app-disabled-light dark:text-app-disabled-dark',
                  'text-[13px] font-normal md:text-sm',
                ]"
              >
                {{ user.blog || "Not Available" }}
              </p>
            </div>
          </div>
          <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-4">
              <app-icon-twitter
                :color-mode="theme as any"
                :disabled="user.twitter_name ? false : true"
              />
              <p
                :class="[
                  user.twitter_name
                    ? 'text-app-grey-2 dark:text-white'
                    : 'text-app-disabled-light dark:text-app-disabled-dark',
                  'text-[13px] font-normal md:text-sm',
                ]"
              >
                {{ user.twitter_name || "Not Available" }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <app-icon-building
                :color-mode="theme as any"
                :disabled="user.company ? false : true"
              />
              <p
                :class="[
                  user.company
                    ? 'text-app-grey-2 dark:text-white'
                    : 'text-disabled-light dark:text-app-disabled-dark',
                  'text-[13px] font-normal md:text-sm',
                ]"
              >
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
