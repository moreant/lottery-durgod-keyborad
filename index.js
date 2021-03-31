const pool = [
  // 请从这里按照格式添加你的微信号
  { vxNumber: 'moreant' },
  { vxNumber: 'Mr_Catalpa' },
]

const randomNumber = Math.floor(Math.random() * (pool.length))
const res = pool[randomNumber].vxNumber
console.log(res);
