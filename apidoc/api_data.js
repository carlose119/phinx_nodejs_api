define({ "api": [
  {
    "type": "delete",
    "url": "/companies/:id",
    "title": "Delete a company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Companies id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Company",
            "description": "<p>deleted with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 Company delete with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "DeleteCompaniesId"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "List all companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Companies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "companies",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "companies.id",
            "description": "<p>companies id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.name",
            "description": "<p>companies name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.legal_name",
            "description": "<p>companies legal_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.email",
            "description": "<p>companies email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.phone",
            "description": "<p>companies phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.address",
            "description": "<p>companies address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.updated_at",
            "description": "<p>Update's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Phinx\",\n  \"legal_name\": \"Phinx Lab\",\n  \"email\": \"info@phinx.com\",\n  \"phone\": \"12345678\",\n  \"address\": \"Buenos Aires, Argentica\",\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "GetCompanies"
  },
  {
    "type": "get",
    "url": "/companies/filter/:date",
    "title": "List filter companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>format yyyy-mm-dd</p>"
          }
        ]
      }
    },
    "group": "Companies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "companies",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "companies.id",
            "description": "<p>companies id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.name",
            "description": "<p>companies name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.legal_name",
            "description": "<p>companies legal_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.email",
            "description": "<p>companies email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.phone",
            "description": "<p>companies phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.address",
            "description": "<p>companies address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.updated_at",
            "description": "<p>Update's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Phinx\",\n  \"legal_name\": \"Phinx Lab\",\n  \"email\": \"info@phinx.com\",\n  \"phone\": \"12345678\",\n  \"address\": \"Buenos Aires, Argentica\",\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "GetCompaniesFilterDate"
  },
  {
    "type": "get",
    "url": "/companies/:id",
    "title": "details companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Companies",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "companies",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "companies.id",
            "description": "<p>companies id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.name",
            "description": "<p>companies name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.legal_name",
            "description": "<p>companies legal_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.email",
            "description": "<p>companies email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.phone",
            "description": "<p>companies phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companies.address",
            "description": "<p>companies address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companies.updated_at",
            "description": "<p>Update's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"name\": \"Phinx\",\n  \"legal_name\": \"Phinx Lab\",\n  \"email\": \"info@phinx.com\",\n  \"phone\": \"12345678\",\n  \"address\": \"Buenos Aires, Argentica\",\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "GetCompaniesId"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "Register a new company",
    "group": "Companies",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Phinx\",\n  \"legal_name\": \"Phinx Lab\",\n  \"email\": \"info@phinx.com\",\n  \"phone\": \"12345678\",\n  \"address\": \"Buenos Aires, Argentica\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Company",
            "description": "<p>added with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 Company added with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "PostCompanies"
  },
  {
    "type": "put",
    "url": "/companies/:id",
    "title": "Update a company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Companies id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Phinx\",\n  \"legal_name\": \"Phinx Lab\",\n  \"email\": \"info@phinx.com\",\n  \"phone\": \"12345678\",\n  \"address\": \"Buenos Aires, Argentica\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Company",
            "description": "<p>modified with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 Company modified with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Companies",
    "name": "PutCompaniesId"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete a user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Users id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": "<p>deleted with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 User delete with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>users id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.company_id",
            "description": "<p>users company_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_name",
            "description": "<p>users full_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.phone",
            "description": "<p>users phone</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.age",
            "description": "<p>users age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>users email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.position",
            "description": "<p>users position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.address",
            "description": "<p>users address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.token",
            "description": "<p>users token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyname",
            "description": "<p>companies name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companylegalname",
            "description": "<p>companies legal_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyemail",
            "description": "<p>companies email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyphone",
            "description": "<p>companies phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyaddress",
            "description": "<p>companies address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companycreateat",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companyupdateat",
            "description": "<p>Update's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"company_id\": 1,\n  \"full_name\": \"Carlos Eduardo Carrillo Perez\",\n  \"phone\": \"04121588687\",\n  \"age\": 32,\n  \"email\": \"carlos.e119@gmail.com\",\n  \"position\": \"Programador\",\n  \"address\": \"Venezuela\",\n  \"token\": \"28c8edde3d61a0411511d3b1866f0636\",\n  \"create_at\": \"2019-10-12T19:37:45.050Z\",\n  \"updated_at\": \"2019-10-12T19:55:10.560Z\", *      \n  \"companyname\": \"\"Phinx\",\",\n  \"companylegalname\": \"\"Phinx Lab CA\",\",\n  \"companyemail\": \"\"info@phix.com\",\",\n  \"companyphone\": \"\"12345678\",\",\n  \"companyaddress\": \"\"Buenos Aires, Argentina\",\",\n  \"companycreateat\": \"2019-10-11T21:29:00.000Z\",\n  \"companyupdateat\": \"2019-09-12T18:44:42.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "details user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>users id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.company_id",
            "description": "<p>users company_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_name",
            "description": "<p>users full_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.phone",
            "description": "<p>users phone</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.age",
            "description": "<p>users age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>users email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.position",
            "description": "<p>users position</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.address",
            "description": "<p>users address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.token",
            "description": "<p>users token</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.created_at",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyname",
            "description": "<p>companies name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companylegalname",
            "description": "<p>companies legal_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyemail",
            "description": "<p>companies email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyphone",
            "description": "<p>companies phone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyaddress",
            "description": "<p>companies address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companycreateat",
            "description": "<p>Register's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "companyupdateat",
            "description": "<p>Update's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"company_id\": 1,\n  \"full_name\": \"Carlos Eduardo Carrillo Perez\",\n  \"phone\": \"04121588687\",\n  \"age\": 32,\n  \"email\": \"carlos.e119@gmail.com\",\n  \"position\": \"Programador\",\n  \"address\": \"Venezuela\",\n  \"token\": \"28c8edde3d61a0411511d3b1866f0636\",\n  \"create_at\": \"2019-10-12T19:37:45.050Z\",\n  \"updated_at\": \"2019-10-12T19:55:10.560Z\", *      \n  \"companyname\": \"\"Phinx\",\",\n  \"companylegalname\": \"\"Phinx Lab CA\",\",\n  \"companyemail\": \"\"info@phix.com\",\",\n  \"companyphone\": \"\"12345678\",\",\n  \"companyaddress\": \"\"Buenos Aires, Argentina\",\",\n  \"companycreateat\": \"2019-10-11T21:29:00.000Z\",\n  \"companyupdateat\": \"2019-09-12T18:44:42.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/token/:id",
    "title": "User token authentication",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{      \n  \"token\": \"28c8edde3d61a0411511d3b1866f0636\", *      \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "GetUsersTokenId"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Register a new user",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"company_id\": 1,\n  \"full_name\": \"Carlos Eduardo Carrillo Perez\",\n  \"phone\": \"04121588687\",\n  \"age\": 32,\n  \"email\": \"carlos.e119@gmail.com\",\n  \"position\": \"Programador\",\n  \"address\": \"Venezuela\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": "<p>added with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 User added with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update a user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique token</p>"
          }
        ]
      }
    },
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>users id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n   \"company_id\": 1,\n   \"full_name\": \"Carlos Eduardo Carrillo Perez\",\n   \"phone\": \"04121588687\",\n   \"age\": 32,\n   \"email\": \"carlos.e119@gmail.com\",\n   \"position\": \"Programador\",\n   \"address\": \"Venezuela\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": "<p>modified with ID: 1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 200 User modified with ID: 1",
          "type": "String"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n {\n   \"error\": \"message\"\n }",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./config/routes.js",
    "groupTitle": "Users",
    "name": "PutUsersId"
  }
] });
