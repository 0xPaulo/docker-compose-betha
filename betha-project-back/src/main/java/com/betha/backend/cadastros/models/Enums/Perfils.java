package com.betha.backend.cadastros.models.Enums;

public enum Perfils {
  ADMIN("Administrador"),
  RECEPCAO("Recepção"),
  TRIAGEM("Triagem"),
  TECNICO("Técnico"),
  MANUTENCAO("Manutenção");

  private String perfil;

  private Perfils(String perfil) {
    this.perfil = perfil;
  }

  public String getPerfil() {
    return perfil;
  }

  public void setPerfil(String perfil) {
    this.perfil = perfil;
  }

}
