const Data = require('./Data');

async function calculateTotal() {
    try {
        const allData = await Data.find();

        let total = 0;

        allData.forEach(data => {
            if (data.type === 'income') {
                total += data.amount;
            } else if (data.type === 'expense') {
                total -= data.amount;
            }
        });

        return total;
    } catch (error) {
        console.error('Error calculating total: ', error);
        throw error;
    }
}

module.exports = calculateTotal;