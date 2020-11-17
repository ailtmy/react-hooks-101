import { combineReducers } from "redux";

import events from "./events";
import operationLogs from "./operationLogs.js";

export default combineReducers({ events, operationLogs });
