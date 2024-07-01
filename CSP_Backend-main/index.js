const app = require('./Requires');

const port = process.env.PORT || 3300;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});