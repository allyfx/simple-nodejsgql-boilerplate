import 'dotenv/config'

import { initializeDatabase } from './db/index.js';
import { initializeGraphqlServer } from "./graphql/index.js";

await initializeDatabase()
await initializeGraphqlServer()