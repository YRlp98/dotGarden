<template>
	<UApp>
		<DefaultHeader />
		<slot />
		<DefaultFooter />
	</UApp>
</template>

<script setup lang="ts">
import DefaultHeader from '~/components/theme/DefaultHeader.vue'
import DefaultFooter from '~/components/theme/DefaultFooter.vue'
import { useThemeStore } from '#imports'

const theme = useThemeStore();
</script>
