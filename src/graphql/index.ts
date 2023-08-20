import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { initializeSchema } from './schema.js';

const schema = await initializeSchema()

const server = new ApolloServer({
  schema
});

export const initializeGraphqlServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
}