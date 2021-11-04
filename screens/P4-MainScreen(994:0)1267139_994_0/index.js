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
      <View style={styles.View_994_1} />
      <View style={styles.View_994_2} />
      <View style={styles.View_994_3}>
        <View style={styles.View_I994_3_171_6916} />
        <View style={styles.View_I994_3_171_9420} />
        <View style={styles.View_I994_3_171_9708} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc0e/f1c0/6aa3200b06e6738b8b6a3d9404ba44c3"
          }}
          style={styles.ImageBackground_I994_3_994_1022}
        />
        <View style={styles.View_I994_3_171_6917}>
          <View style={styles.View_I994_3_171_6918} />
          <View style={styles.View_I994_3_171_6919}>
            <Text style={styles.Text_I994_3_171_6919}>
              Good Afternoon Marie Kline
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b548/cc27/5aa4b567470691b8f4033da5e2c26d9a"
            }}
            style={styles.ImageBackground_I994_3_171_6920}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32a3/ff88/e9268896022b3e41b839caebba3f5e7a"
            }}
            style={styles.ImageBackground_I994_3_171_6921}
          />
        </View>
        <View style={styles.View_I994_3_171_6926}>
          <View style={styles.View_I994_3_171_6926_7_74}>
            <View style={styles.View_I994_3_171_6926_7_75} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4194/3b1a/a7a7c4cb79834c831c3eac3ba532ff20"
              }}
              style={styles.ImageBackground_I994_3_171_6926_7_76}
            />
          </View>
          <View style={styles.View_I994_3_171_6926_7_77}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386d/98eb/6082b0f973f4269f11940c659a52cc95"
              }}
              style={styles.ImageBackground_I994_3_171_6926_7_78}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0c4/185a/5d42a2c9e7d8bc8430b40eaf0b3f40ab"
              }}
              style={styles.ImageBackground_I994_3_171_6926_7_82}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb6f/143c/75e5973e3d3ee7b58afd8724efc48556"
              }}
              style={styles.ImageBackground_I994_3_171_6926_7_86}
            />
          </View>
          <View style={styles.View_I994_3_171_6926_7_93}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d1/3520/1db0a9cc6a1dd5cbb98303e9aaaa2604"
              }}
              style={styles.ImageBackground_I994_3_171_6926_7_94}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43a0/de04/f6da1e3668ea7b3907f134f8e3a92293"
          }}
          style={styles.ImageBackground_I994_3_171_6927}
        />
      </View>
      <View style={styles.View_994_4}>
        <View style={styles.View_994_5}>
          <View style={styles.View_994_6}>
            <View style={styles.View_994_7}>
              <Text style={styles.Text_994_7}>Plans</Text>
            </View>
          </View>
          <View style={styles.View_994_8}>
            <View style={styles.View_994_9}>
              <View style={styles.View_994_10} />
              <View style={styles.View_994_11}>
                <Text style={styles.Text_994_11}>Crisis Plan</Text>
              </View>
            </View>
            <View style={styles.View_994_12}>
              <View style={styles.View_994_13} />
              <View style={styles.View_994_14}>
                <Text style={styles.Text_994_14}>Recovery Plan</Text>
              </View>
            </View>
            <View style={styles.View_994_15}>
              <View style={styles.View_994_16} />
              <View style={styles.View_994_17}>
                <Text style={styles.Text_994_17}>All</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_994_18}>
          <View style={styles.View_994_19}>
            <View style={styles.View_994_20} />
            <View style={styles.View_994_21}>
              <Text style={styles.Text_994_21}>By: Author</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/3062/c5f12d3b8c3f844cd18310f85758f599"
              }}
              style={styles.ImageBackground_994_22}
            />
            <View style={styles.View_994_23}>
              <View style={styles.View_994_24}>
                <Text style={styles.Text_994_24}>Article name</Text>
              </View>
              <View style={styles.View_994_25}>
                <Text style={styles.Text_994_25}>
                  Lorem ipsum dolor sit amet nsectetur dipiscing elit.
                  Pellentesque lectus orci auctor vitae ante a vitae malesuada
                  magna euismod
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_994_26}>
            <View style={styles.View_994_27} />
            <View style={styles.View_994_28}>
              <Text style={styles.Text_994_28}>Crisis Plan</Text>
            </View>
            <View style={styles.View_994_29}>
              <Text style={styles.Text_994_29}>Paul Stanley</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/3062/c5f12d3b8c3f844cd18310f85758f599"
              }}
              style={styles.ImageBackground_994_30}
            />
            <View style={styles.View_994_31}>
              <View style={styles.View_994_32}>
                <Text style={styles.Text_994_32}>Action plan name</Text>
              </View>
              <View style={styles.View_994_33}>
                <Text style={styles.Text_994_33}>
                  Lorem ipsum dolor sit amet nsectetur dipiscing elit.
                  Pellentesque lectus orci auctor vitae ante ae malesuada magna
                  euismod
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_994_34}>
          <View style={styles.View_994_35}>
            <View style={styles.View_994_36} />
            <View style={styles.View_994_37}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0acc/321b/7171ff22b3274a2721762424ad449b5c"
                }}
                style={styles.ImageBackground_994_38}
              />
              <View style={styles.View_994_39}>
                <Text style={styles.Text_994_39}>2</Text>
              </View>
            </View>
            <View style={styles.View_994_40}>
              <View style={styles.View_994_41}>
                <Text style={styles.Text_994_41}>Secure Direct Messaging</Text>
              </View>
              <View style={styles.View_994_42}>
                <Text style={styles.Text_994_42}>
                  Interact with YBGRConnect Specialists
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_994_43}>
            <View style={styles.View_994_44} />
            <View style={styles.View_994_45}>
              <View style={styles.View_994_46}>
                <Text style={styles.Text_994_46}>Resources</Text>
              </View>
              <View style={styles.View_994_47}>
                <Text style={styles.Text_994_47}>
                  Helpful articles to check out
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_994_48}>
            <View style={styles.View_994_49} />
            <View style={styles.View_994_50}>
              <View style={styles.View_994_51}>
                <Text style={styles.Text_994_51}>PowerUps</Text>
              </View>
              <View style={styles.View_994_52}>
                <Text style={styles.Text_994_52}>
                  Earn YCoins by completing PowerUps
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_994_53}>
            <View style={styles.View_994_54} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3319/874a/2ce77efd2a27f5dcccd6d01e69862936"
              }}
              style={styles.ImageBackground_994_55}
            />
            <View style={styles.View_994_56}>
              <View style={styles.View_994_57}>
                <Text style={styles.Text_994_57}>Milestones</Text>
              </View>
              <View style={styles.View_994_58}>
                <Text style={styles.Text_994_58}>
                  Let us know how you are doing
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_994_90}>
          <View style={styles.View_I994_90_171_246} />
          <View style={styles.View_I994_90_171_247} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70d3/643b/9cafe3c3d1b7163cdbc4a56680042e9c"
            }}
            style={styles.ImageBackground_I994_90_171_248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4f6/1142/b2674c699b2ebabad60269882c8be0c8"
            }}
            style={styles.ImageBackground_I994_90_171_444}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5681/09c3/6b4337605af2d8564c88ec8e3b011b4e"
            }}
            style={styles.ImageBackground_I994_90_226_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6e/bd20/f5813b2dfe0e3d1f97684267b372bb87"
            }}
            style={styles.ImageBackground_I994_90_171_2062}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84eb/7156/c6083ea097448936796d9783d1dc9442"
            }}
            style={styles.ImageBackground_I994_90_171_313}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d210/0bec/7801eaf82bfc8326cf840e6d75f73e9a"
            }}
            style={styles.ImageBackground_I994_90_171_5665}
          />
        </View>
      </View>
      <View style={styles.View_994_534}>
        <View style={styles.View_994_535}>
          <View style={styles.View_994_536} />
          <View style={styles.View_994_537} />
          <View style={styles.View_994_538} />
          <View style={styles.View_994_539}>
            <View style={styles.View_994_540}>
              <Text style={styles.Text_994_540}>I need immediate help</Text>
            </View>
            <View style={styles.View_994_541}>
              <Text style={styles.Text_994_541}>I am in Crisis</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_994_542}>
          <View style={styles.View_994_543}>
            <View style={styles.View_994_544} />
            <View style={styles.View_994_545} />
          </View>
          <View style={styles.View_994_546} />
        </View>
        <View style={styles.View_994_547}>
          <View style={styles.View_994_548}>
            <View style={styles.View_994_549} />
            <View style={styles.View_994_550} />
          </View>
          <View style={styles.View_994_551} />
        </View>
      </View>
      <View style={styles.View_994_76}>
        <View style={styles.View_994_77}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e864/a1e8/202929355c0a9c890d45739fd36f8f09"
            }}
            style={styles.ImageBackground_994_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bfa/7a31/1ceff460239ae415c110e78160532797"
            }}
            style={styles.ImageBackground_994_79}
          />
          <View style={styles.View_994_80}>
            <Text style={styles.Text_994_80}>3850</Text>
          </View>
        </View>
        <View style={styles.View_994_81}>
          <Text style={styles.Text_994_81}>Recent rewards</Text>
        </View>
        <View style={styles.View_994_82}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb63/f526/604a0c78771b45ab76496e3710960d48"
            }}
            style={styles.ImageBackground_994_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbef/9e29/809020b1403a6ade2841261047a0441f"
            }}
            style={styles.ImageBackground_994_84}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d4/f331/d61883313795f298292962c3833d6d7c"
            }}
            style={styles.ImageBackground_994_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbef/9e29/809020b1403a6ade2841261047a0441f"
            }}
            style={styles.ImageBackground_994_86}
          />
          <View style={styles.View_994_87}>
            <View style={styles.View_994_88} />
            <View style={styles.View_994_89}>
              <Text style={styles.Text_994_89}>+3</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 249, 249, 1)" },
  View_2: { height: hp("122%") },
  View_994_1: {
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
  View_994_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_994_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I994_3_171_6916: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
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
  View_I994_3_171_9420: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
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
  View_I994_3_171_9708: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 237, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I994_3_994_1022: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  View_I994_3_171_6917: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  View_I994_3_171_6918: {
    width: wp("90%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I994_3_171_6919: {
    width: wp("27%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I994_3_171_6919: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I994_3_171_6920: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_I994_3_171_6921: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I994_3_171_6926: {
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
  View_I994_3_171_6926_7_74: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I994_3_171_6926_7_75: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("-76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-768%")
  },
  ImageBackground_I994_3_171_6926_7_76: {
    width: wp("58%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I994_3_171_6926_7_77: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I994_3_171_6926_7_78: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_I994_3_171_6926_7_82: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I994_3_171_6926_7_86: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I994_3_171_6926_7_93: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I994_3_171_6926_7_94: {
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
  ImageBackground_I994_3_171_6927: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("8%")
  },
  View_994_4: {
    width: wp("188%"),
    minWidth: wp("188%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%")
  },
  View_994_5: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_994_6: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_7: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_7: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_8: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_994_9: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_994_10: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(172, 185, 194, 1)"
  },
  View_994_11: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_994_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_12: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%")
  },
  View_994_13: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(172, 185, 194, 1)"
  },
  View_994_14: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_994_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_15: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_16: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 170, 63, 1)"
  },
  View_994_17: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_994_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_18: {
    width: wp("183%"),
    minWidth: wp("183%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%")
  },
  View_994_19: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("0%")
  },
  View_994_20: {
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
  View_994_21: {
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
  Text_994_21: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_994_22: {
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
  View_994_23: {
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
  View_994_24: {
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
  Text_994_24: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_25: {
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
  Text_994_25: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_26: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_27: {
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
  View_994_28: {
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
  Text_994_28: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_29: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_994_29: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_994_30: {
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
  View_994_31: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%")
  },
  View_994_32: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_32: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_33: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_994_33: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_34: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_994_35: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_36: {
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
  View_994_37: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("3%")
  },
  ImageBackground_994_38: {
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
  View_994_39: {
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
  Text_994_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_40: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_994_41: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_41: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_42: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_994_42: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_43: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_994_44: {
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
  View_994_45: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_994_46: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_46: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_47: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_994_47: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_48: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  View_994_49: {
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
  View_994_50: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_994_51: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_51: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_52: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_994_52: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_53: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  View_994_54: {
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
  ImageBackground_994_55: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_994_56: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_994_57: {
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
  Text_994_57: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_58: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_994_58: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_90: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I994_90_171_246: {
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
  View_I994_90_171_247: {
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
  ImageBackground_I994_90_171_248: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_I994_90_171_444: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("3%")
  },
  ImageBackground_I994_90_226_124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%")
  },
  ImageBackground_I994_90_171_2062: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_I994_90_171_313: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%")
  },
  ImageBackground_I994_90_171_5665: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  View_994_534: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%")
  },
  View_994_535: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_536: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_537: {
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
  View_994_538: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_539: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%")
  },
  View_994_540: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_994_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_541: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_994_541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_542: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("5%")
  },
  View_994_543: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_994_544: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-3%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_545: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("-5%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_546: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 90, 82, 1)"
  },
  View_994_547: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("5%")
  },
  View_994_548: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_994_549: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-3%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_550: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_994_551: {
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
  },
  View_994_76: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%")
  },
  View_994_77: {
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
  ImageBackground_994_78: {
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
  ImageBackground_994_79: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_994_80: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_994_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_81: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_994_81: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_994_82: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("4%")
  },
  ImageBackground_994_83: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_994_84: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_994_85: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_994_86: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  View_994_87: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_994_88: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(236, 236, 236, 1)",
    borderWidth: 1
  },
  View_994_89: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_994_89: {
    color: "rgba(39, 79, 102, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
