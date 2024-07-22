## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Import data elasticsearch

```bash
curl -XPUT 'http://127.0.0.1:9200/companydatabase?pretty' -H 'Content-Type: application/json' -d '{
    "mappings" : {
        "employees" : {
            "properties" : {
                "FirstName" : { "type" : "text" },
                "LastName" : { "type" : "text" },
                "Designation" : { "type" : "text" },
                "Salary" : { "type" : "integer" },
                "DateOfJoining" : { "type" : "date", "format": "yyyy-MM-dd" },
                "Address" : { "type" : "text" },
                "Gender" : { "type" : "text" },
                "Age" : { "type" : "integer" },
                "MaritalStatus" : { "type" : "text" },
                "Interests" : { "type" : "text" }
            }
        }
    }
}'
```

```bash
curl -XPOST "http://127.0.0.1:9200/companydatabase/_bulk" --header "Content-Type: application/json" --data-binary "@data/Employees50K.json"
```

## Problem Statement

The project is not done due to error that i can't solve right now. sElasticsearch client and server version is 6.8.0 but always raise an error "Content-Type header [application/vnd.elasticsearch+json; compatible-with=8] is not supported". I have tried to change the Content-Type header to application/json but it still raise an error "only one Content-Type header should be provided". When i upgrade the elasticsearch server to 7.10.2, the data cannot be imported because removal of mapping types.
