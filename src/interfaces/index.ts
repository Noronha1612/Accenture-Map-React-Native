import { ViewProps } from "react-native";

export interface HeaderProps extends ViewProps {
    showCancel?: boolean;
    title: string;
}

export interface AccenturePoint {
  id: number,
  name: string,
  country: string,
  state: string,
  city: string,
  profile: string,
  latitude: number,
  longitude: number,
  address: {
    street: string,
    complement: string,
    number: string,
    zipCode: string
  },
  describle: string,
  contactURL: string
}

export interface IInitialMarker {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface GetUnit {
  id: number;
}