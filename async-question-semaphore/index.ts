import chunk from "lodash.chunk";

const data: Array<number> = new Array().fill(1000);

const process = async (numbers: number[]): Promise<number> => {
    // it does something that either passes or fails
    const rand = Math.random();
    if (rand >= 0.5) {
        return Promise.reject(`Error at number: ${number}`);
    }

    return Promise.resolve(number);
};

const main = async () => {
    // chunk the data set into 25 items
    const chunks = await Promise.all(chunk(data, 25));
    // iterate through each chunk - iteration is not concurrency
    const result = await Promise.allSettled(chunks);
    const errors = result.reduce<string[]>((prev, curr) => {
        if (curr.status === "rejected") {
            prev.push(curr.reason);
        }
        return prev;
    }, []);
    console.log(errors);
};

main();
