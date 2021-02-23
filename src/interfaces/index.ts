import { ViewProps } from "react-native";

export interface HeaderProps extends ViewProps {
    showCancel?: boolean;
    title: string;
}