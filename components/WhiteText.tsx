import { Text } from "react-native";

type WhiteTextProps = {
    text: string;
    altColor?: string;
    children?: React.ReactNode;
}

const WhiteText = ({text, altColor, children}: WhiteTextProps) => {
    return (
        <Text style={{ color: altColor || 'white'}}>
            {text}
            {children}
        </Text>
    );
};

export default WhiteText;