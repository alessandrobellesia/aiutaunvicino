<template>
	<section class="av-hero pa-6 py-md-12 white--text">
		<v-container>
			<v-row>
				<v-col cols="12" sm="8">
					<h1 class="av-hero__title mb-3 mb-sm-0">Aiuta un vicino!</h1>
					<div class="font-weight-light title mb-3 text--lighten-4 grey--text">
						<p>
							In questi giorni di crisi sanitaria molti dei nostri vicini di casa si trovano in difficoltà. Quatantena, disabilità, problemi di deambulazione, tante possono essere le motivazioni che rendono impossibile uscire di casa.
							<strong>Aiutiamoci a vicenda!</strong>
						</p>
					</div>
					<v-btn @click="$emit('info')" color="white" class="mt-6" block large depressed>Richiedi aiuto</v-btn>
					<v-btn
						@click="$emit('info')"
						color="white"
						class="mt-6 ml-md-6"
						large
						outlined
						block
					>Fornisci aiuto</v-btn>
				</v-col>
				<v-col cols="12" sm="4" class="d-none d-sm-flex">
					<img
						class="av-hero__media"
						src="/assets/images/volunteering.svg"
						title="Aiuta un vicino"
						alt="Mano con un cuore che rappresenta il volontariato"
					/>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	name: "AvHero"
};
</script>

<style lang="scss">
.av-hero {
	background: linear-gradient(to bottom, #1867c0, #5cbbf6);

	&__title {
		font-size: 2rem;
		font-weight: 300;
		line-height: 1.2;

		@media (min-width: 600px) {
			font-size: 3rem;
		}
	}

	.v-btn--block {
		@media (min-width: 600px) {
			display: inline-block;
			min-width: auto !important;
		}
	}

	&__media {
		max-width: 120px;
		margin: 0 auto;

		@media (min-width: 600px) {
			max-width: none;
			width: 100%;
		}
	}
}
</style>