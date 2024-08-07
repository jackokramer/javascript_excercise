import { buildSchema } from "graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"

const users =[
    {id: 1, name: 'Jane Fonda', email: 'jane@fonda.com'},
    {id: 2, name: 'Jamie Foxx', email: 'jamie@foxx.com'},
    {id: 1, name: 'Trina Schmidt', email: 'trina@schmidt.com'}
]



type User = {
    id: number
    name: string
    email: string
}

type UserInput = Pick<User, "email" | "name">


//resolvers
const getUser = (args: { id: number }): User | undefined =>
    users.find(u => u.id === args.id)

const getUsers = (): User[] => users

const createUser = (args: { input: UserInput }): User => {
    const user = {
        id: users.length + 1,
        ...args.input,
    }
    users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = users.findIndex(u => u.id === args.user.id)
    const targetUser = users[index]

    if (targetUser) users[index] = args.user

    return targetUser
}

const root = {
    getUser,
    getUsers,
    createUser,
    updateUser,
}

// Express Route server

const app = express()

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

const PORT = 8000

app.listen(PORT)

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)


const schema = buildSchema(
    input UserInput{
        email: String!
        name: String!
    }
    type User{
        id: Int !
        name: String!
        email: String!
    }
    type Mutation{
        creatUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }
    typeQuery{
        getUser(id: String): User
        getUsers: [User]
    }
)
