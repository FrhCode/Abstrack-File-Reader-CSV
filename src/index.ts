import CsvFileReader from "./js/CsvFileReader";
import MatchCsv from "./js/interface/MatchCsv";
let fileName = "season-1819.csv";

const dataSeason_2019 = new CsvFileReader<MatchCsv>(fileName, [
    ["Date", 1, "string"],
    ["HomeTeam", 2, "string"],
    ["AwayTeam", 3, "string"],
    ["FTHG", 4, "number"],
    ["FTAG", 5, "number"],
    ["FTR", 6, "string"],
    ["Referee", 10, "string"],
]);

console.log(dataSeason_2019.data);

// dataSeason_2019.data[1].
// let { AwayTeam } = dataSeason_2019.data[1] as dataSeason;
// console.log(AwayTeam);

// const x = fs
//     .readFileSync(fileName, { encoding: "utf-8" })
//     .split("\n")
//     .map((data): dataCsv => {
//         let arrayOfData = data.split(",");
//         const date = arrayOfData[1].split("/");

//         return {
//             Date: new Date(`${date[1]} ${date[0]} ${date[2]}`),
//             HomeTeam: arrayOfData[2],
//             AwayTeam: arrayOfData[3],
//             FTHG: +arrayOfData[4],
//             FTAG: +arrayOfData[5],
//             FTR: arrayOfData[6],
//             Referee: arrayOfData[10],
//         };
//     });
// .join("");
// data.shift();
// console.log(data);
// let manUtdWin = data.reduce((count, currentValue) => {
//     let { AwayTeam, HomeTeam, FTR } = currentValue;
//     AwayTeam == "Man United" && FTR == "A" && count++;
//     HomeTeam == "Man United" && FTR == "H" && count++;
// }, 0 as number);

// enum MathResult {
//     awayTeamWins = "A",
//     homeTeamWins = "H",
//     drawGame = "D",
// }

// let manUtdWins: number = 0;
// let manUtdLose: number = 0;
// let manUtdDraw: number = 0;
// for (const mathDetail of x) {
//     let { AwayTeam, HomeTeam, FTR } = mathDetail;
//     AwayTeam == "Man United" && FTR == MathResult.awayTeamWins && manUtdWins++;
//     AwayTeam == "Man United" && FTR == MathResult.homeTeamWins && manUtdLose++;
//     AwayTeam == "Man United" && FTR == MathResult.drawGame && manUtdDraw++;

//     HomeTeam == "Man United" && FTR == MathResult.homeTeamWins && manUtdWins++;
//     HomeTeam == "Man United" && FTR == MathResult.awayTeamWins && manUtdLose++;
//     HomeTeam == "Man United" && FTR == MathResult.drawGame && manUtdLose++;
// }
// console.log(manUtdWins, manUtdLose, manUtdDraw);
