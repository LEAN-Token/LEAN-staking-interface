import { writable, get } from "svelte/store";

// export const tokensSold = writable(50000000);
export const tokensEarned = writable('0.0');
export const tokensStaked = writable('0.0');
export const tokenBalance = writable('0.0');
export const lpTokenBalance = writable('0.0');
export const tokenEmissionPerSec = writable('0.0');