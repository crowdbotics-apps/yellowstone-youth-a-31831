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
      <View style={styles.View_84_4356} />
      <View style={styles.View_171_282}>
        <View style={styles.View_I171_282_171_246} />
        <View style={styles.View_I171_282_171_247} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9b/cecb/f2eb9dded9fc53e17ac8d14ae91c7f44"
          }}
          style={styles.ImageBackground_I171_282_171_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f6/1142/b2674c699b2ebabad60269882c8be0c8"
          }}
          style={styles.ImageBackground_I171_282_171_444}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5681/09c3/6b4337605af2d8564c88ec8e3b011b4e"
          }}
          style={styles.ImageBackground_I171_282_226_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6e/bd20/f5813b2dfe0e3d1f97684267b372bb87"
          }}
          style={styles.ImageBackground_I171_282_171_2062}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f1/4ad6/0ef23b65523e76d022760898792976de"
          }}
          style={styles.ImageBackground_I171_282_171_313}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d210/0bec/7801eaf82bfc8326cf840e6d75f73e9a"
          }}
          style={styles.ImageBackground_I171_282_171_5665}
        />
      </View>
      <View style={styles.View_84_4412}>
        <View style={styles.View_84_4413}>
          <Text style={styles.Text_84_4413}>Direct Messaging</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab2b/b6a6/6edbbcbbc6d556c2e77b7967d5639b25"
          }}
          style={styles.ImageBackground_84_4414}
        />
      </View>
      <View style={styles.View_171_3160}>
        <View style={styles.View_84_4450}>
          <View style={styles.View_94_814}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c405/a54b/b45f4260ee277e363c605e5a48c66e46"
              }}
              style={styles.ImageBackground_84_4446}
            />
            <View style={styles.View_94_841}>
              <View style={styles.View_94_848}>
                <View style={styles.View_94_842}>
                  <Text style={styles.Text_94_842}>Paul Stanley</Text>
                </View>
                <View style={styles.View_94_843}>
                  <Text style={styles.Text_94_843}>
                    Great have a nice day orem ipsum dolor sit amet ens...
                  </Text>
                </View>
                <View style={styles.View_94_847}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0acc/321b/7171ff22b3274a2721762424ad449b5c"
                    }}
                    style={styles.ImageBackground_94_845}
                  />
                  <View style={styles.View_94_846}>
                    <Text style={styles.Text_94_846}>1</Text>
                  </View>
                </View>
                <View style={styles.View_94_844}>
                  <Text style={styles.Text_94_844}>12:30 pm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_94_1191}>
          <View style={styles.View_94_1192}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d5/b51b/9f2187c26487b8a69a73a4207dcd3744"
              }}
              style={styles.ImageBackground_94_1193}
            />
            <View style={styles.View_94_1194}>
              <View style={styles.View_94_1195}>
                <View style={styles.View_94_1196}>
                  <Text style={styles.Text_94_1196}>Gene Simmons</Text>
                </View>
                <View style={styles.View_94_1197}>
                  <Text style={styles.Text_94_1197}>Great have a nice day</Text>
                </View>
                <View style={styles.View_94_1198}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0acc/321b/7171ff22b3274a2721762424ad449b5c"
                    }}
                    style={styles.ImageBackground_94_1199}
                  />
                  <View style={styles.View_94_1200}>
                    <Text style={styles.Text_94_1200}>1</Text>
                  </View>
                </View>
                <View style={styles.View_94_1201}>
                  <Text style={styles.Text_94_1201}>Wend, 10:30 am</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_94_1202}>
          <View style={styles.View_94_1203}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ce6/b1a3/a2506b7899b322d01afb5f5c0176f435"
              }}
              style={styles.ImageBackground_94_1204}
            />
            <View style={styles.View_94_1205}>
              <View style={styles.View_94_1206}>
                <View style={styles.View_94_1207}>
                  <Text style={styles.Text_94_1207}>Ace Frehley</Text>
                </View>
                <View style={styles.View_94_1208}>
                  <Text style={styles.Text_94_1208}>
                    Great have a nice day orem ipsum dolor sit amet ens...
                  </Text>
                </View>
                <View style={styles.View_94_1212}>
                  <Text style={styles.Text_94_1212}>12:30 pm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_94_1213}>
          <View style={styles.View_94_1214}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2f0/2df9/4785ff81d53b0e6ad4813cc79e5da0f8"
              }}
              style={styles.ImageBackground_94_1215}
            />
            <View style={styles.View_94_1216}>
              <View style={styles.View_94_1217}>
                <View style={styles.View_94_1218}>
                  <Text style={styles.Text_94_1218}>Peter Criss</Text>
                </View>
                <View style={styles.View_94_1219}>
                  <Text style={styles.Text_94_1219}>
                    Great have a nice day orem ipsum dolor sit amet ens...
                  </Text>
                </View>
                <View style={styles.View_94_1223}>
                  <Text style={styles.Text_94_1223}>12:30 pm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_226_90}>
        <View style={styles.View_226_91}>
          <View style={styles.View_226_92} />
          <View style={styles.View_226_94}>
            <Text style={styles.Text_226_94}>Start a new chat</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9138/2e13/0b6ce0bcfe6b3aa66a1c2162ca3aa736"
            }}
            style={styles.ImageBackground_226_93}
          />
        </View>
      </View>
      <View style={styles.View_226_884}>
        <View style={styles.View_226_95} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/088e/42de/59752957ca01735f993046cc9978e165"
          }}
          style={styles.ImageBackground_226_101}
        />
        <View style={styles.View_226_96}>
          <Text style={styles.Text_226_96}>Search recent contacts</Text>
        </View>
      </View>
      <View style={styles.View_171_7277}>
        <View style={styles.View_I171_7277_171_8219} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/f1c0/6aa3200b06e6738b8b6a3d9404ba44c3"
          }}
          style={styles.ImageBackground_I171_7277_1081_2473}
        />
        <View style={styles.View_I171_7277_171_6879}>
          <View style={styles.View_I171_7277_171_6879_7_74}>
            <View style={styles.View_I171_7277_171_6879_7_75} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4194/3b1a/a7a7c4cb79834c831c3eac3ba532ff20"
              }}
              style={styles.ImageBackground_I171_7277_171_6879_7_76}
            />
          </View>
          <View style={styles.View_I171_7277_171_6879_7_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
              }}
              style={styles.ImageBackground_I171_7277_171_6879_7_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
              }}
              style={styles.ImageBackground_I171_7277_171_6879_7_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
              }}
              style={styles.ImageBackground_I171_7277_171_6879_7_86}
            />
          </View>
          <View style={styles.View_I171_7277_171_6879_7_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d1/3520/1db0a9cc6a1dd5cbb98303e9aaaa2604"
              }}
              style={styles.ImageBackground_I171_7277_171_6879_7_94}
            />
          </View>
        </View>
        <View style={styles.View_I171_7277_171_6880}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911d/19c7/56b7ec48f6d5169d6ad54fbf6ae283ff"
            }}
            style={styles.ImageBackground_I171_7277_171_6886}
          />
        </View>
      </View>
      <View style={styles.View_226_76}>
        <View style={styles.View_226_72} />
        <View style={styles.View_226_73} />
        <View style={styles.View_226_74}>
          <Text style={styles.Text_226_74}>Recent contacts</Text>
        </View>
      </View>
      <View style={styles.View_994_3547}>
        <View style={styles.View_994_3548}>
          <View style={styles.View_994_3549}>
            <View style={styles.View_994_3550} />
            <View style={styles.View_994_3551} />
            <View style={styles.View_994_3552} />
          </View>
          <View style={styles.View_994_3553}>
            <View style={styles.View_994_3554}>
              <View style={styles.View_994_3555} />
              <View style={styles.View_994_3556} />
            </View>
            <View style={styles.View_994_3557} />
          </View>
          <View style={styles.View_994_3558}>
            <View style={styles.View_994_3559}>
              <View style={styles.View_994_3560} />
              <View style={styles.View_994_3561} />
            </View>
            <View style={styles.View_994_3562} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 249, 249, 1)" },
  View_2: { height: hp("122%") },
  View_84_4356: {
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
  View_171_282: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_282_171_246: {
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
  View_I171_282_171_247: {
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
  ImageBackground_I171_282_171_248: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_I171_282_171_444: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("3%")
  },
  ImageBackground_I171_282_226_124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%")
  },
  ImageBackground_I171_282_171_2062: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_I171_282_171_313: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%")
  },
  ImageBackground_I171_282_171_5665: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  View_84_4412: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%")
  },
  View_84_4413: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_84_4413: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_84_4414: {
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
  View_171_3160: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%")
  },
  View_84_4450: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_814: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_84_4446: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_841: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_848: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_842: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_842: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_843: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_94_843: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_847: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_94_845: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_846: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_94_846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_844: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_844: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1191: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_94_1192: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_94_1193: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_1194: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_1195: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_1196: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_1196: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1197: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_94_1197: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1198: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_94_1199: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_1200: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_94_1200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1201: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_1201: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1202: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_94_1203: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_94_1204: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_1205: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  View_94_1206: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_1207: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_1207: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1208: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_94_1208: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1212: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_1212: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1213: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_94_1214: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_94_1215: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_94_1216: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%")
  },
  View_94_1217: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_94_1218: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_94_1218: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1219: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_94_1219: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_1223: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_94_1223: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_226_90: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("93%")
  },
  View_226_91: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_226_92: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 79, 102, 1)"
  },
  View_226_94: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_226_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_226_93: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_226_884: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%")
  },
  View_226_95: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_226_101: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_226_96: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_226_96: {
    color: "rgba(172, 185, 194, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_7277: {
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
  View_I171_7277_171_8219: {
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
  ImageBackground_I171_7277_1081_2473: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_I171_7277_171_6879: {
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
  View_I171_7277_171_6879_7_74: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I171_7277_171_6879_7_75: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("-76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-987%")
  },
  ImageBackground_I171_7277_171_6879_7_76: {
    width: wp("58%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I171_7277_171_6879_7_77: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I171_7277_171_6879_7_78: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_I171_7277_171_6879_7_82: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I171_7277_171_6879_7_86: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I171_7277_171_6879_7_93: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I171_7277_171_6879_7_94: {
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
  View_I171_7277_171_6880: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%")
  },
  ImageBackground_I171_7277_171_6886: {
    width: wp("40%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_226_76: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%")
  },
  View_226_72: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(233, 233, 233, 1)"
  },
  View_226_73: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_226_74: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_226_74: {
    color: "rgba(172, 185, 194, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_3547: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%")
  },
  View_994_3548: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_3549: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_3550: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_3551: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    backgroundColor: "rgba(234, 125, 118, 1)"
  },
  View_994_3552: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_3553: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%")
  },
  View_994_3554: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_994_3555: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7%"),
    top: hp("-4%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_3556: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10%"),
    top: hp("-6%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_3557: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_3558: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%")
  },
  View_994_3559: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_994_3560: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-4%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_3561: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_3562: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
