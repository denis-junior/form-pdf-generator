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
import { brasaoFunsauBase64, brasaoPMBase64 } from "../../../utils/images";

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
    margin: 5,
    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  headerImg: {
    width: ".35cm",
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
    flexDirection: "column",
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
  defaultBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 3,
    paddingHorizontal: 2,
    marginTop: 3,
    paddingBottom: 1,
    borderBottom: 1,
    // backgroundColor: "red",
    flexWrap: "wrap",
  },
  defaultFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 1.5,
    paddingHorizontal: 2,
    marginTop: 1,
    paddingBottom: 0,
    // borderBottom: 1,
    // backgroundColor: "red",
    flexWrap: "wrap",
    fontFamily: "Open Sans",
    fontWeight: "600",
    textAlign: "center",
  },
  defaultBlockStamp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 3,
    // paddingHorizontal: 2,
    // marginTop: 3,
    // paddingBottom: 1,
    borderBottom: 1,
    flexWrap: "wrap",
    height: ".7cm",
    // backgroundColor: "red",
  },
});

const CarteirinhaPdf = ({data}) => {
  return (
    <Document>
      <Page>
        <View
          style={{
            border: 1,
            width: "3cm",
            margin: 100,
            marginBottom: 10,
            height: "4.7cm",
          }}
        >
          {/* header */}
          <View style={styles.header}>
            <Image style={styles.headerImg} src={brasaoFunsauBase64} />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 3 }}>GOVERNO DO ESTADO DO PARÁ</Text>
              <Text style={{ fontSize: 3 }}>POLÍCIA MILITAR DO PARÁ</Text>
              <Text style={{ fontSize: 3 }}>FUNDO DE SAÚDE</Text>
            </View>

            <Image style={styles.headerImg} src={brasaoPMBase64} />
          </View>
          {/* title */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: 1,
              paddingBottom: 3,
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            <Text style={{ fontSize: 3, marginTop: -2 }}>
              CARTÃO DO DEPENDENTE
            </Text>
          </View>
          {/* subTitle */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 3,
              paddingHorizontal: 2,
              marginTop: 3,
              paddingBottom: 1,
              borderBottom: 1,
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            <Text style={{ width: "70%" }}>IDENTIFICAÇÃO DO MILITAR:</Text>
            <Text style={{ width: "20%" }}>( ) PM</Text>
            <Text style={{ width: "20%" }}>( ) BM</Text>
          </View>
          {/* Name */}
          <View style={styles.defaultBlock}>
            <Text>NOME: {data.nomeMil}</Text>
          </View>
          {/* Graduation */}
          <View style={styles.defaultBlock}>
            <Text>POSTO/GRADUAÇÃO: {data.postMil}</Text>
          </View>
          {/* Identity */}
          <View style={styles.defaultBlock}>
            <Text>IDENTIDADE: {data.rgMil}</Text>
          </View>
          {/* Matric. */}
          <View style={styles.defaultBlock}>
            <Text>MATRÍCULA: {data.matMil}</Text>
          </View>
          {/* TITLE DEP. */}
          <View style={styles.defaultBlock}>
            <Text>IDENTIFICAÇÃO DO DEPENDENTE</Text>
          </View>
          {/* TITLE DEP. */}
          <View style={styles.defaultBlock}>
            <Text>NOME: {data.nomeDep}</Text>
          </View>
          {/* RG. */}
          <View style={styles.defaultBlock}>
            <Text>RG/CPF: 8214775</Text>
          </View>
          {/* RG. */}
          <View style={styles.defaultBlock}>
            <Text>DATA DE NASCIMENTO: {data.dataNascDep}</Text>
          </View>
          {/* RG. */}
          <View style={styles.defaultBlock}>
            <Text>VÍNCULO: {data.vincDep}</Text>
          </View>
          {/* RG. */}
          <View style={styles.defaultBlock}>
            <Text>DATA DE INCLUSÃO: {data.datIncDep}</Text>
          </View>
          {/* RG. */}
          <View style={styles.defaultFooter}>
            <Text>
              A APRESENTAÇÃO DESTE CARTÃO É OBRIGATÓRIO, JUNTO COM O DOCUMENTO
              DE IDENTIFICAÇÃO, CONFORME OS PARÂMETROS LEGAIS.
            </Text>
          </View>
        </View>
        <View
          style={{
            border: 1,
            width: "3cm",
            margin: 100,
            marginTop: 0,
            height: "4.7cm",
          }}
        >
          {/* header */}
          <View
            style={{
              marginLeft: 1.5,
              fontFamily: "Open Sans",
              fontWeight: "600",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 3 }}>NOME DO DEPENDENTE:</Text>
          </View>
          {/* title */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: 1,
              paddingBottom: 3,
              fontFamily: "Open Sans",
              fontWeight: "600",
            }}
          >
            <Text style={{ fontSize: 3, marginTop: -2 }}>
              JOAO VITOR FARO DA SILVA JUNIOR
            </Text>
          </View>
          {/* subTitle */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 3,
              paddingHorizontal: 2,
              // marginTop: 3,
              // paddingBottom: 1,
              borderBottom: 1,
              fontFamily: "Open Sans",
              fontWeight: "600",
              // backgroundColor: "yellow",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "50%",
                borderRight: 1,
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            >
              <Text style={{ textAlign: "center" }}>VALIDADE</Text>
            </View>

            <View style={{ width: "50%", paddingBottom: 1 }}>
              <Text style={{ textAlign: "center" }}>ASSINATURA/CARIMBO</Text>
            </View>
          </View>
          {/* Carimbos */}
          <View style={styles.defaultBlockStamp}>
            <View
              style={{
                width: "50%",
                borderRight: 1,
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
            <View
              style={{
                width: "50%",
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
          </View>
          <View style={styles.defaultBlockStamp}>
            <View
              style={{
                width: "50%",
                borderRight: 1,
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
            <View
              style={{
                width: "50%",
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
          </View>
          <View style={styles.defaultBlockStamp}>
            <View
              style={{
                width: "50%",
                borderRight: 1,
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
            <View
              style={{
                width: "50%",
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
          </View>
          <View style={styles.defaultBlockStamp}>
            <View
              style={{
                width: "50%",
                borderRight: 1,
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
            <View
              style={{
                width: "50%",
                height: "100%",
                // backgroundColor: "red",
                paddingBottom: 1,
              }}
            />
          </View>

          <View
            style={{
              ...styles.defaultFooter,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text>
              A APRESENTAÇÃO DESTE CARTÃO É OBRIGATÓRIO, JUNTO COM O DOCUMENTO
              DE IDENTIFICAÇÃO, CONFORME OS PARÂMETROS LEGAIS.
            </Text>
          </View>
          <View
            style={{
              ...styles.defaultFooter,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderTop: 1,
              paddingTop: 1,
              paddingBottom: 10,
              fontSize: 3,
            }}
          >
            <Text>ASSINATURA OBRIGATÓRIO DO MILITAR</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CarteirinhaPdf;
