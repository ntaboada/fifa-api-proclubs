## Fifa 2018 Clubs Pro API ##

Fifa 2018 Clubs Pro API, built on NodeJS/ES6.  Wrapper to get stats for **Fifa 18 Pro Clubs Teams**.


## Installation

```
npm install fifa-api-proclubs
```

## How to use

After you install the package, you can include **fifa-api-proclubs** within your code such this:

```
const proClubsApi = require('fifa-api-proclubs`);
```

### Platform Type

All API operations need to preset a platform type. There are 3 different platforms:

- PS4
- XBOXONE
- PC

```
proClubsApi.club.platformType('PS4');
```

### Clubs

We can perform different operations according clubs:

- getClubIdByName(clubId)
- getClubMembers(clubId)
- getClubMemberStats(clubId)
- getClubSeasonRank(clubId)
- getClubSeasonStats(clubId)
- getClubStats(clubId)
- getClubMatchHistory(clubId)
- getClubInfo(clubId)

All operations require a _**clubId**_ as paramater. 

Example:

```
const resp = await club.getClubInfo('13607');
```

### Leaderboard

We can perform different operations according leaderboard:

-  getOverallLeaderboard()
-  getSeasonLeaderboard()

Example:

```
const resp = await leaderboard.seasonRankLeaderboard();
```

### Members

We can perform different operations according players/members:

-  getMembersClubStats(clubId, blazeId)
-  getMembersStats(blazeId)


_getMembersClubStats_  retrieves actual data of a player inside a club. This operation require a **_clubId_** and **_blazeId_** (playerId) as parameters.

_getMembersStats_ retrieves individual data of a player. This operation require a **_blazeId_** (playerId) as parameter.


Example:

```
const resp = await member.getMembersClubStats('13607', 'rE4p14Gj8KOtkGq63eL8mA!!:BrUy43tm4sv8Qz5jmZvGkg!!');
```

### Settings

- getSettings()


Example:

```
const resp = await settings.getSettings();
```


## Contributing

Contributors and committers are welcome.


## Made with ❤ by

- Nicolas Taboada (Javascript developer)
- E-mail: ntaboada93@gmail.com
- StackOverflow: nicolas-taboada


## License

MIT license. Copyright © 2018.


