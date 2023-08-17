"use client";

import { Button, Card, TextField } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ReqDivIntProcCurPDF from "./pdf/ReqDivIntProcCurPDF";

const ReqDivIntProcCur = () => {
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
            <Col xs={6} md={3} lg={1}>
              <h6>Procurador/Curador</h6>
            </Col>
            <Col xs={6} md={8} lg={10}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Nome Completo"
                  name="nomeProc"
                  value={principal.nomeProc || ""}
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
                  name="rgProc"
                  value={principal.rgProc || ""}
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
                  name="cpfProc"
                  value={principal.cpfProc || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Telefone"
                  variant="outlined"
                  className="w-100"
                  name="telProc"
                  value={principal.telProc || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>
            </Col>
          </Row>
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
              {/* <Form.Label>Email address</Form.Label> */}
              <TextField
                label="Nome Do Militar"
                variant="outlined"
                className="w-100"
                name="nomeMil"
                value={principal.nomeMil || ""}
                onChange={handleChangeValuesPrincipal}
              />
            </Form.Group>
          </Row>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Posto Graduação"
                  variant="outlined"
                  className="w-100"
                  name="postGradMil"
                  value={principal.postGradMil || ""}
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
                  name="rgMil"
                  value={principal.rgMil || ""}
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
                  name="numMatMil"
                  value={principal.numMatMil || ""}
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
                  name="nomeGuerraMil"
                  value={principal.nomeGuerraMil || ""}
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
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className="mb-3">
                <TextField
                  label="Endereço"
                  variant="outlined"
                  className="w-100"
                  name="endMil"
                  value={principal.endMil || ""}
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
                  name="compEndMil"
                  value={principal.compEndMil || ""}
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
                  name="numEndMil"
                  value={principal.numEndMil || ""}
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
                  name="bairroMil"
                  value={principal.bairroMil || ""}
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
                  name="municMil"
                  value={principal.municMil || ""}
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
                  name="estMil"
                  value={principal.estMil || ""}
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
                  name="cepMil"
                  value={principal.cepMil || ""}
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
                  name="telFixMil"
                  value={principal.telFixMil || ""}
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
                  name="telMovMil"
                  value={principal.telMovMil || ""}
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
                document={<ReqDivIntProcCurPDF data={{ ...principal }} />}
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

export default ReqDivIntProcCur;
