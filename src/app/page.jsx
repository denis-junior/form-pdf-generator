"use client";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import img from "../../public/images/brasaoSvg.svg";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import style from "./globals.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  const [formDestProCur, setFormDestProCur] = React.useState(null);
  const [formDestMil, setFormDestMil] = React.useState(null);
  const [formDestDep, setFormDestDep] = React.useState(null);
  // DECLARAÇÕES FEITAS PELO PROCURADOR OU CURADOR
  const [decProCur, setDecProCur] = React.useState(null);
  const handleDecProCur = (event) => {
    setDecProCur(event.currentTarget);
  };
  const handleCloseDecProCur = () => {
    setDecProCur(null);
  };
  const openDecProCur = Boolean(decProCur);

  // REQUERIMENTOS FEITOS PELO PROCURADOR OU CURADOR
  const [reqProCur, setReqProCur] = React.useState(null);
  const handleReqProCur = (event) => {
    setReqProCur(event.currentTarget);
  };
  const handleCloseReqProCur = () => {
    setReqProCur(null);
  };
  const openReqProCur = Boolean(reqProCur);

  // Requerimentos feito pelo militar
  const [reqMil, setReqMil] = React.useState(null);
  const handleReqMil = (event) => {
    setReqMil(event.currentTarget);
  };
  const handleCloseReqMil = () => {
    setReqMil(null);
  };
  const openReqMil = Boolean(reqMil);

  // DECLARAÇÕES FEITAS PELO MILITAR
  const [decFeiMil, setDecFeiMil] = React.useState(null);
  const handleDecFeiMil = (event) => {
    setDecFeiMil(event.currentTarget);
  };
  const handleCloseDecFeiMil = () => {
    setDecFeiMil(null);
  };
  const openDecFeiMil = Boolean(decFeiMil);









  const handleFormDestProCur = (event) => {
    setFormDestProCur(event.currentTarget);
  };
  const handleFormDestMil = (event) => {
    setFormDestMil(event.currentTarget);
  };
  const handleFormDestDep = (event) => {
    setFormDestDep(event.currentTarget);
  };

  const handleCloseFormDestProCur = () => {
    setFormDestProCur(null);
  };
  const handleCloseFormDestMil = () => {
    setFormDestMil(null);
  };
  const handleCloseFormDestDep = () => {
    setFormDestDep(null);
  };

  const openFormDestProCur = Boolean(formDestProCur);
  const openFormDestMil = Boolean(formDestMil);
  const openFormDestDep = Boolean(formDestDep);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={style.navColor}>
          <Toolbar>
            <Image src={img} width="50" height="50" className="mr-2" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fundo de Saúde da Polícia Militar
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container fluid className={"mt-5 d-flex justify-content-center"}>
        <Row>
          <Col>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  // sx={{ fontSize: 14 }}
                  color="text.secondary"
                  // gutterBottom
                  className="text-center"
                  variant="h6"
                  component={"div"}
                >
                  Bem vindo
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  className="text-center"
                >
                  Aqui Você Encontra os Formulários Necessários para
                  Encaminhamento no FUNSAU
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  className="text-center"
                >
                  Abaixo Você Clica no Tipo de Formulário que Precisa Preencher
                </Typography>
                <Typography variant="body2" className="text-center">
                  Navegue Clicando no Botões Abaixo
                  {/* <br />
                  {'"a benevolent smile"'} */}
                </Typography>
              </CardContent>
              <CardActions className={style.breakCard}>
                <Button
                  className={style.fixedHeight}
                  // style={{ height: "7rem" }}
                  aria-describedby={5}
                  variant="contained"
                  onClick={handleFormDestProCur}
                >
                  Formulários destinados ao procurador ou curador
                </Button>

                <Button
                  className={style.fixedHeight}
                  // style={{ height: "7rem" }}
                  aria-describedby={5}
                  variant="contained"
                  onClick={handleFormDestMil}
                >
                  Formulários destinados ao militar
                </Button>

                <Button
                  className={style.fixedHeight}
                  // style={{ height: "7rem" }}
                  aria-describedby={5}
                  variant="contained"
                  onClick={handleFormDestDep}
                >
                  Formulário destinado ao dependente
                </Button>

                <Popover
                  open={openFormDestProCur}
                  anchorEl={formDestProCur}
                  onClose={handleCloseFormDestProCur}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  // className="w-50"
                >
                  <Typography sx={{ p: 2 }} className=" d-flex ">
                    <Button
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={handleDecProCur}
                    >
                      REQUERIMENTOS FEITOS PELO PROCURADOR OU CURADOR
                    </Button>
                    <Button
                      aria-describedby={3}
                      className=" ms-2"
                      variant="contained"
                      onClick={handleReqProCur}
                    >
                      DECLARAÇÕES FEITAS PELO PROCURADOR OU CURADOR
                    </Button>
                  </Typography>
                </Popover>
                <Popover
                  open={openFormDestMil}
                  anchorEl={formDestMil}
                  onClose={handleCloseFormDestMil}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  // className="w-50"
                >
                  <Typography sx={{ p: 2 }} className="d-flex">
                    <Button
                      className={style.fixedHeight}
                      aria-describedby={5}
                      variant="contained"
                      onClick={handleReqMil}
                    >
                      REQUERIMENTOS FEITOS PELO MILITAR
                    </Button>
                    <Button
                      className={'ms-2'}
                      aria-describedby={5}
                      variant="contained"
                      onClick={handleDecFeiMil}
                    >
                      DECLARAÇÕES FEITAS PELO MILITAR
                    </Button>
                  </Typography>
                </Popover>
                <Popover
                  open={openFormDestDep}
                  anchorEl={formDestDep}
                  onClose={handleCloseFormDestDep}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                  <Button
                      className={'ms-2'}
                      aria-describedby={5}
                      variant="contained"
                      // onClick={handleDecFeiMil}
                    >
                  REQUERIMENTOS DIVERSOS DE INTERESSE DO DEPENDENTE
                    </Button>
                  </Typography>
                </Popover>

                {/* Formulários destinados ao procurador ou curador */}
                <Popover
                  open={openDecProCur}
                  anchorEl={decProCur}
                  onClose={handleCloseDecProCur}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  // className="w-75"
                >
                  <Typography sx={{ p: 2 }} className={`d-flex ${style.popover}`}>
                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      // onClick={() => alert("going route")}
                    >
                      <Link style={{color: "white", textDecoration: "none"}} href={'/formDestProcCur/reqFeitProcCur/reqDivIntProcCur'} >

                      REQUERIMENTOS DIVERSOS DE INTERESSE DO PROCURADOR OU
                      CURADOR
                      </Link>
                    </Button>

                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO PARA REVALIDAÇÃO DO CARTÃO FUNSAU
                    </Button>

                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE INCLUSÃO DE MILITAR ESTADUAL
                    </Button>

                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE INCLUSÃO DE DEPENDENTE
                    </Button>

                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE EXTRATO PARA FINS DE IMPOSTO DE RENDA
                    </Button>

                    <Button
                      className="ms-2 mb-3 w-100"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE EXCLUSÃO
                    </Button>
                  </Typography>
                </Popover>
                
                <Popover
                  open={openReqMil}
                  anchorEl={reqMil}
                  onClose={handleCloseReqMil}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  // className="w-50"
                >
                  <Typography sx={{ p: 2 }} className={`d-flex ${style.popover}`}>
                    <Button
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTOS DIVERSOS
                    </Button>
                    <Button
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE REVALIDAÇÃO DO CARTÃO FUNSAU
                    </Button>
                    <Button
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE EXCLUSÃO
                    </Button>
                    <Button
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE EXTRATO PARA FINS DE IMPOSTO DE RENDA
                    </Button>
                    <Button
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE INCLUSÃO DE CONTRIBUINTE
                    </Button>
                    <Button 
                      className="ms-2 w-100 mb-3"
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      REQUERIMENTO DE INCLUSÃO DE DEPENDENTE
                    </Button>
                  </Typography>
                </Popover>


                <Popover
                  open={openReqProCur}
                  anchorEl={reqProCur}
                  onClose={handleCloseReqProCur}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <Button
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      DECLARAÇÃO DE DEPENDÊNCIA ECONÔMICA
                    </Button>
                  </Typography>
                </Popover>
                <Popover
                  open={openDecFeiMil}
                  anchorEl={decFeiMil}
                  onClose={handleCloseDecFeiMil}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <Button
                      aria-describedby={3}
                      // className="w-25"
                      variant="contained"
                      onClick={() => alert("going route")}
                    >
                      DECLARAÇÃO DE NÃO RECEBIMENTO DE RENDIMENTOS
                    </Button>
                  </Typography>
                </Popover>

              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
