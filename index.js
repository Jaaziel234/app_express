const express = require ('express');

const app = express();
app.get('/:id',(request, response)=>{
    const { 
    params: { id },
    } = request;
    console.log(id);
    response.send('Prueba de express');
})

app.listen(3000,()=>{
    console.log('Server is runnig');
})

