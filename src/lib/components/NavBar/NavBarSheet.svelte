<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import NavLogo from './NavLogo.svelte'
	import { Separator } from "$lib/components/ui/separator";
	let side = 'left';
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<NavLogo />
	</Sheet.Trigger>
	<Sheet.Content {side}>
		<div class="p-4">
			<NavLogo />
			<!-- <h1 class="text-2xl font-semibold">LEAN</h1> -->
			<ul class="mt-4">
				<li class="mb-2"><a href="/" class="block hover:text-indigo-400">Home</a></li>
				<li class="mb-2"><a href="/farm" class="block hover:text-indigo-400">Farm</a></li>
				<li class="mb-2"><a href="https://dexscreener.com/pulsechain/0x9961c2652b301c4a25256db05316d2be11cebab1" target="_blank" class="block hover:text-indigo-400">Chart</a></li>
				<Separator class="my-4" />
				<li class="mb-2"><a href="https://t.me/plsLEAN" target="_blank" class="block hover:text-indigo-400">Telegram</a></li>
				<li class="mb-2"><a href="http://x.com/pls_lean" target="_blank" class="block hover:text-indigo-400">Twitter</a></li>
				<li class="mb-2"><a href="https://discord.gg/NRg34Rawc6" target="_blank" class="block hover:text-indigo-400">Discord</a></li>
			</ul>
		</div>
	</Sheet.Content>
</Sheet.Root>
