const DOMAIN = '192.168.1.101'
    , PORT   = '3000'
    , RAW    = `http://${DOMAIN}:${PORT}`
    , BASE   = `${RAW}/api`
;


export default {
  user  : `${BASE}/user`,
  order : `${BASE}/order`,
  users : `${BASE}/users`,
  orders: `${BASE}/orders`
}
