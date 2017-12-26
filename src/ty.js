export default `
schema {
  query: Query
  mutation: Mutation
}

#--------------------------------------------------------------------------------
type Query {
  user(token:String): User
  admin(token:String): Admin
}

#---------------------------------------------------------------------------------

type User {
  id: Int
  email: String 
  orders: [Order]
  addresses: [Address]

  enrolls: [Enroll]
  enroll(eid:Int): Enroll
}

type Inventory {
  id:Int
  deed:String
  sale_qty:String
  purchase_qty:String
  po_id:String
  product_id:String
  product_title:String
  created_at:String
}

type Enroll {
  id:Int
  name: String 
  
  cnumber: String
  grade:String
  qexpire:String
  qpass:String

  examTitle: String 
  examDate: String 
  location: String 
  
  sign: String
}

type Order {
  id: Int
  amount: String
  address: String
  end_at: String
  created_at: String
  paid_at: String
  shipped_at: String
  ship_no: String
  shipper: String
  contact: String
  phone: String
  lines: String
  status: String
}

type Address {
  id: Int
  contact: String
  phone: String
  province: String
  city: String
  district: String
  road: String
}

type Log {
  timestamp: String 
  message: String
  data: String
}

type Log1 {
  time: String 
  mes: String
}

type Admin {
  routeNav: String
  accounts: [Account]
  orders(state:String): [Order]
  order(oid:Int): Order
  purchases(state:String): [Purchase]
  purchase(pid:Int): Purchase
  products: [Product]
  enrolls: [Enroll]
  enroll(eid:Int): Enroll
  logs(logType:String):[Log]
  inventories(deed:String):[Inventory]
}

type Account {
  id: Int 
  email: String
  username: String
}

type Purchase {
  id: Int
  vendor: String
  amount: String
  status: String
  end_at: String
  created_at: String
  paid_at: String
  received_at: String
  due_at: String
  atta_invoice: String
  atta_payment: String
  lines: String
}

type Product {
  id: Int
  stock: Int
  title: String
}

#--------------------------------------------------------------------------------
type Mutation {
  findUsername(username:String):String
  chkUsername(username:String):String
  chkEmail(email:String):String

  getEnrollViaSign(sign:String): Enroll
  findEnroll(eid:String,qpass:String):Enroll

  login (username: String password: String): LoginPay
  register (username: String password: String email: String): String
  resetReq(username:String email: String):String

  verifyPass(id: Int password:String):String
  changePass(id: Int password:String newPass: String):String
  
  checkout(token:String amount:String lines:String addressId:Int
    province: String city: String district: String road: String 
    contact: String phone: String 
  ):String
  renewMyEnroll(token: String,eid:String):String



 
  createOrder(token: String,contact:String,phone:String,address:String,amount:String,lines:String):String
  
  checkoutEnroll(token:String,identification:String,name:String,
    examTitle:String,examDate:String,location:String,
    phone:String,address:String,amount:String,uid:Int):String
  


  
  shipOrder (token: String shipper: String ship_no: String id: Int): String
  finishOrder (token: String id: Int): String

  receivePurchase (token: String,amount: String,atta_invoice:String,due_at:String,id:Int): String
  payPurchase (token: String,atta_payment:String,id:Int): String
  finishPurchase (token: String id: Int): String
  createPurchase (token: String lines: String): String

  registerEnroll(token: String,eid:String,grade:String,cnumber:String):String 
  renewEnroll(token: String,eid:String,qexpire:String):String

}

type MuPay {
  m: String
}

type LoginPay {
  api: String
  m: String
  uid: Int
  exp: Int
}

`