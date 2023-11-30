<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import NavBarSheet from './NavBarSheet.svelte';
	import LightSwitch from './LightSwitch.svelte';
	import WalletConnect from '../../WalletConnect.svelte';
	import lean_cup from '../../images/logo.png';

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/60 shadow-sm backdrop-blur';

	const navStyle = 'relative py-2 flex items-center space-x-6 text-sm font-medium transition-all';

	const navIcon =
		'inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs w-9 px-0';

	const navItem =
		'pt-1.5 font-dm text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60';

	const chartLink = 'https://dexscreener.com/pulsechain/0x9961c2652b301c4a25256db05316d2be11cebab1';
	const teleLink = 'https://t.me/plsLEAN';
	const cordLink = 'https://discord.gg/NRg34Rawc6';
	const githubLink = 'https://github.com/AnEntrypoint';
	const twitter = 'https://x.com/pls_lean';
	const logoAltText = 'LEAN';
</script>


<header class={headStyle}>
	<div class="container flex h-14 items-center">
		<div class="mr-4 hidden md:flex">
			<nav class="relative py-2 flex items-center space-x-2 text-sm font-medium">
				<a href="/" class="mr-3 flex items-center space-x-2">
					<img src={lean_cup} alt={logoAltText} class="w-8" />
				</a>
				<!-- home, charts -->
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="link" class={navItem} builders={[builder]}>Explore</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-auto">
						<!-- <a href="/home" class={navItem}>
							 <DropdownMenu.Item>
								<DropdownMenu.Label>Home</DropdownMenu.Label>
							</DropdownMenu.Item> -->
						<!-- </a> -->
						<!-- <DropdownMenu.Separator /> --> 
						<a href="/farm" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Farms</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a target="_blank" href={chartLink} class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Chart</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<!-- <DropdownMenu.Separator />
						<a href="/papar" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>📃Paper</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a> -->
						<!-- <DropdownMenu.Separator />
						<a href="https://github.com/AnEntrypoint" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>🛰️Github</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a> -->
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				<!-- socials -->
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="link" class={navItem} builders={[builder]}>Socials</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-auto">
						<a target="_blank" href="https://t.me/plsLEAN" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Telegram</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a href="http://x.com/pls_lean" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Twitter</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						<DropdownMenu.Separator />
						<a href="https://discord.gg/NRg34Rawc6" class={navItem}>
							<DropdownMenu.Item>
								<DropdownMenu.Label>Discord</DropdownMenu.Label>
							</DropdownMenu.Item>
						</a>
						
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</nav>
		</div>
		<NavBarSheet />
		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none" data-svelte-h="svelte-1eg3ung" />
			<nav class="flex items-center space-x-1">
				<WalletConnect />
				<LightSwitch />
			</nav>
		</div>
	</div>
</header>

<!-- <header class={headStyle}>
	<nav class={navStyle}>
		<a href="/" class="mr-6 flex items-center space-x-2">
			<img src={lean_cup} alt="" class="w-10" />
		</a>
		<ul class="hidden items-center justify-center gap-6 md:flex">
			<li class={navItem}>
				<a target="_blank" href={chartLink}>Chart</a>
			</li>
			<li class={navItem}>
				<a target="_blank" href={teleLink}>Telegram</a>
			</li>
			<li class={navItem}>
				<a target="_blank" href={cordLink}>Discord</a>
			</li>
			<li class="pt-1.5 font-dm text-sm font-medium text-black">
				<a href="/onboard">Get Involved</a>
			</li> 
		</ul>
		<div class="flex-grow" />
		<div class="items-center justify-center gap-6 flex">
			<WalletConnect />
			<LightSwitch />
		</div>
	</nav>
	<NavBarSheet />
</header> -->
