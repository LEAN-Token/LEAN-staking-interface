<script>
import { onMount } from 'svelte';
import { readContract } from '@wagmi/core'
import { ethers } from 'ethers';
import { tokensEarned, tokensStaked, tokenBalance, lpTokenBalance, tokenEmissionPerSec } from './contractData';
import { getAccount } from '@wagmi/core'


const account = getAccount()
let Data
let stakedBalance
let leanBalance
let lpBalance
let emissionsPerToken

onMount(async () => {

    
    const data = await readContract({
        address: '0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8',
        abi: [
                {
                    name: 'earned',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
                    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                },
            ],
        functionName: 'earned',
        args: [account.address],
        chainId: 369
    })

    Data = ethers.formatEther(data)
    tokensEarned.update(earned => Data);

    const staked = await readContract({
        address: '0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8',
        abi: [
                {
                    name: 'balanceOf',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ internalType: 'address', name: '', type: 'address' }],
                    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                },
            ],
        functionName: 'balanceOf',
        args: [account.address],
        chainId: 369
    })

    stakedBalance = ethers.formatEther(staked)
    tokensStaked.update(tokens => stakedBalance);

    const leanBal = await readContract({
        address: '0x1c9b5e57AA89f8b58CA28249E347A6C933726449',
        abi: [
                {
                    name: 'balanceOf',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
                    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                },
            ],
        functionName: 'balanceOf',
        args: [account.address],
        chainId: 369
    })

    leanBalance = ethers.formatEther(leanBal)
    tokenBalance.update(tokens => leanBalance);

    const lpBal = await readContract({
        address: '0x9961c2652B301c4A25256Db05316d2be11CEbaB1',
        abi: [
                {
                    name: 'balanceOf',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
                    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                },
            ],
        functionName: 'balanceOf',
        args: [account.address],
        chainId: 369
    })

    lpBalance = ethers.formatEther(lpBal)
    lpTokenBalance.update(tokens => lpBalance);

    const emissionPer = await readContract({
        address: '0x0EDD0cFEE6d9987C446c301E4f1960d29F704Eb8',
        abi: [
                {
                    name: 'rewardRate',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [],
                    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
                },
            ],
        functionName: 'rewardRate',
        // args: [account.address],
        chainId: 369
    })

    emissionsPerToken = ethers.formatEther(emissionPer);
    tokenEmissionPerSec.update(tokens => emissionsPerToken);
})
</script>

<!-- <p>{Data}</p> -->