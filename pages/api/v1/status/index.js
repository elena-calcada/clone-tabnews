function status(request, response) {
  response.status(200).json({ mensagem: "Você chegou na api/status" });
}

export default status;
