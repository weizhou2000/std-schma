//user
import user from './user/user'
import addresses from './user/addresses'
import myOrders from './user/orders'
import myEnrolls from './user/enrolls'
import myEnroll from './user/enroll'

import findUsername from './user/findUsername'
import chkUsername from './user/chkUsername'
import chkEmail from './user/chkEmail'
import checkout from './user/checkout'

import login from './user/login'
import register from './user/register'
import resetReq from './user/resetReq'

import verifyPass from './user/verifyPass'
import changePass from './user/changePass'
import getEnrollViaSign from './user/getEnrollViaSign'

import createOrder from './user/createOrder'
import checkoutEnroll from './user/checkoutEnroll'
import findEnroll from './user/findEnroll'
import renewMyEnroll from './user/renewMyEnroll'


//admin
import admin from './admin/admin'
import orders from './admin/orders'
import order from './admin/order'
import accounts from './admin/accounts'
import products from './admin/products'
import purchases from './admin/purchases'
import purchase from './admin/purchase'
import enrolls from './admin/enrolls'
import enroll from './admin/enroll'
import logs from './admin/logs'
import inventories from './admin/inventories'


import shipOrder from './admin/shipOrder'
import finishOrder from './admin/finishOrder'

import receivePurchase from './admin/receivePurchase'
import payPurchase from './admin/payPurchase'
import finishPurchase from './admin/finishPurchase'
import createPurchase from './admin/createPurchase'

import renewEnroll from './admin/renewEnroll'
import registerEnroll from './admin/registerEnroll'


export default {
  Query: {
    user,  //user 
    admin, //admin
  },
  Mutation: {
    findUsername,chkUsername,chkEmail,
    login,register,resetReq,checkout,
    verifyPass,changePass, //user
    createOrder,checkoutEnroll,getEnrollViaSign,findEnroll,renewMyEnroll,

    
    shipOrder,finishOrder, //admin
    receivePurchase,payPurchase,finishPurchase,createPurchase, //admin
    renewEnroll,registerEnroll,
  },
  User:{addresses,orders:myOrders,enrolls:myEnrolls,enroll:myEnroll},
  Admin: {accounts,orders,order,products,purchases,purchase,enrolls,enroll,logs,inventories}
};





















