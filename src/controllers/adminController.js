const userService = require("../services/userService");
const vaccineService = require("../services/vaccineService");
const adminController = {
  // renderiza o dashboard do admin
  async getAdminDashboard(req, res) {
    try {
      res.render("admin/dashboard");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  // renderiza a pagina de usuarios para realizar o crud
  async getUsersDashboard(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.render("admin/users", { users });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }, 
  // renderiza a pagina de vacinas para realizar o crud
  async getVaccineDashboard(req,res) {
    try {
      res.render("admin/vaccines");
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  // lista todas as vacina
  async listVaccines(req,res) {
    try {
      const vaccines = await vaccineService.getAllVaccines();
      res.render("admin/vaccines", { vaccines });
    } catch (error) {
      res.status(500).send("Erro ao listar todas as vacinas");
    }
  },
  // exibi um form de uma nova vacina
  async showCreateForm(req,res){
    res.render("admin/vaccines");
  },
  // criando uma nova vacina
  async createVaccine(req,res){
    try{
      const { animal_id, name, vaccination_date, next_dose} = req.body;
      await vaccineService.createVaccine(animal_id, name, vaccination_date, next_dose);
      res.redirect("admin/vaccines");
    } catch (error) {
    res.status(500).send("Erro ao criar vacina");
    }
  },
  // exibi um form de edição de uma vacina
  async showEditForm(req,res) {
    try{
      const id = parseInt(req.params.id); // pegando o id da vacina
      const vaccine = await vaccineService.getVaccineById(id); // buscando a vacina pelo id
      res.render("admin/vaccineEdit", { vaccine})
    } catch (error){
      res.status(500).send("Erro ao carregar vacina");
    }
  },
  // atualizando uma vacina
  async updateVaccine(req,res) {
    try{
      const id = parseInt(req.params.id);
      const { animal_id, name, vaccination_date, next_dose } = req.body;
      await vaccineService.updateVaccine(id, animal_id, name, vaccination_date, next_dose);
      res.redirect("admin/vaccines");
    } catch (error) {
      res.status(500).send("Erro ao atualizar a vacina");
    }
  },
  // deletando uma vacina
  async deleteVaccine(req,res){
    try{
      const id = parseInt(req.params.id);
      await vaccineService.deleteVaccine(id);
      res.redirect("admin/vaccines");
    } catch (error){
      res.status(500).send("Erro ao deletar a vacina");
    }
  }
};

module.exports = adminController;
