let count = 0;

const increase = () => count++;

const decrease = () => count--;

const getCount = () => count;

const increaseAndShow = () => {
    count++;
    console.log(count);
};

module.exports = {
    increase,
    decrease,
    getCount,
    increaseAndShow
}