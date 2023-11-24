<script>
	import { spring } from 'svelte/motion';
	import { Button } from '$lib/components/ui/button';
	import { T, useThrelte, useRender } from '@threlte/core';
	import {
		EffectComposer,
		EffectPass,
		RenderPass,
		GlitchEffect,
		ShockWaveEffect
	} from 'postprocessing';
	import { interactivity, OrbitControls, Environment, HTML, Float } from '@threlte/extras';
	import DoubleCup from '../../lib/DoubleCup.svelte';

	const { scene, renderer, camera, size } = useThrelte();

	// To use the EffectComposer we need to pass arguments to the
	// default WebGLRenderer: https://github.com/pmndrs/postprocessing#usage
	const composer = new EffectComposer(renderer);
	const setupEffectComposer = (camera) => {
		composer.removeAllPasses();
		composer.addPass(new RenderPass(scene, camera));
		composer.addPass(new EffectPass(camera, new GlitchEffect()));
	};

	// We need to set up the passes according to the camera in use
	$: setupEffectComposer($camera);
	$: composer.setSize($size.width, $size.height);
	useRender((_, delta) => {
		composer.render(delta);
	});

	interactivity();

	const onVisibilityChange = (isVisible) => {
		// console.log(isVisible);
	};

	let isHovering = false;
	let isPointerDown = false;

	let htmlPosZ = spring(0);
	$: htmlPosZ.set(isPointerDown ? -0.25 : isHovering ? -0.075 : 0, {
		hard: isPointerDown
	});
</script>

<T.DirectionalLight position={[-20, -2, -1400]} />
<T.AmbientLight />

<T.FogExp2 color={'#dddddd'} density={0.002} />,

<Float rotationIntensity={0.35} rotationSpeed={10}>
	<T.PerspectiveCamera
		position={[0, 7, 18]}
		rotation.y="Math.PI"
		makeDefault
		fov={60}
		on:create={({ ref }) => {
			ref.lookAt(0, 0, 0);
		}}
	>
		<!-- <OrbitControls maxPolarAngle={1.56} autoRotate autoRotateSpeed={0.1} enableZoom={false} /> -->
	</T.PerspectiveCamera>
</Float>

<HTML
	position.x={-6}
	position.y={-5}
	occlude
	on:visibilitychange={onVisibilityChange}
>
	<a href="/home">
		<Button
			variant="ghost"
			on:pointerenter={() => (isHovering = true)}
			on:pointerleave={() => {
				isPointerDown = false;
				isHovering = false;
			}}
			on:pointerdown={() => (isPointerDown = true)}
			on:pointerup={() => (isPointerDown = false)}
			on:pointercancel={() => {
				isPointerDown = false;
				isHovering = false;
			}}
			class="text-center text-5xl py-12 hover:opacity-90 active:opacity-70">
			POUR 🆙❗
		</Button>
	</a>
</HTML>

<DoubleCup position={[0, -8, 0]} />
