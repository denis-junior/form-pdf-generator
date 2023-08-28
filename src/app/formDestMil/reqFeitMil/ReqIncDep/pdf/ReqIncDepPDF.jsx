"use client";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { brasaoFunsauBase64, brasaoPMBase64 } from "@/utils/images";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 65,
    paddingHorizontal: 30,
    // backgroundColor: "blue",
  },
  boldText: {
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerImg: {
    width: "50px",
  },
  headerDivText: {
    // backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  headerText: {
    fontSize: "10px",
    // backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  headerLine: {
    borderBottom: 2,
    width: "100%",
    marginTop: 3,
  },
  titleBox: {
    marginTop: 20,
  },
  title1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 12,
  },
  title2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 10,
  },
  mrDiretor: {
    marginTop: 25,
    paddingLeft: 50,
    // backgroundColor: "red",
  },
  mrDiretorText: {
    fontSize: 10,
  },
  defaultText: {
    marginTop: 10,
    // paddingLeft: 50,
    fontSize: 10,
    lineHeight: 2,
    textIndent: 50,
    textAlign: "justify",
    fontFamily: "Open Sans",
  },
  headerTable: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    border: 1,
  },
  bodyTable: {
    // backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    borderLeft: 1,
    borderBottom: 1,
    borderRight: 1,
  },
  footer: {
    position: "absolute",
    fontSize: 12,
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  footerSignature: {
    position: "absolute",
    paddingHorizontal: 30,
    fontSize: 12,
    bottom: 100,
    left: 0,
    right: 0,
    // color: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  footerLaws: {
    position: "absolute",
    paddingHorizontal: 30,
    fontSize: 12,
    bottom: 70,
    left: 0,
    right: 0,
    // color: "grey",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    textAlign: "left",
  },
});

