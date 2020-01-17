# Generate

### 1. Download schema from endpoint
Graphql CLI

https://github.com/Urigo/graphql-cli

Command: ``graphql get-schema``

### 2. Generate GQL raw queries from schema
gql-generator

https://github.com/timqian/gql-generator

Command: ``gqlg --schemaFilePath schema/schema.graphql --destDirPath ./schema/documents --depthLimit 5``

### 3. Generate TS types from endpoint
Graphql Code Generator

https://graphql-code-generator.com/docs/getting-started/

Command: ``graphql-codegen``

### 4. Npm command: 

package.json:
```
  "scripts": {
    "generate": "graphql-codegen && graphql get-schema && gqlg --schemaFilePath schema/schema.graphql --destDirPath ./schema/documents --depthLimit 5"
  }
```

``npm run generate``

