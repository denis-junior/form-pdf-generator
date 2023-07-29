import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

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
  pageNumber: {
    position: "absolute",
    fontSize: 9,
    bottom: 20,
    left: 0,
    right: 20,
    textAlign: "right",
    color: "black",
  },
  signed: {
    position: "absolute",
    fontSize: 9,
    bottom: 35,
    left: 20,
    right: 0,
    textAlign: "left",
    color: "black",
  },
  firstBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "red",
  },
  secondBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
  },
  thirdBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
  },
  table: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
  },
  tableData: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "yellow",
  },
  boxChild: {
    width: "33.33%",
    // backgroundColor: "pink",
  },
  secondBoxChild: {
    width: "33.33%",
    // backgroundColor: "orange",
  },
  pickingList: {
    textAlign: "center",
    fontSize: 12,
    height: 15,
    // backgroundColor: "purple",
    // fontFamily: "Open Sans",
    // fontWeight: "700"
  },
  famOpProd: {
    height: 15,
    fontSize: 9,
    // backgroundColor: "purple"
  },
  codBar: {
    textAlign: "center",
    fontSize: 8,
  },
  secondLineBoxChild: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 25,
    // backgroundColor: "red",
    paddingHorizontal: 7,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    // padding: "3px 0 10px 6px",
  },
  childSecondLine: {
    width: "33.33%",
    fontSize: 9,
  },
});

const DecDependEconPdf = () =>

  // { data }
  {
    // const generateBarcode = (value) => {
    //   const canvas = createCanvas();
    //   JsBarcode(canvas, value, {width: 7, height: 200, fontSize: 60});
    //   return canvas.toDataURL();
    // };

    return (
      <Document title="num OP">
        <Page style={styles.body} size={"A4"} orientation="portrait">
          <Text>
            Writing Something
          </Text>
        </Page>
      </Document>
      // <Document>
      //   <Text>oi</Text>
      // </Document>
    );
  };

export default  DecDependEconPdf ;
