function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
// Points of the game
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].points;
            }
        }
    }
}
// player shoe size
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].shoe;
            }
        }
    }
}


//Finding player by points
function playerWithMostPoints() {
    const game = gameObject();
    let maxPoints = 0;
    let playerName = "";
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                playerName = player;
            }
        }
    }
    return playerName;
}
//Finding player by shoe size
function playerWithBiggestShoe() {
    const game = gameObject();
    let maxShoeSize = 0;
    let playerName = "";
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > maxShoeSize) {
                maxShoeSize = game[team].players[player].shoe;
                playerName = player;
            }
        }
    }
    return playerName;
}
//Find team colors by team name
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}
// An array of team names
function teamNames() {
    const game = gameObject();
    const names = [];
    for (const team in game) {
        names.push(game[team].teamName);
    }
    return names;
}
// An array of player numbers by team name
function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const team in game) {
        if (game[team].teamName === teamName) {
            for (const player in game[team].players) {
                numbers.push(game[team].players[player].number);
            }
        }
    }
    return numbers;
}
//Finding player stats by player name
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        for (const player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player];
            }
        }
    }
}
// Find rebounds by largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].shoe > maxShoeSize) {
                maxShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}
// Find player with the most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerName = "";
    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                playerName = player;
            }
        }
    }
    return playerName;
}
// Find team with the most points
function winningTeam() {
    const game = gameObject();
    let maxPoints = 0;
    let winningTeamName = "";
    for (const team in game) {
        let totalPoints = 0;
        for (const player in game[team].players) {
            totalPoints += game[team].players[player].points;
        }
        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            winningTeamName = game[team].teamName;
        }
    }
    return winningTeamName;
}
// Find player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}
// Longest name have most steals
function doesLongNameStealATeam() {
    const game = gameObject();
    let longestName = "";
    let maxSteals = 0;
    let playerWithLongestName = "";

    for (const team in game) {
        for (const player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }

    for (const team in game) {
        for (const player in game[team].players) {
            if (player === playerWithLongestName) {
                maxSteals = game[team].players[player].steals;
            }
        }
    }

    for (const team in game) {
        for (const player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                return false;
            }
        }
    }

    return true;
}
