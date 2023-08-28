"use client";

import { Button, Card, TextField } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ReqDivIntDepPDF from "./pdf/ReqDivIntDepPDF";

const ReqDivIntDep = () => {
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
          <Row xs={2}>
            <Col xs={6} md={3} lg={2}>
              <h6>Dependente</h6>
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
                  label="Nome Do Dependente"
                  variant="outlined"
                  className="w-100"
                  name="nomeDep"
                  value={principal.nomeDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="RG do Dependente"
                  variant="outlined"
                  className="w-100"
                  name="rgDep"
                  value={principal.rgDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="CPF"
                  variant="outlined"
                  className="w-100"
                  name="cpfDep"
                  value={principal.cpfDep || ""}
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
                  name="endDep"
                  value={principal.endDep || ""}
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
                  name="compEndDep"
                  value={principal.compEndDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={2} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nº Endereço"
                  variant="outlined"
                  className="w-100"
                  name="numEndDep"
                  value={principal.numEndDep || ""}
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
                  name="bairroDep"
                  value={principal.bairroDep || ""}
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
                  name="municDep"
                  value={principal.municDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Estado Endereço"
                  variant="outlined"
                  className="w-100"
                  name="estDep"
                  value={principal.estDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={1} md={3} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="CEP Endereço"
                  variant="outlined"
                  className="w-100"
                  name="cepDep"
                  value={principal.cepDep || ""}
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
                  name="telFixDep"
                  value={principal.telFixDep || ""}
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
                  name="telMovDep"
                  value={principal.telMovDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Qualidade de Dependente"
                  variant="outlined"
                  className="w-100"
                  name="qualDep"
                  value={principal.qualDep || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row xs={2}>
            <Col xs={6} md={3} lg={1}>
              <h6>Militar</h6>
            </Col>
            <Col xs={6} md={8} lg={10}>
              <hr />
            </Col>
          </Row>
          <Col>
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
          </Col>
          <Row>
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
          </Row>
          <Row xs={1} md={2} lg={4}>
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
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nome de Guerra"
                  variant="outlined"
                  className="w-100"
                  name="nomGuerraMil"
                  value={principal.nomGuerraMil || ""}
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
                  name="unidMil"
                  value={principal.unidMil || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <TextField
              label="que seja concebido"
              variant="outlined"
              className="w-100"
              name="queSejConMil"
              value={principal.queSejConMil || ""}
              onChange={handleChangeValuesPrincipal}
            />
          </Form.Group>

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
                document={<ReqDivIntDepPDF data={{ ...principal }} />}
              >
                <p className="m-0 p-0">Gerar Requerimento</p>
              </PDFDownloadLink>
            ) : null}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ReqDivIntDep;
