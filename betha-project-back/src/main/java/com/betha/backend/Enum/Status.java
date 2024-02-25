package com.betha.backend.Enum;

public enum Status {
  DISPONIVEL_TRIAGEM("Disponivel para triagem"),
  EM_TRIAGEM("Em processo de triagem"),
  AGUARDANDO_CLIENTE("Aguardando confirmação do Cliente"),
  CANCELADO("Cancelado pelo cliente"),
  AGUARDANDO_MANUTENCAO("Pronto para manutenção"),
  EM_MANUTENCAO("Em processo de manutenção"),
  MANUTENCAO_REALIZADA("Manutenção realizada"),
  CONCLUIDO_CONSERTADO("Produto consertado"),
  CONCLUIDO_N_CONSERTADO("Não foi possivel consertar");

  private final String descricao;

  private Status(String descricao) {
    this.descricao = descricao;
  }

  public String getDescricao() {
    return descricao;
  }

}
