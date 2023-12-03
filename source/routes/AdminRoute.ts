import express from "express"
import { CreateVendor, GetVendorById, GetVendors } from "../controllers"
const router = express.Router()

/* ------------------- Admin Vendor Section --------------------- */
router.get('/vendors', GetVendors)
router.get('/vendor/:id', GetVendorById)
router.post('/vendor', CreateVendor)


export { router as AdminRoute }