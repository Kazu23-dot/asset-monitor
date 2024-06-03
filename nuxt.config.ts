const environment = process.env.NODE_ENV || "local";
const env = require(`./env/${environment}.ts`);

// 気になればログ吐いてデバッグ
console.log(env);

module.exports = {
  router: {
    base: env.BASE_URL,
  },
  env: env,
};
