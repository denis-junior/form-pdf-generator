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
    bottom: 95,
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
    bottom: 60,
    left: 0,
    right: 0,
    // color: "grey",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    textAlign: "left",
  },
});

const ReqDependEcon = ({ data }) => {
  return (
    <Document>
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
          <Text style={styles.title1}>REQUERIMENTOS DIVERSOS</Text>
          <Text style={styles.title2}>
            DESTINADO À(AO) PROCURADOR(A) OU CURADOR(A)
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
              {data?.nomeProc || "Não Informado"}
            </Text>
            , Carteira de Identidade nº{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.rgProc || "Não Informado"}
            </Text>
            , CPF nº:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.cpfProc || "Não Informado"}
            </Text>
            , telefone{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.telProc || "Não Informado"}
            </Text>
            , neste ato representando como: ( ) PROCURADOR(A) OU ( ) CURADOR(A),
            do(a) militar estadual,{" "}
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
              {data?.endMil || "Não Informado"}
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
            ; telefone móvel:{" "}
            <Text style={{ fontWeight: "700" }}>
              {data?.telMovMil || "Não Informado"}
            </Text>
            <Text style={{ fontWeight: "700", textDecoration: "underline" }}>
              {" "}
              DECLARO:
            </Text>
            para os devidos fins que o (a)
            <Text style={{ fontWeight: "700", textDecoration: "underline" }}>
              {" "}
              DEPENDENTE:
            </Text>{" "}
            {data?.dependent?.nomeDep ||
              "Não Informado"}
            , grau de parentesco: {data?.dependent?.grauParentDep || "Não Informado"}, Data
            de Nascimento: {data?.dependent?.datNascDep || "Não Informado"};
            Idade: {data?.dependent?.idadeDep || "Não Informado"}; RG Nº{" "}
            {data?.dependent?.rgDep || "Não Informado"}; CPF nº{" "}
            {data?.dependent?.cpfDep || "Não Informado"}; Estado Civil:{" "}
            {data?.dependent?.estCivDep || "Não Informado"};{" "}
            <Text style={{ fontWeight: "700", textDecoration: "underline" }}>
              {" "}
              NÃO RECEBE RENDIMENTOS
            </Text>
            , seja formal ou informal ou de qualquer outra fonte, inclusive
            pensão alimentícia, ajuda de custo e proventos de aposentadoria,
            condição comprovada mediante apresentação das{" "}
            <Text style={{ fontWeight: "700", textDecoration: "underline" }}>
              {" "}
              CERTIDÕES NEGATIVAS
            </Text>{" "}
            relacionadas abaixo, bem como obrigatória, para fins de{" "}
            <Text style={{ fontWeight: "700", textDecoration: "underline" }}>
              {" "}
              INCLUSÃO DO(S) DOS DEPENDENT?ES
            </Text>
            , elencados no art. 4º, § 1º, incisos I, II e III da LC nº 142, de
            21/12/202, que trata do Sistema de Proteção dos Militares Estaduais,
            alterada pela LC nº 149, de 20/05/2022.
          </Text>
          <View>
            <Text style={styles.defaultText}>
              {"( ) "}Consta/Nada consta do Instituto Nacional de Seguridade
              Social – INSS;
            </Text>
          </View>
          <View>
            <Text style={styles.defaultText}>
              {"( ) "}Consta/Nada consta do Instituto de Gestão Previdenciária e
              Proteção Social do Estado do Pará – IGPPS;
            </Text>
          </View>
          <View>
            <Text style={styles.defaultText}>
              {"( ) "}Consta/Nada Consta da Prefeitura local de residência e/ou
              onde o dependent?e por ventura tenha tido vinculo empregatício.
            </Text>
          </View>
          <View>
            <Text style={{ ...styles.defaultText, textIndent: 50 }}>
              Outrossim, declaro ainda que os dados acima apresentados são
              verdadeiros e estou ciente de que a omissão de informações ou a
              apresentação de dados ou documentos falsos e/ou divergentes
              implicam no imediato cancelamento da inclusão do(s)
              dependent?e(s), ressarcimento ao erário, além de medidas judiciais
              cabíveis, com base no Código Penal Brasileiro .
            </Text>
          </View>
        </View>

        <View>
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
          <Text style={{ fontSize: 7 }}>
          Art. 171. Obter, para si ou para outrem, vantagem ilícita, em prejuízo alheio, induzindo ou manter alguém em erro, mediante artifício, ardil ou qualquer outro meio fraudulento. (Estelionato).
          </Text>
          <Text style={{ fontSize: 7 }}>Art. 299. Omitir, em documento público ou particular, declaração que devia constar, ou nele inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita, com o fim de prejudicar direito, criar, obrigação ou alterar a verdade sobre fato juridicamente relevante. (Falsidade Ideológica).</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 7 }}>
            Av. Alm. Barroso, 527, entre Almirante Barroso e Trav.Curuzu - São
            Brás, Belém - PA, 66093-020
          </Text>
          <Text style={{ fontSize: 7 }}>
            Contatos: (91) 3210-2838 – E-mail: funsau.cadastro@gmail.com
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReqDependEcon;
