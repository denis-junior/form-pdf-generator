"use client";

import { Card, TextField } from "@mui/material";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ReqDivIntProcCur = () => {
  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center p-2"
      style={{ backgroundColor: "red" }}
    >
      <Card variant="outlined" className="p-3 w-75">
        <Form>
          <Row xs={2}>
            <Col xs={6} md={3} lg={1}>
              <h6>Militar</h6>
            </Col>
            <Col xs={6} md={8} lg={10}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Nome Completo"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField label="RG" variant="outlined" className="w-100" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField label="CPF" variant="outlined" className="w-100" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Telefone"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Posto Graduação"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={2}>
            <Col xs={6} md={3} lg={2}>
              <h6>Procurador/Curador</h6>
            </Col>
            <Col xs={6} md={8} lg={10}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3">
              {/* <Form.Label>Email address</Form.Label> */}
              <TextField
                label="Nome Procurador / Curador"
                variant="outlined"
                className="w-100"
              />
            </Form.Group>
          </Row>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="RG Procurador / Curador"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Nº da Matrícula"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Nome de Guerra"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Unidade Militar"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Complemento Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={2} lg={3}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}
                <TextField
                  label="Nº Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}
                <TextField
                  label="Bairro Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}
                <TextField
                  label="Município Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={3} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Estado Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="CEP Endereço"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Telefone Fixo"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Telefone Móvel"
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}

            <TextField
              label="que seja CONCEDIDO"
              variant="outlined"
              className="w-100"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Gerar Requerimento
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ReqDivIntProcCur;
