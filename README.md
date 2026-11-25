[![Midnight Fridge Roast](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/ChristaNavisa/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/ChristaNavisa/u-carbon-forge-midnight-fridge-roast-fc5d44a7/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

# Nightclub Bouncer

One-line roast of a smart fridge that refuses to open after midnight, entered in the
[Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
competition on make.fun.

## The line

> The fridge won't open after midnight — it's moonlighting as a nightclub bouncer.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program is fully deterministic:
the same line, byte for byte, on every run. Before writing, it checks the gate
itself — one line, 1–200 characters, not only whitespace — and fails loudly
instead of shipping an entry the scorer would refuse.

## Run

```sh
node main.ts
```
