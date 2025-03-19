import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import GradientBackgroundSkia from "react-native-gradient-background-skia";
import { Canvas } from "@shopify/react-native-skia";

export default function GradientScreen() {
  return (
    <View style={styles.container}>
      <GradientBackgroundSkia
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#FFFFFF", "#6DD5FA", "#2980B9"]}
        style={styles.fullGradientBackground}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Basic horizontal gradient */}
          <GradientBackgroundSkia
            colors={["#FF6B6B", "#4ECDC4"]}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Horizontal Gradient</Text>
            </View>
          </GradientBackgroundSkia>

          {/* Vertical gradient */}
          <GradientBackgroundSkia
            colors={["#A8E6CF", "#FFD3B6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Vertical Gradient</Text>
            </View>
          </GradientBackgroundSkia>

          {/* Diagonal gradient */}
          <GradientBackgroundSkia
            colors={["#FF9A9E", "#FAD0C4"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Diagonal Gradient</Text>
            </View>
          </GradientBackgroundSkia>

          {/* Rounded corners */}
          <GradientBackgroundSkia
            colors={["#84FAB0", "#8FD3F4"]}
            borderRadius={20}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Rounded Corners</Text>
            </View>
          </GradientBackgroundSkia>

          {/* Custom border radius for each corner */}
          <GradientBackgroundSkia
            colors={["#FFD1FF", "#FAD0C4"]}
            borderTopLeftRadius={30}
            borderTopRightRadius={10}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={30}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Custom Border Radius</Text>
            </View>
          </GradientBackgroundSkia>

          {/* Three color gradient */}
          <GradientBackgroundSkia
            colors={["#FF6B6B", "#4ECDC4", "#45B7D1"]}
            style={styles.gradient}
          >
            <View style={styles.textContainer}>
              <Text style={styles.text}>Three Color Gradient</Text>
            </View>
          </GradientBackgroundSkia>
        </SafeAreaView>
      </GradientBackgroundSkia>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullGradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 16,
  },
  gradient: {
    height: 85,
    margin: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
