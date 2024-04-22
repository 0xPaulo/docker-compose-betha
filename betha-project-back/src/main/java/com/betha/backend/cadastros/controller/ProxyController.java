package com.betha.backend.cadastros.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@RestController
public class ProxyController {

  private final WebClient webClient;

  public ProxyController(WebClient.Builder webClientBuilder) {
    this.webClient = webClientBuilder.build();
  }

  @GetMapping(value = "/proxy", produces = MediaType.IMAGE_JPEG_VALUE)
  public Mono<byte[]> proxyImage(@RequestParam String imageUrl) {
    return webClient.get()
        .uri(imageUrl)
        .retrieve()
        .bodyToMono(byte[].class);
  }
}