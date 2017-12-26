import { createServer } from 'http';
import express from 'express';
import { graphqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';


let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

//gra1
import schema1 from './sch' 
app.use('/etoles/do', bodyParser.json(), graphqlExpress({schema:schema1}));

//server
const server = createServer(app);
server.listen(59999,()=>{
  console.info('server restart and run at 59999')
})

