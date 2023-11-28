"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var router = express_1.default.Router();
exports.ShoppingRoute = router;
router.get('/', function (req, res, next) {
    return res.json({ "data": "Hello From Vendor!" });
});
//Login
// router.post('/login', login)
//Authentication
// router.use(Authenticate)
//Vendor
router.get('/:pincode', controllers_1.GetFoodAvailability);
router.get('/top-restaurants/:pincode', controllers_1.GetTopRestaurants);
router.get('/foods-in-30-min/:pincode', controllers_1.GetFoodIn30Min);
router.get('/search/:pincode', controllers_1.SearchFoods);
router.get('/restaurant/:id', controllers_1.RestuarantsByID);
//# sourceMappingURL=ShoppingRoute.js.map