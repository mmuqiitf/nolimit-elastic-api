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

# production mode
$ npm run start:prod
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
