const app = require("./app");
const userService = require("./services/userService");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on: http://localhost:${PORT}`);

  // ⚠️ Teste TEMPORÁRIO: alterar senha manualmente
  try {
    const result = await userService.updatePasswordManual("teste@moovox.com", "novaSenha123");
    console.log("Senha atualizada com sucesso!", result);
  } catch (err) {
    console.error("Erro ao atualizar senha:", err.message);
  }
});
