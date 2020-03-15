<template>
	<section class="home">
		<av-hero @info="dialog = true" />
		<section class="pa-6 py-md-12 text-center container--fluid">
			<v-container>
				<h2>Come posso aiutare?</h2>
				<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
					<p>Nel rispetto delle misure adottate del governo puoi intervenire in due modi.</p>
				</div>
				<v-row>
					<v-col cols="12" sm="6">
						<img
							class="home__media"
							src="/assets/images/grocery-bag.svg"
							title="Fai la spesa per un vicino"
							alt="Sacchetto della spesa con alimentari"
						/>
						<h3>Fai la spesa per un vicino</h3>
						<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
							<p>Tutti i negozi di alimentari sono aperti! Mi raccomando, sono ammessi solo beni di prima necessità.</p>
						</div>
					</v-col>
					<v-col cols="12" sm="6">
						<img
							class="home__media"
							src="/assets/images/medical.svg"
							title="Vai in farmacia per un vicino"
							alt="Valigetta dei medicinali"
						/>
						<h3>Vai in farmacia per un vicino</h3>
						<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
							<p>Ricordati che la foto o la fotocopia di una ricetta medica non possono essere accettate dal farmacista.</p>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</section>
		<section class="pa-6 py-md-12 text-center container--fluid grey lighten-5">
			<v-container>
				<h2>Come funziona?</h2>
				<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
					<p>Il sistema è molto semplice ma non fa miracoli!</p>
				</div>
				<v-row>
					<v-col cols="12" sm="6">
						<img
							class="home__media"
							src="/assets/images/pencil.svg"
							title="Compila il modulo"
							alt="Matita che rappresenta la coplilazione del modulo"
						/>
						<h3>Compila il modulo</h3>
						<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
							<p>Inserisci solo il tuo indirizzo di posta elettronica ed il CAP della tua zona. Non ti chiediamo informazioni personali.</p>
						</div>
					</v-col>
					<v-col cols="12" sm="6">
						<img
							class="home__media"
							src="/assets/images/merge.svg"
							title="Aspetta che il sistema trovi una vicino"
							alt="Due freccie che si uniscono"
						/>
						<h3>Aspetta una combinazione</h3>
						<div class="font-weight-light mb-3 mx-auto title text--darken-3 grey--text">
							<p>Non appena il sistema troverà un vicino di casa vi metterà in contatto. Puoi cancellarti in qualsiasi momento!</p>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</section>
		<section class="pa-6 py-md-12 text-center container--fluid">
			<v-container>
				<h2>Poche semplici regole</h2>
				<div class="font-weight-light mb-10 mx-auto title text--darken-3 grey--text">
					<p>Aiutare significa anche rispettare le regole.</p>
				</div>
				<div class="d-flex align-center mb-3">
					<img
						class="home__icon mr-5"
						src="/assets/images/police.svg"
						title="Agisci nel rispetto dei decreti"
						alt="Poliziotto"
					/>
					<div class="text-left">
						<h3>Agisci nel rispetto dei decreti</h3>
						<div class="font-weight-light mb-3 mx-auto text--darken-3 grey--text">
							<p class="mb-0">
								In questi giorni la nostra libertà di circolazione è molto limitata. Consulta le
								<a
									href="http://www.governo.it/it/faq-iorestoacasa"
									target="_blank"
									rel="noopener noreferrer"
									title="domande frequenti sulle misure adottate dal governo"
								>domande frequenti</a> sulle misure adottate dal governo.
							</p>
						</div>
					</div>
				</div>
				<div class="d-flex align-center mb-3">
					<img
						class="home__icon mr-5"
						src="/assets/images/certificate.svg"
						title="Compila autocertificazione"
						alt="Certificato"
					/>
					<div class="text-left">
						<h3>Compila l'autocertificazione</h3>
						<div class="font-weight-light mb-3 mx-auto text--darken-3 grey--text">
							<p class="mb-0">
								Per poter circolare, anche per andare in farmacia o al supermercato, è necessario compilare l'autocertificazione. La puoi creare online sul portale
								<a
									href="https://autocertificazionespostamenti.it/"
									target="_blank"
									rel="noopener noreferrer"
									title="Crea l'autocertificazione"
								>autocertificazionespostamenti.it</a>.
							</p>
						</div>
					</div>
				</div>
				<div class="d-flex align-center mb-3">
					<img
						class="home__icon mr-5"
						src="/assets/images/distance.svg"
						title="Rispetta la distanza di sicurezza"
						alt="Righello"
					/>
					<div class="text-left">
						<h3>Rispetta la distanza di sicurezza</h3>
						<div class="font-weight-light mb-3 mx-auto text--darken-3 grey--text">
							<p
								class="mb-0"
							>Non avvicinarti mai a meno di un metro dal tuo vicino. È sempre consigliabile lasciare i sacchetti davanti alla porta ed indossare mascherina e guanti.</p>
						</div>
					</div>
				</div>
				<div class="d-flex align-center mb-3">
					<img
						class="home__icon mr-5"
						src="/assets/images/payment.svg"
						title="Usa sistemi di rimborso digitali"
						alt="Smartphone con il simbolo del dollaro"
					/>
					<div class="text-left">
						<h3>Usa sistemi di rimborso digitali</h3>
						<div class="font-weight-light mb-3 mx-auto text--darken-3 grey--text">
							<p class="mb-0">
								Per i rimborsi evita il contante e sfrutta sistemi di rimborso digitale come
								<a
									target="blank"
									href="https://www.satispay.com/en-it/"
									title="Satispay"
								>Satispay®</a>. Sono gratuiti!
							</p>
						</div>
					</div>
				</div>
			</v-container>
		</section>
		<v-dialog v-model="dialog" persistent max-width="290">
			<v-card>
				<v-card-title class="headline">Attenzione</v-card-title>
				<v-card-text>
					Il servizio sarà presto operativo, nel frattempo puoi contattarci all'indirizzo:
					<a
						href="mailto:info@aiutaunvicino.it"
						target="_blank"
					>info@aiutaunvicino.it</a>.
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</section>
</template>

<script>
import AvHero from "~/components/AvHero.vue";

export default {
	data() {
		return {
			dialog: false
		};
	},
	head: {
		title: "Aiuta un vicino!",
		description:
			"Richiedi o fornisci gratuitamente aiuto ad un tuo vicino di casa."
	},
	components: {
		AvHero
	}
};
</script>

<style lang="scss">
.home {
	&__media {
		max-width: 180px;
	}

	&__icon {
		max-width: 70px;
	}
}
</style>
