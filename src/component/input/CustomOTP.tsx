import * as React from "react";
import { useRef } from "react";
import { TextInput, View } from "react-native";
import CustomInput from ".";

export interface IOTPInputProps {
  otpCodeChanged: (otpCode: string) => void;
  numberOfInputs?: number;
}

export function CustomOTP(props: IOTPInputProps) {
  const { otpCodeChanged, numberOfInputs } = props;
  const NUMBER_OF_INPUTS = numberOfInputs || 4;
  const [values, setValues] = React.useState<string[]>(
    new Array(NUMBER_OF_INPUTS).fill("").map(() => "")
  );
  const itemsRef = useRef<Array<TextInput | null>>([]);

  const [lastKeyEventTimeStamp, setLastKeyEventTimeStamp] = React.useState<
    number | null
  >(null);

  const applyOTPCodeToInputs = (code: string) => {
    // split up code and apply it to all inputs
    const codeArray = code.split("");
    codeArray.forEach((char, index) => {
      const input = itemsRef.current[index];
      if (input) {
        input.setNativeProps({
          text: char,
        });
      }
    });
    // focus on last input as a cherry on top
    const lastInput = itemsRef.current[itemsRef.current.length - 1];
    if (lastInput) {
      lastInput.focus();
      otpCodeChanged(code);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 16,
      }}
    >
      {Array.from({ length: NUMBER_OF_INPUTS }, (_, index) => (
        <CustomInput
          inputContainerStyle={{
            width: 65,
          }}
          containerStyle={{ width: 65 }}
          inputStyle={{ textAlign: "center", fontSize: 50 }}
          ref={(el: any) => (itemsRef.current[index] = el)}
          key={index}
          keyboardType={"numeric"}
          //   placeholder={"X"}
          value={values[index]}
          defaultValue=""
          // first input can have a length of NUMBER_OF_INPUTS because they paste their code into it
          maxLength={index === 0 ? NUMBER_OF_INPUTS : 1}
          onChange={(event) => {
            const { text } = event.nativeEvent;

            // only continue one if we see a text of length 1 or NUMBER_OF_INPUTS
            if (
              text.length === 0 ||
              text.length === 1 ||
              text.length === NUMBER_OF_INPUTS
            ) {
              if (text.length === NUMBER_OF_INPUTS) {
                applyOTPCodeToInputs(text);
                return;
              }
              // going forward, only if text is not empty
              if (text.length === 1 && index !== NUMBER_OF_INPUTS - 1) {
                const nextInput = itemsRef.current[index + 1];
                if (nextInput) {
                  nextInput.focus();
                }
              }
            }

            // determine new value
            const newValues = [...values];
            newValues[index] = text;

            // update state
            setValues(newValues);

            // also call callback as a flat string
            otpCodeChanged(newValues.join(""));
          }}
          onKeyPress={(event) => {
            if (event.nativeEvent.key === "Backspace") {
              if (
                lastKeyEventTimeStamp !== null &&
                Math.abs(lastKeyEventTimeStamp - event.timeStamp) < 100
              )
                return;
              const newValues = [...values];
              newValues[index] = "";
              // update state
              setValues(newValues);
              // also call callback as a flat string
              otpCodeChanged(newValues.join(""));
              // going backward:
              if (index !== 0) {
                const previousInput = itemsRef.current[index - 1];
                if (previousInput) {
                  previousInput.focus();
                  return;
                }
              }
            } else {
              setLastKeyEventTimeStamp(event.timeStamp);
            }
          }}
          textContentType="oneTimeCode"
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
}
