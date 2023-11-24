<script>
	import { onMount } from 'svelte';
	import { prepareWriteContract, writeContract } from '@wagmi/core';
	import { parseEther } from 'viem';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	let numberOfTokens = '';
	let parsedNumberOfTokens = parseEther(numberOfTokens);

	const handleInputChange = (e) => {
		numberOfTokens = e.target.value;
		parsedNumberOfTokens = parseEther(numberOfTokens);
		console.log(parsedNumberOfTokens);
	};

	async function stakeTokens() {
		console.log(numberOfTokens);
		console.log(parsedNumberOfTokens);
		const config = await prepareWriteContract({
			address: '0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8',
			abi: [
				{
					name: 'withdraw',
					type: 'function',
					stateMutability: 'nonpayable',
					inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
					outputs: []
				}
			],
			functionName: 'withdraw',
			args: [parseEther(numberOfTokens)],
			// value: parseEther(numberOfTokens),
			chainId: 369
		});

		const { hash } = await writeContract(config);
	}
</script>

<Input
	id="amount"
	type="number"
	placeholder="Amount"
	on:input={handleInputChange}
	bind:value={numberOfTokens}
/>
<AlertDialog.Action on:click={stakeTokens}>Withdraw</AlertDialog.Action>
<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
