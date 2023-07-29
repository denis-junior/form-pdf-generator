"use client";

import React, { useState } from "react";
import DecDependEconPdf from "../pdf/DecDependEconPdf";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Col, Form, Row } from "react-bootstrap";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Cancel, Check, Delete, Person } from "@mui/icons-material";
import { PDFDownloadLink } from "@react-pdf/renderer";
const DecDependEcon = () => {
  // changeTabs
  const [value, setValue] = useState("1");

  // handlePrincipal
  const [principal, setPrincipal] = useState({});

  // handleDependents
  const [dependent, setDependent] = useState({});
  const [dependents, setDependents] = useState([]);
  const [addDependent, setAddDependent] = useState(false);
  const [noDependents, setNoDependents] = useState(false);

  const handleChangeValuesPrincipal = (event) => {
    const { name, value } = event.target;
    console.log("name ", event.target.name);
    console.log("value ", event.target.value);
    setPrincipal({ ...principal, [name]: value });
  };

  const handleChangeValuesDependent = (event) => {
    const { name, value } = event.target;
    console.log("name ", event.target.name);
    console.log("value ", event.target.value);
    setDependent({ ...dependent, [name]: value });
  };

  const handleDepSubmit = () => {
    setDependents([...dependents, dependent]);
    setDependent({});
    setAddDependent(false);
    // console.log(dependent)
  };

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  // send All
  const handleSubmit = () => {
    setPrincipal({ ...principal, dependents });
    console.log(principal);
  };

  return (
    <Box sx={{ typography: "body1" }} className="w-100 p-2">
      <TabContext value={value}>
        {/* <button onClick={() => console.log(principal)}>see principal</button> */}
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="d-flex justify-content-center"
        >
          <TabList onChange={handleChangeTabs}>
            <Tab label="Militar" value="1" />
            <Tab label="Dependentes" value="2" />
          </TabList>
        </Box>

        <TabPanel
          value="1"
          className=" d-flex flex-direction-column justify-content-center m-auto"
        >
          <Card variant="outlined" className="p-3 w-75">
            <Form>
              <Row xs={2}>
                <Col xs={6} md={3} lg={2}>
                  <h6>Procurador/Curador</h6>
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
                      name="nomeProcurador"
                      value={principal.nomeProcurador || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row xs={1} md={2} lg={3}>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <TextField
                      label="RG"
                      variant="outlined"
                      className="w-100"
                      name="rgProcurador"
                      value={principal.rgProcurador || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="CPF"
                      variant="outlined"
                      className="w-100"
                      name="cpfProcurador"
                      value={principal.cpfProcurador || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Telefone"
                      variant="outlined"
                      className="w-100"
                      name="telProcurador"
                      value={principal.telProcurador || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row xs={2}>
                <Col xs={2} md={2} lg={2}>
                  <h6>Militar</h6>
                </Col>
                <Col xs={10} md={10} lg={10}>
                  <hr />
                </Col>
              </Row>
              <Row xs={1}>
                <Col md={6} lg={8}>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <TextField
                      label="Nome Militar"
                      variant="outlined"
                      className="w-100"
                      name="nomeMilitar"
                      value={principal.nomeMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} lg={4}>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}
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
              <Row xs={1} md={2} lg={4}>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Posto / Graduação"
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
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Nº da Matrícula"
                      variant="outlined"
                      className="w-100"
                      name="matriculaMilitar"
                      value={principal.matriculaMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="RG"
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
                    {/* <Form.Label>Email address</Form.Label> */}

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
              </Row>
              <Row xs={1} md={2}>
                <Col>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Endereço"
                      variant="outlined"
                      className="w-100"
                      name="enderecoMilitar"
                      value={principal.enderecoMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="compEndMilitar"
                      value={principal.compEndMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="numEndMilitar"
                      value={principal.numEndMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="bairroEndMilitar"
                      value={principal.bairroEndMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="municipEndMilitar"
                      value={principal.municipEndMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="estEndMilitar"
                      value={principal.estEndMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="cepMilitar"
                      value={principal.cepMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="telFixoMilitar"
                      value={principal.telFixoMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
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
                      name="telMovelMilitar"
                      value={principal.telMovelMilitar || ""}
                      onChange={handleChangeValuesPrincipal}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="contained" onClick={() => setValue("2")}>
                Próximo
              </Button>
            </Form>
          </Card>
        </TabPanel>

        {/* Dependente */}
        <TabPanel
          value="2"
          className="d-flex flex-direction-column justify-content-center m-auto"
        >
          <Card
            variant="outlined"
            className="p-3 w-75 d-flex bg-secondary flex-column justify-content-center"
          >
            <h3 className="text-center">Declaração do Dependente</h3>

            {/* form */}

            <div className="d-flex justify-content-center mb-5">
              <Card variant="outlined" className="p-3 w-75">
                <Form>
                  <Row xs={1} md={1} lg={2}>
                    <Col md={8} lg={8}>
                      <Form.Group className="mb-3">
                        <TextField
                          label="Nome Completo"
                          variant="outlined"
                          className="w-100"
                          name="nomeDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.nomeDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} lg={4}>
                      <Form.Group className="mb-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <TextField
                          label="Parentesco"
                          variant="outlined"
                          className="w-100"
                          name="parentescoDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.parentescoDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} md={1} lg={2}>
                    <Col md={8} lg={8}>
                      <Form.Group className="mb-3">
                        <Col>
                          <Row>
                            <Col className="d-flex aling-items-center">
                              <Form.Label
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Data de Nascimento
                              </Form.Label>
                            </Col>
                            <Col lg={6}>
                              <TextField
                                type="date"
                                variant="outlined"
                                className="w-100"
                                name="dataNascimentoDep"
                                onChange={handleChangeValuesDependent}
                                value={dependent.dataNascimentoDep || ""}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col md={4} lg={4}>
                      <Form.Group className="mb-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <TextField
                          label="Idade"
                          variant="outlined"
                          className="w-100"
                          name="parentescoDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.parentescoDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={1} md={2} lg={3}>
                    <Col>
                      <Form.Group className="mb-3">
                        <TextField
                          label="RG"
                          variant="outlined"
                          className="w-100"
                          name="nomeDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.nomeDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <TextField
                          label="CPF"
                          variant="outlined"
                          className="w-100"
                          name="parentescoDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.parentescoDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <TextField
                          label="Estado Civil"
                          variant="outlined"
                          className="w-100"
                          name="nomeDependente"
                          onChange={handleChangeValuesDependent}
                          value={dependent.nomeDependente || ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <Button
                variant="contained"
                // onClick={handleSubmit}
              >
                <PDFDownloadLink
                  className="d-flex align-items-center h-100 text-white"
                  document={<DecDependEconPdf />}
                  fileName="requisitions.pdf"
                >
                  <p className={"ms-2"}>Gerar Requerimento Mudei</p>
                </PDFDownloadLink>
              </Button>
            </div>
          </Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DecDependEcon;
