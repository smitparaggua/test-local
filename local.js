module.exports = {
  port: process.env.PORT || 8081,
  environment: process.env.NODE_ENV || 'development',

  CLIENT_ID: 'xwGd8SSEMIfszr6Krqk0Kb98Qkm8kbyT',
  CLIENT_SECRET: 'jTZYisG1GUi3P6zf',
  BASE_URL: 'http://localhost:8081',
  ACCOUNTS_URL: 'https://api.paymaya.com',

  ASSET_BASE_URL: 'https://cdn.paymaya.com/production/devportal/www/',

  //use this pair for sandbox mode
  PAYPAL_MODE: 'sandbox',
  PAYPAL_CLIENT_ID: 'AX7GmhCheGvEhd1gvSjeS6MgtA4QbvQR80accH0lWAqm3RtnNu5prel3l9P5',
  PAYPAL_CLIENT_SECRET: 'EIxb_xBJ9Z46WH97T3KfKfJ-mkGsz5w33RdCnOX6qLAmyfcCXeZUR37lg6b0',

  MEPAY_BASE_URL:'https://api.paymaya.com/client-dev',
  MEPAY_VERSION:'/v1',
  MEPAY_ACCESS_TOKEN:'IwKXOKwqZva05DUed1Uc87TZNbqb',

  APIGEE_ACCESS_TOKEN_BASE_URL: 'https://api.paymaya.com/auth',
  APIGEE_ACCESS_TOKEN_VERSION: '/v1',
  APIGEE_ACCESS_ID:'inU5jo803C0Jr82KP5XQiQALAQA7Nygy',
  APIGEE_ACCESS_SECRET:'iWRdce1CPhoWWi6j',

  connections:{
    mongo: {
      adapter: 'sails-mongo',
      // host: 'mongo',
      host: 'localhost',
      port: 27017,
      database: 'smi_devportal'
    }
  },
  // session: {
  //   host: 'redis',
  //   port: 6379,
  //   ttl: 60*60*24,
  //   db: 0,
  //   prefix: 'sess:'
  // },

  swaggerDocsUrl: '/apidocs/',
  swaggerVersion: '1.2',

  analytics : {
    period : {
      "last_five" : [5, 'm', 'minute'],
      "last_ten" : [10, 'm', 'minute'],
      "last_hour" : [1, 'h', 'minute'],
      "last_day" : [1, 'd', 'hour'],
      "last_week" : [1, 'w', 'hour']
    },
    dateRangePeriod : ['hour', 'day'],
    timeFormat : "MM/DD/YYYY HH:mm"
  },

  hiway_logger: {
    "app": "devportal",
    "type": "tcp",
    "params": {
      n:true,
      h: true,
      ip: true,
      A: true,
      r: true,
      ua: true,
      za: true,
      zs: true,
      zl: true,
      t: true,
      s: true,
      m: true,
      U: true,
      at: true
    },
    "tcp": {
      host: "localhost",
      port: "24224",
      tag: "weblog"
    }
  }
};
