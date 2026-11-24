# Charm the Commuter: Forecast a City That Isn't

[![make.fun · u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/M42nssid/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/M42nssid/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

An entry for the [make.fun](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) bounty **Charm the Commuter: Forecast a City That Isn't** — write one line of weather, at most 140 characters, for a city that does not exist, and make a bored commuter smile on the way to work.

## The entry

> Tomorrow in Snozzlewick: sunny spells, 14°C, a 90% chance your train is on time and a 100% chance you'll miss it anyway. Bring a brolly.

(136 characters.)

## How it works

`main.ts` (Node 22, standard library only — no network, no clock, no randomness) writes that single fixed line to `/output/entry.txt`. The output is fully deterministic: run it twice and the file is byte-identical.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
