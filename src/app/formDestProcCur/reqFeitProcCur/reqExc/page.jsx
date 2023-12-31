"use client";

import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Icon,
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
import { Cancel, Delete, Person } from "@mui/icons-material";
import ReqExcPDF from "./pdf/ReqExcPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
const ReqExc = () => {
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
    console.log("DJKSFJKDS")
    console.log({ ...principal, dependents });
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
                      label="Complemento do Endereço"
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
                      label="Nº do Endereço"
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
                      label="Bairro"
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
                      label="Município"
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
                      label="Estado"
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
                      label="CEP"
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
            <h3 className="text-center">O Militar Possui Dependentes ?</h3>
            <div className="d-flex justify-content-center mb-2">
              <Button
                variant="contained"
                className="w-auto"
                endIcon={<Person />}
                onClick={() => setAddDependent(true)}
              >
                Adicionar Dependente
              </Button>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <Button
                color="error"
                variant="contained"
                className="w-auto"
                endIcon={<Cancel />}
                onClick={() => setNoDependents(true)}
              >
                Não Possui
              </Button>
            </div>

            {/* form */}
            {addDependent === true && (
              <div className="d-flex justify-content-center mb-5">
                <Card variant="outlined" className="p-3 w-75">
                  <Form>
                    <Row>
                      <Col>
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
                    </Row>
                    <Row xs={1} md={2} lg={3}>
                      <Col>
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
                      <Col>
                        <Form.Group className="mb-3">
                          {/* <Form.Label>Email address</Form.Label> */}

                          <TextField
                            type="number"
                            label="Idade"
                            variant="outlined"
                            className="w-100"
                            name="idadeDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.idadeDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <FormControl>
                          <FormLabel id="demo-controlled-radio-buttons-group">
                            PCD
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            // value={value}
                            name="pcdDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.pcdDependente || ""}
                          >
                            <FormControlLabel
                              value="Sim"
                              control={<Radio />}
                              label="Sim"
                            />
                            <FormControlLabel
                              value="Não"
                              control={<Radio />}
                              label="Não"
                            />
                          </RadioGroup>
                        </FormControl>
                        {/* <Form.Group className="mb-3">
                        <TextField
                          label="PCD"
                          variant="outlined"
                          className="w-100"
                        />
                      </Form.Group> */}
                      </Col>
                    </Row>

                    <Button variant="contained" onClick={handleDepSubmit}>
                      Adicionar
                    </Button>
                  </Form>
                </Card>
              </div>
            )}

            {/* table */}
            {dependents.length > 0 && (
              <div className="d-flex justify-content-center">
                <Card variant="outlined" className="p-3 w-75 mb-5">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell component={"th"}>
                            <b>Nº</b>
                          </TableCell>
                          <TableCell component={"th"} align="left">
                            <b>NOME COMPLETO </b>
                          </TableCell>
                          <TableCell component={"th"} align="left">
                            <b>PARENTESCO</b>
                          </TableCell>
                          <TableCell component={"th"} align="left">
                            <b>IDADE</b>
                          </TableCell>
                          <TableCell component={"th"} align="left">
                            <b>PCD</b>
                          </TableCell>
                          <TableCell component={"th"} align="center">
                            <b>AÇÕES</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dependents &&
                          dependents.map((row, key) => (
                            <TableRow key={key}>
                              <TableCell>{Number(key + 1)}</TableCell>
                              <TableCell>{row.nomeDependente}</TableCell>
                              <TableCell>{row.parentescoDependente}</TableCell>
                              <TableCell>{row.idadeDependente}</TableCell>
                              <TableCell>{row.pcdDependente}</TableCell>
                              <TableCell className="d-flex justify-content-center text-center" >
                                <Button
                                  color="error"
                                  className="d-flex justify-content-center text-center"
                                  onClick={() => {
                                    window.confirm(
                                      "Você deseja deletar esse dependente ?"
                                    ) &&
                                      setDependents(
                                        dependents.filter(
                                          (dependent, index) => index !== key
                                        )
                                      );
                                  }}
                                >
                                  <Delete />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Card>
              </div>
            )}

            {(dependents.length > 0 || noDependents === true) && (
              <div className="d-flex justify-content-center mb-2">
                <Button
                  variant="contained"
                 
                  // onClick={handleSubmit}
                >
                  <PDFDownloadLink
                    className="d-flex align-items-center text-white"
                    style={{textDecoration: "none"}}
                    document={<ReqExcPDF data={{ ...principal, dependents }} />}
                  >
                    <p className="m-0 p-0">Gerar Requerimento</p>
                  </PDFDownloadLink>
                </Button>
                {/* <Button
                  variant="primary"
                  size="sm"
                  className="d-flex align-items-center h-100"
                  onClick={handleSubmit}
                >
                  Gerar Requerimento
                </Button> */}
                
              </div>
            )}
          </Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ReqExc;
