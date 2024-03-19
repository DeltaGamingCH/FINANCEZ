app.post('/dashboard/test', async (req, res) => {
    try {
        const newData = new Data({ test: 'test' });
        await newData.save();

        const savedData = await Data.findById(newData._id);

        if (savedData) {
            console.log('Data Saved', savedData);
            res.redirect('/dashboard');
        }
    }
    
})



try {
    await newData.save();
    const savedData = await Data.findById(newData._id);
    if (savedData) {
        console.log('New dataset created successfully:', savedData);
        return true;
    } else {
        console.log('Failed to find created dataset.');
        return false;
    }
} catch (error) {
    console.error('Error', error);
    return false;
}