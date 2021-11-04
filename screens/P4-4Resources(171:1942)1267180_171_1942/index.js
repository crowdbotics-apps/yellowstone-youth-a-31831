import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_171_1973} />
      <View style={styles.View_171_2016}>
        <View style={styles.View_171_2017}>
          <Text style={styles.Text_171_2017}>Resources</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab2b/b6a6/6edbbcbbc6d556c2e77b7967d5639b25"
          }}
          style={styles.ImageBackground_171_2018}
        />
      </View>
      <View style={styles.View_171_1949}>
        <View style={styles.View_171_1950} />
        <View style={styles.View_171_1951}>
          <Text style={styles.Text_171_1951}>By: Author</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/3062/c5f12d3b8c3f844cd18310f85758f599"
          }}
          style={styles.ImageBackground_171_1952}
        />
        <View style={styles.View_171_1953}>
          <View style={styles.View_171_1954}>
            <Text style={styles.Text_171_1954}>Article name</Text>
          </View>
          <View style={styles.View_171_1955}>
            <Text style={styles.Text_171_1955}>
              Lorem ipsum dolor sit amet nsectetur dipiscing elit. Pellentesque
              lectus orci auctor vitae ante a vitae malesuada magna euismod
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_171_1956}>
        <View style={styles.View_171_1957} />
        <View style={styles.View_171_1958}>
          <Text style={styles.Text_171_1958}>By: Author</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/3062/c5f12d3b8c3f844cd18310f85758f599"
          }}
          style={styles.ImageBackground_171_1959}
        />
        <View style={styles.View_171_1960}>
          <View style={styles.View_171_1961}>
            <Text style={styles.Text_171_1961}>Article name</Text>
          </View>
          <View style={styles.View_171_1962}>
            <Text style={styles.Text_171_1962}>
              Lorem ipsum dolor sit amet nsectetur dipiscing elit. Pellentesque
              lectus orci auctor vitae ante ae malesuada magna euismod
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_171_2130}>
        <View style={styles.View_171_1963}>
          <View style={styles.View_171_1964} />
          <View style={styles.View_171_1965}>
            <View style={styles.View_171_1966}>
              <Text style={styles.Text_171_1966}>Resource name</Text>
            </View>
            <View style={styles.View_171_1967}>
              <Text style={styles.Text_171_1967}>
                www.resourcelocation.gov/eje/ems
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_171_1968}>
          <View style={styles.View_171_1969} />
          <View style={styles.View_171_1970}>
            <View style={styles.View_171_1971}>
              <Text style={styles.Text_171_1971}>Resource name</Text>
            </View>
            <View style={styles.View_171_1972}>
              <Text style={styles.Text_171_1972}>
                www.resourcelocation.gov/eje/ems
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_199_1365}>
          <View style={styles.View_171_1981}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca4/cd64/02068d0023e460e85be48f94fcd68836"
              }}
              style={styles.ImageBackground_171_1982}
            />
            <View style={styles.View_171_1983}>
              <View style={styles.View_171_1984}>
                <Text style={styles.Text_171_1984}>Resource name</Text>
              </View>
              <View style={styles.View_171_1985}>
                <Text style={styles.Text_171_1985}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_171_1986}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aa5/07c4/cc06b67d3685b22c60fc03de60f6d2cd"
              }}
              style={styles.ImageBackground_171_1987}
            />
            <View style={styles.View_171_1988}>
              <View style={styles.View_171_1989}>
                <Text style={styles.Text_171_1989}>Resource name</Text>
              </View>
              <View style={styles.View_171_1990}>
                <Text style={styles.Text_171_1990}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_199_1364}>
          <View style={styles.View_171_1991}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bee/12a6/291a3b2960302c3980f414d2e0022c52"
              }}
              style={styles.ImageBackground_171_1992}
            />
            <View style={styles.View_171_1993}>
              <View style={styles.View_171_1994}>
                <Text style={styles.Text_171_1994}>Resource name</Text>
              </View>
              <View style={styles.View_171_1995}>
                <Text style={styles.Text_171_1995}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_171_1996}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f163/4ae8/daca293d6c73cd7f627511a6496a9682"
              }}
              style={styles.ImageBackground_171_1997}
            />
            <View style={styles.View_171_1998}>
              <View style={styles.View_171_1999}>
                <Text style={styles.Text_171_1999}>Resource name</Text>
              </View>
              <View style={styles.View_171_2000}>
                <Text style={styles.Text_171_2000}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_171_7657}>
          <View style={styles.View_171_2001}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ea/8d04/7a141d5d605957a449e4494a746fda61"
              }}
              style={styles.ImageBackground_171_2002}
            />
            <View style={styles.View_171_2003}>
              <View style={styles.View_171_2004}>
                <Text style={styles.Text_171_2004}>Resource name</Text>
              </View>
              <View style={styles.View_171_2005}>
                <Text style={styles.Text_171_2005}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_171_2006}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ccb/53a3/152bce98dad391569b83127fd00a782e"
              }}
              style={styles.ImageBackground_171_2007}
            />
            <View style={styles.View_171_2008}>
              <View style={styles.View_171_2009}>
                <Text style={styles.Text_171_2009}>Resource name</Text>
              </View>
              <View style={styles.View_171_2010}>
                <Text style={styles.Text_171_2010}>Lorem ipsum dolor sit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_171_2011}>
          <View style={styles.View_171_2012}>
            <Text style={styles.Text_171_2012}>All resources</Text>
          </View>
          <View style={styles.View_171_2013}>
            <View style={styles.View_171_2014}>
              <Text style={styles.Text_171_2014}>Filter by</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ff9/5ddd/a291143ee3b2c095d78e765a63e9a333"
              }}
              style={styles.ImageBackground_171_2015}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_171_2026}>
        <View style={styles.View_171_2027}>
          <Text style={styles.Text_171_2027}>Page 1 of 6</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ff/bf13/82ce70349cad2225041965ac6f2410ad"
          }}
          style={styles.ImageBackground_171_2028}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6451/0455/26c0e09baafc5195f36f3d15ee6a2771"
          }}
          style={styles.ImageBackground_171_2029}
        />
      </View>
      <View style={styles.View_171_2079}>
        <View style={styles.View_I171_2079_171_246} />
        <View style={styles.View_I171_2079_171_247} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9b/cecb/f2eb9dded9fc53e17ac8d14ae91c7f44"
          }}
          style={styles.ImageBackground_I171_2079_171_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f6/1142/b2674c699b2ebabad60269882c8be0c8"
          }}
          style={styles.ImageBackground_I171_2079_171_444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5681/09c3/6b4337605af2d8564c88ec8e3b011b4e"
          }}
          style={styles.ImageBackground_I171_2079_226_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6472/b91e/c0920a55cf2bbebc7bc75efe88793245"
          }}
          style={styles.ImageBackground_I171_2079_171_2062}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84eb/7156/c6083ea097448936796d9783d1dc9442"
          }}
          style={styles.ImageBackground_I171_2079_171_313}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d210/0bec/7801eaf82bfc8326cf840e6d75f73e9a"
          }}
          style={styles.ImageBackground_I171_2079_171_5665}
        />
      </View>
      <View style={styles.View_171_7391}>
        <View style={styles.View_I171_7391_171_8219} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/f1c0/6aa3200b06e6738b8b6a3d9404ba44c3"
          }}
          style={styles.ImageBackground_I171_7391_1081_2473}
        />
        <View style={styles.View_I171_7391_171_6879}>
          <View style={styles.View_I171_7391_171_6879_7_74}>
            <View style={styles.View_I171_7391_171_6879_7_75} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4194/3b1a/a7a7c4cb79834c831c3eac3ba532ff20"
              }}
              style={styles.ImageBackground_I171_7391_171_6879_7_76}
            />
          </View>
          <View style={styles.View_I171_7391_171_6879_7_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
              }}
              style={styles.ImageBackground_I171_7391_171_6879_7_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
              }}
              style={styles.ImageBackground_I171_7391_171_6879_7_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
              }}
              style={styles.ImageBackground_I171_7391_171_6879_7_86}
            />
          </View>
          <View style={styles.View_I171_7391_171_6879_7_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d1/3520/1db0a9cc6a1dd5cbb98303e9aaaa2604"
              }}
              style={styles.ImageBackground_I171_7391_171_6879_7_94}
            />
          </View>
        </View>
        <View style={styles.View_I171_7391_171_6880}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf0e/5d22/7cbbdc06f96f6798d89317b0e3b5a551"
            }}
            style={styles.ImageBackground_I171_7391_171_6886}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 249, 249, 1)" },
  View_2: { height: hp("163%") },
  View_171_1973: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_171_2016: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%")
  },
  View_171_2017: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2017: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_2018: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_171_1949: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("27%")
  },
  View_171_1950: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_171_1951: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_171_1951: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_1952: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_171_1953: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("1%")
  },
  View_171_1954: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1954: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1955: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1955: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1956: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%")
  },
  View_171_1957: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_171_1958: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_171_1958: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_1959: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_171_1960: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%")
  },
  View_171_1961: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1961: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1962: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1962: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2130: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%")
  },
  View_171_1963: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%")
  },
  View_171_1964: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_171_1965: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_171_1966: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1966: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1967: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1967: {
    color: "rgba(14, 130, 200, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1968: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86%")
  },
  View_171_1969: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_171_1970: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_171_1971: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1971: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1972: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1972: {
    color: "rgba(14, 130, 200, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_1365: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_171_1981: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_171_1982: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_171_1983: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_1984: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1984: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1985: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1985: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1986: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  ImageBackground_171_1987: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_171_1988: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_1989: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1989: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1990: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1990: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_199_1364: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_171_1991: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_171_1992: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_171_1993: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_1994: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1994: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1995: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_1995: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_1996: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  ImageBackground_171_1997: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_171_1998: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_1999: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_1999: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2000: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_2000: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_7657: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%")
  },
  View_171_2001: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_171_2002: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_171_2003: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_2004: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2004: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2005: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_2005: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2006: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  ImageBackground_171_2007: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_171_2008: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_171_2009: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2009: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2010: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_171_2010: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2011: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_171_2012: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2012: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_2013: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  View_171_2014: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2014: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_2015: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%")
  },
  View_171_2026: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("143%")
  },
  View_171_2027: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_171_2027: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_2028: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("1%")
  },
  ImageBackground_171_2029: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_171_2079: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("154%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_2079_171_246: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_I171_2079_171_247: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 236, 236, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_I171_2079_171_248: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_I171_2079_171_444: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("3%")
  },
  ImageBackground_I171_2079_226_124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%")
  },
  ImageBackground_I171_2079_171_2062: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_I171_2079_171_313: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%")
  },
  ImageBackground_I171_2079_171_5665: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  View_171_7391: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_7391_171_8219: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I171_7391_1081_2473: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_I171_7391_171_6879: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_7391_171_6879_7_74: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I171_7391_171_6879_7_75: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("-76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3171%")
  },
  ImageBackground_I171_7391_171_6879_7_76: {
    width: wp("58%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I171_7391_171_6879_7_77: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I171_7391_171_6879_7_78: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_I171_7391_171_6879_7_82: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I171_7391_171_6879_7_86: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I171_7391_171_6879_7_93: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I171_7391_171_6879_7_94: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I171_7391_171_6880: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%")
  },
  ImageBackground_I171_7391_171_6886: {
    width: wp("40%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
