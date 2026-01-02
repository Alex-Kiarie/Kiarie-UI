<template>
  <KSidebar>
    <KSidebarLink :to="{ path: '/dashboard' }" :isLast="false">
      <IconsKDashboardIcon class="iconSmall" /> Dashboard
    </KSidebarLink>
    <!---->
    <KSidebarLink :to="{ path: '/field-groups' }" :isLast="true">
      <IconsKDashboardIcon class="iconSmall" /> Field Groups
    </KSidebarLink>
    <!---->
    <KSidebarDropdown :isLast="false">
      <template #caption>
        <KDocumentCheckIcon class="iconSmall" /> Approval Entries
        <label class="bg-red-500 rounded-full !px-1 font-normal">0</label>
      </template>
      <template #content>
        <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }"
          :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
          :sidebarDropdown="true">Pending My Approval <label
            class="bg-white rounded-full !px-1 text-red-500 font-normal">0</label>
        </KSidebarLink>
        <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }" :isLast="true"
          :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
          :sidebarDropdown="true">Approved
        </KSidebarLink>
        <KSidebarDropdown :isLast="true">
          <template #caption>
            <KDocumentCheckIcon class="iconSmall" /> Nested DropDown
            <label class="bg-red-500 rounded-full !px-1 font-normal">0</label>
          </template>
          <template #content>
            <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }"
              :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
              :sidebarDropdown="true">Sub menu 1
            </KSidebarLink>
            <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }" :isLast="true"
              :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
              :sidebarDropdown="true">Sub menu 2
            </KSidebarLink>
          </template>
        </KSidebarDropdown>
      </template>
    </KSidebarDropdown>
    <KSidebarDropdown :isLast="true">
          <template #caption>
            <KDocumentCheckIcon class="iconSmall" />DropDown 2
          </template>
          <template #content>
            <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }"
              :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
              :sidebarDropdown="true">Sub menu 1
            </KSidebarLink>
            <KSidebarLink :to="{ path: '/ess/approval-entry/list?status=Open&docType=staff-claim' }" :isLast="true"
              :active="router.currentRoute.value.fullPath.includes('/ess/approval-entry/list?status=Open') || router.currentRoute.value.fullPath.includes('/ess/approval-entry/Open') ? true : false"
              :sidebarDropdown="true">Sub menu 2
            </KSidebarLink>
          </template>
        </KSidebarDropdown>
  </KSidebar>
</template>
<script setup lang="ts">
import KDocumentCheckIcon from '../Icons/KDocumentCheckIcon.vue';
import KSidebarDropdown from '../KSidebarDropdown.vue';
import KSidebarLink from '../KSidebarLink.vue';
const router = useRouter();
</script>