"use client";

import { Button, Card, TextField } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import CarteirinhaPDF from "./pdf/CarteirinhaPDF";

const Carteirinha = () => {
  const [principal, setPrincipal] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChangeValuesPrincipal = (event) => {
    const { name, value } = event.target;
    console.log("name ", event.target.name);
    console.log("value ", event.target.value);
    setPrincipal({ ...principal, [name]: value });
  };

  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center p-2"
      // style={{ backgroundColor: "red" }}
    >
      <Card variant="outlined" className="p-3 w-75">
        <Form>
          <Row >
            <h6>Dados da Carteirinha</h6>
          </Row>
    
            <Form.Group className="mb-3">
              <TextField
                label="Nome Completo"
                name="nomeMil"
                value={principal.nomeMil || ""}
                onChange={handleChangeValuesPrincipal}
                variant="outlined"
                className="w-100"
              />
            </Form.Group>
        

          <Row xs={1} md={3} lg={5}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Posto/Graduação"
                  name="postMil"
                  value={principal.postMil || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="RG"
                  variant="outlined"
                  className="w-100"
                  name="rgMil"
                  value={principal.rgMil || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Matricula"
                  variant="outlined"
                  className="w-100"
                  name="matMil"
                  value={principal.matMil || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />

          <Row >
            <h6>Dados do Dependente</h6>
          </Row>
          <Row xs={1} md={3} lg={5}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nome do Dependente"
                  name="nomeDep"
                  value={principal.nomeDep || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="RG ou CPF do Dependente"
                  name="rgCpfDep"
                  value={principal.rgCpfDep || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Data de Nascimento"
                  name="dataNascDep"
                  value={principal.dataNascDep || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Vinculo"
                  name="vincDep"
                  value={principal.vincDep || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Data de Inclusão"
                  name="datIncDep"
                  value={principal.datIncDep || ""}
                  onChange={handleChangeValuesPrincipal}
                  variant="outlined"
                  className="w-100"
                />
              </Form.Group>
            </Col>
            
          </Row>

          {/* <Button variant="primary" onClick={()=>console.log(principal)}>
            Gerar Requerimento
          </Button> */}
          <Button
            variant="contained"

            // onClick={handleSubmit}
          >
            {isClient ? (
              <PDFDownloadLink
                className="d-flex align-items-center text-white"
                style={{ textDecoration: "none" }}
                document={<CarteirinhaPDF data={{ ...principal }} />}
              >
                <p className="m-0 p-0">Gerar Carteira</p>
              </PDFDownloadLink>
            ) : null}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Carteirinha;
