const config = {
  database: {
    client: 'mysql-default-2',
    secret: 'RDS-MASTER-DATABASE-1-default',
    connection: {
      host: '',
      port: 3306,
      user: 'root',
      password: '',
      database: '',
      charset: 'utf8mb4',
      timezone: '0000'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  USERS_REPORT:
  {
    logging: "INFO",
    queries: "select users_id,status from users where users_id = ?",
    headers: "users_id_1,status_1",
    transports: ["ses","sms","slack"],
    ses: {
      subject:  "@ENV: @BRD_@REG Please Find Attached Users Report @NOW",
      body: "117. Please review users. Find additional information at the following wiki.... https://digital.vfc.com/wiki/display/VFDP/Development+Setup",
      distribution: "rreinheimer@vfc.com,rodrei@yahoo.com,rodrigo.reinheimer@gmail.com"
    },
    sms: {
      subject:  "@ALERT_LEVEL Please Find Attached Users Report",
      distribution: "3109711747",
    },
    slack: {
      hostname: "hooks.slack.com",
      path: "/services/T01MU2C16DU/B01N70V0JAY/FQUERJGqAiiCBuePWFwvHtpF",
      pretext: "Optional text that appears above the attachment block",
      author_icon: "http://flickr.com/icons/bobby.jpg",
      color: "#36a64f",
      title: "Slack API Documentation",
      title_link: "https://api.slack.com/",
      fields_title: "Priority",
      fields_value: "@priority"
    }
  }
};

module.exports = config;