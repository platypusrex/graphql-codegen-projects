# graphql-codegen-projects

## Overview
The [graphql-codegen](https://the-guild.dev/graphql/codegen) package is an amazing tool for generating typescript
types for both the server and client. It even supports a [multi-project](https://the-guild.dev/graphql/codegen/docs/config-reference/multiproject-config)
configuration, allowing you to create separate configurations in the same config file. The multi-project configuration
uses a structure established by [graphql-config](https://the-guild.dev/graphql/config), which is also the typescript 
typing used by `graphql-codegen` for a multi-project setupp.

Unfortunately, the typing falls short of provided proper typings and autocompletion for `graphql-codegen` itself. This
package is aimed at improving those typing and providing a util for creating a multi-project configuration with the same 
level of typescript support found when utilizing `graphql-codegen` for a single project.

## Installation
npm
```shell script
npm install -D graphql-codegen-projects @graphql-codegen/cli
```

pnpm
```shell script
pnpm add -D add graphql-codegen-projects @graphql-codegen/cli
```

yarn
```shell script
yarn add -D graphql-codegen-projects @graphql-codegen/cli
```

## Usage
The `graphql-codegen-projects` package exports a util named `createProjectConfig` to make creating a typed multi-project
config super easy. Simply create a type for the names of your project, and pass your configuration to the `createProjectConfig`
function and now you have a fully typed multi-project config with auto-completion for all things `graphql-codegen`.

```typescript
import { createProjectConfig } from 'graphql-codegen-projects';

type Project = 'operations' | 'resolvers';

export default createProjectConfig<Project>({
  operations: {
    schema: 'http://localhost:4000/graphql',
    documents: ['src/gql/*.ts'],
    extensions: {
      codegen: {
        overwrite: true,
        generates: {
          'src/typings/operations.ts': {
            plugins: ['typescript', 'typescript-operations']
          }
        }
      }
    }
  },
  resolvers: {
    schema: 'src/gql/typeDefs/*.ts',
    extensions: {
      codegen: {
        overwrite: true,
        generates: {
          'src/typings/generated.ts': {
            plugins: ['typescript', 'typescript-resolvers']
          },
        },
      }
    }
  },
});
```

### Contributors
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE
MIT
