import { loadFiles } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema } from 'graphql'

const getTypeDefs = async () => {
  return loadFiles('src/modules/**/*.graphql')
}

const getResolvers = async () => {
  return loadFiles('src/modules/**/graphql/resolvers/index.*', {
    ignoreIndex: false,
    extensions: ['.js', '.ts']
  })
}

export const initializeSchema = async (): Promise<GraphQLSchema> => {
  const resolvers = {
    ...mergeResolvers(await getResolvers())
  }

  const typeDefs = mergeTypeDefs(await getTypeDefs())

  const graphqlSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
    inheritResolversFromInterfaces: true, // https://stackoverflow.com/a/57218081/3783238
  })

  return graphqlSchema
}