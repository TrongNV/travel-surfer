export function orderDate (d) {
  let Y     = new Date(d).getFullYear()
    , M     = new Date(d).getMonth() + 1
    , D     = new Date(d).getDate()
    , H     = new Date(d).getHours()
    , N     = new Date(d).getMinutes()
    , form  = (x) => { return x<10 ? '0'+x : x }
  ;
  return form(M)+'/'+form(D)+'/'+Y+' - '+form(H)+':'+form(N);
}