const ReqIncDepPDF = ({ data }) => {
  return (
    <Document>
      <Page style={styles.body} size={"A4"} orientation="portrait" wrap={true}>
        <View style={styles.header}>
          <View>
            <Image style={styles.headerImg} src={brasaoFunsauBase64} />
          </View>
          <View style={styles.headerDivText}>
            <Text style={styles.headerText}>GOVERNO DO ESTADO DO PARÁ</Text>
            <Text style={styles.headerText}>POLÍCIA MILITAR DO PARÁ</Text>
            <Text style={styles.headerText}>
              FUNDO DE SAÚDE DA POLÍCIA MILITAR DO PARÁ FUNSAU-PMPA
            </Text>
          </View>
          <View>
            <Image style={styles.headerImg} src={brasaoPMBase64} />
          </View>
        </View>
        <View style={styles.headerLine} />
        <View style={styles.titleBox}>
          <Text style={styles.title1}>
            REQUERIMENTO DE INCLUSÃO DE DEPENDENTES(S)
          </Text>
        </View>
        <View style={styles.mrDiretor}>
          <Text style={styles.mrDiretorText}>
            Sr. Diretor do Fundo de Saúde da PMPA,
          </Text>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.defaultText}>
            Eu,{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.postGradMil || "Não Informado"}
            </Text>
            ,{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.nomeMil || "Não Informado"}
            </Text>
            , Carteira Identidade nº:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.rgMil || "Não Informado"}
            </Text>
            , Matrícula nº{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.numMatMil || "Não Informado"}
            </Text>
            , Nome de guerra:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.nomeGuerraMil || "Não Informado"}
            </Text>
            ; pertencente à unidade militar:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.unidMil || "Não Informado"}
            </Text>
            ; residente e domiciliado à:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.numEndMil || "Não Informado"}
            </Text>
            ; nº{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.numEndMilitar || "Não Informado"}
            </Text>
            ; complemento:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.compEndMil || "Não Informado"}
            </Text>
            ; bairro:
            <Text style={{ fontWeight: "700" }}>
              {data?.bairroMil || "Não Informado"}
            </Text>
            ; município:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.municMil || "Não Informado"}
            </Text>
            ; Estado:
            <Text style={{ fontWeight: "700" }}>
              {data?.estMil || "Não Informado"}
            </Text>
            ; CEP nº{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.cepMil || "Não Informado"}
            </Text>
            ; telefone fixo:
            <Text style={{ fontWeight: "700" }}>
              {data?.telFixMil || "Não Informado"}
            </Text>
            telefone móvel:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.telMovMil || "Não Informado"}
            </Text>
            ; vem muito respeitosamente requerer à V. S.ª, a
            <Text style={{ fontWeight: "700" }}>
              {" "}
              INCLUSÃO DO(S) DEPENDENTE(S)
            </Text>
            no Fundo de Saúde da Polícia Militar – FUNSAU, com base no que
            dispõe o art. 4º da Lei Complementar nº 142 de 16 de dezembro de
            2021, que instituiu o Sistema de Proteção Social dos Militares do
            Estado do Pará, alterada pela Lei Complementar nº 149, de 20 de maio
            de 2022.
          </Text>
          <Text style={{ textIndent: 50, ...styles.defaultText }}>
            Outrossim, declaro para os devidos fins, que estou ciente que os
            serviços de saúde disponibilizados pelo FUNSAU somente poderão ser
            utilizados pelo(s) dependente(s), a partir do desconto da 1ª parcela
            em contracheque e emissão da{" "}
            <Text style={{ fontWeight: 700 }}>“CARTEIRA DO FUNSAU”</Text>.
          </Text>
          <Text style={{ textIndent: 50, ...styles.defaultText }}>
            Ademais, ressalto que as informações contidas neste requerimento são
            verdadeiras estando ciente das penalidades por quaisquer informações
            falsas.
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              justifyContent: "flex-end",
              textAlign: "right",
            }}
          >
            ___________________,______ de ________ de _________
          </Text>
          <Text
            style={{
              fontSize: 10,
              justifyContent: "flex-end",
              textAlign: "right",
              paddingRight: 190,
            }}
          >
            Local
          </Text>
        </View>

        <View style={styles.footerSignature}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>
              ____________________________________
            </Text>
            <Text style={{ fontSize: 10 }}>Requerente</Text>
            <Text style={{ fontSize: 10 }}>
              (assinatura conforme identidade)
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>
              ____________________________________
            </Text>
            <Text style={{ fontSize: 10 }}>Atendente</Text>
            <Text style={{ fontSize: 10 }}>(assinatura legível)</Text>
          </View>
        </View>

        <View style={styles.footerLaws}>
          <Text style={{ fontSize: 10 }}>
            1 - Art. 4º da LC nº 142/2021 – Sistema de Proteção Social dos
            Militares do Estado do Pará
          </Text>
          <Text style={{ fontSize: 10 }}>2 - Pessoa com Deficiência.</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 10 }}>
            Av. Alm. Barroso, 527, entre Almirante Barroso e Trav.Curuzu - São
            Brás, Belém - PA, 66093-020
          </Text>
          <Text style={{ fontSize: 10 }}>
            Contatos: (91) 3210-2838 – E-mail: funsau.cadastro@gmail.com
          </Text>
        </View>
      </Page>
      <Page style={styles.body} size={"A4"} orientation="portrait">
        <View style={styles.header}>
          <View>
            <Image style={styles.headerImg} src={brasaoFunsauBase64} />
          </View>
          <View style={styles.headerDivText}>
            <Text style={styles.headerText}>GOVERNO DO ESTADO DO PARÁ</Text>
            <Text style={styles.headerText}>POLÍCIA MILITAR DO PARÁ</Text>
            <Text style={styles.headerText}>
              FUNDO DE SAÚDE DA POLÍCIA MILITAR DO PARÁ FUNSAU-PMPA
            </Text>
          </View>
          <View>
            <Image style={styles.headerImg} src={brasaoPMBase64} />
          </View>
        </View>
        <View style={styles.headerLine} />
        <View style={styles.titleBox}>
          <Text style={styles.title1}>ANEXO DA INCLUSÃO DE DEPEDENTE(S)</Text>
        </View>

        {/* TABLE */}

        {data.dependents?.length > 0 &&
          data.dependents?.map((dependent, key) => {
            return (
              <View key={key} style={{ marginTop: 10, width: "100%" }}>
                <View style={{ border: 1, width: "80%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      paddingLeft: 5,
                      fontWeight: "700",
                      fontFamily: "Open Sans",
                    }}
                  >
                    IDENTIFICAÇÃO DO DEPENDENTE
                  </Text>
                </View>
                <View style={{ border: 1, borderTop: 0, width: "80%" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      paddingLeft: 5,
                      fontFamily: "Open Sans",
                    }}
                  >
                    NOME COMPLETO: {dependent.nomeDep?.toUpperCase()}
                  </Text>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "45%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                        borderRight: 1,
                      }}
                    >
                      PARENTESCO: {dependent.parentescoDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "25%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                        borderRight: 1,
                      }}
                    >
                      RG: {dependent.rgDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "30%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      CPF: {dependent.cpfDep?.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    borderBottom: 0,
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "30%", borderBottom: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                        borderRight: 1,
                      }}
                    >
                      SEXO: {dependent.sexoDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "40%", borderBottom: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                        borderRight: 1,
                      }}
                    >
                      DATA DE NASC.{" "}
                      {dependent.dataNascDepe?.replaceAll("-", "/")}
                    </Text>
                  </View>
                  <View style={{ width: "30%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      IDADE: {dependent.idadeDep?.toUpperCase()} ANOS
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "25%", borderRight: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      ESTADO CIVIL: {dependent.estCivilDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "31%", borderRight: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      FONE: {dependent.telefoneDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "44%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                        borderTop: 1,
                      }}
                    >
                      EMAIL: {dependent.emailDep?.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "25%", borderRight: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      ESTUDANTE: {dependent.estudanteDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "75%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      NÍVEL:{" "}
                      {dependent.estudanteDep?.toUpperCase() === "NÃO"
                        ? "NÃO"
                        : dependent.nivelEstudanteDep?.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "25%", borderRight: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      PCD: {dependent.pcdDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "75%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      ESPECIFICAR:{" "}
                      {dependent.pcdDep?.toUpperCase() === "NÃO"
                        ? "NÃO"
                        : dependent.tipoPcdDep?.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: "25%", borderRight: 1 }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      PLANO DE SAÚDE: {dependent.planoSaudeDep?.toUpperCase()}
                    </Text>
                  </View>
                  <View style={{ width: "75%" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        paddingLeft: 5,
                        fontFamily: "Open Sans",
                      }}
                    >
                      ESPECIFICAR:{" "}
                      {dependent.planoSaudeDep?.toUpperCase() === "NÃO"
                        ? "NÃO POSSUI"
                        : dependent.especPlanSaudDep?.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    border: 1,
                    borderTop: 0,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      paddingLeft: 5,
                      fontFamily: "Open Sans",
                    }}
                  >
                    Nº DO BOLETIM GERAL/DATA:{" "}
                    {dependent.parentescoDep?.toUpperCase()}
                  </Text>
                </View>
              </View>
            );
          })}

        <View style={styles.footer}>
          <Text style={{ fontSize: 10 }}>
            Av. Alm. Barroso, 527, entre Almirante Barroso e Trav.Curuzu - São
            Brás, Belém - PA, 66093-020
          </Text>
          <Text style={{ fontSize: 10 }}>
            Contatos: (91) 3210-2838 – E-mail: funsau.cadastro@gmail.com
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReqIncDepPDF;
