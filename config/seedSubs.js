require('dotenv').config();
require('./database');

const SubSkipdit = require('../models/subSkipdit');

(async function() {
    await SubSkipdit.deleteMany({})
    const subSkipdits = await SubSkipdit.create([
        
    ])
})