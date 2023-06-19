const config = {
  defaults: {
    template: 'templates/default_report_template.hbs' 
  },
  secrets: {
    slack: 'VFOPS_SLACK_SECRET'
  },
  DEFAULT_DATABASE: {
    connection: {
      secret: 'DEFAULT_TO_LOCAL',
      username: "root",
      password: "P@ssw0rd",
      engine: "mysql",
      host: "docker.for.mac.localhost",
      port: 3306,
      dbInstanceIdentifier: "database-1",
      dbname: "workspace"
    }
  },
  ORDERS_REPORT:
  {
    database: "DEFAULT_DATABASE",
    queryType: "LAST_14_DAYS",
    query: "select orders_id,timeplaced from `orders` where `timeplaced` between ? and ?",
    queryConnectionTimeout: 300,
    result: {           
      //must add the display 
      "headers": [      
          "orders idenfitiers",  
          "time/date placed"  
      ]   
    },
    bucketName: "vf-ops-lambda-foundation-report-test",
    transports: ["ses","slack"],
    ses: {
      template: "templates/default_report_template.hbs",
      delivery: ["html","attachment"], //allowed:  html or attachment
      subject:  "@ENVIRONMENT: @BRAND_@BRAND_REGION Please Find Attached Orders Report @NOW",
      body:  "Please review users. Find additional information at the following wiki: <br> <a href=\"https://digital.vfc.com/wiki/display/VFDP/Development+Setup\">https://digital.vfc.com/wiki/display/VFDP/Development+Setup</a>",
      to: "rodrei@yahoo.com,rodrigo.reinheimer@gmail.com",
      from: "rodrei@yahoo.com"
    },
    slack: {
      delivery: ["attachment"], //allowed:  attachment
      subject: "@ENVIRONMENT: @BRAND_@BRAND_REGION Orders Report Email @NOW",
      body: "Please review users. Find additional information at the following wiki.... https://digital.vfc.com/wiki/display/VFDP/Development+Setup",
      channelId: "C01NQLHHZK2"
    }
  },
  USERS_REPORT:
  {
    database: "DEFAULT_DATABASE",
    queryType: "LAST_14_DAYS",
    query: "select orders_id,timeplaced from `orders` where `timeplaced` between ? and ?",
    queryConnectionTimeout: 300,
    result: {           
      //must add the display 
      "headers": [      
          "orders idenfitiers",  
          "time/date placed"  
      ]   
    },
    bucketName: "vf-ops-lambda-foundation-report-test",
    transports: ["ses","slack"],
    ses: {
      template: "templates/default_report_template.hbs",
      delivery: ["html","attachment"], //allowed:  html or attachment
      subject:  "@ENVIRONMENT: @BRAND_@BRAND_REGION Please Find Attached Orders Report @NOW",
      body:  "Please review users. Find additional information at the following wiki: <br> <a href=\"https://digital.vfc.com/wiki/display/VFDP/Development+Setup\">https://digital.vfc.com/wiki/display/VFDP/Development+Setup</a>",
      to: "rodrei@yahoo.com,rodrigo.reinheimer@gmail.com",
      from: "rodrei@yahoo.com"
    },
    slack: {
      delivery: ["attachment"], //allowed:  attachment
      subject: "@ENVIRONMENT: @BRAND_@BRAND_REGION Orders Report Email @NOW",
      body: "Please review users. Find additional information at the following wiki.... https://digital.vfc.com/wiki/display/VFDP/Development+Setup",
      channelId: "C01NQLHHZK2"
    }
  }
};

module.exports = config;