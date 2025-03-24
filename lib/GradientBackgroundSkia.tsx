import {
  Canvas,
  Group,
  Path,
  Skia,
  TileMode,
  vec,
} from "@shopify/react-native-skia";
import React, { useMemo, useState } from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface GradientBackgroundSkiaProps {
  style?: StyleProp<ViewStyle>;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  children?: React.ReactNode;
}

const GradientBackgroundSkia: React.FC<GradientBackgroundSkiaProps> = ({
  style,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  borderRadius = 0,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  children,
  ...rest
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width: w, height: h } = event.nativeEvent.layout;
    setWidth(w);
    setHeight(h);
  };

  // Calculate individual corner radii
  const topLeft =
    borderTopLeftRadius !== undefined ? borderTopLeftRadius : borderRadius;
  const topRight =
    borderTopRightRadius !== undefined ? borderTopRightRadius : borderRadius;
  const bottomRight =
    borderBottomRightRadius !== undefined
      ? borderBottomRightRadius
      : borderRadius;
  const bottomLeft =
    borderBottomLeftRadius !== undefined
      ? borderBottomLeftRadius
      : borderRadius;

  const path = useMemo(() => {
    if (width === 0 || height === 0) return null;

    const path = Skia.Path.Make();

    // Draw rounded rectangle manually since addRRect doesn't support array radii
    path.moveTo(topLeft, 0);
    path.lineTo(width - topRight, 0);
    path.quadTo(width, 0, width, topRight);
    path.lineTo(width, height - bottomRight);
    path.quadTo(width, height, width - bottomRight, height);
    path.lineTo(bottomLeft, height);
    path.quadTo(0, height, 0, height - bottomLeft);
    path.lineTo(0, topLeft);
    path.quadTo(0, 0, topLeft, 0);
    path.close();

    return path;
  }, [width, height, topLeft, topRight, bottomRight, bottomLeft]);

  const paint = useMemo(() => {
    if (width === 0 || height === 0) return null;

    // Convert string colors to Skia colors
    const skiaColors = colors.map((color) => Skia.Color(color));

    const startPoint = vec(start.x * width, start.y * height);
    const endPoint = vec(end.x * width, end.y * height);

    const p = Skia.Paint();
    const shader = Skia.Shader.MakeLinearGradient(
      startPoint,
      endPoint,
      skiaColors,
      null,
      TileMode.Clamp,
    );
    p.setShader(shader);
    return p;
  }, [width, height, colors, start, end]);

  return (
    <View style={style} onLayout={onLayout} {...rest}>
      {width > 0 && height > 0 && path && paint && (
        <Canvas style={StyleSheet.absoluteFill}>
          <Group>
            <Path path={path} paint={paint} />
          </Group>
        </Canvas>
      )}

      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        {children}
      </View>
    </View>
  );
};

export default GradientBackgroundSkia;
