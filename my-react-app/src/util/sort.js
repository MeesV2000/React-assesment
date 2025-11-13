export default class Sort
{
    /**
     * Simple Bubblesort algorithm
     * @param {Array} arr - Array to be sorted 
     */
    static bubble(arr)
    {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                const value1 = Object.values(arr[j])[0];
                const value2 = Object.values(arr[j + 1])[0];

                if (value1 > value2) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return arr;
    }
}