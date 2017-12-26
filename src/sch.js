/*
import typeDefs from './ty';
import resolvers from './rs';
import { makeExecutableSchema } from 'graphql-tools';
export default makeExecutableSchema({typeDefs,resolvers});
*/

// mock
 
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './ty';
const schema = makeExecutableSchema({typeDefs});
addMockFunctionsToSchema({ schema });

export default schema


