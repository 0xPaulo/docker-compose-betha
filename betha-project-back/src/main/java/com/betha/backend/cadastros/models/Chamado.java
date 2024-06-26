package com.betha.backend.cadastros.models;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.betha.backend.cadastros.models.Enums.Status;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chamado", schema = "manutencao")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

public class Chamado {

  @Column
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "cliente_id_fk")
  @NotNull
  private Cliente clienteId;

  @ManyToOne
  @JoinColumn(name = "tecnico_id_fk")
  private Tecnico tecnico;

  @Column(name = "name_item")
  @NotNull
  private String nomeItem;

  @Column(name = "item_serie")
  @NotNull
  private String itemSerie;

  @Enumerated(EnumType.STRING)
  private Status status;

  @Column(name = "defeito_relatado")
  @NotNull
  private String defeitoRelatado;

  @Column(name = "analise_tecnica")
  private String analiseTecnica;

  @Column(name = "motivo_Nao_Conclusao")
  private String motivoNaoConclusao;

  @Column(name = "data_entrada")
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime dataEntrada;

  @Column(name = "data_saida")
  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime dataSaida;

  @Column(name = "custo_estimado")
  private int custoEstimado;

  @Column(columnDefinition = "text[]", name = "image_urls")
  private List<String> image_urls;

}
