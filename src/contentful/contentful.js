import { createClient } from 'contentful';

const Client = createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default Client;