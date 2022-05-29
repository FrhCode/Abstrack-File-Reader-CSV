import fs from "fs";
class CsvFileReader<T> {
    #data: T[];

    constructor(
        private path: string,
        private dataPair: [string, number, string][]
    ) {
        this.#data = this.generateData(path, dataPair);
    }

    get data() {
        return this.#data;
    }

    generateData(path: string, dataPair: [string, number, string][]) {
        const data = fs
            .readFileSync(path, { encoding: "utf-8" })
            .split("\n")
            .map((data) => {
                let arrayOfData = data.split(",");
                // const date = arrayOfData[1].split("/");
                let dataToAdd: any = {};

                for (const iterator of dataPair) {
                    switch (iterator[2]) {
                        case "number":
                            dataToAdd[iterator[0]] = +arrayOfData[iterator[1]];
                            break;
                        case "string":
                            dataToAdd[iterator[0]] = arrayOfData[iterator[1]];
                            break;
                    }
                }

                return dataToAdd;
            });

        return data;
    }
}

export default CsvFileReader;
