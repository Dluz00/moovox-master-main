const express = require('express');
const router = express.Router();

// importando o controller de adm
const adminController = require('../controllers/adminController');

// rotas de admin

router.get('/admin/dashboard', adminController.getAdminDashboard);
router.get('/admin/users', adminController.getUsersDashboard);

// rotas para o admin realizar o CRUD
router.post('/admin/vaccine', adminController.getVaccineDashboard);
router.get("/admin/vaccines", adminController.listVaccines);
router.get("/admin/vaccines/create", adminController.showCreateForm);
router.post("/admin/vaccines/create", adminController.createVaccine);
router.get("/admin/vaccines/edit/:id", adminController.showEditForm);
router.post("/admin/vaccines/edit/:id", adminController.updateVaccine);
router.post("/admin/vaccines/delete/:id", adminController.deleteVaccine);


// exportando o router para o index.js  
module.exports = router;
