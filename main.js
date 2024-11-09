diagram.model = new go.GraphLinksModel(
    [
      { key: "Usuário", text: "👤", category: "user" },
      { key: "Cadastrar Usuário", text: "📋", category: "course" },
      { key: "Visualizar Catálogo de Cursos", text: "📚", category: "course" },
      { key: "Realizar Compra de Curso", text: "💳", category: "payment" },
      { key: "Administrador", text: "🛠️", category: "admin" }
    ],
    [
      { from: "Usuário", to: "Cadastrar Usuário" },
      { from: "Usuário", to: "Visualizar Catálogo de Cursos" },
      { from: "Usuário", to: "Realizar Compra de Curso" }
    ]
  );
  