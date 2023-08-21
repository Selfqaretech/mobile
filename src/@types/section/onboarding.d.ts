import { IconProps } from "iconsax-react-native";

export type OnboardingSectionProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonIcon: React.ReactElement;
  onPrimaryButtonPressed: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonPressed?: () => void;
  secondaryContent?: React.ReactElement;
  totalScreens: number;
  activeIndicator: number;
  goBack?: () => void;
  animateIndicatorBack?: boolean;
};

export type OnboardingItemsProps = {
  image: string;
  title: string;
  body: string;
  primaryButton: string;
  primaryIcon: (props: IconProps) => React.ReactElement;
  secondaryButton?: string;
  secondaryAction?: (action?: () => void) => React.ReactElement;
};
