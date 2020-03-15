<template>
	<v-app>
		<v-content>
			<v-responsive>
				<nuxt />
			</v-responsive>
		</v-content>
		<av-footer />
	</v-app>
</template>

<script>
import AvFooter from "~/components/AvFooter.vue";
export default {
	name: "default",
	components: {
		AvFooter
	}
};
</script>


<style lang="scss">
.container {
	width: 100%;
	padding: 12px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 960px) {
		max-width: 900px;
	}
}
</style>