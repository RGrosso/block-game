export const shuffleArray = <T>(array: T[]) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        const index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        const temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

export const createLengthArrayOf = <T>(arrayLength: number, arrayValue: T) => {
    return [...Array(arrayLength)].map(() => arrayValue);
};
