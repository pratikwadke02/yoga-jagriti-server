const CFConfig = require("cashfree-pg-sdk-nodejs").CFConfig;
const CFPaymentGateway = require("cashfree-pg-sdk-nodejs").CFPaymentGateway;
const CFEnvironment = require("cashfree-pg-sdk-nodejs").CFEnvironment;
const CFHeader = require("cashfree-pg-sdk-nodejs").CFHeader;
const CFCustomerDetails = require("cashfree-pg-sdk-nodejs").CFCustomerDetails;
const CFOrderRequest = require("cashfree-pg-sdk-nodejs").CFOrderRequest;
const CFOrderMeta = require("cashfree-pg-sdk-nodejs").CFOrderMeta;
const db = require("../models");
const Billing = db.billing;

var cfConfig = new CFConfig(
  CFEnvironment.PRODUCTION,
  "2022-01-01",
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY
);

var cfHeader = new CFHeader(
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY
);

exports.createOrder = async (req, res) => {
  var customerDetails = new CFCustomerDetails();
  await Billing.create(req.body);
  customerDetails.customerId = (req.body.userId).toString();
  customerDetails.customerName = req.body.firstName + " " + req.body.lastName;
  customerDetails.customerPhone = req.body.phone;
  customerDetails.customerEmail = req.body.email;
  var d = {};
  d["order_tag_01"] = "TESTING IT";
  var orderMeta = new CFOrderMeta();
  orderMeta.returnUrl = `https://yogajagriti.com/shop?cf_id={order_id}&cf_token={order_token}`;
  var cFOrderRequest = new CFOrderRequest();
  cFOrderRequest.orderAmount = req.body.total;
  cFOrderRequest.orderCurrency = "INR";
  cFOrderRequest.customerDetails = customerDetails;
  cFOrderRequest.orderMeta = orderMeta;
  cFOrderRequest.orderTags = d;
  
  try {
    var apiInstance = new CFPaymentGateway();

    var result = await apiInstance.orderCreate(cfConfig, cFOrderRequest);
    if (result != null) {
      console.log(result?.cfOrder?.orderToken);
      console.log(result?.cfOrder?.orderId);
      console.log(result?.cfOrder?.paymentLink);
      console.log(result?.cfHeaders);
    }
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};
