"use client";

import React, { useState } from "react";

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
import { Cancel, Delete, Person } from "@mui/icons-material";

const ReqInclusaoDep = () => {
  // changeTabs
  const [value, setValue] = useState("2");

  // handlePrincipal
  const [principal, setPrincipal] = useState({});

  // handleDependents
  const [dependent, setDependent] = useState({});
  const [dependents, setDependents] = useState([]);
  const [addDependent, setAddDependent] = useState(false);
  const [noDependents, setNoDependents] = useState(false);

  // PCD if yes
  const [isPcd, setIsPcd] = useState(false);
  // Estudante if yes
  const [isStudent, setIsStudent] = useState(false);
  // Plano Saude if yes
  const [isHealthPlan, setIsHealthPlan] = useState(false);

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
                      name="nomeProc"
                      value={principal.nomeProc || ""}
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
                    {/* <Form.Label>Email address</Form.Label> */}

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
                    {/* <Form.Label>Email address</Form.Label> */}

                    <TextField
                      label="Telefone Celular"
                      variant="outlined"
                      className="w-100"
                      name="telProc"
                      value={principal.telProc || ""}
                      onChange={handleChangeValuesPrincipal}
                      // FALTA MUDAR NOMES
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
                      name="telFixProcurador"
                      value={principal.telFixProcurador || ""}
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

              <Form.Group className="mb-3">
                {/* <Form.Label>Email address</Form.Label> */}

                <TextField
                  label="Localidade falar com pessoal"
                  variant="outlined"
                  className="w-100"
                  name="concebMilitar"
                  value={principal.concebMilitar || ""}
                  onChange={handleChangeValuesPrincipal}
                />
              </Form.Group>

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
                          <TextField
                            variant="outlined"
                            label="RG"
                            className="w-100"
                            name="rgDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.rgDependente || ""}
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
                            name="cpfDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.cpfDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row lg={4}>
                      {/* SEXO */}
                      <Col lg={3}>
                        <FormControl>
                          <FormLabel id="demo-controlled-radio-buttons-group">
                            Sexo
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="sexoDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.sexoDependente || ""}
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
                      </Col>
                      {/* PCD */}
                      <Col lg={3}>
                        <FormControl>
                          <FormLabel id="demo-controlled-radio-buttons-group">
                            PCD
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
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
                      </Col>
                      {/* Estudante */}
                      <Col lg={3}>
                        <FormControl>
                          <FormLabel id="demo-controlled-radio-buttons-group">
                            Estudante
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="estudanteDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.estudanteDependente || ""}
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
                      </Col>
                      {/* Plano Saude */}
                      <Col lg={3}>
                        <FormControl>
                          <FormLabel id="demo-controlled-radio-buttons-group">
                            Plano de Saúde
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="planoSaudeDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.planoSaudeDependente || ""}
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
                      </Col>
                    </Row>
                    <Row>
                      {/* PCD IF YES*/}
                      {dependent.pcdDependente === "Sim" && (
                        <Col>
                          <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                              Tipo PCD
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="tipoPcdDependente"
                              onChange={handleChangeValuesDependent}
                              value={dependent.tipoPcdDependente || ""}
                            >
                              <FormControlLabel
                                value="FISICA"
                                control={<Radio />}
                                label="FISICA"
                              />
                              <FormControlLabel
                                value="MENTAL"
                                control={<Radio />}
                                label="MENTAL"
                              />
                              <FormControlLabel
                                value="AUDITIVA"
                                control={<Radio />}
                                label="AUDITIVA"
                              />
                              <FormControlLabel
                                value="MÚLTIPLA"
                                control={<Radio />}
                                label="MÚLTIPLA"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Col>
                      )}
                      {/* Estudante IF YES */}
                      {dependent.estudanteDependente === "Sim" && (
                        <Col>
                          <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">
                              Nível Estudante
                            </FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="nivelEstudanteDependente"
                              onChange={handleChangeValuesDependent}
                              value={dependent.nivelEstudanteDependente || ""}
                            >
                              <FormControlLabel
                                value="FUNDAMENTAL"
                                control={<Radio />}
                                label="FUNDAMENTAL"
                              />
                              <FormControlLabel
                                value="MÉDIO"
                                control={<Radio />}
                                label="MÉDIO"
                              />
                              <FormControlLabel
                                value="SUPERIOR"
                                control={<Radio />}
                                label="SUPERIOR"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Col>
                      )}
                    </Row>
                    {/* Plano Saude IF YES */}
                    {dependent.planoSaudeDependente === "Sim" && (
                      <Row>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Especificar Plano Saúde"
                            className="w-100"
                            name="especPlanSaudDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.especPlanSaudDependente || ""}
                          />
                        </Form.Group>
                      </Row>
                    )}

                    <Row xs={1} md={2} lg={3}>
                      <Col>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Estado Civil"
                            className="w-100"
                            name="estCivilDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.estCivilDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Telefone"
                            className="w-100"
                            name="telefoneDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.telefoneDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Email"
                            className="w-100"
                            name="emailDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.emailDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* Idade */}
                    <Row md={1}>
                      <Col>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Idade"
                            className="w-100"
                            name="idadeDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.idadeDependente || ""}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Row md={1} lg={2}>
                            <Col
                              lg={3}
                              className="d-flex align-items-center m-0 p-0 text-end"
                            >
                              <FormLabel className="d-flex align-items-center text-end">
                                Data de Nascimento
                              </FormLabel>
                            </Col>
                            <Col lg={9}>
                              <TextField
                                variant="outlined"
                                type="date"
                                className="w-100"
                                name="dataNascDependente"
                                onChange={handleChangeValuesDependent}
                                value={dependent.dataNascDependente || ""}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <TextField
                            variant="outlined"
                            label="Nº do Boletim Geral/Data"
                            className="w-100"
                            name="emailDependente"
                            onChange={handleChangeValuesDependent}
                            value={dependent.emailDependente || ""}
                          />
                        </Form.Group>
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
                              <TableCell className="d-flex justify-content-center text-center">
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
                <Button variant="contained" onClick={handleSubmit}>
                  Gerar Requerimento
                </Button>
              </div>
            )}
          </Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ReqInclusaoDep;
