import React, { PropsWithChildren, PureComponent } from "react";
import CustomText from "../text";

type ErrorProps = {
  errorComponent?: React.ReactElement;
};

type ErrorState = {
  hasError: boolean;
  error: string | object;
  errorInfo: string | object;
};

export class ErrorBoundary extends PureComponent<
  PropsWithChildren<ErrorProps>,
  ErrorState
> {
  constructor(props: ErrorProps) {
    super(props);

    this.state = {
      hasError: false,

      error: "",

      errorInfo: "",
    };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: object, errorInfo: object) {
    console.error("Error: " + error);

    console.error("Error Info: " + JSON.stringify(errorInfo));

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent || <CustomText>Error...</CustomText>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
