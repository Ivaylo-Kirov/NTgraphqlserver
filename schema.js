const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const MyGraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'rootQuery',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                }
            },
            about: {
                type: GraphQLString,
                resolve() {
                    return 'about what';
                }
            }
        }
    })
});

module.exports = MyGraphQLSchema;