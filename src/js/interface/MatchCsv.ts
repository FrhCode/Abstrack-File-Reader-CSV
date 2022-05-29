enum MatchResult {
    Homewin = "H",
    AwayWin = "A",
    Draw = "D",
}

interface MatchCsv {
    Date: Date;
    HomeTeam: string;
    AwayTeam: string;
    FTHG: number;
    FTAG: number;
    FTR: MatchResult;
    Referee: string;
}

export default MatchCsv;
