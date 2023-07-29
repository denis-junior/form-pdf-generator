"use client";

import { Card, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ReqIncDep = () => {
  const [principal, setPrincipal] = useState({});

  const handleChangeValuesPrincipal = (event) => {
    const { name, value } = event.target;
    console.log(`name: ${event.target.name} - value: ${event.target.value} `);
    setPrincipal({ ...principal, [name]: value });
  };

  const handleSubmit = () => {
    // setPrincipal({ ...principal, dependents });
    console.log(principal);
  };

  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center p-2"
      style={{ backgroundColor: "red" }}
    >
      <Card variant="outlined" className="p-3 w-75">
        <Form>
          <Row xs={2}>
            <Col xs={6} md={3} lg={2}>
              <h6>Militar</h6>
            </Col>
            <Col xs={6} md={8} lg={10}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <TextField
                label="Nome Completo"
                variant="outlined"
                className="w-100"
                name="nomeMilitar"
                value={principal.nomeMilitar || ""}
                onChange={handleChangeValuesPrincipal}
              />
            </Form.Group>
          </Row>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Posto ou Graduação"
                  variant="outlined"
                  className="w-100"
                  name="postGradMilitar"
                  value={principal.postGradMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="RG do Militar"
                  variant="outlined"
                  className="w-100"
                  name="rgMilitar"
                  value={principal.rgMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nº da Matrícula"
                  variant="outlined"
                  className="w-100"
                  name="numMatriMilitar"
                  value={principal.numMatriMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nome de Guerra"
                  variant="outlined"
                  className="w-100"
                  name="nomeGuerraMilitar"
                  value={principal.nomeGuerraMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Unidade Militar"
                  variant="outlined"
                  className="w-100"
                  name="unidMilitar"
                  value={principal.unidMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Endereço"
                  variant="outlined"
                  className="w-100"
                  name="endMilitar"
                  value={principal.endMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Complemento Endereço"
                  variant="outlined"
                  className="w-100"
                  name="complementEnderecoMilitar"
                  value={principal.complementEnderecoMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={2} lg={3}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nº Endereço"
                  variant="outlined"
                  className="w-100"
                  name="numEnderecoMilit"
                  value={principal.numEnderecoMilit || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Bairro Endereço"
                  variant="outlined"
                  className="w-100"
                  name="bairroEndMilitar"
                  value={principal.bairroEndMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Município Endereço"
                  variant="outlined"
                  className="w-100"
                  name="municpEndMilitar"
                  value={principal.municpEndMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={3} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Estado Endereço"
                  variant="outlined"
                  className="w-100"
                  name="estadoMilitar"
                  value={principal.estadoMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="CEP Endereço"
                  variant="outlined"
                  className="w-100"
                  name="cepMilitar"
                  value={principal.cepMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Telefone Fixo"
                  variant="outlined"
                  className="w-100"
                  name="telFixMilitar"
                  value={principal.telFixMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Telefone Móvel"
                  variant="outlined"
                  className="w-100"
                  name="telMovelMilitar"
                  value={principal.telMovelMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <TextField
              label="que seja CONCEDIDO"
              variant="outlined"
              className="w-100"
              name="queSejConcebMilitar"
              value={principal.queSejConcebMilitar || ""}
              onChange={handleChangeValuesPrincipal}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Gerar Requerimento
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ReqIncDep;
