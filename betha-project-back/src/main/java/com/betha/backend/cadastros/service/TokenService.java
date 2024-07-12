package com.betha.backend.cadastros.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.betha.backend.cadastros.models.Tecnico;

@Service
public class TokenService {

  // Esse segredo nao deve ser usado em produçao
  private String secret = "secret";

  public String generateToken(Tecnico tecnico) {
    try {

      Algorithm algorithm = Algorithm.HMAC256(secret);
      String token = JWT.create()
          .withIssuer("auth-api")
          .withSubject(tecnico.getEmail())
          .withExpiresAt(genExpirationDate())
          .withClaim("perfil", tecnico.getPerfil().toString())
          .withClaim("id", tecnico.getId().toString())
          .withClaim("nome", tecnico.getNome().toString())
          .sign(algorithm);
      return token;
    } catch (NullPointerException e) {
      throw new RuntimeException("Erro ao gerar token devido a um valor nulo.",
          e);
    } catch (JWTCreationException e) {
      throw new RuntimeException("Erro ao gerar token", e);
    }
  }

  public String validateToken(String token) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(secret);
      return JWT.require(algorithm)
          .withIssuer("auth-api")
          .build()
          .verify(token)
          .getSubject();
    } catch (JWTVerificationException e) {
      return "";
    }
  }

  private Instant genExpirationDate() {
    return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
  }
}
