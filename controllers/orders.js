const { mongoose, ObjectID } = require("../app/config/");
const { Order } = require("../models/order");
const { Chef } = require("../models/chef");
const { Customer } = require("../models/customer.js");
const { Food } = require("../models/food.js");

module.exports = {
  placeOrder: async (req, res, next) => {
    var newOrder;
    let { itemsOrdered, orderedBy, createdBy, orderDate, bill } = req.body;
    let createdByFiltered = [];
    let chefNames = [];
    let itemsDetails = [];
    let customerName = "";
    let paymentDocument = {};
    let orderItems = [];
    await Customer.findById(orderedBy).then((customer) => {
      customerName = customer.name;
    });

    for (var i = 0; i < createdBy.length; i++) {
      if (createdByFiltered.indexOf(createdBy[i]) == -1) {
        createdByFiltered.push(createdBy[i]);
        await Chef.findById(createdByFiltered[i])
          .then((chef) => {
            chefNames.push(chef.name);
          })
          .catch((err) => {
            res.status(500).send({ error: err });
          });
      }
    }

    for (var i = 0; i < itemsOrdered.length; i++) {
      let item = await Food.findById(itemsOrdered[i]);
      console.log("Item is ", item);
      itemsDetails.push({
        itemId: item._id,
        itemName: item.name,
        itemQuantity: itemsOrdered[i].quantity,
        itemSeller: item.chef,
        itemSellerName: item.chefName,
        itemTotalPrice: item.price,
      });
    }
    console.log("Food Saved");

    newOrder = new Order({
      itemsOrdered: itemsDetails,
      orderedBy,
      customerName,
      createdBy: createdByFiltered,
      chefNames,
      orderDate,
      bill,
    });

    await newOrder
      .save()
      .then((order) => {
        console.log("Order Saved ", order);
        res.status(200).send(order);
      })
      .catch((err) => {
        console.log("Order Error ", err);
        res.status(200).send(err);
      });
    return next();
  },

  getIncomplete: async (req, res, next) => {
    var ongoingOrders;

    if (req.body.role === "chef") {
      ongoingOrders = await Order.find({
        "itemsOrdered.itemSeller": req.body.id,
        status: 0,
      });
      res.status(200).send({ orders: ongoingOrders });
    } else if (req.body.role === "customer") {
      ongoingOrders = await Order.find({ orderedBy: req.body.id, status: 0 });

      res.status(200).send({ orders: ongoingOrders });
    }
  },

  getAll: async (req, res, next) => {
    var allOrders;

    if (req.body.role === "chef") {
      allOrders = await Order.find({ createdBy: req.body.id });
      res.status(200).send({ orders: allOrders });
    } else if (req.body.role === "customer") {
      allOrders = await Order.find({ orderedBy: req.body.id });

      res.status(200).send({ orders: allOrders });
    }
  },

  getById: async (req, res, next) => {
    Order.findById(req.params.id).then((order) => {
      res.send(order);
    });
  },
}