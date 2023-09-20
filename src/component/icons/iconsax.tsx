import { useTheme } from "@rneui/themed";
import {
  ArrowLeft,
  ArrowRight,
  IconProps,
  LoginCurve,
} from "iconsax-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomLoginCurve: React.FC<IconProps> = (props) => {
  const { theme } = useTheme();
  return (
    <LoginCurve
      variant="Linear"
      color={theme.colors.white}
      {...props}
      style={[props.style, { position: "absolute", right: 20 }]}
    />
  );
};

export const CustomArrowRight: React.FC<IconProps> = (props) => {
  const { theme } = useTheme();
  return (
    <ArrowRight
      variant="Linear"
      color={theme.colors.white}
      {...props}
      style={[props.style, { position: "absolute", right: 20 }]}
    />
  );
};

export const GoBack: React.FC<IconProps> = (props) => {
  const { theme } = useTheme();
  const { top } = useSafeAreaInsets();
  return (
    <ArrowLeft
      variant="Linear"
      color={theme.colors.textPrimary}
      // size={70}
      {...props}
      style={[props.style, { position: "absolute", left: 0, top: top + 8 }]}
    />
  );
};
