package com.betha.backend.cadastros.models.Enums;

public enum Status {
  DISPONIVEL_TRIAGEM("DISPONIVEL"),
  AGUARDANDO_CLIENTE("ACLIENTE"),
  CANCELADO("CANCELADO"),
  AGUARDANDO_MANUTENCAO("AMANUTENCAO"),
  EM_MANUTENCAO("EMANUTENCAO"),
  CONCLUIDO_CONSERTADO("CONCLUIDO"),
  CONCLUIDO_N_CONSERTADO("NCONCLUIDO"),
  VOLTOU_MANUTENCAO("VMANUTENCAO"),
  AGUARDANDO_FINALIZAR("AFINALIZAR");

  private final String descricao;

  private Status(String descricao) {
    this.descricao = descricao;
  }

  public String getDescricao() {
    return descricao;
  }

}
