// Components
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

const httpLink = createHttpLink({
  url: 'http://localhost:5000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: client,
})

const app = createApp(App)

registerPlugins(app)

app.mount('#app').use('VueApollo')
