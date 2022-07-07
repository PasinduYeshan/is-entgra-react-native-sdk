// import { Platform } from 'react-native';

// const LINKING_ERROR =
//   `The package 'is-entgra-react-native-sdk' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo managed workflow\n';

import { getDeviceID, getDeviceAttributes, syncDevice, enrollDevice, disenrollDevice } from "./entgraService";

export {getDeviceID, getDeviceAttributes, syncDevice, enrollDevice, disenrollDevice};