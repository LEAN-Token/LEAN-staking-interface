<script>
    import { onMount } from 'svelte';
    import { prepareWriteContract, writeContract } from '@wagmi/core';
    import { parseEther } from 'viem';
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { tokensEarned, tokenBalance, tokensStaked, lpTokenBalance } from './contractData';

    let amountOfTokens

    lpTokenBalance.subscribe(tokens => {
		amountOfTokens = tokens;
	});
    // const handleInputChange = (e) => {
    // numberOfTokens = e.target.value;
    // parsedNumberOfTokens = parseEther(numberOfTokens);
    // console.log(parsedNumberOfTokens);
    // };
    
    async function approveSpend() {
        // console.log(numberOfTokens);
        // console.log(parsedNumberOfTokens);
        const config = await prepareWriteContract({
            address: '0x9961c2652B301c4A25256Db05316d2be11CEbaB1',
            abi: [
                    {
                        name: 'approve',
                        type: 'function',
                        stateMutability: 'nonpayable',
                        inputs: [{ internalType: 'address', name: 'spender', type: 'address' },
                                { internalType: 'uint256', name: 'amount', type: 'uint256' }],
                        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                    },
                ],
            functionName: 'approve',
            args: ['0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8',parseEther(amountOfTokens)],
            // value: parseEther(numberOfTokens),
            //TODO check token balance before tx sig if ammount to spend !== to approve ammount 
            chainId: 369
        });



        const { hash } = await writeContract(config);
    }
</script>

<!-- <Input id="amount" type="number" placeholder="Amount" on:input={handleInputChange} bind:value={numberOfTokens} /> -->
<Button class="hover:bg-gray-700" on:click={approveSpend}>Approve</Button>
<!-- <AlertDialog.Cancel>Cancel</AlertDialog.Cancel> -->

