<script>
	import { Canvas } from '@threlte/core';
	import { Sky } from '@threlte/extras';
  import SplashScene from './SplashScene.svelte';
</script>

<div class="h-screen w-auto">
	<Canvas>
		<Sky
			setEnvironment={false}
			turbidity="10"
			rayleigh="0.02"
			azimuth="180"
			elevation="-1"
			mieCoefficient=".004"
			mieDirectionalG="0.99"
		>
			<SplashScene />
		</Sky>
	</Canvas>
</div>