<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		tokensEarned,
		tokenBalance,
		tokensStaked,
		lpTokenBalance
	} from './(components)/contractData';
	import StakeTokens from './(components)/StakeTokens.svelte';
	import GetContractData from './(components)/GetContractData.svelte';
	import ClaimRewards from './(components)/ClaimRewards.svelte';
	import ApproveTokens from './(components)/ApproveTokens.svelte';
	import WithdrawTokens from './(components)/WithdrawTokens.svelte';
	import { ExternalLink } from 'radix-icons-svelte';
	import { Separator } from "$lib/components/ui/separator";

	let earnedTokens;
	let stakedLean;
	let leanBalance;
	let lpBalance;

	tokensEarned.subscribe((earned) => {
		earnedTokens = earned;
	});
	tokensStaked.subscribe((tokens) => {
		stakedLean = tokens;
	});
	tokenBalance.subscribe((tokens) => {
		leanBalance = tokens;
	});
	lpTokenBalance.subscribe((tokens) => {
		lpBalance = tokens;
	});

	const glass =
		'relative flex flex-col h-screen items-center backdrop-blur';

	const title =
		'font-bebas-neue uppercase text-4xl font-black flex flex-col container leading-none';

	const LinkIcon = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
</script>

<div style="background-color: --background;" class={glass}>
	<div class="h-10" />
	<h1 class={title}>
		<span
			class="text-6xl"
			style="color: transparent; background-clip: text; -webkit-background-clip: text; background-image: url('https://media1.giphy.com/media/toYOS2FIQKGH1NJ060/giphy.gif');"
			>Farms</span
		>Stake LP Tokens to earn 💜
	</h1>
	<div class="h-10 md:h-20" />
	<Tabs.Root value="pour" class="w-96 mb-10">
		<Tabs.List class="grid w-full grid-cols-2 ">
			<Tabs.Trigger value="pour">Earn LEAN 💜</Tabs.Trigger>
			<Tabs.Trigger value="null">Pools</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="pour">
			<Card.Root class="backdrop-blur w-96">
				<Card.Header class="p-5">
					<h1 class="text-3xl font-bold">STAKE</h1>
					<Card.Title><code>LEAN/WPLS LP to earn LEAN 💜</code></Card.Title>
				</Card.Header>
				<Card.Content>
					<Card.Description>
						<GetContractData />
						<div class="flex flex-row">
							<div class="flex justify-center flex-col font-dm text-sm font-medium">
								<p class="px-2">LEAN Earned:<br />{earnedTokens}</p>
								<p class="px-2">LEAN/WPLS LP Staked:<br />{stakedLean}</p>
								<p class="px-2">LEAN Balance:<br />{leanBalance}</p>
								<p class="px-2">LP Balance:<br />{lpBalance}</p>
								<!-- <p class="px-2">50000000</p> total -->
								<!-- <Progress value={earnedTokens} max={50000000} /> -->
								<!-- <div style="justify-content:space-between;" class="flex">
									<p>0</p>
									<p>100,000,000</p>
								</div> -->
								<p class="px-2">End Date:<br /> 20/03/2024</p>
							</div>
						</div>
					</Card.Description>
				</Card.Content>
				<div style="justify-content: space-between;" class="px-6 flex flex-row">
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<div></div>
						<a
							style="font-size: 12px;"
							href="https://scan.pulsechain.com/address/0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8"
							target="_blank">View Contract
						</a>
							<ExternalLink size="10" />
							<!-- <Separator orientation="vertical" class="" /> -->
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
							<a
							style="font-size: 12px;"
							href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/add/V2/PLS/0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
							target="_blank">Add Liquidity
						</a>
							<ExternalLink size="10" />
					</span>
					<span style="text-decoration: underline;" class="flex flex pb-3">
						<a
						style="font-size: 12px;"
						href="https://bafybeihiwe3inbfru7h6pesaj4siacbyx7t6o5qp3vwdz25n3p6ewlbnie.ipfs.dweb.link/#/?outputCurrency=0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
						target="_blank">Trade LEAN
					</a>
						<ExternalLink size="10" />
					</span>
				</div>
				
				
				

				<Card.Footer class="space-x-3 flex justify-center p-4">
					<ApproveTokens />
					<ClaimRewards />

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button class="hover:bg-gray-700" builders={[builder]}>Stake</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Stake LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
										How many tokens do you want to stake?
									</AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<StakeTokens />
								<!-- <Input type="email" placeholder="Amount" />
									<AlertDialog.Action>Claim</AlertDialog.Action>
									<AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button class="hover:bg-gray-700" builders={[builder]}>Withdraw</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Withdraw LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
																	How many tokens do you want to stake?
																</AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<WithdrawTokens />
								<!-- <Input type="email" placeholder="Amount" />
																<AlertDialog.Action>Claim</AlertDialog.Action>
																<AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="sip">
			<Card.Root class="">
				<Card.Header class="p-5">
					<h1 class="text-3xl font-bold">SIP 🚰</h1>
					<Card.Title>some <code>LEAN|WPLS LP</code></Card.Title>
				</Card.Header>
				<Card.Content>
					<Card.Description>
						<GetContractData />
						<div class="flex flex-row">
							<div class="flex justify-center flex-col">
								<p class="px-2">LEAN Earned:<br />{earnedTokens}</p>
								<p class="px-2">LEAN/WPLS LP Staked:<br />{stakedLean}</p>
								<p class="px-2">LEAN Balance:<br />{leanBalance}</p>
								<p class="px-2">LP Balance:<br />{lpBalance}</p>
								<!-- <p class="px-2">50000000</p> total -->
								<!-- <Progress value={earnedTokens} max={50000000} /> -->
								<!-- <div style="justify-content:space-between;" class="flex">
									<p>0</p>
									<p>100,000,000</p>
								</div> -->
								
							</div>
						</div>
					</Card.Description>
				</Card.Content>

				<div style="text-decoration: underline;" class="px-6">
					<a
						style="font-size: 12px;"
						href="https://scan.pulsechain.com/address/0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8"
						target="_blank">View on Explorers</a
					>
				</div>

				<Card.Footer class="p-0 flex justify-center">
					<ApproveTokens />
					<ClaimRewards />

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button class="hover:bg-gray-700" builders={[builder]}>Stake</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Stake LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
										How many tokens do you want to stake?
									</AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<StakeTokens />
								<!-- <Input type="email" placeholder="Amount" />
									<AlertDialog.Action>Claim</AlertDialog.Action>
									<AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>

					<AlertDialog.Root>
						<AlertDialog.Trigger asChild let:builder>
							<Button class="hover:bg-gray-700" builders={[builder]}>Withdraw</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Withdraw LEAN/WPLS LP 💜</AlertDialog.Title>
								<!-- <AlertDialog.Description>
                                  How many tokens do you want to stake?
                                </AlertDialog.Description> -->
							</AlertDialog.Header>

							<AlertDialog.Footer>
								<WithdrawTokens />
								<!-- <Input type="email" placeholder="Amount" />
                                <AlertDialog.Action>Claim</AlertDialog.Action>
                                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
					
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
	
	<!-- <div style="justify-content: center;" class="flex"> -->
		<!-- <Button
			target="_blank"
			href="https://app.pulsex.com/swap?outputCurrency=0x1c9b5e57AA89f8b58CA28249E347A6C933726449"
			style="line-height: 1.2; width: 12em; margin-top: 0.5em;"
			class="transition-colors justify-center block shadow-lg text-base text-white hover:text-gray-100 bg-green-500 hover:bg-green-300 hover:backdrop-blur-xl backdrop-blur-lg rounded-md"
		>
			BUY $LEAN
		</Button> -->
		<!-- <button
						style="margin: 10px;"
						class="block shadow-lg px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-8"
					>
						Learn More
					</button> -->
	<!-- </div> -->
</div>


<style>
	.video-docker::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>
