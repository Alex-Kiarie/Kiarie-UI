<!-- <template>
  <PageTitle :title="title" />

  <div class="!text-xs">
    <div class="fixedx !topx-30 leftx-30 rightx-2 z-40">
      <ListActionsBar
        :pageProps="pageProps"
        :actionsProps="actionsProps"
        :selectedRows="selectedRows"
        @filter="toggleFilter"
        @search="onSearch"
        @delete="deleteMultiple"
        @orderList="onOrderList"
      >
        <template #listMoreActions>
          <slot name="listMoreActions" />
        </template>
        <template #listReports>
          <slot name="listReports" />
        </template>
      </ListActionsBar>
    </div>

    <div class="!top-40">
      <FiltersBar
        v-if="filterProps.isFilter"
        :pageProps="pageProps"
        @FnOnChangeFilters="onChangeFilters"
        @FnOnResetFilters="onResetFilters"
        @FnOnCloseFilterBar="closeFilterBar"
      />

      <div v-if="pageProps.isLinkTabs" class="pb-1 overflow-x-auto scrollbar pl-1">
        <slot name="navigationTabs" />
      </div>

      <div class="flex flex-col">
        <div
          :class="[
            'grow pb-20 rounded-lg max-h-100',
            pageProps.lookup !== undefined ? 'overflow-x-auto' : ''
          ]"
        >
          <table class="table-auto w-full relative">
            <thead class="bg-theme-3 text-gray-600 font-semibold sticky top-0 border border-gray-300">
              <tr class="text-xs">
                <th
                  v-if="pageProps.lookup === undefined && (selectedRows.length > 1 || isMultiSelect)"
                  class="w-6"
                >
                  <WCheckbox title="select all" :checked="isSelectAll" @click="isSelectAll = !isSelectAll" />
                </th>

                <th v-else-if="pageProps.lookup !== undefined" class="w-6">
                  <WCheckbox
                    v-if="pageProps.lookup.selection === 'multiple'"
                    title="select all"
                    :checked="isSelectAll"
                    @click="isSelectAll = !isSelectAll"
                  />
                </th>

                <slot name="thead" />
              </tr>
            </thead>

            <tbody class="border border-gray-300">
              <WTr
                v-for="(record, index) in records"
                v-if="!isFetchingData && records.length"
                :key="index"
                :index="index - 1"
                :recId="record[pageProps.keys.recKey]"
                :isSelected="isSelectedRow(record[pageProps.keys.recKey])"
                :isDoubleClick="pageProps.isRowDoubleClick"
                @OnRowClick="onRowClick"
              >
                <WTd
                  v-if="selectedRows.length > 1 || isMultiSelect || pageProps.lookup?.selection === 'multiple'"
                  class="flex justify-center w-6"
                >
                  <WCheckbox :checked="isSelectedRow(record[pageProps.keys.recKey])" />
                </WTd>

                <slot :name="`tbody-${record[pageProps.keys.recKey]}`" />
              </WTr>

              <slot name="totalsRow" />
            </tbody>
          </table>

          <div class="flex justify-center gap-1 items-center">
            <div v-if="isFetchingData">
              <span class="loader-sm" /> fetching data ...
            </div>
            <div v-else-if="!records.length" class="italic">
              No records found
            </div>
          </div>

          <div v-if="!isFetchingData && records.length" class="flex justify-center pt-1">
            <div v-if="!isLoadingMore && records.length >= newRecordsLimit" class="mt-2">
              <WButton class="bg-blue-500 !text-xs" @click="loadMore">
                <ChevronDoubleDownIcon class="h-4 w-4" /> Load More
              </WButton>
            </div>
            <div v-else-if="!isLoadingMore" class="italic mt-2">
              No more records
            </div>
            <span v-if="isLoadingMore" class="loader-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeMount, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
const FiltersBar = defineAsyncComponent(() => import('@/re-usables/components/FiltersBar.vue'))
const ListActionsBar = defineAsyncComponent(() => import('@/re-usables/components/ListPageActionsBar.vue'))
const WCheckbox = defineAsyncComponent(() => import('@/re-usables/components/WCheckbox.vue'))

/* props */
const props = withDefaults(
  defineProps<{
    pageProps?: any
    actionsProps?: any
    title?: string
  }>(),
  {
    pageProps: () => ({}),
    actionsProps: () => ({}),
    title: ''
  }
)

/* emits */
const emit = defineEmits<{
  (e: 'selectedRows', value: any[]): void
  (e: 'OnFetchData', value: any): void
}>()

const router = useRouter()
const { prefetchComponent } = useListPageComposable()

/* state */
const records = ref<any[]>([])
const fetchResponse = ref<any>(null)
const isFetchingData = ref(true)
const isLoadingMore = ref(false)
const isMultiSelect = ref(false)
const isSelectAll = ref(false)
const selectedRows = ref<any[]>([])
const search = ref('')
const filterQuery = ref('')
const recordsLimit = ref(20)
const newRecordsLimit = ref(20)

const filterProps = reactive({
  isFilter: false,
  filters: [] as any[]
})

/* lifecycle */
onBeforeMount(() => {
  fetchData(buildUrl())
})

onMounted(prefetchComponent)

/* watchers */
watch(isSelectAll, () => {
  if (!isSelectAll.value) {
    selectedRows.value = []
    isMultiSelect.value = false
  } else {
    selectedRows.value = records.value.map(r => r[props.pageProps.keys.recKey])
  }
})

watch(fetchResponse, val => emit('OnFetchData', val))

/* helpers & actions */
function buildUrl() {
  return `${props.pageProps.controller}/index${filterQuery.value}`
}

function fetchData(url: string) {
  isFetchingData.value = true
  fetch(url)
    .then(r => r.json())
    .then(data => {
      fetchResponse.value = data
      records.value = data.records || []
    })
    .finally(() => {
      isFetchingData.value = false
      isLoadingMore.value = false
    })
}

function onRowClick({ clickType, recId, index }: any) {
  if (clickType === 'double' && props.pageProps.formRoute) {
    router.push(`${props.pageProps.formRoute}/edit?recId=${recId}`)
    return
  }

  if (!selectedRows.value.includes(recId)) {
    selectedRows.value.push(recId)
  } else {
    selectedRows.value.splice(selectedRows.value.indexOf(recId), 1)
  }

  if (props.pageProps.lookup) {
    emit('selectedRows', selectedRows.value)
  }
}

function isSelectedRow(id: any) {
  return selectedRows.value.includes(id)
}

function toggleFilter() {
  filterProps.isFilter = !filterProps.isFilter
}

function onSearch(value: string) {
  search.value = value
  fetchData(buildUrl())
}

function onOrderList() {}
function onChangeFilters() {}
function onResetFilters() {}
function closeFilterBar() {}
function loadMore() {}
function deleteMultiple() {}
</script> -->
