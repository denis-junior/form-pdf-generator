"use client";

import React, { useEffect, useState } from "react";
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
import DecNaoRecRendPDF from "./pdf/DecNaoRecRendPDF"

const DecNaoRecRend = () => {
  // changeTabs
  const [value, setValue] = useState("1");

  // handlePrincipal
  const [principal, setPrincipal] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


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
                      name="nomeMil"
                      value={principal.nomeMil || ""}
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
                      name="unidMil"
                      value={principal.unidMil || ""}
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
                      name="postGradMil"
                      value={principal.postGradMil || ""}
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
                      name="numMatMil"
                      value={principal.numMatMil || ""}
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
                      name="rgMil"
                      value={principal.rgMil || ""}
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
                      name="nomeGuerraMil"
                      value={principal.nomeGuerraMil || ""}
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
                      name="endMil"
                      value={principal.endMil || ""}
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
                      name="bairroMil"
                      value={principal.bairroMil || ""}
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
                    {/* <Form.Label>Email address</Form.Label> */}

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
                    {/* <Form.Label>Email address</Form.Label> */}

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
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Telefone Fixo"
                      variant="outlined"
                      className="w-100"
                      name="telFixoMil"
                      value={principal.telFixoMil || ""}
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
                      name="telMovMil"
                      value={principal.telMovMil || ""}
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
            <h3 className="text-center">Dados do Dependente</h3>

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
                          name="nomeDep"
                          onChange={handleChangeValuesDependent}
                          value={dependent.nomeDep || ""}
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
                          name="grauParentDep"
                          onChange={handleChangeValuesDependent}
                          value={dependent.grauParentDep || ""}
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
                                onChange={handleChangeValuesDependent}
                                name="datNascDep"
                                value={dependent.datNascDep || ""}
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
                          onChange={handleChangeValuesDependent}
                          name="idadeDep"
                          value={dependent.idadeDep || ""}
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
                          onChange={handleChangeValuesDependent}
                          name="rgDep"
                          value={dependent.rgDep || ""}
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
                          onChange={handleChangeValuesDependent}
                          name="cpfDep"
                          value={dependent.cpfDep || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <TextField
                          label="Estado Civil"
                          variant="outlined"
                          className="w-100"
                          onChange={handleChangeValuesDependent}
                          name="estCivDep"
                          value={dependent.estCivDep || ""}
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
                {isClient ? (
                  <PDFDownloadLink
                    className="d-flex align-items-center text-white"
                    style={{ textDecoration: "none" }}
                    document={<DecNaoRecRendPDF data={{ ...principal, dependent }} />}
                  >
                    <p className="m-0 p-0">Gerar Requerimento</p>
                  </PDFDownloadLink>
                ) : null}
              </Button>
            </div>
          </Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DecNaoRecRend;
